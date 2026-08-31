// === Module 11571: mutable ===

// Module 11571 (mutable)
import uDefault from "u" /* 10953 */;
import module_4187 from "module_4187" /* 4187 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5565 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1894 */;
import useKeyboardType from "useKeyboardType" /* 4312 */;
import importDefaultResult from "subscribeToKeyboardUIStore" /* 1495 */;

module_4187 = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
module_4187[0] = useCustomKeyboardHeight.getCustomKeyboardHeight();
module_4187[1] = useSystemKeyboardHeight.getSystemKeyboardHeight();
module_4187[2] = useKeyboardType.getKeyboardType();
module_4187 = module_4187.makeMutable(module_4187);
importDefaultResult((arg0) => {
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  uDefault(module_4187, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return module_4187.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: module_4187 };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = { code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}" };
const result = require("set").fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return module_4187;
};
export { getKeyboardStateWorklet };