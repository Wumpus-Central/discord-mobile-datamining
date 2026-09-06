// discord_app/modules/keyboard/native/useKeyboardStateSharedValue.native.tsx
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore.tsx";

fn(4296);
let ReanimatedRexport = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
const useCustomKeyboardHeight = fn(5579);
ReanimatedRexport.customKeyboardHeight = useCustomKeyboardHeight.getCustomKeyboardHeight();
const useSystemKeyboardHeight = fn(1877);
ReanimatedRexport.keyboardHeight = useSystemKeyboardHeight.getSystemKeyboardHeight();
const useKeyboardType = fn(4427);
ReanimatedRexport.keyboardType = useKeyboardType.getKeyboardType();
ReanimatedRexport = ReanimatedRexport.makeMutable(ReanimatedRexport);
subscribeToKeyboardUIStore((arg0) => {
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  updateSharedValueIfChangedDefault(ReanimatedRexport, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return ReanimatedRexport.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: ReanimatedRexport };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = {
  code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return ReanimatedRexport;
}
export { getKeyboardStateWorklet };
