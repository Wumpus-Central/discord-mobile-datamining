// === Module 16713: ? ===

// Module 16713
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef4656 from "module_4656" /* 4656 */;
import maybeShowUrgentMessageModalDefault from "maybeShowUrgentMessageModal" /* 16714 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 16716 */;

require = fn;
const tmp2 = new maybeShowUrgentMessageModalDefault(() => {
  const obj = { title: null, body: null, isDismissable: false, onConfirm: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.bAhz9l);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["7KjxW3"]);
  obj[3] = navigateToSystemDMDefault;
  return obj.show(obj);
});
const result = require("obj132").fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default tmp2;