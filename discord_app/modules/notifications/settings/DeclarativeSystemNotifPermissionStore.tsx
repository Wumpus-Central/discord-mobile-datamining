// discord_app/modules/notifications/settings/DeclarativeSystemNotifPermissionStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers.android.tsx";
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
function handlePermissionsUpdated(result) {
  obj = {};
  const iter = result.disabledSettings[Symbol.iterator]();
  while (iter !== undefined) {
    obj[iter.next()] = true;
    continue;
  }
  obj = {};
  const merged = Object.assign(obj);
  obj.disabledSettings = obj;
}
let obj = { disabledSettings: {} };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class DeclarativeSystemNotifPermissionStore extends DeviceSettingsStore {}
const prototype = DeclarativeSystemNotifPermissionStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  const merged = Object.assign({});
  const merged1 = Object.assign(arg0);
  const disabledSettings = this.getDisabledSettings();
  const result = DeclarativeSystemNotifPermissionHelpersDefault.refreshSystemNotifPermissions();
  if (null != result) {
    handlePermissionsUpdated(result);
    const result1 = DeclarativeSystemNotifPermissionAnalytics.trackSystemNotifSettingsReenabled(
      disabledSettings,
      result.disabledSettings,
      "app_launch",
    );
    return true;
  }
  obj = {};
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj;
};
prototype["isDisabled"] = function isDisabled(arg0) {
  return true === obj.disabledSettings[arg0];
};
prototype["getDisabledSettings"] = function getDisabledSettings() {
  const items = [];
  const entries = Object.entries(obj.disabledSettings);
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
};
DeclarativeSystemNotifPermissionStore.displayName = "DeclarativeSystemNotifPermissionStore";
DeclarativeSystemNotifPermissionStore.persistKey = "DeclarativeSystemNotifPermissionStore";
obj = { DECLARATIVE_SYSTEM_NOTIF_PERMISSIONS_UPDATED: handlePermissionsUpdated };
const declarativeSystemNotifPermissionStore = new DeclarativeSystemNotifPermissionStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/DeclarativeSystemNotifPermissionStore.tsx");

export default declarativeSystemNotifPermissionStore;
