// discord_app/modules/native_permissions/NativePermissionUtils.tsx
import ProcessArgs2 from "../../utils/ProcessArgs.tsx";
import nativePermissionDesktopNullUtils from "NativePermissionUtils.null.tsx";
import NativePermissionBaseUtils from "NativePermissionBaseUtils.tsx";
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils.native.tsx";
import NativePermissionManager_mod from "NativePermissionManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

let _default;
let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = ProcessArgs2.ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  _default = nativePermissionDesktopNullUtils.default;
} else {
  _default = mobile_NativePermissionUtils.default;
}
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = NativePermissionBaseUtils.NativePermissionsRequestOptions;
