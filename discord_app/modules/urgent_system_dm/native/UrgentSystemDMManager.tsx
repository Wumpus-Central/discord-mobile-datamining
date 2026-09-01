// discord_app/modules/urgent_system_dm/native/UrgentSystemDMManager.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import _modDef4858 from "../../../actions/native/AlertActionCreators.tsx";
import maybeShowUrgentMessageModalDefault from "../UrgentSystemDMManagerBase.tsx";
import navigateToSystemDMDefault from "../navigateToSystemDM.tsx";

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
