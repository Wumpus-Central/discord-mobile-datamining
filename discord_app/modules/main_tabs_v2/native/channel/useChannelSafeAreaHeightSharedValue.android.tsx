// discord_app/modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx
import set from "set" /* 2 */;

let closure_3 = { code: "function useChannelSafeAreaHeightSharedValueAndroidTsx1(){const{chatInputFloating,chatInputSpaceBottom,keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,insets,keyboardTypeSharedValue,KeyboardTypes,customKeyboardHeight}=this.__closure;function resolveBottom(bottom){return chatInputFloating?Math.max(bottom,chatInputSpaceBottom):bottom;}if(keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()){const systemKeyboardHeight=keyboardOpenedHeight.get();if(systemKeyboardHeight<=0){return resolveBottom(insets.get().bottom);}return systemKeyboardHeight;}if(keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM){return resolveBottom(insets.get().bottom);}return customKeyboardHeight;}" };
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx");

export default function useChannelSafeAreaHeightSharedValue() {
  const tmp = keyboardOpenOrOpening(keyboardOpenedHeight[0])();
  const _require = tmp;
  const tmp2 = keyboardOpenOrOpening(keyboardOpenedHeight[1])();
  keyboardOpenOrOpening = tmp2.keyboardOpenOrOpening;
  keyboardOpenedHeight = tmp2.keyboardOpenedHeight;
  let obj = _require(keyboardOpenedHeight[2]);
  const keyboardTypeSharedValue = obj.useKeyboardTypeSharedValue();
  const keyboardWillOpenSharedValue = _require(keyboardOpenedHeight[2]).useKeyboardWillOpenSharedValue();
  const tmp5 = keyboardOpenOrOpening(keyboardOpenedHeight[3])();
  closure_5 = tmp5;
  const obj2 = _require(keyboardOpenedHeight[2]);
  const token = _require(keyboardOpenedHeight[4]).useToken(keyboardOpenOrOpening(keyboardOpenedHeight[5]).modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const obj3 = _require(keyboardOpenedHeight[4]);
  const chatInputFloating = _require(keyboardOpenedHeight[6]).useMobileVisualRefreshConfig({ location: "ChatInput" }).chatInputFloating;
  const obj4 = _require(keyboardOpenedHeight[6]);
  const fn = function o() {
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
          let tmp6 = bound;
        } else {
          tmp6 = closure_5;
        }
        return tmp6;
      }
    }
    value = keyboardOpenedHeight.get();
    if (value <= 0) {
      const bottom2 = store.get().bottom;
      let bound1 = bottom2;
      if (chatInputFloating) {
        const _Math2 = Math;
        bound1 = Math.max(bottom2, token);
      }
      value = bound1;
    }
    return value;
  };
  obj = { chatInputFloating, chatInputSpaceBottom: token, keyboardOpenOrOpening, keyboardWillOpenSharedValue, keyboardOpenedHeight, insets: tmp, keyboardTypeSharedValue, KeyboardTypes: _require(keyboardOpenedHeight[8]).KeyboardTypes, customKeyboardHeight: tmp5 };
  fn.__closure = obj;
  fn.__workletHash = 12051290156095;
  fn.__initData = keyboardTypeSharedValue;
  return _require(keyboardOpenedHeight[7]).useDerivedValue(fn);
};