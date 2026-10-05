// discord_app/modules/chat_input/native/action_buttons/useChatInputFloatingWidth.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import ChatInputConstants from "../ChatInputConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let expanded, set, set2;

let closure_3 = ChatInputConstants.CHAT_INPUT_FLOATING_SLIDE_TIMING_CONFIG;
let closure_4 = {
  code: "function useChatInputFloatingWidthTsx1(){const{collapsedWidth,expandedWidth,progress}=this.__closure;return{width:collapsedWidth+(expandedWidth-collapsedWidth)*progress.get()};}",
};
const __initData = {
  code: "function useChatInputFloatingWidthTsx2(){const{collapsedWidth,expandedWidth,progress}=this.__closure;return{width:collapsedWidth+(expandedWidth-collapsedWidth)*progress.get()};}",
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (expanded) => {
      let collapsedWidth;
      const tmp2 = collapsedWidth;
      let obj = expanded(collapsedWidth[3]);
      const cResult = obj.c(7);
      expanded = expanded.expanded;
      collapsedWidth = expanded.collapsedWidth;
      const expandedWidth = expanded.expandedWidth;
      const enterDelayMs = expanded.enterDelayMs;
      let num = 0;
      if (undefined !== enterDelayMs) {
        num = enterDelayMs;
      }
      let num2 = 0;
      const useSharedValue = expanded(tmp2[4]).useSharedValue;
      expanded(tmp2[4]);
      if (expanded) {
        num2 = 1;
      }
      const sharedValue = useSharedValue(num2);
      if (cResult[0] === num) {
        if (cResult[1] === expanded) {
          let tmp6;
          let tmp7;
          let tmp12;
          if (cResult[2] === sharedValue) {
            tmp6 = cResult[3];
            tmp7 = cResult[4];
          }
          const effect = expandedWidth.useEffect(tmp6, tmp7);
          const fn2 = function w() {
            let diff;
            const obj = { width: collapsedWidth + diff * sharedValue.get() };
            diff = expandedWidth - collapsedWidth;
            return obj;
          };
          const obj2 = { collapsedWidth, expandedWidth, progress: sharedValue };
          fn2.__closure = obj2;
          fn2.__workletHash = 2289574047387;
          fn2.__initData = sharedValue;
          const tmpResult2 = expanded(tmp2[4]);
          const animatedStyle = tmpResult2.useAnimatedStyle(fn2);
          if (cResult[5] !== animatedStyle) {
            const obj3 = { animatedStyle };
            cResult[5] = animatedStyle;
            cResult[6] = obj3;
            tmp12 = obj3;
          } else {
            tmp12 = cResult[6];
          }
          return tmp12;
        }
      }
      const fn = function l() {
        if (expanded) {
          if (0 > 0) {
            set2 = sharedValue.set;
            const withDelay = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const obj = timing;
            set2(withDelay(tmp2, obj.withTiming(1, closure_3, "respect-motion-settings")));
          }
        }
        let num2 = 0;
        set = sharedValue.set;
        const withTiming = timing.withTiming;
        timing;
        if (expanded) {
          num2 = 1;
        }
        const result = set(withTiming(num2, closure_3, "respect-motion-settings"));
      };
      const items = [expanded, num, sharedValue];
      cResult[0] = num;
      cResult[1] = expanded;
      cResult[2] = sharedValue;
      cResult[3] = fn;
      cResult[4] = items;
      tmp7 = items;
      tmp6 = fn;
    }
  : (expanded) => {
      let fn;
      let tmpResult;
      expanded = expanded.expanded;
      const collapsedWidth = expanded.collapsedWidth;
      const expandedWidth = expanded.expandedWidth;
      let num = expanded.enterDelayMs;
      if (num === undefined) {
        num = 0;
      }
      let sharedValue;
      const tmp2 = collapsedWidth;
      let num2 = 0;
      const useSharedValue = expanded(collapsedWidth[4]).useSharedValue;
      expanded(collapsedWidth[4]);
      const tmp = expanded;
      if (expanded) {
        num2 = 1;
      }
      sharedValue = useSharedValue(num2);
      const items = [expanded, num, sharedValue];
      const effect = expandedWidth.useEffect(() => {
        if (expanded) {
          if (0 > 0) {
            set2 = sharedValue.set;
            const withDelay = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const obj = timing;
            set2(withDelay(tmp2, obj.withTiming(1, closure_3, "respect-motion-settings")));
          }
        }
        let num2 = 0;
        set = sharedValue.set;
        const withTiming = timing.withTiming;
        timing;
        if (expanded) {
          num2 = 1;
        }
        const result = set(withTiming(num2, closure_3, "respect-motion-settings"));
      }, items);
      let obj = { animatedStyle: tmpResult.useAnimatedStyle(fn) };
      fn = function c() {
        let diff;
        const obj = { width: collapsedWidth + diff * sharedValue.get() };
        diff = expandedWidth - collapsedWidth;
        return obj;
      };
      fn.__closure = { collapsedWidth, expandedWidth, progress: sharedValue };
      fn.__workletHash = 11629489974776;
      fn.__initData = __initData;
      tmpResult = tmp(tmp2[4]);
      return obj;
    };
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingWidth.tsx");

export default tmp2;
