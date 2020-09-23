import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';

//import { registerPlugin } from '@wordpress/plugins';
import { more } from '@wordpress/icons';

import Sidebar from '/components/Sidebar';
 
registerPlugin(
  'wpc-editorial-notes',
  {
    icon: more,
    render: Sidebar
  }
);