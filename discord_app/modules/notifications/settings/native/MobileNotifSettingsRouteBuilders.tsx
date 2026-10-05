// === Module 15828: MobileNotifSettingsRouteBuilders ===

// Module 15828 (MobileNotifSettingsRouteBuilders)
import intl2 from "intl" /* 1126 */;
import _modDef2819 from "module_2819" /* 2819 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15311 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRouteBuilders.tsx");

export const buildOverviewCategoriesSection = function buildOverviewCategoriesSection() {
  let intl;
  let items;
  const obj = { label: intl.string(_modDef2819["/UdAvP"]), settings: items };
  intl = intl2.intl;
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_REALTIME, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVER, MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_OTHER];
  return obj;
};
export function buildRealtimeSettingsSection() {
  return { settings: [] };
}
export const buildCategorySocialSettingsSection = function buildCategorySocialSettingsSection() {
  let items;
  const obj = { settings: items };
  items = [MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS, MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_DEFAULT, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_DEFAULT, MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_LOW, MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_DEFAULT];
  return obj;
};
export function buildCategoryServerSettingsSection() {
  return { settings: [] };
}
export function buildCategoryOtherSettingsSection() {
  return { settings: [] };
}