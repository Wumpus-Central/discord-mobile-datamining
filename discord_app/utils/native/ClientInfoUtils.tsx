// === Module 1362: ClientInfoUtils ===

// Module 1362 (ClientInfoUtils)
import NativeClientInfoModuleDefault from "NativeClientInfoModule" /* 1342 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  return NativeClientInfoModuleDefault.getConstants();
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "6417";
  if (items.includes("6417")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6417" + ")";
  }
  return str;
};