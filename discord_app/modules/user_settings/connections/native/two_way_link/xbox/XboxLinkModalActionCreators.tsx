let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = importDefault(4399);
    obj = { locationStack };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(8941, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    importDefault(4399).popWithKey(c3);
  }
};