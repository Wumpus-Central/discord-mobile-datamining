// === Module 9317: ? ===

// Module 9317
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4724 from "module_4724" /* 4724 */;

let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = _modDef4724;
    obj = { locationStack };
    obj.pushLazy(asyncRequireImpl(9318, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4724.popWithKey(c3);
  }
};