// === Module 11625: mutable ===

// Module 11625 (mutable)
import uDefault from "u" /* 10465 */;
import module_4184 from "module_4184" /* 4184 */;
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5544 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1895 */;
import useKeyboardType from "useKeyboardType" /* 4308 */;
import importDefaultResult from "subscribeToKeyboardUIStore" /* 1496 */;

module_4184 = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
module_4184[0] = useCustomKeyboardHeight.getCustomKeyboardHeight();
module_4184[1] = useSystemKeyboardHeight.getSystemKeyboardHeight();
module_4184[2] = useKeyboardType.getKeyboardType();
module_4184 = module_4184.makeMutable(module_4184);
importDefaultResult((arg0) => {
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  uDefault(module_4184, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return module_4184.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: module_4184 };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = { code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}" };
const result = require("set").fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return module_4184;
};
export { getKeyboardStateWorklet };