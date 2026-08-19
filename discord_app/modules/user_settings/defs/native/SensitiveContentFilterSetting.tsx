// === Module 14170: route ===

// Module 14170 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ImageWarningIcon from "ImageWarningIcon" /* 6877 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.SENSITIVE_MEDIA_FILTERS,
  getComponent() {
    return require(14171) /* UserSettingsSensitiveContentFilters */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx");

export default route;