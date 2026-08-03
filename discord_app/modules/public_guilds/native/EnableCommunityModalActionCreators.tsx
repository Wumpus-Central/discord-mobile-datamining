// === Module 16590: ? ===

// Module 16590
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    importDefault(4461).pushLazy(require(1959) /* asyncRequireImpl */(16591, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    importDefault(4461).popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};