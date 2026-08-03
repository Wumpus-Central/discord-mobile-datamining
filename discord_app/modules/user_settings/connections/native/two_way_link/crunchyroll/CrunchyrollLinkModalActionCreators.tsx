let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4461);
    obj = { locationStack };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(9170, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4461).popWithKey(c3);
  }
};