// === Module 12062: FocusedControls ===

// Module 12062 (FocusedControls)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5380 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7431 */;
import inlineStyles from "inlineStyles" /* 8176 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 12063 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
function FocusedControlsHeader(arg0) {
  ({ header, reveal, isTouchingLeftScreenEdge } = arg0);
  obj = _mod1652;
  items = [closure_11, reveal, 54];
  c0 = undefined;
  c1 = undefined;
  [tmp4, tmp5, tmp6] = items;
  class FocusedControlsTsx1 {
    constructor() {
      num = 0;
      if (!closure_0) {
        tmp = closure_1;
        num = -closure_1;
      }
      return num;
    }
  }
  const items1 = [tmp5, tmp6];
  FocusedControlsTsx1.__closure = items1;
  FocusedControlsTsx1.__workletHash = 15848124233205;
  FocusedControlsTsx1.__initData = tmp4;
  const derivedValue = obj.useDerivedValue(FocusedControlsTsx1);
  const tmp = closure_9();
  const tmp9 = useIsInvitedToSpeakDefault();
  const items2 = [closure_12, timing_timing.withTiming, derivedValue, obj];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp10, tmp11, tmp12, tmp13] = items2;
  class FocusedControlsTsx2 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: closure_0(closure_1.get(), closure_2) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items3 = [tmp11, tmp12, tmp13];
  FocusedControlsTsx2.__closure = items3;
  FocusedControlsTsx2.__workletHash = 5859274917667;
  FocusedControlsTsx2.__initData = tmp10;
  const animatedStyle = _mod1652.useAnimatedStyle(FocusedControlsTsx2);
  const obj2 = { style: animatedStyle, children: null };
  const rect = { top: !tmp9, left: isTouchingLeftScreenEdge, right: true, children: metroImportDefault(hasOwnProperty, { style: tmp.headerContainer, children: header }) };
  obj2.children = metroImportDefault(common_SafeAreaView.SafeAreaPaddingView, rect);
  return metroImportDefault(_modDef1652.View, obj2);
}
function FocusedControlsHeaderGradient() {
  const width = useWindowDimensionsDefault().width;
  obj = { style: null, children: null };
  items = [closure_9().backgroundGradient, { width }];
  obj.style = items;
  const size = { height: "100%", width, children: null };
  const obj2 = { children: null };
  const obj3 = { id: "grad", y1: "0%", x1: "0", x2: "0", y2: "100%", children: null };
  const items1 = [metroImportDefault(inlineStyles.Stop, { offset: "0%", stopColor: "black", stopOpacity: ".8" }), metroImportDefault(inlineStyles.Stop, { offset: "66%", stopColor: "black", stopOpacity: ".51" }), metroImportDefault(inlineStyles.Stop, { offset: "100%", stopColor: "black", stopOpacity: "0" })];
  obj3.children = items1;
  obj2.children = React5(inlineStyles.LinearGradient, obj3);
  const items2 = [metroImportDefault(inlineStyles.Defs, obj2), metroImportDefault(inlineStyles.Rect, { height: "100%", width, fill: "url(#grad)" })];
  size.children = items2;
  obj.children = React5(inlineStyles.Svg, size);
  return metroImportDefault(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5143);
let closure_9 = createStyles.createStyles({ backgroundGradient: { position: "absolute", left: 0, right: 0, top: 0, height: 130 }, headerContainer: { position: "relative", height: 54 } });
let obj = { easing: fn(1187).STANDARD_EASING, duration: 250 };
let closure_11 = { code: "(function FocusedControlsTsx1(){let[reveal,FOCUSED_CONTROLS_HEADER_HEIGHT]=this.__closure;return reveal?0:-FOCUSED_CONTROLS_HEADER_HEIGHT;})" };
let closure_12 = { code: "(function FocusedControlsTsx2(){let[withTiming,offsetY,TIMING_CONFIG]=this.__closure;return{transform:[{translateY:withTiming(offsetY.get(),TIMING_CONFIG)}]};})" };
let closure_15 = { code: "(function FocusedControlsTsx3(){let[isInvitedToSpeak,statusIndicatorHeight]=this.__closure;return isInvitedToSpeak?statusIndicatorHeight.get():0;})" };
let closure_16 = { code: "(function FocusedControlsTsx4(){let[reveal]=this.__closure;return reveal?1:0;})" };
let closure_17 = { code: "(function FocusedControlsTsx5(){let[withTiming,top,TIMING_CONFIG,revealOpacity]=this.__closure;return{top:withTiming(top.get(),TIMING_CONFIG),opacity:withTiming(revealOpacity.get(),TIMING_CONFIG)};})" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/FocusedControls.tsx");

export default noop.memo(function FocusedControlsRevamped(disableGradient) {
  ({ expandedControls, actionBar, forceReveal } = disableGradient);
  ({ header, children } = disableGradient);
  if (forceReveal === undefined) {
    forceReveal = false;
  }
  let flag = disableGradient.disableGradient;
  if (flag === undefined) {
    flag = false;
  }
  ({ containerStyle, channel: c0 } = disableGradient);
  let analyticsLocations;
  dependencyMap = undefined;
  ({ omitPTT, bottomHeader, onDrawerClose, isTouchingLeftScreenEdge } = disableGradient);
  obj = require("useGlobalStatusIndicatorState");
  const globalStatusIndicatorState = obj.useGlobalStatusIndicatorState();
  const globalStatusIndicatorHeightSharedValue = require("GlobalStatusIndicator").useGlobalStatusIndicatorHeightSharedValue(globalStatusIndicatorState);
  let obj2 = require("GlobalStatusIndicator");
  let reveal = noop.useContext(require("RevealProvider").RevealContext).reveal;
  const tmp6 = analyticsLocations(12063)();
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  if (!reveal) {
    reveal = forceReveal;
  }
  if (!reveal) {
    reveal = isScreenReaderEnabled;
  }
  const obj3 = require("useIsScreenReaderEnabled");
  items = [closure_15, tmp6, globalStatusIndicatorHeightSharedValue];
  _require = undefined;
  analyticsLocations = undefined;
  [tmp8, tmp9, tmp10] = items;
  class FocusedControlsTsx3 {
    constructor() {
      num = 0;
      if (closure_0) {
        tmp = analyticsLocations;
        num = analyticsLocations.get();
      }
      return num;
    }
  }
  const items1 = [tmp9, tmp10];
  FocusedControlsTsx3.__closure = items1;
  FocusedControlsTsx3.__workletHash = 15152715120003;
  FocusedControlsTsx3.__initData = tmp8;
  const derivedValue = require("module_1652").useDerivedValue(FocusedControlsTsx3);
  const tmpResult = require("module_1652");
  const items2 = [closure_16, reveal];
  _require = undefined;
  [tmp12, tmp13] = items2;
  class FocusedControlsTsx4 {
    constructor() {
      num = 0;
      if (closure_0) {
        num = 1;
      }
      return num;
    }
  }
  const items3 = [tmp13];
  FocusedControlsTsx4.__closure = items3;
  FocusedControlsTsx4.__workletHash = 3205365180320;
  FocusedControlsTsx4.__initData = tmp12;
  const derivedValue1 = require("module_1652").useDerivedValue(FocusedControlsTsx4);
  const tmpResult3 = require("module_1652");
  const items4 = [closure_17, require("timing/timing").withTiming, derivedValue, obj, derivedValue1];
  _require = undefined;
  analyticsLocations = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp15, tmp16, tmp17, tmp18, tmp19] = items4;
  class FocusedControlsTsx5 {
    constructor() {
      obj = { top: closure_0(analyticsLocations.get(), closure_2), opacity: closure_0(closure_3.get(), closure_2) };
      return obj;
    }
  }
  const items5 = [tmp16, tmp17, tmp18, tmp19];
  FocusedControlsTsx5.__closure = items5;
  FocusedControlsTsx5.__workletHash = 13660104452358;
  FocusedControlsTsx5.__initData = tmp15;
  const animatedStyle = require("module_1652").useAnimatedStyle(FocusedControlsTsx5);
  const tmpResult4 = require("module_1652");
  analyticsLocations = analyticsLocations(7465)(tmp5(7490).FOCUSED_VOICE_CONTROLS).analyticsLocations;
  dependencyMap = tmp5(11995)();
  if (containerStyle == null) {
    containerStyle = absoluteFill.absoluteFill;
  }
  const obj4 = { style: null, pointerEvents: null, children: null };
  const items6 = [containerStyle, animatedStyle];
  obj4.style = items6;
  let str = "none";
  if (reveal) {
    str = "box-none";
  }
  obj4.pointerEvents = str;
  let tmp24 = null;
  if (!flag) {
    tmp24 = closure_7(FocusedControlsHeaderGradient, {});
  }
  const items7 = [tmp24, closure_7(FocusedControlsHeader, { header, reveal, isTouchingLeftScreenEdge }), ];
  let tmp27Result = null;
  if (null != actionBar) {
    tmp27Result = null;
    if (null != expandedControls) {
      const obj5 = {
        onDrawerOpen: function handleOpenDrawer() {
              const obj2 = { channel_id: _undefined.id, guild_id: _undefined.guild_id, application_id: null, activity_session_id: null, location_stack: null };
              let applicationId;
              if (closure_2 != null) {
                applicationId = closure_2.applicationId;
              }
              obj2.application_id = applicationId;
              let compositeInstanceId;
              if (closure_2 != null) {
                compositeInstanceId = closure_2.compositeInstanceId;
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
        children
      };
      tmp27Result = closure_7(tmp5(12072), obj5);
    }
  }
  items7[2] = tmp27Result;
  obj4.children = items7;
  return closure_8(analyticsLocations(1652).View, obj4);
});
export const FOCUSED_CONTROLS_HEADER_HEIGHT = 54;