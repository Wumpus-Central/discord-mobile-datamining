// === Module 14193: ClientStateStoreStorage ===

// Module 14193 (ClientStateStoreStorage)
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13637 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(arg0) {
  let str;
  if (arg0 != null) {
    str = arg0.toString();
  }
  NativeFastConnectModuleDefault.setClientState(str, undefined);
};