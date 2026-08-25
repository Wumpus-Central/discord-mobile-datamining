// === Module 11553: mutable ===

// Module 11553 (mutable)
import uDefault from "u" /* 10397 */;
import module_4120 from "module_4120" /* 4120 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5478 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1895 */;
import useKeyboardType from "useKeyboardType" /* 4244 */;
import importDefaultResult from "subscribeToKeyboardUIStore" /* 1496 */;

module_4120 = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
module_4120[0] = useCustomKeyboardHeight.getCustomKeyboardHeight();
module_4120[1] = useSystemKeyboardHeight.getSystemKeyboardHeight();
module_4120[2] = useKeyboardType.getKeyboardType();
module_4120 = module_4120.makeMutable(module_4120);
importDefaultResult((arg0) => {
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  uDefault(module_4120, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return module_4120.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: module_4120 };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = { code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}" };
const result = require("set").fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return module_4120;
};
export { getKeyboardStateWorklet };