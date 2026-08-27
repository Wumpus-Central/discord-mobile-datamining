// === Module 15294: route ===

// Module 15294 (route)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2663 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import frozen from "frozen" /* 15295 */;
import createToggle from "createToggle" /* 10988 */;

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