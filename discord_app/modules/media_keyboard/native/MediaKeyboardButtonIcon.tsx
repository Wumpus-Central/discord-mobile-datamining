// === Module 11883: MediaKeyboardButtonIcon ===

// Module 11883 (MediaKeyboardButtonIcon)
import Fragment from "Fragment" /* 21 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4753 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import _objectDestructuringEmpty from "_objectDestructuringEmpty" /* 11884 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
const __initData = { code: "function MediaKeyboardButtonIconTsx1(){const{keyboard,KeyboardTypes,withTiming,timingStandard}=this.__closure;const isActive=keyboard===KeyboardTypes.MEDIA||keyboard===KeyboardTypes.APP_LAUNCHER;return{transform:[{rotate:withTiming(isActive?\"45deg\":\"0deg\",timingStandard)}]};}" };
const __initData2 = { code: "function MediaKeyboardButtonIconTsx2(){const{keyboard,KeyboardTypes,withTiming,timingStandard}=this.__closure;const isActive=keyboard===KeyboardTypes.MEDIA||keyboard===KeyboardTypes.APP_LAUNCHER;return{transform:[{rotate:withTiming(isActive?'45deg':'0deg',timingStandard)}]};}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp12;
  let tmp4;
  let obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] !== arg0) {
    const _Object = Object;
    _objectDestructuringEmpty(arg0);
    const obj2 = assign({}, arg0);
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmp10 = useKeyboardTypeDefault();
  _require = tmp10;
  const fn = function b() {
    let items;
    let str = "0deg";
    const tmp4 = closure_0 === KeyboardTypes.KeyboardTypes.MEDIA || closure_0 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
    const withTiming = timing.withTiming;
    timing;
    if (tmp4) {
      str = "45deg";
    }
    const obj = { transform: items };
    items = [{ rotate: withTiming(str, timingPresets.timingStandard) }];
    ({ rotate: withTiming(str, timingPresets.timingStandard) });
    return obj;
  };
  const tmpResult = require("ReanimatedRexport");
  fn.__closure = { keyboard: tmp10, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, withTiming: require("timing").withTiming, timingStandard: require("timingPresets").timingStandard };
  fn.__workletHash = 798529944651;
  fn.__initData = __initData;
  ({ keyboard: tmp10, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, withTiming: require("timing").withTiming, timingStandard: require("timingPresets").timingStandard });
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  if (cResult[2] !== tmp4) {
    const PlusLargeIcon = tmp(10702).PlusLargeIcon;
    const merged = Object.assign(tmp4);
    const tmp17 = <PlusLargeIcon />;
    cResult[2] = tmp4;
    cResult[3] = tmp17;
    tmp12 = tmp17;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === animatedStyle) {
    let tmp18;
    if (cResult[5] === tmp12) {
      tmp18 = cResult[6];
    }
    return tmp18;
  }
  const tmp19 = jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: tmp12 });
  cResult[4] = animatedStyle;
  cResult[5] = tmp12;
  cResult[6] = tmp19;
  tmp18 = tmp19;
}) : ((arg0) => {
  let closure_0;
  if (arg0 == null) {
    let str = "Cannot destructure 'undefined' or 'null'.";
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const tmp5 = useKeyboardTypeDefault();
    _require = tmp5;
    const fn = function o() {
      let items;
      let str = "0deg";
      const tmp4 = closure_0 === KeyboardTypes.KeyboardTypes.MEDIA || closure_0 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
      const withTiming = timing.withTiming;
      timing;
      if (tmp4) {
        str = "45deg";
      }
      const obj = { transform: items };
      items = [{ rotate: withTiming(str, timingPresets.timingStandard) }];
      ({ rotate: withTiming(str, timingPresets.timingStandard) });
      return obj;
    };
    let obj = { keyboard: tmp5, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, withTiming: require("timing").withTiming, timingStandard: require("timingPresets").timingStandard };
    const useAnimatedStyle = require("ReanimatedRexport").useAnimatedStyle;
    require("ReanimatedRexport");
    fn.__closure = obj;
    fn.__workletHash = 6550163329544;
    fn.__initData = __initData2;
    const animatedStyle = useAnimatedStyle(fn);
    const View = ReanimatedRexportDefault.View;
    const PlusLargeIcon = require("PlusLargeIcon").PlusLargeIcon;
    const merged1 = Object.assign(merged);
    return <View style={animatedStyle}>{null}</View>;
  }
});
const result = size.fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx");

export const MediaKeyboardButtonIcon = tmp3;