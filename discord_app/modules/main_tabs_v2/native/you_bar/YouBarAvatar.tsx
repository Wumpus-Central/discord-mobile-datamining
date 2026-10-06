// === Module 16369: YouBarAvatar ===

// Module 16369 (YouBarAvatar)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import native2 from "native" /* 4595 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import spring from "spring" /* 5604 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6147 */;
import ClipView from "ClipView" /* 8502 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5445 */;
import UserStore from "UserStore" /* 1377 */;
import YouBarConstants from "YouBarConstants" /* 14915 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c1, dependencyMap, obj1, set, set2, set3, set4;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_22;
let closure_23;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
({ View: metroRequire, Pressable: metroImportDefault } = react_native);
({ YOU_BAR_AVATAR_LARGE_SIZE: unpackModuleId, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: closure_12, YOU_BAR_AVATAR_SIZE: map1, YOU_BAR_STATUS_INSET: closure_14, YOU_BAR_HEIGHT: closure_15, YOU_BAR_LARGE_STATUS_SIZE: closure_16, YOU_BAR_PADDING: closure_17, YOU_BAR_SPRING_CONFIG: closure_18, YOU_BAR_STATUS_OFFSET: closure_19, YOU_BAR_AVATAR_LARGE_PX: closure_20 } = YouBarConstants);
const StatusTypes = Constants.StatusTypes;
({ jsx: closure_22, jsxs: closure_23 } = Fragment);
let createStyles = createStyles_mod;
let obj = { avatarShadow: obj2 };
obj2 = {};
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
let closure_24 = createStyles(obj);
const __initData = { code: "function YouBarAvatarTsx1(){const{withSpring,scale,YOU_BAR_SPRING_CONFIG,left,top,opacity,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{transform:[{scale:withSpring(scale.get(),YOU_BAR_SPRING_CONFIG)}],left:withSpring(left.get(),YOU_BAR_SPRING_CONFIG),top:withSpring(top.get(),YOU_BAR_SPRING_CONFIG),opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,\"respect-motion-settings\",function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
let closure_26 = { code: "function YouBarAvatarTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
const __initData2 = { code: "function YouBarAvatarTsx3(){const{withSpring,scale,YOU_BAR_SPRING_CONFIG,left,top,opacity,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{transform:[{scale:withSpring(scale.get(),YOU_BAR_SPRING_CONFIG)}],left:withSpring(left.get(),YOU_BAR_SPRING_CONFIG),top:withSpring(top.get(),YOU_BAR_SPRING_CONFIG),opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
const __initData3 = { code: "function YouBarAvatarTsx4(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((transitionState) => {
  let currentUser;
  let diff;
  let items3;
  let obj4;
  let status;
  let tmp10;
  let tmp22;
  let tmp5;
  let tmp6;
  let tmp9;
  let tmp = transitionState;
  let obj = transitionState(576);
  const cResult = obj.c(47);
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  const tmp4 = closure_24();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SelfPresenceStore];
    let fn = function o() {
      return status.getStatus();
    };
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[2] = items1;
    cResult[3] = U;
    tmp10 = U;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult10 = tmp(504);
  const stateFromStores1 = tmpResult10.useStateFromStores(tmp9, tmp10);
  const result = tmp(1188).AVATAR_SIZE_MAP[closure_13] / height;
  dependencyMap = result;
  const result1 = (height - tmp(1188).AVATAR_SIZE_MAP[closure_13]) / 2;
  const tmp16 = transitionState === tmp(4595).TransitionStates.MOUNTED;
  let num5 = 0;
  const useSharedValue = tmp(4618).useSharedValue;
  tmp(4618);
  if (tmp16) {
    num5 = 1;
  }
  const sharedValue = useSharedValue(num5);
  let num6 = 1;
  const useSharedValue2 = tmp(4618).useSharedValue;
  tmp(4618);
  if (!tmp16) {
    num6 = result;
  }
  const sharedValue2 = useSharedValue2(num6);
  const useSharedValue3 = tmp(4618).useSharedValue;
  tmp(4618);
  if (tmp16) {
    tmp22 = -closure_17;
  } else {
    tmp22 = -result1;
  }
  const sharedValue3 = useSharedValue3(tmp22);
  const useSharedValue4 = tmp(4618).useSharedValue;
  tmp(4618);
  if (tmp16) {
    diff = -closure_17 - (height - closure_15) / 2;
  } else {
    diff = -result1;
  }
  const sharedValue4 = useSharedValue4(diff);
  if (cResult[4] === sharedValue3) {
    if (cResult[5] === sharedValue) {
      if (cResult[6] === sharedValue2) {
        if (cResult[7] === sharedValue4) {
          let tmp30;
          let tmp31;
          let tmp36;
          let tmp35;
          if (cResult[8] === transitionState) {
            tmp30 = cResult[9];
            tmp31 = cResult[10];
          }
          const effect = sharedValue2.useEffect(tmp30, tmp31);
          class U {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          const avatarDecoration = obj4.useAvatarDecoration(stateFromStores1);
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const items2 = [AccessibilityStore];
            class K {
              constructor() {
                return AccessibilityStore.animateYouBarAvatarDeco;
              }
            }
            cResult[11] = items2;
            cResult[12] = K;
            tmp36 = K;
            tmp35 = items2;
          } else {
            tmp35 = cResult[11];
            tmp36 = cResult[12];
          }
          const tmpResult15 = tmp(504);
          const stateFromStores2 = tmpResult15.useStateFromStores(tmp35, tmp36);
          let OFFLINE = stateFromStores;
          if (stateFromStores === StatusTypes.UNKNOWN) {
            OFFLINE = StatusTypes.OFFLINE;
          }
          if (null != OFFLINE) {
            const result2 = closure_16 / 2;
            const sum = result2 + tmp(1188).STATUS_PADDING;
            class K {
              constructor() {
                return AccessibilityStore.animateYouBarAvatarDeco;
              }
            }
            const _Symbol2 = Symbol;
            const diff1 = height - sum;
            const result3 = closure_16 / 4;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const diff2 = diff1 - result3 * 2;
              const obj2 = { nativeCutouts: items3 };
              const point = { shape: null, x: diff2 + closure_19, y: diff2 + closure_19, size: 2 * sum };
              class K {
                constructor() {
                  return AccessibilityStore.animateYouBarAvatarDeco;
                }
              }
              items3 = [point];
              cResult[13] = obj2;
            }
          }
          function et() {
            let fn;
            let items;
            let obj3;
            let obj4;
            let obj5;
            let value;
            let withSpring;
            const rect = { transform: items, left: obj4.withSpring(sharedValue3.get(), closure_18), top: obj5.withSpring(sharedValue4.get(), closure_18), opacity: withSpring(value, closure_18, "respect-motion-settings", fn) };
            let obj = { scale: obj3.withSpring(sharedValue2.get(), closure_18) };
            items = [obj];
            obj3 = spring;
            obj4 = spring;
            obj5 = spring;
            let tmp = spring;
            withSpring = tmp.withSpring;
            value = sharedValue.get();
            fn = function t(arg0) {
              const tmp = arg0 && closure_1_0 === transitionState(dependencyMap[16]).TransitionStates.YEETED;
              if (tmp) {
                const obj = transitionState(dependencyMap[17]);
                obj.runOnJS(cleanup)();
              }
            };
            fn.__closure = { transitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanup };
            fn.__workletHash = 9945521131664;
            fn.__initData = __initData;
            ({ transitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanup });
            return rect;
          }
          let rect = { withSpring: tmp(5604).withSpring, scale: sharedValue2, YOU_BAR_SPRING_CONFIG, left: sharedValue3, top: sharedValue4, opacity: sharedValue, transitionState, TransitionStates: tmp(4595).TransitionStates, runOnJS: tmp(4618).runOnJS, cleanup };
          const useAnimatedStyle = tmp(4618).useAnimatedStyle;
          tmp(4618);
          et.__closure = rect;
          et.__workletHash = 15831722009842;
          et.__initData = __initData;
          const animatedStyle = useAnimatedStyle(et);
          const tmpResult17 = tmp(4586);
          const token = tmpResult17.useToken(cleanup(587).colors.MOBILE_FLOATINGBAR_BACKGROUND);
          const tmpResult18 = tmp(4586);
          const token1 = tmpResult18.useToken(cleanup(587).colors.BORDER_SUBTLE);
          if (null == stateFromStores1) {
            return null;
          } else {
            let tmp57;
            const _Symbol3 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              size = { position: "absolute", width: height, height };
              class K {
                constructor() {
                  return AccessibilityStore.animateYouBarAvatarDeco;
                }
              }
              cResult[14] = size;
              tmp57 = size;
            } else {
              tmp57 = cResult[14];
            }
            class K {
              constructor() {
                return AccessibilityStore.animateYouBarAvatarDeco;
              }
            }
            const items4 = [tmp4.avatarShadow, tmp57, animatedStyle];
            cResult[15] = animatedStyle;
            cResult[16] = tmp4.avatarShadow;
            cResult[17] = items4;
          }
        }
      }
    }
  }
  class J {
    constructor() {
      let diff;
      let tmp8;
      const tmp = transitionState === native2.TransitionStates.YEETED;
      let num = 1;
      let num2 = 1;
      set = sharedValue.set;
      if (tmp) {
        num2 = 0;
      }
      dependencyMap = set(num2);
      set2 = sharedValue2.set;
      if (tmp) {
        num = dependencyMap;
      }
      set2(num);
      set3 = sharedValue3.set;
      if (tmp) {
        tmp8 = -result1;
      } else {
        tmp8 = -closure_17;
      }
      set3(tmp8);
      set4 = sharedValue4.set;
      if (tmp) {
        diff = -result1;
      } else {
        diff = -closure_17 - (closure_20 - closure_15) / 2;
      }
      set4(diff);
    }
  }
  const items5 = [transitionState, sharedValue, sharedValue2, sharedValue3, sharedValue4, result, result1];
  cResult[4] = sharedValue3;
  cResult[5] = sharedValue;
  cResult[6] = sharedValue2;
  cResult[7] = sharedValue4;
  cResult[8] = transitionState;
  cResult[9] = J;
  cResult[10] = items5;
  tmp31 = items5;
  tmp30 = J;
}) : ((transitionState) => {
  let currentUser;
  let diff;
  let getDecorationCutoutForAvatarCutout;
  let items5;
  let items6;
  let obj5;
  let obj8;
  let rect1;
  let rect2;
  let size1;
  let size2;
  let size3;
  let size4;
  let status;
  let tmp14;
  let tmp2Result20;
  let tmp2Result21;
  let tmp2Result22;
  let tmp2Result24;
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  let OFFLINE;
  let sharedValue;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let tmp = closure_24();
  let obj = transitionState(OFFLINE[14]);
  let items = [SelfPresenceStore];
  OFFLINE = obj.useStateFromStores(items, () => status.getStatus());
  const obj2 = transitionState(OFFLINE[14]);
  const items1 = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let result = transitionState(OFFLINE[15]).AVATAR_SIZE_MAP[closure_13] / height;
  let c3 = result;
  const result1 = (height - transitionState(OFFLINE[15]).AVATAR_SIZE_MAP[closure_13]) / 2;
  let tmp8 = transitionState === transitionState(OFFLINE[16]).TransitionStates.MOUNTED;
  let num = 0;
  const useSharedValue = transitionState(OFFLINE[17]).useSharedValue;
  transitionState(OFFLINE[17]);
  if (tmp8) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let num2 = 1;
  const useSharedValue2 = transitionState(OFFLINE[17]).useSharedValue;
  transitionState(OFFLINE[17]);
  if (!tmp8) {
    num2 = result;
  }
  sharedValue2 = useSharedValue2(num2);
  const useSharedValue3 = transitionState(OFFLINE[17]).useSharedValue;
  transitionState(OFFLINE[17]);
  if (tmp8) {
    tmp14 = -closure_17;
  } else {
    tmp14 = -result1;
  }
  sharedValue3 = useSharedValue3(tmp14);
  const useSharedValue4 = transitionState(OFFLINE[17]).useSharedValue;
  transitionState(OFFLINE[17]);
  if (tmp8) {
    diff = -closure_17 - (height - closure_15) / 2;
  } else {
    diff = -result1;
  }
  sharedValue4 = useSharedValue4(diff);
  const items2 = [transitionState, sharedValue, sharedValue2, sharedValue3, sharedValue4, result, result1];
  const effect = sharedValue.useEffect(() => {
    let diff;
    let tmp8;
    const tmp = transitionState === native2.TransitionStates.YEETED;
    let num = 1;
    let num2 = 1;
    set = sharedValue.set;
    if (tmp) {
      num2 = 0;
    }
    const result = set(num2);
    set2 = sharedValue2.set;
    if (tmp) {
      num = c3;
    }
    set2(num);
    set3 = sharedValue3.set;
    if (tmp) {
      tmp8 = -result1;
    } else {
      tmp8 = -closure_17;
    }
    set3(tmp8);
    set4 = sharedValue4.set;
    if (tmp) {
      diff = -result1;
    } else {
      diff = -closure_17 - (closure_20 - closure_15) / 2;
    }
    set4(diff);
  }, items2);
  const tmp2Result15 = transitionState(OFFLINE[18]);
  const avatarDecoration = tmp2Result15.useAvatarDecoration(stateFromStores);
  const items3 = [sharedValue4];
  const items4 = [OFFLINE];
  const tmp2Result16 = transitionState(OFFLINE[14]);
  const stateFromStores1 = tmp2Result16.useStateFromStores(items3, () => sharedValue4.animateYouBarAvatarDeco);
  const memo = sharedValue.useMemo(() => {
    let items;
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    if (null != OFFLINE) {
      const result = closure_16 / 2;
      const sum = result + native.STATUS_PADDING;
      const diff = closure_20 - sum - closure_16 / 4 * 2;
      const obj = { nativeCutouts: items };
      const point = { shape: ClipView.CutoutShape.Circle, x: diff + closure_19, y: diff + closure_19, size: 2 * sum };
      items = [point];
      return obj;
    }
  }, items4);
  const tmp2Result17 = transitionState(OFFLINE[17]);
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
      tmp = closure_0(closure_2[20]);
      withSpring = tmp.withSpring;
      value = closure_5.get();
      fn = function s(arg0) {
        const tmp = arg0 && closure_1_0 === transitionState(OFFLINE[16]).TransitionStates.YEETED;
        if (tmp) {
          const obj = transitionState(OFFLINE[17]);
          obj.runOnJS(cleanup)();
        }
      };
      obj7 = { transitionState, TransitionStates: closure_0(closure_2[16]).TransitionStates, runOnJS: closure_0(closure_2[17]).runOnJS, cleanup };
      fn.__closure = obj7;
      fn.__workletHash = 1724804022422;
      fn.__initData = closure_28;
      rect.opacity = withSpring(value, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn);
      return rect;
    }
  }
  let rect = { withSpring: tmp2(tmp3[20]).withSpring, scale: sharedValue2, YOU_BAR_SPRING_CONFIG, left: sharedValue3, top: sharedValue4, opacity: sharedValue, transitionState, TransitionStates: tmp2(tmp3[16]).TransitionStates, runOnJS: tmp2(tmp3[17]).runOnJS, cleanup };
  V.__closure = rect;
  V.__workletHash = 2104306396720;
  V.__initData = __initData2;
  const animatedStyle = tmp2Result17.useAnimatedStyle(V);
  const tmp2Result18 = transitionState(OFFLINE[21]);
  const token = tmp2Result18.useToken(cleanup(tmp3[11]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  transitionState(OFFLINE[21]);
  let tmp32Result = null;
  if (null != stateFromStores) {
    let obj3 = { style: items5, children: items6 };
    items5 = [tmp.avatarShadow, , ];
    size = { position: "absolute", width: height, height };
    items5[1] = size;
    items5[2] = animatedStyle;
    const View = tmp27(tmp3[17]).View;
    let nativeCutouts;
    const tmp27Result = cleanup(OFFLINE[19]);
    if (memo != null) {
      nativeCutouts = memo.nativeCutouts;
    }
    let obj4 = { cutouts: nativeCutouts, style: size1, children: closure_22(sharedValue2, obj5) };
    size1 = { position: "absolute", width: height, height };
    obj5 = { style: size2 };
    size2 = { width: height, height, borderRadius: height / 2, backgroundColor: token };
    items6 = [closure_22(tmp27Result, obj4), , , ];
    const obj6 = { user: stateFromStores, guildId: "Array", size, animate: true, needsOffscreenAlphaCompositing: null, status: OFFLINE, statusSizeOverride, cutout: memo, statusStyle: rect1 };
    const Avatar = tmp2(tmp3[15]).Avatar;
    const tmp36 = sharedValue2;
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    rect1 = { right: closure_14 - closure_19, bottom: closure_14 - closure_19 };
    items6[1] = closure_22(Avatar, obj6);
    let mapped;
    const tmp27Result3 = cleanup(OFFLINE[19]);
    if (memo != null) {
      const nativeCutouts1 = memo.nativeCutouts;
      if (nativeCutouts1 != null) {
        mapped = nativeCutouts1.map((item) => {
          const obj = { x: item.x + 1, y: item.y + 1 };
          const merged = Object.assign(item);
          return obj;
        });
      }
    }
    const obj7 = { cutouts: mapped, style: size3, pointerEvents: "none", children: closure_22(tmp36, obj8) };
    size3 = { position: "absolute", top: -1, left: -1, width: height + 2, height: height + 2 };
    obj8 = { style: size4 };
    size4 = { width: height + 2, height: height + 2, borderRadius: (height + 2) / 2, borderWidth: 1, borderColor: tmp30 };
    items6[2] = closure_22(tmp27Result3, obj7);
    let tmp33Result = null != avatarDecoration;
    if (tmp33Result) {
      const obj9 = { size: tmp2Result20.getDecorationSizeForAvatarSize(size), avatarDecoration, decorationStyle: rect2, animate: stateFromStores1 && "always", cutout: getDecorationCutoutForAvatarCutout(memo, (tmp2Result24.getDecorationSizeForAvatarSize(size) - height) / 2) };
      const tmp27Result4 = cleanup(OFFLINE[22]);
      tmp2Result20 = transitionState(OFFLINE[23]);
      rect2 = { position: "absolute", top: -tmp2Result21.getDecorationSizeForAvatarSize(size) - height / 2, left: -tmp2Result22.getDecorationSizeForAvatarSize(size) - height / 2 };
      tmp2Result21 = transitionState(OFFLINE[23]);
      tmp2Result22 = transitionState(OFFLINE[23]);
      getDecorationCutoutForAvatarCutout = transitionState(OFFLINE[23]).getDecorationCutoutForAvatarCutout;
      transitionState(OFFLINE[23]);
      tmp2Result24 = transitionState(OFFLINE[23]);
      tmp33Result = closure_22(tmp27Result4, obj9, avatarDecoration.asset);
    }
    items6[3] = tmp33Result;
    tmp32Result = closure_23(View, obj3);
  }
  return tmp32Result;
});
const __initData4 = { code: "function YouBarAvatarTsx5(){const{withSpring,opacity,YOU_BAR_SPRING_CONFIG,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,\"respect-motion-settings\",function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
let closure_31 = { code: "function YouBarAvatarTsx6(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
const __initData5 = { code: "function YouBarAvatarTsx7(){const{withSpring,opacity,YOU_BAR_SPRING_CONFIG,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
let closure_33 = { code: "function YouBarAvatarTsx8(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((transitionState) => {
  let currentUser;
  let sharedValue;
  let status;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp = transitionState;
  let obj = transitionState(sharedValue[13]);
  const cResult = obj.c(18);
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelfPresenceStore];
    let fn = function o() {
      return status.getStatus();
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(sharedValue[14]);
  let OFFLINE = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class A {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[2] = items1;
    cResult[3] = A;
    tmp8 = A;
    tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult5 = tmp(sharedValue[14]);
  const stateFromStores = tmpResult5.useStateFromStores(tmp7, tmp8);
  const tmpResult6 = tmp(sharedValue[18]);
  const avatarDecoration = tmpResult6.useAvatarDecoration(stateFromStores);
  const useSharedValue = tmp(sharedValue[17]).useSharedValue;
  let num5 = 0;
  tmp(sharedValue[17]);
  if (transitionState === tmp(sharedValue[16]).TransitionStates.MOUNTED) {
    num5 = 1;
  }
  sharedValue = useSharedValue(num5);
  const fn2 = function f() {
    let fn;
    let value;
    let withSpring;
    let obj = { opacity: withSpring(value, closure_18, "respect-motion-settings", fn) };
    let tmp = spring;
    withSpring = tmp.withSpring;
    value = sharedValue.get();
    fn = function t(arg0) {
      const tmp = arg0 && closure_1_0 === transitionState(sharedValue[16]).TransitionStates.YEETED;
      if (tmp) {
        const obj = transitionState(sharedValue[17]);
        obj.runOnJS(cleanup)();
      }
    };
    fn.__closure = { transitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanup };
    fn.__workletHash = 3177753318036;
    fn.__initData = __initData;
    ({ transitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanup });
    return obj;
  };
  const tmpResult8 = tmp(sharedValue[17]);
  const obj2 = { withSpring: tmp(tmp2[20]).withSpring, opacity: sharedValue, YOU_BAR_SPRING_CONFIG, transitionState, TransitionStates: tmp(tmp2[16]).TransitionStates, runOnJS: tmp(tmp2[17]).runOnJS, cleanup };
  fn2.__closure = obj2;
  fn2.__workletHash = 4340569091331;
  fn2.__initData = __initData4;
  const animatedStyle = tmpResult8.useAnimatedStyle(fn2);
  if (cResult[4] === sharedValue) {
    let tmp15;
    let tmp16;
    if (cResult[5] === transitionState) {
      tmp15 = cResult[6];
      tmp16 = cResult[7];
    }
    const effect = react.useEffect(tmp15, tmp16);
    class A {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    if (null == stateFromStores) {
      return null;
    } else {
      let tmp19;
      let tmp20;
      const tmp28 = tmp(sharedValue[15]).AVATAR_SIZE_MAP[size];
      class A {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      const _Symbol = Symbol;
      let result = (tmp28 - tmp(tmp2[15]).AVATAR_SIZE_MAP[closure_12]) / 2;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const rect = { position: "absolute", top: -result, left: null };
        class A {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[8] = rect;
        tmp19 = rect;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] !== animatedStyle) {
        const items2 = [tmp19, animatedStyle];
        class A {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[9] = animatedStyle;
        cResult[10] = items2;
        tmp20 = items2;
      } else {
        tmp20 = cResult[10];
      }
      if (OFFLINE === StatusTypes.UNKNOWN) {
        OFFLINE = StatusTypes.OFFLINE;
      }
      if (cResult[11] === avatarDecoration) {
        if (cResult[12] === OFFLINE) {
          let tmp21;
          if (cResult[13] === stateFromStores) {
            tmp21 = cResult[14];
          }
          if (cResult[15] === tmp21) {
            let tmp24;
            if (cResult[16] === tmp20) {
              tmp24 = cResult[17];
            }
            return tmp24;
          }
          class A {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          const obj3 = { style: tmp20, children: tmp21 };
          const tmp26 = closure_22(cleanup(sharedValue[17]).View, obj3);
          cResult[15] = tmp21;
          cResult[16] = tmp20;
          cResult[17] = tmp26;
          tmp24 = tmp26;
        }
      }
      const obj4 = { user: stateFromStores, guildId: "Array", size, animate: true, needsOffscreenAlphaCompositing: null, avatarDecoration, status: OFFLINE, autoStatusCutout: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==" };
      const tmp23 = closure_22(tmp(sharedValue[15]).Avatar, obj4);
      cResult[11] = avatarDecoration;
      cResult[12] = OFFLINE;
      cResult[13] = stateFromStores;
      cResult[14] = tmp23;
      tmp21 = tmp23;
    }
  }
  const fn3 = function v() {
    let num = 1;
    set = sharedValue.set;
    if (transitionState === native2.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  };
  const items3 = [sharedValue, transitionState];
  cResult[4] = sharedValue;
  cResult[5] = transitionState;
  cResult[6] = fn3;
  cResult[7] = items3;
  tmp16 = items3;
  tmp15 = fn3;
}) : ((transitionState) => {
  let Avatar;
  let currentUser;
  let items3;
  let obj6;
  let status;
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  let sharedValue;
  let tmp = transitionState;
  let obj = transitionState(sharedValue[14]);
  const items = [SelfPresenceStore];
  let OFFLINE = obj.useStateFromStores(items, () => status.getStatus());
  const obj2 = transitionState(sharedValue[14]);
  const items1 = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj3 = transitionState(sharedValue[18]);
  const avatarDecoration = obj3.useAvatarDecoration(stateFromStores);
  const useSharedValue = transitionState(sharedValue[17]).useSharedValue;
  let num = 0;
  transitionState(sharedValue[17]);
  if (transitionState === transitionState(sharedValue[16]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let fn = function o() {
    let fn;
    let value;
    let withSpring;
    let obj = { opacity: withSpring(value, closure_18, "respect-motion-settings", fn) };
    let tmp = spring;
    withSpring = tmp.withSpring;
    value = sharedValue.get();
    fn = function s(arg0) {
      const tmp = arg0 && closure_1_0 === transitionState(sharedValue[16]).TransitionStates.YEETED;
      if (tmp) {
        const obj = transitionState(sharedValue[17]);
        obj.runOnJS(cleanup)();
      }
    };
    fn.__closure = { transitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanup };
    fn.__workletHash = 15015748930202;
    fn.__initData = __initData;
    ({ transitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanup });
    return obj;
  };
  const tmpResult = tmp(sharedValue[17]);
  fn.__closure = { withSpring: tmp(sharedValue[20]).withSpring, opacity: sharedValue, YOU_BAR_SPRING_CONFIG, transitionState, TransitionStates: tmp(sharedValue[16]).TransitionStates, runOnJS: tmp(sharedValue[17]).runOnJS, cleanup };
  fn.__workletHash = 15009979552705;
  fn.__initData = __initData5;
  const items2 = [sharedValue, transitionState];
  ({ withSpring: tmp(sharedValue[20]).withSpring, opacity: sharedValue, YOU_BAR_SPRING_CONFIG, transitionState, TransitionStates: tmp(sharedValue[16]).TransitionStates, runOnJS: tmp(sharedValue[17]).runOnJS, cleanup });
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (transitionState === native2.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    let result = (tmp(tmp2[15]).AVATAR_SIZE_MAP[size2] - tmp(tmp2[15]).AVATAR_SIZE_MAP[closure_12]) / 2;
    const rect = { position: "absolute", top: -result, left: -result };
    const obj5 = { style: items3, children: closure_22(Avatar, obj6) };
    items3 = [rect, animatedStyle];
    const View = cleanup(tmp2[17]).View;
    obj6 = { user: stateFromStores, guildId: "Array", size: size2, animate: true, needsOffscreenAlphaCompositing: null, avatarDecoration, status: OFFLINE, autoStatusCutout: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==" };
    Avatar = tmp(tmp2[15]).Avatar;
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    return closure_22(View, obj5);
  }
});
const __initData6 = { code: "function YouBarAvatarTsx9(){const{withSpring,isAvatarPressed,YOU_BAR_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isAvatarPressed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_36 = { code: "function YouBarAvatarTsx10(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(false);}" };
let closure_37 = { code: "function YouBarAvatarTsx11(){const{runOnJS,handleAvatarLongPress}=this.__closure;runOnJS(handleAvatarLongPress)();}" };
let closure_38 = { code: "function YouBarAvatarTsx12(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(true);}" };
const memoResult = react.memo(function YouBarAvatarAnimated(isLargeAvatar) {
  let View;
  let currentUser;
  let items3;
  let obj5;
  let obj6;
  let obj7;
  let setIsAvatarPressed;
  isLargeAvatar = isLargeAvatar.isLargeAvatar;
  const onPress = isLargeAvatar.onPress;
  let isAvatarPressed;
  let callback1;
  const tmp = isLargeAvatar;
  const tmp2 = isAvatarPressed;
  let obj = isLargeAvatar(isAvatarPressed[14]);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp4 = callback1(react.useState(false), 2);
  isAvatarPressed = tmp4[0];
  _asyncToGenerator = tmp4[1];
  let obj2 = isLargeAvatar(isAvatarPressed[17]);
  let fn = function c() {
    let items;
    let num = 1;
    const withSpring = spring.withSpring;
    spring;
    if (first) {
      num = 0.98;
    }
    const obj = { transform: items };
    items = [{ scale: withSpring(num, closure_18) }];
    ({ scale: withSpring(num, closure_18) });
    return obj;
  };
  let obj3 = { withSpring: isLargeAvatar(isAvatarPressed[20]).withSpring, isAvatarPressed, YOU_BAR_SPRING_CONFIG };
  fn.__closure = obj3;
  fn.__workletHash = 10695878322078;
  fn.__initData = __initData6;
  const items1 = [onPress];
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const callback = react.useCallback(() => {
    if (onPress != null) {
      tmp();
    }
    setIsAvatarPressed(false);
  }, items1);
  callback1 = react.useCallback(_asyncToGenerator(async () => {
    let closure_0;
    let paths;
    if (paths === 2) {
      paths = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj2 = tmp3(paths[24]);
            const result = obj2.triggerHapticFeedback(tmp3(paths[24]).HapticFeedbackTypes.SOFT);
            c1 = 1;
            paths = 1;
            const obj5 = { value: tmp3(paths[26])(paths[25], paths.paths), done: false };
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        paths = 3;
        throw tmp11;
      }
    }
  }), []);
  const items2 = [callback1];
  const memo = react.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const LongPressResult = Gesture.LongPress();
    const result = LongPressResult.shouldCancelWhenOutside(false);
    const fn = function s() {
      const obj = isLargeAvatar(first[17]);
      obj.runOnJS(setIsAvatarPressed)(true);
    };
    let obj = { runOnJS: ReanimatedRexport.runOnJS, setIsAvatarPressed };
    fn.__closure = obj;
    fn.__workletHash = 6986980260896;
    fn.__initData = __initData3;
    const fn2 = function n() {
      const obj = isLargeAvatar(first[17]);
      obj.runOnJS(callback1)();
    };
    const onBeginResult = result.onBegin(fn);
    fn2.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleAvatarLongPress: callback1 };
    fn2.__workletHash = 8256761838005;
    fn2.__initData = __initData2;
    ({ runOnJS: ReanimatedRexport.runOnJS, handleAvatarLongPress: callback1 });
    const fn3 = function t() {
      const obj = isLargeAvatar(first[17]);
      obj.runOnJS(setIsAvatarPressed)(false);
    };
    const onStartResult = onBeginResult.onStart(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport.runOnJS, setIsAvatarPressed };
    fn3.__workletHash = 131847878889;
    fn3.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, setIsAvatarPressed });
    return onStartResult.onFinalize(fn3);
  }, items2);
  [][0] = isLargeAvatar;
  const callback2 = react.useCallback((arg0, arg1, transitionState, cleanup) => {
    const obj = { transitionState, cleanup };
    return closure_1_22(arg1 ? closure_1_29 : closure_1_34, obj, arg0);
  }, []);
  let tmp12 = null;
  if (null != stateFromStores) {
    let obj4 = { gesture: memo, children: closure_22(closure_7, obj5) };
    obj5 = {
      onPress: callback,
      onPressIn() {
          return setIsAvatarPressed(true);
        },
      onPressOut() {
          return setIsAvatarPressed(false);
        },
      android_ripple: { color: "transparent" },
      children: closure_22(View, obj6)
    };
    const GestureDetector = tmp(tmp2[27]).GestureDetector;
    obj6 = { style: items3, children: closure_22(tmp(tmp2[16]).TransitionGroup, obj7) };
    size = { height: tmp(tmp2[15]).AVATAR_SIZE_MAP[closure_12], width: tmp(tmp2[15]).AVATAR_SIZE_MAP[closure_12], position: "relative" };
    View = onPress(tmp2[17]).View;
    items3 = [size, animatedStyle];
    obj7 = {
      items: tmp11,
      getItemKey(arg0) {
          return arg0.toString();
        },
      renderItem: callback2
    };
    tmp12 = closure_22(GestureDetector, obj4);
  }
  return tmp12;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatar.tsx");

export default memoResult;