// === Module 13782: ColorBox ===

// Module 13782 (ColorBox)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
function ColorBox(hue) {
  let colorBoxInnerStyle;
  let colorBoxStyle;
  hue = hue.hue;
  let importDefault;
  ({ colorBoxStyle, colorBoxInnerStyle } = hue);
  const tmp = createCacheKey();
  const tmp2 = callback(React.useState("rgb(0,0,0)"), 2);
  importDefault = tmp3;
  let obj = hue(4116);
  class S {
    constructor() {
      obj = hue(outer1_2[7]);
      obj = { h: hue.get(), s: 1, l: 0.5 };
      return obj.hslToRgbWorklet(obj);
    }
  }
  obj = { hslToRgbWorklet: hue(13780).hslToRgbWorklet, hue };
  S.__closure = obj;
  S.__workletHash = 8814597686728;
  S.__initData = closure_9;
  const fn = function v(arg0, arg1) {
    if (arg0 !== arg1) {
      const _HermesInternal = HermesInternal;
      const obj = hue(outer1_2[6]);
      hue(outer1_2[6]).runOnJS(c1)("rgb(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ")");
      const runOnJSResult = hue(outer1_2[6]).runOnJS(c1);
    }
  };
  obj = { runOnJS: hue(4116).runOnJS, setColor: tmp3 };
  fn.__closure = obj;
  fn.__workletHash = 14688428173537;
  fn.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(S, fn);
  const obj1 = { style: items, colors: items1, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, children: null };
  items = [tmp.colorBox, colorBoxStyle];
  items1 = ["rgb(255,255,255)", tmp2[0]];
  const obj2 = { colors: ["rgba(0, 0, 0, 0)", "#000"], children: null };
  const items2 = [tmp.colorBoxInner, colorBoxInnerStyle];
  const tmp5 = importDefault(4677);
  obj2[1] = callback2(View, { style: items2 });
  obj1[4] = callback2(importDefault(4677), obj2);
  return callback2(tmp5, obj1);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { justifyContent: "center", alignItems: "center", position: "relative" }, selector: null, colorBox: null, colorBoxInner: null };
