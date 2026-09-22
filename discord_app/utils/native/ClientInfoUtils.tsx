// === Module 1363: ClientInfoUtils ===

// Module 1363 (ClientInfoUtils)
import NativeClientInfoModuleDefault from "NativeClientInfoModule" /* 1343 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  return NativeClientInfoModuleDefault.getConstants();
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "6481";
  if (items.includes("6481")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6481" + ")";
  }
  return str;
};