// === Module 14883: HuePicker ===

// Module 14883 (HuePicker)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4493 */;
import ColorPickerUtils from "ColorPickerUtils" /* 14880 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = [0, 60, 120, 180, 240, 300, 360];
const createStyles = fn(4757);
let obj2 = { container: { justifyContent: "center", alignItems: "center" }, containerFullWidth: { alignSelf: "stretch", overflow: "visible" }, slider: null, colorBar: null, colorBarFullWidth: null, colorBarInner: null, colorBarInnerFullWidth: null };
let size = { left: 0, position: "absolute", borderColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 24, height: 36, borderRadius: nativeDefault.radii.sm, borderWidth: 2 };
obj2.slider = size;
obj2.colorBar = { borderRadius: nativeDefault.radii.xs };
obj2.colorBarFullWidth = { width: "100%" };
obj2.colorBarInner = { minWidth: 240, height: 32 };
obj2.colorBarInnerFullWidth = { minWidth: 0, width: "100%" };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function HuePickerTsx1(event){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(event.x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData2 = { code: "function HuePickerTsx2(event){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(event.x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData3 = { code: "function HuePickerTsx3(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
const __initData4 = { code: "function HuePickerTsx4(){const{hslToRgbWorklet,hue,saturation,lightness,fullWidth,sliderWidth,barWidth}=this.__closure;const rgb=hslToRgbWorklet({h:hue.get(),s:saturation,l:lightness});const centerOffset=fullWidth?sliderWidth.get()/2:0;return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:barWidth.get()*hue.get()/360-centerOffset}]};}" };
const __initData5 = { code: "function HuePickerTsx5(){const{sliderHeight,barHeight,fullWidth,sliderWidth}=this.__closure;const paddingTop=sliderHeight.get()-barHeight.get()>0?(sliderHeight.get()-barHeight.get())/2:0;const paddingLeft=fullWidth?0:sliderWidth.get()/2;return{paddingTop:paddingTop,paddingBottom:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingLeft};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/color_picker/native/HuePicker.tsx");

export default function HuePicker(hue) {
  hue = hue.hue;
  ({ onPanUpdate, onPanFinalize, saturation } = hue);
  ({ style, colorBarInnerStyle, sliderStyle } = hue);
  if (saturation === undefined) {
    saturation = 1;
  }
  let num = hue.lightness;
  if (num === undefined) {
    num = 0.5;
  }
  let flag = hue.fullWidth;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_9();
  const sharedValue = hue(num[8]).useSharedValue(0);
  let obj = hue(num[8]);
  const tmp2 = hue;
  const sharedValue1 = hue(num[8]).useSharedValue(tmp.slider.height);
  const obj2 = hue(num[8]);
  const sharedValue2 = hue(num[8]).useSharedValue(tmp.colorBarInner.height);
  const obj3 = hue(num[8]);
  const sharedValue3 = hue(num[8]).useSharedValue(0);
  closure_129_0 = hue;
  closure_129_1 = sharedValue3;
  closure_129_2 = onPanUpdate;
  closure_129_3 = onPanFinalize;
  let obj4 = hue(num[8]);
  const obj6 = { onBegin: null, onUpdate: null, onFinalize: null };
  const fn = function s(arg0) {
    const result = hue.set(360 * ColorPickerUtils.normalizeValue(arg0.x / saturation.get()));
    if (null != num) {
      ReanimatedRexport.runOnJS(tmp4)();
      const tmpResult = ReanimatedRexport;
    }
  };
  let obj5 = hue(num[6]);
  fn.__closure = { hue, normalizeValue: hue(num[7]).normalizeValue, barWidth: sharedValue3, onPanUpdate, runOnJS: hue(num[8]).runOnJS };
  fn.__workletHash = 353921971989;
  fn.__initData = __initData;
  obj6.onBegin = fn;
  const fn2 = function u(arg0) {
    const result = hue.set(360 * ColorPickerUtils.normalizeValue(arg0.x / saturation.get()));
    if (null != num) {
      ReanimatedRexport.runOnJS(tmp4)();
      const tmpResult = ReanimatedRexport;
    }
  };
  const obj7 = { hue, normalizeValue: hue(num[7]).normalizeValue, barWidth: sharedValue3, onPanUpdate, runOnJS: hue(num[8]).runOnJS };
  fn2.__closure = { hue, normalizeValue: hue(num[7]).normalizeValue, barWidth: sharedValue3, onPanUpdate, runOnJS: hue(num[8]).runOnJS };
  fn2.__workletHash = 10969858065142;
  fn2.__initData = __initData2;
  obj6.onUpdate = fn2;
  const fn3 = function o() {
    if (null != flag) {
      ReanimatedRexport.runOnJS(tmp)();
    }
  };
  const obj8 = { hue, normalizeValue: hue(num[7]).normalizeValue, barWidth: sharedValue3, onPanUpdate, runOnJS: hue(num[8]).runOnJS };
  fn3.__closure = { onPanFinalize, runOnJS: hue(num[8]).runOnJS };
  fn3.__workletHash = 2479115151384;
  fn3.__initData = __initData3;
  obj6.onFinalize = fn3;
  let items = [saturation, num];
  const panGesture = obj5.usePanGesture(obj6);
  const memo = sharedValue.useMemo(() => closure_8.map((h) => {
    const tmp = flag(hue(num[7]).hslToRgbWorklet({ h, s, l }), 3);
    return "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")";
  }), items);
  const obj9 = { onPanFinalize, runOnJS: hue(num[8]).runOnJS };
  const fn4 = function x() {
    const obj = ColorPickerUtils;
    const hslToRgbWorkletResult = obj.hslToRgbWorklet({ h: hue.get(), s: saturation, l: num });
    num = 0;
    if (flag) {
      num = sharedValue.get() / 2;
    }
    const obj4 = { backgroundColor: "rgb(" + hslToRgbWorkletResult[0] + ", " + hslToRgbWorkletResult[1] + ", " + hslToRgbWorkletResult[2] + ")", transform: null };
    const obj5 = { translateX: null };
    value = sharedValue3.get();
    obj5.translateX = value * hue.get() / 360 - num;
    const items = [obj5];
    obj4.transform = items;
    return obj4;
  };
  const obj10 = hue(num[8]);
  fn4.__closure = { hslToRgbWorklet: hue(num[7]).hslToRgbWorklet, hue, saturation, lightness: num, fullWidth: flag, sliderWidth: sharedValue, barWidth: sharedValue3 };
  fn4.__workletHash = 11978530182863;
  fn4.__initData = __initData4;
  const items1 = [sharedValue];
  const animatedStyle = obj10.useAnimatedStyle(fn4);
  const items2 = [sharedValue3];
  const callback = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  const callback1 = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue3.set(nativeEvent.nativeEvent.layout.width);
  }, items2);
  const obj11 = { hslToRgbWorklet: hue(num[7]).hslToRgbWorklet, hue, saturation, lightness: num, fullWidth: flag, sliderWidth: sharedValue, barWidth: sharedValue3 };
  const fn5 = function y() {
    value = sharedValue1.get();
    let paddingTop = 0;
    if (value - sharedValue2.get() > 0) {
      value2 = sharedValue1.get();
      paddingTop = (value2 - sharedValue2.get()) / 2;
    }
    let paddingLeft = 0;
    if (!flag) {
      paddingLeft = sharedValue.get() / 2;
    }
    return { paddingTop, paddingBottom: paddingTop, paddingLeft, paddingRight: paddingLeft };
  };
  fn5.__closure = { sliderHeight: sharedValue1, barHeight: sharedValue2, fullWidth: flag, sliderWidth: sharedValue };
  fn5.__workletHash = 5400515770640;
  fn5.__initData = __initData5;
  const animatedStyle1 = hue(num[8]).useAnimatedStyle(fn5);
  const items3 = [tmp.container, , , ];
  let containerFullWidth = flag;
  if (flag) {
    containerFullWidth = tmp.containerFullWidth;
  }
  const obj13 = { style: items3, children: null };
  items3[1] = containerFullWidth;
  items3[2] = style;
  items3[3] = animatedStyle1;
  const obj14 = { gesture: panGesture, children: null };
  const obj15 = { colors: memo, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, style: null, children: null };
  const items4 = [tmp.colorBar, ];
  let colorBarFullWidth = flag;
  const obj12 = hue(num[8]);
  const tmp14 = sharedValue3;
  if (flag) {
    colorBarFullWidth = tmp.colorBarFullWidth;
  }
  items4[1] = colorBarFullWidth;
  obj15.style = items4;
  const obj16 = { onLayout: callback1, style: null };
  const items5 = [tmp.colorBarInner, , ];
  if (flag) {
    flag = tmp.colorBarInnerFullWidth;
  }
  items5[1] = flag;
  items5[2] = colorBarInnerStyle;
  obj16.style = items5;
  obj15.children = sharedValue2(sharedValue1, obj16);
  obj14.children = sharedValue2(saturation(num[9]), obj15);
  const items6 = [sharedValue2(tmp2(num[6]).GestureDetector, obj14), ];
  const obj17 = { onLayout: callback, pointerEvents: "box-none", style: null };
  const items7 = [tmp.slider, sliderStyle, animatedStyle];
  obj17.style = items7;
  items6[1] = sharedValue2(saturation(num[8]).View, obj17);
  obj13.children = items6;
  return tmp14(saturation(num[8]).View, obj13);
};