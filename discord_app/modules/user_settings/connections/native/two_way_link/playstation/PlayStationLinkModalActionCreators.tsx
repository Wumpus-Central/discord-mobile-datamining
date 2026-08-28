// === Module 9267: ? ===

// Module 9267
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = _modDef4689;
    obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl(9268, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4689.popWithKey(c3);
  }
};