// === Module 4986: ButtonShine ===

// Module 4986 (ButtonShine)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function useShineEffectStyles(width, variant) {
  _require = width;
  let obj = require("ButtonHooks");
  const buttonTextColorStyles = obj.useButtonTextColorStyles(variant);
  let obj1 = enabled(672)(buttonTextColorStyles.color);
  const hexResult = obj1.alpha(0.1).hex();
  enabled = noop.useContext(require("shared").AccessibilityPreferencesContext).reducedMotion.enabled;
  const alphaResult = obj1.alpha(0.1);
  const fn = function o() {
    if (null == closure_0) {
      let obj = { transform: null };
      const items = [{ translateX: -120 }];
      obj.transform = items;
      let tmp5 = obj;
    } else {
      obj = { transform: null };
      let obj1 = { translateX: null };
      if (enabled) {
        obj1.translateX = (closure_0 - 56) / 2;
        const items1 = [obj1];
        obj.transform = items1;
        tmp5 = obj;
      } else {
        obj = ReanimatedRexport;
        obj1 = ReanimatedRexport;
        const withTimingResult = timing.withTiming(-120, { duration: 0 }, "animate-always");
        const obj4 = ReanimatedRexport;
        obj1.translateX = obj.withRepeat(obj1.withSequence(withTimingResult, obj4.withDelay(750, timing.withTiming(closure_0 + 120, { duration: 2000 }, "animate-always"))), -1);
        const items2 = [obj1];
        obj.transform = items2;
        tmp5 = obj;
      }
    }
    return tmp5;
  };
  obj = { width, SHINE_OFFSCREEN_OFFSET: 120, useReducedMotion: enabled, SHINE_WIDTH: 56, withRepeat: require("ReanimatedRexport").withRepeat, withSequence: require("ReanimatedRexport").withSequence, withTiming: require("timing").withTiming, withDelay: require("ReanimatedRexport").withDelay, SHINE_INITIAL_ANIMATION_DELAY: 750, SHINE_ANIMATION_DURATION: 2000 };
  fn.__closure = obj;
  fn.__workletHash = 15814138938406;
  fn.__initData = __initData;
  obj = { shineStyles: null, shineAnimatedStyle: null };
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  let obj4 = require("ReanimatedRexport");
  obj1 = { shineContainer: { width: "100%", height: "200%", position: "absolute", overflow: "hidden" }, shine: null, shineInner: { width: 16, height: "100%", backgroundColor: hexResult } };
  const size = { width: 56, height: "500%", transform: null, backgroundColor: hexResult, top: "-100%", alignItems: "center" };
  let items = [{ rotate: "30deg" }];
  size.transform = items;
  obj1.shine = size;
  obj.shineStyles = require("createStyles").createStyles(obj1)();
  obj.shineAnimatedStyle = animatedStyle;
  return obj;
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
  let obj = {
    onLayout(nativeEvent) {
      return closure_0(nativeEvent.nativeEvent.layout.width);
    },
    style: null,
    children: null
  };
  const items = [shineStyles.shineContainer, tmp2.shineAnimatedStyle];
  obj.style = items;
  obj = {
    style: shineStyles.shine,
    children: jsx(ReanimatedRexportDefault.View, {
      onLayout(nativeEvent) {
        return closure_0(nativeEvent.nativeEvent.layout.width);
      },
      style: null,
      children: null
    })
  };
  obj = { style: shineStyles.shineInner };
  obj.children = jsx(ReanimatedRexportDefault.View, { style: shineStyles.shineInner });
  return jsx(ReanimatedRexportDefault.View, { style: shineStyles.shineInner });
};