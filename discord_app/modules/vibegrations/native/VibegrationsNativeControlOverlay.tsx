// === Module 16595: VibegrationsNativeControlOverlay ===

// Module 16595 (VibegrationsNativeControlOverlay)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import useVibegrationsControlBar from "useVibegrationsControlBar" /* 16596 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let c9 = 280;
const createStyles = fn(4890);
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
const __initData = { code: "function VibegrationsNativeControlOverlayTsx1(){const{shown,barHeight}=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};}" };
const __initData2 = { code: "function VibegrationsNativeControlOverlayTsx2(){const{shown,barHeight}=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};}" };
const __initData3 = { code: "function VibegrationsNativeControlOverlayTsx3(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
const __initData4 = { code: "function VibegrationsNativeControlOverlayTsx4(){const{shown,barHeight}=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};}" };
const __initData5 = { code: "function VibegrationsNativeControlOverlayTsx5(){const{shown,barHeight}=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};}" };
const __initData6 = { code: "function VibegrationsNativeControlOverlayTsx6(){const{pulse}=this.__closure;return{opacity:pulse.get()};}" };
const ReactCompilerGating = fn(558);
let obj3 = {};
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeControlOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = vibegrationsControlPhase(576).c(47);
  ({ visible, onOpenPublishedApp, children } = arg0);
  ({ projectId, active } = arg0);
  const tmp4 = closure_10();
  let obj = vibegrationsControlPhase(576);
  vibegrationsControlPhase = vibegrationsControlPhase(16596).useVibegrationsControlPhase(active);
  let obj2 = vibegrationsControlPhase(16596);
  const vibegrationsControlStop = vibegrationsControlPhase(16596).useVibegrationsControlStop(projectId);
  ({ stop, stopping } = vibegrationsControlStop);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [sharedValue2];
    let fn = function c() {
      return sharedValue2.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let obj3 = vibegrationsControlPhase(16596);
  const stateFromStores = vibegrationsControlPhase(504).useStateFromStores(tmp7, tmp8);
  let tmp11 = visible;
  if (visible) {
    tmp11 = "controlling" === vibegrationsControlPhase;
  }
  dependencyMap = tmp11;
  const tmpResult = vibegrationsControlPhase(504);
  const sharedValue = vibegrationsControlPhase(4612).useSharedValue(0);
  const tmpResult7 = vibegrationsControlPhase(4612);
  const sharedValue1 = vibegrationsControlPhase(4612).useSharedValue(0);
  if (cResult[2] === vibegrationsControlPhase) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === sharedValue1) {
        let tmp14 = cResult[5];
        let tmp15 = cResult[6];
      }
      const effect = sharedValue.useEffect(tmp14, tmp15);
      sharedValue2 = tmp(4612).useSharedValue(0.5);
      if (cResult[7] === tmp11) {
        if (cResult[8] === sharedValue2) {
          if (cResult[9] === stateFromStores) {
            let tmp18 = cResult[10];
            let tmp19 = cResult[11];
          }
          const effect1 = obj7.useEffect(tmp18, tmp19);
          const fn2 = function j() {
            const obj = { height: null };
            const bound = Math.max(0, sharedValue1.get());
            obj.height = bound * sharedValue.get();
            return obj;
          };
          let obj4 = { shown: sharedValue1, barHeight: sharedValue };
          fn2.__closure = obj4;
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
                  obj = closure_0(closure_2[10]);
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  obj2 = closure_0(closure_2[13]);
                  obj1 = { duration: 1200, easing: null };
                  tmp8 = closure_0;
                  tmp9 = closure_2;
                  Easing = closure_0(closure_2[10]).Easing;
                  tmp10 = closure_0;
                  tmp11 = closure_2;
                  obj1.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                  num2 = 0.7;
                  flag = true;
                  num3 = -1;
                  result1 = closure_5.set(obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true));
                  fn = () => vibegrationsControlPhase(closure_2[10]).cancelAnimation(sharedValue2);
                }
                return fn;
              }
              obj4 = closure_0(closure_2[10]);
              cancelAnimationResult = obj4.cancelAnimation(closure_5);
              result2 = closure_5.set(0.5);
              return;
            }
          }
          fn2.__workletHash = 14537991883436;
          fn2.__initData = __initData;
          const animatedStyle = tmp(4612).useAnimatedStyle(fn2);
          const tmpResult10 = tmp(4612);
          const fn3 = function z() {
            const obj = { transform: null };
            const obj2 = { translateY: null };
            const diff = sharedValue1.get() - 1;
            obj2.translateY = diff * sharedValue.get();
            const items = [obj2];
            obj.transform = items;
            return obj;
          };
          const obj5 = { shown: sharedValue1, barHeight: sharedValue };
          fn3.__closure = obj5;
          fn3.__workletHash = 15879147207027;
          fn3.__initData = __initData2;
          const animatedStyle1 = tmp(4612).useAnimatedStyle(fn3);
          const tmpResult11 = tmp(4612);
          class M {
            constructor() {
              obj = { opacity: closure_5.get() };
              return obj;
            }
          }
          const obj6 = { pulse: sharedValue2 };
          M.__closure = obj6;
          M.__workletHash = 4473224837152;
          M.__initData = __initData3;
          const animatedStyle2 = tmp(4612).useAnimatedStyle(M);
          if (visible) {
            visible = "idle" !== vibegrationsControlPhase;
          }
          if (cResult[12] !== tmp11) {
            const intl = tmp(1126).intl;
            const tmp29 = stateFromStores(3723);
            cResult[12] = tmp11;
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
                    obj = closure_0(closure_2[10]);
                    tmp6 = closure_0;
                    tmp7 = closure_2;
                    obj2 = closure_0(closure_2[13]);
                    obj1 = { duration: 1200, easing: null };
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    Easing = closure_0(closure_2[10]).Easing;
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj1.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                    num2 = 0.7;
                    flag = true;
                    num3 = -1;
                    result1 = closure_5.set(obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true));
                    fn = () => vibegrationsControlPhase(closure_2[10]).cancelAnimation(sharedValue2);
                  }
                  return fn;
                }
                obj4 = closure_0(closure_2[10]);
                cancelAnimationResult = obj4.cancelAnimation(closure_5);
                result2 = closure_5.set(0.5);
                return;
              }
            }
            const stringResult = intl.string(tmp11 ? tmp29.ydhvN1 : tmp29["7U6tIB"]);
          } else {
            let tmp32 = tmp11;
            if (tmp11) {
              tmp32 = null != onOpenPublishedApp;
            }
            let tmp34 = tmp11;
            if (tmp11) {
              tmp34 = null != stop;
            }
            if (cResult[14] === animatedStyle) {
              if (cResult[15] === sharedValue) {
                if (cResult[16] === animatedStyle1) {
                  if (cResult[17] === tmp11) {
                    if (cResult[18] === onOpenPublishedApp) {
                      if (cResult[19] === visible) {
                        if (cResult[20] === tmp32) {
                          if (cResult[21] === tmp34) {
                            if (cResult[22] === stop) {
                              if (cResult[23] === stopping) {
                                if (cResult[24] === tmp4.actions) {
                                  if (cResult[25] === tmp4.bar) {
                                    if (cResult[26] === tmp4.barArea) {
                                      if (cResult[27] === tmp4.title) {
                                        if (cResult[28] === tmp27) {
                                          let tmp36 = cResult[29];
                                        }
                                        if (cResult[30] === tmp11) {
                                          if (cResult[31] === tmp4.block) {
                                            let tmp39 = cResult[32];
                                          }
                                          if (cResult[33] === children) {
                                            if (cResult[34] === tmp4.content) {
                                              if (cResult[35] === tmp39) {
                                                let tmp43 = cResult[36];
                                              }
                                              if (cResult[37] === tmp11) {
                                                if (cResult[38] === animatedStyle2) {
                                                  if (cResult[39] === tmp4.border) {
                                                    if (cResult[40] === tmp4.glow) {
                                                      let tmp47 = cResult[41];
                                                    }
                                                    if (cResult[42] === tmp4.root) {
                                                      if (cResult[43] === tmp43) {
                                                        if (cResult[44] === tmp47) {
                                                          if (cResult[45] === tmp36) {
                                                            let tmp54 = cResult[46];
                                                          }
                                                          return tmp54;
                                                        }
                                                      }
                                                    }
                                                    const obj8 = { style: tmp4.root, children: null };
                                                    const items1 = [tmp36, , ];
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
                                                            obj = closure_0(closure_2[10]);
                                                            tmp6 = closure_0;
                                                            tmp7 = closure_2;
                                                            obj2 = closure_0(closure_2[13]);
                                                            obj1 = { duration: 1200, easing: null };
                                                            tmp8 = closure_0;
                                                            tmp9 = closure_2;
                                                            Easing = closure_0(closure_2[10]).Easing;
                                                            tmp10 = closure_0;
                                                            tmp11 = closure_2;
                                                            obj1.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                                                            num2 = 0.7;
                                                            flag = true;
                                                            num3 = -1;
                                                            result1 = closure_5.set(obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true));
                                                            fn = () => vibegrationsControlPhase(closure_2[10]).cancelAnimation(sharedValue2);
                                                          }
                                                          return fn;
                                                        }
                                                        obj4 = closure_0(closure_2[10]);
                                                        cancelAnimationResult = obj4.cancelAnimation(closure_5);
                                                        result2 = closure_5.set(0.5);
                                                        return;
                                                      }
                                                    }
                                                    items1[2] = tmp47;
                                                    obj8.children = items1;
                                                    const tmp57 = closure_7(sharedValue1, obj8);
                                                    cResult[42] = tmp4.root;
                                                    cResult[43] = tmp43;
                                                    cResult[44] = tmp47;
                                                    cResult[45] = tmp36;
                                                    cResult[46] = tmp57;
                                                    tmp54 = tmp57;
                                                  }
                                                }
                                              }
                                              let tmp48 = null;
                                              if (tmp11) {
                                                const obj9 = { children: null };
                                                const obj10 = { style: null, pointerEvents: "none" };
                                                const items2 = [tmp4.glow, ];
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
                                                        obj = closure_0(closure_2[10]);
                                                        tmp6 = closure_0;
                                                        tmp7 = closure_2;
                                                        obj2 = closure_0(closure_2[13]);
                                                        obj1 = { duration: 1200, easing: null };
                                                        tmp8 = closure_0;
                                                        tmp9 = closure_2;
                                                        Easing = closure_0(closure_2[10]).Easing;
                                                        tmp10 = closure_0;
                                                        tmp11 = closure_2;
                                                        obj1.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                                                        num2 = 0.7;
                                                        flag = true;
                                                        num3 = -1;
                                                        result1 = closure_5.set(obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true));
                                                        fn = () => vibegrationsControlPhase(closure_2[10]).cancelAnimation(sharedValue2);
                                                      }
                                                      return fn;
                                                    }
                                                    obj4 = closure_0(closure_2[10]);
                                                    cancelAnimationResult = obj4.cancelAnimation(closure_5);
                                                    result2 = closure_5.set(0.5);
                                                    return;
                                                  }
                                                }
                                                obj10.style = items2;
                                                const items3 = [closure_6(stateFromStores(4612).View, obj10), ];
                                                const obj11 = { style: tmp4.border, pointerEvents: "none" };
                                                items3[1] = closure_6(sharedValue1, obj11);
                                                obj9.children = items3;
                                                tmp48 = closure_7(closure_8, obj9);
                                              }
                                              cResult[37] = tmp11;
                                              cResult[38] = animatedStyle2;
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
                                                      obj = closure_0(closure_2[10]);
                                                      tmp6 = closure_0;
                                                      tmp7 = closure_2;
                                                      obj2 = closure_0(closure_2[13]);
                                                      obj1 = { duration: 1200, easing: null };
                                                      tmp8 = closure_0;
                                                      tmp9 = closure_2;
                                                      Easing = closure_0(closure_2[10]).Easing;
                                                      tmp10 = closure_0;
                                                      tmp11 = closure_2;
                                                      obj1.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                                                      num2 = 0.7;
                                                      flag = true;
                                                      num3 = -1;
                                                      result1 = closure_5.set(obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true));
                                                      fn = () => vibegrationsControlPhase(closure_2[10]).cancelAnimation(sharedValue2);
                                                    }
                                                    return fn;
                                                  }
                                                  obj4 = closure_0(closure_2[10]);
                                                  cancelAnimationResult = obj4.cancelAnimation(closure_5);
                                                  result2 = closure_5.set(0.5);
                                                  return;
                                                }
                                              }
                                              cResult[39] = tmp4.border;
                                              cResult[40] = tmp4.glow;
                                              cResult[41] = tmp48;
                                              tmp47 = tmp48;
                                            }
                                          }
                                          const obj12 = { style: tmp4.content, children: null };
                                          const items4 = [children, ];
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
                                                  obj = closure_0(closure_2[10]);
                                                  tmp6 = closure_0;
                                                  tmp7 = closure_2;
                                                  obj2 = closure_0(closure_2[13]);
                                                  obj1 = { duration: 1200, easing: null };
                                                  tmp8 = closure_0;
                                                  tmp9 = closure_2;
                                                  Easing = closure_0(closure_2[10]).Easing;
                                                  tmp10 = closure_0;
                                                  tmp11 = closure_2;
                                                  obj1.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                                                  num2 = 0.7;
                                                  flag = true;
                                                  num3 = -1;
                                                  result1 = closure_5.set(obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true));
                                                  fn = () => vibegrationsControlPhase(closure_2[10]).cancelAnimation(sharedValue2);
                                                }
                                                return fn;
                                              }
                                              obj4 = closure_0(closure_2[10]);
                                              cancelAnimationResult = obj4.cancelAnimation(closure_5);
                                              result2 = closure_5.set(0.5);
                                              return;
                                            }
                                          }
                                          obj12.children = items4;
                                          const tmp46 = closure_7(sharedValue1, obj12);
                                          cResult[33] = children;
                                          cResult[34] = tmp4.content;
                                          cResult[35] = tmp39;
                                          cResult[36] = tmp46;
                                          tmp43 = tmp46;
                                        }
                                        let tmp40 = null;
                                        if (tmp11) {
                                          const obj13 = { style: tmp4.block, pointerEvents: "box-only" };
                                          tmp40 = closure_6(sharedValue1, obj13);
                                        }
                                        cResult[30] = tmp11;
                                        cResult[31] = tmp4.block;
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
                                                obj = closure_0(closure_2[10]);
                                                tmp6 = closure_0;
                                                tmp7 = closure_2;
                                                obj2 = closure_0(closure_2[13]);
                                                obj1 = { duration: 1200, easing: null };
                                                tmp8 = closure_0;
                                                tmp9 = closure_2;
                                                Easing = closure_0(closure_2[10]).Easing;
                                                tmp10 = closure_0;
                                                tmp11 = closure_2;
                                                obj1.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                                                num2 = 0.7;
                                                flag = true;
                                                num3 = -1;
                                                result1 = closure_5.set(obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true));
                                                fn = () => vibegrationsControlPhase(closure_2[10]).cancelAnimation(sharedValue2);
                                              }
                                              return fn;
                                            }
                                            obj4 = closure_0(closure_2[10]);
                                            cancelAnimationResult = obj4.cancelAnimation(closure_5);
                                            result2 = closure_5.set(0.5);
                                            return;
                                          }
                                        }
                                        cResult[32] = tmp40;
                                        tmp39 = tmp40;
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
                    obj = closure_0(closure_2[10]);
                    tmp6 = closure_0;
                    tmp7 = closure_2;
                    obj2 = closure_0(closure_2[13]);
                    obj1 = { duration: 1200, easing: null };
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    Easing = closure_0(closure_2[10]).Easing;
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj1.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
                    num2 = 0.7;
                    flag = true;
                    num3 = -1;
                    result1 = closure_5.set(obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true));
                    fn = () => vibegrationsControlPhase(closure_2[10]).cancelAnimation(sharedValue2);
                  }
                  return fn;
                }
                obj4 = closure_0(closure_2[10]);
                cancelAnimationResult = obj4.cancelAnimation(closure_5);
                result2 = closure_5.set(0.5);
                return;
              }
            }
            cResult[14] = animatedStyle;
            cResult[15] = sharedValue;
            cResult[16] = animatedStyle1;
            cResult[17] = tmp11;
            cResult[18] = onOpenPublishedApp;
            cResult[19] = visible;
            cResult[20] = tmp32;
            cResult[21] = tmp34;
            class M {
              constructor() {
                obj = { opacity: closure_5.get() };
                return obj;
              }
            }
            cResult[22] = stop;
            cResult[23] = stopping;
            cResult[24] = tmp4.actions;
            cResult[25] = tmp4.bar;
            cResult[26] = tmp4.barArea;
            cResult[27] = tmp4.title;
            cResult[28] = cResult[13];
            class C {
              constructor() {
                if ("controlling" === closure_0) {
                  tmp20 = closure_1;
                  num4 = 1;
                  num5 = 1;
                  tmp19 = closure_4;
                  if (!closure_1) {
                    tmp21 = closure_0;
                    tmp22 = closure_2;
                    obj4 = closure_0(closure_2[11]);
                    tmp23 = closure_0;
                    tmp24 = closure_2;
                    num5 = obj4.withSpring(1, closure_0(closure_2[12]).SUBTLE_SPRING);
                  }
                  result = closure_4.set(num5);
                } else {
                  str = "handoff";
                  if ("handoff" === tmp) {
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    tmp4 = closure_4;
                    obj = closure_0(closure_2[10]);
                    tmp7 = closure_0;
                    tmp8 = closure_2;
                    tmp11 = closure_0;
                    tmp12 = closure_2;
                    tmp9 = c9;
                    diff = closure_0(closure_2[8]).VIBEGRATIONS_CONTROL_HANDOFF_MS - c9;
                    obj2 = closure_0(closure_2[13]);
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
                    Easing = closure_0(closure_2[10]).Easing;
                    tmp16 = closure_0;
                    tmp17 = closure_2;
                    obj1.easing = Easing.in(closure_0(closure_2[10]).Easing.ease);
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
            tmp36 = tmp38;
          }
          const tmpResult12 = tmp(4612);
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
              obj = closure_0(closure_2[10]);
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj2 = closure_0(closure_2[13]);
              obj1 = { duration: 1200, easing: null };
              tmp8 = closure_0;
              tmp9 = closure_2;
              Easing = closure_0(closure_2[10]).Easing;
              tmp10 = closure_0;
              tmp11 = closure_2;
              obj1.easing = Easing.inOut(closure_0(closure_2[10]).Easing.ease);
              num2 = 0.7;
              flag = true;
              num3 = -1;
              result1 = closure_5.set(obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true));
              fn = () => vibegrationsControlPhase(closure_2[10]).cancelAnimation(sharedValue2);
            }
            return fn;
          }
          obj4 = closure_0(closure_2[10]);
          cancelAnimationResult = obj4.cancelAnimation(closure_5);
          result2 = closure_5.set(0.5);
          return;
        }
      }
      const items5 = [tmp11, sharedValue2, stateFromStores];
      cResult[7] = tmp11;
      cResult[8] = sharedValue2;
      cResult[9] = stateFromStores;
      cResult[10] = P;
      cResult[11] = items5;
      tmp19 = items5;
      tmp18 = P;
      obj7 = sharedValue;
      const tmpResult9 = tmp(4612);
    }
  }
  class C {
    constructor() {
      if ("controlling" === closure_0) {
        tmp20 = closure_1;
        num4 = 1;
        num5 = 1;
        tmp19 = closure_4;
        if (!closure_1) {
          tmp21 = closure_0;
          tmp22 = closure_2;
          obj4 = closure_0(closure_2[11]);
          tmp23 = closure_0;
          tmp24 = closure_2;
          num5 = obj4.withSpring(1, closure_0(closure_2[12]).SUBTLE_SPRING);
        }
        result = closure_4.set(num5);
      } else {
        str = "handoff";
        if ("handoff" === tmp) {
          tmp5 = closure_0;
          tmp6 = closure_2;
          tmp4 = closure_4;
          obj = closure_0(closure_2[10]);
          tmp7 = closure_0;
          tmp8 = closure_2;
          tmp11 = closure_0;
          tmp12 = closure_2;
          tmp9 = c9;
          diff = closure_0(closure_2[8]).VIBEGRATIONS_CONTROL_HANDOFF_MS - c9;
          obj2 = closure_0(closure_2[13]);
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
          Easing = closure_0(closure_2[10]).Easing;
          tmp16 = closure_0;
          tmp17 = closure_2;
          obj1.easing = Easing.in(closure_0(closure_2[10]).Easing.ease);
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
  const items6 = [sharedValue1, vibegrationsControlPhase, stateFromStores];
  cResult[2] = vibegrationsControlPhase;
  cResult[3] = stateFromStores;
  cResult[4] = sharedValue1;
  cResult[5] = C;
  cResult[6] = items6;
  tmp15 = items6;
  tmp14 = C;
  const tmpResult8 = vibegrationsControlPhase(4612);
}) : ((arg0) => {
  ({ visible, onOpenPublishedApp } = arg0);
  let vibegrationsControlPhase;
  dependencyMap = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  ({ projectId, active, children } = arg0);
  const tmp = closure_10();
  vibegrationsControlPhase = vibegrationsControlPhase(16596).useVibegrationsControlPhase(active);
  let obj = vibegrationsControlPhase(16596);
  const vibegrationsControlStop = vibegrationsControlPhase(16596).useVibegrationsControlStop(projectId);
  ({ stop, stopping } = vibegrationsControlStop);
  let obj2 = vibegrationsControlPhase(16596);
  let items = [sharedValue2];
  const stateFromStores = vibegrationsControlPhase(504).useStateFromStores(items, () => sharedValue2.useReducedMotion);
  let tmp7 = visible;
  if (visible) {
    tmp7 = "controlling" === vibegrationsControlPhase;
  }
  dependencyMap = tmp7;
  let obj3 = vibegrationsControlPhase(504);
  sharedValue = vibegrationsControlPhase(4612).useSharedValue(0);
  const tmp2Result = vibegrationsControlPhase(4612);
  sharedValue1 = vibegrationsControlPhase(4612).useSharedValue(0);
  const items1 = [sharedValue1, vibegrationsControlPhase, stateFromStores];
  const effect = sharedValue.useEffect(() => {
    if ("controlling" === vibegrationsControlPhase) {
      let num5 = 1;
      if (!stateFromStores) {
        num5 = spring.withSpring(1, springPresets.SUBTLE_SPRING);
      }
      const result = sharedValue1.set(num5);
    } else if ("handoff" === tmp) {
      const diff = useVibegrationsControlBar.VIBEGRATIONS_CONTROL_HANDOFF_MS - c9;
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
  const tmp2Result6 = vibegrationsControlPhase(4612);
  sharedValue2 = vibegrationsControlPhase(4612).useSharedValue(0.5);
  const items2 = [tmp7, sharedValue2, stateFromStores];
  const effect1 = sharedValue.useEffect(() => {
    if (closure_2) {
      if (!stateFromStores) {
        const result = sharedValue2.set(0.2);
        const obj = ReanimatedRexport;
        const obj3 = { duration: 1200, easing: null };
        const Easing = ReanimatedRexport.Easing;
        obj3.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
        const result1 = sharedValue2.set(obj.withRepeat(timing.withTiming(0.7, obj3), -1, true));
        const fn = () => vibegrationsControlPhase(closure_2[10]).cancelAnimation(sharedValue2);
      }
      return fn;
    }
    ReanimatedRexport.cancelAnimation(sharedValue2);
    const result2 = sharedValue2.set(0.5);
  }, items2);
  const tmp2Result7 = vibegrationsControlPhase(4612);
  class R {
    constructor() {
      obj = { height: null };
      bound = Math.max(0, closure_4.get());
      obj.height = bound * closure_3.get();
      return obj;
    }
  }
  R.__closure = { shown: sharedValue1, barHeight: sharedValue };
  R.__workletHash = 10779878276009;
  R.__initData = __initData4;
  const animatedStyle = vibegrationsControlPhase(4612).useAnimatedStyle(R);
  const tmp2Result8 = vibegrationsControlPhase(4612);
  class D {
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
  D.__closure = { shown: sharedValue1, barHeight: sharedValue };
  D.__workletHash = 5836011547124;
  D.__initData = __initData5;
  const animatedStyle1 = vibegrationsControlPhase(4612).useAnimatedStyle(D);
  const tmp2Result9 = vibegrationsControlPhase(4612);
  let fn = function k() {
    return { opacity: sharedValue2.get() };
  };
  fn.__closure = { pulse: sharedValue2 };
  fn.__workletHash = 11848386308389;
  fn.__initData = __initData6;
  const animatedStyle2 = vibegrationsControlPhase(4612).useAnimatedStyle(fn);
  const intl = tmp2(1126).intl;
  const tmp17 = stateFromStores(3723);
  if (tmp7) {
    let ydhvN1 = tmp17.ydhvN1;
    let tmp19 = tmp16;
  } else {
    ydhvN1 = tmp17["7U6tIB"];
    tmp19 = tmp16;
  }
  const stringResult = intl.string(ydhvN1);
  let tmp21 = tmp7;
  if (tmp7) {
    tmp21 = null != stop;
  }
  let obj4 = { style: tmp.root, children: null };
  let tmp37Result4 = null;
  if (visible) {
    tmp37Result4 = null;
    if ("idle" !== vibegrationsControlPhase) {
      const obj5 = { style: null, children: null };
      const items3 = [tmp.barArea, animatedStyle];
      obj5.style = items3;
      const obj6 = { style: null, onLayout: null, accessibilityLiveRegion: "polite", children: null };
      const items4 = [tmp.bar, animatedStyle1];
      obj6.style = items4;
      obj6.onLayout = function onLayout(nativeEvent) {
        return sharedValue.set(nativeEvent.nativeEvent.layout.height);
      };
      if (tmp7) {
        let tmp37Result = closure_6(tmp2(14207).AILoader, { size: 12, color: "text-overlay-light" });
      } else {
        const obj7 = { size: "sm", color: tmp19(587).colors.TEXT_OVERLAY_LIGHT };
        tmp37Result = closure_6(tmp2(16597).SparklesIcon, obj7);
      }
      const items5 = [tmp37Result, , ];
      const obj8 = { variant: "text-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: tmp.title, accessibilityLabel: null, children: null };
      let combined = stringResult;
      if (tmp7) {
        const intl2 = tmp2(1126).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + stringResult + ". " + intl2.string(tmp19(3723).NldIIG);
      }
      obj8.accessibilityLabel = combined;
      obj8.children = stringResult;
      items5[1] = closure_6(tmp2(4886).Text, obj8);
      if (!tmp7) {
        let tmp23Result = null;
        items5[2] = tmp23Result;
        obj6.children = items5;
        obj5.children = closure_7(tmp19(4612).View, obj6);
        tmp37Result4 = closure_6(tmp19(4612).View, obj5);
      }
      const obj9 = { style: tmp.actions, children: null };
      let tmp37Result5 = null;
      if (null != onOpenPublishedApp) {
        const obj10 = { variant: "secondary-overlay", size: "sm", text: null, onPress: null };
        const intl3 = tmp2(1126).intl;
        obj10.text = intl3.string(tmp19(3723).kj5epw);
        obj10.onPress = onOpenPublishedApp;
        tmp37Result5 = closure_6(tmp2(5594).Button, obj10);
      }
      const items6 = [tmp37Result5, ];
      let tmp37Result6 = null;
      if (tmp21) {
        const obj11 = { variant: "primary-overlay", size: "sm", text: null, loading: null, onPress: null };
        const intl4 = tmp2(1126).intl;
        obj11.text = intl4.string(tmp19(3723)["2HalWx"]);
        obj11.loading = stopping;
        obj11.onPress = stop;
        tmp37Result6 = closure_6(tmp2(5594).Button, obj11);
      }
      items6[1] = tmp37Result6;
      obj9.children = items6;
      tmp23Result = closure_7(tmp24, obj9);
    }
  }
  const items7 = [tmp37Result4, , ];
  const obj12 = { style: tmp.content, children: null };
  const items8 = [children, ];
  let tmp32 = null;
  if (tmp7) {
    const obj13 = { style: tmp.block, pointerEvents: "box-only" };
    tmp32 = closure_6(tmp24, obj13);
  }
  items8[1] = tmp32;
  obj12.children = items8;
  items7[1] = closure_7(sharedValue1, obj12);
  let tmp23Result2 = null;
  if (tmp7) {
    const obj14 = { children: null };
    const obj15 = { style: null, pointerEvents: "none" };
    const items9 = [tmp.glow, animatedStyle2];
    obj15.style = items9;
    const items10 = [closure_6(tmp19(4612).View, obj15), ];
    const obj16 = { style: tmp.border, pointerEvents: "none" };
    items10[1] = closure_6(tmp24, obj16);
    obj14.children = items10;
    tmp23Result2 = closure_7(closure_8, obj14);
  }
  items7[2] = tmp23Result2;
  obj4.children = items7;
  return closure_7(sharedValue1, obj4);
});