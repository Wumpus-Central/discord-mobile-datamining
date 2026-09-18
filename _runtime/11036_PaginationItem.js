// === Module 11036: PaginationItem ===

// Module 11036 (PaginationItem)
import cancelAnimation from "cancelAnimation" /* 1637 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const __initData = { code: "function pnpm_PaginationItemTsx1(){const{horizontal,height,width,index,animValue,count,interpolate,Extrapolation}=this.__closure;var _animValue,_animValue2;const size=horizontal?height:width;let inputRange=[index-1,index,index+1];let outputRange=[-size,0,size];if(index===0&&((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)>count-1){inputRange=[count-1,count,count+1];outputRange=[-size,0,size];}return{transform:[{translateX:interpolate((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value,inputRange,outputRange,Extrapolation.CLAMP)}]};}" };

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
  const fn = function s() {
    const tmp = horizontal ? size : num;
    let items = [index - 1, index, index + 1];
    let items1 = [-tmp, 0, tmp];
    let tmp2 = 0 === index;
    if (tmp2) {
      value = undefined;
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
    value2 = undefined;
    if (iter != null) {
      value2 = iter.value;
    }
    const obj2 = { transform: null };
    const items4 = [{ translateX: cancelAnimation.interpolate(value2, items, items1, cancelAnimation.Extrapolation.CLAMP) }];
    obj2.transform = items4;
    return obj2;
  };
  const size1 = { horizontal, height: size, width: num, index, animValue: iter, count, interpolate: iter(count[3]).interpolate, Extrapolation: iter(count[3]).Extrapolation };
  fn.__closure = size1;
  fn.__workletHash = 1536479533103;
  fn.__initData = __initData;
  let items = [iter, index, count, horizontal];
  let obj2 = { onPress, accessibilityLabel, accessibilityRole: "button", accessibilityHint: null, accessibilityState: null, children: null };
  let str = "";
  const animatedStyle = iter(count[3]).useAnimatedStyle(fn, items);
  if (iter.value !== index) {
    const _HermesInternal = HermesInternal;
    str = "Go to " + accessibilityLabel;
  }
  obj2.accessibilityHint = str;
  obj2.accessibilityState = { selected: iter.value === index };
  const size2 = { width: num, height: size, overflow: "hidden", transform: null };
  let str3 = "0deg";
  if (horizontal) {
    str3 = "90deg";
  }
  const obj3 = { style: null, children: null };
  let items1 = [{ rotateZ: str3 }];
  size2.transform = items1;
  let items2 = [size2, dotStyle];
  obj3.style = items2;
  const obj4 = { style: null, children };
  let items3 = [{ backgroundColor: "black", flex: 1 }, animatedStyle, activeDotStyle];
  obj4.style = items3;
  obj3.children = size(index(count[3]).View, obj4);
  obj2.children = size(num, obj3);
  return size(horizontal, obj2);
};