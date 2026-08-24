// discord_app/modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import dispatcherDefault from "../../../../Dispatcher.tsx";
import asyncRequireImpl from "../../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../../actions/ModalActionCreators.tsx";

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