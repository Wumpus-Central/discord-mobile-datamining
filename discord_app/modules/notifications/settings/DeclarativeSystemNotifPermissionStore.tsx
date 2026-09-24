// === Module 16332: DeclarativeSystemNotifPermissionStore ===

// Module 16332 (DeclarativeSystemNotifPermissionStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 16333 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 16334 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function handlePermissionsUpdated(result) {
  obj = {};
  const iter = result.disabledSettings[Symbol.iterator]();
  while (iter !== undefined) {
    obj[iter.next()] = true;
    continue;
  }
  const obj2 = {};
  const merged = Object.assign(obj);
  obj2.disabledSettings = obj;
  obj = obj2;
}
let obj = { disabledSettings: {} };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class DeclarativeSystemNotifPermissionStore extends DeviceSettingsStore {
}
const prototype = DeclarativeSystemNotifPermissionStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  const merged = Object.assign({});
  const merged1 = Object.assign(arg0);
  const disabledSettings = this.getDisabledSettings();
  const result = DeclarativeSystemNotifPermissionHelpersDefault.refreshSystemNotifPermissions();
  if (null != result) {
    handlePermissionsUpdated(result);
    const result1 = DeclarativeSystemNotifPermissionAnalytics.trackSystemNotifSettingsReenabled(disabledSettings, result.disabledSettings, "app_launch");
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
const declarativeSystemNotifPermissionStore = new DeclarativeSystemNotifPermissionStore(DispatcherDefault, { DECLARATIVE_SYSTEM_NOTIF_PERMISSIONS_UPDATED: handlePermissionsUpdated });
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/DeclarativeSystemNotifPermissionStore.tsx");

export default declarativeSystemNotifPermissionStore;