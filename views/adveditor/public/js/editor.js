/**
* 
*/

/**
* 
*/
(function($) {
	
	/**
	* Dummy Code File View!
	* 
	* @type T_JS_FUNCTION
	*/
	CJTBlockCodeFileView = new function() {

		/**
		* 
		*/
		this.applyTheme = function() {;}
		
	};

	/**
	* put your comment there...
	* 
	* @type T_JS_FUNCTION
	*/
	CJTEAdvancedPluginsEditor = new function() {
		
		/**
		* 
		*/
		this.initialize = function() {
			// Create Dummy Block
			this.block = new CJTBlockPluginBase();
			// Load Extensions cheated by Dummy Block!
			this.block.load();
		};

	};
	
	$($.proxy(CJTEAdvancedPluginsEditor.initialize, CJTEAdvancedPluginsEditor));
	
})(jQuery);