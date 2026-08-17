// discord_app/design/components/Button/native/ButtonShine.native.tsx
import _modDef4115 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { ReanimatedRexport } from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import { CONFIG_NEVER_ANIMATE_TIMING } from "../../../animation/reanimated/timing/timing.tsx";
import { AccessibilityAnnouncer } from "../../../shared.tsx";
import { createCacheKey } from "../../Styles/native/createStyles.tsx";
import { styleProperties } from "ButtonHooks.native.tsx";

const require = arg1;
function useShineEffectStyles(width, variant) {
  const _require = width;
  let obj = _styleProperties;
  const buttonTextColorStyles = obj.useButtonTextColorStyles(variant);
  const obj2 = enabled(689)(buttonTextColorStyles.color);
  const hexResult = enabled(689)(buttonTextColorStyles.color).alpha(0.1).hex();
  enabled = React.useContext(_AccessibilityAnnouncer.AccessibilityPreferencesContext).reducedMotion.enabled;
  const alphaResult = enabled(689)(buttonTextColorStyles.color).alpha(0.1);
  const fn = function o() {
    if (null == width) {
      let obj = { transform: null };
      const items = [{ translateX: -120 }];
      obj[0] = items;
      let tmp5 = obj;
    } else {
      obj = { transform: null };
      obj1 = { translateX: null };
      if (enabled) {
        obj1[0] = (tmp - 56) / 2;
        const items1 = [obj1];
        obj[0] = items1;
        tmp5 = obj;
      } else {
        obj = width(closure_1_2[6]);
        obj1 = width(closure_1_2[6]);
        const obj3 = width(closure_1_2[7]);
        const withTimingResult = width(closure_1_2[7]).withTiming(-120, { duration: 0 }, "animate-always");
        const obj4 = width(closure_1_2[6]);
        obj1[0] = obj.withRepeat(obj1.withSequence(withTimingResult, obj4.withDelay(750, width(closure_1_2[7]).withTiming(tmp + 120, { duration: 2000 }, "animate-always"))), -1);
        const items2 = [obj1];
        obj[0] = items2;
        tmp5 = obj;
        const obj5 = width(closure_1_2[7]);
      }
    }
    return tmp5;
  };
  obj = { width, SHINE_OFFSCREEN_OFFSET: 120, useReducedMotion: enabled, SHINE_WIDTH: 56, withRepeat: _ReanimatedRexport.withRepeat, withSequence: _ReanimatedRexport.withSequence, withTiming: _CONFIG_NEVER_ANIMATE_TIMING.withTiming, withDelay: _ReanimatedRexport.withDelay, SHINE_INITIAL_ANIMATION_DELAY: 750, SHINE_ANIMATION_DURATION: 2000 };
  fn.__closure = obj;
  fn.__workletHash = 15814138938406;
  fn.__initData = closure_6;
  obj = { shineStyles: null, shineAnimatedStyle: null };
  const animatedStyle = _ReanimatedRexport.useAnimatedStyle(fn);
  let obj4 = _ReanimatedRexport;
  let items = [{ rotate: "30deg" }];
  obj[0] = _createCacheKey.createStyles({ shineContainer: { width: "100%", height: "200%", position: "absolute", overflow: "hidden" }, shine: { width: 56, height: "500%", transform: items, backgroundColor: hexResult, top: "-100%", alignItems: "center" }, shineInner: { width: 16, height: "100%", backgroundColor: hexResult } })();
  obj[1] = animatedStyle;
  return obj;
}
let closure_6 = { code: "function ButtonShineNativeTsx1(){const{width,SHINE_OFFSCREEN_OFFSET,useReducedMotion,SHINE_WIDTH,withRepeat,withSequence,withTiming,withDelay,SHINE_INITIAL_ANIMATION_DELAY,SHINE_ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-SHINE_OFFSCREEN_OFFSET}]};}if(useReducedMotion){const centerOffset=(width-SHINE_WIDTH)/2;return{transform:[{translateX:centerOffset}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-SHINE_OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(SHINE_INITIAL_ANIMATION_DELAY,withTiming(width+SHINE_OFFSCREEN_OFFSET,{duration:SHINE_ANIMATION_DURATION},'animate-always'))),-1)}]};}" };
const result = require("set").fileFinishedImporting("design/components/Button/native/ButtonShine.native.tsx");

export { useShineEffectStyles };
export const ButtonShine = function ButtonShine(variant) {
  closure_0 = undefined;
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
  obj = {
    style: shineStyles.shine,
    children: jsx(_modDef4115.View, {
      onLayout(nativeEvent) {
        return callback(nativeEvent.nativeEvent.layout.width);
      },
      style: items,
      children: null
    })
  };
  obj = { style: shineStyles.shineInner };
  obj[2] = jsx(_modDef4115.View, { style: shineStyles.shineInner });
  return jsx(_modDef4115.View, { style: shineStyles.shineInner });
};