// === Module 9328: ? ===

// Module 9328
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4723 from "module_4723" /* 4723 */;

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = _modDef4723;
    obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl(9329, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4723.popWithKey(c3);
  }
};