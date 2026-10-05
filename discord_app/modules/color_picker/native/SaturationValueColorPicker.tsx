// discord_app/modules/color_picker/native/SaturationValueColorPicker.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import ColorPickerUtils from "ColorPickerUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault, obj1, obj10, obj8, obj9, set, set2;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { justifyContent: "center", alignItems: "center", position: "relative" },
  selector: size,
  colorBox: obj2,
  colorBoxInner: { minHeight: 240, minWidth: 240 },
};
size = {
  top: 0,
  left: 0,
  position: "absolute",
  width: 24,
  height: 24,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 2,
};
createStyles = createStyles.createStyles;
obj2 = { overflow: "hidden", borderRadius: nativeDefault.radii.xs };
let closure_8 = createStyles(obj);
const __initData = {
  code: "function SaturationValueColorPickerTsx1(){const{hslToRgbWorklet,hue}=this.__closure;return hslToRgbWorklet({h:hue.get(),s:1,l:0.5});}",
};
const __initData2 = {
  code: 'function SaturationValueColorPickerTsx2(result,previous){const{runOnJS,setColor}=this.__closure;if(result!==previous){runOnJS(setColor)("rgb("+result[0]+", "+result[1]+", "+result[2]+")");}}',
};
const __initData3 = {
  code: "function SaturationValueColorPickerTsx3(){const{hslToRgbWorklet,hue}=this.__closure;return hslToRgbWorklet({h:hue.get(),s:1,l:0.5});}",
};
const __initData4 = {
  code: 'function SaturationValueColorPickerTsx4(result,previous){const{runOnJS,setColor}=this.__closure;if(result!==previous)runOnJS(setColor)("rgb("+result[0]+", "+result[1]+", "+result[2]+")");}',
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (hue) => {
      let closure_1;
      let colorBoxInnerStyle;
      let colorBoxStyle;
      let items2;
      let obj6;
      let tmp5;
      let tmp6;
      let obj = hue(576);
      const cResult = obj.c(15);
      hue = hue.hue;
      ({ colorBoxStyle, colorBoxInnerStyle } = hue);
      const tmp3 = closure_8();
      [tmp5, tmp6] = react.useState("rgb(0,0,0)");
      importDefault = tmp6;
      _slicedToArray(react.useState("rgb(0,0,0)"), 2);
      const fn = function b() {
        const obj = ColorPickerUtils;
        const obj2 = { h: hue.get(), s: 1, l: 0.5 };
        return obj.hslToRgbWorklet(obj2);
      };
      const tmp7 = hue(4612);
      let obj2 = { hslToRgbWorklet: hue(14424).hslToRgbWorklet, hue };
      const useAnimatedReaction = tmp7.useAnimatedReaction;
      fn.__closure = obj2;
      fn.__workletHash = 8814597686728;
      fn.__initData = __initData;
      const fn2 = function s(arg0, arg1) {
        if (arg0 !== arg1) {
          const _HermesInternal = HermesInternal;
          const obj = ReanimatedRexport;
          const runOnJSResult = obj.runOnJS(importDefault);
          runOnJSResult("rgb(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ")");
        }
      };
      fn2.__closure = { runOnJS: hue(4612).runOnJS, setColor: tmp6 };
      fn2.__workletHash = 8277631711655;
      fn2.__initData = __initData2;
      ({ runOnJS: hue(4612).runOnJS, setColor: tmp6 });
      const animatedReaction = useAnimatedReaction(fn, fn2);
      if (cResult[0] === colorBoxStyle) {
        let tmp9;
        let tmp10;
        let tmp13;
        let tmp12;
        let tmp14;
        if (cResult[1] === tmp3.colorBox) {
          tmp9 = cResult[2];
        }
        if (cResult[3] !== tmp5) {
          const items = ["rgb(255,255,255)", tmp5];
          cResult[3] = tmp5;
          cResult[4] = items;
          tmp10 = items;
        } else {
          tmp10 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const point = { x: 0, y: 0.5 };
          const point1 = { x: 1, y: 0.5 };
          cResult[5] = point;
          cResult[6] = point1;
          tmp13 = point1;
          tmp12 = point;
        } else {
          tmp12 = cResult[5];
          tmp13 = cResult[6];
        }
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = ["rgba(0, 0, 0, 0)", "#000"];
          cResult[7] = items1;
          tmp14 = items1;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] === colorBoxInnerStyle) {
          let tmp15;
          if (cResult[9] === tmp3.colorBoxInner) {
            tmp15 = cResult[10];
          }
          if (cResult[11] === tmp9) {
            if (cResult[12] === tmp10) {
              let tmp21;
              if (cResult[13] === tmp15) {
                tmp21 = cResult[14];
              }
              return tmp21;
            }
          }
          const obj4 = { style: tmp9, colors: tmp10, start: tmp12, end: tmp13, children: tmp15 };
          const tmp24 = closure_6(LinearGradientDefault, obj4);
          cResult[11] = tmp9;
          cResult[12] = tmp10;
          cResult[13] = tmp15;
          cResult[14] = tmp24;
          tmp21 = tmp24;
        }
        const obj5 = { colors: tmp14, children: closure_6(View, obj6) };
        obj6 = { style: items2 };
        items2 = [tmp3.colorBoxInner, colorBoxInnerStyle];
        const tmp18 = LinearGradientDefault;
        const tmp20 = closure_6(tmp18, obj5);
        cResult[8] = colorBoxInnerStyle;
        cResult[9] = tmp3.colorBoxInner;
        cResult[10] = tmp20;
        tmp15 = tmp20;
      }
      const items3 = [tmp3.colorBox, colorBoxStyle];
      cResult[0] = colorBoxStyle;
      cResult[1] = tmp3.colorBox;
      cResult[2] = items3;
      tmp9 = items3;
    }
  : (hue) => {
      let closure_1;
      let colorBoxInnerStyle;
      let colorBoxStyle;
      let first;
      let items;
      let items1;
      let items2;
      let obj4;
      let obj5;
      let tmp8;
      hue = hue.hue;
      ({ colorBoxStyle, colorBoxInnerStyle } = hue);
      const tmp = closure_8();
      [first] = react.useState("rgb(0,0,0)");
      importDefault = tmp4;
      const tmp5 = hue(4612);
      class S {
        constructor() {
          const obj = ColorPickerUtils;
          const obj2 = { h: hue.get(), s: 1, l: 0.5 };
          return obj.hslToRgbWorklet(obj2);
        }
      }
      let obj = { hslToRgbWorklet: hue(14424).hslToRgbWorklet, hue };
      const useAnimatedReaction = tmp5.useAnimatedReaction;
      S.__closure = obj;
      S.__workletHash = 3837299793738;
      S.__initData = __initData3;
      const fn = function _(arg0, arg1) {
        if (arg0 !== arg1) {
          const _HermesInternal = HermesInternal;
          const obj = ReanimatedRexport;
          const runOnJSResult = obj.runOnJS(closure_1);
          runOnJSResult("rgb(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ")");
        }
      };
      let obj2 = { runOnJS: hue(4612).runOnJS, setColor: tmp4 };
      fn.__closure = obj2;
      fn.__workletHash = 12285995316583;
      fn.__initData = __initData4;
      const animatedReaction = useAnimatedReaction(S, fn);
      const obj3 = {
        style: items,
        colors: items1,
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
        children: closure_6(tmp8, obj4),
      };
      items = [tmp.colorBox, colorBoxStyle];
      items1 = ["rgb(255,255,255)", first];
      obj4 = { colors: ["rgba(0, 0, 0, 0)", "#000"], children: closure_6(View, obj5) };
      obj5 = { style: items2 };
      items2 = [tmp.colorBoxInner, colorBoxInnerStyle];
      const tmp7 = LinearGradientDefault;
      tmp8 = LinearGradientDefault;
      return closure_6(tmp7, obj3);
    };
