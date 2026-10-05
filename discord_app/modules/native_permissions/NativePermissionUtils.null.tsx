// discord_app/modules/native_permissions/NativePermissionUtils.null.tsx
import NativePermissionBaseUtils2 from "NativePermissionBaseUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const NativePermissionBaseUtils = NativePermissionBaseUtils2.NativePermissionBaseUtils;
class NativePermissionDesktopNullUtils extends NativePermissionBaseUtils {
  requestPermissionCore() {
    return Promise.resolve(true);
  }
  hasPermissionCore() {
    return Promise.resolve(true);
  }
  openSettings() {}
  didHavePermission() {
    return true;
  }
  openAlertModal() {}
}
const prototype = NativePermissionDesktopNullUtils.prototype;
const nativePermissionDesktopNullUtils = new NativePermissionDesktopNullUtils();
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.null.tsx");

export default nativePermissionDesktopNullUtils;
