// === Module 10699: ? ===

// Module 10699
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4675 from "module_4675" /* 4675 */;

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = _modDef4675;
    obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl(10700, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4675.popWithKey(c3);
  }
};