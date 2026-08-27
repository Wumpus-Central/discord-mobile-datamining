// === Module 14488: route ===

// Module 14488 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2369 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import createToggle from "createToggle" /* 10988 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["w/ISB8"]);
  },
  parent: MobileUserSettings.MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME,
  getComponent() {
    return require(14489) /* OverlappingSchedulesWarning */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterScheduleDowntimeSetting.tsx");

export default route;