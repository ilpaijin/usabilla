<?php

namespace Ilpaijin\Demopack\Controllers;

use Illuminate\Support\Facades\View;
use Ilpaijin\Demopack\Contracts\ResourcerInterface;

/**
* Demopack class
*
* @package default
* @author ilpaijin <ilpaijin@gmail.com>
*/
class DemopackController extends \Controller
{
    /**
     * [$resourcer description]
     * 
     * @var [type]
     */
    private $resourcer;

    /**
     * [__construct description]
     * 
     * @param IlpaijinDemopackDemopackable $resourcer [description]
     */
    public function __construct(ResourcerInterface $resourcer)
    {
        $this->resourcer = $resourcer;
    }

    /**
     * [index description]
     * 
     * @return [type] [description]
     */
    public function show()
    {
        $resource = $this->resourcer->getResource('view1');

        return View::make('demopack::index', array(
            'data' => $resource->getData(),
            'average' => $resource->getAverageRating(),
            'itemsPerRating' => $resource->countItemsPerRating()
            ));
    }
}