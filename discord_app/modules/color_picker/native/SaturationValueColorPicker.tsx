// discord_app/modules/color_picker/native/SaturationValueColorPicker.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../_runtime/metro/01705__.js";
import LegacyBaseButton from "../../../../_runtime/05420_LegacyBaseButton.js";
import LinearGradientDefault from "../../../../_runtime/05715_LinearGradient.js";
import ColorPickerUtils from "ColorPickerUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
function ColorBox(arg0) {
  ({ hue, colorBoxStyle, colorBoxInnerStyle } = arg0);
  const tmp = closure_8();
  [tmp3, tmp4] = noop.useState("rgb(0,0,0)");
  const tmp2 = _slicedToArray(noop.useState("rgb(0,0,0)"), 2);
  items = [closure_9, ColorPickerUtils.hslToRgbWorklet, hue];
  c0 = undefined;
  c1 = undefined;
  [tmp7, tmp8, tmp9] = items;
  class SaturationValueColorPickerTsx1 {
    constructor() {
      obj = { h: closure_1.get(), s: 1, l: 0.5 };
      return closure_0(obj);
    }
  }
  const items1 = [tmp8, tmp9];
  SaturationValueColorPickerTsx1.__closure = items1;
  SaturationValueColorPickerTsx1.__workletHash = 16511625483345;
  SaturationValueColorPickerTsx1.__initData = tmp7;
  const items2 = [closure_10, _mod1705.scheduleOnRN, tmp4];
  c0 = undefined;
  c1 = undefined;
  [tmp10, tmp11, tmp12] = items2;
  class SaturationValueColorPickerTsx2 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = globalThis;
        _HermesInternal = HermesInternal;
        str = ")";
        str2 = ", ";
        str3 = "rgb(";
        str4 = ", ";
        str5 = ", ";
        tmp4 = closure_0(closure_1, "rgb(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ")");
      }
      return;
    }
  }
  const items3 = [tmp11, tmp12];
  SaturationValueColorPickerTsx2.__closure = items3;
  SaturationValueColorPickerTsx2.__workletHash = 3512294390005;
  SaturationValueColorPickerTsx2.__initData = tmp10;
  const animatedReaction = _mod1652.useAnimatedReaction(SaturationValueColorPickerTsx1, SaturationValueColorPickerTsx2);
  const obj2 = { style: null, colors: null, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, children: null };
  const items4 = [tmp.colorBox, colorBoxStyle];
  obj2.style = items4;
  const items5 = ["rgb(255,255,255)", tmp3];
  obj2.colors = items5;
  const obj3 = { colors: ["rgba(0, 0, 0, 0)", "#000"], children: null };
  const obj4 = { style: null };
  const items6 = [tmp.colorBoxInner, colorBoxInnerStyle];
  obj4.style = items6;
  const tmp14 = LinearGradientDefault;
  obj3.children = timestampProducer(View, obj4);
  obj2.children = timestampProducer(LinearGradientDefault, obj3);
  return timestampProducer(tmp14, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5140);
let obj2 = {
  container: { justifyContent: "center", alignItems: "center", position: "relative" },
  selector: null,
  colorBox: null,
  colorBoxInner: null,
};
let size = {
  top: 0,
  left: 0,
  position: "absolute",
  width: 24,
  height: 24,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 2,
};
obj2.selector = size;
obj2.colorBox = { overflow: "hidden", borderRadius: nativeDefault.radii.xs };
obj2.colorBoxInner = { minHeight: 240, minWidth: 240 };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = {
  code: "(function SaturationValueColorPickerTsx1(){let[hslToRgbWorklet,hue]=this.__closure;return hslToRgbWorklet({h:hue.get(),s:1,l:0.5});})",
};
let closure_10 = {
  code: '(function SaturationValueColorPickerTsx2(result,previous){let[scheduleOnRN,setColor]=this.__closure;if(result!==previous)scheduleOnRN(setColor,"rgb("+result[0]+", "+result[1]+", "+result[2]+")");})',
};
let closure_12 = {
  code: "(function SaturationValueColorPickerTsx3(event){let[saturation,normalizeValue,width,value,height,onPanUpdate,scheduleOnRN]=this.__closure;saturation.set(normalizeValue(event.x/width));value.set(1-normalizeValue(event.y/height));onPanUpdate!=null&&scheduleOnRN(onPanUpdate);})",
};
let closure_13 = {
  code: "(function SaturationValueColorPickerTsx4(event){let[saturation,normalizeValue,width,value,height,onPanUpdate,scheduleOnRN]=this.__closure;saturation.set(normalizeValue(event.x/width));value.set(1-normalizeValue(event.y/height));onPanUpdate!=null&&scheduleOnRN(onPanUpdate);})",
};
let closure_14 = {
  code: "(function SaturationValueColorPickerTsx5(){let[onPanFinalize,scheduleOnRN]=this.__closure;onPanFinalize!=null&&scheduleOnRN(onPanFinalize);})",
};
let closure_15 = {
  code: '(function SaturationValueColorPickerTsx6(){let[hsvToRgbWorklet,hue,saturation,value,colorBoxWidth,colorBoxHeight]=this.__closure;const rgb=hsvToRgbWorklet({h:hue.get(),s:saturation.get(),v:value.get()});const bgRgb=hsvToRgbWorklet({h:hue.get(),s:0,v:Math.round(1-value.get())});return{backgroundColor:"rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")",transform:[{translateX:colorBoxWidth*saturation.get()},{translateY:colorBoxHeight*(1-value.get())}],borderColor:"rgb("+bgRgb[0]+", "+bgRgb[1]+", "+bgRgb[2]+")"};})',
};
size = fn(2);
let result = size.fileFinishedImporting("modules/color_picker/native/SaturationValueColorPicker.tsx");

