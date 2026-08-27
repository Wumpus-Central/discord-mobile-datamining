// === Module 9260: ? ===

// Module 9260
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = _modDef4676;
    obj = { locationStack };
    obj.pushLazy(asyncRequireImpl(9261, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4676.popWithKey(c3);
  }
};