// === Module 15001: GatewayZstdUtils ===

// Module 15001 (GatewayZstdUtils)
import NativeCompressionModuleDefault from "NativeCompressionModule" /* 15002 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gateway/GatewayZstdUtils.native.tsx");

export const supportsZstd = function supportsZstd() {
  constants = NativeCompressionModuleDefault.getConstants();
  let flag;
  if (constants != null) {
    flag = constants.supportsZstd;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const createZstdContextWeb = function createZstdContextWeb() {
  const error = new Error("Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.");
  throw error;
};