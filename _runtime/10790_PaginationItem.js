// === Module 10790: PaginationItem ===

// Module 10790 (PaginationItem)
import _mod1652 from "module_1652" /* 1652 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_6 = { code: "(function pnpm_PaginationItemTsx1(){let[horizontal,height,width,index,animValue,count,interpolate,Extrapolation]=this.__closure;var _animValue,_animValue2;const size=horizontal?height:width;let inputRange=[index-1,index,index+1];let outputRange=[-size,0,size];if(index===0&&((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)>count-1){inputRange=[count-1,count,count+1];outputRange=[-size,0,size];}return{transform:[{translateX:interpolate((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value,inputRange,outputRange,Extrapolation.CLAMP)}]};})" };

export (arg0) => {
  ({ animValue, dotStyle, index, count, size, horizontal, accessibilityLabel } = arg0);
  let num = size;
  ({ activeDotStyle, children, onPress } = arg0);
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
  items = [_undefined, horizontal, size, num, index, animValue, count, _mod1652.interpolate, _mod1652.Extrapolation];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  function pnpm_PaginationItemTsx1() {
    const tmp = c0 ? c1 : c2;
    items = [c3 - 1, c3, c3 + 1];
    let items1 = [-tmp, 0, tmp];
    let tmp2 = 0 === c3;
    if (tmp2) {
      value = undefined;
      if (_undefined != null) {
        value = _undefined.value;
      }
      tmp2 = value > c5 - 1;
    }
    if (tmp2) {
      const items2 = [c5 - 1, c5, c5 + 1];
      const items3 = [-tmp, 0, tmp];
      items1 = items3;
      items = items2;
    }
    value2 = undefined;
    if (_undefined != null) {
      value2 = _undefined.value;
    }
    const obj = { transform: null };
    const items4 = [{ translateX: _undefined(value2, items, items1, _undefined2.CLAMP) }];
    obj.transform = items4;
    return obj;
  }
  let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  pnpm_PaginationItemTsx1.__closure = items1;
  pnpm_PaginationItemTsx1.__workletHash = 15722277563702;
  pnpm_PaginationItemTsx1.__initData = tmp6;
  let items2 = [animValue, index, count, horizontal];
  const obj2 = { onPress, accessibilityLabel, accessibilityRole: "button", accessibilityHint: null, accessibilityState: null, children: null };
  let str = "";
  const animatedStyle = _mod1652.useAnimatedStyle(pnpm_PaginationItemTsx1, items2);
  if (animValue.value !== index) {
    const _HermesInternal = HermesInternal;
    str = "Go to " + accessibilityLabel;
  }
  obj2.accessibilityHint = str;
  obj2.accessibilityState = { selected: animValue.value === index };
  const size1 = { width: num, height: size, overflow: "hidden", transform: null };
  let str3 = "0deg";
  if (horizontal) {
    str3 = "90deg";
  }
  const obj3 = { style: null, children: null };
  let items3 = [{ rotateZ: str3 }];
  size1.transform = items3;
  let items4 = [size1, dotStyle];
  obj3.style = items4;
  const obj4 = { style: null, children };
  const items5 = [{ backgroundColor: "black", flex: 1 }, animatedStyle, activeDotStyle];
  obj4.style = items5;
  obj3.children = jsx(_modDef1652.View, { style: null, children });
  obj2.children = <React4 style={null}>{null}</React4>;
  return <React3 onPress={onPress} accessibilityLabel={accessibilityLabel} accessibilityRole="button" accessibilityHint={null} accessibilityState={null}>{null}</React3>;
}