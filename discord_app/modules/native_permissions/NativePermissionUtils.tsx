// discord_app/modules/native_permissions/NativePermissionUtils.tsx
import ProcessArgs2 from "../../utils/ProcessArgs.tsx";
import requestPermissionCore from "NativePermissionUtils.null.tsx";
import NativePermissionBaseUtils from "NativePermissionBaseUtils.tsx";
import mobile_NativePermissionUtils from "mobile/NativePermissionUtils.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ProcessArgs = ProcessArgs2.ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = requestPermissionCore.default;
} else {
  _default = mobile_NativePermissionUtils.default;
}
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = NativePermissionBaseUtils.NativePermissionsRequestOptions;
