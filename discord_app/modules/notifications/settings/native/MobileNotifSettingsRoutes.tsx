// === Module 15446: route ===

// Module 15446 (route)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2664 */;
import MobileUserSettings from "MobileUserSettings" /* 7830 */;
import frozen from "frozen" /* 15447 */;
import createToggle from "createToggle" /* 11006 */;

let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Iy9grw);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    return false;
  },
  screen: null
};
obj = {
  route: frozen.MobileNotifSettingsSections.VOICE_ACTIVITY,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
  }
};
obj[3] = obj;
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const VoiceActivityTitleSetting = route;