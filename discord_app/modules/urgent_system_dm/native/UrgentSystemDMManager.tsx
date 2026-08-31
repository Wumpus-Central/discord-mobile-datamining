// === Module 17043: ? ===

// Module 17043
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef4826 from "module_4826" /* 4826 */;
import maybeShowUrgentMessageModalDefault from "maybeShowUrgentMessageModal" /* 17044 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 17046 */;

require = arg1;
const tmp2 = new maybeShowUrgentMessageModalDefault(() => {
  let obj = _modDef4826;
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