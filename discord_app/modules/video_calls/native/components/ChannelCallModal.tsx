// discord_app/modules/video_calls/native/components/ChannelCallModal.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import Constants2 from "../../../../Constants.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import ChannelCallConstants from "../ChannelCallConstants.tsx";
import VoiceChatHooks from "../../../voice_chat/VoiceChatHooks.tsx";
import RevealProvider from "RevealProvider.tsx";
import CameraPreviewDefault from "CameraPreview.tsx";
import ChannelCallModalManagerDefault from "ChannelCallModalManager.tsx";
import ChannelCallNavigatorDefault from "ChannelCallNavigator.tsx";
import PanGestureAnimations from "../../../action_sheet/native/PanGestureAnimations.tsx";
import RouteManagerUtils from "../../../routing/native/RouteManagerUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import ChannelCallStore from "../ChannelCallStore.tsx";
import Constants from "Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const PanGestureAnimationsDefault = PanGestureAnimations;
let initializeResult, set;

let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
({
  useChannelCallOrientationHandlers: metroImportDefault,
  resetChannelCallStore: metroImportAll,
  useChannelCallStore: c9,
  setVoiceChatDrawerState: c10,
  useIsVoiceChatFocused: unpackModuleId,
} = ChannelCallStore);
let VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
({ PAN_GESTURE_FAIL_OFFSET_Y: map1, SWIPE_TO_CHAT_ACTIVE_OFFSET: closure_14 } = Constants);
const ModalAnimation = Constants2.ModalAnimation;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let obj4;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(7);
      channel = channel.channel;
      const tmp4 = unpackModuleId();
      const obj2 = VoiceChatHooks;
      const isConnectedToVoiceChannel = obj2.useIsConnectedToVoiceChannel(channel);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(focus) {
          return focus.focus;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const tmp7 = state(first);
      const tmpResult = RevealProvider;
      const revealProviderValue = tmpResult.useRevealProviderValue(tmp7, channel);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult2 = NavigationRouteUtils;
        const isModalOpenResult = tmpResult2.isModalOpen(closure_34);
        cResult[1] = isModalOpenResult;
        tmp9 = isModalOpenResult;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] === channel) {
        if (cResult[3] === isConnectedToVoiceChannel) {
          if (cResult[4] === tmp4) {
            let tmp12;
            if (cResult[5] === revealProviderValue) {
              tmp12 = cResult[6];
            }
            return tmp12;
          }
        }
      }
      let tmp13 = null;
      if (isConnectedToVoiceChannel) {
        const obj3 = { value: revealProviderValue, children: closure_15(CameraPreviewDefault, obj4) };
        const Provider = RevealProvider.RevealContext.Provider;
        obj4 = { channel, participantScreenIsFocused: !tmp4, isChannelCallModalOpen: tmp9 };
        tmp13 = closure_15(Provider, obj3);
      }
      cResult[2] = channel;
      cResult[3] = isConnectedToVoiceChannel;
      cResult[4] = tmp4;
      cResult[5] = revealProviderValue;
      cResult[6] = tmp13;
      tmp12 = tmp13;
    }
  : (channel) => {
      let obj4;
      channel = channel.channel;
      const tmp = unpackModuleId();
      const obj = VoiceChatHooks;
      const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
      const tmp5 = state((focus) => focus.focus);
      const obj2 = RevealProvider;
      const revealProviderValue = obj2.useRevealProviderValue(tmp5, channel);
      NavigationRouteUtils;
      let tmp9 = null;
      if (isConnectedToVoiceChannel) {
        const obj3 = { value: revealProviderValue, children: closure_15(CameraPreviewDefault, obj4) };
        const Provider = RevealProvider.RevealContext.Provider;
        obj4 = { channel, participantScreenIsFocused: !tmp, isChannelCallModalOpen: tmp8 };
        tmp9 = closure_15(Provider, obj3);
      }
      return tmp9;
    };
