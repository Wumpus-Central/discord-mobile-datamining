// _runtime/10522_PaginationItem.js
import Fragment from "react/00021_Fragment.js";
import _mod1643 from "metro/01643__.js";
import react from "00019_react.js";
import react_native from "00017_react-native.js";

let c3;
let closure_4;
({ Pressable: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
const __initData = {
  code: "function pnpm_PaginationItemTsx1(){const{horizontal,height,width,index,animValue,count,interpolate,Extrapolation}=this.__closure;var _animValue,_animValue2;const size=horizontal?height:width;let inputRange=[index-1,index,index+1];let outputRange=[-size,0,size];if(index===0&&((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)>count-1){inputRange=[count-1,count,count+1];outputRange=[-size,0,size];}return{transform:[{translateX:interpolate((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value,inputRange,outputRange,Extrapolation.CLAMP)}]};}",
};

export const PaginationItem = (animValue) => {
  let activeDotStyle;
  let children;
  let dotStyle;
  let horizontal;
  let index;
  let items1;
  let items2;
  let items3;
  let obj3;
  let obj4;
  let onPress;
  let str;
  let tmp10;
  const iter = animValue.animValue;
  ({ dotStyle, index } = animValue);
  const count = animValue.count;
  ({ size, horizontal } = animValue);
  const accessibilityLabel = animValue.accessibilityLabel;
  let num = size;
  ({ activeDotStyle, children, onPress } = animValue);
  if (!size) {
    let tmp = null;
    let width;
    if (dotStyle != null) {
      width = dotStyle.width;
    }
    num = width;
  }
  if (!num) {
    num = 10;
  }
  if (!size) {
    let height;
    if (dotStyle != null) {
      height = dotStyle.height;
    }
    size = height;
  }
  if (!size) {
    size = 10;
  }
  let obj = iter(count[3]);
  const fn = function s() {
    let items4;
    const tmp = horizontal ? size : num;
    let items = [index - 1, index, index + 1];
    let items1 = [-tmp, 0, tmp];
    let tmp2 = 0 === index;
    if (tmp2) {
      let value;
      if (iter != null) {
        value = iter.value;
      }
      tmp2 = value > count - 1;
    }
    if (tmp2) {
      const items2 = [count - 1, count, count + 1];
      const items3 = [-tmp, 0, tmp];
      items1 = items3;
      items = items2;
    }
    let value2;
    const interpolate = _mod1643.interpolate;
    _mod1643;
    if (iter != null) {
      value2 = iter.value;
    }
    const obj = { transform: items4 };
    items4 = [{ translateX: interpolate(value2, items, items1, _mod1643.Extrapolation.CLAMP) }];
    ({ translateX: interpolate(value2, items, items1, _mod1643.Extrapolation.CLAMP) });
    return obj;
  };
  const size1 = {
    horizontal,
    height: size,
    width: num,
    index,
    animValue: iter,
    count,
    interpolate: iter(count[3]).interpolate,
    Extrapolation: iter(count[3]).Extrapolation,
  };
  fn.__closure = size1;
  fn.__workletHash = 1536479533103;
  fn.__initData = __initData;
  let items = [iter, index, count, horizontal];
  const obj2 = {
    onPress,
    accessibilityLabel,
    accessibilityRole: "button",
    accessibilityHint: str,
    accessibilityState: { selected: iter.value === index },
    children: size(tmp10, obj3),
  };
  str = "";
  const animatedStyle = obj.useAnimatedStyle(fn, items);
  const tmp5 = count;
  const tmp8 = horizontal;
  if (iter.value !== index) {
    const tmp9 = globalThis;
    const _HermesInternal = HermesInternal;
    str = "Go to " + accessibilityLabel;
  }
  const size2 = { width: num, height: size, overflow: "hidden", transform: items1 };
  let str3 = "0deg";
  tmp10 = num;
  if (horizontal) {
    str3 = "90deg";
  }
  items1 = [{ rotateZ: str3 }];
  obj3 = { style: items2, children: size(index(tmp5[3]).View, obj4) };
  items2 = [size2, dotStyle];
  obj4 = { style: items3, children };
  items3 = [{ backgroundColor: "black", flex: 1 }, animatedStyle, activeDotStyle];
  return size(tmp8, obj2);
};
