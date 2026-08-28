// === Module 14188: HuePicker ===

// Module 14188 (HuePicker)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = [0, 60, 120, 180, 240, 300, 360];
createCacheKey = { container: { justifyContent: "center", alignItems: "center" }, containerFullWidth: { alignSelf: "stretch", overflow: "visible" }, slider: null, colorBar: null, colorBarFullWidth: null, colorBarInner: null, colorBarInnerFullWidth: null };
createCacheKey = { left: 0, position: "absolute", borderColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 24, height: 36, borderRadius: ThemesDefault.radii.sm, borderWidth: 2 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { borderRadius: ThemesDefault.radii.xs };
createCacheKey[4] = { width: "100%" };
createCacheKey[5] = { minWidth: 240, height: 32 };
createCacheKey[6] = { minWidth: 0, width: "100%" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function HuePickerTsx1(event){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(event.x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
let closure_11 = { code: "function HuePickerTsx2(event){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(event.x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
let closure_12 = { code: "function HuePickerTsx3(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
let closure_13 = { code: "function HuePickerTsx4(){const{hslToRgbWorklet,hue,saturation,lightness,fullWidth,sliderWidth,barWidth}=this.__closure;const rgb=hslToRgbWorklet({h:hue.get(),s:saturation,l:lightness});const centerOffset=fullWidth?sliderWidth.get()/2:0;return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:barWidth.get()*hue.get()/360-centerOffset}]};}" };
let closure_14 = { code: "function HuePickerTsx5(){const{sliderHeight,barHeight,fullWidth,sliderWidth}=this.__closure;const paddingTop=sliderHeight.get()-barHeight.get()>0?(sliderHeight.get()-barHeight.get())/2:0;const paddingLeft=fullWidth?0:sliderWidth.get()/2;return{paddingTop:paddingTop,paddingBottom:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingLeft};}" };
let obj1 = { borderRadius: ThemesDefault.radii.xs };
let result = require("set").fileFinishedImporting("modules/color_picker/native/HuePicker.tsx");

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
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  sharedValue3 = undefined;
  let tmp = callback();
  let obj = hue(onPanUpdate[8]);
  sharedValue = obj.useSharedValue(0);
  obj1 = hue(onPanUpdate[8]);
  sharedValue1 = obj1.useSharedValue(tmp.slider.height);
  let obj2 = hue(onPanUpdate[8]);
  sharedValue2 = obj2.useSharedValue(tmp.colorBarInner.height);
  let obj3 = hue(onPanUpdate[8]);
  sharedValue3 = obj3.useSharedValue(0);
  let obj4 = hue(onPanUpdate[6]);
  obj = { onBegin: null, onUpdate: null, onFinalize: null };
  const fn = function s(arg0) {
    const result = hue.set(360 * hue(onPanUpdate[7]).normalizeValue(arg0.x / sharedValue3.get()));
    if (null != onPanUpdate) {
      hue(onPanUpdate[8]).runOnJS(tmp4)();
      const tmpResult = hue(onPanUpdate[8]);
    }
  };
  obj = { hue, normalizeValue: hue(onPanUpdate[7]).normalizeValue, barWidth: sharedValue3, onPanUpdate, runOnJS: hue(onPanUpdate[8]).runOnJS };
  fn.__closure = obj;
  fn.__workletHash = 353921971989;
  fn.__initData = closure_10;
  obj[0] = fn;
  const fn2 = function u(arg0) {
    const result = hue.set(360 * hue(onPanUpdate[7]).normalizeValue(arg0.x / sharedValue3.get()));
    if (null != onPanUpdate) {
      hue(onPanUpdate[8]).runOnJS(tmp4)();
      const tmpResult = hue(onPanUpdate[8]);
    }
  };
  obj1 = { hue, normalizeValue: hue(onPanUpdate[7]).normalizeValue, barWidth: sharedValue3, onPanUpdate, runOnJS: hue(onPanUpdate[8]).runOnJS };
  fn2.__closure = obj1;
  fn2.__workletHash = 10969858065142;
  fn2.__initData = closure_11;
  obj[1] = fn2;
  const fn3 = function o() {
    if (null != onPanFinalize) {
      hue(onPanUpdate[8]).runOnJS(tmp)();
      const obj = hue(onPanUpdate[8]);
    }
  };
  obj2 = { onPanFinalize, runOnJS: hue(onPanUpdate[8]).runOnJS };
  fn3.__closure = obj2;
  fn3.__workletHash = 2479115151384;
  fn3.__initData = closure_12;
  obj[2] = fn3;
  let items = [saturation, num];
  const panGesture = obj4.usePanGesture(obj);
  const memo = sharedValue.useMemo(() => closure_1_8.map((h) => {
    let obj = closure_1_0(closure_1_2[7]);
    obj = { h, s: closure_1, l: closure_2 };
    const tmp = closure_1_3(obj.hslToRgbWorklet(obj), 3);
    return "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")";
  }), items);
  const fn4 = function x() {
    let obj = hue(onPanUpdate[7]);
    obj = { h: hue.get(), s: sharedValue3, l: onPanUpdate };
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
  obj3 = { hslToRgbWorklet: hue(onPanUpdate[7]).hslToRgbWorklet, hue, saturation, lightness: num, fullWidth: flag, sliderWidth: sharedValue, barWidth: sharedValue3 };
  fn4.__closure = obj3;
  fn4.__workletHash = 11978530182863;
  fn4.__initData = closure_13;
  const items1 = [sharedValue];
  const animatedStyle = hue(onPanUpdate[8]).useAnimatedStyle(fn4);
  const items2 = [sharedValue3];
  callback = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  const callback1 = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue3.set(nativeEvent.nativeEvent.layout.width);
  }, items2);
  const obj10 = hue(onPanUpdate[8]);
  const tmp2 = hue;
  const fn5 = function y() {
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
  fn5.__closure = { sliderHeight: sharedValue1, barHeight: sharedValue2, fullWidth: flag, sliderWidth: sharedValue };
  fn5.__workletHash = 5400515770640;
  fn5.__initData = closure_14;
  const animatedStyle1 = hue(onPanUpdate[8]).useAnimatedStyle(fn5);
  const items3 = [tmp.container, , , ];
  let containerFullWidth = flag;
  if (flag) {
    containerFullWidth = tmp.containerFullWidth;
  }
  obj4 = { style: items3, children: null };
  items3[1] = containerFullWidth;
  items3[2] = style;
  items3[3] = animatedStyle1;
  const obj5 = { gesture: panGesture, children: null };
  const obj6 = { colors: memo, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, style: null, children: null };
  const items4 = [tmp.colorBar, ];
  let colorBarFullWidth = flag;
  const obj12 = hue(onPanUpdate[8]);
  const tmp14 = sharedValue3;
  if (flag) {
    colorBarFullWidth = tmp.colorBarFullWidth;
  }
  items4[1] = colorBarFullWidth;
  obj6[3] = items4;
  const obj7 = { onLayout: callback1, style: null };
  const items5 = [tmp.colorBarInner, , ];
  if (flag) {
    flag = tmp.colorBarInnerFullWidth;
  }
  items5[1] = flag;
  items5[2] = colorBarInnerStyle;
  obj7[1] = items5;
  obj6[4] = sharedValue2(sharedValue1, obj7);
  obj5[1] = sharedValue2(sharedValue3(onPanUpdate[9]), obj6);
  const items6 = [sharedValue2(tmp2(onPanUpdate[6]).GestureDetector, obj5), ];
  const items7 = [tmp.slider, sliderStyle, animatedStyle];
  items6[1] = sharedValue2(sharedValue3(onPanUpdate[8]).View, { onLayout: callback, pointerEvents: "box-none", style: items7 });
  obj4[1] = items6;
  return tmp14(sharedValue3(onPanUpdate[8]).View, obj4);
};