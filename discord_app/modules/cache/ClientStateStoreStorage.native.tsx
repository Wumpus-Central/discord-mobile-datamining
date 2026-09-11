// === Module 14246: ClientStateStoreStorage ===

// Module 14246 (ClientStateStoreStorage)
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13692 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(id) {
  let str;
  if (id != null) {
    str = id.toString();
  }
  NativeFastConnectModuleDefault.setClientState(str, undefined);
};