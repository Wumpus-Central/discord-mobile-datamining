// discord_app/modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../../NotificationSettings.messages.js";

let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxy.Iy9grw);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    return false;
  },
  screen: null
};
obj = {
  route: require("frozen").MobileNotifSettingsSections.VOICE_ACTIVITY,
  getComponent() {
    const error = new Error("Not yet supported");
    throw error;
  }
};
obj[3] = obj;
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const VoiceActivityTitleSetting = route;