// discord_app/modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx
import { asyncRequireImpl } from "../../../../../_runtime/01988_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
import { dispatcher } from "../../../../Dispatcher.tsx";
const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = ModalActionCreators;
    obj = { guild, toUser };
    obj.pushLazy(asyncRequireImpl(11163, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    dispatcher.wait(() => {
      callback(table[0]).popWithKey(closure_3);
    });
  }
};