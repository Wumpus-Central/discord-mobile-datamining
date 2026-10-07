// discord_app/modules/video_calls/native/components/FocusedControls.tsx
import c from "../../../../../_runtime/00576_c.js";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import inlineStyles from "../../../../../_runtime/08169_inlineStyles.js";
import RevealProvider from "RevealProvider.tsx";
import useGlobalStatusIndicatorState from "../../../connectivity/native/useGlobalStatusIndicatorState.tsx";
import GlobalStatusIndicator from "../../../connectivity/native/components/GlobalStatusIndicator.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles({
  backgroundGradient: { position: "absolute", left: 0, right: 0, top: 0, height: 130 },
  headerContainer: { position: "relative", height: 54 },
});
let TIMING_CONFIG = { easing: fn(1188).STANDARD_EASING, duration: 250 };
const __initData = {
  code: "function FocusedControlsTsx1(){const{reveal,FOCUSED_CONTROLS_HEADER_HEIGHT}=this.__closure;return reveal?0:-FOCUSED_CONTROLS_HEADER_HEIGHT;}",
};
const __initData2 = {
  code: "function FocusedControlsTsx2(){const{withTiming,offsetY,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withTiming(offsetY.get(),TIMING_CONFIG)}]};}",
};
const __initData3 = {
  code: "function FocusedControlsTsx3(){const{reveal,FOCUSED_CONTROLS_HEADER_HEIGHT}=this.__closure;return reveal?0:-FOCUSED_CONTROLS_HEADER_HEIGHT;}",
};
const __initData4 = {
  code: "function FocusedControlsTsx4(){const{withTiming,offsetY,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withTiming(offsetY.get(),TIMING_CONFIG)}]};}",
};
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isTouchingLeftScreenEdge) => {
      TIMING_CONFIG = reveal(576);
      const cResult = TIMING_CONFIG.c(10);
      ({ header, reveal } = isTouchingLeftScreenEdge);
      isTouchingLeftScreenEdge = isTouchingLeftScreenEdge.isTouchingLeftScreenEdge;
      const tmp4 = closure_9();
      const fn = function n() {
        let num = -54;
        if (reveal) {
          num = 0;
        }
        return num;
      };
      fn.__closure = { reveal, FOCUSED_CONTROLS_HEADER_HEIGHT: 54 };
      fn.__workletHash = 15509217225804;
      fn.__initData = __initData;
      const derivedValue = reveal(4618).useDerivedValue(fn);
      let obj2 = reveal(4618);
      const tmp6 = derivedValue;
      const tmp7 = derivedValue(9619)();
      const fn2 = function o() {
        const obj = { transform: null };
        const obj2 = { translateY: timing.withTiming(derivedValue.get(), obj) };
        const items = [obj2];
        obj.transform = items;
        return obj;
      };
      const obj3 = reveal(4618);
      fn2.__closure = { withTiming: reveal(4897).withTiming, offsetY: derivedValue, TIMING_CONFIG };
      fn2.__workletHash = 12710345257882;
      fn2.__initData = __initData2;
      const animatedStyle = obj3.useAnimatedStyle(fn2);
      if (cResult[0] === header) {
        if (cResult[1] === tmp4.headerContainer) {
          let tmp10 = cResult[2];
        }
        if (cResult[3] === isTouchingLeftScreenEdge) {
          if (cResult[4] === tmp9) {
            if (cResult[5] === tmp10) {
              let tmp12 = cResult[6];
            }
            if (cResult[7] === animatedStyle) {
              if (cResult[8] === tmp12) {
                let tmp15 = cResult[9];
              }
              return tmp15;
            }
            const obj5 = { style: animatedStyle, children: tmp12 };
            const tmp17 = closure_7(tmp6(4618).View, obj5);
            cResult[7] = animatedStyle;
            cResult[8] = tmp12;
            cResult[9] = tmp17;
            tmp15 = tmp17;
          }
        }
        const rect = { top: tmp9, left: isTouchingLeftScreenEdge, right: true, children: tmp10 };
        const tmp14 = closure_7(reveal(6626).SafeAreaPaddingView, rect);
        cResult[3] = isTouchingLeftScreenEdge;
        cResult[4] = tmp9;
        cResult[5] = tmp10;
        cResult[6] = tmp14;
        tmp12 = tmp14;
      }
      const tmp11 = closure_7(closure_5, { style: tmp4.headerContainer, children: header });
      cResult[0] = header;
      cResult[1] = tmp4.headerContainer;
      cResult[2] = tmp11;
      tmp10 = tmp11;
      const obj4 = { withTiming: reveal(4897).withTiming, offsetY: derivedValue, TIMING_CONFIG };
      const obj6 = { style: tmp4.headerContainer, children: header };
    }
  : (reveal) => {
      reveal = reveal.reveal;
      ({ header, isTouchingLeftScreenEdge } = reveal);
      TIMING_CONFIG = reveal(4618);
      const fn = function l() {
        let num = -54;
        if (reveal) {
          num = 0;
        }
        return num;
      };
      fn.__closure = { reveal, FOCUSED_CONTROLS_HEADER_HEIGHT: 54 };
      fn.__workletHash = 17020662047758;
      fn.__initData = __initData3;
      const derivedValue = TIMING_CONFIG.useDerivedValue(fn);
      const tmp = closure_9();
      const tmp3 = derivedValue(9619)();
      const fn2 = function c() {
        const obj = { transform: null };
        const obj2 = { translateY: timing.withTiming(derivedValue.get(), obj) };
        const items = [obj2];
        obj.transform = items;
        return obj;
      };
      let obj2 = reveal(4618);
      fn2.__closure = { withTiming: reveal(4897).withTiming, offsetY: derivedValue, TIMING_CONFIG };
      fn2.__workletHash = 9956761529180;
      fn2.__initData = __initData4;
      const animatedStyle = obj2.useAnimatedStyle(fn2);
      const obj4 = { style: animatedStyle, children: null };
      const rect = {
        top: !tmp3,
        left: isTouchingLeftScreenEdge,
        right: true,
        children: closure_7(closure_5, { style: tmp.headerContainer, children: header }),
      };
      obj4.children = closure_7(reveal(6626).SafeAreaPaddingView, rect);
      return closure_7(derivedValue(4618).View, obj4);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(14);
      const tmp4 = closure_9();
      const width = useWindowDimensionsDefault().width;
      if (cResult[0] !== width) {
        const obj2 = { width };
        cResult[0] = width;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.backgroundGradient) {
        if (cResult[3] === tmp5) {
          let tmp6 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { children: null };
          const obj4 = { id: "grad", y1: "0%", x1: "0", x2: "0", y2: "100%", children: null };
          const items = [
            React5(inlineStyles.Stop, { offset: "0%", stopColor: "black", stopOpacity: ".8" }),
            React5(inlineStyles.Stop, { offset: "66%", stopColor: "black", stopOpacity: ".51" }),
            React5(inlineStyles.Stop, { offset: "100%", stopColor: "black", stopOpacity: "0" }),
          ];
          obj4.children = items;
          obj3.children = closure_1_8(inlineStyles.LinearGradient, obj4);
          const tmp11 = React5(inlineStyles.Defs, obj3);
          cResult[5] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== width) {
          const size = { height: "100%", width, fill: "url(#grad)" };
          const tmp14 = React5(inlineStyles.Rect, size);
          cResult[6] = width;
          cResult[7] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[7];
        }
        if (cResult[8] === tmp12) {
          if (cResult[9] === width) {
            let tmp15 = cResult[10];
          }
          if (cResult[11] === tmp6) {
            if (cResult[12] === tmp15) {
              let tmp18 = cResult[13];
            }
            return tmp18;
          }
          const obj5 = { style: tmp6, children: tmp15 };
          const tmp21 = React5(hasOwnProperty, obj5);
          cResult[11] = tmp6;
          cResult[12] = tmp15;
          cResult[13] = tmp21;
          tmp18 = tmp21;
        }
        const size1 = { height: "100%", width, children: null };
        const items1 = [tmp8, tmp12];
        size1.children = items1;
        const tmp17 = closure_1_8(inlineStyles.Svg, size1);
        cResult[8] = tmp12;
        cResult[9] = width;
        cResult[10] = tmp17;
        tmp15 = tmp17;
      }
      const items2 = [tmp4.backgroundGradient, tmp5];
      cResult[2] = tmp4.backgroundGradient;
      cResult[3] = tmp5;
      cResult[4] = items2;
      tmp6 = items2;
    }
  : () => {
      const width = useWindowDimensionsDefault().width;
      const obj = { style: null, children: null };
      const items = [closure_9().backgroundGradient, { width }];
      obj.style = items;
      const size = { height: "100%", width, children: null };
      const obj2 = { children: null };
      const obj3 = { id: "grad", y1: "0%", x1: "0", x2: "0", y2: "100%", children: null };
      const items1 = [
        React5(inlineStyles.Stop, { offset: "0%", stopColor: "black", stopOpacity: ".8" }),
        React5(inlineStyles.Stop, { offset: "66%", stopColor: "black", stopOpacity: ".51" }),
        React5(inlineStyles.Stop, { offset: "100%", stopColor: "black", stopOpacity: "0" }),
      ];
      obj3.children = items1;
      obj2.children = closure_1_8(inlineStyles.LinearGradient, obj3);
      const items2 = [
        React5(inlineStyles.Defs, obj2),
        React5(inlineStyles.Rect, { height: "100%", width, fill: "url(#grad)" }),
      ];
      size.children = items2;
      obj.children = closure_1_8(inlineStyles.Svg, size);
      return React5(hasOwnProperty, obj);
    };
