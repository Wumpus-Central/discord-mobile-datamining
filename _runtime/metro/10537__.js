// _runtime/metro/10537__.js
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";
import _mod1643 from "01643__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import react from "../00019_react.js";

let closure_3 = ["width", "height", "borderRadius", "backgroundColor"];
let closure_4 = ["width", "height", "borderRadius", "backgroundColor"];
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let closure_8 = {
  code: "function pnpm_PaginationItemTsx1(){const{runOnJS,handleCustomAnimation,animValue}=this.__closure;var _animValue;runOnJS(handleCustomAnimation)((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value);}",
};
const __initData = {
  code: 'function pnpm_PaginationItemTsx2(){const{size,defaultDotSize,dotStyle,activeDotStyle,animValue,index,count,interpolate,Extrapolation,interpolateColor,customReanimatedStyleRef}=this.__closure;var _dotStyle,_activeDotStyle,_animValue,_animValue2,_animValue3,_ref,_ref2,_customReanimatedStyl,_restStyle$transform,_customReanimatedStyl2,_customReanimatedStyl3;const{width=size||defaultDotSize,height=size||defaultDotSize,borderRadius:borderRadius,backgroundColor="#FFF",...restDotStyle}=(_dotStyle=dotStyle)!==null&&_dotStyle!==void 0?_dotStyle:{};const{width:activeWidth=width,height:activeHeight=height,borderRadius:activeBorderRadius,backgroundColor:activeBackgroundColor="#000",...restActiveDotStyle}=(_activeDotStyle=activeDotStyle)!==null&&_activeDotStyle!==void 0?_activeDotStyle:{};let val=Math.abs(((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)-index);if(index===0&&((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value)>count-1)val=Math.abs(((_animValue3=animValue)===null||_animValue3===void 0?void 0:_animValue3.value)-count);const inputRange=[0,1,2];const restStyle=(_ref=val===0?restActiveDotStyle:restDotStyle)!==null&&_ref!==void 0?_ref:{};return{width:interpolate(val,inputRange,[activeWidth,width,width],Extrapolation.CLAMP),height:interpolate(val,inputRange,[activeHeight,height,height],Extrapolation.CLAMP),borderRadius:interpolate(val,inputRange,[(_ref2=activeBorderRadius!==null&&activeBorderRadius!==void 0?activeBorderRadius:borderRadius)!==null&&_ref2!==void 0?_ref2:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0],Extrapolation.CLAMP),backgroundColor:interpolateColor(val,inputRange,[activeBackgroundColor,backgroundColor,backgroundColor]),...restStyle,...((_customReanimatedStyl=customReanimatedStyleRef.value)!==null&&_customReanimatedStyl!==void 0?_customReanimatedStyl:{}),transform:[...((_restStyle$transform=restStyle===null||restStyle===void 0?void 0:restStyle.transform)!==null&&_restStyle$transform!==void 0?_restStyle$transform:[]),...((_customReanimatedStyl2=(_customReanimatedStyl3=customReanimatedStyleRef.value)===null||_customReanimatedStyl3===void 0?void 0:_customReanimatedStyl3.transform)!==null&&_customReanimatedStyl2!==void 0?_customReanimatedStyl2:[])]};}',
};

