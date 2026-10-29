// === Module 13071: TransferOwnershipModalActionCreators ===

// Module 13071 (TransferOwnershipModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13072, dependencyMap.paths), { guild, toUser }, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(TRANSFER_OWNERSHIP_MODAL_KEY);
  }
};