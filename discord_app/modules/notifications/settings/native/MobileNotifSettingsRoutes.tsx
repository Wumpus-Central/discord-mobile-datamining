// discord_app/modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../NotificationSettings.messages.js";
import MobileUserSettings from "../../../user_settings/core/native/SettingsConstants.tsx";
import frozen from "../../../user_settings/notifications/native/codegen/MobileNotifSettingsSections.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const obj = {
  route: frozen.MobileNotifSettingsSections.VOICE_ACTIVITY,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
  }
};
obj[3] = obj;
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const VoiceActivityTitleSetting = route;