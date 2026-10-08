// === Module 12029: GuildDirectoryEditDescriptionModalActionCreators ===

// Module 12029 (GuildDirectoryEditDescriptionModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(merged) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12030, dependencyMap.paths), merged, c3);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(c3);
  }
};