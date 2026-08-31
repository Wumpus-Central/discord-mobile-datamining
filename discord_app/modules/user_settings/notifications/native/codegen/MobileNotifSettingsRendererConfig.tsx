// discord_app/modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx
import routeAll from "../../../../notifications/settings/native/MobileNotifSettingsRoutes.tsx";

const obj = {};
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_REALTIME] = routeAll.RealtimeRoute;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_CATEGORY_SOCIAL] = routeAll.CategorySocialRoute;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_CATEGORY_SERVER] = routeAll.CategoryServerRoute;
obj[require("MobileNotifSettings").MobileNotifSettings.NOTIF_CATEGORY_OTHER] = routeAll.CategoryOtherRoute;
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/codegen/MobileNotifSettingsRendererConfig.tsx");

export const MOBILE_NOTIF_SETTINGS_RENDERER_CONFIG = obj;