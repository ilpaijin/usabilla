<?php

namespace Ilpaijin\Demopack\Models\Resources;

use Illuminate\Support\Facades\Config;

/**
* View1Resource class.
*
* Maybe this class should implements VO criteria, instead of current runtime initialization. 
* Even better to use it with repository pattern.
*
* @package default
* @author ilpaijin <ilpaijin@gmail.com>
*/
class View1Resource extends ResourceAbstract
{
    /**
     * [filter description]
     * 
     * @param  [type] $data   [description]
     * @param  [type] $schema [description]
     * @return [type]         [description]
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * [sortByRating description]
     * 
     * @return [type] [description]
     */
    public function getAverageRating()
    {
        $average = 0;

        array_walk($this->data, function($item, $ndex) use (&$average)
        {
            $average += $item['rating'];
        });

        return $average / count($this->data);
    }

    /**
     * [countItemsPerRating description]
     * 
     * @return [type] [description]
     */
    public function countItemsPerRating()
    {
        $counts = array();

        foreach($this->data as $item)
        {
            if(!isset($counts[$item['rating']]))
            {
                $counts[$item['rating']] = 0;
            }

            $counts[$item['rating']]++;
        }

        krsort($counts);

        return $counts;
    }

    /**
     * [setData description]
     * 
     * @param [type] $data [description]
     */
    public function setData($data)
    {
        return array_map(function($item)
        {
            return array_intersect_key($item, $this->schema);
        }, $data['items']);
    }
}