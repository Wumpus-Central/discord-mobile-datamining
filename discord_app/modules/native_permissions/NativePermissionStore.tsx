// discord_app/modules/native_permissions/NativePermissionStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import NativePermissionConstants from "NativePermissionConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const NativePermissionStates = NativePermissionConstants.NativePermissionStates;
const AnalyticEvents = Constants.AnalyticEvents;
let permissionStates = { permissionStates: {} };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class NativePermissionStore extends DeviceSettingsStore {
  constructor() {
    closure_0 = undefined;
    obj = {
      SET_NATIVE_PERMISSION(arg0) {
        return closure_0.handleSetNativePermission(arg0);
      },
    };
    tmp2 = new tmp2(closure_0(closure_1[3]), obj, new.target, tmp2, tmp, new.target);
    closure_0 = tmp2;
    return tmp2;
  }
}
const prototype = NativePermissionStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_4;
  }
  closure_4 = tmp;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return closure_4;
};
prototype["hasPermission"] = function hasPermission(arg0) {
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = tmp === NativePermissionStates.ACCEPTED;
  }
  return tmp2;
};
prototype["handleSetNativePermission"] = function handleSetNativePermission(arg0) {
  ({ state, permissionType } = arg0);
  permissionStates = permissionStates.permissionStates;
  let NONE = permissionStates[permissionType];
  permissionStates[permissionType] = state;
  if (NONE !== state) {
    const obj = { type: permissionType, action: state, previous_action: null };
    if (NONE == null) {
      NONE = NativePermissionStates.NONE;
    }
    obj.previous_action = NONE;
    obj.track(AnalyticEvents.PERMISSIONS_ACKED, obj);
  }
};
NativePermissionStore.displayName = "NativePermissionStore";
NativePermissionStore.persistKey = "NativePermissionsStore";
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionStore.tsx");

export default NativePermissionStore;
