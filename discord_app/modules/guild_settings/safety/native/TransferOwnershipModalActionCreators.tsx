// === Module 11640: ? ===

// Module 11640
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4723 from "module_4723" /* 4723 */;

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = set.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = _modDef4723;
    obj = { guild, toUser };
    obj.pushLazy(asyncRequireImpl(11641, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    dispatcherDefault.wait(() => {
      callback(table[0]).popWithKey(closure_3);
    });
  }
};