// === Module 17435: RestrictedHoursModal ===

// Module 17435 (RestrictedHoursModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import timing from "timing" /* 4891 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5968 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6082 */;
import RestrictedHoursActionCreators from "RestrictedHoursActionCreators" /* 17434 */;
import useIsInRestrictedHoursDefault from "useIsInRestrictedHours" /* 17438 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_3, currentUser, dependencyMap, importDefault, set, set2, set3, set4, visible;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let tmp4;
const useBackPressHandlerDefault = tmp4(5780);
({ StyleSheet, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = "rgb(0, 3, 40)";
let createStyles = createStyles_mod;
let obj = { container: obj2, backgroundFill: obj3, assetLayers: obj4, sunbeamGradient: obj5, riveContainer: { width: "100%", maxWidth: 523, height: 300 }, content: obj6, description: { textAlign: "center" }, footer: obj7, logoutBlockingLayer: obj8 };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { zIndex: 0, backgroundColor: "rgb(0, 3, 40)" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { zIndex: 1 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { alignItems: "center", width: "100%", gap: nativeDefault.space.PX_16, zIndex: 2 };
obj7 = { position: "absolute", bottom: nativeDefault.space.PX_32, alignSelf: "center", zIndex: 2 };
obj8 = { zIndex: 10, justifyContent: "center", alignItems: "center", backgroundColor: "rgb(0, 3, 40)" };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj);
const constants = { MAIN: "main" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  const obj = react2;
  const cResult = obj.c(3);
  visible = visible.visible;
  const tmp4 = closure_10();
  let tmp5 = null;
  if (visible) {
    let first;
    let tmp10;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp9 = metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, { size: "large" });
      cResult[0] = tmp9;
      first = tmp9;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp4.logoutBlockingLayer) {
      const obj2 = { style: tmp4.logoutBlockingLayer, pointerEvents: "auto", accessibilityLiveRegion: "polite", children: first };
      const tmp13 = metroImportDefault(hasOwnProperty, obj2);
      cResult[1] = tmp4.logoutBlockingLayer;
      cResult[2] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[2];
    }
    tmp5 = tmp10;
  }
  return tmp5;
}) : ((visible) => {
  let tmp2 = null;
  if (visible.visible) {
    const obj = { style: tmp.logoutBlockingLayer, pointerEvents: "auto", accessibilityLiveRegion: "polite", children: metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, { size: "large" }) };
    tmp2 = metroImportDefault(hasOwnProperty, obj);
  }
  return tmp2;
});
const __initData = { code: "function RestrictedHoursModalTsx1(){const{backgroundOpacity}=this.__closure;return{opacity:backgroundOpacity.get()};}" };
const __initData2 = { code: "function RestrictedHoursModalTsx2(){const{gradientOpacity}=this.__closure;return{opacity:gradientOpacity.get()};}" };
const __initData3 = { code: "function RestrictedHoursModalTsx3(){const{contentOpacity,contentScale}=this.__closure;return{opacity:contentOpacity.get(),transform:[{scale:contentScale.get()}]};}" };
const __initData4 = { code: "function RestrictedHoursModalTsx4(){const{backgroundOpacity}=this.__closure;return{opacity:backgroundOpacity.get()};}" };
const __initData5 = { code: "function RestrictedHoursModalTsx5(){const{gradientOpacity}=this.__closure;return{opacity:gradientOpacity.get()};}" };
const __initData6 = { code: "function RestrictedHoursModalTsx6(){const{contentOpacity,contentScale}=this.__closure;return{opacity:contentOpacity.get(),transform:[{scale:contentScale.get()}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((onLogin) => {
  let bottom;
  let items2;
  let items3;
  let sharedValue;
  let sharedValue1;
  let tmp8;
  let tmp9;
  let top;
  const tmp = onLogin;
  let obj = onLogin(sharedValue1[8]);
  const cResult = obj.c(63);
  onLogin = onLogin.onLogin;
  const logoutRequestInFlight = onLogin.logoutRequestInFlight;
  const tmp4 = closure_10();
  const tmp6 = sharedValue(sharedValue1[10])();
  ({ top, bottom } = tmp6);
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
    tmp9 = fn;
    tmp8 = items;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = tmp(sharedValue1[12]);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  const tmpResult9 = tmp(sharedValue1[13]);
  sharedValue = tmpResult9.useSharedValue(0);
  const tmpResult10 = tmp(sharedValue1[13]);
  sharedValue1 = tmpResult10.useSharedValue(0);
  const tmpResult11 = tmp(sharedValue1[13]);
  const sharedValue2 = tmpResult11.useSharedValue(0);
  const tmpResult12 = tmp(sharedValue1[13]);
  const sharedValue3 = tmpResult12.useSharedValue(0.9);
  if (cResult[2] === sharedValue) {
    if (cResult[3] === sharedValue2) {
      if (cResult[4] === sharedValue3) {
        let tmp16;
        let tmp17;
        let tmp26;
        if (cResult[5] === sharedValue1) {
          tmp16 = cResult[6];
          tmp17 = cResult[7];
        }
        const effect = sharedValue3.useEffect(tmp16, tmp17);
        const tmpResult13 = tmp(sharedValue1[13]);
        class L {
          constructor() {
            const obj = { opacity: sharedValue.get() };
            return obj;
          }
        }
        let obj2 = { backgroundOpacity: sharedValue };
        L.__closure = obj2;
        L.__workletHash = 17073775693336;
        L.__initData = __initData;
        const animatedStyle = tmpResult13.useAnimatedStyle(L);
        const tmpResult14 = tmp(sharedValue1[13]);
        class A {
          constructor() {
            const obj = { opacity: sharedValue1.get() };
            return obj;
          }
        }
        let obj3 = { gradientOpacity: sharedValue1 };
        A.__closure = obj3;
        A.__workletHash = 16592270370139;
        A.__initData = __initData2;
        const animatedStyle1 = tmpResult14.useAnimatedStyle(A);
        const tmpResult15 = tmp(sharedValue1[13]);
        class D {
          constructor() {
            let items;
            const obj = { opacity: sharedValue2.get(), transform: items };
            items = [{ scale: sharedValue3.get() }];
            ({ scale: sharedValue3.get() });
            return obj;
          }
        }
        let obj4 = { contentOpacity: sharedValue2, contentScale: sharedValue3 };
        D.__closure = obj4;
        D.__workletHash = 15616799997783;
        D.__initData = __initData3;
        const animatedStyle2 = tmpResult15.useAnimatedStyle(D);
        if (cResult[8] !== tmp7) {
          let stringResult;
          if (null != tmp7) {
            const format = tmp(tmp2[15]).intl.format;
            class L {
              constructor() {
                const obj = { opacity: sharedValue.get() };
                return obj;
              }
            }
          } else {
            const intl = tmp(tmp2[15]).intl;
            stringResult = intl.string(sharedValue(sharedValue1[16]).abikhN);
          }
          cResult[8] = tmp7;
          class L {
            constructor() {
              const obj = { opacity: sharedValue.get() };
              return obj;
            }
          }
          cResult[9] = stringResult;
          tmp26 = stringResult;
        } else {
          tmp26 = cResult[9];
        }
        if (cResult[10] === bottom) {
          let tmp29;
          if (cResult[11] === top) {
            tmp29 = cResult[12];
          }
          if (cResult[13] === animatedStyle) {
            if (cResult[14] === tmp4.container) {
              let tmp31;
              if (cResult[17] !== tmp4.backgroundFill) {
                class L {
                  constructor() {
                    const obj = { opacity: sharedValue.get() };
                    return obj;
                  }
                }
                cResult[17] = tmp4.backgroundFill;
                cResult[18] = tmp34;
                tmp31 = tmp34;
              } else {
                tmp31 = cResult[18];
              }
              if (cResult[19] === animatedStyle1) {
                let tmp35;
                if (cResult[20] === tmp4.assetLayers) {
                  tmp35 = cResult[21];
                }
                const _Symbol = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  cResult[22] = tmp(sharedValue1[17]);
                  const tmpResult16 = tmp(sharedValue1[17]);
                }
                class L {
                  constructor() {
                    const obj = { opacity: sharedValue.get() };
                    return obj;
                  }
                }
                if (cResult[25] === tmp38) {
                  let tmp39;
                  if (cResult[26] === tmp35) {
                    tmp39 = cResult[27];
                  }
                  if (cResult[28] === animatedStyle2) {
                    let tmp42;
                    if (cResult[29] === tmp4.content) {
                      tmp42 = cResult[30];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                      cResult[31] = closure_7(tmp(sharedValue1[18]).TeenScreenTimeRive, { artboard: "Teen Screen Time Illo", stateMachine: "State Machine 1" });
                      closure_7(tmp(sharedValue1[18]).TeenScreenTimeRive, { artboard: "Teen Screen Time Illo", stateMachine: "State Machine 1" });
                      class L {
                        constructor() {
                          const obj = { opacity: sharedValue.get() };
                          return obj;
                        }
                      }
                    }
                    class L {
                      constructor() {
                        const obj = { opacity: sharedValue.get() };
                        return obj;
                      }
                    }
                    if (cResult[34] === tmp26) {
                      let tmp47;
                      if (cResult[35] === tmp4.description) {
                        tmp47 = cResult[36];
                      }
                      if (cResult[37] === tmp42) {
                        if (cResult[38] === tmp46) {
                          let tmp50;
                          let tmp55;
                          if (cResult[39] === tmp47) {
                            tmp50 = cResult[40];
                          }
                          if (cResult[41] === onLogin) {
                            let tmp54;
                            if (cResult[42] === stateFromStores) {
                              tmp54 = cResult[43];
                            }
                            if (cResult[46] === tmp4.description) {
                              let tmp58;
                              if (cResult[47] === tmp54) {
                                tmp58 = cResult[48];
                              }
                              if (cResult[49] === tmp4.footer) {
                                if (cResult[52] === tmp39) {
                                  if (cResult[53] === tmp50) {
                                    if (cResult[54] === tmp61) {
                                      if (cResult[55] === tmp30) {
                                        let tmp69;
                                        if (cResult[58] !== logoutRequestInFlight) {
                                          class L {
                                            constructor() {
                                              const obj = { opacity: sharedValue.get() };
                                              return obj;
                                            }
                                          }
                                          cResult[58] = logoutRequestInFlight;
                                          cResult[59] = tmp72;
                                          tmp69 = tmp72;
                                        } else {
                                          tmp69 = cResult[59];
                                        }
                                        if (cResult[60] === tmp66) {
                                          let tmp73;
                                          if (cResult[61] === tmp69) {
                                            tmp73 = cResult[62];
                                          }
                                          return tmp73;
                                        }
                                        class L {
                                          constructor() {
                                            const obj = { opacity: sharedValue.get() };
                                            return obj;
                                          }
                                        }
                                        tmp75[0] = c9;
                                        const items1 = [tmp66, tmp69];
                                        tmp75[1] = items1;
                                        const tmp77 = closure_8(tmp(sharedValue1[20]).ModalScreen, tmp75);
                                        cResult[60] = tmp66;
                                        class A {
                                          constructor() {
                                            const obj = { opacity: sharedValue1.get() };
                                            return obj;
                                          }
                                        }
                                        cResult[61] = tmp69;
                                        cResult[62] = tmp77;
                                        tmp73 = tmp77;
                                      }
                                    }
                                  }
                                }
                                const obj8 = { style: null, children: items2 };
                                class L {
                                  constructor() {
                                    const obj = { opacity: sharedValue.get() };
                                    return obj;
                                  }
                                }
                                items2 = [tmp31, tmp39, tmp50, tmp61];
                                cResult[52] = tmp39;
                                const tmp68 = closure_8(sharedValue(sharedValue1[13]).View, obj8);
                                class A {
                                  constructor() {
                                    const obj = { opacity: sharedValue1.get() };
                                    return obj;
                                  }
                                }
                                cResult[53] = tmp50;
                                cResult[54] = tmp61;
                                cResult[55] = tmp30;
                                cResult[56] = tmp31;
                                cResult[57] = tmp68;
                                class D {
                                  constructor() {
                                    let items;
                                    const obj = { opacity: sharedValue2.get(), transform: items };
                                    items = [{ scale: sharedValue3.get() }];
                                    ({ scale: sharedValue3.get() });
                                    return obj;
                                  }
                                }
                              }
                              class L {
                                constructor() {
                                  const obj = { opacity: sharedValue.get() };
                                  return obj;
                                }
                              }
                              tmp64[0] = tmp53;
                              tmp64[1] = tmp58;
                              cResult[49] = tmp4.footer;
                              cResult[50] = tmp58;
                              cResult[51] = closure_7(closure_5, tmp64);
                              closure_7(closure_5, tmp64);
                              class A {
                                constructor() {
                                  const obj = { opacity: sharedValue1.get() };
                                  return obj;
                                }
                              }
                            }
                            const obj9 = { variant: "text-sm/medium", color: "text-subtle", style: null, children: tmp54 };
                            class L {
                              constructor() {
                                const obj = { opacity: sharedValue.get() };
                                return obj;
                              }
                            }
                            const tmp60 = closure_7(tmp(sharedValue1[19]).Text, obj9);
                            cResult[46] = tmp4.description;
                            cResult[47] = tmp54;
                            cResult[48] = tmp60;
                            tmp58 = tmp60;
                          }
                          if (cResult[44] !== onLogin) {
                            function ie(children, id) {
                              const obj = { variant: "text-sm/normal", color: "text-link", onPress: onLogin, children };
                              return metroImportDefault(Text_Text.Text, obj, id);
                            }
                            cResult[44] = onLogin;
                            class L {
                              constructor() {
                                const obj = { opacity: sharedValue.get() };
                                return obj;
                              }
                            }
                            tmp55 = ie;
                          } else {
                            tmp55 = cResult[45];
                          }
                          const intl2 = tmp(tmp2[15]).intl;
                          class L {
                            constructor() {
                              const obj = { opacity: sharedValue.get() };
                              return obj;
                            }
                          }
                          const obj10 = { username: stateFromStores, loginHook: tmp55 };
                          cResult[41] = onLogin;
                          cResult[42] = stateFromStores;
                          const tmp56Result = tmp56(sharedValue(sharedValue1[16]).iqeKDz, obj10);
                          class A {
                            constructor() {
                              const obj = { opacity: sharedValue1.get() };
                              return obj;
                            }
                          }
                          tmp54 = tmp56Result;
                        }
                      }
                      const obj11 = { style: null, children: items3 };
                      class L {
                        constructor() {
                          const obj = { opacity: sharedValue.get() };
                          return obj;
                        }
                      }
                      items3 = [tmp46, tmp47];
                      const tmp52 = closure_8(sharedValue(sharedValue1[13]).View, obj11);
                      cResult[37] = tmp42;
                      cResult[38] = tmp46;
                      class A {
                        constructor() {
                          const obj = { opacity: sharedValue1.get() };
                          return obj;
                        }
                      }
                      cResult[39] = tmp47;
                      cResult[40] = tmp52;
                      tmp50 = tmp52;
                    }
                    const obj12 = { variant: "text-lg/medium", color: "text-overlay-light", style: tmp4.description, children: tmp26 };
                    const tmp49 = closure_7(tmp(sharedValue1[19]).Text, obj12);
                    cResult[34] = tmp26;
                    class A {
                      constructor() {
                        const obj = { opacity: sharedValue1.get() };
                        return obj;
                      }
                    }
                    cResult[36] = tmp49;
                    tmp47 = tmp49;
                  }
                  const items4 = [tmp4.content, ];
                  class L {
                    constructor() {
                      const obj = { opacity: sharedValue.get() };
                      return obj;
                    }
                  }
                  cResult[28] = animatedStyle2;
                  cResult[29] = tmp4.content;
                  cResult[30] = items4;
                  tmp42 = items4;
                }
                const obj13 = { style: tmp35, pointerEvents: "none", children: tmp38 };
                const tmp41 = closure_7(sharedValue(sharedValue1[13]).View, obj13);
                cResult[25] = tmp38;
                class A {
                  constructor() {
                    const obj = { opacity: sharedValue1.get() };
                    return obj;
                  }
                }
                cResult[27] = tmp41;
                tmp39 = tmp41;
              }
              const items5 = [, ];
              class L {
                constructor() {
                  const obj = { opacity: sharedValue.get() };
                  return obj;
                }
              }
              items5[1] = animatedStyle1;
              cResult[19] = animatedStyle1;
              cResult[20] = tmp4.assetLayers;
              cResult[21] = items5;
              tmp35 = items5;
            }
          }
          const items6 = [tmp4.container, , ];
          class L {
            constructor() {
              const obj = { opacity: sharedValue.get() };
              return obj;
            }
          }
          items6[2] = animatedStyle;
          cResult[13] = animatedStyle;
          cResult[14] = tmp4.container;
          cResult[15] = tmp29;
          cResult[16] = items6;
          class A {
            constructor() {
              const obj = { opacity: sharedValue1.get() };
              return obj;
            }
          }
        }
        const obj14 = { paddingTop: top, paddingBottom: bottom };
        class I {
          constructor() {
            let Easing;
            let Easing2;
            let Easing3;
            let Easing4;
            set = sharedValue.set;
            const obj = { duration: 3000, easing: Easing.bezier(0.24, 0.27, 0.58, 1) };
            const withTiming = timing.withTiming;
            timing;
            Easing = ReanimatedRexport.Easing;
            const result = set(withTiming(1, obj));
            set2 = sharedValue1.set;
            const withDelay = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const obj2 = { duration: 1500, easing: Easing2.bezier(0, 0, 1, 1) };
            const withTiming2 = timing.withTiming;
            timing;
            Easing2 = ReanimatedRexport.Easing;
            set2(withDelay(1500, withTiming2(1, obj2)));
            set3 = sharedValue2.set;
            const withDelay2 = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const obj3 = { duration: 1000, easing: Easing3.bezier(0.1, 0.24, 0.32, 1) };
            const withTiming3 = timing.withTiming;
            timing;
            Easing3 = ReanimatedRexport.Easing;
            set3(withDelay2(2000, withTiming3(1, obj3)));
            set4 = sharedValue3.set;
            const withDelay3 = ReanimatedRexport.withDelay;
            ReanimatedRexport;
            const obj4 = { duration: 1000, easing: Easing4.bezier(0.1, 0.24, 0.32, 1) };
            const withTiming4 = timing.withTiming;
            timing;
            Easing4 = ReanimatedRexport.Easing;
            set4(withDelay3(2000, withTiming4(1, obj4)));
          }
        }
        cResult[10] = bottom;
        cResult[11] = top;
        cResult[12] = obj14;
        tmp29 = obj14;
      }
    }
  }
  class I {
    constructor() {
      let Easing;
      let Easing2;
      let Easing3;
      let Easing4;
      set = sharedValue.set;
      const obj = { duration: 3000, easing: Easing.bezier(0.24, 0.27, 0.58, 1) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const result = set(withTiming(1, obj));
      set2 = sharedValue1.set;
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj2 = { duration: 1500, easing: Easing2.bezier(0, 0, 1, 1) };
      const withTiming2 = timing.withTiming;
      timing;
      Easing2 = ReanimatedRexport.Easing;
      set2(withDelay(1500, withTiming2(1, obj2)));
      set3 = sharedValue2.set;
      const withDelay2 = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj3 = { duration: 1000, easing: Easing3.bezier(0.1, 0.24, 0.32, 1) };
      const withTiming3 = timing.withTiming;
      timing;
      Easing3 = ReanimatedRexport.Easing;
      set3(withDelay2(2000, withTiming3(1, obj3)));
      set4 = sharedValue3.set;
      const withDelay3 = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj4 = { duration: 1000, easing: Easing4.bezier(0.1, 0.24, 0.32, 1) };
      const withTiming4 = timing.withTiming;
      timing;
      Easing4 = ReanimatedRexport.Easing;
      set4(withDelay3(2000, withTiming4(1, obj4)));
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
}) : ((onLogin) => {
  let Image;
  let Text;
  let bottom;
  let formatResult;
  let intl3;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj14;
  let obj19;
  let obj20;
  let top;
  onLogin = onLogin.onLogin;
  let sharedValue;
  let sharedValue1;
  const logoutRequestInFlight = onLogin.logoutRequestInFlight;
  const tmp = closure_10();
  const tmp3 = sharedValue1;
  const tmp4 = sharedValue(sharedValue1[10])();
  ({ top, bottom } = tmp4);
  const tmp5 = sharedValue(sharedValue1[11])();
  const tmp6 = onLogin;
  let obj = onLogin(sharedValue1[12]);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  let obj2 = onLogin(sharedValue1[13]);
  sharedValue = obj2.useSharedValue(0);
  let obj3 = onLogin(sharedValue1[13]);
  sharedValue1 = obj3.useSharedValue(0);
  let obj4 = onLogin(sharedValue1[13]);
  const sharedValue2 = obj4.useSharedValue(0);
  const obj5 = onLogin(sharedValue1[13]);
  const sharedValue3 = obj5.useSharedValue(0.9);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  const effect = sharedValue3.useEffect(() => {
    let Easing;
    let Easing2;
    let Easing3;
    let Easing4;
    set = sharedValue.set;
    const obj = { duration: 3000, easing: Easing.bezier(0.24, 0.27, 0.58, 1) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    const result = set(withTiming(1, obj));
    set2 = sharedValue1.set;
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const obj2 = { duration: 1500, easing: Easing2.bezier(0, 0, 1, 1) };
    const withTiming2 = timing.withTiming;
    timing;
    Easing2 = ReanimatedRexport.Easing;
    set2(withDelay(1500, withTiming2(1, obj2)));
    set3 = sharedValue2.set;
    const withDelay2 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const obj3 = { duration: 1000, easing: Easing3.bezier(0.1, 0.24, 0.32, 1) };
    const withTiming3 = timing.withTiming;
    timing;
    Easing3 = ReanimatedRexport.Easing;
    set3(withDelay2(2000, withTiming3(1, obj3)));
    set4 = sharedValue3.set;
    const withDelay3 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const obj4 = { duration: 1000, easing: Easing4.bezier(0.1, 0.24, 0.32, 1) };
    const withTiming4 = timing.withTiming;
    timing;
    Easing4 = ReanimatedRexport.Easing;
    set4(withDelay3(2000, withTiming4(1, obj4)));
  }, items1);
  const obj6 = onLogin(sharedValue1[13]);
  class O {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  O.__closure = { backgroundOpacity: sharedValue };
  O.__workletHash = 6882190830685;
  O.__initData = __initData4;
  const animatedStyle = obj6.useAnimatedStyle(O);
  const fn = function z() {
    const obj = { opacity: sharedValue1.get() };
    return obj;
  };
  fn.__closure = { gradientOpacity: sharedValue1 };
  fn.__workletHash = 16557434501916;
  fn.__initData = __initData5;
  const obj7 = onLogin(sharedValue1[13]);
  const animatedStyle1 = obj7.useAnimatedStyle(fn);
  const obj8 = onLogin(sharedValue1[13]);
  class C {
    constructor() {
      let items;
      const obj = { opacity: sharedValue2.get(), transform: items };
      items = [{ scale: sharedValue3.get() }];
      ({ scale: sharedValue3.get() });
      return obj;
    }
  }
  C.__closure = { contentOpacity: sharedValue2, contentScale: sharedValue3 };
  C.__workletHash = 3188255645458;
  C.__initData = __initData6;
  const animatedStyle2 = obj8.useAnimatedStyle(C);
  if (null != tmp5) {
    const intl2 = tmp6(tmp3[15]).intl;
    const obj9 = { endTime: tmp5 };
    formatResult = intl2.format(tmp2(tmp3[16]).VfqJvY, obj9);
  } else {
    const intl = tmp6(tmp3[15]).intl;
    formatResult = intl.string(tmp2(tmp3[16]).abikhN);
  }
  const obj10 = { backgroundColor, children: items7 };
  const ModalScreen = tmp6(tmp3[20]).ModalScreen;
  const obj11 = { style: items2, children: items3 };
  items2 = [tmp.container, { paddingTop: top, paddingBottom: bottom }, animatedStyle];
  const obj12 = { style: tmp.backgroundFill, pointerEvents: "none" };
  const View = tmp2(tmp3[13]).View;
  items3 = [closure_7(closure_5, obj12), , , ];
  const obj13 = { style: items4, pointerEvents: "none", children: closure_7(Image, obj14) };
  items4 = [tmp.assetLayers, animatedStyle1];
  const View2 = tmp2(tmp3[13]).View;
  obj14 = { source: tmp6(tmp3[17]), resizeMode: "cover", style: tmp.sunbeamGradient };
  Image = tmp2(tmp3[13]).Image;
  items3[1] = closure_7(View2, obj13);
  const obj15 = { style: items5, children: items6 };
  items5 = [tmp.content, animatedStyle2];
  const obj16 = { style: tmp.riveContainer, children: closure_7(tmp6(tmp3[18]).TeenScreenTimeRive, { artboard: "Teen Screen Time Illo", stateMachine: "State Machine 1" }) };
  const View3 = tmp2(tmp3[13]).View;
  items6 = [closure_7(closure_5, obj16), ];
  const obj17 = { variant: "text-lg/medium", color: "text-overlay-light", style: tmp.description, children: formatResult };
  items6[1] = closure_7(tmp6(tmp3[19]).Text, obj17);
  items3[2] = closure_8(View3, obj15);
  const obj18 = { style: tmp.footer, children: closure_7(Text, obj19) };
  obj19 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: intl3.format(sharedValue(tmp3[16]).iqeKDz, obj20) };
  Text = tmp6(tmp3[19]).Text;
  intl3 = tmp6(tmp3[15]).intl;
  obj20 = {
    username: stateFromStores,
    loginHook(children, id) {
      const obj = { variant: "text-sm/normal", color: "text-link", onPress: onLogin, children };
      return metroImportDefault(Text_Text.Text, obj, id);
    }
  };
  items3[3] = closure_7(closure_5, obj18);
  items7 = [closure_8(View, obj11), closure_7(closure_12, { visible: logoutRequestInFlight })];
  return closure_8(ModalScreen, obj10);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === arg1) {
    let tmp4;
    let tmp5;
    if (cResult[1] === arg0) {
      tmp4 = cResult[2];
      tmp5 = cResult[3];
    }
    const tmpResult = tmp(6496);
    return tmpResult.useNavigatorScreens(tmp4, tmp5);
  }
  const fn = function o() {
    let logoutRequestInFlight;
    let onLogin;
    let obj = {
      headerShown: false,
      gestureEnabled: false,
      render() {
        const obj = { onLogin, logoutRequestInFlight };
        return closure_2_7(closure_2_19, obj);
      }
    };
    return { [closure_2_11.MAIN]: obj };
  };
  const items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("Navigator");
  const items = [arg0, arg1];
  return obj.useNavigatorScreens(() => {
    let logoutRequestInFlight;
    let onLogin;
    let obj = {
      headerShown: false,
      gestureEnabled: false,
      render() {
        const obj = { onLogin, logoutRequestInFlight };
        return closure_2_7(closure_2_19, obj);
      }
    };
    return { [closure_2_11.MAIN]: obj };
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let closure_2;
  let ref;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp18;
  let tmp6;
  let tmp7;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(9);
  const tmp5 = useIsInRestrictedHoursDefault();
  _require = tmp5;
  importDefault = react.useRef(false);
  dependencyMap = react.useRef(true);
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
  const effect = react.useEffect(tmp6, tmp7);
  const tmp9 = closure_3(react.useState(false), 2);
  closure_3 = tmp9[1];
  const first = tmp9[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _() {
      if (!ref.current) {
        tmp.current = true;
        closure_3(true);
        const obj = AuthenticationActionCreatorsDefault;
        const logoutResult = obj.logout("restricted_hours");
        logoutResult.finally(() => {
          if (ref.current) {
            closure_1_1.current = false;
            closure_1_3(false);
          }
        });
      }
    };
    cResult[2] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[2];
  }
  const tmp12 = closure_20(tmp11, first);
  if (cResult[3] !== tmp5) {
    const fn3 = function x() {
      const current = closure_0 || ref.current;
      if (!current) {
        const obj = RestrictedHoursActionCreators;
        const result = obj.closeRestrictedHoursModal();
      }
    };
    const items1 = [tmp5];
    cResult[3] = tmp5;
    cResult[4] = fn3;
    cResult[5] = items1;
    tmp14 = items1;
    tmp13 = fn3;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const effect1 = react.useEffect(tmp13, tmp14);
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
  if (cResult[7] !== tmp12) {
    class T {
      constructor() {
        return true;
      }
    }
    const obj3 = { screens: tmp12, initialRouteName: constants.MAIN };
    const tmp20 = closure_7(tmp(10976).Modal, obj3);
    cResult[7] = tmp12;
    cResult[8] = tmp20;
    tmp18 = tmp20;
  } else {
    class T {
      constructor() {
        return true;
      }
    }
  }
  return tmp18;
}) : (() => {
  let closure_0;
  let closure_2;
  let ref;
  let tmp4;
  const tmp = useIsInRestrictedHoursDefault();
  _require = tmp;
  importDefault = react.useRef(false);
  dependencyMap = react.useRef(true);
  const effect = react.useEffect(() => {
    closure_2.current = true;
    return () => {
      closure_1_2.current = false;
    };
  }, []);
  const tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, _slicedToArray] = tmp3;
  const items = [tmp];
  const tmp5 = closure_20(react.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      _slicedToArray(true);
      const obj = AuthenticationActionCreatorsDefault;
      const logoutResult = obj.logout("restricted_hours");
      logoutResult.finally(() => {
        if (ref.current) {
          closure_1_1.current = false;
          closure_1_3(false);
        }
      });
    }
  }, []), tmp4);
  const effect1 = react.useEffect(() => {
    const current = closure_0 || ref.current;
    if (!current) {
      const obj = RestrictedHoursActionCreators;
      const result = obj.closeRestrictedHoursModal();
    }
  }, items);
  useBackPressHandlerDefault(() => true);
  let obj = { screens: tmp5, initialRouteName: constants.MAIN };
  return closure_7(require("Modal").Modal, obj);
});
let result = size.fileFinishedImporting("modules/parent_tools/native/RestrictedHoursModal.tsx");

export default tmp9;