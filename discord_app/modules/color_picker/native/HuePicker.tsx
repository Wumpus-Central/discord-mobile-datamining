// discord_app/modules/color_picker/native/HuePicker.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = [0, 60, 120, 180, 240, 300, 360];
const createCacheKey = { left: 0, position: "absolute", borderColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 24, height: 36, borderRadius: ThemesDefault.radii.sm, borderWidth: 2 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { borderRadius: ThemesDefault.radii.xs };
createCacheKey[4] = { width: "100%" };
createCacheKey[5] = { minWidth: 240, height: 32 };
createCacheKey[6] = { minWidth: 0, width: "100%" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function setSatVal_HuePickerTsx1({x:x}){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
let closure_11 = { code: "function HuePickerTsx2(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
let closure_12 = { code: "function HuePickerTsx3(){const{hslToRgbWorklet,hue,saturation,lightness,fullWidth,sliderWidth,barWidth}=this.__closure;const rgb=hslToRgbWorklet({h:hue.get(),s:saturation,l:lightness});const centerOffset=fullWidth?sliderWidth.get()/2:0;return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:barWidth.get()*hue.get()/360-centerOffset}]};}" };
let closure_13 = { code: "function HuePickerTsx4(){const{sliderHeight,barHeight,fullWidth,sliderWidth}=this.__closure;const paddingTop=sliderHeight.get()-barHeight.get()>0?(sliderHeight.get()-barHeight.get())/2:0;const paddingLeft=fullWidth?0:sliderWidth.get()/2;return{paddingTop:paddingTop,paddingBottom:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingLeft};}" };
let result = require("obj132").fileFinishedImporting("modules/color_picker/native/HuePicker.tsx");

export default function HuePicker(hue) {
  hue = hue.hue;
  ({ onPanUpdate, onPanFinalize, saturation } = hue);
  ({ style, colorBarInnerStyle, sliderStyle } = hue);
  if (saturation === undefined) {
    saturation = 1;
  }
  let sharedValue3 = saturation;
  let num = hue.lightness;
  if (num === undefined) {
    num = 0.5;
  }
  onPanUpdate = num;
  let flag = hue.fullWidth;
  if (flag === undefined) {
    flag = false;
  }
  onPanFinalize = flag;
  let tmp = callback();
  let obj = hue(onPanUpdate[7]);
  const sharedValue = obj.useSharedValue(0);
  obj1 = hue(onPanUpdate[7]);
  const sharedValue1 = obj1.useSharedValue(tmp.slider.height);
  let obj2 = hue(onPanUpdate[7]);
  const sharedValue2 = obj2.useSharedValue(tmp.colorBarInner.height);
  let obj3 = hue(onPanUpdate[7]);
  sharedValue3 = obj3.useSharedValue(0);
  let items = [hue, sharedValue3, onPanUpdate, onPanFinalize];
  const items1 = [saturation, num];
  const memo = sharedValue.useMemo(() => {
    function setSatVal(arg0) {
      const result = closure_0.set(360 * hue(onPanUpdate[6]).normalizeValue(arg0.x / closure_1.get()));
      if (null != closure_2) {
        hue(onPanUpdate[7]).runOnJS(tmp4)();
        const tmpResult = hue(onPanUpdate[7]);
      }
      const obj = hue(onPanUpdate[6]);
    }
    let obj = { hue, normalizeValue: hue(onPanUpdate[6]).normalizeValue, barWidth: sharedValue3, onPanUpdate, runOnJS: hue(onPanUpdate[7]).runOnJS };
    setSatVal.__closure = obj;
    setSatVal.__workletHash = 17165611898087;
    setSatVal.__initData = closure_1_10;
    const Gesture = hue(onPanUpdate[8]).Gesture;
    const PanResult = Gesture.Pan();
    const onBeginResult = Gesture.Pan().onBegin(setSatVal);
    const fn = function r() {
      if (null != closure_3) {
        hue(onPanUpdate[7]).runOnJS(tmp)();
        const obj = hue(onPanUpdate[7]);
      }
    };
    obj = { onPanFinalize, runOnJS: hue(onPanUpdate[7]).runOnJS };
    fn.__closure = obj;
    fn.__workletHash = 182773971449;
    fn.__initData = closure_1_11;
    return Gesture.Pan().onBegin(setSatVal).onUpdate(setSatVal).onFinalize(fn);
  }, items);
  const memo1 = sharedValue.useMemo(() => closure_1_8.map((item, index) => {
    hue(onPanUpdate[6]);
    const obj = { h: item, s: closure_1, l: closure_2 };
    const tmp = onPanFinalize(obj.hslToRgbWorklet(obj), 3);
    return "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")";
  }), items1);
  let fn = function y() {
    hue(onPanUpdate[6]);
    let obj = { h: hue.get(), s: sharedValue3, l: onPanUpdate };
    const hslToRgbWorkletResult = obj.hslToRgbWorklet(obj);
    let num = 0;
    if (onPanFinalize) {
      num = sharedValue.get() / 2;
    }
    obj = { backgroundColor: "rgb(" + hslToRgbWorkletResult[0] + ", " + hslToRgbWorkletResult[1] + ", " + hslToRgbWorkletResult[2] + ")", transform: null };
    obj1 = { translateX: null };
    const value = sharedValue3.get();
    obj1[0] = value * hue.get() / 360 - num;
    const items = [obj1];
    obj[1] = items;
    return obj;
  };
  obj = { hslToRgbWorklet: hue(onPanUpdate[6]).hslToRgbWorklet, hue, saturation, lightness: num, fullWidth: flag, sliderWidth: sharedValue, barWidth: sharedValue3 };
  fn.__closure = obj;
  fn.__workletHash = 11845890180264;
  fn.__initData = closure_12;
  const items2 = [sharedValue];
  const animatedStyle = hue(onPanUpdate[7]).useAnimatedStyle(fn);
  const items3 = [sharedValue3];
  callback = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
  }, items2);
  const callback1 = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue3.set(nativeEvent.nativeEvent.layout.width);
  }, items3);
  const obj5 = hue(onPanUpdate[7]);
  const tmp2 = hue;
  const fn2 = function x() {
    let value = sharedValue1.get();
    let paddingTop = 0;
    if (value - sharedValue2.get() > 0) {
      value = sharedValue1.get();
      paddingTop = (value - sharedValue2.get()) / 2;
    }
    let paddingLeft = 0;
    if (!onPanFinalize) {
      paddingLeft = sharedValue.get() / 2;
    }
    return { paddingTop, paddingBottom: paddingTop, paddingLeft, paddingRight: paddingLeft };
  };
  fn2.__closure = { sliderHeight: sharedValue1, barHeight: sharedValue2, fullWidth: flag, sliderWidth: sharedValue };
  fn2.__workletHash = 3108469558001;
  fn2.__initData = closure_13;
  const animatedStyle1 = hue(onPanUpdate[7]).useAnimatedStyle(fn2);
  const items4 = [tmp.container, , , ];
  let containerFullWidth = flag;
  if (flag) {
    containerFullWidth = tmp.containerFullWidth;
  }
  obj = { style: items4, children: null };
  items4[1] = containerFullWidth;
  items4[2] = style;
  items4[3] = animatedStyle1;
  obj1 = { gesture: memo, children: null };
  obj2 = { colors: memo1, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, style: null, children: null };
  const items5 = [tmp.colorBar, ];
  let colorBarFullWidth = flag;
  const obj7 = hue(onPanUpdate[7]);
  const tmp14 = sharedValue3;
  if (flag) {
    colorBarFullWidth = tmp.colorBarFullWidth;
  }
  items5[1] = colorBarFullWidth;
  obj2[3] = items5;
  obj3 = { onLayout: callback1, style: null };
  const items6 = [tmp.colorBarInner, , ];
  if (flag) {
    flag = tmp.colorBarInnerFullWidth;
  }
  items6[1] = flag;
  items6[2] = colorBarInnerStyle;
  obj3[1] = items6;
  obj2[4] = sharedValue2(sharedValue1, obj3);
  obj1[1] = sharedValue2(sharedValue3(onPanUpdate[9]), obj2);
  const items7 = [sharedValue2(tmp2(onPanUpdate[8]).GestureDetector, obj1), ];
  const items8 = [tmp.slider, sliderStyle, animatedStyle];
  items7[1] = sharedValue2(sharedValue3(onPanUpdate[7]).View, { onLayout: callback, pointerEvents: "box-none", style: items8 });
  obj[1] = items7;
  return tmp14(sharedValue3(onPanUpdate[7]).View, obj);
};