createCacheKey = { top: 0, left: 0, position: "absolute", width: 24, height: 24, borderRadius: require("Themes").radii.md, borderWidth: 2 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { overflow: "hidden", borderRadius: require("Themes").radii.xs };
createCacheKey[3] = { minHeight: 240, minWidth: 240 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_9 = { code: "function SaturationValueColorPickerTsx1(){const{hslToRgbWorklet,hue}=this.__closure;return hslToRgbWorklet({h:hue.get(),s:1,l:0.5});}" };
let closure_10 = { code: "function SaturationValueColorPickerTsx2(result,previous){const{runOnJS,setColor}=this.__closure;if(result!==previous)runOnJS(setColor)(\"rgb(\"+result[0]+\", \"+result[1]+\", \"+result[2]+\")\");}" };
let closure_12 = { code: "function setSatVal_SaturationValueColorPickerTsx3({x:x,y:y}){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(x/width));value.set(1-normalizeValue(y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
let closure_13 = { code: "function SaturationValueColorPickerTsx4(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
let closure_14 = { code: "function SaturationValueColorPickerTsx5(){const{hsvToRgbWorklet,hue,saturation,value,colorBoxWidth,colorBoxHeight}=this.__closure;const rgb=hsvToRgbWorklet({h:hue.get(),s:saturation.get(),v:value.get()});const bgRgb=hsvToRgbWorklet({h:hue.get(),s:0,v:Math.round(1-value.get())});return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:colorBoxWidth*saturation.get()},{translateY:colorBoxHeight*(1-value.get())}],borderColor:\"rgb(\"+bgRgb[0]+\", \"+bgRgb[1]+\", \"+bgRgb[2]+\")\"};}" };
let obj1 = { overflow: "hidden", borderRadius: require("Themes").radii.xs };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/color_picker/native/SaturationValueColorPicker.tsx");

export default function SaturationValueColorPicker(hue) {
  let colorBoxInnerStyle;
  let colorBoxStyle;
  let onPanFinalize;
  let onPanUpdate;
  let selectorStyle;
  let style;
  hue = hue.hue;
  let saturation = hue;
  saturation = hue.saturation;
  const value = hue.value;
  let first = value;
  ({ onPanUpdate, onPanFinalize } = hue);
  let first1;
  onPanUpdate = undefined;
  onPanFinalize = undefined;
  let callback2;
  let first2;
  let createCacheKey;
  ({ style, colorBoxStyle, colorBoxInnerStyle, selectorStyle } = hue);
  let tmp = createCacheKey();
  let tmp2 = first1(onPanUpdate.useState(0), 2);
  first = tmp2[0];
  first1 = first;
  onPanUpdate = tmp2[1];
  const tmp4 = first1(onPanUpdate.useState(0), 2);
  first1 = tmp4[0];
  onPanFinalize = first1;
  callback2 = tmp4[1];
  const tmp6 = first1(onPanUpdate.useState(0), 2);
  first2 = tmp6[0];
  createCacheKey = tmp6[1];
  saturation = value;
  let items = [first, first1, saturation, value, onPanUpdate, onPanFinalize];
  const memo = onPanUpdate.useMemo(() => {
    function setSatVal(arg0) {
      let x;
      let y;
      ({ x, y } = arg0);
      const result = closure_0.set(outer1_0(outer1_2[7]).normalizeValue(x / closure_2));
      const obj = outer1_0(outer1_2[7]);
      const tmp = outer1_0;
      const tmp2 = outer1_2;
      const result1 = closure_1.set(1 - outer1_0(outer1_2[7]).normalizeValue(y / _slicedToArray));
      if (null != noop) {
        tmp(tmp2[6]).runOnJS(tmp5)();
        const tmpResult = tmp(tmp2[6]);
      }
    }
    let obj = { saturation, normalizeValue: saturation(first[7]).normalizeValue, width: first, value: saturation, height: first1, onPanUpdate, runOnJS: saturation(first[6]).runOnJS };
    setSatVal.__closure = obj;
    setSatVal.__workletHash = 12832664740692;
    setSatVal.__initData = outer1_12;
    const Gesture = saturation(first[9]).Gesture;
    const PanResult = Gesture.Pan();
    const onBeginResult = Gesture.Pan().onBegin(setSatVal);
    const fn = function o() {
      if (null != closure_5) {
        outer1_0(outer1_2[6]).runOnJS(tmp)();
        const obj = outer1_0(outer1_2[6]);
      }
    };
    obj = { onPanFinalize, runOnJS: saturation(first[6]).runOnJS };
    fn.__closure = obj;
    fn.__workletHash = 4207681669293;
    fn.__initData = outer1_13;
    return Gesture.Pan().onBegin(setSatVal).onUpdate(setSatVal).onFinalize(fn);
  }, items);
  let obj = saturation(first[6]);
  class B {
    constructor() {
      obj = saturation(value[7]);
      obj = { h: saturation.get(), s: saturation.get(), v: closure_2.get() };
      hsvToRgbWorkletResult = obj.hsvToRgbWorklet(obj);
      obj3 = saturation(value[7]);
      obj1 = { h: saturation.get(), s: 0, v: Math.round(1 - closure_2.get()) };
      hsvToRgbWorkletResult1 = obj3.hsvToRgbWorklet(obj1);
      obj2 = { backgroundColor: "rgb(" + hsvToRgbWorkletResult[0] + ", " + hsvToRgbWorkletResult[1] + ", " + hsvToRgbWorkletResult[2] + ")", transform: null, borderColor: null };
      obj3 = { translateX: c3 * saturation.get() };
      items = [, ];
      items[0] = obj3;
      obj4 = { translateY: onPanFinalize * (1 - closure_2.get()) };
      items[1] = obj4;
      obj2[1] = items;
      obj2[2] = "rgb(" + hsvToRgbWorkletResult1[0] + ", " + hsvToRgbWorkletResult1[1] + ", " + hsvToRgbWorkletResult1[2] + ")";
      return obj2;
    }
  }
  obj = { hsvToRgbWorklet: saturation(first[7]).hsvToRgbWorklet, hue, saturation, value, colorBoxWidth: first, colorBoxHeight: first1 };
  B.__closure = obj;
  B.__workletHash = 6880706874032;
  B.__initData = closure_14;
  const animatedStyle = obj.useAnimatedStyle(B);
  const callback = onPanUpdate.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    onPanUpdate(layout.width);
    callback(layout.height);
  }, []);
  const items1 = [first2, first, first1];
  const callback1 = onPanUpdate.useCallback((nativeEvent) => {
    callback2(nativeEvent.nativeEvent.layout.width);
  }, []);
  let result = first2 / 2;
  obj = { style: null, children: null };
  const items2 = [tmp.container, style, onPanUpdate.useMemo(() => ({ height: onPanFinalize + first2, width: first1 + first2 }), items1)];
  obj[0] = items2;
  let obj1 = { gesture: memo, children: null };
  let obj2 = { onLayout: callback, hitSlop: { top: result, bottom: result, left: result, right: result }, children: null };
  obj2[2] = callback2(ColorBox, { hue, colorBoxStyle, colorBoxInnerStyle });
  obj1[1] = callback2(onPanFinalize, obj2);
  const items3 = [callback2(saturation(first[9]).GestureDetector, obj1), ];
  const items4 = [tmp.selector, animatedStyle, selectorStyle];
  items3[1] = callback2(saturation(first[6]).View, { onLayout: callback1, pointerEvents: "box-none", style: items4 });
  obj[1] = items3;
  return first2(onPanFinalize, obj);
};