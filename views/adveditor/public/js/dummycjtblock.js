/**
* 
*/

var CJTBlockPluginBase;

/**
* 
*/
(function($) {
	
	/**
	* 
	*/
	CJTBlockPluginBase = function() {
		
		/**
		* put your comment there...
		* 
		*/
		var selectedThemeName;
		
		/**
		* 
		*/
		this.load = function() {
			// Initialize
			var regularEditor = $('#newcontent');
			// Add ACE Editor div instead of textarea
			var editorElement = $('<div class="cjt-toolbox" id="cjteape-newcontent"></div>').html(regularEditor.html());
			// Dummy Block box
			var blockBox = $('<span id="dummy-block-container"></span>').append(editorElement).insertBefore(regularEditor);
			// Clear regular editor
			regularEditor.empty();
			// Turns into ACE Editor
			this.editor = ace.edit('cjteape-newcontent');
			// Getting file type
			var fileName = $('#template').find('input[name="file"]').val();
			var fileExtension = fileName.substring(fileName.length - 3);
			// Set options
			this.editor.getSession().setMode('ace/mode/' + fileExtension);
			// Theme object
			this.theme = {};
			// Create Dummy Block AcEditor
			this.block = new (function(advEditor) {
				
				/**
				* 
				*/
				this.aceEditor = advEditor.editor;
				
				/**
				* 
				*/
				this.box = blockBox;
		
				/**
				* 
				*/
				this.get = function(propName, defaultValue) {
					// Initialize
					value = undefined;
					// Get property value
					switch (propName) {
						case 'editorTheme':
							value = selectedThemeName ? selectedThemeName : defaultValue;
						break;
					}
					return value;
				};

				/**
				* 
				*/
				this.set = function(propName, value) {
					// Get property value
					switch (propName) {
						case 'editorTheme':
							selectedThemeName = value;
						break;
					}
				};
		
			})(this);
		
			// Create Editor toolbox markup
			$('<div class="cjt-toolbox editor-toolbox"><div class="icons-group"></div></div>').insertBefore(editorElement);
			
			/**
			* 
			*/
			this.editorToolbox = this.block.box.find('.editor-toolbox').CJTToolBox({
				context : this,
				handlers : {}
			}).get(0).CJTToolBox;
		
			// Set fil content before form submission
			$('#submit').click($.proxy(
				function() {
					// Fill regular editor
					regularEditor.text(this.editor.getSession().getValue());
				}, this)
			);
		
		};
		
	};
	
})(jQuery);