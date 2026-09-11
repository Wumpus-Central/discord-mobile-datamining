// discord_app/modules/notifications/settings/DeclarativeSystemNotifPermissionHelpers.android.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import ClientInfoUtilsAll from "../../../utils/native/ClientInfoUtils.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import NativeDeviceSettingsModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx";
import NotificationSettingsConstants from "../NotificationSettingsConstants.tsx";
import NativeNotifSettingsModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeNotifSettingsModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function refreshSystemNotifPermissions() {
  const tmp = NativeNotifSettingsModuleDefault;
  let androidNotifChannelStates;
  if (tmp != null) {
    const getAndroidNotifChannelStates = tmp.getAndroidNotifChannelStates;
    if (getAndroidNotifChannelStates != null) {
      androidNotifChannelStates = getAndroidNotifChannelStates();
    }
  }
  if (null != androidNotifChannelStates) {
    const items = [];
    const _Set = Set;
    const set = new Set();
    const iter = androidNotifChannelStates[Symbol.iterator]();
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
    const obj = { type: "DECLARATIVE_SYSTEM_NOTIF_PERMISSIONS_UPDATED", disabledSettings: items };
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
        let items = [entry];
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
let result = size.fileFinishedImporting(
  "modules/notifications/settings/DeclarativeSystemNotifPermissionHelpers.android.tsx",
);

export default { openSystemNotifSettings, refreshSystemNotifPermissions };
export { refreshSystemNotifPermissions };
export { openSystemNotifSettings };
