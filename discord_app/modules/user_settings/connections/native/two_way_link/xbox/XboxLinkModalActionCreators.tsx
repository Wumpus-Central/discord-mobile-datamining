// === Module 9789: ? ===

// Module 9789
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef5265 from "module_5265" /* 5265 */;

let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = _modDef5265;
    obj = { locationStack };
    obj.pushLazy(asyncRequireImpl(9790, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef5265.popWithKey(c3);
  }
};