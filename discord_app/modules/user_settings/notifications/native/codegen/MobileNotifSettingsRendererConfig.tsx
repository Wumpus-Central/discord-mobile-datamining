// === Module 15477: MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG ===

// Module 15477 (MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG)
import routeAll from "route" /* 15479 */;

const obj = {};
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_REALTIME] = routeAll.RealtimeRoute;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_CATEGORY_SOCIAL] = routeAll.CategorySocialRoute;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_CATEGORY_SERVER] = routeAll.CategoryServerRoute;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_CATEGORY_OTHER] = routeAll.CategoryOtherRoute;
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx");

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;