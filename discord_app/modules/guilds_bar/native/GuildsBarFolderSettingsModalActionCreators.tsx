// === Module 15251: showGuildsBarFolderModal ===

// Module 15251 (showGuildsBarFolderModal)
const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = importDefault(4461);
  obj = { folderId: closure_0 };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(15252, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  importDefault(4461).popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};