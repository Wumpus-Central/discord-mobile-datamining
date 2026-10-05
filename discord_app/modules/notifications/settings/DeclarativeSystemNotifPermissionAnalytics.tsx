// discord_app/modules/notifications/settings/DeclarativeSystemNotifPermissionAnalytics.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import NotificationSettingsConstants from "../NotificationSettingsConstants.tsx";
import NotifTypes from "../../../../discord_common/js/shared/shared-constants/NotifTypes.tsx";
import notifications_NotificationSettingsUtils from "../NotificationSettingsUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let set;

function getNotifTypesUsingSettings(items) {
  set = new Set(items);
  const set1 = new Set();
  const ids = [];
  const names = [];
  const obj3 = notifications_NotificationSettingsUtils;
  const mappings = obj3.getAssignedNotifSettingsAndMappings().mappings;
  for (const item10026 of mappings) {
    let notifType = item10026.notifType;
    let hasItem = set.has(item10026.notifSetting);
    if (hasItem) {
      hasItem = !set1.has(notifType);
    }
    if (hasItem) {
      let addResult = set1.add(notifType);
      let _String = String;
      let arr = ids.push(String(notifType));
      let arr2 = names.push(NotifTypes.NotifTypes[notifType]);
    }
    continue;
  }
  return { ids, names };
}
const NOTIF_SETTINGS = NotificationSettingsConstants.NOTIF_SETTINGS;
const AnalyticEvents = Constants.AnalyticEvents;
const map = new Map(
  NOTIF_SETTINGS.map((item) => {
    const items = [,];
    ({ id: arr[0], string_id: arr[1] } = item);
    return items;
  }),
);
const result = size.fileFinishedImporting(
  "modules/notifications/settings/DeclarativeSystemNotifPermissionAnalytics.tsx",
);

export const trackSystemNotifSettingsOpened = function trackSystemNotifSettingsOpened(notif_setting_id) {
  const value = map.get(notif_setting_id);
  if (null != value) {
    const items = [notif_setting_id];
    const obj3 = { system_notif_channel_id: value, notif_setting_id, notif_type_ids: null, notif_type_names: null };
    ({ ids: obj2.notif_type_ids, names: obj2.notif_type_names } = getNotifTypesUsingSettings(items));
    const tmp3 = getNotifTypesUsingSettings(items);
    const obj = AnalyticsUtilsDefault;
    obj.track(AnalyticEvents.NOTIFICATION_SETTING_SYSTEM_SETTINGS_OPENED, obj3);
  }
};
export const trackSystemNotifSettingsReenabled = function trackSystemNotifSettingsReenabled(
  disabledSettings,
  disabledSettings2,
  app_launch,
) {
  const items = [];
  const items1 = [];
  set = new Set(disabledSettings2);
  const iter = disabledSettings[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (!set.has(nextResult)) {
      let value = map.get(tmp2);
      if (null != value) {
        let arr = items.push(tmp6);
        let arr2 = items1.push(tmp2);
      }
    }
    continue;
  }
  if (0 !== items.length) {
    const obj = {
      reenabled_system_notif_channel_ids: items,
      reenabled_notif_setting_ids: items1,
      reenabled_notif_type_ids: null,
      reenabled_notif_type_names: null,
      source: app_launch,
    };
    ({ ids: obj3.reenabled_notif_type_ids, names: obj3.reenabled_notif_type_names } =
      getNotifTypesUsingSettings(items1));
    const tmp13 = getNotifTypesUsingSettings(items1);
    const obj2 = AnalyticsUtilsDefault;
    obj2.track(AnalyticEvents.NOTIFICATION_SETTING_SYSTEM_REENABLED, obj);
  }
};
