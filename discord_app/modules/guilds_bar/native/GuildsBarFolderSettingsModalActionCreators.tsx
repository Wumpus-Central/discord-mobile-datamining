// === Module 17868: GuildsBarFolderSettingsModalActionCreators ===

// Module 17868 (GuildsBarFolderSettingsModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export function showGuildsBarFolderModal(folderId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17869, dependencyMap.paths), { folderId }, GUILD_FOLDER_SETTINGS_MODAL_KEY);
}
export function hideGuildsBarFolderModal() {
  ModalActionCreatorsDefault.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
}