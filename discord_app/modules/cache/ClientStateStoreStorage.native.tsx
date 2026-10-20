// === Module 15265: ClientStateStoreStorage ===

// Module 15265 (ClientStateStoreStorage)
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 15266 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(id) {
  let str;
  if (id != null) {
    str = id.toString();
  }
  NativeFastConnectModuleDefault.setClientState(str, undefined);
};