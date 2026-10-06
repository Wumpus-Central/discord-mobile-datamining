// === Module 7292: NativePermissionStore ===

// Module 7292 (NativePermissionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5105 */;
import size from "module_2" /* 2 */;

let closure_4, permissionStates;

const NativePermissionStates = NativePermissionConstants.NativePermissionStates;
const AnalyticEvents = Constants.AnalyticEvents;
const React3 = { permissionStates: {} };
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class NativePermissionStore extends DeviceSettingsStore {
  constructor() {
    const obj = {
      SET_NATIVE_PERMISSION(arg0) {
        return closure_0.handleSetNativePermission(arg0);
      }
    };
    const tmp22 = new tmp2(DispatcherDefault, obj, new.target, tmp2, tmp, this);
    let closure_0 = tmp22;
    return tmp22;
  }
  initialize(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = closure_4;
    }
    closure_4 = tmp;
  }
  getUserAgnosticState() {
    return permissionStates;
  }
  hasPermission(arg0) {
    return null != tmp && tmp === NativePermissionStates.ACCEPTED;
  }
  handleSetNativePermission(arg0) {
    let permissionType;
    let state;
    ({ state, permissionType } = arg0);
    permissionStates = permissionStates.permissionStates;
    let NONE = permissionStates[permissionType];
    permissionStates[permissionType] = state;
    if (NONE !== state) {
      const obj = { type: permissionType, action: state, previous_action: NONE };
      const track = AnalyticsUtilsDefault.track;
      const PERMISSIONS_ACKED = AnalyticEvents.PERMISSIONS_ACKED;
      AnalyticsUtilsDefault;
      if (NONE == null) {
        NONE = NativePermissionStates.NONE;
      }
      track(PERMISSIONS_ACKED, obj);
    }
  }
}
const prototype = NativePermissionStore.prototype;
NativePermissionStore.displayName = "NativePermissionStore";
NativePermissionStore.persistKey = "NativePermissionsStore";
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionStore.tsx");

export default NativePermissionStore;