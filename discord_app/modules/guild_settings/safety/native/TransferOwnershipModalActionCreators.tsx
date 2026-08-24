// === Module 11024: ? ===

// Module 11024
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = set.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = _modDef5260;
    obj = { guild, toUser };
    obj.pushLazy(asyncRequireImpl(11025, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    dispatcherDefault.wait(() => {
      callback(table[0]).popWithKey(closure_3);
    });
  }
};