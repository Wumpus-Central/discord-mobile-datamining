// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx
let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = require("../../../../../../actions/ModalActionCreators.tsx");
    obj = { locationStack };
    obj.pushLazy(require("../../../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(10408, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    require("../../../../../../actions/ModalActionCreators.tsx").popWithKey(c3);
  }
};