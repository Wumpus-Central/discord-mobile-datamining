// === Module 14547: route ===

// Module 14547 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import UserCircleIcon from "UserCircleIcon" /* 10880 */;
import createToggle from "createToggle" /* 11292 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["ldCE/p"]);
  },
  parent: null,
  IconComponent: UserCircleIcon.UserCircleIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.ACCOUNT,
  getComponent() {
    return require(14548) /* PasswordlessUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountSetting.tsx");

export default route;