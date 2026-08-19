// === Module 11154: mutable ===

// Module 11154 (mutable)
import uDefault from "u" /* 10561 */;
import "module_4115";
import useCustomKeyboardHeight from "useCustomKeyboardHeight" /* 5444 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1895 */;
import useKeyboardType from "useKeyboardType" /* 4239 */;
import importDefaultResult from "subscribeToKeyboardUIStore" /* 1496 */;

let module_4115 = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
module_4115[0] = useCustomKeyboardHeight.getCustomKeyboardHeight();
module_4115[1] = useSystemKeyboardHeight.getSystemKeyboardHeight();
module_4115[2] = useKeyboardType.getKeyboardType();
module_4115 = module_4115.makeMutable(module_4115);
importDefaultResult((arg0) => {
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  uDefault(module_4115, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return module_4115.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: module_4115 };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = { code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}" };
const result = require("obj132").fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return module_4115;
};
export { getKeyboardStateWorklet };