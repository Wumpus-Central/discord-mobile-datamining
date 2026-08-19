// discord_app/modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../actions/ModalActionCreators.tsx";

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = obj132.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  const obj = { folderId: closure_0 };
  obj.pushLazy(asyncRequireImpl(15552, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  _modDef5260.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};