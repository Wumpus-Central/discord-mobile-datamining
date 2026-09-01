// discord_app/modules/keyboard/native/useKeyboardStateSharedValue.native.tsx
import uDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import useCustomKeyboardHeight from "useCustomKeyboardHeight.tsx";
import useSystemKeyboardHeight from "useSystemKeyboardHeight.native.tsx";
import useKeyboardType from "useKeyboardType.tsx";
import importDefaultResult from "subscribeToKeyboardUIStore.tsx";

module_4217 = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
module_4217[0] = useCustomKeyboardHeight.getCustomKeyboardHeight();
module_4217[1] = useSystemKeyboardHeight.getSystemKeyboardHeight();
module_4217[2] = useKeyboardType.getKeyboardType();
module_4217 = module_4217.makeMutable(module_4217);
importDefaultResult((arg0) => {
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  uDefault(module_4217, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return module_4217.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: module_4217 };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = {
  code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}",
};
const result = require("set").fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return module_4217;
}
export { getKeyboardStateWorklet };
