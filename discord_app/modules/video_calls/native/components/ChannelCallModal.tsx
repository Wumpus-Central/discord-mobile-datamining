// === Module 12713: ChannelCallModal ===

// Module 12713 (ChannelCallModal)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import _mod1708 from "module_1708" /* 1708 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5492 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6900 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7918 */;
import VoiceChatHooks from "VoiceChatHooks" /* 11007 */;
import RevealProvider from "RevealProvider" /* 12715 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 12716 */;
import CameraPreviewDefault from "CameraPreview" /* 12718 */;
import ChannelCallModalManagerDefault from "ChannelCallModalManager" /* 12902 */;
import ChannelCallNavigatorDefault from "ChannelCallNavigator" /* 12903 */;
import PanGestureAnimationsDefault from "PanGestureAnimations" /* 13113 */;
import RouteManagerUtils from "RouteManagerUtils" /* 13114 */;
import useModalPanGestureDefault from "useModalPanGesture" /* 14036 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7016 */;
import ChannelStore from "ChannelStore" /* 5155 */;

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
      obj1 = { value: null, children: null };
      obj1.value = revealProviderValue;
      tmp11 = closure_1;
      obj5 = { channel: null, participantScreenIsFocused: null, isChannelCallModalOpen: null };
      obj5.channel = channel;
      obj5.participantScreenIsFocused = !tmp;
      obj5.isChannelCallModalOpen = tmp8;
      obj1.children = jsx(closure_1(tmp3[12]), obj5);
      tmp9 = jsx(tmp2(tmp3[10]).RevealContext.Provider, obj1);
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
const ChannelCallStore = fn(11003);
({ useChannelCallOrientationHandlers: metroImportDefault, resetChannelCallStore: closure_8, useChannelCallStore: closure_9, setVoiceChatDrawerState: closure_10, useIsVoiceChatFocused: closure_11 } = ChannelCallStore);
const VoiceChatDrawerState = fn(11004).VoiceChatDrawerState;
const Constants = fn(12714);
({ PAN_GESTURE_FAIL_OFFSET_Y: map1, SWIPE_TO_CHAT_ACTIVE_OFFSET: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_18 = noop.memo(function NavigatorContainer(arg0) {
  const channel = _slicedToArray(noop.useState(ChannelStore.getChannel(arg0.channelId)), 1)[0];
  closure_7(channel);
  items = [channel];
  const effect = noop.useEffect(() => {
    if (null != first) {
      ChannelCallModalManagerDefault.initialize(tmp);
      return () => {
        closure_1_1(12902).terminate();
        const obj = closure_1_1(12902);
        closure_1_1(11827).setHidden(false);
        const obj2 = closure_1_1(11827);
        if (!obj3.isModalOpen(closure_1_31)) {
          closure_1_8();
        }
        obj3 = channel(5492);
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
let closure_19 = { code: "(function ChannelCallModalTsx1(){let[width]=this.__closure;return[0,-width];})" };
let closure_20 = { code: "(function ChannelCallModalTsx2(){let[scheduleOnRN,dismissKeyboard]=this.__closure;scheduleOnRN(dismissKeyboard);})" };
let closure_21 = { code: "(function ChannelCallModalTsx3(){let[voiceChatDrawerStoreState]=this.__closure;return voiceChatDrawerStoreState;})" };
let closure_22 = { code: "(function ChannelCallModalTsx4(){let[translateX,width]=this.__closure;translateX.set(-width);})" };
let closure_23 = { code: "(function ChannelCallModalTsx5(){let[isSwipeToChatInProgress,translateX,width,voiceChatDrawerState,VoiceChatDrawerState]=this.__closure;const chatGestureFinished=!isSwipeToChatInProgress.get();const drawerIsInSettledPosition=translateX.get()===-width||translateX.get()===0;const chatOpen=voiceChatDrawerState.get()===VoiceChatDrawerState.OPEN;const chatClosed=voiceChatDrawerState.get()===VoiceChatDrawerState.CLOSED;if(chatGestureFinished&&drawerIsInSettledPosition){return translateX.get()===-width?VoiceChatDrawerState.OPEN:VoiceChatDrawerState.CLOSED;}else if(chatOpen&&translateX.get()>-width){return VoiceChatDrawerState.CLOSING;}else if(chatClosed&&translateX.get()<0){return VoiceChatDrawerState.OPENING;}else{return null;}})" };
let closure_24 = { code: "(function ChannelCallModalTsx6(state,previousState){let[scheduleOnRN,setVoiceChatDrawerState,channelId,VoiceChatDrawerState,transitionToVoiceRoute,guildId]=this.__closure;if(state===previousState)return;if(state!=null&&state!==previousState){scheduleOnRN(setVoiceChatDrawerState,channelId,state);if(state===VoiceChatDrawerState.OPEN){scheduleOnRN(transitionToVoiceRoute,guildId,channelId);}}})" };
let closure_25 = { code: "(function ChannelCallModalTsx7(){let[voiceChatDrawerState]=this.__closure;return voiceChatDrawerState.get();})" };
let closure_26 = { code: "(function ChannelCallModalTsx8(drawerState,drawerStatePrev){let[VoiceChatDrawerState,translateX,withPanGestureTiming]=this.__closure;if(drawerState===VoiceChatDrawerState.CLOSED&&drawerStatePrev===VoiceChatDrawerState.OPEN){translateX.set(withPanGestureTiming(0));}})" };
let closure_27 = { code: "(function ChannelCallModalTsx9(){let[interpolate,translateY,maxVerticalTranslate]=this.__closure;return{flex:1,transform:[{translateY:interpolate(translateY.get(),[0,maxVerticalTranslate],[0,maxVerticalTranslate])}]};})" };
let closure_28 = { code: "(function ChannelCallModalTsx10(){let[immediate,translateX,width,withPanGestureTiming]=this.__closure;if(immediate===true){translateX.set(-width);}else{translateX.set(withPanGestureTiming(-width));}})" };
let closure_29 = { code: "(function ChannelCallModalTsx11(){let[translateX,withPanGestureTiming]=this.__closure;translateX.set(withPanGestureTiming(0));})" };
let closure_30 = noop.memo(function SwipeableCallModal(channelId) {
  channelId = channelId.channelId;
  _require = channelId;
  const guildId = channelId.guildId;
  noop = undefined;
  let width;
  c7 = undefined;
  let obj2;
  state = undefined;
  items = [width];
  let items1 = [channelId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(c0), items1);
  const ref = noop.useRef(undefined);
  importDefault = ref;
  const ref1 = noop.useRef(undefined);
  dependencyMap = ref1;
  const ref2 = noop.useRef(undefined);
  c3 = ref2;
  const ref3 = noop.useRef(undefined);
  noop = ref3;
  let obj = require("initialize");
  const sharedValue = require("module_1655").useSharedValue(0);
  c5 = sharedValue;
  const obj4 = require("module_1655");
  const sharedValue1 = require("module_1655").useSharedValue(0);
  const obj5 = require("module_1655");
  let items2 = [closure_21, state().voiceChatDrawerState];
  _require = undefined;
  [tmp9, tmp10] = items2;
  class ChannelCallModalTsx3 {
    constructor() {
      return closure_0;
    }
  }
  const items3 = [tmp10];
  ChannelCallModalTsx3.__closure = items3;
  ChannelCallModalTsx3.__workletHash = 15324156023248;
  ChannelCallModalTsx3.__initData = tmp9;
  const derivedValue = require("module_1655").useDerivedValue(ChannelCallModalTsx3);
  const size = useWindowDimensionsDefault();
  width = size.width;
  const height = size.height;
  const obj6 = require("module_1655");
  const sharedValue2 = require("module_1655").useSharedValue(false);
  let result = 0.8 * height;
  const tmp15 = useIsActivityFocusedDefault(channelId);
  const tmpResult = require("module_1655");
  [tmp17, c7] = c3(noop.useState(false), 2);
  let tmp18 = !tmp15;
  if (!tmp15) {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    }
    tmp18 = !isGuildStageVoiceResult;
  }
  obj2 = { channelId, guildId };
  state = obj3.useRef(obj2);
  const effect = obj3.useEffect(() => {
    closure_9.current = obj2;
  });
  const items4 = [width, sharedValue];
  const effect1 = obj3.useEffect(() => {
    const current = ref.current;
    const channelId = current.channelId;
    let chatOpen = state.getState().voiceChatDrawerState === VoiceChatDrawerState.OPEN;
    if (!chatOpen) {
      chatOpen = ChannelRTCStore.getChatOpen(channelId);
    }
    if (chatOpen) {
      items = [closure_22, c5, width];
      c0 = undefined;
      c1 = undefined;
      [tmp9, tmp10, tmp11] = items;
      class ChannelCallModalTsx4 {
        constructor() {
          result = closure_0.set(-closure_1);
          return;
        }
      }
      const items1 = [tmp10, tmp11];
      ChannelCallModalTsx4.__closure = items1;
      ChannelCallModalTsx4.__workletHash = 17212390568465;
      ChannelCallModalTsx4.__initData = tmp9;
      _mod1708.scheduleOnUI(ChannelCallModalTsx4);
      _mod1708.scheduleOnRN(RouteManagerUtils.transitionToVoiceRoute, current.guildId, channelId);
      const tmp3Result = _mod1708;
    }
  }, items4);
  const tmp16 = c3(noop.useState(false), 2);
  const tmp12Result = useAnalyticsLocationsDefault;
  const items5 = [closure_23, sharedValue2, sharedValue, width, derivedValue, VoiceChatDrawerState];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items5;
  class ChannelCallModalTsx5 {
    constructor() {
      value = closure_0.get();
      obj = closure_1;
      tmp2 = closure_2;
      tmp3 = closure_1.get() === -closure_2;
      if (!tmp3) {
        num = 0;
        tmp3 = 0 === obj.get();
      }
      tmp5 = closure_4;
      value1 = closure_3.get();
      value2 = closure_3.get();
      if (!value) {
        if (tmp3) {
          return obj.get() === -tmp2 ? tmp5.OPEN : tmp5.CLOSED;
        }
      }
      if (value1 !== closure_4.OPEN) {
        OPENING = null;
        if (value2 === closure_4.CLOSED) {
          num2 = 0;
          OPENING = null;
          if (obj.get() < 0) {
            OPENING = tmp5.OPENING;
          }
        }
        tmp8 = OPENING;
      }
      OPENING = tmp5.CLOSING;
      return;
    }
  }
  const items6 = [tmp26, tmp27, tmp28, tmp29, tmp30];
  ChannelCallModalTsx5.__closure = items6;
  ChannelCallModalTsx5.__workletHash = 604699116380;
  ChannelCallModalTsx5.__initData = tmp25;
  const items7 = [closure_24, require("module_1708").scheduleOnRN, closure_10, channelId, VoiceChatDrawerState, require("RouteManagerUtils").transitionToVoiceRoute, guildId];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37] = items7;
  class ChannelCallModalTsx6 {
    constructor(arg0, arg1) {
      tmp = channelId !== arg1;
      tmp2 = tmp;
      if (tmp) {
        tmp3 = null;
        tmp2 = null != channelId;
      }
      if (tmp2) {
        tmp2 = tmp;
      }
      if (tmp2) {
        tmp5 = closure_1;
        tmp4 = closure_0;
        tmp6 = closure_2;
        tmp7 = closure_0(closure_1, closure_2, channelId);
        tmp8 = closure_3;
        if (channelId === closure_3.OPEN) {
          tmp9 = closure_4;
          tmp10 = closure_5;
          tmp4Result = tmp4(closure_4, closure_5, tmp6);
        }
      }
      return;
    }
  }
  const items8 = [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37];
  ChannelCallModalTsx6.__closure = items8;
  ChannelCallModalTsx6.__workletHash = 9630592184087;
  ChannelCallModalTsx6.__initData = tmp31;
  const animatedReaction = require("module_1655").useAnimatedReaction(ChannelCallModalTsx5, ChannelCallModalTsx6);
  const tmpResult5 = require("module_1655");
  const items9 = [closure_25, derivedValue];
  _require = undefined;
  [tmp39, tmp40] = items9;
  class ChannelCallModalTsx7 {
    constructor() {
      return closure_0.get();
    }
  }
  const items10 = [tmp40];
  ChannelCallModalTsx7.__closure = items10;
  ChannelCallModalTsx7.__workletHash = 1239997635149;
  ChannelCallModalTsx7.__initData = tmp39;
  const items11 = [closure_26, VoiceChatDrawerState, sharedValue, require("PanGestureAnimations").withPanGestureTiming];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp41, tmp42, tmp43, tmp44] = items11;
  class ChannelCallModalTsx8 {
    constructor(arg0, arg1) {
      tmp2 = channelId === closure_0.CLOSED;
      if (tmp2) {
        tmp3 = arg1;
        tmp2 = arg1 === tmp.OPEN;
      }
      if (tmp2) {
        tmp4 = closure_1;
        tmp5 = closure_2;
        num = 0;
        result = closure_1.set(closure_2(0));
      }
      return;
    }
  }
  const items12 = [tmp42, tmp43, tmp44];
  ChannelCallModalTsx8.__closure = items12;
  ChannelCallModalTsx8.__workletHash = 17096813907815;
  ChannelCallModalTsx8.__initData = tmp41;
  const animatedReaction1 = require("module_1655").useAnimatedReaction(ChannelCallModalTsx7, ChannelCallModalTsx8);
  let tmp46 = !tmp17;
  if (!tmp17) {
    tmp46 = !tmp15;
  }
  const tmpResult6 = require("module_1655");
  const items13 = [closure_19, width];
  _require = undefined;
  [tmp47, tmp48] = items13;
  class ChannelCallModalTsx1 {
    constructor() {
      items = [0];
      items[1] = -closure_0;
      return items;
    }
  }
  const items14 = [tmp48];
  ChannelCallModalTsx1.__closure = items14;
  ChannelCallModalTsx1.__workletHash = 14039317631813;
  ChannelCallModalTsx1.__initData = tmp47;
  const items15 = [closure_20, , ];
  const derivedValue1 = require("module_1655").useDerivedValue(ChannelCallModalTsx1);
  items15[1] = require("module_1708").scheduleOnRN;
  items15[2] = require("ChatInputUtils").dismissKeyboard;
  _require = undefined;
  importDefault = undefined;
  [tmp50, tmp51, tmp52] = items15;
  class ChannelCallModalTsx2 {
    constructor() {
      tmp = closure_0(closure_1);
      return;
    }
  }
  const items16 = [tmp51, tmp52];
  ChannelCallModalTsx2.__closure = items16;
  ChannelCallModalTsx2.__workletHash = 11314755717750;
  ChannelCallModalTsx2.__initData = tmp50;
  const callback = obj3.useCallback(ChannelCallModalTsx2, []);
  const obj7 = { lowerBounds: -width, upperBounds: 0, translate: sharedValue, vertical: false, snapPositions: derivedValue1, onStart: callback, isGestureInProgress: sharedValue2 };
  const tmpResult7 = require("module_1655");
  const obj13 = PanGestureAnimationsDefault({ lowerBounds: -width, upperBounds: 0, translate: sharedValue, vertical: false, snapPositions: derivedValue1, onStart: callback, isGestureInProgress: sharedValue2 });
  const items17 = [-closure_13, closure_13];
  const enabledResult = PanGestureAnimationsDefault({ lowerBounds: -width, upperBounds: 0, translate: sharedValue, vertical: false, snapPositions: derivedValue1, onStart: callback, isGestureInProgress: sharedValue2 }).enabled(tmp46);
  const items18 = [-closure_14, closure_14];
  const failOffsetYResult = PanGestureAnimationsDefault({ lowerBounds: -width, upperBounds: 0, translate: sharedValue, vertical: false, snapPositions: derivedValue1, onStart: callback, isGestureInProgress: sharedValue2 }).enabled(tmp46).failOffsetY(items17);
  const activeOffsetXResult = PanGestureAnimationsDefault({ lowerBounds: -width, upperBounds: 0, translate: sharedValue, vertical: false, snapPositions: derivedValue1, onStart: callback, isGestureInProgress: sharedValue2 }).enabled(tmp46).failOffsetY(items17).activeOffsetX(items18);
  const obj8 = { gestureEnabled: tmp18, height, maxTranslate: result, thresholdTranslate: 0.5 * height, translateY: sharedValue1 };
  const withRefResult = PanGestureAnimationsDefault({ lowerBounds: -width, upperBounds: 0, translate: sharedValue, vertical: false, snapPositions: derivedValue1, onStart: callback, isGestureInProgress: sharedValue2 }).enabled(tmp46).failOffsetY(items17).activeOffsetX(items18).withRef(ref);
  const obj18 = useModalPanGestureDefault({ gestureEnabled: tmp18, height, maxTranslate: result, thresholdTranslate: 0.5 * height, translateY: sharedValue1 });
  const items19 = [channelId];
  let result1 = useModalPanGestureDefault({ gestureEnabled: tmp18, height, maxTranslate: result, thresholdTranslate: 0.5 * height, translateY: sharedValue1 }).withRef(ref3).requireExternalGestureToFail(ref2, ref1);
  const layoutEffect = obj3.useLayoutEffect(() => {
    const result = PrivateChannelCallUtils.maybeShowAgeGateModal(c0);
  }, items19);
  const withRefResult1 = useModalPanGestureDefault({ gestureEnabled: tmp18, height, maxTranslate: result, thresholdTranslate: 0.5 * height, translateY: sharedValue1 }).withRef(ref3);
  const items20 = [closure_27, require("module_1655").interpolate, sharedValue1, result];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp57, tmp58, tmp59, tmp60] = items20;
  class ChannelCallModalTsx9 {
    constructor() {
      obj = { flex: 1, transform: null };
      obj1 = { translateY: null };
      items = [0];
      items[1] = closure_2;
      items1 = [0];
      items1[1] = closure_2;
      obj1.translateY = closure_0(closure_1.get(), items, items1);
      items2 = [];
      items2[0] = obj1;
      obj.transform = items2;
      return obj;
    }
  }
  const items21 = [tmp58, tmp59, tmp60];
  ChannelCallModalTsx9.__closure = items21;
  ChannelCallModalTsx9.__workletHash = 7616891402023;
  ChannelCallModalTsx9.__initData = tmp57;
  const items22 = [ref2, ref3, ref, ref1, sharedValue, width, channelId];
  const animatedStyle = require("module_1655").useAnimatedStyle(ChannelCallModalTsx9);
  let tmp63 = null;
  if (null != stateFromStores) {
    const obj9 = { value: tmp12Result(tmp12(7937).CHANNEL_CALL).analyticsLocations, children: null };
    const obj10 = { gesture: null, children: null };
    const Gesture = tmp(5598).Gesture;
    obj10.gesture = Gesture.Exclusive(withRefResult, result1);
    const obj11 = { style: animatedStyle, children: null };
    const obj12 = { value: tmp62, children: null };
    const obj14 = { channelId };
    const items23 = [closure_15(closure_18, obj14), ];
    const obj15 = { channel: stateFromStores };
    items23[1] = closure_15(ChannelCallCameraPreview, obj15);
    obj12.children = items23;
    obj11.children = closure_16(tmp(11009).VoiceChatNavigationContext.Provider, obj12);
    obj10.children = closure_15(tmp12(1655).View, obj11);
    obj9.children = closure_15(tmp(5598).GestureDetector, obj10);
    tmp63 = closure_15(tmp(7918).AnalyticsLocationProvider, obj9);
  }
  return tmp63;
});
ChannelCallModal.modalConfig = { animation: fn(1072).ModalAnimation.SLIDE_UP, shouldPersistUnderModals: true };
let size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallModal.tsx");

export default ChannelCallModal;
export { ChannelCallCameraPreview };
export { ChannelCallModal };