// === Module 14935: QuestProgressIndicator ===

// Module 14935 (QuestProgressIndicator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 4891 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let duration, importDefault, opacityMask, set;

let c10;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let react = react_mod;
({ useMemo: c3, useEffect: closure_4, useRef: hasOwnProperty } = react);
react = react_mod;
let View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
let c11 = 500;
let closure_12 = ["#666777", "#535564"];
let c13 = 0.7;
let closure_14 = ReanimatedRexport.createAnimatedComponent(inlineStyles.Circle);
const QUEST_PROGRESS_DIAMETER_BY_SIZE = { "x-sm": 40, sm: 64, md: 70, "md-lg": 100, lg: 128 };
let closure_16 = createStyles.createStyles((arg0) => {
  let items;
  let obj2;
  let rect;
  const obj = { wrapper: { position: "relative" }, container: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1 }, completionGlow: { shadowOffset: { width: 0, height: 0 }, shadowRadius: 20, shadowOpacity: 0, elevation: 4, shadowColor: "#30C77399" }, canvas: obj2, imageContainer: size, progressPath: { color: nativeDefault.colors.STATUS_POSITIVE }, confetti: { position: "absolute", pointerEvents: "none" }, opacityMask: rect };
  obj2 = { transform: items };
  items = [{ rotate: "-90deg" }];
  size = { position: "absolute", height: 0.78 * arg0, width: 0.78 * arg0, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
  ({ color: nativeDefault.colors.STATUS_POSITIVE });
  rect = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 };
  return obj;
});
const __initData = { code: "function QuestProgressIndicatorTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}" };
const __initData2 = { code: "function QuestProgressIndicatorTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}" };
const __initData3 = { code: "function QuestProgressIndicatorTsx3(){const{underlayOpacity,styles}=this.__closure;return{opacity:underlayOpacity.get(),...styles.opacityMask};}" };
const __initData4 = { code: "function QuestProgressIndicatorTsx4(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}" };
const __initData5 = { code: "function QuestProgressIndicatorTsx5(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}" };
const __initData6 = { code: "function QuestProgressIndicatorTsx6(){const{underlayOpacity,styles}=this.__closure;return{opacity:underlayOpacity.get(),...styles.opacityMask};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let LinearGradient;
  let accessibilityLabel;
  let closure_1;
  let hasConfetti;
  let items3;
  let loading;
  let onPress;
  let progress;
  let quest;
  let sharedValue2;
  let stateFromStores;
  let tmp10;
  let tmp13;
  let tmp6;
  let tmp7;
  let withAnimation;
  const tmp2 = stateFromStores;
  let obj = progress(stateFromStores[9]);
  const cResult = obj.c(98);
  ({ quest, size, progress } = arg0);
  ({ loading, hasConfetti, withAnimation, onPress, accessibilityLabel } = arg0);
  importDefault = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [sharedValue2];
    const fn = function h() {
      return sharedValue2.useReducedMotion;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = progress(tmp2[10]);
  stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { "x-sm": 3, sm: 3, md: 3, "md-lg": 4, lg: 6 };
    cResult[2] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { "x-sm": 1.6, sm: 1, md: 1.4, "md-lg": 1.5, lg: 1.6 };
    cResult[3] = obj3;
    tmp13 = obj3;
  } else {
    tmp13 = cResult[3];
  }
  const diff = tmp12 / 2 - tmp11 / 2;
  let result = 2 * Math.PI * diff;
  let closure_3 = result;
  const tmp17 = closure_16(obj[size]);
  opacityMask = tmp17;
  const tmpResult7 = progress(tmp2[4]);
  const sharedValue = tmpResult7.useSharedValue(progress);
  let num5 = 0;
  const useSharedValue = progress(tmp2[4]).useSharedValue;
  progress(tmp2[4]);
  if (undefined !== loading && loading) {
    num5 = c13;
  }
  const sharedValue1 = useSharedValue(num5);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let closure_7 = tmp22;
  let num6 = 0;
  const useSharedValue2 = progress(tmp2[4]).useSharedValue;
  progress(tmp2[4]);
  if (null != completedAt) {
    num6 = 1;
  }
  sharedValue2 = useSharedValue2(num6);
  const fn2 = function j() {
    const obj = { shadowOpacity: sharedValue2.get() };
    return obj;
  };
  fn2.__closure = { glowOpacity: sharedValue2 };
  fn2.__workletHash = 17183837725505;
  fn2.__initData = __initData;
  const tmpResult10 = progress(tmp2[4]);
  const animatedStyle = tmpResult10.useAnimatedStyle(fn2);
  const tmpResult11 = progress(tmp2[4]);
  class F {
    constructor() {
      const obj = { strokeDashoffset: closure_3 - closure_3 * sharedValue.get() };
      return obj;
    }
  }
  F.__closure = { circumference: result, animatedProgress: sharedValue };
  F.__workletHash = 17281152506254;
  F.__initData = __initData2;
  const animatedProps = tmpResult11.useAnimatedProps(F);
  const tmpResult12 = progress(tmp2[4]);
  class U {
    constructor() {
      const obj = { opacity: sharedValue1.get() };
      const merged = Object.assign(opacityMask.opacityMask);
      return obj;
    }
  }
  U.__closure = { underlayOpacity: sharedValue1, styles: tmp17 };
  U.__workletHash = 4427598698568;
  U.__initData = __initData3;
  const animatedStyle1 = tmpResult12.useAnimatedStyle(U);
  if (cResult[4] === sharedValue) {
    if (cResult[5] === progress) {
      let tmp28;
      let tmp29;
      if (cResult[6] === stateFromStores) {
        tmp28 = cResult[7];
        tmp29 = cResult[8];
      }
      opacityMask(tmp28, tmp29);
      if (cResult[9] === (undefined !== loading && loading)) {
        let tmp32;
        let tmp33;
        let tmp37;
        if (cResult[10] === sharedValue1) {
          tmp32 = cResult[11];
          tmp33 = cResult[12];
        }
        opacityMask(tmp33, tmp32);
        const tmp36 = sharedValue(null);
        class J {
          constructor() {
            let num = 0;
            set = sharedValue1.set;
            const withTiming = timing.withTiming;
            timing;
            if (closure_1) {
              num = c13;
            }
            let obj = { duration };
            result = set(withTiming(num, obj));
            return () => {
              const obj = progress(stateFromStores[4]);
              obj.cancelAnimation(sharedValue1);
            };
          }
        }
        if (cResult[13] !== tmp13[size]) {
          const items1 = [{ scale: tmp13[size] }];
          const obj4 = { scale: tmp13[size] };
          class J {
            constructor() {
              let num = 0;
              set = sharedValue1.set;
              const withTiming = timing.withTiming;
              timing;
              if (closure_1) {
                num = c13;
              }
              let obj = { duration };
              result = set(withTiming(num, obj));
              return () => {
                const obj = progress(stateFromStores[4]);
                obj.cancelAnimation(sharedValue1);
              };
            }
          }
          cResult[13] = tmp13[size];
          cResult[14] = items1;
          tmp37 = items1;
        } else {
          tmp37 = cResult[14];
        }
        if (cResult[15] === obj[size]) {
          if (cResult[16] === tmp17.confetti) {
            let tmp38;
            if (cResult[17] === tmp37) {
              tmp38 = cResult[18];
            }
            if (cResult[19] === sharedValue2) {
              if (cResult[20] === null != completedAt) {
                let tmp41;
                let tmp42;
                let PressableOpacity;
                let tmp52;
                let tmp47;
                if (cResult[21] === stateFromStores) {
                  tmp41 = cResult[22];
                  tmp42 = cResult[23];
                }
                opacityMask(tmp41, tmp42);
                if (null == onPress) {
                  PressableOpacity = sharedValue1.Fragment;
                } else {
                  PressableOpacity = progress(tmp2[12]).PressableOpacity;
                }
                if (cResult[24] === PressableOpacity) {
                  if (cResult[25] === accessibilityLabel) {
                    if (cResult[26] === animatedStyle) {
                      if (cResult[27] === onPress) {
                        if (cResult[28] === progress) {
                          if (cResult[29] === tmp17.completionGlow) {
                            let tmp62;
                            if (cResult[30] === tmp17.wrapper) {
                              tmp47 = cResult[33];
                              class J {
                                constructor() {
                                  let num = 0;
                                  set = sharedValue1.set;
                                  const withTiming = timing.withTiming;
                                  timing;
                                  if (closure_1) {
                                    num = c13;
                                  }
                                  let obj = { duration };
                                  result = set(withTiming(num, obj));
                                  return () => {
                                    const obj = progress(stateFromStores[4]);
                                    obj.cancelAnimation(sharedValue1);
                                  };
                                }
                              }
                            }
                            if (cResult[45] !== tmp47) {
                              const range = { min: 0, max: 100, now: tmp47 };
                              cResult[45] = tmp47;
                              class J {
                                constructor() {
                                  let num = 0;
                                  set = sharedValue1.set;
                                  const withTiming = timing.withTiming;
                                  timing;
                                  if (closure_1) {
                                    num = c13;
                                  }
                                  let obj = { duration };
                                  result = set(withTiming(num, obj));
                                  return () => {
                                    const obj = progress(stateFromStores[4]);
                                    obj.cancelAnimation(sharedValue1);
                                  };
                                }
                              }
                              cResult[46] = range;
                            }
                            if (cResult[47] !== animatedStyle1) {
                              class J {
                                constructor() {
                                  let num = 0;
                                  set = sharedValue1.set;
                                  const withTiming = timing.withTiming;
                                  timing;
                                  if (closure_1) {
                                    num = c13;
                                  }
                                  let obj = { duration };
                                  result = set(withTiming(num, obj));
                                  return () => {
                                    const obj = progress(stateFromStores[4]);
                                    obj.cancelAnimation(sharedValue1);
                                  };
                                }
                              }
                              cResult[47] = animatedStyle1;
                              cResult[48] = tmp60;
                            }
                            const _Symbol = Symbol;
                            class J {
                              constructor() {
                                let num = 0;
                                set = sharedValue1.set;
                                const withTiming = timing.withTiming;
                                timing;
                                if (closure_1) {
                                  num = c13;
                                }
                                let obj = { duration };
                                result = set(withTiming(num, obj));
                                return () => {
                                  const obj = progress(stateFromStores[4]);
                                  obj.cancelAnimation(sharedValue1);
                                };
                              }
                            }
                            if (tmp61 === Symbol.for("react.memo_cache_sentinel")) {
                              const obj6 = { children: closure_10(LinearGradient, tmp65) };
                              const Defs = progress(tmp2[5]).Defs;
                              class J {
                                constructor() {
                                  let num = 0;
                                  set = sharedValue1.set;
                                  const withTiming = timing.withTiming;
                                  timing;
                                  if (closure_1) {
                                    num = c13;
                                  }
                                  let obj = { duration };
                                  result = set(withTiming(num, obj));
                                  return () => {
                                    const obj = progress(stateFromStores[4]);
                                    obj.cancelAnimation(sharedValue1);
                                  };
                                }
                              }
                              LinearGradient = progress(tmp2[5]).LinearGradient;
                              const obj7 = { offset: "0", stopColor: closure_12[0] };
                              const items2 = [ref(progress(tmp2[5]).Stop, obj7), ];
                              const obj8 = { offset: "1", stopColor: closure_12[1] };
                              items2[1] = ref(progress(tmp2[5]).Stop, obj8);
                              tmp65[5] = items2;
                              const tmp67 = ref(Defs, obj6);
                              cResult[49] = tmp67;
                              tmp62 = tmp67;
                            } else {
                              tmp62 = cResult[49];
                            }
                            let result1 = tmp12 / 2;
                            const result2 = tmp12 / 2;
                            if (cResult[50] === diff) {
                              if (cResult[51] === tmp10[size]) {
                                if (cResult[52] === result1) {
                                  let tmp70;
                                  if (cResult[53] === result2) {
                                    tmp70 = cResult[54];
                                  }
                                  const result3 = tmp12 / 2;
                                  const result4 = tmp12 / 2;
                                  if (cResult[55] === result) {
                                    if (cResult[56] === diff) {
                                      if (cResult[57] === animatedProps) {
                                        if (cResult[58] === tmp10[size]) {
                                          if (cResult[59] === tmp17.progressPath.color) {
                                            if (cResult[60] === result3) {
                                              let tmp75;
                                              if (cResult[61] === result4) {
                                                tmp75 = cResult[62];
                                              }
                                              if (cResult[63] === obj[size]) {
                                                if (cResult[64] === tmp17.canvas) {
                                                  if (cResult[65] === tmp70) {
                                                    if (cResult[68] === tmp38) {
                                                      const result5 = 0.78 * tmp12;
                                                      const result6 = 0.78 * tmp12;
                                                      class J {
                                                        constructor() {
                                                          let num = 0;
                                                          set = sharedValue1.set;
                                                          const withTiming = timing.withTiming;
                                                          timing;
                                                          if (closure_1) {
                                                            num = c13;
                                                          }
                                                          let obj = { duration };
                                                          result = set(withTiming(num, obj));
                                                          return () => {
                                                            const obj = progress(stateFromStores[4]);
                                                            obj.cancelAnimation(sharedValue1);
                                                          };
                                                        }
                                                      }
                                                      const size1 = { quest, height: result5, width: result6, withAnimation, accessibilityLabelPrefix: accessibilityLabel };
                                                      cResult[71] = accessibilityLabel;
                                                      cResult[72] = quest;
                                                      cResult[73] = result5;
                                                      cResult[74] = result6;
                                                      cResult[75] = withAnimation;
                                                      cResult[76] = ref(require("QuestRewardTile"), size1);
                                                      const tmp91 = ref(require("QuestRewardTile"), size1);
                                                    }
                                                    let tmp82 = null;
                                                    if (undefined !== hasConfetti && hasConfetti) {
                                                      const obj9 = { ref: tmp36, style: null, source: progress(tmp2[15]), autoPlay: false, loop: false };
                                                      class J {
                                                        constructor() {
                                                          let num = 0;
                                                          set = sharedValue1.set;
                                                          const withTiming = timing.withTiming;
                                                          timing;
                                                          if (closure_1) {
                                                            num = c13;
                                                          }
                                                          let obj = { duration };
                                                          result = set(withTiming(num, obj));
                                                          return () => {
                                                            const obj = progress(stateFromStores[4]);
                                                            obj.cancelAnimation(sharedValue1);
                                                          };
                                                        }
                                                      }
                                                      const tmp85 = require("LottieAnimationView");
                                                      tmp82 = ref(tmp85, obj9);
                                                    }
                                                    class J {
                                                      constructor() {
                                                        let num = 0;
                                                        set = sharedValue1.set;
                                                        const withTiming = timing.withTiming;
                                                        timing;
                                                        if (closure_1) {
                                                          num = c13;
                                                        }
                                                        let obj = { duration };
                                                        result = set(withTiming(num, obj));
                                                        return () => {
                                                          const obj = progress(stateFromStores[4]);
                                                          obj.cancelAnimation(sharedValue1);
                                                        };
                                                      }
                                                    }
                                                    cResult[68] = tmp38;
                                                    cResult[69] = undefined !== hasConfetti && hasConfetti;
                                                    cResult[70] = tmp82;
                                                  }
                                                }
                                              }
                                              const size2 = { height: null, width: obj[size], style: tmp17.canvas, children: items3 };
                                              class J {
                                                constructor() {
                                                  let num = 0;
                                                  set = sharedValue1.set;
                                                  const withTiming = timing.withTiming;
                                                  timing;
                                                  if (closure_1) {
                                                    num = c13;
                                                  }
                                                  let obj = { duration };
                                                  result = set(withTiming(num, obj));
                                                  return () => {
                                                    const obj = progress(stateFromStores[4]);
                                                    obj.cancelAnimation(sharedValue1);
                                                  };
                                                }
                                              }
                                              items3 = [tmp62, tmp70, tmp75];
                                              cResult[63] = obj[size];
                                              cResult[64] = tmp17.canvas;
                                              cResult[65] = tmp70;
                                              cResult[66] = tmp75;
                                              cResult[67] = closure_10(progress(tmp2[5]).Svg, size2);
                                              const tmp80 = closure_10(progress(tmp2[5]).Svg, size2);
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  class J {
                                    constructor() {
                                      let num = 0;
                                      set = sharedValue1.set;
                                      const withTiming = timing.withTiming;
                                      timing;
                                      if (closure_1) {
                                        num = c13;
                                      }
                                      let obj = { duration };
                                      result = set(withTiming(num, obj));
                                      return () => {
                                        const obj = progress(stateFromStores[4]);
                                        obj.cancelAnimation(sharedValue1);
                                      };
                                    }
                                  }
                                  const obj10 = { cx: result3, cy: result4, r: diff, fill: "none", stroke: tmp17.progressPath.color, strokeWidth: tmp10[size], strokeDasharray: result, strokeLinecap: "round", animatedProps };
                                  const tmp77 = ref(closure_14, obj10);
                                  cResult[55] = result;
                                  cResult[56] = diff;
                                  cResult[57] = animatedProps;
                                  cResult[58] = tmp10[size];
                                  cResult[59] = tmp17.progressPath.color;
                                  cResult[60] = result3;
                                  cResult[61] = result4;
                                  cResult[62] = tmp77;
                                  tmp75 = tmp77;
                                }
                              }
                            }
                            const obj11 = { cx: result1, cy: result2, r: diff, fill: "none", stroke: "url(#underlayGradient)", strokeWidth: tmp10[size] };
                            const tmp72 = ref(progress(tmp2[5]).Circle, obj11);
                            cResult[50] = diff;
                            cResult[51] = tmp10[size];
                            cResult[52] = result1;
                            cResult[53] = result2;
                            cResult[54] = tmp72;
                            tmp70 = tmp72;
                          }
                        }
                      }
                    }
                  }
                }
                class J {
                  constructor() {
                    let num = 0;
                    set = sharedValue1.set;
                    const withTiming = timing.withTiming;
                    timing;
                    if (closure_1) {
                      num = c13;
                    }
                    let obj = { duration };
                    result = set(withTiming(num, obj));
                    return () => {
                      const obj = progress(stateFromStores[4]);
                      obj.cancelAnimation(sharedValue1);
                    };
                  }
                }
                const rounded = Math.round(100 * progress);
                if (cResult[39] !== onPress) {
                  let obj12;
                  if (null == onPress) {
                    obj12 = {};
                  } else {
                    obj12 = { onPress };
                  }
                  cResult[39] = onPress;
                  class J {
                    constructor() {
                      let num = 0;
                      set = sharedValue1.set;
                      const withTiming = timing.withTiming;
                      timing;
                      if (closure_1) {
                        num = c13;
                      }
                      let obj = { duration };
                      result = set(withTiming(num, obj));
                      return () => {
                        const obj = progress(stateFromStores[4]);
                        obj.cancelAnimation(sharedValue1);
                      };
                    }
                  }
                  tmp52 = obj12;
                } else {
                  tmp52 = cResult[40];
                }
                View = require("ReanimatedRexport").View;
                if (cResult[41] === animatedStyle) {
                  if (cResult[42] === tmp17.completionGlow) {
                    let tmp54;
                    if (cResult[43] === tmp17.wrapper) {
                      tmp54 = cResult[44];
                    }
                    if (accessibilityLabel == null) {
                      const formatToPlainString = progress(tmp2[13]).intl.formatToPlainString;
                      class J {
                        constructor() {
                          let num = 0;
                          set = sharedValue1.set;
                          const withTiming = timing.withTiming;
                          timing;
                          if (closure_1) {
                            num = c13;
                          }
                          let obj = { duration };
                          result = set(withTiming(num, obj));
                          return () => {
                            const obj = progress(stateFromStores[4]);
                            obj.cancelAnimation(sharedValue1);
                          };
                        }
                      }
                    }
                    class J {
                      constructor() {
                        let num = 0;
                        set = sharedValue1.set;
                        const withTiming = timing.withTiming;
                        timing;
                        if (closure_1) {
                          num = c13;
                        }
                        let obj = { duration };
                        result = set(withTiming(num, obj));
                        return () => {
                          const obj = progress(stateFromStores[4]);
                          obj.cancelAnimation(sharedValue1);
                        };
                      }
                    }
                    cResult[25] = accessibilityLabel;
                    cResult[26] = animatedStyle;
                    cResult[27] = onPress;
                    cResult[28] = progress;
                    cResult[29] = tmp17.completionGlow;
                    cResult[30] = tmp17.wrapper;
                    cResult[31] = View;
                    cResult[32] = PressableOpacity;
                    cResult[33] = rounded;
                    cResult[34] = tmp54;
                    cResult[35] = true;
                    cResult[36] = "progressbar";
                    cResult[37] = accessibilityLabel;
                    cResult[38] = tmp52;
                    tmp47 = rounded;
                  }
                }
                const items4 = [, , ];
                ({ wrapper: arr6[0], completionGlow: arr6[1] } = tmp17);
                items4[2] = animatedStyle;
                cResult[41] = animatedStyle;
                cResult[42] = tmp17.completionGlow;
                cResult[43] = tmp17.wrapper;
                cResult[44] = items4;
                tmp54 = items4;
              }
            }
            function le() {
              if (!stateFromStores) {
                if (closure_7) {
                  const obj2 = { duration };
                  set = sharedValue2.set;
                  const obj = timing;
                  result = set(obj.withTiming(1, obj2));
                  const current = ref.current;
                  if (current != null) {
                    current.play();
                  }
                }
              }
              const result1 = sharedValue2.set(0);
              const current2 = ref.current;
              if (current2 != null) {
                current2.reset();
              }
            }
            const items5 = [, , ];
            class J {
              constructor() {
                let num = 0;
                set = sharedValue1.set;
                const withTiming = timing.withTiming;
                timing;
                if (closure_1) {
                  num = c13;
                }
                let obj = { duration };
                result = set(withTiming(num, obj));
                return () => {
                  const obj = progress(stateFromStores[4]);
                  obj.cancelAnimation(sharedValue1);
                };
              }
            }
            items5[1] = sharedValue2;
            items5[2] = stateFromStores;
            cResult[19] = sharedValue2;
            cResult[20] = null != completedAt;
            cResult[21] = stateFromStores;
            cResult[22] = le;
            cResult[23] = items5;
            tmp42 = items5;
            tmp41 = le;
          }
        }
        const obj14 = { width: obj[size], height: obj[size], transform: tmp37 };
        let merged = Object.assign(tmp17.confetti);
        cResult[15] = obj[size];
        cResult[16] = tmp17.confetti;
        cResult[17] = tmp37;
        cResult[18] = obj14;
        tmp38 = obj14;
      }
      class J {
        constructor() {
          let num = 0;
          set = sharedValue1.set;
          const withTiming = timing.withTiming;
          timing;
          if (closure_1) {
            num = c13;
          }
          let obj = { duration };
          result = set(withTiming(num, obj));
          return () => {
            const obj = progress(stateFromStores[4]);
            obj.cancelAnimation(sharedValue1);
          };
        }
      }
      const items6 = [sharedValue1, undefined !== loading && loading];
      cResult[9] = undefined !== loading && loading;
      cResult[10] = sharedValue1;
      cResult[11] = items6;
      cResult[12] = J;
      tmp33 = J;
      tmp32 = items6;
    }
  }
  const fn3 = function z() {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (!stateFromStores) {
      num = c11;
    }
    result = set(withTiming(progress, { duration: num }));
    return () => {
      const obj = progress(stateFromStores[4]);
      obj.cancelAnimation(sharedValue);
    };
  };
  const items7 = [sharedValue, progress, stateFromStores];
  cResult[4] = sharedValue;
  cResult[5] = progress;
  cResult[6] = stateFromStores;
  cResult[7] = fn3;
  cResult[8] = items7;
  tmp29 = items7;
  tmp28 = fn3;
}) : ((loading) => {
  let LinearGradient;
  let PressableOpacity;
  let accessibilityLabel;
  let closure_6;
  let formatToPlainStringResult;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj3;
  let obj5;
  let obj9;
  let onPress;
  let progress;
  let quest;
  let size2;
  ({ quest, size, progress } = loading);
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = loading.hasConfetti;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ onPress, accessibilityLabel } = loading);
  let stateFromStores;
  let sharedValue1;
  let closure_9;
  let sharedValue2;
  duration = undefined;
  const tmp2 = stateFromStores;
  const withAnimation = loading.withAnimation;
  let obj = progress(stateFromStores[10]);
  let items = [sharedValue1];
  stateFromStores = obj.useStateFromStores(items, () => sharedValue1.useReducedMotion);
  const tmp4 = { "x-sm": 3, sm: 3, md: 3, "md-lg": 4, lg: 6 }[size];
  let closure_3 = tmp5;
  const tmp6 = { "x-sm": 1.6, sm: 1, md: 1.4, "md-lg": 1.5, lg: 1.6 }[size];
  const scale = tmp6;
  const diff = tmp5 / 2 - tmp4 / 2;
  let result = 2 * Math.PI * diff;
  let c5 = result;
  const tmp9 = closure_16(tmp5);
  react = tmp9;
  let obj2 = progress(stateFromStores[4]);
  const sharedValue = obj2.useSharedValue(progress);
  let num = 0;
  const useSharedValue = progress(stateFromStores[4]).useSharedValue;
  progress(stateFromStores[4]);
  if (flag) {
    num = c13;
  }
  sharedValue1 = useSharedValue(num);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  closure_9 = tmp14;
  let num2 = 0;
  const useSharedValue2 = progress(tmp2[4]).useSharedValue;
  progress(tmp2[4]);
  if (null != completedAt) {
    num2 = 1;
  }
  sharedValue2 = useSharedValue2(num2);
  const tmpResult4 = progress(tmp2[4]);
  class G {
    constructor() {
      const obj = { shadowOpacity: sharedValue2.get() };
      return obj;
    }
  }
  G.__closure = { glowOpacity: sharedValue2 };
  G.__workletHash = 8366197711748;
  G.__initData = __initData4;
  const animatedStyle = tmpResult4.useAnimatedStyle(G);
  const tmpResult5 = progress(tmp2[4]);
  class L {
    constructor() {
      const obj = { strokeDashoffset: c5 - c5 * sharedValue.get() };
      return obj;
    }
  }
  L.__closure = { circumference: result, animatedProgress: sharedValue };
  L.__workletHash = 8263499899849;
  L.__initData = __initData5;
  const animatedProps = tmpResult5.useAnimatedProps(L);
  const tmpResult6 = progress(tmp2[4]);
  class M {
    constructor() {
      const obj = { opacity: sharedValue1.get() };
      const merged = Object.assign(closure_6.opacityMask);
      return obj;
    }
  }
  M.__closure = { underlayOpacity: sharedValue1, styles: tmp9 };
  M.__workletHash = 2615328383245;
  M.__initData = __initData6;
  const items1 = [sharedValue, progress, stateFromStores];
  const animatedStyle1 = tmpResult6.useAnimatedStyle(M);
  scale(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing.withTiming;
    timing;
    if (!stateFromStores) {
      num = c11;
    }
    const result = set(withTiming(progress, { duration: num }));
    return () => {
      const obj = progress(stateFromStores[4]);
      obj.cancelAnimation(sharedValue);
    };
  }, items1);
  const items2 = [sharedValue1, flag];
  scale(() => {
    let num = 0;
    set = sharedValue1.set;
    const withTiming = timing.withTiming;
    timing;
    if (flag) {
      num = c13;
    }
    let obj = { duration };
    const result = set(withTiming(num, obj));
    return () => {
      const obj = progress(stateFromStores[4]);
      obj.cancelAnimation(sharedValue1);
    };
  }, items2);
  const tmp22 = c5(null);
  duration = tmp22;
  const items3 = [tmp9.confetti, tmp6, obj[size]];
  const items4 = [null != completedAt, sharedValue2, stateFromStores];
  const tmp23 = closure_3(() => {
    let items;
    const obj = { width: height, height, transform: items };
    const merged = Object.assign(closure_6.confetti);
    items = [];
    const obj2 = { scale };
    items[0] = obj2;
    return obj;
  }, items3);
  scale(() => {
    if (!stateFromStores) {
      if (closure_9) {
        const obj2 = { duration };
        set = sharedValue2.set;
        const obj = timing;
        const result = set(obj.withTiming(1, obj2));
        const current = duration.current;
        if (current != null) {
          current.play();
        }
      }
    }
    const result1 = sharedValue2.set(0);
    const current2 = duration.current;
    if (current2 != null) {
      current2.reset();
    }
  }, items4);
  if (null == onPress) {
    PressableOpacity = react.Fragment;
  } else {
    PressableOpacity = tmp(tmp2[12]).PressableOpacity;
  }
  const rounded = Math.round(100 * progress);
  if (null == onPress) {
    obj3 = {};
  } else {
    obj3 = { onPress };
  }
  const obj4 = { children: sharedValue2(View, obj5) };
  let merged = Object.assign(obj3);
  obj5 = { style: items5, accessible: true, accessibilityRole: "progressbar", accessibilityLabel: formatToPlainStringResult, accessibilityValue: { min: 0, max: 100, now: rounded }, children: items6 };
  items5 = [, , ];
  ({ wrapper: arr6[0], completionGlow: arr6[1] } = tmp9);
  items5[2] = animatedStyle;
  formatToPlainStringResult = accessibilityLabel;
  View = flag(tmp2[4]).View;
  if (accessibilityLabel == null) {
    const intl = tmp(tmp2[13]).intl;
    const obj6 = { percent: rounded };
    formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[13]).t.Gj8Jqn, obj6);
  }
  items6 = [closure_9(flag(tmp2[4]).View, { style: animatedStyle1 }), ];
  const size1 = { height: tmp5, width: tmp5, style: tmp9.canvas, children: items8 };
  const obj7 = { style: tmp9.container, children: items9 };
  const Svg = tmp(tmp2[5]).Svg;
  const obj8 = { children: sharedValue2(LinearGradient, obj9) };
  const Defs = tmp(tmp2[5]).Defs;
  obj9 = { id: "underlayGradient", x1: "0", y1: "0.5", x2: "1", y2: "0.5", children: items7 };
  LinearGradient = tmp(tmp2[5]).LinearGradient;
  items7 = [, ];
  const obj10 = { offset: "0", stopColor: closure_12[0] };
  items7[0] = closure_9(progress(tmp2[5]).Stop, obj10);
  const obj11 = { offset: "1", stopColor: closure_12[1] };
  items7[1] = closure_9(progress(tmp2[5]).Stop, obj11);
  items8 = [closure_9(Defs, obj8), , ];
  const obj12 = { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: "url(#underlayGradient)", strokeWidth: tmp4 };
  items8[1] = closure_9(progress(tmp2[5]).Circle, obj12);
  const obj13 = { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: tmp9.progressPath.color, strokeWidth: tmp4, strokeDasharray: result, strokeLinecap: "round", animatedProps };
  items8[2] = closure_9(closure_14, obj13);
  items9 = [sharedValue2(Svg, size1), , ];
  let tmp27Result = null;
  if (flag2) {
    const obj14 = { ref: tmp22, style: tmp23, source: progress(tmp2[15]), autoPlay: false, loop: false };
    const tmp30Result = flag(tmp2[14]);
    tmp27Result = tmp27(tmp30Result, obj14);
  }
  items9[1] = tmp27Result;
  const obj15 = { style: tmp9.imageContainer, children: closure_9(flag(tmp2[16]), size2) };
  size2 = { quest, height: 0.78 * tmp5, width: 0.78 * tmp5, withAnimation, accessibilityLabelPrefix: accessibilityLabel };
  items9[2] = closure_9(sharedValue, obj15);
  items6[1] = sharedValue2(sharedValue, obj7);
  return closure_9(PressableOpacity, obj4);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestProgressIndicator.tsx");

export default memoResult;
export const COMPLETION_GLOW_SHADOW_RADIUS = 20;
export const COMPLETION_GLOW_CLEARANCE = 40;
export { QUEST_PROGRESS_DIAMETER_BY_SIZE };