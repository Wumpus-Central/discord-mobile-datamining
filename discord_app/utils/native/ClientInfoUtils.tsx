// === Module 1376: ClientInfoUtils ===

// Module 1376 (ClientInfoUtils)
import NativeClientInfoModuleDefault from "NativeClientInfoModule" /* 1355 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export function getConstants() {
  return NativeClientInfoModuleDefault.getConstants();
}
export function getBuildNumberLabel() {
  items = ["0", "123456", "1234567890"];
  let str = "35420100000000";
  if (items.includes("35420100000000")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "35420100000000" + ")";
  }
  return str;
}