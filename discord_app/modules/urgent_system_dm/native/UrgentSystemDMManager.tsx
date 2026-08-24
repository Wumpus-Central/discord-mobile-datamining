// === Module 16809: ? ===

// Module 16809
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef4662 from "module_4662" /* 4662 */;
import maybeShowUrgentMessageModalDefault from "maybeShowUrgentMessageModal" /* 16810 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 16812 */;

require = arg1;
const tmp2 = new maybeShowUrgentMessageModalDefault(() => {
  let obj = _modDef4662;
  obj = { title: null, body: null, isDismissable: false, onConfirm: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.bAhz9l);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["7KjxW3"]);
  obj[3] = navigateToSystemDMDefault;
  return obj.show(obj);
});
const result = require("set").fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default tmp2;