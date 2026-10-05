// === Module 14427: HuePicker ===

// Module 14427 (HuePicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import ColorPickerUtils from "ColorPickerUtils" /* 14424 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = [0, 60, 120, 180, 240, 300, 360];
let createStyles = createStyles_mod;
let obj = { container: { justifyContent: "center", alignItems: "center" }, containerFullWidth: { alignSelf: "stretch", overflow: "visible" }, slider: size, colorBar: obj2, colorBarFullWidth: { width: "100%" }, colorBarInner: { minWidth: 240, height: 32 }, colorBarInnerFullWidth: { minWidth: 0, width: "100%" } };
size = { left: 0, position: "absolute", borderColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 24, height: 36, borderRadius: nativeDefault.radii.sm, borderWidth: 2 };
createStyles = createStyles.createStyles;
obj2 = { borderRadius: nativeDefault.radii.xs };
let closure_9 = createStyles(obj);
const __initData = { code: "function HuePickerTsx1(event){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(event.x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData2 = { code: "function HuePickerTsx2(event_0){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(event_0.x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData3 = { code: "function HuePickerTsx3(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
const __initData4 = { code: "function HuePickerTsx4(event){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(event.x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData5 = { code: "function HuePickerTsx5(event_0){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(event_0.x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData6 = { code: "function HuePickerTsx6(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((hue, barWidth, onPanUpdate, onPanFinalize) => {
  _require = hue;
  dependencyMap = onPanUpdate;
  let closure_3 = onPanFinalize;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] === barWidth) {
    if (cResult[1] === hue) {
      let tmp4;
      let tmp5;
      let tmp6;
      if (cResult[2] === onPanUpdate) {
        tmp4 = cResult[3];
        tmp5 = cResult[4];
      }
      if (cResult[5] !== onPanFinalize) {
        const fn3 = function b() {
          if (null != onPanFinalize) {
            const obj = ReanimatedRexport;
            obj.runOnJS(tmp)();
          }
        };
        fn3.__closure = { onPanFinalize, runOnJS: tmp(4612).runOnJS };
        fn3.__workletHash = 2479115151384;
        fn3.__initData = __initData3;
        cResult[5] = onPanFinalize;
        cResult[6] = fn3;
        tmp6 = fn3;
        const obj2 = { onPanFinalize, runOnJS: tmp(4612).runOnJS };
      } else {
        tmp6 = cResult[6];
      }
      if (cResult[7] === tmp4) {
        if (cResult[8] === tmp5) {
          let tmp8;
          let tmp10;
          if (cResult[9] === tmp6) {
            tmp8 = cResult[10];
          }
          let tmpResult = tmp(6140);
          const panGesture = tmpResult.usePanGesture(tmp8);
          if (cResult[11] !== panGesture) {
            const obj3 = { gesture: panGesture };
            cResult[11] = panGesture;
            cResult[12] = obj3;
            tmp10 = obj3;
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
    set = hue.set;
    const obj = ColorPickerUtils;
    const result = set(360 * obj.normalizeValue(arg0.x / barWidth.get()));
    if (null != onPanUpdate) {
      const tmpResult = ReanimatedRexport;
      tmpResult.runOnJS(tmp4)();
    }
  };
  fn.__closure = { hue, normalizeValue: tmp(14424).normalizeValue, barWidth, onPanUpdate, runOnJS: tmp(4612).runOnJS };
  fn.__workletHash = 353921971989;
  fn.__initData = __initData;
  const fn2 = function s(arg0) {
    set = hue.set;
    const obj = ColorPickerUtils;
    const result = set(360 * obj.normalizeValue(arg0.x / barWidth.get()));
    if (null != onPanUpdate) {
      const tmpResult = ReanimatedRexport;
      tmpResult.runOnJS(tmp4)();
    }
  };
  ({ hue, normalizeValue: tmp(14424).normalizeValue, barWidth, onPanUpdate, runOnJS: tmp(4612).runOnJS });
  fn2.__closure = { hue, normalizeValue: tmp(14424).normalizeValue, barWidth, onPanUpdate, runOnJS: tmp(4612).runOnJS };
  fn2.__workletHash = 10859524318070;
  fn2.__initData = __initData2;
  cResult[0] = barWidth;
  cResult[1] = hue;
  cResult[2] = onPanUpdate;
  cResult[3] = fn;
  cResult[4] = fn2;
  tmp5 = fn2;
  tmp4 = fn;
  ({ hue, normalizeValue: tmp(14424).normalizeValue, barWidth, onPanUpdate, runOnJS: tmp(4612).runOnJS });
}) : ((hue, barWidth, onPanUpdate, onPanFinalize) => {
  let fn;
  let fn2;
  let fn3;
  let obj2;
  let usePanGesture;
  _require = hue;
  dependencyMap = onPanUpdate;
  let closure_3 = onPanFinalize;
  let obj = { gesture: usePanGesture(obj2) };
  const tmp = require("LegacyBaseButton");
  obj2 = { onBegin: fn, onUpdate: fn2, onFinalize: fn3 };
  fn = function s(arg0) {
    set = hue.set;
    const obj = ColorPickerUtils;
    const result = set(360 * obj.normalizeValue(arg0.x / barWidth.get()));
    if (null != onPanUpdate) {
      const tmpResult = ReanimatedRexport;
      tmpResult.runOnJS(tmp4)();
    }
  };
  usePanGesture = tmp.usePanGesture;
  fn.__closure = { hue, normalizeValue: require("ColorPickerUtils").normalizeValue, barWidth, onPanUpdate, runOnJS: require("ReanimatedRexport").runOnJS };
  fn.__workletHash = 1909635392048;
  fn.__initData = __initData4;
  fn2 = function u(arg0) {
    set = hue.set;
    const obj = ColorPickerUtils;
    const result = set(360 * obj.normalizeValue(arg0.x / barWidth.get()));
    if (null != onPanUpdate) {
      const tmpResult = ReanimatedRexport;
      tmpResult.runOnJS(tmp4)();
    }
  };
  ({ hue, normalizeValue: require("ColorPickerUtils").normalizeValue, barWidth, onPanUpdate, runOnJS: require("ReanimatedRexport").runOnJS });
  fn2.__closure = { hue, normalizeValue: require("ColorPickerUtils").normalizeValue, barWidth, onPanUpdate, runOnJS: require("ReanimatedRexport").runOnJS };
  fn2.__workletHash = 8824238552081;
  fn2.__initData = __initData5;
  fn3 = function o() {
    if (null != onPanFinalize) {
      const obj = ReanimatedRexport;
      obj.runOnJS(tmp)();
    }
  };
  ({ hue, normalizeValue: require("ColorPickerUtils").normalizeValue, barWidth, onPanUpdate, runOnJS: require("ReanimatedRexport").runOnJS });
  fn3.__closure = { onPanFinalize, runOnJS: require("ReanimatedRexport").runOnJS };
  fn3.__workletHash = 9198604655997;
  fn3.__initData = __initData6;
  ({ onPanFinalize, runOnJS: require("ReanimatedRexport").runOnJS });
  return obj;
});
const __initData7 = { code: "function HuePickerTsx7(){const{hslToRgbWorklet,hue,saturation,lightness,fullWidth,sliderWidth,barWidth}=this.__closure;const rgb=hslToRgbWorklet({h:hue.get(),s:saturation,l:lightness});const centerOffset=fullWidth?sliderWidth.get()/2:0;return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:barWidth.get()*hue.get()/360-centerOffset}]};}" };
const __initData8 = { code: "function HuePickerTsx8(){const{sliderHeight,barHeight,fullWidth,sliderWidth}=this.__closure;const paddingTop=sliderHeight.get()-barHeight.get()>0?(sliderHeight.get()-barHeight.get())/2:0;const paddingLeft=fullWidth?0:sliderWidth.get()/2;return{paddingTop:paddingTop,paddingBottom:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingLeft};}" };
const __initData9 = { code: "function HuePickerTsx9(){const{hslToRgbWorklet,hue,saturation,lightness,fullWidth,sliderWidth,barWidth}=this.__closure;const rgb=hslToRgbWorklet({h:hue.get(),s:saturation,l:lightness});const centerOffset=fullWidth?sliderWidth.get()/2:0;return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:barWidth.get()*hue.get()/360-centerOffset}]};}" };
const __initData10 = { code: "function HuePickerTsx10(){const{sliderHeight,barHeight,fullWidth,sliderWidth}=this.__closure;const paddingTop=sliderHeight.get()-barHeight.get()>0?(sliderHeight.get()-barHeight.get())/2:0;const paddingLeft=fullWidth?0:sliderWidth.get()/2;return{paddingTop:paddingTop,paddingBottom:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingLeft};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((hue) => {
  let colorBarInnerStyle;
  let fullWidth;
  let lightness;
  let num2;
  let onPanFinalize;
  let onPanUpdate;
  let saturation;
  let sliderStyle;
  let style;
  let tmp = hue;
  let obj = hue(num2[7]);
  const cResult = obj.c(42);
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
  let closure_3 = tmp4;
  const tmp5 = closure_9();
  const tmpResult = tmp(num2[9]);
  const sharedValue = tmpResult.useSharedValue(0);
  const tmpResult6 = tmp(num2[9]);
  const sharedValue1 = tmpResult6.useSharedValue(tmp5.slider.height);
  const tmpResult7 = tmp(num2[9]);
  const sharedValue2 = tmpResult7.useSharedValue(tmp5.colorBarInner.height);
  const tmpResult8 = tmp(num2[9]);
  const sharedValue3 = tmpResult8.useSharedValue(0);
  const gesture = closure_16(hue, sharedValue3, onPanUpdate, onPanFinalize).gesture;
  if (cResult[0] === num2) {
    const tmpResult9 = tmp(num2[9]);
    class R {
      constructor() {
        let items;
        let value;
        const obj = ColorPickerUtils;
        const obj2 = { h: hue.get(), s: num, l: num2 };
        const hslToRgbWorkletResult = obj.hslToRgbWorklet(obj2);
        num = 0;
        if (closure_3) {
          num = sharedValue.get() / 2;
        }
        const obj4 = { backgroundColor: "rgb(" + hslToRgbWorkletResult[0] + ", " + hslToRgbWorkletResult[1] + ", " + hslToRgbWorkletResult[2] + ")", transform: items };
        const obj5 = { translateX: value * hue.get() / 360 - num };
        value = sharedValue3.get();
        items = [obj5];
        return obj4;
      }
    }
    let obj2 = { hslToRgbWorklet: tmp(num2[8]).hslToRgbWorklet, hue, saturation: num, lightness: num2, fullWidth: undefined !== fullWidth && fullWidth, sliderWidth: sharedValue, barWidth: sharedValue3 };
    const useAnimatedStyle = tmpResult9.useAnimatedStyle;
    R.__closure = obj2;
    R.__workletHash = 3265239853100;
    R.__initData = __initData7;
    const animatedStyle = useAnimatedStyle(R);
    if (cResult[3] !== sharedValue) {
      class U {
        constructor(nativeEvent) {
          const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
        }
      }
      class R {
        constructor() {
          let items;
          let value;
          const obj = ColorPickerUtils;
          const obj2 = { h: hue.get(), s: num, l: num2 };
          const hslToRgbWorkletResult = obj.hslToRgbWorklet(obj2);
          num = 0;
          if (closure_3) {
            num = sharedValue.get() / 2;
          }
          const obj4 = { backgroundColor: "rgb(" + hslToRgbWorkletResult[0] + ", " + hslToRgbWorkletResult[1] + ", " + hslToRgbWorkletResult[2] + ")", transform: items };
          const obj5 = { translateX: value * hue.get() / 360 - num };
          value = sharedValue3.get();
          items = [obj5];
          return obj4;
        }
      }
      cResult[4] = U;
    } else {
      class U {
        constructor(nativeEvent) {
          const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
        }
      }
    }
    if (cResult[5] !== sharedValue3) {
      class D {
        constructor(nativeEvent) {
          const result = sharedValue3.set(nativeEvent.nativeEvent.layout.width);
        }
      }
      class R {
        constructor() {
          let items;
          let value;
          const obj = ColorPickerUtils;
          const obj2 = { h: hue.get(), s: num, l: num2 };
          const hslToRgbWorkletResult = obj.hslToRgbWorklet(obj2);
          num = 0;
          if (closure_3) {
            num = sharedValue.get() / 2;
          }
          const obj4 = { backgroundColor: "rgb(" + hslToRgbWorkletResult[0] + ", " + hslToRgbWorkletResult[1] + ", " + hslToRgbWorkletResult[2] + ")", transform: items };
          const obj5 = { translateX: value * hue.get() / 360 - num };
          value = sharedValue3.get();
          items = [obj5];
          return obj4;
        }
      }
      cResult[6] = D;
    } else {
      class D {
        constructor(nativeEvent) {
          const result = sharedValue3.set(nativeEvent.nativeEvent.layout.width);
        }
      }
    }
    const tmpResult10 = tmp(num2[9]);
    class E {
      constructor() {
        const value = sharedValue1.get();
        let paddingTop = 0;
        if (value - sharedValue2.get() > 0) {
          const value2 = sharedValue1.get();
          paddingTop = (value2 - sharedValue2.get()) / 2;
        }
        let paddingLeft = 0;
        if (!closure_3) {
          paddingLeft = sharedValue.get() / 2;
        }
        return { paddingTop, paddingBottom: paddingTop, paddingLeft, paddingRight: paddingLeft };
      }
    }
    const obj3 = { sliderHeight: sharedValue1, barHeight: sharedValue2, fullWidth: undefined !== fullWidth && fullWidth, sliderWidth: sharedValue };
    E.__closure = obj3;
    E.__workletHash = 7363973818749;
    E.__initData = __initData8;
    const animatedStyle1 = tmpResult10.useAnimatedStyle(E);
    if (cResult[7] === animatedStyle1) {
      class D {
        constructor(nativeEvent) {
          const result = sharedValue3.set(nativeEvent.nativeEvent.layout.width);
        }
      }
    }
    let items = [tmp5.container, undefined !== fullWidth && fullWidth && tmp5.containerFullWidth, style, animatedStyle1];
    cResult[7] = animatedStyle1;
    cResult[8] = style;
    cResult[9] = tmp5.container;
    cResult[10] = undefined !== fullWidth && fullWidth && tmp5.containerFullWidth;
    cResult[11] = items;
  }
  const mapped = closure_8.map((h) => {
    const obj = ColorPickerUtils;
    const obj2 = { h, s: num, l: num2 };
    const tmp = _slicedToArray(obj.hslToRgbWorklet(obj2), 3);
    return "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")";
  });
  cResult[0] = num2;
  cResult[1] = num;
  cResult[2] = mapped;
}) : ((hue) => {
  let colorBarInnerStyle;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj10;
  let obj11;
  let onPanFinalize;
  let onPanUpdate;
  let saturation;
  let sliderStyle;
  let style;
  let tmp14Result;
  let tmp17;
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
  let obj = hue(num[9]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = hue(num[9]);
  const sharedValue1 = obj2.useSharedValue(tmp.slider.height);
  const obj3 = hue(num[9]);
  const sharedValue2 = obj3.useSharedValue(tmp.colorBarInner.height);
  let obj4 = hue(num[9]);
  const sharedValue3 = obj4.useSharedValue(0);
  let items = [saturation, num];
  const gesture = closure_16(hue, sharedValue3, onPanUpdate, onPanFinalize).gesture;
  const memo = sharedValue.useMemo(() => {
    let closure_1;
    let closure_2;
    return closure_8.map((h) => {
      const obj = hue(num[8]);
      const obj2 = { h, s, l };
      const tmp = flag(obj.hslToRgbWorklet(obj2), 3);
      return "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")";
    });
  }, items);
  let obj5 = hue(num[9]);
  const tmp2 = hue;
  class H {
    constructor() {
      let items;
      let value;
      const obj = ColorPickerUtils;
      const obj2 = { h: hue.get(), s: saturation, l: num };
      const hslToRgbWorkletResult = obj.hslToRgbWorklet(obj2);
      num = 0;
      if (flag) {
        num = sharedValue.get() / 2;
      }
      const obj4 = { backgroundColor: "rgb(" + hslToRgbWorkletResult[0] + ", " + hslToRgbWorkletResult[1] + ", " + hslToRgbWorkletResult[2] + ")", transform: items };
      const obj5 = { translateX: value * hue.get() / 360 - num };
      value = sharedValue3.get();
      items = [obj5];
      return obj4;
    }
  }
  H.__closure = { hslToRgbWorklet: hue(num[8]).hslToRgbWorklet, hue, saturation, lightness: num, fullWidth: flag, sliderWidth: sharedValue, barWidth: sharedValue3 };
  H.__workletHash = 16650608592610;
  H.__initData = __initData9;
  const items1 = [sharedValue];
  ({ hslToRgbWorklet: hue(num[8]).hslToRgbWorklet, hue, saturation, lightness: num, fullWidth: flag, sliderWidth: sharedValue, barWidth: sharedValue3 });
  const animatedStyle = obj5.useAnimatedStyle(H);
  const items2 = [sharedValue3];
  const callback = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  const callback1 = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue3.set(nativeEvent.nativeEvent.layout.width);
  }, items2);
  const obj7 = hue(num[9]);
  class O {
    constructor() {
      const value = sharedValue1.get();
      let paddingTop = 0;
      if (value - sharedValue2.get() > 0) {
        const value2 = sharedValue1.get();
        paddingTop = (value2 - sharedValue2.get()) / 2;
      }
      let paddingLeft = 0;
      if (!flag) {
        paddingLeft = sharedValue.get() / 2;
      }
      return { paddingTop, paddingBottom: paddingTop, paddingLeft, paddingRight: paddingLeft };
    }
  }
  O.__closure = { sliderHeight: sharedValue1, barHeight: sharedValue2, fullWidth: flag, sliderWidth: sharedValue };
  O.__workletHash = 16773499975524;
  O.__initData = __initData10;
  const animatedStyle1 = obj7.useAnimatedStyle(O);
  const items3 = [tmp.container, , , ];
  let containerFullWidth = flag;
  View = saturation(num[9]).View;
  const tmp13 = sharedValue3;
  if (flag) {
    containerFullWidth = tmp.containerFullWidth;
  }
  const obj8 = { style: items3, children: items6 };
  items3[1] = containerFullWidth;
  items3[2] = style;
  items3[3] = animatedStyle1;
  const obj9 = { gesture, children: sharedValue2(tmp14Result, obj10) };
  const GestureDetector = tmp2(tmp3[10]).GestureDetector;
  obj10 = { colors: memo, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, style: items4, children: sharedValue2(tmp17, obj11) };
  items4 = [tmp.colorBar, ];
  let colorBarFullWidth = flag;
  tmp14Result = saturation(num[11]);
  if (flag) {
    colorBarFullWidth = tmp.colorBarFullWidth;
  }
  items4[1] = colorBarFullWidth;
  obj11 = { onLayout: callback1, style: items5 };
  items5 = [tmp.colorBarInner, , ];
  tmp17 = sharedValue1;
  if (flag) {
    flag = tmp.colorBarInnerFullWidth;
  }
  items5[1] = flag;
  items5[2] = colorBarInnerStyle;
  items6 = [sharedValue2(GestureDetector, obj9), ];
  const obj12 = { onLayout: callback, pointerEvents: "box-none", style: items7 };
  items7 = [tmp.slider, sliderStyle, animatedStyle];
  items6[1] = sharedValue2(saturation(num[9]).View, obj12);
  return tmp13(View, obj8);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/color_picker/native/HuePicker.tsx");

export default tmp4;