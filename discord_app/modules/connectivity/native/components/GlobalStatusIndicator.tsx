// discord_app/modules/connectivity/native/components/GlobalStatusIndicator.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../action_sheet/native/ActionSheetStore.tsx";
import closure_8 from "../../../calls/ChannelRTCStore.tsx";
import closure_9 from "../../../native_menu/native/NativeMenuStore.tsx";
import closure_10 from "../../../../stores/ChannelStore.tsx";
import closure_11 from "../../../../stores/RTCConnectionStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";

const require = arg1;
({ View: c4, StyleSheet: c5, TouchableWithoutFeedback: closure_6, NativeEventEmitter, NativeModules } = get_ActivityIndicator);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const nativeEventEmitter = new NativeEventEmitter(NativeModules.DCDStatusBarOverlayViewManager);
function GlobalStatusIndicatorWrapper(onPress) {
  onPress = onPress.onPress;
  importDefault = undefined;
  let stateFromStores;
  let stateFromStores1;
  let openVoice;
  let callback;
  closure_6 = undefined;
  const tmp3 = importDefault(stateFromStores[8])();
  importDefault = tmp3;
  let obj = onPress(stateFromStores[9]);
  const items = [closure_11];
  const items1 = [tmp3];
  stateFromStores = obj.useStateFromStores(items, () => {
    let channelId;
    if (channelId != null) {
      channelId = channelId.channelId;
    }
    if (channelId == null) {
      channelId = closure_1_11.getChannelId();
    }
    return channelId;
  }, items1);
  const items2 = [closure_10];
  const items3 = [stateFromStores];
  stateFromStores1 = onPress(stateFromStores[9]).useStateFromStores(items2, () => closure_1_10.getChannel(stateFromStores), items3);
  const obj2 = onPress(stateFromStores[9]);
  const tmp = importDefault;
  const voiceChatNavigationContext = onPress(stateFromStores[10]).useVoiceChatNavigationContext();
  openVoice = undefined;
  if (voiceChatNavigationContext != null) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  const items4 = [stateFromStores1, onPress, openVoice];
  callback = stateFromStores1.useCallback(() => {
    if (null != stateFromStores1) {
      if (null != openVoice) {
        if (closure_1_8.getChatOpen(tmp.id)) {
          tmp2();
        }
        if (onPress != null) {
          tmp8();
        }
      }
      const result = onPress(stateFromStores[11]).navigateToVoiceChannel(tmp, "RTC Panel");
      const obj = onPress(stateFromStores[11]);
    }
  }, items4);
  closure_6 = stateFromStores1.useRef(callback);
  const effect = stateFromStores1.useEffect(() => {
    closure_6.current = callback;
  });
  const items5 = [stateFromStores];
  const effect1 = stateFromStores1.useEffect(() => {
    closure_0 = closure_1_15.addListener("StatusBarTapped", () => {
      ref.current();
    });
    return () => {
      if (null != closure_0) {
        closure_0.remove();
      }
    };
  }, items5);
  let str = "text";
  if (null != stateFromStores1) {
    str = "button";
  }
  obj = { accessibilityRole: str, accessibilityHint: null, onPress: null, children: null };
  let stringResult;
  if (null != stateFromStores1) {
    const intl = tmp4(tmp2[12]).intl;
    stringResult = intl.string(tmp4(tmp2[12]).t.GaCMgX);
  }
  obj[1] = stringResult;
  obj[2] = callback;
  obj = { children: tmp12(tmp(tmp2[13]), {}) };
  obj[3] = closure_12(openVoice, obj);
  return closure_12(closure_6, obj);
}
let result = require("set").fileFinishedImporting("modules/connectivity/native/components/GlobalStatusIndicator.tsx");

export default function GlobalStatusIndicator(children) {
  children = children.children;
  let flag = children.showWhenParticipantOnScreen;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = children.forceHide;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onPress = children.onPress;
  let height;
  let isVisible;
  let stateFromStores1;
  const globalStatusIndicatorState = children(onPress[15]).useGlobalStatusIndicatorState(flag);
  let obj = children(onPress[15]);
  let items = [closure_7];
  const stateFromStores = children(onPress[9]).useStateFromStores(items, () => null != content.getContent());
  const obj2 = children(onPress[9]);
  const items1 = [closure_9];
  height = globalStatusIndicatorState.height;
  isVisible = globalStatusIndicatorState.isVisible;
  stateFromStores1 = children(onPress[9]).useStateFromStores(items1, () => open.isOpen());
  if (isVisible) {
    isVisible = !flag2;
  }
  let tmp4 = stateFromStores;
  if (!stateFromStores) {
    tmp4 = stateFromStores1;
  }
  stateFromStores1 = tmp4;
  const items2 = [children, tmp4, isVisible, onPress, height, flag2];
  return height.useMemo(() => {
    let str;
    if (stateFromStores1) {
      str = "no-hide-descendants";
    }
    let obj = { importantForAccessibility: str, accessibilityElementsHidden: stateFromStores1, style: null, children: null };
    const items = [stateFromStores1.absoluteFill, ];
    let num = 0;
    if (!flag2) {
      num = height;
    }
    items[1] = { marginTop: num, overflow: "hidden" };
    obj[2] = items;
    obj[3] = children;
    children = [closure_1_12(isVisible, obj), ];
    let tmp3Result = null;
    if (isVisible) {
      obj = { onPress: null };
      obj[0] = onPress;
      tmp3Result = tmp3(closure_1_16, obj);
    }
    children[1] = tmp3Result;
    return closure_1_14(closure_1_13, { children });
  }, items2);
};
export const useGlobalStatusIndicatorHeightSharedValue = function useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState) {
  const _require = globalStatusIndicatorState;
  const sharedValue = _ReanimatedRexport.useSharedValue(globalStatusIndicatorState.height);
  const items = [globalStatusIndicatorState.height, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(globalStatusIndicatorState.height);
  }, items);
  return sharedValue;
};