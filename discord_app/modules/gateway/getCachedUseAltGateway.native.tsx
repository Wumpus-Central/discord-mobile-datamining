// === Module 13377: getCachedUseAltGateway ===

// Module 13377 (getCachedUseAltGateway)
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13378 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  let flag = NativeFastConnectModuleDefault.getConstants().useAltGateway;
  if (flag == null) {
    flag = false;
  }
  return flag;
};