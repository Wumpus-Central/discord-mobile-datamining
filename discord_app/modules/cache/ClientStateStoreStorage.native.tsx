// === Module 13880: ClientStateStoreStorage ===

// Module 13880 (ClientStateStoreStorage)
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13378 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(id) {
  let str;
  if (id != null) {
    str = id.toString();
  }
  NativeFastConnectModuleDefault.setClientState(str, undefined);
};