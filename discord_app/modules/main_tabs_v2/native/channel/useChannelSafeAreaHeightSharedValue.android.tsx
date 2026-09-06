// === Module 11352: useChannelSafeAreaHeightSharedValue ===

// Module 11352 (useChannelSafeAreaHeightSharedValue)
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import size from "module_2" /* 2 */;

let closure_3 = { code: "function useChannelSafeAreaHeightSharedValueAndroidTsx1(){const{chatInputSpaceBottom,keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,insets,keyboardTypeSharedValue,KeyboardTypes,customKeyboardSheetHeightSV}=this.__closure;function resolveBottom(bottom){return Math.max(bottom,chatInputSpaceBottom);}if(keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()){const systemKeyboardHeight=keyboardOpenedHeight.get();if(systemKeyboardHeight<=0){return resolveBottom(insets.get().bottom);}return systemKeyboardHeight;}if(keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM){return resolveBottom(insets.get().bottom);}return customKeyboardSheetHeightSV.get();}" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx");

export default function useChannelSafeAreaHeightSharedValue() {
  const tmp = keyboardOpenOrOpening(keyboardOpenedHeight[0])();
  _require = tmp;
  const tmp2 = keyboardOpenOrOpening(keyboardOpenedHeight[1])();
  keyboardOpenOrOpening = tmp2.keyboardOpenOrOpening;
  keyboardOpenedHeight = tmp2.keyboardOpenedHeight;
  let obj = require("useKeyboardType");
  const keyboardTypeSharedValue = obj.useKeyboardTypeSharedValue();
  const keyboardWillOpenSharedValue = require("useKeyboardType").useKeyboardWillOpenSharedValue();
  const minimum = keyboardOpenOrOpening(keyboardOpenedHeight[3])().minimum;
  const obj2 = require("useKeyboardType");
  const sharedValue = require("ReanimatedRexport").useSharedValue(minimum);
  const result = sharedValue.set(minimum);
  const obj3 = require("ReanimatedRexport");
  const token = require("useToken").useToken(keyboardOpenOrOpening(keyboardOpenedHeight[6]).modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const obj5 = require("useToken");
  const fn = function p() {
    if (!keyboardOpenOrOpening.get()) {
      if (!keyboardWillOpenSharedValue.get()) {
        value = keyboardTypeSharedValue.get();
        if (value === KeyboardTypes.KeyboardTypes.SYSTEM) {
          const _Math = Math;
          let bound = Math.max(closure_0.get().bottom, token);
        } else {
          bound = sharedValue.get();
        }
        return bound;
      }
    }
    value = keyboardOpenedHeight.get();
    if (value <= 0) {
      const _Math2 = Math;
      value = Math.max(closure_0.get().bottom, token);
    }
    return value;
  };
  obj = { chatInputSpaceBottom: token, keyboardOpenOrOpening, keyboardWillOpenSharedValue, keyboardOpenedHeight, insets: tmp, keyboardTypeSharedValue, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, customKeyboardSheetHeightSV: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 2789486228416;
  fn.__initData = keyboardTypeSharedValue;
  return require("ReanimatedRexport").useDerivedValue(fn);
};