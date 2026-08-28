// === Module 15060: route ===

// Module 15060 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import SettingsIcon from "SettingsIcon" /* 6205 */;
import createToggle from "createToggle" /* 11006 */;

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
    return require(15061).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;