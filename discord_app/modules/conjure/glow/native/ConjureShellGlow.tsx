// discord_app/modules/conjure/glow/native/ConjureShellGlow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const PlatformUtils = fn(1381);
const ANDROID = PlatformUtils.isAndroid();
let c13 = 500;
let c14 = 700;
let c15 = "rgb(225, 240, 255)";
let c16 = "rgb(120, 60, 200)";
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
const createStyles = fn(5005);
let closure_25 = createStyles.createStyles({
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
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/glow/native/ConjureShellGlow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureShellGlow(thinking) {
      const cResult = thinking(576).c(95);
      thinking = thinking.thinking;
      const bleedBottom = thinking.bleedBottom;
      let num = 0;
      if (undefined !== bleedBottom) {
        num = bleedBottom;
      }
      const tmp4 = closure_25();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [sharedValue2];
        class S {
          constructor() {
            return closure_7.useReducedMotion;
          }
        }
        cResult[0] = items;
        cResult[1] = S;
        tmp5 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = thinking(576);
      const stateFromStores = thinking(504).useStateFromStores(tmp5, S);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [sharedValue3];
        class S {
          constructor() {
            return closure_7.useReducedMotion;
          }
        }
        cResult[2] = items1;
        cResult[3] = tmp12;
        let tmp10 = tmp12;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      let tmpResult = thinking(504);
      const stateFromStores1 = thinking(504).useStateFromStores(tmp9, tmp10);
      if (cResult[4] !== stateFromStores1) {
        const isThemeDarkResult = tmp(5013).isThemeDark(stateFromStores1);
        class S {
          constructor() {
            return closure_7.useReducedMotion;
          }
        }
        cResult[5] = isThemeDarkResult;
        let tmp14 = isThemeDarkResult;
        const tmpResult14 = tmp(5013);
      } else {
        tmp14 = cResult[5];
      }
      if (cResult[6] !== stateFromStores1) {
        const resolveSemanticColor = stateFromStores(587).internal.resolveSemanticColor;
        class S {
          constructor() {
            return closure_7.useReducedMotion;
          }
        }
        let obj5 = stateFromStores(683)(tmp20);
        const cssResult = stateFromStores(683)(tmp20).alpha(0).css();
        cResult[6] = stateFromStores1;
        cResult[7] = tmp20;
        cResult[8] = tmp20;
        cResult[9] = cssResult;
        let tmp18 = cssResult;
        let tmp17 = tmp20;
        let tmp16 = tmp20;
        const alphaResult = stateFromStores(683)(tmp20).alpha(0);
      } else {
        tmp16 = cResult[7];
        tmp17 = cResult[8];
        tmp18 = cResult[9];
      }
      if (cResult[10] === tmp16) {
        if (cResult[11] === tmp17) {
          if (cResult[12] === tmp18) {
            let tmp22 = cResult[13];
          }
          if (cResult[14] !== tmp14) {
            let BG_GRADIENT_CHROMA_GLOW_3 = stateFromStores(587).unsafe_rawColors;
            if (tmp14) {
              ({ BG_GRADIENT_MIDNIGHT_BLURPLE_1, BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2 } =
                BG_GRADIENT_CHROMA_GLOW_3);
              class S {
                constructor() {
                  return closure_7.useReducedMotion;
                }
              }
              const items2 = [
                BG_GRADIENT_MIDNIGHT_BLURPLE_1,
                BG_GRADIENT_CHROMA_GLOW_3.BG_GRADIENT_MIDNIGHT_BLURPLE_2,
                BG_GRADIENT_MIDNIGHT_BLURPLE_1,
              ];
              tmp27[0] = items2;
              const items3 = [BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2, , ,];
              BG_GRADIENT_CHROMA_GLOW_3 = BG_GRADIENT_CHROMA_GLOW_3.BG_GRADIENT_CHROMA_GLOW_3;
              items3[2] = BG_GRADIENT_CHROMA_GLOW_3;
              items3[3] = BG_GRADIENT_CHROMA_GLOW_2;
              items3[4] = BG_GRADIENT_CHROMA_GLOW_1;
              tmp27[1] = items3;
              let obj2 = tmp27;
            } else {
              ({ ILLO_PURPLE_30, ILLO_PURPLE_40 } = BG_GRADIENT_CHROMA_GLOW_3);
              class S {
                constructor() {
                  return closure_7.useReducedMotion;
                }
              }
              const tmp25Result = tmp25(683);
              const hexResult = tmp25(683).hsl(184, 0.8, 0.6).hex();
              const ILLO_PURPLE_402 = BG_GRADIENT_CHROMA_GLOW_3.ILLO_PURPLE_40;
              obj2 = { base: null, chroma: null };
              const items4 = [ILLO_PURPLE_30, ILLO_PURPLE_40, ILLO_PURPLE_30];
              obj2.base = items4;
              const items5 = [
                hexResult,
                ILLO_PURPLE_402,
                BG_GRADIENT_CHROMA_GLOW_3.ILLO_PINK_40,
                ILLO_PURPLE_402,
                hexResult,
              ];
              obj2.chroma = items5;
              const hslResult = tmp25(683).hsl(184, 0.8, 0.6);
            }
            class S {
              constructor() {
                return closure_7.useReducedMotion;
              }
            }
            cResult[14] = tmp14;
            cResult[15] = obj2;
            tmp25 = stateFromStores;
          } else {
            let num14 = 0.2;
            if (tmp14) {
              num14 = 0.3;
            }
            class S {
              constructor() {
                return closure_7.useReducedMotion;
              }
            }
            const tmp30 = width(noop.useState(0), 2);
            width = tmp30[0];
            noop = tmp30[1];
            const _Symbol = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              let fn = function $(nativeEvent) {
                closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
                closure_4((arg0) => {
                  let tmp = closure_0;
                  if (arg0 === closure_0) {
                    tmp = arg0;
                  }
                  return tmp;
                });
              };
              cResult[16] = fn;
              class S {
                constructor() {
                  return closure_7.useReducedMotion;
                }
              }
            } else {
              const tmp32 = cResult[16];
            }
            let num17 = 0;
            if (thinking) {
              num17 = 1;
            }
            const sharedValue = tmp(5086).useSharedValue(num17);
            const tmpResult15 = tmp(5086);
            let num18 = 0;
            if (thinking) {
              num18 = 1;
            }
            const sharedValue1 = tmp(5086).useSharedValue(num18);
            const tmpResult16 = tmp(5086);
            let num19 = 0;
            if (thinking) {
              num19 = v500;
            }
            sharedValue2 = tmp(5086).useSharedValue(num19);
            const tmpResult17 = tmp(5086);
            sharedValue3 = tmp(5086).useSharedValue(0);
            const tmpResult18 = tmp(5086);
            const sharedValue4 = tmp(5086).useSharedValue(0);
            const tmpResult19 = tmp(5086);
            const sharedValue5 = tmp(5086).useSharedValue(0);
            if (cResult[17] === sharedValue1) {
              if (cResult[18] === sharedValue2) {
                if (cResult[19] === sharedValue) {
                  if (cResult[20] === thinking) {
                    let tmp39 = cResult[21];
                    let tmp40 = cResult[22];
                  }
                  const effect = obj10.useEffect(tmp39, tmp40);
                  if (cResult[23] === sharedValue4) {
                    if (cResult[24] === sharedValue5) {
                      if (cResult[25] === stateFromStores) {
                        if (cResult[26] === thinking) {
                          let tmp42 = cResult[27];
                          let tmp43 = cResult[28];
                        }
                        const effect1 = obj10.useEffect(tmp42, tmp43);
                        if (cResult[29] === sharedValue3) {
                          if (cResult[30] === stateFromStores) {
                            if (cResult[31] === thinking) {
                              let tmp46 = cResult[32];
                              let tmp47 = cResult[33];
                            }
                            const effect2 = obj10.useEffect(tmp46, tmp47);
                            class Ae {
                              constructor() {
                                value = closure_5.get();
                                value1 = closure_8.get();
                                if (typeof pulseAt === "function") {
                                  tmp3 = closure_17;
                                  num = 1;
                                  num2 = 2;
                                  num3 = 1;
                                  num4 = 1;
                                  if (1 < closure_17.length) {
                                    arr = closure_17;
                                    tmp4 = closure_3;
                                    tmp5 = closure_3(closure_17[num3], 2);
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
                                  obj1.translateY = (c13 * (1 - result)) / 2;
                                  items = [,];
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
                            Ae.__closure = obj3;
                            Ae.__workletHash = 14122773184727;
                            Ae.__initData = __initData;
                            const animatedStyle = tmp(5086).useAnimatedStyle(Ae);
                            const tmpResult21 = tmp(5086);
                            function ye() {
                              const obj = { opacity: (1 - sharedValue1.get()) * dependencyMap, transform: null };
                              items = [{ translateX: -sharedValue4.get() * first }];
                              obj.transform = items;
                              return obj;
                            }
                            let obj4 = { chromaMix: sharedValue1, layerAlpha: num14, driftBase: sharedValue4, width };
                            ye.__closure = obj4;
                            ye.__workletHash = 11778214036579;
                            ye.__initData = __initData2;
                            const animatedStyle1 = tmp(5086).useAnimatedStyle(ye);
                            const tmpResult22 = tmp(5086);
                            class Ee {
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
                            Ee.__closure = obj6;
                            Ee.__workletHash = 12832282995257;
                            Ee.__initData = __initData3;
                            const animatedStyle2 = tmp(5086).useAnimatedStyle(Ee);
                            const tmpResult23 = tmp(5086);
                            class Se {
                              constructor() {
                                if (closure_12) {
                                  tmp2 = c13;
                                  tmp3 = closure_5;
                                  tmp5 = pulseAt;
                                  arr = closure_8;
                                  get = closure_8.get;
                                  result = c13 * closure_5.get();
                                  value = get();
                                  if (typeof pulseAt === "function") {
                                    tmp7 = closure_17;
                                    num = 1;
                                    num2 = 2;
                                    num3 = 1;
                                    num4 = 1;
                                    if (1 >= closure_17.length) {
                                      result1 = result * num4;
                                    } else {
                                      diff3 = closure_3;
                                      arr = closure_17;
                                      tmp9 = closure_3(closure_17[num3], num2);
                                      [tmp10, get] = tmp9;
                                      diff = num3;
                                      while (value > diff1) {
                                        sum = diff + num;
                                        num3 = sum;
                                        num4 = num;
                                      }
                                    }
                                    diff = diff - num;
                                    tmp8Result = diff3(arr[diff], num2);
                                    [tmp8, arr] = tmp8Result;
                                    diff1 = diff1 - diff3;
                                    num2 = 0;
                                    diff2 = get - arr;
                                    if (diff1 > 0) {
                                      diff3 = value - diff3;
                                      num = diff3 / diff1;
                                    }
                                    get = diff2 * num;
                                    num4 = arr + get;
                                  } else {
                                    str = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  tmp = closure_7;
                                  obj = { height: null };
                                  obj.height = closure_7.get();
                                  return obj;
                                }
                                return;
                              }
                            }
                            let obj7 = {
                              ANDROID,
                              BAND_HEIGHT: v500,
                              lift: sharedValue,
                              pulseAt,
                              pulse: sharedValue3,
                              ditherHeight: sharedValue2,
                            };
                            Se.__closure = obj7;
                            Se.__workletHash = 9289670122768;
                            Se.__initData = __initData4;
                            const animatedStyle3 = tmp(5086).useAnimatedStyle(Se);
                            if (cResult[34] !== tmp4.fill) {
                              let obj8 = { style: null, colors: null, locations: null, start: null, end: null };
                              class Ae {
                                constructor() {
                                  value = closure_5.get();
                                  value1 = closure_8.get();
                                  if (typeof pulseAt === "function") {
                                    tmp3 = closure_17;
                                    num = 1;
                                    num2 = 2;
                                    num3 = 1;
                                    num4 = 1;
                                    if (1 < closure_17.length) {
                                      arr = closure_17;
                                      tmp4 = closure_3;
                                      tmp5 = closure_3(closure_17[num3], 2);
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
                                    obj1.translateY = (c13 * (1 - result)) / 2;
                                    items = [,];
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
                              const tmp68 = sharedValue4(stateFromStores(5295), obj8);
                              cResult[34] = tmp4.fill;
                              cResult[35] = tmp68;
                              let tmp61 = tmp68;
                            } else {
                              tmp61 = cResult[35];
                            }
                            if (cResult[36] === animatedStyle1) {
                              if (cResult[37] === tmp4.sweep) {
                                let tmp69 = cResult[38];
                              }
                              if (cResult[39] === tmp24.base) {
                                if (cResult[40] === tmp4.fill) {
                                  let tmp70 = cResult[41];
                                }
                                if (cResult[42] === tmp69) {
                                  if (cResult[43] === tmp70) {
                                    let tmp75 = cResult[44];
                                  }
                                  if (cResult[45] === animatedStyle2) {
                                    if (cResult[46] === tmp4.sweep) {
                                      let tmp78 = cResult[47];
                                    }
                                    if (cResult[48] === tmp24.chroma) {
                                      if (cResult[49] === tmp4.fill) {
                                        let tmp79 = cResult[50];
                                      }
                                      if (cResult[51] === tmp78) {
                                        if (cResult[52] === tmp79) {
                                          let tmp84 = cResult[53];
                                        }
                                        if (cResult[54] === tmp75) {
                                          if (cResult[55] === tmp84) {
                                            let tmp87 = cResult[56];
                                          }
                                          const tmp90 = tmp14 ? c15 : c16;
                                          class Ae {
                                            constructor() {
                                              value = closure_5.get();
                                              value1 = closure_8.get();
                                              if (typeof pulseAt === "function") {
                                                tmp3 = closure_17;
                                                num = 1;
                                                num2 = 2;
                                                num3 = 1;
                                                num4 = 1;
                                                if (1 < closure_17.length) {
                                                  arr = closure_17;
                                                  tmp4 = closure_3;
                                                  tmp5 = closure_3(closure_17[num3], 2);
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
                                                obj1.translateY = (c13 * (1 - result)) / 2;
                                                items = [,];
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
                                          if (cResult[57] === tmp90) {
                                            if (cResult[58] === num64) {
                                              if (cResult[59] === thinking) {
                                                if (cResult[60] === width) {
                                                  let tmp91 = cResult[61];
                                                }
                                                if (cResult[62] === tmp4.ditherField) {
                                                  if (cResult[63] === tmp91) {
                                                    let tmp95 = cResult[64];
                                                  }
                                                  if (cResult[65] !== num) {
                                                    let tmp99 = num > 0;
                                                    if (tmp99) {
                                                      const obj9 = { bottom: -num };
                                                      tmp99 = obj9;
                                                    }
                                                    class Ae {
                                                      constructor() {
                                                        value = closure_5.get();
                                                        value1 = closure_8.get();
                                                        if (typeof pulseAt === "function") {
                                                          tmp3 = closure_17;
                                                          num = 1;
                                                          num2 = 2;
                                                          num3 = 1;
                                                          num4 = 1;
                                                          if (1 < closure_17.length) {
                                                            arr = closure_17;
                                                            tmp4 = closure_3;
                                                            tmp5 = closure_3(closure_17[num3], 2);
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
                                                          obj1.translateY = (c13 * (1 - result)) / 2;
                                                          items = [,];
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
                                                    cResult[66] = tmp99;
                                                    let tmp98 = tmp99;
                                                  } else {
                                                    tmp98 = cResult[66];
                                                  }
                                                  if (cResult[67] === tmp4.root) {
                                                    if (cResult[68] === tmp98) {
                                                      let tmp100 = cResult[69];
                                                    }
                                                    if (cResult[70] === animatedStyle) {
                                                      if (cResult[71] === tmp4.band) {
                                                        let tmp102 = cResult[72];
                                                      }
                                                      if (cResult[73] === tmp61) {
                                                        if (cResult[74] === tmp87) {
                                                          if (cResult[76] === tmp102) {
                                                            if (cResult[77] === tmp103) {
                                                              let tmp107 = cResult[78];
                                                            }
                                                            if (cResult[79] === animatedStyle3) {
                                                              if (cResult[80] === tmp95) {
                                                                if (cResult[81] === tmp61) {
                                                                  if (cResult[82] === stateFromStores) {
                                                                    if (cResult[83] === tmp4.ditherClip) {
                                                                      let tmp110 = cResult[84];
                                                                    }
                                                                    if (cResult[85] === animatedStyle) {
                                                                      if (cResult[86] === tmp22) {
                                                                        if (cResult[87] === tmp4.band) {
                                                                          if (cResult[88] === tmp4.fill) {
                                                                            let tmp112 = cResult[89];
                                                                          }
                                                                          if (cResult[90] === tmp100) {
                                                                            if (cResult[91] === tmp107) {
                                                                              if (cResult[92] === tmp110) {
                                                                                if (cResult[93] === tmp112) {
                                                                                  let tmp114 = cResult[94];
                                                                                }
                                                                                return tmp114;
                                                                              }
                                                                            }
                                                                          }
                                                                          class Ae {
                                                                            constructor() {
                                                                              value = closure_5.get();
                                                                              value1 = closure_8.get();
                                                                              if (typeof pulseAt === "function") {
                                                                                tmp3 = closure_17;
                                                                                num = 1;
                                                                                num2 = 2;
                                                                                num3 = 1;
                                                                                num4 = 1;
                                                                                if (1 < closure_17.length) {
                                                                                  arr = closure_17;
                                                                                  tmp4 = closure_3;
                                                                                  tmp5 = closure_3(closure_17[num3], 2);
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
                                                                                obj1.translateY =
                                                                                  (c13 * (1 - result)) / 2;
                                                                                items = [,];
                                                                                items[0] = obj1;
                                                                                obj4 = { scaleY: null };
                                                                                obj4.scaleY = result;
                                                                                items[1] = obj4;
                                                                                obj.transform = items;
                                                                                return obj;
                                                                              } else {
                                                                                str = "Trying to call a non-function";
                                                                                throw new TypeError(
                                                                                  "Trying to call a non-function",
                                                                                );
                                                                              }
                                                                            }
                                                                          }
                                                                          const obj11 = {
                                                                            style: tmp100,
                                                                            pointerEvents: "none",
                                                                            onLayout: tmp32,
                                                                            accessibilityElementsHidden: true,
                                                                            importantForAccessibility:
                                                                              "no-hide-descendants",
                                                                            children: null,
                                                                          };
                                                                          const items6 = [tmp107, tmp110, tmp112];
                                                                          obj11.children = items6;
                                                                          const tmp116 = closure_11(
                                                                            sharedValue1,
                                                                            obj11,
                                                                          );
                                                                          cResult[90] = tmp100;
                                                                          cResult[91] = tmp107;
                                                                          cResult[92] = tmp110;
                                                                          cResult[93] = tmp112;
                                                                          cResult[94] = tmp116;
                                                                          tmp114 = tmp116;
                                                                        }
                                                                      }
                                                                    }
                                                                    class Ae {
                                                                      constructor() {
                                                                        value = closure_5.get();
                                                                        value1 = closure_8.get();
                                                                        if (typeof pulseAt === "function") {
                                                                          tmp3 = closure_17;
                                                                          num = 1;
                                                                          num2 = 2;
                                                                          num3 = 1;
                                                                          num4 = 1;
                                                                          if (1 < closure_17.length) {
                                                                            arr = closure_17;
                                                                            tmp4 = closure_3;
                                                                            tmp5 = closure_3(closure_17[num3], 2);
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
                                                                          obj1.translateY = (c13 * (1 - result)) / 2;
                                                                          items = [,];
                                                                          items[0] = obj1;
                                                                          obj4 = { scaleY: null };
                                                                          obj4.scaleY = result;
                                                                          items[1] = obj4;
                                                                          obj.transform = items;
                                                                          return obj;
                                                                        } else {
                                                                          str = "Trying to call a non-function";
                                                                          throw new TypeError(
                                                                            "Trying to call a non-function",
                                                                          );
                                                                        }
                                                                      }
                                                                    }
                                                                    cResult[85] = animatedStyle;
                                                                    cResult[86] = tmp22;
                                                                    cResult[87] = tmp4.band;
                                                                    cResult[88] = tmp4.fill;
                                                                    cResult[89] = null;
                                                                    tmp112 = tmp113;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            class Ae {
                                                              constructor() {
                                                                value = closure_5.get();
                                                                value1 = closure_8.get();
                                                                if (typeof pulseAt === "function") {
                                                                  tmp3 = closure_17;
                                                                  num = 1;
                                                                  num2 = 2;
                                                                  num3 = 1;
                                                                  num4 = 1;
                                                                  if (1 < closure_17.length) {
                                                                    arr = closure_17;
                                                                    tmp4 = closure_3;
                                                                    tmp5 = closure_3(closure_17[num3], 2);
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
                                                                  obj1.translateY = (c13 * (1 - result)) / 2;
                                                                  items = [,];
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
                                                            cResult[79] = animatedStyle3;
                                                            cResult[80] = tmp95;
                                                            cResult[81] = tmp61;
                                                            cResult[82] = stateFromStores;
                                                            cResult[83] = tmp4.ditherClip;
                                                            cResult[84] = null;
                                                            tmp110 = tmp111;
                                                          }
                                                          class Ae {
                                                            constructor() {
                                                              value = closure_5.get();
                                                              value1 = closure_8.get();
                                                              if (typeof pulseAt === "function") {
                                                                tmp3 = closure_17;
                                                                num = 1;
                                                                num2 = 2;
                                                                num3 = 1;
                                                                num4 = 1;
                                                                if (1 < closure_17.length) {
                                                                  arr = closure_17;
                                                                  tmp4 = closure_3;
                                                                  tmp5 = closure_3(closure_17[num3], 2);
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
                                                                obj1.translateY = (c13 * (1 - result)) / 2;
                                                                items = [,];
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
                                                          const obj12 = { style: tmp102, children: cResult[75] };
                                                          const tmp109 = sharedValue4(
                                                            stateFromStores(5086).View,
                                                            obj12,
                                                          );
                                                          cResult[76] = tmp102;
                                                          cResult[77] = cResult[75];
                                                          cResult[78] = tmp109;
                                                          tmp107 = tmp109;
                                                        }
                                                      }
                                                      class Ae {
                                                        constructor() {
                                                          value = closure_5.get();
                                                          value1 = closure_8.get();
                                                          if (typeof pulseAt === "function") {
                                                            tmp3 = closure_17;
                                                            num = 1;
                                                            num2 = 2;
                                                            num3 = 1;
                                                            num4 = 1;
                                                            if (1 < closure_17.length) {
                                                              arr = closure_17;
                                                              tmp4 = closure_3;
                                                              tmp5 = closure_3(closure_17[num3], 2);
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
                                                            obj1.translateY = (c13 * (1 - result)) / 2;
                                                            items = [,];
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
                                                      cResult[73] = tmp61;
                                                      cResult[74] = tmp87;
                                                      cResult[75] = tmp105;
                                                    }
                                                    const items7 = [,];
                                                    class Ae {
                                                      constructor() {
                                                        value = closure_5.get();
                                                        value1 = closure_8.get();
                                                        if (typeof pulseAt === "function") {
                                                          tmp3 = closure_17;
                                                          num = 1;
                                                          num2 = 2;
                                                          num3 = 1;
                                                          num4 = 1;
                                                          if (1 < closure_17.length) {
                                                            arr = closure_17;
                                                            tmp4 = closure_3;
                                                            tmp5 = closure_3(closure_17[num3], 2);
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
                                                          obj1.translateY = (c13 * (1 - result)) / 2;
                                                          items = [,];
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
                                                    cResult[70] = animatedStyle;
                                                    cResult[71] = tmp4.band;
                                                    cResult[72] = items7;
                                                    tmp102 = items7;
                                                  }
                                                  class Ae {
                                                    constructor() {
                                                      value = closure_5.get();
                                                      value1 = closure_8.get();
                                                      if (typeof pulseAt === "function") {
                                                        tmp3 = closure_17;
                                                        num = 1;
                                                        num2 = 2;
                                                        num3 = 1;
                                                        num4 = 1;
                                                        if (1 < closure_17.length) {
                                                          arr = closure_17;
                                                          tmp4 = closure_3;
                                                          tmp5 = closure_3(closure_17[num3], 2);
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
                                                        obj1.translateY = (c13 * (1 - result)) / 2;
                                                        items = [,];
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
                                                  tmp101[0] = tmp4.root;
                                                  tmp101[1] = tmp98;
                                                  cResult[67] = tmp4.root;
                                                  cResult[68] = tmp98;
                                                  cResult[69] = tmp101;
                                                  tmp100 = tmp101;
                                                }
                                                class Ae {
                                                  constructor() {
                                                    value = closure_5.get();
                                                    value1 = closure_8.get();
                                                    if (typeof pulseAt === "function") {
                                                      tmp3 = closure_17;
                                                      num = 1;
                                                      num2 = 2;
                                                      num3 = 1;
                                                      num4 = 1;
                                                      if (1 < closure_17.length) {
                                                        arr = closure_17;
                                                        tmp4 = closure_3;
                                                        tmp5 = closure_3(closure_17[num3], 2);
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
                                                      obj1.translateY = (c13 * (1 - result)) / 2;
                                                      items = [,];
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
                                                const obj13 = { style: tmp4.ditherField, children: tmp91 };
                                                const tmp97 = sharedValue4(sharedValue1, obj13);
                                                cResult[62] = tmp4.ditherField;
                                                cResult[63] = tmp91;
                                                cResult[64] = tmp97;
                                                tmp95 = tmp97;
                                              }
                                            }
                                          }
                                          const size = {
                                            width,
                                            height: v500,
                                            thinking,
                                            fill: tmp90,
                                            fillOpacity: 0.16,
                                          };
                                          const tmp94 = sharedValue4(stateFromStores(12418), size);
                                          cResult[57] = tmp90;
                                          cResult[58] = 0.16;
                                          cResult[59] = thinking;
                                          cResult[60] = width;
                                          cResult[61] = tmp94;
                                          tmp91 = tmp94;
                                        }
                                        class Ae {
                                          constructor() {
                                            value = closure_5.get();
                                            value1 = closure_8.get();
                                            if (typeof pulseAt === "function") {
                                              tmp3 = closure_17;
                                              num = 1;
                                              num2 = 2;
                                              num3 = 1;
                                              num4 = 1;
                                              if (1 < closure_17.length) {
                                                arr = closure_17;
                                                tmp4 = closure_3;
                                                tmp5 = closure_3(closure_17[num3], 2);
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
                                              obj1.translateY = (c13 * (1 - result)) / 2;
                                              items = [,];
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
                                        const items8 = [tmp75, tmp84];
                                        obj14.children = items8;
                                        const tmp89 = closure_11(sharedValue5, obj14);
                                        cResult[54] = tmp75;
                                        cResult[55] = tmp84;
                                        cResult[56] = tmp89;
                                        tmp87 = tmp89;
                                      }
                                      class Ae {
                                        constructor() {
                                          value = closure_5.get();
                                          value1 = closure_8.get();
                                          if (typeof pulseAt === "function") {
                                            tmp3 = closure_17;
                                            num = 1;
                                            num2 = 2;
                                            num3 = 1;
                                            num4 = 1;
                                            if (1 < closure_17.length) {
                                              arr = closure_17;
                                              tmp4 = closure_3;
                                              tmp5 = closure_3(closure_17[num3], 2);
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
                                            obj1.translateY = (c13 * (1 - result)) / 2;
                                            items = [,];
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
                                      const obj15 = { style: tmp78, children: tmp79 };
                                      const tmp86 = sharedValue4(stateFromStores(5086).View, obj15);
                                      cResult[51] = tmp78;
                                      cResult[52] = tmp79;
                                      cResult[53] = tmp86;
                                      tmp84 = tmp86;
                                    }
                                    class Ae {
                                      constructor() {
                                        value = closure_5.get();
                                        value1 = closure_8.get();
                                        if (typeof pulseAt === "function") {
                                          tmp3 = closure_17;
                                          num = 1;
                                          num2 = 2;
                                          num3 = 1;
                                          num4 = 1;
                                          if (1 < closure_17.length) {
                                            arr = closure_17;
                                            tmp4 = closure_3;
                                            tmp5 = closure_3(closure_17[num3], 2);
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
                                          obj1.translateY = (c13 * (1 - result)) / 2;
                                          items = [,];
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
                                    const obj16 = { style: tmp4.fill, colors: tmp24.chroma, start: start2, end: end2 };
                                    const tmp83 = sharedValue4(stateFromStores(5295), obj16);
                                    cResult[48] = tmp24.chroma;
                                    cResult[49] = tmp4.fill;
                                    cResult[50] = tmp83;
                                    tmp79 = tmp83;
                                  }
                                  const items9 = [,];
                                  class Ae {
                                    constructor() {
                                      value = closure_5.get();
                                      value1 = closure_8.get();
                                      if (typeof pulseAt === "function") {
                                        tmp3 = closure_17;
                                        num = 1;
                                        num2 = 2;
                                        num3 = 1;
                                        num4 = 1;
                                        if (1 < closure_17.length) {
                                          arr = closure_17;
                                          tmp4 = closure_3;
                                          tmp5 = closure_3(closure_17[num3], 2);
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
                                        obj1.translateY = (c13 * (1 - result)) / 2;
                                        items = [,];
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
                                  cResult[45] = animatedStyle2;
                                  cResult[46] = tmp4.sweep;
                                  cResult[47] = items9;
                                  tmp78 = items9;
                                }
                                class Ae {
                                  constructor() {
                                    value = closure_5.get();
                                    value1 = closure_8.get();
                                    if (typeof pulseAt === "function") {
                                      tmp3 = closure_17;
                                      num = 1;
                                      num2 = 2;
                                      num3 = 1;
                                      num4 = 1;
                                      if (1 < closure_17.length) {
                                        arr = closure_17;
                                        tmp4 = closure_3;
                                        tmp5 = closure_3(closure_17[num3], 2);
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
                                      obj1.translateY = (c13 * (1 - result)) / 2;
                                      items = [,];
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
                                const obj17 = { style: tmp69, children: tmp70 };
                                const tmp77 = sharedValue4(stateFromStores(5086).View, obj17);
                                cResult[42] = tmp69;
                                cResult[43] = tmp70;
                                cResult[44] = tmp77;
                                tmp75 = tmp77;
                              }
                              class Ae {
                                constructor() {
                                  value = closure_5.get();
                                  value1 = closure_8.get();
                                  if (typeof pulseAt === "function") {
                                    tmp3 = closure_17;
                                    num = 1;
                                    num2 = 2;
                                    num3 = 1;
                                    num4 = 1;
                                    if (1 < closure_17.length) {
                                      arr = closure_17;
                                      tmp4 = closure_3;
                                      tmp5 = closure_3(closure_17[num3], 2);
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
                                    obj1.translateY = (c13 * (1 - result)) / 2;
                                    items = [,];
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
                              const obj18 = { style: tmp4.fill, colors: tmp24.base, start: start2, end: end2 };
                              const tmp74 = sharedValue4(stateFromStores(5295), obj18);
                              cResult[39] = tmp24.base;
                              cResult[40] = tmp4.fill;
                              cResult[41] = tmp74;
                              tmp70 = tmp74;
                            }
                            const items10 = [tmp4.sweep, animatedStyle1];
                            cResult[36] = animatedStyle1;
                            cResult[37] = tmp4.sweep;
                            cResult[38] = items10;
                            tmp69 = items10;
                            const tmpResult24 = tmp(5086);
                          }
                        }
                        class S {
                          constructor() {
                            return closure_7.useReducedMotion;
                          }
                        }
                        const items11 = [sharedValue3, stateFromStores, thinking];
                        cResult[29] = sharedValue3;
                        cResult[30] = stateFromStores;
                        cResult[31] = thinking;
                        cResult[32] = tmp48;
                        cResult[33] = items11;
                        tmp47 = items11;
                        tmp46 = tmp48;
                      }
                    }
                  }
                  class S {
                    constructor() {
                      return closure_7.useReducedMotion;
                    }
                  }
                  const items12 = [sharedValue4, sharedValue5, stateFromStores, thinking];
                  cResult[23] = sharedValue4;
                  cResult[24] = sharedValue5;
                  cResult[25] = stateFromStores;
                  cResult[26] = thinking;
                  cResult[27] = tmp44;
                  cResult[28] = items12;
                  tmp43 = items12;
                  tmp42 = tmp44;
                }
              }
            }
            function re() {
              const Easing = ReanimatedRexport.Easing;
              const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
              let num = 0;
              if (thinking) {
                num = 1;
              }
              const result = sharedValue.set(
                timing.withTiming(num, { duration, easing: bezierResult }, "animate-always"),
              );
              const obj2 = { duration, easing: bezierResult };
              let num2 = 0;
              if (thinking) {
                num2 = 1;
              }
              const result1 = sharedValue1.set(
                timing.withTiming(num2, { duration, easing: bezierResult }, "animate-always"),
              );
              const tmpResult = timing;
              let num3 = 0;
              if (thinking) {
                num3 = c13;
              }
              const result2 = sharedValue2.set(
                timing.withTiming(num3, { duration: 400, easing: bezierResult }, "animate-always"),
              );
              const tmpResult2 = timing;
            }
            const items13 = [, sharedValue2, sharedValue, thinking];
            cResult[17] = sharedValue1;
            cResult[18] = sharedValue2;
            cResult[19] = sharedValue;
            cResult[20] = thinking;
            cResult[21] = re;
            cResult[22] = items13;
            tmp40 = items13;
            tmp39 = re;
            const tmpResult20 = tmp(5086);
          }
        }
      }
      tmp23[0] = tmp16;
      tmp23[1] = tmp17;
      tmp23[2] = tmp18;
      cResult[10] = tmp16;
      cResult[11] = tmp17;
      cResult[12] = tmp18;
      cResult[13] = tmp23;
      tmp22 = tmp23;
      const tmpResult13 = thinking(504);
    }
  : function ConjureShellGlow(thinking) {
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
      let tmp = closure_25();
      items = [sharedValue];
      const stateFromStores = thinking(stateFromStores1[12]).useStateFromStores(
        items,
        () => sharedValue.useReducedMotion,
      );
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
        items = [semanticColor, semanticColor];
        const obj = _modDef683(semanticColor);
        items[2] = _modDef683(semanticColor).alpha(0).css();
        return items;
      }, items2);
      const memo1 = num2.useMemo(() => {
        const unsafe_rawColors = nativeDefault.unsafe_rawColors;
        if (c3) {
          ({ BG_GRADIENT_MIDNIGHT_BLURPLE_1, BG_GRADIENT_CHROMA_GLOW_1, BG_GRADIENT_CHROMA_GLOW_2 } = unsafe_rawColors);
          const obj = { base: null, chroma: null };
          items = [
            BG_GRADIENT_MIDNIGHT_BLURPLE_1,
            unsafe_rawColors.BG_GRADIENT_MIDNIGHT_BLURPLE_2,
            BG_GRADIENT_MIDNIGHT_BLURPLE_1,
          ];
          obj.base = items;
          const items1 = [
            BG_GRADIENT_CHROMA_GLOW_1,
            BG_GRADIENT_CHROMA_GLOW_2,
            unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_3,
            BG_GRADIENT_CHROMA_GLOW_2,
            BG_GRADIENT_CHROMA_GLOW_1,
          ];
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
      let num3 = 0;
      if (thinking) {
        num3 = 1;
      }
      sharedValue = thinking(stateFromStores1[14]).useSharedValue(num3);
      const tmp2Result = thinking(stateFromStores1[14]);
      let num4 = 0;
      if (thinking) {
        num4 = 1;
      }
      sharedValue1 = thinking(stateFromStores1[14]).useSharedValue(num4);
      const tmp2Result10 = thinking(stateFromStores1[14]);
      let num5 = 0;
      if (thinking) {
        num5 = v500;
      }
      sharedValue2 = thinking(stateFromStores1[14]).useSharedValue(num5);
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
        let num = 0;
        if (thinking) {
          num = 1;
        }
        const result = sharedValue.set(timing.withTiming(num, { duration, easing: bezierResult }, "animate-always"));
        const obj2 = { duration, easing: bezierResult };
        num2 = 0;
        if (thinking) {
          num2 = 1;
        }
        const result1 = sharedValue1.set(timing.withTiming(num2, { duration, easing: bezierResult }, "animate-always"));
        const tmpResult = timing;
        let num3 = 0;
        if (thinking) {
          num3 = c13;
        }
        const result2 = sharedValue2.set(
          timing.withTiming(num3, { duration: 400, easing: bezierResult }, "animate-always"),
        );
        const tmpResult2 = timing;
      }, items4);
      const items5 = [sharedValue4, sharedValue5, stateFromStores, thinking];
      const effect1 = obj4.useEffect(() => {
        if (stateFromStores) {
          ReanimatedRexport.cancelAnimation(sharedValue4);
          ReanimatedRexport.cancelAnimation(sharedValue5);
          const result = sharedValue4.set(0);
          const result1 = sharedValue5.set(0);
        } else if (thinking) {
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
      class Z {
        constructor() {
          value = closure_7.get();
          value1 = closure_10.get();
          if (typeof pulseAt === "function") {
            tmp3 = closure_17;
            num = 1;
            num2 = 2;
            num3 = 1;
            num4 = 1;
            if (1 < closure_17.length) {
              arr = closure_17;
              tmp4 = closure_3;
              tmp5 = closure_3(closure_17[num3], 2);
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
            obj1.translateY = (c13 * (1 - result)) / 2;
            items = [,];
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
      Z.__closure = { lift: sharedValue, pulseAt, pulse: sharedValue3, BAND_HEIGHT: v500 };
      Z.__workletHash = 9452161703379;
      Z.__initData = __initData5;
      const animatedStyle = thinking(stateFromStores1[14]).useAnimatedStyle(Z);
      let obj5 = { lift: sharedValue, pulseAt, pulse: sharedValue3, BAND_HEIGHT: v500 };
      const tmp2Result15 = thinking(stateFromStores1[14]);
      let fn = function $() {
        const obj = { opacity: (1 - sharedValue1.get()) * num2, transform: null };
        items = [{ translateX: -sharedValue4.get() * first }];
        obj.transform = items;
        return obj;
      };
      fn.__closure = { chromaMix: sharedValue1, layerAlpha: num2, driftBase: sharedValue4, width };
      fn.__workletHash = 16448825517927;
      fn.__initData = __initData6;
      const animatedStyle1 = thinking(stateFromStores1[14]).useAnimatedStyle(fn);
      const tmp2Result16 = thinking(stateFromStores1[14]);
      function ee() {
        const obj = { opacity: sharedValue1.get() * num2, transform: null };
        items = [{ translateX: -sharedValue5.get() * first }];
        obj.transform = items;
        return obj;
      }
      ee.__closure = { chromaMix: sharedValue1, layerAlpha: num2, driftChroma: sharedValue5, width };
      ee.__workletHash = 17460334938933;
      ee.__initData = __initData7;
      const animatedStyle2 = thinking(stateFromStores1[14]).useAnimatedStyle(ee);
      const tmp2Result17 = thinking(stateFromStores1[14]);
      function te() {
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
      te.__closure = {
        ANDROID: sharedValue5,
        BAND_HEIGHT: v500,
        lift: sharedValue,
        pulseAt,
        pulse: sharedValue3,
        ditherHeight: sharedValue2,
      };
      te.__workletHash = 14002841141788;
      te.__initData = __initData8;
      const animatedStyle3 = thinking(stateFromStores1[14]).useAnimatedStyle(te);
      const tmp31 = sharedValue2(stateFromStores(stateFromStores1[16]), {
        style: tmp.fill,
        colors,
        locations,
        start,
        end,
      });
      let obj8 = { children: null };
      const obj9 = {
        style: null,
        children: sharedValue2(stateFromStores(stateFromStores1[16]), {
          style: tmp.fill,
          colors: memo1.base,
          start: start2,
          end: end2,
        }),
      };
      const items7 = [tmp.sweep, animatedStyle1];
      obj9.style = items7;
      const items8 = [sharedValue2(stateFromStores(stateFromStores1[14]).View, obj9)];
      const obj11 = {
        style: null,
        children: sharedValue2(stateFromStores(stateFromStores1[16]), {
          style: tmp.fill,
          colors: memo1.chroma,
          start: start2,
          end: end2,
        }),
      };
      const items9 = [tmp.sweep, animatedStyle2];
      obj11.style = items9;
      items8[1] = sharedValue2(stateFromStores(stateFromStores1[14]).View, obj11);
      obj8.children = items8;
      const tmp33 = sharedValue4(sharedValue3, obj8);
      const obj13 = { style: tmp.ditherField, children: null };
      const size = { width, height: v500, thinking, fill: isThemeDarkResult ? c15 : c16, fillOpacity: null };
      let num6 = 0.16;
      const obj10 = { style: tmp.fill, colors: memo1.base, start: start2, end: end2 };
      const obj12 = { style: tmp.fill, colors: memo1.chroma, start: start2, end: end2 };
      let obj6 = {
        ANDROID: sharedValue5,
        BAND_HEIGHT: v500,
        lift: sharedValue,
        pulseAt,
        pulse: sharedValue3,
        ditherHeight: sharedValue2,
      };
      let obj7 = { style: tmp.fill, colors, locations, start, end };
      const tmp2Result18 = thinking(stateFromStores1[14]);
      const tmp32 = sharedValue4;
      if (isThemeDarkResult) {
        num6 = 0.18;
      }
      size.fillOpacity = num6;
      obj13.children = sharedValue2(stateFromStores(stateFromStores1[17]), size);
      const tmp26Result = sharedValue2(closure_6, obj13);
      const items10 = [tmp.root];
      let tmp37 = num > 0;
      if (tmp37) {
        const obj14 = { bottom: -num };
        tmp37 = obj14;
      }
      const obj15 = {
        style: items10,
        pointerEvents: "none",
        onLayout: callback,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
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
      const items12 = [sharedValue2(stateFromStores(stateFromStores1[14]).View, obj16), ,];
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
    };
