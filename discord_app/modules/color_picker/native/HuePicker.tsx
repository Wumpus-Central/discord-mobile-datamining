// === Module 14668: HuePicker ===

// Module 14668 (HuePicker)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import ColorPickerUtils from "ColorPickerUtils" /* 14665 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = [0, 60, 120, 180, 240, 300, 360];
const createStyles = fn(5090);
let obj2 = { container: { justifyContent: "center", alignItems: "center" }, containerFullWidth: { alignSelf: "stretch", overflow: "visible" }, slider: null, colorBar: null, colorBarFullWidth: null, colorBarInner: null, colorBarInnerFullWidth: null };
let size = { left: 0, position: "absolute", borderColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 24, height: 36, borderRadius: nativeDefault.radii.sm, borderWidth: 2 };
obj2.slider = size;
obj2.colorBar = { borderRadius: nativeDefault.radii.xs };
obj2.colorBarFullWidth = { width: "100%" };
obj2.colorBarInner = { minWidth: 240, height: 32 };
obj2.colorBarInnerFullWidth = { minWidth: 0, width: "100%" };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function HuePickerTsx1(event){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(event.x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData2 = { code: "function HuePickerTsx2(event_0){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(event_0.x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData3 = { code: "function HuePickerTsx3(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
const __initData4 = { code: "function HuePickerTsx4(event){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(event.x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData5 = { code: "function HuePickerTsx5(event_0){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(event_0.x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData6 = { code: "function HuePickerTsx6(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHuePickerGesture(hue, barWidth, onPanUpdate, onPanFinalize) {
  _require = hue;
  dependencyMap = onPanUpdate;
  closure_3 = onPanFinalize;
  const cResult = require("c").c(13);
  if (cResult[0] === barWidth) {
    if (cResult[1] === hue) {
      if (cResult[2] === onPanUpdate) {
        let tmp4 = cResult[3];
        let tmp5 = cResult[4];
      }
      if (cResult[5] !== onPanFinalize) {
        const fn3 = function b() {
          if (null != closure_3) {
            ReanimatedRexport.runOnJS(tmp)();
          }
        };
        const obj2 = { onPanFinalize, runOnJS: tmp(4810).runOnJS };
        fn3.__closure = obj2;
        fn3.__workletHash = 2479115151384;
        fn3.__initData = __initData3;
        cResult[5] = onPanFinalize;
        cResult[6] = fn3;
        let tmp6 = fn3;
      } else {
        tmp6 = cResult[6];
      }
      if (cResult[7] === tmp4) {
        if (cResult[8] === tmp5) {
          if (cResult[9] === tmp6) {
            let tmp8 = cResult[10];
          }
          const panGesture = tmp(6326).usePanGesture(tmp8);
          if (cResult[11] !== panGesture) {
            const obj3 = { gesture: panGesture };
            cResult[11] = panGesture;
            cResult[12] = obj3;
            let tmp10 = obj3;
          } else {
            tmp10 = cResult[12];
          }
          return tmp10;
        }
      }
      const obj4 = { onBegin: tmp4, onUpdate: tmp5, onFinalize: tmp6 };
      cResult[7] = tmp4;
      cResult[8] = tmp5;
      cResult[9] = tmp6;
      cResult[10] = obj4;
      tmp8 = obj4;
    }
  }
  const fn = function h(arg0) {
    const result = hue.set(360 * ColorPickerUtils.normalizeValue(arg0.x / barWidth.get()));
    if (null != closure_2) {
      ReanimatedRexport.runOnJS(tmp4)();
      const tmpResult = ReanimatedRexport;
    }
  };
  let obj = require("c");
  fn.__closure = { hue, normalizeValue: require("ColorPickerUtils").normalizeValue, barWidth, onPanUpdate, runOnJS: require("ReanimatedRexport").runOnJS };
  fn.__workletHash = 353921971989;
  fn.__initData = __initData;
  const fn2 = function s(arg0) {
    const result = hue.set(360 * ColorPickerUtils.normalizeValue(arg0.x / barWidth.get()));
    if (null != closure_2) {
      ReanimatedRexport.runOnJS(tmp4)();
      const tmpResult = ReanimatedRexport;
    }
  };
  const obj5 = { hue, normalizeValue: require("ColorPickerUtils").normalizeValue, barWidth, onPanUpdate, runOnJS: require("ReanimatedRexport").runOnJS };
  fn2.__closure = { hue, normalizeValue: require("ColorPickerUtils").normalizeValue, barWidth, onPanUpdate, runOnJS: require("ReanimatedRexport").runOnJS };
  fn2.__workletHash = 10859524318070;
  fn2.__initData = __initData2;
  cResult[0] = barWidth;
  cResult[1] = hue;
  cResult[2] = onPanUpdate;
  cResult[3] = fn;
  cResult[4] = fn2;
  tmp5 = fn2;
  tmp4 = fn;
  const obj6 = { hue, normalizeValue: require("ColorPickerUtils").normalizeValue, barWidth, onPanUpdate, runOnJS: require("ReanimatedRexport").runOnJS };
}) : (function useHuePickerGesture(hue, barWidth, onPanUpdate, onPanFinalize) {
  _require = hue;
  dependencyMap = onPanUpdate;
  closure_3 = onPanFinalize;
  let obj = { gesture: null };
  const obj3 = { onBegin: null, onUpdate: null, onFinalize: null };
  const fn = function s(arg0) {
    const result = hue.set(360 * ColorPickerUtils.normalizeValue(arg0.x / barWidth.get()));
    if (null != closure_2) {
      ReanimatedRexport.runOnJS(tmp4)();
      const tmpResult = ReanimatedRexport;
    }
  };
  const obj2 = require("LegacyBaseButton");
  fn.__closure = { hue, normalizeValue: require("ColorPickerUtils").normalizeValue, barWidth, onPanUpdate, runOnJS: require("ReanimatedRexport").runOnJS };
  fn.__workletHash = 1909635392048;
  fn.__initData = __initData4;
  obj3.onBegin = fn;
  const fn2 = function u(arg0) {
    const result = hue.set(360 * ColorPickerUtils.normalizeValue(arg0.x / barWidth.get()));
    if (null != closure_2) {
      ReanimatedRexport.runOnJS(tmp4)();
      const tmpResult = ReanimatedRexport;
    }
  };
  const obj4 = { hue, normalizeValue: require("ColorPickerUtils").normalizeValue, barWidth, onPanUpdate, runOnJS: require("ReanimatedRexport").runOnJS };
  fn2.__closure = { hue, normalizeValue: require("ColorPickerUtils").normalizeValue, barWidth, onPanUpdate, runOnJS: require("ReanimatedRexport").runOnJS };
  fn2.__workletHash = 8824238552081;
  fn2.__initData = __initData5;
  obj3.onUpdate = fn2;
  const fn3 = function o() {
    if (null != closure_3) {
      ReanimatedRexport.runOnJS(tmp)();
    }
  };
  const obj5 = { hue, normalizeValue: require("ColorPickerUtils").normalizeValue, barWidth, onPanUpdate, runOnJS: require("ReanimatedRexport").runOnJS };
  fn3.__closure = { onPanFinalize, runOnJS: require("ReanimatedRexport").runOnJS };
  fn3.__workletHash = 9198604655997;
  fn3.__initData = __initData6;
  obj3.onFinalize = fn3;
  obj.gesture = obj2.usePanGesture(obj3);
  return obj;
});
const __initData7 = { code: "function HuePickerTsx7(){const{hslToRgbWorklet,hue,saturation,lightness,fullWidth,sliderWidth,barWidth}=this.__closure;const rgb=hslToRgbWorklet({h:hue.get(),s:saturation,l:lightness});const centerOffset=fullWidth?sliderWidth.get()/2:0;return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:barWidth.get()*hue.get()/360-centerOffset}]};}" };
const __initData8 = { code: "function HuePickerTsx8(){const{sliderHeight,barHeight,fullWidth,sliderWidth}=this.__closure;const paddingTop=sliderHeight.get()-barHeight.get()>0?(sliderHeight.get()-barHeight.get())/2:0;const paddingLeft=fullWidth?0:sliderWidth.get()/2;return{paddingTop:paddingTop,paddingBottom:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingLeft};}" };
const __initData9 = { code: "function HuePickerTsx9(){const{hslToRgbWorklet,hue,saturation,lightness,fullWidth,sliderWidth,barWidth}=this.__closure;const rgb=hslToRgbWorklet({h:hue.get(),s:saturation,l:lightness});const centerOffset=fullWidth?sliderWidth.get()/2:0;return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:barWidth.get()*hue.get()/360-centerOffset}]};}" };
const __initData10 = { code: "function HuePickerTsx10(){const{sliderHeight,barHeight,fullWidth,sliderWidth}=this.__closure;const paddingTop=sliderHeight.get()-barHeight.get()>0?(sliderHeight.get()-barHeight.get())/2:0;const paddingLeft=fullWidth?0:sliderWidth.get()/2;return{paddingTop:paddingTop,paddingBottom:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingLeft};}" };
ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.xs };
size = fn(2);
let result = size.fileFinishedImporting("modules/color_picker/native/HuePicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HuePicker(hue) {
  const cResult = hue(num2[7]).c(42);
  hue = hue.hue;
  ({ style, colorBarInnerStyle, sliderStyle, onPanUpdate, onPanFinalize, saturation, lightness, fullWidth } = hue);
  let num = 1;
  if (undefined !== saturation) {
    num = saturation;
  }
  num2 = 0.5;
  if (undefined !== lightness) {
    num2 = lightness;
  }
  closure_3 = tmp4;
  const tmp5 = closure_9();
  let obj = hue(num2[7]);
  const sharedValue = hue(num2[9]).useSharedValue(0);
  const tmpResult = hue(num2[9]);
  const sharedValue1 = hue(num2[9]).useSharedValue(tmp5.slider.height);
  const tmpResult6 = hue(num2[9]);
  const sharedValue2 = hue(num2[9]).useSharedValue(tmp5.colorBarInner.height);
  const tmpResult7 = hue(num2[9]);
  const sharedValue3 = hue(num2[9]).useSharedValue(0);
  const gesture = closure_16(hue, sharedValue3, onPanUpdate, onPanFinalize).gesture;
  if (cResult[0] === num2) {
    class R {
      constructor() {
        obj = closure_0(closure_2[8]);
        obj1 = { h: hue.get(), s: saturation, l: lightness };
        obj3 = hue;
        hslToRgbWorkletResult = obj.hslToRgbWorklet(obj1);
        num = 0;
        if (fullWidth) {
          tmp2 = closure_4;
          num2 = 2;
          num = closure_4.get() / 2;
        }
        obj6 = { backgroundColor: "rgb(" + hslToRgbWorkletResult[0] + ", " + hslToRgbWorkletResult[1] + ", " + hslToRgbWorkletResult[2] + ")", transform: null };
        obj7 = { translateX: null };
        value = closure_7.get();
        obj7.translateX = value * obj3.get() / 360 - num;
        items = [];
        items[0] = obj7;
        obj6.transform = items;
        return obj6;
      }
    }
    const obj2 = { hslToRgbWorklet: tmp(tmp2[8]).hslToRgbWorklet, hue, saturation: num, lightness: num2, fullWidth: tmp4, sliderWidth: sharedValue, barWidth: sharedValue3 };
    R.__closure = obj2;
    R.__workletHash = 3265239853100;
    R.__initData = __initData7;
    const animatedStyle = tmp(tmp2[9]).useAnimatedStyle(R);
    if (cResult[3] !== sharedValue) {
      class U {
        constructor(arg0) {
          result = closure_4.set(hue.nativeEvent.layout.width);
          return;
        }
      }
      class R {
        constructor() {
          obj = closure_0(closure_2[8]);
          obj1 = { h: hue.get(), s: saturation, l: lightness };
          obj3 = hue;
          hslToRgbWorkletResult = obj.hslToRgbWorklet(obj1);
          num = 0;
          if (fullWidth) {
            tmp2 = closure_4;
            num2 = 2;
            num = closure_4.get() / 2;
          }
          obj6 = { backgroundColor: "rgb(" + hslToRgbWorkletResult[0] + ", " + hslToRgbWorkletResult[1] + ", " + hslToRgbWorkletResult[2] + ")", transform: null };
          obj7 = { translateX: null };
          value = closure_7.get();
          obj7.translateX = value * obj3.get() / 360 - num;
          items = [];
          items[0] = obj7;
          obj6.transform = items;
          return obj6;
        }
      }
      cResult[4] = U;
    } else {
      class U {
        constructor(arg0) {
          result = closure_4.set(hue.nativeEvent.layout.width);
          return;
        }
      }
    }
    if (cResult[5] !== sharedValue3) {
      class D {
        constructor(arg0) {
          result = closure_7.set(hue.nativeEvent.layout.width);
          return;
        }
      }
      class R {
        constructor() {
          obj = closure_0(closure_2[8]);
          obj1 = { h: hue.get(), s: saturation, l: lightness };
          obj3 = hue;
          hslToRgbWorkletResult = obj.hslToRgbWorklet(obj1);
          num = 0;
          if (fullWidth) {
            tmp2 = closure_4;
            num2 = 2;
            num = closure_4.get() / 2;
          }
          obj6 = { backgroundColor: "rgb(" + hslToRgbWorkletResult[0] + ", " + hslToRgbWorkletResult[1] + ", " + hslToRgbWorkletResult[2] + ")", transform: null };
          obj7 = { translateX: null };
          value = closure_7.get();
          obj7.translateX = value * obj3.get() / 360 - num;
          items = [];
          items[0] = obj7;
          obj6.transform = items;
          return obj6;
        }
      }
      cResult[6] = D;
    } else {
      class D {
        constructor(arg0) {
          result = closure_7.set(hue.nativeEvent.layout.width);
          return;
        }
      }
    }
    const tmpResult9 = tmp(tmp2[9]);
    class E {
      constructor() {
        obj = closure_5;
        obj2 = closure_6;
        value = closure_5.get();
        paddingTop = 0;
        if (value - closure_6.get() > 0) {
          value1 = obj.get();
          num2 = 2;
          paddingTop = (value1 - obj2.get()) / 2;
        }
        paddingLeft = 0;
        if (!fullWidth) {
          tmp3 = closure_4;
          num4 = 2;
          paddingLeft = closure_4.get() / 2;
        }
        return { paddingTop, paddingBottom: paddingTop, paddingLeft, paddingRight: paddingLeft };
      }
    }
    const obj3 = { sliderHeight: sharedValue1, barHeight: sharedValue2, fullWidth: tmp4, sliderWidth: sharedValue };
    E.__closure = obj3;
    E.__workletHash = 7363973818749;
    E.__initData = __initData8;
    const animatedStyle1 = tmp(tmp2[9]).useAnimatedStyle(E);
    if (tmp4) {
      class D {
        constructor(arg0) {
          result = closure_7.set(hue.nativeEvent.layout.width);
          return;
        }
      }
    }
    if (cResult[7] === animatedStyle1) {
      class D {
        constructor(arg0) {
          result = closure_7.set(hue.nativeEvent.layout.width);
          return;
        }
      }
    }
    let items = [tmp5.container, tmp4, style, animatedStyle1];
    cResult[7] = animatedStyle1;
    cResult[8] = style;
    cResult[9] = tmp5.container;
    cResult[10] = tmp4;
    cResult[11] = items;
    const tmpResult10 = tmp(tmp2[9]);
  }
  const mapped = closure_8.map((h) => {
    const tmp = _slicedToArray(ColorPickerUtils.hslToRgbWorklet({ h, s: num, l: num2 }), 3);
    return "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")";
  });
  cResult[0] = num2;
  cResult[1] = num;
  cResult[2] = mapped;
  const tmpResult8 = hue(num2[9]);
}) : (function HuePicker(hue) {
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
  const sharedValue = hue(num[9]).useSharedValue(0);
  let obj = hue(num[9]);
  const tmp2 = hue;
  const sharedValue1 = hue(num[9]).useSharedValue(tmp.slider.height);
  const obj2 = hue(num[9]);
  const sharedValue2 = hue(num[9]).useSharedValue(tmp.colorBarInner.height);
  const obj3 = hue(num[9]);
  const sharedValue3 = hue(num[9]).useSharedValue(0);
  let items = [saturation, num];
  const memo = sharedValue.useMemo(() => closure_8.map((h) => {
    const tmp = flag(hue(num[8]).hslToRgbWorklet({ h, s, l }), 3);
    return "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")";
  }), items);
  let obj4 = hue(num[9]);
  class H {
    constructor() {
      obj = closure_0(closure_2[8]);
      obj1 = { h: hue.get(), s: c1, l: c2 };
      obj3 = hue;
      hslToRgbWorkletResult = obj.hslToRgbWorklet(obj1);
      num = 0;
      if (c3) {
        tmp2 = closure_4;
        num2 = 2;
        num = closure_4.get() / 2;
      }
      obj6 = { backgroundColor: "rgb(" + hslToRgbWorkletResult[0] + ", " + hslToRgbWorkletResult[1] + ", " + hslToRgbWorkletResult[2] + ")", transform: null };
      obj7 = { translateX: null };
      value = closure_7.get();
      obj7.translateX = value * obj3.get() / 360 - num;
      items = [];
      items[0] = obj7;
      obj6.transform = items;
      return obj6;
    }
  }
  let obj5 = hue(num[9]);
  H.__closure = { hslToRgbWorklet: hue(num[8]).hslToRgbWorklet, hue, saturation, lightness: num, fullWidth: flag, sliderWidth: sharedValue, barWidth: sharedValue3 };
  H.__workletHash = 16650608592610;
  H.__initData = __initData9;
  const items1 = [sharedValue];
  const animatedStyle = obj5.useAnimatedStyle(H);
  const items2 = [sharedValue3];
  const callback = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  const callback1 = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue3.set(nativeEvent.nativeEvent.layout.width);
  }, items2);
  const obj6 = { hslToRgbWorklet: hue(num[8]).hslToRgbWorklet, hue, saturation, lightness: num, fullWidth: flag, sliderWidth: sharedValue, barWidth: sharedValue3 };
  class O {
    constructor() {
      obj = closure_5;
      obj2 = closure_6;
      value = closure_5.get();
      paddingTop = 0;
      if (value - closure_6.get() > 0) {
        value1 = obj.get();
        num2 = 2;
        paddingTop = (value1 - obj2.get()) / 2;
      }
      paddingLeft = 0;
      if (!c3) {
        tmp3 = closure_4;
        num4 = 2;
        paddingLeft = closure_4.get() / 2;
      }
      return { paddingTop, paddingBottom: paddingTop, paddingLeft, paddingRight: paddingLeft };
    }
  }
  O.__closure = { sliderHeight: sharedValue1, barHeight: sharedValue2, fullWidth: flag, sliderWidth: sharedValue };
  O.__workletHash = 16773499975524;
  O.__initData = __initData10;
  const animatedStyle1 = hue(num[9]).useAnimatedStyle(O);
  const items3 = [tmp.container, , , ];
  let containerFullWidth = flag;
  if (flag) {
    containerFullWidth = tmp.containerFullWidth;
  }
  const obj8 = { style: items3, children: null };
  items3[1] = containerFullWidth;
  items3[2] = style;
  items3[3] = animatedStyle1;
  const obj9 = { gesture: closure_16(hue, sharedValue3, onPanUpdate, onPanFinalize).gesture, children: null };
  const obj10 = { colors: memo, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, style: null, children: null };
  const items4 = [tmp.colorBar, ];
  let colorBarFullWidth = flag;
  const obj7 = hue(num[9]);
  const tmp13 = sharedValue3;
  if (flag) {
    colorBarFullWidth = tmp.colorBarFullWidth;
  }
  items4[1] = colorBarFullWidth;
  obj10.style = items4;
  const obj11 = { onLayout: callback1, style: null };
  const items5 = [tmp.colorBarInner, , ];
  if (flag) {
    flag = tmp.colorBarInnerFullWidth;
  }
  items5[1] = flag;
  items5[2] = colorBarInnerStyle;
  obj11.style = items5;
  obj10.children = sharedValue2(sharedValue1, obj11);
  obj9.children = sharedValue2(saturation(num[11]), obj10);
  const items6 = [sharedValue2(tmp2(num[10]).GestureDetector, obj9), ];
  const obj12 = { onLayout: callback, pointerEvents: "box-none", style: null };
  const items7 = [tmp.slider, sliderStyle, animatedStyle];
  obj12.style = items7;
  items6[1] = sharedValue2(saturation(num[9]).View, obj12);
  obj8.children = items6;
  return tmp13(saturation(num[9]).View, obj8);
});