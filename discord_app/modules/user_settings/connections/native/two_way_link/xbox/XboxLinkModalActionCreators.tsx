// === Module 6906: XboxLinkModalActionCreators ===

// Module 6906 (XboxLinkModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let flag = obj.startAtSignIn;
    if (flag === undefined) {
      flag = false;
    }
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(6907, dependencyMap.paths), { locationStack, startAtSignIn: flag }, c3);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(c3);
  }
};