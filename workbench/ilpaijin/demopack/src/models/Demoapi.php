<?php

namespace Ilpaijin\Models;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Cache;
use Ilpaijin\Demopack\Contracts\ResourcerInterface;
use Ilpaijin\Demopack\Contracts\LoaderInterface;
use Ilpaijin\Demopack\Models\Resources\ResourceFactory;

/**
* Demopack class
*
* @package default
* @author ilpaijin <ilpaijin@gmail.com>
*/
class Demoapi implements ResourcerInterface
{
    /**
     * [$cache_duration description]
     * @var string
     */
    private $cache_duration = '10'; // minutes
    
    /**
     * [$loader description]
     * 
     * @var [type]
     */
    private $loader;

    /**
     * [__construct description]
     * 
     * @param LoaderInterface $loader [description]
     */
    public function __construct(LoaderInterface $loader)
    {
        $this->loader = $loader;
    }

    /**
     * @inheritDoc
     * 
     * @return [type] [description]
     */
    public function getResource($resourceType)
    {

        $data = Cache::remember(Config::get('demopack::paths.local').$resourceType, $this->cache_duration, function()
        {
            return $this->loader->get(Config::get('demopack::paths.network'));
        });

        return ResourceFactory::build($data, $resourceType);
    }
}