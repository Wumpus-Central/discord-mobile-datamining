// === Module 16206: YouBarAvatarLarge ===

// Module 16206 (YouBarAvatarLarge)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import closure_9 from "filterPlayingActivities" /* 5231 */;
import closure_10 from "mergeGuildAvatar" /* 1921 */;
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT" /* 14925 */;
import { StatusTypes } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function YouBarAvatarLarge(transitionState) {
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  let OFFLINE;
  c3 = undefined;
  let result1;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let obj = transitionState(OFFLINE[12]);
  let items = [closure_9];
  OFFLINE = obj.useStateFromStores(items, () => status.getStatus());
  obj1 = transitionState(OFFLINE[12]);
  const items1 = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let result = transitionState(OFFLINE[13]).AVATAR_SIZE_MAP[closure_13] / closure_20;
  c3 = result;
  result1 = (closure_20 - transitionState(OFFLINE[13]).AVATAR_SIZE_MAP[closure_13]) / 2;
  let tmp8 = transitionState === transitionState(OFFLINE[14]).TransitionStates.MOUNTED;
  let obj2 = transitionState(OFFLINE[15]);
  let num = 0;
  if (tmp8) {
    num = 1;
  }
  sharedValue = obj2.useSharedValue(num);
  let tmp2Result = tmp2(tmp3[15]);
  let num2 = 1;
  if (!tmp8) {
    num2 = result;
  }
  sharedValue1 = tmp2Result.useSharedValue(num2);
  tmp2Result = tmp2(tmp3[15]);
  if (tmp8) {
    let tmp11 = -closure_17;
  } else {
    tmp11 = -result1;
  }
  sharedValue2 = tmp2Result.useSharedValue(tmp11);
  let tmp = callback3();
  if (tmp8) {
    let diff = -closure_17 - (tmp5 - closure_15) / 2;
  } else {
    diff = -result1;
  }
  sharedValue3 = transitionState(OFFLINE[15]).useSharedValue(diff);
  const items2 = [transitionState, sharedValue, sharedValue1, sharedValue2, sharedValue3, result, result1];
  const effect = sharedValue.useEffect(() => {
    const tmp = transitionState === transitionState(OFFLINE[14]).TransitionStates.YEETED;
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
      tmp8 = -closure_1_17;
    }
    const result2 = sharedValue2.set(tmp8);
    if (tmp) {
      let diff = -result1;
    } else {
      diff = -closure_1_17 - (closure_1_20 - closure_1_15) / 2;
    }
    const result3 = sharedValue3.set(diff);
  }, items2);
  const tmp2Result1 = transitionState(OFFLINE[15]);
  const avatarDecoration = transitionState(OFFLINE[16]).useAvatarDecoration(stateFromStores);
  const tmp2Result2 = transitionState(OFFLINE[16]);
  const items3 = [sharedValue3];
  const items4 = [OFFLINE];
  const stateFromStores1 = transitionState(OFFLINE[12]).useStateFromStores(items3, () => sharedValue3.animateYouBarAvatarDeco);
  const memo = sharedValue.useMemo(() => {
    if (OFFLINE === closure_1_21.UNKNOWN) {
      OFFLINE = closure_1_21.OFFLINE;
    }
    if (null != OFFLINE) {
      const result = closure_1_16 / 2;
      const sum = result + transitionState(OFFLINE[13]).STATUS_PADDING;
      const diff = closure_1_20 - sum - closure_1_16 / 4 * 2;
      let obj = { nativeCutouts: null };
      obj = { shape: null, x: null, y: null, size: null };
      obj[0] = transitionState(OFFLINE[17]).CutoutShape.Circle;
      obj[1] = diff + closure_1_19;
      obj[2] = diff + closure_1_19;
      obj[3] = 2 * sum;
      const items = [obj];
      obj[0] = items;
      return obj;
    }
  }, items4);
  const tmp2Result3 = transitionState(OFFLINE[12]);
  class V {
    constructor() {
      obj = { transform: null, left: null, top: null, opacity: null };
      obj = { scale: null };
      obj3 = transitionState(closure_2[18]);
      obj[0] = obj3.withSpring(closure_6.get(), closure_1_18);
      items = [];
      items[0] = obj;
      obj[0] = items;
      obj4 = transitionState(closure_2[18]);
      obj[1] = obj4.withSpring(closure_7.get(), closure_1_18);
      obj5 = transitionState(closure_2[18]);
      obj[2] = obj5.withSpring(closure_8.get(), closure_1_18);
      obj6 = transitionState(closure_2[18]);
      value = closure_5.get();
      fn = function s(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = closure_0 === closure_1_0(closure_1_2[14]).TransitionStates.YEETED;
        }
        if (tmp) {
          closure_1_0(closure_1_2[15]).runOnJS(closure_1)();
          const obj = closure_1_0(closure_1_2[15]);
        }
      };
      obj1 = { transitionState, TransitionStates: transitionState(closure_2[14]).TransitionStates, runOnJS: transitionState(closure_2[15]).runOnJS, cleanup };
      fn.__closure = obj1;
      fn.__workletHash = 9945521131664;
      fn.__initData = closure_1_26;
      obj[3] = obj6.withSpring(value, closure_1_18, "respect-motion-settings", fn);
      return obj;
    }
  }
  obj = { withSpring: tmp2(tmp3[18]).withSpring, scale: sharedValue1, YOU_BAR_SPRING_CONFIG: closure_18, left: sharedValue2, top: sharedValue3, opacity: sharedValue, transitionState, TransitionStates: tmp2(tmp3[14]).TransitionStates, runOnJS: tmp2(tmp3[15]).runOnJS, cleanup };
  V.__closure = obj;
  V.__workletHash = 4621027458354;
  V.__initData = closure_25;
  const animatedStyle = transitionState(OFFLINE[15]).useAnimatedStyle(V);
  const tmp2Result4 = transitionState(OFFLINE[15]);
  const token = transitionState(OFFLINE[19]).useToken(cleanup(tmp3[11]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  transitionState(OFFLINE[19]);
  let tmp28Result = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    const items5 = [tmp.avatarShadow, , ];
    obj1 = { position: "absolute", width: null, height: null };
    obj1[1] = tmp5;
    obj1[2] = tmp5;
    items5[1] = obj1;
    items5[2] = animatedStyle;
    obj[0] = items5;
    let nativeCutouts;
    let tmp23Result = tmp23(tmp3[17]);
    if (memo != null) {
      nativeCutouts = memo.nativeCutouts;
    }
    obj2 = { cutouts: null, style: null, children: null };
    obj2[0] = nativeCutouts;
    let obj3 = { position: "absolute", width: null, height: null };
    obj3[1] = tmp5;
    obj3[2] = tmp5;
    obj2[1] = obj3;
    let obj4 = { style: null };
    let obj5 = { width: null, height: null, borderRadius: null, backgroundColor: null };
    obj5[0] = tmp5;
    obj5[1] = tmp5;
    obj5[2] = tmp5 / 2;
    obj5[3] = token;
    obj4[0] = obj5;
    obj2[2] = closure_22(sharedValue1, obj4);
    const items6 = [closure_22(tmp23Result, obj2), , , ];
    const obj6 = { user: null, guildId: "Array", size: false, animate: true, needsOffscreenAlphaCompositing: null, status: null, statusSizeOverride: null, cutout: null, statusStyle: 0 };
    obj6[0] = stateFromStores;
    obj6[2] = closure_11;
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj6[5] = OFFLINE;
    obj6[6] = closure_16;
    obj6[7] = memo;
    const obj7 = { right: null, bottom: null };
    obj7[0] = closure_14 - closure_19;
    obj7[1] = closure_14 - closure_19;
    obj6[8] = obj7;
    items6[1] = closure_22(tmp2(tmp3[13]).Avatar, obj6);
    let mapped;
    tmp23Result = tmp23(tmp3[17]);
    if (memo != null) {
      const nativeCutouts1 = memo.nativeCutouts;
      if (nativeCutouts1 != null) {
        mapped = nativeCutouts1.map((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.x = arg0.x + 1;
          obj.y = arg0.y + 1;
          return obj;
        });
      }
    }
    const obj8 = { cutouts: null, style: null, pointerEvents: "none", children: null };
    obj8[0] = mapped;
    const obj9 = { position: "absolute", top: -1, left: -1, width: null, height: null };
    obj9[3] = tmp5 + 2;
    obj9[4] = tmp5 + 2;
    obj8[1] = obj9;
    const obj10 = { style: null };
    const obj11 = { width: null, height: null, borderRadius: null, borderWidth: 1, borderColor: null };
    obj11[0] = tmp5 + 2;
    obj11[1] = tmp5 + 2;
    obj11[2] = (tmp5 + 2) / 2;
    obj11[4] = tmp26;
    obj10[0] = obj11;
    obj8[3] = closure_22(sharedValue1, obj10);
    items6[2] = closure_22(tmp23Result, obj8);
    let tmp29Result = null != avatarDecoration;
    if (tmp29Result) {
      const obj12 = { size: null, avatarDecoration: null, decorationStyle: null, animate: null, cutout: null };
      const tmp23Result1 = tmp23(tmp3[20]);
      obj12[0] = tmp2(tmp3[21]).getDecorationSizeForAvatarSize(tmp33);
      obj12[1] = avatarDecoration;
      const obj13 = { position: "absolute", top: null, left: null };
      const tmp2Result7 = tmp2(tmp3[21]);
      obj13[1] = -tmp2(tmp3[21]).getDecorationSizeForAvatarSize(tmp33) - tmp5 / 2;
      const tmp2Result8 = tmp2(tmp3[21]);
      obj13[2] = -tmp2(tmp3[21]).getDecorationSizeForAvatarSize(tmp33) - tmp5 / 2;
      obj12[2] = obj13;
      obj12[3] = stateFromStores1 && "always";
      const tmp2Result9 = tmp2(tmp3[21]);
      const tmp2Result10 = tmp2(tmp3[21]);
      obj12[4] = tmp2Result10.getDecorationCutoutForAvatarCutout(memo, (tmp2(tmp3[21]).getDecorationSizeForAvatarSize(tmp33) - tmp5) / 2);
      tmp29Result = tmp29(tmp23Result1, obj12, avatarDecoration.asset);
      const tmp2Result11 = tmp2(tmp3[21]);
    }
    items6[3] = tmp29Result;
    obj[1] = items6;
    tmp28Result = closure_23(tmp23(tmp3[15]).View, obj);
    const tmp28 = closure_23;
    const tmp32 = sharedValue1;
  }
  return tmp28Result;
}
function YouBarAvatar(transitionState) {
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  let sharedValue;
  let obj = transitionState(sharedValue[12]);
  const items = [closure_9];
  let OFFLINE = obj.useStateFromStores(items, () => status.getStatus());
  obj1 = transitionState(sharedValue[12]);
  const items1 = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let obj2 = transitionState(sharedValue[16]);
  const avatarDecoration = obj2.useAvatarDecoration(stateFromStores);
  let num = 0;
  if (transitionState === transitionState(sharedValue[14]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = transitionState(sharedValue[15]).useSharedValue(num);
  const obj4 = transitionState(sharedValue[15]);
  let fn = function o() {
    let obj = { opacity: null };
    const value = sharedValue.get();
    const fn = function s(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_0 === closure_1_0(closure_1_2[14]).TransitionStates.YEETED;
      }
      if (tmp) {
        closure_1_0(closure_1_2[15]).runOnJS(closure_1)();
        const obj = closure_1_0(closure_1_2[15]);
      }
    };
    obj = { transitionState, TransitionStates: transitionState(sharedValue[14]).TransitionStates, runOnJS: transitionState(sharedValue[15]).runOnJS, cleanup };
    fn.__closure = obj;
    fn.__workletHash = 1724804022422;
    fn.__initData = closure_1_29;
    obj[0] = transitionState(sharedValue[18]).withSpring(value, closure_1_18, "respect-motion-settings", fn);
    return obj;
  };
  obj = { withSpring: tmp(tmp2[18]).withSpring, opacity: sharedValue, YOU_BAR_SPRING_CONFIG: closure_18, transitionState, TransitionStates: tmp(tmp2[14]).TransitionStates, runOnJS: tmp(tmp2[15]).runOnJS, cleanup };
  fn.__closure = obj;
  fn.__workletHash = 8237916771781;
  fn.__initData = closure_28;
  const items2 = [sharedValue, transitionState];
  const animatedStyle = transitionState(sharedValue[15]).useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    let num = 1;
    if (transitionState === transitionState(sharedValue[14]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    let result = (tmp(tmp2[13]).AVATAR_SIZE_MAP[closure_13] - tmp(tmp2[13]).AVATAR_SIZE_MAP[closure_12]) / 2;
    obj = { style: null, children: null };
    obj1 = { position: "absolute", top: null, left: null };
    obj1[1] = -result;
    obj1[2] = -result;
    const items3 = [obj1, animatedStyle];
    obj[0] = items3;
    obj2 = { user: null, guildId: "Array", size: false, animate: true, needsOffscreenAlphaCompositing: null, avatarDecoration: null, status: true, autoStatusCutout: "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi" };
    obj2[0] = stateFromStores;
    obj2[2] = closure_13;
    obj2[5] = avatarDecoration;
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj2[6] = OFFLINE;
    obj[1] = closure_22(tmp(tmp2[13]).Avatar, obj2);
    return closure_22(cleanup(tmp2[15]).View, obj);
  }
  const tmpResult = transitionState(sharedValue[15]);
}
let c5 = importAllResult;
({ View: closure_6, Pressable: error } = get_ActivityIndicator);
({ YOU_BAR_AVATAR_LARGE_SIZE: unpackModuleId, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: closure_12, YOU_BAR_AVATAR_SIZE: map1, YOU_BAR_STATUS_INSET: closure_14, YOU_BAR_HEIGHT: closure_15, YOU_BAR_LARGE_STATUS_SIZE: closure_16, YOU_BAR_PADDING: closure_17, YOU_BAR_SPRING_CONFIG: closure_18, YOU_BAR_STATUS_OFFSET: closure_19, YOU_BAR_AVATAR_LARGE_PX: closure_20 } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_22, jsxs: closure_23 } = jsxProd);
let obj = { avatarShadow: null };
obj = {};
let merged = Object.assign(ThemesDefault.shadows.SHADOW_MEDIUM);
obj[0] = obj;
let closure_24 = createCacheKey.createStyles(obj);
let closure_25 = { code: "function YouBarAvatarTsx1(){const{withSpring,scale,YOU_BAR_SPRING_CONFIG,left,top,opacity,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{transform:[{scale:withSpring(scale.get(),YOU_BAR_SPRING_CONFIG)}],left:withSpring(left.get(),YOU_BAR_SPRING_CONFIG),top:withSpring(top.get(),YOU_BAR_SPRING_CONFIG),opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
let closure_26 = { code: "function YouBarAvatarTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
let closure_28 = { code: "function YouBarAvatarTsx3(){const{withSpring,opacity,YOU_BAR_SPRING_CONFIG,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
let closure_29 = { code: "function YouBarAvatarTsx4(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
let closure_31 = { code: "function YouBarAvatarTsx5(){const{withSpring,isAvatarPressed,YOU_BAR_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isAvatarPressed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_32 = { code: "function YouBarAvatarTsx6(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(false);}" };
let closure_33 = { code: "function YouBarAvatarTsx7(){const{runOnJS,handleAvatarLongPress}=this.__closure;runOnJS(handleAvatarLongPress)();}" };
let closure_34 = { code: "function YouBarAvatarTsx8(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(true);}" };
const memoResult = importAllResult.memo(function YouBarAvatarAnimated(isLargeAvatar) {
  isLargeAvatar = isLargeAvatar.isLargeAvatar;
  const onPress = isLargeAvatar.onPress;
  let first;
  let callback;
  let callback1;
  let obj = isLargeAvatar(first[12]);
  let items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp4 = callback1(importAllResult.useState(false), 2);
  first = tmp4[0];
  callback = tmp4[1];
  obj1 = isLargeAvatar(first[15]);
  let fn = function _() {
    let obj = isLargeAvatar(first[18]);
    let num = 1;
    if (first) {
      num = 0.98;
    }
    obj = { transform: null };
    obj = { scale: obj.withSpring(num, closure_1_18) };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  obj = { withSpring: isLargeAvatar(first[18]).withSpring, isAvatarPressed: first, YOU_BAR_SPRING_CONFIG: closure_18 };
  fn.__closure = obj;
  fn.__workletHash = 10944764008850;
  fn.__initData = closure_31;
  const items1 = [onPress];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  callback = importAllResult.useCallback(() => {
    if (onPress != null) {
      tmp();
    }
    callback(false);
  }, items1);
  callback1 = importAllResult.useCallback(callback(function*() {
    if (paths === 2) {
      paths = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        paths = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            paths = 3;
            throw arg1;
          } else if (arg0 === 2) {
            paths = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp4;
            obj1 = closure_1_0(paths[22]);
            const result = obj1.triggerHapticFeedback(closure_1_0(paths[22]).HapticFeedbackTypes.SOFT);
            c1 = 1;
            paths = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_0(paths[24])(paths[23], paths.paths);
            return obj1;
          }
        } else if (arg0 === 1) {
          paths = 3;
          throw arg1;
        } else if (arg0 === 2) {
          paths = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          arg1.openUserSettings();
          callback(false);
          paths = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        paths = tmp;
        throw tmp12;
      }
    }
  }), []);
  const items2 = [callback1];
  const memo = importAllResult.useMemo(() => {
    const Gesture = isLargeAvatar(first[25]).Gesture;
    const result = Gesture.LongPress().shouldCancelWhenOutside(false);
    const fn = function s() {
      closure_1_0(closure_1_2[15]).runOnJS(closure_3)(true);
    };
    let obj = { runOnJS: isLargeAvatar(first[15]).runOnJS, setIsAvatarPressed: closure_3 };
    fn.__closure = obj;
    fn.__workletHash = 11956186059259;
    fn.__initData = closure_1_34;
    const LongPressResult = Gesture.LongPress();
    const fn2 = function n() {
      closure_1_0(closure_1_2[15]).runOnJS(closure_4)();
    };
    obj = { runOnJS: isLargeAvatar(first[15]).runOnJS, handleAvatarLongPress: callback1 };
    fn2.__closure = obj;
    fn2.__workletHash = 446001392642;
    fn2.__initData = closure_1_33;
    const onBeginResult = result.onBegin(fn);
    const fn3 = function t() {
      closure_1_0(closure_1_2[15]).runOnJS(closure_3)(false);
    };
    const onStartResult = result.onBegin(fn).onStart(fn2);
    fn3.__closure = { runOnJS: isLargeAvatar(first[15]).runOnJS, setIsAvatarPressed: closure_3 };
    fn3.__workletHash = 1675248979678;
    fn3.__initData = closure_1_32;
    return onStartResult.onFinalize(fn3);
  }, items2);
  [][0] = isLargeAvatar;
  const callback2 = importAllResult.useCallback((arg0, arg1, transitionState, cleanup) => callback2(arg1 ? closure_27 : closure_30, { transitionState, cleanup }, arg0), []);
  let tmp12 = null;
  if (null != stateFromStores) {
    obj = { gesture: null, children: null };
    obj[0] = memo;
    obj1 = { onPress: null, onPressIn: null, onPressOut: null, android_ripple: null, children: null };
    obj1[0] = callback;
    obj1[1] = function onPressIn() {
      return callback(true);
    };
    obj1[2] = function onPressOut() {
      return callback(false);
    };
    obj1[3] = { color: "transparent" };
    const obj2 = { style: null, children: null };
    const obj3 = { height: null, width: null, position: "relative" };
    obj3[0] = tmp(tmp2[13]).AVATAR_SIZE_MAP[closure_12];
    obj3[1] = tmp(tmp2[13]).AVATAR_SIZE_MAP[closure_12];
    const items3 = [obj3, animatedStyle];
    obj2[0] = items3;
    const obj4 = { items: null, getItemKey: null, renderItem: null };
    obj4[0] = tmp11;
    obj4[1] = function getItemKey(arg0) {
      return arg0.toString();
    };
    obj4[2] = callback2;
    obj2[1] = callback2(tmp(tmp2[14]).TransitionGroup, obj4);
    obj1[4] = callback2(onPress(tmp2[15]).View, obj2);
    obj[1] = callback2(closure_7, obj1);
    tmp12 = callback2(tmp(tmp2[25]).GestureDetector, obj);
  }
  return tmp12;
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatar.tsx");

export default memoResult;