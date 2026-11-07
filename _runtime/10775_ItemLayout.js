// === Module 10775: ItemLayout ===

// Module 10775 (ItemLayout)
import _mod1652 from "module_1652" /* 1652 */;
import _mod10758 from "module_10758" /* 10758 */;
import useOffsetX from "useOffsetX" /* 10776 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const jsx = fn(21).jsx;
let closure_4 = { code: "(function pnpm_ItemLayoutTsx1(){let[x,size]=this.__closure;return x.value/size;})" };
let closure_5 = { code: "(function pnpm_ItemLayoutTsx2(){let[animationStyle,x,size,index]=this.__closure;return animationStyle(x.value/size,index);})" };

export (arg0) => {
  ({ handlerOffset, index, animationStyle } = arg0);
  ({ children, visibleRanges } = arg0);
  const props = _mod10758.useGlobalState().props;
  ({ loop, dataLength, width, height, customConfig, modeConfig } = props);
  let tmp3 = width;
  if (props.vertical) {
    tmp3 = height;
  }
  let obj2 = { handlerOffset, index, size: tmp3, dataLength, loop };
  const merged = Object.assign(typeof customConfig === "function" ? customConfig() : {});
  if ("horizontal-stack" === props.mode) {
    const obj3 = { handlerOffset, index, size: tmp3, dataLength, loop, type: null, viewCount: null };
    let str = "positive";
    if ("right" === modeConfig.snapDirection) {
      str = "negative";
    }
    obj3.type = str;
    obj3.viewCount = modeConfig.showLength;
    obj2 = obj3;
  }
  const tmp4 = typeof customConfig === "function" ? customConfig() : {};
  const offsetX = useOffsetX.useOffsetX(obj2, visibleRanges);
  const tmpResult = useOffsetX;
  items = [closure_4, offsetX, tmp3];
  [tmp7, tmp8, tmp9] = items;
  function pnpm_ItemLayoutTsx1() {
    return _undefined.value / c1;
  }
  const items1 = [tmp8, tmp9];
  pnpm_ItemLayoutTsx1.__closure = items1;
  pnpm_ItemLayoutTsx1.__workletHash = 1131903372333;
  pnpm_ItemLayoutTsx1.__initData = tmp7;
  const items2 = [offsetX, tmp3];
  const derivedValue = _mod1652.useDerivedValue(pnpm_ItemLayoutTsx1, items2);
  const tmpResult3 = _mod1652;
  const items3 = [closure_5, animationStyle, offsetX, tmp3, index];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15] = items3;
  function pnpm_ItemLayoutTsx2() {
    return _undefined(_undefined2.value / c2, c3);
  }
  const items4 = [tmp12, tmp13, tmp14, tmp15];
  pnpm_ItemLayoutTsx2.__closure = items4;
  pnpm_ItemLayoutTsx2.__workletHash = 4847228470595;
  pnpm_ItemLayoutTsx2.__initData = tmp11;
  const items5 = [animationStyle, index, offsetX, tmp3];
  const animatedStyle = _mod1652.useAnimatedStyle(pnpm_ItemLayoutTsx2, items5);
  if (!width) {
    width = "100%";
  }
  const size = { width, height: null, position: "absolute", pointerEvents: "box-none" };
  if (!height) {
    height = "100%";
  }
  const obj4 = { style: null, testID: "__CAROUSEL_ITEM_" + index + "__", children: children({ animationValue: derivedValue }) };
  size.height = height;
  const items6 = [size, animatedStyle];
  obj4.style = items6;
  return jsx(_modDef1652.View, { style: null, testID: "__CAROUSEL_ITEM_" + index + "__", children: children({ animationValue: derivedValue }) });
}