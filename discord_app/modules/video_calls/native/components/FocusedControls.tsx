// discord_app/modules/video_calls/native/components/FocusedControls.tsx
import importAllResult from "FocusedControlsExpanded";
import get_ActivityIndicator from "QUICK_SWITCHER";
import { AnalyticEvents } from "ME";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import { inlineStyles } from "../../../../../_runtime/07901_inlineStyles.js";
import { SCREEN_READER_ENABLED_GETTER } from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import { nativeEventEmitter } from "../../../connectivity/native/components/GlobalStatusIndicator.tsx";
import { useGlobalStatusIndicatorState } from "../../../connectivity/native/useGlobalStatusIndicatorState.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";
import { useWindowDimensions } from "../../../screen/useWindowDimensions.native.tsx";
import { useRevealProviderValue } from "RevealProvider.tsx";

let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
function FocusedControlsHeader(reveal) {
  let header;
  let isTouchingLeftScreenEdge;
  reveal = reveal.reveal;
  let derivedValue;
  ({ header, isTouchingLeftScreenEdge } = reveal);
  let obj = reveal(4083);
  const fn = function l() {
    let num = -54;
    if (reveal) {
      num = 0;
    }
    return num;
  };
  fn.__closure = { reveal, FOCUSED_CONTROLS_HEADER_HEIGHT: 54 };
  fn.__workletHash = 15509217225804;
  fn.__initData = closure_11;
  derivedValue = obj.useDerivedValue(fn);
  const tmp = callback3();
  let obj1 = reveal(4083);
  const fn2 = function c() {
    let obj = { transform: null };
    obj = { translateY: null };
    obj[0] = reveal(outer1_2[8]).withTiming(derivedValue.get(), outer1_10);
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  obj = { withTiming: reveal(4343).withTiming, offsetY: derivedValue, TIMING_CONFIG: obj };
  fn2.__closure = obj;
  fn2.__workletHash = 12710345257882;
  fn2.__initData = closure_12;
  const animatedStyle = obj1.useAnimatedStyle(fn2);
  obj = { style: animatedStyle, children: null };
  obj1 = { top: !derivedValue(10755)(), left: isTouchingLeftScreenEdge, right: true, children: null };
  obj1[3] = callback(closure_5, { style: tmp.headerContainer, children: header });
  obj[1] = callback(reveal(5389).SafeAreaPaddingView, obj1);
  return callback(derivedValue(4083).View, obj);
}
function FocusedControlsHeaderGradient() {
  const width = useWindowDimensions().width;
  let obj = { style: items, children: null };
  items = [callback3().backgroundGradient, { width }];
  obj = { height: "100%", width, children: null };
  obj = { children: null };
  const obj1 = { id: "grad", y1: "0%", x1: "0", x2: "0", y2: "100%", children: null };
  const items1 = [callback(inlineStyles.Stop, { offset: "0%", stopColor: "black", stopOpacity: ".8" }), callback(inlineStyles.Stop, { offset: "66%", stopColor: "black", stopOpacity: ".51" }), callback(inlineStyles.Stop, { offset: "100%", stopColor: "black", stopOpacity: "0" })];
  obj1[5] = items1;
  obj[0] = callback2(inlineStyles.LinearGradient, obj1);
  const items2 = [callback(inlineStyles.Defs, obj), callback(inlineStyles.Rect, { height: "100%", width, fill: "url(#grad)" })];
  obj[2] = items2;
  obj[1] = callback2(inlineStyles.Svg, obj);
  return callback(closure_5, obj);
}
let c3 = importAllResult;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles({ backgroundGradient: { position: "absolute", left: 0, right: 0, top: 0, height: 130 }, headerContainer: { position: "relative", height: 54 } });
let obj = { easing: require("Button").STANDARD_EASING, duration: 250 };
let closure_11 = { code: "function FocusedControlsTsx1(){const{reveal,FOCUSED_CONTROLS_HEADER_HEIGHT}=this.__closure;return reveal?0:-FOCUSED_CONTROLS_HEADER_HEIGHT;}" };
let closure_12 = { code: "function FocusedControlsTsx2(){const{withTiming,offsetY,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withTiming(offsetY.get(),TIMING_CONFIG)}]};}" };
let closure_15 = { code: "function FocusedControlsTsx3(){const{isInvitedToSpeak,statusIndicatorHeight}=this.__closure;return isInvitedToSpeak?statusIndicatorHeight.get():0;}" };
let closure_16 = { code: "function FocusedControlsTsx4(){const{reveal}=this.__closure;return reveal?1:0;}" };
let closure_17 = { code: "function FocusedControlsTsx5(){const{withTiming,top,TIMING_CONFIG,revealOpacity}=this.__closure;return{top:withTiming(top.get(),TIMING_CONFIG),opacity:withTiming(revealOpacity.get(),TIMING_CONFIG)};}" };
const memoResult = importAllResult.memo((disableGradient) => {
  let actionBar;
  let bottomHeader;
  let children;
  let containerStyle;
  let expandedControls;
  let forceReveal;
  let header;
  let isTouchingLeftScreenEdge;
  let omitPTT;
  let onDrawerClose;
  let require;
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
  let globalStatusIndicatorHeightSharedValue;
  let dependencyMap;
  let reveal;
  let derivedValue;
  let derivedValue1;
  let analyticsLocations;
  let callback;
  ({ omitPTT, bottomHeader, onDrawerClose, isTouchingLeftScreenEdge } = disableGradient);
  let obj = useGlobalStatusIndicatorState;
  const globalStatusIndicatorState = obj.useGlobalStatusIndicatorState();
  let obj1 = nativeEventEmitter;
  globalStatusIndicatorHeightSharedValue = obj1.useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState);
  const tmp6 = globalStatusIndicatorHeightSharedValue(10755)();
  dependencyMap = tmp6;
  reveal = reveal.useContext(useRevealProviderValue.RevealContext).reveal;
  const isScreenReaderEnabled = SCREEN_READER_ENABLED_GETTER.useIsScreenReaderEnabled();
  if (!reveal) {
    reveal = forceReveal;
  }
  if (!reveal) {
    reveal = isScreenReaderEnabled;
  }
  let tmpResult = tmp(4083);
  class D {
    constructor() {
      num = 0;
      if (c2) {
        tmp = c1;
        num = c1.get();
      }
      return num;
    }
  }
  D.__closure = { isInvitedToSpeak: tmp6, statusIndicatorHeight: globalStatusIndicatorHeightSharedValue };
  D.__workletHash = 14833624951450;
  D.__initData = closure_15;
  derivedValue = tmpResult.useDerivedValue(D);
  tmpResult = tmp(4083);
  class F {
    constructor() {
      num = 0;
      if (reveal) {
        num = 1;
      }
      return num;
    }
  }
  F.__closure = { reveal };
  F.__workletHash = 15022275245977;
  F.__initData = closure_16;
  derivedValue1 = tmpResult.useDerivedValue(F);
  const obj3 = SCREEN_READER_ENABLED_GETTER;
  const fn = function y() {
    const obj = { top: null, opacity: null };
    obj[0] = outer1_0(_undefined[8]).withTiming(derivedValue.get(), outer1_10);
    const obj2 = outer1_0(_undefined[8]);
    obj[1] = outer1_0(_undefined[8]).withTiming(derivedValue1.get(), outer1_10);
    return obj;
  };
  obj = { withTiming: tmp(4343).withTiming, top: derivedValue, TIMING_CONFIG: obj, revealOpacity: derivedValue1 };
  fn.__closure = obj;
  fn.__workletHash = 8532538341439;
  fn.__initData = closure_17;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const tmpResult1 = ReanimatedRexport;
  analyticsLocations = globalStatusIndicatorHeightSharedValue(5789)(tmp5(5809).FOCUSED_VOICE_CONTROLS).analyticsLocations;
  callback = tmp5(10709)();
  if (containerStyle == null) {
    containerStyle = derivedValue.absoluteFill;
  }
  obj = { style: items, pointerEvents: null, children: null };
  items = [containerStyle, animatedStyle];
  let str = "none";
  if (reveal) {
    str = "box-none";
  }
  obj[1] = str;
  let tmp14 = null;
  if (!flag) {
    tmp14 = callback(FocusedControlsHeaderGradient, {});
  }
  const items1 = [tmp14, callback(FocusedControlsHeader, { header, reveal, isTouchingLeftScreenEdge }), ];
  let tmp17Result = null;
  if (null != actionBar) {
    tmp17Result = null;
    if (null != expandedControls) {
      obj1 = { onDrawerOpen: null, omitPTT: null, actionBar: null, expandedControls: null, header: null, onDrawerClose: null, reveal: null, children: null };
      obj1[0] = function onDrawerOpen() {
        let obj = globalStatusIndicatorHeightSharedValue(_undefined[20]);
        obj = { channel_id: closure_0.id, guild_id: closure_0.guild_id, application_id: null, activity_session_id: null, location_stack: null };
        let applicationId;
        if (closure_7 != null) {
          applicationId = tmp.applicationId;
        }
        obj[2] = applicationId;
        let compositeInstanceId;
        if (closure_7 != null) {
          compositeInstanceId = tmp.compositeInstanceId;
        }
        obj[3] = compositeInstanceId;
        obj[4] = analyticsLocations;
        obj.track(analyticsLocations.VOICE_BOTTOM_SHEET_EXPANDED, obj);
      };
      obj1[1] = omitPTT;
      obj1[2] = actionBar;
      obj1[3] = expandedControls;
      obj1[4] = bottomHeader;
      obj1[5] = onDrawerClose;
      obj1[6] = reveal;
      obj1[7] = children;
      tmp17Result = callback(tmp5(10767), obj1);
    }
  }
  items1[2] = tmp17Result;
  obj[2] = items1;
  return closure_8(globalStatusIndicatorHeightSharedValue(4083).View, obj);
});
const result = require("ME").fileFinishedImporting("modules/video_calls/native/components/FocusedControls.tsx");

export default memoResult;
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;