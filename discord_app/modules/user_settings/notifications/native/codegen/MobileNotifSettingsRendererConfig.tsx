// discord_app/modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx
import routeAll from "../../../../notifications/settings/native/MobileNotifSettingsRoutes.tsx";
import toggleAll from "../../../../notifications/settings/native/MobileNotifSettingsNodes.tsx";

const obj = {};
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_REALTIME] = routeAll.RealtimeRoute;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_CATEGORY_SOCIAL] = routeAll.CategorySocialRoute;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_CATEGORY_SERVER] = routeAll.CategoryServerRoute;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_CATEGORY_OTHER] = routeAll.CategoryOtherRoute;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_REACTIONS] = toggleAll.Reactions;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_MISSED_MESSAGES_LOW] = toggleAll.MissedMessagesLow;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_MISSED_MESSAGES_DEFAULT] = toggleAll.MissedMessagesDefault;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_VOICE_ACTIVITY_LOW] = toggleAll.VoiceActivityLow;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_VOICE_ACTIVITY_DEFAULT] = toggleAll.VoiceActivityDefault;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_GAMING_LOW] = toggleAll.GamingLow;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_GAMING_DEFAULT] = toggleAll.GamingDefault;
const result = require("set").fileFinishedImporting(
  "modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx",
);

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;
