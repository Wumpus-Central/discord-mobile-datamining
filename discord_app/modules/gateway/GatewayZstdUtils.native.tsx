// discord_app/modules/gateway/GatewayZstdUtils.native.tsx
import set from "../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import enforcingDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeCompressionModule.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
const result = set.fileFinishedImporting("modules/gateway/GatewayZstdUtils.native.tsx");

export const supportsZstd = function supportsZstd() {
  if (obj.isAndroid()) {
    let flag = enforcingDefault.getConstants().supportsZstd;
    const obj2 = enforcingDefault;
  } else {
    const DCDCompressionManager = NativeModules.DCDCompressionManager;
    flag = undefined;
    if (DCDCompressionManager != null) {
      flag = DCDCompressionManager.supportsZstd;
    }
    if (flag == null) {
      flag = false;
    }
  }
  return flag;
};
export const createZstdContextWeb = function createZstdContextWeb() {
  error = new Error(
    "Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.",
  );
  throw error;
};
