// discord_app/modules/conjure/preview/native/ConjureNativeControlOverlay.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import useConjureControlBar from "../useConjureControlBar.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let c9 = 280;
const createStyles = fn(5090);
let obj2 = {
  root: { flex: 1 },
  content: { flex: 1 },
  block: null,
  border: null,
  glow: null,
  barArea: null,
  bar: null,
  title: null,
  actions: null,
};
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
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.bar = rect;
obj2.title = { flexGrow: 1, flexShrink: 1 };
obj2.actions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const __initData = {
  code: "function ConjureNativeControlOverlayTsx1(){const{shown,barHeight}=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};}",
};
const __initData2 = {
  code: "function ConjureNativeControlOverlayTsx2(){const{shown,barHeight}=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};}",
};
const __initData3 = {
  code: "function ConjureNativeControlOverlayTsx3(){const{pulse}=this.__closure;return{opacity:pulse.get()};}",
};
const __initData4 = {
  code: "function ConjureNativeControlOverlayTsx4(){const{shown,barHeight}=this.__closure;return{height:Math.max(0,shown.get())*barHeight.get()};}",
};
const __initData5 = {
  code: "function ConjureNativeControlOverlayTsx5(){const{shown,barHeight}=this.__closure;return{transform:[{translateY:(shown.get()-1)*barHeight.get()}]};}",
};
const __initData6 = {
  code: "function ConjureNativeControlOverlayTsx6(){const{pulse}=this.__closure;return{opacity:pulse.get()};}",
};
const ReactCompilerGating = fn(558);
let obj3 = {};
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativeControlOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureNativeControlOverlay(active) {
      const cResult = conjureControlPhase(576).c(48);
      ({ projectId, visible, onOpenPublishedApp, children } = active);
      const tmp4 = closure_10();
      let obj = conjureControlPhase(576);
      conjureControlPhase = conjureControlPhase(16902).useConjureControlPhase(active.active);
      let obj2 = conjureControlPhase(16902);
      const conjureControlStop = conjureControlPhase(16902).useConjureControlStop(projectId);
      ({ stop, stopping } = conjureControlStop);
      let obj3 = conjureControlPhase(16902);
      const conjureControlTuning = conjureControlPhase(12372).useConjureControlTuning(projectId);
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
      let obj4 = conjureControlPhase(12372);
      const stateFromStores = conjureControlPhase(504).useStateFromStores(tmp8, tmp9);
      let tmp12 = visible;
      if (visible) {
        tmp12 = "controlling" === conjureControlPhase;
      }
      dependencyMap = tmp12;
      const tmpResult = conjureControlPhase(504);
      const sharedValue = conjureControlPhase(4810).useSharedValue(0);
      const tmpResult7 = conjureControlPhase(4810);
      const sharedValue1 = conjureControlPhase(4810).useSharedValue(0);
      if (cResult[2] === conjureControlPhase) {
        if (cResult[3] === stateFromStores) {
          if (cResult[4] === sharedValue1) {
            let tmp15 = cResult[5];
            let tmp16 = cResult[6];
          }
          const effect = sharedValue.useEffect(tmp15, tmp16);
          sharedValue2 = tmp(4810).useSharedValue(0.5);
          if (cResult[7] === tmp12) {
            if (cResult[8] === sharedValue2) {
              if (cResult[9] === stateFromStores) {
                let tmp19 = cResult[10];
                let tmp20 = cResult[11];
              }
              const effect1 = obj8.useEffect(tmp19, tmp20);
              class U {
                constructor() {
                  obj = { height: null };
                  bound = Math.max(0, closure_4.get());
                  obj.height = bound * closure_3.get();
                  return obj;
                }
              }
              const obj5 = { shown: sharedValue1, barHeight: sharedValue };
              U.__closure = obj5;
              class B {
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
              U.__workletHash = 5735939888549;
              U.__initData = __initData;
              const animatedStyle = tmp(4810).useAnimatedStyle(U);
              const tmpResult10 = tmp(4810);
              class M {
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
              const obj6 = { shown: sharedValue1, barHeight: sharedValue };
              M.__closure = obj6;
              M.__workletHash = 11424550793114;
              M.__initData = __initData2;
              const animatedStyle1 = tmp(4810).useAnimatedStyle(M);
              const tmpResult11 = tmp(4810);
              class G {
                constructor() {
                  obj = { opacity: closure_5.get() };
                  return obj;
                }
              }
              const obj7 = { pulse: sharedValue2 };
              G.__closure = obj7;
              G.__workletHash = 3342596553897;
              G.__initData = __initData3;
              const animatedStyle2 = tmp(4810).useAnimatedStyle(G);
              if (visible) {
                visible = "idle" !== conjureControlPhase;
              }
              if (cResult[12] === tmp12) {
                if (cResult[13] === conjureControlTuning) {
                  let tmp34 = tmp12;
                  if (tmp12) {
                    tmp34 = null != onOpenPublishedApp;
                  }
                  class U {
                    constructor() {
                      obj = { height: null };
                      bound = Math.max(0, closure_4.get());
                      obj.height = bound * closure_3.get();
                      return obj;
                    }
                  }
                  if (cResult[15] === animatedStyle) {
                    if (cResult[16] === sharedValue) {
                      if (cResult[17] === animatedStyle1) {
                        if (cResult[18] === tmp12) {
                          if (cResult[19] === onOpenPublishedApp) {
                            if (cResult[20] === visible) {
                              if (cResult[21] === tmp34) {
                                if (cResult[22] === tmp36) {
                                  if (cResult[23] === stop) {
                                    if (cResult[24] === stopping) {
                                      if (cResult[25] === tmp4.actions) {
                                        if (cResult[26] === tmp4.bar) {
                                          if (cResult[27] === tmp4.barArea) {
                                            if (cResult[28] === tmp4.title) {
                                              if (cResult[29] === tmp28) {
                                                let tmp38 = cResult[30];
                                              }
                                              if (cResult[31] === tmp12) {
                                                if (cResult[32] === tmp4.block) {
                                                  let tmp41 = cResult[33];
                                                }
                                                if (cResult[34] === children) {
                                                  if (cResult[35] === tmp4.content) {
                                                    if (cResult[36] === tmp41) {
                                                      let tmp43 = cResult[37];
                                                    }
                                                    if (cResult[38] === tmp12) {
                                                      if (cResult[39] === animatedStyle2) {
                                                        if (cResult[40] === tmp4.border) {
                                                          if (cResult[43] === tmp4.root) {
                                                            if (cResult[44] === tmp43) {
                                                              if (cResult[45] === tmp46) {
                                                                if (cResult[46] === tmp38) {
                                                                  let tmp48 = cResult[47];
                                                                }
                                                                return tmp48;
                                                              }
                                                            }
                                                          }
                                                          class U {
                                                            constructor() {
                                                              obj = { height: null };
                                                              bound = Math.max(0, closure_4.get());
                                                              obj.height = bound * closure_3.get();
                                                              return obj;
                                                            }
                                                          }
                                                          const obj9 = { style: tmp4.root, children: null };
                                                          const items1 = [tmp38, ,];
                                                          class B {
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
                                                                  obj1.easing = Easing.inOut(
                                                                    closure_0(closure_2[11]).Easing.ease,
                                                                  );
                                                                  num2 = 0.7;
                                                                  flag = true;
                                                                  num3 = -1;
                                                                  result1 = closure_5.set(
                                                                    obj.withRepeat(
                                                                      obj2.withTiming(0.7, obj1),
                                                                      -1,
                                                                      true,
                                                                    ),
                                                                  );
                                                                  fn = () =>
                                                                    conjureControlPhase(closure_2[11]).cancelAnimation(
                                                                      sharedValue2,
                                                                    );
                                                                }
                                                                return fn;
                                                              }
                                                              obj4 = closure_0(closure_2[11]);
                                                              cancelAnimationResult = obj4.cancelAnimation(closure_5);
                                                              result2 = closure_5.set(0.5);
                                                              return;
                                                            }
                                                          }
                                                          items1[2] = tmp46;
                                                          obj9.children = items1;
                                                          const tmp50 = closure_7(sharedValue1, obj9);
                                                          cResult[43] = tmp4.root;
                                                          class M {
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
                                                          cResult[44] = tmp43;
                                                          cResult[45] = tmp46;
                                                          cResult[46] = tmp38;
                                                          cResult[47] = tmp50;
                                                          tmp48 = tmp50;
                                                        }
                                                      }
                                                    }
                                                    class U {
                                                      constructor() {
                                                        obj = { height: null };
                                                        bound = Math.max(0, closure_4.get());
                                                        obj.height = bound * closure_3.get();
                                                        return obj;
                                                      }
                                                    }
                                                    cResult[38] = tmp12;
                                                    cResult[39] = animatedStyle2;
                                                    class B {
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
                                                            obj1.easing = Easing.inOut(
                                                              closure_0(closure_2[11]).Easing.ease,
                                                            );
                                                            num2 = 0.7;
                                                            flag = true;
                                                            num3 = -1;
                                                            result1 = closure_5.set(
                                                              obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true),
                                                            );
                                                            fn = () =>
                                                              conjureControlPhase(closure_2[11]).cancelAnimation(
                                                                sharedValue2,
                                                              );
                                                          }
                                                          return fn;
                                                        }
                                                        obj4 = closure_0(closure_2[11]);
                                                        cancelAnimationResult = obj4.cancelAnimation(closure_5);
                                                        result2 = closure_5.set(0.5);
                                                        return;
                                                      }
                                                    }
                                                    cResult[40] = tmp4.border;
                                                    cResult[41] = tmp4.glow;
                                                    cResult[42] = null;
                                                    class M {
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
                                                  }
                                                }
                                                class U {
                                                  constructor() {
                                                    obj = { height: null };
                                                    bound = Math.max(0, closure_4.get());
                                                    obj.height = bound * closure_3.get();
                                                    return obj;
                                                  }
                                                }
                                                const obj10 = { style: tmp4.content, children: null };
                                                const items2 = [children];
                                                class B {
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
                                                        obj1.easing = Easing.inOut(
                                                          closure_0(closure_2[11]).Easing.ease,
                                                        );
                                                        num2 = 0.7;
                                                        flag = true;
                                                        num3 = -1;
                                                        result1 = closure_5.set(
                                                          obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true),
                                                        );
                                                        fn = () =>
                                                          conjureControlPhase(closure_2[11]).cancelAnimation(
                                                            sharedValue2,
                                                          );
                                                      }
                                                      return fn;
                                                    }
                                                    obj4 = closure_0(closure_2[11]);
                                                    cancelAnimationResult = obj4.cancelAnimation(closure_5);
                                                    result2 = closure_5.set(0.5);
                                                    return;
                                                  }
                                                }
                                                obj10.children = items2;
                                                const tmp45 = closure_7(sharedValue1, obj10);
                                                cResult[34] = children;
                                                class M {
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
                                                cResult[36] = tmp41;
                                                cResult[37] = tmp45;
                                                tmp43 = tmp45;
                                              }
                                              class U {
                                                constructor() {
                                                  obj = { height: null };
                                                  bound = Math.max(0, closure_4.get());
                                                  obj.height = bound * closure_3.get();
                                                  return obj;
                                                }
                                              }
                                              cResult[31] = tmp12;
                                              cResult[32] = tmp4.block;
                                              class B {
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
                                                      result1 = closure_5.set(
                                                        obj.withRepeat(obj2.withTiming(0.7, obj1), -1, true),
                                                      );
                                                      fn = () =>
                                                        conjureControlPhase(closure_2[11]).cancelAnimation(
                                                          sharedValue2,
                                                        );
                                                    }
                                                    return fn;
                                                  }
                                                  obj4 = closure_0(closure_2[11]);
                                                  cancelAnimationResult = obj4.cancelAnimation(closure_5);
                                                  result2 = closure_5.set(0.5);
                                                  return;
                                                }
                                              }
                                              cResult[33] = null;
                                              tmp41 = tmp42;
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
                  cResult[15] = animatedStyle;
                  cResult[16] = sharedValue;
                  class M {
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
                  cResult[18] = tmp12;
                  cResult[19] = onOpenPublishedApp;
                  cResult[20] = visible;
                  cResult[21] = tmp34;
                  cResult[22] = tmp36;
                  class G {
                    constructor() {
                      obj = { opacity: closure_5.get() };
                      return obj;
                    }
                  }
                  cResult[23] = stop;
                  cResult[24] = stopping;
                  cResult[25] = tmp4.actions;
                  cResult[26] = tmp4.bar;
                  cResult[27] = tmp4.barArea;
                  cResult[28] = tmp4.title;
                  cResult[29] = cResult[14];
                  cResult[30] = null;
                  tmp38 = tmp40;
                }
              }
              const intl = tmp(1126).intl;
              const tmp30 = stateFromStores(3827);
              if (!tmp12) {
                const stringResult = intl.string(tmp30["h+i1r9"]);
                cResult[12] = tmp12;
                class U {
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
              const tmpResult12 = tmp(4810);
            }
          }
          class B {
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
          cResult[8] = sharedValue2;
          cResult[9] = stateFromStores;
          cResult[10] = B;
          cResult[11] = items3;
          tmp20 = items3;
          tmp19 = B;
          obj8 = sharedValue;
          const tmpResult9 = tmp(4810);
        }
      }
      class D {
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
      cResult[5] = D;
      cResult[6] = items4;
      tmp16 = items4;
      tmp15 = D;
      const tmpResult8 = conjureControlPhase(4810);
    }
  : function ConjureNativeControlOverlay(arg0) {
      ({ projectId, visible, onOpenPublishedApp } = arg0);
      let conjureControlPhase;
      dependencyMap = undefined;
      let sharedValue;
      let sharedValue1;
      let sharedValue2;
      ({ active, children } = arg0);
      const tmp = closure_10();
      conjureControlPhase = conjureControlPhase(16902).useConjureControlPhase(active);
      let obj = conjureControlPhase(16902);
      const conjureControlStop = conjureControlPhase(16902).useConjureControlStop(projectId);
      ({ stop, stopping } = conjureControlStop);
      let obj2 = conjureControlPhase(16902);
      const conjureControlTuning = conjureControlPhase(12372).useConjureControlTuning(projectId);
      let obj3 = conjureControlPhase(12372);
      let items = [sharedValue2];
      const stateFromStores = conjureControlPhase(504).useStateFromStores(items, () => sharedValue2.useReducedMotion);
      let tmp8 = visible;
      if (visible) {
        tmp8 = "controlling" === conjureControlPhase;
      }
      dependencyMap = tmp8;
      let obj4 = conjureControlPhase(504);
      sharedValue = conjureControlPhase(4810).useSharedValue(0);
      const tmp2Result = conjureControlPhase(4810);
      sharedValue1 = conjureControlPhase(4810).useSharedValue(0);
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
      const tmp2Result6 = conjureControlPhase(4810);
      sharedValue2 = conjureControlPhase(4810).useSharedValue(0.5);
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
      const tmp2Result7 = conjureControlPhase(4810);
      class P {
        constructor() {
          obj = { height: null };
          bound = Math.max(0, closure_4.get());
          obj.height = bound * closure_3.get();
          return obj;
        }
      }
      P.__closure = { shown: sharedValue1, barHeight: sharedValue };
      P.__workletHash = 10340375351296;
      P.__initData = __initData4;
      const animatedStyle = conjureControlPhase(4810).useAnimatedStyle(P);
      const tmp2Result8 = conjureControlPhase(4810);
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
      const animatedStyle1 = conjureControlPhase(4810).useAnimatedStyle(V);
      const tmp2Result9 = conjureControlPhase(4810);
      class L {
        constructor() {
          obj = { opacity: closure_5.get() };
          return obj;
        }
      }
      L.__closure = { pulse: sharedValue2 };
      L.__workletHash = 6446462441996;
      L.__initData = __initData6;
      const animatedStyle2 = conjureControlPhase(4810).useAnimatedStyle(L);
      const intl = tmp2(1126).intl;
      const tmp18 = stateFromStores(3827);
      if (tmp8) {
        if (conjureControlTuning) {
          let prop = tmp18["VJW/5P"];
        } else {
          prop = tmp18["+hD2Iz"];
        }
      } else {
        const stringResult = intl.string(tmp18["h+i1r9"]);
        let tmp25 = tmp8;
        if (tmp8) {
          tmp25 = null != stop;
        }
        const obj5 = { style: tmp.root, children: null };
        let tmp42Result4 = null;
        if (visible) {
          tmp42Result4 = null;
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
              let tmp42Result = closure_6(tmp2(14051).AILoader, { size: 12, color: "text-overlay-light" });
            } else {
              const obj8 = { size: "sm", color: tmp17(587).colors.TEXT_OVERLAY_LIGHT };
              tmp42Result = closure_6(tmp2(16903).SparklesIcon, obj8);
            }
            const items5 = [tmp42Result, ,];
            const obj9 = {
              variant: "text-sm/semibold",
              color: "text-overlay-light",
              lineClamp: 1,
              style: tmp.title,
              accessibilityLabel: null,
              children: null,
            };
            let combined = stringResult;
            if (tmp8) {
              const intl2 = tmp2(1126).intl;
              const _HermesInternal = HermesInternal;
              combined = "" + stringResult + ". " + intl2.string(tmp17(3827).fg1sor);
            }
            obj9.accessibilityLabel = combined;
            obj9.children = stringResult;
            items5[1] = closure_6(tmp2(5086).Text, obj9);
            if (!tmp8) {
              let tmp27Result = null;
              items5[2] = tmp27Result;
              obj7.children = items5;
              obj6.children = closure_7(tmp17(4810).View, obj7);
              tmp42Result4 = closure_6(tmp17(4810).View, obj6);
            }
            const obj10 = { style: tmp.actions, children: null };
            let tmp42Result5 = null;
            if (null != onOpenPublishedApp) {
              const obj11 = { variant: "secondary-overlay", size: "sm", text: null, onPress: null };
              const intl3 = tmp2(1126).intl;
              obj11.text = intl3.string(tmp17(3827)["1NcO7H"]);
              obj11.onPress = onOpenPublishedApp;
              tmp42Result5 = closure_6(tmp2(5375).Button, obj11);
            }
            const items6 = [tmp42Result5];
            let tmp42Result6 = null;
            if (tmp25) {
              const obj12 = { variant: "primary-overlay", size: "sm", text: null, loading: null, onPress: null };
              const intl4 = tmp2(1126).intl;
              obj12.text = intl4.string(tmp17(3827).oU59sU);
              obj12.loading = stopping;
              obj12.onPress = stop;
              tmp42Result6 = closure_6(tmp2(5375).Button, obj12);
            }
            items6[1] = tmp42Result6;
            obj10.children = items6;
            tmp27Result = closure_7(tmp28, obj10);
          }
        }
        const items7 = [tmp42Result4, ,];
        const obj13 = { style: tmp.content, children: null };
        const items8 = [children];
        let tmp37 = null;
        if (tmp8) {
          const obj14 = { style: tmp.block, pointerEvents: "box-only" };
          tmp37 = closure_6(tmp28, obj14);
        }
        items8[1] = tmp37;
        obj13.children = items8;
        items7[1] = closure_7(sharedValue1, obj13);
        let tmp27Result2 = null;
        if (tmp8) {
          const obj15 = { children: null };
          const obj16 = { style: null, pointerEvents: "none" };
          const items9 = [tmp.glow, animatedStyle2];
          obj16.style = items9;
          const items10 = [closure_6(tmp17(4810).View, obj16)];
          const obj17 = { style: tmp.border, pointerEvents: "none" };
          items10[1] = closure_6(tmp28, obj17);
          obj15.children = items10;
          tmp27Result2 = closure_7(closure_8, obj15);
        }
        items7[2] = tmp27Result2;
        obj5.children = items7;
        return closure_7(sharedValue1, obj5);
      }
      const tmp2Result10 = conjureControlPhase(4810);
    };
