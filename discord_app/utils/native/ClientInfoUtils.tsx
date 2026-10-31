// === Module 1374: ClientInfoUtils ===

// Module 1374 (ClientInfoUtils)
import NativeClientInfoModuleDefault from "NativeClientInfoModule" /* 1354 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export function getConstants() {
  return NativeClientInfoModuleDefault.getConstants();
}
export function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "35320500000000";
  if (items.includes("35320500000000")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "35320500000000" + ")";
  }
  return str;
}