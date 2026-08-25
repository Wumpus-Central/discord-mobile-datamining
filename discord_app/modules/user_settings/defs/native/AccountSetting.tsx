// === Module 14173: route ===

// Module 14173 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import UserCircleIcon from "UserCircleIcon" /* 9820 */;
import createToggle from "createToggle" /* 10516 */;

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
    return require(14174) /* PasswordlessUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountSetting.tsx");

export default route;