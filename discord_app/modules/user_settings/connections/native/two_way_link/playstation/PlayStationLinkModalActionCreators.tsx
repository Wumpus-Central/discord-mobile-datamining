// === Module 10631: ? ===

// Module 10631
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = _modDef4611;
    obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl(10632, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4611.popWithKey(c3);
  }
};