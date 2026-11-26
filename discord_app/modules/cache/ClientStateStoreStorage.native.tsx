// === Module 15627: ClientStateStoreStorage ===

// Module 15627 (ClientStateStoreStorage)
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 15628 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export function setClientState(id) {
  let str;
  if (id != null) {
    str = id.toString();
  }
  NativeFastConnectModuleDefault.setClientState(str, undefined);
}