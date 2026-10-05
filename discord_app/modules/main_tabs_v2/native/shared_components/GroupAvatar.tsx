// === Module 12862: GroupAvatar ===

// Module 12862 (GroupAvatar)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import timing from "timing" /* 4891 */;
import spring from "spring" /* 5597 */;
import FastImageDefault from "FastImage" /* 5974 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6470 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

require = fn;
let View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createElement = fn(19).createElement;
let c9 = 38;
const SPRING_OPTIONS_SCALE = { damping: 30, stiffness: 400 };
const SPRING_OPTIONS_POSITION = { damping: 30, stiffness: 400 };
const createStyles = fn(4890);
let closure_12 = createStyles.createStyles(() => {
  const obj = { groupContainer: { position: "relative" }, shadowContainer: { borderRadius: nativeDefault.radii.sm }, shadowContainerBackground: {}, shadowContainerBackgroundLight: { opacity: 0.4 }, shadowContainerBackgroundDark: { opacity: 0.15 }, gradientContainer: null, gradientDimOverlay: null, gradientImageBorder: null, avatarContainer: null, avatar: null, avatarWrapper: null, overflowCount: null };
  const size = { width: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, height: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, overflow: "hidden", borderRadius: nativeDefault.radii.sm };
  obj.gradientContainer = size;
  obj.gradientDimOverlay = { position: "absolute", left: 0, top: 0, right: 0, bottom: 0 };
  const size1 = { width: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, height: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, borderRadius: nativeDefault.radii.sm, position: "absolute" };
  obj.gradientImageBorder = size1;
  const size2 = { position: "absolute", top: "50%", left: "50%", width: v38, height: v38, marginTop: -19, marginLeft: -19 };
  obj.avatarContainer = size2;
  obj.avatar = { width: 32, height: 32, position: "absolute", borderRadius: 16 };
  obj.avatarWrapper = { position: "absolute", width: v38, height: v38, justifyContent: "center", alignItems: "center", borderRadius: 19 };
  const size3 = { width: v38, height: v38, position: "absolute", borderRadius: 19, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, display: "flex", alignItems: "center", justifyContent: "center" };
  obj.overflowCount = size3;
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
fn(558);
const __initData = { code: "function GroupAvatarTsx1(){const{withTiming,opacityAnimation,useReducedMotion,translateXAnimation,withSpring,SPRING_OPTIONS_POSITION,translateYAnimation,scaleAnimation,SPRING_OPTIONS_SCALE}=this.__closure;return{opacity:withTiming(opacityAnimation.get()),transform:[{translateX:useReducedMotion?translateXAnimation.get():withSpring(translateXAnimation.get(),SPRING_OPTIONS_POSITION)},{translateY:useReducedMotion?translateYAnimation.get():withSpring(translateYAnimation.get(),SPRING_OPTIONS_POSITION)},{scale:useReducedMotion?scaleAnimation.get():withSpring(scaleAnimation.get(),SPRING_OPTIONS_SCALE)}]};}" };
const __initData2 = { code: "function GroupAvatarTsx2(){const{withTiming,opacityAnimation,useReducedMotion,translateXAnimation,withSpring,SPRING_OPTIONS_POSITION,translateYAnimation,scaleAnimation,SPRING_OPTIONS_SCALE}=this.__closure;return{opacity:withTiming(opacityAnimation.get()),transform:[{translateX:useReducedMotion?translateXAnimation.get():withSpring(translateXAnimation.get(),SPRING_OPTIONS_POSITION)},{translateY:useReducedMotion?translateYAnimation.get():withSpring(translateYAnimation.get(),SPRING_OPTIONS_POSITION)},{scale:useReducedMotion?scaleAnimation.get():withSpring(scaleAnimation.get(),SPRING_OPTIONS_SCALE)}]};}" };
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((scale) => {
  const cResult = scale(translateY[7]).c(17);
  scale = scale.scale;
  const translateX = scale.translateX;
  translateY = scale.translateY;
  ({ animateOnMount, children } = scale);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [sharedValue1];
    const fn = function u() {
      return sharedValue1.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = scale(translateY[7]);
  const stateFromStores = scale(translateY[10]).useStateFromStores(tmp5, tmp6);
  let tmpResult = scale(translateY[10]);
  let num3 = 1;
  if (animateOnMount) {
    num3 = 0;
  }
  const sharedValue = scale(translateY[11]).useSharedValue(num3);
  const tmpResult6 = scale(translateY[11]);
  let num4 = 0;
  if (!animateOnMount) {
    num4 = translateY;
  }
  sharedValue1 = scale(translateY[11]).useSharedValue(num4);
  const tmpResult7 = scale(translateY[11]);
  let num5 = 0;
  if (!animateOnMount) {
    num5 = translateX;
  }
  const sharedValue2 = scale(translateY[11]).useSharedValue(num5);
  const tmpResult8 = scale(translateY[11]);
  let result = scale;
  if (animateOnMount) {
    result = scale / 2;
  }
  const sharedValue3 = scale(translateY[11]).useSharedValue(result);
  if (cResult[2] === sharedValue) {
    if (cResult[3] === scale) {
      if (cResult[4] === sharedValue3) {
        if (cResult[5] === translateX) {
          if (cResult[6] === sharedValue2) {
            if (cResult[7] === translateY) {
              if (cResult[8] === sharedValue1) {
                let tmp14 = cResult[9];
                let tmp15 = cResult[10];
              }
              const effect = stateFromStores.useEffect(tmp14, tmp15);
              class X {
                constructor() {
                  obj = { opacity: null, transform: null };
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj2 = closure_0(closure_2[12]);
                  obj.opacity = obj2.withTiming(closure_4.get());
                  tmp3 = closure_3;
                  if (closure_3) {
                    tmp7 = closure_6;
                    value = closure_6.get();
                  } else {
                    tmpResult = tmp(tmp2[13]);
                    tmp4 = closure_6;
                    tmp5 = closure_11;
                    value = tmpResult.withSpring(closure_6.get(), closure_11);
                  }
                  items = [, , ];
                  items[0] = { translateX: value };
                  if (tmp3) {
                    tmp11 = closure_5;
                    value1 = closure_5.get();
                  } else {
                    tmpResult1 = tmp(tmp2[13]);
                    tmp8 = closure_5;
                    tmp9 = closure_11;
                    value1 = tmpResult1.withSpring(closure_5.get(), closure_11);
                  }
                  items[1] = { translateY: value1 };
                  if (tmp3) {
                    tmp15 = closure_7;
                    value2 = closure_7.get();
                  } else {
                    tmpResult2 = tmp(tmp2[13]);
                    tmp12 = closure_7;
                    tmp13 = closure_10;
                    value2 = tmpResult2.withSpring(closure_7.get(), closure_10);
                  }
                  items[2] = { scale: value2 };
                  obj.transform = items;
                  return obj;
                }
              }
              const obj2 = { withTiming: tmp(tmp2[12]).withTiming, opacityAnimation: sharedValue, useReducedMotion: stateFromStores, translateXAnimation: sharedValue2, withSpring: tmp(tmp2[13]).withSpring, SPRING_OPTIONS_POSITION, translateYAnimation: sharedValue1, scaleAnimation: sharedValue3, SPRING_OPTIONS_SCALE };
              X.__closure = obj2;
              X.__workletHash = 8800301056148;
              X.__initData = __initData;
              const animatedStyle = tmp(tmp2[11]).useAnimatedStyle(X);
              if (cResult[11] === animatedStyle) {
                if (cResult[12] === tmp4.avatarContainer) {
                  let tmp22 = cResult[13];
                }
                if (cResult[14] === children) {
                  if (cResult[15] === tmp22) {
                    let tmp23 = cResult[16];
                  }
                  return tmp23;
                }
                class X {
                  constructor() {
                    obj = { opacity: null, transform: null };
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj2 = closure_0(closure_2[12]);
                    obj.opacity = obj2.withTiming(closure_4.get());
                    tmp3 = closure_3;
                    if (closure_3) {
                      tmp7 = closure_6;
                      value = closure_6.get();
                    } else {
                      tmpResult = tmp(tmp2[13]);
                      tmp4 = closure_6;
                      tmp5 = closure_11;
                      value = tmpResult.withSpring(closure_6.get(), closure_11);
                    }
                    items = [, , ];
                    items[0] = { translateX: value };
                    if (tmp3) {
                      tmp11 = closure_5;
                      value1 = closure_5.get();
                    } else {
                      tmpResult1 = tmp(tmp2[13]);
                      tmp8 = closure_5;
                      tmp9 = closure_11;
                      value1 = tmpResult1.withSpring(closure_5.get(), closure_11);
                    }
                    items[1] = { translateY: value1 };
                    if (tmp3) {
                      tmp15 = closure_7;
                      value2 = closure_7.get();
                    } else {
                      tmpResult2 = tmp(tmp2[13]);
                      tmp12 = closure_7;
                      tmp13 = closure_10;
                      value2 = tmpResult2.withSpring(closure_7.get(), closure_10);
                    }
                    items[2] = { scale: value2 };
                    obj.transform = items;
                    return obj;
                  }
                }
                tmp26[0] = tmp22;
                tmp26[1] = children;
                const tmp27 = sharedValue2(translateX(tmp2[11]).View, tmp26);
                cResult[14] = children;
                cResult[15] = tmp22;
                cResult[16] = tmp27;
                tmp23 = tmp27;
              }
              items1 = [tmp4.avatarContainer, animatedStyle];
              cResult[11] = animatedStyle;
              cResult[12] = tmp4.avatarContainer;
              cResult[13] = items1;
              tmp22 = items1;
              const tmpResult10 = tmp(tmp2[11]);
            }
          }
        }
      }
    }
  }
  const fn2 = function y() {
    const result = sharedValue.set(1);
    const result1 = sharedValue3.set(scale);
    const result2 = sharedValue1.set(translateY);
    const result3 = sharedValue2.set(translateX);
  };
  const items2 = [sharedValue, sharedValue3, sharedValue1, sharedValue2, scale, translateY, translateX];
  cResult[2] = sharedValue;
  cResult[3] = scale;
  cResult[4] = sharedValue3;
  cResult[5] = translateX;
  cResult[6] = sharedValue2;
  cResult[7] = translateY;
  cResult[8] = sharedValue1;
  cResult[9] = fn2;
  cResult[10] = items2;
  tmp15 = items2;
  tmp14 = fn2;
  const tmpResult9 = scale(translateY[11]);
}) : ((children) => {
  const scale = children.scale;
  const translateX = children.translateX;
  const translateY = children.translateY;
  animateOnMount = children.animateOnMount;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  const tmp = closure_12();
  let items = [sharedValue1];
  const stateFromStores = scale(translateY[10]).useStateFromStores(items, () => sharedValue1.useReducedMotion);
  let obj = scale(translateY[10]);
  let num = 1;
  if (animateOnMount) {
    num = 0;
  }
  sharedValue = scale(translateY[11]).useSharedValue(num);
  const obj2 = scale(translateY[11]);
  let num2 = 0;
  if (!animateOnMount) {
    num2 = translateY;
  }
  sharedValue1 = scale(translateY[11]).useSharedValue(num2);
  const tmp2Result = scale(translateY[11]);
  let num3 = 0;
  if (!animateOnMount) {
    num3 = translateX;
  }
  sharedValue2 = scale(translateY[11]).useSharedValue(num3);
  const tmp2Result4 = scale(translateY[11]);
  let result = scale;
  if (animateOnMount) {
    result = scale / 2;
  }
  sharedValue3 = scale(translateY[11]).useSharedValue(result);
  items1 = [sharedValue, sharedValue3, sharedValue1, sharedValue2, scale, translateY, translateX];
  const effect = stateFromStores.useEffect(() => {
    const result = sharedValue.set(1);
    const result1 = sharedValue3.set(scale);
    const result2 = sharedValue1.set(translateY);
    const result3 = sharedValue2.set(translateX);
  }, items1);
  const tmp2Result5 = scale(translateY[11]);
  class T {
    constructor() {
      obj = { opacity: null, transform: null };
      tmp = closure_0;
      tmp2 = closure_2;
      obj2 = closure_0(closure_2[12]);
      obj.opacity = obj2.withTiming(closure_4.get());
      tmp3 = closure_3;
      if (closure_3) {
        tmp7 = closure_6;
        value = closure_6.get();
      } else {
        tmpResult = tmp(tmp2[13]);
        tmp4 = closure_6;
        tmp5 = closure_11;
        value = tmpResult.withSpring(closure_6.get(), closure_11);
      }
      items = [, , ];
      items[0] = { translateX: value };
      if (tmp3) {
        tmp11 = closure_5;
        value1 = closure_5.get();
      } else {
        tmpResult1 = tmp(tmp2[13]);
        tmp8 = closure_5;
        tmp9 = closure_11;
        value1 = tmpResult1.withSpring(closure_5.get(), closure_11);
      }
      items[1] = { translateY: value1 };
      if (tmp3) {
        tmp15 = closure_7;
        value2 = closure_7.get();
      } else {
        tmpResult2 = tmp(tmp2[13]);
        tmp12 = closure_7;
        tmp13 = closure_10;
        value2 = tmpResult2.withSpring(closure_7.get(), closure_10);
      }
      items[2] = { scale: value2 };
      obj.transform = items;
      return obj;
    }
  }
  const tmp2Result6 = scale(translateY[11]);
  T.__closure = { withTiming: scale(translateY[12]).withTiming, opacityAnimation: sharedValue, useReducedMotion: stateFromStores, translateXAnimation: sharedValue2, withSpring: scale(translateY[13]).withSpring, SPRING_OPTIONS_POSITION, translateYAnimation: sharedValue1, scaleAnimation: sharedValue3, SPRING_OPTIONS_SCALE };
  T.__workletHash = 4708505036919;
  T.__initData = __initData2;
  const animatedStyle = tmp2Result6.useAnimatedStyle(T);
  const obj4 = { style: null, children: children.children };
  const items2 = [tmp.avatarContainer, animatedStyle];
  obj4.style = items2;
  return sharedValue2(translateX(translateY[11]).View, obj4);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((count) => {
  const cResult = c.c(9);
  count = count.count;
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GroupAvatar");
  const tmp5 = closure_12();
  let str = "text-sm/semibold";
  if (manaTypeConsolidationExperiment) {
    str = "text-sm/semibold";
    if (count < 100) {
      str = "experimental/body-md/semibold";
    }
  }
  if (cResult[0] === count) {
    if (cResult[1] === str) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === tmp5.overflowCount) {
      if (cResult[4] === tmp6) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === tmp5.avatarWrapper) {
        if (cResult[7] === tmp8) {
          let tmp12 = cResult[8];
        }
        return tmp12;
      }
      const obj3 = { style: tmp5.avatarWrapper, children: tmp8 };
      const tmp15 = animateOnMount(View, obj3);
      cResult[6] = tmp5.avatarWrapper;
      cResult[7] = tmp8;
      cResult[8] = tmp15;
      tmp12 = tmp15;
    }
    const obj4 = { style: tmp5.overflowCount, children: tmp6 };
    const tmp11 = animateOnMount(View, obj4);
    cResult[3] = tmp5.overflowCount;
    cResult[4] = tmp6;
    cResult[5] = tmp11;
    tmp8 = tmp11;
  }
  const obj5 = { variant: str, children: null };
  const items = ["+", count];
  obj5.children = items;
  const tmp7 = React5(Text_Text.Text, obj5);
  cResult[0] = count;
  cResult[1] = str;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((count) => {
  count = count.count;
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GroupAvatar");
  const tmp2 = closure_12();
  const obj2 = { style: tmp2.avatarWrapper, children: null };
  const obj3 = { style: tmp2.overflowCount, children: null };
  let str = "text-sm/semibold";
  if (manaTypeConsolidationExperiment) {
    str = "text-sm/semibold";
    if (count < 100) {
      str = "experimental/body-md/semibold";
    }
  }
  const obj4 = { variant: str, children: null };
  const items = ["+", count];
  obj4.children = items;
  obj3.children = React5(Text_Text.Text, obj4);
  obj2.children = animateOnMount(View, obj3);
  return animateOnMount(View, obj2);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ guildId, user } = arg0);
  let avatarWrapper = closure_12();
  if (cResult[0] === guildId) {
    if (cResult[1] === user) {
      let tmp3 = cResult[2];
    }
    if (null == tmp3) {
      return null;
    } else {
      if (cResult[3] === tmp3) {
        if (cResult[4] === avatarWrapper.avatar) {
          let tmp6 = cResult[5];
        }
        if (cResult[6] === avatarWrapper.avatarWrapper) {
        }
        const obj2 = { style: avatarWrapper.avatarWrapper, children: tmp6 };
        const tmp13 = animateOnMount(View, obj2);
        avatarWrapper = avatarWrapper.avatarWrapper;
        cResult[6] = avatarWrapper;
        cResult[7] = tmp6;
        cResult[8] = tmp13;
      }
      const obj3 = { style: avatarWrapper.avatar, source: tmp3 };
      const tmp9 = animateOnMount(FastImageDefault, obj3);
      cResult[3] = tmp3;
      cResult[4] = avatarWrapper.avatar;
      cResult[5] = tmp9;
      tmp6 = tmp9;
    }
  }
  let avatarSource;
  if (user != null) {
    avatarSource = user.getAvatarSource(guildId, false, 32);
  }
  cResult[0] = guildId;
  cResult[1] = user;
  cResult[2] = avatarSource;
  tmp3 = avatarSource;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const user = guildId.user;
  const tmp = closure_12();
  const items = [guildId, user];
  const memo = noop.useMemo(() => {
    let avatarSource;
    if (user != null) {
      avatarSource = user.getAvatarSource(guildId, false, 32);
    }
    return avatarSource;
  }, items);
  let tmp3 = null;
  if (null != memo) {
    const obj = { style: tmp.avatarWrapper, children: null };
    const obj2 = { style: tmp.avatar, source: memo };
    obj.children = animateOnMount(FastImageDefault, obj2);
    tmp3 = animateOnMount(View, obj);
  }
  return tmp3;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((users) => {
  const cResult = users(ref[7]).c(40);
  users = users.users;
  const guildId = users.guildId;
  const tmp4 = closure_12();
  let obj = users(ref[7]);
  const tmp = users;
  const themeContext = users(ref[8]).useThemeContext();
  ({ theme, primaryColor } = themeContext);
  if (cResult[0] === tmp4.shadowContainerBackgroundDark) {
    if (cResult[1] === tmp4.shadowContainerBackgroundLight) {
      if (cResult[2] === theme) {
        let shadowContainerBackground = cResult[3];
        ref = noop.useRef(false);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function f() {
            ref.current = true;
          };
          const items = [];
          cResult[4] = fn;
          cResult[5] = items;
          let tmp10 = items;
          let tmp9 = fn;
        } else {
          tmp9 = cResult[4];
          tmp10 = cResult[5];
        }
        const effect = noop.useEffect(tmp9, tmp10);
        const _Math = Math;
        const _Math2 = Math;
        const arr3 = items1[Math.max(Math, 0, Math.min(Math, items1.length - 1, users.length - 1))];
        noop = tmp13;
        const diff = users.length - 3;
        const View = diff;
        let num7 = 10;
        let num8 = 2;
        if (10 <= diff) {
          num8 = 1;
        }
        const tmp16 = guildId(tmp2[9])(ref);
        animateOnMount = tmp16;
        if (cResult[6] === tmp16) {
          if (cResult[7] === arr3) {
            if (cResult[8] === guildId) {
              if (cResult[9] === diff) {
                if (cResult[10] === tmp13) {
                  if (cResult[11] === num8) {
                    if (cResult[12] === users) {
                      if (null == primaryColor) {
                        shadowContainerBackground = tmp4.shadowContainerBackground;
                      }
                      if (cResult[21] === tmp4.shadowContainer) {
                        if (cResult[22] === shadowContainerBackground) {
                          let tmp22 = cResult[23];
                        }
                        if (cResult[24] === primaryColor) {
                          if (cResult[25] === tmp4.gradientDimOverlay) {
                            let tmp23 = cResult[26];
                          }
                          if (cResult[27] === tmp4.gradientContainer) {
                            if (cResult[28] === tmp23) {
                              let tmp27 = cResult[29];
                            }
                            if (cResult[30] !== tmp4.gradientImageBorder) {
                              let obj3 = { style: tmp4.gradientImageBorder };
                              const tmp34 = animateOnMount(View, obj3);
                              cResult[30] = tmp4.gradientImageBorder;
                              cResult[31] = tmp34;
                              let tmp31 = tmp34;
                            } else {
                              tmp31 = cResult[31];
                            }
                            if (cResult[32] === tmp22) {
                              if (cResult[33] === tmp27) {
                                if (cResult[34] === tmp31) {
                                  let tmp35 = cResult[35];
                                }
                                if (cResult[36] === tmp17) {
                                  if (cResult[37] === tmp4.groupContainer) {
                                    if (cResult[38] === tmp35) {
                                      let tmp39 = cResult[39];
                                    }
                                    return tmp39;
                                  }
                                }
                                const obj5 = { style: tmp4.groupContainer, children: null };
                                items1 = [tmp35, tmp17];
                                obj5.children = items1;
                                const tmp42 = closure_7(View, obj5);
                                cResult[36] = tmp17;
                                cResult[37] = tmp4.groupContainer;
                                cResult[38] = tmp35;
                                cResult[39] = tmp42;
                                tmp39 = tmp42;
                              }
                            }
                            const obj6 = { style: tmp22, children: null };
                            const items2 = [tmp27, tmp31];
                            obj6.children = items2;
                            const tmp38 = closure_7(View, obj6);
                            cResult[32] = tmp22;
                            cResult[33] = tmp27;
                            cResult[34] = tmp31;
                            cResult[35] = tmp38;
                            tmp35 = tmp38;
                          }
                          const obj7 = { style: tmp4.gradientContainer, children: tmp23 };
                          const tmp30 = animateOnMount(View, obj7);
                          cResult[27] = tmp4.gradientContainer;
                          cResult[28] = tmp23;
                          cResult[29] = tmp30;
                          tmp27 = tmp30;
                        }
                        let tmp24 = null == primaryColor;
                        if (tmp24) {
                          const obj8 = { style: tmp4.gradientDimOverlay };
                          tmp24 = animateOnMount(View, obj8);
                        }
                        cResult[24] = primaryColor;
                        cResult[25] = tmp4.gradientDimOverlay;
                        cResult[26] = tmp24;
                        tmp23 = tmp24;
                      }
                      const items3 = [tmp4.shadowContainer, shadowContainerBackground];
                      cResult[21] = tmp4.shadowContainer;
                      cResult[22] = shadowContainerBackground;
                      cResult[23] = items3;
                      tmp22 = items3;
                    }
                  }
                }
              }
            }
          }
        }
        if (cResult[14] === tmp16) {
          if (cResult[15] === guildId) {
            if (cResult[16] === diff) {
              if (cResult[17] === tmp13) {
                if (cResult[18] === num8) {
                  if (cResult[19] === users) {
                    let tmp18 = cResult[20];
                  }
                  const mapped = arr3.map(tmp18);
                  cResult[6] = tmp16;
                  cResult[7] = arr3;
                  cResult[8] = guildId;
                  cResult[9] = diff;
                  cResult[num7] = tmp13;
                  cResult[11] = num8;
                  cResult[12] = users;
                  num7 = 13;
                  cResult[13] = mapped;
                }
              }
            }
          }
        }
        class X {
          constructor(arg0, arg1) {
            tmp = users[arg1];
            if (null == tmp) {
              return null;
            } else {
              tmp2 = users;
              obj = {};
              tmp5 = obj;
              tmp3 = createElement;
              tmp4 = f62375;
              merged = Object.assign(users);
              obj.key = tmp.id;
              tmp7 = closure_6;
              obj.animateOnMount = closure_6;
              tmp8 = closure_3;
              if (!closure_3) {
                tmp10 = jsx;
                tmp11 = f62379;
                obj1 = { guildId: null, user: null };
                tmp12 = guildId;
                obj1.guildId = guildId;
                obj1.user = tmp;
                tmp13 = jsx(f62379, obj1);
                tmp3Result = tmp3(tmp4, obj, tmp13);
              } else {
                tmp9 = c5;
              }
              tmp14 = jsx;
              tmp15 = f62377;
              obj4 = { count: null };
              tmp16 = closure_4;
              obj4.count = closure_4;
              tmp13 = jsx(f62377, obj4);
            }
            return;
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
  }
  let obj2 = users(ref[8]);
  const tmpResult = tmp(ref[8]);
  cResult[0] = tmp4.shadowContainerBackgroundDark;
  cResult[1] = tmp4.shadowContainerBackgroundLight;
  cResult[2] = theme;
  cResult[3] = tmp(ref[8]).isThemeLight(theme) ? tmp4.shadowContainerBackgroundLight : tmp4.shadowContainerBackgroundDark;
  const tmp6 = tmp(ref[8]).isThemeLight(theme) ? tmp4.shadowContainerBackgroundLight : tmp4.shadowContainerBackgroundDark;
}) : ((users) => {
  users = users.users;
  const guildId = users.guildId;
  let ref;
  noop = undefined;
  const tmp = closure_12();
  const themeContext = users(ref[8]).useThemeContext();
  ({ primaryColor, theme } = themeContext);
  let obj = users(ref[8]);
  const tmp2 = ref;
  let shadowContainerBackground = users(ref[8]).isThemeLight(theme) ? tmp.shadowContainerBackgroundLight : tmp.shadowContainerBackgroundDark;
  ref = noop.useRef(false);
  const effect = noop.useEffect(() => {
    ref.current = true;
  }, []);
  let obj2 = users(ref[8]);
  noop = users.length > 4;
  const diff = users.length - 3;
  c4 = diff;
  animateOnMount = guildId(tmp2[9])(ref);
  let obj3 = { style: tmp.groupContainer, children: null };
  const items = [tmp.shadowContainer, ];
  const mapped = items1[Math.max(Math, 0, Math.min(Math, items1.length - 1, users.length - 1))].map((item, index) => {
    if (null == users[index]) {
      return null;
    } else {
      const obj = {};
      const merged = Object.assign(item);
      obj.key = tmp.id;
      obj.animateOnMount = animateOnMount;
      if (!closure_3) {
        const obj2 = { guildId, user: tmp };
        let tmp13 = animateOnMount(closure_18, obj2);
        <closure_16 {......obj}>{tmp13}</closure_16>;
      }
      const obj3 = { count };
      tmp13 = animateOnMount(closure_17, obj3);
    }
  });
  if (null == primaryColor) {
    shadowContainerBackground = tmp.shadowContainerBackground;
  }
  const obj4 = { style: items, children: null };
  items[1] = shadowContainerBackground;
  const obj5 = { style: tmp.gradientContainer, children: null };
  let tmp10Result = null == primaryColor;
  if (tmp10Result) {
    const obj6 = { style: tmp.gradientDimOverlay };
    tmp10Result = tmp10(tmp9, obj6);
  }
  obj5.children = tmp10Result;
  items1 = [animateOnMount(c4, obj5), animateOnMount(c4, { style: tmp.gradientImageBorder })];
  obj4.children = items1;
  const items2 = [closure_7(c4, obj4), mapped];
  obj3.children = items2;
  return closure_7(c4, obj3);
});