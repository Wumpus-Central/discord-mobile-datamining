// discord_app/modules/video_calls/native/components/CameraPreview.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/06334_LegacyBaseButton.js";
import useSelectedParticipantDefault from "../../useSelectedParticipant.tsx";
import PictureInPicture from "PictureInPicture.tsx";
import usePipVideoOrStreamDefault from "../usePipVideoOrStream.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ChannelCallLifecycleStore from "../ChannelCallLifecycleStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_9 = fn(9383).useBestActiveChatInputContainerHeight;
const useChannelCallStore = fn(10353).useChannelCallStore;
const ChannelCallConstants = fn(10354);
({
  VoiceChatDrawerState: closure_14,
  VOICE_CALL_OVERLAY_HORIZONTAL_MARGIN: closure_15,
  VOICE_CALL_OVERLAY_VERTICAL_MARGIN: closure_16,
  VoiceCallOverlayType: closure_17,
} = ChannelCallConstants);
const ApplicationStreamStates = fn(1085).ApplicationStreamStates;
const CallConstants = fn(5115);
({ ParticipantTypes: closure_19, isStreamParticipant: closure_20 } = CallConstants);
const jsxProd = fn(21);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
let closure_24 = {
  code: "function CameraPreviewTsx1(){const{closeFunc,runOnJS}=this.__closure;if(closeFunc!=null){runOnJS(closeFunc)();}}",
};
let obj = { duration: 250, easing: fn(1200).STANDARD_EASING };
const constants4 = { HIDE_PIP: "HIDE_PIP", HANDLE_THERMAL_EVENT: "HANDLE_THERMAL_EVENT" };
const __initData = {
  code: "function CameraPreviewTsx2(){const{withTiming,marginTopState,TIMING_CONFIG,marginBottomState}=this.__closure;return{marginTop:withTiming(marginTopState,TIMING_CONFIG),marginBottom:withTiming(marginBottomState,TIMING_CONFIG)};}",
};
const __initData2 = {
  code: "function CameraPreviewTsx3(){const{withTiming,marginTopState,TIMING_CONFIG,marginBottomState}=this.__closure;return{marginTop:withTiming(marginTopState,TIMING_CONFIG),marginBottom:withTiming(marginBottomState,TIMING_CONFIG)};}",
};
let ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CameraPreview(arg0) {
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
      const stateFromStores = participantScreenIsFocused(504).useStateFromStores(tmp4, tmp5);
      const tmpResult = participantScreenIsFocused(504);
      [r10037, tmp11] = reveal(stateFromStores(10832)(), 2);
      dependencyMap = tmp11;
      reveal = noop.useContext(participantScreenIsFocused(10827).RevealContext).reveal;
      const tmp12 = stateFromStores(10840)();
      noop = tmp12;
      const tmp13 = closure_9();
      closure_5 = tmp13;
      const tmp14 = stateFromStores(10828)(channel.id);
      closure_6 = tmp14;
      const tmp10 = reveal(stateFromStores(10832)(), 2);
      const isScreenLandscape = participantScreenIsFocused(8326).useIsScreenLandscape();
      const rect = stateFromStores(1631)();
      const bottom = rect.bottom;
      const top = rect.top;
      ({ left, right } = rect);
      if (cResult[2] !== channel.id) {
        let obj2 = { channelId: null };
        ({ id: obj5.channelId, id: tmp3[2] } = channel);
        cResult[3] = obj2;
        let tmp16 = obj2;
      } else {
        tmp16 = cResult[3];
      }
      const tmpResult5 = participantScreenIsFocused(8326);
      let isViewingActivity = participantScreenIsFocused(10838).useIsViewingActivity(tmp16);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelCallLifecycleStore];
        class Z {
          constructor() {
            return closure_12.getVoiceCallOverlayLayoutStates();
          }
        }
        cResult[4] = items1;
        cResult[5] = Z;
        let tmp19 = Z;
        let tmp18 = items1;
      } else {
        tmp18 = cResult[4];
        tmp19 = cResult[5];
      }
      const tmpResult6 = participantScreenIsFocused(10838);
      const tmp21 = participantScreenIsFocused(504).useStateFromStores(tmp18, tmp19)[
        constants2.CAMERA_PREVIEW_PICTURE_IN_PICTURE
      ];
      const OrientationType = participantScreenIsFocused(8450).OrientationType;
      const tmp22 = isScreenLandscape ? OrientationType.LANDSCAPE : OrientationType.PORTRAIT;
      closure_9 = tmp22;
      let tmp23 = tmp8(5922)(tmp22);
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
            if (cResult[9] === tmp11) {
              let tmp25 = cResult[10];
              let tmp26 = cResult[11];
            }
            const effect = obj3.useEffect(tmp25, tmp26);
            class Z {
              constructor() {
                return closure_12.getVoiceCallOverlayLayoutStates();
              }
            }
            const marginTopState = tmp29[0];
            ChannelCallLifecycleStore = tmp29[1];
            const tmp9Result = tmp9(obj3.useState(bottom + closure_16), 2);
            const first1 = tmp9Result[0];
            closure_14 = tmp9Result[1];
            if (cResult[12] === tmp12) {
              if (cResult[13] === tmp13) {
                if (cResult[14] === participantScreenIsFocused) {
                  if (cResult[15] === reveal) {
                    if (cResult[16] === bottom) {
                      if (cResult[17] === top) {
                        let tmp33 = cResult[18];
                        let tmp34 = cResult[19];
                      }
                      const effect1 = obj3.useEffect(tmp33, tmp34);
                      class Z {
                        constructor() {
                          return closure_12.getVoiceCallOverlayLayoutStates();
                        }
                      }
                      const obj4 = {
                        withTiming: participantScreenIsFocused(5093).withTiming,
                        marginTopState,
                        TIMING_CONFIG,
                        marginBottomState: first1,
                      };
                      tmp36.__closure = obj4;
                      tmp36.__workletHash = 17411027531876;
                      tmp36.__initData = __initData;
                      const animatedStyle = participantScreenIsFocused(4850).useAnimatedStyle(tmp36);
                      const _Symbol = Symbol;
                      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                        function handleHidePip() {
                          const result = participantScreenIsFocused(
                            tmp11[32],
                          ).setPipEnabledWhileFocusedOnActivityOrStream(false);
                        }
                        cResult[20] = handleHidePip;
                        class Z {
                          constructor() {
                            return closure_12.getVoiceCallOverlayLayoutStates();
                          }
                        }
                      } else {
                        let items2 = cResult[20];
                      }
                      const tmpResult8 = participantScreenIsFocused(4850);
                      const ref = obj3.useRef(null);
                      [tmp42, closure_15] = tmp9(obj3.useState(null), 2);
                      if (constants4.HIDE_PIP === tmp42) {
                        const _Symbol4 = Symbol;
                        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                          const obj6 = { text: null, onClick: null };
                          const string2 = participantScreenIsFocused(1126).intl.string;
                          class Z {
                            constructor() {
                              return closure_12.getVoiceCallOverlayLayoutStates();
                            }
                          }
                          obj6.onClick = items2;
                          items2 = [obj6];
                          cResult[21] = items2;
                        }
                        class Z {
                          constructor() {
                            return closure_12.getVoiceCallOverlayLayoutStates();
                          }
                        }
                      } else {
                        if (tmp43.HANDLE_THERMAL_EVENT === tmp42) {
                          const _Symbol3 = Symbol;
                          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                            const obj7 = { text: null, onClick: null };
                            const string = participantScreenIsFocused(1126).intl.string;
                            class Z {
                              constructor() {
                                return closure_12.getVoiceCallOverlayLayoutStates();
                              }
                            }
                            obj7.onClick = participantScreenIsFocused(10851).openIgnoreThermalStateAlert;
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
                        closure_129_0 = ref;
                        const items5 = [];
                        class Z {
                          constructor() {
                            return closure_12.getVoiceCallOverlayLayoutStates();
                          }
                        }
                        const memo = obj3.useMemo(() => {
                          const current = participantScreenIsFocused.current;
                          let close;
                          if (current != null) {
                            close = current.close;
                          }
                          const Gesture = LegacyBaseButton.Gesture;
                          const fn = function n() {
                            if (null != close) {
                              participantScreenIsFocused(dependencyMap[15]).runOnJS(tmp)();
                              obj = participantScreenIsFocused(dependencyMap[15]);
                            }
                          };
                          const __closure = { closeFunc: close, runOnJS: ReanimatedRexport.runOnJS };
                          fn.__closure = __closure;
                          fn.__workletHash = 9707001557651;
                          fn.__initData = __initData;
                          return Gesture.Tap().onTouchesUp(fn);
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
                            if (cResult[28] === sum1) {
                              let tmp54 = cResult[29];
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
                              const tmp59 = closure_21(tmp8(10879), obj8);
                              cResult[33] = channel;
                              cResult[34] = nonSelfPipParticipant;
                              cResult[35] = selfParticipant;
                              cResult[36] = tmp59;
                            }
                            const items6 = [,];
                            class Z {
                              constructor() {
                                return closure_12.getVoiceCallOverlayLayoutStates();
                              }
                            }
                            items6[1] = animatedStyle;
                            cResult[30] = animatedStyle;
                            cResult[31] = tmp54;
                            cResult[32] = items6;
                          }
                          const obj9 = { flex: 1, marginLeft: sum, marginRight: sum1 };
                          cResult[27] = sum;
                          cResult[28] = sum1;
                          cResult[29] = obj9;
                          tmp54 = obj9;
                        }
                        let tmp49 = null;
                        if (null != tmp42) {
                          const obj10 = { gesture: memo, children: null };
                          class Z {
                            constructor() {
                              return closure_12.getVoiceCallOverlayLayoutStates();
                            }
                          }
                          const obj11 = { style: closure_5.absoluteFill };
                          obj10.children = closure_21(closure_6, obj11);
                          tmp49 = closure_21(participantScreenIsFocused(6334).GestureDetector, obj10);
                        }
                        cResult[24] = memo;
                        cResult[25] = tmp42;
                        cResult[26] = tmp49;
                      }
                      const tmp9Result2 = tmp9(obj3.useState(null), 2);
                    }
                  }
                }
              }
            }
            function ee() {
              let sum = top + value3;
              let sum1 = bottom + value3;
              if (participantScreenIsFocused) {
                if (reveal) {
                  sum = NavigatorConstants.NAV_BAR_HEIGHT + tmp + value3;
                }
                if (reveal) {
                  sum1 = closure_4 + bottom + value3;
                }
                let sum3 = sum1;
                let sum2 = sum;
              } else {
                sum2 = NavigatorConstants.NAV_BAR_HEIGHT + value3;
                sum3 = closure_5 + bottom + value3;
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
        let tmp2 = null != screenOrientation;
        if (tmp2) {
          tmp2 = tmp !== closure_9;
        }
        if (tmp2) {
          tmp2 = closure_6;
        }
        if (tmp2) {
          tmp11(PictureInPicture.DEFAULT_PIP_POSITION);
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
      const tmpResult7 = participantScreenIsFocused(504);
    }
  : function CameraPreview(arg0) {
      ({ channel, participantScreenIsFocused } = arg0);
      let reveal;
      noop = undefined;
      closure_9 = undefined;
      let screenOrientation;
      let marginTop;
      closure_12 = undefined;
      let first1;
      closure_14 = undefined;
      c15 = undefined;
      ({ nonSelfPipParticipant, selfParticipant } = arg0);
      const TIMING_CONFIG = participantScreenIsFocused(504);
      const items = [closure_12];
      const stateFromStores = TIMING_CONFIG.useStateFromStores(items, () => closure_12.isReactingToThermalState());
      const tmp6 = reveal(stateFromStores(10832)(), 2);
      dependencyMap = tmp7;
      reveal = noop.useContext(participantScreenIsFocused(10827).RevealContext).reveal;
      const tmp8 = stateFromStores(10840)();
      noop = tmp8;
      const tmp9 = closure_9();
      closure_5 = tmp9;
      const tmp10 = stateFromStores(10828)(channel.id);
      closure_6 = tmp10;
      const isScreenLandscape = participantScreenIsFocused(8326).useIsScreenLandscape();
      const rect = stateFromStores(1631)();
      const bottom = rect.bottom;
      const top = rect.top;
      ({ left, right } = rect);
      const obj3 = participantScreenIsFocused(8326);
      let isViewingActivity = participantScreenIsFocused(10838).useIsViewingActivity({ channelId: channel.id });
      const obj4 = participantScreenIsFocused(10838);
      const obj5 = { channelId: channel.id };
      const items1 = [closure_12];
      const tmp13 = participantScreenIsFocused(504).useStateFromStores(items1, () =>
        closure_12.getVoiceCallOverlayLayoutStates(),
      )[constants2.CAMERA_PREVIEW_PICTURE_IN_PICTURE];
      const OrientationType = participantScreenIsFocused(8450).OrientationType;
      const tmp14 = isScreenLandscape ? OrientationType.LANDSCAPE : OrientationType.PORTRAIT;
      closure_9 = tmp14;
      const tmp15 = stateFromStores(5922)(tmp14);
      let tmp16 = tmp15;
      if (tmp15 == null) {
        screenOrientation = undefined;
        if (tmp13 != null) {
          screenOrientation = tmp13.screenOrientation;
        }
        tmp16 = screenOrientation;
      }
      screenOrientation = tmp16;
      const items2 = [tmp14, tmp16, tmp10, tmp6[1]];
      const effect = obj2.useEffect(() => {
        let tmp2 = null != screenOrientation;
        if (tmp2) {
          tmp2 = tmp !== closure_9;
        }
        if (tmp2) {
          tmp2 = closure_6;
        }
        if (tmp2) {
          dependencyMap(PictureInPicture.DEFAULT_PIP_POSITION);
        }
      }, items2);
      const tmp5Result = reveal(noop.useState(top + closure_16), 2);
      marginTop = tmp5Result[0];
      closure_12 = tmp5Result[1];
      const tmp5Result3 = reveal(noop.useState(bottom + closure_16), 2);
      first1 = tmp5Result3[0];
      closure_14 = tmp5Result3[1];
      const items3 = [reveal, tmp9, participantScreenIsFocused, tmp8, top, bottom];
      const effect1 = obj2.useEffect(() => {
        let sum = top + value3;
        let sum1 = bottom + value3;
        if (participantScreenIsFocused) {
          if (reveal) {
            sum = NavigatorConstants.NAV_BAR_HEIGHT + tmp + value3;
          }
          if (reveal) {
            sum1 = closure_4 + bottom + value3;
          }
          let sum3 = sum1;
          let sum2 = sum;
        } else {
          sum2 = NavigatorConstants.NAV_BAR_HEIGHT + value3;
          sum3 = closure_5 + bottom + value3;
        }
        closure_12(sum2);
        closure_14(sum3);
      }, items3);
      const obj6 = participantScreenIsFocused(504);
      const fn = function $() {
        obj = { marginTop: timing.withTiming(first, obj), marginBottom: null };
        obj.marginBottom = timing.withTiming(first1, obj);
        return obj;
      };
      const tmpResult = participantScreenIsFocused(4850);
      fn.__closure = {
        withTiming: participantScreenIsFocused(5093).withTiming,
        marginTopState: marginTop,
        TIMING_CONFIG,
        marginBottomState: first1,
      };
      fn.__workletHash = 216673259589;
      fn.__initData = __initData2;
      const animatedStyle = tmpResult.useAnimatedStyle(fn);
      const ref = noop.useRef(null);
      const obj7 = {
        withTiming: participantScreenIsFocused(5093).withTiming,
        marginTopState: marginTop,
        TIMING_CONFIG,
        marginBottomState: first1,
      };
      [tmp27, c15] = reveal(noop.useState(null), 2);
      if (constants4.HIDE_PIP === tmp27) {
        const obj8 = { text: null, onClick: null };
        function handleHidePip() {
          const result = participantScreenIsFocused(10850).setPipEnabledWhileFocusedOnActivityOrStream(false);
        }
        const intl2 = participantScreenIsFocused(1126).intl;
        obj8.text = intl2.string(participantScreenIsFocused(1126).t.L3I0Jr);
        obj8.onClick = handleHidePip;
        const items4 = [obj8];
        let items6 = items4;
      } else if (tmp28.HANDLE_THERMAL_EVENT === tmp27) {
        const obj9 = { text: null, onClick: null };
        const intl = participantScreenIsFocused(1126).intl;
        obj9.text = intl.string(participantScreenIsFocused(1126).t["1fRDnT"]);
        obj9.onClick = participantScreenIsFocused(10851).openIgnoreThermalStateAlert;
        const items5 = [obj9];
        items6 = items5;
      } else {
        items6 = [];
      }
      closure_129_0 = ref;
      [][0] = ref;
      let tmp32 = null;
      if (null != tmp27) {
        const obj10 = { gesture: tmp29, children: null };
        const obj11 = { style: closure_5.absoluteFill };
        obj10.children = closure_21(closure_6, obj11);
        tmp32 = closure_21(participantScreenIsFocused(6334).GestureDetector, obj10);
      }
      const items7 = [tmp32];
      const obj12 = { style: closure_5.absoluteFill, pointerEvents: "box-none", children: null };
      const obj13 = { style: null, pointerEvents: "box-none", children: null };
      const items8 = [{ flex: 1, marginLeft: left + c15, marginRight: right + c15 }, animatedStyle];
      obj13.style = items8;
      const obj15 = {
        channel,
        preferredPosition: tmp6[0],
        onMove: tmp6[1],
        isInCallScreen: true,
        marginTop,
        marginBottom: first1,
        children: null,
      };
      const obj14 = { flex: 1, marginLeft: left + c15, marginRight: right + c15 };
      const tmp37 = closure_6;
      const tmp5Result4 = reveal(noop.useState(null), 2);
      const obj16 = { ref, disabled: null, trigger: null, rows: null, onOpen: null, onClose: null };
      const tmp4Result = stateFromStores(10833);
      if (isViewingActivity) {
        isViewingActivity = stateFromStores;
      }
      obj16.disabled = !isViewingActivity;
      obj16.trigger = closure_21(stateFromStores(10879), {
        channel,
        selfParticipant,
        pipParticipant: nonSelfPipParticipant,
      });
      obj16.rows = items6;
      obj16.onOpen = function onOpen() {
        _undefined(stateFromStores ? constants.HANDLE_THERMAL_EVENT : constants.HIDE_PIP);
      };
      obj16.onClose = function onClose() {
        _undefined(null);
      };
      obj15.children = closure_21(stateFromStores(10964), obj16);
      obj13.children = closure_21(tmp4Result, obj15);
      let str = "portrait";
      if (isScreenLandscape) {
        str = "landscape";
      }
      const obj17 = { children: null };
      obj12.children = closure_21(stateFromStores(4850).View, obj13, str);
      items7[1] = closure_21(tmp37, obj12);
      obj17.children = items7;
      return closure_23(closure_22, obj17);
    };
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useOtherPipParticipant(id, arg1, arg2) {
      _require = id;
      const cResult = require("c").c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelRTCStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function s() {
          return ChannelRTCStore.getSelectedParticipant(id.id);
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let tmp7 = arg1;
      obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      const tmp9 = usePipVideoOrStreamDefault(id.id);
      if (arg1) {
        tmp7 = !arg2;
      }
      if (cResult[3] === tmp7) {
        if (cResult[4] === tmp9) {
          id = undefined;
          if (stateFromStores != null) {
            id = stateFromStores.id;
          }
          if (cResult[5] === id) {
            let tmp13 = cResult[6];
          }
          return tmp13;
        }
      }
      let tmp14 = null;
      if (null != tmp9) {
        tmp14 = null;
        if (tmp9.user.id !== AuthenticationStore.getId()) {
          tmp14 = null;
          if (!tmp7) {
            let id1;
            if (stateFromStores != null) {
              id1 = stateFromStores.id;
            }
            tmp14 = null;
            if (tmp9.id !== id1) {
              tmp14 = tmp9;
            }
          }
        }
      }
      cResult[3] = tmp7;
      cResult[4] = tmp9;
      let id2;
      if (stateFromStores != null) {
        id2 = stateFromStores.id;
      }
      cResult[5] = id2;
      cResult[6] = tmp14;
      tmp13 = tmp14;
      const tmpResult = require("initialize");
    }
  : function useOtherPipParticipant(id, arg1, arg2) {
      _require = id;
      const items = [ChannelRTCStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        ChannelRTCStore.getSelectedParticipant(id.id),
      );
      const tmp2 = usePipVideoOrStreamDefault(id.id);
      let tmp3 = null;
      if (null != tmp2) {
        tmp3 = null;
        if (tmp2.user.id !== AuthenticationStore.getId()) {
          if (!arg1) {
            id = undefined;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            tmp3 = null;
            if (tmp2.id !== id) {
              tmp3 = tmp2;
            }
          } else {
            tmp3 = null;
          }
        }
      }
      return tmp3;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/CameraPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CameraPreviewContainer(channel) {
      const cResult = channel(576).c(32);
      channel = channel.channel;
      ({ participantScreenIsFocused, isChannelCallModalOpen } = channel);
      importDefault = tmp4;
      const tmp5 = useSelectedParticipantDefault(channel);
      dependencyMap = tmp5;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelRTCStore, AuthenticationStore, ApplicationStreamingStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channel.id) {
        if (cResult[2] === tmp4) {
          if (cResult[3] === tmp5) {
            let tmp10 = cResult[4];
          }
          const _Symbol = Symbol;
          const stateFromStores = tmp(504).useStateFromStores(first, tmp10);
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor(arg0) {
                voiceChatDrawerState = channel.voiceChatDrawerState;
                tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                return tmp;
              }
            }
            cResult[5] = A;
          } else {
            class A {
              constructor(arg0) {
                voiceChatDrawerState = channel.voiceChatDrawerState;
                tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                return tmp;
              }
            }
          }
          const _Symbol2 = Symbol;
          useChannelCallStore(A);
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor(arg0) {
                voiceChatDrawerState = channel.voiceChatDrawerState;
                tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                return tmp;
              }
            }
            const items1 = [ChannelRTCStore, EmbeddedActivitiesStore];
            cResult[6] = items1;
            const tmp15 = items1;
          } else {
            class A {
              constructor(arg0) {
                voiceChatDrawerState = channel.voiceChatDrawerState;
                tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                return tmp;
              }
            }
          }
          if (cResult[7] !== channel.id) {
            class A {
              constructor(arg0) {
                voiceChatDrawerState = channel.voiceChatDrawerState;
                tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                return tmp;
              }
            }
            cResult[7] = channel.id;
            cResult[8] = tmp18;
          } else {
            class A {
              constructor(arg0) {
                voiceChatDrawerState = channel.voiceChatDrawerState;
                tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                return tmp;
              }
            }
          }
          const tmpResult = tmp(504);
          const stateFromStores1 = tmp(504).useStateFromStores(tmp15, tmp18);
          let tmp21 = null != stateFromStores1;
          if (tmp21) {
            class A {
              constructor(arg0) {
                voiceChatDrawerState = channel.voiceChatDrawerState;
                tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                return tmp;
              }
            }
            if (tmp5 != null) {
              class A {
                constructor(arg0) {
                  voiceChatDrawerState = channel.voiceChatDrawerState;
                  tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                  return tmp;
                }
              }
            }
            if (stateFromStores1 != null) {
              class A {
                constructor(arg0) {
                  voiceChatDrawerState = channel.voiceChatDrawerState;
                  tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                  return tmp;
                }
              }
            }
            tmp21 = tmp22 === tmp23;
          }
          if (tmp21) {
            class A {
              constructor(arg0) {
                voiceChatDrawerState = channel.voiceChatDrawerState;
                tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                return tmp;
              }
            }
          }
          closure_3 = tmp21;
          if (!tmp21) {
            class A {
              constructor(arg0) {
                voiceChatDrawerState = channel.voiceChatDrawerState;
                tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                return tmp;
              }
            }
          }
          const tmpResult4 = tmp(504);
          const isStreamFocused = tmp(10965).useIsStreamFocused(channel.id);
          if (cResult[9] !== channel.id) {
            class A {
              constructor(arg0) {
                voiceChatDrawerState = channel.voiceChatDrawerState;
                tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                return tmp;
              }
            }
            tmp27[0] = channel.id;
            cResult[9] = channel.id;
            cResult[10] = tmp27;
          } else {
            class A {
              constructor(arg0) {
                voiceChatDrawerState = channel.voiceChatDrawerState;
                tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                return tmp;
              }
            }
          }
          const tmpResult5 = tmp(10965);
          const _Symbol3 = Symbol;
          const isViewingActivity = tmp(10838).useIsViewingActivity(tmp27);
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor(arg0) {
                voiceChatDrawerState = channel.voiceChatDrawerState;
                tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                return tmp;
              }
            }
            const items2 = [ChannelRTCStore, AuthenticationStore];
            cResult[11] = items2;
          } else {
            class A {
              constructor(arg0) {
                voiceChatDrawerState = channel.voiceChatDrawerState;
                tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                return tmp;
              }
            }
          }
          if (cResult[12] === channel) {
            class A {
              constructor(arg0) {
                voiceChatDrawerState = channel.voiceChatDrawerState;
                tmp = voiceChatDrawerState === closure_1_14.OPEN || voiceChatDrawerState === closure_1_14.OPENING;
                return tmp;
              }
            }
          }
          class U {
            constructor() {
              id = closure_11.getId();
              obj = closure_8;
              obj2 = channel;
              participant = closure_8.getParticipant(channel.id, id);
              streamId = undefined;
              if (participant != null) {
                streamId = participant.streamId;
              }
              if (null == streamId) {
                tmp4 = closure_3;
                if (!closure_3) {
                  return null;
                }
              }
              if (closure_1) {
                tmp5 = closure_2;
                tmp6 = null != closure_2;
                if (tmp6) {
                  id1 = undefined;
                  if (tmp5 != null) {
                    id1 = tmp5.id;
                  }
                  tmp6 = id1 !== id;
                }
                if (null == tmp5) {
                  if (!obj2.isGuildStageVoice()) {
                    closure_0 = id;
                    participants = obj.getParticipants(obj2.id);
                    num = 4;
                    found = participants;
                    if (participants.length <= 4) {
                      found = participants.filter((user) => {
                        let tmp = closure_2_20(user);
                        if (tmp) {
                          tmp = user.user.id === id;
                        }
                        return !tmp;
                      });
                    }
                    num2 = 1;
                    tmp8 = found.length > 1;
                    if (tmp8) {
                      num3 = 3;
                      tmp8 = found.length <= 3;
                    }
                    return tmp9;
                  }
                  tmp9 = participant;
                }
                tmp9 = null;
              } else {
                return participant;
              }
              return;
            }
          }
          cResult[12] = channel;
          cResult[13] = tmp21;
          cResult[14] = tmp4;
          cResult[15] = tmp5;
          cResult[16] = U;
          const tmpResult6 = tmp(10838);
        }
      }
      const fn = function l() {
        const id2 = AuthenticationStore.getId();
        const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
        let tmp2 = null != currentUserActiveStream;
        if (tmp2) {
          tmp2 = currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
        }
        closure_1 = tmp2;
        const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
        const found = streamParticipants.find((user) => user.user.id === closure_0 && closure_1);
        if (null != id) {
          if (null != found) {
            if (id.id === found.id) {
              let tmp6 = null;
            }
            return tmp6;
          }
        }
        tmp6 = found;
      };
      cResult[1] = channel.id;
      cResult[2] = undefined === participantScreenIsFocused || participantScreenIsFocused;
      cResult[3] = tmp5;
      cResult[4] = fn;
      tmp10 = fn;
      obj = channel(576);
    }
  : function CameraPreviewContainer(channel) {
      channel = channel.channel;
      let flag = channel.participantScreenIsFocused;
      if (flag === undefined) {
        flag = true;
      }
      let flag2 = channel.isChannelCallModalOpen;
      if (flag2 === undefined) {
        flag2 = false;
      }
      closure_3 = undefined;
      let id;
      const tmp3 = flag(10356)(channel);
      dependencyMap = tmp3;
      const items = [ChannelRTCStore, AuthenticationStore, ApplicationStreamingStore];
      const stateFromStores = channel(504).useStateFromStores(items, () => {
        const id2 = AuthenticationStore.getId();
        const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
        let tmp2 = null != currentUserActiveStream;
        if (tmp2) {
          tmp2 = currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
        }
        closure_1 = tmp2;
        const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
        const found = streamParticipants.find((user) => user.user.id === closure_0 && closure_1);
        if (null != id) {
          if (null != found) {
            if (id.id === found.id) {
              let tmp6 = null;
            }
            return tmp6;
          }
        }
        tmp6 = found;
      });
      obj = channel(504);
      let tmp = flag;
      let tmp8 = useChannelCallStore((voiceChatDrawerState) => {
        voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
        return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
      });
      const items1 = [ChannelRTCStore, EmbeddedActivitiesStore];
      const stateFromStores1 = channel(504).useStateFromStores(items1, () => {
        const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
        let found = null;
        if (null != currentEmbeddedActivity) {
          const participants = ChannelRTCStore.getParticipants(channel.id);
          found = participants.find(
            (id) =>
              id.id ===
              channel(closure_2[39]).getEmbeddedActivityParticipantId({
                applicationId: currentEmbeddedActivity.applicationId,
                instanceId: currentEmbeddedActivity.compositeInstanceId,
              }),
          );
        }
        return found;
      });
      let tmp10 = null != stateFromStores1;
      if (tmp10) {
        id = undefined;
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
      const obj2 = channel(504);
      const isStreamFocused = channel(10965).useIsStreamFocused(channel.id);
      const tmp4Result = channel(10965);
      const isViewingActivity = channel(10838).useIsViewingActivity({ channelId: channel.id });
      const obj3 = { channelId: channel.id };
      const tmp4Result6 = channel(10838);
      const items2 = [ChannelRTCStore, AuthenticationStore];
      const stateFromStores2 = channel(504).useStateFromStores(items2, () => {
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
          let tmp6 = null != id;
          if (tmp6) {
            let id1;
            if (id != null) {
              id1 = id.id;
            }
            tmp6 = id1 !== id;
          }
          if (null == id) {
            if (!channel.isGuildStageVoice()) {
              const participants = ChannelRTCStore.getParticipants(channel.id);
              let found = participants;
              if (participants.length <= 4) {
                found = participants.filter((user) => {
                  let tmp = closure_2_20(user);
                  if (tmp) {
                    tmp = user.user.id === id;
                  }
                  return !tmp;
                });
              }
              let tmp8 = found.length > 1;
              if (tmp8) {
                tmp8 = found.length <= 3;
              }
              return tmp9;
            }
            tmp9 = participant;
          }
          tmp9 = null;
        } else {
          return participant;
        }
      });
      const tmp4Result7 = channel(504);
      const items3 = [AuthenticationStore, ChannelRTCStore];
      id = channel.id;
      const stateFromStores3 = channel(504).useStateFromStores(items3, () => {
        const tmp2 = constants2(user);
        let type;
        if (user != null) {
          type = user.type;
        }
        if (tmp2) {
          let streamId;
          if (user != null) {
            streamId = user.streamId;
          }
          if (null != streamId) {
            let found = user;
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
        tmp4 = type === constants3.USER;
      });
      const tmp4Result8 = channel(504);
      const items4 = [ChannelRTCStore];
      const tmp4Result9 = channel(504);
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
      tmp18 = closure_30(
        channel,
        flag,
        channel(504).useStateFromStores(items4, () => {
          let tmp2 = null != id;
          if (tmp2) {
            tmp2 = null != ChannelRTCStore.getSelectedParticipant(tmp);
          }
          return tmp2;
        }),
      );
      const items5 = [ChannelCallLifecycleStore];
      const stateFromStores4 = channel(504).useStateFromStores(items5, () =>
        pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream(),
      );
      if (flag2) {
        flag2 = channel.isGuildStageVoice();
      }
      if (flag2) {
        flag2 = flag;
      }
      tmp(10966)(channel);
      if (tmp10) {
        if (!stateFromStores4) {
          let tmp22 = null;
        }
        return tmp22;
      }
      if (null != tmp19) {
        tmp22 = null;
        if (!flag2) {
          const obj4 = {
            channel,
            participantScreenIsFocused: flag,
            nonSelfPipParticipant: tmp13,
            selfParticipant: tmp19,
          };
          tmp22 = closure_21(closure_29, obj4);
        }
      } else {
        tmp22 = null;
      }
      const tmp4Result10 = channel(504);
    };
