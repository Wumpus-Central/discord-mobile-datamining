// discord_app/modules/color_picker/native/SaturationValueColorPicker.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import ColorPickerUtils from "ColorPickerUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = tmp(4296);
require = fn;
function ColorBox(hue) {
  hue = hue.hue;
  ({ colorBoxStyle, colorBoxInnerStyle } = hue);
  const tmp = closure_8();
  const tmp2 = _slicedToArray(noop.useState("rgb(0,0,0)"), 2);
  importDefault = tmp3;
  let obj = hue(4296);
  class S {
    constructor() {
      obj = closure_0(closure_2[7]);
      obj = { h: hue.get(), s: 1, l: 0.5 };
      return obj.hslToRgbWorklet(obj);
    }
  }
  obj = { hslToRgbWorklet: hue(14598).hslToRgbWorklet, hue };
  S.__closure = obj;
  S.__workletHash = 8814597686728;
  S.__initData = __initData;
  const fn = function v(arg0, arg1) {
    if (arg0 !== arg1) {
      const _HermesInternal = HermesInternal;
      ReanimatedRexport.runOnJS(closure_1)("rgb(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ")");
      const runOnJSResult = ReanimatedRexport.runOnJS(closure_1);
    }
  };
  obj = { runOnJS: hue(4296).runOnJS, setColor: tmp3 };
  fn.__closure = obj;
  fn.__workletHash = 14688428173537;
  fn.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(S, fn);
  const obj1 = { style: null, colors: null, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, children: null };
  const items = [tmp.colorBox, colorBoxStyle];
  obj1.style = items;
  const items1 = ["rgb(255,255,255)", tmp2[0]];
  obj1.colors = items1;
  const obj2 = { colors: ["rgba(0, 0, 0, 0)", "#000"], children: null };
  const obj3 = { style: null };
  const items2 = [tmp.colorBoxInner, colorBoxInnerStyle];
  obj3.style = items2;
  const tmp5 = LinearGradientDefault;
  obj2.children = closure_6(View, obj3);
  obj1.children = closure_6(LinearGradientDefault, obj2);
  return closure_6(tmp5, obj1);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
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
createStyles.selector = size;
createStyles = { overflow: "hidden", borderRadius: nativeDefault.radii.xs };
createStyles.colorBox = createStyles;
createStyles.colorBoxInner = { minHeight: 240, minWidth: 240 };
let closure_8 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function SaturationValueColorPickerTsx1(){const{hslToRgbWorklet,hue}=this.__closure;return hslToRgbWorklet({h:hue.get(),s:1,l:0.5});}",
};
const __initData2 = {
  code: 'function SaturationValueColorPickerTsx2(result,previous){const{runOnJS,setColor}=this.__closure;if(result!==previous)runOnJS(setColor)("rgb("+result[0]+", "+result[1]+", "+result[2]+")");}',
};
const __initData3 = {
  code: "function SaturationValueColorPickerTsx3(event){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(event.x/width));value.set(1-normalizeValue(event.y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}",
};
const __initData4 = {
  code: "function SaturationValueColorPickerTsx4(event){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(event.x/width));value.set(1-normalizeValue(event.y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}",
};
const __initData5 = {
  code: "function SaturationValueColorPickerTsx5(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}",
};
const __initData6 = {
  code: 'function SaturationValueColorPickerTsx6(){const{hsvToRgbWorklet,hue,saturation,value,colorBoxWidth,colorBoxHeight}=this.__closure;const rgb=hsvToRgbWorklet({h:hue.get(),s:saturation.get(),v:value.get()});const bgRgb=hsvToRgbWorklet({h:hue.get(),s:0,v:Math.round(1-value.get())});return{backgroundColor:"rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")",transform:[{translateX:colorBoxWidth*saturation.get()},{translateY:colorBoxHeight*(1-value.get())}],borderColor:"rgb("+bgRgb[0]+", "+bgRgb[1]+", "+bgRgb[2]+")"};}',
};
size = fn(2);
let result = size.fileFinishedImporting("modules/color_picker/native/SaturationValueColorPicker.tsx");

