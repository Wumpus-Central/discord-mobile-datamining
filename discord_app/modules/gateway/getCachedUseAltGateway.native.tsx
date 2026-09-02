// discord_app/modules/gateway/getCachedUseAltGateway.native.tsx
import set from "../../../_runtime/00002_set.js";
import enforcingDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";

const result = set.fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  let flag = enforcingDefault.getConstants().useAltGateway;
  if (flag == null) {
    flag = false;
  }
  return flag;
}
