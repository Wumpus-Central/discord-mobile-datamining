// === Module 16110: showGuildsBarFolderModal ===

// Module 16110 (showGuildsBarFolderModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4723 from "module_4723" /* 4723 */;

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = set.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = _modDef4723;
  obj = { folderId: closure_0 };
  obj.pushLazy(asyncRequireImpl(16111, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  _modDef4723.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};