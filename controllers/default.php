<?php
/**
* @version $ Id; ?FILE_NAME ?DATE ?TIME ?AUTHOR $
*/

// Disallow direct access.
defined('ABSPATH') or die("Access denied");

// import dependencies.
cssJSToolbox::import('framework:mvc:controller-ajax.inc.php');

/**
* 
* DESCRIPTION
* 
* @author ??
* @version ??
*/
class CJTEAPEDefaultController extends CJTAjaxController {
	
	/**
	* 
	* Initialize new object.
	* 
	* @return void
	*/
	public function __construct($hasView = null, 
															$request = null, 
															$overrideControllerPath = null, 
															$overrideContollerPrefix = null) {
		// Initialize parent!
		parent::__construct($hasView, $request, $overrideControllerPath, $overrideContollerPrefix);
		// Add actions.
		$this->registryAction('downloadFile');
	}
	
	/**
	* put your comment there...
	* 
	*/
	public function downloadFileAction() {
		# File to download
		$file = $_GET['file'];
		$folderKey = $_GET['folder'];
		$folders = array(
			'theme' => (WP_CONTENT_DIR . DIRECTORY_SEPARATOR . 'themes'), 
			'plugin' => WP_PLUGIN_DIR
			);
		# Jails the request inside only theme and plugin folders
		if (isset($folders[$folderKey])) {
			# Get request file path
			$filePath = $folders[$folderKey] . DIRECTORY_SEPARATOR . $file;
			# Set headers.
			$this->httpContentType = 'application/octet-stream';
			header('Content-Description: File Transfer');
			header('Content-Disposition: attachment; filename=' . basename($file) . '');
			header('Content-Transfer-Encoding: binary');
			header("Content-Length: " . filesize($filePath));
			# Sending for download.
			$this->response = file_get_contents($filePath);			
		}
	}

}