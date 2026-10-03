// discord_app/modules/parent_tools/native/RestrictedHoursModal.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import useBackPressHandlerDefault from "../../routing/native/useBackPressHandler.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import RestrictedHoursActionCreators from "../RestrictedHoursActionCreators.native.tsx";
import useIsInRestrictedHoursDefault from "../hooks/useIsInRestrictedHours.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = "rgb(0, 3, 40)";
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_24 }, backgroundFill: null, assetLayers: null, sunbeamGradient: null, riveContainer: null, content: null, description: null, footer: null, logoutBlockingLayer: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.zIndex = 0;
obj4.backgroundColor = "rgb(0, 3, 40)";
obj2.backgroundFill = obj4;
let obj5 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5.zIndex = 1;
obj2.assetLayers = obj5;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2.sunbeamGradient = {};
obj2.riveContainer = { width: "100%", maxWidth: 523, height: 300 };
let obj3 = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_24 };
let obj6 = {};
obj2.content = { alignItems: "center", width: "100%", gap: nativeDefault.space.PX_16, zIndex: 2 };
obj2.description = { textAlign: "center" };
let obj7 = { alignItems: "center", width: "100%", gap: nativeDefault.space.PX_16, zIndex: 2 };
obj2.footer = { position: "absolute", bottom: nativeDefault.space.PX_32, alignSelf: "center", zIndex: 2 };
let obj9 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj9.zIndex = 10;
obj9.justifyContent = "center";
obj9.alignItems = "center";
obj9.backgroundColor = "rgb(0, 3, 40)";
obj2.logoutBlockingLayer = obj9;
let closure_10 = createStyles.createStyles(obj2);
const constants = { MAIN: "main" };
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  const cResult = c.c(3);
  let logoutBlockingLayer = closure_10();
  if (!visible.visible) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp7 = React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, { size: "large" });
      cResult[0] = tmp7;
      let first = tmp7;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== logoutBlockingLayer.logoutBlockingLayer) {
      const obj2 = { style: logoutBlockingLayer.logoutBlockingLayer, pointerEvents: "auto", accessibilityLiveRegion: "polite", children: first };
      const tmp11 = React5(hasOwnProperty, obj2);
      logoutBlockingLayer = logoutBlockingLayer.logoutBlockingLayer;
      cResult[1] = logoutBlockingLayer;
      cResult[2] = tmp11;
    }
  }
}) : ((visible) => {
  let tmp2 = null;
  if (visible.visible) {
    const obj = { style: tmp.logoutBlockingLayer, pointerEvents: "auto", accessibilityLiveRegion: "polite", children: React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, { size: "large" }) };
    tmp2 = React5(hasOwnProperty, obj);
  }
  return tmp2;
});
const __initData = { code: "function RestrictedHoursModalTsx1(){const{backgroundOpacity}=this.__closure;return{opacity:backgroundOpacity.get()};}" };
const __initData2 = { code: "function RestrictedHoursModalTsx2(){const{gradientOpacity}=this.__closure;return{opacity:gradientOpacity.get()};}" };
const __initData3 = { code: "function RestrictedHoursModalTsx3(){const{contentOpacity,contentScale}=this.__closure;return{opacity:contentOpacity.get(),transform:[{scale:contentScale.get()}]};}" };
const __initData4 = { code: "function RestrictedHoursModalTsx4(){const{backgroundOpacity}=this.__closure;return{opacity:backgroundOpacity.get()};}" };
const __initData5 = { code: "function RestrictedHoursModalTsx5(){const{gradientOpacity}=this.__closure;return{opacity:gradientOpacity.get()};}" };
const __initData6 = { code: "function RestrictedHoursModalTsx6(){const{contentOpacity,contentScale}=this.__closure;return{opacity:contentOpacity.get(),transform:[{scale:contentScale.get()}]};}" };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((onLogin) => {
  const cResult = onLogin(sharedValue1[8]).c(63);
  onLogin = onLogin.onLogin;
  const logoutRequestInFlight = onLogin.logoutRequestInFlight;
  const tmp4 = closure_10();
  let obj = onLogin(sharedValue1[8]);
  ({ top, bottom } = sharedValue(sharedValue1[10])());
  const tmp7 = sharedValue(sharedValue1[11])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    const fn = function c() {
      currentUser = currentUser.getCurrentUser();
      let str;
      if (currentUser != null) {
        str = currentUser.username;
      }
      if (str == null) {
        str = "";
      }
      return str;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmp6 = sharedValue(sharedValue1[10])();
  const stateFromStores = onLogin(sharedValue1[12]).useStateFromStores(tmp8, tmp9);
  const tmpResult = onLogin(sharedValue1[12]);
  sharedValue = onLogin(sharedValue1[13]).useSharedValue(0);
  const tmpResult9 = onLogin(sharedValue1[13]);
  sharedValue1 = onLogin(sharedValue1[13]).useSharedValue(0);
  const tmpResult10 = onLogin(sharedValue1[13]);
  const sharedValue2 = onLogin(sharedValue1[13]).useSharedValue(0);
  const tmpResult11 = onLogin(sharedValue1[13]);
  const sharedValue3 = onLogin(sharedValue1[13]).useSharedValue(0.9);
  if (cResult[2] === sharedValue) {
    if (cResult[3] === sharedValue2) {
      if (cResult[4] === sharedValue3) {
        if (cResult[5] === sharedValue1) {
          let tmp16 = cResult[6];
          let tmp17 = cResult[7];
        }
        const effect = sharedValue3.useEffect(tmp16, tmp17);
        class L {
          constructor() {
            obj = { opacity: closure_1.get() };
            return obj;
          }
        }
        let obj2 = { backgroundOpacity: sharedValue };
        L.__closure = obj2;
        L.__workletHash = 17073775693336;
        L.__initData = __initData;
        const animatedStyle = tmp(tmp2[13]).useAnimatedStyle(L);
        const tmpResult13 = tmp(tmp2[13]);
        class A {
          constructor() {
            obj = { opacity: closure_2.get() };
            return obj;
          }
        }
        let obj3 = { gradientOpacity: sharedValue1 };
        A.__closure = obj3;
        A.__workletHash = 16592270370139;
        A.__initData = __initData2;
        const animatedStyle1 = tmp(tmp2[13]).useAnimatedStyle(A);
        const tmpResult14 = tmp(tmp2[13]);
        class D {
          constructor() {
            obj = { opacity: closure_3.get(), transform: null };
            obj1 = { scale: closure_4.get() };
            items = [];
            items[0] = obj1;
            obj.transform = items;
            return obj;
          }
        }
        let obj4 = { contentOpacity: sharedValue2, contentScale: sharedValue3 };
        D.__closure = obj4;
        D.__workletHash = 15616799997783;
        D.__initData = __initData3;
        const animatedStyle2 = tmp(tmp2[13]).useAnimatedStyle(D);
        if (cResult[8] !== tmp7) {
          if (null != tmp7) {
            const format = tmp(tmp2[15]).intl.format;
            { endTime: null }.endTime = tmp7;
            class L {
              constructor() {
                obj = { opacity: closure_1.get() };
                return obj;
              }
            }
            let obj5 = { endTime: null };
          } else {
            const intl = tmp(tmp2[15]).intl;
            const stringResult = intl.string(tmp5(tmp2[16]).abikhN);
          }
          cResult[8] = tmp7;
          class L {
            constructor() {
              obj = { opacity: closure_1.get() };
              return obj;
            }
          }
          cResult[9] = stringResult;
        } else {
          if (cResult[10] === bottom) {
            if (cResult[11] === top) {
              let tmp30 = cResult[12];
            }
            if (cResult[13] === animatedStyle) {
              if (cResult[14] === tmp4.container) {
                if (cResult[17] !== tmp4.backgroundFill) {
                  { style: null, pointerEvents: "none" }.style = tmp4.backgroundFill;
                  class L {
                    constructor() {
                      obj = { opacity: closure_1.get() };
                      return obj;
                    }
                  }
                  cResult[17] = tmp4.backgroundFill;
                  cResult[18] = tmp35;
                  let tmp32 = tmp35;
                  let obj6 = { style: null, pointerEvents: "none" };
                } else {
                  tmp32 = cResult[18];
                }
                if (cResult[19] === animatedStyle1) {
                  if (cResult[20] === tmp4.assetLayers) {
                    let tmp36 = cResult[21];
                  }
                  const _Symbol = Symbol;
                  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmpResult16 = tmp(tmp2[17]);
                    cResult[22] = tmpResult16;
                  }
                  class L {
                    constructor() {
                      obj = { opacity: closure_1.get() };
                      return obj;
                    }
                  }
                  if (cResult[25] === tmp39) {
                    if (cResult[26] === tmp36) {
                      let tmp40 = cResult[27];
                    }
                    if (cResult[28] === animatedStyle2) {
                      if (cResult[29] === tmp4.content) {
                        let tmp43 = cResult[30];
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                        cResult[31] = closure_7(tmp(tmp2[18]).TeenScreenTimeRive, { artboard: "Teen Screen Time Illo", stateMachine: "State Machine 1" });
                        class L {
                          constructor() {
                            obj = { opacity: closure_1.get() };
                            return obj;
                          }
                        }
                        const tmp46 = closure_7(tmp(tmp2[18]).TeenScreenTimeRive, { artboard: "Teen Screen Time Illo", stateMachine: "State Machine 1" });
                      }
                      class L {
                        constructor() {
                          obj = { opacity: closure_1.get() };
                          return obj;
                        }
                      }
                      if (cResult[34] === tmp26) {
                        if (cResult[35] === tmp4.description) {
                          let tmp48 = cResult[36];
                        }
                        if (cResult[37] === tmp43) {
                          if (cResult[38] === tmp47) {
                            if (cResult[39] === tmp48) {
                              let tmp51 = cResult[40];
                            }
                            if (cResult[41] === onLogin) {
                              if (cResult[42] === stateFromStores) {
                                if (cResult[46] === tmp4.description) {
                                  if (cResult[47] === tmp55) {
                                    let tmp60 = cResult[48];
                                  }
                                  if (cResult[49] === tmp4.footer) {
                                    if (cResult[52] === tmp40) {
                                      if (cResult[53] === tmp51) {
                                        if (cResult[54] === tmp63) {
                                          if (cResult[55] === tmp31) {
                                            if (cResult[58] !== logoutRequestInFlight) {
                                              { visible: null }.visible = logoutRequestInFlight;
                                              class L {
                                                constructor() {
                                                  obj = { opacity: closure_1.get() };
                                                  return obj;
                                                }
                                              }
                                              cResult[58] = logoutRequestInFlight;
                                              cResult[59] = tmp74;
                                              let tmp71 = tmp74;
                                              let obj7 = { visible: null };
                                            } else {
                                              tmp71 = cResult[59];
                                            }
                                            if (cResult[60] === tmp68) {
                                              if (cResult[61] === tmp71) {
                                                let tmp75 = cResult[62];
                                              }
                                              return tmp75;
                                            }
                                            class L {
                                              constructor() {
                                                obj = { opacity: closure_1.get() };
                                                return obj;
                                              }
                                            }
                                            tmp77[0] = c9;
                                            const items1 = [tmp68, tmp71];
                                            tmp77[1] = items1;
                                            const tmp79 = closure_8(tmp(tmp2[20]).ModalScreen, tmp77);
                                            cResult[60] = tmp68;
                                            class A {
                                              constructor() {
                                                obj = { opacity: closure_2.get() };
                                                return obj;
                                              }
                                            }
                                            cResult[61] = tmp71;
                                            cResult[62] = tmp79;
                                            tmp75 = tmp79;
                                          }
                                        }
                                      }
                                    }
                                    let obj8 = { style: null, children: null };
                                    class L {
                                      constructor() {
                                        obj = { opacity: closure_1.get() };
                                        return obj;
                                      }
                                    }
                                    const items2 = [tmp32, tmp40, tmp51, tmp63];
                                    obj8.children = items2;
                                    cResult[52] = tmp40;
                                    class A {
                                      constructor() {
                                        obj = { opacity: closure_2.get() };
                                        return obj;
                                      }
                                    }
                                    cResult[53] = tmp51;
                                    cResult[54] = tmp63;
                                    cResult[55] = tmp31;
                                    cResult[56] = tmp32;
                                    cResult[57] = closure_8(tmp5(tmp2[13]).View, obj8);
                                    class D {
                                      constructor() {
                                        obj = { opacity: closure_3.get(), transform: null };
                                        obj1 = { scale: closure_4.get() };
                                        items = [];
                                        items[0] = obj1;
                                        obj.transform = items;
                                        return obj;
                                      }
                                    }
                                    const tmp70 = closure_8(tmp5(tmp2[13]).View, obj8);
                                  }
                                  class L {
                                    constructor() {
                                      obj = { opacity: closure_1.get() };
                                      return obj;
                                    }
                                  }
                                  tmp66[0] = tmp54;
                                  tmp66[1] = tmp60;
                                  cResult[49] = tmp4.footer;
                                  cResult[50] = tmp60;
                                  cResult[51] = closure_7(closure_5, tmp66);
                                  class A {
                                    constructor() {
                                      obj = { opacity: closure_2.get() };
                                      return obj;
                                    }
                                  }
                                  const tmp67 = closure_7(closure_5, tmp66);
                                }
                                let obj9 = { variant: "text-sm/medium", color: "text-subtle", style: null, children: null };
                                class L {
                                  constructor() {
                                    obj = { opacity: closure_1.get() };
                                    return obj;
                                  }
                                }
                                obj9.children = cResult[43];
                                const tmp62 = closure_7(tmp(tmp2[19]).Text, obj9);
                                cResult[46] = tmp4.description;
                                cResult[47] = cResult[43];
                                cResult[48] = tmp62;
                                tmp60 = tmp62;
                              }
                            }
                            if (cResult[44] !== onLogin) {
                              function ie(children, arg1) {
                                return React5(Text_Text.Text, { variant: "text-sm/normal", color: "text-link", onPress: onLogin, children }, arg1);
                              }
                              cResult[44] = onLogin;
                              class L {
                                constructor() {
                                  obj = { opacity: closure_1.get() };
                                  return obj;
                                }
                              }
                              let tmp56 = ie;
                            } else {
                              tmp56 = cResult[45];
                            }
                            class L {
                              constructor() {
                                obj = { opacity: closure_1.get() };
                                return obj;
                              }
                            }
                            const obj10 = { username: stateFromStores, loginHook: tmp56 };
                            cResult[41] = onLogin;
                            cResult[42] = stateFromStores;
                            class A {
                              constructor() {
                                obj = { opacity: closure_2.get() };
                                return obj;
                              }
                            }
                            const tmp57Result = tmp57(tmp5(tmp2[16]).iqeKDz, obj10);
                          }
                        }
                        let obj11 = { style: null, children: null };
                        class L {
                          constructor() {
                            obj = { opacity: closure_1.get() };
                            return obj;
                          }
                        }
                        const items3 = [tmp47, tmp48];
                        obj11.children = items3;
                        const tmp53 = closure_8(tmp5(tmp2[13]).View, obj11);
                        cResult[37] = tmp43;
                        cResult[38] = tmp47;
                        class A {
                          constructor() {
                            obj = { opacity: closure_2.get() };
                            return obj;
                          }
                        }
                        cResult[39] = tmp48;
                        cResult[40] = tmp53;
                        tmp51 = tmp53;
                      }
                      const obj12 = { variant: "text-lg/medium", color: "text-overlay-light", style: tmp4.description, children: tmp26 };
                      const tmp50 = closure_7(tmp(tmp2[19]).Text, obj12);
                      cResult[34] = tmp26;
                      class A {
                        constructor() {
                          obj = { opacity: closure_2.get() };
                          return obj;
                        }
                      }
                      cResult[36] = tmp50;
                      tmp48 = tmp50;
                    }
                    const items4 = [tmp4.content, ];
                    class L {
                      constructor() {
                        obj = { opacity: closure_1.get() };
                        return obj;
                      }
                    }
                    cResult[28] = animatedStyle2;
                    cResult[29] = tmp4.content;
                    cResult[30] = items4;
                    tmp43 = items4;
                  }
                  const obj13 = { style: tmp36, pointerEvents: "none", children: tmp39 };
                  const tmp42 = closure_7(tmp5(tmp2[13]).View, obj13);
                  cResult[25] = tmp39;
                  class A {
                    constructor() {
                      obj = { opacity: closure_2.get() };
                      return obj;
                    }
                  }
                  cResult[27] = tmp42;
                  tmp40 = tmp42;
                }
                const items5 = [, ];
                class L {
                  constructor() {
                    obj = { opacity: closure_1.get() };
                    return obj;
                  }
                }
                items5[1] = animatedStyle1;
                cResult[19] = animatedStyle1;
                cResult[20] = tmp4.assetLayers;
                cResult[21] = items5;
                tmp36 = items5;
              }
            }
            const items6 = [tmp4.container, , ];
            class L {
              constructor() {
                obj = { opacity: closure_1.get() };
                return obj;
              }
            }
            items6[2] = animatedStyle;
            cResult[13] = animatedStyle;
            cResult[14] = tmp4.container;
            cResult[15] = tmp30;
            cResult[16] = items6;
            class A {
              constructor() {
                obj = { opacity: closure_2.get() };
                return obj;
              }
            }
          }
          const obj14 = { paddingTop: top, paddingBottom: null };
          class L {
            constructor() {
              obj = { opacity: closure_1.get() };
              return obj;
            }
          }
          cResult[10] = bottom;
          cResult[11] = top;
          cResult[12] = obj14;
          tmp30 = obj14;
        }
        const tmpResult15 = tmp(tmp2[13]);
      }
    }
  }
  class I {
    constructor() {
      obj = closure_0(closure_2[14]);
      obj1 = { duration: 3000, easing: null };
      Easing = closure_0(closure_2[13]).Easing;
      obj1.easing = Easing.bezier(0.24, 0.27, 0.58, 1);
      result = closure_1.set(obj.withTiming(1, obj1));
      obj3 = closure_0(closure_2[13]);
      obj4 = closure_0(closure_2[14]);
      obj12 = { duration: 1500, easing: null };
      Easing2 = closure_0(closure_2[13]).Easing;
      obj12.easing = Easing2.bezier(0, 0, 1, 1);
      result1 = closure_2.set(obj3.withDelay(1500, obj4.withTiming(1, obj12)));
      obj6 = closure_0(closure_2[13]);
      obj7 = closure_0(closure_2[14]);
      obj13 = { duration: 1000, easing: null };
      Easing3 = closure_0(closure_2[13]).Easing;
      obj13.easing = Easing3.bezier(0.1, 0.24, 0.32, 1);
      result2 = closure_3.set(obj6.withDelay(2000, obj7.withTiming(1, obj13)));
      obj9 = closure_0(closure_2[13]);
      obj10 = closure_0(closure_2[14]);
      obj14 = { duration: 1000, easing: null };
      Easing4 = closure_0(closure_2[13]).Easing;
      obj14.easing = Easing4.bezier(0.1, 0.24, 0.32, 1);
      result3 = closure_4.set(obj9.withDelay(2000, obj10.withTiming(1, obj14)));
      return;
    }
  }
  const items7 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  cResult[2] = sharedValue;
  cResult[3] = sharedValue2;
  cResult[4] = sharedValue3;
  cResult[5] = sharedValue1;
  cResult[6] = I;
  cResult[7] = items7;
  tmp17 = items7;
  tmp16 = I;
  const tmpResult12 = onLogin(sharedValue1[13]);
}) : ((visible) => {
  const onLogin = visible.onLogin;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_10();
  ({ top, bottom } = sharedValue(sharedValue1[10])());
  const tmp5 = sharedValue(sharedValue1[11])();
  const tmp4 = sharedValue(sharedValue1[10])();
  let items = [UserStore];
  const stateFromStores = onLogin(sharedValue1[12]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let str;
    if (currentUser != null) {
      str = currentUser.username;
    }
    if (str == null) {
      str = "";
    }
    return str;
  });
  let obj = onLogin(sharedValue1[12]);
  sharedValue = onLogin(sharedValue1[13]).useSharedValue(0);
  let obj2 = onLogin(sharedValue1[13]);
  sharedValue1 = onLogin(sharedValue1[13]).useSharedValue(0);
  let obj3 = onLogin(sharedValue1[13]);
  const sharedValue2 = onLogin(sharedValue1[13]).useSharedValue(0);
  let obj4 = onLogin(sharedValue1[13]);
  const sharedValue3 = onLogin(sharedValue1[13]).useSharedValue(0.9);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  const effect = sharedValue3.useEffect(() => {
    const obj2 = { duration: 3000, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj2.easing = Easing.bezier(0.24, 0.27, 0.58, 1);
    const result = sharedValue.set(timing.withTiming(1, obj2));
    const obj3 = ReanimatedRexport;
    const obj5 = { duration: 1500, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj5.easing = Easing2.bezier(0, 0, 1, 1);
    const result1 = sharedValue1.set(obj3.withDelay(1500, timing.withTiming(1, obj5)));
    const obj6 = ReanimatedRexport;
    const obj8 = { duration: 1000, easing: null };
    const Easing3 = ReanimatedRexport.Easing;
    obj8.easing = Easing3.bezier(0.1, 0.24, 0.32, 1);
    const result2 = sharedValue2.set(obj6.withDelay(2000, timing.withTiming(1, obj8)));
    const obj9 = ReanimatedRexport;
    const obj11 = { duration: 1000, easing: null };
    const Easing4 = ReanimatedRexport.Easing;
    obj11.easing = Easing4.bezier(0.1, 0.24, 0.32, 1);
    const result3 = sharedValue3.set(obj9.withDelay(2000, timing.withTiming(1, obj11)));
  }, items1);
  let obj5 = onLogin(sharedValue1[13]);
  class O {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  O.__closure = { backgroundOpacity: sharedValue };
  O.__workletHash = 6882190830685;
  O.__initData = __initData4;
  const animatedStyle = onLogin(sharedValue1[13]).useAnimatedStyle(O);
  let obj6 = onLogin(sharedValue1[13]);
  const fn = function z() {
    return { opacity: sharedValue1.get() };
  };
  fn.__closure = { gradientOpacity: sharedValue1 };
  fn.__workletHash = 16557434501916;
  fn.__initData = __initData5;
  const animatedStyle1 = onLogin(sharedValue1[13]).useAnimatedStyle(fn);
  let obj7 = onLogin(sharedValue1[13]);
  class C {
    constructor() {
      obj = { opacity: closure_3.get(), transform: null };
      obj1 = { scale: closure_4.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  C.__closure = { contentOpacity: sharedValue2, contentScale: sharedValue3 };
  C.__workletHash = 3188255645458;
  C.__initData = __initData6;
  const animatedStyle2 = onLogin(sharedValue1[13]).useAnimatedStyle(C);
  if (null != tmp5) {
    const intl2 = tmp6(tmp3[15]).intl;
    let obj9 = { endTime: tmp5 };
    let formatResult = intl2.format(tmp2(tmp3[16]).VfqJvY, obj9);
  } else {
    const intl = tmp6(tmp3[15]).intl;
    formatResult = intl.string(tmp2(tmp3[16]).abikhN);
  }
  const obj10 = { backgroundColor, children: null };
  let obj11 = { style: null, children: null };
  const items2 = [tmp.container, { paddingTop: top, paddingBottom: bottom }, animatedStyle];
  obj11.style = items2;
  const items3 = [closure_7(closure_5, { style: tmp.backgroundFill, pointerEvents: "none" }), , , ];
  const obj13 = { style: null, pointerEvents: "none", children: null };
  const items4 = [tmp.assetLayers, animatedStyle1];
  obj13.style = items4;
  const obj12 = { style: tmp.backgroundFill, pointerEvents: "none" };
  let obj8 = onLogin(sharedValue1[13]);
  obj13.children = closure_7(sharedValue(sharedValue1[13]).Image, { source: onLogin(sharedValue1[17]), resizeMode: "cover", style: tmp.sunbeamGradient });
  items3[1] = closure_7(sharedValue(sharedValue1[13]).View, obj13);
  const obj15 = { style: null, children: null };
  const items5 = [tmp.content, animatedStyle2];
  obj15.style = items5;
  const obj14 = { source: onLogin(sharedValue1[17]), resizeMode: "cover", style: tmp.sunbeamGradient };
  const items6 = [closure_7(closure_5, { style: tmp.riveContainer, children: closure_7(onLogin(sharedValue1[18]).TeenScreenTimeRive, { artboard: "Teen Screen Time Illo", stateMachine: "State Machine 1" }) }), closure_7(onLogin(sharedValue1[19]).Text, { variant: "text-lg/medium", color: "text-overlay-light", style: tmp.description, children: formatResult })];
  obj15.children = items6;
  items3[2] = closure_8(sharedValue(sharedValue1[13]).View, obj15);
  const obj18 = { style: tmp.footer, children: null };
  const obj19 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl3 = tmp6(tmp3[15]).intl;
  obj19.children = intl3.format(sharedValue(sharedValue1[16]).iqeKDz, {
    username: stateFromStores,
    loginHook(children, arg1) {
      return React5(Text_Text.Text, { variant: "text-sm/normal", color: "text-link", onPress: onLogin, children }, arg1);
    }
  });
  obj18.children = closure_7(onLogin(sharedValue1[19]).Text, obj19);
  items3[3] = closure_7(closure_5, obj18);
  obj11.children = items3;
  const items7 = [closure_8(sharedValue(sharedValue1[13]).View, obj11), closure_7(closure_12, { visible: visible.logoutRequestInFlight })];
  obj10.children = items7;
  return closure_8(onLogin(sharedValue1[20]).ModalScreen, obj10);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp4 = cResult[2];
      let tmp5 = cResult[3];
    }
    return tmp(6496).useNavigatorScreens(tmp4, tmp5);
  }
  const fn = function o() {
    return {
      [closure_2_11.MAIN]: {
        headerShown: false,
        gestureEnabled: false,
        render() {
          return closure_2_7(closure_2_19, { onLogin, logoutRequestInFlight });
        }
      }
    };
  };
  const items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
  const obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return require("Navigator").useNavigatorScreens(() => ({
    [closure_2_11.MAIN]: {
      headerShown: false,
      gestureEnabled: false,
      render() {
        return closure_2_7(closure_2_19, { onLogin, logoutRequestInFlight });
      }
    }
  }), items);
});
ReactCompilerGating = fn(558);
let obj8 = { position: "absolute", bottom: nativeDefault.space.PX_32, alignSelf: "center", zIndex: 2 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/native/RestrictedHoursModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(9);
  const tmp5 = useIsInRestrictedHoursDefault();
  _require = tmp5;
  importDefault = noop.useRef(false);
  dependencyMap = noop.useRef(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      closure_2.current = true;
      return () => {
        closure_1_2.current = false;
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp6 = fn;
    tmp7 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const effect = noop.useEffect(tmp6, tmp7);
  const tmp9 = closure_3(noop.useState(false), 2);
  closure_3 = tmp9[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _() {
      if (!ref.current) {
        tmp.current = true;
        closure_3(true);
        AuthenticationActionCreatorsDefault.logout("restricted_hours").finally(() => {
          if (ref.current) {
            closure_1_1.current = false;
            closure_1_3(false);
          }
        });
        const logoutResult = AuthenticationActionCreatorsDefault.logout("restricted_hours");
      }
    };
    cResult[2] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[2];
  }
  const tmp11 = closure_20(tmp10, tmp9[0]);
  if (cResult[3] !== tmp5) {
    const fn3 = function x() {
      let current = closure_0;
      if (!closure_0) {
        current = ref.current;
      }
      if (!current) {
        const result = RestrictedHoursActionCreators.closeRestrictedHoursModal();
      }
    };
    const items1 = [tmp5];
    cResult[3] = tmp5;
    cResult[4] = fn3;
    cResult[5] = items1;
    let tmp13 = items1;
    let tmp12 = fn3;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const effect1 = noop.useEffect(tmp12, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        return true;
      }
    }
    cResult[6] = T;
  } else {
    class T {
      constructor() {
        return true;
      }
    }
  }
  useBackPressHandlerDefault(T);
  if (cResult[7] !== tmp11) {
    class T {
      constructor() {
        return true;
      }
    }
    const obj3 = { screens: tmp11, initialRouteName: constants.MAIN };
    const tmp19 = closure_7(require("Modal").Modal, obj3);
    cResult[7] = tmp11;
    cResult[8] = tmp19;
    const tmp17 = tmp19;
  } else {
    class T {
      constructor() {
        return true;
      }
    }
  }
  return tmp17;
}) : (() => {
  const tmp = useIsInRestrictedHoursDefault();
  _require = tmp;
  importDefault = noop.useRef(false);
  dependencyMap = noop.useRef(true);
  const effect = noop.useEffect(() => {
    closure_2.current = true;
    return () => {
      closure_1_2.current = false;
    };
  }, []);
  [tmp4, _slicedToArray] = noop.useState(false);
  const items = [tmp];
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  const effect1 = noop.useEffect(() => {
    let current = closure_0;
    if (!closure_0) {
      current = ref.current;
    }
    if (!current) {
      const result = RestrictedHoursActionCreators.closeRestrictedHoursModal();
    }
  }, items);
  useBackPressHandlerDefault(() => true);
  const tmp5 = closure_20(noop.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      _slicedToArray(true);
      AuthenticationActionCreatorsDefault.logout("restricted_hours").finally(() => {
        if (ref.current) {
          closure_1_1.current = false;
          closure_1_3(false);
        }
      });
      const logoutResult = AuthenticationActionCreatorsDefault.logout("restricted_hours");
    }
  }, []), tmp4);
  return closure_7(require("Modal").Modal, {
    screens: closure_20(noop.useCallback(() => {
      if (!ref.current) {
        tmp.current = true;
        _slicedToArray(true);
        AuthenticationActionCreatorsDefault.logout("restricted_hours").finally(() => {
          if (ref.current) {
            closure_1_1.current = false;
            closure_1_3(false);
          }
        });
        const logoutResult = AuthenticationActionCreatorsDefault.logout("restricted_hours");
      }
    }, []), tmp4),
    initialRouteName: constants.MAIN
  });
});