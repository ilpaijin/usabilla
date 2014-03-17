<?php

namespace Ilpaijin\Demopack;

use Illuminate\Support\Facades\Log;
use Ilpaijin\Demopack\Contracts\LoaderInterface;

/**
* ResourceLoader class
*
* @package default
* @author ilpaijin <ilpaijin@gmail.com>
*/
class ResourceLoader implements LoaderInterface
{
    /**
     * @inheritDoc
     * 
     * @return [type] [description]
     */
    public function get($endpoint)
    {
        $taken = ($payload = $this->load($endpoint)) ? true: false;

        Log::debug("Log: Ilpaijin\Demopack\ResourceLoader", array('resource found', $taken));

        if(!$taken)
        {
            throw new \Exception('Resource not found');
        }

        return $payload;
    }

    /**
     * Simple implementation, it's possible to consider alternatives as Curl, Guzzle, Stream Wrapper or Sockets. 
     * Even Gearman for decoupling the process, and probably this entire service should live decoupled in a separate env.  
     * 
     * @param  [type] $endpoint [description]
     * @return [type]           [description]
     */
    public function load($endpoint)
    {
        return json_decode(file_get_contents($endpoint), true);
    }
}