// === Module 9750: ? ===

// Module 9750
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;

let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = obj132.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    const obj = { locationStack };
    obj.pushLazy(asyncRequireImpl(9751, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef5260.popWithKey(c3);
  }
};