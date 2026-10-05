// discord_app/modules/keyboard/native/useKeyboardStateSharedValue.native.tsx
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import useCustomKeyboardHeight_mod from "useCustomKeyboardHeight.tsx";
import useSystemKeyboardHeight_mod from "useSystemKeyboardHeight.native.tsx";
import useKeyboardType_mod from "useKeyboardType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let useCustomKeyboardHeight;
let useKeyboardType;
let useSystemKeyboardHeight;
const makeMutable = ReanimatedRexport.makeMutable;
const obj = {
  customKeyboardHeight: useCustomKeyboardHeight.getCustomKeyboardHeight(),
  keyboardHeight: useSystemKeyboardHeight.getSystemKeyboardHeight(),
  keyboardType: useKeyboardType.getKeyboardType(),
};
useCustomKeyboardHeight = useCustomKeyboardHeight_mod;
useSystemKeyboardHeight = useSystemKeyboardHeight_mod;
useKeyboardType = useKeyboardType_mod;
const mutable = makeMutable(obj);
subscribeToKeyboardUIStore((arg0) => {
  let customKeyboardHeight;
  let keyboardHeight;
  let keyboardType;
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  updateSharedValueIfChangedDefault(mutable, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return mutable.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: mutable };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = {
  code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}",
};
const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return mutable;
}
export { getKeyboardStateWorklet };
