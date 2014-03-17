<?php

return array(
    'paths' => array(
        'local' => 'apidemo', 
        'network' => 'https://s3.amazonaws.com/usabilla-cdn/example/apidemo.json'
    ),
    'views_schema' => array(
        'View1Resource' => array(
            'computed_browser' => array(
                'Browser' => '',
                'Version'=> '',
                'Platform' => ''
            ), 
            'geo' => '',
            'rating' => '',
            'labels' => '',
            'id' => '',
        ), 
    )   
);