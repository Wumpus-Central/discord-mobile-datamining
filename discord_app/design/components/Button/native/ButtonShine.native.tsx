// discord_app/design/components/Button/native/ButtonShine.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import timing from "../../../animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const jsx = fn(21).jsx;
let c6 = 2000;
let c7 = 750;
let c8 = 120;
let c9 = 56;
const __initData = {
  code: 'function ButtonShineNativeTsx1(){const{width,SHINE_OFFSCREEN_OFFSET,useReducedMotion,SHINE_WIDTH,withRepeat,withSequence,withTiming,withDelay,SHINE_INITIAL_ANIMATION_DELAY,SHINE_ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-SHINE_OFFSCREEN_OFFSET}]};}if(useReducedMotion){const centerOffset=(width-SHINE_WIDTH)/2;return{transform:[{translateX:centerOffset}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-SHINE_OFFSCREEN_OFFSET,{duration:0},"animate-always"),withDelay(SHINE_INITIAL_ANIMATION_DELAY,withTiming(width+SHINE_OFFSCREEN_OFFSET,{duration:SHINE_ANIMATION_DURATION},"animate-always"))),-1)}]};}',
};
const __initData2 = {
  code: "function ButtonShineNativeTsx2(){const{width,SHINE_OFFSCREEN_OFFSET,useReducedMotion,SHINE_WIDTH,withRepeat,withSequence,withTiming,withDelay,SHINE_INITIAL_ANIMATION_DELAY,SHINE_ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-SHINE_OFFSCREEN_OFFSET}]};}if(useReducedMotion){const centerOffset=(width-SHINE_WIDTH)/2;return{transform:[{translateX:centerOffset}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-SHINE_OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(SHINE_INITIAL_ANIMATION_DELAY,withTiming(width+SHINE_OFFSCREEN_OFFSET,{duration:SHINE_ANIMATION_DURATION},'animate-always'))),-1)}]};}",
};
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShineEffectStyles(width, arg1) {
      _require = width;
      const cResult = require("c").c(3);
      let obj = require("c");
      const buttonTextColorStyles = require("ButtonHooks").useButtonTextColorStyles(arg1);
      let obj2 = require("ButtonHooks");
      let obj3 = enabled(683)(buttonTextColorStyles.color);
      const hexResult = enabled(683)(buttonTextColorStyles.color).alpha(0.1).hex();
      enabled = noop.useContext(require("shared").AccessibilityPreferencesContext).reducedMotion.enabled;
      const alphaResult = enabled(683)(buttonTextColorStyles.color).alpha(0.1);
      class I {
        constructor() {
          tmp = closure_0;
          if (null == closure_0) {
            obj1 = { transform: null };
            items = [];
            items[0] = { translateX: -120 };
            obj1.transform = items;
            tmp8 = obj1;
          } else {
            tmp10 = enabled;
            obj10 = { transform: null };
            obj11 = { translateX: null };
            if (enabled) {
              tmp9 = c9;
              num3 = 2;
              obj11.translateX = (tmp - c9) / 2;
              items1 = [];
              items1[0] = obj11;
              obj10.transform = items1;
              tmp8 = obj10;
            } else {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[8]);
              obj2 = closure_0(closure_2[8]);
              obj3 = closure_0(closure_2[9]);
              str = "animate-always";
              num = -120;
              withTimingResult = obj3.withTiming(-120, { duration: 0 }, "animate-always");
              obj4 = closure_0(closure_2[8]);
              tmp5 = c7;
              obj5 = closure_0(closure_2[9]);
              tmp6 = c8;
              obj12 = { duration: null };
              tmp7 = c6;
              obj12.duration = c6;
              num2 = -1;
              obj11.translateX = obj.withRepeat(
                obj2.withSequence(
                  withTimingResult,
                  obj4.withDelay(c7, obj5.withTiming(tmp + c8, obj12, "animate-always")),
                ),
                -1,
              );
              items2 = [];
              items2[0] = obj11;
              obj10.transform = items2;
              tmp8 = obj10;
            }
          }
          return tmp8;
        }
      }
      let obj5 = require("ReanimatedRexport");
      I.__closure = {
        width,
        SHINE_OFFSCREEN_OFFSET,
        useReducedMotion: enabled,
        SHINE_WIDTH: v56,
        withRepeat: require("ReanimatedRexport").withRepeat,
        withSequence: require("ReanimatedRexport").withSequence,
        withTiming: require("timing").withTiming,
        withDelay: require("ReanimatedRexport").withDelay,
        SHINE_INITIAL_ANIMATION_DELAY,
        SHINE_ANIMATION_DURATION: v2000,
      };
      I.__workletHash = 15798233523302;
      I.__initData = __initData;
      const animatedStyle = obj5.useAnimatedStyle(I);
      let obj4 = {
        width,
        SHINE_OFFSCREEN_OFFSET,
        useReducedMotion: enabled,
        SHINE_WIDTH: v56,
        withRepeat: require("ReanimatedRexport").withRepeat,
        withSequence: require("ReanimatedRexport").withSequence,
        withTiming: require("timing").withTiming,
        withDelay: require("ReanimatedRexport").withDelay,
        SHINE_INITIAL_ANIMATION_DELAY,
        SHINE_ANIMATION_DURATION: v2000,
      };
      let obj6 = {
        shineContainer: { width: "100%", height: "200%", position: "absolute", overflow: "hidden" },
        shine: null,
        shineInner: { width: 16, height: "100%", backgroundColor: hexResult },
      };
      const size = {
        width: v56,
        height: "500%",
        transform: null,
        backgroundColor: hexResult,
        top: "-100%",
        alignItems: "center",
      };
      let items = [{ rotate: "30deg" }];
      size.transform = items;
      obj6.shine = size;
      const tmp5 = require("createStyles").createStyles(obj6)();
      if (cResult[0] === animatedStyle) {
        if (cResult[1] === tmp5) {
          let tmp6 = cResult[2];
        }
        return tmp6;
      }
      let obj8 = { shineStyles: tmp5, shineAnimatedStyle: animatedStyle };
      cResult[0] = animatedStyle;
      cResult[1] = tmp5;
      cResult[2] = obj8;
      tmp6 = obj8;
    }
  : function useShineEffectStyles(width, arg1) {
      _require = width;
      const buttonTextColorStyles = require("ButtonHooks").useButtonTextColorStyles(arg1);
      let obj = require("ButtonHooks");
      let obj2 = enabled(683)(buttonTextColorStyles.color);
      const hexResult = enabled(683)(buttonTextColorStyles.color).alpha(0.1).hex();
      enabled = noop.useContext(require("shared").AccessibilityPreferencesContext).reducedMotion.enabled;
      const alphaResult = enabled(683)(buttonTextColorStyles.color).alpha(0.1);
      const fn = function u() {
        if (null == closure_0) {
          const obj6 = { transform: null };
          const items = [{ translateX: -120 }];
          obj6.transform = items;
          let tmp8 = obj6;
        } else {
          const obj7 = { transform: null };
          const obj8 = { translateX: null };
          if (enabled) {
            obj8.translateX = (closure_0 - c9) / 2;
            const items1 = [obj8];
            obj7.transform = items1;
            tmp8 = obj7;
          } else {
            const obj = ReanimatedRexport;
            const obj2 = ReanimatedRexport;
            const withTimingResult = timing.withTiming(-120, { duration: 0 }, "animate-always");
            const obj4 = ReanimatedRexport;
            const obj9 = { duration };
            obj8.translateX = obj.withRepeat(
              obj2.withSequence(
                withTimingResult,
                obj4.withDelay(c7, timing.withTiming(closure_0 + c8, obj9, "animate-always")),
              ),
              -1,
            );
            const items2 = [obj8];
            obj7.transform = items2;
            tmp8 = obj7;
          }
        }
        return tmp8;
      };
      let obj4 = require("ReanimatedRexport");
      fn.__closure = {
        width,
        SHINE_OFFSCREEN_OFFSET,
        useReducedMotion: enabled,
        SHINE_WIDTH: v56,
        withRepeat: require("ReanimatedRexport").withRepeat,
        withSequence: require("ReanimatedRexport").withSequence,
        withTiming: require("timing").withTiming,
        withDelay: require("ReanimatedRexport").withDelay,
        SHINE_INITIAL_ANIMATION_DELAY,
        SHINE_ANIMATION_DURATION: v2000,
      };
      fn.__workletHash = 12562385961925;
      fn.__initData = __initData2;
      let obj5 = { shineStyles: null, shineAnimatedStyle: null };
      const animatedStyle = obj4.useAnimatedStyle(fn);
      let obj3 = {
        width,
        SHINE_OFFSCREEN_OFFSET,
        useReducedMotion: enabled,
        SHINE_WIDTH: v56,
        withRepeat: require("ReanimatedRexport").withRepeat,
        withSequence: require("ReanimatedRexport").withSequence,
        withTiming: require("timing").withTiming,
        withDelay: require("ReanimatedRexport").withDelay,
        SHINE_INITIAL_ANIMATION_DELAY,
        SHINE_ANIMATION_DURATION: v2000,
      };
      let obj6 = {
        shineContainer: { width: "100%", height: "200%", position: "absolute", overflow: "hidden" },
        shine: null,
        shineInner: { width: 16, height: "100%", backgroundColor: hexResult },
      };
      const size = {
        width: v56,
        height: "500%",
        transform: null,
        backgroundColor: hexResult,
        top: "-100%",
        alignItems: "center",
      };
      let items = [{ rotate: "30deg" }];
      size.transform = items;
      obj6.shine = size;
      obj5.shineStyles = require("createStyles").createStyles(obj6)();
      obj5.shineAnimatedStyle = animatedStyle;
      return obj5;
    };
