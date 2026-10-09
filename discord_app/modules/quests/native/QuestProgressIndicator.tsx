// === Module 15325: QuestProgressIndicator ===

// Module 15325 (QuestProgressIndicator)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 5092 */;
import inlineStyles from "inlineStyles" /* 7559 */;
import noop_mod from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import jsxProd from "jsxProd" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let noop = noop_mod;
({ useMemo: c3, useEffect: closure_4, useRef: hasOwnProperty } = noop);
let noop = noop_mod;
let View = _mod17.View;
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let c11 = 500;
const dependencyMap2 = ["#666777", "#535564"];
let c13 = 0.7;
let closure_14 = ReanimatedRexport.createAnimatedComponent(inlineStyles.Circle);
const QUEST_PROGRESS_DIAMETER_BY_SIZE = { "x-sm": 40, sm: 64, md: 70, "md-lg": 100, lg: 128 };
let closure_16 = createStyles.createStyles((arg0) => {
  const obj = { wrapper: { position: "relative" }, container: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1 }, completionGlow: { shadowOffset: { width: 0, height: 0 }, shadowRadius: 20, shadowOpacity: 0, elevation: 4, shadowColor: "#30C77399" }, canvas: null, imageContainer: null, progressPath: null, confetti: null, opacityMask: null };
  const obj2 = { transform: null };
  const items = [{ rotate: "-90deg" }];
  obj2.transform = items;
  obj.canvas = obj2;
  const size = { position: "absolute", height: 0.78 * arg0, width: 0.78 * arg0, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
  obj.imageContainer = size;
  obj.progressPath = { color: nativeDefault.colors.STATUS_POSITIVE };
  obj.confetti = { position: "absolute", pointerEvents: "none" };
  const rect = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 };
  obj.opacityMask = rect;
  return obj;
});
const __initData = { code: "function QuestProgressIndicatorTsx1(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}" };
const __initData2 = { code: "function QuestProgressIndicatorTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}" };
const __initData3 = { code: "function QuestProgressIndicatorTsx3(){const{underlayOpacity,styles}=this.__closure;return{opacity:underlayOpacity.get(),...styles.opacityMask};}" };
const __initData4 = { code: "function QuestProgressIndicatorTsx4(){const{glowOpacity}=this.__closure;return{shadowOpacity:glowOpacity.get()};}" };
const __initData5 = { code: "function QuestProgressIndicatorTsx5(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}" };
const __initData6 = { code: "function QuestProgressIndicatorTsx6(){const{underlayOpacity,styles}=this.__closure;return{opacity:underlayOpacity.get(),...styles.opacityMask};}" };
let result = size.fileFinishedImporting("modules/quests/native/QuestProgressIndicator.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestProgressIndicator(arg0) {
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
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  stateFromStores = progress(stateFromStores[10]).useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { "x-sm": 3, sm: 3, md: 3, "md-lg": 4, lg: 6 };
    cResult[2] = obj2;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { "x-sm": 1.6, sm: 1, md: 1.4, "md-lg": 1.5, lg: 1.6 };
    cResult[3] = obj3;
  }
  const diff = tmp12 / 2 - tmp11 / 2;
  let result = 2 * Math.PI * diff;
  closure_3 = result;
  const tmp17 = closure_16(obj[size]);
  opacityMask = tmp17;
  const tmpResult = progress(stateFromStores[10]);
  const sharedValue = progress(stateFromStores[4]).useSharedValue(progress);
  const tmpResult7 = progress(stateFromStores[4]);
  let num5 = 0;
  if (undefined !== loading && loading) {
    num5 = c13;
  }
  const sharedValue1 = progress(stateFromStores[4]).useSharedValue(num5);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  closure_7 = tmp21;
  const tmpResult8 = progress(stateFromStores[4]);
  let num6 = 0;
  if (null != completedAt) {
    num6 = 1;
  }
  sharedValue2 = progress(stateFromStores[4]).useSharedValue(num6);
  const tmpResult9 = progress(stateFromStores[4]);
  const fn2 = function j() {
    return { shadowOpacity: sharedValue2.get() };
  };
  fn2.__closure = { glowOpacity: sharedValue2 };
  fn2.__workletHash = 17183837725505;
  fn2.__initData = __initData;
  const animatedStyle = progress(stateFromStores[4]).useAnimatedStyle(fn2);
  const tmpResult10 = progress(stateFromStores[4]);
  class F {
    constructor() {
      obj = { strokeDashoffset: closure_3 - closure_3 * closure_5.get() };
      return obj;
    }
  }
  F.__closure = { circumference: result, animatedProgress: sharedValue };
  F.__workletHash = 17281152506254;
  F.__initData = __initData2;
  const animatedProps = progress(stateFromStores[4]).useAnimatedProps(F);
  const tmpResult11 = progress(stateFromStores[4]);
  class U {
    constructor() {
      obj = { opacity: closure_6.get() };
      merged = Object.assign(closure_4.opacityMask);
      return obj;
    }
  }
  U.__closure = { underlayOpacity: sharedValue1, styles: tmp17 };
  U.__workletHash = 4427598698568;
  U.__initData = __initData3;
  const animatedStyle1 = progress(stateFromStores[4]).useAnimatedStyle(U);
  if (cResult[4] === sharedValue) {
    if (cResult[5] === progress) {
      if (cResult[6] === stateFromStores) {
        let tmp26 = cResult[7];
        let tmp27 = cResult[8];
      }
      opacityMask(tmp26, tmp27);
      if (cResult[9] === tmp4) {
        if (cResult[10] === sharedValue1) {
          let tmp30 = cResult[11];
          let tmp31 = cResult[12];
        }
        tmp28(tmp31, tmp30);
        class J {
          constructor() {
            tmp = closure_6;
            obj = closure_0(closure_2[11]);
            num = 0;
            if (loading) {
              num = c13;
            }
            obj1 = { duration: c11 };
            result = closure_6.set(obj.withTiming(num, obj1));
            return () => {
              progress(stateFromStores[4]).cancelAnimation(sharedValue1);
            };
          }
        }
        if (cResult[13] !== tmp14) {
          const obj4 = { scale: tmp14 };
          const items1 = [obj4];
          class J {
            constructor() {
              tmp = closure_6;
              obj = closure_0(closure_2[11]);
              num = 0;
              if (loading) {
                num = c13;
              }
              obj1 = { duration: c11 };
              result = closure_6.set(obj.withTiming(num, obj1));
              return () => {
                progress(stateFromStores[4]).cancelAnimation(sharedValue1);
              };
            }
          }
          cResult[13] = tmp14;
          cResult[14] = items1;
          let tmp35 = items1;
        } else {
          tmp35 = cResult[14];
        }
        if (cResult[15] === tmp12) {
          if (cResult[16] === tmp17.confetti) {
            if (cResult[17] === tmp35) {
              let tmp36 = cResult[18];
            }
            if (cResult[19] === sharedValue2) {
              if (cResult[20] === tmp21) {
                if (cResult[21] === stateFromStores) {
                  let tmp39 = cResult[22];
                  let tmp40 = cResult[23];
                }
                tmp28(tmp39, tmp40);
                if (null == onPress) {
                  let PressableOpacity = sharedValue1.Fragment;
                } else {
                  PressableOpacity = progress(tmp2[12]).PressableOpacity;
                }
                if (cResult[24] === PressableOpacity) {
                  if (cResult[25] === accessibilityLabel) {
                    if (cResult[26] === animatedStyle) {
                      if (cResult[27] === onPress) {
                        if (cResult[28] === progress) {
                          if (cResult[29] === tmp17.completionGlow) {
                            if (cResult[30] === tmp17.wrapper) {
                              let tmp45 = cResult[33];
                              class J {
                                constructor() {
                                  tmp = closure_6;
                                  obj = closure_0(closure_2[11]);
                                  num = 0;
                                  if (loading) {
                                    num = c13;
                                  }
                                  obj1 = { duration: c11 };
                                  result = closure_6.set(obj.withTiming(num, obj1));
                                  return () => {
                                    progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                                  };
                                }
                              }
                            }
                            if (cResult[45] !== tmp45) {
                              const range = { min: 0, max: 100, now: tmp45 };
                              cResult[45] = tmp45;
                              class J {
                                constructor() {
                                  tmp = closure_6;
                                  obj = closure_0(closure_2[11]);
                                  num = 0;
                                  if (loading) {
                                    num = c13;
                                  }
                                  obj1 = { duration: c11 };
                                  result = closure_6.set(obj.withTiming(num, obj1));
                                  return () => {
                                    progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                                  };
                                }
                              }
                              cResult[46] = range;
                            }
                            if (cResult[47] !== animatedStyle1) {
                              { style: null }.style = animatedStyle1;
                              class J {
                                constructor() {
                                  tmp = closure_6;
                                  obj = closure_0(closure_2[11]);
                                  num = 0;
                                  if (loading) {
                                    num = c13;
                                  }
                                  obj1 = { duration: c11 };
                                  result = closure_6.set(obj.withTiming(num, obj1));
                                  return () => {
                                    progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                                  };
                                }
                              }
                              cResult[47] = animatedStyle1;
                              cResult[48] = tmp60;
                              const obj5 = { style: null };
                            }
                            const _Symbol = Symbol;
                            class J {
                              constructor() {
                                tmp = closure_6;
                                obj = closure_0(closure_2[11]);
                                num = 0;
                                if (loading) {
                                  num = c13;
                                }
                                obj1 = { duration: c11 };
                                result = closure_6.set(obj.withTiming(num, obj1));
                                return () => {
                                  progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                                };
                              }
                            }
                            if (tmp61 === Symbol.for("react.memo_cache_sentinel")) {
                              const obj6 = { children: null };
                              class J {
                                constructor() {
                                  tmp = closure_6;
                                  obj = closure_0(closure_2[11]);
                                  num = 0;
                                  if (loading) {
                                    num = c13;
                                  }
                                  obj1 = { duration: c11 };
                                  result = closure_6.set(obj.withTiming(num, obj1));
                                  return () => {
                                    progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                                  };
                                }
                              }
                              const obj7 = { offset: "0", stopColor: 19 };
                              const items2 = [ref(progress(tmp2[5]).Stop, obj7), ];
                              const obj8 = { offset: "1", stopColor: 17 };
                              items2[1] = ref(progress(tmp2[5]).Stop, obj8);
                              tmp65[5] = items2;
                              obj6.children = closure_10(progress(tmp2[5]).LinearGradient, tmp65);
                              const tmp67 = ref(progress(tmp2[5]).Defs, obj6);
                              cResult[49] = tmp67;
                              let tmp62 = tmp67;
                            } else {
                              tmp62 = cResult[49];
                            }
                            let result1 = tmp12 / 2;
                            const result2 = tmp12 / 2;
                            if (cResult[50] === diff) {
                              if (cResult[51] === tmp11) {
                                if (cResult[52] === result1) {
                                  if (cResult[53] === result2) {
                                    let tmp70 = cResult[54];
                                  }
                                  const result3 = tmp12 / 2;
                                  const result4 = tmp12 / 2;
                                  if (cResult[55] === result) {
                                    if (cResult[56] === diff) {
                                      if (cResult[57] === animatedProps) {
                                        if (cResult[58] === tmp11) {
                                          if (cResult[59] === tmp17.progressPath.color) {
                                            if (cResult[60] === result3) {
                                              if (cResult[61] === result4) {
                                                let tmp75 = cResult[62];
                                              }
                                              if (cResult[63] === tmp12) {
                                                if (cResult[64] === tmp17.canvas) {
                                                  if (cResult[65] === tmp70) {
                                                    if (cResult[68] === tmp36) {
                                                      const result5 = 0.78 * tmp12;
                                                      const result6 = 0.78 * tmp12;
                                                      class J {
                                                        constructor() {
                                                          tmp = closure_6;
                                                          obj = closure_0(closure_2[11]);
                                                          num = 0;
                                                          if (loading) {
                                                            num = c13;
                                                          }
                                                          obj1 = { duration: c11 };
                                                          result = closure_6.set(obj.withTiming(num, obj1));
                                                          return () => {
                                                            progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                                                          };
                                                        }
                                                      }
                                                      const size1 = { quest, height: result5, width: result6, withAnimation, accessibilityLabelPrefix: accessibilityLabel };
                                                      const tmp91 = ref(require("QuestRewardTile"), size1);
                                                      cResult[71] = accessibilityLabel;
                                                      cResult[72] = quest;
                                                      cResult[73] = result5;
                                                      cResult[74] = result6;
                                                      cResult[75] = withAnimation;
                                                      cResult[76] = tmp91;
                                                    }
                                                    let tmp82 = null;
                                                    if (tmp5) {
                                                      const obj9 = { ref: tmp34, style: null, source: null, autoPlay: false, loop: false };
                                                      class J {
                                                        constructor() {
                                                          tmp = closure_6;
                                                          obj = closure_0(closure_2[11]);
                                                          num = 0;
                                                          if (loading) {
                                                            num = c13;
                                                          }
                                                          obj1 = { duration: c11 };
                                                          result = closure_6.set(obj.withTiming(num, obj1));
                                                          return () => {
                                                            progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                                                          };
                                                        }
                                                      }
                                                      obj9.source = progress(tmp2[15]);
                                                      tmp82 = ref(require("LottieAnimationView"), obj9);
                                                      const tmp85 = require("LottieAnimationView");
                                                    }
                                                    class J {
                                                      constructor() {
                                                        tmp = closure_6;
                                                        obj = closure_0(closure_2[11]);
                                                        num = 0;
                                                        if (loading) {
                                                          num = c13;
                                                        }
                                                        obj1 = { duration: c11 };
                                                        result = closure_6.set(obj.withTiming(num, obj1));
                                                        return () => {
                                                          progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                                                        };
                                                      }
                                                    }
                                                    cResult[68] = tmp36;
                                                    cResult[69] = tmp5;
                                                    cResult[70] = tmp82;
                                                  }
                                                }
                                              }
                                              const size2 = { height: null, width: null, style: null, children: null };
                                              class J {
                                                constructor() {
                                                  tmp = closure_6;
                                                  obj = closure_0(closure_2[11]);
                                                  num = 0;
                                                  if (loading) {
                                                    num = c13;
                                                  }
                                                  obj1 = { duration: c11 };
                                                  result = closure_6.set(obj.withTiming(num, obj1));
                                                  return () => {
                                                    progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                                                  };
                                                }
                                              }
                                              size2.width = tmp12;
                                              size2.style = tmp17.canvas;
                                              const items3 = [tmp62, tmp70, tmp75];
                                              size2.children = items3;
                                              const tmp80 = closure_10(progress(tmp2[5]).Svg, size2);
                                              cResult[63] = tmp12;
                                              cResult[64] = tmp17.canvas;
                                              cResult[65] = tmp70;
                                              cResult[66] = tmp75;
                                              cResult[67] = tmp80;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  class J {
                                    constructor() {
                                      tmp = closure_6;
                                      obj = closure_0(closure_2[11]);
                                      num = 0;
                                      if (loading) {
                                        num = c13;
                                      }
                                      obj1 = { duration: c11 };
                                      result = closure_6.set(obj.withTiming(num, obj1));
                                      return () => {
                                        progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                                      };
                                    }
                                  }
                                  const obj10 = { cx: result3, cy: result4, r: diff, fill: "none", stroke: tmp17.progressPath.color, strokeWidth: tmp11, strokeDasharray: result, strokeLinecap: "round", animatedProps };
                                  const tmp77 = ref(closure_14, obj10);
                                  cResult[55] = result;
                                  cResult[56] = diff;
                                  cResult[57] = animatedProps;
                                  cResult[58] = tmp11;
                                  cResult[59] = tmp17.progressPath.color;
                                  cResult[60] = result3;
                                  cResult[61] = result4;
                                  cResult[62] = tmp77;
                                  tmp75 = tmp77;
                                }
                              }
                            }
                            const obj11 = { cx: result1, cy: result2, r: diff, fill: "none", stroke: "url(#underlayGradient)", strokeWidth: tmp11 };
                            const tmp72 = ref(progress(tmp2[5]).Circle, obj11);
                            cResult[50] = diff;
                            cResult[51] = tmp11;
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
                    tmp = closure_6;
                    obj = closure_0(closure_2[11]);
                    num = 0;
                    if (loading) {
                      num = c13;
                    }
                    obj1 = { duration: c11 };
                    result = closure_6.set(obj.withTiming(num, obj1));
                    return () => {
                      progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                    };
                  }
                }
                const rounded = Math.round(100 * progress);
                if (cResult[39] !== onPress) {
                  if (null == onPress) {
                    let obj12 = {};
                  } else {
                    obj12 = { onPress };
                  }
                  cResult[39] = onPress;
                  class J {
                    constructor() {
                      tmp = closure_6;
                      obj = closure_0(closure_2[11]);
                      num = 0;
                      if (loading) {
                        num = c13;
                      }
                      obj1 = { duration: c11 };
                      result = closure_6.set(obj.withTiming(num, obj1));
                      return () => {
                        progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                      };
                    }
                  }
                } else {
                  View = require("ReanimatedRexport").View;
                  if (cResult[41] === animatedStyle) {
                    if (cResult[42] === tmp17.completionGlow) {
                      if (cResult[43] === tmp17.wrapper) {
                        let tmp53 = cResult[44];
                      }
                      if (accessibilityLabel == null) {
                        const formatToPlainString = progress(tmp2[13]).intl.formatToPlainString;
                        { percent: null }.percent = rounded;
                        class J {
                          constructor() {
                            tmp = closure_6;
                            obj = closure_0(closure_2[11]);
                            num = 0;
                            if (loading) {
                              num = c13;
                            }
                            obj1 = { duration: c11 };
                            result = closure_6.set(obj.withTiming(num, obj1));
                            return () => {
                              progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                            };
                          }
                        }
                        const obj13 = { percent: null };
                      }
                      class J {
                        constructor() {
                          tmp = closure_6;
                          obj = closure_0(closure_2[11]);
                          num = 0;
                          if (loading) {
                            num = c13;
                          }
                          obj1 = { duration: c11 };
                          result = closure_6.set(obj.withTiming(num, obj1));
                          return () => {
                            progress(stateFromStores[4]).cancelAnimation(sharedValue1);
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
                      cResult[34] = tmp53;
                      cResult[35] = true;
                      cResult[36] = "progressbar";
                      cResult[37] = accessibilityLabel;
                      cResult[38] = tmp50;
                      tmp45 = rounded;
                    }
                  }
                  class J {
                    constructor() {
                      tmp = closure_6;
                      obj = closure_0(closure_2[11]);
                      num = 0;
                      if (loading) {
                        num = c13;
                      }
                      obj1 = { duration: c11 };
                      result = closure_6.set(obj.withTiming(num, obj1));
                      return () => {
                        progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                      };
                    }
                  }
                  ({ wrapper: tmp54[0], completionGlow: tmp54[1] } = tmp17);
                  tmp54[2] = animatedStyle;
                  cResult[41] = animatedStyle;
                  cResult[42] = tmp17.completionGlow;
                  cResult[43] = tmp17.wrapper;
                  cResult[44] = tmp54;
                  tmp53 = tmp54;
                }
              }
            }
            function le() {
              if (!stateFromStores) {
                if (closure_7) {
                  const obj2 = { duration };
                  result = sharedValue2.set(timing.withTiming(1, obj2));
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
            const items4 = [, , ];
            class J {
              constructor() {
                tmp = closure_6;
                obj = closure_0(closure_2[11]);
                num = 0;
                if (loading) {
                  num = c13;
                }
                obj1 = { duration: c11 };
                result = closure_6.set(obj.withTiming(num, obj1));
                return () => {
                  progress(stateFromStores[4]).cancelAnimation(sharedValue1);
                };
              }
            }
            items4[1] = sharedValue2;
            items4[2] = stateFromStores;
            cResult[19] = sharedValue2;
            cResult[20] = tmp21;
            cResult[21] = stateFromStores;
            cResult[22] = le;
            cResult[23] = items4;
            tmp40 = items4;
            tmp39 = le;
          }
        }
        const obj14 = {};
        let merged = Object.assign(tmp17.confetti);
        obj14.width = tmp12;
        obj14.height = tmp12;
        obj14.transform = tmp35;
        cResult[15] = tmp12;
        cResult[16] = tmp17.confetti;
        cResult[17] = tmp35;
        cResult[18] = obj14;
        tmp36 = obj14;
        tmp34 = sharedValue(null);
      }
      class J {
        constructor() {
          tmp = closure_6;
          obj = closure_0(closure_2[11]);
          num = 0;
          if (loading) {
            num = c13;
          }
          obj1 = { duration: c11 };
          result = closure_6.set(obj.withTiming(num, obj1));
          return () => {
            progress(stateFromStores[4]).cancelAnimation(sharedValue1);
          };
        }
      }
      const items5 = [sharedValue1, tmp4];
      cResult[9] = tmp4;
      cResult[10] = sharedValue1;
      cResult[11] = items5;
      cResult[12] = J;
      tmp31 = J;
      tmp30 = items5;
    }
  }
  const fn3 = function z() {
    let num = 0;
    if (!stateFromStores) {
      num = c11;
    }
    result = sharedValue.set(timing.withTiming(progress, { duration: num }));
    return () => {
      progress(stateFromStores[4]).cancelAnimation(sharedValue);
    };
  };
  const items6 = [sharedValue, progress, stateFromStores];
  cResult[4] = sharedValue;
  cResult[5] = progress;
  cResult[6] = stateFromStores;
  cResult[7] = fn3;
  cResult[8] = items6;
  tmp27 = items6;
  tmp26 = fn3;
  const tmpResult12 = progress(stateFromStores[4]);
}) : (function QuestProgressIndicator(loading) {
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
  closure_9 = undefined;
  let sharedValue2;
  duration = undefined;
  let obj = progress(stateFromStores[10]);
  let items = [sharedValue1];
  stateFromStores = obj.useStateFromStores(items, () => sharedValue1.useReducedMotion);
  const tmp4 = { "x-sm": 3, sm: 3, md: 3, "md-lg": 4, lg: 6 }[size];
  closure_3 = tmp5;
  const tmp6 = { "x-sm": 1.6, sm: 1, md: 1.4, "md-lg": 1.5, lg: 1.6 }[size];
  const scale = tmp6;
  const diff = tmp5 / 2 - tmp4 / 2;
  let result = 2 * Math.PI * diff;
  c5 = result;
  const tmp9 = closure_16(obj[size]);
  noop = tmp9;
  const sharedValue = progress(stateFromStores[4]).useSharedValue(progress);
  let obj2 = progress(stateFromStores[4]);
  let num = 0;
  if (flag) {
    num = c13;
  }
  sharedValue1 = progress(stateFromStores[4]).useSharedValue(num);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  closure_9 = tmp13;
  const obj3 = progress(stateFromStores[4]);
  let num2 = 0;
  if (null != completedAt) {
    num2 = 1;
  }
  sharedValue2 = progress(stateFromStores[4]).useSharedValue(num2);
  const tmpResult = progress(stateFromStores[4]);
  class G {
    constructor() {
      obj = { shadowOpacity: closure_10.get() };
      return obj;
    }
  }
  G.__closure = { glowOpacity: sharedValue2 };
  G.__workletHash = 8366197711748;
  G.__initData = __initData4;
  const animatedStyle = progress(stateFromStores[4]).useAnimatedStyle(G);
  const tmpResult4 = progress(stateFromStores[4]);
  class L {
    constructor() {
      obj = { strokeDashoffset: closure_5 - closure_5 * closure_7.get() };
      return obj;
    }
  }
  L.__closure = { circumference: result, animatedProgress: sharedValue };
  L.__workletHash = 8263499899849;
  L.__initData = __initData5;
  const animatedProps = progress(stateFromStores[4]).useAnimatedProps(L);
  const tmpResult5 = progress(stateFromStores[4]);
  class M {
    constructor() {
      obj = { opacity: closure_8.get() };
      merged = Object.assign(closure_6.opacityMask);
      return obj;
    }
  }
  M.__closure = { underlayOpacity: sharedValue1, styles: tmp9 };
  M.__workletHash = 2615328383245;
  M.__initData = __initData6;
  const items1 = [sharedValue, progress, stateFromStores];
  const animatedStyle1 = progress(stateFromStores[4]).useAnimatedStyle(M);
  scale(() => {
    let num = 0;
    if (!stateFromStores) {
      num = c11;
    }
    const result = sharedValue.set(timing.withTiming(progress, { duration: num }));
    return () => {
      progress(stateFromStores[4]).cancelAnimation(sharedValue);
    };
  }, items1);
  const items2 = [sharedValue1, flag];
  scale(() => {
    let num = 0;
    if (flag) {
      num = c13;
    }
    const result = sharedValue1.set(timing.withTiming(num, { duration }));
    return () => {
      progress(stateFromStores[4]).cancelAnimation(sharedValue1);
    };
  }, items2);
  const tmp20 = c5(null);
  duration = tmp20;
  const items3 = [tmp9.confetti, tmp6, obj[size]];
  const items4 = [null != completedAt, sharedValue2, stateFromStores];
  const tmpResult6 = progress(stateFromStores[4]);
  scale(() => {
    if (!stateFromStores) {
      if (closure_9) {
        const obj2 = { duration };
        const result = sharedValue2.set(timing.withTiming(1, obj2));
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
    let PressableOpacity = noop.Fragment;
  } else {
    PressableOpacity = tmp(tmp2[12]).PressableOpacity;
  }
  const rounded = Math.round(100 * progress);
  if (null == onPress) {
    let obj4 = {};
  } else {
    obj4 = { onPress };
  }
  const obj5 = {};
  let merged = Object.assign(obj4);
  const obj6 = { style: null, accessible: true, accessibilityRole: "progressbar", accessibilityLabel: null, accessibilityValue: null, children: null };
  const items5 = [, , ];
  ({ wrapper: arr6[0], completionGlow: arr6[1] } = tmp9);
  items5[2] = animatedStyle;
  obj6.style = items5;
  let formatToPlainStringResult = accessibilityLabel;
  if (accessibilityLabel == null) {
    const intl = tmp(tmp2[13]).intl;
    const obj7 = { percent: rounded };
    formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[13]).t.Gj8Jqn, obj7);
  }
  obj6.accessibilityLabel = formatToPlainStringResult;
  obj6.accessibilityValue = { min: 0, max: 100, now: rounded };
  const items6 = [closure_9(flag(stateFromStores[4]).View, { style: animatedStyle1 }), ];
  const obj8 = { style: tmp9.container, children: null };
  const size1 = { height: tmp5, width: tmp5, style: tmp9.canvas, children: null };
  const obj9 = { children: null };
  const obj10 = { id: "underlayGradient", x1: "0", y1: "0.5", x2: "1", y2: "0.5", children: null };
  const items7 = [closure_9(progress(stateFromStores[5]).Stop, { offset: "0", stopColor: 19 }), closure_9(progress(stateFromStores[5]).Stop, { offset: "1", stopColor: 17 })];
  obj10.children = items7;
  obj9.children = sharedValue2(progress(stateFromStores[5]).LinearGradient, obj10);
  const items8 = [closure_9(progress(stateFromStores[5]).Defs, obj9), closure_9(progress(stateFromStores[5]).Circle, { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: "url(#underlayGradient)", strokeWidth: tmp4 }), closure_9(closure_14, { cx: obj[size] / 2, cy: obj[size] / 2, r: diff, fill: "none", stroke: tmp9.progressPath.color, strokeWidth: tmp4, strokeDasharray: result, strokeLinecap: "round", animatedProps })];
  size1.children = items8;
  const items9 = [sharedValue2(progress(stateFromStores[5]).Svg, size1), , ];
  let tmp25Result = null;
  if (flag2) {
    const obj15 = { ref: tmp20, style: tmp21, source: tmp(tmp2[15]), autoPlay: false, loop: false };
    tmp25Result = tmp25(tmp28(tmp2[14]), obj15);
    const tmp28Result = tmp28(tmp2[14]);
  }
  items9[1] = tmp25Result;
  const obj16 = { style: tmp9.imageContainer, children: null };
  const size2 = { quest, height: 0.78 * tmp5, width: 0.78 * tmp5, withAnimation: loading.withAnimation, accessibilityLabelPrefix: accessibilityLabel };
  obj16.children = closure_9(flag(stateFromStores[16]), size2);
  items9[2] = closure_9(sharedValue, obj16);
  obj8.children = items9;
  items6[1] = sharedValue2(sharedValue, obj8);
  obj6.children = items6;
  obj5.children = sharedValue2(flag(stateFromStores[4]).View, obj6);
  return closure_9(PressableOpacity, obj5);
}));
export const COMPLETION_GLOW_SHADOW_RADIUS = 20;
export const COMPLETION_GLOW_CLEARANCE = 40;
export { QUEST_PROGRESS_DIAMETER_BY_SIZE };