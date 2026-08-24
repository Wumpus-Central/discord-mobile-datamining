// discord_app/modules/native_permissions/NativePermissionStore.tsx
import set from "../../../_runtime/00002_set.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import ME from "../../Constants.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import NativePermissionStatus from "NativePermissionConstants.tsx";

const NativePermissionStates = NativePermissionStatus.NativePermissionStates;
const AnalyticEvents = ME.AnalyticEvents;
let closure_4 = { permissionStates: {} };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class NativePermissionStore extends DeviceSettingsStore {
  constructor() {
    closure_0 = undefined;
    obj = {
      SET_NATIVE_PERMISSION(arg0) {
            return obj.handleSetNativePermission(arg0);
          }
    };
    tmp2 = new tmp2(require("dispatcher"), obj, new.target, tmp2, tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
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
  const permissionStates = closure_4.permissionStates;
  let NONE = permissionStates[permissionType];
  permissionStates[permissionType] = state;
  if (NONE !== state) {
    let obj = expandEventPropertiesDefault;
    obj = { type: null, action: null, previous_action: null };
    obj[0] = permissionType;
    obj[1] = state;
    if (NONE == null) {
      NONE = NativePermissionStates.NONE;
    }
    obj[2] = NONE;
    obj.track(AnalyticEvents.PERMISSIONS_ACKED, obj);
  }
};
NativePermissionStore.displayName = "NativePermissionStore";
NativePermissionStore.persistKey = "NativePermissionsStore";
const result = set.fileFinishedImporting("modules/native_permissions/NativePermissionStore.tsx");

export default NativePermissionStore;