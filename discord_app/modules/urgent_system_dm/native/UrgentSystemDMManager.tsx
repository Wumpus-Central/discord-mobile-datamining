// === Module 16992: ? ===

// Module 16992
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef4810 from "module_4810" /* 4810 */;
import maybeShowUrgentMessageModalDefault from "maybeShowUrgentMessageModal" /* 16993 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 16995 */;

require = arg1;
const tmp2 = new maybeShowUrgentMessageModalDefault(() => {
  let obj = _modDef4810;
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