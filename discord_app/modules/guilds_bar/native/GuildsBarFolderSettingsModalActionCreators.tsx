// === Module 15791: showGuildsBarFolderModal ===

// Module 15791 (showGuildsBarFolderModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = set.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = _modDef4676;
  obj = { folderId: closure_0 };
  obj.pushLazy(asyncRequireImpl(15792, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  _modDef4676.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};