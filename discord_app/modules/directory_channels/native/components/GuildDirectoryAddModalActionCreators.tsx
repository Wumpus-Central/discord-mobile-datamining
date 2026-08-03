// === Module 10073: ? ===

// Module 10073
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4399).pushLazy(require(1959) /* asyncRequireImpl */(10074, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    importDefault(4399).popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};