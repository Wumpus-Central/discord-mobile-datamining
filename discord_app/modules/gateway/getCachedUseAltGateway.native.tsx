// discord_app/modules/gateway/getCachedUseAltGateway.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import enforcingDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
const result = obj132.fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  if (obj.isAndroid()) {
    let flag2 = enforcingDefault.getConstants().useAltGateway;
    if (flag2 == null) {
      flag2 = false;
    }
    let flag = flag2;
  } else {
    flag = NativeModules.DCDFastConnectManager.useAltGateway;
    if (flag == null) {
      flag = false;
    }
  }
  return flag;
};