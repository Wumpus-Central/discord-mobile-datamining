// === Module 16875: GroupDMNitroUpsellBanner ===

// Module 16875 (GroupDMNitroUpsellBanner)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import intl4 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import spring from "spring" /* 5597 */;
import AssetRegistryDefault from "AssetRegistry" /* 7722 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11213 */;
import GroupDMConstants from "GroupDMConstants" /* 11215 */;
import GroupDMNitroCapExperimentDefault from "GroupDMNitroCapExperiment" /* 11216 */;
import useGroupDMNitroUpsellActionDefault from "useGroupDMNitroUpsellAction" /* 11220 */;
import GroupDMNitroCapBannerDefault from "GroupDMNitroCapBanner" /* 16876 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set, set2, visible;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let _slicedToArray = _slicedToArray_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
const number = GroupDMConstants.MAX_GROUP_DM_NITRO_PARTICIPANTS;
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_40 = nativeDefault.space.PX_40;
const PX_16 = nativeDefault.space.PX_16;
let c13 = 0.4;
const PX_24 = nativeDefault.space.PX_24;
const PX_8 = nativeDefault.space.PX_8;
const locations = [0, 0.225, 1];
let closure_17 = { mass: 0.8, stiffness: 400, damping: 32, overshootClamping: true };
let obj = { floatingOverlay: { position: "absolute", left: 0, right: 0, bottom: 0 }, floatingContent: { justifyContent: "flex-end" }, floatingBanner: obj2 };
obj2 = { backgroundColor: "transparent", paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 };
let closure_18 = createStyles.createStyles(obj);
const __initData = { code: "function GroupDMNitroUpsellBannerTsx1(){const{opacity,translateY}=this.__closure;return{opacity:opacity.get(),transform:[{translateY:translateY.get()}]};}" };
const __initData2 = { code: "function GroupDMNitroUpsellBannerTsx2(){const{keyboardHeight,safeAreaBottom}=this.__closure;return{bottom:Math.max(keyboardHeight.get()-safeAreaBottom,0)};}" };
const __initData3 = { code: "function GroupDMNitroUpsellBannerTsx3(){const{opacity,translateY}=this.__closure;return{opacity:opacity.get(),transform:[{translateY:translateY.get()}]};}" };
const __initData4 = { code: "function GroupDMNitroUpsellBannerTsx4(){const{keyboardHeight,safeAreaBottom}=this.__closure;return{bottom:Math.max(keyboardHeight.get()-safeAreaBottom,0)};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  let bottom;
  let closure_3;
  let hideGradient;
  let items;
  let onListInsetChange;
  let tmp9;
  let tmp = visible;
  let obj = visible(bottom[9]);
  const cResult = obj.c(48);
  visible = visible.visible;
  ({ hideGradient, onListInsetChange } = visible);
  const children = visible.children;
  const tmp4 = closure_18();
  bottom = onListInsetChange(bottom[10])().bottom;
  const tmp6 = onListInsetChange(bottom[11])();
  _slicedToArray = tmp6;
  const obj2 = visible(bottom[12]);
  const token = obj2.useToken(onListInsetChange(bottom[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const tmp8 = _slicedToArray(react.useState(0), 2);
  [tmp9, react] = tmp8;
  let num = 0;
  const useSharedValue = visible(bottom[13]).useSharedValue;
  visible(bottom[13]);
  if (visible) {
    num = c13;
  }
  const sharedValue = useSharedValue(num);
  const tmpResult = tmp(tmp2[13]);
  const sharedValue1 = tmpResult.useSharedValue(PX_16);
  const bound = Math.max(125, tmp9 + PX_40);
  const bound1 = Math.max(onListInsetChange(tmp2[6]).space.PX_12, tmp9 - PX_8 + PX_24);
  if (cResult[0] === bound1) {
    if (cResult[1] === onListInsetChange) {
      let tmp15;
      let tmp16;
      let tmp19;
      let tmp21;
      let tmp23;
      if (cResult[2] === visible) {
        tmp15 = cResult[3];
        tmp16 = cResult[4];
      }
      const effect = react.useEffect(tmp15, tmp16);
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function h(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          let tmp = react((arg0) => {
            let tmp = height;
            if (arg0 === height) {
              tmp = arg0;
            }
            return tmp;
          });
        };
        let num2 = 5;
        cResult[5] = fn2;
      }
      if (cResult[6] !== token) {
        const obj5 = onListInsetChange(bottom[14])(token);
        const alphaResult = obj5.alpha(0);
        const hexResult = alphaResult.hex();
        cResult[6] = token;
        cResult[7] = hexResult;
        tmp19 = hexResult;
      } else {
        tmp19 = cResult[7];
      }
      if (cResult[8] !== token) {
        const obj7 = onListInsetChange(bottom[14])(token);
        const alphaResult1 = obj7.alpha(1);
        const hexResult1 = alphaResult1.hex();
        cResult[8] = token;
        cResult[9] = hexResult1;
        tmp21 = hexResult1;
      } else {
        tmp21 = cResult[9];
      }
      if (cResult[10] !== token) {
        const obj9 = onListInsetChange(bottom[14])(token);
        const alphaResult2 = obj9.alpha(1);
        const hexResult2 = alphaResult2.hex();
        cResult[10] = token;
        cResult[11] = hexResult2;
        tmp23 = hexResult2;
      } else {
        tmp23 = cResult[11];
      }
      if (cResult[12] === tmp19) {
        if (cResult[13] === tmp21) {
          let tmp25;
          if (cResult[14] === tmp23) {
            tmp25 = cResult[15];
          }
          if (cResult[16] === sharedValue) {
            if (cResult[17] === sharedValue1) {
              let tmp26;
              let tmp27;
              let tmp35;
              if (cResult[18] === visible) {
                tmp26 = cResult[19];
                tmp27 = cResult[20];
              }
              const effect1 = react.useEffect(tmp26, tmp27);
              class Z {
                constructor() {
                  if (visible) {
                    const result = sharedValue.set(c13);
                    const result1 = sharedValue1.set(PX_16);
                  }
                  let num = 0;
                  set = sharedValue.set;
                  const withSpring = spring.withSpring;
                  spring;
                  if (visible) {
                    num = 1;
                  }
                  const result2 = set(withSpring(num, closure_17));
                  let num2 = 0;
                  set2 = sharedValue1.set;
                  const withSpring2 = spring.withSpring;
                  spring;
                  if (!visible) {
                    num2 = PX_16;
                  }
                  set2(withSpring2(num2, closure_17));
                }
              }
              class W {
                constructor() {
                  let items;
                  const obj = { opacity: sharedValue.get(), transform: items };
                  items = [{ translateY: sharedValue1.get() }];
                  ({ translateY: sharedValue1.get() });
                  return obj;
                }
              }
              const obj4 = { opacity: sharedValue, translateY: sharedValue1 };
              W.__closure = obj4;
              W.__workletHash = 9160619443528;
              W.__initData = __initData;
              const animatedStyle = obj11.useAnimatedStyle(W);
              const fn3 = function $() {
                const obj = { bottom: Math.max(closure_3.get() - bottom, 0) };
                return obj;
              };
              const obj6 = { keyboardHeight: tmp6, safeAreaBottom: bottom };
              fn3.__closure = obj6;
              fn3.__workletHash = 9321236677185;
              fn3.__initData = __initData2;
              const tmpResult2 = tmp(bottom[13]);
              const animatedStyle1 = tmpResult2.useAnimatedStyle(fn3);
              const sum = bound + bottom;
              if (cResult[21] !== sum) {
                const obj8 = { height: sum };
                class Z {
                  constructor() {
                    if (visible) {
                      const result = sharedValue.set(c13);
                      const result1 = sharedValue1.set(PX_16);
                    }
                    let num = 0;
                    set = sharedValue.set;
                    const withSpring = spring.withSpring;
                    spring;
                    if (visible) {
                      num = 1;
                    }
                    const result2 = set(withSpring(num, closure_17));
                    let num2 = 0;
                    set2 = sharedValue1.set;
                    const withSpring2 = spring.withSpring;
                    spring;
                    if (!visible) {
                      num2 = PX_16;
                    }
                    set2(withSpring2(num2, closure_17));
                  }
                }
                class W {
                  constructor() {
                    let items;
                    const obj = { opacity: sharedValue.get(), transform: items };
                    items = [{ translateY: sharedValue1.get() }];
                    ({ translateY: sharedValue1.get() });
                    return obj;
                  }
                }
                cResult[22] = obj8;
                tmp35 = obj8;
              } else {
                tmp35 = cResult[22];
              }
              if (cResult[23] === animatedStyle1) {
                if (cResult[24] === tmp4.floatingOverlay) {
                  let tmp37;
                  class Z {
                    constructor() {
                      if (visible) {
                        const result = sharedValue.set(c13);
                        const result1 = sharedValue1.set(PX_16);
                      }
                      let num = 0;
                      set = sharedValue.set;
                      const withSpring = spring.withSpring;
                      spring;
                      if (visible) {
                        num = 1;
                      }
                      const result2 = set(withSpring(num, closure_17));
                      let num2 = 0;
                      set2 = sharedValue1.set;
                      const withSpring2 = spring.withSpring;
                      spring;
                      if (!visible) {
                        num2 = PX_16;
                      }
                      set2(withSpring2(num2, closure_17));
                    }
                  }
                  class W {
                    constructor() {
                      let items;
                      const obj = { opacity: sharedValue.get(), transform: items };
                      items = [{ translateY: sharedValue1.get() }];
                      ({ translateY: sharedValue1.get() });
                      return obj;
                    }
                  }
                  if (cResult[27] !== bottom) {
                    const obj10 = { paddingBottom: bottom };
                    class Z {
                      constructor() {
                        if (visible) {
                          const result = sharedValue.set(c13);
                          const result1 = sharedValue1.set(PX_16);
                        }
                        let num = 0;
                        set = sharedValue.set;
                        const withSpring = spring.withSpring;
                        spring;
                        if (visible) {
                          num = 1;
                        }
                        const result2 = set(withSpring(num, closure_17));
                        let num2 = 0;
                        set2 = sharedValue1.set;
                        const withSpring2 = spring.withSpring;
                        spring;
                        if (!visible) {
                          num2 = PX_16;
                        }
                        set2(withSpring2(num2, closure_17));
                      }
                    }
                    class W {
                      constructor() {
                        let items;
                        const obj = { opacity: sharedValue.get(), transform: items };
                        items = [{ translateY: sharedValue1.get() }];
                        ({ translateY: sharedValue1.get() });
                        return obj;
                      }
                    }
                    cResult[28] = obj10;
                    tmp37 = obj10;
                  } else {
                    tmp37 = cResult[28];
                  }
                  if (cResult[29] === animatedStyle) {
                    if (cResult[30] === tmp4.floatingContent) {
                      let tmp38;
                      if (cResult[31] === tmp37) {
                        tmp38 = cResult[32];
                      }
                      if (cResult[33] === tmp25) {
                        let tmp40;
                        let tmp42;
                        if (cResult[34] === hideGradient) {
                          tmp40 = cResult[35];
                        }
                        if (cResult[36] !== children) {
                          class Z {
                            constructor() {
                              if (visible) {
                                const result = sharedValue.set(c13);
                                const result1 = sharedValue1.set(PX_16);
                              }
                              let num = 0;
                              set = sharedValue.set;
                              const withSpring = spring.withSpring;
                              spring;
                              if (visible) {
                                num = 1;
                              }
                              const result2 = set(withSpring(num, closure_17));
                              let num2 = 0;
                              set2 = sharedValue1.set;
                              const withSpring2 = spring.withSpring;
                              spring;
                              if (!visible) {
                                num2 = PX_16;
                              }
                              set2(withSpring2(num2, closure_17));
                            }
                          }
                          class W {
                            constructor() {
                              let items;
                              const obj = { opacity: sharedValue.get(), transform: items };
                              items = [{ translateY: sharedValue1.get() }];
                              ({ translateY: sharedValue1.get() });
                              return obj;
                            }
                          }
                          tmp45[1] = children;
                          const tmp46 = closure_9(sharedValue1, tmp45);
                          cResult[36] = children;
                          cResult[37] = tmp46;
                          tmp42 = tmp46;
                        } else {
                          tmp42 = cResult[37];
                        }
                        class Z {
                          constructor() {
                            if (visible) {
                              const result = sharedValue.set(c13);
                              const result1 = sharedValue1.set(PX_16);
                            }
                            let num = 0;
                            set = sharedValue.set;
                            const withSpring = spring.withSpring;
                            spring;
                            if (visible) {
                              num = 1;
                            }
                            const result2 = set(withSpring(num, closure_17));
                            let num2 = 0;
                            set2 = sharedValue1.set;
                            const withSpring2 = spring.withSpring;
                            spring;
                            if (!visible) {
                              num2 = PX_16;
                            }
                            set2(withSpring2(num2, closure_17));
                          }
                        }
                        class W {
                          constructor() {
                            let items;
                            const obj = { opacity: sharedValue.get(), transform: items };
                            items = [{ translateY: sharedValue1.get() }];
                            ({ translateY: sharedValue1.get() });
                            return obj;
                          }
                        }
                        const obj12 = { style: tmp38, children: items };
                        items = [tmp40, tmp42];
                        cResult[38] = tmp38;
                        cResult[39] = tmp40;
                        cResult[40] = tmp42;
                        cResult[41] = closure_10(onListInsetChange(bottom[13]).View, obj12);
                        const tmp48 = closure_10(onListInsetChange(bottom[13]).View, obj12);
                      }
                      class Z {
                        constructor() {
                          if (visible) {
                            const result = sharedValue.set(c13);
                            const result1 = sharedValue1.set(PX_16);
                          }
                          let num = 0;
                          set = sharedValue.set;
                          const withSpring = spring.withSpring;
                          spring;
                          if (visible) {
                            num = 1;
                          }
                          const result2 = set(withSpring(num, closure_17));
                          let num2 = 0;
                          set2 = sharedValue1.set;
                          const withSpring2 = spring.withSpring;
                          spring;
                          if (!visible) {
                            num2 = PX_16;
                          }
                          set2(withSpring2(num2, closure_17));
                        }
                      }
                      class W {
                        constructor() {
                          let items;
                          const obj = { opacity: sharedValue.get(), transform: items };
                          items = [{ translateY: sharedValue1.get() }];
                          ({ translateY: sharedValue1.get() });
                          return obj;
                        }
                      }
                      cResult[33] = tmp25;
                      cResult[34] = hideGradient;
                      cResult[35] = tmp41;
                      tmp40 = tmp41;
                    }
                  }
                  const items1 = [sharedValue.absoluteFillObject, tmp4.floatingContent, tmp37, animatedStyle];
                  cResult[29] = animatedStyle;
                  cResult[30] = tmp4.floatingContent;
                  cResult[31] = tmp37;
                  cResult[32] = items1;
                  tmp38 = items1;
                }
              }
              const items2 = [tmp4.floatingOverlay, tmp35, animatedStyle1];
              cResult[23] = animatedStyle1;
              cResult[24] = tmp4.floatingOverlay;
              cResult[25] = tmp35;
              cResult[26] = items2;
            }
          }
          class Z {
            constructor() {
              if (visible) {
                const result = sharedValue.set(c13);
                const result1 = sharedValue1.set(PX_16);
              }
              let num = 0;
              set = sharedValue.set;
              const withSpring = spring.withSpring;
              spring;
              if (visible) {
                num = 1;
              }
              const result2 = set(withSpring(num, closure_17));
              let num2 = 0;
              set2 = sharedValue1.set;
              const withSpring2 = spring.withSpring;
              spring;
              if (!visible) {
                num2 = PX_16;
              }
              set2(withSpring2(num2, closure_17));
            }
          }
          tmp28[0] = visible;
          tmp28[1] = sharedValue;
          tmp28[2] = sharedValue1;
          cResult[16] = sharedValue;
          cResult[17] = sharedValue1;
          cResult[18] = visible;
          cResult[19] = Z;
          cResult[20] = tmp28;
          tmp27 = tmp28;
          tmp26 = Z;
        }
      }
      const items3 = [tmp19, tmp21, tmp23];
      cResult[12] = tmp19;
      cResult[13] = tmp21;
      cResult[14] = tmp23;
      cResult[15] = items3;
      tmp25 = items3;
    }
  }
  const fn = function c() {
    if (onListInsetChange != null) {
      let PX_12;
      if (visible) {
        PX_12 = bound1;
      } else {
        PX_12 = nativeDefault.space.PX_12;
      }
      tmp(PX_12);
    }
  };
  const items4 = [bound1, onListInsetChange, visible];
  cResult[0] = bound1;
  cResult[1] = onListInsetChange;
  cResult[2] = visible;
  cResult[3] = fn;
  cResult[4] = items4;
  tmp16 = items4;
  tmp15 = fn;
}) : ((visible) => {
  let View2;
  let _undefined;
  let c5;
  let closure_3;
  let hideGradient;
  let items3;
  let items4;
  let items5;
  let obj4;
  let onListInsetChange;
  let str;
  let str2;
  let tmp8;
  visible = visible.visible;
  ({ hideGradient, onListInsetChange } = visible);
  let bottom;
  c5 = undefined;
  let sharedValue;
  let sharedValue1;
  let bound1;
  const children = visible.children;
  let tmp = closure_18();
  bottom = onListInsetChange(bottom[10])().bottom;
  const tmp4 = onListInsetChange(bottom[11])();
  _slicedToArray = tmp4;
  let obj = visible(bottom[12]);
  const token = obj.useToken(onListInsetChange(bottom[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const obj2 = token;
  [tmp8, c5] = token.useState(0);
  _slicedToArray(token.useState(0), 2);
  let num = 0;
  const useSharedValue = visible(bottom[13]).useSharedValue;
  visible(bottom[13]);
  if (visible) {
    num = c13;
  }
  sharedValue = useSharedValue(num);
  const tmp5Result = visible(bottom[13]);
  sharedValue1 = tmp5Result.useSharedValue(PX_16);
  const bound = Math.max(125, tmp8 + PX_40);
  bound1 = Math.max(onListInsetChange(tmp3[6]).space.PX_12, tmp8 - PX_8 + PX_24);
  let items = [bound1, onListInsetChange, visible];
  const effect = obj2.useEffect(() => {
    if (onListInsetChange != null) {
      let PX_12;
      if (visible) {
        PX_12 = bound1;
      } else {
        PX_12 = nativeDefault.space.PX_12;
      }
      tmp(PX_12);
    }
  }, items);
  const items1 = [token];
  const callback = obj2.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    let tmp = _undefined((arg0) => {
      let tmp = height;
      if (arg0 === height) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const items2 = [visible, sharedValue, sharedValue1];
  const memo = obj2.useMemo(() => {
    const items = [, , ];
    const obj = _modDef683(token);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    const obj3 = _modDef683(token);
    const alphaResult1 = obj3.alpha(1);
    items[1] = alphaResult1.hex();
    const obj5 = _modDef683(token);
    const alphaResult2 = obj5.alpha(1);
    items[2] = alphaResult2.hex();
    return items;
  }, items1);
  const effect1 = obj2.useEffect(() => {
    if (visible) {
      const result = sharedValue.set(c13);
      const result1 = sharedValue1.set(PX_16);
    }
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (visible) {
      num = 1;
    }
    const result2 = set(withSpring(num, closure_17));
    let num2 = 0;
    set2 = sharedValue1.set;
    const withSpring2 = spring.withSpring;
    spring;
    if (!visible) {
      num2 = PX_16;
    }
    set2(withSpring2(num2, closure_17));
  }, items2);
  const tmp5Result3 = visible(bottom[13]);
  class U {
    constructor() {
      let items;
      const obj = { opacity: sharedValue.get(), transform: items };
      items = [{ translateY: sharedValue1.get() }];
      ({ translateY: sharedValue1.get() });
      return obj;
    }
  }
  U.__closure = { opacity: sharedValue, translateY: sharedValue1 };
  U.__workletHash = 10761841231690;
  U.__initData = __initData3;
  const animatedStyle = tmp5Result3.useAnimatedStyle(U);
  const tmp5Result4 = visible(bottom[13]);
  class X {
    constructor() {
      const obj = { bottom: Math.max(closure_3.get() - bottom, 0) };
      return obj;
    }
  }
  X.__closure = { keyboardHeight: tmp4, safeAreaBottom: bottom };
  X.__workletHash = 16605597336903;
  X.__initData = __initData4;
  const animatedStyle1 = tmp5Result4.useAnimatedStyle(X);
  let obj3 = { style: items3, pointerEvents: str, accessibilityElementsHidden: !visible, importantForAccessibility: str2, children: closure_10(View2, obj4) };
  items3 = [tmp.floatingOverlay, { height: bound + bottom }, animatedStyle1];
  str = "none";
  const View = onListInsetChange(tmp3[13]).View;
  if (visible) {
    str = "box-none";
  }
  str2 = "no-hide-descendants";
  if (visible) {
    str2 = "auto";
  }
  obj4 = { style: items4, children: items5 };
  items4 = [c5.absoluteFillObject, tmp.floatingContent, { paddingBottom: bottom }, animatedStyle];
  let tmp20Result = !hideGradient;
  View2 = onListInsetChange(tmp3[13]).View;
  if (!hideGradient) {
    let obj5 = { style: tmp22.absoluteFill, colors: memo, locations, start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 }, pointerEvents: "none" };
    tmp20Result = closure_9(onListInsetChange(tmp3[16]), obj5);
  }
  items5 = [tmp20Result, closure_9(sharedValue, { onLayout: callback, children })];
  return closure_9(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let _location;
  let floating;
  let hideFloatingGradient;
  let intl2;
  let intl3;
  let items1;
  let memberCount;
  let obj6;
  let onFloatingListInsetChange;
  let recipientLimit;
  let tmp10;
  let tmp6;
  let tmp7;
  let useReducedMotion;
  let wrapperStyle;
  const obj = react2;
  const cResult = obj.c(33);
  ({ location: _location, floating, hideFloatingGradient, onFloatingListInsetChange, wrapperStyle } = arg0);
  let tmp4 = undefined !== floating;
  ({ memberCount, recipientLimit } = arg0);
  if (tmp4) {
    tmp4 = floating;
  }
  const tmp5 = closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== _location) {
    const obj2 = { location: _location };
    cResult[2] = _location;
    cResult[3] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[3];
  }
  const obj4 = GroupDMNitroCapExperimentDefault;
  const enabled = obj4.useConfig(tmp10).enabled;
  const tmpResult4 = GroupDMNitroUpsellModel;
  const groupDMNitroAudience = tmpResult4.useGroupDMNitroAudience();
  if (cResult[4] === groupDMNitroAudience) {
    let tmp13;
    if (cResult[5] === _location) {
      tmp13 = cResult[6];
    }
    const tmp14 = useGroupDMNitroUpsellActionDefault(tmp13);
    if (cResult[7] === groupDMNitroAudience) {
      if (cResult[8] === enabled) {
        let tmp16;
        if (cResult[9] === memberCount >= recipientLimit) {
          tmp16 = cResult[10];
        }
        if (!tmp4) {
          if (!tmp16) {
            return null;
          }
        }
        if (cResult[11] === tmp4) {
          if (cResult[12] === tmp5) {
            let tmp19;
            let tmp21;
            if (cResult[13] === wrapperStyle) {
              tmp19 = cResult[14];
            }
            if (cResult[15] !== groupDMNitroAudience) {
              const intl = intl4.intl;
              const string = intl.string;
              const tmpResult5 = GroupDMNitroUpsellModel;
              const stringResult = string(tmpResult5.getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
              cResult[15] = groupDMNitroAudience;
              cResult[16] = stringResult;
              tmp21 = stringResult;
            } else {
              tmp21 = cResult[16];
            }
            if (cResult[17] === tmp14) {
              if (cResult[18] === tmp21) {
                let tmp24;
                let tmp27;
                let tmp30;
                if (cResult[19] === (tmp16 && !stateFromStores)) {
                  tmp24 = cResult[20];
                }
                const _Symbol = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl4.t.KCD0Hp) };
                  const Text = Text_Text.Text;
                  intl2 = intl4.intl;
                  const tmp29 = React4(Text, obj3);
                  cResult[21] = tmp29;
                  tmp27 = tmp29;
                } else {
                  tmp27 = cResult[21];
                }
                const _Symbol2 = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: intl3.formatToPlainString(intl4.t["8o8Zk5"], obj6) };
                  const Text2 = Text_Text.Text;
                  intl3 = intl4.intl;
                  obj6 = { number };
                  const tmp33 = React4(Text2, obj5);
                  cResult[22] = tmp33;
                  tmp30 = tmp33;
                } else {
                  tmp30 = cResult[22];
                }
                if (cResult[23] === tmp24) {
                  if (cResult[24] === tmp30) {
                    let tmp34;
                    if (cResult[25] === tmp19) {
                      tmp34 = cResult[26];
                    }
                    if (cResult[27] === tmp34) {
                      if (cResult[28] === tmp4) {
                        if (cResult[29] === hideFloatingGradient) {
                          if (cResult[30] === tmp16) {
                            let tmp37;
                            if (cResult[31] === onFloatingListInsetChange) {
                              tmp37 = cResult[32];
                            }
                            return tmp37;
                          }
                        }
                      }
                    }
                    let tmp38 = tmp34;
                    if (tmp4) {
                      const obj7 = { visible: tmp16, hideGradient: hideFloatingGradient, onListInsetChange: onFloatingListInsetChange, children: tmp34 };
                      tmp38 = React4(closure_23, obj7);
                    }
                    cResult[27] = tmp34;
                    cResult[28] = tmp4;
                    cResult[29] = hideFloatingGradient;
                    cResult[30] = tmp16;
                    cResult[31] = onFloatingListInsetChange;
                    cResult[32] = tmp38;
                    tmp37 = tmp38;
                  }
                }
                const obj8 = { showLeadingIcon: false, wrapperStyle: tmp19, trailing: tmp24, children: items1 };
                items1 = [tmp27, tmp30];
                const tmp36 = authStore(GroupDMNitroCapBannerDefault, obj8);
                cResult[23] = tmp24;
                cResult[24] = tmp30;
                cResult[25] = tmp19;
                cResult[26] = tmp36;
                tmp34 = tmp36;
              }
            }
            const obj9 = { text: tmp21, size: "sm", variant: "experimental_premium-primary", shiny: tmp16 && !stateFromStores, icon: AssetRegistryDefault, onPress: tmp14 };
            const Button = components_Button_Button.Button;
            const tmp26 = React4(Button, obj9);
            cResult[17] = tmp14;
            cResult[18] = tmp21;
            cResult[19] = tmp16 && !stateFromStores;
            cResult[20] = tmp26;
            tmp24 = tmp26;
          }
        }
        let tmp20 = wrapperStyle;
        if (tmp4) {
          const items2 = [tmp5.floatingBanner, wrapperStyle];
          tmp20 = items2;
        }
        cResult[11] = tmp4;
        cResult[12] = tmp5;
        cResult[13] = wrapperStyle;
        cResult[14] = tmp20;
        tmp19 = tmp20;
      }
    }
    const tmpResult6 = GroupDMNitroUpsellModel;
    const tmp17 = tmpResult6.isGroupDMNitroUpsellAudience(groupDMNitroAudience) && memberCount >= recipientLimit && enabled;
    cResult[7] = groupDMNitroAudience;
    cResult[8] = enabled;
    cResult[9] = memberCount >= recipientLimit;
    cResult[10] = tmp17;
    tmp16 = tmp17;
  }
  const obj10 = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: GroupDMNitroUpsellModel.GroupDMNitroAcquisitionStrategy.MARKETING };
  cResult[4] = groupDMNitroAudience;
  cResult[5] = _location;
  cResult[6] = obj10;
  tmp13 = obj10;
}) : ((wrapperStyle) => {
  let Button;
  let _location;
  let floating;
  let hideFloatingGradient;
  let intl2;
  let intl3;
  let items2;
  let memberCount;
  let obj10;
  let obj7;
  let onFloatingListInsetChange;
  let recipientLimit;
  let string;
  let tmp2Result;
  let useReducedMotion;
  ({ location: _location, floating } = wrapperStyle);
  ({ memberCount, recipientLimit } = wrapperStyle);
  if (floating === undefined) {
    floating = false;
  }
  wrapperStyle = wrapperStyle.wrapperStyle;
  ({ hideFloatingGradient, onFloatingListInsetChange } = wrapperStyle);
  const items = [AccessibilityStore];
  const tmp = closure_18();
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = GroupDMNitroCapExperimentDefault;
  const enabled = obj2.useConfig({ location: _location }).enabled;
  const obj3 = GroupDMNitroUpsellModel;
  const groupDMNitroAudience = obj3.useGroupDMNitroAudience();
  const obj4 = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: GroupDMNitroUpsellModel.GroupDMNitroAcquisitionStrategy.MARKETING };
  const tmp7 = useGroupDMNitroUpsellActionDefault;
  const tmp7Result = tmp7(obj4);
  const obj5 = GroupDMNitroUpsellModel;
  const tmp9 = obj5.isGroupDMNitroUpsellAudience(groupDMNitroAudience) && memberCount >= recipientLimit && enabled;
  if (!floating) {
    if (!tmp9) {
      return null;
    }
  }
  let tmp13 = wrapperStyle;
  const tmp5Result = GroupDMNitroCapBannerDefault;
  if (floating) {
    const items1 = [tmp.floatingBanner, wrapperStyle];
    tmp13 = items1;
  }
  const obj6 = { showLeadingIcon: false, wrapperStyle: tmp13, trailing: React4(Button, obj7), children: items2 };
  obj7 = { text: string(tmp2Result.getGroupDMNitroCapCTAMessage(groupDMNitroAudience)), size: "sm", variant: "experimental_premium-primary", shiny: tmp9 && !stateFromStores, icon: AssetRegistryDefault, onPress: tmp7Result };
  Button = components_Button_Button.Button;
  const intl = intl4.intl;
  string = intl.string;
  tmp2Result = GroupDMNitroUpsellModel;
  const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl4.t.KCD0Hp) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items2 = [React4(Text, obj8), ];
  const obj9 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: intl3.formatToPlainString(intl4.t["8o8Zk5"], obj10) };
  const Text2 = Text_Text.Text;
  intl3 = intl4.intl;
  obj10 = { number };
  items2[1] = React4(Text2, obj9);
  const tmp11Result = authStore(tmp5Result, obj6);
  let tmp14Result = tmp11Result;
  if (floating) {
    const obj11 = { visible: tmp9, hideGradient: hideFloatingGradient, onListInsetChange: onFloatingListInsetChange, children: tmp11Result };
    tmp14Result = React4(closure_23, obj11);
  }
  return tmp14Result;
});
let result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroUpsellBanner.tsx");

export default tmp4;