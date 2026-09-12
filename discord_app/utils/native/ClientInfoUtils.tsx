// === Module 1364: ClientInfoUtils ===

// Module 1364 (ClientInfoUtils)
import NativeClientInfoModuleDefault from "NativeClientInfoModule" /* 1344 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  return NativeClientInfoModuleDefault.getConstants();
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "6411";
  if (items.includes("6411")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6411" + ")";
  }
  return str;
};