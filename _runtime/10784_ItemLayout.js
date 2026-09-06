// === Module 10784: ItemLayout ===

// Module 10784 (ItemLayout)
import cancelAnimation from "cancelAnimation" /* 1636 */;
import _mod10767 from "module_10767" /* 10767 */;
import noop from "module_19" /* 19 */;

const cancelAnimationDefault = cancelAnimation;

require = fn;
const jsx = fn(21).jsx;
const __initData = { code: "function pnpm_ItemLayoutTsx1(){const{x,size}=this.__closure;return x.value/size;}" };
const __initData2 = { code: "function pnpm_ItemLayoutTsx2(){const{animationStyle,x,size,index}=this.__closure;return animationStyle(x.value/size,index);}" };

export const ItemLayout = (animationStyle) => {
  ({ handlerOffset, index } = animationStyle);
  animationStyle = animationStyle.animationStyle;
  ({ children, visibleRanges } = animationStyle);
  let obj = _mod10767;
  const props = obj.useGlobalState().props;
  ({ loop, dataLength, width, height, customConfig, modeConfig } = props);
  let tmp3 = width;
  if (props.vertical) {
    tmp3 = height;
  }
  height = tmp3;
  obj = { handlerOffset, index, size: tmp3, dataLength, loop };
  const merged = Object.assign(typeof customConfig === "function" ? customConfig() : {});
  if ("horizontal-stack" === props.mode) {
    obj = { handlerOffset, index, size: tmp3, dataLength, loop, type: null, viewCount: null };
    let str = "positive";
    if ("right" === modeConfig.snapDirection) {
      str = "negative";
    }
    obj.type = str;
    obj.viewCount = modeConfig.showLength;
  }
  let tmpResult = tmp(10785);
  const offsetX = tmpResult.useOffsetX(obj, visibleRanges);
  tmpResult = tmp(1636);
  const fn = function k() {
    return offsetX.value / height;
  };
  fn.__closure = { x: offsetX, size: tmp3 };
  fn.__workletHash = 15967503186804;
  fn.__initData = __initData;
  const items = [offsetX, tmp3];
  const derivedValue = tmpResult.useDerivedValue(fn, items);
  const tmp4 = typeof customConfig === "function" ? customConfig() : {};
  class E {
    constructor() {
      return animationStyle(closure_3.value / height, index);
    }
  }
  E.__closure = { animationStyle, x: offsetX, size: tmp3, index };
  E.__workletHash = 4560717846650;
  E.__initData = __initData2;
  const items1 = [animationStyle, index, offsetX, tmp3];
  const animatedStyle = cancelAnimation.useAnimatedStyle(E, items1);
  if (!width) {
    width = "100%";
  }
  const size = { width, height: null, position: "absolute", pointerEvents: "box-none" };
  if (!height) {
    height = "100%";
  }
  const obj1 = { style: null, testID: "__CAROUSEL_ITEM_" + index + "__", children: children({ animationValue: derivedValue }) };
  size.height = height;
  const items2 = [size, animatedStyle];
  obj1.style = items2;
  return jsx(cancelAnimationDefault.View, { style: null, testID: "__CAROUSEL_ITEM_" + index + "__", children: children({ animationValue: derivedValue }) });
};