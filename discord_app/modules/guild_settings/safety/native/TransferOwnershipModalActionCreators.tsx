// discord_app/modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx
const TRANSFER_OWNERSHIP_MODAL_KEY = "TRANSFER_OWNERSHIP_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModalActionCreators.tsx");

export default {
  open(guild, toUser) {
    let obj = require("../../../../actions/ModalActionCreators.tsx");
    obj = { guild, toUser };
    obj.pushLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11157, dependencyMap.paths), obj, TRANSFER_OWNERSHIP_MODAL_KEY);
  },
  close() {
    require("../../../../Dispatcher.tsx").wait(() => {
      callback(table[0]).popWithKey(closure_3);
    });
  }
};