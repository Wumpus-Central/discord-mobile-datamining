// === Module 5067: ButtonShine ===

// Module 5067 (ButtonShine)
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
import timing from "timing" /* 4637 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function useShineEffectStyles(width, variant) {
  _require = width;
  const buttonTextColorStyles = require("ButtonHooks").useButtonTextColorStyles(variant);
  let obj = require("ButtonHooks");
  let obj2 = enabled(672)(buttonTextColorStyles.color);
  const hexResult = enabled(672)(buttonTextColorStyles.color).alpha(0.1).hex();
  enabled = noop.useContext(require("shared").AccessibilityPreferencesContext).reducedMotion.enabled;
  const alphaResult = enabled(672)(buttonTextColorStyles.color).alpha(0.1);
  const fn = function o() {
    if (null == closure_0) {
      const obj6 = { transform: null };
      const items = [{ translateX: -120 }];
      obj6.transform = items;
      let tmp5 = obj6;
    } else {
      const obj7 = { transform: null };
      const obj8 = { translateX: null };
      if (enabled) {
        obj8.translateX = (closure_0 - 56) / 2;
        const items1 = [obj8];
        obj7.transform = items1;
        tmp5 = obj7;
      } else {
        const obj = ReanimatedRexport;
        const obj2 = ReanimatedRexport;
        const withTimingResult = timing.withTiming(-120, { duration: 0 }, "animate-always");
        const obj4 = ReanimatedRexport;
        obj8.translateX = obj.withRepeat(obj2.withSequence(withTimingResult, obj4.withDelay(750, timing.withTiming(closure_0 + 120, { duration: 2000 }, "animate-always"))), -1);
        const items2 = [obj8];
        obj7.transform = items2;
        tmp5 = obj7;
      }
    }
    return tmp5;
  };
  let obj4 = require("ReanimatedRexport");
  fn.__closure = { width, SHINE_OFFSCREEN_OFFSET: 120, useReducedMotion: enabled, SHINE_WIDTH: 56, withRepeat: require("ReanimatedRexport").withRepeat, withSequence: require("ReanimatedRexport").withSequence, withTiming: require("timing").withTiming, withDelay: require("ReanimatedRexport").withDelay, SHINE_INITIAL_ANIMATION_DELAY: 750, SHINE_ANIMATION_DURATION: 2000 };
  fn.__workletHash = 15814138938406;
  fn.__initData = __initData;
  let obj5 = { shineStyles: null, shineAnimatedStyle: null };
  const animatedStyle = obj4.useAnimatedStyle(fn);
  let obj3 = { width, SHINE_OFFSCREEN_OFFSET: 120, useReducedMotion: enabled, SHINE_WIDTH: 56, withRepeat: require("ReanimatedRexport").withRepeat, withSequence: require("ReanimatedRexport").withSequence, withTiming: require("timing").withTiming, withDelay: require("ReanimatedRexport").withDelay, SHINE_INITIAL_ANIMATION_DELAY: 750, SHINE_ANIMATION_DURATION: 2000 };
  let obj6 = { shineContainer: { width: "100%", height: "200%", position: "absolute", overflow: "hidden" }, shine: null, shineInner: { width: 16, height: "100%", backgroundColor: hexResult } };
  const size = { width: 56, height: "500%", transform: null, backgroundColor: hexResult, top: "-100%", alignItems: "center" };
  let items = [{ rotate: "30deg" }];
  size.transform = items;
  obj6.shine = size;
  obj5.shineStyles = require("createStyles").createStyles(obj6)();
  obj5.shineAnimatedStyle = animatedStyle;
  return obj5;
}
const jsx = fn(21).jsx;
const __initData = { code: "function ButtonShineNativeTsx1(){const{width,SHINE_OFFSCREEN_OFFSET,useReducedMotion,SHINE_WIDTH,withRepeat,withSequence,withTiming,withDelay,SHINE_INITIAL_ANIMATION_DELAY,SHINE_ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-SHINE_OFFSCREEN_OFFSET}]};}if(useReducedMotion){const centerOffset=(width-SHINE_WIDTH)/2;return{transform:[{translateX:centerOffset}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-SHINE_OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(SHINE_INITIAL_ANIMATION_DELAY,withTiming(width+SHINE_OFFSCREEN_OFFSET,{duration:SHINE_ANIMATION_DURATION},'animate-always'))),-1)}]};}" };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ButtonShine.native.tsx");

export { useShineEffectStyles };
export const ButtonShine = function ButtonShine(variant) {
  const tmp = _slicedToArray(noop.useState(null), 2);
  closure_0 = tmp[1];
  const tmp2 = useShineEffectStyles(tmp[0], variant.variant);
  const shineStyles = tmp2.shineStyles;
  const obj = {
    onLayout(nativeEvent) {
      return closure_0(nativeEvent.nativeEvent.layout.width);
    },
    style: null,
    children: null
  };
  const items = [shineStyles.shineContainer, tmp2.shineAnimatedStyle];
  obj.style = items;
  const obj2 = { style: shineStyles.shine, children: jsx(ReanimatedRexportDefault.View, { style: shineStyles.shineInner }) };
  obj.children = jsx(ReanimatedRexportDefault.View, { style: shineStyles.shine, children: jsx(ReanimatedRexportDefault.View, { style: shineStyles.shineInner }) });
  return jsx(ReanimatedRexportDefault.View, {
    onLayout(nativeEvent) {
      return closure_0(nativeEvent.nativeEvent.layout.width);
    },
    style: null,
    children: null
  });
};