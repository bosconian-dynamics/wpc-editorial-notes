import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

import NoteEditor from './NoteEditor';

const Sidebar = () => (
  <>
    <PluginDocumentSettingPanel
      name="sidebar-wpc-editorial-notes"
      title="Editorial Notes"
      icon="edit-page"
    >
      <NoteEditor />
    </PluginDocumentSettingPanel>
  </>
);

export default Sidebar;