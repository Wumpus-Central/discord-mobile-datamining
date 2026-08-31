// === Module 10525: PaginationItem ===

// Module 10525 (PaginationItem)
import noopDefault from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopDefault;
({ Pressable: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = { code: "function pnpm_PaginationItemTsx1(){const{horizontal,height,width,index,animValue,count,interpolate,Extrapolation}=this.__closure;var _animValue,_animValue2;const size=horizontal?height:width;let inputRange=[index-1,index,index+1];let outputRange=[-size,0,size];if(index===0&&((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)>count-1){inputRange=[count-1,count,count+1];outputRange=[-size,0,size];}return{transform:[{translateX:interpolate((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value,inputRange,outputRange,Extrapolation.CLAMP)}]};}" };

export const PaginationItem = (animValue) => {
  const iter = animValue.animValue;
  ({ dotStyle, index } = animValue);
  const count = animValue.count;
  ({ size, horizontal } = animValue);
  const accessibilityLabel = animValue.accessibilityLabel;
  let num = size;
  ({ activeDotStyle, children, onPress } = animValue);
  if (!size) {
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
    let obj = iter(count[3]);
    value = undefined;
    if (iter != null) {
      value = iter.value;
    }
    obj = { transform: null };
    obj = { translateX: obj.interpolate(value, items, items1, iter(count[3]).Extrapolation.CLAMP) };
    const items4 = [obj];
    obj[0] = items4;
    return obj;
  };
  obj = { horizontal, height: size, width: num, index, animValue: iter, count, interpolate: iter(count[3]).interpolate, Extrapolation: iter(count[3]).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 1536479533103;
  fn.__initData = closure_6;
  let items = [iter, index, count, horizontal];
  obj = { onPress, accessibilityLabel, accessibilityRole: "button", accessibilityHint: null, accessibilityState: null, children: null };
  let str = "";
  const animatedStyle = obj.useAnimatedStyle(fn, items);
  if (iter.value !== index) {
    const _HermesInternal = HermesInternal;
    str = "Go to " + accessibilityLabel;
  }
  obj[3] = str;
  obj[4] = { selected: iter.value === index };
  obj1 = { width: num, height: size, overflow: "hidden", transform: null };
  let str3 = "0deg";
  if (horizontal) {
    str3 = "90deg";
  }
  let items1 = [{ rotateZ: str3 }];
  obj1[3] = items1;
  let items2 = [obj1, dotStyle];
  let items3 = [{ backgroundColor: "black", flex: 1 }, animatedStyle, activeDotStyle];
  obj[5] = size(num, { style: items2, children: size(index(count[3]).View, { style: items3, children }) });
  return size(horizontal, obj);
};