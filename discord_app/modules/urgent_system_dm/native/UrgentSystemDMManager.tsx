// === Module 17609: UrgentSystemDMManager ===

// Module 17609 (UrgentSystemDMManager)
import util from "util" /* 1114 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4981 */;
import UrgentSystemDMManagerBaseDefault from "UrgentSystemDMManagerBase" /* 17610 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 17612 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default new UrgentSystemDMManagerBaseDefault(() => {
  const obj = { title: null, body: null, isDismissable: false, onConfirm: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.bAhz9l);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t["7KjxW3"]);
  obj.onConfirm = navigateToSystemDMDefault;
  return obj.show(obj);
});