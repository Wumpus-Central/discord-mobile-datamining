// === Module 17077: HuePicker ===

// Module 17077 (HuePicker)
import nativeDefault from "native" /* 575 */;
import _modDef1655 from "module_1655" /* 1655 */;
import LinearGradientDefault from "LinearGradient" /* 5893 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let closure_8 = [0, 60, 120, 180, 240, 300, 360];
const createStyles = fn(5306);
let obj2 = { container: { justifyContent: "center", alignItems: "center" }, containerFullWidth: { alignSelf: "stretch", overflow: "visible" }, slider: null, colorBar: null, colorBarFullWidth: null, colorBarInner: null, colorBarInnerFullWidth: null };
let size = { left: 0, position: "absolute", borderColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 24, height: 36, borderRadius: nativeDefault.radii.sm, borderWidth: 2 };
obj2.slider = size;
obj2.colorBar = { borderRadius: nativeDefault.radii.xs };
obj2.colorBarFullWidth = { width: "100%" };
obj2.colorBarInner = { minWidth: 240, height: 32 };
obj2.colorBarInnerFullWidth = { minWidth: 0, width: "100%" };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = { code: "(function HuePickerTsx1(event){let[hue,normalizeValue,barWidth,onPanUpdate,scheduleOnRN]=this.__closure;hue.set(normalizeValue(event.x/barWidth.get())*360);onPanUpdate!=null&&scheduleOnRN(onPanUpdate);})" };
let closure_11 = { code: "(function HuePickerTsx2(event){let[hue,normalizeValue,barWidth,onPanUpdate,scheduleOnRN]=this.__closure;hue.set(normalizeValue(event.x/barWidth.get())*360);onPanUpdate!=null&&scheduleOnRN(onPanUpdate);})" };
let closure_12 = { code: "(function HuePickerTsx3(){let[onPanFinalize,scheduleOnRN]=this.__closure;onPanFinalize!=null&&scheduleOnRN(onPanFinalize);})" };
let closure_13 = { code: "(function HuePickerTsx4(){let[hslToRgbWorklet,hue,saturation,lightness,fullWidth,sliderWidth,barWidth]=this.__closure;const rgb=hslToRgbWorklet({h:hue.get(),s:saturation,l:lightness});const centerOffset=fullWidth?sliderWidth.get()/2:0;return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:barWidth.get()*hue.get()/360-centerOffset}]};})" };
let closure_14 = { code: "(function HuePickerTsx5(){let[sliderHeight,barHeight,fullWidth,sliderWidth]=this.__closure;const paddingTop=sliderHeight.get()-barHeight.get()>0?(sliderHeight.get()-barHeight.get())/2:0;const paddingLeft=fullWidth?0:sliderWidth.get()/2;return{paddingTop:paddingTop,paddingBottom:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingLeft};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/color_picker/native/HuePicker.tsx");

export default function HuePicker(lightness) {
  ({ hue, onPanUpdate, saturation } = lightness);
  ({ style, colorBarInnerStyle, sliderStyle, onPanFinalize } = lightness);
  if (saturation === undefined) {
    saturation = 1;
  }
  _require = saturation;
  let num = lightness.lightness;
  if (num === undefined) {
    num = 0.5;
  }
  importDefault = num;
  let flag = lightness.fullWidth;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_9();
  const sharedValue = require("module_1655").useSharedValue(0);
  const obj = require("module_1655");
  const sharedValue1 = require("module_1655").useSharedValue(tmp.slider.height);
  const obj2 = require("module_1655");
  const sharedValue2 = require("module_1655").useSharedValue(tmp.colorBarInner.height);
  let obj3 = require("module_1655");
  const sharedValue3 = require("module_1655").useSharedValue(0);
  let obj4 = require("module_1655");
  items = [closure_10, hue, require("ColorPickerUtils").normalizeValue, sharedValue3, onPanUpdate, require("module_1708").scheduleOnRN];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
  const obj6 = { onBegin: null, onUpdate: null, onFinalize: null };
  class HuePickerTsx1 {
    constructor(arg0) {
      result = closure_0.set(360 * closure_1(lightness.x / closure_2.get()));
      if (null != closure_3) {
        tmp3 = closure_4;
        tmp4 = closure_4(tmp2);
      }
      return;
    }
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13];
  HuePickerTsx1.__closure = items1;
  HuePickerTsx1.__workletHash = 2888417885837;
  HuePickerTsx1.__initData = tmp8;
  obj6.onBegin = HuePickerTsx1;
  const items2 = [closure_11, hue, require("ColorPickerUtils").normalizeValue, sharedValue3, onPanUpdate, require("module_1708").scheduleOnRN];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items2;
  class HuePickerTsx2 {
    constructor(arg0) {
      result = closure_0.set(360 * closure_1(lightness.x / closure_2.get()));
      if (null != closure_3) {
        tmp3 = closure_4;
        tmp4 = closure_4(tmp2);
      }
      return;
    }
  }
  const items3 = [tmp15, tmp16, tmp17, tmp18, tmp19];
  HuePickerTsx2.__closure = items3;
  HuePickerTsx2.__workletHash = 1340523300494;
  HuePickerTsx2.__initData = tmp14;
  obj6.onUpdate = HuePickerTsx2;
  const items4 = [closure_12, onPanFinalize, require("module_1708").scheduleOnRN];
  _require = undefined;
  importDefault = undefined;
  [tmp20, tmp21, tmp22] = items4;
  class HuePickerTsx3 {
    constructor() {
      if (null != closure_0) {
        tmp2 = closure_1;
        tmp3 = closure_1(tmp);
      }
      return;
    }
  }
  const items5 = [tmp21, tmp22];
  HuePickerTsx3.__closure = items5;
  HuePickerTsx3.__workletHash = 10163270248416;
  HuePickerTsx3.__initData = tmp20;
  obj6.onFinalize = HuePickerTsx3;
  const items6 = [saturation, num];
  const panGesture = require("LegacyBaseButton").usePanGesture(obj6);
  const memo = noop.useMemo(() => closure_8.map((h) => {
    const tmp = c3(s(c2[7]).hslToRgbWorklet({ h, s, l }), 3);
    return "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")";
  }), items6);
  const obj5 = require("LegacyBaseButton");
  const items7 = [closure_13, require("ColorPickerUtils").hslToRgbWorklet, hue, saturation, num, flag, sharedValue, sharedValue3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items7;
  class HuePickerTsx4 {
    constructor() {
      obj = { h: closure_1.get(), s: closure_2, l: closure_3 };
      obj2 = closure_1;
      tmp = closure_0(obj);
      num = 0;
      if (closure_4) {
        tmp2 = closure_5;
        num2 = 2;
        num = closure_5.get() / 2;
      }
      obj1 = { backgroundColor: "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")", transform: null };
      obj5 = { translateX: null };
      value = closure_6.get();
      obj5.translateX = value * obj2.get() / 360 - num;
      items = [];
      items[0] = obj5;
      obj1.transform = items;
      return obj1;
    }
  }
  const items8 = [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
  HuePickerTsx4.__closure = items8;
  HuePickerTsx4.__workletHash = 9466436421270;
  HuePickerTsx4.__initData = tmp25;
  const items9 = [sharedValue];
  const animatedStyle = require("module_1655").useAnimatedStyle(HuePickerTsx4);
  const items10 = [sharedValue3];
  const callback = obj7.useCallback((nativeEvent) => {
    const result = s.set(nativeEvent.nativeEvent.layout.width);
  }, items9);
  const callback1 = obj7.useCallback((nativeEvent) => {
    const result = l.set(nativeEvent.nativeEvent.layout.width);
  }, items10);
  const tmp2Result = require("module_1655");
  const items11 = [closure_14, sharedValue1, sharedValue2, flag, sharedValue];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp36, tmp37, tmp38, tmp39, tmp40] = items11;
  class HuePickerTsx5 {
    constructor() {
      obj = closure_0;
      obj2 = closure_1;
      value = closure_0.get();
      paddingTop = 0;
      if (value - closure_1.get() > 0) {
        value1 = obj.get();
        num2 = 2;
        paddingTop = (value1 - obj2.get()) / 2;
      }
      paddingLeft = 0;
      if (!closure_2) {
        tmp3 = closure_3;
        num4 = 2;
        paddingLeft = closure_3.get() / 2;
      }
      return { paddingTop, paddingBottom: paddingTop, paddingLeft, paddingRight: paddingLeft };
    }
  }
  const items12 = [tmp37, tmp38, tmp39, tmp40];
  HuePickerTsx5.__closure = items12;
  HuePickerTsx5.__workletHash = 7167757714665;
  HuePickerTsx5.__initData = tmp36;
  const animatedStyle1 = require("module_1655").useAnimatedStyle(HuePickerTsx5);
  const items13 = [tmp.container, , , ];
  let containerFullWidth = flag;
  if (flag) {
    containerFullWidth = tmp.containerFullWidth;
  }
  const obj8 = { style: items13, children: null };
  items13[1] = containerFullWidth;
  items13[2] = style;
  items13[3] = animatedStyle1;
  const obj9 = { gesture: panGesture, children: null };
  const obj10 = { colors: memo, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, style: null, children: null };
  const items14 = [tmp.colorBar, ];
  let colorBarFullWidth = flag;
  const tmp2Result2 = require("module_1655");
  if (flag) {
    colorBarFullWidth = tmp.colorBarFullWidth;
  }
  items14[1] = colorBarFullWidth;
  obj10.style = items14;
  const obj11 = { onLayout: callback1, style: null };
  const items15 = [tmp.colorBarInner, , ];
  if (flag) {
    flag = tmp.colorBarInnerFullWidth;
  }
  items15[1] = flag;
  items15[2] = colorBarInnerStyle;
  obj11.style = items15;
  obj10.children = c6(c5, obj11);
  obj9.children = c6(LinearGradientDefault, obj10);
  const items16 = [c6(require("LegacyBaseButton").GestureDetector, obj9), ];
  const obj12 = { onLayout: callback, pointerEvents: "box-none", style: null };
  const items17 = [tmp.slider, sliderStyle, animatedStyle];
  obj12.style = items17;
  items16[1] = c6(_modDef1655.View, obj12);
  obj8.children = items16;
  return closure_7(_modDef1655.View, obj8);
};