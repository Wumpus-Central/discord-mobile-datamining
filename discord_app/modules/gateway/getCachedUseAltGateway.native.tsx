// discord_app/modules/gateway/getCachedUseAltGateway.native.tsx
import react_nativeDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  const obj = react_nativeDefault;
  let flag = obj.getConstants().useAltGateway;
  if (flag == null) {
    flag = false;
  }
  return flag;
}