let closure_17 = tmp5;
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channelId) => {
        let first;
        let tmp2;
        let tmp8;
        let obj = first(576);
        const cResult = obj.c(7);
        channelId = channelId.channelId;
        if (cResult[0] !== channelId) {
          const channel = ChannelStore.getChannel(channelId);
          cResult[0] = channelId;
          cResult[1] = channel;
          tmp2 = channel;
        } else {
          tmp2 = cResult[1];
        }
        first = _slicedToArray(react.useState(tmp2), 1)[0];
        closure_7(first);
        if (cResult[2] !== first) {
          class C {
            constructor() {
              if (null != closure_0) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[15]);
                initializeResult = obj.initialize(tmp);
                return () => {
                  /* body not rendered: F139452 */
                };
              } else {
                return;
              }
            }
          }
          const items = [first];
          cResult[2] = first;
          cResult[3] = C;
          cResult[4] = items;
          tmp8 = items;
        } else {
          class C {
            constructor() {
              if (null != closure_0) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[15]);
                initializeResult = obj.initialize(tmp);
                return () => {
                  /* body not rendered: F139452 */
                };
              } else {
                return;
              }
            }
          }
          tmp8 = cResult[4];
        }
        const effect = react.useEffect(C, tmp8);
        let tmp10 = null;
        if (null != first) {
          class C {
            constructor() {
              if (null != closure_0) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[15]);
                initializeResult = obj.initialize(tmp);
                return () => {
                  /* body not rendered: F139452 */
                };
              } else {
                return;
              }
            }
          }
          tmp10 = tmp11;
        }
        return tmp10;
      }
    : (arg0) => {
        const channel = _slicedToArray(react.useState(ChannelStore.getChannel(arg0.channelId)), 1)[0];
        closure_7(channel);
        const items = [channel];
        const effect = react.useEffect(() => {
          if (null != first) {
            let obj = ChannelCallModalManagerDefault;
            obj.initialize(tmp);
            return () => {
              const obj = closure_1_1(closure_1_2[15]);
              obj.terminate();
              const obj2 = closure_1_1(closure_1_2[16]);
              obj2.setHidden(false);
              const obj3 = channel(closure_1_2[13]);
              if (!obj3.isModalOpen(closure_1_34)) {
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
      },
);
const __initData = { code: "function ChannelCallModalTsx1(){const{width}=this.__closure;return[0,-width];}" };
const __initData2 = {
  code: "function ChannelCallModalTsx2(){const{runOnJS,dismissKeyboard}=this.__closure;runOnJS(dismissKeyboard)();}",
};
const __initData3 = { code: "function ChannelCallModalTsx3(){const{width}=this.__closure;return[0,-width];}" };
const __initData4 = {
  code: "function ChannelCallModalTsx4(){const{runOnJS,dismissKeyboard}=this.__closure;runOnJS(dismissKeyboard)();}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let enabled;
      let first;
      let isGestureInProgress;
      let translateX;
      let width;
      let obj = width(576);
      const cResult = obj.c(9);
      ({ translateX, width } = arg0);
      ({ enabled, isGestureInProgress } = arg0);
      const fn = function n() {
        const items = [0, -width];
        return items;
      };
      fn.__closure = { width };
      fn.__workletHash = 15383459308604;
      fn.__initData = __initData;
      const obj2 = width(4612);
      const derivedValue = obj2.useDerivedValue(fn);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function l() {
          const obj = width(dependencyMap[18]);
          obj.runOnJS(width(dependencyMap[19]).dismissKeyboard)();
        };
        fn2.__closure = { runOnJS: width(4612).runOnJS, dismissKeyboard: width(4745).dismissKeyboard };
        fn2.__workletHash = 4086900686382;
        fn2.__initData = __initData2;
        cResult[0] = fn2;
        first = fn2;
        const obj3 = { runOnJS: width(4612).runOnJS, dismissKeyboard: width(4745).dismissKeyboard };
      } else {
        first = cResult[0];
      }
      if (cResult[1] === isGestureInProgress) {
        if (cResult[2] === derivedValue) {
          if (cResult[3] === -width) {
            let tmp8;
            if (cResult[4] === translateX) {
              tmp8 = cResult[5];
            }
            const obj5 = PanGestureAnimationsDefault(tmp8);
            if (cResult[6] === enabled) {
              let tmp10;
              if (cResult[7] === obj5) {
                tmp10 = cResult[8];
              }
              return tmp10;
            }
            let items = [-closure_13, closure_13];
            const items1 = [-closure_14, closure_14];
            const enabledResult = obj5.enabled(enabled);
            const failOffsetYResult = enabledResult.failOffsetY(items);
            const activeOffsetXResult = failOffsetYResult.activeOffsetX(items1);
            cResult[6] = enabled;
            cResult[7] = obj5;
            cResult[8] = activeOffsetXResult;
            tmp10 = activeOffsetXResult;
          }
        }
      }
      const obj4 = {
        lowerBounds: -width,
        upperBounds: 0,
        translate: translateX,
        vertical: false,
        snapPositions: derivedValue,
        onStart: first,
        isGestureInProgress,
      };
      cResult[1] = isGestureInProgress;
      cResult[2] = derivedValue;
      cResult[3] = -width;
      cResult[4] = translateX;
      cResult[5] = obj4;
      tmp8 = obj4;
    }
  : (width) => {
      let enabled;
      let isGestureInProgress;
      let translateX;
      width = width.width;
      ({ translateX, enabled, isGestureInProgress } = width);
      let obj = width(4612);
      const fn = function u() {
        const items = [0, -width];
        return items;
      };
      fn.__closure = { width };
      fn.__workletHash = 11365418877886;
      fn.__initData = __initData3;
      const fn2 = function c() {
        const obj = width(dependencyMap[18]);
        obj.runOnJS(width(dependencyMap[19]).dismissKeyboard)();
      };
      const obj2 = { runOnJS: width(4612).runOnJS, dismissKeyboard: width(4745).dismissKeyboard };
      const derivedValue = obj.useDerivedValue(fn);
      const useCallback = react.useCallback;
      fn2.__closure = obj2;
      fn2.__workletHash = 17381416484264;
      fn2.__initData = __initData4;
      const callback = useCallback(fn2, []);
      const obj3 = {
        lowerBounds: -width,
        upperBounds: 0,
        translate: translateX,
        vertical: false,
        snapPositions: derivedValue,
        onStart: callback,
        isGestureInProgress,
      };
      let items = [-closure_13, closure_13];
      const obj4 = PanGestureAnimationsDefault(obj3);
      const items1 = [-closure_14, closure_14];
      const enabledResult = obj4.enabled(enabled);
      const failOffsetYResult = enabledResult.failOffsetY(items);
      return failOffsetYResult.activeOffsetX(items1);
    };
const __initData5 = {
  code: "function ChannelCallModalTsx5(){const{voiceChatDrawerStoreState}=this.__closure;return voiceChatDrawerStoreState;}",
};
let closure_25 = {
  code: "function ChannelCallModalTsx6(){const{translateX,width}=this.__closure;translateX.set(-width);}",
};
const __initData6 = {
  code: "function ChannelCallModalTsx7(){const{isSwipeToChatInProgress,translateX,width,voiceChatDrawerState,VoiceChatDrawerState}=this.__closure;const chatGestureFinished=!isSwipeToChatInProgress.get();const drawerIsInSettledPosition=translateX.get()===-width||translateX.get()===0;const chatOpen=voiceChatDrawerState.get()===VoiceChatDrawerState.OPEN;const chatClosed=voiceChatDrawerState.get()===VoiceChatDrawerState.CLOSED;if(chatGestureFinished&&drawerIsInSettledPosition){return translateX.get()===-width?VoiceChatDrawerState.OPEN:VoiceChatDrawerState.CLOSED;}else if(chatOpen&&translateX.get()>-width){return VoiceChatDrawerState.CLOSING;}else if(chatClosed&&translateX.get()<0){return VoiceChatDrawerState.OPENING;}else{return null;}}",
};
const __initData7 = {
  code: "function ChannelCallModalTsx8(state,previousState){const{runOnJS,setVoiceChatDrawerState,channelId,VoiceChatDrawerState,transitionToVoiceRoute,guildId}=this.__closure;if(state===previousState)return;if(state!=null&&state!==previousState){runOnJS(setVoiceChatDrawerState)(channelId,state);if(state===VoiceChatDrawerState.OPEN){runOnJS(transitionToVoiceRoute)(guildId,channelId);}}}",
};
const __initData8 = {
  code: "function ChannelCallModalTsx9(){const{voiceChatDrawerState}=this.__closure;return voiceChatDrawerState.get();}",
};
const __initData9 = {
  code: "function ChannelCallModalTsx10(drawerState,drawerStatePrev){const{VoiceChatDrawerState,translateX,withPanGestureTiming}=this.__closure;if(drawerState===VoiceChatDrawerState.CLOSED&&drawerStatePrev===VoiceChatDrawerState.OPEN){translateX.set(withPanGestureTiming(0));}}",
};
const __initData10 = {
  code: "function ChannelCallModalTsx11(){const{interpolate,translateY,maxVerticalTranslate}=this.__closure;return{flex:1,transform:[{translateY:interpolate(translateY.get(),[0,maxVerticalTranslate],[0,maxVerticalTranslate])}]};}",
};
let closure_31 = {
  code: "function ChannelCallModalTsx12(){const{immediate,translateX,width,withPanGestureTiming}=this.__closure;if(immediate===true){translateX.set(-width);}else{translateX.set(withPanGestureTiming(-width));}}",
};
let closure_32 = {
  code: "function ChannelCallModalTsx13(){const{translateX,withPanGestureTiming}=this.__closure;translateX.set(withPanGestureTiming(0));}",
};
let closure_33 = react.memo((channelId) => {
  let Gesture;
  let GestureDetector;
  let Provider;
  let View;
  let c12;
  let c13;
  let items5;
  let obj15;
  let obj16;
  let obj18;
  let setIsSwipeToChatDisabled;
  let tmp15;
  let tmp25;
  channelId = channelId.channelId;
  let guildId = channelId.guildId;
  let ref2;
  let sharedValue;
  let derivedValue;
  c13 = undefined;
  let obj2;
  let ref;
  const tmp = channelId;
  let tmp2 = ref;
  let obj = channelId(ref[21]);
  let items = [sharedValue];
  let items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let obj3 = ref2;
  ref = ref2.useRef(undefined);
  const ref1 = ref2.useRef(undefined);
  ref2 = ref2.useRef(undefined);
  const ref3 = ref2.useRef(undefined);
  const obj4 = channelId(ref[18]);
  sharedValue = obj4.useSharedValue(0);
  const obj5 = channelId(ref[18]);
  const sharedValue1 = obj5.useSharedValue(0);
  const voiceChatDrawerState = derivedValue().voiceChatDrawerState;
  let fn = function c() {
    return voiceChatDrawerState;
  };
  fn.__closure = { voiceChatDrawerStoreState: voiceChatDrawerState };
  fn.__workletHash = 1850293898191;
  fn.__initData = __initData5;
  const obj6 = channelId(ref[18]);
  derivedValue = obj6.useDerivedValue(fn);
  size = guildId(ref[22])();
  const width = size.width;
  const height = size.height;
  const obj7 = channelId(ref[18]);
  const sharedValue2 = obj7.useSharedValue(false);
  let result = 0.8 * height;
  VoiceChatDrawerState = result;
  const tmp13 = guildId(ref[23])(channelId);
  [tmp15, c13] = ref1(ref2.useState(false), 2);
  let tmp16 = !tmp13;
  ref1(ref2.useState(false), 2);
  if (tmp16) {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    }
    tmp16 = !isGuildStageVoiceResult;
  }
  obj2 = { channelId, guildId };
  ref = obj3.useRef(obj2);
  const effect = obj3.useEffect(() => {
    ref.current = obj2;
  });
  let items2 = [width, sharedValue];
  const effect1 = obj3.useEffect(() => {
    const current = ref.current;
    channelId = current.channelId;
    guildId = current.guildId;
    const chatOpen =
      derivedValue.getState().voiceChatDrawerState === VoiceChatDrawerState.OPEN ||
      ChannelRTCStore.getChatOpen(channelId);
    if (chatOpen) {
      const fn = function t() {
        const result = sharedValue.set(-width);
      };
      obj2 = { translateX: sharedValue, width };
      fn.__closure = obj2;
      fn.__workletHash = 9701831910602;
      fn.__initData = __initData;
      const obj = ReanimatedRexport;
      obj.runOnUI(fn)();
      const obj3 = ReanimatedRexport;
      obj3.runOnJS(RouteManagerUtils.transitionToVoiceRoute)(guildId, channelId);
    }
  }, items2);
  const tmp10Result = guildId(tmp2[25]);
  const analyticsLocations = tmp10Result(tmp10(tmp2[26]).CHANNEL_CALL).analyticsLocations;
  function ee() {
    let CLOSING;
    let tmp7;
    const value = sharedValue2.get();
    const tmp3 = sharedValue.get() === -width || 0 === sharedValue.get();
    const value3 = derivedValue.get();
    const OPEN = VoiceChatDrawerState.OPEN;
    const value4 = derivedValue.get();
    const CLOSED = VoiceChatDrawerState.CLOSED;
    if (!value) {
      if (tmp3) {
        tmp7 = sharedValue.get() === -width ? VoiceChatDrawerState.OPEN : VoiceChatDrawerState.CLOSED;
      }
      return tmp7;
    }
    if (value3 === OPEN) {
      if (sharedValue.get() > -width) {
        CLOSING = VoiceChatDrawerState.CLOSING;
      }
      tmp7 = CLOSING;
    }
    CLOSING = null;
    if (value4 === CLOSED) {
      CLOSING = null;
      if (sharedValue.get() < 0) {
        CLOSING = VoiceChatDrawerState.OPENING;
      }
    }
  }
  const obj8 = {
    isSwipeToChatInProgress: sharedValue2,
    translateX: sharedValue,
    width,
    voiceChatDrawerState: derivedValue,
    VoiceChatDrawerState,
  };
  ee.__closure = obj8;
  ee.__workletHash = 11845527104167;
  ee.__initData = __initData6;
  const fn2 = function $(arg0, arg1) {
    const tmp2 = tmp && null != arg0 && tmp;
    if (tmp2) {
      const obj = ReanimatedRexport;
      obj.runOnJS(authStore)(channelId, arg0);
      if (arg0 === VoiceChatDrawerState.OPEN) {
        const tmp4Result = ReanimatedRexport;
        tmp4Result.runOnJS(RouteManagerUtils.transitionToVoiceRoute)(guildId, channelId);
      }
    }
  };
  const tmpResult = tmp(tmp2[18]);
  fn2.__closure = {
    runOnJS: tmp(tmp2[18]).runOnJS,
    setVoiceChatDrawerState: width,
    channelId,
    VoiceChatDrawerState,
    transitionToVoiceRoute: tmp(tmp2[24]).transitionToVoiceRoute,
    guildId,
  };
  fn2.__workletHash = 11787615109897;
  fn2.__initData = __initData7;
  ({
    runOnJS: tmp(tmp2[18]).runOnJS,
    setVoiceChatDrawerState: width,
    channelId,
    VoiceChatDrawerState,
    transitionToVoiceRoute: tmp(tmp2[24]).transitionToVoiceRoute,
    guildId,
  });
  const animatedReaction = tmpResult.useAnimatedReaction(ee, fn2);
  function ae() {
    return derivedValue.get();
  }
  ae.__closure = { voiceChatDrawerState: derivedValue };
  ae.__workletHash = 13861048977978;
  ae.__initData = __initData8;
  function te(arg0, arg1) {
    const tmp2 = arg0 === VoiceChatDrawerState.CLOSED && arg1 === tmp.OPEN;
    if (tmp2) {
      set = sharedValue.set;
      const obj = PanGestureAnimations;
      const result = set(obj.withPanGestureTiming(0));
    }
  }
  const tmpResult3 = tmp(tmp2[18]);
  te.__closure = {
    VoiceChatDrawerState,
    translateX: sharedValue,
    withPanGestureTiming: tmp(tmp2[20]).withPanGestureTiming,
  };
  te.__workletHash = 13290580455783;
  te.__initData = __initData9;
  ({ VoiceChatDrawerState, translateX: sharedValue, withPanGestureTiming: tmp(tmp2[20]).withPanGestureTiming });
  const animatedReaction1 = tmpResult3.useAnimatedReaction(ae, te);
  const obj11 = { isGestureInProgress: sharedValue2, channelId, width, translateX: sharedValue, enabled: tmp25 };
  tmp25 = !tmp15 && !tmp13;
  const obj12 = {
    gestureEnabled: tmp16,
    height,
    maxTranslate: result,
    thresholdTranslate: 0.5 * height,
    translateY: sharedValue1,
  };
  const tmp24Result = closure_23(obj11);
  const withRefResult = tmp24Result.withRef(ref);
  const items3 = [channelId];
  const obj17 = guildId(tmp2[27])(obj12);
  const withRefResult1 = obj17.withRef(ref3);
  let result1 = withRefResult1.requireExternalGestureToFail(ref2, ref1);
  const layoutEffect = obj3.useLayoutEffect(() => {
    const obj = PrivateChannelCallUtils;
    const result = obj.maybeShowAgeGateModal(channelId);
  }, items3);
  function se() {
    let items;
    let items1;
    let items2;
    let obj3;
    const obj = { flex: 1, transform: items2 };
    obj2 = { translateY: obj3.interpolate(sharedValue1.get(), items, items1) };
    items = [0, c12];
    items1 = [0, c12];
    items2 = [obj2];
    obj3 = ReanimatedRexport;
    return obj;
  }
  const tmpResult4 = tmp(tmp2[18]);
  se.__closure = { interpolate: tmp(tmp2[18]).interpolate, translateY: sharedValue1, maxVerticalTranslate: result };
  se.__workletHash = 8383937622055;
  se.__initData = __initData10;
  const items4 = [ref2, ref3, ref, ref1, sharedValue, width, channelId];
  ({ interpolate: tmp(tmp2[18]).interpolate, translateY: sharedValue1, maxVerticalTranslate: result });
  const animatedStyle = tmpResult4.useAnimatedStyle(se);
  let tmp31 = null;
  if (null != stateFromStores) {
    const obj14 = { value: analyticsLocations, children: ref(GestureDetector, obj15) };
    const AnalyticsLocationProvider = tmp(tmp2[25]).AnalyticsLocationProvider;
    obj15 = { gesture: Gesture.Exclusive(withRefResult, result1), children: ref(View, obj16) };
    GestureDetector = tmp(tmp2[29]).GestureDetector;
    Gesture = tmp(tmp2[29]).Gesture;
    obj16 = { style: animatedStyle, children: closure_16(Provider, obj18) };
    View = tmp10(tmp2[18]).View;
    obj18 = { value: tmp30, children: items5 };
    const obj19 = { channelId };
    Provider = tmp(tmp2[30]).VoiceChatNavigationContext.Provider;
    items5 = [ref(closure_18, obj19)];
    const obj20 = { channel: stateFromStores };
    items5[1] = ref(closure_17, obj20);
    tmp31 = ref(AnalyticsLocationProvider, obj14);
  }
  return tmp31;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const obj = react2;
      const cResult = obj.c(3);
      channel = channel.channel;
      if (cResult[0] === channel.guild_id) {
        let tmp2;
        if (cResult[1] === channel.id) {
          tmp2 = cResult[2];
        }
        return tmp2;
      }
      const obj2 = { channelId: channel.id, guildId: channel.guild_id };
      const tmp3 = closure_15(closure_33, obj2);
      cResult[0] = channel.guild_id;
      cResult[1] = channel.id;
      cResult[2] = tmp3;
      tmp2 = tmp3;
    }
  : (channel) => {
      channel = channel.channel;
      const obj = { channelId: channel.id, guildId: channel.guild_id };
      return closure_15(closure_33, obj);
    };
let closure_34 = tmp6;
tmp6.modalConfig = { animation: ModalAnimation.SLIDE_UP, shouldPersistUnderModals: true };
let size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallModal.tsx");

export default tmp6;
export const ChannelCallCameraPreview = tmp5;
export const ChannelCallModal = tmp6;
