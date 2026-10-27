// === Module 12803: TransferOwnershipModalActionCreators ===

// Module 12803 (TransferOwnershipModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12804, dependencyMap.paths), { guild, toUser }, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(TRANSFER_OWNERSHIP_MODAL_KEY);
  }
};