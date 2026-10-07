// === Module 16900: GroupDMNitroUpsellBanner ===

// Module 16900 (GroupDMNitroUpsellBanner)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import spring from "spring" /* 5604 */;
import _modDef7733 from "module_7733" /* 7733 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11226 */;
import GroupDMNitroCapExperimentDefault from "GroupDMNitroCapExperiment" /* 11229 */;
import useGroupDMNitroUpsellActionDefault from "useGroupDMNitroUpsellAction" /* 11233 */;
import GroupDMNitroCapBannerDefault from "GroupDMNitroCapBanner" /* 16901 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const number = fn(11228).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_40 = nativeDefault.space.PX_40;
const PX_16 = nativeDefault.space.PX_16;
let c13 = 0.4;
const PX_24 = nativeDefault.space.PX_24;
const PX_8 = nativeDefault.space.PX_8;
const locations = [0, 0.225, 1];
let closure_17 = { mass: 0.8, stiffness: 400, damping: 32, overshootClamping: true };
const createStyles = fn(4896);
let obj2 = { floatingOverlay: { position: "absolute", left: 0, right: 0, bottom: 0 }, floatingContent: { justifyContent: "flex-end" }, floatingBanner: { backgroundColor: "transparent", paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 } };
let closure_18 = createStyles.createStyles(obj2);
const __initData = { code: "function GroupDMNitroUpsellBannerTsx1(){const{opacity,translateY}=this.__closure;return{opacity:opacity.get(),transform:[{translateY:translateY.get()}]};}" };
const __initData2 = { code: "function GroupDMNitroUpsellBannerTsx2(){const{keyboardHeight,safeAreaBottom}=this.__closure;return{bottom:Math.max(keyboardHeight.get()-safeAreaBottom,0)};}" };
const __initData3 = { code: "function GroupDMNitroUpsellBannerTsx3(){const{opacity,translateY}=this.__closure;return{opacity:opacity.get(),transform:[{translateY:translateY.get()}]};}" };
const __initData4 = { code: "function GroupDMNitroUpsellBannerTsx4(){const{keyboardHeight,safeAreaBottom}=this.__closure;return{bottom:Math.max(keyboardHeight.get()-safeAreaBottom,0)};}" };
let ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  const cResult = visible(bottom[9]).c(48);
  visible = visible.visible;
  ({ hideGradient, onListInsetChange } = visible);
  const children = visible.children;
  const tmp4 = closure_18();
  bottom = onListInsetChange(bottom[10])().bottom;
  const tmp6 = onListInsetChange(bottom[11])();
  _slicedToArray = tmp6;
  let obj = visible(bottom[9]);
  const token = visible(bottom[12]).useToken(onListInsetChange(bottom[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const obj2 = visible(bottom[12]);
  [tmp9, noop] = noop.useState(0);
  const tmp8 = _slicedToArray(noop.useState(0), 2);
  let num = 0;
  if (visible) {
    num = c13;
  }
  const sharedValue = visible(bottom[13]).useSharedValue(num);
  const obj4 = visible(bottom[13]);
  const sharedValue1 = visible(bottom[13]).useSharedValue(PX_16);
  const bound = Math.max(125, tmp9 + PX_40);
  const bound1 = Math.max(onListInsetChange(tmp2[6]).space.PX_12, tmp9 - PX_8 + PX_24);
  if (cResult[0] === bound1) {
    if (cResult[1] === onListInsetChange) {
      if (cResult[2] === visible) {
        let tmp14 = cResult[3];
        let tmp15 = cResult[4];
      }
      const effect = noop.useEffect(tmp14, tmp15);
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function h(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          noop((arg0) => {
            let tmp = height;
            if (arg0 === height) {
              tmp = arg0;
            }
            return tmp;
          });
        };
        cResult[5] = fn2;
      }
      if (cResult[6] !== token) {
        const obj6 = onListInsetChange(tmp2[14])(token);
        const hexResult = onListInsetChange(tmp2[14])(token).alpha(0).hex();
        cResult[6] = token;
        cResult[7] = hexResult;
        let tmp18 = hexResult;
        const alphaResult = onListInsetChange(tmp2[14])(token).alpha(0);
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] !== token) {
        const obj8 = onListInsetChange(tmp2[14])(token);
        const hexResult1 = onListInsetChange(tmp2[14])(token).alpha(1).hex();
        cResult[8] = token;
        cResult[9] = hexResult1;
        let tmp20 = hexResult1;
        const alphaResult1 = onListInsetChange(tmp2[14])(token).alpha(1);
      } else {
        tmp20 = cResult[9];
      }
      if (cResult[10] !== token) {
        const obj10 = onListInsetChange(tmp2[14])(token);
        const hexResult2 = onListInsetChange(tmp2[14])(token).alpha(1).hex();
        cResult[10] = token;
        cResult[11] = hexResult2;
        let tmp22 = hexResult2;
        const alphaResult2 = onListInsetChange(tmp2[14])(token).alpha(1);
      } else {
        tmp22 = cResult[11];
      }
      if (cResult[12] === tmp18) {
        if (cResult[13] === tmp20) {
          if (cResult[14] === tmp22) {
            let tmp24 = cResult[15];
          }
          if (cResult[16] === sharedValue) {
            if (cResult[17] === sharedValue1) {
              if (cResult[18] === visible) {
                let tmp25 = cResult[19];
                let tmp26 = cResult[20];
              }
              const effect1 = noop.useEffect(tmp25, tmp26);
              class Z {
                constructor() {
                  tmp = visible;
                  if (visible) {
                    tmp2 = closure_5;
                    tmp3 = c13;
                    result = closure_5.set(c13);
                    tmp5 = closure_6;
                    tmp6 = PX_16;
                    result1 = closure_6.set(PX_16);
                  }
                  tmp8 = closure_5;
                  tmp9 = closure_0;
                  tmp10 = closure_2;
                  obj = closure_0(closure_2[15]);
                  num = 0;
                  if (tmp) {
                    num = 1;
                  }
                  tmp11 = closure_17;
                  result2 = closure_5.set(obj.withSpring(num, closure_17));
                  tmp13 = closure_6;
                  tmp9Result = tmp9(tmp10[15]);
                  num2 = 0;
                  if (!tmp) {
                    num2 = PX_16;
                  }
                  result3 = closure_6.set(tmp9Result.withSpring(num2, tmp11));
                  return;
                }
              }
              class W {
                constructor() {
                  obj = { opacity: closure_5.get(), transform: null };
                  obj1 = { translateY: closure_6.get() };
                  items = [];
                  items[0] = obj1;
                  obj.transform = items;
                  return obj;
                }
              }
              const obj5 = { opacity: sharedValue, translateY: sharedValue1 };
              W.__closure = obj5;
              W.__workletHash = 9160619443528;
              W.__initData = __initData;
              const animatedStyle = obj12.useAnimatedStyle(W);
              const fn3 = function $() {
                return { bottom: Math.max(closure_3.get() - bottom, 0) };
              };
              const obj7 = { keyboardHeight: tmp6, safeAreaBottom: bottom };
              fn3.__closure = obj7;
              fn3.__workletHash = 9321236677185;
              fn3.__initData = __initData2;
              const animatedStyle1 = tmp(tmp2[13]).useAnimatedStyle(fn3);
              const sum = bound + bottom;
              if (cResult[21] !== sum) {
                const obj9 = { height: sum };
                class Z {
                  constructor() {
                    tmp = visible;
                    if (visible) {
                      tmp2 = closure_5;
                      tmp3 = c13;
                      result = closure_5.set(c13);
                      tmp5 = closure_6;
                      tmp6 = PX_16;
                      result1 = closure_6.set(PX_16);
                    }
                    tmp8 = closure_5;
                    tmp9 = closure_0;
                    tmp10 = closure_2;
                    obj = closure_0(closure_2[15]);
                    num = 0;
                    if (tmp) {
                      num = 1;
                    }
                    tmp11 = closure_17;
                    result2 = closure_5.set(obj.withSpring(num, closure_17));
                    tmp13 = closure_6;
                    tmp9Result = tmp9(tmp10[15]);
                    num2 = 0;
                    if (!tmp) {
                      num2 = PX_16;
                    }
                    result3 = closure_6.set(tmp9Result.withSpring(num2, tmp11));
                    return;
                  }
                }
                class W {
                  constructor() {
                    obj = { opacity: closure_5.get(), transform: null };
                    obj1 = { translateY: closure_6.get() };
                    items = [];
                    items[0] = obj1;
                    obj.transform = items;
                    return obj;
                  }
                }
                cResult[22] = obj9;
                let tmp34 = obj9;
              } else {
                tmp34 = cResult[22];
              }
              if (cResult[23] === animatedStyle1) {
                if (cResult[24] === tmp4.floatingOverlay) {
                  class Z {
                    constructor() {
                      tmp = visible;
                      if (visible) {
                        tmp2 = closure_5;
                        tmp3 = c13;
                        result = closure_5.set(c13);
                        tmp5 = closure_6;
                        tmp6 = PX_16;
                        result1 = closure_6.set(PX_16);
                      }
                      tmp8 = closure_5;
                      tmp9 = closure_0;
                      tmp10 = closure_2;
                      obj = closure_0(closure_2[15]);
                      num = 0;
                      if (tmp) {
                        num = 1;
                      }
                      tmp11 = closure_17;
                      result2 = closure_5.set(obj.withSpring(num, closure_17));
                      tmp13 = closure_6;
                      tmp9Result = tmp9(tmp10[15]);
                      num2 = 0;
                      if (!tmp) {
                        num2 = PX_16;
                      }
                      result3 = closure_6.set(tmp9Result.withSpring(num2, tmp11));
                      return;
                    }
                  }
                  class W {
                    constructor() {
                      obj = { opacity: closure_5.get(), transform: null };
                      obj1 = { translateY: closure_6.get() };
                      items = [];
                      items[0] = obj1;
                      obj.transform = items;
                      return obj;
                    }
                  }
                  if (cResult[27] !== bottom) {
                    const obj11 = { paddingBottom: bottom };
                    class Z {
                      constructor() {
                        tmp = visible;
                        if (visible) {
                          tmp2 = closure_5;
                          tmp3 = c13;
                          result = closure_5.set(c13);
                          tmp5 = closure_6;
                          tmp6 = PX_16;
                          result1 = closure_6.set(PX_16);
                        }
                        tmp8 = closure_5;
                        tmp9 = closure_0;
                        tmp10 = closure_2;
                        obj = closure_0(closure_2[15]);
                        num = 0;
                        if (tmp) {
                          num = 1;
                        }
                        tmp11 = closure_17;
                        result2 = closure_5.set(obj.withSpring(num, closure_17));
                        tmp13 = closure_6;
                        tmp9Result = tmp9(tmp10[15]);
                        num2 = 0;
                        if (!tmp) {
                          num2 = PX_16;
                        }
                        result3 = closure_6.set(tmp9Result.withSpring(num2, tmp11));
                        return;
                      }
                    }
                    class W {
                      constructor() {
                        obj = { opacity: closure_5.get(), transform: null };
                        obj1 = { translateY: closure_6.get() };
                        items = [];
                        items[0] = obj1;
                        obj.transform = items;
                        return obj;
                      }
                    }
                    cResult[28] = obj11;
                    let tmp36 = obj11;
                  } else {
                    tmp36 = cResult[28];
                  }
                  if (cResult[29] === animatedStyle) {
                    if (cResult[30] === tmp4.floatingContent) {
                      if (cResult[31] === tmp36) {
                        let tmp37 = cResult[32];
                      }
                      if (cResult[33] === tmp24) {
                        if (cResult[34] === hideGradient) {
                          let tmp39 = cResult[35];
                        }
                        if (cResult[36] !== children) {
                          class Z {
                            constructor() {
                              tmp = visible;
                              if (visible) {
                                tmp2 = closure_5;
                                tmp3 = c13;
                                result = closure_5.set(c13);
                                tmp5 = closure_6;
                                tmp6 = PX_16;
                                result1 = closure_6.set(PX_16);
                              }
                              tmp8 = closure_5;
                              tmp9 = closure_0;
                              tmp10 = closure_2;
                              obj = closure_0(closure_2[15]);
                              num = 0;
                              if (tmp) {
                                num = 1;
                              }
                              tmp11 = closure_17;
                              result2 = closure_5.set(obj.withSpring(num, closure_17));
                              tmp13 = closure_6;
                              tmp9Result = tmp9(tmp10[15]);
                              num2 = 0;
                              if (!tmp) {
                                num2 = PX_16;
                              }
                              result3 = closure_6.set(tmp9Result.withSpring(num2, tmp11));
                              return;
                            }
                          }
                          class W {
                            constructor() {
                              obj = { opacity: closure_5.get(), transform: null };
                              obj1 = { translateY: closure_6.get() };
                              items = [];
                              items[0] = obj1;
                              obj.transform = items;
                              return obj;
                            }
                          }
                          tmp44[1] = children;
                          const tmp45 = closure_9(sharedValue1, tmp44);
                          cResult[36] = children;
                          cResult[37] = tmp45;
                          let tmp41 = tmp45;
                        } else {
                          tmp41 = cResult[37];
                        }
                        class Z {
                          constructor() {
                            tmp = visible;
                            if (visible) {
                              tmp2 = closure_5;
                              tmp3 = c13;
                              result = closure_5.set(c13);
                              tmp5 = closure_6;
                              tmp6 = PX_16;
                              result1 = closure_6.set(PX_16);
                            }
                            tmp8 = closure_5;
                            tmp9 = closure_0;
                            tmp10 = closure_2;
                            obj = closure_0(closure_2[15]);
                            num = 0;
                            if (tmp) {
                              num = 1;
                            }
                            tmp11 = closure_17;
                            result2 = closure_5.set(obj.withSpring(num, closure_17));
                            tmp13 = closure_6;
                            tmp9Result = tmp9(tmp10[15]);
                            num2 = 0;
                            if (!tmp) {
                              num2 = PX_16;
                            }
                            result3 = closure_6.set(tmp9Result.withSpring(num2, tmp11));
                            return;
                          }
                        }
                        class W {
                          constructor() {
                            obj = { opacity: closure_5.get(), transform: null };
                            obj1 = { translateY: closure_6.get() };
                            items = [];
                            items[0] = obj1;
                            obj.transform = items;
                            return obj;
                          }
                        }
                        const obj13 = { style: tmp37, children: null };
                        let items = [tmp39, tmp41];
                        obj13.children = items;
                        const tmp47 = closure_10(onListInsetChange(tmp2[13]).View, obj13);
                        cResult[38] = tmp37;
                        cResult[39] = tmp39;
                        cResult[40] = tmp41;
                        cResult[41] = tmp47;
                      }
                      class Z {
                        constructor() {
                          tmp = visible;
                          if (visible) {
                            tmp2 = closure_5;
                            tmp3 = c13;
                            result = closure_5.set(c13);
                            tmp5 = closure_6;
                            tmp6 = PX_16;
                            result1 = closure_6.set(PX_16);
                          }
                          tmp8 = closure_5;
                          tmp9 = closure_0;
                          tmp10 = closure_2;
                          obj = closure_0(closure_2[15]);
                          num = 0;
                          if (tmp) {
                            num = 1;
                          }
                          tmp11 = closure_17;
                          result2 = closure_5.set(obj.withSpring(num, closure_17));
                          tmp13 = closure_6;
                          tmp9Result = tmp9(tmp10[15]);
                          num2 = 0;
                          if (!tmp) {
                            num2 = PX_16;
                          }
                          result3 = closure_6.set(tmp9Result.withSpring(num2, tmp11));
                          return;
                        }
                      }
                      class W {
                        constructor() {
                          obj = { opacity: closure_5.get(), transform: null };
                          obj1 = { translateY: closure_6.get() };
                          items = [];
                          items[0] = obj1;
                          obj.transform = items;
                          return obj;
                        }
                      }
                      cResult[33] = tmp24;
                      cResult[34] = hideGradient;
                      cResult[35] = tmp40;
                      tmp39 = tmp40;
                    }
                  }
                  const items1 = [sharedValue.absoluteFillObject, tmp4.floatingContent, tmp36, animatedStyle];
                  cResult[29] = animatedStyle;
                  cResult[30] = tmp4.floatingContent;
                  cResult[31] = tmp36;
                  cResult[32] = items1;
                  tmp37 = items1;
                }
              }
              const items2 = [tmp4.floatingOverlay, tmp34, animatedStyle1];
              cResult[23] = animatedStyle1;
              cResult[24] = tmp4.floatingOverlay;
              cResult[25] = tmp34;
              cResult[26] = items2;
              const tmpResult2 = tmp(tmp2[13]);
            }
          }
          class Z {
            constructor() {
              tmp = visible;
              if (visible) {
                tmp2 = closure_5;
                tmp3 = c13;
                result = closure_5.set(c13);
                tmp5 = closure_6;
                tmp6 = PX_16;
                result1 = closure_6.set(PX_16);
              }
              tmp8 = closure_5;
              tmp9 = closure_0;
              tmp10 = closure_2;
              obj = closure_0(closure_2[15]);
              num = 0;
              if (tmp) {
                num = 1;
              }
              tmp11 = closure_17;
              result2 = closure_5.set(obj.withSpring(num, closure_17));
              tmp13 = closure_6;
              tmp9Result = tmp9(tmp10[15]);
              num2 = 0;
              if (!tmp) {
                num2 = PX_16;
              }
              result3 = closure_6.set(tmp9Result.withSpring(num2, tmp11));
              return;
            }
          }
          tmp27[0] = visible;
          tmp27[1] = sharedValue;
          tmp27[2] = sharedValue1;
          cResult[16] = sharedValue;
          cResult[17] = sharedValue1;
          cResult[18] = visible;
          cResult[19] = Z;
          cResult[20] = tmp27;
          tmp26 = tmp27;
          tmp25 = Z;
        }
      }
      const items3 = [tmp18, tmp20, tmp22];
      cResult[12] = tmp18;
      cResult[13] = tmp20;
      cResult[14] = tmp22;
      cResult[15] = items3;
      tmp24 = items3;
    }
  }
  const fn = function c() {
    if (onListInsetChange != null) {
      if (visible) {
        let PX_12 = bound1;
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
  tmp15 = items4;
  tmp14 = fn;
  const tmpResult = visible(bottom[13]);
}) : ((children) => {
  const visible = children.visible;
  ({ hideGradient, onListInsetChange } = children);
  let bottom;
  c5 = undefined;
  let sharedValue;
  let sharedValue1;
  let bound1;
  let tmp = closure_18();
  bottom = onListInsetChange(bottom[10])().bottom;
  const tmp4 = onListInsetChange(bottom[11])();
  _slicedToArray = tmp4;
  const token = visible(bottom[12]).useToken(onListInsetChange(bottom[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj = visible(bottom[12]);
  [tmp8, c5] = token.useState(0);
  const tmp7 = _slicedToArray(token.useState(0), 2);
  let num = 0;
  if (visible) {
    num = c13;
  }
  sharedValue = visible(bottom[13]).useSharedValue(num);
  let obj3 = visible(bottom[13]);
  sharedValue1 = visible(bottom[13]).useSharedValue(PX_16);
  const bound = Math.max(125, tmp8 + PX_40);
  bound1 = Math.max(onListInsetChange(tmp3[6]).space.PX_12, tmp8 - PX_8 + PX_24);
  let items = [bound1, onListInsetChange, visible];
  const effect = obj2.useEffect(() => {
    if (onListInsetChange != null) {
      if (visible) {
        let PX_12 = bound1;
      } else {
        PX_12 = nativeDefault.space.PX_12;
      }
      tmp(PX_12);
    }
  }, items);
  const items1 = [token];
  const callback = obj2.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    _undefined((arg0) => {
      let tmp = height;
      if (arg0 === height) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const items2 = [visible, sharedValue, sharedValue1];
  const memo = obj2.useMemo(() => {
    const obj = _modDef683(token);
    const items = [_modDef683(token).alpha(0).hex(), , ];
    const alphaResult = _modDef683(token).alpha(0);
    const obj3 = _modDef683(token);
    items[1] = _modDef683(token).alpha(1).hex();
    const alphaResult1 = _modDef683(token).alpha(1);
    const obj5 = _modDef683(token);
    items[2] = _modDef683(token).alpha(1).hex();
    return items;
  }, items1);
  const effect1 = obj2.useEffect(() => {
    if (visible) {
      const result = sharedValue.set(c13);
      const result1 = sharedValue1.set(PX_16);
    }
    let num = 0;
    if (visible) {
      num = 1;
    }
    const result2 = sharedValue.set(spring.withSpring(num, closure_17));
    let num2 = 0;
    if (!visible) {
      num2 = PX_16;
    }
    const result3 = sharedValue1.set(spring.withSpring(num2, closure_17));
    const tmp9Result = spring;
  }, items2);
  const tmp5Result = visible(bottom[13]);
  class U {
    constructor() {
      obj = { opacity: closure_6.get(), transform: null };
      obj1 = { translateY: closure_7.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  U.__closure = { opacity: sharedValue, translateY: sharedValue1 };
  U.__workletHash = 10761841231690;
  U.__initData = __initData3;
  const animatedStyle = visible(bottom[13]).useAnimatedStyle(U);
  const tmp5Result3 = visible(bottom[13]);
  class X {
    constructor() {
      obj = { bottom: Math.max(closure_3.get() - bottom, 0) };
      return obj;
    }
  }
  X.__closure = { keyboardHeight: tmp4, safeAreaBottom: bottom };
  X.__workletHash = 16605597336903;
  X.__initData = __initData4;
  const animatedStyle1 = visible(bottom[13]).useAnimatedStyle(X);
  const obj4 = { style: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  const items3 = [tmp.floatingOverlay, { height: bound + bottom }, animatedStyle1];
  obj4.style = items3;
  let str = "none";
  if (visible) {
    str = "box-none";
  }
  obj4.pointerEvents = str;
  obj4.accessibilityElementsHidden = !visible;
  let str2 = "no-hide-descendants";
  if (visible) {
    str2 = "auto";
  }
  obj4.importantForAccessibility = str2;
  let obj5 = { style: null, children: null };
  const items4 = [c5.absoluteFillObject, tmp.floatingContent, { paddingBottom: bottom }, animatedStyle];
  obj5.style = items4;
  let tmp19Result = !hideGradient;
  if (!hideGradient) {
    const obj6 = { style: tmp21.absoluteFill, colors: memo, locations, start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 }, pointerEvents: "none" };
    tmp19Result = closure_9(onListInsetChange(tmp3[16]), obj6);
  }
  const items5 = [tmp19Result, closure_9(sharedValue, { onLayout: callback, children: children.children })];
  obj5.children = items5;
  obj4.children = closure_10(onListInsetChange(bottom[13]).View, obj5);
  return closure_9(onListInsetChange(bottom[13]).View, obj4);
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: "transparent", paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroUpsellBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(33);
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
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== _location) {
    const obj2 = { location: _location };
    cResult[2] = _location;
    cResult[3] = obj2;
    let tmp10 = obj2;
  } else {
    tmp10 = cResult[3];
  }
  const tmpResult = initialize;
  const enabled = GroupDMNitroCapExperimentDefault.useConfig(tmp10).enabled;
  const groupDMNitroAudience = GroupDMNitroUpsellModel.useGroupDMNitroAudience();
  if (cResult[4] === groupDMNitroAudience) {
    if (cResult[5] === _location) {
      let tmp13 = cResult[6];
    }
    const tmp14 = useGroupDMNitroUpsellActionDefault(tmp13);
    if (cResult[7] === groupDMNitroAudience) {
      if (cResult[8] === enabled) {
        if (cResult[9] === tmp15) {
          let tmp16 = cResult[10];
        }
        if (!tmp4) {
          if (!tmp16) {
            return null;
          }
        }
        if (cResult[11] === tmp4) {
          if (cResult[12] === tmp5) {
            if (cResult[13] === wrapperStyle) {
              let tmp19 = cResult[14];
            }
            if (cResult[15] !== groupDMNitroAudience) {
              const intl = util.intl;
              const stringResult = intl.string(GroupDMNitroUpsellModel.getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
              cResult[15] = groupDMNitroAudience;
              cResult[16] = stringResult;
              let tmp21 = stringResult;
              const tmpResult5 = GroupDMNitroUpsellModel;
            } else {
              tmp21 = cResult[16];
            }
            let tmp23 = tmp16;
            if (tmp16) {
              tmp23 = !stateFromStores;
            }
            if (cResult[17] === tmp14) {
              if (cResult[18] === tmp21) {
                if (cResult[19] === tmp23) {
                  let tmp24 = cResult[20];
                }
                const _Symbol = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
                  const intl2 = util.intl;
                  obj3.children = intl2.string(util.t.KCD0Hp);
                  const tmp29 = options(Text_Text.Text, obj3);
                  cResult[21] = tmp29;
                  let tmp27 = tmp29;
                } else {
                  tmp27 = cResult[21];
                }
                const _Symbol2 = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: null };
                  const intl3 = util.intl;
                  const obj6 = { number };
                  obj5.children = intl3.formatToPlainString(util.t["8o8Zk5"], obj6);
                  const tmp33 = options(Text_Text.Text, obj5);
                  cResult[22] = tmp33;
                  let tmp30 = tmp33;
                } else {
                  tmp30 = cResult[22];
                }
                if (cResult[23] === tmp24) {
                  if (cResult[24] === tmp30) {
                    if (cResult[25] === tmp19) {
                      let tmp34 = cResult[26];
                    }
                    if (cResult[27] === tmp34) {
                      if (cResult[28] === tmp4) {
                        if (cResult[29] === hideFloatingGradient) {
                          if (cResult[30] === tmp16) {
                            if (cResult[31] === onFloatingListInsetChange) {
                              let tmp37 = cResult[32];
                            }
                            return tmp37;
                          }
                        }
                      }
                    }
                    let tmp38 = tmp34;
                    if (tmp4) {
                      const obj7 = { visible: tmp16, hideGradient: hideFloatingGradient, onListInsetChange: onFloatingListInsetChange, children: tmp34 };
                      tmp38 = options(closure_23, obj7);
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
                const obj8 = { showLeadingIcon: false, wrapperStyle: tmp19, trailing: tmp24, children: null };
                const items1 = [tmp27, tmp30];
                obj8.children = items1;
                const tmp36 = v65535(GroupDMNitroCapBannerDefault, obj8);
                cResult[23] = tmp24;
                cResult[24] = tmp30;
                cResult[25] = tmp19;
                cResult[26] = tmp36;
                tmp34 = tmp36;
              }
            }
            const obj9 = { text: tmp21, size: "sm", variant: "experimental_premium-primary", shiny: tmp23, icon: _modDef7733, onPress: tmp14 };
            const tmp26 = options(components_Button_Button.Button, obj9);
            cResult[17] = tmp14;
            cResult[18] = tmp21;
            cResult[19] = tmp23;
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
    const tmp17 = GroupDMNitroUpsellModel.isGroupDMNitroUpsellAudience(groupDMNitroAudience) && memberCount >= recipientLimit && enabled;
    cResult[7] = groupDMNitroAudience;
    cResult[8] = enabled;
    cResult[9] = memberCount >= recipientLimit;
    cResult[10] = tmp17;
    tmp16 = tmp17;
    const tmpResult6 = GroupDMNitroUpsellModel;
  }
  const obj10 = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: GroupDMNitroUpsellModel.GroupDMNitroAcquisitionStrategy.MARKETING };
  cResult[4] = groupDMNitroAudience;
  cResult[5] = _location;
  cResult[6] = obj10;
  tmp13 = obj10;
  const tmpResult4 = GroupDMNitroUpsellModel;
}) : ((wrapperStyle) => {
  ({ location: _location, floating } = wrapperStyle);
  ({ memberCount, recipientLimit } = wrapperStyle);
  if (floating === undefined) {
    floating = false;
  }
  wrapperStyle = wrapperStyle.wrapperStyle;
  ({ hideFloatingGradient, onFloatingListInsetChange } = wrapperStyle);
  const tmp = closure_18();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = GroupDMNitroCapExperimentDefault;
  const groupDMNitroAudience = GroupDMNitroUpsellModel.useGroupDMNitroAudience();
  const obj4 = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: null };
  obj4.acquisitionStrategy = GroupDMNitroUpsellModel.GroupDMNitroAcquisitionStrategy.MARKETING;
  const tmp7Result = useGroupDMNitroUpsellActionDefault(obj4);
  const tmp9 = GroupDMNitroUpsellModel.isGroupDMNitroUpsellAudience(groupDMNitroAudience) && memberCount >= recipientLimit && obj2.useConfig({ location: _location }).enabled;
  if (!floating) {
    if (!tmp9) {
      return null;
    }
  }
  let tmp13 = wrapperStyle;
  if (floating) {
    const items1 = [tmp.floatingBanner, wrapperStyle];
    tmp13 = items1;
  }
  const obj6 = { showLeadingIcon: false, wrapperStyle: tmp13, trailing: null, children: null };
  const obj7 = { text: null, size: "sm", variant: "experimental_premium-primary", shiny: null, icon: null, onPress: null };
  const intl = util.intl;
  const tmp5Result = GroupDMNitroCapBannerDefault;
  obj7.text = intl.string(GroupDMNitroUpsellModel.getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
  let tmp15 = tmp9;
  if (tmp9) {
    tmp15 = !stateFromStores;
  }
  obj7.shiny = tmp15;
  obj7.icon = _modDef7733;
  obj7.onPress = tmp7Result;
  obj6.trailing = options(components_Button_Button.Button, obj7);
  const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj8.children = intl2.string(util.t.KCD0Hp);
  const items2 = [options(Text_Text.Text, obj8), ];
  const obj9 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: null };
  const intl3 = util.intl;
  obj9.children = intl3.formatToPlainString(util.t["8o8Zk5"], { number });
  items2[1] = options(Text_Text.Text, obj9);
  obj6.children = items2;
  const tmp11Result = v65535(tmp5Result, obj6);
  let tmp14Result = tmp11Result;
  if (floating) {
    const obj11 = { visible: tmp9, hideGradient: hideFloatingGradient, onListInsetChange: onFloatingListInsetChange, children: tmp11Result };
    tmp14Result = options(closure_23, obj11);
  }
  return tmp14Result;
});