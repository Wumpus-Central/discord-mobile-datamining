// === Module 12407: GuildDirectoryEditDescriptionModalActionCreators ===

// Module 12407 (GuildDirectoryEditDescriptionModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(merged) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12408, dependencyMap.paths), merged, c3);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(c3);
  }
};