// === Module 16244: MobileNotifSettingsRouteBuilders ===

// Module 16244 (MobileNotifSettingsRouteBuilders)
import util from "util" /* 1115 */;
import _modDef2808 from "module_2808" /* 2808 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15762 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRouteBuilders.tsx");

export const buildOverviewCategoriesSection = function buildOverviewCategoriesSection() {
  const obj = { label: null, settings: null };
  const intl = util.intl;
  obj.label = intl.string(_modDef2808["/UdAvP"]);
  const items = [MobileNotifSettings.MobileNotifSettings.NOTIF_REALTIME, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVER, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_OTHER];
  obj.settings = items;
  return obj;
};
export function buildRealtimeSettingsSection() {
  return { settings: [] };
}
export const buildCategorySocialSettingsSection = function buildCategorySocialSettingsSection() {
  const obj = { settings: null };
  const items = [MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS, MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_DEFAULT, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_DEFAULT, MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_DEFAULT];
  obj.settings = items;
  return obj;
};
export function buildCategoryServerSettingsSection() {
  return { settings: [] };
}
export function buildCategoryOtherSettingsSection() {
  return { settings: [] };
}