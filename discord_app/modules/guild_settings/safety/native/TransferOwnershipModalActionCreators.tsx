// === Module 11844: TransferOwnershipModalActionCreators ===

// Module 11844 (TransferOwnershipModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import size from "module_2" /* 2 */;

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    const obj = { guild, toUser };
    obj.pushLazy(asyncRequireImpl(11845, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    DispatcherDefault.wait(() => {
      ModalActionCreatorsDefault.popWithKey(TRANSFER_OWNERSHIP_MODAL_KEY);
    });
  }
};