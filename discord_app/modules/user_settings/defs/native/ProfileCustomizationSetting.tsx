// === Module 14202: route ===

// Module 14202 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import createToggle from "createToggle" /* 10988 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LYju5J);
  },
  parent: null,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.PROFILE_CUSTOMIZATION,
  getComponent() {
    return require(14203) /* ProfileCustomizationSubsection */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ProfileCustomizationSetting.tsx");

export default route;