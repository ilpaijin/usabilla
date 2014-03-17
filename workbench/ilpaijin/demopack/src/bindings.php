<?php

App::bind('Ilpaijin\Demopack\Contracts\ResourcerInterface', 'Ilpaijin\Models\Demoapi');

App::bind('Ilpaijin\Demopack\Contracts\LoaderInterface', 'Ilpaijin\Demopack\ResourceLoader');

