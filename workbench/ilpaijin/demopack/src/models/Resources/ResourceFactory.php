<?php

namespace Ilpaijin\Demopack\Models\Resources;

/**
* ResourceFactory class
*
* @package default
* @author ilpaijin <ilpaijin@gmail.com>
*/
class ResourceFactory
{
    /**
     * [$instances description]
     * 
     * @var array
     */
    public static $instances = array();

    /**
     * [build description]
     * 
     * @param  [type] $resource [description]
     * @param  [type] $type     [description]
     * @return [type]           [description]
     */
    public static function build($rawData, $type)
    {
        if(isset(static::$instances[$type]))
        {
            return static::$instances[$type];
        }

        return static::$instances[$type] = static::buildNew($rawData, $type);
    }

    /**
     * [buildNew description]
     * 
     * @param  [type] $class   [description]
     * @param  [type] $rawData [description]
     * @return [type]          [description]
     */
    public static function buildNew($rawData, $type)
    {
        $class = __NAMESPACE__ ."\\" . ucfirst($type).'Resource';

        if(!class_exists($class))
        {
            throw new \Exception($class . ' not defined');
        }

        return new $class($rawData);
    }
}