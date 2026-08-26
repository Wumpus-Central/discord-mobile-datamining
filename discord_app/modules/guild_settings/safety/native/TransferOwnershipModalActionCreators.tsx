// discord_app/modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import dispatcherDefault from "../../../../Dispatcher.tsx";
import asyncRequireImpl from "../../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4675 from "../../../../actions/ModalActionCreators.tsx";

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = set.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = _modDef4675;
    obj = { guild, toUser };
    obj.pushLazy(asyncRequireImpl(11478, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    dispatcherDefault.wait(() => {
      callback(table[0]).popWithKey(closure_3);
    });
  }
};