// discord_app/modules/urgent_system_dm/native/UrgentSystemDMManager.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import _modDef4656 from "../../../actions/native/AlertActionCreators.tsx";
import maybeShowUrgentMessageModalDefault from "../UrgentSystemDMManagerBase.tsx";
import navigateToSystemDMDefault from "../navigateToSystemDM.tsx";

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