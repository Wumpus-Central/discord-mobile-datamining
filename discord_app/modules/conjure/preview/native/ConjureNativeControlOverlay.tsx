// === Module 11748: ConjureNativeControlOverlay ===

// Module 11748 (ConjureNativeControlOverlay)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5014 */;
import timing from "timing" /* 5167 */;
import spring from "spring" /* 5208 */;
import springPresets from "springPresets" /* 5209 */;
import useConjureControlBar from "useConjureControlBar" /* 11749 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4946 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let c9 = 280;
const createStyles = fn(4945);
let obj2 = { root: { flex: 1 }, content: { flex: 1 }, block: null, border: null, glow: null, barArea: null, bar: null, title: null, actions: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.block = {};
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.borderWidth = 2;
obj4.borderColor = nativeDefault.colors.BACKGROUND_BRAND;
obj2.border = obj4;
let obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5.borderWidth = nativeDefault.space.PX_8;
obj5.borderColor = nativeDefault.colors.BACKGROUND_BRAND;
obj2.glow = obj5;
obj2.barArea = { overflow: "hidden" };
const rect = { position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.bar = rect;
obj2.title = { flexGrow: 1, flexShrink: 1 };
obj2.actions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const __initData = { code: "function ConjureNativeControlOverlayTsx1(){const{shown,barHeight}=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};}" };
const __initData2 = { code: "function ConjureNativeControlOverlayTsx2(){const{shown,barHeight}=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};}" };
const __initData3 = { code: "function ConjureNativeControlOverlayTsx3(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
const __initData4 = { code: "function ConjureNativeControlOverlayTsx4(){const{shown,barHeight}=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};}" };
const __initData5 = { code: "function ConjureNativeControlOverlayTsx5(){const{shown,barHeight}=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};}" };
const __initData6 = { code: "function ConjureNativeControlOverlayTsx6(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
const ReactCompilerGating = fn(558);
let obj3 = {};
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativeControlOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeControlOverlay(active) {
  const cResult = conjureControlPhase(576).c(46);
  ({ projectId, visible, children } = active);
  const tmp4 = closure_10();
  let obj = conjureControlPhase(576);
  conjureControlPhase = conjureControlPhase(11749).useConjureControlPhase(active.active);
  let obj2 = conjureControlPhase(11749);
  const conjureControlStop = conjureControlPhase(11749).useConjureControlStop(projectId);
  ({ stop, stopping } = conjureControlStop);
  let obj3 = conjureControlPhase(11749);
  const conjureControlTuning = conjureControlPhase(11052).useConjureControlTuning(projectId);
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
  let obj4 = conjureControlPhase(11052);
  const stateFromStores = conjureControlPhase(504).useStateFromStores(tmp8, tmp9);
  let tmp12 = visible;
  if (visible) {
    tmp12 = "controlling" === conjureControlPhase;
  }
  dependencyMap = tmp12;
  const tmpResult = conjureControlPhase(504);
  const sharedValue = conjureControlPhase(5014).useSharedValue(0);
  const tmpResult7 = conjureControlPhase(5014);
  const sharedValue1 = conjureControlPhase(5014).useSharedValue(0);
  if (cResult[2] === conjureControlPhase) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === sharedValue1) {
        let tmp15 = cResult[5];
        let tmp16 = cResult[6];
      }
      const effect = sharedValue.useEffect(tmp15, tmp16);
      sharedValue2 = tmp(5014).useSharedValue(0.5);
      if (cResult[7] === tmp12) {
        if (cResult[8] === sharedValue2) {
          if (cResult[9] === stateFromStores) {
            let tmp19 = cResult[10];
            let tmp20 = cResult[11];
          }
          const effect1 = obj8.useEffect(tmp19, tmp20);
          class B {
            constructor() {
              obj = { height: null };
              bound = Math.max(0, closure_4.get());
              obj.height = bound * closure_3.get();
              return obj;
            }
          }
          const obj5 = { shown: sharedValue1, barHeight: sharedValue };
          B.__closure = obj5;
          class P {
            constructor() {
              if (closure_2) {
                tmp = closure_1;
                if (!closure_1) {
                  tmp2 = closure_5;
                  num = 0.2;
                  result = closure_5.set(0.2);
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj = closure_0(closure_2[11]);
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  obj2 = closure_0(closure_2[14]);
                  obj1 = { duration: 1200, easing: null };
                  tmp8 = closure_0;
                  tmp9 = closure_2;
                  Easing = closure_0(closure_2[11]).Easing;
                  tmp10 = closure_0;
                  tmp11 = closure_2;
                  obj1.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
                  num2 = 0.7;
                  flag = true;
                  num3 = -1;
                  result1 = closure_5.set(obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true));
                  fn = () => conjureControlPhase(closure_2[11]).cancelAnimation(sharedValue2);
                }
                return fn;
              }
              obj4 = closure_0(closure_2[11]);
              cancelAnimationResult = obj4.cancelAnimation(closure_5);
              result2 = closure_5.set(0.5);
              return;
            }
          }
          B.__workletHash = 5735939888549;
          B.__initData = __initData;
          const animatedStyle = tmp(5014).useAnimatedStyle(B);
          const tmpResult10 = tmp(5014);
          const fn2 = function z() {
            const obj = { transform: null };
            const obj2 = { translateY: null };
            const diff = sharedValue1.get() - 1;
            obj2.translateY = diff * sharedValue.get();
            const items = [obj2];
            obj.transform = items;
            return obj;
          };
          const obj6 = { shown: sharedValue1, barHeight: sharedValue };
          fn2.__closure = obj6;
          fn2.__workletHash = 11424550793114;
          fn2.__initData = __initData2;
          const animatedStyle1 = tmp(5014).useAnimatedStyle(fn2);
          const tmpResult11 = tmp(5014);
          class M {
            constructor() {
              obj = { opacity: closure_5.get() };
              return obj;
            }
          }
          const obj7 = { pulse: sharedValue2 };
          M.__closure = obj7;
          M.__workletHash = 3342596553897;
          M.__initData = __initData3;
          const animatedStyle2 = tmp(5014).useAnimatedStyle(M);
          if (visible) {
            visible = "idle" !== conjureControlPhase;
          }
          if (cResult[12] === tmp12) {
            if (cResult[13] === conjureControlTuning) {
              let tmp33 = tmp12;
              if (tmp12) {
                tmp33 = null != stop;
              }
              class B {
                constructor() {
                  obj = { height: null };
                  bound = Math.max(0, closure_4.get());
                  obj.height = bound * closure_3.get();
                  return obj;
                }
              }
              let tmp37Result4 = null;
              if (visible) {
                const obj9 = { style: null, children: null };
                class B {
                  constructor() {
                    obj = { height: null };
                    bound = Math.max(0, closure_4.get());
                    obj.height = bound * closure_3.get();
                    return obj;
                  }
                }
                tmp39[0] = tmp4.barArea;
                tmp39[1] = animatedStyle;
                obj9.style = tmp39;
                class P {
                  constructor() {
                    if (closure_2) {
                      tmp = closure_1;
                      if (!closure_1) {
                        tmp2 = closure_5;
                        num = 0.2;
                        result = closure_5.set(0.2);
                        tmp4 = closure_0;
                        tmp5 = closure_2;
                        obj = closure_0(closure_2[11]);
                        tmp6 = closure_0;
                        tmp7 = closure_2;
                        obj2 = closure_0(closure_2[14]);
                        obj1 = { duration: 1200, easing: null };
                        tmp8 = closure_0;
                        tmp9 = closure_2;
                        Easing = closure_0(closure_2[11]).Easing;
                        tmp10 = closure_0;
                        tmp11 = closure_2;
                        obj1.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
                        num2 = 0.7;
                        flag = true;
                        num3 = -1;
                        result1 = closure_5.set(obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true));
                        fn = () => conjureControlPhase(closure_2[11]).cancelAnimation(sharedValue2);
                      }
                      return fn;
                    }
                    obj4 = closure_0(closure_2[11]);
                    cancelAnimationResult = obj4.cancelAnimation(closure_5);
                    result2 = closure_5.set(0.5);
                    return;
                  }
                }
                const obj10 = { style: null, onLayout: null, accessibilityLiveRegion: "polite", children: null };
                const items1 = [tmp4.bar, animatedStyle1];
                obj10.style = items1;
                obj10.onLayout = function onLayout(nativeEvent) {
                  return sharedValue.set(nativeEvent.nativeEvent.layout.height);
                };
                if (tmp12) {
                  const tmp37Result = closure_6(tmp(11750).AILoader, { size: 12, color: "text-overlay-light" });
                } else {
                  const SparklesIcon = tmp(11754).SparklesIcon;
                  { size: "sm", color: null }.color = tmp38(587).colors.TEXT_OVERLAY_LIGHT;
                  class B {
                    constructor() {
                      obj = { height: null };
                      bound = Math.max(0, closure_4.get());
                      obj.height = bound * closure_3.get();
                      return obj;
                    }
                  }
                  const obj11 = { size: "sm", color: null };
                }
                const items2 = [tmp37Result, , ];
                const obj12 = { variant: "text-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: tmp4.title, accessibilityLabel: null, children: null };
                let combined = tmp28;
                if (tmp12) {
                  const intl2 = tmp(1128).intl;
                  const _HermesInternal = HermesInternal;
                  class B {
                    constructor() {
                      obj = { height: null };
                      bound = Math.max(0, closure_4.get());
                      obj.height = bound * closure_3.get();
                      return obj;
                    }
                  }
                  combined = "" + tmp28 + ". " + intl2.string(tmp38(3820).fg1sor);
                }
                obj12.accessibilityLabel = combined;
                class M {
                  constructor() {
                    obj = { opacity: closure_5.get() };
                    return obj;
                  }
                }
                items2[1] = closure_6(tmp(5195).Text, obj12);
                let tmp37Result3 = null;
                if (tmp33) {
                  const obj13 = { style: tmp4.actions, children: null };
                  class B {
                    constructor() {
                      obj = { height: null };
                      bound = Math.max(0, closure_4.get());
                      obj.height = bound * closure_3.get();
                      return obj;
                    }
                  }
                  const intl3 = tmp(1128).intl;
                  tmp45[2] = intl3.string(tmp38(3820).oU59sU);
                  class P {
                    constructor() {
                      if (closure_2) {
                        tmp = closure_1;
                        if (!closure_1) {
                          tmp2 = closure_5;
                          num = 0.2;
                          result = closure_5.set(0.2);
                          tmp4 = closure_0;
                          tmp5 = closure_2;
                          obj = closure_0(closure_2[11]);
                          tmp6 = closure_0;
                          tmp7 = closure_2;
                          obj2 = closure_0(closure_2[14]);
                          obj1 = { duration: 1200, easing: null };
                          tmp8 = closure_0;
                          tmp9 = closure_2;
                          Easing = closure_0(closure_2[11]).Easing;
                          tmp10 = closure_0;
                          tmp11 = closure_2;
                          obj1.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
                          num2 = 0.7;
                          flag = true;
                          num3 = -1;
                          result1 = closure_5.set(obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true));
                          fn = () => conjureControlPhase(closure_2[11]).cancelAnimation(sharedValue2);
                        }
                        return fn;
                      }
                      obj4 = closure_0(closure_2[11]);
                      cancelAnimationResult = obj4.cancelAnimation(closure_5);
                      result2 = closure_5.set(0.5);
                      return;
                    }
                  }
                  tmp45[4] = stop;
                  obj13.children = closure_6(tmp(5205).Button, tmp45);
                  tmp37Result3 = closure_6(sharedValue1, obj13);
                }
                items2[2] = tmp37Result3;
                obj10.children = items2;
                obj9.children = tmp40(stateFromStores(5014).View, obj10);
                tmp37Result4 = closure_6(stateFromStores(5014).View, obj9);
              }
              cResult[15] = animatedStyle;
              class P {
                constructor() {
                  if (closure_2) {
                    tmp = closure_1;
                    if (!closure_1) {
                      tmp2 = closure_5;
                      num = 0.2;
                      result = closure_5.set(0.2);
                      tmp4 = closure_0;
                      tmp5 = closure_2;
                      obj = closure_0(closure_2[11]);
                      tmp6 = closure_0;
                      tmp7 = closure_2;
                      obj2 = closure_0(closure_2[14]);
                      obj1 = { duration: 1200, easing: null };
                      tmp8 = closure_0;
                      tmp9 = closure_2;
                      Easing = closure_0(closure_2[11]).Easing;
                      tmp10 = closure_0;
                      tmp11 = closure_2;
                      obj1.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
                      num2 = 0.7;
                      flag = true;
                      num3 = -1;
                      result1 = closure_5.set(obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true));
                      fn = () => conjureControlPhase(closure_2[11]).cancelAnimation(sharedValue2);
                    }
                    return fn;
                  }
                  obj4 = closure_0(closure_2[11]);
                  cancelAnimationResult = obj4.cancelAnimation(closure_5);
                  result2 = closure_5.set(0.5);
                  return;
                }
              }
              cResult[16] = sharedValue;
              cResult[17] = animatedStyle1;
              cResult[18] = tmp12;
              cResult[19] = visible;
              cResult[20] = tmp33;
              cResult[21] = stop;
              cResult[22] = stopping;
              cResult[23] = tmp4.actions;
              class M {
                constructor() {
                  obj = { opacity: closure_5.get() };
                  return obj;
                }
              }
              cResult[25] = tmp4.barArea;
              cResult[26] = tmp4.title;
              cResult[27] = cResult[14];
              cResult[28] = tmp37Result4;
            }
          }
          const intl = tmp(1128).intl;
          const tmpResult12 = tmp(5014);
          if (!tmp12) {
            const stringResult = intl.string(tmp30["h+i1r9"]);
            cResult[12] = tmp12;
            class B {
              constructor() {
                obj = { height: null };
                bound = Math.max(0, closure_4.get());
                obj.height = bound * closure_3.get();
                return obj;
              }
            }
            cResult[13] = conjureControlTuning;
            cResult[14] = stringResult;
          }
          class R {
            constructor() {
              if ("controlling" === closure_0) {
                tmp20 = closure_1;
                num4 = 1;
                num5 = 1;
                tmp19 = closure_4;
                if (!closure_1) {
                  tmp21 = closure_0;
                  tmp22 = closure_2;
                  obj4 = closure_0(closure_2[12]);
                  tmp23 = closure_0;
                  tmp24 = closure_2;
                  num5 = obj4.withSpring(1, closure_0(closure_2[13]).SUBTLE_SPRING);
                }
                result = closure_4.set(num5);
              } else {
                str = "handoff";
                if ("handoff" === tmp) {
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  tmp4 = closure_4;
                  obj = closure_0(closure_2[11]);
                  tmp7 = closure_0;
                  tmp8 = closure_2;
                  tmp11 = closure_0;
                  tmp12 = closure_2;
                  tmp9 = c9;
                  diff = closure_0(closure_2[8]).CONJURE_CONTROL_HANDOFF_MS - c9;
                  obj2 = closure_0(closure_2[14]);
                  tmp13 = closure_1;
                  num2 = 0;
                  num3 = 0;
                  if (!closure_1) {
                    num3 = tmp9;
                  }
                  obj1 = { duration: null, easing: null };
                  obj1.duration = num3;
                  tmp14 = closure_0;
                  tmp15 = closure_2;
                  Easing = closure_0(closure_2[11]).Easing;
                  tmp16 = closure_0;
                  tmp17 = closure_2;
                  obj1.easing = Easing.in(closure_0(closure_2[11]).Easing.ease);
                  result1 = closure_4.set(obj.withDelay(diff, obj2.withTiming(0, obj1)));
                } else {
                  tmp2 = closure_4;
                  num = 0;
                  result2 = closure_4.set(0);
                }
              }
              return;
            }
          }
          tmp30 = stateFromStores(3820);
        }
      }
      class P {
        constructor() {
          if (closure_2) {
            tmp = closure_1;
            if (!closure_1) {
              tmp2 = closure_5;
              num = 0.2;
              result = closure_5.set(0.2);
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[11]);
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj2 = closure_0(closure_2[14]);
              obj1 = { duration: 1200, easing: null };
              tmp8 = closure_0;
              tmp9 = closure_2;
              Easing = closure_0(closure_2[11]).Easing;
              tmp10 = closure_0;
              tmp11 = closure_2;
              obj1.easing = Easing.inOut(closure_0(closure_2[11]).Easing.ease);
              num2 = 0.7;
              flag = true;
              num3 = -1;
              result1 = closure_5.set(obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true));
              fn = () => conjureControlPhase(closure_2[11]).cancelAnimation(sharedValue2);
            }
            return fn;
          }
          obj4 = closure_0(closure_2[11]);
          cancelAnimationResult = obj4.cancelAnimation(closure_5);
          result2 = closure_5.set(0.5);
          return;
        }
      }
      const items3 = [tmp12, sharedValue2, stateFromStores];
      cResult[7] = tmp12;
      cResult[8] = sharedValue2;
      cResult[9] = stateFromStores;
      cResult[10] = P;
      cResult[11] = items3;
      tmp20 = items3;
      tmp19 = P;
      obj8 = sharedValue;
      const tmpResult9 = tmp(5014);
    }
  }
  class R {
    constructor() {
      if ("controlling" === closure_0) {
        tmp20 = closure_1;
        num4 = 1;
        num5 = 1;
        tmp19 = closure_4;
        if (!closure_1) {
          tmp21 = closure_0;
          tmp22 = closure_2;
          obj4 = closure_0(closure_2[12]);
          tmp23 = closure_0;
          tmp24 = closure_2;
          num5 = obj4.withSpring(1, closure_0(closure_2[13]).SUBTLE_SPRING);
        }
        result = closure_4.set(num5);
      } else {
        str = "handoff";
        if ("handoff" === tmp) {
          tmp5 = closure_0;
          tmp6 = closure_2;
          tmp4 = closure_4;
          obj = closure_0(closure_2[11]);
          tmp7 = closure_0;
          tmp8 = closure_2;
          tmp11 = closure_0;
          tmp12 = closure_2;
          tmp9 = c9;
          diff = closure_0(closure_2[8]).CONJURE_CONTROL_HANDOFF_MS - c9;
          obj2 = closure_0(closure_2[14]);
          tmp13 = closure_1;
          num2 = 0;
          num3 = 0;
          if (!closure_1) {
            num3 = tmp9;
          }
          obj1 = { duration: null, easing: null };
          obj1.duration = num3;
          tmp14 = closure_0;
          tmp15 = closure_2;
          Easing = closure_0(closure_2[11]).Easing;
          tmp16 = closure_0;
          tmp17 = closure_2;
          obj1.easing = Easing.in(closure_0(closure_2[11]).Easing.ease);
          result1 = closure_4.set(obj.withDelay(diff, obj2.withTiming(0, obj1)));
        } else {
          tmp2 = closure_4;
          num = 0;
          result2 = closure_4.set(0);
        }
      }
      return;
    }
  }
  const items4 = [sharedValue1, conjureControlPhase, stateFromStores];
  cResult[2] = conjureControlPhase;
  cResult[3] = stateFromStores;
  cResult[4] = sharedValue1;
  cResult[5] = R;
  cResult[6] = items4;
  tmp16 = items4;
  tmp15 = R;
  const tmpResult8 = conjureControlPhase(5014);
}) : (function ConjureNativeControlOverlay(arg0) {
  ({ projectId, visible } = arg0);
  let conjureControlPhase;
  dependencyMap = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  ({ active, children } = arg0);
  const tmp = closure_10();
  conjureControlPhase = conjureControlPhase(11749).useConjureControlPhase(active);
  let obj = conjureControlPhase(11749);
  const conjureControlStop = conjureControlPhase(11749).useConjureControlStop(projectId);
  ({ stop, stopping } = conjureControlStop);
  let obj2 = conjureControlPhase(11749);
  const conjureControlTuning = conjureControlPhase(11052).useConjureControlTuning(projectId);
  let obj3 = conjureControlPhase(11052);
  let items = [sharedValue2];
  const stateFromStores = conjureControlPhase(504).useStateFromStores(items, () => sharedValue2.useReducedMotion);
  let tmp8 = visible;
  if (visible) {
    tmp8 = "controlling" === conjureControlPhase;
  }
  dependencyMap = tmp8;
  let obj4 = conjureControlPhase(504);
  sharedValue = conjureControlPhase(5014).useSharedValue(0);
  const tmp2Result = conjureControlPhase(5014);
  sharedValue1 = conjureControlPhase(5014).useSharedValue(0);
  const items1 = [sharedValue1, conjureControlPhase, stateFromStores];
  const effect = sharedValue.useEffect(() => {
    if ("controlling" === conjureControlPhase) {
      let num5 = 1;
      if (!stateFromStores) {
        num5 = spring.withSpring(1, springPresets.SUBTLE_SPRING);
      }
      const result = sharedValue1.set(num5);
    } else if ("handoff" === tmp) {
      const diff = useConjureControlBar.CONJURE_CONTROL_HANDOFF_MS - c9;
      const obj = ReanimatedRexport;
      let num3 = 0;
      if (!stateFromStores) {
        num3 = c9;
      }
      const obj3 = { duration: num3, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj3.easing = Easing.in(ReanimatedRexport.Easing.ease);
      const result1 = sharedValue1.set(obj.withDelay(diff, timing.withTiming(0, obj3)));
    } else {
      const result2 = sharedValue1.set(0);
    }
  }, items1);
  const tmp2Result6 = conjureControlPhase(5014);
  sharedValue2 = conjureControlPhase(5014).useSharedValue(0.5);
  const items2 = [tmp8, sharedValue2, stateFromStores];
  const effect1 = sharedValue.useEffect(() => {
    if (closure_2) {
      if (!stateFromStores) {
        const result = sharedValue2.set(0.2);
        const obj = ReanimatedRexport;
        const obj3 = { duration: 1200, easing: null };
        const Easing = ReanimatedRexport.Easing;
        obj3.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
        const result1 = sharedValue2.set(obj.withRepeat(timing.withTiming(0.7, obj3), -1, true));
        const fn = () => conjureControlPhase(closure_2[11]).cancelAnimation(sharedValue2);
      }
      return fn;
    }
    ReanimatedRexport.cancelAnimation(sharedValue2);
    const result2 = sharedValue2.set(0.5);
  }, items2);
  const tmp2Result7 = conjureControlPhase(5014);
  class D {
    constructor() {
      obj = { height: null };
      bound = Math.max(0, closure_4.get());
      obj.height = bound * closure_3.get();
      return obj;
    }
  }
  D.__closure = { shown: sharedValue1, barHeight: sharedValue };
  D.__workletHash = 10340375351296;
  D.__initData = __initData4;
  const animatedStyle = conjureControlPhase(5014).useAnimatedStyle(D);
  const tmp2Result8 = conjureControlPhase(5014);
  class V {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      diff = closure_4.get() - 1;
      obj1.translateY = diff * closure_3.get();
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  V.__closure = { shown: sharedValue1, barHeight: sharedValue };
  V.__workletHash = 13798762691965;
  V.__initData = __initData5;
  const animatedStyle1 = conjureControlPhase(5014).useAnimatedStyle(V);
  const tmp2Result9 = conjureControlPhase(5014);
  class L {
    constructor() {
      obj = { opacity: closure_5.get() };
      return obj;
    }
  }
  L.__closure = { pulse: sharedValue2 };
  L.__workletHash = 6446462441996;
  L.__initData = __initData6;
  const animatedStyle2 = conjureControlPhase(5014).useAnimatedStyle(L);
  const intl = tmp2(1128).intl;
  const tmp18 = stateFromStores(3820);
  if (tmp8) {
    if (conjureControlTuning) {
      let prop = tmp18["VJW/5P"];
    } else {
      prop = tmp18["+hD2Iz"];
    }
  } else {
    const stringResult = intl.string(tmp18["h+i1r9"]);
    const obj5 = { style: tmp.root, children: null };
    let tmp38Result4 = null;
    if (visible) {
      tmp38Result4 = null;
      if ("idle" !== conjureControlPhase) {
        const obj6 = { style: null, children: null };
        const items3 = [tmp.barArea, animatedStyle];
        obj6.style = items3;
        const obj7 = { style: null, onLayout: null, accessibilityLiveRegion: "polite", children: null };
        const items4 = [tmp.bar, animatedStyle1];
        obj7.style = items4;
        obj7.onLayout = function onLayout(nativeEvent) {
          return sharedValue.set(nativeEvent.nativeEvent.layout.height);
        };
        if (tmp8) {
          let tmp38Result = closure_6(tmp2(11750).AILoader, { size: 12, color: "text-overlay-light" });
        } else {
          const obj8 = { size: "sm", color: tmp17(587).colors.TEXT_OVERLAY_LIGHT };
          tmp38Result = closure_6(tmp2(11754).SparklesIcon, obj8);
        }
        const items5 = [tmp38Result, , ];
        const obj9 = { variant: "text-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: tmp.title, accessibilityLabel: null, children: null };
        let combined = stringResult;
        if (tmp8) {
          const intl2 = tmp2(1128).intl;
          const _HermesInternal = HermesInternal;
          combined = "" + stringResult + ". " + intl2.string(tmp17(3820).fg1sor);
        }
        obj9.accessibilityLabel = combined;
        obj9.children = stringResult;
        items5[1] = closure_6(tmp2(5195).Text, obj9);
        let tmp38Result3 = null;
        if (tmp8) {
          tmp38Result3 = null;
          if (null != stop) {
            const obj10 = { style: tmp.actions, children: null };
            const obj11 = { variant: "primary-overlay", size: "sm", text: null, loading: null, onPress: null };
            const intl3 = tmp2(1128).intl;
            obj11.text = intl3.string(tmp17(3820).oU59sU);
            obj11.loading = stopping;
            obj11.onPress = stop;
            obj10.children = closure_6(tmp2(5205).Button, obj11);
            tmp38Result3 = closure_6(tmp26, obj10);
          }
        }
        items5[2] = tmp38Result3;
        obj7.children = items5;
        obj6.children = closure_7(tmp17(5014).View, obj7);
        tmp38Result4 = closure_6(tmp17(5014).View, obj6);
      }
    }
    const items6 = [tmp38Result4, , ];
    const obj12 = { style: tmp.content, children: null };
    const items7 = [children, ];
    let tmp33 = null;
    if (tmp8) {
      const obj13 = { style: tmp.block, pointerEvents: "box-only" };
      tmp33 = closure_6(tmp26, obj13);
    }
    items7[1] = tmp33;
    obj12.children = items7;
    items6[1] = closure_7(sharedValue1, obj12);
    let tmp25Result = null;
    if (tmp8) {
      const obj14 = { children: null };
      const obj15 = { style: null, pointerEvents: "none" };
      const items8 = [tmp.glow, animatedStyle2];
      obj15.style = items8;
      const items9 = [closure_6(tmp17(5014).View, obj15), ];
      const obj16 = { style: tmp.border, pointerEvents: "none" };
      items9[1] = closure_6(tmp26, obj16);
      obj14.children = items9;
      tmp25Result = closure_7(closure_8, obj14);
    }
    items6[2] = tmp25Result;
    obj5.children = items6;
    return closure_7(sharedValue1, obj5);
  }
  const tmp2Result10 = conjureControlPhase(5014);
});