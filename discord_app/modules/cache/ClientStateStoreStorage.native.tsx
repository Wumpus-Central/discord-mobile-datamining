// === Module 15576: ClientStateStoreStorage ===

// Module 15576 (ClientStateStoreStorage)
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 15577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export function setClientState(id) {
  let str;
  if (id != null) {
    str = id.toString();
  }
  NativeFastConnectModuleDefault.setClientState(str, undefined);
}