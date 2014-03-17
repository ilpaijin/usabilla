<?php

namespace Ilpaijin\Demopack\Models\Resources;

use Illuminate\Support\Facades\Config;

/**
* ResourceAbstract class
*
* @package default
* @author ilpaijin <ilpaijin@gmail.com>
*/
abstract class ResourceAbstract 
{
    /**
     * [$data description]
     * 
     * @var [type]
     */
    protected $data;

    /**
     * [$schema description]
     * 
     * @var [type]
     */
    protected $schema; 
    
    /**
     * [__construct description]
     * 
     * @param [type] $data [description]
     */
    public function __construct($data)
    {
        $slb_class = substr(get_called_class(), (strlen(__NAMESPACE__)+1));

        $this->schema = Config::get("demopack::views_schema.{$slb_class}");

        if($this->schema)
        {
            $this->data = $this->setData($data);
        } else
        {
            $this->data = $data;
        }
    }

    /**
     * [getBySchema description]
     * 
     * @return [type] [description]
     */
    abstract function getData();
}