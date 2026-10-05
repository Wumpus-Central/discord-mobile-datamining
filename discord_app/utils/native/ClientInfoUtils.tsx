// === Module 1368: ClientInfoUtils ===

// Module 1368 (ClientInfoUtils)
import NativeClientInfoModuleDefault from "NativeClientInfoModule" /* 1354 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  return NativeClientInfoModuleDefault.getConstants();
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "35020000000000";
  if (items.includes("35020000000000")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "35020000000000" + ")";
  }
  return str;
};