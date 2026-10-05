// discord_app/modules/conjure/glow/native/ConjureShellGlow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let set, set2, set3, thinking;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
const ANDROID = PlatformUtils.isAndroid();
let c13 = 500;
let c14 = 0.504;
let c15 = 204;
let c16 = 700;
let c17 = "rgb(225, 240, 255)";
let c18 = "rgb(120, 60, 200)";
let items = [
  [0, 1],
  [0.09, 0.95],
  [0.17, 0.98],
  [0.29, 0.86],
  [0.37, 0.94],
  [0.48, 1],
  [0.56, 0.92],
  [0.64, 0.96],
  [0.76, 0.89],
  [0.84, 0.99],
  [1, 1],
];
function pulseAt(arg0) {
  let first;
  let tmp4;
  let tmp7;
  let tmp8;
  let num = 1;
  let num2 = 1;
  if (1 < items.length) {
    [first, tmp4] = items[num2];
    while (arg0 > first) {
      num2 = num2 + num;
    }
    [tmp7, tmp8] = items[num2 - num];
    const diff = first - tmp7;
    const diff1 = tmp4 - tmp8;
    _slicedToArray(items[num2 - num], 2);
    if (diff > 0) {
      num = (arg0 - tmp7) / diff;
    }
    return tmp8 + diff1 * num;
  }
  return num;
}
pulseAt.__closure = { PULSE_KEYFRAMES: items };
pulseAt.__workletHash = 10785188429539;
pulseAt.__initData = {
  code: "function pulseAt_ConjureShellGlowTsx1(progress){const{PULSE_KEYFRAMES}=this.__closure;for(let i=1;i<PULSE_KEYFRAMES.length;i++){const[t1,v1]=PULSE_KEYFRAMES[i];if(progress<=t1){const[t0,v0]=PULSE_KEYFRAMES[i-1];const span=t1-t0;const local=span>0?(progress-t0)/span:1;return v0+(v1-v0)*local;}}return 1;}",
};
const colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,1)"];
const locations = [0, 0.45, 1];
const start = { x: 0.5, y: 0 };
const end = { x: 0.5, y: 1 };
const start2 = { x: 0, y: 0.5 };
const end2 = { x: 1, y: 0.5 };
let closure_27 = createStyles.createStyles({
  root: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", zIndex: 0 },
  band: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 },
  sweep: { position: "absolute", top: 0, bottom: 0, left: 0, width: "200%" },
  fill: { flex: 1 },
  ditherClip: { position: "absolute", left: 0, right: 0, bottom: 0, overflow: "hidden" },
  ditherField: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 },
});
const __initData = {
  code: "function ConjureShellGlowTsx2(){const{lift,pulseAt,pulse,BAND_HEIGHT}=this.__closure;const scale=lift.get()*pulseAt(pulse.get());return{transform:[{translateY:BAND_HEIGHT*(1-scale)/2},{scaleY:scale}]};}",
};
const __initData2 = {
  code: "function ConjureShellGlowTsx3(){const{chromaMix,layerAlpha,driftBase,width}=this.__closure;return{opacity:(1-chromaMix.get())*layerAlpha,transform:[{translateX:-driftBase.get()*width}]};}",
};
const __initData3 = {
  code: "function ConjureShellGlowTsx4(){const{chromaMix,layerAlpha,driftChroma,width}=this.__closure;return{opacity:chromaMix.get()*layerAlpha,transform:[{translateX:-driftChroma.get()*width}]};}",
};
const __initData4 = {
  code: "function ConjureShellGlowTsx5(){const{ANDROID,BAND_HEIGHT,lift,pulseAt,pulse,ditherHeight}=this.__closure;return{height:ANDROID?BAND_HEIGHT*lift.get()*pulseAt(pulse.get()):ditherHeight.get()};}",
};
const __initData5 = {
  code: "function ConjureShellGlowTsx6(){const{lift,pulseAt,pulse,BAND_HEIGHT}=this.__closure;const scale=lift.get()*pulseAt(pulse.get());return{transform:[{translateY:BAND_HEIGHT*(1-scale)/2},{scaleY:scale}]};}",
};
const __initData6 = {
  code: "function ConjureShellGlowTsx7(){const{chromaMix,layerAlpha,driftBase,width}=this.__closure;return{opacity:(1-chromaMix.get())*layerAlpha,transform:[{translateX:-driftBase.get()*width}]};}",
};
const __initData7 = {
  code: "function ConjureShellGlowTsx8(){const{chromaMix,layerAlpha,driftChroma,width}=this.__closure;return{opacity:chromaMix.get()*layerAlpha,transform:[{translateX:-driftChroma.get()*width}]};}",
};
const __initData8 = {
  code: "function ConjureShellGlowTsx9(){const{ANDROID,BAND_HEIGHT,lift,pulseAt,pulse,ditherHeight}=this.__closure;return{height:ANDROID?BAND_HEIGHT*lift.get()*pulseAt(pulse.get()):ditherHeight.get()};}",
};
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (thinking) => {
      let BG_GRADIENT_CHROMA_GLOW_1;
      let BG_GRADIENT_CHROMA_GLOW_2;
      let BG_GRADIENT_MIDNIGHT_BLURPLE_1;
      let ILLO_PURPLE_30;
      let ILLO_PURPLE_40;
      let closure_4;
      let duration;
      let items4;
      let items5;
      let items6;
      let items8;
      let num14;
      let sharedValue1;
      let sharedValue3;
      let tmp10;
      let tmp13;
      let tmp15;
      let tmp16;
      let tmp17;
      let tmp5;
      let tmp6;
      let tmp9;
      let width;
      let tmp = thinking;
      let obj = thinking(num14[11]);
      const cResult = obj.c(94);
      thinking = thinking.thinking;
      const bleedBottom = thinking.bleedBottom;
      let num = 0;
      if (undefined !== bleedBottom) {
        num = bleedBottom;
      }
      const tmp4 = closure_27();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = sharedValue1;
        items = [sharedValue1];
        let fn = function v() {
          return sharedValue1.useReducedMotion;
        };
        cResult[0] = items;
        let num2 = 1;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(tmp2[12]);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = sharedValue3;
        const items1 = [sharedValue3];
        class Y {
          constructor() {
            return sharedValue3.theme;
          }
        }
        let num3 = 2;
        cResult[2] = items1;
        let num4 = 3;
        cResult[3] = Y;
        tmp10 = Y;
        tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult13 = tmp(num14[12]);
      const stateFromStores1 = tmpResult13.useStateFromStores(tmp9, tmp10);
      if (cResult[4] !== stateFromStores1) {
        const tmpResult14 = tmp(num14[13]);
        const isThemeDarkResult = tmpResult14.isThemeDark(stateFromStores1);
        class Y {
          constructor() {
            return sharedValue3.theme;
          }
        }
        let num6 = 5;
        cResult[5] = isThemeDarkResult;
        tmp13 = isThemeDarkResult;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] !== stateFromStores1) {
        const tmp18 = stateFromStores;
        const resolveSemanticColor = stateFromStores(tmp2[7]).internal.resolveSemanticColor;
        class Y {
          constructor() {
            return sharedValue3.theme;
          }
        }
        const obj5 = stateFromStores(num14[8])(tmp19);
        const alphaResult = obj5.alpha(0);
        const cssResult = alphaResult.css();
        cResult[6] = stateFromStores1;
        cResult[7] = tmp19;
        cResult[8] = tmp19;
        cResult[9] = cssResult;
        tmp17 = cssResult;
        tmp16 = tmp19;
        tmp15 = tmp19;
      } else {
        tmp15 = cResult[7];
        tmp16 = cResult[8];
        tmp17 = cResult[9];
      }
      if (cResult[10] === tmp15) {
        if (cResult[11] === tmp16) {
          let tmp21;
          let tmp22;
          let tmp29;
          if (cResult[12] === tmp17) {
            tmp21 = cResult[13];
          }
          if (cResult[14] !== tmp13) {
            let obj2;
            const unsafe_rawColors = stateFromStores(tmp2[7]).unsafe_rawColors;
            const tmp23 = stateFromStores;
            if (tmp13) {
              ({ BG_GRADIENT_MIDNIGHT_BLURPLE_1, BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2 } =
                unsafe_rawColors);
              class Y {
                constructor() {
                  return sharedValue3.theme;
                }
              }
              const items2 = [
                BG_GRADIENT_MIDNIGHT_BLURPLE_1,
                unsafe_rawColors.BG_GRADIENT_MIDNIGHT_BLURPLE_2,
                BG_GRADIENT_MIDNIGHT_BLURPLE_1,
              ];
              tmp25[0] = items2;
              const items3 = [
                BG_GRADIENT_CHROMA_GLOW_1,
                BG_GRADIENT_CHROMA_GLOW_2,
                unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_3,
                BG_GRADIENT_CHROMA_GLOW_2,
                BG_GRADIENT_CHROMA_GLOW_1,
              ];
              tmp25[1] = items3;
              obj2 = tmp25;
            } else {
              ({ ILLO_PURPLE_30, ILLO_PURPLE_40 } = unsafe_rawColors);
              const tmp23Result = tmp23(num14[8]);
              class Y {
                constructor() {
                  return sharedValue3.theme;
                }
              }
              const hslResult = tmp23Result.hsl(184, 0.8, 0.6);
              const hexResult = hslResult.hex();
              const ILLO_PURPLE_402 = unsafe_rawColors.ILLO_PURPLE_40;
              obj2 = { base: items4, chroma: items5 };
              items4 = [ILLO_PURPLE_30, ILLO_PURPLE_40, ILLO_PURPLE_30];
              items5 = [hexResult, ILLO_PURPLE_402, unsafe_rawColors.ILLO_PINK_40, ILLO_PURPLE_402, hexResult];
            }
            class Y {
              constructor() {
                return sharedValue3.theme;
              }
            }
            cResult[14] = tmp13;
            cResult[15] = obj2;
            tmp22 = obj2;
          } else {
            tmp22 = cResult[15];
          }
          num14 = 0.2;
          class Y {
            constructor() {
              return sharedValue3.theme;
            }
          }
          const tmp27 = width(react.useState(0), 2);
          width = tmp27[0];
          react = tmp27[1];
          const _Symbol = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            function te(nativeEvent) {
              let closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
              let tmp = closure_4((arg0) => {
                let tmp = closure_0;
                if (arg0 === closure_0) {
                  tmp = arg0;
                }
                return tmp;
              });
            }
            cResult[16] = te;
            class Y {
              constructor() {
                return sharedValue3.theme;
              }
            }
          } else {
            tmp29 = cResult[16];
          }
          let num18 = 1;
          const useSharedValue = tmp(num14[14]).useSharedValue;
          tmp(num14[14]);
          if (!thinking) {
            num18 = c14;
          }
          const sharedValue = useSharedValue(num18);
          let num19 = 0;
          const useSharedValue2 = tmp(num14[14]).useSharedValue;
          tmp(num14[14]);
          if (thinking) {
            num19 = 1;
          }
          const sharedValue2 = useSharedValue2(num19);
          const tmpResult17 = tmp(num14[14]);
          sharedValue1 = tmpResult17.useSharedValue(thinking ? v500 : c15);
          const tmpResult18 = tmp(num14[14]);
          sharedValue3 = tmpResult18.useSharedValue(0);
          const tmpResult19 = tmp(num14[14]);
          const sharedValue4 = tmpResult19.useSharedValue(0);
          const tmpResult20 = tmp(num14[14]);
          const sharedValue5 = tmpResult20.useSharedValue(0);
          if (cResult[17] === sharedValue2) {
            if (cResult[18] === sharedValue1) {
              if (cResult[19] === sharedValue) {
                let tmp38;
                let tmp39;
                if (cResult[20] === thinking) {
                  tmp38 = cResult[21];
                  tmp39 = cResult[22];
                }
                const effect = obj10.useEffect(tmp38, tmp39);
                if (cResult[23] === sharedValue4) {
                  if (cResult[24] === sharedValue5) {
                    let tmp41;
                    let tmp42;
                    if (cResult[25] === stateFromStores) {
                      tmp41 = cResult[26];
                      tmp42 = cResult[27];
                    }
                    const effect1 = obj10.useEffect(tmp41, tmp42);
                    if (cResult[28] === sharedValue3) {
                      if (cResult[29] === stateFromStores) {
                        let tmp45;
                        let tmp46;
                        let tmp60;
                        if (cResult[30] === thinking) {
                          tmp45 = cResult[31];
                          tmp46 = cResult[32];
                        }
                        const effect2 = obj10.useEffect(tmp45, tmp46);
                        const tmpResult21 = tmp(num14[14]);
                        class Ee {
                          constructor() {
                            let first;
                            let tmp11;
                            let tmp12;
                            let tmp7;
                            const value = sharedValue.get();
                            const value2 = sharedValue3.get();
                            if (typeof pulseAt === "function") {
                              let num3 = 1;
                              let num4 = 1;
                              if (1 < items.length) {
                                [first, tmp7] = items[num3];
                                while (value2 > first) {
                                  let sum = num3 + 1;
                                  num3 = sum;
                                  num4 = 1;
                                }
                                [tmp11, tmp12] = items[num3 - 1];
                                const diff = first - tmp11;
                                let num6 = 1;
                                const diff1 = tmp7 - tmp12;
                                _slicedToArray(items[num3 - 1], 2);
                                if (diff > 0) {
                                  num6 = (value2 - tmp11) / diff;
                                }
                                num4 = tmp12 + diff1 * num6;
                              }
                              const result = value * num4;
                              const obj = { transform: items };
                              items = [{ translateY: (c13 * (1 - result)) / 2 }];
                              const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                              const obj3 = { scaleY: result };
                              items[1] = obj3;
                              return obj;
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                        }
                        let obj3 = { lift: sharedValue, pulseAt, pulse: sharedValue3, BAND_HEIGHT: v500 };
                        Ee.__closure = obj3;
                        Ee.__workletHash = 14122773184727;
                        Ee.__initData = __initData;
                        const animatedStyle = tmpResult21.useAnimatedStyle(Ee);
                        const tmpResult22 = tmp(num14[14]);
                        class Se {
                          constructor() {
                            const obj = { opacity: (1 - sharedValue2.get()) * num14, transform: items };
                            items = [{ translateX: -sharedValue4.get() * first }];
                            ({ translateX: -sharedValue4.get() * first });
                            return obj;
                          }
                        }
                        let obj4 = { chromaMix: sharedValue2, layerAlpha: num14, driftBase: sharedValue4, width };
                        Se.__closure = obj4;
                        Se.__workletHash = 11778214036579;
                        Se.__initData = __initData2;
                        const animatedStyle1 = tmpResult22.useAnimatedStyle(Se);
                        function be() {
                          const obj = { opacity: sharedValue2.get() * num14, transform: items };
                          items = [{ translateX: -sharedValue5.get() * first }];
                          ({ translateX: -sharedValue5.get() * first });
                          return obj;
                        }
                        const obj6 = { chromaMix: sharedValue2, layerAlpha: num14, driftChroma: sharedValue5, width };
                        be.__closure = obj6;
                        be.__workletHash = 12832282995257;
                        be.__initData = __initData3;
                        const tmpResult23 = tmp(num14[14]);
                        const animatedStyle2 = tmpResult23.useAnimatedStyle(be);
                        function ve() {
                          let first;
                          let height;
                          let tmp14;
                          let tmp18;
                          let tmp19;
                          if (ANDROID) {
                            const result = c13 * sharedValue.get();
                            const value = sharedValue3.get();
                            if (typeof pulseAt === "function") {
                              let num = 1;
                              let num3 = 1;
                              let num4 = 1;
                              if (1 < items.length) {
                                [first, tmp14] = items[num3];
                                while (value > first) {
                                  let sum = num3 + num;
                                  num3 = sum;
                                  num4 = num;
                                }
                                [tmp18, tmp19] = items[num3 - num];
                                const diff = first - tmp18;
                                const diff1 = tmp14 - tmp19;
                                _slicedToArray(items[num3 - num], 2);
                                if (diff > 0) {
                                  num = (value - tmp18) / diff;
                                }
                                num4 = tmp19 + diff1 * num;
                              }
                              height = result * num4;
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            height = sharedValue1.get();
                          }
                          return { height };
                        }
                        const obj7 = {
                          ANDROID,
                          BAND_HEIGHT: v500,
                          lift: sharedValue,
                          pulseAt,
                          pulse: sharedValue3,
                          ditherHeight: sharedValue1,
                        };
                        ve.__closure = obj7;
                        ve.__workletHash = 9289670122768;
                        ve.__initData = __initData4;
                        const tmpResult24 = tmp(num14[14]);
                        const animatedStyle3 = tmpResult24.useAnimatedStyle(ve);
                        if (cResult[33] !== tmp4.fill) {
                          const obj8 = { style: null, colors, locations, start, end };
                          class Ee {
                            constructor() {
                              let first;
                              let tmp11;
                              let tmp12;
                              let tmp7;
                              const value = sharedValue.get();
                              const value2 = sharedValue3.get();
                              if (typeof pulseAt === "function") {
                                let num3 = 1;
                                let num4 = 1;
                                if (1 < items.length) {
                                  [first, tmp7] = items[num3];
                                  while (value2 > first) {
                                    let sum = num3 + 1;
                                    num3 = sum;
                                    num4 = 1;
                                  }
                                  [tmp11, tmp12] = items[num3 - 1];
                                  const diff = first - tmp11;
                                  let num6 = 1;
                                  const diff1 = tmp7 - tmp12;
                                  _slicedToArray(items[num3 - 1], 2);
                                  if (diff > 0) {
                                    num6 = (value2 - tmp11) / diff;
                                  }
                                  num4 = tmp12 + diff1 * num6;
                                }
                                const result = value * num4;
                                const obj = { transform: items };
                                items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                const obj3 = { scaleY: result };
                                items[1] = obj3;
                                return obj;
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                          }
                          const tmp67 = sharedValue4(stateFromStores(num14[16]), obj8);
                          cResult[33] = tmp4.fill;
                          cResult[34] = tmp67;
                          tmp60 = tmp67;
                        } else {
                          tmp60 = cResult[34];
                        }
                        if (cResult[35] === animatedStyle1) {
                          let tmp68;
                          if (cResult[36] === tmp4.sweep) {
                            tmp68 = cResult[37];
                          }
                          if (cResult[38] === tmp22.base) {
                            if (cResult[41] === tmp68) {
                              let tmp74;
                              if (cResult[42] === tmp69) {
                                tmp74 = cResult[43];
                              }
                              if (cResult[44] === animatedStyle2) {
                                let tmp77;
                                if (cResult[45] === tmp4.sweep) {
                                  tmp77 = cResult[46];
                                }
                                if (cResult[47] === tmp22.chroma) {
                                  if (cResult[50] === tmp77) {
                                    let tmp83;
                                    if (cResult[51] === tmp78) {
                                      tmp83 = cResult[52];
                                    }
                                    if (cResult[53] === tmp74) {
                                      let tmp86;
                                      if (cResult[54] === tmp83) {
                                        tmp86 = cResult[55];
                                      }
                                      const tmp89 = tmp13 ? c17 : c18;
                                      class Ee {
                                        constructor() {
                                          let first;
                                          let tmp11;
                                          let tmp12;
                                          let tmp7;
                                          const value = sharedValue.get();
                                          const value2 = sharedValue3.get();
                                          if (typeof pulseAt === "function") {
                                            let num3 = 1;
                                            let num4 = 1;
                                            if (1 < items.length) {
                                              [first, tmp7] = items[num3];
                                              while (value2 > first) {
                                                let sum = num3 + 1;
                                                num3 = sum;
                                                num4 = 1;
                                              }
                                              [tmp11, tmp12] = items[num3 - 1];
                                              const diff = first - tmp11;
                                              let num6 = 1;
                                              const diff1 = tmp7 - tmp12;
                                              _slicedToArray(items[num3 - 1], 2);
                                              if (diff > 0) {
                                                num6 = (value2 - tmp11) / diff;
                                              }
                                              num4 = tmp12 + diff1 * num6;
                                            }
                                            const result = value * num4;
                                            const obj = { transform: items };
                                            items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                            const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                            const obj3 = { scaleY: result };
                                            items[1] = obj3;
                                            return obj;
                                          } else {
                                            throw new TypeError("Trying to call a non-function");
                                          }
                                        }
                                      }
                                      if (cResult[56] === tmp89) {
                                        if (cResult[57] === 0.16) {
                                          if (cResult[58] === thinking) {
                                            let tmp90;
                                            if (cResult[59] === width) {
                                              tmp90 = cResult[60];
                                            }
                                            if (cResult[61] === tmp4.ditherField) {
                                              let tmp94;
                                              let tmp97;
                                              if (cResult[62] === tmp90) {
                                                tmp94 = cResult[63];
                                              }
                                              if (cResult[64] !== num) {
                                                let tmp98 = num > 0;
                                                if (tmp98) {
                                                  tmp98 = { bottom: -num };
                                                  const obj9 = { bottom: -num };
                                                }
                                                class Ee {
                                                  constructor() {
                                                    let first;
                                                    let tmp11;
                                                    let tmp12;
                                                    let tmp7;
                                                    const value = sharedValue.get();
                                                    const value2 = sharedValue3.get();
                                                    if (typeof pulseAt === "function") {
                                                      let num3 = 1;
                                                      let num4 = 1;
                                                      if (1 < items.length) {
                                                        [first, tmp7] = items[num3];
                                                        while (value2 > first) {
                                                          let sum = num3 + 1;
                                                          num3 = sum;
                                                          num4 = 1;
                                                        }
                                                        [tmp11, tmp12] = items[num3 - 1];
                                                        const diff = first - tmp11;
                                                        let num6 = 1;
                                                        const diff1 = tmp7 - tmp12;
                                                        _slicedToArray(items[num3 - 1], 2);
                                                        if (diff > 0) {
                                                          num6 = (value2 - tmp11) / diff;
                                                        }
                                                        num4 = tmp12 + diff1 * num6;
                                                      }
                                                      const result = value * num4;
                                                      const obj = { transform: items };
                                                      items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                                      const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                                      const obj3 = { scaleY: result };
                                                      items[1] = obj3;
                                                      return obj;
                                                    } else {
                                                      throw new TypeError("Trying to call a non-function");
                                                    }
                                                  }
                                                }
                                                cResult[65] = tmp98;
                                                tmp97 = tmp98;
                                              } else {
                                                tmp97 = cResult[65];
                                              }
                                              if (cResult[66] === tmp4.root) {
                                                let tmp99;
                                                if (cResult[67] === tmp97) {
                                                  tmp99 = cResult[68];
                                                }
                                                if (cResult[69] === animatedStyle) {
                                                  let tmp101;
                                                  if (cResult[70] === tmp4.band) {
                                                    tmp101 = cResult[71];
                                                  }
                                                  if (cResult[72] === tmp60) {
                                                    let tmp102;
                                                    if (cResult[73] === tmp86) {
                                                      tmp102 = cResult[74];
                                                    }
                                                    if (cResult[75] === tmp101) {
                                                      let tmp105;
                                                      if (cResult[76] === tmp102) {
                                                        tmp105 = cResult[77];
                                                      }
                                                      if (cResult[78] === animatedStyle3) {
                                                        if (cResult[79] === tmp94) {
                                                          if (cResult[80] === tmp60) {
                                                            if (cResult[81] === stateFromStores) {
                                                              let tmp108;
                                                              if (cResult[82] === tmp4.ditherClip) {
                                                                tmp108 = cResult[83];
                                                              }
                                                              if (cResult[84] === animatedStyle) {
                                                                if (cResult[85] === tmp21) {
                                                                  if (cResult[86] === tmp4.band) {
                                                                    let tmp110;
                                                                    if (cResult[87] === tmp4.fill) {
                                                                      tmp110 = cResult[88];
                                                                    }
                                                                    if (cResult[89] === tmp99) {
                                                                      if (cResult[90] === tmp105) {
                                                                        if (cResult[91] === tmp108) {
                                                                          let tmp112;
                                                                          if (cResult[92] === tmp110) {
                                                                            tmp112 = cResult[93];
                                                                          }
                                                                          return tmp112;
                                                                        }
                                                                      }
                                                                    }
                                                                    class Ee {
                                                                      constructor() {
                                                                        let first;
                                                                        let tmp11;
                                                                        let tmp12;
                                                                        let tmp7;
                                                                        const value = sharedValue.get();
                                                                        const value2 = sharedValue3.get();
                                                                        if (typeof pulseAt === "function") {
                                                                          let num3 = 1;
                                                                          let num4 = 1;
                                                                          if (1 < items.length) {
                                                                            [first, tmp7] = items[num3];
                                                                            while (value2 > first) {
                                                                              let sum = num3 + 1;
                                                                              num3 = sum;
                                                                              num4 = 1;
                                                                            }
                                                                            [tmp11, tmp12] = items[num3 - 1];
                                                                            const diff = first - tmp11;
                                                                            let num6 = 1;
                                                                            const diff1 = tmp7 - tmp12;
                                                                            _slicedToArray(items[num3 - 1], 2);
                                                                            if (diff > 0) {
                                                                              num6 = (value2 - tmp11) / diff;
                                                                            }
                                                                            num4 = tmp12 + diff1 * num6;
                                                                          }
                                                                          const result = value * num4;
                                                                          const obj = { transform: items };
                                                                          items = [
                                                                            { translateY: (c13 * (1 - result)) / 2 },
                                                                          ];
                                                                          const obj2 = {
                                                                            translateY: (c13 * (1 - result)) / 2,
                                                                          };
                                                                          const obj3 = { scaleY: result };
                                                                          items[1] = obj3;
                                                                          return obj;
                                                                        } else {
                                                                          throw new TypeError(
                                                                            "Trying to call a non-function",
                                                                          );
                                                                        }
                                                                      }
                                                                    }
                                                                    const obj11 = {
                                                                      style: tmp99,
                                                                      pointerEvents: "none",
                                                                      onLayout: tmp29,
                                                                      accessibilityElementsHidden: true,
                                                                      importantForAccessibility: "no-hide-descendants",
                                                                      children: items6,
                                                                    };
                                                                    items6 = [tmp105, tmp108, tmp110];
                                                                    const tmp114 = closure_11(sharedValue2, obj11);
                                                                    cResult[89] = tmp99;
                                                                    cResult[90] = tmp105;
                                                                    class Se {
                                                                      constructor() {
                                                                        const obj = {
                                                                          opacity: (1 - sharedValue2.get()) * num14,
                                                                          transform: items,
                                                                        };
                                                                        items = [
                                                                          { translateX: -sharedValue4.get() * first },
                                                                        ];
                                                                        ({ translateX: -sharedValue4.get() * first });
                                                                        return obj;
                                                                      }
                                                                    }
                                                                    cResult[92] = tmp110;
                                                                    cResult[93] = tmp114;
                                                                    tmp112 = tmp114;
                                                                  }
                                                                }
                                                              }
                                                              class Ee {
                                                                constructor() {
                                                                  let first;
                                                                  let tmp11;
                                                                  let tmp12;
                                                                  let tmp7;
                                                                  const value = sharedValue.get();
                                                                  const value2 = sharedValue3.get();
                                                                  if (typeof pulseAt === "function") {
                                                                    let num3 = 1;
                                                                    let num4 = 1;
                                                                    if (1 < items.length) {
                                                                      [first, tmp7] = items[num3];
                                                                      while (value2 > first) {
                                                                        let sum = num3 + 1;
                                                                        num3 = sum;
                                                                        num4 = 1;
                                                                      }
                                                                      [tmp11, tmp12] = items[num3 - 1];
                                                                      const diff = first - tmp11;
                                                                      let num6 = 1;
                                                                      const diff1 = tmp7 - tmp12;
                                                                      _slicedToArray(items[num3 - 1], 2);
                                                                      if (diff > 0) {
                                                                        num6 = (value2 - tmp11) / diff;
                                                                      }
                                                                      num4 = tmp12 + diff1 * num6;
                                                                    }
                                                                    const result = value * num4;
                                                                    const obj = { transform: items };
                                                                    items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                                                    const obj2 = {
                                                                      translateY: (c13 * (1 - result)) / 2,
                                                                    };
                                                                    const obj3 = { scaleY: result };
                                                                    items[1] = obj3;
                                                                    return obj;
                                                                  } else {
                                                                    throw new TypeError(
                                                                      "Trying to call a non-function",
                                                                    );
                                                                  }
                                                                }
                                                              }
                                                              cResult[84] = animatedStyle;
                                                              cResult[85] = tmp21;
                                                              cResult[86] = tmp4.band;
                                                              cResult[87] = tmp4.fill;
                                                              cResult[88] = null;
                                                              tmp110 = tmp111;
                                                            }
                                                          }
                                                        }
                                                      }
                                                      class Ee {
                                                        constructor() {
                                                          let first;
                                                          let tmp11;
                                                          let tmp12;
                                                          let tmp7;
                                                          const value = sharedValue.get();
                                                          const value2 = sharedValue3.get();
                                                          if (typeof pulseAt === "function") {
                                                            let num3 = 1;
                                                            let num4 = 1;
                                                            if (1 < items.length) {
                                                              [first, tmp7] = items[num3];
                                                              while (value2 > first) {
                                                                let sum = num3 + 1;
                                                                num3 = sum;
                                                                num4 = 1;
                                                              }
                                                              [tmp11, tmp12] = items[num3 - 1];
                                                              const diff = first - tmp11;
                                                              let num6 = 1;
                                                              const diff1 = tmp7 - tmp12;
                                                              _slicedToArray(items[num3 - 1], 2);
                                                              if (diff > 0) {
                                                                num6 = (value2 - tmp11) / diff;
                                                              }
                                                              num4 = tmp12 + diff1 * num6;
                                                            }
                                                            const result = value * num4;
                                                            const obj = { transform: items };
                                                            items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                                            const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                                            const obj3 = { scaleY: result };
                                                            items[1] = obj3;
                                                            return obj;
                                                          } else {
                                                            throw new TypeError("Trying to call a non-function");
                                                          }
                                                        }
                                                      }
                                                      cResult[78] = animatedStyle3;
                                                      cResult[79] = tmp94;
                                                      cResult[80] = tmp60;
                                                      cResult[81] = stateFromStores;
                                                      cResult[82] = tmp4.ditherClip;
                                                      cResult[83] = null;
                                                      tmp108 = tmp109;
                                                    }
                                                    class Ee {
                                                      constructor() {
                                                        let first;
                                                        let tmp11;
                                                        let tmp12;
                                                        let tmp7;
                                                        const value = sharedValue.get();
                                                        const value2 = sharedValue3.get();
                                                        if (typeof pulseAt === "function") {
                                                          let num3 = 1;
                                                          let num4 = 1;
                                                          if (1 < items.length) {
                                                            [first, tmp7] = items[num3];
                                                            while (value2 > first) {
                                                              let sum = num3 + 1;
                                                              num3 = sum;
                                                              num4 = 1;
                                                            }
                                                            [tmp11, tmp12] = items[num3 - 1];
                                                            const diff = first - tmp11;
                                                            let num6 = 1;
                                                            const diff1 = tmp7 - tmp12;
                                                            _slicedToArray(items[num3 - 1], 2);
                                                            if (diff > 0) {
                                                              num6 = (value2 - tmp11) / diff;
                                                            }
                                                            num4 = tmp12 + diff1 * num6;
                                                          }
                                                          const result = value * num4;
                                                          const obj = { transform: items };
                                                          items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                                          const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                                          const obj3 = { scaleY: result };
                                                          items[1] = obj3;
                                                          return obj;
                                                        } else {
                                                          throw new TypeError("Trying to call a non-function");
                                                        }
                                                      }
                                                    }
                                                    const obj12 = { style: tmp101, children: tmp102 };
                                                    const tmp107 = sharedValue4(stateFromStores(num14[14]).View, obj12);
                                                    cResult[75] = tmp101;
                                                    cResult[76] = tmp102;
                                                    cResult[77] = tmp107;
                                                    tmp105 = tmp107;
                                                  }
                                                  class Ee {
                                                    constructor() {
                                                      let first;
                                                      let tmp11;
                                                      let tmp12;
                                                      let tmp7;
                                                      const value = sharedValue.get();
                                                      const value2 = sharedValue3.get();
                                                      if (typeof pulseAt === "function") {
                                                        let num3 = 1;
                                                        let num4 = 1;
                                                        if (1 < items.length) {
                                                          [first, tmp7] = items[num3];
                                                          while (value2 > first) {
                                                            let sum = num3 + 1;
                                                            num3 = sum;
                                                            num4 = 1;
                                                          }
                                                          [tmp11, tmp12] = items[num3 - 1];
                                                          const diff = first - tmp11;
                                                          let num6 = 1;
                                                          const diff1 = tmp7 - tmp12;
                                                          _slicedToArray(items[num3 - 1], 2);
                                                          if (diff > 0) {
                                                            num6 = (value2 - tmp11) / diff;
                                                          }
                                                          num4 = tmp12 + diff1 * num6;
                                                        }
                                                        const result = value * num4;
                                                        const obj = { transform: items };
                                                        items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                                        const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                                        const obj3 = { scaleY: result };
                                                        items[1] = obj3;
                                                        return obj;
                                                      } else {
                                                        throw new TypeError("Trying to call a non-function");
                                                      }
                                                    }
                                                  }
                                                  cResult[72] = tmp60;
                                                  cResult[73] = tmp86;
                                                  cResult[74] = tmp104;
                                                  tmp102 = tmp104;
                                                }
                                                const items7 = [,];
                                                class Ee {
                                                  constructor() {
                                                    let first;
                                                    let tmp11;
                                                    let tmp12;
                                                    let tmp7;
                                                    const value = sharedValue.get();
                                                    const value2 = sharedValue3.get();
                                                    if (typeof pulseAt === "function") {
                                                      let num3 = 1;
                                                      let num4 = 1;
                                                      if (1 < items.length) {
                                                        [first, tmp7] = items[num3];
                                                        while (value2 > first) {
                                                          let sum = num3 + 1;
                                                          num3 = sum;
                                                          num4 = 1;
                                                        }
                                                        [tmp11, tmp12] = items[num3 - 1];
                                                        const diff = first - tmp11;
                                                        let num6 = 1;
                                                        const diff1 = tmp7 - tmp12;
                                                        _slicedToArray(items[num3 - 1], 2);
                                                        if (diff > 0) {
                                                          num6 = (value2 - tmp11) / diff;
                                                        }
                                                        num4 = tmp12 + diff1 * num6;
                                                      }
                                                      const result = value * num4;
                                                      const obj = { transform: items };
                                                      items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                                      const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                                      const obj3 = { scaleY: result };
                                                      items[1] = obj3;
                                                      return obj;
                                                    } else {
                                                      throw new TypeError("Trying to call a non-function");
                                                    }
                                                  }
                                                }
                                                items7[1] = animatedStyle;
                                                cResult[69] = animatedStyle;
                                                cResult[70] = tmp4.band;
                                                cResult[71] = items7;
                                                tmp101 = items7;
                                              }
                                              class Ee {
                                                constructor() {
                                                  let first;
                                                  let tmp11;
                                                  let tmp12;
                                                  let tmp7;
                                                  const value = sharedValue.get();
                                                  const value2 = sharedValue3.get();
                                                  if (typeof pulseAt === "function") {
                                                    let num3 = 1;
                                                    let num4 = 1;
                                                    if (1 < items.length) {
                                                      [first, tmp7] = items[num3];
                                                      while (value2 > first) {
                                                        let sum = num3 + 1;
                                                        num3 = sum;
                                                        num4 = 1;
                                                      }
                                                      [tmp11, tmp12] = items[num3 - 1];
                                                      const diff = first - tmp11;
                                                      let num6 = 1;
                                                      const diff1 = tmp7 - tmp12;
                                                      _slicedToArray(items[num3 - 1], 2);
                                                      if (diff > 0) {
                                                        num6 = (value2 - tmp11) / diff;
                                                      }
                                                      num4 = tmp12 + diff1 * num6;
                                                    }
                                                    const result = value * num4;
                                                    const obj = { transform: items };
                                                    items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                                    const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                                    const obj3 = { scaleY: result };
                                                    items[1] = obj3;
                                                    return obj;
                                                  } else {
                                                    throw new TypeError("Trying to call a non-function");
                                                  }
                                                }
                                              }
                                              tmp100[0] = tmp4.root;
                                              tmp100[1] = tmp97;
                                              cResult[66] = tmp4.root;
                                              cResult[67] = tmp97;
                                              cResult[68] = tmp100;
                                              tmp99 = tmp100;
                                            }
                                            class Ee {
                                              constructor() {
                                                let first;
                                                let tmp11;
                                                let tmp12;
                                                let tmp7;
                                                const value = sharedValue.get();
                                                const value2 = sharedValue3.get();
                                                if (typeof pulseAt === "function") {
                                                  let num3 = 1;
                                                  let num4 = 1;
                                                  if (1 < items.length) {
                                                    [first, tmp7] = items[num3];
                                                    while (value2 > first) {
                                                      let sum = num3 + 1;
                                                      num3 = sum;
                                                      num4 = 1;
                                                    }
                                                    [tmp11, tmp12] = items[num3 - 1];
                                                    const diff = first - tmp11;
                                                    let num6 = 1;
                                                    const diff1 = tmp7 - tmp12;
                                                    _slicedToArray(items[num3 - 1], 2);
                                                    if (diff > 0) {
                                                      num6 = (value2 - tmp11) / diff;
                                                    }
                                                    num4 = tmp12 + diff1 * num6;
                                                  }
                                                  const result = value * num4;
                                                  const obj = { transform: items };
                                                  items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                                  const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                                  const obj3 = { scaleY: result };
                                                  items[1] = obj3;
                                                  return obj;
                                                } else {
                                                  throw new TypeError("Trying to call a non-function");
                                                }
                                              }
                                            }
                                            const obj13 = { style: tmp4.ditherField, children: tmp90 };
                                            const tmp96 = sharedValue4(sharedValue2, obj13);
                                            cResult[61] = tmp4.ditherField;
                                            cResult[62] = tmp90;
                                            cResult[63] = tmp96;
                                            tmp94 = tmp96;
                                          }
                                        }
                                      }
                                      size = { width, height: v500, thinking, fill: tmp89, fillOpacity: 0.16 };
                                      const tmp93 = sharedValue4(stateFromStores(num14[17]), size);
                                      cResult[56] = tmp89;
                                      cResult[57] = 0.16;
                                      class Se {
                                        constructor() {
                                          const obj = { opacity: (1 - sharedValue2.get()) * num14, transform: items };
                                          items = [{ translateX: -sharedValue4.get() * first }];
                                          ({ translateX: -sharedValue4.get() * first });
                                          return obj;
                                        }
                                      }
                                      cResult[58] = thinking;
                                      cResult[59] = width;
                                      cResult[60] = tmp93;
                                      tmp90 = tmp93;
                                    }
                                    class Ee {
                                      constructor() {
                                        let first;
                                        let tmp11;
                                        let tmp12;
                                        let tmp7;
                                        const value = sharedValue.get();
                                        const value2 = sharedValue3.get();
                                        if (typeof pulseAt === "function") {
                                          let num3 = 1;
                                          let num4 = 1;
                                          if (1 < items.length) {
                                            [first, tmp7] = items[num3];
                                            while (value2 > first) {
                                              let sum = num3 + 1;
                                              num3 = sum;
                                              num4 = 1;
                                            }
                                            [tmp11, tmp12] = items[num3 - 1];
                                            const diff = first - tmp11;
                                            let num6 = 1;
                                            const diff1 = tmp7 - tmp12;
                                            _slicedToArray(items[num3 - 1], 2);
                                            if (diff > 0) {
                                              num6 = (value2 - tmp11) / diff;
                                            }
                                            num4 = tmp12 + diff1 * num6;
                                          }
                                          const result = value * num4;
                                          const obj = { transform: items };
                                          items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                          const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                          const obj3 = { scaleY: result };
                                          items[1] = obj3;
                                          return obj;
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      }
                                    }
                                    const obj14 = { children: items8 };
                                    items8 = [tmp74, tmp83];
                                    const tmp88 = closure_11(sharedValue5, obj14);
                                    cResult[53] = tmp74;
                                    cResult[54] = tmp83;
                                    cResult[55] = tmp88;
                                    tmp86 = tmp88;
                                  }
                                  class Ee {
                                    constructor() {
                                      let first;
                                      let tmp11;
                                      let tmp12;
                                      let tmp7;
                                      const value = sharedValue.get();
                                      const value2 = sharedValue3.get();
                                      if (typeof pulseAt === "function") {
                                        let num3 = 1;
                                        let num4 = 1;
                                        if (1 < items.length) {
                                          [first, tmp7] = items[num3];
                                          while (value2 > first) {
                                            let sum = num3 + 1;
                                            num3 = sum;
                                            num4 = 1;
                                          }
                                          [tmp11, tmp12] = items[num3 - 1];
                                          const diff = first - tmp11;
                                          let num6 = 1;
                                          const diff1 = tmp7 - tmp12;
                                          _slicedToArray(items[num3 - 1], 2);
                                          if (diff > 0) {
                                            num6 = (value2 - tmp11) / diff;
                                          }
                                          num4 = tmp12 + diff1 * num6;
                                        }
                                        const result = value * num4;
                                        const obj = { transform: items };
                                        items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                        const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                        const obj3 = { scaleY: result };
                                        items[1] = obj3;
                                        return obj;
                                      } else {
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    }
                                  }
                                  const obj15 = { style: tmp77, children: tmp78 };
                                  const tmp85 = sharedValue4(stateFromStores(num14[14]).View, obj15);
                                  cResult[50] = tmp77;
                                  cResult[51] = tmp78;
                                  cResult[52] = tmp85;
                                  tmp83 = tmp85;
                                }
                                class Ee {
                                  constructor() {
                                    let first;
                                    let tmp11;
                                    let tmp12;
                                    let tmp7;
                                    const value = sharedValue.get();
                                    const value2 = sharedValue3.get();
                                    if (typeof pulseAt === "function") {
                                      let num3 = 1;
                                      let num4 = 1;
                                      if (1 < items.length) {
                                        [first, tmp7] = items[num3];
                                        while (value2 > first) {
                                          let sum = num3 + 1;
                                          num3 = sum;
                                          num4 = 1;
                                        }
                                        [tmp11, tmp12] = items[num3 - 1];
                                        const diff = first - tmp11;
                                        let num6 = 1;
                                        const diff1 = tmp7 - tmp12;
                                        _slicedToArray(items[num3 - 1], 2);
                                        if (diff > 0) {
                                          num6 = (value2 - tmp11) / diff;
                                        }
                                        num4 = tmp12 + diff1 * num6;
                                      }
                                      const result = value * num4;
                                      const obj = { transform: items };
                                      items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                      const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                      const obj3 = { scaleY: result };
                                      items[1] = obj3;
                                      return obj;
                                    } else {
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  }
                                }
                                const obj16 = { style: tmp4.fill, colors: tmp22.chroma, start: start2, end: end2 };
                                cResult[47] = tmp22.chroma;
                                cResult[48] = tmp4.fill;
                                cResult[49] = sharedValue4(stateFromStores(num14[16]), obj16);
                                sharedValue4(stateFromStores(num14[16]), obj16);
                                class Se {
                                  constructor() {
                                    const obj = { opacity: (1 - sharedValue2.get()) * num14, transform: items };
                                    items = [{ translateX: -sharedValue4.get() * first }];
                                    ({ translateX: -sharedValue4.get() * first });
                                    return obj;
                                  }
                                }
                              }
                              const items9 = [,];
                              class Ee {
                                constructor() {
                                  let first;
                                  let tmp11;
                                  let tmp12;
                                  let tmp7;
                                  const value = sharedValue.get();
                                  const value2 = sharedValue3.get();
                                  if (typeof pulseAt === "function") {
                                    let num3 = 1;
                                    let num4 = 1;
                                    if (1 < items.length) {
                                      [first, tmp7] = items[num3];
                                      while (value2 > first) {
                                        let sum = num3 + 1;
                                        num3 = sum;
                                        num4 = 1;
                                      }
                                      [tmp11, tmp12] = items[num3 - 1];
                                      const diff = first - tmp11;
                                      let num6 = 1;
                                      const diff1 = tmp7 - tmp12;
                                      _slicedToArray(items[num3 - 1], 2);
                                      if (diff > 0) {
                                        num6 = (value2 - tmp11) / diff;
                                      }
                                      num4 = tmp12 + diff1 * num6;
                                    }
                                    const result = value * num4;
                                    const obj = { transform: items };
                                    items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                    const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                    const obj3 = { scaleY: result };
                                    items[1] = obj3;
                                    return obj;
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                              }
                              items9[1] = animatedStyle2;
                              cResult[44] = animatedStyle2;
                              cResult[45] = tmp4.sweep;
                              cResult[46] = items9;
                              tmp77 = items9;
                            }
                            class Ee {
                              constructor() {
                                let first;
                                let tmp11;
                                let tmp12;
                                let tmp7;
                                const value = sharedValue.get();
                                const value2 = sharedValue3.get();
                                if (typeof pulseAt === "function") {
                                  let num3 = 1;
                                  let num4 = 1;
                                  if (1 < items.length) {
                                    [first, tmp7] = items[num3];
                                    while (value2 > first) {
                                      let sum = num3 + 1;
                                      num3 = sum;
                                      num4 = 1;
                                    }
                                    [tmp11, tmp12] = items[num3 - 1];
                                    const diff = first - tmp11;
                                    let num6 = 1;
                                    const diff1 = tmp7 - tmp12;
                                    _slicedToArray(items[num3 - 1], 2);
                                    if (diff > 0) {
                                      num6 = (value2 - tmp11) / diff;
                                    }
                                    num4 = tmp12 + diff1 * num6;
                                  }
                                  const result = value * num4;
                                  const obj = { transform: items };
                                  items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                  const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                  const obj3 = { scaleY: result };
                                  items[1] = obj3;
                                  return obj;
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              }
                            }
                            const obj17 = { style: tmp68, children: tmp69 };
                            const tmp76 = sharedValue4(stateFromStores(num14[14]).View, obj17);
                            cResult[41] = tmp68;
                            cResult[42] = tmp69;
                            cResult[43] = tmp76;
                            tmp74 = tmp76;
                          }
                          class Ee {
                            constructor() {
                              let first;
                              let tmp11;
                              let tmp12;
                              let tmp7;
                              const value = sharedValue.get();
                              const value2 = sharedValue3.get();
                              if (typeof pulseAt === "function") {
                                let num3 = 1;
                                let num4 = 1;
                                if (1 < items.length) {
                                  [first, tmp7] = items[num3];
                                  while (value2 > first) {
                                    let sum = num3 + 1;
                                    num3 = sum;
                                    num4 = 1;
                                  }
                                  [tmp11, tmp12] = items[num3 - 1];
                                  const diff = first - tmp11;
                                  let num6 = 1;
                                  const diff1 = tmp7 - tmp12;
                                  _slicedToArray(items[num3 - 1], 2);
                                  if (diff > 0) {
                                    num6 = (value2 - tmp11) / diff;
                                  }
                                  num4 = tmp12 + diff1 * num6;
                                }
                                const result = value * num4;
                                const obj = { transform: items };
                                items = [{ translateY: (c13 * (1 - result)) / 2 }];
                                const obj2 = { translateY: (c13 * (1 - result)) / 2 };
                                const obj3 = { scaleY: result };
                                items[1] = obj3;
                                return obj;
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                          }
                          const obj18 = { style: tmp4.fill, colors: tmp22.base, start: start2, end: end2 };
                          cResult[38] = tmp22.base;
                          cResult[39] = tmp4.fill;
                          cResult[40] = sharedValue4(stateFromStores(num14[16]), obj18);
                          sharedValue4(stateFromStores(num14[16]), obj18);
                          class Se {
                            constructor() {
                              const obj = { opacity: (1 - sharedValue2.get()) * num14, transform: items };
                              items = [{ translateX: -sharedValue4.get() * first }];
                              ({ translateX: -sharedValue4.get() * first });
                              return obj;
                            }
                          }
                        }
                        const items10 = [tmp4.sweep, animatedStyle1];
                        cResult[35] = animatedStyle1;
                        cResult[36] = tmp4.sweep;
                        cResult[37] = items10;
                        tmp68 = items10;
                      }
                    }
                    class Y {
                      constructor() {
                        return sharedValue3.theme;
                      }
                    }
                    const items11 = [sharedValue3, stateFromStores, thinking];
                    cResult[28] = sharedValue3;
                    cResult[29] = stateFromStores;
                    cResult[30] = thinking;
                    cResult[31] = tmp47;
                    cResult[32] = items11;
                    tmp45 = tmp47;
                  }
                }
                class Y {
                  constructor() {
                    return sharedValue3.theme;
                  }
                }
                const items12 = [sharedValue4, sharedValue5, stateFromStores];
                cResult[23] = sharedValue4;
                cResult[24] = sharedValue5;
                cResult[25] = stateFromStores;
                cResult[26] = tmp43;
                cResult[27] = items12;
                tmp41 = tmp43;
              }
            }
          }
          function oe() {
            const Easing = ReanimatedRexport.Easing;
            const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
            let num = 1;
            set = sharedValue.set;
            const withTiming = timing.withTiming;
            timing;
            if (!thinking) {
              num = c14;
            }
            const obj = { duration, easing: bezierResult };
            const result = set(withTiming(num, obj, "animate-always"));
            let num2 = 0;
            set2 = sharedValue2.set;
            const withTiming2 = timing.withTiming;
            timing;
            if (thinking) {
              num2 = 1;
            }
            set2(withTiming2(num2, { duration, easing: bezierResult }, "animate-always"));
            set3 = sharedValue1.set;
            const tmpResult2 = timing;
            set3(
              tmpResult2.withTiming(thinking ? c13 : c15, { duration: 400, easing: bezierResult }, "animate-always"),
            );
          }
          const items13 = [sharedValue2, sharedValue1, sharedValue, thinking];
          cResult[17] = sharedValue2;
          cResult[18] = sharedValue1;
          cResult[19] = sharedValue;
          cResult[20] = thinking;
          cResult[21] = oe;
          cResult[22] = items13;
          tmp39 = items13;
          tmp38 = oe;
        }
      }
      const items14 = [tmp15, tmp16, tmp17];
      cResult[10] = tmp15;
      cResult[11] = tmp16;
      cResult[12] = tmp17;
      cResult[13] = items14;
      tmp21 = items14;
    }
  : (thinking) => {
      let c3;
      let closure_6;
      let duration;
      let items11;
      let items12;
      let items13;
      let items14;
      let items7;
      let items8;
      let items9;
      let num5;
      let obj10;
      let obj12;
      let obj22;
      let tmp28Result5;
      let tmp28Result6;
      let tmp37;
      let tmp40;
      let width;
      thinking = thinking.thinking;
      let num = thinking.bleedBottom;
      if (num === undefined) {
        num = 0;
      }
      let stateFromStores1;
      let num2;
      width = undefined;
      closure_6 = undefined;
      let sharedValue;
      let sharedValue2;
      let sharedValue1;
      let sharedValue3;
      let sharedValue4;
      let sharedValue5;
      let tmp = closure_27();
      let obj = thinking(stateFromStores1[12]);
      items = [sharedValue];
      const stateFromStores = obj.useStateFromStores(items, () => sharedValue.useReducedMotion);
      let obj2 = thinking(stateFromStores1[12]);
      let items1 = [sharedValue2];
      stateFromStores1 = obj2.useStateFromStores(items1, () => sharedValue2.theme);
      let obj3 = thinking(stateFromStores1[13]);
      const isThemeDarkResult = obj3.isThemeDark(stateFromStores1);
      _slicedToArray = isThemeDarkResult;
      let obj4 = num2;
      let items2 = [stateFromStores1];
      let items3 = [isThemeDarkResult];
      const memo = num2.useMemo(() => {
        const internal = nativeDefault.internal;
        const semanticColor = internal.resolveSemanticColor(stateFromStores1, nativeDefault.colors.BACKGROUND_BASE_LOW);
        items = [semanticColor, semanticColor];
        const obj = _modDef683(semanticColor);
        const alphaResult = obj.alpha(0);
        items[2] = alphaResult.css();
        return items;
      }, items2);
      const memo1 = num2.useMemo(() => {
        let BG_GRADIENT_CHROMA_GLOW_1;
        let BG_GRADIENT_CHROMA_GLOW_2;
        let BG_GRADIENT_MIDNIGHT_BLURPLE_1;
        let ILLO_PURPLE_30;
        let ILLO_PURPLE_40;
        let items1;
        let items2;
        let items3;
        let obj2;
        const unsafe_rawColors = nativeDefault.unsafe_rawColors;
        if (c3) {
          ({ BG_GRADIENT_MIDNIGHT_BLURPLE_1, BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2 } = unsafe_rawColors);
          const obj = { base: items, chroma: items1 };
          items = [
            BG_GRADIENT_MIDNIGHT_BLURPLE_1,
            unsafe_rawColors.BG_GRADIENT_MIDNIGHT_BLURPLE_2,
            BG_GRADIENT_MIDNIGHT_BLURPLE_1,
          ];
          items1 = [
            BG_GRADIENT_CHROMA_GLOW_1,
            BG_GRADIENT_CHROMA_GLOW_2,
            unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_3,
            BG_GRADIENT_CHROMA_GLOW_2,
            BG_GRADIENT_CHROMA_GLOW_1,
          ];
          obj2 = obj;
        } else {
          ({ ILLO_PURPLE_30, ILLO_PURPLE_40 } = unsafe_rawColors);
          const tmpResult = _modDef683;
          const hslResult = tmpResult.hsl(184, 0.8, 0.6);
          const hexResult = hslResult.hex();
          const ILLO_PURPLE_402 = unsafe_rawColors.ILLO_PURPLE_40;
          obj2 = { base: items2, chroma: items3 };
          items2 = [ILLO_PURPLE_30, ILLO_PURPLE_40, ILLO_PURPLE_30];
          items3 = [hexResult, ILLO_PURPLE_402, unsafe_rawColors.ILLO_PINK_40, ILLO_PURPLE_402, hexResult];
        }
        return obj2;
      }, items3);
      num2 = 0.2;
      if (isThemeDarkResult) {
        num2 = 0.3;
      }
      [width, closure_6] = obj4.useState(0);
      const callback = obj4.useCallback((nativeEvent) => {
        let closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
        let tmp = closure_6((arg0) => {
          let tmp = closure_0;
          if (arg0 === closure_0) {
            tmp = arg0;
          }
          return tmp;
        });
      }, []);
      let num3 = 1;
      const useSharedValue = thinking(tmp3[14]).useSharedValue;
      thinking(stateFromStores1[14]);
      if (!thinking) {
        num3 = c14;
      }
      sharedValue = useSharedValue(num3);
      let num4 = 0;
      const useSharedValue2 = thinking(tmp3[14]).useSharedValue;
      thinking(stateFromStores1[14]);
      if (thinking) {
        num4 = 1;
      }
      sharedValue2 = useSharedValue2(num4);
      const tmp2Result11 = thinking(stateFromStores1[14]);
      sharedValue1 = tmp2Result11.useSharedValue(thinking ? v500 : c15);
      const tmp2Result12 = thinking(stateFromStores1[14]);
      sharedValue3 = tmp2Result12.useSharedValue(0);
      const tmp2Result13 = thinking(stateFromStores1[14]);
      sharedValue4 = tmp2Result13.useSharedValue(0);
      const tmp2Result14 = thinking(stateFromStores1[14]);
      sharedValue5 = tmp2Result14.useSharedValue(0);
      const items4 = [sharedValue2, sharedValue1, sharedValue, thinking];
      const effect = obj4.useEffect(() => {
        const Easing = ReanimatedRexport.Easing;
        const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
        let num = 1;
        set = sharedValue.set;
        const withTiming = timing.withTiming;
        timing;
        if (!thinking) {
          num = c14;
        }
        const obj = { duration, easing: bezierResult };
        const result = set(withTiming(num, obj, "animate-always"));
        num2 = 0;
        set2 = sharedValue2.set;
        const withTiming2 = timing.withTiming;
        timing;
        if (thinking) {
          num2 = 1;
        }
        set2(withTiming2(num2, { duration, easing: bezierResult }, "animate-always"));
        set3 = sharedValue1.set;
        const tmpResult2 = timing;
        set3(tmpResult2.withTiming(thinking ? c13 : c15, { duration: 400, easing: bezierResult }, "animate-always"));
      }, items4);
      const items5 = [sharedValue4, sharedValue5, stateFromStores];
      const effect1 = obj4.useEffect(() => {
        let Easing;
        let Easing2;
        let fn;
        if (stateFromStores) {
          const obj3 = ReanimatedRexport;
          obj3.cancelAnimation(sharedValue4);
          const obj4 = ReanimatedRexport;
          obj4.cancelAnimation(sharedValue5);
          const result = sharedValue4.set(0);
          const result1 = sharedValue5.set(0);
        } else {
          set = sharedValue4.set;
          const withRepeat = ReanimatedRexport.withRepeat;
          ReanimatedRexport;
          let obj = { duration: 24000, easing: Easing.inOut(ReanimatedRexport.Easing.ease) };
          const withTiming = timing.withTiming;
          timing;
          Easing = ReanimatedRexport.Easing;
          const result2 = set(withRepeat(withTiming(1, obj), -1, true));
          set2 = sharedValue5.set;
          const withRepeat2 = ReanimatedRexport.withRepeat;
          ReanimatedRexport;
          let obj2 = { duration: 12000, easing: Easing2.inOut(ReanimatedRexport.Easing.ease) };
          const withTiming2 = timing.withTiming;
          timing;
          Easing2 = ReanimatedRexport.Easing;
          set2(withRepeat2(withTiming2(1, obj2), -1, true));
          fn = () => {
            const obj = thinking(stateFromStores1[14]);
            obj.cancelAnimation(sharedValue4);
            const obj2 = thinking(stateFromStores1[14]);
            obj2.cancelAnimation(sharedValue5);
          };
        }
        return fn;
      }, items5);
      const items6 = [sharedValue3, stateFromStores, thinking];
      const effect2 = obj4.useEffect(() => {
        if (!stateFromStores) {
          let fn;
          if (thinking) {
            const result = sharedValue3.set(0);
            set = sharedValue3.set;
            const withRepeat = ReanimatedRexport.withRepeat;
            ReanimatedRexport;
            let obj = { duration: 5500, easing: ReanimatedRexport.Easing.ease };
            const withTiming = timing.withTiming;
            timing;
            const result1 = set(withRepeat(withTiming(1, obj), -1, false));
            fn = () => {
              const obj = thinking(stateFromStores1[14]);
              return obj.cancelAnimation(sharedValue3);
            };
          }
          return fn;
        }
        const obj2 = ReanimatedRexport;
        obj2.cancelAnimation(sharedValue3);
        set2 = sharedValue3.set;
        const obj3 = timing;
        const obj4 = { duration };
        set2(obj3.withTiming(0, obj4));
      }, items6);
      function ee() {
        let first;
        let tmp11;
        let tmp12;
        let tmp7;
        const value = sharedValue.get();
        const value2 = sharedValue3.get();
        if (typeof pulseAt === "function") {
          let num3 = 1;
          let num4 = 1;
          if (1 < items.length) {
            [first, tmp7] = items[num3];
            while (value2 > first) {
              let sum = num3 + 1;
              num3 = sum;
              num4 = 1;
            }
            [tmp11, tmp12] = items[num3 - 1];
            const diff = first - tmp11;
            let num6 = 1;
            const diff1 = tmp7 - tmp12;
            _slicedToArray(items[num3 - 1], 2);
            if (diff > 0) {
              num6 = (value2 - tmp11) / diff;
            }
            num4 = tmp12 + diff1 * num6;
          }
          const result = value * num4;
          const obj = { transform: items };
          items = [{ translateY: (c13 * (1 - result)) / 2 }];
          const obj2 = { translateY: (c13 * (1 - result)) / 2 };
          const obj3 = { scaleY: result };
          items[1] = obj3;
          return obj;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const obj5 = { lift: sharedValue, pulseAt, pulse: sharedValue3, BAND_HEIGHT: v500 };
      ee.__closure = obj5;
      ee.__workletHash = 9452161703379;
      ee.__initData = __initData5;
      const tmp2Result15 = thinking(stateFromStores1[14]);
      const animatedStyle = tmp2Result15.useAnimatedStyle(ee);
      function te() {
        const obj = { opacity: (1 - sharedValue2.get()) * num2, transform: items };
        items = [{ translateX: -sharedValue4.get() * first }];
        ({ translateX: -sharedValue4.get() * first });
        return obj;
      }
      te.__closure = { chromaMix: sharedValue2, layerAlpha: num2, driftBase: sharedValue4, width };
      te.__workletHash = 16448825517927;
      te.__initData = __initData6;
      const tmp2Result16 = thinking(stateFromStores1[14]);
      const animatedStyle1 = tmp2Result16.useAnimatedStyle(te);
      function ie() {
        const obj = { opacity: sharedValue2.get() * num2, transform: items };
        items = [{ translateX: -sharedValue5.get() * first }];
        ({ translateX: -sharedValue5.get() * first });
        return obj;
      }
      ie.__closure = { chromaMix: sharedValue2, layerAlpha: num2, driftChroma: sharedValue5, width };
      ie.__workletHash = 17460334938933;
      ie.__initData = __initData7;
      const tmp2Result17 = thinking(stateFromStores1[14]);
      const animatedStyle2 = tmp2Result17.useAnimatedStyle(ie);
      function ae() {
        let first;
        let height;
        let tmp14;
        let tmp18;
        let tmp19;
        if (ANDROID) {
          const result = c13 * sharedValue.get();
          const value = sharedValue3.get();
          if (typeof pulseAt === "function") {
            let num = 1;
            let num3 = 1;
            let num4 = 1;
            if (1 < items.length) {
              [first, tmp14] = items[num3];
              while (value > first) {
                let sum = num3 + num;
                num3 = sum;
                num4 = num;
              }
              [tmp18, tmp19] = items[num3 - num];
              const diff = first - tmp18;
              const diff1 = tmp14 - tmp19;
              _slicedToArray(items[num3 - num], 2);
              if (diff > 0) {
                num = (value - tmp18) / diff;
              }
              num4 = tmp19 + diff1 * num;
            }
            height = result * num4;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          height = sharedValue1.get();
        }
        return { height };
      }
      const obj6 = {
        ANDROID: sharedValue5,
        BAND_HEIGHT: v500,
        lift: sharedValue,
        pulseAt,
        pulse: sharedValue3,
        ditherHeight: sharedValue1,
      };
      ae.__closure = obj6;
      ae.__workletHash = 14002841141788;
      ae.__initData = __initData8;
      const tmp2Result18 = thinking(stateFromStores1[14]);
      const animatedStyle3 = tmp2Result18.useAnimatedStyle(ae);
      const obj7 = { style: tmp.fill, colors, locations, start, end };
      const tmp33 = sharedValue1(stateFromStores(stateFromStores1[16]), obj7);
      const obj8 = { children: items8 };
      const obj9 = { style: items7, children: sharedValue1(stateFromStores(stateFromStores1[16]), obj10) };
      items7 = [tmp.sweep, animatedStyle1];
      const View = stateFromStores(tmp3[14]).View;
      obj10 = { style: tmp.fill, colors: memo1.base, start: start2, end: end2 };
      items8 = [sharedValue1(View, obj9)];
      const obj11 = { style: items9, children: sharedValue1(stateFromStores(stateFromStores1[16]), obj12) };
      items9 = [tmp.sweep, animatedStyle2];
      const View2 = stateFromStores(tmp3[14]).View;
      obj12 = { style: tmp.fill, colors: memo1.chroma, start: start2, end: end2 };
      items8[1] = sharedValue1(View2, obj11);
      const tmp35 = sharedValue4(sharedValue3, obj8);
      const obj13 = { style: tmp.ditherField, children: sharedValue1(tmp37, size) };
      size = { width, height: v500, thinking, fill: isThemeDarkResult ? c17 : c18, fillOpacity: num5 };
      num5 = 0.16;
      const tmp34 = sharedValue4;
      tmp37 = stateFromStores(stateFromStores1[17]);
      if (isThemeDarkResult) {
        num5 = 0.18;
      }
      const tmp28Result = sharedValue1(closure_6, obj13);
      const items10 = [tmp.root];
      let tmp39 = num > 0;
      if (tmp39) {
        tmp39 = { bottom: -num };
        const obj14 = { bottom: -num };
      }
      const obj15 = {
        style: items10,
        pointerEvents: "none",
        onLayout: callback,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: items12,
      };
      items10[1] = tmp39;
      const obj16 = { style: items11, children: tmp28Result5 };
      items11 = [tmp.band, animatedStyle];
      const View3 = tmp29(tmp3[14]).View;
      if (sharedValue5) {
        const obj17 = { style: width.absoluteFill, children: tmp35 };
        tmp28Result5 = tmp28(tmp36, obj17);
        tmp40 = width;
      } else {
        tmp40 = width;
        const obj18 = { style: width.absoluteFill, maskElement: tmp33, children: tmp35 };
        tmp28Result5 = tmp28(tmp29(tmp3[18]), obj18);
      }
      items12 = [sharedValue1(View3, obj16), ,];
      let tmp28Result7 = null;
      if (!stateFromStores) {
        const obj19 = { style: items13, children: tmp28Result6 };
        items13 = [tmp.ditherClip, animatedStyle3];
        tmp28Result6 = tmp28Result;
        const View4 = tmp29(tmp3[14]).View;
        if (!sharedValue5) {
          const obj20 = { style: tmp40.absoluteFill, maskElement: tmp33, children: tmp28Result };
          tmp28Result6 = tmp28(tmp29(tmp3[18]), obj20);
        }
        tmp28Result7 = tmp28(View4, obj19);
      }
      items12[1] = tmp28Result7;
      let tmp28Result8 = null;
      if (sharedValue5) {
        const obj21 = { style: items14, children: sharedValue1(stateFromStores(stateFromStores1[16]), obj22) };
        items14 = [tmp.band, animatedStyle];
        const View5 = tmp29(tmp3[14]).View;
        obj22 = { style: tmp.fill, colors: memo, locations, start, end };
        tmp28Result8 = tmp28(View5, obj21);
      }
      items12[2] = tmp28Result8;
      return tmp34(closure_6, obj15);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/glow/native/ConjureShellGlow.tsx");

export default tmp4;
