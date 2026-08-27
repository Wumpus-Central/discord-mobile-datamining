// === Module 15269: route ===

// Module 15269 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ImageWarningIcon from "ImageWarningIcon" /* 4982 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import createToggle from "createToggle" /* 10988 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Hj/But"]);
  },
  IconComponent: ImageWarningIcon.ImageWarningIcon,
  parent: MobileUserSettings.MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  screen: obj,
  unsearchable: true
};
obj = {
  route: ME.UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  getComponent() {
    return require(15270) /* UserSettingsSensitiveContentFilters */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsSensitiveContentFilterSetting.tsx");

export default route;