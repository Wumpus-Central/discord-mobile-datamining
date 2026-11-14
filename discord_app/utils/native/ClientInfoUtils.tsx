// === Module 1379: ClientInfoUtils ===

// Module 1379 (ClientInfoUtils)
import NativeClientInfoModuleDefault from "NativeClientInfoModule" /* 1358 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export function getConstants() {
  return NativeClientInfoModuleDefault.getConstants();
}
export function getBuildNumberLabel() {
  items = ["0", "123456", "1234567890"];
  let str = "35520500000000";
  if (items.includes("35520500000000")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "35520500000000" + ")";
  }
  return str;
}