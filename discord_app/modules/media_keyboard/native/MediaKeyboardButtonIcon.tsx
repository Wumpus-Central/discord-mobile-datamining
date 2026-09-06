// discord_app/modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import useKeyboardTypeDefault from "../../keyboard/native/useKeyboardType.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const __initData = {
  code: "function MediaKeyboardButtonIconTsx1(){const{keyboard,KeyboardTypes,withTiming,timingStandard}=this.__closure;const isActive=keyboard===KeyboardTypes.MEDIA||keyboard===KeyboardTypes.APP_LAUNCHER;return{transform:[{rotate:withTiming(isActive?'45deg':'0deg',timingStandard)}]};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx");

export const MediaKeyboardButtonIcon = function MediaKeyboardButtonIcon(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const tmp5 = useKeyboardTypeDefault();
    _require = tmp5;
    require("ReanimatedRexport");
    const fn = function s() {
      const tmp4 =
        closure_0 === KeyboardTypes.KeyboardTypes.MEDIA || closure_0 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
      let str = "0deg";
      if (tmp4) {
        str = "45deg";
      }
      let obj = { transform: null };
      obj = { rotate: timing.withTiming(str, timingPresets.timingStandard) };
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    let obj = {
      keyboard: tmp5,
      KeyboardTypes: require("KeyboardTypes").KeyboardTypes,
      withTiming: require("timing").withTiming,
      timingStandard: require("timingPresets").timingStandard,
    };
    fn.__closure = obj;
    fn.__workletHash = 10698563185643;
    fn.__initData = __initData;
    const animatedStyle = obj.useAnimatedStyle(fn);
    obj = { style: animatedStyle, children: null };
    const obj1 = {};
    const merged1 = Object.assign(merged);
    obj.children = jsx(require("PlusLargeIcon").PlusLargeIcon, {});
    return jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: null });
  }
};
