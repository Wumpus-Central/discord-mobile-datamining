// discord_app/modules/video_calls/native/components/ChannelCallModal.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "initialize";
import getParticipants from "getParticipants";
import ensureGuildLoaded from "ensureGuildLoaded";
import VoiceChatDrawerState from "VoiceChatDrawerState";
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH";
import PIP_GESTURE_ACTIVE_OFFSET from "PIP_GESTURE_ACTIVE_OFFSET";
import jsxProd from "useIsActivityFocused";
import { CallWithVoiceChat } from "ChannelCallNavigator.tsx";

let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
class ChannelCallCameraPreview {
  constructor(arg0) {
    channel = global.channel;
    tmp3 = closure_2;
    tmp = useIsVoiceChatFocused();
    tmp2 = closure_0;
    obj = require("useIsConnectedToVoiceChannel");
    isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
    tmp5 = useChannelCallStore((focus) => focus.focus);
    obj2 = require("useRevealProviderValue");
    revealProviderValue = obj2.useRevealProviderValue(tmp5, channel);
    tmp7 = require("coerceMainRoute");
    tmp9 = null;
    if (isConnectedToVoiceChannel) {
      tmp10 = jsx;
      obj = { value: null, children: null };
      obj[0] = revealProviderValue;
      tmp11 = closure_1;
      obj1 = { channel: null, participantScreenIsFocused: null, isChannelCallModalOpen: null };
      obj1[0] = channel;
      obj1[1] = !tmp;
      obj1[2] = tmp8;
      obj[1] = jsx(require("CameraPreview"), obj1);
      tmp9 = jsx(require("useRevealProviderValue").RevealContext.Provider, obj);
    }
    return tmp9;
  }
}
class ChannelCallModal {
  constructor(arg0) {
    channel = global.channel;
    obj = { channelId: channel.id, guildId: channel.guild_id };
    return jsx(f49514, obj);
  }
}
let c4 = importAllResult;
({ useChannelCallOrientationHandlers: error, resetChannelCallStore: metroImportAll, useChannelCallStore: c9, setVoiceChatDrawerState: c10, useIsVoiceChatFocused: unpackModuleId } = VoiceChatDrawerState);
({ PAN_GESTURE_FAIL_OFFSET_Y: map1, SWIPE_TO_CHAT_ACTIVE_OFFSET: closure_14 } = PIP_GESTURE_ACTIVE_OFFSET);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_18 = importAllResult.memo((arg0) => {
  let first;
  first = callback(importAllResult.useState(channel.getChannel(arg0.channelId)), 1)[0];
  callback2(first);
  const items = [first];
  const effect = importAllResult.useEffect(() => {
    if (null != first) {
      outer1_1(outer1_2[13]).initialize(tmp);
      return () => {
        callback2(10726).terminate();
        const obj = callback2(10726);
        callback2(7793).setHidden(false);
        const obj2 = callback2(7793);
        if (!obj3.isModalOpen(closure_31)) {
          callback3();
        }
      };
    }
  }, items);
  let tmp4 = null;
  if (null != first) {
    let obj = { channel: null };
    obj[0] = first;
    tmp4 = callback5(CallWithVoiceChat, obj);
  }
  return tmp4;
});
let closure_19 = { code: "function ChannelCallModalTsx1(){const{width}=this.__closure;return[0,-width];}" };
let closure_20 = { code: "function ChannelCallModalTsx2(){const{runOnJS,dismissKeyboard}=this.__closure;runOnJS(dismissKeyboard)();}" };
let closure_21 = { code: "function ChannelCallModalTsx3(){const{voiceChatDrawerStoreState}=this.__closure;return voiceChatDrawerStoreState;}" };
let closure_22 = { code: "function ChannelCallModalTsx4(){const{translateX,width}=this.__closure;translateX.set(-width);}" };
let closure_23 = { code: "function ChannelCallModalTsx5(){const{isSwipeToChatInProgress,translateX,width,voiceChatDrawerState,VoiceChatDrawerState}=this.__closure;const chatGestureFinished=!isSwipeToChatInProgress.get();const drawerIsInSettledPosition=translateX.get()===-width||translateX.get()===0;const chatOpen=voiceChatDrawerState.get()===VoiceChatDrawerState.OPEN;const chatClosed=voiceChatDrawerState.get()===VoiceChatDrawerState.CLOSED;if(chatGestureFinished&&drawerIsInSettledPosition){return translateX.get()===-width?VoiceChatDrawerState.OPEN:VoiceChatDrawerState.CLOSED;}else if(chatOpen&&translateX.get()>-width){return VoiceChatDrawerState.CLOSING;}else if(chatClosed&&translateX.get()<0){return VoiceChatDrawerState.OPENING;}else{return null;}}" };
let closure_24 = { code: "function ChannelCallModalTsx6(state,previousState){const{runOnJS,setVoiceChatDrawerState,channelId,VoiceChatDrawerState,transitionToVoiceRoute,guildId}=this.__closure;if(state===previousState)return;if(state!=null&&state!==previousState){runOnJS(setVoiceChatDrawerState)(channelId,state);if(state===VoiceChatDrawerState.OPEN){runOnJS(transitionToVoiceRoute)(guildId,channelId);}}}" };
let closure_25 = { code: "function ChannelCallModalTsx7(){const{voiceChatDrawerState}=this.__closure;return voiceChatDrawerState.get();}" };
let closure_26 = { code: "function ChannelCallModalTsx8(drawerState,drawerStatePrev){const{VoiceChatDrawerState,translateX,withPanGestureTiming}=this.__closure;if(drawerState===VoiceChatDrawerState.CLOSED&&drawerStatePrev===VoiceChatDrawerState.OPEN){translateX.set(withPanGestureTiming(0));}}" };
let closure_27 = { code: "function ChannelCallModalTsx9(){const{interpolate,translateY,maxVerticalTranslate}=this.__closure;return{flex:1,transform:[{translateY:interpolate(translateY.get(),[0,maxVerticalTranslate],[0,maxVerticalTranslate])}]};}" };
let closure_28 = { code: "function ChannelCallModalTsx10(){const{immediate,translateX,width,withPanGestureTiming}=this.__closure;if(immediate===true){translateX.set(-width);}else{translateX.set(withPanGestureTiming(-width));}}" };
let closure_29 = { code: "function ChannelCallModalTsx11(){const{translateX,withPanGestureTiming}=this.__closure;translateX.set(withPanGestureTiming(0));}" };
let closure_30 = importAllResult.memo((channelId) => {
  let c13;
  let tmp15;
  channelId = channelId.channelId;
  let width = channelId;
  const guildId = channelId.guildId;
  let ref;
  let ref1;
  let ref2;
  let ref3;
  let sharedValue;
  let sharedValue1;
  let voiceChatDrawerState;
  let derivedValue;
  width = undefined;
  let sharedValue2;
  let c12;
  c13 = undefined;
  let obj;
  let callback5;
  obj = width(ref[19]);
  let items = [sharedValue];
  let items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue.getChannel(width), items1);
  let obj2 = ref2;
  ref = ref2.useRef(undefined);
  ref1 = ref2.useRef(undefined);
  ref2 = ref2.useRef(undefined);
  ref3 = ref2.useRef(undefined);
  let obj3 = width(ref[16]);
  sharedValue = obj3.useSharedValue(0);
  let obj4 = width(ref[16]);
  sharedValue1 = obj4.useSharedValue(0);
  voiceChatDrawerState = derivedValue().voiceChatDrawerState;
  let obj5 = width(ref[16]);
  let fn = function c() {
    return voiceChatDrawerState;
  };
  fn.__closure = { voiceChatDrawerStoreState: voiceChatDrawerState };
  fn.__workletHash = 4903837231689;
  fn.__initData = closure_21;
  derivedValue = obj5.useDerivedValue(fn);
  const size = guildId(ref[20])();
  width = size.width;
  const height = size.height;
  let obj6 = width(ref[16]);
  sharedValue2 = obj6.useSharedValue(false);
  let result = 0.8 * height;
  c12 = result;
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
  obj = { channelId, guildId };
  callback5 = obj2.useRef(obj);
  const effect = obj2.useEffect(() => {
    closure_15.current = obj;
  });
  let items2 = [width, sharedValue];
  const effect1 = obj2.useEffect(() => {
    const current = ref.current;
    const channelId = current.channelId;
    let chatOpen = derivedValue.getState().voiceChatDrawerState === _undefined.OPEN;
    if (!chatOpen) {
      chatOpen = ref3.getChatOpen(channelId);
    }
    if (chatOpen) {
      let obj = width(ref[16]);
      const fn = function t() {
        const result = ensureGuildLoaded.set(-closure_10);
      };
      obj = { translateX: null, width: null };
      obj[0] = sharedValue;
      obj[1] = width;
      fn.__closure = obj;
      fn.__workletHash = 15726690166344;
      fn.__initData = outer1_22;
      obj.runOnUI(fn)();
      width(ref[16]).runOnJS(width(ref[22]).transitionToVoiceRoute)(current.guildId, channelId);
      const obj3 = width(ref[16]);
    }
  }, items2);
  const tmp14 = ref1(ref2.useState(false), 2);
  let tmpResult = tmp(tmp2[16]);
  function ae() {
    let value = sharedValue2.get();
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
    if (value !== _undefined.OPEN) {
      let OPENING = null;
      if (value1 === _undefined.CLOSED) {
        OPENING = null;
        if (obj.get() < 0) {
          OPENING = tmp5.OPENING;
        }
      }
    }
    OPENING = tmp5.CLOSING;
  }
  obj = { isSwipeToChatInProgress: sharedValue2, translateX: sharedValue, width, voiceChatDrawerState: derivedValue, VoiceChatDrawerState: c12 };
  ae.__closure = obj;
  ae.__workletHash = 16786813095205;
  ae.__initData = closure_23;
  function te(arg0, arg1) {
    let tmp2 = tmp;
    if (arg0 !== arg1) {
      tmp2 = null != arg0;
    }
    if (tmp2) {
      tmp2 = tmp;
    }
    if (tmp2) {
      width(ref[16]).runOnJS(width)(width, arg0);
      if (arg0 === _undefined.OPEN) {
        tmp4(tmp5[16]).runOnJS(tmp4(tmp5[22]).transitionToVoiceRoute)(guildId, tmp7);
        const tmp4Result = tmp4(tmp5[16]);
      }
      const obj = width(ref[16]);
      tmp7 = width;
    }
  }
  const tmp10Result = guildId(ref[23]);
  te.__closure = { runOnJS: width(ref[16]).runOnJS, setVoiceChatDrawerState: width, channelId, VoiceChatDrawerState: c12, transitionToVoiceRoute: width(ref[22]).transitionToVoiceRoute, guildId };
  te.__workletHash = 14188334620807;
  te.__initData = closure_24;
  const animatedReaction = tmpResult.useAnimatedReaction(ae, te);
  tmpResult = tmp(tmp2[16]);
  function re() {
    return derivedValue.get();
  }
  re.__closure = { voiceChatDrawerState: derivedValue };
  re.__workletHash = 14044794538420;
  re.__initData = closure_25;
  function ne(arg0, arg1) {
    let tmp2 = arg0 === _undefined.CLOSED;
    if (tmp2) {
      tmp2 = arg1 === tmp.OPEN;
    }
    if (tmp2) {
      const result = sharedValue.set(width(ref[18]).withPanGestureTiming(0));
      const obj = width(ref[18]);
    }
  }
  obj2 = { VoiceChatDrawerState: c12, translateX: sharedValue, withPanGestureTiming: tmp(tmp2[18]).withPanGestureTiming };
  ne.__closure = obj2;
  ne.__workletHash = 260500087614;
  ne.__initData = closure_26;
  const animatedReaction1 = tmpResult.useAnimatedReaction(re, ne);
  let tmp24 = !tmp15;
  if (!tmp15) {
    tmp24 = !tmp13;
  }
  const obj1 = { runOnJS: width(ref[16]).runOnJS, setVoiceChatDrawerState: width, channelId, VoiceChatDrawerState: c12, transitionToVoiceRoute: width(ref[22]).transitionToVoiceRoute, guildId };
  const fn2 = function u() {
    const items = [0, -width];
    return items;
  };
  fn2.__closure = { width };
  fn2.__workletHash = 15383459308604;
  fn2.__initData = closure_19;
  const fn3 = function c() {
    width(ref[16]).runOnJS(width(ref[17]).dismissKeyboard)();
  };
  obj3 = { runOnJS: null, dismissKeyboard: null };
  const derivedValue1 = width(ref[16]).useDerivedValue(fn2);
  obj3[0] = width(ref[16]).runOnJS;
  obj3[1] = width(ref[17]).dismissKeyboard;
  fn3.__closure = obj3;
  fn3.__workletHash = 4086900686382;
  fn3.__initData = closure_20;
  const callback = obj2.useCallback(fn3, []);
  obj4 = { lowerBounds: -width, upperBounds: 0, translate: sharedValue, vertical: false, snapPositions: derivedValue1, onStart: callback, isGestureInProgress: sharedValue2 };
  const tmpResult1 = width(ref[16]);
  const obj17 = guildId(ref[18])(obj4);
  const items3 = [-c13, c13];
  const enabledResult = guildId(ref[18])(obj4).enabled(tmp24);
  const items4 = [-obj, obj];
  const failOffsetYResult = guildId(ref[18])(obj4).enabled(tmp24).failOffsetY(items3);
  const activeOffsetXResult = guildId(ref[18])(obj4).enabled(tmp24).failOffsetY(items3).activeOffsetX(items4);
  obj5 = { gestureEnabled: tmp16, height, maxTranslate: result, thresholdTranslate: 0.5 * height, translateY: sharedValue1 };
  const withRefResult = guildId(ref[18])(obj4).enabled(tmp24).failOffsetY(items3).activeOffsetX(items4).withRef(ref);
  const obj22 = guildId(ref[25])(obj5);
  const items5 = [channelId];
  let result1 = guildId(ref[25])(obj5).withRef(ref3).requireExternalGestureToFail(ref2, ref1);
  const layoutEffect = obj2.useLayoutEffect(() => {
    const result = width(ref[26]).maybeShowAgeGateModal(width);
  }, items5);
  const withRefResult1 = guildId(ref[25])(obj5).withRef(ref3);
  function oe() {
    let obj = { flex: 1, transform: null };
    obj = { translateY: null };
    const items = [0, c12];
    const items1 = [0, c12];
    obj[0] = width(ref[16]).interpolate(sharedValue1.get(), items, items1);
    const items2 = [obj];
    obj[1] = items2;
    return obj;
  }
  obj6 = { interpolate: tmp(tmp2[16]).interpolate, translateY: sharedValue1, maxVerticalTranslate: result };
  oe.__closure = obj6;
  oe.__workletHash = 8643926178558;
  oe.__initData = closure_27;
  const items6 = [ref2, ref3, ref, ref1, sharedValue, width, channelId];
  const animatedStyle = width(ref[16]).useAnimatedStyle(oe);
  let tmp32 = null;
  if (null != stateFromStores) {
    const obj7 = { value: null, children: null };
    obj7[0] = tmp10Result(tmp10(tmp2[24]).CHANNEL_CALL).analyticsLocations;
    const obj8 = { gesture: null, children: null };
    const Gesture = tmp(tmp2[27]).Gesture;
    obj8[0] = Gesture.Exclusive(withRefResult, result1);
    const obj9 = { style: null, children: null };
    obj9[0] = animatedStyle;
    const obj10 = { value: null, children: null };
    obj10[0] = tmp31;
    const obj11 = { channelId: null };
    obj11[0] = channelId;
    const items7 = [callback5(closure_18, obj11), ];
    const obj12 = { channel: null };
    obj12[0] = stateFromStores;
    items7[1] = callback5(ChannelCallCameraPreview, obj12);
    obj10[1] = items7;
    obj9[1] = callback6(tmp(tmp2[28]).VoiceChatNavigationContext.Provider, obj10);
    obj8[1] = callback5(tmp10(tmp2[16]).View, obj9);
    obj7[1] = callback5(tmp(tmp2[27]).GestureDetector, obj8);
    tmp32 = callback5(tmp(tmp2[23]).AnalyticsLocationProvider, obj7);
  }
  return tmp32;
});
ChannelCallModal.modalConfig = { animation: require("ME").ModalAnimation.SLIDE_UP, shouldPersistUnderModals: true };
let result = require("getParticipants").fileFinishedImporting("modules/video_calls/native/components/ChannelCallModal.tsx");

export default ChannelCallModal;
export { ChannelCallCameraPreview };
export { ChannelCallModal };