// === Module 13445: getCachedUseAltGateway ===

// Module 13445 (getCachedUseAltGateway)
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13446 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  let flag = NativeFastConnectModuleDefault.getConstants().useAltGateway;
  if (flag == null) {
    flag = false;
  }
  return flag;
};