// === Module 15527: route ===

// Module 15527 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import SettingsIcon from "SettingsIcon" /* 7380 */;
import createToggle from "createToggle" /* 11468 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["8/udY0"]);
  },
  parent: null,
  IconComponent: SettingsIcon.SettingsIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.ADVANCED,
  getComponent() {
    return require(15528).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;