const __initData5 = {
  code: "function SaturationValueColorPickerTsx5(event){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(event.x/width));value.set(1-normalizeValue(event.y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}",
};
const __initData6 = {
  code: "function SaturationValueColorPickerTsx6(event_0){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(event_0.x/width));value.set(1-normalizeValue(event_0.y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}",
};
const __initData7 = {
  code: "function SaturationValueColorPickerTsx7(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}",
};
const __initData8 = {
  code: "function SaturationValueColorPickerTsx8(event){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(event.x/width));value.set(1-normalizeValue(event.y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}",
};
const __initData9 = {
  code: "function SaturationValueColorPickerTsx9(event_0){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(event_0.x/width));value.set(1-normalizeValue(event_0.y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}",
};
const __initData10 = {
  code: "function SaturationValueColorPickerTsx10(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (saturation, value, width, height, onPanUpdate) => {
      _require = saturation;
      dependencyMap = width;
      let closure_3 = height;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(17);
      onPanUpdate = onPanUpdate.onPanUpdate;
      const onPanFinalize = onPanUpdate.onPanFinalize;
      if (cResult[0] === height) {
        if (cResult[1] === onPanUpdate) {
          if (cResult[2] === saturation) {
            if (cResult[3] === value) {
              let tmp4;
              let tmp5;
              let tmp6;
              if (cResult[4] === width) {
                tmp4 = cResult[5];
                tmp5 = cResult[6];
              }
              if (cResult[7] !== onPanFinalize) {
                const fn3 = function v() {
                  if (null != onPanFinalize) {
                    const obj = ReanimatedRexport;
                    obj.runOnJS(tmp)();
                  }
                };
                let obj2 = { onPanFinalize, runOnJS: tmp(4612).runOnJS };
                fn3.__closure = obj2;
                fn3.__workletHash = 12584172371118;
                fn3.__initData = __initData7;
                cResult[7] = onPanFinalize;
                cResult[8] = fn3;
                tmp6 = fn3;
              } else {
                tmp6 = cResult[8];
              }
              if (cResult[9] === tmp4) {
                if (cResult[10] === tmp5) {
                  let tmp8;
                  if (cResult[11] === tmp6) {
                    tmp8 = cResult[12];
                  }
                  let tmpResult = tmp(6140);
                  const panGesture = tmpResult.usePanGesture(tmp8);
                  if (cResult[13] === panGesture) {
                    if (cResult[14] === saturation) {
                      let tmp10;
                      if (cResult[15] === value) {
                        tmp10 = cResult[16];
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
        set = saturation.set;
        const obj = ColorPickerUtils;
        const result = set(obj.normalizeValue(arg0.x / width));
        set2 = value.set;
        const obj2 = ColorPickerUtils;
        set2(1 - obj2.normalizeValue(arg0.y / height));
        if (null != onPanUpdate) {
          const tmpResult = ReanimatedRexport;
          tmpResult.runOnJS(tmp5)();
        }
      };
      size = {
        saturation,
        normalizeValue: tmp(14424).normalizeValue,
        width,
        value,
        height,
        onPanUpdate,
        runOnJS: tmp(4612).runOnJS,
      };
      fn.__closure = size;
      fn.__workletHash = 12002555446516;
      fn.__initData = __initData5;
      const fn2 = function h(arg0) {
        set = saturation.set;
        const obj = ColorPickerUtils;
        const result = set(obj.normalizeValue(arg0.x / width));
        set2 = value.set;
        const obj2 = ColorPickerUtils;
        set2(1 - obj2.normalizeValue(arg0.y / height));
        if (null != onPanUpdate) {
          const tmpResult = ReanimatedRexport;
          tmpResult.runOnJS(tmp5)();
        }
      };
      const size1 = {
        saturation,
        normalizeValue: tmp(14424).normalizeValue,
        width,
        value,
        height,
        onPanUpdate,
        runOnJS: tmp(4612).runOnJS,
      };
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
    }
  : (saturation, value, width, height, onPanUpdate) => {
      let fn;
      let fn2;
      let fn3;
      let obj2;
      let usePanGesture;
      _require = saturation;
      dependencyMap = width;
      let closure_3 = height;
      onPanUpdate = onPanUpdate.onPanUpdate;
      const onPanFinalize = onPanUpdate.onPanFinalize;
      let obj = { gesture: usePanGesture(obj2), saturation, value };
      const tmp = require("LegacyBaseButton");
      obj2 = { onBegin: fn, onUpdate: fn2, onFinalize: fn3 };
      fn = function _(arg0) {
        set = saturation.set;
        const obj = ColorPickerUtils;
        const result = set(obj.normalizeValue(arg0.x / width));
        set2 = value.set;
        const obj2 = ColorPickerUtils;
        set2(1 - obj2.normalizeValue(arg0.y / height));
        if (null != onPanUpdate) {
          const tmpResult = ReanimatedRexport;
          tmpResult.runOnJS(tmp5)();
        }
      };
      size = {
        saturation,
        normalizeValue: require("ColorPickerUtils").normalizeValue,
        width,
        value,
        height,
        onPanUpdate,
        runOnJS: require("ReanimatedRexport").runOnJS,
      };
      usePanGesture = tmp.usePanGesture;
      fn.__closure = size;
      fn.__workletHash = 14652821813625;
      fn.__initData = __initData8;
      fn2 = function h(arg0) {
        set = saturation.set;
        const obj = ColorPickerUtils;
        const result = set(obj.normalizeValue(arg0.x / width));
        set2 = value.set;
        const obj2 = ColorPickerUtils;
        set2(1 - obj2.normalizeValue(arg0.y / height));
        if (null != onPanUpdate) {
          const tmpResult = ReanimatedRexport;
          tmpResult.runOnJS(tmp5)();
        }
      };
      const size1 = {
        saturation,
        normalizeValue: require("ColorPickerUtils").normalizeValue,
        width,
        value,
        height,
        onPanUpdate,
        runOnJS: require("ReanimatedRexport").runOnJS,
      };
      fn2.__closure = size1;
      fn2.__workletHash = 1684985802135;
      fn2.__initData = __initData9;
      fn3 = function c() {
        if (null != onPanFinalize) {
          const obj = ReanimatedRexport;
          obj.runOnJS(tmp)();
        }
      };
      fn3.__closure = { onPanFinalize, runOnJS: require("ReanimatedRexport").runOnJS };
      fn3.__workletHash = 2708656850072;
      fn3.__initData = __initData10;
      ({ onPanFinalize, runOnJS: require("ReanimatedRexport").runOnJS });
      return obj;
    };
const __initData11 = {
  code: 'function SaturationValueColorPickerTsx11(){const{hsvToRgbWorklet,hue,saturation,value,colorBoxWidth,colorBoxHeight}=this.__closure;const rgb=hsvToRgbWorklet({h:hue.get(),s:saturation.get(),v:value.get()});const bgRgb=hsvToRgbWorklet({h:hue.get(),s:0,v:Math.round(1-value.get())});return{backgroundColor:"rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")",transform:[{translateX:colorBoxWidth*saturation.get()},{translateY:colorBoxHeight*(1-value.get())}],borderColor:"rgb("+bgRgb[0]+", "+bgRgb[1]+", "+bgRgb[2]+")"};}',
};
const __initData12 = {
  code: 'function SaturationValueColorPickerTsx12(){const{hsvToRgbWorklet,hue,saturation,value,colorBoxWidth,colorBoxHeight}=this.__closure;const rgb=hsvToRgbWorklet({h:hue.get(),s:saturation.get(),v:value.get()});const bgRgb=hsvToRgbWorklet({h:hue.get(),s:0,v:Math.round(1-value.get())});return{backgroundColor:"rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")",transform:[{translateX:colorBoxWidth*saturation.get()},{translateY:colorBoxHeight*(1-value.get())}],borderColor:"rgb("+bgRgb[0]+", "+bgRgb[1]+", "+bgRgb[2]+")"};}',
};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (hue) => {
      let closure_4;
      let closure_7;
      let colorBoxInnerStyle;
      let colorBoxStyle;
      let colorBoxWidth;
      let onPanFinalize;
      let onPanUpdate;
      let selectorStyle;
      let style;
      let tmp10;
      let tmp2 = dependencyMap;
      let obj = hue(576);
      const cResult = obj.c(32);
      hue = hue.hue;
      const saturation = hue.saturation;
      const value = hue.value;
      dependencyMap = value;
      ({ onPanUpdate, onPanFinalize, style, colorBoxStyle, colorBoxInnerStyle, selectorStyle } = hue);
      const tmp4 = closure_8();
      const tmp5 = colorBoxWidth(react.useState(0), 2);
      colorBoxWidth = tmp5[0];
      react = tmp5[1];
      const tmp7 = colorBoxWidth(react.useState(0), 2);
      const first1 = tmp7[0];
      let closure_6 = tmp7[1];
      [tmp10, closure_7] = colorBoxWidth(react.useState(0), 2);
      colorBoxWidth(react.useState(0), 2);
      if (cResult[0] === onPanFinalize) {
        let tmp11;
        if (cResult[1] === onPanUpdate) {
          tmp11 = cResult[2];
        }
        const gesture = closure_20(saturation, value, colorBoxWidth, first1, tmp11).gesture;
        const tmpResult = hue(4612);
        class E {
          constructor() {
            obj = closure_0(closure_2[9]);
            obj1 = { h: hue.get(), s: saturation.get(), v: value.get() };
            hsvToRgbWorkletResult = obj.hsvToRgbWorklet(obj1);
            tmp2 = closure_0(closure_2[9]);
            obj7 = { h: hue.get(), s: 0, v: Math.round(1 - value.get()) };
            hsvToRgbWorklet = tmp2.hsvToRgbWorklet;
            hsvToRgbWorkletResult1 = hsvToRgbWorklet(obj7);
            obj8 = {
              backgroundColor:
                "rgb(" +
                hsvToRgbWorkletResult[0] +
                ", " +
                hsvToRgbWorkletResult[1] +
                ", " +
                hsvToRgbWorkletResult[2] +
                ")",
              transform: null,
              borderColor: null,
            };
            obj9 = { translateX: closure_3 * saturation.get() };
            items = [,];
            items[0] = obj9;
            obj10 = { translateY: closure_5 * (1 - value.get()) };
            items[1] = obj10;
            obj8.transform = items;
            obj8.borderColor =
              "rgb(" +
              hsvToRgbWorkletResult1[0] +
              ", " +
              hsvToRgbWorkletResult1[1] +
              ", " +
              hsvToRgbWorkletResult1[2] +
              ")";
            return obj8;
          }
        }
        let obj2 = {
          hsvToRgbWorklet: tmp(14424).hsvToRgbWorklet,
          hue,
          saturation,
          value,
          colorBoxWidth,
          colorBoxHeight: first1,
        };
        const useAnimatedStyle = tmpResult.useAnimatedStyle;
        E.__closure = obj2;
        E.__workletHash = 7417575834789;
        E.__initData = __initData11;
        const animatedStyle = useAnimatedStyle(E);
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor(arg0) {
              layout = hue.nativeEvent.layout;
              height = layout.height;
              tmp = closure_4(layout.width);
              tmp2 = closure_6(height);
              return;
            }
          }
          cResult[3] = M;
        } else {
          class M {
            constructor(arg0) {
              layout = hue.nativeEvent.layout;
              height = layout.height;
              tmp = closure_4(layout.width);
              tmp2 = closure_6(height);
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
          if (cResult[8] === tmp26) {
            class G {
              constructor(arg0) {
                tmp = closure_7(hue.nativeEvent.layout.width);
                return;
              }
            }
          }
          let items = [tmp4.container, style, tmp26];
          cResult[8] = tmp26;
          class E {
            constructor() {
              obj = closure_0(closure_2[9]);
              obj1 = { h: hue.get(), s: saturation.get(), v: value.get() };
              hsvToRgbWorkletResult = obj.hsvToRgbWorklet(obj1);
              tmp2 = closure_0(closure_2[9]);
              obj7 = { h: hue.get(), s: 0, v: Math.round(1 - value.get()) };
              hsvToRgbWorklet = tmp2.hsvToRgbWorklet;
              hsvToRgbWorkletResult1 = hsvToRgbWorklet(obj7);
              obj8 = {
                backgroundColor:
                  "rgb(" +
                  hsvToRgbWorkletResult[0] +
                  ", " +
                  hsvToRgbWorkletResult[1] +
                  ", " +
                  hsvToRgbWorkletResult[2] +
                  ")",
                transform: null,
                borderColor: null,
              };
              obj9 = { translateX: closure_3 * saturation.get() };
              items = [,];
              items[0] = obj9;
              obj10 = { translateY: closure_5 * (1 - value.get()) };
              items[1] = obj10;
              obj8.transform = items;
              obj8.borderColor =
                "rgb(" +
                hsvToRgbWorkletResult1[0] +
                ", " +
                hsvToRgbWorkletResult1[1] +
                ", " +
                hsvToRgbWorkletResult1[2] +
                ")";
              return obj8;
            }
          }
          cResult[10] = tmp4.container;
          cResult[11] = items;
        }
        size = { height: sum, width: sum1 };
        cResult[5] = sum;
        cResult[6] = sum1;
        cResult[7] = size;
      }
      let obj3 = { onPanUpdate, onPanFinalize };
      cResult[0] = onPanFinalize;
      cResult[1] = onPanUpdate;
      cResult[2] = obj3;
      tmp11 = obj3;
    }
  : (hue) => {
      let closure_4;
      let colorBoxInnerStyle;
      let colorBoxStyle;
      let items1;
      let items2;
      let items3;
      let obj6;
      let onPanFinalize;
      let onPanUpdate;
      let selectorStyle;
      let style;
      hue = hue.hue;
      const saturation = hue.saturation;
      const value = hue.value;
      dependencyMap = value;
      let colorBoxWidth;
      react = undefined;
      closure_8 = undefined;
      ({ onPanUpdate, onPanFinalize, style, colorBoxStyle, colorBoxInnerStyle, selectorStyle } = hue);
      const tmp = closure_8();
      let tmp2 = colorBoxWidth(react.useState(0), 2);
      colorBoxWidth = tmp2[0];
      react = tmp2[1];
      const tmp4 = colorBoxWidth(react.useState(0), 2);
      const first1 = tmp4[0];
      let closure_6 = tmp4[1];
      const tmp6 = colorBoxWidth(react.useState(0), 2);
      const first2 = tmp6[0];
      closure_8 = tmp6[1];
      let obj = { onPanUpdate, onPanFinalize };
      const gesture = closure_20(saturation, value, colorBoxWidth, first1, obj).gesture;
      let obj2 = hue(4612);
      class P {
        constructor() {
          let items;
          const obj = ColorPickerUtils;
          const obj2 = { h: hue.get(), s: saturation.get(), v: dependencyMap.get() };
          const hsvToRgbWorkletResult = obj.hsvToRgbWorklet(obj2);
          const hsvToRgbWorklet = ColorPickerUtils.hsvToRgbWorklet;
          const obj3 = { h: hue.get(), s: 0, v: Math.round(1 - dependencyMap.get()) };
          const hsvToRgbWorkletResult1 = hsvToRgbWorklet(obj3);
          const obj4 = {
            backgroundColor:
              "rgb(" +
              hsvToRgbWorkletResult[0] +
              ", " +
              hsvToRgbWorkletResult[1] +
              ", " +
              hsvToRgbWorkletResult[2] +
              ")",
            transform: items,
            borderColor:
              "rgb(" +
              hsvToRgbWorkletResult1[0] +
              ", " +
              hsvToRgbWorkletResult1[1] +
              ", " +
              hsvToRgbWorkletResult1[2] +
              ")",
          };
          items = [{ translateX: first * saturation.get() }];
          ({ translateX: first * saturation.get() });
          items[1] = { translateY: first1 * (1 - dependencyMap.get()) };
          ({ translateY: first1 * (1 - dependencyMap.get()) });
          return obj4;
        }
      }
      let obj3 = {
        hsvToRgbWorklet: hue(14424).hsvToRgbWorklet,
        hue,
        saturation,
        value,
        colorBoxWidth,
        colorBoxHeight: first1,
      };
      P.__closure = obj3;
      P.__workletHash = 10218068286918;
      P.__initData = __initData12;
      const animatedStyle = obj2.useAnimatedStyle(P);
      const callback = react.useCallback((nativeEvent) => {
        const layout = nativeEvent.nativeEvent.layout;
        const height = layout.height;
        closure_4(layout.width);
        closure_6(height);
      }, []);
      let items = [first2, colorBoxWidth, first1];
      const callback1 = react.useCallback((nativeEvent) => {
        closure_8(nativeEvent.nativeEvent.layout.width);
      }, []);
      const result = first2 / 2;
      let obj4 = { style: items1, children: items2 };
      items1 = [
        tmp.container,
        style,
        react.useMemo(() => {
          size = { height: first1 + first2, width: first + first2 };
          return size;
        }, items),
      ];
      const obj5 = { gesture, children: closure_6(first1, obj6) };
      obj6 = {
        onLayout: callback,
        hitSlop: { top: result, bottom: result, left: result, right: result },
        children: closure_6(closure_13, { hue, colorBoxStyle, colorBoxInnerStyle }),
      };
      const GestureDetector = hue(6140).GestureDetector;
      items2 = [closure_6(GestureDetector, obj5)];
      const obj7 = { onLayout: callback1, pointerEvents: "box-none", style: items3 };
      items3 = [tmp.selector, animatedStyle, selectorStyle];
      items2[1] = closure_6(saturation(4612).View, obj7);
      return first2(first1, obj4);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/color_picker/native/SaturationValueColorPicker.tsx");

export default tmp4;
