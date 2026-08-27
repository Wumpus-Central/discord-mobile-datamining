// === Module 10909: useChannelSafeAreaHeightSharedValue ===

// Module 10909 (useChannelSafeAreaHeightSharedValue)
import set from "set" /* 2 */;

let closure_3 = { code: "function useChannelSafeAreaHeightSharedValueAndroidTsx1(){const{chatInputFloating,chatInputSpaceBottom,keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,insets,keyboardTypeSharedValue,KeyboardTypes,customKeyboardSheetHeightSV}=this.__closure;function resolveBottom(bottom){return chatInputFloating?Math.max(bottom,chatInputSpaceBottom):bottom;}if(keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()){const systemKeyboardHeight=keyboardOpenedHeight.get();if(systemKeyboardHeight<=0){return resolveBottom(insets.get().bottom);}return systemKeyboardHeight;}if(keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM){return resolveBottom(insets.get().bottom);}return customKeyboardSheetHeightSV.get();}" };
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
  const chatInputFloating = _require(keyboardOpenedHeight[7]).useMobileVisualRefreshConfig({ location: "ChatInput" }).chatInputFloating;
  const obj6 = _require(keyboardOpenedHeight[7]);
  const fn = function p() {
    if (!keyboardOpenOrOpening.get()) {
      if (!keyboardWillOpenSharedValue.get()) {
        let value = keyboardTypeSharedValue.get();
        if (value === store(keyboardOpenedHeight[8]).KeyboardTypes.SYSTEM) {
          const bottom = store.get().bottom;
          let bound = bottom;
          if (chatInputFloating) {
            const _Math = Math;
            bound = Math.max(bottom, token);
          }
          value = bound;
        } else {
          value = sharedValue.get();
        }
        return value;
      }
    }
    let value1 = keyboardOpenedHeight.get();
    if (value1 <= 0) {
      const bottom2 = store.get().bottom;
      let bound1 = bottom2;
      if (chatInputFloating) {
        const _Math2 = Math;
        bound1 = Math.max(bottom2, token);
      }
      value1 = bound1;
    }
    return value1;
  };
  obj = { chatInputFloating, chatInputSpaceBottom: token, keyboardOpenOrOpening, keyboardWillOpenSharedValue, keyboardOpenedHeight, insets: tmp, keyboardTypeSharedValue, KeyboardTypes: _require(keyboardOpenedHeight[8]).KeyboardTypes, customKeyboardSheetHeightSV: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 5448195636550;
  fn.__initData = keyboardTypeSharedValue;
  return _require(keyboardOpenedHeight[4]).useDerivedValue(fn);
};