export const PaginationItem = (animValue) => {
  let View;
  let children;
  let customReanimatedStyle;
  let horizontal;
  let items1;
  let items2;
  let obj7;
  let onPress;
  let str;
  const iter = animValue.animValue;
  const dotStyle = animValue.dotStyle;
  const activeDotStyle = animValue.activeDotStyle;
  const index = animValue.index;
  const count = animValue.count;
  size = animValue.size;
  ({ horizontal, customReanimatedStyle } = animValue);
  const accessibilityLabel = animValue.accessibilityLabel;
  ({ children, onPress } = animValue);
  const tmp = activeDotStyle;
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
  const fn = function _() {
    let value;
    const obj = _mod1643;
    const runOnJSResult = obj.runOnJS(handleCustomAnimation);
    if (iter != null) {
      value = iter.value;
    }
    runOnJSResult(value);
  };
  const obj2 = iter(activeDotStyle[4]);
  let obj3 = { runOnJS: iter(activeDotStyle[4]).runOnJS, handleCustomAnimation, animValue: iter };
  fn.__closure = obj3;
  fn.__workletHash = 10388501491479;
  fn.__initData = handleCustomAnimation;
  const derivedValue = obj2.useDerivedValue(fn);
  let obj4 = iter(activeDotStyle[4]);
  const fn2 = function k() {
    let backgroundColor;
    let backgroundColor2;
    let borderRadius;
    let borderRadius2;
    let interpolate;
    let items1;
    let items2;
    let items3;
    let items4;
    let items5;
    let obj3;
    let obj4;
    let tmp12Result;
    size = dotStyle;
    if (dotStyle == null) {
      size = {};
    }
    let width = size.width;
    if (undefined === width) {
      width = size || 10;
    }
    let height = size.height;
    if (undefined === height) {
      height = size || 10;
    }
    ({ borderRadius, backgroundColor } = size);
    let str = "#FFF";
    if (undefined !== backgroundColor) {
      str = backgroundColor;
    }
    let obj = _objectWithoutProperties(size, closure_3);
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
    let value5;
    const _Math = Math;
    const tmp3Result = _objectWithoutProperties(size2, closure_4);
    if (iter != null) {
      value5 = iter.value;
    }
    let absResult = abs(value5 - index);
    let tmp7 = 0 === index;
    if (tmp7) {
      let value6;
      if (iter != null) {
        value6 = iter.value;
      }
      tmp7 = value6 > count - 1;
    }
    if (tmp7) {
      let value7;
      const _Math2 = Math;
      const abs2 = Math.abs;
      if (iter != null) {
        value7 = iter.value;
      }
      absResult = abs2(value7 - count);
    }
    if (0 === absResult) {
      obj = tmp3Result;
    }
    if (obj == null) {
      obj = {};
    }
    const items = [0, 1, 2];
    const size1 = {
      width: obj3.interpolate(absResult, items, items1, _mod1643.Extrapolation.CLAMP),
      height: obj4.interpolate(absResult, items, items2, _mod1643.Extrapolation.CLAMP),
      borderRadius: interpolate(absResult, items, items3, _mod1643.Extrapolation.CLAMP),
      backgroundColor: tmp12Result.interpolateColor(absResult, items, items4),
      transform: items5,
    };
    items1 = [width2, width, width];
    items2 = [height2, height, height];
    obj3 = _mod1643;
    obj4 = _mod1643;
    interpolate = _mod1643.interpolate;
    _mod1643;
    if (borderRadius2 == null) {
      borderRadius2 = borderRadius;
    }
    if (borderRadius2 == null) {
      borderRadius2 = 0;
    }
    items3 = [borderRadius2, ,];
    let num2 = borderRadius;
    if (borderRadius == null) {
      num2 = 0;
    }
    items3[1] = num2;
    if (borderRadius == null) {
      borderRadius = 0;
    }
    items3[2] = borderRadius;
    items4 = [str2, str, str];
    tmp12Result = _mod1643;
    const merged = Object.assign(obj);
    let value8 = sharedValue.value;
    if (value8 == null) {
      value8 = {};
    }
    const merged1 = Object.assign(value8);
    let transform;
    if (obj != null) {
      transform = obj.transform;
    }
    if (transform == null) {
      transform = [];
    }
    items5 = [...transform];
    const value = sharedValue.value;
    let transform1;
    if (value != null) {
      transform1 = value.transform;
    }
    if (transform1 == null) {
      transform1 = [];
    }
    HermesBuiltin.arraySpread(items5, transform1, tmp17);
    return size1;
  };
  fn2.__closure = {
    size,
    defaultDotSize: 10,
    dotStyle,
    activeDotStyle,
    animValue: iter,
    index,
    count,
    interpolate: iter(activeDotStyle[4]).interpolate,
    Extrapolation: iter(activeDotStyle[4]).Extrapolation,
    interpolateColor: iter(activeDotStyle[4]).interpolateColor,
    customReanimatedStyleRef: sharedValue,
  };
  fn2.__workletHash = 8302907289230;
  fn2.__initData = __initData;
  let items = [iter, index, count, horizontal, dotStyle, activeDotStyle, customReanimatedStyle];
  const obj6 = {
    onPress,
    accessibilityLabel,
    accessibilityRole: "button",
    accessibilityHint: str,
    accessibilityState: { selected: iter.value === index },
    children: sharedValue(View, obj7),
  };
  str = "";
  ({
    size,
    defaultDotSize: 10,
    dotStyle,
    activeDotStyle,
    animValue: iter,
    index,
    count,
    interpolate: iter(activeDotStyle[4]).interpolate,
    Extrapolation: iter(activeDotStyle[4]).Extrapolation,
    interpolateColor: iter(activeDotStyle[4]).interpolateColor,
    customReanimatedStyleRef: sharedValue,
  });
  const animatedStyle = obj4.useAnimatedStyle(fn2, items);
  const tmp6 = customReanimatedStyle;
  if (iter.value !== index) {
    let tmp7 = globalThis;
    const _HermesInternal = HermesInternal;
    let str2 = "Go to ";
    str = "Go to " + accessibilityLabel;
  }
  let str3 = "0deg";
  View = dotStyle(tmp[4]).View;
  if (horizontal) {
    str3 = "90deg";
  }
  const obj8 = { overflow: "hidden", transform: items1 };
  items1 = [{ rotateZ: str3 }];
  obj7 = { style: items2, children };
  items2 = [obj8, dotStyle, animatedStyle];
  return sharedValue(tmp6, obj6);
};
