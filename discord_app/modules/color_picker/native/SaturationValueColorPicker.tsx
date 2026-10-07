// === Module 14442: SaturationValueColorPicker ===

// Module 14442 (SaturationValueColorPicker)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import ColorPickerUtils from "ColorPickerUtils" /* 14440 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { justifyContent: "center", alignItems: "center", position: "relative" }, selector: null, colorBox: null, colorBoxInner: null };
let size = { top: 0, left: 0, position: "absolute", width: 24, height: 24, borderRadius: nativeDefault.radii.md, borderWidth: 2 };
obj2.selector = size;
obj2.colorBox = { overflow: "hidden", borderRadius: nativeDefault.radii.xs };
obj2.colorBoxInner = { minHeight: 240, minWidth: 240 };
let closure_8 = createStyles.createStyles(obj2);
const __initData = { code: "function SaturationValueColorPickerTsx1(){const{hslToRgbWorklet,hue}=this.__closure;return hslToRgbWorklet({h:hue.get(),s:1,l:0.5});}" };
const __initData2 = { code: "function SaturationValueColorPickerTsx2(result,previous){const{runOnJS,setColor}=this.__closure;if(result!==previous){runOnJS(setColor)(\"rgb(\"+result[0]+\", \"+result[1]+\", \"+result[2]+\")\");}}" };
const __initData3 = { code: "function SaturationValueColorPickerTsx3(){const{hslToRgbWorklet,hue}=this.__closure;return hslToRgbWorklet({h:hue.get(),s:1,l:0.5});}" };
const __initData4 = { code: "function SaturationValueColorPickerTsx4(result,previous){const{runOnJS,setColor}=this.__closure;if(result!==previous)runOnJS(setColor)(\"rgb(\"+result[0]+\", \"+result[1]+\", \"+result[2]+\")\");}" };
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((hue) => {
  const cResult = hue(576).c(15);
  hue = hue.hue;
  ({ colorBoxStyle, colorBoxInnerStyle } = hue);
  const tmp3 = closure_8();
  let obj = hue(576);
  [tmp5, tmp6] = noop.useState("rgb(0,0,0)");
  importDefault = tmp6;
  const tmp4 = _slicedToArray(noop.useState("rgb(0,0,0)"), 2);
  const fn = function b() {
    const obj = ColorPickerUtils;
    return obj.hslToRgbWorklet({ h: hue.get(), s: 1, l: 0.5 });
  };
  const obj2 = hue(4618);
  fn.__closure = { hslToRgbWorklet: hue(14440).hslToRgbWorklet, hue };
  fn.__workletHash = 8814597686728;
  fn.__initData = __initData;
  const fn2 = function s(arg0, arg1) {
    if (arg0 !== arg1) {
      const _HermesInternal = HermesInternal;
      ReanimatedRexport.runOnJS(closure_1)("rgb(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ")");
      const runOnJSResult = ReanimatedRexport.runOnJS(closure_1);
    }
  };
  const obj3 = { hslToRgbWorklet: hue(14440).hslToRgbWorklet, hue };
  fn2.__closure = { runOnJS: hue(4618).runOnJS, setColor: tmp6 };
  fn2.__workletHash = 8277631711655;
  fn2.__initData = __initData2;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  if (cResult[0] === colorBoxStyle) {
    if (cResult[1] === tmp3.colorBox) {
      let tmp8 = cResult[2];
    }
    if (cResult[3] !== tmp5) {
      const items = ["rgb(255,255,255)", tmp5];
      cResult[3] = tmp5;
      cResult[4] = items;
      let tmp9 = items;
    } else {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const point = { x: 0, y: 0.5 };
      const point1 = { x: 1, y: 0.5 };
      cResult[5] = point;
      cResult[6] = point1;
      let tmp12 = point1;
      let tmp11 = point;
    } else {
      tmp11 = cResult[5];
      tmp12 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = ["rgba(0, 0, 0, 0)", "#000"];
      cResult[7] = items1;
      let tmp13 = items1;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] === colorBoxInnerStyle) {
      if (cResult[9] === tmp3.colorBoxInner) {
        let tmp14 = cResult[10];
      }
      if (cResult[11] === tmp8) {
        if (cResult[12] === tmp9) {
          if (cResult[13] === tmp14) {
            let tmp20 = cResult[14];
          }
          return tmp20;
        }
      }
      const obj5 = { style: tmp8, colors: tmp9, start: tmp11, end: tmp12, children: tmp14 };
      const tmp23 = closure_6(LinearGradientDefault, obj5);
      cResult[11] = tmp8;
      cResult[12] = tmp9;
      cResult[13] = tmp14;
      cResult[14] = tmp23;
      tmp20 = tmp23;
    }
    const obj6 = { colors: tmp13, children: null };
    const obj7 = { style: null };
    const items2 = [tmp3.colorBoxInner, colorBoxInnerStyle];
    obj7.style = items2;
    obj6.children = closure_6(View, obj7);
    const tmp19 = closure_6(LinearGradientDefault, obj6);
    cResult[8] = colorBoxInnerStyle;
    cResult[9] = tmp3.colorBoxInner;
    cResult[10] = tmp19;
    tmp14 = tmp19;
  }
  const items3 = [tmp3.colorBox, colorBoxStyle];
  cResult[0] = colorBoxStyle;
  cResult[1] = tmp3.colorBox;
  cResult[2] = items3;
  tmp8 = items3;
  const obj4 = { runOnJS: hue(4618).runOnJS, setColor: tmp6 };
}) : ((hue) => {
  hue = hue.hue;
  ({ colorBoxStyle, colorBoxInnerStyle } = hue);
  const tmp = closure_8();
  const tmp2 = _slicedToArray(noop.useState("rgb(0,0,0)"), 2);
  importDefault = tmp3;
  class S {
    constructor() {
      obj = closure_0(closure_2[9]);
      obj1 = { h: hue.get(), s: 1, l: 0.5 };
      return obj.hslToRgbWorklet(obj1);
    }
  }
  let obj = hue(4618);
  S.__closure = { hslToRgbWorklet: hue(14440).hslToRgbWorklet, hue };
  S.__workletHash = 3837299793738;
  S.__initData = __initData3;
  const fn = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      const _HermesInternal = HermesInternal;
      ReanimatedRexport.runOnJS(closure_1)("rgb(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ")");
      const runOnJSResult = ReanimatedRexport.runOnJS(closure_1);
    }
  };
  const obj2 = { hslToRgbWorklet: hue(14440).hslToRgbWorklet, hue };
  fn.__closure = { runOnJS: hue(4618).runOnJS, setColor: tmp2[1] };
  fn.__workletHash = 12285995316583;
  fn.__initData = __initData4;
  const animatedReaction = obj.useAnimatedReaction(S, fn);
  const obj4 = { style: null, colors: null, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, children: null };
  const items = [tmp.colorBox, colorBoxStyle];
  obj4.style = items;
  const items1 = ["rgb(255,255,255)", tmp2[0]];
  obj4.colors = items1;
  const obj3 = { runOnJS: hue(4618).runOnJS, setColor: tmp2[1] };
  const obj5 = { colors: ["rgba(0, 0, 0, 0)", "#000"], children: null };
  const obj6 = { style: null };
  const items2 = [tmp.colorBoxInner, colorBoxInnerStyle];
  obj6.style = items2;
  const tmp5 = LinearGradientDefault;
  obj5.children = closure_6(View, obj6);
  obj4.children = closure_6(LinearGradientDefault, obj5);
  return closure_6(tmp5, obj4);
});
const __initData5 = { code: "function SaturationValueColorPickerTsx5(event){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(event.x/width));value.set(1-normalizeValue(event.y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData6 = { code: "function SaturationValueColorPickerTsx6(event_0){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(event_0.x/width));value.set(1-normalizeValue(event_0.y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData7 = { code: "function SaturationValueColorPickerTsx7(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
const __initData8 = { code: "function SaturationValueColorPickerTsx8(event){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(event.x/width));value.set(1-normalizeValue(event.y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData9 = { code: "function SaturationValueColorPickerTsx9(event_0){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(event_0.x/width));value.set(1-normalizeValue(event_0.y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData10 = { code: "function SaturationValueColorPickerTsx10(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((saturation, value, width, height, onPanUpdate) => {
  _require = saturation;
  dependencyMap = width;
  closure_3 = height;
  const cResult = require("c").c(17);
  onPanUpdate = onPanUpdate.onPanUpdate;
  const onPanFinalize = onPanUpdate.onPanFinalize;
  if (cResult[0] === height) {
    if (cResult[1] === onPanUpdate) {
      if (cResult[2] === saturation) {
        if (cResult[3] === value) {
          if (cResult[4] === width) {
            let tmp4 = cResult[5];
            let tmp5 = cResult[6];
          }
          if (cResult[7] !== onPanFinalize) {
            const fn3 = function v() {
              if (null != onPanFinalize) {
                ReanimatedRexport.runOnJS(tmp)();
              }
            };
            let obj2 = { onPanFinalize, runOnJS: tmp(4618).runOnJS };
            fn3.__closure = obj2;
            fn3.__workletHash = 12584172371118;
            fn3.__initData = __initData7;
            cResult[7] = onPanFinalize;
            cResult[8] = fn3;
            let tmp6 = fn3;
          } else {
            tmp6 = cResult[8];
          }
          if (cResult[9] === tmp4) {
            if (cResult[10] === tmp5) {
              if (cResult[11] === tmp6) {
                let tmp8 = cResult[12];
              }
              const panGesture = tmp(6147).usePanGesture(tmp8);
              if (cResult[13] === panGesture) {
                if (cResult[14] === saturation) {
                  if (cResult[15] === value) {
                    let tmp10 = cResult[16];
                  }
                  return tmp10;
                }
              }
              const obj3 = { gesture: panGesture, saturation, value };
              cResult[13] = panGesture;
              cResult[14] = saturation;
              cResult[15] = value;
              cResult[16] = obj3;
              tmp10 = obj3;
              let tmpResult = tmp(6147);
            }
          }
          const obj4 = { onBegin: tmp4, onUpdate: tmp5, onFinalize: tmp6 };
          cResult[9] = tmp4;
          cResult[10] = tmp5;
          cResult[11] = tmp6;
          cResult[12] = obj4;
          tmp8 = obj4;
        }
      }
    }
  }
  const fn = function _(arg0) {
    const result = saturation.set(ColorPickerUtils.normalizeValue(arg0.x / closure_2));
    const result1 = value.set(1 - ColorPickerUtils.normalizeValue(arg0.y / closure_3));
    if (null != onPanUpdate) {
      ReanimatedRexport.runOnJS(tmp5)();
      const tmpResult = ReanimatedRexport;
    }
  };
  const size = { saturation, normalizeValue: tmp(14440).normalizeValue, width, value, height, onPanUpdate, runOnJS: tmp(4618).runOnJS };
  fn.__closure = size;
  fn.__workletHash = 12002555446516;
  fn.__initData = __initData5;
  const fn2 = function h(arg0) {
    const result = saturation.set(ColorPickerUtils.normalizeValue(arg0.x / closure_2));
    const result1 = value.set(1 - ColorPickerUtils.normalizeValue(arg0.y / closure_3));
    if (null != onPanUpdate) {
      ReanimatedRexport.runOnJS(tmp5)();
      const tmpResult = ReanimatedRexport;
    }
  };
  const size1 = { saturation, normalizeValue: tmp(14440).normalizeValue, width, value, height, onPanUpdate, runOnJS: tmp(4618).runOnJS };
  fn2.__closure = size1;
  fn2.__workletHash = 6407791468184;
  fn2.__initData = __initData6;
  cResult[0] = height;
  cResult[1] = onPanUpdate;
  cResult[2] = saturation;
  cResult[3] = value;
  cResult[4] = width;
  cResult[5] = fn;
  cResult[6] = fn2;
  tmp5 = fn2;
  tmp4 = fn;
  let obj = require("c");
}) : ((saturation, value, width, height, onPanUpdate) => {
  _require = saturation;
  dependencyMap = width;
  closure_3 = height;
  onPanUpdate = onPanUpdate.onPanUpdate;
  const onPanFinalize = onPanUpdate.onPanFinalize;
  let obj = { gesture: null, saturation: null, value: null };
  const obj3 = { onBegin: null, onUpdate: null, onFinalize: null };
  const fn = function _(arg0) {
    const result = saturation.set(ColorPickerUtils.normalizeValue(arg0.x / closure_2));
    const result1 = value.set(1 - ColorPickerUtils.normalizeValue(arg0.y / closure_3));
    if (null != onPanUpdate) {
      ReanimatedRexport.runOnJS(tmp5)();
      const tmpResult = ReanimatedRexport;
    }
  };
  const size = { saturation, normalizeValue: require("ColorPickerUtils").normalizeValue, width, value, height, onPanUpdate, runOnJS: require("ReanimatedRexport").runOnJS };
  fn.__closure = size;
  fn.__workletHash = 14652821813625;
  fn.__initData = __initData8;
  obj3.onBegin = fn;
  const fn2 = function h(arg0) {
    const result = saturation.set(ColorPickerUtils.normalizeValue(arg0.x / closure_2));
    const result1 = value.set(1 - ColorPickerUtils.normalizeValue(arg0.y / closure_3));
    if (null != onPanUpdate) {
      ReanimatedRexport.runOnJS(tmp5)();
      const tmpResult = ReanimatedRexport;
    }
  };
  const size1 = { saturation, normalizeValue: require("ColorPickerUtils").normalizeValue, width, value, height, onPanUpdate, runOnJS: require("ReanimatedRexport").runOnJS };
  fn2.__closure = size1;
  fn2.__workletHash = 1684985802135;
  fn2.__initData = __initData9;
  obj3.onUpdate = fn2;
  const fn3 = function c() {
    if (null != onPanFinalize) {
      ReanimatedRexport.runOnJS(tmp)();
    }
  };
  let obj2 = require("LegacyBaseButton");
  fn3.__closure = { onPanFinalize, runOnJS: require("ReanimatedRexport").runOnJS };
  fn3.__workletHash = 2708656850072;
  fn3.__initData = __initData10;
  obj3.onFinalize = fn3;
  obj.gesture = obj2.usePanGesture(obj3);
  obj.saturation = saturation;
  obj.value = value;
  return obj;
});
const __initData11 = { code: "function SaturationValueColorPickerTsx11(){const{hsvToRgbWorklet,hue,saturation,value,colorBoxWidth,colorBoxHeight}=this.__closure;const rgb=hsvToRgbWorklet({h:hue.get(),s:saturation.get(),v:value.get()});const bgRgb=hsvToRgbWorklet({h:hue.get(),s:0,v:Math.round(1-value.get())});return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:colorBoxWidth*saturation.get()},{translateY:colorBoxHeight*(1-value.get())}],borderColor:\"rgb(\"+bgRgb[0]+\", \"+bgRgb[1]+\", \"+bgRgb[2]+\")\"};}" };
const __initData12 = { code: "function SaturationValueColorPickerTsx12(){const{hsvToRgbWorklet,hue,saturation,value,colorBoxWidth,colorBoxHeight}=this.__closure;const rgb=hsvToRgbWorklet({h:hue.get(),s:saturation.get(),v:value.get()});const bgRgb=hsvToRgbWorklet({h:hue.get(),s:0,v:Math.round(1-value.get())});return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:colorBoxWidth*saturation.get()},{translateY:colorBoxHeight*(1-value.get())}],borderColor:\"rgb(\"+bgRgb[0]+\", \"+bgRgb[1]+\", \"+bgRgb[2]+\")\"};}" };
ReactCompilerGating = fn(558);
let obj3 = { overflow: "hidden", borderRadius: nativeDefault.radii.xs };
size = fn(2);
let result = size.fileFinishedImporting("modules/color_picker/native/SaturationValueColorPicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((hue) => {
  const cResult = hue(576).c(32);
  hue = hue.hue;
  const saturation = hue.saturation;
  value = hue.value;
  dependencyMap = value;
  ({ onPanUpdate, onPanFinalize, style, colorBoxStyle, colorBoxInnerStyle, selectorStyle } = hue);
  const tmp4 = closure_8();
  const tmp5 = colorBoxWidth(noop.useState(0), 2);
  colorBoxWidth = tmp5[0];
  noop = tmp5[1];
  const tmp7 = colorBoxWidth(noop.useState(0), 2);
  const first1 = tmp7[0];
  closure_6 = tmp7[1];
  let obj = hue(576);
  [tmp10, closure_7] = colorBoxWidth(noop.useState(0), 2);
  if (cResult[0] === onPanFinalize) {
    if (cResult[1] === onPanUpdate) {
      let tmp11 = cResult[2];
    }
    const gesture = closure_20(saturation, value, colorBoxWidth, first1, tmp11).gesture;
    class E {
      constructor() {
        obj = closure_0(closure_2[9]);
        obj1 = { h: hue.get(), s: saturation.get(), v: value.get() };
        hsvToRgbWorkletResult = obj.hsvToRgbWorklet(obj1);
        obj3 = closure_0(closure_2[9]);
        obj8 = { h: hue.get(), s: 0, v: Math.round(1 - value.get()) };
        hsvToRgbWorkletResult1 = obj3.hsvToRgbWorklet(obj8);
        obj9 = { backgroundColor: "rgb(" + hsvToRgbWorkletResult[0] + ", " + hsvToRgbWorkletResult[1] + ", " + hsvToRgbWorkletResult[2] + ")", transform: null, borderColor: null };
        obj10 = { translateX: closure_3 * saturation.get() };
        items = [, ];
        items[0] = obj10;
        obj11 = { translateY: closure_5 * (1 - value.get()) };
        items[1] = obj11;
        obj9.transform = items;
        obj9.borderColor = "rgb(" + hsvToRgbWorkletResult1[0] + ", " + hsvToRgbWorkletResult1[1] + ", " + hsvToRgbWorkletResult1[2] + ")";
        return obj9;
      }
    }
    let obj2 = { hsvToRgbWorklet: tmp(14440).hsvToRgbWorklet, hue, saturation, value, colorBoxWidth, colorBoxHeight: first1 };
    E.__closure = obj2;
    E.__workletHash = 7417575834789;
    E.__initData = __initData11;
    const animatedStyle = tmp(4618).useAnimatedStyle(E);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(arg0) {
          layout = hue.nativeEvent.layout;
          tmp = closure_4(layout.width);
          tmp2 = closure_6(layout.height);
          return;
        }
      }
      cResult[3] = M;
    } else {
      class M {
        constructor(arg0) {
          layout = hue.nativeEvent.layout;
          tmp = closure_4(layout.width);
          tmp2 = closure_6(layout.height);
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor(arg0) {
          tmp = closure_7(hue.nativeEvent.layout.width);
          return;
        }
      }
      cResult[4] = G;
    } else {
      class G {
        constructor(arg0) {
          tmp = closure_7(hue.nativeEvent.layout.width);
          return;
        }
      }
    }
    const sum = first1 + tmp10;
    const sum1 = colorBoxWidth + tmp10;
    if (cResult[5] === sum) {
      class G {
        constructor(arg0) {
          tmp = closure_7(hue.nativeEvent.layout.width);
          return;
        }
      }
      const result = tmp10 / 2;
      if (cResult[8] === tmp25) {
        class G {
          constructor(arg0) {
            tmp = closure_7(hue.nativeEvent.layout.width);
            return;
          }
        }
      }
      let items = [tmp4.container, style, tmp25];
      cResult[8] = tmp25;
      class E {
        constructor() {
          obj = closure_0(closure_2[9]);
          obj1 = { h: hue.get(), s: saturation.get(), v: value.get() };
          hsvToRgbWorkletResult = obj.hsvToRgbWorklet(obj1);
          obj3 = closure_0(closure_2[9]);
          obj8 = { h: hue.get(), s: 0, v: Math.round(1 - value.get()) };
          hsvToRgbWorkletResult1 = obj3.hsvToRgbWorklet(obj8);
          obj9 = { backgroundColor: "rgb(" + hsvToRgbWorkletResult[0] + ", " + hsvToRgbWorkletResult[1] + ", " + hsvToRgbWorkletResult[2] + ")", transform: null, borderColor: null };
          obj10 = { translateX: closure_3 * saturation.get() };
          items = [, ];
          items[0] = obj10;
          obj11 = { translateY: closure_5 * (1 - value.get()) };
          items[1] = obj11;
          obj9.transform = items;
          obj9.borderColor = "rgb(" + hsvToRgbWorkletResult1[0] + ", " + hsvToRgbWorkletResult1[1] + ", " + hsvToRgbWorkletResult1[2] + ")";
          return obj9;
        }
      }
      cResult[10] = tmp4.container;
      cResult[11] = items;
    }
    const size = { height: sum, width: sum1 };
    cResult[5] = sum;
    cResult[6] = sum1;
    cResult[7] = size;
    const tmpResult = tmp(4618);
  }
  let obj3 = { onPanUpdate, onPanFinalize };
  cResult[0] = onPanFinalize;
  cResult[1] = onPanUpdate;
  cResult[2] = obj3;
  tmp11 = obj3;
  const tmp9 = colorBoxWidth(noop.useState(0), 2);
}) : ((hue) => {
  hue = hue.hue;
  const saturation = hue.saturation;
  value = hue.value;
  dependencyMap = value;
  let colorBoxWidth;
  noop = undefined;
  closure_8 = undefined;
  ({ onPanUpdate, onPanFinalize, style, colorBoxStyle, colorBoxInnerStyle, selectorStyle } = hue);
  const tmp = closure_8();
  const tmp2 = colorBoxWidth(noop.useState(0), 2);
  colorBoxWidth = tmp2[0];
  noop = tmp2[1];
  const tmp4 = colorBoxWidth(noop.useState(0), 2);
  const first1 = tmp4[0];
  closure_6 = tmp4[1];
  const tmp6 = colorBoxWidth(noop.useState(0), 2);
  const first2 = tmp6[0];
  closure_8 = tmp6[1];
  class P {
    constructor() {
      obj = closure_0(closure_2[9]);
      obj1 = { h: hue.get(), s: saturation.get(), v: value.get() };
      hsvToRgbWorkletResult = obj.hsvToRgbWorklet(obj1);
      obj3 = closure_0(closure_2[9]);
      obj8 = { h: hue.get(), s: 0, v: Math.round(1 - value.get()) };
      hsvToRgbWorkletResult1 = obj3.hsvToRgbWorklet(obj8);
      obj9 = { backgroundColor: "rgb(" + hsvToRgbWorkletResult[0] + ", " + hsvToRgbWorkletResult[1] + ", " + hsvToRgbWorkletResult[2] + ")", transform: null, borderColor: null };
      obj10 = { translateX: closure_3 * saturation.get() };
      items = [, ];
      items[0] = obj10;
      obj11 = { translateY: closure_5 * (1 - value.get()) };
      items[1] = obj11;
      obj9.transform = items;
      obj9.borderColor = "rgb(" + hsvToRgbWorkletResult1[0] + ", " + hsvToRgbWorkletResult1[1] + ", " + hsvToRgbWorkletResult1[2] + ")";
      return obj9;
    }
  }
  let obj = { onPanUpdate, onPanFinalize };
  let obj2 = hue(4618);
  P.__closure = { hsvToRgbWorklet: hue(14440).hsvToRgbWorklet, hue, saturation, value, colorBoxWidth, colorBoxHeight: first1 };
  P.__workletHash = 10218068286918;
  P.__initData = __initData12;
  const animatedStyle = obj2.useAnimatedStyle(P);
  const callback = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    closure_4(layout.width);
    closure_6(layout.height);
  }, []);
  let items = [first2, colorBoxWidth, first1];
  const callback1 = noop.useCallback((nativeEvent) => {
    closure_8(nativeEvent.nativeEvent.layout.width);
  }, []);
  const result = first2 / 2;
  let obj4 = { style: null, children: null };
  const items1 = [
    tmp.container,
    style,
    noop.useMemo(() => {
      const size = { height: first1 + first2, width: first + first2 };
      return size;
    }, items)
  ];
  obj4.style = items1;
  let obj5 = { gesture: closure_20(saturation, value, colorBoxWidth, first1, obj).gesture, children: null };
  let obj3 = { hsvToRgbWorklet: hue(14440).hsvToRgbWorklet, hue, saturation, value, colorBoxWidth, colorBoxHeight: first1 };
  obj5.children = closure_6(first1, { onLayout: callback, hitSlop: { top: result, bottom: result, left: result, right: result }, children: closure_6(closure_13, { hue, colorBoxStyle, colorBoxInnerStyle }) });
  const items2 = [closure_6(hue(6147).GestureDetector, obj5), ];
  const obj7 = { onLayout: callback1, pointerEvents: "box-none", style: null };
  const items3 = [tmp.selector, animatedStyle, selectorStyle];
  obj7.style = items3;
  items2[1] = closure_6(saturation(4618).View, obj7);
  obj4.children = items2;
  return first2(first1, obj4);
});