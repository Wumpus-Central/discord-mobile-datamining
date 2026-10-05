// === Module 1368: react-native ===

// Module 1368 (react-native)
import react_nativeDefault from "react-native" /* 1354 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  const obj = react_nativeDefault;
  return obj.getConstants();
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