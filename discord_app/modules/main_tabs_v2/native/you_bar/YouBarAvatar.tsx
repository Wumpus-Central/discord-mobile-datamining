// === Module 16325: YouBarAvatar ===

// Module 16325 (YouBarAvatar)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import native2 from "native" /* 4589 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6140 */;
import ClipView from "ClipView" /* 8469 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5438 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const YouBarConstants = fn(14895);
({ YOU_BAR_AVATAR_LARGE_SIZE: closure_11, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: closure_12, YOU_BAR_AVATAR_SIZE: map1, YOU_BAR_STATUS_INSET: closure_14, YOU_BAR_HEIGHT: closure_15, YOU_BAR_LARGE_STATUS_SIZE: closure_16, YOU_BAR_PADDING: closure_17, YOU_BAR_SPRING_CONFIG: closure_18, YOU_BAR_STATUS_OFFSET: closure_19, YOU_BAR_AVATAR_LARGE_PX: closure_20 } = YouBarConstants);
const StatusTypes = fn(1085).StatusTypes;
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23 } = jsxProd);
const createStyles = fn(4890);
let obj = { avatarShadow: null };
let merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
obj.avatarShadow = {};
let closure_24 = createStyles.createStyles(obj);
const __initData = { code: "function YouBarAvatarTsx1(){const{withSpring,scale,YOU_BAR_SPRING_CONFIG,left,top,opacity,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{transform:[{scale:withSpring(scale.get(),YOU_BAR_SPRING_CONFIG)}],left:withSpring(left.get(),YOU_BAR_SPRING_CONFIG),top:withSpring(top.get(),YOU_BAR_SPRING_CONFIG),opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,\"respect-motion-settings\",function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
let closure_26 = { code: "function YouBarAvatarTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
const __initData2 = { code: "function YouBarAvatarTsx3(){const{withSpring,scale,YOU_BAR_SPRING_CONFIG,left,top,opacity,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{transform:[{scale:withSpring(scale.get(),YOU_BAR_SPRING_CONFIG)}],left:withSpring(left.get(),YOU_BAR_SPRING_CONFIG),top:withSpring(top.get(),YOU_BAR_SPRING_CONFIG),opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
const __initData3 = { code: "function YouBarAvatarTsx4(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
let ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((transitionState) => {
  const cResult = transitionState(576).c(47);
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  const tmp4 = closure_24();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SelfPresenceStore];
    let fn = function o() {
      return status.getStatus();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = transitionState(576);
  const stateFromStores = transitionState(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class U {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
    cResult[2] = items1;
    cResult[3] = U;
    let tmp10 = U;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = transitionState(504);
  const stateFromStores1 = transitionState(504).useStateFromStores(tmp9, tmp10);
  let result = tmp(1188).AVATAR_SIZE_MAP[closure_13] / height;
  dependencyMap = result;
  let result1 = (height - tmp(1188).AVATAR_SIZE_MAP[closure_13]) / 2;
  const tmp16 = transitionState === transitionState(4589).TransitionStates.MOUNTED;
  const tmpResult10 = transitionState(504);
  let num5 = 0;
  if (tmp16) {
    num5 = 1;
  }
  const sharedValue = transitionState(4612).useSharedValue(num5);
  const tmpResult11 = transitionState(4612);
  let num6 = 1;
  if (!tmp16) {
    num6 = result;
  }
  const sharedValue1 = transitionState(4612).useSharedValue(num6);
  const tmpResult12 = transitionState(4612);
  if (tmp16) {
    let tmp19 = -closure_17;
  } else {
    tmp19 = -result1;
  }
  const sharedValue2 = transitionState(4612).useSharedValue(tmp19);
  const tmpResult13 = transitionState(4612);
  if (tmp16) {
    let diff = -closure_17 - (height - closure_15) / 2;
  } else {
    diff = -result1;
  }
  const sharedValue3 = transitionState(4612).useSharedValue(diff);
  if (cResult[4] === sharedValue2) {
    if (cResult[5] === sharedValue) {
      if (cResult[6] === sharedValue1) {
        if (cResult[7] === sharedValue3) {
          if (cResult[8] === transitionState) {
            let tmp26 = cResult[9];
            let tmp27 = cResult[10];
          }
          const effect = sharedValue1.useEffect(tmp26, tmp27);
          class U {
            constructor() {
              return closure_1_10.getCurrentUser();
            }
          }
          const avatarDecoration = obj8.useAvatarDecoration(stateFromStores1);
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const items2 = [AccessibilityStore];
            class K {
              constructor() {
                return closure_1_8.animateYouBarAvatarDeco;
              }
            }
            cResult[11] = items2;
            cResult[12] = K;
            let tmp32 = K;
            let tmp31 = items2;
          } else {
            tmp31 = cResult[11];
            tmp32 = cResult[12];
          }
          const stateFromStores2 = tmp(504).useStateFromStores(tmp31, tmp32);
          let OFFLINE = stateFromStores;
          if (stateFromStores === StatusTypes.UNKNOWN) {
            OFFLINE = StatusTypes.OFFLINE;
          }
          if (null == OFFLINE) {
            tmp(4612);
            function et() {
              const rect = { transform: null, left: null, top: null, opacity: null };
              let obj = { scale: spring.withSpring(sharedValue1.get(), YOU_BAR_SPRING_CONFIG) };
              const items = [obj];
              rect.transform = items;
              rect.left = spring.withSpring(sharedValue2.get(), YOU_BAR_SPRING_CONFIG);
              rect.top = spring.withSpring(sharedValue3.get(), YOU_BAR_SPRING_CONFIG);
              value = sharedValue.get();
              const fn = function t(arg0) {
                let tmp = arg0;
                if (arg0) {
                  tmp = closure_1_0 === transitionState(result[16]).TransitionStates.YEETED;
                }
                if (tmp) {
                  transitionState(result[17]).runOnJS(cleanup)();
                  const obj = transitionState(result[17]);
                }
              };
              const obj6 = spring;
              fn.__closure = { transitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanup };
              fn.__workletHash = 9945521131664;
              fn.__initData = __initData;
              rect.opacity = obj6.withSpring(value, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn);
              return rect;
            }
            let rect = { withSpring: null, scale: null, YOU_BAR_SPRING_CONFIG: null, left: null, top: null, opacity: null, transitionState: null, TransitionStates: null, runOnJS: null, cleanup: null };
            class K {
              constructor() {
                return closure_1_8.animateYouBarAvatarDeco;
              }
            }
            rect.withSpring = tmp(5597).withSpring;
            rect.scale = sharedValue1;
            rect.YOU_BAR_SPRING_CONFIG = YOU_BAR_SPRING_CONFIG;
            rect.left = sharedValue2;
            rect.top = sharedValue3;
            rect.opacity = sharedValue;
            rect.transitionState = transitionState;
            rect.TransitionStates = tmp(4589).TransitionStates;
            rect.runOnJS = tmp(4612).runOnJS;
            rect.cleanup = cleanup;
            et.__closure = rect;
            et.__workletHash = 15831722009842;
            et.__initData = __initData;
            const tmp45Result = tmp45(et);
            const token = tmp(4580).useToken(cleanup(587).colors.MOBILE_FLOATINGBAR_BACKGROUND);
            const tmpResult17 = tmp(4580);
            const token1 = tmp(4580).useToken(cleanup(587).colors.BORDER_SUBTLE);
            if (null == stateFromStores1) {
              return null;
            } else {
              const _Symbol3 = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                size = { position: "absolute", width: height, height };
                class K {
                  constructor() {
                    return closure_1_8.animateYouBarAvatarDeco;
                  }
                }
                cResult[14] = size;
                let tmp52 = size;
              } else {
                tmp52 = cResult[14];
              }
              class K {
                constructor() {
                  return closure_1_8.animateYouBarAvatarDeco;
                }
              }
              const items3 = [tmp4.avatarShadow, tmp52, tmp45Result];
              cResult[15] = tmp45Result;
              cResult[16] = tmp4.avatarShadow;
              cResult[17] = items3;
            }
            const tmpResult18 = tmp(4580);
          } else {
            let result2 = closure_16 / 2;
            let sum = result2 + tmp(1188).STATUS_PADDING;
            class K {
              constructor() {
                return closure_1_8.animateYouBarAvatarDeco;
              }
            }
            let num9 = closure_16 / 4;
            const _Symbol2 = Symbol;
            const diff1 = height - sum;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const diff2 = diff1 - num9 * 2;
              const obj2 = { nativeCutouts: null };
              const point = { shape: null, x: null, y: null, size: null };
              class K {
                constructor() {
                  return closure_1_8.animateYouBarAvatarDeco;
                }
              }
              point.x = diff2 + closure_19;
              point.y = diff2 + closure_19;
              point.size = 2 * sum;
              sum = [point];
              obj2.nativeCutouts = sum;
              num9 = 13;
              cResult[13] = obj2;
            }
          }
          const tmpResult15 = tmp(504);
        }
      }
    }
  }
  class J {
    constructor() {
      tmp = transitionState === closure_0(closure_2[16]).TransitionStates.YEETED;
      num = 1;
      num2 = 1;
      tmp2 = closure_4;
      if (tmp) {
        num2 = 0;
      }
      result = closure_4.set(num2);
      tmp4 = closure_5;
      if (tmp) {
        num = closure_2;
      }
      result1 = closure_5.set(num);
      tmp6 = closure_6;
      if (tmp) {
        tmp9 = closure_3;
        tmp8 = -closure_3;
      } else {
        tmp7 = YOU_BAR_PADDING;
        tmp8 = -YOU_BAR_PADDING;
      }
      result2 = closure_6.set(tmp8);
      tmp11 = closure_7;
      if (tmp) {
        tmp16 = closure_3;
        diff = -closure_3;
      } else {
        tmp12 = YOU_BAR_PADDING;
        tmp13 = YOU_BAR_AVATAR_LARGE_PX;
        tmp14 = YOU_BAR_HEIGHT;
        num3 = 2;
        diff = -YOU_BAR_PADDING - (YOU_BAR_AVATAR_LARGE_PX - YOU_BAR_HEIGHT) / 2;
      }
      result3 = closure_7.set(diff);
      return;
    }
  }
  const items4 = [transitionState, sharedValue, sharedValue1, sharedValue2, sharedValue3, result, result1];
  cResult[4] = sharedValue2;
  cResult[5] = sharedValue;
  cResult[6] = sharedValue1;
  cResult[7] = sharedValue3;
  cResult[8] = transitionState;
  cResult[9] = J;
  cResult[10] = items4;
  tmp27 = items4;
  tmp26 = J;
  const tmpResult14 = transitionState(4612);
}) : ((transitionState) => {
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  let OFFLINE;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let tmp = closure_24();
  let items = [SelfPresenceStore];
  OFFLINE = transitionState(OFFLINE[14]).useStateFromStores(items, () => status.getStatus());
  let obj = transitionState(OFFLINE[14]);
  const items1 = [UserStore];
  const stateFromStores = transitionState(OFFLINE[14]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  let result = transitionState(OFFLINE[15]).AVATAR_SIZE_MAP[closure_13] / height;
  c3 = result;
  let result1 = (height - transitionState(OFFLINE[15]).AVATAR_SIZE_MAP[closure_13]) / 2;
  let tmp8 = transitionState === transitionState(OFFLINE[16]).TransitionStates.MOUNTED;
  const obj2 = transitionState(OFFLINE[14]);
  let num = 0;
  if (tmp8) {
    num = 1;
  }
  sharedValue = transitionState(OFFLINE[17]).useSharedValue(num);
  let obj3 = transitionState(OFFLINE[17]);
  let num2 = 1;
  if (!tmp8) {
    num2 = result;
  }
  sharedValue1 = transitionState(OFFLINE[17]).useSharedValue(num2);
  const tmp2Result = transitionState(OFFLINE[17]);
  if (tmp8) {
    let tmp11 = -closure_17;
  } else {
    tmp11 = -result1;
  }
  sharedValue2 = transitionState(OFFLINE[17]).useSharedValue(tmp11);
  const tmp2Result13 = transitionState(OFFLINE[17]);
  if (tmp8) {
    let diff = -closure_17 - (height - closure_15) / 2;
  } else {
    diff = -result1;
  }
  sharedValue3 = transitionState(OFFLINE[17]).useSharedValue(diff);
  const items2 = [transitionState, sharedValue, sharedValue1, sharedValue2, sharedValue3, result, result1];
  const effect = sharedValue.useEffect(() => {
    const tmp = transitionState === native2.TransitionStates.YEETED;
    let num = 1;
    let num2 = 1;
    if (tmp) {
      num2 = 0;
    }
    const result = sharedValue.set(num2);
    if (tmp) {
      num = c3;
    }
    result1 = sharedValue1.set(num);
    if (tmp) {
      let tmp8 = -result1;
    } else {
      tmp8 = -constants;
    }
    const result2 = sharedValue2.set(tmp8);
    if (tmp) {
      let diff = -result1;
    } else {
      diff = -constants - (closure_2_20 - closure_2_15) / 2;
    }
    const result3 = sharedValue3.set(diff);
  }, items2);
  const tmp2Result14 = transitionState(OFFLINE[17]);
  const avatarDecoration = transitionState(OFFLINE[18]).useAvatarDecoration(stateFromStores);
  const tmp2Result15 = transitionState(OFFLINE[18]);
  const items3 = [sharedValue3];
  const items4 = [OFFLINE];
  const stateFromStores1 = transitionState(OFFLINE[14]).useStateFromStores(items3, () => sharedValue3.animateYouBarAvatarDeco);
  const memo = sharedValue.useMemo(() => {
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    if (null != OFFLINE) {
      const result = statusSizeOverride / 2;
      const sum = result + native.STATUS_PADDING;
      const diff = closure_2_20 - sum - statusSizeOverride / 4 * 2;
      const obj = { nativeCutouts: null };
      const point = { shape: ClipView.CutoutShape.Circle, x: diff + closure_2_19, y: diff + closure_2_19, size: 2 * sum };
      const items = [point];
      obj.nativeCutouts = items;
      return obj;
    }
  }, items4);
  const tmp2Result16 = transitionState(OFFLINE[14]);
  class V {
    constructor() {
      rect = { transform: null, left: null, top: null, opacity: null };
      obj1 = { scale: null };
      obj3 = closure_0(closure_2[20]);
      obj1.scale = obj3.withSpring(closure_6.get(), YOU_BAR_SPRING_CONFIG);
      items = [];
      items[0] = obj1;
      rect.transform = items;
      obj4 = closure_0(closure_2[20]);
      rect.left = obj4.withSpring(closure_7.get(), YOU_BAR_SPRING_CONFIG);
      obj5 = closure_0(closure_2[20]);
      rect.top = obj5.withSpring(closure_8.get(), YOU_BAR_SPRING_CONFIG);
      obj6 = closure_0(closure_2[20]);
      value = closure_5.get();
      fn = function s(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = closure_1_0 === transitionState(OFFLINE[16]).TransitionStates.YEETED;
        }
        if (tmp) {
          transitionState(OFFLINE[17]).runOnJS(cleanup)();
          const obj = transitionState(OFFLINE[17]);
        }
      };
      obj8 = { transitionState, TransitionStates: closure_0(closure_2[16]).TransitionStates, runOnJS: closure_0(closure_2[17]).runOnJS, cleanup };
      fn.__closure = obj8;
      fn.__workletHash = 1724804022422;
      fn.__initData = closure_28;
      rect.opacity = obj6.withSpring(value, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn);
      return rect;
    }
  }
  let rect = { withSpring: tmp2(tmp3[20]).withSpring, scale: sharedValue1, YOU_BAR_SPRING_CONFIG, left: sharedValue2, top: sharedValue3, opacity: sharedValue, transitionState, TransitionStates: tmp2(tmp3[16]).TransitionStates, runOnJS: tmp2(tmp3[17]).runOnJS, cleanup };
  V.__closure = rect;
  V.__workletHash = 2104306396720;
  V.__initData = __initData2;
  const animatedStyle = transitionState(OFFLINE[17]).useAnimatedStyle(V);
  const tmp2Result17 = transitionState(OFFLINE[17]);
  const token = transitionState(OFFLINE[21]).useToken(cleanup(tmp3[11]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  transitionState(OFFLINE[21]);
  let tmp28Result = null;
  if (null != stateFromStores) {
    let obj4 = { style: null, children: null };
    const items5 = [tmp.avatarShadow, , ];
    size = { position: "absolute", width: height, height };
    items5[1] = size;
    items5[2] = animatedStyle;
    obj4.style = items5;
    let nativeCutouts;
    if (memo != null) {
      nativeCutouts = memo.nativeCutouts;
    }
    let obj5 = { cutouts: nativeCutouts, style: null, children: null };
    const size1 = { position: "absolute", width: height, height };
    obj5.style = size1;
    let obj6 = { style: null };
    const size2 = { width: height, height, borderRadius: height / 2, backgroundColor: token };
    obj6.style = size2;
    obj5.children = closure_22(sharedValue1, obj6);
    const items6 = [closure_22(tmp23(tmp3[19]), obj5), , , ];
    const obj7 = { user: stateFromStores, guildId: "Array", size, animate: true, needsOffscreenAlphaCompositing: null, status: null, statusSizeOverride: null, cutout: null, statusStyle: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH" };
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj7.status = OFFLINE;
    obj7.statusSizeOverride = statusSizeOverride;
    obj7.cutout = memo;
    const rect1 = { right: closure_14 - closure_19, bottom: closure_14 - closure_19 };
    obj7.statusStyle = rect1;
    items6[1] = closure_22(tmp2(tmp3[15]).Avatar, obj7);
    let mapped;
    const tmp23Result = tmp23(tmp3[19]);
    const tmp32 = sharedValue1;
    if (memo != null) {
      const nativeCutouts1 = memo.nativeCutouts;
      if (nativeCutouts1 != null) {
        mapped = nativeCutouts1.map((item) => {
          const obj = {};
          const merged = Object.assign(item);
          obj.x = item.x + 1;
          obj.y = item.y + 1;
          return obj;
        });
      }
    }
    const obj8 = { cutouts: mapped, style: null, pointerEvents: "none", children: null };
    const size3 = { position: "absolute", top: -1, left: -1, width: height + 2, height: height + 2 };
    obj8.style = size3;
    const obj9 = { style: null };
    const size4 = { width: height + 2, height: height + 2, borderRadius: (height + 2) / 2, borderWidth: 1, borderColor: tmp26 };
    obj9.style = size4;
    obj8.children = closure_22(tmp32, obj9);
    items6[2] = closure_22(tmp23(tmp3[19]), obj8);
    let tmp29Result = null != avatarDecoration;
    if (tmp29Result) {
      const obj10 = { size: null, avatarDecoration: null, decorationStyle: null, animate: null, cutout: null };
      const tmp23Result4 = tmp23(tmp3[22]);
      obj10.size = tmp2(tmp3[23]).getDecorationSizeForAvatarSize(tmp33);
      obj10.avatarDecoration = avatarDecoration;
      const rect2 = { position: "absolute", top: null, left: null };
      const tmp2Result20 = tmp2(tmp3[23]);
      rect2.top = -tmp2(tmp3[23]).getDecorationSizeForAvatarSize(tmp33) - height / 2;
      const tmp2Result21 = tmp2(tmp3[23]);
      rect2.left = -tmp2(tmp3[23]).getDecorationSizeForAvatarSize(tmp33) - height / 2;
      obj10.decorationStyle = rect2;
      obj10.animate = stateFromStores1 && "always";
      const tmp2Result22 = tmp2(tmp3[23]);
      const tmp2Result23 = tmp2(tmp3[23]);
      obj10.cutout = tmp2Result23.getDecorationCutoutForAvatarCutout(memo, (tmp2(tmp3[23]).getDecorationSizeForAvatarSize(tmp33) - height) / 2);
      tmp29Result = closure_22(tmp23Result4, obj10, avatarDecoration.asset);
      const tmp2Result24 = tmp2(tmp3[23]);
    }
    items6[3] = tmp29Result;
    obj4.children = items6;
    tmp28Result = closure_23(tmp23(tmp3[17]).View, obj4);
    const tmp23Result3 = tmp23(tmp3[19]);
  }
  return tmp28Result;
});
const __initData4 = { code: "function YouBarAvatarTsx5(){const{withSpring,opacity,YOU_BAR_SPRING_CONFIG,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,\"respect-motion-settings\",function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
let closure_31 = { code: "function YouBarAvatarTsx6(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
const __initData5 = { code: "function YouBarAvatarTsx7(){const{withSpring,opacity,YOU_BAR_SPRING_CONFIG,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
let closure_33 = { code: "function YouBarAvatarTsx8(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((transitionState) => {
  const cResult = transitionState(sharedValue[13]).c(18);
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelfPresenceStore];
    let fn = function o() {
      return status.getStatus();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = transitionState(sharedValue[13]);
  let OFFLINE = transitionState(sharedValue[14]).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class A {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
    cResult[2] = items1;
    cResult[3] = A;
    let tmp8 = A;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = transitionState(sharedValue[14]);
  const stateFromStores = transitionState(sharedValue[14]).useStateFromStores(tmp7, tmp8);
  const tmpResult5 = transitionState(sharedValue[14]);
  const avatarDecoration = transitionState(sharedValue[18]).useAvatarDecoration(stateFromStores);
  const tmpResult6 = transitionState(sharedValue[18]);
  let num5 = 0;
  if (transitionState === transitionState(sharedValue[16]).TransitionStates.MOUNTED) {
    num5 = 1;
  }
  sharedValue = transitionState(sharedValue[17]).useSharedValue(num5);
  const tmpResult7 = transitionState(sharedValue[17]);
  const fn2 = function f() {
    let obj = { opacity: null };
    value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1_0 === transitionState(sharedValue[16]).TransitionStates.YEETED;
      }
      if (tmp) {
        transitionState(sharedValue[17]).runOnJS(cleanup)();
        const obj = transitionState(sharedValue[17]);
      }
    };
    const obj2 = spring;
    fn.__closure = { transitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanup };
    fn.__workletHash = 3177753318036;
    fn.__initData = __initData;
    obj.opacity = obj2.withSpring(value, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn);
    return obj;
  };
  const tmpResult8 = transitionState(sharedValue[17]);
  fn2.__closure = { withSpring: transitionState(sharedValue[20]).withSpring, opacity: sharedValue, YOU_BAR_SPRING_CONFIG, transitionState, TransitionStates: transitionState(sharedValue[16]).TransitionStates, runOnJS: transitionState(sharedValue[17]).runOnJS, cleanup };
  fn2.__workletHash = 4340569091331;
  fn2.__initData = __initData4;
  const animatedStyle = tmpResult8.useAnimatedStyle(fn2);
  if (cResult[4] === sharedValue) {
    if (cResult[5] === transitionState) {
      let tmp14 = cResult[6];
      let tmp15 = cResult[7];
    }
    const effect = noop.useEffect(tmp14, tmp15);
    class A {
      constructor() {
        return closure_1_10.getCurrentUser();
      }
    }
    if (null == stateFromStores) {
      return null;
    } else {
      class A {
        constructor() {
          return closure_1_10.getCurrentUser();
        }
      }
      const _Symbol = Symbol;
      let result = (tmp(tmp2[15]).AVATAR_SIZE_MAP[size] - tmp(tmp2[15]).AVATAR_SIZE_MAP[closure_12]) / 2;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const rect = { position: "absolute", top: -result, left: null };
        class A {
          constructor() {
            return closure_1_10.getCurrentUser();
          }
        }
        cResult[8] = rect;
        let tmp18 = rect;
      } else {
        tmp18 = cResult[8];
      }
      if (cResult[9] !== animatedStyle) {
        const items2 = [tmp18, animatedStyle];
        class A {
          constructor() {
            return closure_1_10.getCurrentUser();
          }
        }
        cResult[9] = animatedStyle;
        cResult[10] = items2;
        let tmp19 = items2;
      } else {
        tmp19 = cResult[10];
      }
      if (OFFLINE === StatusTypes.UNKNOWN) {
        OFFLINE = StatusTypes.OFFLINE;
      }
      if (cResult[11] === avatarDecoration) {
        if (cResult[12] === OFFLINE) {
          if (cResult[13] === stateFromStores) {
            let tmp20 = cResult[14];
          }
          if (cResult[15] === tmp20) {
            if (cResult[16] === tmp19) {
              let tmp23 = cResult[17];
            }
            return tmp23;
          }
          class A {
            constructor() {
              return closure_1_10.getCurrentUser();
            }
          }
          const obj3 = { style: tmp19, children: tmp20 };
          const tmp25 = closure_22(cleanup(tmp2[17]).View, obj3);
          cResult[15] = tmp20;
          cResult[16] = tmp19;
          cResult[17] = tmp25;
          tmp23 = tmp25;
        }
      }
      const obj4 = { user: stateFromStores, guildId: "Array", size, animate: true, needsOffscreenAlphaCompositing: null, avatarDecoration, status: OFFLINE, autoStatusCutout: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==" };
      const tmp22 = closure_22(tmp(tmp2[15]).Avatar, obj4);
      cResult[11] = avatarDecoration;
      cResult[12] = OFFLINE;
      cResult[13] = stateFromStores;
      cResult[14] = tmp22;
      tmp20 = tmp22;
    }
  }
  const fn3 = function v() {
    let num = 1;
    if (transitionState === native2.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  };
  const items3 = [sharedValue, transitionState];
  cResult[4] = sharedValue;
  cResult[5] = transitionState;
  cResult[6] = fn3;
  cResult[7] = items3;
  tmp15 = items3;
  tmp14 = fn3;
  let obj2 = { withSpring: transitionState(sharedValue[20]).withSpring, opacity: sharedValue, YOU_BAR_SPRING_CONFIG, transitionState, TransitionStates: transitionState(sharedValue[16]).TransitionStates, runOnJS: transitionState(sharedValue[17]).runOnJS, cleanup };
}) : ((transitionState) => {
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  let sharedValue;
  const items = [SelfPresenceStore];
  let OFFLINE = transitionState(sharedValue[14]).useStateFromStores(items, () => status.getStatus());
  let obj = transitionState(sharedValue[14]);
  const items1 = [UserStore];
  const stateFromStores = transitionState(sharedValue[14]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  let obj2 = transitionState(sharedValue[14]);
  const avatarDecoration = transitionState(sharedValue[18]).useAvatarDecoration(stateFromStores);
  const obj3 = transitionState(sharedValue[18]);
  let num = 0;
  if (transitionState === transitionState(sharedValue[16]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = transitionState(sharedValue[17]).useSharedValue(num);
  const obj4 = transitionState(sharedValue[17]);
  let fn = function o() {
    let obj = { opacity: null };
    value = sharedValue.get();
    const fn = function s(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1_0 === transitionState(sharedValue[16]).TransitionStates.YEETED;
      }
      if (tmp) {
        transitionState(sharedValue[17]).runOnJS(cleanup)();
        const obj = transitionState(sharedValue[17]);
      }
    };
    const obj2 = spring;
    fn.__closure = { transitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanup };
    fn.__workletHash = 15015748930202;
    fn.__initData = __initData;
    obj.opacity = obj2.withSpring(value, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn);
    return obj;
  };
  const tmpResult = transitionState(sharedValue[17]);
  fn.__closure = { withSpring: transitionState(sharedValue[20]).withSpring, opacity: sharedValue, YOU_BAR_SPRING_CONFIG, transitionState, TransitionStates: transitionState(sharedValue[16]).TransitionStates, runOnJS: transitionState(sharedValue[17]).runOnJS, cleanup };
  fn.__workletHash = 15009979552705;
  fn.__initData = __initData5;
  const items2 = [sharedValue, transitionState];
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    let num = 1;
    if (transitionState === native2.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    let result = (tmp(tmp2[15]).AVATAR_SIZE_MAP[size2] - tmp(tmp2[15]).AVATAR_SIZE_MAP[closure_12]) / 2;
    const obj6 = { style: null, children: null };
    const rect = { position: "absolute", top: -result, left: -result };
    const items3 = [rect, animatedStyle];
    obj6.style = items3;
    const obj7 = { user: stateFromStores, guildId: "Array", size: size2, animate: true, needsOffscreenAlphaCompositing: null, avatarDecoration, status: true, autoStatusCutout: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==" };
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj7.status = OFFLINE;
    obj6.children = closure_22(tmp(tmp2[15]).Avatar, obj7);
    return closure_22(cleanup(tmp2[17]).View, obj6);
  }
  const obj5 = { withSpring: transitionState(sharedValue[20]).withSpring, opacity: sharedValue, YOU_BAR_SPRING_CONFIG, transitionState, TransitionStates: transitionState(sharedValue[16]).TransitionStates, runOnJS: transitionState(sharedValue[17]).runOnJS, cleanup };
});
const __initData6 = { code: "function YouBarAvatarTsx9(){const{withSpring,isAvatarPressed,YOU_BAR_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isAvatarPressed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_36 = { code: "function YouBarAvatarTsx10(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(false);}" };
let closure_37 = { code: "function YouBarAvatarTsx11(){const{runOnJS,handleAvatarLongPress}=this.__closure;runOnJS(handleAvatarLongPress)();}" };
let closure_38 = { code: "function YouBarAvatarTsx12(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(true);}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatar.tsx");

export default noop.memo(function YouBarAvatarAnimated(isLargeAvatar) {
  isLargeAvatar = isLargeAvatar.isLargeAvatar;
  const onPress = isLargeAvatar.onPress;
  let isAvatarPressed;
  let callback1;
  let items = [UserStore];
  const stateFromStores = isLargeAvatar(isAvatarPressed[14]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp4 = callback1(noop.useState(false), 2);
  isAvatarPressed = tmp4[0];
  asyncGeneratorStep = tmp4[1];
  let obj = isLargeAvatar(isAvatarPressed[14]);
  let fn = function c() {
    let num = 1;
    if (first) {
      num = 0.98;
    }
    const obj2 = { transform: null };
    const items = [{ scale: spring.withSpring(num, YOU_BAR_SPRING_CONFIG) }];
    obj2.transform = items;
    return obj2;
  };
  let obj2 = isLargeAvatar(isAvatarPressed[17]);
  fn.__closure = { withSpring: isLargeAvatar(isAvatarPressed[20]).withSpring, isAvatarPressed, YOU_BAR_SPRING_CONFIG };
  fn.__workletHash = 10695878322078;
  fn.__initData = __initData6;
  const items1 = [onPress];
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const callback = noop.useCallback(() => {
    if (onPress != null) {
      tmp();
    }
    setIsAvatarPressed(false);
  }, items1);
  callback1 = noop.useCallback(asyncGeneratorStep(async () => {
    if (paths === 2) {
      paths = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        paths = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            paths = 3;
            throw value;
          } else if (arg0 === 2) {
            paths = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const result = tmp4(paths[24]).triggerHapticFeedback(tmp4(paths[24]).HapticFeedbackTypes.SOFT);
            c1 = 1;
            paths = 1;
            const obj5 = { value: tmp4(paths[26])(paths[25], paths.paths), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          paths = 3;
          throw value;
        } else if (arg0 === 2) {
          paths = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          value.openUserSettings();
          closure_128_3(false);
          paths = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp12) {
        paths = tmp;
        throw tmp12;
      }
    }
  }), []);
  const items2 = [callback1];
  const memo = noop.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const result = Gesture.LongPress().shouldCancelWhenOutside(false);
    const fn = function s() {
      isLargeAvatar(first[17]).runOnJS(setIsAvatarPressed)(true);
    };
    const LongPressResult = Gesture.LongPress();
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setIsAvatarPressed };
    fn.__workletHash = 6986980260896;
    fn.__initData = __initData3;
    const obj = { runOnJS: ReanimatedRexport.runOnJS, setIsAvatarPressed };
    const fn2 = function n() {
      isLargeAvatar(first[17]).runOnJS(callback1)();
    };
    const onBeginResult = result.onBegin(fn);
    fn2.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleAvatarLongPress: callback1 };
    fn2.__workletHash = 8256761838005;
    fn2.__initData = __initData2;
    const obj2 = { runOnJS: ReanimatedRexport.runOnJS, handleAvatarLongPress: callback1 };
    const fn3 = function t() {
      isLargeAvatar(first[17]).runOnJS(setIsAvatarPressed)(false);
    };
    const onStartResult = onBeginResult.onStart(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport.runOnJS, setIsAvatarPressed };
    fn3.__workletHash = 131847878889;
    fn3.__initData = __initData;
    return onStartResult.onFinalize(fn3);
  }, items2);
  [][0] = isLargeAvatar;
  const callback2 = noop.useCallback((arg0, arg1, transitionState, cleanup) => closure_1_22(arg1 ? closure_1_29 : closure_1_34, { transitionState, cleanup }, arg0), []);
  let tmp12 = null;
  if (null != stateFromStores) {
    let obj4 = { gesture: memo, children: null };
    let obj5 = {
      onPress: callback,
      onPressIn() {
          return setIsAvatarPressed(true);
        },
      onPressOut() {
          return setIsAvatarPressed(false);
        },
      android_ripple: { color: "transparent" },
      children: null
    };
    const obj6 = { style: null, children: null };
    size = { height: tmp(tmp2[15]).AVATAR_SIZE_MAP[closure_12], width: tmp(tmp2[15]).AVATAR_SIZE_MAP[closure_12], position: "relative" };
    const items3 = [size, animatedStyle];
    obj6.style = items3;
    const obj7 = {
      items: tmp11,
      getItemKey(arg0) {
          return arg0.toString();
        },
      renderItem: callback2
    };
    obj6.children = closure_22(tmp(tmp2[16]).TransitionGroup, obj7);
    obj5.children = closure_22(onPress(tmp2[17]).View, obj6);
    obj4.children = closure_22(closure_7, obj5);
    tmp12 = closure_22(tmp(tmp2[27]).GestureDetector, obj4);
  }
  return tmp12;
});