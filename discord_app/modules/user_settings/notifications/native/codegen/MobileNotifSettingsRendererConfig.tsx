// === Module 15444: MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG ===

// Module 15444 (MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG)
import set from "set" /* 2 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15445 */;
import route from "route" /* 15446 */;

const obj = {};
obj[MobileNotifSettings.MobileNotifSettings.VOICE_ACTIVITY_TITLE] = route.VoiceActivityTitleSetting;
const result = set.fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx");

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;