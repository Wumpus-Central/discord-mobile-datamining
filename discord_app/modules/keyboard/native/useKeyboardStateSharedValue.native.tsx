// === Module 12780: useKeyboardStateSharedValue ===

// Module 12780 (useKeyboardStateSharedValue)
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11634 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1496 */;

const module_1653 = fn(1653);
const obj2 = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
const useCustomKeyboardHeight = fn(5370);
obj2.customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
const useSystemKeyboardHeight = fn(2021);
obj2.keyboardHeight = useSystemKeyboardHeight.getSystemKeyboardHeight();
const useKeyboardType = fn(4981);
obj2.keyboardType = useKeyboardType.getKeyboardType();
const mutable = module_1653.makeMutable(obj2);
subscribeToKeyboardUIStore((arg0) => {
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  updateSharedValueIfChangedDefault(mutable, { customKeyboardHeight, keyboardHeight, keyboardType });
});
const items = [{ code: "(function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){let[keyboardStateSharedValue]=this.__closure;return keyboardStateSharedValue.get();})" }, mutable];
let closure_129_0;
[tmp5, tmp6] = items;
function getKeyboardStateWorklet() {
  return importDefault.get();
}
const items1 = [tmp6];
getKeyboardStateWorklet.__closure = items1;
getKeyboardStateWorklet.__workletHash = 13066878289972;
getKeyboardStateWorklet.__initData = tmp5;
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return mutable;
};
export { getKeyboardStateWorklet };