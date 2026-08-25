// === Module 10642: ? ===

// Module 10642
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;

let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = _modDef4611;
    obj = { locationStack };
    obj.pushLazy(asyncRequireImpl(10643, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4611.popWithKey(c3);
  }
};