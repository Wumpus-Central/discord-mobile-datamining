// === Module 10301: PaginationItem ===

// Module 10301 (PaginationItem)
import noopDefault from "noop" /* 19 */;
import closure_5 from "_objectWithoutProperties" /* 109 */;
import { Pressable } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let closure_3 = ["width", "height", "borderRadius", "backgroundColor"];
let closure_4 = ["width", "height", "borderRadius", "backgroundColor"];
noopDefault;
let closure_8 = { code: "function pnpm_PaginationItemTsx1(){const{runOnJS,handleCustomAnimation,animValue}=this.__closure;var _animValue;runOnJS(handleCustomAnimation)((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value);}" };
let closure_9 = { code: "function pnpm_PaginationItemTsx2(){const{size,defaultDotSize,dotStyle,activeDotStyle,animValue,index,count,interpolate,Extrapolation,interpolateColor,customReanimatedStyleRef}=this.__closure;var _dotStyle,_activeDotStyle,_animValue,_animValue2,_animValue3,_ref,_ref2,_customReanimatedStyl,_restStyle$transform,_customReanimatedStyl2,_customReanimatedStyl3;const{width=size||defaultDotSize,height=size||defaultDotSize,borderRadius:borderRadius,backgroundColor=\"#FFF\",...restDotStyle}=(_dotStyle=dotStyle)!==null&&_dotStyle!==void 0?_dotStyle:{};const{width:activeWidth=width,height:activeHeight=height,borderRadius:activeBorderRadius,backgroundColor:activeBackgroundColor=\"#000\",...restActiveDotStyle}=(_activeDotStyle=activeDotStyle)!==null&&_activeDotStyle!==void 0?_activeDotStyle:{};let val=Math.abs(((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)-index);if(index===0&&((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value)>count-1)val=Math.abs(((_animValue3=animValue)===null||_animValue3===void 0?void 0:_animValue3.value)-count);const inputRange=[0,1,2];const restStyle=(_ref=val===0?restActiveDotStyle:restDotStyle)!==null&&_ref!==void 0?_ref:{};return{width:interpolate(val,inputRange,[activeWidth,width,width],Extrapolation.CLAMP),height:interpolate(val,inputRange,[activeHeight,height,height],Extrapolation.CLAMP),borderRadius:interpolate(val,inputRange,[(_ref2=activeBorderRadius!==null&&activeBorderRadius!==void 0?activeBorderRadius:borderRadius)!==null&&_ref2!==void 0?_ref2:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0],Extrapolation.CLAMP),backgroundColor:interpolateColor(val,inputRange,[activeBackgroundColor,backgroundColor,backgroundColor]),...restStyle,...((_customReanimatedStyl=customReanimatedStyleRef.value)!==null&&_customReanimatedStyl!==void 0?_customReanimatedStyl:{}),transform:[...((_restStyle$transform=restStyle===null||restStyle===void 0?void 0:restStyle.transform)!==null&&_restStyle$transform!==void 0?_restStyle$transform:[]),...((_customReanimatedStyl2=(_customReanimatedStyl3=customReanimatedStyleRef.value)===null||_customReanimatedStyl3===void 0?void 0:_customReanimatedStyl3.transform)!==null&&_customReanimatedStyl2!==void 0?_customReanimatedStyl2:[])]};}" };

