// discord_app/modules/video_calls/native/components/FocusedControls.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import inlineStyles from "../../../../../_runtime/07909_inlineStyles.js";
import RevealProvider from "RevealProvider.tsx";
import useGlobalStatusIndicatorState from "../../../connectivity/native/useGlobalStatusIndicatorState.tsx";
import GlobalStatusIndicator from "../../../connectivity/native/components/GlobalStatusIndicator.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function FocusedControlsHeader(reveal) {
  reveal = reveal.reveal;
  ({ header, isTouchingLeftScreenEdge } = reveal);
  TIMING_CONFIG = reveal(4566);
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
  const derivedValue = TIMING_CONFIG.useDerivedValue(fn);
  const tmp = closure_9();
  const tmp3 = derivedValue(8959)();
  const fn2 = function c() {
    const obj = { transform: null };
    const obj2 = { translateY: timing.withTiming(derivedValue.get(), obj) };
    const items = [obj2];
    obj.transform = items;
    return obj;
  };
  let obj2 = reveal(4566);
  fn2.__closure = { withTiming: reveal(4837).withTiming, offsetY: derivedValue, TIMING_CONFIG };
  fn2.__workletHash = 12710345257882;
  fn2.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn2);
  const obj4 = { style: animatedStyle, children: null };
  const rect = {
    top: !tmp3,
    left: isTouchingLeftScreenEdge,
    right: true,
    children: closure_7(closure_5, { style: tmp.headerContainer, children: header }),
  };
  obj4.children = closure_7(reveal(6544).SafeAreaPaddingView, rect);
  return closure_7(derivedValue(4566).View, obj4);
}
function FocusedControlsHeaderGradient() {
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
  obj2.children = React6(inlineStyles.LinearGradient, obj3);
  const items2 = [
    React5(inlineStyles.Defs, obj2),
    React5(inlineStyles.Rect, { height: "100%", width, fill: "url(#grad)" }),
  ];
  size.children = items2;
  obj.children = React6(inlineStyles.Svg, size);
  return React5(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4836);
let closure_9 = createStyles.createStyles({
  backgroundGradient: { position: "absolute", left: 0, right: 0, top: 0, height: 130 },
  headerContainer: { position: "relative", height: 54 },
});
let TIMING_CONFIG = { easing: fn(1177).STANDARD_EASING, duration: 250 };
const __initData = {
  code: "function FocusedControlsTsx1(){const{reveal,FOCUSED_CONTROLS_HEADER_HEIGHT}=this.__closure;return reveal?0:-FOCUSED_CONTROLS_HEADER_HEIGHT;}",
};
const __initData2 = {
  code: "function FocusedControlsTsx2(){const{withTiming,offsetY,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withTiming(offsetY.get(),TIMING_CONFIG)}]};}",
};
const __initData3 = {
  code: "function FocusedControlsTsx3(){const{isInvitedToSpeak,statusIndicatorHeight}=this.__closure;return isInvitedToSpeak?statusIndicatorHeight.get():0;}",
};
const __initData4 = { code: "function FocusedControlsTsx4(){const{reveal}=this.__closure;return reveal?1:0;}" };
const __initData5 = {
  code: "function FocusedControlsTsx5(){const{withTiming,top,TIMING_CONFIG,revealOpacity}=this.__closure;return{top:withTiming(top.get(),TIMING_CONFIG),opacity:withTiming(revealOpacity.get(),TIMING_CONFIG)};}",
};
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
  TIMING_CONFIG = useGlobalStatusIndicatorState;
  const globalStatusIndicatorState = TIMING_CONFIG.useGlobalStatusIndicatorState();
  const globalStatusIndicatorHeightSharedValue =
    GlobalStatusIndicator.useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState);
  const tmp6 = globalStatusIndicatorHeightSharedValue(8959)();
  dependencyMap = tmp6;
  reveal = reveal.useContext(RevealProvider.RevealContext).reveal;
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (!reveal) {
    reveal = forceReveal;
  }
  if (!reveal) {
    reveal = isScreenReaderEnabled;
  }
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
  derivedValue = ReanimatedRexport.useDerivedValue(D);
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
  F.__workletHash = 15022275245977;
  F.__initData = __initData4;
  derivedValue1 = ReanimatedRexport.useDerivedValue(F);
  const tmpResult3 = ReanimatedRexport;
  const fn = function y() {
    obj = { top: timing.withTiming(derivedValue.get(), obj), opacity: null };
    obj.opacity = timing.withTiming(derivedValue1.get(), obj);
    return obj;
  };
  const tmpResult4 = ReanimatedRexport;
  fn.__closure = { withTiming: timing.withTiming, top: derivedValue, TIMING_CONFIG, revealOpacity: derivedValue1 };
  fn.__workletHash = 8532538341439;
  fn.__initData = __initData5;
  const animatedStyle = tmpResult4.useAnimatedStyle(fn);
  const obj4 = { withTiming: timing.withTiming, top: derivedValue, TIMING_CONFIG, revealOpacity: derivedValue1 };
  analyticsLocations = globalStatusIndicatorHeightSharedValue(6583)(
    tmp5(6603).FOCUSED_VOICE_CONTROLS,
  ).analyticsLocations;
  closure_7 = tmp5(8913)();
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
    tmp14 = closure_7(FocusedControlsHeaderGradient, {});
  }
  const items1 = [tmp14, closure_7(FocusedControlsHeader, { header, reveal, isTouchingLeftScreenEdge })];
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
      tmp17Result = closure_7(tmp5(8969), obj6);
    }
  }
  items1[2] = tmp17Result;
  obj5.children = items1;
  return closure_8(globalStatusIndicatorHeightSharedValue(4566).View, obj5);
});
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;
