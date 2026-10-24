// === Module 9610: XboxLinkModalActionCreators ===

// Module 9610 (XboxLinkModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9611, dependencyMap.paths), { locationStack }, c3);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(c3);
  }
};