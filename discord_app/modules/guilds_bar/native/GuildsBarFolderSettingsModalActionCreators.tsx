// discord_app/modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx
const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = require("../../../actions/ModalActionCreators.tsx");
  obj = { folderId: closure_0 };
  obj.pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(15285, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  require("../../../actions/ModalActionCreators.tsx").popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};