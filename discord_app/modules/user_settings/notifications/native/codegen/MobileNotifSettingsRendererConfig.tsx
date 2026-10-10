// === Module 16305: MobileNotifSettingsRendererConfig ===

// Module 16305 (MobileNotifSettingsRendererConfig)
import MobileNotifSettingsRoutesAll from "MobileNotifSettingsRoutes" /* 16306 */;
import MobileNotifSettingsNodesAll from "MobileNotifSettingsNodes" /* 16318 */;

const obj = {};
obj[fn(15763).MobileNotifSettings.NOTIFICATIONS_REDESIGN] = MobileNotifSettingsRoutesAll.RootRoute;
obj[fn(15763).MobileNotifSettings.NOTIF_REALTIME] = MobileNotifSettingsRoutesAll.RealtimeRoute;
obj[fn(15763).MobileNotifSettings.NOTIF_CATEGORY_SOCIAL] = MobileNotifSettingsRoutesAll.CategorySocialRoute;
obj[fn(15763).MobileNotifSettings.NOTIF_CATEGORY_SERVER] = MobileNotifSettingsRoutesAll.CategoryServerRoute;
obj[fn(15763).MobileNotifSettings.NOTIF_CATEGORY_OTHER] = MobileNotifSettingsRoutesAll.CategoryOtherRoute;
obj[fn(15763).MobileNotifSettings.NOTIF_REACTIONS] = MobileNotifSettingsNodesAll.Reactions;
obj[fn(15763).MobileNotifSettings.NOTIF_MISSED_MESSAGES_LOW] = MobileNotifSettingsNodesAll.MissedMessagesLow;
obj[fn(15763).MobileNotifSettings.NOTIF_MISSED_MESSAGES_DEFAULT] = MobileNotifSettingsNodesAll.MissedMessagesDefault;
obj[fn(15763).MobileNotifSettings.NOTIF_VOICE_ACTIVITY_LOW] = MobileNotifSettingsNodesAll.VoiceActivityLow;
obj[fn(15763).MobileNotifSettings.NOTIF_VOICE_ACTIVITY_DEFAULT] = MobileNotifSettingsNodesAll.VoiceActivityDefault;
obj[fn(15763).MobileNotifSettings.NOTIF_GAMING_LOW] = MobileNotifSettingsNodesAll.GamingLow;
obj[fn(15763).MobileNotifSettings.NOTIF_GAMING_DEFAULT] = MobileNotifSettingsNodesAll.GamingDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx");

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;