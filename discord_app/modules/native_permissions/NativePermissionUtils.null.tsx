// === Module 5094: requestPermissionCore ===

// Module 5094 (requestPermissionCore)
import set from "set" /* 2 */;
import requestAuthorization from "requestAuthorization" /* 5095 */;

const NativePermissionBaseUtils = requestAuthorization.NativePermissionBaseUtils;
class NativePermissionDesktopNullUtils extends NativePermissionBaseUtils {
}
const prototype = NativePermissionDesktopNullUtils.prototype;
prototype["requestPermissionCore"] = function requestPermissionCore() {
  return Promise.resolve(true);
};
prototype["hasPermissionCore"] = function hasPermissionCore() {
  return Promise.resolve(true);
};
prototype["openSettings"] = function openSettings() {

};
prototype["didHavePermission"] = function didHavePermission() {
  return true;
};
prototype["openAlertModal"] = function openAlertModal() {

};
const nativePermissionDesktopNullUtils = new NativePermissionDesktopNullUtils();
const result = set.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.null.tsx");

export default nativePermissionDesktopNullUtils;