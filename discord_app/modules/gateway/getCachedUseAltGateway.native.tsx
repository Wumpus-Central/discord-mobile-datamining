// === Module 13195: getCachedUseAltGateway ===

// Module 13195 (getCachedUseAltGateway)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 502 */;

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