export const PaginationItem = (animValue) => {
  const iter = animValue.animValue;
  const dotStyle = animValue.dotStyle;
  const activeDotStyle = animValue.activeDotStyle;
  const index = animValue.index;
  const count = animValue.count;
  let size = animValue.size;
  ({ horizontal, customReanimatedStyle } = animValue);
  const accessibilityLabel = animValue.accessibilityLabel;
  ({ children, onPress } = animValue);
  let obj = iter(activeDotStyle[4]);
  const sharedValue = obj.useSharedValue({});
  function handleCustomAnimation(arg0) {
    let obj;
    if (customReanimatedStyle != null) {
      obj = tmp2(arg0, index, count);
    }
    if (obj == null) {
      obj = {};
    }
    sharedValue.value = obj;
  }
  obj1 = iter(activeDotStyle[4]);
  const fn = function _() {
    let value;
    const obj = iter(activeDotStyle[4]);
    if (iter != null) {
      value = iter.value;
    }
    iter(activeDotStyle[4]).runOnJS(handleCustomAnimation)(value);
  };
  obj = { runOnJS: iter(activeDotStyle[4]).runOnJS, handleCustomAnimation, animValue: iter };
  fn.__closure = obj;
  fn.__workletHash = 10388501491479;
  fn.__initData = handleCustomAnimation;
  const derivedValue = obj1.useDerivedValue(fn);
  const fn2 = function k() {
    size = dotStyle;
    if (dotStyle == null) {
      size = {};
    }
    let width = size.width;
    if (undefined === width) {
      let num = size;
      if (!size) {
        num = 10;
      }
      width = num;
    }
    let height = size.height;
    if (undefined === height) {
      let num2 = size;
      if (!size) {
        num2 = 10;
      }
      height = num2;
    }
    ({ borderRadius, backgroundColor } = size);
    let str = "#FFF";
    if (undefined !== backgroundColor) {
      str = backgroundColor;
    }
    let obj = size(size, index);
    let size2 = activeDotStyle;
    if (activeDotStyle == null) {
      size2 = {};
    }
    let width2 = size2.width;
    if (undefined === width2) {
      width2 = width;
    }
    let height2 = size2.height;
    if (undefined === height2) {
      height2 = height;
    }
    ({ borderRadius: borderRadius2, backgroundColor: backgroundColor2 } = size2);
    let str2 = "#000";
    if (undefined !== backgroundColor2) {
      str2 = backgroundColor2;
    }
    let value;
    if (iter != null) {
      value = iter.value;
    }
    let absolute = Math.abs(value - index);
    let tmp5 = 0 === index;
    if (tmp5) {
      value = undefined;
      if (iter != null) {
        value = iter.value;
      }
      tmp5 = value > count - 1;
    }
    if (tmp5) {
      let value1;
      if (iter != null) {
        value1 = iter.value;
      }
      absolute = Math.abs(value1 - count);
    }
    if (0 === absolute) {
      obj = tmpResult;
    }
    if (obj == null) {
      obj = {};
    }
    const items = [0, 1, 2];
    obj = { width: null, height: null, borderRadius: null, backgroundColor: null };
    const tmp = size;
    tmpResult = size(size2, count);
    const items1 = [width2, width, width];
    obj[0] = iter(activeDotStyle[4]).interpolate(absolute, items, items1, iter(activeDotStyle[4]).Extrapolation.CLAMP);
    const obj3 = iter(activeDotStyle[4]);
    const items2 = [height2, height, height];
    obj[1] = iter(activeDotStyle[4]).interpolate(absolute, items, items2, iter(activeDotStyle[4]).Extrapolation.CLAMP);
    const obj4 = iter(activeDotStyle[4]);
    if (borderRadius2 == null) {
      borderRadius2 = borderRadius;
    }
    if (borderRadius2 == null) {
      borderRadius2 = 0;
    }
    const items3 = [borderRadius2, , ];
    let num4 = borderRadius;
    if (borderRadius == null) {
      num4 = 0;
    }
    items3[1] = num4;
    if (borderRadius == null) {
      borderRadius = 0;
    }
    items3[2] = borderRadius;
    obj[2] = iter(activeDotStyle[4]).interpolate(absolute, items, items3, iter(activeDotStyle[4]).Extrapolation.CLAMP);
    const obj5 = iter(activeDotStyle[4]);
    const items4 = [str2, str, str];
    obj[3] = iter(activeDotStyle[4]).interpolateColor(absolute, items, items4);
    const merged = Object.assign(obj);
    let value2 = sharedValue.value;
    if (value2 == null) {
      value2 = {};
    }
    const merged1 = Object.assign(value2);
    let transform;
    if (obj != null) {
      transform = obj.transform;
    }
    if (transform == null) {
      transform = [];
    }
    const items5 = [...transform];
    value = sharedValue.value;
    let transform1;
    if (value != null) {
      transform1 = value.transform;
    }
    if (transform1 == null) {
      transform1 = [];
    }
    HermesBuiltin.arraySpread(transform1, tmp14);
    obj.transform = items5;
    return obj;
  };
  obj = { size, defaultDotSize: 10, dotStyle, activeDotStyle, animValue: iter, index, count, interpolate: iter(activeDotStyle[4]).interpolate, Extrapolation: iter(activeDotStyle[4]).Extrapolation, interpolateColor: iter(activeDotStyle[4]).interpolateColor, customReanimatedStyleRef: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 8302907289230;
  fn2.__initData = closure_9;
  let items = [iter, index, count, horizontal, dotStyle, activeDotStyle, customReanimatedStyle];
  obj1 = { onPress, accessibilityLabel, accessibilityRole: "button", accessibilityHint: null, accessibilityState: null, children: null };
  let str = "";
  const animatedStyle = iter(activeDotStyle[4]).useAnimatedStyle(fn2, items);
  if (iter.value !== index) {
    const _HermesInternal = HermesInternal;
    str = "Go to " + accessibilityLabel;
  }
  obj1[3] = str;
  obj1[4] = { selected: iter.value === index };
  let str3 = "0deg";
  if (horizontal) {
    str3 = "90deg";
  }
  let items1 = [{ rotateZ: str3 }];
  let items2 = [{ overflow: "hidden", transform: items1 }, dotStyle, animatedStyle];
  obj1[5] = sharedValue(dotStyle(activeDotStyle[4]).View, { style: items2, children });
  return sharedValue(customReanimatedStyle, obj1);
};