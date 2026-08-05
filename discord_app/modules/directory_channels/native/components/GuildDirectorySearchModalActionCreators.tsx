// discord_app/modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    require("../../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11585, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    require("../../../../actions/ModalActionCreators.tsx").popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};