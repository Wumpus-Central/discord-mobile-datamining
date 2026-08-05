// discord_app/modules/urgent_system_dm/native/UrgentSystemDMManager.tsx
import { AlertActionCreators } from "../../../actions/native/AlertActionCreators.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { navigateToSystemDM } from "../navigateToSystemDM.tsx";
const require = arg1;
const tmp2 = new require("maybeShowUrgentMessageModal")(() => {
  let obj = AlertActionCreators;
  obj = { title: null, body: null, isDismissable: false, onConfirm: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.bAhz9l);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["7KjxW3"]);
  obj[3] = navigateToSystemDM;
  return obj.show(obj);
});
const result = require("getSystemLocale").fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default tmp2;