// === Module 18300: UrgentSystemDMManager ===

// Module 18300 (UrgentSystemDMManager)
import util from "util" /* 1126 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5305 */;
import UrgentSystemDMManagerBaseDefault from "UrgentSystemDMManagerBase" /* 18301 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 18303 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default new UrgentSystemDMManagerBaseDefault(() => {
  const obj2 = { title: null, body: null, isDismissable: false, onConfirm: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.bAhz9l);
  const intl2 = util.intl;
  obj2.body = intl2.string(util.t["7KjxW3"]);
  obj2.onConfirm = navigateToSystemDMDefault;
  return actions_AlertActionCreatorsDefault.show(obj2);
});