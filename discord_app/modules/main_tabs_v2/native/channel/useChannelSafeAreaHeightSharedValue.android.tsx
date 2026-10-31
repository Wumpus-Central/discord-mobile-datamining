// discord_app/modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardTypes from "../../../keyboard/native/KeyboardTypes.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import useChannelDockHeightDefault from "useChannelDockHeight.tsx";
import VoicePanelSheetMorph from "../../../voice_panel/native/dock/VoicePanelSheetMorph.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_4 = {
  code: "function useChannelSafeAreaHeightSharedValueAndroidTsx1(){const{dockHeightValue,chatInputSpaceBottom,keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,insets,keyboardTypeSharedValue,KeyboardTypes,customKeyboardSheetHeightSV}=this.__closure;const dockSpace=dockHeightValue.get();function resolveBottom(bottom){return Math.max(bottom,chatInputSpaceBottom,dockSpace);}if(keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()){const systemKeyboardHeight=keyboardOpenedHeight.get();if(systemKeyboardHeight<=0){return resolveBottom(insets.get().bottom);}return systemKeyboardHeight;}if(keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM){return resolveBottom(insets.get().bottom);}return customKeyboardSheetHeightSV.get();}",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx",
);

export default function useChannelSafeAreaHeightSharedValue() {
  const tmp = keyboardOpenOrOpening(keyboardOpenedHeight[5])();
  _require = tmp;
  const tmp2 = keyboardOpenOrOpening(keyboardOpenedHeight[6])();
  keyboardOpenOrOpening = tmp2.keyboardOpenOrOpening;
  keyboardOpenedHeight = tmp2.keyboardOpenedHeight;
  const keyboardTypeSharedValue = require("useKeyboardType").useKeyboardTypeSharedValue();
  let obj = require("useKeyboardType");
  const keyboardWillOpenSharedValue = require("useKeyboardType").useKeyboardWillOpenSharedValue();
  const minimum = keyboardOpenOrOpening(keyboardOpenedHeight[8])().minimum;
  const obj2 = require("useKeyboardType");
  const sharedValue = require("ReanimatedRexport").useSharedValue(minimum);
  let result = sharedValue.set(minimum);
  const obj3 = require("ReanimatedRexport");
  const token = require("useToken").useToken(
    keyboardOpenOrOpening(keyboardOpenedHeight[3]).modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM,
  );
  const tmp7 = keyboardOpenOrOpening(keyboardOpenedHeight[4])();
  closure_7 = tmp7;
  const obj5 = require("useToken");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(tmp7);
  const tmp9 = keyboardOpenOrOpening(keyboardOpenedHeight[10])();
  closure_9 = tmp9;
  const items = [tmp7, sharedValue1, tmp9];
  const effect = keyboardTypeSharedValue.useEffect(() => {
    if (closure_9) {
      let withSpringResult = spring.withSpring(closure_7, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG);
    } else {
      withSpringResult = closure_7;
    }
    const result = sharedValue1.set(withSpringResult);
  }, items);
  const obj6 = require("ReanimatedRexport");
  const fn = function p() {
    value = sharedValue1.get();
    if (!keyboardOpenOrOpening.get()) {
      if (!keyboardWillOpenSharedValue.get()) {
        const value3 = keyboardTypeSharedValue.get();
        if (value3 === KeyboardTypes.KeyboardTypes.SYSTEM) {
          const _Math = Math;
          let bound = Math.max(closure_0.get().bottom, token, value);
        } else {
          bound = sharedValue.get();
        }
        return bound;
      }
    }
    let value4 = keyboardOpenedHeight.get();
    if (value4 <= 0) {
      const _Math2 = Math;
      value4 = Math.max(closure_0.get().bottom, token, value);
    }
    return value4;
  };
  const obj7 = require("ReanimatedRexport");
  fn.__closure = {
    dockHeightValue: sharedValue1,
    chatInputSpaceBottom: token,
    keyboardOpenOrOpening,
    keyboardWillOpenSharedValue,
    keyboardOpenedHeight,
    insets: tmp,
    keyboardTypeSharedValue,
    KeyboardTypes: require("KeyboardTypes").KeyboardTypes,
    customKeyboardSheetHeightSV: sharedValue,
  };
  fn.__workletHash = 7676113890874;
  fn.__initData = keyboardWillOpenSharedValue;
  return obj7.useDerivedValue(fn);
}
export function useChannelSafeAreaRestingHeight() {
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  return Math.max(useSafeAreaInsetsDefault().bottom, token, useChannelDockHeightDefault());
}
