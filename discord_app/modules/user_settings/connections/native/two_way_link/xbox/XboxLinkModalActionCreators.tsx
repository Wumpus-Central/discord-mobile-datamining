// === Module 9239: ? ===

// Module 9239
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;

let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = _modDef4689;
    obj = { locationStack };
    obj.pushLazy(asyncRequireImpl(9240, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4689.popWithKey(c3);
  }
};