const __initData5 = {
  code: "function FocusedControlsTsx5(){const{isInvitedToSpeak,statusIndicatorHeight}=this.__closure;return isInvitedToSpeak?statusIndicatorHeight.get():0;}",
};
const __initData6 = { code: "function FocusedControlsTsx6(){const{reveal}=this.__closure;return reveal?1:0;}" };
const __initData7 = {
  code: "function FocusedControlsTsx7(){const{withTiming,top,TIMING_CONFIG,revealOpacity}=this.__closure;return{top:withTiming(top.get(),TIMING_CONFIG),opacity:withTiming(revealOpacity.get(),TIMING_CONFIG)};}",
};
const __initData8 = {
  code: "function FocusedControlsTsx8(){const{isInvitedToSpeak,statusIndicatorHeight}=this.__closure;return isInvitedToSpeak?statusIndicatorHeight.get():0;}",
};
const __initData9 = { code: "function FocusedControlsTsx9(){const{reveal}=this.__closure;return reveal?1:0;}" };
const __initData10 = {
  code: "function FocusedControlsTsx10(){const{withTiming,top,TIMING_CONFIG,revealOpacity}=this.__closure;return{top:withTiming(top.get(),TIMING_CONFIG),opacity:withTiming(revealOpacity.get(),TIMING_CONFIG)};}",
};
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedControls.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (isTouchingLeftScreenEdge) => {
        TIMING_CONFIG = channel(576);
        const cResult = TIMING_CONFIG.c(30);
        ({
          header,
          expandedControls,
          actionBar,
          children,
          forceReveal,
          disableGradient,
          containerStyle,
          omitPTT,
          bottomHeader,
          onDrawerClose,
          channel,
        } = isTouchingLeftScreenEdge);
        isTouchingLeftScreenEdge = isTouchingLeftScreenEdge.isTouchingLeftScreenEdge;
        const globalStatusIndicatorState = channel(9620).useGlobalStatusIndicatorState();
        const tmp4 = undefined !== forceReveal && forceReveal;
        const tmpResult = channel(9620);
        const globalStatusIndicatorHeightSharedValue =
          channel(9624).useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState);
        const tmp9 = globalStatusIndicatorHeightSharedValue(9619)();
        dependencyMap = tmp9;
        reveal = reveal.useContext(channel(9094).RevealContext).reveal;
        const tmpResult6 = channel(9624);
        const isScreenReaderEnabled = channel(5777).useIsScreenReaderEnabled();
        if (!reveal) {
          reveal = tmp4;
        }
        if (!reveal) {
          reveal = isScreenReaderEnabled;
        }
        const tmpResult7 = channel(5777);
        const fn = function s() {
          let num = 0;
          if (closure_2) {
            num = globalStatusIndicatorHeightSharedValue.get();
          }
          return num;
        };
        fn.__closure = { isInvitedToSpeak: tmp9, statusIndicatorHeight: globalStatusIndicatorHeightSharedValue };
        fn.__workletHash = 15248992035420;
        fn.__initData = __initData5;
        const derivedValue = channel(4618).useDerivedValue(fn);
        const tmpResult8 = channel(4618);
        const fn2 = function c() {
          let num = 0;
          if (reveal) {
            num = 1;
          }
          return num;
        };
        fn2.__closure = { reveal };
        fn2.__workletHash = 9056569552987;
        fn2.__initData = __initData6;
        const derivedValue1 = channel(4618).useDerivedValue(fn2);
        const tmpResult9 = channel(4618);
        const fn3 = function h() {
          obj = { top: timing.withTiming(derivedValue.get(), obj), opacity: null };
          obj.opacity = timing.withTiming(derivedValue1.get(), obj);
          return obj;
        };
        const tmpResult10 = channel(4618);
        fn3.__closure = {
          withTiming: channel(4897).withTiming,
          top: derivedValue,
          TIMING_CONFIG,
          revealOpacity: derivedValue1,
        };
        fn3.__workletHash = 6179540517245;
        fn3.__initData = __initData7;
        const animatedStyle = tmpResult10.useAnimatedStyle(fn3);
        let obj2 = {
          withTiming: channel(4897).withTiming,
          top: derivedValue,
          TIMING_CONFIG,
          revealOpacity: derivedValue1,
        };
        const analyticsLocations = globalStatusIndicatorHeightSharedValue(6664)(
          tmp8(6688).FOCUSED_VOICE_CONTROLS,
        ).analyticsLocations;
        const tmp15 = globalStatusIndicatorHeightSharedValue(9167)();
        closure_7 = tmp15;
        if (cResult[0] === analyticsLocations) {
          if (cResult[1] === channel.guild_id) {
            if (cResult[2] === channel.id) {
              let applicationId;
              if (tmp15 != null) {
                applicationId = tmp15.applicationId;
              }
              if (cResult[3] === applicationId) {
                let compositeInstanceId;
                if (tmp15 != null) {
                  compositeInstanceId = tmp15.compositeInstanceId;
                }
                if (cResult[4] === compositeInstanceId) {
                  let tmp19 = cResult[5];
                }
                if (containerStyle == null) {
                  containerStyle = derivedValue.absoluteFill;
                }
                if (cResult[6] === animatedStyle) {
                  if (cResult[7] === containerStyle) {
                    let tmp24 = cResult[8];
                  }
                  let str = "none";
                  if (reveal) {
                    str = "box-none";
                  }
                  if (cResult[9] !== tmp5) {
                    let tmp26 = null;
                    if (!tmp5) {
                      tmp26 = closure_7(closure_16, {});
                    }
                    cResult[9] = tmp5;
                    cResult[10] = tmp26;
                    let tmp25 = tmp26;
                  } else {
                    tmp25 = cResult[10];
                  }
                  if (cResult[11] === header) {
                    if (cResult[12] === isTouchingLeftScreenEdge) {
                      if (cResult[13] === reveal) {
                        let tmp29 = cResult[14];
                      }
                      if (cResult[15] === actionBar) {
                        if (cResult[16] === bottomHeader) {
                          if (cResult[17] === children) {
                            if (cResult[18] === expandedControls) {
                              if (cResult[19] === tmp19) {
                                if (cResult[20] === omitPTT) {
                                  if (cResult[21] === onDrawerClose) {
                                    if (cResult[22] === reveal) {
                                      let tmp33 = cResult[23];
                                    }
                                    if (cResult[24] === tmp24) {
                                      if (cResult[25] === str) {
                                        if (cResult[26] === tmp25) {
                                          if (cResult[27] === tmp29) {
                                            if (cResult[28] === tmp33) {
                                              let tmp36 = cResult[29];
                                            }
                                            return tmp36;
                                          }
                                        }
                                      }
                                    }
                                    const obj3 = { style: tmp24, pointerEvents: str, children: null };
                                    const items = [tmp25, tmp29, tmp33];
                                    obj3.children = items;
                                    const tmp38 = closure_8(tmp8(4618).View, obj3);
                                    cResult[24] = tmp24;
                                    cResult[25] = str;
                                    cResult[26] = tmp25;
                                    cResult[27] = tmp29;
                                    cResult[28] = tmp33;
                                    cResult[29] = tmp38;
                                    tmp36 = tmp38;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      let tmp34 = null;
                      if (null != actionBar) {
                        tmp34 = null;
                        if (null != expandedControls) {
                          const obj4 = {
                            onDrawerOpen: tmp19,
                            omitPTT,
                            actionBar,
                            expandedControls,
                            header: bottomHeader,
                            onDrawerClose,
                            reveal,
                            children,
                          };
                          tmp34 = closure_7(tmp8(9628), obj4);
                        }
                      }
                      cResult[15] = actionBar;
                      cResult[16] = bottomHeader;
                      cResult[17] = children;
                      cResult[18] = expandedControls;
                      cResult[19] = tmp19;
                      cResult[20] = omitPTT;
                      cResult[21] = onDrawerClose;
                      cResult[22] = reveal;
                      cResult[23] = tmp34;
                      tmp33 = tmp34;
                    }
                  }
                  const obj5 = { header, reveal, isTouchingLeftScreenEdge };
                  const tmp32 = closure_7(closure_15, obj5);
                  cResult[11] = header;
                  cResult[12] = isTouchingLeftScreenEdge;
                  cResult[13] = reveal;
                  cResult[14] = tmp32;
                  tmp29 = tmp32;
                }
                const items1 = [containerStyle, animatedStyle];
                cResult[6] = animatedStyle;
                cResult[7] = containerStyle;
                cResult[8] = items1;
                tmp24 = items1;
              }
            }
          }
        }
        cResult[0] = analyticsLocations;
        cResult[1] = channel.guild_id;
        cResult[2] = channel.id;
        let applicationId1;
        if (tmp15 != null) {
          applicationId1 = tmp15.applicationId;
        }
        cResult[3] = applicationId1;
        let compositeInstanceId1;
        if (tmp15 != null) {
          compositeInstanceId1 = tmp15.compositeInstanceId;
        }
        const fn4 = function p() {
          const obj2 = {
            channel_id: channel.id,
            guild_id: channel.guild_id,
            application_id: null,
            activity_session_id: null,
            location_stack: null,
          };
          let applicationId;
          if (closure_7 != null) {
            applicationId = closure_7.applicationId;
          }
          obj2.application_id = applicationId;
          let compositeInstanceId;
          if (closure_7 != null) {
            compositeInstanceId = closure_7.compositeInstanceId;
          }
          obj2.activity_session_id = compositeInstanceId;
          obj2.location_stack = analyticsLocations;
          AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_BOTTOM_SHEET_EXPANDED, obj2);
        };
        cResult[4] = compositeInstanceId1;
        cResult[5] = fn4;
        tmp19 = fn4;
        const tmp8Result = globalStatusIndicatorHeightSharedValue(6664);
      }
    : (disableGradient) => {
        ({ expandedControls, actionBar, forceReveal } = disableGradient);
        ({ header, children } = disableGradient);
        if (forceReveal === undefined) {
          forceReveal = false;
        }
        let flag = disableGradient.disableGradient;
        if (flag === undefined) {
          flag = false;
        }
        ({ containerStyle, channel: require } = disableGradient);
        let reveal;
        let derivedValue;
        let derivedValue1;
        let analyticsLocations;
        closure_7 = undefined;
        ({ omitPTT, bottomHeader, onDrawerClose, isTouchingLeftScreenEdge } = disableGradient);
        TIMING_CONFIG = useGlobalStatusIndicatorState;
        const globalStatusIndicatorState = TIMING_CONFIG.useGlobalStatusIndicatorState();
        const globalStatusIndicatorHeightSharedValue =
          GlobalStatusIndicator.useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState);
        const tmp6 = globalStatusIndicatorHeightSharedValue(9619)();
        dependencyMap = tmp6;
        reveal = reveal.useContext(RevealProvider.RevealContext).reveal;
        const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
        if (!reveal) {
          reveal = forceReveal;
        }
        if (!reveal) {
          reveal = isScreenReaderEnabled;
        }
        class N {
          constructor() {
            num = 0;
            if (closure_2) {
              tmp = closure_1;
              num = closure_1.get();
            }
            return num;
          }
        }
        N.__closure = { isInvitedToSpeak: tmp6, statusIndicatorHeight: globalStatusIndicatorHeightSharedValue };
        N.__workletHash = 3846385633905;
        N.__initData = __initData8;
        derivedValue = ReanimatedRexport.useDerivedValue(N);
        const tmpResult = ReanimatedRexport;
        class F {
          constructor() {
            num = 0;
            if (closure_3) {
              num = 1;
            }
            return num;
          }
        }
        F.__closure = { reveal };
        F.__workletHash = 12956246238452;
        F.__initData = __initData9;
        derivedValue1 = ReanimatedRexport.useDerivedValue(F);
        const tmpResult3 = ReanimatedRexport;
        const fn = function b() {
          obj = { top: timing.withTiming(derivedValue.get(), obj), opacity: null };
          obj.opacity = timing.withTiming(derivedValue1.get(), obj);
          return obj;
        };
        const tmpResult4 = ReanimatedRexport;
        fn.__closure = {
          withTiming: timing.withTiming,
          top: derivedValue,
          TIMING_CONFIG,
          revealOpacity: derivedValue1,
        };
        fn.__workletHash = 4934952356171;
        fn.__initData = __initData10;
        const animatedStyle = tmpResult4.useAnimatedStyle(fn);
        const obj4 = { withTiming: timing.withTiming, top: derivedValue, TIMING_CONFIG, revealOpacity: derivedValue1 };
        analyticsLocations = globalStatusIndicatorHeightSharedValue(6664)(
          tmp5(6688).FOCUSED_VOICE_CONTROLS,
        ).analyticsLocations;
        closure_7 = tmp5(9167)();
        if (containerStyle == null) {
          containerStyle = derivedValue.absoluteFill;
        }
        const obj5 = { style: null, pointerEvents: null, children: null };
        const items = [containerStyle, animatedStyle];
        obj5.style = items;
        let str = "none";
        if (reveal) {
          str = "box-none";
        }
        obj5.pointerEvents = str;
        let tmp14 = null;
        if (!flag) {
          tmp14 = closure_7(closure_16, {});
        }
        const items1 = [tmp14, closure_7(closure_15, { header, reveal, isTouchingLeftScreenEdge })];
        let tmp17Result = null;
        if (null != actionBar) {
          tmp17Result = null;
          if (null != expandedControls) {
            const obj6 = {
              onDrawerOpen() {
                const obj2 = {
                  channel_id: require.id,
                  guild_id: require.guild_id,
                  application_id: null,
                  activity_session_id: null,
                  location_stack: null,
                };
                let applicationId;
                if (closure_7 != null) {
                  applicationId = closure_7.applicationId;
                }
                obj2.application_id = applicationId;
                let compositeInstanceId;
                if (closure_7 != null) {
                  compositeInstanceId = closure_7.compositeInstanceId;
                }
                obj2.activity_session_id = compositeInstanceId;
                obj2.location_stack = analyticsLocations;
                AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_BOTTOM_SHEET_EXPANDED, obj2);
              },
              omitPTT,
              actionBar,
              expandedControls,
              header: bottomHeader,
              onDrawerClose,
              reveal,
              children,
            };
            tmp17Result = closure_7(tmp5(9628), obj6);
          }
        }
        items1[2] = tmp17Result;
        obj5.children = items1;
        return closure_8(globalStatusIndicatorHeightSharedValue(4618).View, obj5);
      },
);
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
