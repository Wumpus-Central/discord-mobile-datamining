// discord_app/modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = size.fileFinishedImporting(
  "modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx",
);

export default {
  open(guild, toUser) {
    const obj = { guild, toUser };
    obj.pushLazy(asyncRequireImpl(11845, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    DispatcherDefault.wait(() => {
      ModalActionCreatorsDefault.popWithKey(TRANSFER_OWNERSHIP_MODAL_KEY);
    });
  },
};
