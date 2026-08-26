// === Module 10710: ? ===

// Module 10710
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4675 from "module_4675" /* 4675 */;

let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = _modDef4675;
    obj = { locationStack };
    obj.pushLazy(asyncRequireImpl(10711, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4675.popWithKey(c3);
  }
};