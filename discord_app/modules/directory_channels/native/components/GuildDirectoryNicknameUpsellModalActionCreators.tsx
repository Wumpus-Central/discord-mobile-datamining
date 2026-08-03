let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4461).pushLazy(require(1959) /* asyncRequireImpl */(11872, dependencyMap.paths), closure_0, c3);
  },
  close() {
    importDefault(4461).popWithKey(c3);
  }
};