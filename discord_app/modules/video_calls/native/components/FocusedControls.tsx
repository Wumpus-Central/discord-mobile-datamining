// === Module 9618: FocusedControls ===

// Module 9618 (FocusedControls)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5777 */;
import inlineStyles from "inlineStyles" /* 8169 */;
import RevealProvider from "RevealProvider" /* 9094 */;
import useGlobalStatusIndicatorState from "useGlobalStatusIndicatorState" /* 9620 */;
import GlobalStatusIndicator from "GlobalStatusIndicator" /* 9624 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ backgroundGradient: { position: "absolute", left: 0, right: 0, top: 0, height: 130 }, headerContainer: { position: "relative", height: 54 } });
let TIMING_CONFIG = { easing: native.STANDARD_EASING, duration: 250 };
const __initData = { code: "function FocusedControlsTsx1(){const{reveal,FOCUSED_CONTROLS_HEADER_HEIGHT}=this.__closure;return reveal?0:-FOCUSED_CONTROLS_HEADER_HEIGHT;}" };
const __initData2 = { code: "function FocusedControlsTsx2(){const{withTiming,offsetY,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withTiming(offsetY.get(),TIMING_CONFIG)}]};}" };
const __initData3 = { code: "function FocusedControlsTsx3(){const{reveal,FOCUSED_CONTROLS_HEADER_HEIGHT}=this.__closure;return reveal?0:-FOCUSED_CONTROLS_HEADER_HEIGHT;}" };
const __initData4 = { code: "function FocusedControlsTsx4(){const{withTiming,offsetY,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withTiming(offsetY.get(),TIMING_CONFIG)}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((isTouchingLeftScreenEdge) => {
  let header;
  let reveal;
  TIMING_CONFIG = reveal(576);
  const cResult = TIMING_CONFIG.c(10);
  ({ header, reveal } = isTouchingLeftScreenEdge);
  isTouchingLeftScreenEdge = isTouchingLeftScreenEdge.isTouchingLeftScreenEdge;
  const tmp4 = closure_9();
  let obj2 = reveal(4618);
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
  const derivedValue = obj2.useDerivedValue(fn);
  const tmp7 = derivedValue(9619)();
  let obj3 = reveal(4618);
  const fn2 = function o() {
    let items;
    let obj3;
    const obj = { transform: items };
    const obj2 = { translateY: obj3.withTiming(derivedValue.get(), obj) };
    items = [obj2];
    obj3 = timing;
    return obj;
  };
  fn2.__closure = { withTiming: reveal(4897).withTiming, offsetY: derivedValue, TIMING_CONFIG };
  fn2.__workletHash = 12710345257882;
  fn2.__initData = __initData2;
  ({ withTiming: reveal(4897).withTiming, offsetY: derivedValue, TIMING_CONFIG });
  const animatedStyle = obj3.useAnimatedStyle(fn2);
  const tmp6 = derivedValue;
  if (cResult[0] === header) {
    let tmp10;
    if (cResult[1] === tmp4.headerContainer) {
      tmp10 = cResult[2];
    }
    if (cResult[3] === isTouchingLeftScreenEdge) {
      if (cResult[4] === !tmp7) {
        let tmp12;
        if (cResult[5] === tmp10) {
          tmp12 = cResult[6];
        }
        if (cResult[7] === animatedStyle) {
          let tmp15;
          if (cResult[8] === tmp12) {
            tmp15 = cResult[9];
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
    const rect = { top: !tmp7, left: isTouchingLeftScreenEdge, right: true, children: tmp10 };
    const tmp14 = closure_7(reveal(6626).SafeAreaPaddingView, rect);
    let num = 3;
    cResult[3] = isTouchingLeftScreenEdge;
    cResult[4] = !tmp7;
    cResult[5] = tmp10;
    cResult[6] = tmp14;
    tmp12 = tmp14;
  }
  const obj6 = { style: tmp4.headerContainer, children: header };
  const tmp11 = closure_7(closure_5, obj6);
  cResult[0] = header;
  cResult[1] = tmp4.headerContainer;
  cResult[2] = tmp11;
  tmp10 = tmp11;
}) : ((reveal) => {
  let SafeAreaPaddingView;
  let header;
  let isTouchingLeftScreenEdge;
  let obj5;
  let rect;
  reveal = reveal.reveal;
  ({ header, isTouchingLeftScreenEdge } = reveal);
  const tmp = closure_9();
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
  const tmp3 = derivedValue(9619)();
  let obj2 = reveal(4618);
  const fn2 = function c() {
    let items;
    let obj3;
    const obj = { transform: items };
    const obj2 = { translateY: obj3.withTiming(derivedValue.get(), obj) };
    items = [obj2];
    obj3 = timing;
    return obj;
  };
  let obj3 = { withTiming: reveal(4897).withTiming, offsetY: derivedValue, TIMING_CONFIG };
  fn2.__closure = obj3;
  fn2.__workletHash = 9956761529180;
  fn2.__initData = __initData4;
  const animatedStyle = obj2.useAnimatedStyle(fn2);
  const obj4 = { style: animatedStyle, children: closure_7(SafeAreaPaddingView, rect) };
  const View = derivedValue(4618).View;
  rect = { top: !tmp3, left: isTouchingLeftScreenEdge, right: true, children: closure_7(closure_5, obj5) };
  obj5 = { style: tmp.headerContainer, children: header };
  SafeAreaPaddingView = reveal(6626).SafeAreaPaddingView;
  return closure_7(View, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let LinearGradient;
  let items;
  let items1;
  let obj4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(14);
  const tmp4 = closure_9();
  const width = useWindowDimensionsDefault().width;
  if (cResult[0] !== width) {
    const obj2 = { width };
    cResult[0] = width;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.backgroundGradient) {
    let tmp6;
    let tmp8;
    let tmp12;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { children: metroImportAll(LinearGradient, obj4) };
      const Defs = inlineStyles.Defs;
      obj4 = { id: "grad", y1: "0%", x1: "0", x2: "0", y2: "100%", children: items };
      LinearGradient = inlineStyles.LinearGradient;
      items = [metroImportDefault(inlineStyles.Stop, { offset: "0%", stopColor: "black", stopOpacity: ".8" }), metroImportDefault(inlineStyles.Stop, { offset: "66%", stopColor: "black", stopOpacity: ".51" }), metroImportDefault(inlineStyles.Stop, { offset: "100%", stopColor: "black", stopOpacity: "0" })];
      const tmp11 = metroImportDefault(Defs, obj3);
      cResult[5] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== width) {
      size = { height: "100%", width, fill: "url(#grad)" };
      const tmp14 = metroImportDefault(inlineStyles.Rect, size);
      cResult[6] = width;
      cResult[7] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] === tmp12) {
      let tmp15;
      if (cResult[9] === width) {
        tmp15 = cResult[10];
      }
      if (cResult[11] === tmp6) {
        let tmp18;
        if (cResult[12] === tmp15) {
          tmp18 = cResult[13];
        }
        return tmp18;
      }
      const obj5 = { style: tmp6, children: tmp15 };
      const tmp21 = metroImportDefault(hasOwnProperty, obj5);
      cResult[11] = tmp6;
      cResult[12] = tmp15;
      cResult[13] = tmp21;
      tmp18 = tmp21;
    }
    const size1 = { height: "100%", width, children: items1 };
    items1 = [tmp8, tmp12];
    const tmp17 = metroImportAll(inlineStyles.Svg, size1);
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
}) : (() => {
  let LinearGradient;
  let Svg;
  let items;
  let items1;
  let items2;
  let obj3;
  const tmp = closure_9();
  const width = useWindowDimensionsDefault().width;
  const obj = { style: items, children: metroImportAll(Svg, size) };
  items = [tmp.backgroundGradient, { width }];
  size = { height: "100%", width, children: items2 };
  Svg = inlineStyles.Svg;
  const obj2 = { children: metroImportAll(LinearGradient, obj3) };
  const Defs = inlineStyles.Defs;
  obj3 = { id: "grad", y1: "0%", x1: "0", x2: "0", y2: "100%", children: items1 };
  LinearGradient = inlineStyles.LinearGradient;
  items1 = [metroImportDefault(inlineStyles.Stop, { offset: "0%", stopColor: "black", stopOpacity: ".8" }), metroImportDefault(inlineStyles.Stop, { offset: "66%", stopColor: "black", stopOpacity: ".51" }), metroImportDefault(inlineStyles.Stop, { offset: "100%", stopColor: "black", stopOpacity: "0" })];
  items2 = [metroImportDefault(Defs, obj2), metroImportDefault(inlineStyles.Rect, { height: "100%", width, fill: "url(#grad)" })];
  return metroImportDefault(hasOwnProperty, obj);
});
const __initData5 = { code: "function FocusedControlsTsx5(){const{isInvitedToSpeak,statusIndicatorHeight}=this.__closure;return isInvitedToSpeak?statusIndicatorHeight.get():0;}" };
const __initData6 = { code: "function FocusedControlsTsx6(){const{reveal}=this.__closure;return reveal?1:0;}" };
const __initData7 = { code: "function FocusedControlsTsx7(){const{withTiming,top,TIMING_CONFIG,revealOpacity}=this.__closure;return{top:withTiming(top.get(),TIMING_CONFIG),opacity:withTiming(revealOpacity.get(),TIMING_CONFIG)};}" };
const __initData8 = { code: "function FocusedControlsTsx8(){const{isInvitedToSpeak,statusIndicatorHeight}=this.__closure;return isInvitedToSpeak?statusIndicatorHeight.get():0;}" };
const __initData9 = { code: "function FocusedControlsTsx9(){const{reveal}=this.__closure;return reveal?1:0;}" };
const __initData10 = { code: "function FocusedControlsTsx10(){const{withTiming,top,TIMING_CONFIG,revealOpacity}=this.__closure;return{top:withTiming(top.get(),TIMING_CONFIG),opacity:withTiming(revealOpacity.get(),TIMING_CONFIG)};}" };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((isTouchingLeftScreenEdge) => {
  let actionBar;
  let bottomHeader;
  let channel;
  let children;
  let closure_2;
  let containerStyle;
  let disableGradient;
  let expandedControls;
  let forceReveal;
  let header;
  let items;
  let omitPTT;
  let onDrawerClose;
  let reveal;
  TIMING_CONFIG = channel(576);
  const cResult = TIMING_CONFIG.c(30);
  ({ header, expandedControls, actionBar, children, forceReveal, disableGradient, containerStyle, omitPTT, bottomHeader, onDrawerClose, channel } = isTouchingLeftScreenEdge);
  isTouchingLeftScreenEdge = isTouchingLeftScreenEdge.isTouchingLeftScreenEdge;
  const tmp4 = undefined !== forceReveal && forceReveal;
  const tmpResult = channel(9620);
  const globalStatusIndicatorState = tmpResult.useGlobalStatusIndicatorState();
  const tmpResult6 = channel(9624);
  const globalStatusIndicatorHeightSharedValue = tmpResult6.useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState);
  const tmp9 = globalStatusIndicatorHeightSharedValue(9619)();
  dependencyMap = tmp9;
  reveal = reveal.useContext(channel(9094).RevealContext).reveal;
  const tmpResult7 = channel(5777);
  const isScreenReaderEnabled = tmpResult7.useIsScreenReaderEnabled();
  if (!reveal) {
    reveal = tmp4;
  }
  if (!reveal) {
    reveal = isScreenReaderEnabled;
  }
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
  const tmpResult8 = channel(4618);
  const derivedValue = tmpResult8.useDerivedValue(fn);
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
  const tmpResult9 = channel(4618);
  const derivedValue1 = tmpResult9.useDerivedValue(fn2);
  const fn3 = function h() {
    let obj;
    let obj2;
    let obj3;
    obj = { top: obj2.withTiming(derivedValue.get(), obj), opacity: obj3.withTiming(derivedValue1.get(), obj) };
    obj2 = timing;
    obj3 = timing;
    return obj;
  };
  const tmpResult10 = channel(4618);
  let obj2 = { withTiming: channel(4897).withTiming, top: derivedValue, TIMING_CONFIG, revealOpacity: derivedValue1 };
  fn3.__closure = obj2;
  fn3.__workletHash = 6179540517245;
  fn3.__initData = __initData7;
  const animatedStyle = tmpResult10.useAnimatedStyle(fn3);
  const tmp8Result = globalStatusIndicatorHeightSharedValue(6664);
  const analyticsLocations = tmp8Result(tmp8(6688).FOCUSED_VOICE_CONTROLS).analyticsLocations;
  const tmp15 = globalStatusIndicatorHeightSharedValue(9167)();
  let closure_7 = tmp15;
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === channel.guild_id) {
      if (cResult[2] === channel.id) {
        let applicationId;
        const tmp16 = cResult[3];
        if (tmp15 != null) {
          applicationId = tmp15.applicationId;
        }
        if (tmp16 === applicationId) {
          let tmp21;
          let compositeInstanceId;
          const tmp19 = cResult[4];
          if (tmp15 != null) {
            compositeInstanceId = tmp15.compositeInstanceId;
          }
          if (tmp19 === compositeInstanceId) {
            tmp21 = cResult[5];
          }
          if (containerStyle == null) {
            containerStyle = derivedValue.absoluteFill;
          }
          if (cResult[6] === animatedStyle) {
            let tmp26;
            let tmp27;
            if (cResult[7] === containerStyle) {
              tmp26 = cResult[8];
            }
            let str = "none";
            if (reveal) {
              str = "box-none";
            }
            if (cResult[9] !== (undefined !== disableGradient && disableGradient)) {
              let tmp28 = null;
              if (!(undefined !== disableGradient && disableGradient)) {
                tmp28 = closure_7(closure_16, {});
              }
              cResult[9] = undefined !== disableGradient && disableGradient;
              cResult[10] = tmp28;
              tmp27 = tmp28;
            } else {
              tmp27 = cResult[10];
            }
            if (cResult[11] === header) {
              if (cResult[12] === isTouchingLeftScreenEdge) {
                let tmp31;
                if (cResult[13] === reveal) {
                  tmp31 = cResult[14];
                }
                if (cResult[15] === actionBar) {
                  if (cResult[16] === bottomHeader) {
                    if (cResult[17] === children) {
                      if (cResult[18] === expandedControls) {
                        if (cResult[19] === tmp21) {
                          if (cResult[20] === omitPTT) {
                            if (cResult[21] === onDrawerClose) {
                              let tmp35;
                              if (cResult[22] === reveal) {
                                tmp35 = cResult[23];
                              }
                              if (cResult[24] === tmp26) {
                                if (cResult[25] === str) {
                                  if (cResult[26] === tmp27) {
                                    if (cResult[27] === tmp31) {
                                      let tmp38;
                                      if (cResult[28] === tmp35) {
                                        tmp38 = cResult[29];
                                      }
                                      return tmp38;
                                    }
                                  }
                                }
                              }
                              let obj3 = { style: tmp26, pointerEvents: str, children: items };
                              items = [tmp27, tmp31, tmp35];
                              const tmp40 = closure_8(globalStatusIndicatorHeightSharedValue(4618).View, obj3);
                              cResult[24] = tmp26;
                              cResult[25] = str;
                              cResult[26] = tmp27;
                              cResult[27] = tmp31;
                              cResult[28] = tmp35;
                              cResult[29] = tmp40;
                              tmp38 = tmp40;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                let tmp36 = null;
                if (null != actionBar) {
                  tmp36 = null;
                  if (null != expandedControls) {
                    const obj4 = { onDrawerOpen: tmp21, omitPTT, actionBar, expandedControls, header: bottomHeader, onDrawerClose, reveal, children };
                    tmp36 = closure_7(tmp8(9628), obj4);
                  }
                }
                cResult[15] = actionBar;
                cResult[16] = bottomHeader;
                cResult[17] = children;
                cResult[18] = expandedControls;
                cResult[19] = tmp21;
                cResult[20] = omitPTT;
                cResult[21] = onDrawerClose;
                cResult[22] = reveal;
                cResult[23] = tmp36;
                tmp35 = tmp36;
              }
            }
            const obj5 = { header, reveal, isTouchingLeftScreenEdge };
            const tmp34 = closure_7(closure_15, obj5);
            cResult[11] = header;
            cResult[12] = isTouchingLeftScreenEdge;
            cResult[13] = reveal;
            cResult[14] = tmp34;
            tmp31 = tmp34;
          }
          const items1 = [containerStyle, animatedStyle];
          let num = 6;
          cResult[6] = animatedStyle;
          cResult[7] = containerStyle;
          cResult[8] = items1;
          tmp26 = items1;
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
    let applicationId;
    let compositeInstanceId;
    const obj = { channel_id: channel.id, guild_id: channel.guild_id, application_id: applicationId, activity_session_id: compositeInstanceId, location_stack: analyticsLocations };
    applicationId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const VOICE_BOTTOM_SHEET_EXPANDED = AnalyticEvents.VOICE_BOTTOM_SHEET_EXPANDED;
    AnalyticsUtilsDefault;
    if (closure_7 != null) {
      applicationId = closure_7.applicationId;
    }
    compositeInstanceId = undefined;
    if (closure_7 != null) {
      compositeInstanceId = closure_7.compositeInstanceId;
    }
    track(VOICE_BOTTOM_SHEET_EXPANDED, obj);
  };
  cResult[4] = compositeInstanceId1;
  cResult[5] = fn4;
  tmp21 = fn4;
}) : ((disableGradient) => {
  let actionBar;
  let bottomHeader;
  let children;
  let closure_2;
  let containerStyle;
  let expandedControls;
  let forceReveal;
  let header;
  let isTouchingLeftScreenEdge;
  let items;
  let items1;
  let omitPTT;
  let onDrawerClose;
  let str;
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
  let closure_7;
  ({ omitPTT, bottomHeader, onDrawerClose, isTouchingLeftScreenEdge } = disableGradient);
  TIMING_CONFIG = useGlobalStatusIndicatorState;
  const globalStatusIndicatorState = TIMING_CONFIG.useGlobalStatusIndicatorState();
  let obj2 = GlobalStatusIndicator;
  const globalStatusIndicatorHeightSharedValue = obj2.useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState);
  const tmp6 = globalStatusIndicatorHeightSharedValue(9619)();
  dependencyMap = tmp6;
  reveal = reveal.useContext(RevealProvider.RevealContext).reveal;
  let obj3 = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  if (!reveal) {
    reveal = forceReveal;
  }
  if (!reveal) {
    reveal = isScreenReaderEnabled;
  }
  const tmpResult = ReanimatedRexport;
  class N {
    constructor() {
      let num = 0;
      if (closure_2) {
        num = globalStatusIndicatorHeightSharedValue.get();
      }
      return num;
    }
  }
  N.__closure = { isInvitedToSpeak: tmp6, statusIndicatorHeight: globalStatusIndicatorHeightSharedValue };
  N.__workletHash = 3846385633905;
  N.__initData = __initData8;
  derivedValue = tmpResult.useDerivedValue(N);
  const tmpResult3 = ReanimatedRexport;
  class F {
    constructor() {
      let num = 0;
      if (reveal) {
        num = 1;
      }
      return num;
    }
  }
  F.__closure = { reveal };
  F.__workletHash = 12956246238452;
  F.__initData = __initData9;
  derivedValue1 = tmpResult3.useDerivedValue(F);
  const fn = function b() {
    let obj;
    let obj2;
    let obj3;
    obj = { top: obj2.withTiming(derivedValue.get(), obj), opacity: obj3.withTiming(derivedValue1.get(), obj) };
    obj2 = timing;
    obj3 = timing;
    return obj;
  };
  const tmpResult4 = ReanimatedRexport;
  fn.__closure = { withTiming: timing.withTiming, top: derivedValue, TIMING_CONFIG, revealOpacity: derivedValue1 };
  fn.__workletHash = 4934952356171;
  fn.__initData = __initData10;
  ({ withTiming: timing.withTiming, top: derivedValue, TIMING_CONFIG, revealOpacity: derivedValue1 });
  const animatedStyle = tmpResult4.useAnimatedStyle(fn);
  const tmp5Result = globalStatusIndicatorHeightSharedValue(6664);
  analyticsLocations = tmp5Result(tmp5(6688).FOCUSED_VOICE_CONTROLS).analyticsLocations;
  closure_7 = tmp5(9167)();
  const View = tmp5(4618).View;
  if (containerStyle == null) {
    containerStyle = derivedValue.absoluteFill;
  }
  const obj5 = { style: items, pointerEvents: str, children: items1 };
  items = [containerStyle, animatedStyle];
  str = "none";
  if (reveal) {
    str = "box-none";
  }
  let tmp14 = null;
  if (!flag) {
    tmp14 = closure_7(closure_16, {});
  }
  items1 = [tmp14, closure_7(closure_15, { header, reveal, isTouchingLeftScreenEdge }), ];
  let tmp17Result = null;
  const tmp17 = closure_7;
  if (null != actionBar) {
    tmp17Result = null;
    if (null != expandedControls) {
      const obj6 = {
        onDrawerOpen() {
              let applicationId;
              let compositeInstanceId;
              const obj = { channel_id: require.id, guild_id: require.guild_id, application_id: applicationId, activity_session_id: compositeInstanceId, location_stack: analyticsLocations };
              applicationId = undefined;
              const track = AnalyticsUtilsDefault.track;
              const VOICE_BOTTOM_SHEET_EXPANDED = AnalyticEvents.VOICE_BOTTOM_SHEET_EXPANDED;
              AnalyticsUtilsDefault;
              if (closure_7 != null) {
                applicationId = closure_7.applicationId;
              }
              compositeInstanceId = undefined;
              if (closure_7 != null) {
                compositeInstanceId = closure_7.compositeInstanceId;
              }
              track(VOICE_BOTTOM_SHEET_EXPANDED, obj);
            },
        omitPTT,
        actionBar,
        expandedControls,
        header: bottomHeader,
        onDrawerClose,
        reveal,
        children
      };
      tmp17Result = tmp17(tmp5(9628), obj6);
    }
  }
  items1[2] = tmp17Result;
  return closure_8(View, obj5);
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedControls.tsx");

export default memoResult;
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;