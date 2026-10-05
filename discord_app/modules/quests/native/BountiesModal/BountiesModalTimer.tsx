// === Module 14855: BountiesModalTimer ===

// Module 14855 (BountiesModalTimer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import ButtonConstants from "ButtonConstants" /* 5600 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;
let _require, importDefault, set, set2;

let hasOwnProperty;
let items;
let metroRequire;
let num;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = "#2ECC71";
let result = (ButtonConstants.SMALL_BUTTON_HEIGHT - 4) / 2;
const metroImportAll = result;
let closure_9 = 2 * Math.PI * result;
const Easing = ReanimatedRexport2.Easing;
const easing = Easing.bezier(0.15, 0.21, 0.58, 1);
const Easing2 = ReanimatedRexport2.Easing;
const easing2 = Easing2.bezier(0.61, 0, 0.58, 1);
const Easing3 = ReanimatedRexport2.Easing;
const easing3 = Easing3.bezier(0.42, 0, 0.58, 1);
let closure_13 = ReanimatedRexport.createAnimatedComponent(inlineStyles.Circle);
let createStyles = createStyles_mod;
let obj = { progress: size, ring: obj2, trackPath: obj3, countdownText: obj4, checkmarkLayer: { position: "absolute", inset: 6, alignItems: "center", justifyContent: "center" }, checkmarkBackground: size1, checkmarkIcon: { width: 20, height: 20 } };
size = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, width: ButtonConstants.SMALL_BUTTON_HEIGHT, height: ButtonConstants.SMALL_BUTTON_HEIGHT };
createStyles = createStyles.createStyles;
obj2 = { position: "absolute", transform: items };
items = [{ rotate: "-90deg" }];
obj3 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj4 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, lineHeight: num };
num = undefined;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
size1 = { width: 20, height: 20, backgroundColor: "#2ECC71", borderRadius: nativeDefault.radii.round };
let closure_14 = createStyles(obj);
const __initData = { code: "function BountiesModalTimerTsx1(){const{PROGRESS_CIRCUMFERENCE,animatedProgress}=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE-PROGRESS_CIRCUMFERENCE*animatedProgress.get()};}" };
const __initData2 = { code: "function BountiesModalTimerTsx2(){const{checkmarkBackgroundScale}=this.__closure;return{transform:[{scale:checkmarkBackgroundScale.get()}]};}" };
const __initData3 = { code: "function BountiesModalTimerTsx3(){const{checkmarkScale}=this.__closure;return{transform:[{scale:checkmarkScale.get()}]};}" };
const __initData4 = { code: "function BountiesModalTimerTsx4(){const{PROGRESS_CIRCUMFERENCE,animatedProgress}=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE-PROGRESS_CIRCUMFERENCE*animatedProgress.get()};}" };
const __initData5 = { code: "function BountiesModalTimerTsx5(){const{checkmarkBackgroundScale}=this.__closure;return{transform:[{scale:checkmarkBackgroundScale.get()}]};}" };
const __initData6 = { code: "function BountiesModalTimerTsx6(){const{checkmarkScale}=this.__closure;return{transform:[{scale:checkmarkScale.get()}]};}" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let c0;
  let closure_1;
  let isCompleted;
  let items2;
  let num2;
  let remainingSeconds;
  let sharedValue;
  let totalSeconds;
  let obj = require("react");
  const cResult = obj.c(49);
  ({ isCompleted, totalSeconds, remainingSeconds } = arg0);
  const tmp4 = closure_14();
  let tmp5 = isCompleted;
  if (!tmp5) {
    tmp5 = remainingSeconds <= 0;
  }
  importDefault = tmp5;
  const bound = Math.max(1, Math.ceil(remainingSeconds));
  if (cResult[0] === isCompleted) {
    if (cResult[1] === remainingSeconds) {
      if (cResult[2] === totalSeconds) {
        _require = cResult[3];
      }
      const tmpResult = require("ReanimatedRexport");
      sharedValue = tmpResult.useSharedValue(tmp7);
      const tmpResult6 = require("ReanimatedRexport");
      const sharedValue1 = tmpResult6.useSharedValue(0);
      const tmpResult7 = require("ReanimatedRexport");
      const sharedValue2 = tmpResult7.useSharedValue(0);
      if (cResult[4] === sharedValue) {
        let tmp13;
        if (cResult[5] === tmp7) {
          tmp13 = cResult[6];
        }
        if (cResult[7] === sharedValue) {
          let tmp14;
          if (cResult[8] === tmp7) {
            tmp14 = cResult[9];
          }
          let obj5 = sharedValue1;
          const effect = sharedValue1.useEffect(tmp13, tmp14);
          const ref = sharedValue1.useRef(false);
          if (cResult[10] === sharedValue1) {
            if (cResult[11] === sharedValue2) {
              let tmp16;
              let tmp17;
              let tmp27;
              let tmp30;
              if (cResult[12] === tmp5) {
                tmp16 = cResult[13];
                tmp17 = cResult[14];
              }
              const effect1 = obj5.useEffect(tmp16, tmp17);
              require("ReanimatedRexport");
              const fn = function p() {
                const obj = { strokeDashoffset: closure_9 - closure_9 * sharedValue.get() };
                return obj;
              };
              let obj2 = { PROGRESS_CIRCUMFERENCE, animatedProgress: null };
              class G {
                constructor() {
                  const current = ref.current;
                  ref.current = true;
                  if (closure_1) {
                    if (current) {
                      const withSequence = ReanimatedRexport2.withSequence;
                      ReanimatedRexport2;
                      const obj2 = { duration: 267, easing };
                      const obj = timing;
                      const obj4 = { duration: 233, easing: easing2 };
                      const withTimingResult = obj.withTiming(1.65, obj2);
                      const obj3 = timing;
                      const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
                      set2 = sharedValue2.set;
                      const withDelay = ReanimatedRexport2.withDelay;
                      ReanimatedRexport2;
                      const withSequence2 = ReanimatedRexport2.withSequence;
                      ReanimatedRexport2;
                      const obj6 = { duration: 167, easing: easing3 };
                      const obj5 = timing;
                      const obj8 = { duration: 333, easing: easing3 };
                      const withTimingResult1 = obj5.withTiming(1.25, obj6);
                      const obj7 = timing;
                      set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
                    } else {
                      const result1 = set(1);
                      const result2 = sharedValue2.set(1);
                    }
                  } else {
                    const result3 = set(0);
                    const result4 = sharedValue2.set(0);
                  }
                  return tmp9;
                }
              }
              fn.__closure = obj2;
              fn.__workletHash = 12964700773124;
              fn.__initData = __initData;
              class I {
                constructor() {
                  set = sharedValue.set;
                  const obj = timing;
                  const result = set(obj.withTiming(c0, { duration: 500 }, "animate-always"));
                }
              }
              const fn2 = function b() {
                let items;
                const obj = { transform: items };
                items = [{ scale: sharedValue1.get() }];
                ({ scale: sharedValue1.get() });
                return obj;
              };
              let obj3 = { checkmarkBackgroundScale: sharedValue1 };
              fn2.__closure = obj3;
              fn2.__workletHash = 10834015407160;
              fn2.__initData = __initData2;
              const tmpResult9 = require("ReanimatedRexport");
              const animatedStyle = tmpResult9.useAnimatedStyle(fn2);
              const tmpResult10 = require("ReanimatedRexport");
              class F {
                constructor() {
                  let items;
                  const obj = { transform: items };
                  items = [{ scale: sharedValue2.get() }];
                  ({ scale: sharedValue2.get() });
                  return obj;
                }
              }
              let obj4 = { checkmarkScale: sharedValue2 };
              F.__closure = obj4;
              F.__workletHash = 7510845920441;
              F.__initData = __initData3;
              const animatedStyle1 = tmpResult10.useAnimatedStyle(F);
              if (cResult[15] !== tmp4.trackPath.color) {
                let obj6 = { cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, r, fill: "none", stroke: tmp4.trackPath.color, strokeWidth: 4 };
                const Circle = tmp(tmp2[5]).Circle;
                class G {
                  constructor() {
                    const current = ref.current;
                    ref.current = true;
                    if (closure_1) {
                      if (current) {
                        const withSequence = ReanimatedRexport2.withSequence;
                        ReanimatedRexport2;
                        const obj2 = { duration: 267, easing };
                        const obj = timing;
                        const obj4 = { duration: 233, easing: easing2 };
                        const withTimingResult = obj.withTiming(1.65, obj2);
                        const obj3 = timing;
                        const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
                        set2 = sharedValue2.set;
                        const withDelay = ReanimatedRexport2.withDelay;
                        ReanimatedRexport2;
                        const withSequence2 = ReanimatedRexport2.withSequence;
                        ReanimatedRexport2;
                        const obj6 = { duration: 167, easing: easing3 };
                        const obj5 = timing;
                        const obj8 = { duration: 333, easing: easing3 };
                        const withTimingResult1 = obj5.withTiming(1.25, obj6);
                        const obj7 = timing;
                        set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
                      } else {
                        const result1 = set(1);
                        const result2 = sharedValue2.set(1);
                      }
                    } else {
                      const result3 = set(0);
                      const result4 = sharedValue2.set(0);
                    }
                    return tmp9;
                  }
                }
                cResult[15] = tmp4.trackPath.color;
                const tmp29 = ref(Circle, obj6);
                class I {
                  constructor() {
                    set = sharedValue.set;
                    const obj = timing;
                    const result = set(obj.withTiming(c0, { duration: 500 }, "animate-always"));
                  }
                }
                tmp27 = tmp29;
              } else {
                tmp27 = cResult[16];
              }
              if (cResult[17] !== tmp22) {
                let obj7 = { cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, r, fill: "none", stroke, strokeWidth: 4, strokeDasharray: PROGRESS_CIRCUMFERENCE, strokeLinecap: "round", animatedProps: tmp22 };
                class G {
                  constructor() {
                    const current = ref.current;
                    ref.current = true;
                    if (closure_1) {
                      if (current) {
                        const withSequence = ReanimatedRexport2.withSequence;
                        ReanimatedRexport2;
                        const obj2 = { duration: 267, easing };
                        const obj = timing;
                        const obj4 = { duration: 233, easing: easing2 };
                        const withTimingResult = obj.withTiming(1.65, obj2);
                        const obj3 = timing;
                        const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
                        set2 = sharedValue2.set;
                        const withDelay = ReanimatedRexport2.withDelay;
                        ReanimatedRexport2;
                        const withSequence2 = ReanimatedRexport2.withSequence;
                        ReanimatedRexport2;
                        const obj6 = { duration: 167, easing: easing3 };
                        const obj5 = timing;
                        const obj8 = { duration: 333, easing: easing3 };
                        const withTimingResult1 = obj5.withTiming(1.25, obj6);
                        const obj7 = timing;
                        set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
                      } else {
                        const result1 = set(1);
                        const result2 = sharedValue2.set(1);
                      }
                    } else {
                      const result3 = set(0);
                      const result4 = sharedValue2.set(0);
                    }
                    return tmp9;
                  }
                }
                const tmp34 = ref(closure_13, obj7);
                class I {
                  constructor() {
                    set = sharedValue.set;
                    const obj = timing;
                    const result = set(obj.withTiming(c0, { duration: 500 }, "animate-always"));
                  }
                }
                cResult[17] = tmp22;
                cResult[18] = tmp34;
                tmp30 = tmp34;
              } else {
                tmp30 = cResult[18];
              }
              if (cResult[19] === tmp4.ring) {
                if (cResult[20] === tmp27) {
                  let tmp35;
                  if (cResult[21] === tmp30) {
                    tmp35 = cResult[22];
                  }
                  if (cResult[23] === tmp5) {
                    if (cResult[24] === bound) {
                      let tmp40;
                      if (cResult[25] === tmp4.countdownText) {
                        tmp40 = cResult[26];
                      }
                      if (cResult[27] === animatedStyle) {
                        let tmp43;
                        let tmp44;
                        if (cResult[28] === tmp4.checkmarkLayer) {
                          tmp43 = cResult[29];
                        }
                        if (cResult[30] !== tmp4.checkmarkBackground) {
                          let obj8 = { style: tmp4.checkmarkBackground };
                          const tmp47 = ref(sharedValue2, obj8);
                          class G {
                            constructor() {
                              const current = ref.current;
                              ref.current = true;
                              if (closure_1) {
                                if (current) {
                                  const withSequence = ReanimatedRexport2.withSequence;
                                  ReanimatedRexport2;
                                  const obj2 = { duration: 267, easing };
                                  const obj = timing;
                                  const obj4 = { duration: 233, easing: easing2 };
                                  const withTimingResult = obj.withTiming(1.65, obj2);
                                  const obj3 = timing;
                                  const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
                                  set2 = sharedValue2.set;
                                  const withDelay = ReanimatedRexport2.withDelay;
                                  ReanimatedRexport2;
                                  const withSequence2 = ReanimatedRexport2.withSequence;
                                  ReanimatedRexport2;
                                  const obj6 = { duration: 167, easing: easing3 };
                                  const obj5 = timing;
                                  const obj8 = { duration: 333, easing: easing3 };
                                  const withTimingResult1 = obj5.withTiming(1.25, obj6);
                                  const obj7 = timing;
                                  set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
                                } else {
                                  const result1 = set(1);
                                  const result2 = sharedValue2.set(1);
                                }
                              } else {
                                const result3 = set(0);
                                const result4 = sharedValue2.set(0);
                              }
                              return tmp9;
                            }
                          }
                          cResult[31] = tmp47;
                          tmp44 = tmp47;
                        } else {
                          tmp44 = cResult[31];
                        }
                        if (cResult[32] === tmp44) {
                          let tmp48;
                          if (cResult[33] === tmp43) {
                            tmp48 = cResult[34];
                          }
                          if (cResult[35] === animatedStyle1) {
                            let tmp52;
                            let tmp53;
                            if (cResult[36] === tmp4.checkmarkLayer) {
                              tmp52 = cResult[37];
                            }
                            if (cResult[38] !== tmp4.checkmarkIcon) {
                              ({ size: "custom", color: require("native").colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, style: tmp4.checkmarkIcon });
                              const CheckmarkSmallBoldIcon = tmp(tmp2[13]).CheckmarkSmallBoldIcon;
                              class G {
                                constructor() {
                                  const current = ref.current;
                                  ref.current = true;
                                  if (closure_1) {
                                    if (current) {
                                      const withSequence = ReanimatedRexport2.withSequence;
                                      ReanimatedRexport2;
                                      const obj2 = { duration: 267, easing };
                                      const obj = timing;
                                      const obj4 = { duration: 233, easing: easing2 };
                                      const withTimingResult = obj.withTiming(1.65, obj2);
                                      const obj3 = timing;
                                      const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
                                      set2 = sharedValue2.set;
                                      const withDelay = ReanimatedRexport2.withDelay;
                                      ReanimatedRexport2;
                                      const withSequence2 = ReanimatedRexport2.withSequence;
                                      ReanimatedRexport2;
                                      const obj6 = { duration: 167, easing: easing3 };
                                      const obj5 = timing;
                                      const obj8 = { duration: 333, easing: easing3 };
                                      const withTimingResult1 = obj5.withTiming(1.25, obj6);
                                      const obj7 = timing;
                                      set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
                                    } else {
                                      const result1 = set(1);
                                      const result2 = sharedValue2.set(1);
                                    }
                                  } else {
                                    const result3 = set(0);
                                    const result4 = sharedValue2.set(0);
                                  }
                                  return tmp9;
                                }
                              }
                              cResult[38] = tmp4.checkmarkIcon;
                              cResult[39] = tmp56;
                              tmp53 = tmp56;
                            } else {
                              tmp53 = cResult[39];
                            }
                            if (cResult[40] === tmp52) {
                              let tmp57;
                              if (cResult[41] === tmp53) {
                                tmp57 = cResult[42];
                              }
                              if (cResult[43] === tmp4.progress) {
                                if (cResult[44] === tmp48) {
                                  if (cResult[45] === tmp57) {
                                    if (cResult[46] === tmp35) {
                                      let tmp61;
                                      if (cResult[47] === tmp40) {
                                        tmp61 = cResult[48];
                                      }
                                      return tmp61;
                                    }
                                  }
                                }
                              }
                              const obj10 = { style: tmp4.progress, children: tmp64 };
                              class G {
                                constructor() {
                                  const current = ref.current;
                                  ref.current = true;
                                  if (closure_1) {
                                    if (current) {
                                      const withSequence = ReanimatedRexport2.withSequence;
                                      ReanimatedRexport2;
                                      const obj2 = { duration: 267, easing };
                                      const obj = timing;
                                      const obj4 = { duration: 233, easing: easing2 };
                                      const withTimingResult = obj.withTiming(1.65, obj2);
                                      const obj3 = timing;
                                      const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
                                      set2 = sharedValue2.set;
                                      const withDelay = ReanimatedRexport2.withDelay;
                                      ReanimatedRexport2;
                                      const withSequence2 = ReanimatedRexport2.withSequence;
                                      ReanimatedRexport2;
                                      const obj6 = { duration: 167, easing: easing3 };
                                      const obj5 = timing;
                                      const obj8 = { duration: 333, easing: easing3 };
                                      const withTimingResult1 = obj5.withTiming(1.25, obj6);
                                      const obj7 = timing;
                                      set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
                                    } else {
                                      const result1 = set(1);
                                      const result2 = sharedValue2.set(1);
                                    }
                                  } else {
                                    const result3 = set(0);
                                    const result4 = sharedValue2.set(0);
                                  }
                                  return tmp9;
                                }
                              }
                              tmp64[0] = tmp35;
                              tmp64[1] = tmp40;
                              tmp64[2] = tmp48;
                              tmp64[3] = tmp57;
                              const tmp65 = closure_6(sharedValue2, obj10);
                              class I {
                                constructor() {
                                  set = sharedValue.set;
                                  const obj = timing;
                                  const result = set(obj.withTiming(c0, { duration: 500 }, "animate-always"));
                                }
                              }
                              cResult[43] = tmp4.progress;
                              cResult[44] = tmp48;
                              cResult[45] = tmp57;
                              cResult[46] = tmp35;
                              cResult[47] = tmp40;
                              cResult[48] = tmp65;
                              class F {
                                constructor() {
                                  let items;
                                  const obj = { transform: items };
                                  items = [{ scale: sharedValue2.get() }];
                                  ({ scale: sharedValue2.get() });
                                  return obj;
                                }
                              }
                            }
                            const obj11 = { style: null, children: tmp53 };
                            class G {
                              constructor() {
                                const current = ref.current;
                                ref.current = true;
                                if (closure_1) {
                                  if (current) {
                                    const withSequence = ReanimatedRexport2.withSequence;
                                    ReanimatedRexport2;
                                    const obj2 = { duration: 267, easing };
                                    const obj = timing;
                                    const obj4 = { duration: 233, easing: easing2 };
                                    const withTimingResult = obj.withTiming(1.65, obj2);
                                    const obj3 = timing;
                                    const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
                                    set2 = sharedValue2.set;
                                    const withDelay = ReanimatedRexport2.withDelay;
                                    ReanimatedRexport2;
                                    const withSequence2 = ReanimatedRexport2.withSequence;
                                    ReanimatedRexport2;
                                    const obj6 = { duration: 167, easing: easing3 };
                                    const obj5 = timing;
                                    const obj8 = { duration: 333, easing: easing3 };
                                    const withTimingResult1 = obj5.withTiming(1.25, obj6);
                                    const obj7 = timing;
                                    set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
                                  } else {
                                    const result1 = set(1);
                                    const result2 = sharedValue2.set(1);
                                  }
                                } else {
                                  const result3 = set(0);
                                  const result4 = sharedValue2.set(0);
                                }
                                return tmp9;
                              }
                            }
                            const tmp60 = ref(require("ReanimatedRexport").View, obj11);
                            cResult[40] = tmp52;
                            cResult[41] = tmp53;
                            class I {
                              constructor() {
                                set = sharedValue.set;
                                const obj = timing;
                                const result = set(obj.withTiming(c0, { duration: 500 }, "animate-always"));
                              }
                            }
                            cResult[42] = tmp60;
                            tmp57 = tmp60;
                          }
                          let items = [tmp4.checkmarkLayer, animatedStyle1];
                          class G {
                            constructor() {
                              const current = ref.current;
                              ref.current = true;
                              if (closure_1) {
                                if (current) {
                                  const withSequence = ReanimatedRexport2.withSequence;
                                  ReanimatedRexport2;
                                  const obj2 = { duration: 267, easing };
                                  const obj = timing;
                                  const obj4 = { duration: 233, easing: easing2 };
                                  const withTimingResult = obj.withTiming(1.65, obj2);
                                  const obj3 = timing;
                                  const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
                                  set2 = sharedValue2.set;
                                  const withDelay = ReanimatedRexport2.withDelay;
                                  ReanimatedRexport2;
                                  const withSequence2 = ReanimatedRexport2.withSequence;
                                  ReanimatedRexport2;
                                  const obj6 = { duration: 167, easing: easing3 };
                                  const obj5 = timing;
                                  const obj8 = { duration: 333, easing: easing3 };
                                  const withTimingResult1 = obj5.withTiming(1.25, obj6);
                                  const obj7 = timing;
                                  set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
                                } else {
                                  const result1 = set(1);
                                  const result2 = sharedValue2.set(1);
                                }
                              } else {
                                const result3 = set(0);
                                const result4 = sharedValue2.set(0);
                              }
                              return tmp9;
                            }
                          }
                          cResult[36] = tmp4.checkmarkLayer;
                          cResult[37] = items;
                          tmp52 = items;
                        }
                        const obj12 = { style: null, children: tmp44 };
                        class G {
                          constructor() {
                            const current = ref.current;
                            ref.current = true;
                            if (closure_1) {
                              if (current) {
                                const withSequence = ReanimatedRexport2.withSequence;
                                ReanimatedRexport2;
                                const obj2 = { duration: 267, easing };
                                const obj = timing;
                                const obj4 = { duration: 233, easing: easing2 };
                                const withTimingResult = obj.withTiming(1.65, obj2);
                                const obj3 = timing;
                                const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
                                set2 = sharedValue2.set;
                                const withDelay = ReanimatedRexport2.withDelay;
                                ReanimatedRexport2;
                                const withSequence2 = ReanimatedRexport2.withSequence;
                                ReanimatedRexport2;
                                const obj6 = { duration: 167, easing: easing3 };
                                const obj5 = timing;
                                const obj8 = { duration: 333, easing: easing3 };
                                const withTimingResult1 = obj5.withTiming(1.25, obj6);
                                const obj7 = timing;
                                set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
                              } else {
                                const result1 = set(1);
                                const result2 = sharedValue2.set(1);
                              }
                            } else {
                              const result3 = set(0);
                              const result4 = sharedValue2.set(0);
                            }
                            return tmp9;
                          }
                        }
                        const tmp51 = ref(require("ReanimatedRexport").View, obj12);
                        cResult[32] = tmp44;
                        cResult[33] = tmp43;
                        class I {
                          constructor() {
                            set = sharedValue.set;
                            const obj = timing;
                            const result = set(obj.withTiming(c0, { duration: 500 }, "animate-always"));
                          }
                        }
                        cResult[34] = tmp51;
                        tmp48 = tmp51;
                      }
                      const items1 = [tmp4.checkmarkLayer, animatedStyle];
                      class G {
                        constructor() {
                          const current = ref.current;
                          ref.current = true;
                          if (closure_1) {
                            if (current) {
                              const withSequence = ReanimatedRexport2.withSequence;
                              ReanimatedRexport2;
                              const obj2 = { duration: 267, easing };
                              const obj = timing;
                              const obj4 = { duration: 233, easing: easing2 };
                              const withTimingResult = obj.withTiming(1.65, obj2);
                              const obj3 = timing;
                              const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
                              set2 = sharedValue2.set;
                              const withDelay = ReanimatedRexport2.withDelay;
                              ReanimatedRexport2;
                              const withSequence2 = ReanimatedRexport2.withSequence;
                              ReanimatedRexport2;
                              const obj6 = { duration: 167, easing: easing3 };
                              const obj5 = timing;
                              const obj8 = { duration: 333, easing: easing3 };
                              const withTimingResult1 = obj5.withTiming(1.25, obj6);
                              const obj7 = timing;
                              set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
                            } else {
                              const result1 = set(1);
                              const result2 = sharedValue2.set(1);
                            }
                          } else {
                            const result3 = set(0);
                            const result4 = sharedValue2.set(0);
                          }
                          return tmp9;
                        }
                      }
                      cResult[28] = tmp4.checkmarkLayer;
                      cResult[29] = items1;
                      tmp43 = items1;
                    }
                  }
                  let tmp41 = !tmp5;
                  if (tmp41) {
                    const obj13 = { variant: "text-sm/semibold", style: tmp4.countdownText, maxFontSizeMultiplier: 1, children: bound };
                    tmp41 = ref(tmp(tmp2[12]).Text, obj13);
                  }
                  cResult[23] = tmp5;
                  class G {
                    constructor() {
                      const current = ref.current;
                      ref.current = true;
                      if (closure_1) {
                        if (current) {
                          const withSequence = ReanimatedRexport2.withSequence;
                          ReanimatedRexport2;
                          const obj2 = { duration: 267, easing };
                          const obj = timing;
                          const obj4 = { duration: 233, easing: easing2 };
                          const withTimingResult = obj.withTiming(1.65, obj2);
                          const obj3 = timing;
                          const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
                          set2 = sharedValue2.set;
                          const withDelay = ReanimatedRexport2.withDelay;
                          ReanimatedRexport2;
                          const withSequence2 = ReanimatedRexport2.withSequence;
                          ReanimatedRexport2;
                          const obj6 = { duration: 167, easing: easing3 };
                          const obj5 = timing;
                          const obj8 = { duration: 333, easing: easing3 };
                          const withTimingResult1 = obj5.withTiming(1.25, obj6);
                          const obj7 = timing;
                          set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
                        } else {
                          const result1 = set(1);
                          const result2 = sharedValue2.set(1);
                        }
                      } else {
                        const result3 = set(0);
                        const result4 = sharedValue2.set(0);
                      }
                      return tmp9;
                    }
                  }
                  cResult[24] = bound;
                  cResult[25] = tmp4.countdownText;
                  cResult[26] = tmp41;
                  tmp40 = tmp41;
                }
              }
              size = { height: require("ButtonConstants").SMALL_BUTTON_HEIGHT, width: require("ButtonConstants").SMALL_BUTTON_HEIGHT, style: tmp4.ring, children: items2 };
              items2 = [tmp27, tmp30];
              const tmp38 = require("inlineStyles");
              const tmp39 = closure_6(tmp38, size);
              cResult[19] = tmp4.ring;
              cResult[20] = tmp27;
              cResult[21] = tmp30;
              cResult[22] = tmp39;
              tmp35 = tmp39;
            }
          }
          class G {
            constructor() {
              const current = ref.current;
              ref.current = true;
              if (closure_1) {
                if (current) {
                  const withSequence = ReanimatedRexport2.withSequence;
                  ReanimatedRexport2;
                  const obj2 = { duration: 267, easing };
                  const obj = timing;
                  const obj4 = { duration: 233, easing: easing2 };
                  const withTimingResult = obj.withTiming(1.65, obj2);
                  const obj3 = timing;
                  const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
                  set2 = sharedValue2.set;
                  const withDelay = ReanimatedRexport2.withDelay;
                  ReanimatedRexport2;
                  const withSequence2 = ReanimatedRexport2.withSequence;
                  ReanimatedRexport2;
                  const obj6 = { duration: 167, easing: easing3 };
                  const obj5 = timing;
                  const obj8 = { duration: 333, easing: easing3 };
                  const withTimingResult1 = obj5.withTiming(1.25, obj6);
                  const obj7 = timing;
                  set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
                } else {
                  const result1 = set(1);
                  const result2 = sharedValue2.set(1);
                }
              } else {
                const result3 = set(0);
                const result4 = sharedValue2.set(0);
              }
              return tmp9;
            }
          }
          const items3 = [tmp5, sharedValue1, sharedValue2];
          cResult[10] = sharedValue1;
          class I {
            constructor() {
              set = sharedValue.set;
              const obj = timing;
              const result = set(obj.withTiming(c0, { duration: 500 }, "animate-always"));
            }
          }
          cResult[11] = sharedValue2;
          cResult[12] = tmp5;
          cResult[13] = G;
          cResult[14] = items3;
          tmp17 = items3;
          tmp16 = G;
        }
        const items4 = [sharedValue, tmp7];
        cResult[8] = tmp7;
        cResult[9] = items4;
        tmp14 = items4;
      }
      class I {
        constructor() {
          set = sharedValue.set;
          const obj = timing;
          const result = set(obj.withTiming(c0, { duration: 500 }, "animate-always"));
        }
      }
      cResult[4] = sharedValue;
      cResult[5] = tmp7;
      cResult[6] = I;
      tmp13 = I;
    }
  }
  _require = 0;
  if (isCompleted) {
    _require = 1;
    num2 = 1;
  } else {
    num2 = 0;
    if (totalSeconds > 0) {
      const diff = 1 - remainingSeconds / totalSeconds;
      _require = diff;
      num2 = diff;
    }
  }
  cResult[1] = remainingSeconds;
  cResult[2] = totalSeconds;
  cResult[3] = num2;
}) : ((arg0) => {
  let CheckmarkSmallBoldIcon;
  let c1;
  let closure_0;
  let isCompleted;
  let items2;
  let items3;
  let items4;
  let items5;
  let num2;
  let obj13;
  let obj15;
  let remainingSeconds;
  let totalSeconds;
  ({ isCompleted, totalSeconds, remainingSeconds } = arg0);
  _require = undefined;
  importDefault = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let ref;
  const tmp = closure_14();
  let tmp2 = isCompleted;
  if (!tmp2) {
    tmp2 = remainingSeconds <= 0;
  }
  _require = tmp2;
  importDefault = 0;
  const bound = Math.max(1, Math.ceil(remainingSeconds));
  if (isCompleted) {
    importDefault = 1;
    num2 = 1;
  } else {
    num2 = 0;
    if (totalSeconds > 0) {
      const diff = 1 - remainingSeconds / totalSeconds;
      importDefault = diff;
      num2 = diff;
    }
  }
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(num2);
  let obj2 = require("ReanimatedRexport");
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  sharedValue2 = obj3.useSharedValue(0);
  let items = [sharedValue, num2];
  const effect = sharedValue1.useEffect(() => {
    set = sharedValue.set;
    const obj = timing;
    const result = set(obj.withTiming(c1, { duration: 500 }, "animate-always"));
  }, items);
  ref = sharedValue1.useRef(false);
  const items1 = [tmp2, sharedValue1, sharedValue2];
  const effect1 = sharedValue1.useEffect(() => {
    const current = ref.current;
    ref.current = true;
    if (closure_0) {
      if (current) {
        const withSequence = ReanimatedRexport2.withSequence;
        ReanimatedRexport2;
        const obj2 = { duration: 267, easing };
        const obj = timing;
        const obj4 = { duration: 233, easing: easing2 };
        const withTimingResult = obj.withTiming(1.65, obj2);
        const obj3 = timing;
        const result = set(withSequence(withTimingResult, obj3.withTiming(1, obj4)));
        set2 = sharedValue2.set;
        const withDelay = ReanimatedRexport2.withDelay;
        ReanimatedRexport2;
        const withSequence2 = ReanimatedRexport2.withSequence;
        ReanimatedRexport2;
        const obj6 = { duration: 167, easing: easing3 };
        const obj5 = timing;
        const obj8 = { duration: 333, easing: easing3 };
        const withTimingResult1 = obj5.withTiming(1.25, obj6);
        const obj7 = timing;
        set2(withDelay(167, withSequence2(withTimingResult1, obj7.withTiming(1, obj8))));
      } else {
        const result1 = set(1);
        const result2 = sharedValue2.set(1);
      }
    } else {
      const result3 = set(0);
      const result4 = sharedValue2.set(0);
    }
    return tmp9;
  }, items1);
  let obj4 = require("ReanimatedRexport");
  const fn = function x() {
    const obj = { strokeDashoffset: closure_9 - closure_9 * sharedValue.get() };
    return obj;
  };
  let obj5 = { PROGRESS_CIRCUMFERENCE: strokeDasharray, animatedProgress: sharedValue };
  fn.__closure = obj5;
  fn.__workletHash = 6710265460161;
  fn.__initData = __initData4;
  const animatedProps = obj4.useAnimatedProps(fn);
  let obj6 = require("ReanimatedRexport");
  class U {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: sharedValue1.get() }];
      ({ scale: sharedValue1.get() });
      return obj;
    }
  }
  U.__closure = { checkmarkBackgroundScale: sharedValue1 };
  U.__workletHash = 11453823104255;
  U.__initData = __initData5;
  const animatedStyle = obj6.useAnimatedStyle(U);
  let obj7 = require("ReanimatedRexport");
  class P {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: sharedValue2.get() }];
      ({ scale: sharedValue2.get() });
      return obj;
    }
  }
  P.__closure = { checkmarkScale: sharedValue2 };
  P.__workletHash = 14689280780412;
  P.__initData = __initData6;
  let obj8 = { style: tmp.progress, children: items3 };
  const animatedStyle1 = obj7.useAnimatedStyle(P);
  size = { height: require("ButtonConstants").SMALL_BUTTON_HEIGHT, width: require("ButtonConstants").SMALL_BUTTON_HEIGHT, style: tmp.ring, children: items2 };
  const tmp18 = require("inlineStyles");
  const tmp19 = ref;
  const obj9 = { cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, r, fill: "none", stroke: tmp.trackPath.color, strokeWidth: 4 };
  const Circle = require("inlineStyles").Circle;
  items2 = [ref(Circle, obj9), ];
  const obj10 = { cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2, r, fill: "none", stroke, strokeWidth: 4, strokeDasharray, strokeLinecap: "round", animatedProps };
  items2[1] = ref(closure_13, obj10);
  items3 = [closure_6(tmp18, size), , , ];
  let tmp19Result = !tmp2;
  if (tmp19Result) {
    const obj11 = { variant: "text-sm/semibold", style: tmp.countdownText, maxFontSizeMultiplier: 1, children: bound };
    tmp19Result = tmp19(tmp5(tmp6[12]).Text, obj11);
  }
  items3[1] = tmp19Result;
  const obj12 = { style: items4, children: tmp19(sharedValue2, obj13) };
  items4 = [tmp.checkmarkLayer, animatedStyle];
  obj13 = { style: tmp.checkmarkBackground };
  View = tmp17(tmp6[4]).View;
  items3[2] = tmp19(View, obj12);
  const obj14 = { style: items5, children: tmp19(CheckmarkSmallBoldIcon, obj15) };
  items5 = [tmp.checkmarkLayer, animatedStyle1];
  const View2 = tmp17(tmp6[4]).View;
  obj15 = { size: "custom", color: require("native").colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, style: tmp.checkmarkIcon };
  CheckmarkSmallBoldIcon = tmp5(tmp6[13]).CheckmarkSmallBoldIcon;
  items3[3] = tmp19(View2, obj14);
  return closure_6(sharedValue2, obj8);
});
size = size_mod;
let result1 = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalTimer.tsx");

export default tmp5;