let closure_12 = tmp2;
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ButtonShine.native.tsx");

export const useShineEffectStyles = tmp2;
export const ButtonShine = ReactCompilerGating.isReactCompilerEnabled()
  ? function ButtonShine(variant) {
      const cResult = c.c(12);
      const tmp3 = _slicedToArray(noop.useState(null), 2);
      closure_0 = tmp3[1];
      ({ shineStyles, shineAnimatedStyle } = closure_12(tmp3[0], variant.variant));
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(nativeEvent) {
          return closure_0(nativeEvent.nativeEvent.layout.width);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === shineAnimatedStyle) {
        if (cResult[2] === shineStyles.shineContainer) {
          let tmp6 = cResult[3];
        }
        if (cResult[4] !== shineStyles.shineInner) {
          const obj2 = { style: shineStyles.shineInner };
          const tmp10 = jsx(ReanimatedRexportDefault.View, { style: shineStyles.shineInner });
          cResult[4] = shineStyles.shineInner;
          cResult[5] = tmp10;
          let tmp7 = tmp10;
        } else {
          tmp7 = cResult[5];
        }
        if (cResult[6] === shineStyles.shine) {
          if (cResult[7] === tmp7) {
            let tmp11 = cResult[8];
          }
          if (cResult[9] === tmp6) {
            if (cResult[10] === tmp11) {
              let tmp15 = cResult[11];
            }
            return tmp15;
          }
          const obj3 = { onLayout: first, style: tmp6, children: tmp11 };
          const tmp18 = jsx(ReanimatedRexportDefault.View, { onLayout: first, style: tmp6, children: tmp11 });
          cResult[9] = tmp6;
          cResult[10] = tmp11;
          cResult[11] = tmp18;
          tmp15 = tmp18;
        }
        const obj4 = { style: shineStyles.shine, children: tmp7 };
        const tmp14 = jsx(ReanimatedRexportDefault.View, { style: shineStyles.shine, children: tmp7 });
        cResult[6] = shineStyles.shine;
        cResult[7] = tmp7;
        cResult[8] = tmp14;
        tmp11 = tmp14;
      }
      const items = [shineStyles.shineContainer, shineAnimatedStyle];
      cResult[1] = shineAnimatedStyle;
      cResult[2] = shineStyles.shineContainer;
      cResult[3] = items;
      tmp6 = items;
      const tmp4 = closure_12(tmp3[0], variant.variant);
    }
  : function ButtonShine(variant) {
      const tmp = _slicedToArray(noop.useState(null), 2);
      closure_0 = tmp[1];
      const tmp2 = closure_12(tmp[0], variant.variant);
      const shineStyles = tmp2.shineStyles;
      const obj = {
        onLayout(nativeEvent) {
          return closure_0(nativeEvent.nativeEvent.layout.width);
        },
        style: null,
        children: null,
      };
      const items = [shineStyles.shineContainer, tmp2.shineAnimatedStyle];
      obj.style = items;
      const obj2 = {
        style: shineStyles.shine,
        children: jsx(ReanimatedRexportDefault.View, { style: shineStyles.shineInner }),
      };
      obj.children = jsx(ReanimatedRexportDefault.View, {
        style: shineStyles.shine,
        children: jsx(ReanimatedRexportDefault.View, { style: shineStyles.shineInner }),
      });
      return jsx(ReanimatedRexportDefault.View, {
        onLayout(nativeEvent) {
          return closure_0(nativeEvent.nativeEvent.layout.width);
        },
        style: null,
        children: null,
      });
    };
