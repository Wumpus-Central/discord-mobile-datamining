// === Module 9780: ? ===

// Module 9780
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = obj132.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    const obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl(9781, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef5260.popWithKey(c3);
  }
};