// === Module 12382: MediaKeyboardButtonIcon ===

// Module 12382 (MediaKeyboardButtonIcon)
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4374 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4506 */;
import timing from "timing" /* 4639 */;
import timingPresets from "timingPresets" /* 4642 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const __initData = { code: "function MediaKeyboardButtonIconTsx1(){const{keyboard,KeyboardTypes,withTiming,timingStandard}=this.__closure;const isActive=keyboard===KeyboardTypes.MEDIA||keyboard===KeyboardTypes.APP_LAUNCHER;return{transform:[{rotate:withTiming(isActive?'45deg':'0deg',timingStandard)}]};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx");

export const MediaKeyboardButtonIcon = function MediaKeyboardButtonIcon(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const tmp5 = useKeyboardTypeDefault();
    _require = tmp5;
    const fn = function s() {
      const tmp4 = closure_0 === KeyboardTypes.KeyboardTypes.MEDIA || closure_0 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
      let str = "0deg";
      if (tmp4) {
        str = "45deg";
      }
      const obj = { transform: null };
      const tmp2Result = timing;
      const items = [{ rotate: timing.withTiming(str, timingPresets.timingStandard) }];
      obj.transform = items;
      return obj;
    };
    const obj2 = { keyboard: tmp5, KeyboardTypes: require("KeyboardTypes").KeyboardTypes, withTiming: require("timing").withTiming, timingStandard: require("timingPresets").timingStandard };
    fn.__closure = obj2;
    fn.__workletHash = 10698563185643;
    fn.__initData = __initData;
    const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
    const obj3 = { style: animatedStyle, children: null };
    const obj4 = {};
    const merged1 = Object.assign(merged);
    obj3.children = jsx(require("PlusLargeIcon").PlusLargeIcon, {});
    return jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: null });
  }
};