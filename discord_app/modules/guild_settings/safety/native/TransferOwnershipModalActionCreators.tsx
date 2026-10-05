// discord_app/modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
let obj = {
  open(guild, toUser) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { guild, toUser };
    obj.pushLazy(asyncRequire(11457, dependencyMap.paths), obj2, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(TRANSFER_OWNERSHIP_MODAL_KEY);
    });
  },
};
const result = size.fileFinishedImporting(
  "modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx",
);

export default obj;
