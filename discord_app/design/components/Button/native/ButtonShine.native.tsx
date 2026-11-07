// === Module 5770: ButtonShine ===

// Module 5770 (ButtonShine)
import _modDef671 from "module_671" /* 671 */;
import _mod1652 from "module_1652" /* 1652 */;
import createStyles from "createStyles" /* 5140 */;
import shared from "shared" /* 5147 */;
import timing_timing from "timing/timing" /* 5370 */;
import ButtonHooks from "ButtonHooks" /* 5765 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
function useShineEffectStyles(arg0, variant) {
  const buttonTextColorStyles = ButtonHooks.useButtonTextColorStyles(variant);
  let obj2 = _modDef671(buttonTextColorStyles.color);
  const hexResult = _modDef671(buttonTextColorStyles.color).alpha(0.1).hex();
  const alphaResult = _modDef671(buttonTextColorStyles.color).alpha(0.1);
  items = [_undefined3, arg0, 120, noop.useContext(shared.AccessibilityPreferencesContext).reducedMotion.enabled, 56, _mod1652.withRepeat, _mod1652.withSequence, timing_timing.withTiming, _mod1652.withDelay, 750, 2000];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  class ButtonShineNativeTsx1 {
    constructor() {
      tmp = closure_0;
      if (null == closure_0) {
        obj1 = { transform: null };
        obj6 = { translateX: null };
        tmp12 = closure_1;
        obj6.translateX = -closure_1;
        items = [];
        items[0] = obj6;
        obj1.transform = items;
        tmp10 = obj1;
      } else {
        tmp13 = closure_2;
        obj7 = { transform: null };
        obj8 = { translateX: null };
        if (closure_2) {
          tmp11 = closure_3;
          num2 = 2;
          obj8.translateX = (tmp - closure_3) / 2;
          items1 = [];
          items1[0] = obj8;
          obj7.transform = items1;
          tmp10 = obj7;
        } else {
          tmp2 = closure_4;
          tmp3 = closure_5;
          tmp4 = closure_6;
          tmp5 = closure_1;
          str = "animate-always";
          tmp7 = closure_7;
          tmp8 = closure_8;
          obj = { duration: null };
          tmp9 = closure_9;
          obj.duration = closure_9;
          tmp6 = closure_6(-closure_1, { duration: 0 }, "animate-always");
          num = -1;
          obj8.translateX = closure_4(closure_5(tmp6, closure_7(closure_8, closure_6(tmp + closure_1, obj, "animate-always"))), -1);
          items2 = [];
          items2[0] = obj8;
          obj7.transform = items2;
          tmp10 = obj7;
        }
      }
      return tmp10;
    }
  }
  let items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  ButtonShineNativeTsx1.__closure = items1;
  ButtonShineNativeTsx1.__workletHash = 2724629163487;
  ButtonShineNativeTsx1.__initData = tmp5;
  let obj3 = { shineStyles: null, shineAnimatedStyle: null };
  const animatedStyle = _mod1652.useAnimatedStyle(ButtonShineNativeTsx1);
  let obj5 = { shineContainer: { width: "100%", height: "200%", position: "absolute", overflow: "hidden" }, shine: null, shineInner: { width: 16, height: "100%", backgroundColor: hexResult } };
  const size = { width: 56, height: "500%", transform: null, backgroundColor: hexResult, top: "-100%", alignItems: "center" };
  let items2 = [{ rotate: "30deg" }];
  size.transform = items2;
  obj5.shine = size;
  obj3.shineStyles = createStyles.createStyles(obj5)();
  obj3.shineAnimatedStyle = animatedStyle;
  return obj3;
}
const jsx = fn(21).jsx;
let closure_6 = { code: "(function ButtonShineNativeTsx1(){let[width,SHINE_OFFSCREEN_OFFSET,useReducedMotion,SHINE_WIDTH,withRepeat,withSequence,withTiming,withDelay,SHINE_INITIAL_ANIMATION_DELAY,SHINE_ANIMATION_DURATION]=this.__closure;if(width==null){return{transform:[{translateX:-SHINE_OFFSCREEN_OFFSET}]};}if(useReducedMotion){const centerOffset=(width-SHINE_WIDTH)/2;return{transform:[{translateX:centerOffset}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-SHINE_OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(SHINE_INITIAL_ANIMATION_DELAY,withTiming(width+SHINE_OFFSCREEN_OFFSET,{duration:SHINE_ANIMATION_DURATION},'animate-always'))),-1)}]};})" };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ButtonShine.native.tsx");

export { useShineEffectStyles };
export function ButtonShine(variant) {
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
  items = [shineStyles.shineContainer, tmp2.shineAnimatedStyle];
  obj.style = items;
  const obj2 = { style: shineStyles.shine, children: jsx(_modDef1652.View, { style: shineStyles.shineInner }) };
  obj.children = jsx(_modDef1652.View, { style: shineStyles.shine, children: jsx(_modDef1652.View, { style: shineStyles.shineInner }) });
  return jsx(_modDef1652.View, {
    onLayout(nativeEvent) {
      return closure_0(nativeEvent.nativeEvent.layout.width);
    },
    style: null,
    children: null
  });
}