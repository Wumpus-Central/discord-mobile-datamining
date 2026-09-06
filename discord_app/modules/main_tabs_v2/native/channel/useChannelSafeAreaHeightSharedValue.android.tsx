// === Module 11352: useChannelSafeAreaHeightSharedValue ===

// Module 11352 (useChannelSafeAreaHeightSharedValue)
import set from "set" /* 2 */;

let closure_3 = { code: "function useChannelSafeAreaHeightSharedValueAndroidTsx1(){const{chatInputSpaceBottom,keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,insets,keyboardTypeSharedValue,KeyboardTypes,customKeyboardSheetHeightSV}=this.__closure;function resolveBottom(bottom){return Math.max(bottom,chatInputSpaceBottom);}if(keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()){const systemKeyboardHeight=keyboardOpenedHeight.get();if(systemKeyboardHeight<=0){return resolveBottom(insets.get().bottom);}return systemKeyboardHeight;}if(keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM){return resolveBottom(insets.get().bottom);}return customKeyboardSheetHeightSV.get();}" };
let result = set.fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx");

export default function useChannelSafeAreaHeightSharedValue() {
  const tmp = keyboardOpenOrOpening(keyboardOpenedHeight[0])();
  const _require = tmp;
  const tmp2 = keyboardOpenOrOpening(keyboardOpenedHeight[1])();
  keyboardOpenOrOpening = tmp2.keyboardOpenOrOpening;
  keyboardOpenedHeight = tmp2.keyboardOpenedHeight;
  let obj = _require(keyboardOpenedHeight[2]);
  const keyboardTypeSharedValue = obj.useKeyboardTypeSharedValue();
  const keyboardWillOpenSharedValue = _require(keyboardOpenedHeight[2]).useKeyboardWillOpenSharedValue();
  const minimum = keyboardOpenOrOpening(keyboardOpenedHeight[3])().minimum;
  const obj2 = _require(keyboardOpenedHeight[2]);
  const sharedValue = _require(keyboardOpenedHeight[4]).useSharedValue(minimum);
  const result = sharedValue.set(minimum);
  const obj3 = _require(keyboardOpenedHeight[4]);
  const token = _require(keyboardOpenedHeight[5]).useToken(keyboardOpenOrOpening(keyboardOpenedHeight[6]).modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const obj5 = _require(keyboardOpenedHeight[5]);
  const fn = function p() {
    if (!keyboardOpenOrOpening.get()) {
      if (!keyboardWillOpenSharedValue.get()) {
        let value = keyboardTypeSharedValue.get();
        if (value === store(keyboardOpenedHeight[7]).KeyboardTypes.SYSTEM) {
          const _Math = Math;
          let bound = Math.max(store.get().bottom, token);
        } else {
          bound = sharedValue.get();
        }
        return bound;
      }
    }
    value = keyboardOpenedHeight.get();
    if (value <= 0) {
      const _Math2 = Math;
      value = Math.max(store.get().bottom, token);
    }
    return value;
  };
  obj = { chatInputSpaceBottom: token, keyboardOpenOrOpening, keyboardWillOpenSharedValue, keyboardOpenedHeight, insets: tmp, keyboardTypeSharedValue, KeyboardTypes: _require(keyboardOpenedHeight[7]).KeyboardTypes, customKeyboardSheetHeightSV: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 2789486228416;
  fn.__initData = keyboardTypeSharedValue;
  return _require(keyboardOpenedHeight[4]).useDerivedValue(fn);
};