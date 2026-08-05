// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx
let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = require("../../../../../../actions/ModalActionCreators.tsx");
    obj = { locationStack, platformType };
    obj.pushLazy(require("../../../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(10473, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    require("../../../../../../actions/ModalActionCreators.tsx").popWithKey(c3);
  }
};