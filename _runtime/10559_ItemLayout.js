// _runtime/10559_ItemLayout.js
import noopDefault from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;
noopDefault;
let closure_4 = { code: "function pnpm_ItemLayoutTsx1(){const{x,size}=this.__closure;return x.value/size;}" };
let closure_5 = { code: "function pnpm_ItemLayoutTsx2(){const{animationStyle,x,size,index}=this.__closure;return animationStyle(x.value/size,index);}" };

export const ItemLayout = (animationStyle) => {
  ({ handlerOffset, index } = animationStyle);
  animationStyle = animationStyle.animationStyle;
  ({ children, visibleRanges } = animationStyle);
  let obj = index(height[2]);
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
    obj = { handlerOffset: null, index: null, size: null, dataLength: null, loop: null, type: null, viewCount: null };
    obj[0] = handlerOffset;
    obj[1] = index;
    obj[2] = tmp3;
    obj[3] = dataLength;
    obj[4] = loop;
    let str = "positive";
    if ("right" === modeConfig.snapDirection) {
      str = "negative";
    }
    obj[5] = str;
    obj[6] = modeConfig.showLength;
  }
  let tmpResult = tmp(tmp2[3]);
  const offsetX = tmpResult.useOffsetX(obj, visibleRanges);
  tmpResult = tmp(tmp2[4]);
  const fn = function k() {
    return offsetX.value / height;
  };
  fn.__closure = { x: offsetX, size: tmp3 };
  fn.__workletHash = 15967503186804;
  fn.__initData = closure_4;
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
  E.__initData = closure_5;
  const items1 = [animationStyle, index, offsetX, tmp3];
  const animatedStyle = index(height[4]).useAnimatedStyle(E, items1);
  if (!width) {
    width = "100%";
  }
  obj1 = { width, height: null, position: "absolute", pointerEvents: "box-none" };
  if (!height) {
    height = "100%";
  }
  const tmp9 = offsetX;
  const tmpResult1 = index(height[4]);
  obj1[1] = height;
  const items2 = [obj1, animatedStyle];
  return tmp9(animationStyle(height[4]).View, { style: items2, testID: "__CAROUSEL_ITEM_" + index + "__", children: children({ animationValue: derivedValue }) });
};