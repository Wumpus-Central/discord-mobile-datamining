// === Module 10065: ? ===

// Module 10065
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    importDefault(4399).pushLazy(require(1959) /* asyncRequireImpl */(10066, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    importDefault(4399).popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};