export default function SaturationValueColorPicker(hue) {
  hue = hue.hue;
  const saturation = hue.saturation;
  value = hue.value;
  dependencyMap = value;
  ({ onPanUpdate, onPanFinalize } = hue);
  let colorBoxWidth;
  noop = undefined;
  closure_8 = undefined;
  ({ style, colorBoxStyle, colorBoxInnerStyle, selectorStyle } = hue);
  let tmp = closure_8();
  const tmp2 = colorBoxWidth(noop.useState(0), 2);
  colorBoxWidth = tmp2[0];
  noop = tmp2[1];
  const tmp4 = colorBoxWidth(noop.useState(0), 2);
  const first1 = tmp4[0];
  closure_6 = tmp4[1];
  const tmp6 = colorBoxWidth(noop.useState(0), 2);
  const first2 = tmp6[0];
  closure_8 = tmp6[1];
  closure_129_0 = saturation;
  closure_129_1 = value;
  closure_129_2 = colorBoxWidth;
  closure_129_3 = first1;
  closure_129_4 = onPanUpdate;
  closure_129_5 = onPanFinalize;
  hue(6655);
  let obj = { onBegin: null, onUpdate: null, onFinalize: null };
  const fn = function _(arg0) {
    const result = hue.set(ColorPickerUtils.normalizeValue(arg0.x / value));
    const result1 = saturation.set(1 - ColorPickerUtils.normalizeValue(arg0.y / first));
    if (null != closure_4) {
      ReanimatedRexport.runOnJS(tmp5)();
      const tmpResult = ReanimatedRexport;
    }
  };
  let size = {
    saturation,
    normalizeValue: hue(14598).normalizeValue,
    width: colorBoxWidth,
    value,
    height: first1,
    onPanUpdate,
    runOnJS: hue(4296).runOnJS,
  };
  fn.__closure = size;
  fn.__workletHash = 1039948278130;
  fn.__initData = __initData3;
  obj.onBegin = fn;
  const fn2 = function h(arg0) {
    const result = hue.set(ColorPickerUtils.normalizeValue(arg0.x / value));
    const result1 = saturation.set(1 - ColorPickerUtils.normalizeValue(arg0.y / first));
    if (null != closure_4) {
      ReanimatedRexport.runOnJS(tmp5)();
      const tmpResult = ReanimatedRexport;
    }
  };
  const size1 = {
    saturation,
    normalizeValue: hue(14598).normalizeValue,
    width: colorBoxWidth,
    value,
    height: first1,
    onPanUpdate,
    runOnJS: hue(4296).runOnJS,
  };
  fn2.__closure = size1;
  fn2.__workletHash = 3656850328181;
  fn2.__initData = __initData4;
  obj.onUpdate = fn2;
  const fn3 = function c() {
    if (null != first1) {
      ReanimatedRexport.runOnJS(tmp)();
    }
  };
  obj = { onPanFinalize, runOnJS: hue(4296).runOnJS };
  fn3.__closure = obj;
  fn3.__workletHash = 12553589408812;
  fn3.__initData = __initData5;
  obj.onFinalize = fn3;
  const panGesture = obj.usePanGesture(obj);
  let obj5 = hue(4296);
  const fn4 = function z() {
    let obj = { h: hue.get(), s: saturation.get(), v: value.get() };
    const hsvToRgbWorkletResult = obj.hsvToRgbWorklet(obj);
    let obj2 = ColorPickerUtils;
    obj = { h: hue.get(), s: 0, v: Math.round(1 - value.get()) };
    const hsvToRgbWorkletResult1 = obj2.hsvToRgbWorklet(obj);
    const obj1 = {
      backgroundColor:
        "rgb(" + hsvToRgbWorkletResult[0] + ", " + hsvToRgbWorkletResult[1] + ", " + hsvToRgbWorkletResult[2] + ")",
      transform: null,
      borderColor: null,
    };
    obj2 = { translateX: first * saturation.get() };
    const items = [obj2, { translateY: first1 * (1 - value.get()) }];
    obj1.transform = items;
    obj1.borderColor =
      "rgb(" + hsvToRgbWorkletResult1[0] + ", " + hsvToRgbWorkletResult1[1] + ", " + hsvToRgbWorkletResult1[2] + ")";
    return obj1;
  };
  fn4.__closure = {
    hsvToRgbWorklet: hue(14598).hsvToRgbWorklet,
    hue,
    saturation,
    value,
    colorBoxWidth,
    colorBoxHeight: first1,
  };
  fn4.__workletHash = 15029576157619;
  fn4.__initData = __initData6;
  const animatedStyle = obj5.useAnimatedStyle(fn4);
  const callback = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    closure_4(layout.width);
    closure_6(layout.height);
  }, []);
  let items = [first2, colorBoxWidth, first1];
  const callback1 = noop.useCallback((nativeEvent) => {
    closure_8(nativeEvent.nativeEvent.layout.width);
  }, []);
  let result = first2 / 2;
  let obj2 = { style: null, children: null };
  const items1 = [
    tmp.container,
    style,
    noop.useMemo(() => {
      const size = { height: first1 + first2, width: first + first2 };
      return size;
    }, items),
  ];
  obj2.style = items1;
  const obj3 = { gesture: panGesture, children: null };
  let obj1 = {
    hsvToRgbWorklet: hue(14598).hsvToRgbWorklet,
    hue,
    saturation,
    value,
    colorBoxWidth,
    colorBoxHeight: first1,
  };
  obj3.children = closure_6(first1, {
    onLayout: callback,
    hitSlop: { top: result, bottom: result, left: result, right: result },
    children: closure_6(ColorBox, { hue, colorBoxStyle, colorBoxInnerStyle }),
  });
  const items2 = [closure_6(hue(6655).GestureDetector, obj3)];
  obj5 = { onLayout: callback1, pointerEvents: "box-none", style: null };
  const items3 = [tmp.selector, animatedStyle, selectorStyle];
  obj5.style = items3;
  items2[1] = closure_6(saturation(4296).View, obj5);
  obj2.children = items2;
  return first2(first1, obj2);
}
