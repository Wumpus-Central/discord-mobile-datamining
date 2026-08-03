// === Module 4676: useShineEffectStyles ===

// Module 4676 (useShineEffectStyles)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
function useShineEffectStyles(width, variant) {
  const _require = width;
  let obj = _require(4671);
  const buttonTextColorStyles = obj.useButtonTextColorStyles(variant);
  const obj2 = enabled(689)(buttonTextColorStyles.color);
  const hexResult = enabled(689)(buttonTextColorStyles.color).alpha(0.1).hex();
  enabled = React.useContext(_require(4101).AccessibilityPreferencesContext).reducedMotion.enabled;
  const alphaResult = enabled(689)(buttonTextColorStyles.color).alpha(0.1);
  const fn = function o() {
    if (null == width) {
      let obj = { transform: null };
      const items = [{ translateX: -120 }];
      obj[0] = items;
      let tmp5 = obj;
    } else {
      obj = { transform: null };
      let obj1 = { translateX: null };
      if (enabled) {
        obj1[0] = (tmp - 56) / 2;
        const items1 = [obj1];
        obj[0] = items1;
        tmp5 = obj;
      } else {
        obj = width(outer1_2[6]);
        obj1 = width(outer1_2[6]);
        const obj3 = width(outer1_2[7]);
        const withTimingResult = width(outer1_2[7]).withTiming(-120, { duration: 0 }, "animate-always");
        const obj4 = width(outer1_2[6]);
        obj1[0] = obj.withRepeat(obj1.withSequence(withTimingResult, obj4.withDelay(750, width(outer1_2[7]).withTiming(tmp + 120, { duration: 2000 }, "animate-always"))), -1);
        const items2 = [obj1];
        obj[0] = items2;
        tmp5 = obj;
        const obj5 = width(outer1_2[7]);
      }
    }
    return tmp5;
  };
  obj = { width, SHINE_OFFSCREEN_OFFSET: 120, useReducedMotion: enabled, SHINE_WIDTH: 56, withRepeat: _require(4116).withRepeat, withSequence: _require(4116).withSequence, withTiming: _require(4256).withTiming, withDelay: _require(4116).withDelay, SHINE_INITIAL_ANIMATION_DELAY: 750, SHINE_ANIMATION_DURATION: 2000 };
  fn.__closure = obj;
  fn.__workletHash = 15814138938406;
  fn.__initData = closure_6;
  obj = { shineStyles: null, shineAnimatedStyle: null };
  const animatedStyle = _require(4116).useAnimatedStyle(fn);
  let obj4 = _require(4116);
  let items = [{ rotate: "30deg" }];
  obj[0] = _require(4255).createStyles({ shineContainer: { width: "100%", height: "200%", position: "absolute", overflow: "hidden" }, shine: { width: 56, height: "500%", transform: items, backgroundColor: hexResult, top: "-100%", alignItems: "center" }, shineInner: { width: 16, height: "100%", backgroundColor: hexResult } })();
  obj[1] = animatedStyle;
  return obj;
}
let closure_6 = { code: "function ButtonShineNativeTsx1(){const{width,SHINE_OFFSCREEN_OFFSET,useReducedMotion,SHINE_WIDTH,withRepeat,withSequence,withTiming,withDelay,SHINE_INITIAL_ANIMATION_DELAY,SHINE_ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-SHINE_OFFSCREEN_OFFSET}]};}if(useReducedMotion){const centerOffset=(width-SHINE_WIDTH)/2;return{transform:[{translateX:centerOffset}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-SHINE_OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(SHINE_INITIAL_ANIMATION_DELAY,withTiming(width+SHINE_OFFSCREEN_OFFSET,{duration:SHINE_ANIMATION_DURATION},'animate-always'))),-1)}]};}" };
const result = require("jsxProd").fileFinishedImporting("design/components/Button/native/ButtonShine.native.tsx");

export { useShineEffectStyles };
export const ButtonShine = function ButtonShine(variant) {
  let closure_0;
  const tmp = callback(React.useState(null), 2);
  closure_0 = tmp[1];
  const tmp2 = useShineEffectStyles(tmp[0], variant.variant);
  const shineStyles = tmp2.shineStyles;
  let obj = {
    onLayout(nativeEvent) {
      return callback(nativeEvent.nativeEvent.layout.width);
    },
    style: items,
    children: null
  };
  items = [shineStyles.shineContainer, tmp2.shineAnimatedStyle];
  obj = { style: shineStyles.shine, children: null };
  obj = { style: shineStyles.shineInner };
  obj[1] = jsx(importDefault(4116).View, { style: shineStyles.shineInner });
  obj[2] = jsx(importDefault(4116).View, { style: shineStyles.shineInner });
  return jsx(importDefault(4116).View, { style: shineStyles.shineInner });
};