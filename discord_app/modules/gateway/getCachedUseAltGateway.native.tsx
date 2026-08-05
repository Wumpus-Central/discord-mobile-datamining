// discord_app/modules/gateway/getCachedUseAltGateway.native.tsx
import { NativeModules } from "get ActivityIndicator";
import { enforcing } from "../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";

const result = require("enforcing").fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  if (obj.isAndroid()) {
    let flag2 = enforcing.getConstants().useAltGateway;
    if (flag2 == null) {
      flag2 = false;
    }
    let flag = flag2;
    const obj2 = enforcing;
  } else {
    flag = NativeModules.DCDFastConnectManager.useAltGateway;
    if (flag == null) {
      flag = false;
    }
  }
  return flag;
};