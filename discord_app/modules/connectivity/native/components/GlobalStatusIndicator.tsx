import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import setContent from "setContent";
import getParticipants from "getParticipants";
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import jsxProd from "jsxProd";

let NativeEventEmitter;
let NativeModules;
let c4;
let c5;
let closure_12;
let closure_14;
let closure_6;
let map1;
const require = arg1;
({ View: c4, StyleSheet: c5, TouchableWithoutFeedback: closure_6, NativeEventEmitter, NativeModules } = get_ActivityIndicator);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const nativeEventEmitter = new NativeEventEmitter(NativeModules.DCDStatusBarOverlayViewManager);
function GlobalStatusIndicatorWrapper(onPress) {
  onPress = onPress.onPress;
  let importDefault;
  let stateFromStores;
  let stateFromStores1;
  let openVoice;
  let callback;
  let closure_6;
  const tmp3 = importDefault(stateFromStores[8])();
  importDefault = tmp3;
  let obj = onPress(stateFromStores[9]);
  const items = [createRTCConnection];
  const items1 = [tmp3];
  stateFromStores = obj.useStateFromStores(items, () => {
    let channelId;
    if (_undefined != null) {
      channelId = _undefined.channelId;
    }
    if (channelId == null) {
      channelId = outer1_11.getChannelId();
    }
    return channelId;
  }, items1);
  const items2 = [ensureGuildLoaded];
  const items3 = [stateFromStores];
  stateFromStores1 = onPress(stateFromStores[9]).useStateFromStores(items2, () => outer1_10.getChannel(stateFromStores), items3);
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
        if (outer1_8.getChatOpen(tmp.id)) {
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
    let closure_0 = outer1_15.addListener("StatusBarTapped", () => {
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
let result = require("setContent").fileFinishedImporting("modules/connectivity/native/components/GlobalStatusIndicator.tsx");

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
  let c5;
  const globalStatusIndicatorState = children(onPress[15]).useGlobalStatusIndicatorState(flag);
  let obj = children(onPress[15]);
  let items = [setContent];
  const stateFromStores = children(onPress[9]).useStateFromStores(items, () => null != content.getContent());
  const obj2 = children(onPress[9]);
  const items1 = [initialize];
  height = globalStatusIndicatorState.height;
  isVisible = globalStatusIndicatorState.isVisible;
  const stateFromStores1 = children(onPress[9]).useStateFromStores(items1, () => open.isOpen());
  if (isVisible) {
    isVisible = !flag2;
  }
  let tmp4 = stateFromStores;
  if (!stateFromStores) {
    tmp4 = stateFromStores1;
  }
  c5 = tmp4;
  const items2 = [children, tmp4, isVisible, onPress, height, flag2];
  return height.useMemo(() => {
    let str;
    if (_undefined) {
      str = "no-hide-descendants";
    }
    let obj = { importantForAccessibility: str, accessibilityElementsHidden: _undefined, style: null, children: null };
    const items = [_undefined.absoluteFill, ];
    let num = 0;
    if (!flag2) {
      num = height;
    }
    items[1] = { marginTop: num, overflow: "hidden" };
    obj[2] = items;
    obj[3] = children;
    children = [outer1_12(isVisible, obj), ];
    let tmp3Result = null;
    if (isVisible) {
      obj = { onPress: null };
      obj[0] = onPress;
      tmp3Result = tmp3(outer1_16, obj);
    }
    children[1] = tmp3Result;
    return outer1_14(outer1_13, { children });
  }, items2);
};
export const useGlobalStatusIndicatorHeightSharedValue = function useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState) {
  const _require = globalStatusIndicatorState;
  const sharedValue = _require(4146).useSharedValue(globalStatusIndicatorState.height);
  const items = [globalStatusIndicatorState.height, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(globalStatusIndicatorState.height);
  }, items);
  return sharedValue;
};