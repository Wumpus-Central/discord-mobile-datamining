// discord_app/modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import useChannelDockHeightDefault from "useChannelDockHeight.tsx";
import MainTabsNavigatorPanelContextDefault from "../panels/MainTabsNavigatorPanelContext.tsx";
import useSafeAreaInsetsSharedValueDefault from "../../../safe_area/useSafeAreaInsetsSharedValue.native.tsx";
import useSafeAreaBottomKeyboardInfoControllerDefault from "useSafeAreaBottomKeyboardInfoController.tsx";
import useKeyboardActionSheetHeightDefault from "../../../action_sheet/native/useKeyboardActionSheetHeight.tsx";
import VoicePanelSheetMorph from "../../../voice_panel/native/dock/VoicePanelSheetMorph.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_4 = {
  code: "(function useChannelSafeAreaHeightSharedValueAndroidTsx1(){let[dockHeightValue,chatInputSpaceBottom,keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,insets,keyboardTypeSharedValue,KeyboardTypes,customKeyboardSheetHeightSV]=this.__closure;const dockSpace=dockHeightValue.get();function resolveBottom(bottom){return Math.max(bottom,chatInputSpaceBottom,dockSpace);}if(keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()){const systemKeyboardHeight=keyboardOpenedHeight.get();if(systemKeyboardHeight<=0){return resolveBottom(insets.get().bottom);}return systemKeyboardHeight;}if(keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM){return resolveBottom(insets.get().bottom);}return customKeyboardSheetHeightSV.get();})",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx",
);

export default function useChannelSafeAreaHeightSharedValue() {
  const tmp = useSafeAreaInsetsSharedValueDefault();
  ({ keyboardOpenOrOpening, keyboardOpenedHeight } = useSafeAreaBottomKeyboardInfoControllerDefault());
  const tmp2 = useSafeAreaBottomKeyboardInfoControllerDefault();
  const keyboardTypeSharedValue = require("useKeyboardType").useKeyboardTypeSharedValue();
  let obj = require("useKeyboardType");
  const keyboardWillOpenSharedValue = require("useKeyboardType").useKeyboardWillOpenSharedValue();
  const minimum = useKeyboardActionSheetHeightDefault().minimum;
  const obj2 = require("useKeyboardType");
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(minimum);
  let result = sharedValue.set(minimum);
  const obj3 = require("../../../../../_runtime/metro/01652__.js");
  const token = require("useToken").useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const tmp7 = useChannelDockHeightDefault();
  _require = tmp7;
  const obj5 = require("useToken");
  const sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(tmp7);
  const obj6 = require("../../../../../_runtime/metro/01652__.js");
  const isChannelFullyOpen = require("useIsChannelFullyOpen").getIsChannelFullyOpen(
    noop.useContext(MainTabsNavigatorPanelContextDefault),
  );
  items = [tmp7, sharedValue1, isChannelFullyOpen];
  const effect = noop.useEffect(() => {
    if (c2) {
      let withSpringResult = spring_spring.withSpring(c0, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG);
    } else {
      withSpringResult = c0;
    }
    const result = _undefined2.set(withSpringResult);
  }, items);
  const obj7 = require("useIsChannelFullyOpen");
  const items1 = [
    c4,
    sharedValue1,
    token,
    keyboardOpenOrOpening,
    keyboardWillOpenSharedValue,
    keyboardOpenedHeight,
    tmp,
    keyboardTypeSharedValue,
    require("KeyboardTypes").KeyboardTypes,
    sharedValue,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items1;
  function useChannelSafeAreaHeightSharedValueAndroidTsx1() {
    value = _undefined.get();
    if (!_undefined3.get()) {
      if (!_undefined4.get()) {
        if (_undefined7.get() === _undefined8.SYSTEM) {
          const _Math = Math;
          let bound = Math.max(_undefined6.get().bottom, c1, value);
        } else {
          bound = _undefined9.get();
        }
        return bound;
      }
    }
    value2 = _undefined5.get();
    if (value2 <= 0) {
      const _Math2 = Math;
      value2 = Math.max(_undefined6.get().bottom, c1, value);
    }
    return value2;
  }
  const items2 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  useChannelSafeAreaHeightSharedValueAndroidTsx1.__closure = items2;
  useChannelSafeAreaHeightSharedValueAndroidTsx1.__workletHash = 15573495853475;
  useChannelSafeAreaHeightSharedValueAndroidTsx1.__initData = tmp11;
  return require("../../../../../_runtime/metro/01652__.js").useDerivedValue(
    useChannelSafeAreaHeightSharedValueAndroidTsx1,
  );
}
export function useChannelSafeAreaRestingHeight() {
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  return Math.max(useSafeAreaInsetsDefault().bottom, token, useChannelDockHeightDefault());
}
