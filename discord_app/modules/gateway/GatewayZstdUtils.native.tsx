// discord_app/modules/gateway/GatewayZstdUtils.native.tsx
import NativeCompressionModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeCompressionModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  const error = new Error(
    "Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.",
  );
  throw error;
};
