let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = importDefault(4399);
    obj = { locationStack, platformType };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(8976, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4399).popWithKey(c3);
  }
};