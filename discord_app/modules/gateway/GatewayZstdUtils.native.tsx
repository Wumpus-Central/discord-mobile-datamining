// discord_app/modules/gateway/GatewayZstdUtils.native.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import react_nativeDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeCompressionModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

const NativeModules = react_native.NativeModules;
const result = size.fileFinishedImporting("modules/gateway/GatewayZstdUtils.native.tsx");

export const supportsZstd = function supportsZstd() {
  let flag;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault;
    flag = obj2.getConstants().supportsZstd;
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
