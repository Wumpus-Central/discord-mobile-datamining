// discord_app/modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx
import set from "../../../../../../_runtime/00002_set.js";
import MobileNotifSettings from "MobileNotifSettings.tsx";
import route from "../../../../notifications/settings/native/MobileNotifSettingsRoutes.tsx";

const obj = {};
obj[MobileNotifSettings.MobileNotifSettings.VOICE_ACTIVITY_TITLE] = route.VoiceActivityTitleSetting;
const result = set.fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx");

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;