// === Module 9289: ? ===

// Module 9289
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4691 from "module_4691" /* 4691 */;

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = _modDef4691;
    obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl(9290, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4691.popWithKey(c3);
  }
};