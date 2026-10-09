// discord_app/modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import useKeyboardTypeDefault from "../../keyboard/native/useKeyboardType.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import _objectDestructuringEmpty from "../../../../_runtime/11893__objectDestructuringEmpty.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const __initData = {
  code: 'function MediaKeyboardButtonIconTsx1(){const{keyboard,KeyboardTypes,withTiming,timingStandard}=this.__closure;const isActive=keyboard===KeyboardTypes.MEDIA||keyboard===KeyboardTypes.APP_LAUNCHER;return{transform:[{rotate:withTiming(isActive?"45deg":"0deg",timingStandard)}]};}',
};
const __initData2 = {
  code: "function MediaKeyboardButtonIconTsx2(){const{keyboard,KeyboardTypes,withTiming,timingStandard}=this.__closure;const isActive=keyboard===KeyboardTypes.MEDIA||keyboard===KeyboardTypes.APP_LAUNCHER;return{transform:[{rotate:withTiming(isActive?'45deg':'0deg',timingStandard)}]};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardButtonIcon.tsx");

export const MediaKeyboardButtonIcon = ReactCompilerGating.isReactCompilerEnabled()
  ? function MediaKeyboardButtonIcon(arg0) {
      const cResult = require("c").c(7);
      if (cResult[0] !== arg0) {
        const _Object = Object;
        _objectDestructuringEmpty(arg0);
        const merged = Object.assign({}, arg0);
        cResult[0] = arg0;
        cResult[1] = merged;
        let tmp4 = merged;
      } else {
        tmp4 = cResult[1];
      }
      const tmp10 = useKeyboardTypeDefault();
      _require = tmp10;
      let obj = require("c");
      const fn = function b() {
        const tmp4 =
          closure_0 === KeyboardTypes.KeyboardTypes.MEDIA || closure_0 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
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
      const tmpResult = require("ReanimatedRexport");
      fn.__closure = {
        keyboard: tmp10,
        KeyboardTypes: require("KeyboardTypes").KeyboardTypes,
        withTiming: require("timing").withTiming,
        timingStandard: require("timingPresets").timingStandard,
      };
      fn.__workletHash = 798529944651;
      fn.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(fn);
      if (cResult[2] !== tmp4) {
        const obj3 = {};
        const merged1 = Object.assign(tmp4);
        const tmp17 = jsx(tmp(10275).PlusLargeIcon, {});
        cResult[2] = tmp4;
        cResult[3] = tmp17;
        let tmp12 = tmp17;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === animatedStyle) {
        if (cResult[5] === tmp12) {
          let tmp18 = cResult[6];
        }
        return tmp18;
      }
      const tmp19 = jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: tmp12 });
      cResult[4] = animatedStyle;
      cResult[5] = tmp12;
      cResult[6] = tmp19;
      tmp18 = tmp19;
      const obj2 = {
        keyboard: tmp10,
        KeyboardTypes: require("KeyboardTypes").KeyboardTypes,
        withTiming: require("timing").withTiming,
        timingStandard: require("timingPresets").timingStandard,
      };
    }
  : function MediaKeyboardButtonIcon(arg0) {
      if (arg0 == null) {
        throw new TypeError("Cannot destructure 'undefined' or 'null'.");
      } else {
        const merged = Object.assign(arg0, undefined);
        const tmp5 = useKeyboardTypeDefault();
        _require = tmp5;
        const fn = function o() {
          const tmp4 =
            closure_0 === KeyboardTypes.KeyboardTypes.MEDIA || closure_0 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
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
        const obj2 = {
          keyboard: tmp5,
          KeyboardTypes: require("KeyboardTypes").KeyboardTypes,
          withTiming: require("timing").withTiming,
          timingStandard: require("timingPresets").timingStandard,
        };
        fn.__closure = obj2;
        fn.__workletHash = 6550163329544;
        fn.__initData = __initData2;
        const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
        const obj3 = { style: animatedStyle, children: null };
        const obj4 = {};
        const merged1 = Object.assign(merged);
        obj3.children = jsx(require("PlusLargeIcon").PlusLargeIcon, {});
        return jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: null });
      }
    };
