// discord_app/modules/cache/ClientStateStoreStorage.native.tsx
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(closure_17, arg1) {
  if (obj.isAndroid()) {
    let str;
    if (closure_17 != null) {
      str = closure_17.toString();
    }
    require("../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx").setClientState(str, undefined);
    const obj2 = require("../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx");
  } else {
    const DCDFastConnectManager = NativeModules.DCDFastConnectManager;
    let tmp4 = closure_17;
    if (closure_17 == null) {
      tmp4 = null;
    }
    DCDFastConnectManager.setClientState(tmp4, null);
  }
};