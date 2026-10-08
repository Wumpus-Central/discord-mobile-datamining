// === Module 11725: useKeyboardStateSharedValue ===

// Module 11725 (useKeyboardStateSharedValue)
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10352 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1498 */;

const ReanimatedRexport = fn(4810);
const obj2 = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
const useCustomKeyboardHeight = fn(6659);
obj2.customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
const useSystemKeyboardHeight = fn(1896);
obj2.keyboardHeight = useSystemKeyboardHeight.getSystemKeyboardHeight();
const useKeyboardType = fn(4947);
obj2.keyboardType = useKeyboardType.getKeyboardType();
const mutable = ReanimatedRexport.makeMutable(obj2);
subscribeToKeyboardUIStore((arg0) => {
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  updateSharedValueIfChangedDefault(mutable, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return mutable.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: mutable };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = { code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return mutable;
};
export { getKeyboardStateWorklet };