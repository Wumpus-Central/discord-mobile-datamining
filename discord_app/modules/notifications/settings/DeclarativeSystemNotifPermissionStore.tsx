// discord_app/modules/notifications/settings/DeclarativeSystemNotifPermissionStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers.android.tsx";
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../_runtime/metro/00002__.js";

function handlePermissionsUpdated(result) {
  obj = {};
  const iter = result.disabledSettings[Symbol.iterator]();
  while (iter !== undefined) {
    obj[iter.next()] = true;
    continue;
  }
  const obj2 = { disabledSettings: obj };
  const merged = Object.assign(obj);
  obj = obj2;
}
let obj = { disabledSettings: {} };
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class DeclarativeSystemNotifPermissionStore extends DeviceSettingsStore {
  initialize(arg0) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(arg0);
    const disabledSettings = this.getDisabledSettings();
    const obj2 = DeclarativeSystemNotifPermissionHelpersDefault;
    const result = obj2.refreshSystemNotifPermissions();
    if (null != result) {
      handlePermissionsUpdated(result);
      const obj3 = DeclarativeSystemNotifPermissionAnalytics;
      const result1 = obj3.trackSystemNotifSettingsReenabled(disabledSettings, result.disabledSettings, "app_launch");
      return true;
    }
  }
  getUserAgnosticState() {
    return obj;
  }
  isDisabled(arg0) {
    return true === obj.disabledSettings[arg0];
  }
  getDisabledSettings() {
    const items = [];
    const entries = Object.entries(obj.disabledSettings);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let first = tmp5[0];
      if (true === tmp5[1]) {
        let _Number = Number;
        let arr = items.push(Number(first));
      }
      continue;
    }
    return items;
  }
}
const prototype = DeclarativeSystemNotifPermissionStore.prototype;
DeclarativeSystemNotifPermissionStore.displayName = "DeclarativeSystemNotifPermissionStore";
DeclarativeSystemNotifPermissionStore.persistKey = "DeclarativeSystemNotifPermissionStore";
let obj2 = { DECLARATIVE_SYSTEM_NOTIF_PERMISSIONS_UPDATED: handlePermissionsUpdated };
const declarativeSystemNotifPermissionStore = new DeclarativeSystemNotifPermissionStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/notifications/settings/DeclarativeSystemNotifPermissionStore.tsx");

export default declarativeSystemNotifPermissionStore;
