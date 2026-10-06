// === Module 12881: GroupAvatar ===

// Module 12881 (GroupAvatar)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import react3 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import timing from "timing" /* 4897 */;
import spring from "spring" /* 5604 */;
import FastImageDefault from "FastImage" /* 5981 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6477 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const react_mod = react2;
let animateOnMount, count, scale, users;

let metroImportDefault;
let metroRequire;
let react = react_mod;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const createElement = react2.createElement;
let c9 = 38;
const SPRING_OPTIONS_SCALE = { damping: 30, stiffness: 400 };
const SPRING_OPTIONS_POSITION = { damping: 30, stiffness: 400 };
let closure_12 = createStyles.createStyles(() => {
  let size1;
  let size2;
  let size3;
  const obj = { groupContainer: { position: "relative" }, shadowContainer: { borderRadius: nativeDefault.radii.sm }, shadowContainerBackground: {}, shadowContainerBackgroundLight: { opacity: 0.4 }, shadowContainerBackgroundDark: { opacity: 0.15 }, gradientContainer: size, gradientDimOverlay: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }, gradientImageBorder: size1, avatarContainer: size2, avatar: { width: 32, height: 32, position: "absolute", borderRadius: 16 }, avatarWrapper: { position: "absolute", width: v38, height: v38, justifyContent: "center", alignItems: "center", borderRadius: 19 }, overflowCount: size3 };
  ({ borderRadius: nativeDefault.radii.sm });
  size = { width: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, height: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, overflow: "hidden", borderRadius: nativeDefault.radii.sm };
  size1 = { width: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, height: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, borderRadius: nativeDefault.radii.sm, position: "absolute" };
  size2 = { position: "absolute", top: "50%", left: "50%", width: v38, height: v38, marginTop: -19, marginLeft: -19 };
  size3 = { width: v38, height: v38, position: "absolute", borderRadius: 19, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, display: "flex", alignItems: "center", justifyContent: "center" };
  return obj;
});
let items = [{ translateY: 0, translateX: 0, scale: 1 }, { translateY: 0, translateX: 0, scale: 0 }, { translateY: 0, translateX: 0, scale: 0 }, { translateY: 0, translateX: 0, scale: 0 }];
let items1 = [items, , , ];
let items2 = [{ translateY: -14, translateX: -14, scale: 0.75 }, { translateY: 12, translateX: 12, scale: 0.875 }, { translateY: 0, translateX: 0, scale: 0 }, { translateY: 0, translateX: 0, scale: 0 }];
items1[1] = items2;
let items3 = [{ translateY: -4, translateX: 16, scale: 0.75 }, { translateY: 14, translateX: -14, scale: 0.875 }, { translateY: -18, translateX: -12, scale: 0.625 }, { translateY: 0, translateX: 0, scale: 0 }];
items1[2] = items3;
const items4 = [{ translateY: -14, translateX: -14, scale: 0.875 }, { translateY: 14, translateX: 14, scale: 0.875 }, { translateY: -18, translateX: 18, scale: 0.625 }, { translateY: 18, translateX: -18, scale: 0.625 }];
items1[3] = items4;
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function GroupAvatarTsx1(){const{withTiming,opacityAnimation,useReducedMotion,translateXAnimation,withSpring,SPRING_OPTIONS_POSITION,translateYAnimation,scaleAnimation,SPRING_OPTIONS_SCALE}=this.__closure;return{opacity:withTiming(opacityAnimation.get()),transform:[{translateX:useReducedMotion?translateXAnimation.get():withSpring(translateXAnimation.get(),SPRING_OPTIONS_POSITION)},{translateY:useReducedMotion?translateYAnimation.get():withSpring(translateYAnimation.get(),SPRING_OPTIONS_POSITION)},{scale:useReducedMotion?scaleAnimation.get():withSpring(scaleAnimation.get(),SPRING_OPTIONS_SCALE)}]};}" };
const __initData2 = { code: "function GroupAvatarTsx2(){const{withTiming,opacityAnimation,useReducedMotion,translateXAnimation,withSpring,SPRING_OPTIONS_POSITION,translateYAnimation,scaleAnimation,SPRING_OPTIONS_SCALE}=this.__closure;return{opacity:withTiming(opacityAnimation.get()),transform:[{translateX:useReducedMotion?translateXAnimation.get():withSpring(translateXAnimation.get(),SPRING_OPTIONS_POSITION)},{translateY:useReducedMotion?translateYAnimation.get():withSpring(translateYAnimation.get(),SPRING_OPTIONS_POSITION)},{scale:useReducedMotion?scaleAnimation.get():withSpring(scaleAnimation.get(),SPRING_OPTIONS_SCALE)}]};}" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((users) => {
  let closure_3;
  let items2;
  let primaryColor;
  let ref;
  let theme;
  let obj = users(ref[7]);
  const cResult = obj.c(40);
  const tmp = users;
  users = users.users;
  const guildId = users.guildId;
  const tmp4 = closure_12();
  let obj2 = users(ref[8]);
  const themeContext = obj2.useThemeContext();
  ({ theme, primaryColor } = themeContext);
  if (cResult[0] === tmp4.shadowContainerBackgroundDark) {
    if (cResult[1] === tmp4.shadowContainerBackgroundLight) {
      let shadowContainerBackground;
      let tmp10;
      let tmp9;
      let tmp17;
      if (cResult[2] === theme) {
        shadowContainerBackground = cResult[3];
      }
      ref = react.useRef(false);
      const _Symbol = Symbol;
      const obj4 = react;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function f() {
          ref.current = true;
        };
        const items = [];
        cResult[4] = fn;
        cResult[5] = items;
        tmp10 = items;
        tmp9 = fn;
      } else {
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      const effect = obj4.useEffect(tmp9, tmp10);
      const _Math = Math;
      const _Math2 = Math;
      const arr3 = items1[Math.max(Math, 0, Math.min(Math, items1.length - 1, users.length - 1))];
      react = tmp13;
      const diff = users.length - 3;
      const View = diff;
      let num8 = 2;
      if (10 <= diff) {
        num8 = 1;
      }
      const tmp16 = guildId(ref[9])(ref);
      animateOnMount = tmp16;
      if (cResult[6] === tmp16) {
        if (cResult[7] === arr3) {
          if (cResult[8] === guildId) {
            if (cResult[9] === diff) {
              if (cResult[10] === users.length > 4) {
                if (cResult[11] === num8) {
                  if (cResult[12] === users) {
                    tmp17 = cResult[13];
                  }
                  if (null == primaryColor) {
                    shadowContainerBackground = tmp4.shadowContainerBackground;
                  }
                  if (cResult[21] === tmp4.shadowContainer) {
                    let tmp21;
                    if (cResult[22] === shadowContainerBackground) {
                      tmp21 = cResult[23];
                    }
                    if (cResult[24] === primaryColor) {
                      let tmp22;
                      if (cResult[25] === tmp4.gradientDimOverlay) {
                        tmp22 = cResult[26];
                      }
                      if (cResult[27] === tmp4.gradientContainer) {
                        let tmp26;
                        let tmp30;
                        if (cResult[28] === tmp22) {
                          tmp26 = cResult[29];
                        }
                        if (cResult[30] !== tmp4.gradientImageBorder) {
                          let obj3 = { style: tmp4.gradientImageBorder };
                          const tmp33 = animateOnMount(View, obj3);
                          cResult[30] = tmp4.gradientImageBorder;
                          cResult[31] = tmp33;
                          tmp30 = tmp33;
                        } else {
                          tmp30 = cResult[31];
                        }
                        if (cResult[32] === tmp21) {
                          if (cResult[33] === tmp26) {
                            let tmp34;
                            if (cResult[34] === tmp30) {
                              tmp34 = cResult[35];
                            }
                            if (cResult[36] === tmp17) {
                              if (cResult[37] === tmp4.groupContainer) {
                                let tmp38;
                                if (cResult[38] === tmp34) {
                                  tmp38 = cResult[39];
                                }
                                return tmp38;
                              }
                            }
                            const obj5 = { style: tmp4.groupContainer, children: items1 };
                            items1 = [tmp34, tmp17];
                            const tmp41 = closure_7(View, obj5);
                            cResult[36] = tmp17;
                            cResult[37] = tmp4.groupContainer;
                            cResult[38] = tmp34;
                            cResult[39] = tmp41;
                            tmp38 = tmp41;
                          }
                        }
                        const obj6 = { style: tmp21, children: items2 };
                        items2 = [tmp26, tmp30];
                        const tmp37 = closure_7(View, obj6);
                        cResult[32] = tmp21;
                        cResult[33] = tmp26;
                        cResult[34] = tmp30;
                        cResult[35] = tmp37;
                        tmp34 = tmp37;
                      }
                      const obj7 = { style: tmp4.gradientContainer, children: tmp22 };
                      const tmp29 = animateOnMount(View, obj7);
                      cResult[27] = tmp4.gradientContainer;
                      cResult[28] = tmp22;
                      cResult[29] = tmp29;
                      tmp26 = tmp29;
                    }
                    let tmp23 = null == primaryColor;
                    if (tmp23) {
                      const obj8 = { style: tmp4.gradientDimOverlay };
                      tmp23 = animateOnMount(View, obj8);
                    }
                    cResult[24] = primaryColor;
                    cResult[25] = tmp4.gradientDimOverlay;
                    cResult[26] = tmp23;
                    tmp22 = tmp23;
                  }
                  const items3 = [tmp4.shadowContainer, shadowContainerBackground];
                  cResult[21] = tmp4.shadowContainer;
                  cResult[22] = shadowContainerBackground;
                  cResult[23] = items3;
                  tmp21 = items3;
                }
              }
            }
          }
        }
      }
      if (cResult[14] === tmp16) {
        if (cResult[15] === guildId) {
          if (cResult[16] === diff) {
            if (cResult[17] === users.length > 4) {
              if (cResult[18] === num8) {
                let tmp18;
                if (cResult[19] === users) {
                  tmp18 = cResult[20];
                }
                const mapped = arr3.map(tmp18);
                cResult[6] = tmp16;
                cResult[7] = arr3;
                cResult[8] = guildId;
                cResult[9] = diff;
                cResult[10] = users.length > 4;
                cResult[11] = num8;
                cResult[12] = users;
                cResult[13] = mapped;
                tmp17 = mapped;
              }
            }
          }
        }
      }
      class X {
        constructor(arg0, arg1) {
          let tmp4Result = null;
          if (null != users[arg1]) {
            const obj = { key: users[arg1].id, animateOnMount: metroRequire };
            const merged = Object.assign(arg0);
            if (closure_3) {
              let tmp14;
              if (arg1 === num8) {
                const obj2 = { count: View };
                tmp14 = metroRequire(closure_17, obj2);
              }
              tmp4Result = <closure_16 {...obj}>{tmp14}</closure_16>;
            }
            const obj3 = { guildId, user: users[arg1] };
            tmp14 = metroRequire(closure_18, obj3);
          }
          return tmp4Result;
        }
      }
      cResult[14] = tmp16;
      cResult[15] = guildId;
      cResult[16] = diff;
      cResult[17] = users.length > 4;
      cResult[18] = num8;
      cResult[19] = users;
      cResult[20] = X;
      tmp18 = X;
    }
  }
  const tmpResult = tmp(ref[8]);
  const tmp6 = tmpResult.isThemeLight(theme) ? tmp4.shadowContainerBackgroundLight : tmp4.shadowContainerBackgroundDark;
  cResult[0] = tmp4.shadowContainerBackgroundDark;
  cResult[1] = tmp4.shadowContainerBackgroundLight;
  cResult[2] = theme;
  cResult[3] = tmp6;
  shadowContainerBackground = tmp6;
}) : ((users) => {
  let closure_3;
  let items2;
  let primaryColor;
  let theme;
  let tmp10Result;
  users = users.users;
  const guildId = users.guildId;
  let ref;
  react = undefined;
  animateOnMount = undefined;
  const tmp = closure_12();
  let obj = users(ref[8]);
  const themeContext = obj.useThemeContext();
  ({ primaryColor, theme } = themeContext);
  let obj2 = users(ref[8]);
  let shadowContainerBackground = obj2.isThemeLight(theme) ? tmp.shadowContainerBackgroundLight : tmp.shadowContainerBackgroundDark;
  const tmp2 = ref;
  ref = react.useRef(false);
  const effect = react.useEffect(() => {
    ref.current = true;
  }, []);
  react = users.length > 4;
  const diff = users.length - 3;
  let c4 = diff;
  let num = 2;
  const arr2 = items1[Math.max(Math, 0, Math.min(Math, items1.length - 1, users.length - 1))];
  if (10 <= diff) {
    num = 1;
  }
  animateOnMount = guildId(tmp2[9])(ref);
  let obj3 = { style: tmp.groupContainer, children: items2 };
  const items = [tmp.shadowContainer, ];
  const mapped = arr2.map((item, index) => {
    let tmp4Result = null;
    if (null != users[index]) {
      const obj = { key: users[index].id, animateOnMount: metroRequire };
      const merged = Object.assign(item);
      if (closure_3) {
        let tmp14;
        if (index === num) {
          const obj2 = { count };
          tmp14 = metroRequire(closure_17, obj2);
        }
        tmp4Result = <closure_16 {...obj}>{tmp14}</closure_16>;
      }
      const obj3 = { guildId, user: users[index] };
      tmp14 = metroRequire(closure_18, obj3);
    }
    return tmp4Result;
  });
  if (null == primaryColor) {
    shadowContainerBackground = tmp.shadowContainerBackground;
  }
  const obj4 = { style: items, children: items1 };
  items[1] = shadowContainerBackground;
  const obj5 = { style: tmp.gradientContainer, children: tmp10Result };
  tmp10Result = null == primaryColor;
  if (tmp10Result) {
    const obj6 = { style: tmp.gradientDimOverlay };
    tmp10Result = tmp10(tmp9, obj6);
  }
  items1 = [animateOnMount(c4, obj5), ];
  const obj7 = { style: tmp.gradientImageBorder };
  items1[1] = animateOnMount(c4, obj7);
  items2 = [closure_7(c4, obj4), mapped];
  return closure_7(c4, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((scale) => {
  let children;
  let sharedValue2;
  let tmp5;
  let tmp6;
  let translateY;
  let obj = scale(translateY[7]);
  const cResult = obj.c(17);
  scale = scale.scale;
  const translateX = scale.translateX;
  translateY = scale.translateY;
  ({ animateOnMount, children } = scale);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [sharedValue2];
    const fn = function u() {
      return sharedValue2.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let tmpResult = tmp(tmp2[10]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  let num3 = 1;
  const useSharedValue = scale(translateY[11]).useSharedValue;
  scale(translateY[11]);
  if (animateOnMount) {
    num3 = 0;
  }
  const sharedValue = useSharedValue(num3);
  let num4 = 0;
  const useSharedValue2 = scale(translateY[11]).useSharedValue;
  scale(translateY[11]);
  if (!animateOnMount) {
    num4 = translateY;
  }
  sharedValue2 = useSharedValue2(num4);
  let num5 = 0;
  const useSharedValue3 = scale(translateY[11]).useSharedValue;
  scale(translateY[11]);
  if (!animateOnMount) {
    num5 = translateX;
  }
  const sharedValue3 = useSharedValue3(num5);
  let result = scale;
  const useSharedValue4 = scale(translateY[11]).useSharedValue;
  scale(translateY[11]);
  if (animateOnMount) {
    result = scale / 2;
  }
  const sharedValue4 = useSharedValue4(result);
  if (cResult[2] === sharedValue) {
    if (cResult[3] === scale) {
      if (cResult[4] === sharedValue4) {
        if (cResult[5] === translateX) {
          if (cResult[6] === sharedValue3) {
            if (cResult[7] === translateY) {
              let tmp18;
              let tmp19;
              if (cResult[8] === sharedValue2) {
                tmp18 = cResult[9];
                tmp19 = cResult[10];
              }
              const effect = stateFromStores.useEffect(tmp18, tmp19);
              const tmpResult10 = scale(translateY[11]);
              class X {
                constructor() {
                  let items;
                  let obj2;
                  let value3;
                  let value4;
                  let withSpringResult;
                  const obj = { opacity: obj2.withTiming(sharedValue.get()), transform: items };
                  obj2 = timing;
                  if (stateFromStores) {
                    withSpringResult = sharedValue3.get();
                  } else {
                    const tmpResult = spring;
                    withSpringResult = tmpResult.withSpring(sharedValue3.get(), SPRING_OPTIONS_POSITION);
                  }
                  items = [{ translateX: withSpringResult }, , ];
                  if (stateFromStores) {
                    value3 = sharedValue2.get();
                  } else {
                    const tmpResult3 = spring;
                    value3 = tmpResult3.withSpring(sharedValue2.get(), SPRING_OPTIONS_POSITION);
                  }
                  items[1] = { translateY: value3 };
                  if (stateFromStores) {
                    value4 = sharedValue4.get();
                  } else {
                    const tmpResult4 = spring;
                    value4 = tmpResult4.withSpring(sharedValue4.get(), SPRING_OPTIONS_SCALE);
                  }
                  items[2] = { scale: value4 };
                  return obj;
                }
              }
              let obj2 = { withTiming: scale(translateY[12]).withTiming, opacityAnimation: sharedValue, useReducedMotion: stateFromStores, translateXAnimation: sharedValue3, withSpring: scale(translateY[13]).withSpring, SPRING_OPTIONS_POSITION, translateYAnimation: sharedValue2, scaleAnimation: sharedValue4, SPRING_OPTIONS_SCALE };
              const useAnimatedStyle = tmpResult10.useAnimatedStyle;
              X.__closure = obj2;
              X.__workletHash = 8800301056148;
              X.__initData = __initData;
              const animatedStyle = useAnimatedStyle(X);
              if (cResult[11] === animatedStyle) {
                let tmp27;
                if (cResult[12] === tmp4.avatarContainer) {
                  tmp27 = cResult[13];
                }
                if (cResult[14] === children) {
                  let tmp28;
                  if (cResult[15] === tmp27) {
                    tmp28 = cResult[16];
                  }
                  return tmp28;
                }
                class X {
                  constructor() {
                    let items;
                    let obj2;
                    let value3;
                    let value4;
                    let withSpringResult;
                    const obj = { opacity: obj2.withTiming(sharedValue.get()), transform: items };
                    obj2 = timing;
                    if (stateFromStores) {
                      withSpringResult = sharedValue3.get();
                    } else {
                      const tmpResult = spring;
                      withSpringResult = tmpResult.withSpring(sharedValue3.get(), SPRING_OPTIONS_POSITION);
                    }
                    items = [{ translateX: withSpringResult }, , ];
                    if (stateFromStores) {
                      value3 = sharedValue2.get();
                    } else {
                      const tmpResult3 = spring;
                      value3 = tmpResult3.withSpring(sharedValue2.get(), SPRING_OPTIONS_POSITION);
                    }
                    items[1] = { translateY: value3 };
                    if (stateFromStores) {
                      value4 = sharedValue4.get();
                    } else {
                      const tmpResult4 = spring;
                      value4 = tmpResult4.withSpring(sharedValue4.get(), SPRING_OPTIONS_SCALE);
                    }
                    items[2] = { scale: value4 };
                    return obj;
                  }
                }
                tmp31[0] = tmp27;
                tmp31[1] = children;
                const tmp32 = sharedValue3(translateX(translateY[11]).View, tmp31);
                cResult[14] = children;
                cResult[15] = tmp27;
                cResult[16] = tmp32;
                tmp28 = tmp32;
              }
              items1 = [tmp4.avatarContainer, animatedStyle];
              cResult[11] = animatedStyle;
              cResult[12] = tmp4.avatarContainer;
              cResult[13] = items1;
              tmp27 = items1;
            }
          }
        }
      }
    }
  }
  const fn2 = function y() {
    const result = sharedValue.set(1);
    const result1 = sharedValue4.set(scale);
    const result2 = sharedValue2.set(translateY);
    const result3 = sharedValue3.set(translateX);
  };
  const items2 = [sharedValue, sharedValue4, sharedValue2, sharedValue3, scale, translateY, translateX];
  cResult[2] = sharedValue;
  cResult[3] = scale;
  cResult[4] = sharedValue4;
  cResult[5] = translateX;
  cResult[6] = sharedValue3;
  cResult[7] = translateY;
  cResult[8] = sharedValue2;
  cResult[9] = fn2;
  cResult[10] = items2;
  tmp19 = items2;
  tmp18 = fn2;
}) : ((scale) => {
  let items2;
  scale = scale.scale;
  const translateX = scale.translateX;
  const translateY = scale.translateY;
  animateOnMount = scale.animateOnMount;
  let sharedValue;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  const children = scale.children;
  const tmp = closure_12();
  let obj = scale(translateY[10]);
  let items = [sharedValue2];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue2.useReducedMotion);
  let num = 1;
  const useSharedValue = scale(translateY[11]).useSharedValue;
  scale(translateY[11]);
  if (animateOnMount) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  let num2 = 0;
  const useSharedValue2 = scale(translateY[11]).useSharedValue;
  scale(translateY[11]);
  if (!animateOnMount) {
    num2 = translateY;
  }
  sharedValue2 = useSharedValue2(num2);
  let num3 = 0;
  const useSharedValue3 = scale(translateY[11]).useSharedValue;
  scale(translateY[11]);
  if (!animateOnMount) {
    num3 = translateX;
  }
  sharedValue3 = useSharedValue3(num3);
  let result = scale;
  const useSharedValue4 = scale(translateY[11]).useSharedValue;
  scale(translateY[11]);
  if (animateOnMount) {
    result = scale / 2;
  }
  sharedValue4 = useSharedValue4(result);
  items1 = [sharedValue, sharedValue4, sharedValue2, sharedValue3, scale, translateY, translateX];
  const effect = stateFromStores.useEffect(() => {
    const result = sharedValue.set(1);
    const result1 = sharedValue4.set(scale);
    const result2 = sharedValue2.set(translateY);
    const result3 = sharedValue3.set(translateX);
  }, items1);
  const tmp2Result6 = scale(translateY[11]);
  class T {
    constructor() {
      let items;
      let obj2;
      let value3;
      let value4;
      let withSpringResult;
      const obj = { opacity: obj2.withTiming(sharedValue.get()), transform: items };
      obj2 = timing;
      if (stateFromStores) {
        withSpringResult = sharedValue3.get();
      } else {
        const tmpResult = spring;
        withSpringResult = tmpResult.withSpring(sharedValue3.get(), SPRING_OPTIONS_POSITION);
      }
      items = [{ translateX: withSpringResult }, , ];
      if (stateFromStores) {
        value3 = sharedValue2.get();
      } else {
        const tmpResult3 = spring;
        value3 = tmpResult3.withSpring(sharedValue2.get(), SPRING_OPTIONS_POSITION);
      }
      items[1] = { translateY: value3 };
      if (stateFromStores) {
        value4 = sharedValue4.get();
      } else {
        const tmpResult4 = spring;
        value4 = tmpResult4.withSpring(sharedValue4.get(), SPRING_OPTIONS_SCALE);
      }
      items[2] = { scale: value4 };
      return obj;
    }
  }
  let obj2 = { withTiming: tmp2(tmp3[12]).withTiming, opacityAnimation: sharedValue, useReducedMotion: stateFromStores, translateXAnimation: sharedValue3, withSpring: tmp2(tmp3[13]).withSpring, SPRING_OPTIONS_POSITION, translateYAnimation: sharedValue2, scaleAnimation: sharedValue4, SPRING_OPTIONS_SCALE };
  T.__closure = obj2;
  T.__workletHash = 4708505036919;
  T.__initData = __initData2;
  const animatedStyle = tmp2Result6.useAnimatedStyle(T);
  const obj3 = { style: items2, children };
  items2 = [tmp.avatarContainer, animatedStyle];
  return sharedValue3(translateX(translateY[11]).View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((count) => {
  let items;
  const obj = react3;
  const cResult = obj.c(9);
  count = count.count;
  const obj2 = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("GroupAvatar");
  const tmp5 = closure_12();
  let str = "text-sm/semibold";
  if (manaTypeConsolidationExperiment) {
    str = "text-sm/semibold";
    if (count < 100) {
      str = "experimental/body-md/semibold";
    }
  }
  if (cResult[0] === count) {
    let tmp6;
    if (cResult[1] === str) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp5.overflowCount) {
      let tmp8;
      if (cResult[4] === tmp6) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp5.avatarWrapper) {
        let tmp12;
        if (cResult[7] === tmp8) {
          tmp12 = cResult[8];
        }
        return tmp12;
      }
      const obj3 = { style: tmp5.avatarWrapper, children: tmp8 };
      const tmp15 = metroRequire(View, obj3);
      cResult[6] = tmp5.avatarWrapper;
      cResult[7] = tmp8;
      cResult[8] = tmp15;
      tmp12 = tmp15;
    }
    const obj4 = { style: tmp5.overflowCount, children: tmp6 };
    const tmp11 = metroRequire(View, obj4);
    cResult[3] = tmp5.overflowCount;
    cResult[4] = tmp6;
    cResult[5] = tmp11;
    tmp8 = tmp11;
  }
  const obj5 = { variant: str, children: items };
  items = ["+", count];
  const tmp7 = metroImportDefault(Text_Text.Text, obj5);
  cResult[0] = count;
  cResult[1] = str;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((count) => {
  let Text;
  let items;
  let obj3;
  let obj4;
  count = count.count;
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GroupAvatar");
  const tmp2 = closure_12();
  const obj2 = { style: tmp2.avatarWrapper, children: metroRequire(View, obj3) };
  let str = "text-sm/semibold";
  obj3 = { style: tmp2.overflowCount, children: metroImportDefault(Text, obj4) };
  Text = Text_Text.Text;
  if (manaTypeConsolidationExperiment) {
    str = "text-sm/semibold";
    if (count < 100) {
      str = "experimental/body-md/semibold";
    }
  }
  obj4 = { variant: str, children: items };
  items = ["+", count];
  return metroRequire(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guildId;
  let user;
  const obj = react3;
  const cResult = obj.c(9);
  ({ guildId, user } = arg0);
  const tmp3 = closure_12();
  if (cResult[0] === guildId) {
    let tmp4;
    if (cResult[1] === user) {
      tmp4 = cResult[2];
    }
    let tmp6 = null;
    if (null != tmp4) {
      if (cResult[3] === tmp4) {
        let tmp7;
        if (cResult[4] === tmp3.avatar) {
          tmp7 = cResult[5];
        }
        if (cResult[6] === tmp3.avatarWrapper) {
          let tmp11;
          if (cResult[7] === tmp7) {
            tmp11 = cResult[8];
          }
          tmp6 = tmp11;
        }
        const obj2 = { style: tmp3.avatarWrapper, children: tmp7 };
        const tmp14 = metroRequire(View, obj2);
        cResult[6] = tmp3.avatarWrapper;
        cResult[7] = tmp7;
        cResult[8] = tmp14;
        tmp11 = tmp14;
      }
      const obj3 = { style: tmp3.avatar, source: tmp4 };
      const tmp10 = metroRequire(FastImageDefault, obj3);
      cResult[3] = tmp4;
      cResult[4] = tmp3.avatar;
      cResult[5] = tmp10;
      tmp7 = tmp10;
    }
    return tmp6;
  }
  let avatarSource;
  if (user != null) {
    avatarSource = user.getAvatarSource(guildId, false, 32);
  }
  cResult[0] = guildId;
  cResult[1] = user;
  cResult[2] = avatarSource;
  tmp4 = avatarSource;
}) : ((guildId) => {
  let obj2;
  guildId = guildId.guildId;
  const user = guildId.user;
  const tmp = closure_12();
  const items = [guildId, user];
  const memo = react.useMemo(() => {
    let avatarSource;
    if (user != null) {
      avatarSource = user.getAvatarSource(guildId, false, 32);
    }
    return avatarSource;
  }, items);
  let tmp3 = null;
  if (null != memo) {
    const obj = { style: tmp.avatarWrapper, children: metroRequire(FastImageDefault, obj2) };
    obj2 = { style: tmp.avatar, source: memo };
    tmp3 = metroRequire(View, obj);
  }
  return tmp3;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx");

export default tmp3;