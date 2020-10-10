<?php
/**
 * Plugin Name:       WPC Editorial Notes
 * Plugin URI:        https://github.com/bosconian-dynamics/wpc-editorial-notes
 * Description:       Adds a basic section for notes to the Document Settings sidebar in the Block Editor. Notes are stored in post meta.
 * Version:           0.2.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Adam Bosco <wordpress@adambos.co>
 * License:           MIT
 */
namespace BosconianDynamics\WPCEditorialNotes;

require_once __DIR__ . '/vendor/autoload.php';

\Puc_v4_Factory::buildUpdateChecker(
	'https://github.com/bosconian-dynamics/wpc-editorial-notes/',
	__FILE__,
	'wpc-editorial-notes'
);

function register_assets() {
  $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

  wp_register_script(
    'wpc-editorial-notes_editor-plugin',
    plugins_url( 'build/index.js', __FILE__ ),
    $asset_file['dependencies'],
    $asset_file['version']
  );
}
add_action( 'init', __NAMESPACE__ . '\\register_assets' );

function register_meta() {
  register_post_meta(
    'post',
    'wpc_editorial_notes',
    [
      'show_in_rest' => true,
      'single' => true,
      'type' => 'string',
      'auth_callback' => function() {
        return current_user_can( 'edit_posts' );
      }
    ]
  );
}
add_action( 'init', __NAMESPACE__ . '\\register_meta' );
 
function enqueue_editor_assets() {
    wp_enqueue_script( 'wpc-editorial-notes_editor-plugin' );
    wp_enqueue_style( 'wp-components' );
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_editor_assets' );
