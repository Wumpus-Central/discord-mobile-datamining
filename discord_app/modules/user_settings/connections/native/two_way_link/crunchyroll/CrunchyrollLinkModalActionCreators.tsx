// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx
let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = require("../../../../../../actions/ModalActionCreators.tsx");
    obj = { locationStack };
    obj.pushLazy(require("../../../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(10484, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    require("../../../../../../actions/ModalActionCreators.tsx").popWithKey(c3);
  }
};