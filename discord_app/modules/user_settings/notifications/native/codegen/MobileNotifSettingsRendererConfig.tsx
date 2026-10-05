// === Module 15824: MobileNotifSettingsRendererConfig ===

// Module 15824 (MobileNotifSettingsRendererConfig)
import MobileNotifSettings from "MobileNotifSettings" /* 15311 */;
import MobileNotifSettingsRoutesAll from "MobileNotifSettingsRoutes" /* 15825 */;
import MobileNotifSettingsNodesAll from "MobileNotifSettingsNodes" /* 15837 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN] = MobileNotifSettingsRoutesAll.RootRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_REALTIME] = MobileNotifSettingsRoutesAll.RealtimeRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL] = MobileNotifSettingsRoutesAll.CategorySocialRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVER] = MobileNotifSettingsRoutesAll.CategoryServerRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_OTHER] = MobileNotifSettingsRoutesAll.CategoryOtherRoute;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS] = MobileNotifSettingsNodesAll.Reactions;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_LOW] = MobileNotifSettingsNodesAll.MissedMessagesLow;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_DEFAULT] = MobileNotifSettingsNodesAll.MissedMessagesDefault;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_LOW] = MobileNotifSettingsNodesAll.VoiceActivityLow;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_DEFAULT] = MobileNotifSettingsNodesAll.VoiceActivityDefault;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_LOW] = MobileNotifSettingsNodesAll.GamingLow;
obj[MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_DEFAULT] = MobileNotifSettingsNodesAll.GamingDefault;
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx");

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;