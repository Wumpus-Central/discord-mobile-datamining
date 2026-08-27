// === Module 13218: supportsZstd ===

// Module 13218 (supportsZstd)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 13219 */;

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
  error = new Error("Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.");
  throw error;
};