// discord_app/modules/keyboard/native/useKeyboardStateSharedValue.native.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import useCustomKeyboardHeight from "useCustomKeyboardHeight";
import useSystemKeyboardHeight from "useSystemKeyboardHeight";
import useKeyboardType from "useKeyboardType";
import importDefaultResult from "subscribeToKeyboardUIStore";
import { u } from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";

module_4115 = { customKeyboardHeight: null, keyboardHeight: null, keyboardType: null };
module_4115[0] = useCustomKeyboardHeight.getCustomKeyboardHeight();
module_4115[1] = useSystemKeyboardHeight.getSystemKeyboardHeight();
module_4115[2] = useKeyboardType.getKeyboardType();
module_4115 = module_4115.makeMutable(module_4115);
require("subscribeToKeyboardUIStore")((arg0) => {
  let customKeyboardHeight;
  let keyboardHeight;
  let keyboardType;
  ({ customKeyboardHeight, keyboardHeight, keyboardType } = arg0);
  u(module_4115, { customKeyboardHeight, keyboardHeight, keyboardType });
});
function getKeyboardStateWorklet() {
  return module_4115.get();
}
getKeyboardStateWorklet.__closure = { keyboardStateSharedValue: module_4115 };
getKeyboardStateWorklet.__workletHash = 1081829024717;
getKeyboardStateWorklet.__initData = { code: "function getKeyboardStateWorklet_useKeyboardStateSharedValueNativeTsx1(){const{keyboardStateSharedValue}=this.__closure;return keyboardStateSharedValue.get();}" };
const result = require("useCustomKeyboardHeight").fileFinishedImporting("modules/keyboard/native/useKeyboardStateSharedValue.native.tsx");

export default function useKeyboardStateSharedValue() {
  return module_4115;
};
export { getKeyboardStateWorklet };