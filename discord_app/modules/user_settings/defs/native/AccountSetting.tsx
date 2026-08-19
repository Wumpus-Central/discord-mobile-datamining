// === Module 14075: route ===

// Module 14075 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import UserCircleIcon from "UserCircleIcon" /* 9923 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.ACCOUNT,
  getComponent() {
    return require(14076) /* PasswordlessUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AccountSetting.tsx");

export default route;