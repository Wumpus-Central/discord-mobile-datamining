// === Module 18621: DeclarativeSystemNotifPermissionHelpers ===

// Module 18621 (DeclarativeSystemNotifPermissionHelpers)
import _mod17 from "module_17" /* 17 */;
import ClientInfoUtilsAll from "ClientInfoUtils" /* 1379 */;
import DeviceUtils from "DeviceUtils" /* 5263 */;
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 7769 */;
import NotificationSettingsConstants from "NotificationSettingsConstants" /* 16898 */;
import NotifSettings from "NotifSettings" /* 16899 */;
import size from "module_2" /* 2 */;

function refreshSystemNotifPermissions() {
  const tmp = settings(16905);
  let androidNotifChannelStates;
  if (tmp != null) {
    const getAndroidNotifChannelStates = tmp.getAndroidNotifChannelStates;
    if (getAndroidNotifChannelStates != null) {
      androidNotifChannelStates = getAndroidNotifChannelStates();
    }
  }
  if (null != androidNotifChannelStates) {
    items = [];
    const _Set = Set;
    const set = new Set();
    let iter = androidNotifChannelStates[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (0 === nextResult.importance) {
        let addResult = set.add(tmp11.channelId);
      }
      continue;
    }
    for (const item10036 of NOTIF_SETTINGS) {
      if (set.has(item10036.string_id)) {
        let arr = items.push(item10036.id);
      }
      continue;
    }
    settings = androidNotifChannelStates(16902).getAssignedNotifSettingsAndMappings().settings;
    const _Map = Map;
    const obj2 = androidNotifChannelStates(16902);
    const _Object = Object;
    const entries = Object.entries(obj);
    let found = entries.filter((item) => {
      const iter = item[Symbol.iterator]();
      iter.next();
      let tmp2 = iter === undefined;
      let nextResult1;
      if (!tmp2) {
        tmp2 = tmp5;
        if (iter !== undefined) {
          nextResult1 = iter.next();
          tmp2 = tmp5;
        }
      }
      if (!tmp2) {
        iter.return();
      }
      let found = settings.filter((id) => nextResult1.includes(id.id));
      return found.length > 0 && found.every((id) => {
        if (id.id === androidNotifChannelStates(dependencyMap[2]).NotifSettings.CALLS) {
          const found = nextResult1.find((channelId) => {
            channelId = channelId.channelId;
            return channelId.startsWith("calls");
          });
          let channelId;
          if (found != null) {
            channelId = found.channelId;
          }
          let string_id = channelId;
        } else {
          string_id = id.string_id;
        }
        let tmp5 = null != string_id;
        if (tmp5) {
          tmp5 = 0 === map.get(string_id);
        }
        return tmp5;
      });
    });
    obj = {
      type: "DECLARATIVE_SYSTEM_NOTIF_PERMISSIONS_UPDATED",
      disabledSettings: items,
      disabledCategories: found.map((item) => {
          [tmp] = item;
          return tmp;
        })
    };
    return obj;
  }
}
function openSystemNotifSettings(arg0) {
  for (const item10008 of NOTIF_SETTINGS) {
    if (item10008.id === arg0) {
      let string_id = item10008.string_id;
      obj.return();
      break;
    }
    if (null != string_id) {
      let obj6 = DeviceUtils;
      if (obj6.getSystemVersionMajor() >= 26) {
        let entry = { key: "android.provider.extra.APP_PACKAGE", value: null };
        let obj4 = ClientInfoUtilsAll;
        entry.value = obj4.getConstants().Identifier;
        items = [entry, ];
        let entry1 = { key: "android.provider.extra.CHANNEL_ID", value: string_id };
        items[1] = entry1;
        let str = "android.settings.CHANNEL_NOTIFICATION_SETTINGS";
        let sendIntentResult = Linking.sendIntent("android.settings.CHANNEL_NOTIFICATION_SETTINGS", items);
      } else {
        let obj2 = NativeDeviceSettingsModuleDefault;
        let result = obj2.openNotificationSettings();
      }
    }
  }
}
const Linking = _mod17.Linking;
const NOTIF_SETTINGS = NotificationSettingsConstants.NOTIF_SETTINGS;
let obj = { "111_realtime": null, "222_social": null, "333_server": null, "444_other": null };
let items = [NotifSettings.NotifSettings.CALLS, NotifSettings.NotifSettings.DMS, NotifSettings.NotifSettings.FRIEND_REQUESTS, NotifSettings.NotifSettings.MISSED_MESSAGES_LOW, NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT, NotifSettings.NotifSettings.REACTIONS_CHOICE];
obj["111_realtime"] = items;
const items1 = [NotifSettings.NotifSettings.POLLS, NotifSettings.NotifSettings.REACTIONS, NotifSettings.NotifSettings.FRIENDS_GAMING_LOW, NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT, NotifSettings.NotifSettings.GAMING_OTHER, NotifSettings.NotifSettings.GO_LIVE, NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW, NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT, NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY, NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE, NotifSettings.NotifSettings.PROFILE_UPDATES, NotifSettings.NotifSettings.FRIEND_ONLINE, NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER, NotifSettings.NotifSettings.FRIEND_SUGGESTIONS, NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM];
obj["222_social"] = items1;
const items2 = [NotifSettings.NotifSettings.GUILD_MESSAGES, NotifSettings.NotifSettings.FORUM_NOTIFICATIONS, NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS, NotifSettings.NotifSettings.STAGE_NOTIFICATIONS, NotifSettings.NotifSettings.OTHER_GUILD, NotifSettings.NotifSettings.SAFETY_ALERTS];
obj["333_server"] = items2;
const items3 = [NotifSettings.NotifSettings.INVITES_RECONNECTING, NotifSettings.NotifSettings.TRENDING_SUGGESTIONS, NotifSettings.NotifSettings.UPDATES_OFFERS];
obj["444_other"] = items3;
let result = size.fileFinishedImporting("modules/notifications/settings/DeclarativeSystemNotifPermissionHelpers.android.tsx");

export default { openSystemNotifSettings, refreshSystemNotifPermissions };
export { refreshSystemNotifPermissions };
export { openSystemNotifSettings };