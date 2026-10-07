// discord_app/modules/native_permissions/NativePermissionUtils.null.tsx
import NativePermissionBaseUtils2 from "NativePermissionBaseUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const NativePermissionBaseUtils = NativePermissionBaseUtils2.NativePermissionBaseUtils;
class NativePermissionDesktopNullUtils extends NativePermissionBaseUtils {}
const prototype = NativePermissionDesktopNullUtils.prototype;
prototype["requestPermissionCore"] = function requestPermissionCore() {
  return Promise.resolve(true);
};
prototype["hasPermissionCore"] = function hasPermissionCore() {
  return Promise.resolve(true);
};
prototype["openSettings"] = function openSettings() {};
prototype["didHavePermission"] = function didHavePermission() {
  return true;
};
prototype["openAlertModal"] = function openAlertModal() {};
const nativePermissionDesktopNullUtils = new NativePermissionDesktopNullUtils();
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.null.tsx");

export default nativePermissionDesktopNullUtils;
