// === Module 9063: CameraPreview ===

// Module 9063 (CameraPreview)
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6140 */;
import ChannelCallStore from "ChannelCallStore" /* 9050 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 9053 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9064 */;
import PictureInPicture from "PictureInPicture" /* 9067 */;
import usePipVideoOrStreamDefault from "usePipVideoOrStream" /* 9069 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelCallLifecycleStore_mod from "ChannelCallLifecycleStore" /* 9065 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9051 */;
import CallConstants from "CallConstants" /* 4911 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_12, dependencyMap, importDefault;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let hasOwnProperty;
let metroRequire;
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
let closure_9 = useChatBottomManagerUIStore.useBestActiveChatInputContainerHeight;
let ChannelCallLifecycleStore = ChannelCallLifecycleStore_mod;
const useChannelCallStore = ChannelCallStore.useChannelCallStore;
({ VoiceChatDrawerState: closure_14, VOICE_CALL_OVERLAY_HORIZONTAL_MARGIN: closure_15, VOICE_CALL_OVERLAY_VERTICAL_MARGIN: closure_16, VoiceCallOverlayType: closure_17 } = ChannelCallConstants);
const ApplicationStreamStates = Constants.ApplicationStreamStates;
({ ParticipantTypes: closure_19, isStreamParticipant: closure_20 } = CallConstants);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = Fragment);
let closure_24 = { code: "function CameraPreviewTsx1(){const{closeFunc,runOnJS}=this.__closure;if(closeFunc!=null){runOnJS(closeFunc)();}}" };
let obj = { duration: 250, easing: native.STANDARD_EASING };
const constants4 = { HIDE_PIP: "HIDE_PIP", HANDLE_THERMAL_EVENT: "HANDLE_THERMAL_EVENT" };
const __initData = { code: "function CameraPreviewTsx2(){const{withTiming,marginTopState,TIMING_CONFIG,marginBottomState}=this.__closure;return{marginTop:withTiming(marginTopState,TIMING_CONFIG),marginBottom:withTiming(marginBottomState,TIMING_CONFIG)};}" };
const __initData2 = { code: "function CameraPreviewTsx3(){const{withTiming,marginTopState,TIMING_CONFIG,marginBottomState}=this.__closure;return{marginTop:withTiming(marginTopState,TIMING_CONFIG),marginBottom:withTiming(marginBottomState,TIMING_CONFIG)};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let closure_15;
  let closure_2;
  let closure_4;
  let left;
  let nonSelfPipParticipant;
  let obj11;
  let participantScreenIsFocused;
  let reveal;
  let right;
  let selfParticipant;
  let tmp11;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp4;
  let tmp44;
  let tmp5;
  let tmp2 = dependencyMap;
  const TIMING_CONFIG = participantScreenIsFocused(576);
  const cResult = TIMING_CONFIG.c(59);
  ({ channel, nonSelfPipParticipant, selfParticipant, participantScreenIsFocused } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelCallLifecycleStore];
    let fn = function u() {
      return closure_12.isReactingToThermalState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = participantScreenIsFocused(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  [r10037, tmp11] = reveal(stateFromStores(9066)(), 2);
  dependencyMap = tmp11;
  let obj3 = react;
  reveal(stateFromStores(9066)(), 2);
  reveal = react.useContext(participantScreenIsFocused(9058).RevealContext).reveal;
  const tmp12 = stateFromStores(9075)();
  react = tmp12;
  const tmp13 = closure_9();
  let closure_5 = tmp13;
  const tmp14 = stateFromStores(9059)(channel.id);
  let closure_6 = tmp14;
  const tmpResult5 = participantScreenIsFocused(5912);
  const isScreenLandscape = tmpResult5.useIsScreenLandscape();
  const rect = stateFromStores(1618)();
  const bottom = rect.bottom;
  const top = rect.top;
  ({ left, right } = rect);
  if (cResult[2] !== channel.id) {
    let obj2 = { channelId: null };
    ({ id: obj5.channelId, id: tmp3[2] } = channel);
    cResult[3] = obj2;
    tmp16 = obj2;
  } else {
    tmp16 = cResult[3];
  }
  const tmpResult6 = participantScreenIsFocused(9072);
  let isViewingActivity = tmpResult6.useIsViewingActivity(tmp16);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelCallLifecycleStore];
    class Z {
      constructor() {
        return closure_12.getVoiceCallOverlayLayoutStates();
      }
    }
    cResult[4] = items1;
    cResult[5] = Z;
    tmp19 = Z;
    tmp18 = items1;
  } else {
    tmp18 = cResult[4];
    tmp19 = cResult[5];
  }
  const tmpResult7 = participantScreenIsFocused(504);
  const tmp21 = tmpResult7.useStateFromStores(tmp18, tmp19)[constants2.CAMERA_PREVIEW_PICTURE_IN_PICTURE];
  const OrientationType = participantScreenIsFocused(8008).OrientationType;
  const tmp22 = isScreenLandscape ? OrientationType.LANDSCAPE : OrientationType.PORTRAIT;
  closure_9 = tmp22;
  let tmp23 = tmp8(7946)(tmp22);
  if (tmp23 == null) {
    let screenOrientation;
    if (tmp21 != null) {
      screenOrientation = tmp21.screenOrientation;
    }
    tmp23 = screenOrientation;
  }
  screenOrientation = tmp23;
  if (cResult[6] === tmp14) {
    if (cResult[7] === tmp22) {
      if (cResult[8] === tmp23) {
        let tmp25;
        let tmp26;
        if (cResult[9] === tmp11) {
          tmp25 = cResult[10];
          tmp26 = cResult[11];
        }
        const effect = obj3.useEffect(tmp25, tmp26);
        class Z {
          constructor() {
            return closure_12.getVoiceCallOverlayLayoutStates();
          }
        }
        const marginTopState = tmp29[0];
        ChannelCallLifecycleStore = tmp29[1];
        const tmp9Result = reveal(obj3.useState(bottom + closure_16), 2);
        const first1 = tmp9Result[0];
        let closure_14 = tmp9Result[1];
        if (cResult[12] === tmp12) {
          if (cResult[13] === tmp13) {
            if (cResult[14] === participantScreenIsFocused) {
              if (cResult[15] === reveal) {
                if (cResult[16] === bottom) {
                  let tmp33;
                  let tmp34;
                  let tmp41;
                  if (cResult[17] === top) {
                    tmp33 = cResult[18];
                    tmp34 = cResult[19];
                  }
                  const effect1 = obj3.useEffect(tmp33, tmp34);
                  const tmpResult8 = participantScreenIsFocused(4612);
                  class Z {
                    constructor() {
                      return closure_12.getVoiceCallOverlayLayoutStates();
                    }
                  }
                  const useAnimatedStyle = tmpResult8.useAnimatedStyle;
                  tmp37.__closure = { withTiming: participantScreenIsFocused(4891).withTiming, marginTopState, TIMING_CONFIG, marginBottomState: first1 };
                  tmp37.__workletHash = 17411027531876;
                  tmp37.__initData = __initData;
                  const obj4 = { withTiming: participantScreenIsFocused(4891).withTiming, marginTopState, TIMING_CONFIG, marginBottomState: first1 };
                  const animatedStyle = useAnimatedStyle(tmp37);
                  const _Symbol = Symbol;
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    function de() {
                      obj = participantScreenIsFocused(dependencyMap[32]);
                      const result = obj.setPipEnabledWhileFocusedOnActivityOrStream(false);
                    }
                    cResult[20] = de;
                    class Z {
                      constructor() {
                        return closure_12.getVoiceCallOverlayLayoutStates();
                      }
                    }
                  } else {
                    tmp41 = cResult[20];
                  }
                  const ref = obj3.useRef(null);
                  [tmp44, closure_15] = reveal(obj3.useState(null), 2);
                  reveal(obj3.useState(null), 2);
                  if (constants4.HIDE_PIP === tmp44) {
                    const _Symbol4 = Symbol;
                    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                      const obj6 = { text: null, onClick: tmp41 };
                      const string2 = participantScreenIsFocused(1126).intl.string;
                      class Z {
                        constructor() {
                          return closure_12.getVoiceCallOverlayLayoutStates();
                        }
                      }
                      const items2 = [obj6];
                      cResult[21] = items2;
                    }
                    class Z {
                      constructor() {
                        return closure_12.getVoiceCallOverlayLayoutStates();
                      }
                    }
                  } else if (tmp45.HANDLE_THERMAL_EVENT === tmp44) {
                    const _Symbol3 = Symbol;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      const obj7 = { text: null, onClick: participantScreenIsFocused(9084).openIgnoreThermalStateAlert };
                      const string = participantScreenIsFocused(1126).intl.string;
                      class Z {
                        constructor() {
                          return closure_12.getVoiceCallOverlayLayoutStates();
                        }
                      }
                      const items3 = [obj7];
                      cResult[22] = items3;
                    }
                    class Z {
                      constructor() {
                        return closure_12.getVoiceCallOverlayLayoutStates();
                      }
                    }
                  } else {
                    const _Symbol2 = Symbol;
                    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                      const items4 = [];
                      cResult[23] = items4;
                      class Z {
                        constructor() {
                          return closure_12.getVoiceCallOverlayLayoutStates();
                        }
                      }
                    }
                  }
                  const items5 = [ref];
                  const memo = obj3.useMemo(() => {
                    const current = participantScreenIsFocused.current;
                    let close;
                    if (current != null) {
                      close = current.close;
                    }
                    const Gesture = LegacyBaseButton.Gesture;
                    const fn = function n() {
                      if (null != close) {
                        obj = participantScreenIsFocused(closure_2_2[15]);
                        obj.runOnJS(tmp)();
                      }
                    };
                    const TapResult = Gesture.Tap();
                    const __closure = { closeFunc: close, runOnJS: ReanimatedRexport.runOnJS };
                    fn.__closure = __closure;
                    fn.__workletHash = 9707001557651;
                    fn.__initData = __initData;
                    return TapResult.onTouchesUp(fn);
                  }, items5);
                  if (cResult[24] === memo) {
                    class Z {
                      constructor() {
                        return closure_12.getVoiceCallOverlayLayoutStates();
                      }
                    }
                    let sum = left + closure_15;
                    let sum1 = right + closure_15;
                    if (cResult[27] === sum) {
                      let tmp56;
                      if (cResult[28] === sum1) {
                        tmp56 = cResult[29];
                      }
                      if (cResult[30] === animatedStyle) {
                        if (isViewingActivity) {
                          isViewingActivity = stateFromStores;
                        }
                        class Z {
                          constructor() {
                            return closure_12.getVoiceCallOverlayLayoutStates();
                          }
                        }
                        const obj8 = { channel, selfParticipant, pipParticipant: nonSelfPipParticipant };
                        cResult[33] = channel;
                        cResult[34] = nonSelfPipParticipant;
                        cResult[35] = selfParticipant;
                        cResult[36] = closure_21(stateFromStores(9086), obj8);
                        const tmp61 = closure_21(stateFromStores(9086), obj8);
                      }
                      const items6 = [, ];
                      class Z {
                        constructor() {
                          return closure_12.getVoiceCallOverlayLayoutStates();
                        }
                      }
                      items6[1] = animatedStyle;
                      cResult[30] = animatedStyle;
                      cResult[31] = tmp56;
                      cResult[32] = items6;
                    }
                    const obj9 = { flex: 1, marginLeft: sum, marginRight: sum1 };
                    cResult[27] = sum;
                    cResult[28] = sum1;
                    cResult[29] = obj9;
                    tmp56 = obj9;
                  }
                  let tmp51 = null;
                  if (null != tmp44) {
                    const obj10 = { gesture: memo, children: closure_21(closure_6, obj11) };
                    class Z {
                      constructor() {
                        return closure_12.getVoiceCallOverlayLayoutStates();
                      }
                    }
                    obj11 = { style: closure_5.absoluteFill };
                    const GestureDetector = participantScreenIsFocused(6140).GestureDetector;
                    tmp51 = closure_21(GestureDetector, obj10);
                  }
                  cResult[24] = memo;
                  cResult[25] = tmp44;
                  cResult[26] = tmp51;
                }
              }
            }
          }
        }
        function ee() {
          let sum2;
          let sum3;
          let sum = top + authStore3;
          let sum1 = bottom + authStore3;
          if (participantScreenIsFocused) {
            if (reveal) {
              sum = NavigatorConstants.NAV_BAR_HEIGHT + tmp + authStore3;
            }
            if (reveal) {
              sum1 = closure_4 + bottom + authStore3;
            }
            sum3 = sum1;
            sum2 = sum;
          } else {
            sum2 = NavigatorConstants.NAV_BAR_HEIGHT + authStore3;
            sum3 = closure_5 + bottom + authStore3;
          }
          closure_12(sum2);
          closure_14(sum3);
        }
        const items7 = [reveal, tmp13, participantScreenIsFocused, tmp12, top, bottom];
        cResult[12] = tmp12;
        cResult[13] = tmp13;
        cResult[14] = participantScreenIsFocused;
        cResult[15] = reveal;
        cResult[16] = bottom;
        cResult[17] = top;
        cResult[18] = ee;
        cResult[19] = items7;
        tmp34 = items7;
        tmp33 = ee;
      }
    }
  }
  const fn2 = function z() {
    const tmp2 = null != screenOrientation && tmp !== closure_9 && closure_6;
    if (tmp2) {
      dependencyMap(PictureInPicture.DEFAULT_PIP_POSITION);
    }
  };
  const items8 = [tmp22, tmp23, tmp14, tmp11];
  cResult[6] = tmp14;
  cResult[7] = tmp22;
  cResult[8] = tmp23;
  cResult[9] = tmp11;
  cResult[10] = fn2;
  cResult[11] = items8;
  tmp26 = items8;
  tmp25 = fn2;
}) : ((arg0) => {
  let View;
  let _undefined;
  let c15;
  let channel;
  let closure_2;
  let closure_4;
  let handleHidePip;
  let intl;
  let intl2;
  let items6;
  let items8;
  let left;
  let nonSelfPipParticipant;
  let obj11;
  let obj13;
  let obj15;
  let obj16;
  let participantScreenIsFocused;
  let right;
  let selfParticipant;
  let str;
  let tmp28;
  let tmp4Result;
  let tmp4Result2;
  ({ channel, participantScreenIsFocused } = arg0);
  dependencyMap = undefined;
  let reveal;
  react = undefined;
  closure_9 = undefined;
  let screenOrientation;
  let first1;
  closure_12 = undefined;
  let first2;
  let closure_14;
  c15 = undefined;
  let tmp2 = dependencyMap;
  ({ nonSelfPipParticipant, selfParticipant } = arg0);
  const TIMING_CONFIG = participantScreenIsFocused(504);
  const items = [closure_12];
  const stateFromStores = TIMING_CONFIG.useStateFromStores(items, () => closure_12.isReactingToThermalState());
  const tmp6 = reveal(stateFromStores(9066)(), 2);
  dependencyMap = tmp8;
  let obj2 = react;
  const first = tmp6[0];
  reveal = react.useContext(participantScreenIsFocused(9058).RevealContext).reveal;
  const tmp9 = stateFromStores(9075)();
  react = tmp9;
  const tmp10 = closure_9();
  let closure_5 = tmp10;
  const tmp11 = stateFromStores(9059)(channel.id);
  let closure_6 = tmp11;
  let obj3 = participantScreenIsFocused(5912);
  const isScreenLandscape = obj3.useIsScreenLandscape();
  const rect = stateFromStores(1618)();
  const bottom = rect.bottom;
  const top = rect.top;
  ({ left, right } = rect);
  const obj4 = participantScreenIsFocused(9072);
  const obj5 = { channelId: channel.id };
  let isViewingActivity = obj4.useIsViewingActivity(obj5);
  const items1 = [closure_12];
  const obj6 = participantScreenIsFocused(504);
  const tmp14 = obj6.useStateFromStores(items1, () => closure_12.getVoiceCallOverlayLayoutStates())[constants2.CAMERA_PREVIEW_PICTURE_IN_PICTURE];
  const OrientationType = participantScreenIsFocused(8008).OrientationType;
  const tmp15 = isScreenLandscape ? OrientationType.LANDSCAPE : OrientationType.PORTRAIT;
  closure_9 = tmp15;
  const tmp16 = tmp4(7946)(tmp15);
  let tmp17 = tmp16;
  if (tmp16 == null) {
    screenOrientation = undefined;
    if (tmp14 != null) {
      screenOrientation = tmp14.screenOrientation;
    }
    tmp17 = screenOrientation;
  }
  screenOrientation = tmp17;
  const items2 = [tmp15, tmp17, tmp11, tmp6[1]];
  const effect = obj2.useEffect(() => {
    const tmp2 = null != screenOrientation && tmp !== closure_9 && closure_6;
    if (tmp2) {
      closure_2(PictureInPicture.DEFAULT_PIP_POSITION);
    }
  }, items2);
  const tmp5Result = reveal(obj2.useState(top + closure_16), 2);
  first1 = tmp5Result[0];
  closure_12 = tmp5Result[1];
  const tmp5Result3 = reveal(obj2.useState(bottom + closure_16), 2);
  first2 = tmp5Result3[0];
  closure_14 = tmp5Result3[1];
  const items3 = [reveal, tmp10, participantScreenIsFocused, tmp9, top, bottom];
  const effect1 = obj2.useEffect(() => {
    let sum2;
    let sum3;
    let sum = top + authStore3;
    let sum1 = bottom + authStore3;
    if (participantScreenIsFocused) {
      if (reveal) {
        sum = NavigatorConstants.NAV_BAR_HEIGHT + tmp + authStore3;
      }
      if (reveal) {
        sum1 = closure_4 + bottom + authStore3;
      }
      sum3 = sum1;
      sum2 = sum;
    } else {
      sum2 = NavigatorConstants.NAV_BAR_HEIGHT + authStore3;
      sum3 = closure_5 + bottom + authStore3;
    }
    closure_12(sum2);
    closure_14(sum3);
  }, items3);
  const fn = function $() {
    let obj2;
    let obj3;
    obj = { marginTop: obj2.withTiming(first1, obj), marginBottom: obj3.withTiming(first2, obj) };
    obj2 = timing;
    obj3 = timing;
    return obj;
  };
  const tmpResult = participantScreenIsFocused(4612);
  fn.__closure = { withTiming: participantScreenIsFocused(4891).withTiming, marginTopState: first1, TIMING_CONFIG, marginBottomState: first2 };
  fn.__workletHash = 216673259589;
  fn.__initData = __initData2;
  ({ withTiming: participantScreenIsFocused(4891).withTiming, marginTopState: first1, TIMING_CONFIG, marginBottomState: first2 });
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const ref = obj2.useRef(null);
  [tmp28, c15] = reveal(obj2.useState(null), 2);
  reveal(obj2.useState(null), 2);
  if (constants4.HIDE_PIP === tmp28) {
    const obj8 = { text: intl2.string(participantScreenIsFocused(1126).t.L3I0Jr), onClick: handleHidePip };
    handleHidePip = function handleHidePip() {
      obj = participantScreenIsFocused(closure_2[32]);
      const result = obj.setPipEnabledWhileFocusedOnActivityOrStream(false);
    };
    intl2 = participantScreenIsFocused(1126).intl;
    const items4 = [obj8];
    items6 = items4;
  } else if (tmp29.HANDLE_THERMAL_EVENT === tmp28) {
    const obj9 = { text: intl.string(participantScreenIsFocused(1126).t["1fRDnT"]), onClick: participantScreenIsFocused(9084).openIgnoreThermalStateAlert };
    intl = participantScreenIsFocused(1126).intl;
    const items5 = [obj9];
    items6 = items5;
  } else {
    items6 = [];
  }
  [][0] = ref;
  let tmp33 = null;
  if (null != tmp28) {
    const obj10 = { gesture: tmp30, children: closure_21(closure_6, obj11) };
    obj11 = { style: closure_5.absoluteFill };
    const GestureDetector = participantScreenIsFocused(6140).GestureDetector;
    tmp33 = closure_21(GestureDetector, obj10);
  }
  const items7 = [tmp33, ];
  const obj12 = { style: closure_5.absoluteFill, pointerEvents: "box-none", children: closure_21(View, obj13, str) };
  obj13 = { style: items8, pointerEvents: "box-none", children: closure_21(tmp4Result, obj15) };
  items8 = [, ];
  const obj14 = { flex: 1, marginLeft: left + c15, marginRight: right + c15 };
  items8[0] = obj14;
  items8[1] = animatedStyle;
  View = tmp4(4612).View;
  obj15 = { channel, preferredPosition: first, onMove: tmp6[1], isInCallScreen: true, marginTop: first1, marginBottom: first2, children: closure_21(tmp4Result2, obj16) };
  obj16 = {
    ref,
    disabled: !isViewingActivity,
    trigger: closure_21(stateFromStores(9086), { channel, selfParticipant, pipParticipant: nonSelfPipParticipant }),
    rows: items6,
    onOpen() {
      _undefined(stateFromStores ? constants4.HANDLE_THERMAL_EVENT : constants4.HIDE_PIP);
    },
    onClose() {
      _undefined(null);
    }
  };
  tmp4Result = stateFromStores(9067);
  const tmp38 = closure_6;
  tmp4Result2 = stateFromStores(9151);
  if (isViewingActivity) {
    isViewingActivity = stateFromStores;
  }
  str = "portrait";
  if (isScreenLandscape) {
    str = "landscape";
  }
  const obj17 = { children: items7 };
  items7[1] = closure_21(tmp38, obj12);
  return closure_23(closure_22, obj17);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1, arg2) => {
  let first;
  let tmp6;
  _require = id;
  obj = require("react");
  const cResult = obj.c(7);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function s() {
      return ChannelRTCStore.getSelectedParticipant(id.id);
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let tmp7 = arg1;
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmp9 = usePipVideoOrStreamDefault(id.id);
  if (arg1) {
    tmp7 = !arg2;
  }
  if (cResult[3] === tmp7) {
    if (cResult[4] === tmp9) {
      let tmp14;
      let id1;
      const tmp11 = cResult[5];
      if (stateFromStores != null) {
        id1 = stateFromStores.id;
      }
      if (tmp11 === id1) {
        tmp14 = cResult[6];
      }
      return tmp14;
    }
  }
  let tmp15 = null;
  if (null != tmp9) {
    tmp15 = null;
    if (tmp9.user.id !== AuthenticationStore.getId()) {
      tmp15 = null;
      if (!tmp7) {
        let id2;
        id = tmp9.id;
        if (stateFromStores != null) {
          id2 = stateFromStores.id;
        }
        tmp15 = null;
        if (id !== id2) {
          tmp15 = tmp9;
        }
      }
    }
  }
  cResult[3] = tmp7;
  cResult[4] = tmp9;
  let id3;
  if (stateFromStores != null) {
    id3 = stateFromStores.id;
  }
  cResult[5] = id3;
  cResult[6] = tmp15;
  tmp14 = tmp15;
}) : ((id, arg1, arg2) => {
  _require = id;
  const items = [ChannelRTCStore];
  obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ChannelRTCStore.getSelectedParticipant(id.id));
  const tmp2 = usePipVideoOrStreamDefault(id.id);
  let tmp3 = null;
  if (null != tmp2) {
    tmp3 = null;
    if (tmp2.user.id !== AuthenticationStore.getId()) {
      const tmp5 = arg1;
      if (!tmp5) {
        let id1;
        id = tmp2.id;
        if (stateFromStores != null) {
          id1 = stateFromStores.id;
        }
        tmp3 = null;
        if (id !== id1) {
          tmp3 = tmp2;
        }
      } else {
        tmp3 = null;
      }
    }
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let isChannelCallModalOpen;
  let participantScreenIsFocused;
  let pipEnabledWhileFocusedOnActivityOrStream;
  const tmp = channel;
  let tmp2 = dependencyMap;
  obj = channel(576);
  const cResult = obj.c(32);
  channel = channel.channel;
  ({ participantScreenIsFocused, isChannelCallModalOpen } = channel);
  let tmp4 = undefined === participantScreenIsFocused || participantScreenIsFocused;
  importDefault = tmp4;
  const tmp5 = useSelectedParticipantDefault(channel);
  dependencyMap = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, AuthenticationStore, ApplicationStreamingStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.id) {
    if (cResult[2] === tmp4) {
      let tmp10;
      let tmp15;
      if (cResult[3] === tmp5) {
        tmp10 = cResult[4];
      }
      const _Symbol = Symbol;
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp10);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor(voiceChatDrawerState) {
            voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
            return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
          }
        }
        cResult[5] = C;
      } else {
        class C {
          constructor(voiceChatDrawerState) {
            voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
            return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
          }
        }
      }
      const _Symbol2 = Symbol;
      useChannelCallStore(C);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor(voiceChatDrawerState) {
            voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
            return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
          }
        }
        const items1 = [ChannelRTCStore, EmbeddedActivitiesStore];
        cResult[6] = items1;
        tmp15 = items1;
      } else {
        class C {
          constructor(voiceChatDrawerState) {
            voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
            return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
          }
        }
      }
      if (cResult[7] !== channel.id) {
        class C {
          constructor(voiceChatDrawerState) {
            voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
            return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
          }
        }
        cResult[7] = channel.id;
        cResult[8] = tmp18;
      } else {
        class C {
          constructor(voiceChatDrawerState) {
            voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
            return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
          }
        }
      }
      const tmpResult4 = tmp(504);
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp15, tmp18);
      let tmp21 = null != stateFromStores1;
      if (tmp21) {
        class C {
          constructor(voiceChatDrawerState) {
            voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
            return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
          }
        }
        if (tmp5 != null) {
          class C {
            constructor(voiceChatDrawerState) {
              voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
              return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
            }
          }
        }
        if (stateFromStores1 != null) {
          class C {
            constructor(voiceChatDrawerState) {
              voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
              return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
            }
          }
        }
        tmp21 = tmp22 === tmp23;
      }
      if (tmp21) {
        class C {
          constructor(voiceChatDrawerState) {
            voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
            return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
          }
        }
      }
      let closure_3 = tmp21;
      if (!closure_3) {
        class C {
          constructor(voiceChatDrawerState) {
            voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
            return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
          }
        }
      }
      const tmpResult5 = tmp(9152);
      const isStreamFocused = tmpResult5.useIsStreamFocused(channel.id);
      if (cResult[9] !== channel.id) {
        class C {
          constructor(voiceChatDrawerState) {
            voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
            return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
          }
        }
        tmp27[0] = channel.id;
        cResult[9] = channel.id;
        cResult[10] = tmp27;
      } else {
        class C {
          constructor(voiceChatDrawerState) {
            voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
            return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
          }
        }
      }
      const _Symbol3 = Symbol;
      const tmpResult6 = tmp(9072);
      const isViewingActivity = tmpResult6.useIsViewingActivity(tmp27);
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor(voiceChatDrawerState) {
            voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
            return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
          }
        }
        const items2 = [ChannelRTCStore, AuthenticationStore];
        cResult[11] = items2;
      } else {
        class C {
          constructor(voiceChatDrawerState) {
            voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
            return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
          }
        }
      }
      if (cResult[12] === channel) {
        class C {
          constructor(voiceChatDrawerState) {
            voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
            return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
          }
        }
      }
      class U {
        constructor() {
          let tmp10;
          id = AuthenticationStore.getId();
          const participant = ChannelRTCStore.getParticipant(channel.id, id);
          let streamId;
          if (participant != null) {
            streamId = participant.streamId;
          }
          if (null == streamId) {
            if (!closure_3) {
              return null;
            }
          }
          if (closure_1) {
            let tmp7 = null != id;
            if (tmp7) {
              let id1;
              if (id != null) {
                id1 = id.id;
              }
              tmp7 = id1 !== id;
            }
            if (null == id) {
              if (!channel.isGuildStageVoice()) {
                const participants = ChannelRTCStore.getParticipants(channel.id);
                let found = participants;
                if (participants.length <= 4) {
                  found = participants.filter((user) => {
                    const tmp = closure_2_20(user) && user.user.id === id;
                    return !tmp;
                  });
                }
                return tmp10;
              }
              tmp10 = participant;
            }
            tmp10 = null;
          } else {
            return participant;
          }
        }
      }
      cResult[12] = channel;
      cResult[13] = tmp21;
      cResult[14] = tmp4;
      cResult[15] = tmp5;
      cResult[16] = U;
    }
  }
  const fn = function l() {
    const id2 = AuthenticationStore.getId();
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    closure_1 = null != currentUserActiveStream && currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
    const tmp2 = null != currentUserActiveStream && currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
    const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
    const found = streamParticipants.find((user) => user.user.id === closure_0 && closure_1);
    if (null != id) {
      if (null != found) {
        let tmp6;
        if (id.id === found.id) {
          tmp6 = null;
        }
        return tmp6;
      }
    }
    tmp6 = found;
  };
  cResult[1] = channel.id;
  cResult[2] = tmp4;
  cResult[3] = tmp5;
  cResult[4] = fn;
  tmp10 = fn;
}) : ((channel) => {
  let pipEnabledWhileFocusedOnActivityOrStream;
  let tmp22;
  channel = channel.channel;
  let flag = channel.participantScreenIsFocused;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = channel.isChannelCallModalOpen;
  if (flag2 === undefined) {
    flag2 = false;
  }
  dependencyMap = undefined;
  let closure_3;
  let id2;
  let tmp2 = dependencyMap;
  let tmp = flag;
  const tmp3 = flag(9053)(channel);
  dependencyMap = tmp3;
  let tmp4 = channel;
  obj = channel(504);
  const items = [ChannelRTCStore, AuthenticationStore, ApplicationStreamingStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    id2 = AuthenticationStore.getId();
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    let closure_1 = null != currentUserActiveStream && currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
    const tmp2 = null != currentUserActiveStream && currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
    const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
    const found = streamParticipants.find((user) => user.user.id === closure_0 && closure_1);
    if (null != id) {
      if (null != found) {
        let tmp6;
        if (id.id === found.id) {
          tmp6 = null;
        }
        return tmp6;
      }
    }
    tmp6 = found;
  });
  const tmp8 = useChannelCallStore((voiceChatDrawerState) => {
    voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
    return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
  });
  let obj2 = channel(504);
  const items1 = [ChannelRTCStore, EmbeddedActivitiesStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let found = null;
    if (null != currentEmbeddedActivity) {
      const participants = ChannelRTCStore.getParticipants(channel.id);
      found = participants.find((id) => {
        id = id.id;
        obj = channel(closure_2_2[39]);
        const obj2 = { applicationId: currentEmbeddedActivity.applicationId, instanceId: currentEmbeddedActivity.compositeInstanceId };
        return id === obj.getEmbeddedActivityParticipantId(obj2);
      });
    }
    return found;
  });
  let tmp10 = null != stateFromStores1;
  if (tmp10) {
    let id;
    if (tmp3 != null) {
      id = tmp3.id;
    }
    let id1;
    if (stateFromStores1 != null) {
      id1 = stateFromStores1.id;
    }
    tmp10 = id === id1;
  }
  if (tmp10) {
    tmp10 = !tmp8;
  }
  closure_3 = tmp10;
  let tmp13 = null;
  if (!tmp10) {
    tmp13 = stateFromStores1;
  }
  const tmp4Result = tmp4(9152);
  const isStreamFocused = tmp4Result.useIsStreamFocused(channel.id);
  const obj3 = { channelId: channel.id };
  const tmp4Result6 = tmp4(9072);
  const isViewingActivity = tmp4Result6.useIsViewingActivity(obj3);
  const items2 = [ChannelRTCStore, AuthenticationStore];
  const tmp4Result7 = tmp4(504);
  const stateFromStores2 = tmp4Result7.useStateFromStores(items2, () => {
    let tmp10;
    id = AuthenticationStore.getId();
    const participant = ChannelRTCStore.getParticipant(channel.id, id);
    let streamId;
    if (participant != null) {
      streamId = participant.streamId;
    }
    if (null == streamId) {
      if (!closure_3) {
        return null;
      }
    }
    if (flag) {
      let tmp7 = null != id;
      if (tmp7) {
        let id1;
        if (id != null) {
          id1 = id.id;
        }
        tmp7 = id1 !== id;
      }
      if (null == id) {
        if (!channel.isGuildStageVoice()) {
          const participants = ChannelRTCStore.getParticipants(channel.id);
          let found = participants;
          if (participants.length <= 4) {
            found = participants.filter((user) => {
              const tmp = closure_2_20(user) && user.user.id === id;
              return !tmp;
            });
          }
          return tmp10;
        }
        tmp10 = participant;
      }
      tmp10 = null;
    } else {
      return participant;
    }
  });
  const items3 = [AuthenticationStore, ChannelRTCStore];
  id2 = channel.id;
  const tmp4Result8 = tmp4(504);
  const stateFromStores3 = tmp4Result8.useStateFromStores(items3, () => {
    let found;
    const tmp2 = closure_20(user);
    let type;
    if (user != null) {
      type = user.type;
    }
    const tmp4 = type === constants.USER;
    if (tmp2) {
      let streamId;
      if (user != null) {
        streamId = user.streamId;
      }
      if (null != streamId) {
        found = user;
      }
      let streamId1;
      if (found != null) {
        streamId1 = found.streamId;
      }
      let tmp17 = null;
      if (null != streamId1) {
        tmp17 = found;
      }
      return tmp17;
    }
    if (tmp2) {
      id = undefined;
      if (user != null) {
        id = user.user.id;
      }
      if (id !== AuthenticationStore.getId()) {
        const participant = ChannelRTCStore.getParticipant(channel.id, user.user.id);
        let localVideoDisabled;
        if (participant != null) {
          localVideoDisabled = participant.localVideoDisabled;
        }
        found = participant;
        if (localVideoDisabled) {
          found = null;
        }
      }
    }
    if (tmp4) {
      const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
      found = streamParticipants.find((user) => user.user.id === user.user.id);
    }
  });
  const items4 = [ChannelRTCStore];
  const tmp4Result9 = tmp4(504);
  const tmp18 = closure_30(channel, flag, tmp4Result9.useStateFromStores(items4, () => {
    const tmp2 = null != id2 && null != ChannelRTCStore.getSelectedParticipant(tmp);
    return tmp2;
  }));
  if (tmp13 == null) {
    tmp13 = stateFromStores;
  }
  if (tmp13 == null) {
    tmp13 = stateFromStores3;
  }
  if (tmp13 == null) {
    tmp13 = tmp18;
  }
  let tmp19 = null;
  if (stateFromStores2 !== tmp13) {
    tmp19 = stateFromStores2;
  }
  const items5 = [ChannelCallLifecycleStore];
  const tmp4Result10 = tmp4(504);
  const stateFromStores4 = tmp4Result10.useStateFromStores(items5, () => pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream());
  if (flag2) {
    flag2 = channel.isGuildStageVoice();
  }
  if (flag2) {
    flag2 = flag;
  }
  tmp(9153)(channel);
  if (tmp10) {
    if (!stateFromStores4) {
      tmp22 = null;
    }
    return tmp22;
  }
  if (null != tmp19) {
    tmp22 = null;
    if (!flag2) {
      const obj4 = { channel, participantScreenIsFocused: flag, nonSelfPipParticipant: tmp13, selfParticipant: tmp19 };
      tmp22 = closure_21(closure_29, obj4);
    }
  } else {
    tmp22 = null;
  }
});
let result = size.fileFinishedImporting("modules/video_calls/native/components/CameraPreview.tsx");

export default tmp6;