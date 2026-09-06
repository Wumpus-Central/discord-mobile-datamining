// === Module 9677: FocusedControls ===

// Module 9677 (FocusedControls)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 4962 */;
import inlineStyles from "inlineStyles" /* 8453 */;
import RevealProvider from "RevealProvider" /* 9474 */;
import useGlobalStatusIndicatorState from "useGlobalStatusIndicatorState" /* 9679 */;
import GlobalStatusIndicator from "GlobalStatusIndicator" /* 9683 */;
import noop from "module_19" /* 19 */;

require = fn;
function FocusedControlsHeader(reveal) {
  reveal = reveal.reveal;
  ({ header, isTouchingLeftScreenEdge } = reveal);
  let __closure = reveal(4296);
  const fn = function l() {
    let num = -54;
    if (reveal) {
      num = 0;
    }
    return num;
  };
  fn.__closure = { reveal, FOCUSED_CONTROLS_HEADER_HEIGHT: 54 };
  fn.__workletHash = 15509217225804;
  fn.__initData = __initData;
  const derivedValue = __closure.useDerivedValue(fn);
  const tmp = closure_9();
  let obj1 = reveal(4296);
  const fn2 = function c() {
    obj = { transform: null };
    obj = { translateY: timing.withTiming(derivedValue.get(), obj) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  __closure = { withTiming: reveal(4561).withTiming, offsetY: derivedValue, TIMING_CONFIG: __closure };
  fn2.__closure = __closure;
  fn2.__workletHash = 12710345257882;
  fn2.__initData = __initData2;
  const animatedStyle = obj1.useAnimatedStyle(fn2);
  __closure = { style: animatedStyle, children: null };
  const rect = { top: !derivedValue(9678)(), left: isTouchingLeftScreenEdge, right: true, children: null };
  obj1 = { style: tmp.headerContainer, children: header };
  rect.children = closure_7(closure_5, obj1);
  __closure.children = closure_7(reveal(7123).SafeAreaPaddingView, rect);
  return closure_7(derivedValue(4296).View, __closure);
}
function FocusedControlsHeaderGradient() {
  const width = useWindowDimensionsDefault().width;
  obj = { style: null, children: null };
  const items = [closure_9().backgroundGradient, { width }];
  obj.style = items;
  const size = { height: "100%", width, children: null };
  obj = { children: null };
  obj = { id: "grad", y1: "0%", x1: "0", x2: "0", y2: "100%", children: null };
  const items1 = [React5(inlineStyles.Stop, { offset: "0%", stopColor: "black", stopOpacity: ".8" }), React5(inlineStyles.Stop, { offset: "66%", stopColor: "black", stopOpacity: ".51" }), React5(inlineStyles.Stop, { offset: "100%", stopColor: "black", stopOpacity: "0" })];
  obj.children = items1;
  obj.children = React6(inlineStyles.LinearGradient, obj);
  const items2 = [React5(inlineStyles.Defs, obj), React5(inlineStyles.Rect, { height: "100%", width, fill: "url(#grad)" })];
  size.children = items2;
  obj.children = React6(inlineStyles.Svg, size);
  return React5(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ backgroundGradient: { position: "absolute", left: 0, right: 0, top: 0, height: 130 }, headerContainer: { position: "relative", height: 54 } });
let obj = { easing: fn(1178).STANDARD_EASING, duration: 250 };
const __initData = { code: "function FocusedControlsTsx1(){const{reveal,FOCUSED_CONTROLS_HEADER_HEIGHT}=this.__closure;return reveal?0:-FOCUSED_CONTROLS_HEADER_HEIGHT;}" };
const __initData2 = { code: "function FocusedControlsTsx2(){const{withTiming,offsetY,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withTiming(offsetY.get(),TIMING_CONFIG)}]};}" };
const __initData3 = { code: "function FocusedControlsTsx3(){const{isInvitedToSpeak,statusIndicatorHeight}=this.__closure;return isInvitedToSpeak?statusIndicatorHeight.get():0;}" };
const __initData4 = { code: "function FocusedControlsTsx4(){const{reveal}=this.__closure;return reveal?1:0;}" };
const __initData5 = { code: "function FocusedControlsTsx5(){const{withTiming,top,TIMING_CONFIG,revealOpacity}=this.__closure;return{top:withTiming(top.get(),TIMING_CONFIG),opacity:withTiming(revealOpacity.get(),TIMING_CONFIG)};}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedControls.tsx");

export default noop.memo((disableGradient) => {
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
  let __closure = useGlobalStatusIndicatorState;
  const globalStatusIndicatorState = __closure.useGlobalStatusIndicatorState();
  let obj1 = GlobalStatusIndicator;
  const globalStatusIndicatorHeightSharedValue = obj1.useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState);
  const tmp6 = globalStatusIndicatorHeightSharedValue(9678)();
  dependencyMap = tmp6;
  reveal = reveal.useContext(RevealProvider.RevealContext).reveal;
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (!reveal) {
    reveal = forceReveal;
  }
  if (!reveal) {
    reveal = isScreenReaderEnabled;
  }
  let tmpResult = tmp(4296);
  class D {
    constructor() {
      num = 0;
      if (closure_2) {
        tmp = closure_1;
        num = closure_1.get();
      }
      return num;
    }
  }
  D.__closure = { isInvitedToSpeak: tmp6, statusIndicatorHeight: globalStatusIndicatorHeightSharedValue };
  D.__workletHash = 14833624951450;
  D.__initData = __initData3;
  derivedValue = tmpResult.useDerivedValue(D);
  tmpResult = tmp(4296);
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
  F.__workletHash = 15022275245977;
  F.__initData = __initData4;
  derivedValue1 = tmpResult.useDerivedValue(F);
  const fn = function y() {
    obj = { top: timing.withTiming(derivedValue.get(), obj), opacity: null };
    obj.opacity = timing.withTiming(derivedValue1.get(), obj);
    return obj;
  };
  __closure = { withTiming: tmp(4561).withTiming, top: derivedValue, TIMING_CONFIG: __closure, revealOpacity: derivedValue1 };
  fn.__closure = __closure;
  fn.__workletHash = 8532538341439;
  fn.__initData = __initData5;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const tmpResult1 = ReanimatedRexport;
  analyticsLocations = globalStatusIndicatorHeightSharedValue(7162)(tmp5(7182).FOCUSED_VOICE_CONTROLS).analyticsLocations;
  closure_7 = tmp5(9633)();
  if (containerStyle == null) {
    containerStyle = derivedValue.absoluteFill;
  }
  __closure = { style: null, pointerEvents: null, children: null };
  const items = [containerStyle, animatedStyle];
  __closure.style = items;
  let str = "none";
  if (reveal) {
    str = "box-none";
  }
  __closure.pointerEvents = str;
  let tmp14 = null;
  if (!flag) {
    tmp14 = closure_7(FocusedControlsHeaderGradient, {});
  }
  const items1 = [tmp14, closure_7(FocusedControlsHeader, { header, reveal, isTouchingLeftScreenEdge }), ];
  let tmp17Result = null;
  if (null != actionBar) {
    tmp17Result = null;
    if (null != expandedControls) {
      obj1 = {
        onDrawerOpen() {
              obj = { channel_id: require.id, guild_id: require.guild_id, application_id: null, activity_session_id: null, location_stack: null };
              let applicationId;
              if (closure_7 != null) {
                applicationId = tmp.applicationId;
              }
              obj.application_id = applicationId;
              let compositeInstanceId;
              if (closure_7 != null) {
                compositeInstanceId = tmp.compositeInstanceId;
              }
              obj.activity_session_id = compositeInstanceId;
              obj.location_stack = analyticsLocations;
              obj.track(AnalyticEvents.VOICE_BOTTOM_SHEET_EXPANDED, obj);
            },
        omitPTT,
        actionBar,
        expandedControls,
        header: bottomHeader,
        onDrawerClose,
        reveal,
        children
      };
      tmp17Result = closure_7(tmp5(9691), obj1);
    }
  }
  items1[2] = tmp17Result;
  __closure.children = items1;
  return closure_8(globalStatusIndicatorHeightSharedValue(4296).View, __closure);
});
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;