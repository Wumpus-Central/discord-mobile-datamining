// discord_app/modules/video_calls/native/components/ChannelCallModal.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import VoiceChatHooks from "../../../voice_chat/VoiceChatHooks.tsx";
import RevealProvider from "RevealProvider.tsx";
import CameraPreviewDefault from "CameraPreview.tsx";
import ChannelCallModalManagerDefault from "ChannelCallModalManager.tsx";
import ChannelCallNavigatorDefault from "ChannelCallNavigator.tsx";
import PanGestureAnimations from "../../../action_sheet/native/PanGestureAnimations.tsx";
import RouteManagerUtils from "../../../routing/native/RouteManagerUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
class ChannelCallCameraPreview {
  constructor(arg0) {
    channel = global.channel;
    tmp3 = closure_2;
    tmp = useIsVoiceChatFocused();
    tmp2 = closure_0;
    obj = closure_0(closure_2[9]);
    isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
    tmp5 = useChannelCallStore((focus) => focus.focus);
    obj2 = closure_0(closure_2[10]);
    revealProviderValue = obj2.useRevealProviderValue(tmp5, channel);
    tmp7 = closure_0(closure_2[11]);
    tmp9 = null;
    if (isConnectedToVoiceChannel) {
      tmp10 = jsx;
      obj = { value: null, children: null };
      obj.value = revealProviderValue;
      tmp11 = closure_1;
      obj1 = { channel: null, participantScreenIsFocused: null, isChannelCallModalOpen: null };
      obj1.channel = channel;
      obj1.participantScreenIsFocused = !tmp;
      obj1.isChannelCallModalOpen = tmp8;
      obj.children = jsx(closure_1(tmp3[12]), obj1);
      tmp9 = jsx(tmp2(tmp3[10]).RevealContext.Provider, obj);
    }
    return tmp9;
  }
}
class ChannelCallModal {
  constructor(arg0) {
    channel = global.channel;
    obj = { channelId: channel.id, guildId: channel.guild_id };
    return jsx(closure_30, obj);
  }
}
const ChannelCallStore = fn(9467);
({
  useChannelCallOrientationHandlers: closure_7,
  resetChannelCallStore: closure_8,
  useChannelCallStore: closure_9,
  setVoiceChatDrawerState: c10,
  useIsVoiceChatFocused: closure_11,
} = ChannelCallStore);
let VoiceChatDrawerState = fn(9468).VoiceChatDrawerState;
const Constants = fn(9473);
({ PAN_GESTURE_FAIL_OFFSET_Y: map1, SWIPE_TO_CHAT_ACTIVE_OFFSET: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_18 = noop.memo((arg0) => {
  const channel = _slicedToArray(noop.useState(ChannelStore.getChannel(arg0.channelId)), 1)[0];
  closure_7(channel);
  const items = [channel];
  const effect = noop.useEffect(() => {
    if (null != first) {
      ChannelCallModalManagerDefault.initialize(tmp);
      return () => {
        closure_1_1(9656).terminate();
        const obj = closure_1_1(9656);
        closure_1_1(9481).setHidden(false);
        const obj2 = closure_1_1(9481);
        if (!obj3.isModalOpen(closure_1_31)) {
          closure_1_8();
        }
      };
    }
  }, items);
  let tmp4 = null;
  if (null != channel) {
    let obj = { channel };
    tmp4 = closure_15(ChannelCallNavigatorDefault, obj);
  }
  return tmp4;
});
const __initData = { code: "function ChannelCallModalTsx1(){const{width}=this.__closure;return[0,-width];}" };
const __initData2 = {
  code: "function ChannelCallModalTsx2(){const{runOnJS,dismissKeyboard}=this.__closure;runOnJS(dismissKeyboard)();}",
};
const __initData3 = {
  code: "function ChannelCallModalTsx3(){const{voiceChatDrawerStoreState}=this.__closure;return voiceChatDrawerStoreState;}",
};
let closure_22 = {
  code: "function ChannelCallModalTsx4(){const{translateX,width}=this.__closure;translateX.set(-width);}",
};
const __initData4 = {
  code: "function ChannelCallModalTsx5(){const{isSwipeToChatInProgress,translateX,width,voiceChatDrawerState,VoiceChatDrawerState}=this.__closure;const chatGestureFinished=!isSwipeToChatInProgress.get();const drawerIsInSettledPosition=translateX.get()===-width||translateX.get()===0;const chatOpen=voiceChatDrawerState.get()===VoiceChatDrawerState.OPEN;const chatClosed=voiceChatDrawerState.get()===VoiceChatDrawerState.CLOSED;if(chatGestureFinished&&drawerIsInSettledPosition){return translateX.get()===-width?VoiceChatDrawerState.OPEN:VoiceChatDrawerState.CLOSED;}else if(chatOpen&&translateX.get()>-width){return VoiceChatDrawerState.CLOSING;}else if(chatClosed&&translateX.get()<0){return VoiceChatDrawerState.OPENING;}else{return null;}}",
};
const __initData5 = {
  code: "function ChannelCallModalTsx6(state,previousState){const{runOnJS,setVoiceChatDrawerState,channelId,VoiceChatDrawerState,transitionToVoiceRoute,guildId}=this.__closure;if(state===previousState)return;if(state!=null&&state!==previousState){runOnJS(setVoiceChatDrawerState)(channelId,state);if(state===VoiceChatDrawerState.OPEN){runOnJS(transitionToVoiceRoute)(guildId,channelId);}}}",
};
const __initData6 = {
  code: "function ChannelCallModalTsx7(){const{voiceChatDrawerState}=this.__closure;return voiceChatDrawerState.get();}",
};
const __initData7 = {
  code: "function ChannelCallModalTsx8(drawerState,drawerStatePrev){const{VoiceChatDrawerState,translateX,withPanGestureTiming}=this.__closure;if(drawerState===VoiceChatDrawerState.CLOSED&&drawerStatePrev===VoiceChatDrawerState.OPEN){translateX.set(withPanGestureTiming(0));}}",
};
const __initData8 = {
  code: "function ChannelCallModalTsx9(){const{interpolate,translateY,maxVerticalTranslate}=this.__closure;return{flex:1,transform:[{translateY:interpolate(translateY.get(),[0,maxVerticalTranslate],[0,maxVerticalTranslate])}]};}",
};
let closure_28 = {
  code: "function ChannelCallModalTsx10(){const{immediate,translateX,width,withPanGestureTiming}=this.__closure;if(immediate===true){translateX.set(-width);}else{translateX.set(withPanGestureTiming(-width));}}",
};
let closure_29 = {
  code: "function ChannelCallModalTsx11(){const{translateX,withPanGestureTiming}=this.__closure;translateX.set(withPanGestureTiming(0));}",
};
let closure_30 = noop.memo((channelId) => {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  let ref2;
  let sharedValue;
  let derivedValue;
  c13 = undefined;
  let ref;
  let __closure = channelId(ref[19]);
  let items = [sharedValue];
  let items1 = [channelId];
  const stateFromStores = __closure.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let obj2 = ref2;
  ref = ref2.useRef(undefined);
  const ref1 = ref2.useRef(undefined);
  ref2 = ref2.useRef(undefined);
  const ref3 = ref2.useRef(undefined);
  let obj3 = channelId(ref[16]);
  sharedValue = obj3.useSharedValue(0);
  let obj4 = channelId(ref[16]);
  const sharedValue1 = obj4.useSharedValue(0);
  const voiceChatDrawerState = derivedValue().voiceChatDrawerState;
  let obj5 = channelId(ref[16]);
  let fn = function c() {
    return voiceChatDrawerState;
  };
  fn.__closure = { voiceChatDrawerStoreState: voiceChatDrawerState };
  fn.__workletHash = 4903837231689;
  fn.__initData = __initData3;
  derivedValue = obj5.useDerivedValue(fn);
  const size = guildId(ref[20])();
  const width = size.width;
  const height = size.height;
  let obj6 = channelId(ref[16]);
  const sharedValue2 = obj6.useSharedValue(false);
  let result = 0.8 * height;
  VoiceChatDrawerState = result;
  const tmp13 = guildId(ref[21])(channelId);
  [tmp15, c13] = ref1(ref2.useState(false), 2);
  let tmp16 = !tmp13;
  if (!tmp13) {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    }
    tmp16 = !isGuildStageVoiceResult;
  }
  __closure = { channelId, guildId };
  ref = obj2.useRef(__closure);
  const effect = obj2.useEffect(() => {
    closure_15.current = current;
  });
  let items2 = [width, sharedValue];
  const effect1 = obj2.useEffect(() => {
    const current = ref.current;
    channelId = current.channelId;
    let chatOpen = state.getState().voiceChatDrawerState === VoiceChatDrawerState.OPEN;
    if (!chatOpen) {
      chatOpen = ChannelRTCStore.getChatOpen(channelId);
    }
    if (chatOpen) {
      const fn = function t() {
        const result = sharedValue.set(-width);
      };
      const __closure = { translateX: sharedValue, width };
      fn.__closure = __closure;
      fn.__workletHash = 15726690166344;
      fn.__initData = __initData;
      __closure.runOnUI(fn)();
      ReanimatedRexport.runOnJS(RouteManagerUtils.transitionToVoiceRoute)(current.guildId, channelId);
    }
  }, items2);
  const tmp14 = ref1(ref2.useState(false), 2);
  let tmpResult = tmp(tmp2[16]);
  function ae() {
    value = sharedValue2.get();
    let tmp3 = sharedValue.get() === -width;
    if (!tmp3) {
      tmp3 = 0 === obj.get();
    }
    value = derivedValue.get();
    const value1 = derivedValue.get();
    if (!value) {
      if (tmp3) {
        return obj.get() === -tmp2 ? tmp5.OPEN : tmp5.CLOSED;
      }
    }
    if (value !== VoiceChatDrawerState.OPEN) {
      let OPENING = null;
      if (value1 === VoiceChatDrawerState.CLOSED) {
        OPENING = null;
        if (obj.get() < 0) {
          OPENING = tmp5.OPENING;
        }
      }
    }
    OPENING = tmp5.CLOSING;
  }
  __closure = {
    isSwipeToChatInProgress: sharedValue2,
    translateX: sharedValue,
    width,
    voiceChatDrawerState: derivedValue,
    VoiceChatDrawerState,
  };
  ae.__closure = __closure;
  ae.__workletHash = 16786813095205;
  ae.__initData = __initData4;
  function te(arg0, arg1) {
    let tmp2 = tmp;
    if (arg0 !== arg1) {
      tmp2 = null != arg0;
    }
    if (tmp2) {
      tmp2 = tmp;
    }
    if (tmp2) {
      ReanimatedRexport.runOnJS(closure_2_10)(channelId, arg0);
      if (arg0 === VoiceChatDrawerState.OPEN) {
        tmp4(4296).runOnJS(tmp4(12782).transitionToVoiceRoute)(guildId, tmp7);
        const tmp4Result = tmp4(4296);
      }
      tmp7 = channelId;
    }
  }
  const tmp10Result = guildId(ref[23]);
  te.__closure = {
    runOnJS: channelId(ref[16]).runOnJS,
    setVoiceChatDrawerState: width,
    channelId,
    VoiceChatDrawerState,
    transitionToVoiceRoute: channelId(ref[22]).transitionToVoiceRoute,
    guildId,
  };
  te.__workletHash = 14188334620807;
  te.__initData = __initData5;
  const animatedReaction = tmpResult.useAnimatedReaction(ae, te);
  tmpResult = tmp(tmp2[16]);
  function re() {
    return derivedValue.get();
  }
  re.__closure = { voiceChatDrawerState: derivedValue };
  re.__workletHash = 14044794538420;
  re.__initData = __initData6;
  function ne(arg0, arg1) {
    let tmp2 = arg0 === VoiceChatDrawerState.CLOSED;
    if (tmp2) {
      tmp2 = arg1 === tmp.OPEN;
    }
    if (tmp2) {
      const result = sharedValue.set(PanGestureAnimations.withPanGestureTiming(0));
    }
  }
  obj2 = { VoiceChatDrawerState, translateX: sharedValue, withPanGestureTiming: tmp(tmp2[18]).withPanGestureTiming };
  ne.__closure = obj2;
  ne.__workletHash = 260500087614;
  ne.__initData = __initData7;
  const animatedReaction1 = tmpResult.useAnimatedReaction(re, ne);
  let tmp24 = !tmp15;
  if (!tmp15) {
    tmp24 = !tmp13;
  }
  closure_129_0 = width;
  const obj1 = {
    runOnJS: channelId(ref[16]).runOnJS,
    setVoiceChatDrawerState: width,
    channelId,
    VoiceChatDrawerState,
    transitionToVoiceRoute: channelId(ref[22]).transitionToVoiceRoute,
    guildId,
  };
  const fn2 = function u() {
    const items = [0, -channelId];
    return items;
  };
  fn2.__closure = { width };
  fn2.__workletHash = 15383459308604;
  fn2.__initData = __initData;
  const fn3 = function c() {
    channelId(ref[16]).runOnJS(channelId(ref[17]).dismissKeyboard)();
  };
  obj3 = { runOnJS: null, dismissKeyboard: null };
  const derivedValue1 = channelId(ref[16]).useDerivedValue(fn2);
  obj3.runOnJS = channelId(ref[16]).runOnJS;
  obj3.dismissKeyboard = channelId(ref[17]).dismissKeyboard;
  fn3.__closure = obj3;
  fn3.__workletHash = 4086900686382;
  fn3.__initData = __initData2;
  const callback = obj2.useCallback(fn3, []);
  obj4 = {
    lowerBounds: -width,
    upperBounds: 0,
    translate: sharedValue,
    vertical: false,
    snapPositions: derivedValue1,
    onStart: callback,
    isGestureInProgress: sharedValue2,
  };
  const tmpResult1 = channelId(ref[16]);
  const obj17 = guildId(ref[18])(obj4);
  const items3 = [-c13, c13];
  const enabledResult = guildId(ref[18])(obj4).enabled(tmp24);
  const items4 = [-__closure, __closure];
  const failOffsetYResult = guildId(ref[18])(obj4).enabled(tmp24).failOffsetY(items3);
  const activeOffsetXResult = guildId(ref[18])(obj4).enabled(tmp24).failOffsetY(items3).activeOffsetX(items4);
  obj5 = {
    gestureEnabled: tmp16,
    height,
    maxTranslate: result,
    thresholdTranslate: 0.5 * height,
    translateY: sharedValue1,
  };
  const withRefResult = guildId(ref[18])(obj4).enabled(tmp24).failOffsetY(items3).activeOffsetX(items4).withRef(ref);
  const obj22 = guildId(ref[25])(obj5);
  const items5 = [channelId];
  let result1 = guildId(ref[25])(obj5).withRef(ref3).requireExternalGestureToFail(ref2, ref1);
  const layoutEffect = obj2.useLayoutEffect(() => {
    const result = PrivateChannelCallUtils.maybeShowAgeGateModal(channelId);
  }, items5);
  const withRefResult1 = guildId(ref[25])(obj5).withRef(ref3);
  function oe() {
    obj = { flex: 1, transform: null };
    obj = { translateY: null };
    const items = [0, c12];
    const items1 = [0, c12];
    obj.translateY = ReanimatedRexport.interpolate(sharedValue1.get(), items, items1);
    const items2 = [obj];
    obj.transform = items2;
    return obj;
  }
  obj6 = { interpolate: tmp(tmp2[16]).interpolate, translateY: sharedValue1, maxVerticalTranslate: result };
  oe.__closure = obj6;
  oe.__workletHash = 8643926178558;
  oe.__initData = __initData8;
  const items6 = [ref2, ref3, ref, ref1, sharedValue, width, channelId];
  const animatedStyle = channelId(ref[16]).useAnimatedStyle(oe);
  let tmp32 = null;
  if (null != stateFromStores) {
    const obj7 = { value: tmp10Result(tmp10(tmp2[24]).CHANNEL_CALL).analyticsLocations, children: null };
    const obj8 = { gesture: null, children: null };
    const Gesture = tmp(tmp2[27]).Gesture;
    obj8.gesture = Gesture.Exclusive(withRefResult, result1);
    const obj9 = { style: animatedStyle, children: null };
    const obj10 = { value: tmp31, children: null };
    const obj11 = { channelId };
    const items7 = [ref(closure_18, obj11)];
    const obj12 = { channel: stateFromStores };
    items7[1] = ref(ChannelCallCameraPreview, obj12);
    obj10.children = items7;
    obj9.children = closure_16(tmp(tmp2[28]).VoiceChatNavigationContext.Provider, obj10);
    obj8.children = ref(tmp10(tmp2[16]).View, obj9);
    obj7.children = ref(tmp(tmp2[27]).GestureDetector, obj8);
    tmp32 = ref(tmp(tmp2[23]).AnalyticsLocationProvider, obj7);
  }
  return tmp32;
});
ChannelCallModal.modalConfig = { animation: fn(1074).ModalAnimation.SLIDE_UP, shouldPersistUnderModals: true };
let size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallModal.tsx");

export default ChannelCallModal;
export { ChannelCallCameraPreview };
export { ChannelCallModal };
