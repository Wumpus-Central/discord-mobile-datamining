// === Module 17315: ? ===

// Module 17315
import getSystemLocale from "getSystemLocale" /* 1233 */;
import _modDef4858 from "module_4858" /* 4858 */;
import maybeShowUrgentMessageModalDefault from "maybeShowUrgentMessageModal" /* 17316 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 17318 */;

require = arg1;
const tmp2 = new maybeShowUrgentMessageModalDefault(() => {
  let obj = _modDef4858;
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