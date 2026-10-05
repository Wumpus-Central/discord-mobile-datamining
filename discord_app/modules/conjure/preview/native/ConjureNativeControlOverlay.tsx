// === Module 16601: ConjureNativeControlOverlay ===

// Module 16601 (ConjureNativeControlOverlay)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import useConjureControlBar from "useConjureControlBar" /* 16602 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let cancelAnimationResult, dependencyMap, flag, num, num2, set, set2, tmp10, tmp11, tmp13, tmp14, tmp2, tmp3, tmp5, tmp6, tmp7;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
({ StyleSheet, View: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let c9 = 280;
let createStyles = createStyles_mod;
let obj = { root: { flex: 1 }, content: { flex: 1 }, block: obj2, border: obj3, glow: obj4, barArea: { overflow: "hidden" }, bar: rect, title: { flexGrow: 1, flexShrink: 1 }, actions: obj5 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { borderWidth: nativeDefault.space.PX_8, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
const __initData = { code: "function ConjureNativeControlOverlayTsx1(){const{shown,barHeight}=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};}" };
const __initData2 = { code: "function ConjureNativeControlOverlayTsx2(){const{shown,barHeight}=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};}" };
const __initData3 = { code: "function ConjureNativeControlOverlayTsx3(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
const __initData4 = { code: "function ConjureNativeControlOverlayTsx4(){const{shown,barHeight}=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};}" };
const __initData5 = { code: "function ConjureNativeControlOverlayTsx5(){const{shown,barHeight}=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};}" };
const __initData6 = { code: "function ConjureNativeControlOverlayTsx6(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((active) => {
  let children;
  let closure_2;
  let conjureControlPhase;
  let items1;
  let items2;
  let onOpenPublishedApp;
  let projectId;
  let sharedValue2;
  let stop;
  let stopping;
  let tmp8;
  let tmp9;
  let visible;
  const tmp = conjureControlPhase;
  let obj = conjureControlPhase(576);
  const cResult = obj.c(48);
  ({ projectId, visible, onOpenPublishedApp, children } = active);
  active = active.active;
  const tmp4 = closure_10();
  let obj2 = conjureControlPhase(16602);
  conjureControlPhase = obj2.useConjureControlPhase(active);
  const obj3 = conjureControlPhase(16602);
  const conjureControlStop = obj3.useConjureControlStop(projectId);
  ({ stop, stopping } = conjureControlStop);
  const obj4 = conjureControlPhase(8973);
  const conjureControlTuning = obj4.useConjureControlTuning(projectId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [sharedValue2];
    let fn = function c() {
      return sharedValue2.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  let tmp12 = visible;
  if (tmp12) {
    tmp12 = "controlling" === conjureControlPhase;
  }
  dependencyMap = tmp12;
  const tmpResult7 = tmp(4612);
  const sharedValue = tmpResult7.useSharedValue(0);
  const tmpResult8 = tmp(4612);
  const sharedValue1 = tmpResult8.useSharedValue(0);
  if (cResult[2] === conjureControlPhase) {
    if (cResult[3] === stateFromStores) {
      let tmp15;
      let tmp16;
      if (cResult[4] === sharedValue1) {
        tmp15 = cResult[5];
        tmp16 = cResult[6];
      }
      const effect = sharedValue.useEffect(tmp15, tmp16);
      let num3 = 0.5;
      const tmpResult9 = tmp(4612);
      sharedValue2 = tmpResult9.useSharedValue(0.5);
      const obj8 = sharedValue;
      if (cResult[7] === tmp12) {
        if (cResult[8] === sharedValue2) {
          let tmp19;
          let tmp20;
          let prop;
          if (cResult[9] === stateFromStores) {
            tmp19 = cResult[10];
            tmp20 = cResult[11];
          }
          const effect1 = obj8.useEffect(tmp19, tmp20);
          const tmpResult10 = tmp(4612);
          class U {
            constructor() {
              let bound;
              const obj = { height: bound * sharedValue.get() };
              bound = Math.max(0, sharedValue1.get());
              return obj;
            }
          }
          const obj5 = { shown: sharedValue1, barHeight: sharedValue };
          U.__closure = obj5;
          class B {
            constructor() {
              tmp = closure_2;
              if (tmp) {
                tmp2 = closure_1;
                if (!tmp2) {
                  tmp3 = closure_5;
                  num = 0.2;
                  result = closure_5.set(0.2);
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  set = closure_5.set;
                  tmp7 = closure_0(closure_2[11]);
                  tmp8 = closure_0;
                  tmp9 = closure_2;
                  withRepeat = tmp7.withRepeat;
                  tmp10 = closure_0(closure_2[14]);
                  obj = { duration: 1200, easing: null };
                  tmp11 = closure_0;
                  tmp12 = closure_2;
                  withTiming = tmp10.withTiming;
                  Easing = closure_0(closure_2[11]).Easing;
                  tmp13 = closure_0;
                  tmp14 = closure_2;
                  obj.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
                  num2 = 0.7;
                  flag = true;
                  num3 = -1;
                  result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                  fn = () => {
                    const obj = conjureControlPhase(closure_2[11]);
                    return obj.cancelAnimation(sharedValue2);
                  };
                }
                return fn;
              }
              obj2 = closure_0(closure_2[11]);
              cancelAnimationResult = obj2.cancelAnimation(closure_5);
              result2 = closure_5.set(0.5);
              return;
            }
          }
          U.__workletHash = 5735939888549;
          U.__initData = __initData;
          const animatedStyle = tmpResult10.useAnimatedStyle(U);
          const tmpResult11 = tmp(4612);
          class M {
            constructor() {
              let diff;
              let items;
              const obj = { transform: items };
              const obj2 = { translateY: diff * sharedValue.get() };
              diff = sharedValue1.get() - 1;
              items = [obj2];
              return obj;
            }
          }
          const obj6 = { shown: sharedValue1, barHeight: sharedValue };
          M.__closure = obj6;
          M.__workletHash = 11424550793114;
          M.__initData = __initData2;
          const animatedStyle1 = tmpResult11.useAnimatedStyle(M);
          const tmpResult12 = tmp(4612);
          class G {
            constructor() {
              const obj = { opacity: sharedValue2.get() };
              return obj;
            }
          }
          const obj7 = { pulse: sharedValue2 };
          G.__closure = obj7;
          G.__workletHash = 3342596553897;
          G.__initData = __initData3;
          const animatedStyle2 = tmpResult12.useAnimatedStyle(G);
          if (visible) {
            visible = "idle" !== conjureControlPhase;
          }
          if (cResult[12] === tmp12) {
            let tmp28;
            if (cResult[13] === conjureControlTuning) {
              tmp28 = cResult[14];
            }
            class U {
              constructor() {
                let bound;
                const obj = { height: bound * sharedValue.get() };
                bound = Math.max(0, sharedValue1.get());
                return obj;
              }
            }
            if (cResult[15] === animatedStyle) {
              if (cResult[16] === sharedValue) {
                if (cResult[17] === animatedStyle1) {
                  if (cResult[18] === tmp12) {
                    if (cResult[19] === onOpenPublishedApp) {
                      if (cResult[20] === visible) {
                        if (cResult[21] === (tmp12 && null != onOpenPublishedApp)) {
                          if (cResult[22] === tmp35) {
                            if (cResult[23] === stop) {
                              if (cResult[24] === stopping) {
                                if (cResult[25] === tmp4.actions) {
                                  if (cResult[26] === tmp4.bar) {
                                    if (cResult[27] === tmp4.barArea) {
                                      if (cResult[28] === tmp4.title) {
                                        let tmp37;
                                        if (cResult[29] === tmp28) {
                                          tmp37 = cResult[30];
                                        }
                                        if (cResult[31] === tmp12) {
                                          let tmp40;
                                          if (cResult[32] === tmp4.block) {
                                            tmp40 = cResult[33];
                                          }
                                          if (cResult[34] === children) {
                                            if (cResult[35] === tmp4.content) {
                                              let tmp42;
                                              if (cResult[36] === tmp40) {
                                                tmp42 = cResult[37];
                                              }
                                              if (cResult[38] === tmp12) {
                                                if (cResult[39] === animatedStyle2) {
                                                  if (cResult[40] === tmp4.border) {
                                                    if (cResult[43] === tmp4.root) {
                                                      if (cResult[44] === tmp42) {
                                                        if (cResult[45] === tmp45) {
                                                          let tmp47;
                                                          if (cResult[46] === tmp37) {
                                                            tmp47 = cResult[47];
                                                          }
                                                          return tmp47;
                                                        }
                                                      }
                                                    }
                                                    class U {
                                                      constructor() {
                                                        let bound;
                                                        const obj = { height: bound * sharedValue.get() };
                                                        bound = Math.max(0, sharedValue1.get());
                                                        return obj;
                                                      }
                                                    }
                                                    const obj9 = { style: tmp4.root, children: items1 };
                                                    items1 = [tmp37, , ];
                                                    class B {
                                                      constructor() {
                                                        tmp = closure_2;
                                                        if (tmp) {
                                                          tmp2 = closure_1;
                                                          if (!tmp2) {
                                                            tmp3 = closure_5;
                                                            num = 0.2;
                                                            result = closure_5.set(0.2);
                                                            tmp5 = closure_0;
                                                            tmp6 = closure_2;
                                                            set = closure_5.set;
                                                            tmp7 = closure_0(closure_2[11]);
                                                            tmp8 = closure_0;
                                                            tmp9 = closure_2;
                                                            withRepeat = tmp7.withRepeat;
                                                            tmp10 = closure_0(closure_2[14]);
                                                            obj = { duration: 1200, easing: null };
                                                            tmp11 = closure_0;
                                                            tmp12 = closure_2;
                                                            withTiming = tmp10.withTiming;
                                                            Easing = closure_0(closure_2[11]).Easing;
                                                            tmp13 = closure_0;
                                                            tmp14 = closure_2;
                                                            obj.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
                                                            num2 = 0.7;
                                                            flag = true;
                                                            num3 = -1;
                                                            result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                                                            fn = () => {
                                                              const obj = conjureControlPhase(closure_2[11]);
                                                              return obj.cancelAnimation(sharedValue2);
                                                            };
                                                          }
                                                          return fn;
                                                        }
                                                        obj2 = closure_0(closure_2[11]);
                                                        cancelAnimationResult = obj2.cancelAnimation(closure_5);
                                                        result2 = closure_5.set(0.5);
                                                        return;
                                                      }
                                                    }
                                                    items1[2] = tmp45;
                                                    const tmp49 = closure_7(sharedValue1, obj9);
                                                    cResult[43] = tmp4.root;
                                                    class M {
                                                      constructor() {
                                                        let diff;
                                                        let items;
                                                        const obj = { transform: items };
                                                        const obj2 = { translateY: diff * sharedValue.get() };
                                                        diff = sharedValue1.get() - 1;
                                                        items = [obj2];
                                                        return obj;
                                                      }
                                                    }
                                                    cResult[44] = tmp42;
                                                    cResult[45] = tmp45;
                                                    cResult[46] = tmp37;
                                                    cResult[47] = tmp49;
                                                    tmp47 = tmp49;
                                                  }
                                                }
                                              }
                                              class U {
                                                constructor() {
                                                  let bound;
                                                  const obj = { height: bound * sharedValue.get() };
                                                  bound = Math.max(0, sharedValue1.get());
                                                  return obj;
                                                }
                                              }
                                              cResult[38] = tmp12;
                                              cResult[39] = animatedStyle2;
                                              class B {
                                                constructor() {
                                                  tmp = closure_2;
                                                  if (tmp) {
                                                    tmp2 = closure_1;
                                                    if (!tmp2) {
                                                      tmp3 = closure_5;
                                                      num = 0.2;
                                                      result = closure_5.set(0.2);
                                                      tmp5 = closure_0;
                                                      tmp6 = closure_2;
                                                      set = closure_5.set;
                                                      tmp7 = closure_0(closure_2[11]);
                                                      tmp8 = closure_0;
                                                      tmp9 = closure_2;
                                                      withRepeat = tmp7.withRepeat;
                                                      tmp10 = closure_0(closure_2[14]);
                                                      obj = { duration: 1200, easing: null };
                                                      tmp11 = closure_0;
                                                      tmp12 = closure_2;
                                                      withTiming = tmp10.withTiming;
                                                      Easing = closure_0(closure_2[11]).Easing;
                                                      tmp13 = closure_0;
                                                      tmp14 = closure_2;
                                                      obj.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
                                                      num2 = 0.7;
                                                      flag = true;
                                                      num3 = -1;
                                                      result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                                                      fn = () => {
                                                        const obj = conjureControlPhase(closure_2[11]);
                                                        return obj.cancelAnimation(sharedValue2);
                                                      };
                                                    }
                                                    return fn;
                                                  }
                                                  obj2 = closure_0(closure_2[11]);
                                                  cancelAnimationResult = obj2.cancelAnimation(closure_5);
                                                  result2 = closure_5.set(0.5);
                                                  return;
                                                }
                                              }
                                              cResult[40] = tmp4.border;
                                              cResult[41] = tmp4.glow;
                                              cResult[42] = null;
                                              class M {
                                                constructor() {
                                                  let diff;
                                                  let items;
                                                  const obj = { transform: items };
                                                  const obj2 = { translateY: diff * sharedValue.get() };
                                                  diff = sharedValue1.get() - 1;
                                                  items = [obj2];
                                                  return obj;
                                                }
                                              }
                                            }
                                          }
                                          class U {
                                            constructor() {
                                              let bound;
                                              const obj = { height: bound * sharedValue.get() };
                                              bound = Math.max(0, sharedValue1.get());
                                              return obj;
                                            }
                                          }
                                          const obj10 = { style: tmp4.content, children: items2 };
                                          items2 = [children, ];
                                          class B {
                                            constructor() {
                                              tmp = closure_2;
                                              if (tmp) {
                                                tmp2 = closure_1;
                                                if (!tmp2) {
                                                  tmp3 = closure_5;
                                                  num = 0.2;
                                                  result = closure_5.set(0.2);
                                                  tmp5 = closure_0;
                                                  tmp6 = closure_2;
                                                  set = closure_5.set;
                                                  tmp7 = closure_0(closure_2[11]);
                                                  tmp8 = closure_0;
                                                  tmp9 = closure_2;
                                                  withRepeat = tmp7.withRepeat;
                                                  tmp10 = closure_0(closure_2[14]);
                                                  obj = { duration: 1200, easing: null };
                                                  tmp11 = closure_0;
                                                  tmp12 = closure_2;
                                                  withTiming = tmp10.withTiming;
                                                  Easing = closure_0(closure_2[11]).Easing;
                                                  tmp13 = closure_0;
                                                  tmp14 = closure_2;
                                                  obj.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
                                                  num2 = 0.7;
                                                  flag = true;
                                                  num3 = -1;
                                                  result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                                                  fn = () => {
                                                    const obj = conjureControlPhase(closure_2[11]);
                                                    return obj.cancelAnimation(sharedValue2);
                                                  };
                                                }
                                                return fn;
                                              }
                                              obj2 = closure_0(closure_2[11]);
                                              cancelAnimationResult = obj2.cancelAnimation(closure_5);
                                              result2 = closure_5.set(0.5);
                                              return;
                                            }
                                          }
                                          const tmp44 = closure_7(sharedValue1, obj10);
                                          cResult[34] = children;
                                          class M {
                                            constructor() {
                                              let diff;
                                              let items;
                                              const obj = { transform: items };
                                              const obj2 = { translateY: diff * sharedValue.get() };
                                              diff = sharedValue1.get() - 1;
                                              items = [obj2];
                                              return obj;
                                            }
                                          }
                                          cResult[36] = tmp40;
                                          cResult[37] = tmp44;
                                          tmp42 = tmp44;
                                        }
                                        class U {
                                          constructor() {
                                            let bound;
                                            const obj = { height: bound * sharedValue.get() };
                                            bound = Math.max(0, sharedValue1.get());
                                            return obj;
                                          }
                                        }
                                        cResult[31] = tmp12;
                                        cResult[32] = tmp4.block;
                                        class B {
                                          constructor() {
                                            tmp = closure_2;
                                            if (tmp) {
                                              tmp2 = closure_1;
                                              if (!tmp2) {
                                                tmp3 = closure_5;
                                                num = 0.2;
                                                result = closure_5.set(0.2);
                                                tmp5 = closure_0;
                                                tmp6 = closure_2;
                                                set = closure_5.set;
                                                tmp7 = closure_0(closure_2[11]);
                                                tmp8 = closure_0;
                                                tmp9 = closure_2;
                                                withRepeat = tmp7.withRepeat;
                                                tmp10 = closure_0(closure_2[14]);
                                                obj = { duration: 1200, easing: null };
                                                tmp11 = closure_0;
                                                tmp12 = closure_2;
                                                withTiming = tmp10.withTiming;
                                                Easing = closure_0(closure_2[11]).Easing;
                                                tmp13 = closure_0;
                                                tmp14 = closure_2;
                                                obj.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
                                                num2 = 0.7;
                                                flag = true;
                                                num3 = -1;
                                                result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                                                fn = () => {
                                                  const obj = conjureControlPhase(closure_2[11]);
                                                  return obj.cancelAnimation(sharedValue2);
                                                };
                                              }
                                              return fn;
                                            }
                                            obj2 = closure_0(closure_2[11]);
                                            cancelAnimationResult = obj2.cancelAnimation(closure_5);
                                            result2 = closure_5.set(0.5);
                                            return;
                                          }
                                        }
                                        cResult[33] = null;
                                        tmp40 = tmp41;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            class B {
              constructor() {
                tmp = closure_2;
                if (tmp) {
                  tmp2 = closure_1;
                  if (!tmp2) {
                    tmp3 = closure_5;
                    num = 0.2;
                    result = closure_5.set(0.2);
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    set = closure_5.set;
                    tmp7 = closure_0(closure_2[11]);
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    withRepeat = tmp7.withRepeat;
                    tmp10 = closure_0(closure_2[14]);
                    obj = { duration: 1200, easing: null };
                    tmp11 = closure_0;
                    tmp12 = closure_2;
                    withTiming = tmp10.withTiming;
                    Easing = closure_0(closure_2[11]).Easing;
                    tmp13 = closure_0;
                    tmp14 = closure_2;
                    obj.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
                    num2 = 0.7;
                    flag = true;
                    num3 = -1;
                    result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
                    fn = () => {
                      const obj = conjureControlPhase(closure_2[11]);
                      return obj.cancelAnimation(sharedValue2);
                    };
                  }
                  return fn;
                }
                obj2 = closure_0(closure_2[11]);
                cancelAnimationResult = obj2.cancelAnimation(closure_5);
                result2 = closure_5.set(0.5);
                return;
              }
            }
            cResult[15] = animatedStyle;
            cResult[16] = sharedValue;
            class M {
              constructor() {
                let diff;
                let items;
                const obj = { transform: items };
                const obj2 = { translateY: diff * sharedValue.get() };
                diff = sharedValue1.get() - 1;
                items = [obj2];
                return obj;
              }
            }
            cResult[18] = tmp12;
            cResult[19] = onOpenPublishedApp;
            cResult[20] = visible;
            cResult[21] = tmp12 && null != onOpenPublishedApp;
            cResult[22] = tmp35;
            class G {
              constructor() {
                const obj = { opacity: sharedValue2.get() };
                return obj;
              }
            }
            cResult[23] = stop;
            cResult[24] = stopping;
            cResult[25] = tmp4.actions;
            cResult[26] = tmp4.bar;
            cResult[27] = tmp4.barArea;
            cResult[28] = tmp4.title;
            cResult[29] = tmp28;
            cResult[30] = null;
            tmp37 = tmp39;
          }
          const intl = tmp(1126).intl;
          const string = intl.string;
          const tmp30 = stateFromStores(3723);
          if (tmp12) {
            prop = conjureControlTuning ? tmp30["VJW/5P"] : tmp30["+hD2Iz"];
          } else {
            prop = tmp30["h+i1r9"];
          }
          const stringResult = string(prop);
          class D {
            constructor() {
              let Easing;
              if ("controlling" === conjureControlPhase) {
                let num5 = 1;
                set2 = sharedValue1.set;
                if (!stateFromStores) {
                  const obj2 = spring;
                  num5 = obj2.withSpring(1, springPresets.SUBTLE_SPRING);
                }
                set2(num5);
              } else if ("handoff" === tmp) {
                set = sharedValue1.set;
                const withDelay = ReanimatedRexport.withDelay;
                ReanimatedRexport;
                const diff = useConjureControlBar.CONJURE_CONTROL_HANDOFF_MS - c9;
                let num3 = 0;
                const withTiming = timing.withTiming;
                timing;
                if (!stateFromStores) {
                  num3 = c9;
                }
                const obj = { duration: num3, easing: Easing.in(ReanimatedRexport.Easing.ease) };
                Easing = ReanimatedRexport.Easing;
                const result = set(withDelay(diff, withTiming(0, obj)));
              } else {
                const result1 = sharedValue1.set(0);
              }
            }
          }
          cResult[12] = tmp12;
          cResult[13] = conjureControlTuning;
          cResult[14] = stringResult;
          tmp28 = stringResult;
        }
      }
      class B {
        constructor() {
          tmp = closure_2;
          if (tmp) {
            tmp2 = closure_1;
            if (!tmp2) {
              tmp3 = closure_5;
              num = 0.2;
              result = closure_5.set(0.2);
              tmp5 = closure_0;
              tmp6 = closure_2;
              set = closure_5.set;
              tmp7 = closure_0(closure_2[11]);
              tmp8 = closure_0;
              tmp9 = closure_2;
              withRepeat = tmp7.withRepeat;
              tmp10 = closure_0(closure_2[14]);
              obj = { duration: 1200, easing: null };
              tmp11 = closure_0;
              tmp12 = closure_2;
              withTiming = tmp10.withTiming;
              Easing = closure_0(closure_2[11]).Easing;
              tmp13 = closure_0;
              tmp14 = closure_2;
              obj.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
              num2 = 0.7;
              flag = true;
              num3 = -1;
              result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
              fn = () => {
                const obj = conjureControlPhase(closure_2[11]);
                return obj.cancelAnimation(sharedValue2);
              };
            }
            return fn;
          }
          obj2 = closure_0(closure_2[11]);
          cancelAnimationResult = obj2.cancelAnimation(closure_5);
          result2 = closure_5.set(0.5);
          return;
        }
      }
      const items3 = [tmp12, sharedValue2, stateFromStores];
      let num5 = 8;
      cResult[8] = sharedValue2;
      cResult[9] = stateFromStores;
      cResult[10] = B;
      cResult[11] = items3;
      tmp20 = items3;
      tmp19 = B;
    }
  }
  class D {
    constructor() {
      let Easing;
      if ("controlling" === conjureControlPhase) {
        let num5 = 1;
        set2 = sharedValue1.set;
        if (!stateFromStores) {
          const obj2 = spring;
          num5 = obj2.withSpring(1, springPresets.SUBTLE_SPRING);
        }
        set2(num5);
      } else if ("handoff" === tmp) {
        set = sharedValue1.set;
        const withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        const diff = useConjureControlBar.CONJURE_CONTROL_HANDOFF_MS - c9;
        let num3 = 0;
        const withTiming = timing.withTiming;
        timing;
        if (!stateFromStores) {
          num3 = c9;
        }
        const obj = { duration: num3, easing: Easing.in(ReanimatedRexport.Easing.ease) };
        Easing = ReanimatedRexport.Easing;
        const result = set(withDelay(diff, withTiming(0, obj)));
      } else {
        const result1 = sharedValue1.set(0);
      }
    }
  }
  const items4 = [sharedValue1, conjureControlPhase, stateFromStores];
  cResult[2] = conjureControlPhase;
  cResult[3] = stateFromStores;
  cResult[4] = sharedValue1;
  cResult[5] = D;
  cResult[6] = items4;
  tmp16 = items4;
  tmp15 = D;
}) : ((arg0) => {
  let active;
  let children;
  let closure_2;
  let combined;
  let intl3;
  let intl4;
  let items10;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  let items9;
  let onOpenPublishedApp;
  let projectId;
  let prop1;
  let stop;
  let stopping;
  let tmp20;
  let visible;
  ({ projectId, visible, onOpenPublishedApp } = arg0);
  let conjureControlPhase;
  dependencyMap = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  ({ active, children } = arg0);
  const tmp = closure_10();
  let obj = conjureControlPhase(16602);
  conjureControlPhase = obj.useConjureControlPhase(active);
  let obj2 = conjureControlPhase(16602);
  const conjureControlStop = obj2.useConjureControlStop(projectId);
  ({ stop, stopping } = conjureControlStop);
  const obj3 = conjureControlPhase(8973);
  const conjureControlTuning = obj3.useConjureControlTuning(projectId);
  let items = [sharedValue2];
  const obj4 = conjureControlPhase(504);
  const stateFromStores = obj4.useStateFromStores(items, () => sharedValue2.useReducedMotion);
  let tmp8 = visible;
  if (tmp8) {
    tmp8 = "controlling" === conjureControlPhase;
  }
  dependencyMap = tmp8;
  const tmp2Result = conjureControlPhase(4612);
  sharedValue = tmp2Result.useSharedValue(0);
  const tmp2Result6 = conjureControlPhase(4612);
  sharedValue1 = tmp2Result6.useSharedValue(0);
  const items1 = [sharedValue1, conjureControlPhase, stateFromStores];
  const effect = sharedValue.useEffect(() => {
    let Easing;
    if ("controlling" === conjureControlPhase) {
      let num5 = 1;
      set2 = sharedValue1.set;
      if (!stateFromStores) {
        const obj2 = spring;
        num5 = obj2.withSpring(1, springPresets.SUBTLE_SPRING);
      }
      set2(num5);
    } else if ("handoff" === tmp) {
      set = sharedValue1.set;
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const diff = useConjureControlBar.CONJURE_CONTROL_HANDOFF_MS - c9;
      let num3 = 0;
      const withTiming = timing.withTiming;
      timing;
      if (!stateFromStores) {
        num3 = c9;
      }
      const obj = { duration: num3, easing: Easing.in(ReanimatedRexport.Easing.ease) };
      Easing = ReanimatedRexport.Easing;
      const result = set(withDelay(diff, withTiming(0, obj)));
    } else {
      const result1 = sharedValue1.set(0);
    }
  }, items1);
  const tmp2Result7 = conjureControlPhase(4612);
  sharedValue2 = tmp2Result7.useSharedValue(0.5);
  const items2 = [tmp8, sharedValue2, stateFromStores];
  const effect1 = sharedValue.useEffect(() => {
    let Easing;
    if (closure_2) {
      let fn;
      if (!stateFromStores) {
        const result = sharedValue2.set(0.2);
        set = sharedValue2.set;
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        let obj = { duration: 1200, easing: Easing.inOut(ReanimatedRexport.Easing.ease) };
        const withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        const result1 = set(withRepeat(withTiming(0.7, obj), -1, true));
        fn = () => {
          const obj = conjureControlPhase(closure_2[11]);
          return obj.cancelAnimation(sharedValue2);
        };
      }
      return fn;
    }
    const obj2 = ReanimatedRexport;
    obj2.cancelAnimation(sharedValue2);
    const result2 = sharedValue2.set(0.5);
  }, items2);
  const tmp2Result8 = conjureControlPhase(4612);
  class P {
    constructor() {
      let bound;
      const obj = { height: bound * sharedValue.get() };
      bound = Math.max(0, sharedValue1.get());
      return obj;
    }
  }
  P.__closure = { shown: sharedValue1, barHeight: sharedValue };
  P.__workletHash = 10340375351296;
  P.__initData = __initData4;
  const animatedStyle = tmp2Result8.useAnimatedStyle(P);
  const tmp2Result9 = conjureControlPhase(4612);
  class V {
    constructor() {
      let diff;
      let items;
      const obj = { transform: items };
      const obj2 = { translateY: diff * sharedValue.get() };
      diff = sharedValue1.get() - 1;
      items = [obj2];
      return obj;
    }
  }
  V.__closure = { shown: sharedValue1, barHeight: sharedValue };
  V.__workletHash = 13798762691965;
  V.__initData = __initData5;
  const animatedStyle1 = tmp2Result9.useAnimatedStyle(V);
  const tmp2Result10 = conjureControlPhase(4612);
  class L {
    constructor() {
      const obj = { opacity: sharedValue2.get() };
      return obj;
    }
  }
  L.__closure = { pulse: sharedValue2 };
  L.__workletHash = 6446462441996;
  L.__initData = __initData6;
  const animatedStyle2 = tmp2Result10.useAnimatedStyle(L);
  const intl = tmp2(1126).intl;
  const string = intl.string;
  const tmp18 = stateFromStores(3723);
  if (tmp8) {
    let prop;
    let tmp22;
    if (conjureControlTuning) {
      prop = tmp18["VJW/5P"];
      tmp22 = tmp17;
    } else {
      prop = tmp18["+hD2Iz"];
      tmp22 = tmp17;
    }
    tmp20 = tmp22;
    prop1 = prop;
  } else {
    prop1 = tmp18["h+i1r9"];
    tmp20 = tmp17;
  }
  const stringResult = string(prop1);
  let tmp40Result4 = null;
  const obj5 = { style: tmp.root, children: items7 };
  const tmp24 = tmp8 && null != stop;
  if (visible) {
    tmp40Result4 = null;
    if ("idle" !== conjureControlPhase) {
      let tmp40Result;
      const obj6 = { style: items3, children: null };
      items3 = [tmp.barArea, animatedStyle];
      const View = tmp20(4612).View;
      const obj7 = {
        style: items4,
        onLayout(nativeEvent) {
              return sharedValue.set(nativeEvent.nativeEvent.layout.height);
            },
        accessibilityLiveRegion: "polite",
        children: null
      };
      items4 = [tmp.bar, animatedStyle1];
      const View2 = tmp20(4612).View;
      if (tmp8) {
        tmp40Result = closure_6(tmp2(14209).AILoader, { size: 12, color: "text-overlay-light" });
      } else {
        const obj8 = { size: "sm", color: tmp20(587).colors.TEXT_OVERLAY_LIGHT };
        const SparklesIcon = tmp2(16603).SparklesIcon;
        tmp40Result = closure_6(SparklesIcon, obj8);
      }
      const items5 = [tmp40Result, , ];
      const obj9 = { variant: "text-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: tmp.title, accessibilityLabel: combined, children: stringResult };
      combined = stringResult;
      const Text = tmp2(4886).Text;
      if (tmp8) {
        const intl2 = tmp2(1126).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + stringResult + ". " + intl2.string(tmp20(3723).fg1sor);
      }
      items5[1] = closure_6(Text, obj9);
      if (!tmp8) {
        let tmp26Result = null;
        items5[2] = tmp26Result;
        obj7.children = items5;
        obj6.children = closure_7(View2, obj7);
        tmp40Result4 = closure_6(View, obj6);
      }
      let tmp40Result5 = null;
      const obj10 = { style: tmp.actions, children: items6 };
      if (null != onOpenPublishedApp) {
        const obj11 = { variant: "secondary-overlay", size: "sm", text: intl3.string(tmp20(3723)["1NcO7H"]), onPress: onOpenPublishedApp };
        const Button = tmp2(5594).Button;
        intl3 = tmp2(1126).intl;
        tmp40Result5 = closure_6(Button, obj11);
      }
      items6 = [tmp40Result5, ];
      let tmp40Result6 = null;
      if (tmp24) {
        const obj12 = { variant: "primary-overlay", size: "sm", text: intl4.string(tmp20(3723).oU59sU), loading: stopping, onPress: stop };
        const Button2 = tmp2(5594).Button;
        intl4 = tmp2(1126).intl;
        tmp40Result6 = closure_6(Button2, obj12);
      }
      items6[1] = tmp40Result6;
      tmp26Result = closure_7(tmp27, obj10);
    }
  }
  items7 = [tmp40Result4, , ];
  const obj13 = { style: tmp.content, children: items8 };
  items8 = [children, ];
  let tmp35 = null;
  if (tmp8) {
    const obj14 = { style: tmp.block, pointerEvents: "box-only" };
    tmp35 = closure_6(tmp27, obj14);
  }
  items8[1] = tmp35;
  items7[1] = closure_7(sharedValue1, obj13);
  let tmp26Result2 = null;
  if (tmp8) {
    const obj16 = { style: items9, pointerEvents: "none" };
    items9 = [tmp.glow, animatedStyle2];
    const obj15 = { children: items10 };
    items10 = [closure_6(tmp20(4612).View, obj16), ];
    const obj17 = { style: tmp.border, pointerEvents: "none" };
    items10[1] = closure_6(sharedValue1, obj17);
    tmp26Result2 = closure_7(closure_8, obj15);
  }
  items7[2] = tmp26Result2;
  return closure_7(sharedValue1, obj5);
});
let result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativeControlOverlay.tsx");

export default tmp8;