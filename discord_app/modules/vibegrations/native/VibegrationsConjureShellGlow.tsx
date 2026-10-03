// === Module 16722: VibegrationsConjureShellGlow ===

// Module 16722 (VibegrationsConjureShellGlow)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ThemeStore from "ThemeStore" /* 1193 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const PlatformUtils = fn(1369);
const ANDROID = PlatformUtils.isAndroid();
let c13 = 500;
let c14 = 0.504;
let c15 = 204;
let c16 = 700;
let c17 = "rgb(225, 240, 255)";
let c18 = "rgb(120, 60, 200)";
let items = [[0, 1], [0.09, 0.95], [0.17, 0.98], [0.29, 0.86], [0.37, 0.94], [0.48, 1], [0.56, 0.92], [0.64, 0.96], [0.76, 0.89], [0.84, 0.99], [1, 1]];
function pulseAt(arg0) {
  let num = 1;
  let num2 = 1;
  if (1 < items.length) {
    const tmp2 = _slicedToArray(items[num2], 2);
    const first = tmp2[0];
    while (arg0 > first) {
      num2 = num2 + num;
    }
    [tmp6, tmp7] = items[num2 - num];
    const diff = first - tmp6;
    const diff1 = tmp2[1] - tmp7;
    if (diff > 0) {
      num = (arg0 - tmp6) / diff;
    }
    return tmp7 + diff1 * num;
  }
  return num;
}
pulseAt.__closure = { PULSE_KEYFRAMES: items };
pulseAt.__workletHash = 13066223944096;
pulseAt.__initData = { code: "function pulseAt_VibegrationsConjureShellGlowTsx1(progress){const{PULSE_KEYFRAMES}=this.__closure;for(let i=1;i<PULSE_KEYFRAMES.length;i++){const[t1,v1]=PULSE_KEYFRAMES[i];if(progress<=t1){const[t0,v0]=PULSE_KEYFRAMES[i-1];const span=t1-t0;const local=span>0?(progress-t0)/span:1;return v0+(v1-v0)*local;}}return 1;}" };
const colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,1)"];
const locations = [0, 0.45, 1];
const start = { x: 0.5, y: 0 };
const end = { x: 0.5, y: 1 };
const start2 = { x: 0, y: 0.5 };
const end2 = { x: 1, y: 0.5 };
const createStyles = fn(4890);
let closure_27 = createStyles.createStyles({ root: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", zIndex: 0 }, band: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 }, sweep: { position: "absolute", top: 0, bottom: 0, left: 0, width: "200%" }, fill: { flex: 1 }, ditherClip: { position: "absolute", left: 0, right: 0, bottom: 0, overflow: "hidden" }, ditherField: { position: "absolute", left: 0, right: 0, bottom: 0, height: 500 } });
const __initData = { code: "function VibegrationsConjureShellGlowTsx2(){const{lift,pulseAt,pulse,BAND_HEIGHT}=this.__closure;const scale=lift.get()*pulseAt(pulse.get());return{transform:[{translateY:BAND_HEIGHT*(1-scale)/2},{scaleY:scale}]};}" };
const __initData2 = { code: "function VibegrationsConjureShellGlowTsx3(){const{chromaMix,layerAlpha,driftBase,width}=this.__closure;return{opacity:(1-chromaMix.get())*layerAlpha,transform:[{translateX:-driftBase.get()*width}]};}" };
const __initData3 = { code: "function VibegrationsConjureShellGlowTsx4(){const{chromaMix,layerAlpha,driftChroma,width}=this.__closure;return{opacity:chromaMix.get()*layerAlpha,transform:[{translateX:-driftChroma.get()*width}]};}" };
const __initData4 = { code: "function VibegrationsConjureShellGlowTsx5(){const{ANDROID,BAND_HEIGHT,lift,pulseAt,pulse,ditherHeight}=this.__closure;return{height:ANDROID?BAND_HEIGHT*lift.get()*pulseAt(pulse.get()):ditherHeight.get()};}" };
const __initData5 = { code: "function VibegrationsConjureShellGlowTsx6(){const{lift,pulseAt,pulse,BAND_HEIGHT}=this.__closure;const scale=lift.get()*pulseAt(pulse.get());return{transform:[{translateY:BAND_HEIGHT*(1-scale)/2},{scaleY:scale}]};}" };
const __initData6 = { code: "function VibegrationsConjureShellGlowTsx7(){const{chromaMix,layerAlpha,driftBase,width}=this.__closure;return{opacity:(1-chromaMix.get())*layerAlpha,transform:[{translateX:-driftBase.get()*width}]};}" };
const __initData7 = { code: "function VibegrationsConjureShellGlowTsx8(){const{chromaMix,layerAlpha,driftChroma,width}=this.__closure;return{opacity:chromaMix.get()*layerAlpha,transform:[{translateX:-driftChroma.get()*width}]};}" };
const __initData8 = { code: "function VibegrationsConjureShellGlowTsx9(){const{ANDROID,BAND_HEIGHT,lift,pulseAt,pulse,ditherHeight}=this.__closure;return{height:ANDROID?BAND_HEIGHT*lift.get()*pulseAt(pulse.get()):ditherHeight.get()};}" };
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsConjureShellGlow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((thinking) => {
  const cResult = thinking(576).c(94);
  thinking = thinking.thinking;
  const bleedBottom = thinking.bleedBottom;
  let num = 0;
  if (undefined !== bleedBottom) {
    num = bleedBottom;
  }
  const tmp4 = closure_27();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [sharedValue2];
    let fn = function v() {
      return sharedValue2.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = thinking(576);
  const stateFromStores = thinking(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [sharedValue3];
    class Y {
      constructor() {
        return closure_8.theme;
      }
    }
    cResult[2] = items1;
    cResult[3] = Y;
    let tmp10 = Y;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  let tmpResult = thinking(504);
  const stateFromStores1 = thinking(504).useStateFromStores(tmp9, tmp10);
  if (cResult[4] !== stateFromStores1) {
    const isThemeDarkResult = tmp(4730).isThemeDark(stateFromStores1);
    class Y {
      constructor() {
        return closure_8.theme;
      }
    }
    cResult[5] = isThemeDarkResult;
    let tmp13 = isThemeDarkResult;
    const tmpResult14 = tmp(4730);
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== stateFromStores1) {
    const resolveSemanticColor = stateFromStores(587).internal.resolveSemanticColor;
    class Y {
      constructor() {
        return closure_8.theme;
      }
    }
    let obj5 = stateFromStores(683)(tmp19);
    const cssResult = stateFromStores(683)(tmp19).alpha(0).css();
    cResult[6] = stateFromStores1;
    cResult[7] = tmp19;
    cResult[8] = tmp19;
    cResult[9] = cssResult;
    let tmp17 = cssResult;
    let tmp16 = tmp19;
    let tmp15 = tmp19;
    const alphaResult = stateFromStores(683)(tmp19).alpha(0);
  } else {
    tmp15 = cResult[7];
    tmp16 = cResult[8];
    tmp17 = cResult[9];
  }
  if (cResult[10] === tmp15) {
    if (cResult[11] === tmp16) {
      if (cResult[12] === tmp17) {
        let tmp21 = cResult[13];
      }
      if (cResult[14] !== tmp13) {
        let BG_GRADIENT_CHROMA_GLOW_3 = stateFromStores(587).unsafe_rawColors;
        if (tmp13) {
          ({ BG_GRADIENT_MIDNIGHT_BLURPLE_1, BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2 } = BG_GRADIENT_CHROMA_GLOW_3);
          class Y {
            constructor() {
              return closure_8.theme;
            }
          }
          const items2 = [BG_GRADIENT_MIDNIGHT_BLURPLE_1, BG_GRADIENT_CHROMA_GLOW_3.BG_GRADIENT_MIDNIGHT_BLURPLE_2, BG_GRADIENT_MIDNIGHT_BLURPLE_1];
          tmp26[0] = items2;
          const items3 = [BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2, , , ];
          BG_GRADIENT_CHROMA_GLOW_3 = BG_GRADIENT_CHROMA_GLOW_3.BG_GRADIENT_CHROMA_GLOW_3;
          items3[2] = BG_GRADIENT_CHROMA_GLOW_3;
          items3[3] = BG_GRADIENT_CHROMA_GLOW_2;
          items3[4] = BG_GRADIENT_CHROMA_GLOW_1;
          tmp26[1] = items3;
          let obj2 = tmp26;
        } else {
          ({ ILLO_PURPLE_30, ILLO_PURPLE_40 } = BG_GRADIENT_CHROMA_GLOW_3);
          class Y {
            constructor() {
              return closure_8.theme;
            }
          }
          const tmp24Result = tmp24(683);
          const hexResult = tmp24(683).hsl(184, 0.8, 0.6).hex();
          const ILLO_PURPLE_402 = BG_GRADIENT_CHROMA_GLOW_3.ILLO_PURPLE_40;
          obj2 = { base: null, chroma: null };
          const items4 = [ILLO_PURPLE_30, ILLO_PURPLE_40, ILLO_PURPLE_30];
          obj2.base = items4;
          const items5 = [hexResult, ILLO_PURPLE_402, BG_GRADIENT_CHROMA_GLOW_3.ILLO_PINK_40, ILLO_PURPLE_402, hexResult];
          obj2.chroma = items5;
          const hslResult = tmp24(683).hsl(184, 0.8, 0.6);
        }
        class Y {
          constructor() {
            return closure_8.theme;
          }
        }
        cResult[14] = tmp13;
        cResult[15] = obj2;
        tmp24 = stateFromStores;
      } else {
        let num14 = 0.2;
        if (tmp13) {
          num14 = 0.3;
        }
        class Y {
          constructor() {
            return closure_8.theme;
          }
        }
        const tmp29 = width(noop.useState(0), 2);
        width = tmp29[0];
        noop = tmp29[1];
        const _Symbol = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          function te(nativeEvent) {
            closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
            closure_4((arg0) => {
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
              return closure_8.theme;
            }
          }
        } else {
          const tmp31 = cResult[16];
        }
        let num18 = 1;
        if (!thinking) {
          num18 = c14;
        }
        const sharedValue = tmp(4612).useSharedValue(num18);
        const tmpResult15 = tmp(4612);
        let num19 = 0;
        if (thinking) {
          num19 = 1;
        }
        const sharedValue1 = tmp(4612).useSharedValue(num19);
        const tmpResult16 = tmp(4612);
        sharedValue2 = tmp(4612).useSharedValue(thinking ? v500 : c15);
        const tmpResult17 = tmp(4612);
        sharedValue3 = tmp(4612).useSharedValue(0);
        const tmpResult18 = tmp(4612);
        const sharedValue4 = tmp(4612).useSharedValue(0);
        const tmpResult19 = tmp(4612);
        const sharedValue5 = tmp(4612).useSharedValue(0);
        if (cResult[17] === sharedValue1) {
          if (cResult[18] === sharedValue2) {
            if (cResult[19] === sharedValue) {
              if (cResult[20] === thinking) {
                let tmp38 = cResult[21];
                let tmp39 = cResult[22];
              }
              const effect = obj10.useEffect(tmp38, tmp39);
              if (cResult[23] === sharedValue4) {
                if (cResult[24] === sharedValue5) {
                  if (cResult[25] === stateFromStores) {
                    let tmp41 = cResult[26];
                    let tmp42 = cResult[27];
                  }
                  const effect1 = obj10.useEffect(tmp41, tmp42);
                  if (cResult[28] === sharedValue3) {
                    if (cResult[29] === stateFromStores) {
                      if (cResult[30] === thinking) {
                        let tmp45 = cResult[31];
                        let tmp46 = cResult[32];
                      }
                      const effect2 = obj10.useEffect(tmp45, tmp46);
                      class Ee {
                        constructor() {
                          value = closure_5.get();
                          value1 = closure_8.get();
                          if (typeof pulseAt === "function") {
                            tmp3 = closure_19;
                            num = 1;
                            num2 = 2;
                            num3 = 1;
                            num4 = 1;
                            if (1 < closure_19.length) {
                              arr = closure_19;
                              tmp4 = closure_3;
                              tmp5 = closure_3(closure_19[num3], 2);
                              first = tmp5[0];
                              tmp7 = num3;
                              while (value1 > first) {
                                sum = num3 + 1;
                                num3 = sum;
                                num4 = 1;
                              }
                              tmp4Result = tmp4(arr[num3 - 1], 2);
                              [tmp10, tmp11] = tmp4Result;
                              diff = first - tmp10;
                              num5 = 0;
                              num6 = 1;
                              diff1 = tmp5[1] - tmp11;
                              if (diff > 0) {
                                num6 = (value1 - tmp10) / diff;
                              }
                              num4 = tmp11 + diff1 * num6;
                            }
                            result = value * num4;
                            obj = { transform: null };
                            obj1 = { translateY: null };
                            tmp15 = c13;
                            obj1.translateY = c13 * (1 - result) / 2;
                            items = [, ];
                            items[0] = obj1;
                            obj4 = { scaleY: null };
                            obj4.scaleY = result;
                            items[1] = obj4;
                            obj.transform = items;
                            return obj;
                          } else {
                            str = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                      }
                      let obj3 = { lift: sharedValue, pulseAt, pulse: sharedValue3, BAND_HEIGHT: v500 };
                      Ee.__closure = obj3;
                      Ee.__workletHash = 16853895273556;
                      Ee.__initData = __initData;
                      const animatedStyle = tmp(4612).useAnimatedStyle(Ee);
                      const tmpResult21 = tmp(4612);
                      function be() {
                        const obj = { opacity: (1 - sharedValue1.get()) * dependencyMap, transform: null };
                        items = [{ translateX: -sharedValue4.get() * first }];
                        obj.transform = items;
                        return obj;
                      }
                      let obj4 = { chromaMix: sharedValue1, layerAlpha: num14, driftBase: sharedValue4, width };
                      be.__closure = obj4;
                      be.__workletHash = 2962971489312;
                      be.__initData = __initData2;
                      const animatedStyle1 = tmp(4612).useAnimatedStyle(be);
                      const tmpResult22 = tmp(4612);
                      class Se {
                        constructor() {
                          obj = { opacity: closure_6.get() * c2, transform: null };
                          obj1 = { translateX: -closure_10.get() * closure_3 };
                          items = [];
                          items[0] = obj1;
                          obj.transform = items;
                          return obj;
                        }
                      }
                      let obj6 = { chromaMix: sharedValue1, layerAlpha: num14, driftChroma: sharedValue5, width };
                      Se.__closure = obj6;
                      Se.__workletHash = 8403192846330;
                      Se.__initData = __initData3;
                      const animatedStyle2 = tmp(4612).useAnimatedStyle(Se);
                      const tmpResult23 = tmp(4612);
                      function ve() {
                        if (closure_12) {
                          arr = sharedValue3;
                          get = sharedValue3.get;
                          const result = c13 * sharedValue.get();
                          value = get();
                          if (typeof pulseAt === "function") {
                            let num = 1;
                            let num2 = 2;
                            let num3 = 1;
                            let num4 = 1;
                            if (1 >= items.length) {
                              const result1 = result * num4;
                            } else {
                              let diff3 = _slicedToArray;
                              arr = items;
                              [tmp10, get] = items[num3];
                              let diff = num3;
                              while (value > diff1) {
                                let sum = diff + num;
                                num3 = sum;
                                num4 = num;
                              }
                              const tmp9 = _slicedToArray(items[num3], num2);
                            }
                            diff = diff - num;
                            [tmp8, arr] = diff3(arr[diff], num2);
                            diff1 = diff1 - diff3;
                            num2 = 0;
                            const diff2 = get - arr;
                            if (diff1 > 0) {
                              diff3 = value - diff3;
                              num = diff3 / diff1;
                            }
                            get = diff2 * num;
                            num4 = arr + get;
                            const diff3Result = diff3(arr[diff], num2);
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          const obj = { height: sharedValue2.get() };
                          return obj;
                        }
                      }
                      let obj7 = { ANDROID, BAND_HEIGHT: v500, lift: sharedValue, pulseAt, pulse: sharedValue3, ditherHeight: sharedValue2 };
                      ve.__closure = obj7;
                      ve.__workletHash = 6204121722515;
                      ve.__initData = __initData4;
                      const animatedStyle3 = tmp(4612).useAnimatedStyle(ve);
                      if (cResult[33] !== tmp4.fill) {
                        let obj8 = { style: null, colors: null, locations: null, start: null, end: null };
                        class Ee {
                          constructor() {
                            value = closure_5.get();
                            value1 = closure_8.get();
                            if (typeof pulseAt === "function") {
                              tmp3 = closure_19;
                              num = 1;
                              num2 = 2;
                              num3 = 1;
                              num4 = 1;
                              if (1 < closure_19.length) {
                                arr = closure_19;
                                tmp4 = closure_3;
                                tmp5 = closure_3(closure_19[num3], 2);
                                first = tmp5[0];
                                tmp7 = num3;
                                while (value1 > first) {
                                  sum = num3 + 1;
                                  num3 = sum;
                                  num4 = 1;
                                }
                                tmp4Result = tmp4(arr[num3 - 1], 2);
                                [tmp10, tmp11] = tmp4Result;
                                diff = first - tmp10;
                                num5 = 0;
                                num6 = 1;
                                diff1 = tmp5[1] - tmp11;
                                if (diff > 0) {
                                  num6 = (value1 - tmp10) / diff;
                                }
                                num4 = tmp11 + diff1 * num6;
                              }
                              result = value * num4;
                              obj = { transform: null };
                              obj1 = { translateY: null };
                              tmp15 = c13;
                              obj1.translateY = c13 * (1 - result) / 2;
                              items = [, ];
                              items[0] = obj1;
                              obj4 = { scaleY: null };
                              obj4.scaleY = result;
                              items[1] = obj4;
                              obj.transform = items;
                              return obj;
                            } else {
                              str = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                        }
                        obj8.colors = colors;
                        obj8.locations = locations;
                        obj8.start = start;
                        obj8.end = end;
                        const tmp67 = sharedValue4(stateFromStores(5605), obj8);
                        cResult[33] = tmp4.fill;
                        cResult[34] = tmp67;
                        let tmp60 = tmp67;
                      } else {
                        tmp60 = cResult[34];
                      }
                      if (cResult[35] === animatedStyle1) {
                        if (cResult[36] === tmp4.sweep) {
                          let tmp68 = cResult[37];
                        }
                        if (cResult[38] === tmp23.base) {
                          if (cResult[39] === tmp4.fill) {
                            let tmp69 = cResult[40];
                          }
                          if (cResult[41] === tmp68) {
                            if (cResult[42] === tmp69) {
                              let tmp74 = cResult[43];
                            }
                            if (cResult[44] === animatedStyle2) {
                              if (cResult[45] === tmp4.sweep) {
                                let tmp77 = cResult[46];
                              }
                              if (cResult[47] === tmp23.chroma) {
                                if (cResult[48] === tmp4.fill) {
                                  let tmp78 = cResult[49];
                                }
                                if (cResult[50] === tmp77) {
                                  if (cResult[51] === tmp78) {
                                    let tmp83 = cResult[52];
                                  }
                                  if (cResult[53] === tmp74) {
                                    if (cResult[54] === tmp83) {
                                      let tmp86 = cResult[55];
                                    }
                                    const tmp89 = tmp13 ? c17 : c18;
                                    class Ee {
                                      constructor() {
                                        value = closure_5.get();
                                        value1 = closure_8.get();
                                        if (typeof pulseAt === "function") {
                                          tmp3 = closure_19;
                                          num = 1;
                                          num2 = 2;
                                          num3 = 1;
                                          num4 = 1;
                                          if (1 < closure_19.length) {
                                            arr = closure_19;
                                            tmp4 = closure_3;
                                            tmp5 = closure_3(closure_19[num3], 2);
                                            first = tmp5[0];
                                            tmp7 = num3;
                                            while (value1 > first) {
                                              sum = num3 + 1;
                                              num3 = sum;
                                              num4 = 1;
                                            }
                                            tmp4Result = tmp4(arr[num3 - 1], 2);
                                            [tmp10, tmp11] = tmp4Result;
                                            diff = first - tmp10;
                                            num5 = 0;
                                            num6 = 1;
                                            diff1 = tmp5[1] - tmp11;
                                            if (diff > 0) {
                                              num6 = (value1 - tmp10) / diff;
                                            }
                                            num4 = tmp11 + diff1 * num6;
                                          }
                                          result = value * num4;
                                          obj = { transform: null };
                                          obj1 = { translateY: null };
                                          tmp15 = c13;
                                          obj1.translateY = c13 * (1 - result) / 2;
                                          items = [, ];
                                          items[0] = obj1;
                                          obj4 = { scaleY: null };
                                          obj4.scaleY = result;
                                          items[1] = obj4;
                                          obj.transform = items;
                                          return obj;
                                        } else {
                                          str = "Trying to call a non-function";
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      }
                                    }
                                    if (cResult[56] === tmp89) {
                                      if (cResult[57] === num63) {
                                        if (cResult[58] === thinking) {
                                          if (cResult[59] === width) {
                                            let tmp90 = cResult[60];
                                          }
                                          if (cResult[61] === tmp4.ditherField) {
                                            if (cResult[62] === tmp90) {
                                              let tmp94 = cResult[63];
                                            }
                                            if (cResult[64] !== num) {
                                              let tmp98 = num > 0;
                                              if (tmp98) {
                                                const obj9 = { bottom: -num };
                                                tmp98 = obj9;
                                              }
                                              class Ee {
                                                constructor() {
                                                  value = closure_5.get();
                                                  value1 = closure_8.get();
                                                  if (typeof pulseAt === "function") {
                                                    tmp3 = closure_19;
                                                    num = 1;
                                                    num2 = 2;
                                                    num3 = 1;
                                                    num4 = 1;
                                                    if (1 < closure_19.length) {
                                                      arr = closure_19;
                                                      tmp4 = closure_3;
                                                      tmp5 = closure_3(closure_19[num3], 2);
                                                      first = tmp5[0];
                                                      tmp7 = num3;
                                                      while (value1 > first) {
                                                        sum = num3 + 1;
                                                        num3 = sum;
                                                        num4 = 1;
                                                      }
                                                      tmp4Result = tmp4(arr[num3 - 1], 2);
                                                      [tmp10, tmp11] = tmp4Result;
                                                      diff = first - tmp10;
                                                      num5 = 0;
                                                      num6 = 1;
                                                      diff1 = tmp5[1] - tmp11;
                                                      if (diff > 0) {
                                                        num6 = (value1 - tmp10) / diff;
                                                      }
                                                      num4 = tmp11 + diff1 * num6;
                                                    }
                                                    result = value * num4;
                                                    obj = { transform: null };
                                                    obj1 = { translateY: null };
                                                    tmp15 = c13;
                                                    obj1.translateY = c13 * (1 - result) / 2;
                                                    items = [, ];
                                                    items[0] = obj1;
                                                    obj4 = { scaleY: null };
                                                    obj4.scaleY = result;
                                                    items[1] = obj4;
                                                    obj.transform = items;
                                                    return obj;
                                                  } else {
                                                    str = "Trying to call a non-function";
                                                    throw new TypeError("Trying to call a non-function");
                                                  }
                                                }
                                              }
                                              cResult[65] = tmp98;
                                              let tmp97 = tmp98;
                                            } else {
                                              tmp97 = cResult[65];
                                            }
                                            if (cResult[66] === tmp4.root) {
                                              if (cResult[67] === tmp97) {
                                                let tmp99 = cResult[68];
                                              }
                                              if (cResult[69] === animatedStyle) {
                                                if (cResult[70] === tmp4.band) {
                                                  let tmp101 = cResult[71];
                                                }
                                                if (cResult[72] === tmp60) {
                                                  if (cResult[73] === tmp86) {
                                                    if (cResult[75] === tmp101) {
                                                      if (cResult[76] === tmp102) {
                                                        let tmp106 = cResult[77];
                                                      }
                                                      if (cResult[78] === animatedStyle3) {
                                                        if (cResult[79] === tmp94) {
                                                          if (cResult[80] === tmp60) {
                                                            if (cResult[81] === stateFromStores) {
                                                              if (cResult[82] === tmp4.ditherClip) {
                                                                let tmp109 = cResult[83];
                                                              }
                                                              if (cResult[84] === animatedStyle) {
                                                                if (cResult[85] === tmp21) {
                                                                  if (cResult[86] === tmp4.band) {
                                                                    if (cResult[87] === tmp4.fill) {
                                                                      let tmp111 = cResult[88];
                                                                    }
                                                                    if (cResult[89] === tmp99) {
                                                                      if (cResult[90] === tmp106) {
                                                                        if (cResult[91] === tmp109) {
                                                                          if (cResult[92] === tmp111) {
                                                                            let tmp113 = cResult[93];
                                                                          }
                                                                          return tmp113;
                                                                        }
                                                                      }
                                                                    }
                                                                    class Ee {
                                                                      constructor() {
                                                                        value = closure_5.get();
                                                                        value1 = closure_8.get();
                                                                        if (typeof pulseAt === "function") {
                                                                          tmp3 = closure_19;
                                                                          num = 1;
                                                                          num2 = 2;
                                                                          num3 = 1;
                                                                          num4 = 1;
                                                                          if (1 < closure_19.length) {
                                                                            arr = closure_19;
                                                                            tmp4 = closure_3;
                                                                            tmp5 = closure_3(closure_19[num3], 2);
                                                                            first = tmp5[0];
                                                                            tmp7 = num3;
                                                                            while (value1 > first) {
                                                                              sum = num3 + 1;
                                                                              num3 = sum;
                                                                              num4 = 1;
                                                                            }
                                                                            tmp4Result = tmp4(arr[num3 - 1], 2);
                                                                            [tmp10, tmp11] = tmp4Result;
                                                                            diff = first - tmp10;
                                                                            num5 = 0;
                                                                            num6 = 1;
                                                                            diff1 = tmp5[1] - tmp11;
                                                                            if (diff > 0) {
                                                                              num6 = (value1 - tmp10) / diff;
                                                                            }
                                                                            num4 = tmp11 + diff1 * num6;
                                                                          }
                                                                          result = value * num4;
                                                                          obj = { transform: null };
                                                                          obj1 = { translateY: null };
                                                                          tmp15 = c13;
                                                                          obj1.translateY = c13 * (1 - result) / 2;
                                                                          items = [, ];
                                                                          items[0] = obj1;
                                                                          obj4 = { scaleY: null };
                                                                          obj4.scaleY = result;
                                                                          items[1] = obj4;
                                                                          obj.transform = items;
                                                                          return obj;
                                                                        } else {
                                                                          str = "Trying to call a non-function";
                                                                          throw new TypeError("Trying to call a non-function");
                                                                        }
                                                                      }
                                                                    }
                                                                    const obj11 = { style: tmp99, pointerEvents: "none", onLayout: tmp31, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
                                                                    const items6 = [tmp106, tmp109, tmp111];
                                                                    obj11.children = items6;
                                                                    const tmp115 = closure_11(sharedValue1, obj11);
                                                                    cResult[89] = tmp99;
                                                                    cResult[90] = tmp106;
                                                                    cResult[91] = tmp109;
                                                                    cResult[92] = tmp111;
                                                                    cResult[93] = tmp115;
                                                                    tmp113 = tmp115;
                                                                  }
                                                                }
                                                              }
                                                              class Ee {
                                                                constructor() {
                                                                  value = closure_5.get();
                                                                  value1 = closure_8.get();
                                                                  if (typeof pulseAt === "function") {
                                                                    tmp3 = closure_19;
                                                                    num = 1;
                                                                    num2 = 2;
                                                                    num3 = 1;
                                                                    num4 = 1;
                                                                    if (1 < closure_19.length) {
                                                                      arr = closure_19;
                                                                      tmp4 = closure_3;
                                                                      tmp5 = closure_3(closure_19[num3], 2);
                                                                      first = tmp5[0];
                                                                      tmp7 = num3;
                                                                      while (value1 > first) {
                                                                        sum = num3 + 1;
                                                                        num3 = sum;
                                                                        num4 = 1;
                                                                      }
                                                                      tmp4Result = tmp4(arr[num3 - 1], 2);
                                                                      [tmp10, tmp11] = tmp4Result;
                                                                      diff = first - tmp10;
                                                                      num5 = 0;
                                                                      num6 = 1;
                                                                      diff1 = tmp5[1] - tmp11;
                                                                      if (diff > 0) {
                                                                        num6 = (value1 - tmp10) / diff;
                                                                      }
                                                                      num4 = tmp11 + diff1 * num6;
                                                                    }
                                                                    result = value * num4;
                                                                    obj = { transform: null };
                                                                    obj1 = { translateY: null };
                                                                    tmp15 = c13;
                                                                    obj1.translateY = c13 * (1 - result) / 2;
                                                                    items = [, ];
                                                                    items[0] = obj1;
                                                                    obj4 = { scaleY: null };
                                                                    obj4.scaleY = result;
                                                                    items[1] = obj4;
                                                                    obj.transform = items;
                                                                    return obj;
                                                                  } else {
                                                                    str = "Trying to call a non-function";
                                                                    throw new TypeError("Trying to call a non-function");
                                                                  }
                                                                }
                                                              }
                                                              cResult[84] = animatedStyle;
                                                              cResult[85] = tmp21;
                                                              cResult[86] = tmp4.band;
                                                              cResult[87] = tmp4.fill;
                                                              cResult[88] = null;
                                                              tmp111 = tmp112;
                                                            }
                                                          }
                                                        }
                                                      }
                                                      class Ee {
                                                        constructor() {
                                                          value = closure_5.get();
                                                          value1 = closure_8.get();
                                                          if (typeof pulseAt === "function") {
                                                            tmp3 = closure_19;
                                                            num = 1;
                                                            num2 = 2;
                                                            num3 = 1;
                                                            num4 = 1;
                                                            if (1 < closure_19.length) {
                                                              arr = closure_19;
                                                              tmp4 = closure_3;
                                                              tmp5 = closure_3(closure_19[num3], 2);
                                                              first = tmp5[0];
                                                              tmp7 = num3;
                                                              while (value1 > first) {
                                                                sum = num3 + 1;
                                                                num3 = sum;
                                                                num4 = 1;
                                                              }
                                                              tmp4Result = tmp4(arr[num3 - 1], 2);
                                                              [tmp10, tmp11] = tmp4Result;
                                                              diff = first - tmp10;
                                                              num5 = 0;
                                                              num6 = 1;
                                                              diff1 = tmp5[1] - tmp11;
                                                              if (diff > 0) {
                                                                num6 = (value1 - tmp10) / diff;
                                                              }
                                                              num4 = tmp11 + diff1 * num6;
                                                            }
                                                            result = value * num4;
                                                            obj = { transform: null };
                                                            obj1 = { translateY: null };
                                                            tmp15 = c13;
                                                            obj1.translateY = c13 * (1 - result) / 2;
                                                            items = [, ];
                                                            items[0] = obj1;
                                                            obj4 = { scaleY: null };
                                                            obj4.scaleY = result;
                                                            items[1] = obj4;
                                                            obj.transform = items;
                                                            return obj;
                                                          } else {
                                                            str = "Trying to call a non-function";
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
                                                      tmp109 = tmp110;
                                                    }
                                                    class Ee {
                                                      constructor() {
                                                        value = closure_5.get();
                                                        value1 = closure_8.get();
                                                        if (typeof pulseAt === "function") {
                                                          tmp3 = closure_19;
                                                          num = 1;
                                                          num2 = 2;
                                                          num3 = 1;
                                                          num4 = 1;
                                                          if (1 < closure_19.length) {
                                                            arr = closure_19;
                                                            tmp4 = closure_3;
                                                            tmp5 = closure_3(closure_19[num3], 2);
                                                            first = tmp5[0];
                                                            tmp7 = num3;
                                                            while (value1 > first) {
                                                              sum = num3 + 1;
                                                              num3 = sum;
                                                              num4 = 1;
                                                            }
                                                            tmp4Result = tmp4(arr[num3 - 1], 2);
                                                            [tmp10, tmp11] = tmp4Result;
                                                            diff = first - tmp10;
                                                            num5 = 0;
                                                            num6 = 1;
                                                            diff1 = tmp5[1] - tmp11;
                                                            if (diff > 0) {
                                                              num6 = (value1 - tmp10) / diff;
                                                            }
                                                            num4 = tmp11 + diff1 * num6;
                                                          }
                                                          result = value * num4;
                                                          obj = { transform: null };
                                                          obj1 = { translateY: null };
                                                          tmp15 = c13;
                                                          obj1.translateY = c13 * (1 - result) / 2;
                                                          items = [, ];
                                                          items[0] = obj1;
                                                          obj4 = { scaleY: null };
                                                          obj4.scaleY = result;
                                                          items[1] = obj4;
                                                          obj.transform = items;
                                                          return obj;
                                                        } else {
                                                          str = "Trying to call a non-function";
                                                          throw new TypeError("Trying to call a non-function");
                                                        }
                                                      }
                                                    }
                                                    const obj12 = { style: tmp101, children: cResult[74] };
                                                    const tmp108 = sharedValue4(stateFromStores(4612).View, obj12);
                                                    cResult[75] = tmp101;
                                                    cResult[76] = cResult[74];
                                                    cResult[77] = tmp108;
                                                    tmp106 = tmp108;
                                                  }
                                                }
                                                class Ee {
                                                  constructor() {
                                                    value = closure_5.get();
                                                    value1 = closure_8.get();
                                                    if (typeof pulseAt === "function") {
                                                      tmp3 = closure_19;
                                                      num = 1;
                                                      num2 = 2;
                                                      num3 = 1;
                                                      num4 = 1;
                                                      if (1 < closure_19.length) {
                                                        arr = closure_19;
                                                        tmp4 = closure_3;
                                                        tmp5 = closure_3(closure_19[num3], 2);
                                                        first = tmp5[0];
                                                        tmp7 = num3;
                                                        while (value1 > first) {
                                                          sum = num3 + 1;
                                                          num3 = sum;
                                                          num4 = 1;
                                                        }
                                                        tmp4Result = tmp4(arr[num3 - 1], 2);
                                                        [tmp10, tmp11] = tmp4Result;
                                                        diff = first - tmp10;
                                                        num5 = 0;
                                                        num6 = 1;
                                                        diff1 = tmp5[1] - tmp11;
                                                        if (diff > 0) {
                                                          num6 = (value1 - tmp10) / diff;
                                                        }
                                                        num4 = tmp11 + diff1 * num6;
                                                      }
                                                      result = value * num4;
                                                      obj = { transform: null };
                                                      obj1 = { translateY: null };
                                                      tmp15 = c13;
                                                      obj1.translateY = c13 * (1 - result) / 2;
                                                      items = [, ];
                                                      items[0] = obj1;
                                                      obj4 = { scaleY: null };
                                                      obj4.scaleY = result;
                                                      items[1] = obj4;
                                                      obj.transform = items;
                                                      return obj;
                                                    } else {
                                                      str = "Trying to call a non-function";
                                                      throw new TypeError("Trying to call a non-function");
                                                    }
                                                  }
                                                }
                                                cResult[72] = tmp60;
                                                cResult[73] = tmp86;
                                                cResult[74] = tmp104;
                                              }
                                              const items7 = [, ];
                                              class Ee {
                                                constructor() {
                                                  value = closure_5.get();
                                                  value1 = closure_8.get();
                                                  if (typeof pulseAt === "function") {
                                                    tmp3 = closure_19;
                                                    num = 1;
                                                    num2 = 2;
                                                    num3 = 1;
                                                    num4 = 1;
                                                    if (1 < closure_19.length) {
                                                      arr = closure_19;
                                                      tmp4 = closure_3;
                                                      tmp5 = closure_3(closure_19[num3], 2);
                                                      first = tmp5[0];
                                                      tmp7 = num3;
                                                      while (value1 > first) {
                                                        sum = num3 + 1;
                                                        num3 = sum;
                                                        num4 = 1;
                                                      }
                                                      tmp4Result = tmp4(arr[num3 - 1], 2);
                                                      [tmp10, tmp11] = tmp4Result;
                                                      diff = first - tmp10;
                                                      num5 = 0;
                                                      num6 = 1;
                                                      diff1 = tmp5[1] - tmp11;
                                                      if (diff > 0) {
                                                        num6 = (value1 - tmp10) / diff;
                                                      }
                                                      num4 = tmp11 + diff1 * num6;
                                                    }
                                                    result = value * num4;
                                                    obj = { transform: null };
                                                    obj1 = { translateY: null };
                                                    tmp15 = c13;
                                                    obj1.translateY = c13 * (1 - result) / 2;
                                                    items = [, ];
                                                    items[0] = obj1;
                                                    obj4 = { scaleY: null };
                                                    obj4.scaleY = result;
                                                    items[1] = obj4;
                                                    obj.transform = items;
                                                    return obj;
                                                  } else {
                                                    str = "Trying to call a non-function";
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
                                                value = closure_5.get();
                                                value1 = closure_8.get();
                                                if (typeof pulseAt === "function") {
                                                  tmp3 = closure_19;
                                                  num = 1;
                                                  num2 = 2;
                                                  num3 = 1;
                                                  num4 = 1;
                                                  if (1 < closure_19.length) {
                                                    arr = closure_19;
                                                    tmp4 = closure_3;
                                                    tmp5 = closure_3(closure_19[num3], 2);
                                                    first = tmp5[0];
                                                    tmp7 = num3;
                                                    while (value1 > first) {
                                                      sum = num3 + 1;
                                                      num3 = sum;
                                                      num4 = 1;
                                                    }
                                                    tmp4Result = tmp4(arr[num3 - 1], 2);
                                                    [tmp10, tmp11] = tmp4Result;
                                                    diff = first - tmp10;
                                                    num5 = 0;
                                                    num6 = 1;
                                                    diff1 = tmp5[1] - tmp11;
                                                    if (diff > 0) {
                                                      num6 = (value1 - tmp10) / diff;
                                                    }
                                                    num4 = tmp11 + diff1 * num6;
                                                  }
                                                  result = value * num4;
                                                  obj = { transform: null };
                                                  obj1 = { translateY: null };
                                                  tmp15 = c13;
                                                  obj1.translateY = c13 * (1 - result) / 2;
                                                  items = [, ];
                                                  items[0] = obj1;
                                                  obj4 = { scaleY: null };
                                                  obj4.scaleY = result;
                                                  items[1] = obj4;
                                                  obj.transform = items;
                                                  return obj;
                                                } else {
                                                  str = "Trying to call a non-function";
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
                                              value = closure_5.get();
                                              value1 = closure_8.get();
                                              if (typeof pulseAt === "function") {
                                                tmp3 = closure_19;
                                                num = 1;
                                                num2 = 2;
                                                num3 = 1;
                                                num4 = 1;
                                                if (1 < closure_19.length) {
                                                  arr = closure_19;
                                                  tmp4 = closure_3;
                                                  tmp5 = closure_3(closure_19[num3], 2);
                                                  first = tmp5[0];
                                                  tmp7 = num3;
                                                  while (value1 > first) {
                                                    sum = num3 + 1;
                                                    num3 = sum;
                                                    num4 = 1;
                                                  }
                                                  tmp4Result = tmp4(arr[num3 - 1], 2);
                                                  [tmp10, tmp11] = tmp4Result;
                                                  diff = first - tmp10;
                                                  num5 = 0;
                                                  num6 = 1;
                                                  diff1 = tmp5[1] - tmp11;
                                                  if (diff > 0) {
                                                    num6 = (value1 - tmp10) / diff;
                                                  }
                                                  num4 = tmp11 + diff1 * num6;
                                                }
                                                result = value * num4;
                                                obj = { transform: null };
                                                obj1 = { translateY: null };
                                                tmp15 = c13;
                                                obj1.translateY = c13 * (1 - result) / 2;
                                                items = [, ];
                                                items[0] = obj1;
                                                obj4 = { scaleY: null };
                                                obj4.scaleY = result;
                                                items[1] = obj4;
                                                obj.transform = items;
                                                return obj;
                                              } else {
                                                str = "Trying to call a non-function";
                                                throw new TypeError("Trying to call a non-function");
                                              }
                                            }
                                          }
                                          const obj13 = { style: tmp4.ditherField, children: tmp90 };
                                          const tmp96 = sharedValue4(sharedValue1, obj13);
                                          cResult[61] = tmp4.ditherField;
                                          cResult[62] = tmp90;
                                          cResult[63] = tmp96;
                                          tmp94 = tmp96;
                                        }
                                      }
                                    }
                                    const size = { width, height: v500, thinking, fill: tmp89, fillOpacity: 0.16 };
                                    const tmp93 = sharedValue4(stateFromStores(16723), size);
                                    cResult[56] = tmp89;
                                    cResult[57] = 0.16;
                                    cResult[58] = thinking;
                                    cResult[59] = width;
                                    cResult[60] = tmp93;
                                    tmp90 = tmp93;
                                  }
                                  class Ee {
                                    constructor() {
                                      value = closure_5.get();
                                      value1 = closure_8.get();
                                      if (typeof pulseAt === "function") {
                                        tmp3 = closure_19;
                                        num = 1;
                                        num2 = 2;
                                        num3 = 1;
                                        num4 = 1;
                                        if (1 < closure_19.length) {
                                          arr = closure_19;
                                          tmp4 = closure_3;
                                          tmp5 = closure_3(closure_19[num3], 2);
                                          first = tmp5[0];
                                          tmp7 = num3;
                                          while (value1 > first) {
                                            sum = num3 + 1;
                                            num3 = sum;
                                            num4 = 1;
                                          }
                                          tmp4Result = tmp4(arr[num3 - 1], 2);
                                          [tmp10, tmp11] = tmp4Result;
                                          diff = first - tmp10;
                                          num5 = 0;
                                          num6 = 1;
                                          diff1 = tmp5[1] - tmp11;
                                          if (diff > 0) {
                                            num6 = (value1 - tmp10) / diff;
                                          }
                                          num4 = tmp11 + diff1 * num6;
                                        }
                                        result = value * num4;
                                        obj = { transform: null };
                                        obj1 = { translateY: null };
                                        tmp15 = c13;
                                        obj1.translateY = c13 * (1 - result) / 2;
                                        items = [, ];
                                        items[0] = obj1;
                                        obj4 = { scaleY: null };
                                        obj4.scaleY = result;
                                        items[1] = obj4;
                                        obj.transform = items;
                                        return obj;
                                      } else {
                                        str = "Trying to call a non-function";
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    }
                                  }
                                  const obj14 = { children: null };
                                  const items8 = [tmp74, tmp83];
                                  obj14.children = items8;
                                  const tmp88 = closure_11(sharedValue5, obj14);
                                  cResult[53] = tmp74;
                                  cResult[54] = tmp83;
                                  cResult[55] = tmp88;
                                  tmp86 = tmp88;
                                }
                                class Ee {
                                  constructor() {
                                    value = closure_5.get();
                                    value1 = closure_8.get();
                                    if (typeof pulseAt === "function") {
                                      tmp3 = closure_19;
                                      num = 1;
                                      num2 = 2;
                                      num3 = 1;
                                      num4 = 1;
                                      if (1 < closure_19.length) {
                                        arr = closure_19;
                                        tmp4 = closure_3;
                                        tmp5 = closure_3(closure_19[num3], 2);
                                        first = tmp5[0];
                                        tmp7 = num3;
                                        while (value1 > first) {
                                          sum = num3 + 1;
                                          num3 = sum;
                                          num4 = 1;
                                        }
                                        tmp4Result = tmp4(arr[num3 - 1], 2);
                                        [tmp10, tmp11] = tmp4Result;
                                        diff = first - tmp10;
                                        num5 = 0;
                                        num6 = 1;
                                        diff1 = tmp5[1] - tmp11;
                                        if (diff > 0) {
                                          num6 = (value1 - tmp10) / diff;
                                        }
                                        num4 = tmp11 + diff1 * num6;
                                      }
                                      result = value * num4;
                                      obj = { transform: null };
                                      obj1 = { translateY: null };
                                      tmp15 = c13;
                                      obj1.translateY = c13 * (1 - result) / 2;
                                      items = [, ];
                                      items[0] = obj1;
                                      obj4 = { scaleY: null };
                                      obj4.scaleY = result;
                                      items[1] = obj4;
                                      obj.transform = items;
                                      return obj;
                                    } else {
                                      str = "Trying to call a non-function";
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  }
                                }
                                const obj15 = { style: tmp77, children: tmp78 };
                                const tmp85 = sharedValue4(stateFromStores(4612).View, obj15);
                                cResult[50] = tmp77;
                                cResult[51] = tmp78;
                                cResult[52] = tmp85;
                                tmp83 = tmp85;
                              }
                              class Ee {
                                constructor() {
                                  value = closure_5.get();
                                  value1 = closure_8.get();
                                  if (typeof pulseAt === "function") {
                                    tmp3 = closure_19;
                                    num = 1;
                                    num2 = 2;
                                    num3 = 1;
                                    num4 = 1;
                                    if (1 < closure_19.length) {
                                      arr = closure_19;
                                      tmp4 = closure_3;
                                      tmp5 = closure_3(closure_19[num3], 2);
                                      first = tmp5[0];
                                      tmp7 = num3;
                                      while (value1 > first) {
                                        sum = num3 + 1;
                                        num3 = sum;
                                        num4 = 1;
                                      }
                                      tmp4Result = tmp4(arr[num3 - 1], 2);
                                      [tmp10, tmp11] = tmp4Result;
                                      diff = first - tmp10;
                                      num5 = 0;
                                      num6 = 1;
                                      diff1 = tmp5[1] - tmp11;
                                      if (diff > 0) {
                                        num6 = (value1 - tmp10) / diff;
                                      }
                                      num4 = tmp11 + diff1 * num6;
                                    }
                                    result = value * num4;
                                    obj = { transform: null };
                                    obj1 = { translateY: null };
                                    tmp15 = c13;
                                    obj1.translateY = c13 * (1 - result) / 2;
                                    items = [, ];
                                    items[0] = obj1;
                                    obj4 = { scaleY: null };
                                    obj4.scaleY = result;
                                    items[1] = obj4;
                                    obj.transform = items;
                                    return obj;
                                  } else {
                                    str = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                              }
                              const obj16 = { style: tmp4.fill, colors: tmp23.chroma, start: start2, end: end2 };
                              const tmp82 = sharedValue4(stateFromStores(5605), obj16);
                              cResult[47] = tmp23.chroma;
                              cResult[48] = tmp4.fill;
                              cResult[49] = tmp82;
                              tmp78 = tmp82;
                            }
                            const items9 = [, ];
                            class Ee {
                              constructor() {
                                value = closure_5.get();
                                value1 = closure_8.get();
                                if (typeof pulseAt === "function") {
                                  tmp3 = closure_19;
                                  num = 1;
                                  num2 = 2;
                                  num3 = 1;
                                  num4 = 1;
                                  if (1 < closure_19.length) {
                                    arr = closure_19;
                                    tmp4 = closure_3;
                                    tmp5 = closure_3(closure_19[num3], 2);
                                    first = tmp5[0];
                                    tmp7 = num3;
                                    while (value1 > first) {
                                      sum = num3 + 1;
                                      num3 = sum;
                                      num4 = 1;
                                    }
                                    tmp4Result = tmp4(arr[num3 - 1], 2);
                                    [tmp10, tmp11] = tmp4Result;
                                    diff = first - tmp10;
                                    num5 = 0;
                                    num6 = 1;
                                    diff1 = tmp5[1] - tmp11;
                                    if (diff > 0) {
                                      num6 = (value1 - tmp10) / diff;
                                    }
                                    num4 = tmp11 + diff1 * num6;
                                  }
                                  result = value * num4;
                                  obj = { transform: null };
                                  obj1 = { translateY: null };
                                  tmp15 = c13;
                                  obj1.translateY = c13 * (1 - result) / 2;
                                  items = [, ];
                                  items[0] = obj1;
                                  obj4 = { scaleY: null };
                                  obj4.scaleY = result;
                                  items[1] = obj4;
                                  obj.transform = items;
                                  return obj;
                                } else {
                                  str = "Trying to call a non-function";
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
                              value = closure_5.get();
                              value1 = closure_8.get();
                              if (typeof pulseAt === "function") {
                                tmp3 = closure_19;
                                num = 1;
                                num2 = 2;
                                num3 = 1;
                                num4 = 1;
                                if (1 < closure_19.length) {
                                  arr = closure_19;
                                  tmp4 = closure_3;
                                  tmp5 = closure_3(closure_19[num3], 2);
                                  first = tmp5[0];
                                  tmp7 = num3;
                                  while (value1 > first) {
                                    sum = num3 + 1;
                                    num3 = sum;
                                    num4 = 1;
                                  }
                                  tmp4Result = tmp4(arr[num3 - 1], 2);
                                  [tmp10, tmp11] = tmp4Result;
                                  diff = first - tmp10;
                                  num5 = 0;
                                  num6 = 1;
                                  diff1 = tmp5[1] - tmp11;
                                  if (diff > 0) {
                                    num6 = (value1 - tmp10) / diff;
                                  }
                                  num4 = tmp11 + diff1 * num6;
                                }
                                result = value * num4;
                                obj = { transform: null };
                                obj1 = { translateY: null };
                                tmp15 = c13;
                                obj1.translateY = c13 * (1 - result) / 2;
                                items = [, ];
                                items[0] = obj1;
                                obj4 = { scaleY: null };
                                obj4.scaleY = result;
                                items[1] = obj4;
                                obj.transform = items;
                                return obj;
                              } else {
                                str = "Trying to call a non-function";
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                          }
                          const obj17 = { style: tmp68, children: tmp69 };
                          const tmp76 = sharedValue4(stateFromStores(4612).View, obj17);
                          cResult[41] = tmp68;
                          cResult[42] = tmp69;
                          cResult[43] = tmp76;
                          tmp74 = tmp76;
                        }
                        class Ee {
                          constructor() {
                            value = closure_5.get();
                            value1 = closure_8.get();
                            if (typeof pulseAt === "function") {
                              tmp3 = closure_19;
                              num = 1;
                              num2 = 2;
                              num3 = 1;
                              num4 = 1;
                              if (1 < closure_19.length) {
                                arr = closure_19;
                                tmp4 = closure_3;
                                tmp5 = closure_3(closure_19[num3], 2);
                                first = tmp5[0];
                                tmp7 = num3;
                                while (value1 > first) {
                                  sum = num3 + 1;
                                  num3 = sum;
                                  num4 = 1;
                                }
                                tmp4Result = tmp4(arr[num3 - 1], 2);
                                [tmp10, tmp11] = tmp4Result;
                                diff = first - tmp10;
                                num5 = 0;
                                num6 = 1;
                                diff1 = tmp5[1] - tmp11;
                                if (diff > 0) {
                                  num6 = (value1 - tmp10) / diff;
                                }
                                num4 = tmp11 + diff1 * num6;
                              }
                              result = value * num4;
                              obj = { transform: null };
                              obj1 = { translateY: null };
                              tmp15 = c13;
                              obj1.translateY = c13 * (1 - result) / 2;
                              items = [, ];
                              items[0] = obj1;
                              obj4 = { scaleY: null };
                              obj4.scaleY = result;
                              items[1] = obj4;
                              obj.transform = items;
                              return obj;
                            } else {
                              str = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                        }
                        const obj18 = { style: tmp4.fill, colors: tmp23.base, start: start2, end: end2 };
                        const tmp73 = sharedValue4(stateFromStores(5605), obj18);
                        cResult[38] = tmp23.base;
                        cResult[39] = tmp4.fill;
                        cResult[40] = tmp73;
                        tmp69 = tmp73;
                      }
                      const items10 = [tmp4.sweep, animatedStyle1];
                      cResult[35] = animatedStyle1;
                      cResult[36] = tmp4.sweep;
                      cResult[37] = items10;
                      tmp68 = items10;
                      const tmpResult24 = tmp(4612);
                    }
                  }
                  class Y {
                    constructor() {
                      return closure_8.theme;
                    }
                  }
                  const items11 = [sharedValue3, stateFromStores, thinking];
                  cResult[28] = sharedValue3;
                  cResult[29] = stateFromStores;
                  cResult[30] = thinking;
                  cResult[31] = tmp47;
                  cResult[32] = items11;
                  tmp46 = items11;
                  tmp45 = tmp47;
                }
              }
              class Y {
                constructor() {
                  return closure_8.theme;
                }
              }
              const items12 = [sharedValue4, sharedValue5, stateFromStores];
              cResult[23] = sharedValue4;
              cResult[24] = sharedValue5;
              cResult[25] = stateFromStores;
              cResult[26] = tmp43;
              cResult[27] = items12;
              tmp42 = items12;
              tmp41 = tmp43;
            }
          }
        }
        function oe() {
          const Easing = ReanimatedRexport.Easing;
          const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
          let num = 1;
          if (!thinking) {
            num = c14;
          }
          const result = sharedValue.set(timing.withTiming(num, { duration, easing: bezierResult }, "animate-always"));
          const obj2 = { duration, easing: bezierResult };
          let num2 = 0;
          if (thinking) {
            num2 = 1;
          }
          const result1 = sharedValue1.set(timing.withTiming(num2, { duration, easing: bezierResult }, "animate-always"));
          const tmpResult = timing;
          const result2 = sharedValue2.set(timing.withTiming(thinking ? c13 : c15, { duration: 400, easing: bezierResult }, "animate-always"));
          const tmpResult2 = timing;
        }
        const items13 = [sharedValue1, sharedValue2, sharedValue, thinking];
        cResult[17] = sharedValue1;
        cResult[18] = sharedValue2;
        cResult[19] = sharedValue;
        cResult[20] = thinking;
        cResult[21] = oe;
        cResult[22] = items13;
        tmp39 = items13;
        tmp38 = oe;
        const tmpResult20 = tmp(4612);
      }
    }
  }
  tmp22[0] = tmp15;
  tmp22[1] = tmp16;
  tmp22[2] = tmp17;
  cResult[10] = tmp15;
  cResult[11] = tmp16;
  cResult[12] = tmp17;
  cResult[13] = tmp22;
  tmp21 = tmp22;
  const tmpResult13 = thinking(504);
}) : ((thinking) => {
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
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let tmp = closure_27();
  items = [sharedValue];
  const stateFromStores = thinking(stateFromStores1[12]).useStateFromStores(items, () => sharedValue.useReducedMotion);
  let obj = thinking(stateFromStores1[12]);
  let items1 = [sharedValue1];
  stateFromStores1 = thinking(stateFromStores1[12]).useStateFromStores(items1, () => sharedValue1.theme);
  let obj2 = thinking(stateFromStores1[12]);
  const isThemeDarkResult = thinking(stateFromStores1[13]).isThemeDark(stateFromStores1);
  _slicedToArray = isThemeDarkResult;
  let items2 = [stateFromStores1];
  let items3 = [isThemeDarkResult];
  const memo = num2.useMemo(() => {
    const internal = nativeDefault.internal;
    const semanticColor = internal.resolveSemanticColor(stateFromStores1, nativeDefault.colors.BACKGROUND_BASE_LOW);
    items = [semanticColor, semanticColor, ];
    const obj = _modDef683(semanticColor);
    items[2] = _modDef683(semanticColor).alpha(0).css();
    return items;
  }, items2);
  const memo1 = num2.useMemo(() => {
    const unsafe_rawColors = nativeDefault.unsafe_rawColors;
    if (c3) {
      ({ BG_GRADIENT_MIDNIGHT_BLURPLE_1, BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2 } = unsafe_rawColors);
      const obj = { base: null, chroma: null };
      items = [BG_GRADIENT_MIDNIGHT_BLURPLE_1, unsafe_rawColors.BG_GRADIENT_MIDNIGHT_BLURPLE_2, BG_GRADIENT_MIDNIGHT_BLURPLE_1];
      obj.base = items;
      const items1 = [BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2, unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_3, BG_GRADIENT_CHROMA_GLOW_2, BG_GRADIENT_CHROMA_GLOW_1];
      obj.chroma = items1;
      let obj2 = obj;
    } else {
      ({ ILLO_PURPLE_30, ILLO_PURPLE_40 } = unsafe_rawColors);
      const tmpResult = _modDef683;
      const hexResult = _modDef683.hsl(184, 0.8, 0.6).hex();
      const ILLO_PURPLE_402 = unsafe_rawColors.ILLO_PURPLE_40;
      obj2 = { base: null, chroma: null };
      const items2 = [ILLO_PURPLE_30, ILLO_PURPLE_40, ILLO_PURPLE_30];
      obj2.base = items2;
      const items3 = [hexResult, ILLO_PURPLE_402, unsafe_rawColors.ILLO_PINK_40, ILLO_PURPLE_402, hexResult];
      obj2.chroma = items3;
      const hslResult = _modDef683.hsl(184, 0.8, 0.6);
    }
    return obj2;
  }, items3);
  num2 = 0.2;
  if (isThemeDarkResult) {
    num2 = 0.3;
  }
  [width, closure_6] = num2.useState(0);
  const callback = obj4.useCallback((nativeEvent) => {
    closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
    closure_6((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  let obj3 = thinking(stateFromStores1[13]);
  let num3 = 1;
  if (!thinking) {
    num3 = c14;
  }
  sharedValue = thinking(stateFromStores1[14]).useSharedValue(num3);
  const tmp2Result = thinking(stateFromStores1[14]);
  let num4 = 0;
  if (thinking) {
    num4 = 1;
  }
  sharedValue1 = thinking(stateFromStores1[14]).useSharedValue(num4);
  const tmp2Result10 = thinking(stateFromStores1[14]);
  sharedValue2 = thinking(stateFromStores1[14]).useSharedValue(thinking ? v500 : c15);
  const tmp2Result11 = thinking(stateFromStores1[14]);
  sharedValue3 = thinking(stateFromStores1[14]).useSharedValue(0);
  const tmp2Result12 = thinking(stateFromStores1[14]);
  sharedValue4 = thinking(stateFromStores1[14]).useSharedValue(0);
  const tmp2Result13 = thinking(stateFromStores1[14]);
  sharedValue5 = thinking(stateFromStores1[14]).useSharedValue(0);
  const items4 = [sharedValue1, sharedValue2, sharedValue, thinking];
  const effect = obj4.useEffect(() => {
    const Easing = ReanimatedRexport.Easing;
    const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
    let num = 1;
    if (!thinking) {
      num = c14;
    }
    const result = sharedValue.set(timing.withTiming(num, { duration, easing: bezierResult }, "animate-always"));
    const obj2 = { duration, easing: bezierResult };
    num2 = 0;
    if (thinking) {
      num2 = 1;
    }
    const result1 = sharedValue1.set(timing.withTiming(num2, { duration, easing: bezierResult }, "animate-always"));
    const tmpResult = timing;
    const result2 = sharedValue2.set(timing.withTiming(thinking ? c13 : c15, { duration: 400, easing: bezierResult }, "animate-always"));
    const tmpResult2 = timing;
  }, items4);
  const items5 = [sharedValue4, sharedValue5, stateFromStores];
  const effect1 = obj4.useEffect(() => {
    if (stateFromStores) {
      ReanimatedRexport.cancelAnimation(sharedValue4);
      ReanimatedRexport.cancelAnimation(sharedValue5);
      const result = sharedValue4.set(0);
      const result1 = sharedValue5.set(0);
    } else {
      let obj = ReanimatedRexport;
      const obj3 = { duration: 24000, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj3.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
      const result2 = sharedValue4.set(obj.withRepeat(timing.withTiming(1, obj3), -1, true));
      const obj4 = ReanimatedRexport;
      const obj6 = { duration: 12000, easing: null };
      const Easing2 = ReanimatedRexport.Easing;
      obj6.easing = Easing2.inOut(ReanimatedRexport.Easing.ease);
      const result3 = sharedValue5.set(obj4.withRepeat(timing.withTiming(1, obj6), -1, true));
      const fn = () => {
        thinking(stateFromStores1[14]).cancelAnimation(sharedValue4);
        const obj = thinking(stateFromStores1[14]);
        thinking(stateFromStores1[14]).cancelAnimation(sharedValue5);
      };
    }
    return fn;
  }, items5);
  const items6 = [sharedValue3, stateFromStores, thinking];
  const effect2 = obj4.useEffect(() => {
    if (!stateFromStores) {
      if (thinking) {
        const result = sharedValue3.set(0);
        const obj = ReanimatedRexport;
        const obj3 = { duration: 5500, easing: ReanimatedRexport.Easing.ease };
        const result1 = sharedValue3.set(obj.withRepeat(timing.withTiming(1, obj3), -1, false));
        const fn = () => thinking(stateFromStores1[14]).cancelAnimation(sharedValue3);
      }
      return fn;
    }
    ReanimatedRexport.cancelAnimation(sharedValue3);
    const result2 = sharedValue3.set(timing.withTiming(0, { duration }));
    const obj6 = { duration };
  }, items6);
  const tmp2Result14 = thinking(stateFromStores1[14]);
  function ee() {
    value = sharedValue.get();
    value2 = sharedValue3.get();
    if (typeof pulseAt === "function") {
      let num3 = 1;
      let num4 = 1;
      if (1 < items.length) {
        const tmp5 = _slicedToArray(items[num3], 2);
        const first = tmp5[0];
        while (value2 > first) {
          let sum = num3 + 1;
          num3 = sum;
          num4 = 1;
        }
        [tmp10, tmp11] = items[num3 - 1];
        const diff = first - tmp10;
        let num6 = 1;
        const diff1 = tmp5[1] - tmp11;
        if (diff > 0) {
          num6 = (value2 - tmp10) / diff;
        }
        num4 = tmp11 + diff1 * num6;
        const tmp4Result = _slicedToArray(items[num3 - 1], 2);
      }
      const result = value * num4;
      const obj = { transform: null };
      const obj2 = { translateY: c13 * (1 - result) / 2 };
      items = [obj2, ];
      const obj3 = { scaleY: result };
      items[1] = obj3;
      obj.transform = items;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  ee.__closure = { lift: sharedValue, pulseAt, pulse: sharedValue3, BAND_HEIGHT: v500 };
  ee.__workletHash = 2725772663376;
  ee.__initData = __initData5;
  const animatedStyle = thinking(stateFromStores1[14]).useAnimatedStyle(ee);
  let obj5 = { lift: sharedValue, pulseAt, pulse: sharedValue3, BAND_HEIGHT: v500 };
  const tmp2Result15 = thinking(stateFromStores1[14]);
  function te() {
    const obj = { opacity: (1 - sharedValue1.get()) * num2, transform: null };
    items = [{ translateX: -sharedValue4.get() * first }];
    obj.transform = items;
    return obj;
  }
  te.__closure = { chromaMix: sharedValue1, layerAlpha: num2, driftBase: sharedValue4, width };
  te.__workletHash = 17091094099492;
  te.__initData = __initData6;
  const animatedStyle1 = thinking(stateFromStores1[14]).useAnimatedStyle(te);
  const tmp2Result16 = thinking(stateFromStores1[14]);
  function ie() {
    const obj = { opacity: sharedValue1.get() * num2, transform: null };
    items = [{ translateX: -sharedValue5.get() * first }];
    obj.transform = items;
    return obj;
  }
  ie.__closure = { chromaMix: sharedValue1, layerAlpha: num2, driftChroma: sharedValue5, width };
  ie.__workletHash = 11335227857910;
  ie.__initData = __initData7;
  const animatedStyle2 = thinking(stateFromStores1[14]).useAnimatedStyle(ie);
  const tmp2Result17 = thinking(stateFromStores1[14]);
  function ae() {
    if (closure_12) {
      arr = sharedValue3;
      get = sharedValue3.get;
      const result = c13 * sharedValue.get();
      value = get();
      if (typeof pulseAt === "function") {
        let num = 1;
        num2 = 2;
        let num3 = 1;
        let num4 = 1;
        if (1 >= items.length) {
          const result1 = result * num4;
        } else {
          let diff3 = _slicedToArray;
          arr = items;
          [tmp10, get] = items[num3];
          let diff = num3;
          while (value > diff1) {
            let sum = diff + num;
            num3 = sum;
            num4 = num;
          }
          const tmp9 = _slicedToArray(items[num3], num2);
        }
        diff = diff - num;
        [tmp8, arr] = diff3(arr[diff], num2);
        diff1 = diff1 - diff3;
        num2 = 0;
        const diff2 = get - arr;
        if (diff1 > 0) {
          diff3 = value - diff3;
          num = diff3 / diff1;
        }
        get = diff2 * num;
        num4 = arr + get;
        const diff3Result = diff3(arr[diff], num2);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const obj = { height: sharedValue2.get() };
      return obj;
    }
  }
  ae.__closure = { ANDROID: sharedValue5, BAND_HEIGHT: v500, lift: sharedValue, pulseAt, pulse: sharedValue3, ditherHeight: sharedValue2 };
  ae.__workletHash = 13936145886879;
  ae.__initData = __initData8;
  const animatedStyle3 = thinking(stateFromStores1[14]).useAnimatedStyle(ae);
  const tmp31 = sharedValue2(stateFromStores(stateFromStores1[16]), { style: tmp.fill, colors, locations, start, end });
  let obj8 = { children: null };
  const obj9 = { style: null, children: sharedValue2(stateFromStores(stateFromStores1[16]), { style: tmp.fill, colors: memo1.base, start: start2, end: end2 }) };
  const items7 = [tmp.sweep, animatedStyle1];
  obj9.style = items7;
  const items8 = [sharedValue2(stateFromStores(stateFromStores1[14]).View, obj9), ];
  const obj11 = { style: null, children: sharedValue2(stateFromStores(stateFromStores1[16]), { style: tmp.fill, colors: memo1.chroma, start: start2, end: end2 }) };
  const items9 = [tmp.sweep, animatedStyle2];
  obj11.style = items9;
  items8[1] = sharedValue2(stateFromStores(stateFromStores1[14]).View, obj11);
  obj8.children = items8;
  const tmp33 = sharedValue4(sharedValue3, obj8);
  const obj13 = { style: tmp.ditherField, children: null };
  const size = { width, height: v500, thinking, fill: isThemeDarkResult ? c17 : c18, fillOpacity: null };
  let num5 = 0.16;
  const obj10 = { style: tmp.fill, colors: memo1.base, start: start2, end: end2 };
  const obj12 = { style: tmp.fill, colors: memo1.chroma, start: start2, end: end2 };
  let obj6 = { ANDROID: sharedValue5, BAND_HEIGHT: v500, lift: sharedValue, pulseAt, pulse: sharedValue3, ditherHeight: sharedValue2 };
  let obj7 = { style: tmp.fill, colors, locations, start, end };
  const tmp2Result18 = thinking(stateFromStores1[14]);
  const tmp32 = sharedValue4;
  if (isThemeDarkResult) {
    num5 = 0.18;
  }
  size.fillOpacity = num5;
  obj13.children = sharedValue2(stateFromStores(stateFromStores1[17]), size);
  const tmp26Result = sharedValue2(closure_6, obj13);
  const items10 = [tmp.root, ];
  let tmp37 = num > 0;
  if (tmp37) {
    const obj14 = { bottom: -num };
    tmp37 = obj14;
  }
  const obj15 = { style: items10, pointerEvents: "none", onLayout: callback, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  items10[1] = tmp37;
  const obj16 = { style: null, children: null };
  const items11 = [tmp.band, animatedStyle];
  obj16.style = items11;
  if (sharedValue5) {
    const obj17 = { style: width.absoluteFill, children: tmp33 };
    let tmp26Result5 = tmp26(tmp34, obj17);
    let tmp38 = width;
  } else {
    const obj18 = { style: null, maskElement: null, children: null };
    tmp38 = width;
    obj18.style = width.absoluteFill;
    obj18.maskElement = tmp31;
    obj18.children = tmp33;
    tmp26Result5 = tmp26(tmp27(tmp3[18]), obj18);
  }
  obj16.children = tmp26Result5;
  const items12 = [sharedValue2(stateFromStores(stateFromStores1[14]).View, obj16), , ];
  let tmp26Result7 = null;
  if (!stateFromStores) {
    const obj19 = { style: null, children: null };
    const items13 = [tmp.ditherClip, animatedStyle3];
    obj19.style = items13;
    let tmp26Result6 = tmp26Result;
    if (!tmp24) {
      const obj20 = { style: tmp38.absoluteFill, maskElement: tmp31, children: tmp26Result };
      tmp26Result6 = tmp26(tmp27(tmp3[18]), obj20);
    }
    obj19.children = tmp26Result6;
    tmp26Result7 = tmp26(tmp27(tmp3[14]).View, obj19);
  }
  items12[1] = tmp26Result7;
  let tmp26Result8 = null;
  if (sharedValue5) {
    const obj21 = { style: null, children: null };
    const items14 = [tmp.band, animatedStyle];
    obj21.style = items14;
    const obj22 = { style: tmp.fill, colors: memo, locations, start, end };
    obj21.children = tmp26(tmp27(tmp3[16]), obj22);
    tmp26Result8 = tmp26(tmp27(tmp3[14]).View, obj21);
  }
  items12[2] = tmp26Result8;
  obj15.children = items12;
  return tmp32(closure_6, obj15);
});