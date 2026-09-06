// discord_app/modules/connectivity/native/components/GlobalStatusIndicator.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ActionSheetStore from "../../../action_sheet/native/ActionSheetStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import NativeMenuStore from "../../../native_menu/native/NativeMenuStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({
  View: closure_4,
  StyleSheet: hasOwnProperty,
  TouchableWithoutFeedback: metroRequire,
  NativeEventEmitter,
  NativeModules,
} = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const nativeEventEmitter = new NativeEventEmitter(NativeModules.DCDStatusBarOverlayViewManager);
function GlobalStatusIndicatorWrapper(onPress) {
  importDefault = undefined;
  let stateFromStores;
  onPress = undefined;
  closure_6 = undefined;
  const tmp3 = require("useVoiceStateForRemoteSession")();
  importDefault = tmp3;
  let obj = onPress(stateFromStores[9]);
  const items = [RTCConnectionStore];
  const items1 = [tmp3];
  stateFromStores = obj.useStateFromStores(
    items,
    () => {
      channelId = undefined;
      if (channelId != null) {
        channelId = channelId.channelId;
      }
      if (channelId == null) {
        channelId = RTCConnectionStore.getChannelId();
      }
      return channelId;
    },
    items1,
  );
  const items2 = [ChannelStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = onPress(stateFromStores[9]).useStateFromStores(
    items2,
    () => ChannelStore.getChannel(stateFromStores),
    items3,
  );
  const obj2 = onPress(stateFromStores[9]);
  const tmp = importDefault;
  const voiceChatNavigationContext = onPress(stateFromStores[10]).useVoiceChatNavigationContext();
  let openVoice;
  if (voiceChatNavigationContext != null) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  const items4 = [stateFromStores1, onPress, openVoice];
  onPress = stateFromStores1.useCallback(() => {
    if (null != stateFromStores1) {
      if (null != openVoice) {
        if (ChannelRTCStore.getChatOpen(tmp.id)) {
          tmp2();
        }
        if (onPress != null) {
          tmp8();
        }
      }
      const result = PrivateChannelCallUtils.navigateToVoiceChannel(tmp, "RTC Panel");
    }
  }, items4);
  closure_6 = stateFromStores1.useRef(onPress);
  const effect = stateFromStores1.useEffect(() => {
    closure_6.current = current;
  });
  const items5 = [stateFromStores];
  const effect1 = stateFromStores1.useEffect(() => {
    closure_0 = nativeEventEmitter.addListener("StatusBarTapped", () => {
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
  obj.accessibilityHint = stringResult;
  obj.onPress = onPress;
  obj = { children: tmp12(tmp(tmp2[13]), {}) };
  obj.children = closure_12(openVoice, obj);
  return closure_12(closure_6, obj);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/connectivity/native/components/GlobalStatusIndicator.tsx");

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
  const globalStatusIndicatorState = children(onPress[15]).useGlobalStatusIndicatorState(flag);
  let obj = children(onPress[15]);
  let items = [ActionSheetStore];
  const stateFromStores = children(onPress[9]).useStateFromStores(items, () => null != content.getContent());
  const obj2 = children(onPress[9]);
  const items1 = [NativeMenuStore];
  const height = globalStatusIndicatorState.height;
  let isVisible = globalStatusIndicatorState.isVisible;
  let stateFromStores1 = children(onPress[9]).useStateFromStores(items1, () => open.isOpen());
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
    let obj = {
      importantForAccessibility: str,
      accessibilityElementsHidden: stateFromStores1,
      style: null,
      children: null,
    };
    const items = [absoluteFill.absoluteFill];
    let num = 0;
    if (!flag2) {
      num = height;
    }
    items[1] = { marginTop: num, overflow: "hidden" };
    obj.style = items;
    obj.children = children;
    children = [closure_2_12(React4, obj)];
    let tmp3Result = null;
    if (isVisible) {
      obj = { onPress };
      tmp3Result = tmp3(GlobalStatusIndicatorWrapper, obj);
    }
    children[1] = tmp3Result;
    return closure_2_14(map1, { children });
  }, items2);
}
export const useGlobalStatusIndicatorHeightSharedValue = function useGlobalStatusIndicatorHeightSharedValue(
  globalStatusIndicatorState,
) {
  const sharedValue = ReanimatedRexport.useSharedValue(globalStatusIndicatorState.height);
  const items = [globalStatusIndicatorState.height, sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(globalStatusIndicatorState.height);
  }, items);
  return sharedValue;
};
