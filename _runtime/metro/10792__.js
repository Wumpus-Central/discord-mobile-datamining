// === Module 10792: ? ===

// Module 10792
import _modDef1652 from "module_1652" /* 1652 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["width", "height", "borderRadius", "backgroundColor"];
let closure_4 = ["width", "height", "borderRadius", "backgroundColor"];
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
let closure_8 = { code: "(function pnpm_PaginationItemTsx1(){let[runOnJS,handleCustomAnimation,animValue]=this.__closure;var _animValue;runOnJS(handleCustomAnimation)((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value);})" };
let closure_9 = { code: "(function pnpm_PaginationItemTsx2(){let[size,defaultDotSize,dotStyle,activeDotStyle,animValue,index,count,interpolate,Extrapolation,interpolateColor,customReanimatedStyleRef]=this.__closure;var _dotStyle,_activeDotStyle,_animValue,_animValue2,_animValue3,_ref,_ref2,_customReanimatedStyl,_restStyle$transform,_customReanimatedStyl2,_customReanimatedStyl3;const{width=size||defaultDotSize,height=size||defaultDotSize,borderRadius:borderRadius,backgroundColor=\"#FFF\",...restDotStyle}=(_dotStyle=dotStyle)!==null&&_dotStyle!==void 0?_dotStyle:{};const{width:activeWidth=width,height:activeHeight=height,borderRadius:activeBorderRadius,backgroundColor:activeBackgroundColor=\"#000\",...restActiveDotStyle}=(_activeDotStyle=activeDotStyle)!==null&&_activeDotStyle!==void 0?_activeDotStyle:{};let val=Math.abs(((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)-index);if(index===0&&((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value)>count-1)val=Math.abs(((_animValue3=animValue)===null||_animValue3===void 0?void 0:_animValue3.value)-count);const inputRange=[0,1,2];const restStyle=(_ref=val===0?restActiveDotStyle:restDotStyle)!==null&&_ref!==void 0?_ref:{};return{width:interpolate(val,inputRange,[activeWidth,width,width],Extrapolation.CLAMP),height:interpolate(val,inputRange,[activeHeight,height,height],Extrapolation.CLAMP),borderRadius:interpolate(val,inputRange,[(_ref2=activeBorderRadius!==null&&activeBorderRadius!==void 0?activeBorderRadius:borderRadius)!==null&&_ref2!==void 0?_ref2:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0,borderRadius!==null&&borderRadius!==void 0?borderRadius:0],Extrapolation.CLAMP),backgroundColor:interpolateColor(val,inputRange,[activeBackgroundColor,backgroundColor,backgroundColor]),...restStyle,...((_customReanimatedStyl=customReanimatedStyleRef.value)!==null&&_customReanimatedStyl!==void 0?_customReanimatedStyl:{}),transform:[...((_restStyle$transform=restStyle===null||restStyle===void 0?void 0:restStyle.transform)!==null&&_restStyle$transform!==void 0?_restStyle$transform:[]),...((_customReanimatedStyl2=(_customReanimatedStyl3=customReanimatedStyleRef.value)===null||_customReanimatedStyl3===void 0?void 0:_customReanimatedStyl3.transform)!==null&&_customReanimatedStyl2!==void 0?_customReanimatedStyl2:[])]};})" };

export (count) => {
  ({ animValue, dotStyle, activeDotStyle, index } = count);
  _require = index;
  count = count.count;
  ({ horizontal, customReanimatedStyle } = count);
  const accessibilityLabel = count.accessibilityLabel;
  ({ size, children, onPress } = count);
  const sharedValue = require("module_1652").useSharedValue({});
  let obj = require("module_1652");
  items = [
    constants,
    require("module_1652").runOnJS,
    (arg0) => {
      let obj;
      if (c2 != null) {
        obj = tmp2(arg0, c0, c1);
      }
      if (obj == null) {
        obj = {};
      }
      sharedValue.value = obj;
    },
    animValue
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  function pnpm_PaginationItemTsx1() {
    value = undefined;
    if (_undefined2 != null) {
      value = _undefined2.value;
    }
    _undefined(c1)(value);
  }
  let items1 = [tmp5, tmp6, tmp7];
  pnpm_PaginationItemTsx1.__closure = items1;
  pnpm_PaginationItemTsx1.__workletHash = 8160033721614;
  pnpm_PaginationItemTsx1.__initData = tmp4;
  const derivedValue = require("module_1652").useDerivedValue(pnpm_PaginationItemTsx1);
  const obj2 = require("module_1652");
  let items2 = [closure_9, size, 10, dotStyle, activeDotStyle, animValue, index, count, require("module_1652").interpolate, require("module_1652").Extrapolation, require("module_1652").interpolateColor, sharedValue];
  closure_129_0 = undefined;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  closure_129_4 = undefined;
  closure_129_5 = undefined;
  closure_129_6 = undefined;
  closure_129_7 = undefined;
  closure_129_8 = undefined;
  closure_129_9 = undefined;
  closure_129_10 = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
  function pnpm_PaginationItemTsx2() {
    let size = c2;
    if (c2 == null) {
      size = {};
    }
    let width = size.width;
    if (undefined === width) {
      let tmp = c0;
      if (!c0) {
        tmp = c1;
      }
      width = tmp;
    }
    let height = size.height;
    if (undefined === height) {
      let tmp2 = c0;
      if (!c0) {
        tmp2 = c1;
      }
      height = tmp2;
    }
    ({ borderRadius, backgroundColor } = size);
    let str = "#FFF";
    if (undefined !== backgroundColor) {
      str = backgroundColor;
    }
    let obj = _objectWithoutProperties(size, closure_3);
    let size2 = sharedValue;
    if (sharedValue == null) {
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
    if (closure_1_4 != null) {
      value5 = closure_1_4.value;
    }
    let absolute = Math.abs(value5 - closure_1_5);
    let tmp7 = 0 === closure_1_5;
    if (tmp7) {
      let value6;
      if (closure_1_4 != null) {
        value6 = closure_1_4.value;
      }
      tmp7 = value6 > Pressable - 1;
    }
    if (tmp7) {
      let value7;
      if (closure_1_4 != null) {
        value7 = closure_1_4.value;
      }
      absolute = Math.abs(value7 - Pressable);
    }
    if (0 === absolute) {
      obj = tmp3Result;
    }
    if (obj == null) {
      obj = {};
    }
    items = [0, 1, 2];
    const size1 = { width: null, height: null, borderRadius: null, backgroundColor: null };
    const items1 = [width2, width, width];
    size1.width = <absolute key={items1} {...items} />;
    const items2 = [height2, height, height];
    size1.height = <absolute key={items2} {...items} />;
    if (borderRadius2 == null) {
      borderRadius2 = borderRadius;
    }
    if (borderRadius2 == null) {
      borderRadius2 = 0;
    }
    const items3 = [borderRadius2, , ];
    let num2 = borderRadius;
    if (borderRadius == null) {
      num2 = 0;
    }
    items3[1] = num2;
    if (borderRadius == null) {
      borderRadius = 0;
    }
    items3[2] = borderRadius;
    size1.borderRadius = <absolute key={items3} {...items} />;
    const items4 = [str2, str, str];
    size1.backgroundColor = closure_1_9(absolute, items, items4);
    const merged = Object.assign(obj);
    let value8 = value.value;
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
    const items5 = [...transform];
    value = value.value;
    let transform1;
    if (value != null) {
      transform1 = value.transform;
    }
    if (transform1 == null) {
      transform1 = [];
    }
    HermesBuiltin.arraySpread(transform1, tmp16);
    size1.transform = items5;
    return size1;
  }
  let items3 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  pnpm_PaginationItemTsx2.__closure = items3;
  pnpm_PaginationItemTsx2.__workletHash = 3887987744151;
  pnpm_PaginationItemTsx2.__initData = tmp9;
  let items4 = [animValue, index, count, horizontal, dotStyle, activeDotStyle, customReanimatedStyle];
  const obj3 = { onPress, accessibilityLabel, accessibilityRole: "button", accessibilityHint: null, accessibilityState: null, children: null };
  let str = "";
  const animatedStyle = require("module_1652").useAnimatedStyle(pnpm_PaginationItemTsx2, items4);
  if (animValue.value !== index) {
    const _HermesInternal = HermesInternal;
    str = "Go to " + accessibilityLabel;
  }
  obj3.accessibilityHint = str;
  obj3.accessibilityState = { selected: animValue.value === index };
  let str3 = "0deg";
  if (horizontal) {
    str3 = "90deg";
  }
  const obj4 = { style: null, children };
  const obj5 = { overflow: "hidden", transform: null };
  let items5 = [{ rotateZ: str3 }];
  obj5.transform = items5;
  const items6 = [obj5, dotStyle, animatedStyle];
  obj4.style = items6;
  obj3.children = jsx(_modDef1652.View, { style: null, children });
  return <Pressable onPress={onPress} accessibilityLabel={accessibilityLabel} accessibilityRole="button" accessibilityHint={null} accessibilityState={null}>{null}</Pressable>;
}