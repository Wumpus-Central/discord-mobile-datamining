// === Module 14031: MediaKeyboardButtonIcon ===

// Module 14031 (MediaKeyboardButtonIcon)
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import _mod1652 from "module_1652" /* 1652 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5335 */;
import timing_timing from "timing/timing" /* 5380 */;
import timingPresets from "timingPresets" /* 5383 */;
import PlusLargeIcon from "PlusLargeIcon" /* 11012 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const jsx = fn(21).jsx;
let closure_4 = { code: "(function MediaKeyboardButtonIconTsx1(){let[keyboard,KeyboardTypes,withTiming,timingStandard]=this.__closure;const isActive=keyboard===KeyboardTypes.MEDIA||keyboard===KeyboardTypes.APP_LAUNCHER;return{transform:[{rotate:withTiming(isActive?'45deg':'0deg',timingStandard)}]};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx");

export function MediaKeyboardButtonIcon(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const tmp15 = useKeyboardTypeDefault();
    items = [closure_4, tmp15, KeyboardTypes.KeyboardTypes, timing_timing.withTiming, timingPresets.timingStandard];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp, tmp2, tmp3, tmp4, tmp5] = items;
    class MediaKeyboardButtonIconTsx1 {
      constructor() {
        tmp2 = closure_0 === closure_1.MEDIA || tmp === closure_1.APP_LAUNCHER;
        str = "0deg";
        tmp3 = closure_2;
        if (tmp2) {
          str = "45deg";
        }
        obj = { transform: null };
        obj1 = { rotate: tmp3(str, closure_3) };
        items = [];
        items[0] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    const items1 = [tmp2, tmp3, tmp4, tmp5];
    MediaKeyboardButtonIconTsx1.__closure = items1;
    MediaKeyboardButtonIconTsx1.__workletHash = 8539740243314;
    MediaKeyboardButtonIconTsx1.__initData = tmp;
    const animatedStyle = _mod1652.useAnimatedStyle(MediaKeyboardButtonIconTsx1);
    let obj = { style: animatedStyle, children: null };
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj.children = jsx(PlusLargeIcon.PlusLargeIcon, {});
    return jsx(_modDef1652.View, { style: animatedStyle, children: null });
  }
}