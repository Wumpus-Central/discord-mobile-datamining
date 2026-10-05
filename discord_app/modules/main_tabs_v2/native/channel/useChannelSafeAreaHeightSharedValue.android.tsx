// === Module 9772: useChannelSafeAreaHeightSharedValue ===

// Module 9772 (useChannelSafeAreaHeightSharedValue)
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = { code: "function useChannelSafeAreaHeightSharedValueAndroidTsx1(){const{chatInputSpaceBottom,keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,insets,keyboardTypeSharedValue,KeyboardTypes,customKeyboardSheetHeightSV}=this.__closure;const resolveBottom=function resolveBottom(bottom){return Math.max(bottom,chatInputSpaceBottom);};if(keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()){const systemKeyboardHeight=keyboardOpenedHeight.get();if(systemKeyboardHeight<=0){return resolveBottom(insets.get().bottom);}return systemKeyboardHeight;}if(keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM){return resolveBottom(insets.get().bottom);}return customKeyboardSheetHeightSV.get();}" };
let closure_4 = { code: "function useChannelSafeAreaHeightSharedValueAndroidTsx2(){const{chatInputSpaceBottom,keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,insets,keyboardTypeSharedValue,KeyboardTypes,customKeyboardSheetHeightSV}=this.__closure;function resolveBottom(bottom){return Math.max(bottom,chatInputSpaceBottom);}if(keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()){const systemKeyboardHeight=keyboardOpenedHeight.get();if(systemKeyboardHeight<=0){return resolveBottom(insets.get().bottom);}return systemKeyboardHeight;}if(keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM){return resolveBottom(insets.get().bottom);}return customKeyboardSheetHeightSV.get();}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let keyboardOpenOrOpening;
  let keyboardOpenedHeight;
  const tmp = keyboardOpenOrOpening(keyboardOpenedHeight[1])();
  _require = tmp;
  const tmp2 = keyboardOpenOrOpening(keyboardOpenedHeight[2])();
  keyboardOpenOrOpening = tmp2.keyboardOpenOrOpening;
  keyboardOpenedHeight = tmp2.keyboardOpenedHeight;
  const obj = require("useKeyboardType");
  const keyboardTypeSharedValue = obj.useKeyboardTypeSharedValue();
  const obj2 = require("useKeyboardType");
  const keyboardWillOpenSharedValue = obj2.useKeyboardWillOpenSharedValue();
  const minimum = keyboardOpenOrOpening(keyboardOpenedHeight[4])().minimum;
  const obj3 = require("ReanimatedRexport");
  const sharedValue = obj3.useSharedValue(minimum);
  const result = sharedValue.set(minimum);
  const obj5 = require("useToken");
  const token = obj5.useToken(keyboardOpenOrOpening(keyboardOpenedHeight[7]).modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const fn = function p() {
    if (!keyboardOpenOrOpening.get()) {
      if (!keyboardWillOpenSharedValue.get()) {
        let bound;
        const value = keyboardTypeSharedValue.get();
        if (value === KeyboardTypes.KeyboardTypes.SYSTEM) {
          const _Math = Math;
          bound = Math.max(closure_0.get().bottom, token);
        } else {
          bound = sharedValue.get();
        }
        return bound;
      }
    }
    let value2 = keyboardOpenedHeight.get();
    if (value2 <= 0) {
      const _Math2 = Math;
      value2 = Math.max(closure_0.get().bottom, token);
    }
    return value2;
  };
  const obj6 = require("ReanimatedRexport");
  fn.__closure = { chatInputSpaceBottom: token, keyboardOpenOrOpening, keyboardWillOpenSharedValue, keyboardOpenedHeight, insets: tmp, keyboardTypeSharedValue, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, customKeyboardSheetHeightSV: sharedValue };
  fn.__workletHash = 2306570198520;
  fn.__initData = keyboardTypeSharedValue;
  ({ chatInputSpaceBottom: token, keyboardOpenOrOpening, keyboardWillOpenSharedValue, keyboardOpenedHeight, insets: tmp, keyboardTypeSharedValue, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, customKeyboardSheetHeightSV: sharedValue });
  return obj6.useDerivedValue(fn);
}) : (() => {
  let closure_0;
  let keyboardOpenOrOpening;
  let keyboardOpenedHeight;
  const tmp = keyboardOpenOrOpening(keyboardOpenedHeight[1])();
  _require = tmp;
  const tmp2 = keyboardOpenOrOpening(keyboardOpenedHeight[2])();
  keyboardOpenOrOpening = tmp2.keyboardOpenOrOpening;
  keyboardOpenedHeight = tmp2.keyboardOpenedHeight;
  const obj = require("useKeyboardType");
  const keyboardTypeSharedValue = obj.useKeyboardTypeSharedValue();
  const obj2 = require("useKeyboardType");
  const keyboardWillOpenSharedValue = obj2.useKeyboardWillOpenSharedValue();
  const minimum = keyboardOpenOrOpening(keyboardOpenedHeight[4])().minimum;
  const obj3 = require("ReanimatedRexport");
  const sharedValue = obj3.useSharedValue(minimum);
  const result = sharedValue.set(minimum);
  const obj5 = require("useToken");
  const token = obj5.useToken(keyboardOpenOrOpening(keyboardOpenedHeight[7]).modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const fn = function p() {
    if (!keyboardOpenOrOpening.get()) {
      if (!keyboardWillOpenSharedValue.get()) {
        let bound;
        const value = keyboardTypeSharedValue.get();
        if (value === KeyboardTypes.KeyboardTypes.SYSTEM) {
          const _Math = Math;
          bound = Math.max(closure_0.get().bottom, token);
        } else {
          bound = sharedValue.get();
        }
        return bound;
      }
    }
    let value2 = keyboardOpenedHeight.get();
    if (value2 <= 0) {
      const _Math2 = Math;
      value2 = Math.max(closure_0.get().bottom, token);
    }
    return value2;
  };
  const obj6 = require("ReanimatedRexport");
  fn.__closure = { chatInputSpaceBottom: token, keyboardOpenOrOpening, keyboardWillOpenSharedValue, keyboardOpenedHeight, insets: tmp, keyboardTypeSharedValue, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, customKeyboardSheetHeightSV: sharedValue };
  fn.__workletHash = 17422193676163;
  fn.__initData = keyboardWillOpenSharedValue;
  ({ chatInputSpaceBottom: token, keyboardOpenOrOpening, keyboardWillOpenSharedValue, keyboardOpenedHeight, insets: tmp, keyboardTypeSharedValue, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, customKeyboardSheetHeightSV: sharedValue });
  return obj6.useDerivedValue(fn);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx");

export default tmp2;