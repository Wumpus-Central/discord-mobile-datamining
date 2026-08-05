import { asyncRequireImpl } from "../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
// discord_app/modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx
const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = ModalActionCreators;
  obj = { folderId: closure_0 };
  obj.pushLazy(asyncRequireImpl /* asyncRequireImpl */(15285, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  ModalActionCreators.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};