// === Module 12578: TransferOwnershipModalActionCreators ===

// Module 12578 (TransferOwnershipModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12579, dependencyMap.paths), { guild, toUser }, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(TRANSFER_OWNERSHIP_MODAL_KEY);
  }
};