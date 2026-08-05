import { asyncRequireImpl } from "../../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
import { dispatcher } from "../../../../Dispatcher.tsx";
// discord_app/modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx
const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = ModalActionCreators;
    obj = { guild, toUser };
    obj.pushLazy(asyncRequireImpl /* asyncRequireImpl */(11157, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    dispatcher.wait(() => {
      callback(table[0]).popWithKey(closure_3);
    });
  }
};