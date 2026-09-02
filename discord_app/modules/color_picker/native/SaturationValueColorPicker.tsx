// discord_app/modules/color_picker/native/SaturationValueColorPicker.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../_runtime/04940_LinearGradient.js";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function ColorBox(hue) {
  hue = hue.hue;
  importDefault = undefined;
  ({ colorBoxStyle, colorBoxInnerStyle } = hue);
  const tmp = callback3();
  const tmp2 = callback(React.useState("rgb(0,0,0)"), 2);
  importDefault = tmp3;
  let obj = hue(4217);
  class S {
    constructor() {
      obj = hue(closure_1_2[7]);
      obj = { h: hue.get(), s: 1, l: 0.5 };
      return obj.hslToRgbWorklet(obj);
    }
  }
  obj = { hslToRgbWorklet: hue(14475).hslToRgbWorklet, hue };
  S.__closure = obj;
  S.__workletHash = 8814597686728;
  S.__initData = closure_9;
  const fn = function v(arg0, arg1) {
    if (arg0 !== arg1) {
      const _HermesInternal = HermesInternal;
      const obj = hue(closure_1_2[6]);
      hue(closure_1_2[6]).runOnJS(closure_1)("rgb(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ")");
      const runOnJSResult = hue(closure_1_2[6]).runOnJS(closure_1);
    }
  };
  obj = { runOnJS: hue(4217).runOnJS, setColor: tmp3 };
  fn.__closure = obj;
  fn.__workletHash = 14688428173537;
  fn.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(S, fn);
  obj1 = { style: items, colors: items1, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, children: null };
  items = [tmp.colorBox, colorBoxStyle];
  items1 = ["rgb(255,255,255)", tmp2[0]];
  const obj2 = { colors: ["rgba(0, 0, 0, 0)", "#000"], children: null };
  const items2 = [tmp.colorBoxInner, colorBoxInnerStyle];
  const tmp5 = LinearGradientDefault;
  obj2[1] = callback2(View, { style: items2 });
  obj1[4] = callback2(LinearGradientDefault, obj2);
  return callback2(tmp5, obj1);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = {
  container: { justifyContent: "center", alignItems: "center", position: "relative" },
  selector: null,
  colorBox: null,
  colorBoxInner: null,
};
createCacheKey = {
  top: 0,
  left: 0,
  position: "absolute",
  width: 24,
  height: 24,
  borderRadius: ThemesDefault.radii.md,
  borderWidth: 2,
};
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { overflow: "hidden", borderRadius: ThemesDefault.radii.xs };
createCacheKey[3] = { minHeight: 240, minWidth: 240 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let closure_9 = {
  code: "function SaturationValueColorPickerTsx1(){const{hslToRgbWorklet,hue}=this.__closure;return hslToRgbWorklet({h:hue.get(),s:1,l:0.5});}",
};
let closure_10 = {
  code: 'function SaturationValueColorPickerTsx2(result,previous){const{runOnJS,setColor}=this.__closure;if(result!==previous)runOnJS(setColor)("rgb("+result[0]+", "+result[1]+", "+result[2]+")");}',
};
let closure_12 = {
  code: "function SaturationValueColorPickerTsx3(event){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(event.x/width));value.set(1-normalizeValue(event.y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}",
};
let closure_13 = {
  code: "function SaturationValueColorPickerTsx4(event){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(event.x/width));value.set(1-normalizeValue(event.y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}",
};
let closure_14 = {
  code: "function SaturationValueColorPickerTsx5(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}",
};
let closure_15 = {
  code: 'function SaturationValueColorPickerTsx6(){const{hsvToRgbWorklet,hue,saturation,value,colorBoxWidth,colorBoxHeight}=this.__closure;const rgb=hsvToRgbWorklet({h:hue.get(),s:saturation.get(),v:value.get()});const bgRgb=hsvToRgbWorklet({h:hue.get(),s:0,v:Math.round(1-value.get())});return{backgroundColor:"rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")",transform:[{translateX:colorBoxWidth*saturation.get()},{translateY:colorBoxHeight*(1-value.get())}],borderColor:"rgb("+bgRgb[0]+", "+bgRgb[1]+", "+bgRgb[2]+")"};}',
};
let obj1 = { overflow: "hidden", borderRadius: ThemesDefault.radii.xs };
let result = require("set").fileFinishedImporting("modules/color_picker/native/SaturationValueColorPicker.tsx");

export default function SaturationValueColorPicker(hue) {
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
  let callback3;
  ({ style, colorBoxStyle, colorBoxInnerStyle, selectorStyle } = hue);
  let tmp = callback3();
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
  callback3 = tmp6[1];
  saturation = value;
  let obj = saturation(first[9]);
  obj = { onBegin: null, onUpdate: null, onFinalize: null };
  const fn = function _(arg0) {
    const result = saturation.set(saturation(first[7]).normalizeValue(arg0.x / first));
    const obj = saturation(first[7]);
    const tmp = saturation;
    const tmp2 = first;
    const result1 = saturation.set(1 - saturation(first[7]).normalizeValue(arg0.y / first1));
    if (null != onPanUpdate) {
      tmp(tmp2[6]).runOnJS(tmp5)();
      const tmpResult = tmp(tmp2[6]);
    }
  };
  obj = {
    saturation,
    normalizeValue: saturation(first[7]).normalizeValue,
    width: first,
    value,
    height: first1,
    onPanUpdate,
    runOnJS: saturation(first[6]).runOnJS,
  };
  fn.__closure = obj;
  fn.__workletHash = 1039948278130;
  fn.__initData = closure_12;
  obj[0] = fn;
  const fn2 = function h(arg0) {
    const result = saturation.set(saturation(first[7]).normalizeValue(arg0.x / first));
    const obj = saturation(first[7]);
    const tmp = saturation;
    const tmp2 = first;
    const result1 = saturation.set(1 - saturation(first[7]).normalizeValue(arg0.y / first1));
    if (null != onPanUpdate) {
      tmp(tmp2[6]).runOnJS(tmp5)();
      const tmpResult = tmp(tmp2[6]);
    }
  };
  fn2.__closure = {
    saturation,
    normalizeValue: saturation(first[7]).normalizeValue,
    width: first,
    value,
    height: first1,
    onPanUpdate,
    runOnJS: saturation(first[6]).runOnJS,
  };
  fn2.__workletHash = 3656850328181;
  fn2.__initData = closure_13;
  obj[1] = fn2;
  const fn3 = function c() {
    if (null != onPanFinalize) {
      saturation(first[6]).runOnJS(tmp)();
      const obj = saturation(first[6]);
    }
  };
  obj1 = {
    saturation,
    normalizeValue: saturation(first[7]).normalizeValue,
    width: first,
    value,
    height: first1,
    onPanUpdate,
    runOnJS: saturation(first[6]).runOnJS,
  };
  fn3.__closure = { onPanFinalize, runOnJS: saturation(first[6]).runOnJS };
  fn3.__workletHash = 12553589408812;
  fn3.__initData = closure_14;
  obj[2] = fn3;
  const panGesture = obj.usePanGesture(obj);
  let obj5 = saturation(first[6]);
  const fn4 = function z() {
    let obj = saturation(first[7]);
    obj = { h: saturation.get(), s: saturation.get(), v: first.get() };
    const hsvToRgbWorkletResult = obj.hsvToRgbWorklet(obj);
    let obj2 = saturation(first[7]);
    obj = { h: saturation.get(), s: 0, v: Math.round(1 - first.get()) };
    const hsvToRgbWorkletResult1 = obj2.hsvToRgbWorklet(obj);
    obj1 = {
      backgroundColor:
        "rgb(" + hsvToRgbWorkletResult[0] + ", " + hsvToRgbWorkletResult[1] + ", " + hsvToRgbWorkletResult[2] + ")",
      transform: null,
      borderColor: null,
    };
    obj2 = { translateX: first1 * saturation.get() };
    const items = [obj2, { translateY: onPanFinalize * (1 - first.get()) }];
    obj1[1] = items;
    obj1[2] =
      "rgb(" + hsvToRgbWorkletResult1[0] + ", " + hsvToRgbWorkletResult1[1] + ", " + hsvToRgbWorkletResult1[2] + ")";
    return obj1;
  };
  let obj2 = { onPanFinalize, runOnJS: saturation(first[6]).runOnJS };
  fn4.__closure = {
    hsvToRgbWorklet: saturation(first[7]).hsvToRgbWorklet,
    hue,
    saturation,
    value,
    colorBoxWidth: first,
    colorBoxHeight: first1,
  };
  fn4.__workletHash = 15029576157619;
  fn4.__initData = closure_15;
  const animatedStyle = obj5.useAnimatedStyle(fn4);
  const callback = onPanUpdate.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    onPanUpdate(layout.width);
    callback(layout.height);
  }, []);
  let items = [first2, first, first1];
  const callback1 = onPanUpdate.useCallback((nativeEvent) => {
    callback2(nativeEvent.nativeEvent.layout.width);
  }, []);
  let result = first2 / 2;
  const obj4 = { style: null, children: null };
  const items1 = [
    tmp.container,
    style,
    onPanUpdate.useMemo(() => ({ height: onPanFinalize + first2, width: first1 + first2 }), items),
  ];
  obj4[0] = items1;
  obj5 = { gesture: panGesture, children: null };
  const obj3 = {
    hsvToRgbWorklet: saturation(first[7]).hsvToRgbWorklet,
    hue,
    saturation,
    value,
    colorBoxWidth: first,
    colorBoxHeight: first1,
  };
  obj5[1] = callback2(onPanFinalize, {
    onLayout: callback,
    hitSlop: { top: result, bottom: result, left: result, right: result },
    children: callback2(ColorBox, { hue, colorBoxStyle, colorBoxInnerStyle }),
  });
  const items2 = [callback2(saturation(first[9]).GestureDetector, obj5)];
  const items3 = [tmp.selector, animatedStyle, selectorStyle];
  items2[1] = callback2(saturation(first[6]).View, { onLayout: callback1, pointerEvents: "box-none", style: items3 });
  obj4[1] = items2;
  return first2(onPanFinalize, obj4);
}
