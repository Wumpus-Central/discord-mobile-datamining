// === Module 15913: MobileNotifSettingsRendererConfig ===

// Module 15913 (MobileNotifSettingsRendererConfig)
import MobileNotifSettingsRoutesAll from "MobileNotifSettingsRoutes" /* 15915 */;
import MobileNotifSettingsNodesAll from "MobileNotifSettingsNodes" /* 15923 */;

const obj = {};
obj[fn(15914).MobileNotifSettings.NOTIFICATIONS_REDESIGN] = MobileNotifSettingsRoutesAll.RootRoute;
obj[fn(15914).MobileNotifSettings.NOTIF_REALTIME] = MobileNotifSettingsRoutesAll.RealtimeRoute;
obj[fn(15914).MobileNotifSettings.NOTIF_CATEGORY_SOCIAL] = MobileNotifSettingsRoutesAll.CategorySocialRoute;
obj[fn(15914).MobileNotifSettings.NOTIF_CATEGORY_SERVER] = MobileNotifSettingsRoutesAll.CategoryServerRoute;
obj[fn(15914).MobileNotifSettings.NOTIF_CATEGORY_OTHER] = MobileNotifSettingsRoutesAll.CategoryOtherRoute;
obj[fn(15914).MobileNotifSettings.NOTIF_REACTIONS] = MobileNotifSettingsNodesAll.Reactions;
obj[fn(15914).MobileNotifSettings.NOTIF_MISSED_MESSAGES_LOW] = MobileNotifSettingsNodesAll.MissedMessagesLow;
obj[fn(15914).MobileNotifSettings.NOTIF_MISSED_MESSAGES_DEFAULT] = MobileNotifSettingsNodesAll.MissedMessagesDefault;
obj[fn(15914).MobileNotifSettings.NOTIF_VOICE_ACTIVITY_LOW] = MobileNotifSettingsNodesAll.VoiceActivityLow;
obj[fn(15914).MobileNotifSettings.NOTIF_VOICE_ACTIVITY_DEFAULT] = MobileNotifSettingsNodesAll.VoiceActivityDefault;
obj[fn(15914).MobileNotifSettings.NOTIF_GAMING_LOW] = MobileNotifSettingsNodesAll.GamingLow;
obj[fn(15914).MobileNotifSettings.NOTIF_GAMING_DEFAULT] = MobileNotifSettingsNodesAll.GamingDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx");

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;