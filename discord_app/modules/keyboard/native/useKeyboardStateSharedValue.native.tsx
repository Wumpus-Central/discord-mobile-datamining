// === Module 11495: mutable ===

// Module 11495 (mutable)
import uDefault from "u" /* 10929 */;
import module_4186 from "module_4186" /* 4186 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5562 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1895 */;
import useKeyboardType from "useKeyboardType" /* 4310 */;
import importDefaultResult from "subscribeToKeyboardUIStore" /* 1496 */;

module_4186 = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
module_4186[0] = useCustomKeyboardHeight.getCustomKeyboardHeight();
module_4186[1] = useSystemKeyboardHeight.getSystemKeyboardHeight();
module_4186[2] = useKeyboardType.getKeyboardType();
module_4186 = module_4186.makeMutable(module_4186);
importDefaultResult((arg0) => {
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  uDefault(module_4186, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return module_4186.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: module_4186 };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = { code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}" };
const result = require("set").fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return module_4186;
};
export { getKeyboardStateWorklet };