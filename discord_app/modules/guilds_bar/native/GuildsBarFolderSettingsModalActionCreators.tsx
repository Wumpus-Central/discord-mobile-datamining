// discord_app/modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4611 from "../../../actions/ModalActionCreators.tsx";

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = set.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = _modDef4611;
  obj = { folderId: closure_0 };
  obj.pushLazy(asyncRequireImpl(15649, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  _modDef4611.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};