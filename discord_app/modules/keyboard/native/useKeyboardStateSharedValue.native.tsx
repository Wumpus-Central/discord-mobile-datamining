// === Module 12032: mutable ===

// Module 12032 (mutable)
import uDefault from "u" /* 11354 */;
import module_4296 from "module_4296" /* 4296 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5579 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1877 */;
import useKeyboardType from "useKeyboardType" /* 4427 */;
import importDefaultResult from "subscribeToKeyboardUIStore" /* 1479 */;

module_4296 = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
module_4296[0] = useCustomKeyboardHeight.getCustomKeyboardHeight();
module_4296[1] = useSystemKeyboardHeight.getSystemKeyboardHeight();
module_4296[2] = useKeyboardType.getKeyboardType();
module_4296 = module_4296.makeMutable(module_4296);
importDefaultResult((arg0) => {
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  uDefault(module_4296, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return module_4296.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: module_4296 };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = { code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}" };
const result = require("set").fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return module_4296;
};
export { getKeyboardStateWorklet };