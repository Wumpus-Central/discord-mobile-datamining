// === Module 15988: DeclarativeSystemNotifPermissionAnalytics ===

// Module 15988 (DeclarativeSystemNotifPermissionAnalytics)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import NotificationSettingsConstants from "NotificationSettingsConstants" /* 14497 */;
import NotifTypes from "NotifTypes" /* 14499 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14503 */;
import size from "module_2" /* 2 */;

function getNotifTypesUsingSettings(items) {
  const set1 = new Set();
  const ids = [];
  const names = [];
  notifications_NotificationSettingsUtils;
  for (const item10026 of tmp2) {
    let notifType = item10026.notifType;
    let hasItem = set.has(item10026.notifSetting);
    if (hasItem) {
      hasItem = !set1.has(notifType);
    }
    if (hasItem) {
      let addResult = set1.add(notifType);
      let _String = String;
      let arr = ids.push(String(notifType));
      arr = names.push(NotifTypes.NotifTypes[notifType]);
    }
    continue;
  }
  return { ids, names };
}
const NOTIF_SETTINGS = NotificationSettingsConstants.NOTIF_SETTINGS;
const AnalyticEvents = Constants.AnalyticEvents;
const map = new Map(NOTIF_SETTINGS.map((item) => {
  const items = [, ];
  ({ id: arr[0], string_id: arr[1] } = item);
  return items;
}));
const result = size.fileFinishedImporting("modules/notifications/settings/DeclarativeSystemNotifPermissionAnalytics.tsx");

export const trackSystemNotifSettingsOpened = function trackSystemNotifSettingsOpened(notif_setting_id) {
  value = map.get(notif_setting_id);
  if (null != value) {
    const items = [notif_setting_id];
    const obj = { system_notif_channel_id: value, notif_setting_id, notif_type_ids: null, notif_type_names: null };
    ({ ids: obj2.notif_type_ids, names: obj2.notif_type_names } = getNotifTypesUsingSettings(items));
    obj.track(AnalyticEvents.NOTIFICATION_SETTING_SYSTEM_SETTINGS_OPENED, obj);
    const tmp3 = getNotifTypesUsingSettings(items);
  }
};
export const trackSystemNotifSettingsReenabled = function trackSystemNotifSettingsReenabled(disabledSettings, disabledSettings2, app_launch) {
  const items = [];
  const items1 = [];
  const iter = disabledSettings[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (!set.has(nextResult)) {
      value = map.get(tmp2);
      if (null != value) {
        items.push(tmp6);
        let arr = items1.push(tmp2);
      }
    }
    continue;
  }
  if (0 !== items.length) {
    const tmp13 = getNotifTypesUsingSettings(items1);
    const obj = { reenabled_system_notif_channel_ids: items, reenabled_notif_setting_ids: items1, reenabled_notif_type_ids: null, reenabled_notif_type_names: null, source: null };
    ({ ids: obj3.reenabled_notif_type_ids, names: obj3.reenabled_notif_type_names } = tmp13);
    obj.source = app_launch;
    AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTING_SYSTEM_REENABLED, obj);
  }
  set = new Set(disabledSettings2);
};