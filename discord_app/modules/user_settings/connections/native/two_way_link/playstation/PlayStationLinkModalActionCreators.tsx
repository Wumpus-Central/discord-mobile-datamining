// === Module 9152: ? ===

// Module 9152
let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(4461);
    obj = { locationStack, platformType };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(9153, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4461).popWithKey(c3);
  }
};