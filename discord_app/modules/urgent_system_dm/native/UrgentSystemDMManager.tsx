// === Module 17495: ? ===

// Module 17495
import getSystemLocale from "getSystemLocale" /* 1114 */;
import _modDef4905 from "module_4905" /* 4905 */;
import maybeShowUrgentMessageModalDefault from "maybeShowUrgentMessageModal" /* 17496 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 17498 */;

require = arg1;
const tmp2 = new maybeShowUrgentMessageModalDefault(() => {
  let obj = _modDef4905;
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