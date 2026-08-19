// === Module 4843: requestPermissionCore ===

// Module 4843 (requestPermissionCore)
import obj132 from "obj132" /* 2 */;
import requestAuthorization from "requestAuthorization" /* 4844 */;

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
const result = obj132.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.null.tsx");

export default nativePermissionDesktopNullUtils;