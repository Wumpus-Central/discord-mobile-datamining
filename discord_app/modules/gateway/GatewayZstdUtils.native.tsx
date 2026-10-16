// === Module 14658: GatewayZstdUtils ===

// Module 14658 (GatewayZstdUtils)
import NativeCompressionModuleDefault from "NativeCompressionModule" /* 14659 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gateway/GatewayZstdUtils.native.tsx");

export const supportsZstd = function supportsZstd() {
  return NativeCompressionModuleDefault.getConstants().supportsZstd;
};
export const createZstdContextWeb = function createZstdContextWeb() {
  const error = new Error("Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.");
  throw error;
};