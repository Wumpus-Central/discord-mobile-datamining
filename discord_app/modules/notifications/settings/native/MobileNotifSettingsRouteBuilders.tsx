// discord_app/modules/notifications/settings/native/MobileNotifSettingsRouteBuilders.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2722 from "../../NotificationSettings.messages.js";
import MobileNotifSettings from "../../../user_settings/notifications/native/codegen/MobileNotifSettings.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRouteBuilders.tsx");

export const buildOverviewCategoriesSection = function buildOverviewCategoriesSection() {
  const obj = { label: null, settings: null };
  const intl = util.intl;
  obj.label = intl.string(_modDef2722["/UdAvP"]);
  const items = [
    MobileNotifSettings.MobileNotifSettings.NOTIF_REALTIME,
    MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
    MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVER,
    MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_OTHER,
  ];
  obj.settings = items;
  return obj;
};
export function buildRealtimeSettingsSection() {
  return { settings: [] };
}
export const buildCategorySocialSettingsSection = function buildCategorySocialSettingsSection() {
  const obj = { settings: null };
  const items = [
    MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS,
    MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_LOW,
    MobileNotifSettings.MobileNotifSettings.NOTIF_MISSED_MESSAGES_DEFAULT,
    MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_LOW,
    MobileNotifSettings.MobileNotifSettings.NOTIF_VOICE_ACTIVITY_DEFAULT,
    MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_LOW,
    MobileNotifSettings.MobileNotifSettings.NOTIF_GAMING_DEFAULT,
  ];
  obj.settings = items;
  return obj;
};
export function buildCategoryServerSettingsSection() {
  return { settings: [] };
}
export function buildCategoryOtherSettingsSection() {
  return { settings: [] };
}
