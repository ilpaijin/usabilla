<?php namespace Ilpaijin\Demopack;

use Illuminate\Support\ServiceProvider;

class DemopackServiceProvider extends ServiceProvider {

	/**
	 * Indicates if loading of the provider is deferred.
	 *
	 * @var bool
	 */
	protected $defer = false;

	/**
	 * Bootstrap the application events.
	 *
	 * @return void
	 */
	public function boot()
	{
		$this->package('ilpaijin/demopack');

		include(__DIR__.'/../../routes.php');
		include(__DIR__.'/../../bindings.php');

		$this->app->booting(function()
		{
		  $loader = \Illuminate\Foundation\AliasLoader::getInstance();
		  $loader->alias('Demopack', 'Ilpaijin\Demopack');
		});
	}

	/**
	 * Register the service provider.
	 *
	 * @return void
	 */
	public function register()
	{
		$this->app['demopack'] = $this->app->share(function($app)
		{
			return new Demopack;
		});
	}

	/**
	 * Get the services provided by the provider.
	 *
	 * @return array
	 */
	public function provides()
	{
		return array('demopack');
	}

}
