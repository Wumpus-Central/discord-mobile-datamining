// === Module 9345: ? ===

// Module 9345
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4724 from "module_4724" /* 4724 */;

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = _modDef4724;
    obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl(9346, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4724.popWithKey(c3);
  }
};