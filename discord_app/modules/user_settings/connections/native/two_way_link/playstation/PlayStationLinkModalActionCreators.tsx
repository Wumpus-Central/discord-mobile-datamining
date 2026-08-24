// === Module 9819: ? ===

// Module 9819
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef5265 from "module_5265" /* 5265 */;

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = _modDef5265;
    obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl(9820, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef5265.popWithKey(c3);
  }
};