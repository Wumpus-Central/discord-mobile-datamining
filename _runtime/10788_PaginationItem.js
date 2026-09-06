// _runtime/10788_PaginationItem.js
import cancelAnimation from "01636_cancelAnimation.js";
import noop from "metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const __initData = {
  code: "function pnpm_PaginationItemTsx1(){const{horizontal,height,width,index,animValue,count,interpolate,Extrapolation}=this.__closure;var _animValue,_animValue2;const size=horizontal?height:width;let inputRange=[index-1,index,index+1];let outputRange=[-size,0,size];if(index===0&&((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)>count-1){inputRange=[count-1,count,count+1];outputRange=[-size,0,size];}return{transform:[{translateX:interpolate((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value,inputRange,outputRange,Extrapolation.CLAMP)}]};}",
};

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
  iter(count[3]);
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
    let obj = cancelAnimation;
    value = undefined;
    if (iter != null) {
      value = iter.value;
    }
    obj = { transform: null };
    obj = { translateX: obj.interpolate(value, items, items1, cancelAnimation.Extrapolation.CLAMP) };
    const items4 = [obj];
    obj.transform = items4;
    return obj;
  };
  size = {
    horizontal,
    height: size,
    width: num,
    index,
    animValue: iter,
    count,
    interpolate: iter(count[3]).interpolate,
    Extrapolation: iter(count[3]).Extrapolation,
  };
  fn.__closure = size;
  fn.__workletHash = 1536479533103;
  fn.__initData = __initData;
  let items = [iter, index, count, horizontal];
  let obj = {
    onPress,
    accessibilityLabel,
    accessibilityRole: "button",
    accessibilityHint: null,
    accessibilityState: null,
    children: null,
  };
  let str = "";
  const animatedStyle = obj.useAnimatedStyle(fn, items);
  if (iter.value !== index) {
    const _HermesInternal = HermesInternal;
    str = "Go to " + accessibilityLabel;
  }
  obj.accessibilityHint = str;
  obj.accessibilityState = { selected: iter.value === index };
  const size1 = { width: num, height: size, overflow: "hidden", transform: null };
  let str3 = "0deg";
  if (horizontal) {
    str3 = "90deg";
  }
  obj = { style: null, children: size(num, obj) };
  let items1 = [{ rotateZ: str3 }];
  size1.transform = items1;
  let items2 = [size1, dotStyle];
  obj.style = items2;
  const obj1 = { style: null, children };
  let items3 = [{ backgroundColor: "black", flex: 1 }, animatedStyle, activeDotStyle];
  obj1.style = items3;
  obj.children = size(index(count[3]).View, obj1);
  return size(horizontal, obj);
};
