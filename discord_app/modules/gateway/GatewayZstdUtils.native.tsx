// discord_app/modules/gateway/GatewayZstdUtils.native.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import NativeCompressionModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeCompressionModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/gateway/GatewayZstdUtils.native.tsx");

export const supportsZstd = function supportsZstd() {
  if (obj.isAndroid()) {
    let flag = NativeCompressionModuleDefault.getConstants().supportsZstd;
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
  const error = new Error(
    "Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.",
  );
  throw error;
};
