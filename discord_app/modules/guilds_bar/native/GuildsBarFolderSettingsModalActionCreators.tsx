// === Module 16288: GuildsBarFolderSettingsModalActionCreators ===

// Module 16288 (GuildsBarFolderSettingsModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import size from "module_2" /* 2 */;

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(folderId) {
  const obj = { folderId };
  obj.pushLazy(asyncRequireImpl(16289, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  ModalActionCreatorsDefault.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};