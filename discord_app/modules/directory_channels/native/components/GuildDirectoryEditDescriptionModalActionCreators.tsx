// discord_app/modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx
let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    require("../../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11599, dependencyMap.paths), closure_0, c3);
  },
  close() {
    require("../../../../actions/ModalActionCreators.tsx").popWithKey(c3);
  }
};