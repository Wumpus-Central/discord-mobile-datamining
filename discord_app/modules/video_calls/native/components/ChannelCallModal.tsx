// === Module 9056: ChannelCallModal ===

// Module 9056 (ChannelCallModal)
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5097 */;
import VoiceChatHooks from "VoiceChatHooks" /* 9054 */;
import RevealProvider from "RevealProvider" /* 9058 */;
import CameraPreviewDefault from "CameraPreview" /* 9063 */;
import ChannelCallModalManagerDefault from "ChannelCallModalManager" /* 9154 */;
import ChannelCallNavigatorDefault from "ChannelCallNavigator" /* 9155 */;
import PanGestureAnimations from "PanGestureAnimations" /* 12549 */;
import RouteManagerUtils from "RouteManagerUtils" /* 12550 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import ChannelStore from "ChannelStore" /* 2051 */;

const PanGestureAnimationsDefault = PanGestureAnimations;

require = fn;
const ChannelCallStore = fn(9050);
({ useChannelCallOrientationHandlers: closure_7, resetChannelCallStore: closure_8, useChannelCallStore: closure_9, setVoiceChatDrawerState: c10, useIsVoiceChatFocused: closure_11 } = ChannelCallStore);
let VoiceChatDrawerState = fn(9051).VoiceChatDrawerState;
const Constants = fn(9057);
({ PAN_GESTURE_FAIL_OFFSET_Y: map1, SWIPE_TO_CHAT_ACTIVE_OFFSET: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = c.c(7);
  channel = channel.channel;
  const tmp4 = closure_1_11();
  const isConnectedToVoiceChannel = VoiceChatHooks.useIsConnectedToVoiceChannel(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(focus) {
      return focus.focus;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp7 = state(first);
  const revealProviderValue = RevealProvider.useRevealProviderValue(tmp7, channel);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const isModalOpenResult = NavigationRouteUtils.isModalOpen(closure_34);
    cResult[1] = isModalOpenResult;
    let tmp9 = isModalOpenResult;
    const tmpResult2 = NavigationRouteUtils;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === channel) {
    if (cResult[3] === isConnectedToVoiceChannel) {
      if (cResult[4] === tmp4) {
        if (cResult[5] === revealProviderValue) {
          let tmp12 = cResult[6];
        }
        return tmp12;
      }
    }
  }
  let tmp13 = null;
  if (isConnectedToVoiceChannel) {
    const obj3 = { value: revealProviderValue, children: null };
    const obj4 = { channel, participantScreenIsFocused: !tmp4, isChannelCallModalOpen: tmp9 };
    obj3.children = closure_1_15(CameraPreviewDefault, obj4);
    tmp13 = closure_1_15(RevealProvider.RevealContext.Provider, obj3);
  }
  cResult[2] = channel;
  cResult[3] = isConnectedToVoiceChannel;
  cResult[4] = tmp4;
  cResult[5] = revealProviderValue;
  cResult[6] = tmp13;
  tmp12 = tmp13;
  const tmpResult = RevealProvider;
}) : ((channel) => {
  channel = channel.channel;
  const tmp = closure_1_11();
  const isConnectedToVoiceChannel = VoiceChatHooks.useIsConnectedToVoiceChannel(channel);
  const tmp5 = state((focus) => focus.focus);
  const revealProviderValue = RevealProvider.useRevealProviderValue(tmp5, channel);
  NavigationRouteUtils;
  let tmp9 = null;
  if (isConnectedToVoiceChannel) {
    const obj3 = { value: revealProviderValue, children: null };
    const obj4 = { channel, participantScreenIsFocused: !tmp, isChannelCallModalOpen: tmp8 };
    obj3.children = closure_1_15(CameraPreviewDefault, obj4);
    tmp9 = closure_1_15(RevealProvider.RevealContext.Provider, obj3);
  }
  return tmp9;
});
let closure_17 = tmp5;
ReactCompilerGating = fn(558);
let closure_18 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = first(576).c(7);
  channelId = channelId.channelId;
  if (cResult[0] !== channelId) {
    const channel = ChannelStore.getChannel(channelId);
    cResult[0] = channelId;
    cResult[1] = channel;
    let tmp2 = channel;
  } else {
    tmp2 = cResult[1];
  }
  first = _slicedToArray(noop.useState(tmp2), 1)[0];
  closure_7(first);
  if (cResult[2] !== first) {
    class C {
      constructor() {
        if (null != closure_0) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          initializeResult = obj.initialize(tmp);
          return () => { ... };
        } else {
          return;
        }
      }
    }
    const items = [first];
    cResult[2] = first;
    cResult[3] = C;
    cResult[4] = items;
    let tmp8 = items;
  } else {
    class C {
      constructor() {
        if (null != closure_0) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          initializeResult = obj.initialize(tmp);
          return () => { ... };
        } else {
          return;
        }
      }
    }
    tmp8 = cResult[4];
  }
  const effect = noop.useEffect(C, tmp8);
  if (null == first) {
    class C {
      constructor() {
        if (null != closure_0) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          initializeResult = obj.initialize(tmp);
          return () => { ... };
        } else {
          return;
        }
      }
    }
  } else {
    class C {
      constructor() {
        if (null != closure_0) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          initializeResult = obj.initialize(tmp);
          return () => { ... };
        } else {
          return;
        }
      }
    }
  }
  let obj = first(576);
}) : ((arg0) => {
  const channel = _slicedToArray(noop.useState(ChannelStore.getChannel(arg0.channelId)), 1)[0];
  closure_7(channel);
  const items = [channel];
  const effect = noop.useEffect(() => {
    if (null != first) {
      ChannelCallModalManagerDefault.initialize(tmp);
      return () => {
        closure_1_1(9154).terminate();
        const obj = closure_1_1(9154);
        closure_1_1(9060).setHidden(false);
        const obj2 = closure_1_1(9060);
        if (!obj3.isModalOpen(closure_1_34)) {
          closure_1_8();
        }
        obj3 = channel(4736);
      };
    }
  }, items);
  let tmp4 = null;
  if (null != channel) {
    let obj = { channel };
    tmp4 = closure_15(ChannelCallNavigatorDefault, obj);
  }
  return tmp4;
}));
const __initData = { code: "function ChannelCallModalTsx1(){const{width}=this.__closure;return[0,-width];}" };
const __initData2 = { code: "function ChannelCallModalTsx2(){const{runOnJS,dismissKeyboard}=this.__closure;runOnJS(dismissKeyboard)();}" };
const __initData3 = { code: "function ChannelCallModalTsx3(){const{width}=this.__closure;return[0,-width];}" };
const __initData4 = { code: "function ChannelCallModalTsx4(){const{runOnJS,dismissKeyboard}=this.__closure;runOnJS(dismissKeyboard)();}" };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = width(576).c(9);
  ({ translateX, width } = arg0);
  ({ enabled, isGestureInProgress } = arg0);
  const obj = width(576);
  const fn = function n() {
    const items = [0, -width];
    return items;
  };
  fn.__closure = { width };
  fn.__workletHash = 15383459308604;
  fn.__initData = __initData;
  const derivedValue = width(4612).useDerivedValue(fn);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l() {
      width(4612).runOnJS(width(4745).dismissKeyboard)();
    };
    const obj3 = { runOnJS: width(4612).runOnJS, dismissKeyboard: width(4745).dismissKeyboard };
    fn2.__closure = obj3;
    fn2.__workletHash = 4086900686382;
    fn2.__initData = __initData2;
    cResult[0] = fn2;
    let first = fn2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === isGestureInProgress) {
    if (cResult[2] === derivedValue) {
      if (cResult[3] === tmp7) {
        if (cResult[4] === translateX) {
          let tmp8 = cResult[5];
        }
        const obj5 = PanGestureAnimationsDefault(tmp8);
        if (cResult[6] === enabled) {
          if (cResult[7] === obj5) {
            let tmp10 = cResult[8];
          }
          return tmp10;
        }
        let items = [-closure_13, closure_13];
        const enabledResult = obj5.enabled(enabled);
        const items1 = [-closure_14, closure_14];
        const activeOffsetXResult = obj5.enabled(enabled).failOffsetY(items).activeOffsetX(items1);
        cResult[6] = enabled;
        cResult[7] = obj5;
        cResult[8] = activeOffsetXResult;
        tmp10 = activeOffsetXResult;
        const failOffsetYResult = obj5.enabled(enabled).failOffsetY(items);
      }
    }
  }
  const obj4 = { lowerBounds: -width, upperBounds: 0, translate: translateX, vertical: false, snapPositions: derivedValue, onStart: first, isGestureInProgress };
  cResult[1] = isGestureInProgress;
  cResult[2] = derivedValue;
  cResult[3] = -width;
  cResult[4] = translateX;
  cResult[5] = obj4;
  tmp8 = obj4;
  const obj2 = width(4612);
}) : ((width) => {
  width = width.width;
  ({ translateX, enabled, isGestureInProgress } = width);
  const fn = function u() {
    const items = [0, -width];
    return items;
  };
  fn.__closure = { width };
  fn.__workletHash = 11365418877886;
  fn.__initData = __initData3;
  const fn2 = function c() {
    width(4612).runOnJS(width(4745).dismissKeyboard)();
  };
  const obj2 = { runOnJS: null, dismissKeyboard: null };
  const derivedValue = width(4612).useDerivedValue(fn);
  obj2.runOnJS = width(4612).runOnJS;
  obj2.dismissKeyboard = width(4745).dismissKeyboard;
  fn2.__closure = obj2;
  fn2.__workletHash = 17381416484264;
  fn2.__initData = __initData4;
  const callback = noop.useCallback(fn2, []);
  const obj = width(4612);
  const obj3 = { lowerBounds: -width, upperBounds: 0, translate: translateX, vertical: false, snapPositions: derivedValue, onStart: callback, isGestureInProgress };
  const obj4 = PanGestureAnimationsDefault({ lowerBounds: -width, upperBounds: 0, translate: translateX, vertical: false, snapPositions: derivedValue, onStart: callback, isGestureInProgress });
  let items = [-closure_13, closure_13];
  const enabledResult = PanGestureAnimationsDefault({ lowerBounds: -width, upperBounds: 0, translate: translateX, vertical: false, snapPositions: derivedValue, onStart: callback, isGestureInProgress }).enabled(enabled);
  const items1 = [-closure_14, closure_14];
  return PanGestureAnimationsDefault({ lowerBounds: -width, upperBounds: 0, translate: translateX, vertical: false, snapPositions: derivedValue, onStart: callback, isGestureInProgress }).enabled(enabled).failOffsetY(items).activeOffsetX(items1);
});
const __initData5 = { code: "function ChannelCallModalTsx5(){const{voiceChatDrawerStoreState}=this.__closure;return voiceChatDrawerStoreState;}" };
let closure_25 = { code: "function ChannelCallModalTsx6(){const{translateX,width}=this.__closure;translateX.set(-width);}" };
const __initData6 = { code: "function ChannelCallModalTsx7(){const{isSwipeToChatInProgress,translateX,width,voiceChatDrawerState,VoiceChatDrawerState}=this.__closure;const chatGestureFinished=!isSwipeToChatInProgress.get();const drawerIsInSettledPosition=translateX.get()===-width||translateX.get()===0;const chatOpen=voiceChatDrawerState.get()===VoiceChatDrawerState.OPEN;const chatClosed=voiceChatDrawerState.get()===VoiceChatDrawerState.CLOSED;if(chatGestureFinished&&drawerIsInSettledPosition){return translateX.get()===-width?VoiceChatDrawerState.OPEN:VoiceChatDrawerState.CLOSED;}else if(chatOpen&&translateX.get()>-width){return VoiceChatDrawerState.CLOSING;}else if(chatClosed&&translateX.get()<0){return VoiceChatDrawerState.OPENING;}else{return null;}}" };
const __initData7 = { code: "function ChannelCallModalTsx8(state,previousState){const{runOnJS,setVoiceChatDrawerState,channelId,VoiceChatDrawerState,transitionToVoiceRoute,guildId}=this.__closure;if(state===previousState)return;if(state!=null&&state!==previousState){runOnJS(setVoiceChatDrawerState)(channelId,state);if(state===VoiceChatDrawerState.OPEN){runOnJS(transitionToVoiceRoute)(guildId,channelId);}}}" };
const __initData8 = { code: "function ChannelCallModalTsx9(){const{voiceChatDrawerState}=this.__closure;return voiceChatDrawerState.get();}" };
const __initData9 = { code: "function ChannelCallModalTsx10(drawerState,drawerStatePrev){const{VoiceChatDrawerState,translateX,withPanGestureTiming}=this.__closure;if(drawerState===VoiceChatDrawerState.CLOSED&&drawerStatePrev===VoiceChatDrawerState.OPEN){translateX.set(withPanGestureTiming(0));}}" };
const __initData10 = { code: "function ChannelCallModalTsx11(){const{interpolate,translateY,maxVerticalTranslate}=this.__closure;return{flex:1,transform:[{translateY:interpolate(translateY.get(),[0,maxVerticalTranslate],[0,maxVerticalTranslate])}]};}" };
let closure_31 = { code: "function ChannelCallModalTsx12(){const{immediate,translateX,width,withPanGestureTiming}=this.__closure;if(immediate===true){translateX.set(-width);}else{translateX.set(withPanGestureTiming(-width));}}" };
let closure_32 = { code: "function ChannelCallModalTsx13(){const{translateX,withPanGestureTiming}=this.__closure;translateX.set(withPanGestureTiming(0));}" };
let closure_33 = noop.memo((channelId) => {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  let ref2;
  let sharedValue;
  let derivedValue;
  c13 = undefined;
  let obj2;
  let ref;
  let items = [sharedValue];
  let items1 = [channelId];
  const stateFromStores = channelId(ref[21]).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  ref = ref2.useRef(undefined);
  const ref1 = ref2.useRef(undefined);
  ref2 = ref2.useRef(undefined);
  const ref3 = ref2.useRef(undefined);
  let obj = channelId(ref[21]);
  sharedValue = channelId(ref[18]).useSharedValue(0);
  const obj4 = channelId(ref[18]);
  const sharedValue1 = channelId(ref[18]).useSharedValue(0);
  const voiceChatDrawerState = derivedValue().voiceChatDrawerState;
  const obj5 = channelId(ref[18]);
  let fn = function c() {
    return voiceChatDrawerState;
  };
  fn.__closure = { voiceChatDrawerStoreState: voiceChatDrawerState };
  fn.__workletHash = 1850293898191;
  fn.__initData = __initData5;
  derivedValue = channelId(ref[18]).useDerivedValue(fn);
  const size = guildId(ref[22])();
  const width = size.width;
  const height = size.height;
  const obj6 = channelId(ref[18]);
  const sharedValue2 = channelId(ref[18]).useSharedValue(false);
  let result = 0.8 * height;
  VoiceChatDrawerState = result;
  const tmp13 = guildId(ref[23])(channelId);
  const obj7 = channelId(ref[18]);
  [tmp15, c13] = ref1(ref2.useState(false), 2);
  let tmp16 = !tmp13;
  if (!tmp13) {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    }
    tmp16 = !isGuildStageVoiceResult;
  }
  obj2 = { channelId, guildId };
  ref = obj3.useRef(obj2);
  const effect = obj3.useEffect(() => {
    closure_15.current = obj2;
  });
  let items2 = [width, sharedValue];
  const effect1 = obj3.useEffect(() => {
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
      obj2 = { translateX: sharedValue, width };
      fn.__closure = obj2;
      fn.__workletHash = 9701831910602;
      fn.__initData = __initData;
      ReanimatedRexport.runOnUI(fn)();
      ReanimatedRexport.runOnJS(RouteManagerUtils.transitionToVoiceRoute)(current.guildId, channelId);
    }
  }, items2);
  const tmp14 = ref1(ref2.useState(false), 2);
  const tmp10Result = guildId(ref[25]);
  function ee() {
    value = sharedValue2.get();
    let tmp3 = sharedValue.get() === -width;
    if (!tmp3) {
      tmp3 = 0 === sharedValue.get();
    }
    value3 = derivedValue.get();
    const value4 = derivedValue.get();
    if (!value) {
      if (tmp3) {
        return sharedValue.get() === -width ? VoiceChatDrawerState.OPEN : VoiceChatDrawerState.CLOSED;
      }
    }
    if (value3 !== VoiceChatDrawerState.OPEN) {
      let OPENING = null;
      if (value4 === VoiceChatDrawerState.CLOSED) {
        OPENING = null;
        if (sharedValue.get() < 0) {
          OPENING = VoiceChatDrawerState.OPENING;
        }
      }
    }
    OPENING = VoiceChatDrawerState.CLOSING;
  }
  ee.__closure = { isSwipeToChatInProgress: sharedValue2, translateX: sharedValue, width, voiceChatDrawerState: derivedValue, VoiceChatDrawerState };
  ee.__workletHash = 11845527104167;
  ee.__initData = __initData6;
  const fn2 = function $(arg0, arg1) {
    let tmp2 = tmp;
    if (arg0 !== arg1) {
      tmp2 = null != arg0;
    }
    if (tmp2) {
      tmp2 = tmp;
    }
    if (tmp2) {
      ReanimatedRexport.runOnJS(v65535)(channelId, arg0);
      if (arg0 === VoiceChatDrawerState.OPEN) {
        ReanimatedRexport.runOnJS(RouteManagerUtils.transitionToVoiceRoute)(guildId, channelId);
        const tmp4Result = ReanimatedRexport;
      }
    }
  };
  const obj8 = { isSwipeToChatInProgress: sharedValue2, translateX: sharedValue, width, voiceChatDrawerState: derivedValue, VoiceChatDrawerState };
  const tmpResult = channelId(ref[18]);
  fn2.__closure = { runOnJS: channelId(ref[18]).runOnJS, setVoiceChatDrawerState: width, channelId, VoiceChatDrawerState, transitionToVoiceRoute: channelId(ref[24]).transitionToVoiceRoute, guildId };
  fn2.__workletHash = 11787615109897;
  fn2.__initData = __initData7;
  const animatedReaction = tmpResult.useAnimatedReaction(ee, fn2);
  const obj9 = { runOnJS: channelId(ref[18]).runOnJS, setVoiceChatDrawerState: width, channelId, VoiceChatDrawerState, transitionToVoiceRoute: channelId(ref[24]).transitionToVoiceRoute, guildId };
  function ae() {
    return derivedValue.get();
  }
  ae.__closure = { voiceChatDrawerState: derivedValue };
  ae.__workletHash = 13861048977978;
  ae.__initData = __initData8;
  function te(arg0, arg1) {
    let tmp2 = arg0 === VoiceChatDrawerState.CLOSED;
    if (tmp2) {
      tmp2 = arg1 === tmp.OPEN;
    }
    if (tmp2) {
      const result = sharedValue.set(PanGestureAnimations.withPanGestureTiming(0));
    }
  }
  const tmpResult3 = channelId(ref[18]);
  te.__closure = { VoiceChatDrawerState, translateX: sharedValue, withPanGestureTiming: channelId(ref[20]).withPanGestureTiming };
  te.__workletHash = 13290580455783;
  te.__initData = __initData9;
  const animatedReaction1 = tmpResult3.useAnimatedReaction(ae, te);
  const obj11 = { isGestureInProgress: sharedValue2, channelId, width, translateX: sharedValue, enabled: null };
  let tmp25 = !tmp15;
  if (!tmp15) {
    tmp25 = !tmp13;
  }
  obj11.enabled = tmp25;
  const obj10 = { VoiceChatDrawerState, translateX: sharedValue, withPanGestureTiming: channelId(ref[20]).withPanGestureTiming };
  const tmp24Result = closure_23(obj11);
  const obj12 = { gestureEnabled: tmp16, height, maxTranslate: result, thresholdTranslate: 0.5 * height, translateY: sharedValue1 };
  const withRefResult = closure_23(obj11).withRef(ref);
  const obj17 = guildId(ref[27])({ gestureEnabled: tmp16, height, maxTranslate: result, thresholdTranslate: 0.5 * height, translateY: sharedValue1 });
  const items3 = [channelId];
  let result1 = guildId(ref[27])({ gestureEnabled: tmp16, height, maxTranslate: result, thresholdTranslate: 0.5 * height, translateY: sharedValue1 }).withRef(ref3).requireExternalGestureToFail(ref2, ref1);
  const layoutEffect = obj3.useLayoutEffect(() => {
    const result = PrivateChannelCallUtils.maybeShowAgeGateModal(channelId);
  }, items3);
  const withRefResult1 = guildId(ref[27])({ gestureEnabled: tmp16, height, maxTranslate: result, thresholdTranslate: 0.5 * height, translateY: sharedValue1 }).withRef(ref3);
  function se() {
    const obj = { flex: 1, transform: null };
    obj2 = { translateY: null };
    const items = [0, c12];
    const items1 = [0, c12];
    obj2.translateY = ReanimatedRexport.interpolate(sharedValue1.get(), items, items1);
    const items2 = [obj2];
    obj.transform = items2;
    return obj;
  }
  const tmpResult4 = channelId(ref[18]);
  se.__closure = { interpolate: channelId(ref[18]).interpolate, translateY: sharedValue1, maxVerticalTranslate: result };
  se.__workletHash = 8383937622055;
  se.__initData = __initData10;
  const items4 = [ref2, ref3, ref, ref1, sharedValue, width, channelId];
  const animatedStyle = tmpResult4.useAnimatedStyle(se);
  let tmp31 = null;
  if (null != stateFromStores) {
    const obj14 = { value: tmp10Result(tmp10(tmp2[26]).CHANNEL_CALL).analyticsLocations, children: null };
    const obj15 = { gesture: null, children: null };
    const Gesture = tmp(tmp2[29]).Gesture;
    obj15.gesture = Gesture.Exclusive(withRefResult, result1);
    const obj16 = { style: animatedStyle, children: null };
    const obj18 = { value: tmp30, children: null };
    const obj19 = { channelId };
    const items5 = [ref(closure_18, obj19), ];
    const obj20 = { channel: stateFromStores };
    items5[1] = ref(closure_17, obj20);
    obj18.children = items5;
    obj16.children = closure_16(tmp(tmp2[30]).VoiceChatNavigationContext.Provider, obj18);
    obj15.children = ref(tmp10(tmp2[18]).View, obj16);
    obj14.children = ref(tmp(tmp2[29]).GestureDetector, obj15);
    tmp31 = ref(tmp(tmp2[25]).AnalyticsLocationProvider, obj14);
  }
  return tmp31;
});
ReactCompilerGating = fn(558);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = c.c(3);
  channel = channel.channel;
  if (cResult[0] === channel.guild_id) {
    if (cResult[1] === channel.id) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = closure_1_15(closure_33, { channelId: channel.id, guildId: channel.guild_id });
  cResult[0] = channel.guild_id;
  cResult[1] = channel.id;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((channel) => {
  channel = channel.channel;
  return closure_1_15(closure_33, { channelId: channel.id, guildId: channel.guild_id });
});
let closure_34 = tmp6;
tmp6.modalConfig = { animation: fn(1085).ModalAnimation.SLIDE_UP, shouldPersistUnderModals: true };
let size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallModal.tsx");

export default tmp6;
export const ChannelCallCameraPreview = tmp5;
export const ChannelCallModal = tmp6;