export default function SaturationValueColorPicker(arg0) {
  ({ hue, saturation, value, onPanUpdate } = arg0);
  ({ onPanFinalize, style, colorBoxStyle, colorBoxInnerStyle, selectorStyle } = arg0);
  let tmp = closure_8();
  [first, c1] = noop.useState(0);
  [first1, c3] = noop.useState(0);
  [first2, c5] = noop.useState(0);
  items = [
    closure_12,
    saturation,
    ColorPickerUtils.normalizeValue,
    first,
    value,
    first1,
    onPanUpdate,
    _mod1705.scheduleOnRN,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
  let obj3 = { onBegin: null, onUpdate: null, onFinalize: null };
  class SaturationValueColorPickerTsx3 {
    constructor(arg0) {
      result = closure_0.set(closure_1(arg0.x / closure_2));
      result1 = closure_3.set(1 - closure_1(arg0.y / closure_4));
      if (null != closure_5) {
        tmp4 = closure_6;
        tmp5 = closure_6(tmp3);
      }
      return;
    }
  }
  const items1 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  SaturationValueColorPickerTsx3.__closure = items1;
  SaturationValueColorPickerTsx3.__workletHash = 12886468679050;
  SaturationValueColorPickerTsx3.__initData = tmp10;
  obj3.onBegin = SaturationValueColorPickerTsx3;
  const items2 = [
    closure_13,
    saturation,
    ColorPickerUtils.normalizeValue,
    first,
    value,
    first1,
    onPanUpdate,
    _mod1705.scheduleOnRN,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items2;
  class SaturationValueColorPickerTsx4 {
    constructor(arg0) {
      result = closure_0.set(closure_1(arg0.x / closure_2));
      result1 = closure_3.set(1 - closure_1(arg0.y / closure_4));
      if (null != closure_5) {
        tmp4 = closure_6;
        tmp5 = closure_6(tmp3);
      }
      return;
    }
  }
  const items3 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
  SaturationValueColorPickerTsx4.__closure = items3;
  SaturationValueColorPickerTsx4.__workletHash = 11287600813869;
  SaturationValueColorPickerTsx4.__initData = tmp18;
  obj3.onUpdate = SaturationValueColorPickerTsx4;
  const items4 = [closure_14, onPanFinalize, _mod1705.scheduleOnRN];
  c0 = undefined;
  c1 = undefined;
  [tmp26, tmp27, tmp28] = items4;
  class SaturationValueColorPickerTsx5 {
    constructor() {
      if (null != closure_0) {
        tmp2 = closure_1;
        tmp3 = closure_1(tmp);
      }
      return;
    }
  }
  const items5 = [tmp27, tmp28];
  SaturationValueColorPickerTsx5.__closure = items5;
  SaturationValueColorPickerTsx5.__workletHash = 13952547708884;
  SaturationValueColorPickerTsx5.__initData = tmp26;
  obj3.onFinalize = SaturationValueColorPickerTsx5;
  const panGesture = LegacyBaseButton.usePanGesture(obj3);
  const items6 = [closure_15, ColorPickerUtils.hsvToRgbWorklet, hue, saturation, value, first, first1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36] = items6;
  class SaturationValueColorPickerTsx6 {
    constructor() {
      obj = { h: closure_1.get(), s: closure_2.get(), v: closure_3.get() };
      tmp = closure_0(obj);
      obj1 = { h: closure_1.get(), s: 0, v: Math.round(1 - closure_3.get()) };
      tmp2 = closure_0(obj1);
      obj6 = {
        backgroundColor: "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")",
        transform: null,
        borderColor: null,
      };
      obj7 = { translateX: closure_4 * closure_2.get() };
      items = [,];
      items[0] = obj7;
      obj8 = { translateY: closure_5 * (1 - closure_3.get()) };
      items[1] = obj8;
      obj6.transform = items;
      obj6.borderColor = "rgb(" + tmp2[0] + ", " + tmp2[1] + ", " + tmp2[2] + ")";
      return obj6;
    }
  }
  const items7 = [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36];
  SaturationValueColorPickerTsx6.__closure = items7;
  SaturationValueColorPickerTsx6.__workletHash = 2440308818282;
  SaturationValueColorPickerTsx6.__initData = tmp30;
  const animatedStyle = _mod1652.useAnimatedStyle(SaturationValueColorPickerTsx6);
  const callback = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    _undefined2(layout.width);
    _undefined4(layout.height);
  }, []);
  const items8 = [first2, first, first1];
  const callback1 = noop.useCallback((nativeEvent) => {
    _undefined5(nativeEvent.nativeEvent.layout.width);
  }, []);
  let result = first2 / 2;
  let obj4 = { style: null, children: null };
  const items9 = [
    tmp.container,
    style,
    noop.useMemo(() => {
      const size = { height: c2 + c4, width: c0 + c4 };
      return size;
    }, items8),
  ];
  obj4.style = items9;
  const obj5 = { gesture: panGesture, children: null };
  const tmp8Result = _mod1652;
  obj5.children = timestampProducer(View, {
    onLayout: callback,
    hitSlop: { top: result, bottom: result, left: result, right: result },
    children: timestampProducer(ColorBox, { hue, colorBoxStyle, colorBoxInnerStyle }),
  });
  const items10 = [timestampProducer(LegacyBaseButton.GestureDetector, obj5)];
  const obj7 = { onLayout: callback1, pointerEvents: "box-none", style: null };
  const items11 = [tmp.selector, animatedStyle, selectorStyle];
  obj7.style = items11;
  items10[1] = timestampProducer(_modDef1652.View, obj7);
  obj4.children = items10;
  return metroImportDefault(View, obj4);
}
