// discord_app/modules/public_guilds/native/EnableCommunityModalActionCreators.tsx
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    require("../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(16622, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    require("../../../actions/ModalActionCreators.tsx").popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};