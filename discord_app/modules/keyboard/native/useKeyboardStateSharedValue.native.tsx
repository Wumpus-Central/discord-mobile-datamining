// === Module 11206: mutable ===

// Module 11206 (mutable)
import uDefault from "u" /* 10600 */;
import module_4119 from "module_4119" /* 4119 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5449 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1895 */;
import useKeyboardType from "useKeyboardType" /* 4243 */;
import importDefaultResult from "subscribeToKeyboardUIStore" /* 1496 */;

module_4119 = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
module_4119[0] = useCustomKeyboardHeight.getCustomKeyboardHeight();
module_4119[1] = useSystemKeyboardHeight.getSystemKeyboardHeight();
module_4119[2] = useKeyboardType.getKeyboardType();
module_4119 = module_4119.makeMutable(module_4119);
importDefaultResult((arg0) => {
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  uDefault(module_4119, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return module_4119.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: module_4119 };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = { code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}" };
const result = require("set").fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return module_4119;
};
export { getKeyboardStateWorklet };