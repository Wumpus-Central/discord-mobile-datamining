// === Module 18792: UrgentSystemDMManager ===

// Module 18792 (UrgentSystemDMManager)
import util from "util" /* 1128 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5889 */;
import UrgentSystemDMManagerBaseDefault from "UrgentSystemDMManagerBase" /* 18793 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 18795 */;

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