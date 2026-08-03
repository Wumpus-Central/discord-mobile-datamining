// === Module 15347: YouBarAvatarLarge ===

// Module 15347 (YouBarAvatarLarge)
import mergeGuildAvatar from "mergeGuildAvatar";
import _slicedToArray from "_slicedToArray";
import importAllResult from "CutoutableAvatarDecoration";
import get_ActivityIndicator from "CONFIG_NEVER_ANIMATE";
import filterPlayingActivities from "filterPlayingActivities";
import closure_9 from "mergeGuildAvatar";
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";
import { StatusTypes } from "ME";
import jsxProd from "HapticFeedbackTypes";
import createCacheKey from "createCacheKey";

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
function YouBarAvatarLarge(transitionState) {
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  let OFFLINE;
  let c3;
  let result1;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let obj = transitionState(OFFLINE[11]);
  let items = [sharedValue3];
  OFFLINE = obj.useStateFromStores(items, () => sharedValue3.getStatus());
  let obj1 = transitionState(OFFLINE[11]);
  const items1 = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let result = transitionState(OFFLINE[12]).AVATAR_SIZE_MAP[closure_12] / closure_19;
  c3 = result;
  result1 = (closure_19 - transitionState(OFFLINE[12]).AVATAR_SIZE_MAP[closure_12]) / 2;
  let tmp8 = transitionState === transitionState(OFFLINE[13]).TransitionStates.MOUNTED;
  let obj2 = transitionState(OFFLINE[14]);
  let num = 0;
  if (tmp8) {
    num = 1;
  }
  sharedValue = obj2.useSharedValue(num);
  let tmp2Result = tmp2(tmp3[14]);
  let num2 = 1;
  if (!tmp8) {
    num2 = result;
  }
  sharedValue1 = tmp2Result.useSharedValue(num2);
  tmp2Result = tmp2(tmp3[14]);
  if (tmp8) {
    let tmp11 = -closure_16;
  } else {
    tmp11 = -result1;
  }
  sharedValue2 = tmp2Result.useSharedValue(tmp11);
  let tmp = callback3();
  if (tmp8) {
    let diff = -closure_16 - (tmp5 - closure_14) / 2;
  } else {
    diff = -result1;
  }
  sharedValue3 = transitionState(OFFLINE[14]).useSharedValue(diff);
  const items2 = [transitionState, sharedValue, sharedValue1, sharedValue2, sharedValue3, result, result1];
  const effect = sharedValue.useEffect(() => {
    const tmp = transitionState === transitionState(OFFLINE[13]).TransitionStates.YEETED;
    let num = 1;
    let num2 = 1;
    if (tmp) {
      num2 = 0;
    }
    const result = sharedValue.set(num2);
    if (tmp) {
      num = c3;
    }
    const result1 = sharedValue1.set(num);
    if (tmp) {
      let tmp8 = -result1;
    } else {
      tmp8 = -outer1_16;
    }
    const result2 = sharedValue2.set(tmp8);
    if (tmp) {
      let diff = -result1;
    } else {
      diff = -outer1_16 - (outer1_19 - outer1_14) / 2;
    }
    const result3 = sharedValue3.set(diff);
  }, items2);
  const tmp2Result1 = transitionState(OFFLINE[14]);
  const avatarDecoration = transitionState(OFFLINE[15]).useAvatarDecoration(stateFromStores);
  const items3 = [OFFLINE];
  const memo = sharedValue.useMemo(() => {
    if (OFFLINE === outer1_20.UNKNOWN) {
      OFFLINE = outer1_20.OFFLINE;
    }
    if (null != OFFLINE) {
      const result = outer1_15 / 2;
      const sum = result + transitionState(OFFLINE[12]).STATUS_PADDING;
      const diff = outer1_19 - sum - outer1_15 / 4 * 2;
      let obj = { nativeCutouts: null };
      obj = { shape: null, x: null, y: null, size: null };
      obj[0] = transitionState(OFFLINE[16]).CutoutShape.Circle;
      obj[1] = diff + outer1_18;
      obj[2] = diff + outer1_18;
      obj[3] = 2 * sum;
      const items = [obj];
      obj[0] = items;
      return obj;
    }
  }, items3);
  const tmp2Result2 = transitionState(OFFLINE[15]);
  let fn = function b() {
    let obj = { transform: null, left: null, top: null, opacity: null };
    obj = { scale: null };
    obj[0] = transitionState(OFFLINE[17]).withSpring(sharedValue1.get(), outer1_17);
    const items = [obj];
    obj[0] = items;
    const obj3 = transitionState(OFFLINE[17]);
    obj[1] = transitionState(OFFLINE[17]).withSpring(sharedValue2.get(), outer1_17);
    const obj4 = transitionState(OFFLINE[17]);
    obj[2] = transitionState(OFFLINE[17]).withSpring(sharedValue3.get(), outer1_17);
    const obj5 = transitionState(OFFLINE[17]);
    const value = sharedValue.get();
    const fn = function s(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_0 === outer1_0(outer1_2[13]).TransitionStates.YEETED;
      }
      if (tmp) {
        outer1_0(outer1_2[14]).runOnJS(closure_1)();
        const obj = outer1_0(outer1_2[14]);
      }
    };
    obj = { transitionState, TransitionStates: transitionState(OFFLINE[13]).TransitionStates, runOnJS: transitionState(OFFLINE[14]).runOnJS, cleanup };
    fn.__closure = obj;
    fn.__workletHash = 9945521131664;
    fn.__initData = outer1_25;
    obj[3] = transitionState(OFFLINE[17]).withSpring(value, outer1_17, "respect-motion-settings", fn);
    return obj;
  };
  obj = { withSpring: tmp2(tmp3[17]).withSpring, scale: sharedValue1, YOU_BAR_SPRING_CONFIG: closure_17, left: sharedValue2, top: sharedValue3, opacity: sharedValue, transitionState, TransitionStates: tmp2(tmp3[13]).TransitionStates, runOnJS: tmp2(tmp3[14]).runOnJS, cleanup };
  fn.__closure = obj;
  fn.__workletHash = 4621027458354;
  fn.__initData = closure_24;
  const animatedStyle = transitionState(OFFLINE[14]).useAnimatedStyle(fn);
  const tmp2Result3 = transitionState(OFFLINE[14]);
  const token = transitionState(OFFLINE[18]).useToken(cleanup(tmp3[10]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  transitionState(OFFLINE[18]);
  let tmp27Result = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    const items4 = [tmp.avatarShadow, , ];
    obj1 = { position: "absolute", width: null, height: null };
    obj1[1] = tmp5;
    obj1[2] = tmp5;
    items4[1] = obj1;
    items4[2] = animatedStyle;
    obj[0] = items4;
    let nativeCutouts;
    let tmp22Result = tmp22(tmp3[16]);
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
    obj2[2] = closure_21(sharedValue1, obj4);
    const items5 = [closure_21(tmp22Result, obj2), , , ];
    const obj6 = { user: null, guildId: "Array", size: false, animate: true, needsOffscreenAlphaCompositing: null, status: null, statusSizeOverride: null, cutout: null, statusStyle: 0 };
    obj6[0] = stateFromStores;
    obj6[2] = closure_10;
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj6[5] = OFFLINE;
    obj6[6] = closure_15;
    obj6[7] = memo;
    const obj7 = { right: null, bottom: null };
    obj7[0] = closure_13 - closure_18;
    obj7[1] = closure_13 - closure_18;
    obj6[8] = obj7;
    items5[1] = closure_21(tmp2(tmp3[12]).Avatar, obj6);
    let mapped;
    tmp22Result = tmp22(tmp3[16]);
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
    obj11[4] = tmp25;
    obj10[0] = obj11;
    obj8[3] = closure_21(sharedValue1, obj10);
    items5[2] = closure_21(tmp22Result, obj8);
    let tmp28Result = null != avatarDecoration;
    if (tmp28Result) {
      const obj12 = { size: null, avatarDecoration: null, decorationStyle: null, animate: false, cutout: null };
      const tmp22Result1 = tmp22(tmp3[19]);
      obj12[0] = tmp2(tmp3[20]).getDecorationSizeForAvatarSize(tmp32);
      obj12[1] = avatarDecoration;
      const obj13 = { position: "absolute", top: null, left: null };
      const tmp2Result6 = tmp2(tmp3[20]);
      obj13[1] = -tmp2(tmp3[20]).getDecorationSizeForAvatarSize(tmp32) - tmp5 / 2;
      const tmp2Result7 = tmp2(tmp3[20]);
      obj13[2] = -tmp2(tmp3[20]).getDecorationSizeForAvatarSize(tmp32) - tmp5 / 2;
      obj12[2] = obj13;
      const tmp2Result8 = tmp2(tmp3[20]);
      const tmp2Result9 = tmp2(tmp3[20]);
      obj12[4] = tmp2Result9.getDecorationCutoutForAvatarCutout(memo, (tmp2(tmp3[20]).getDecorationSizeForAvatarSize(tmp32) - tmp5) / 2);
      tmp28Result = tmp28(tmp22Result1, obj12, avatarDecoration.asset);
      const tmp2Result10 = tmp2(tmp3[20]);
    }
    items5[3] = tmp28Result;
    obj[1] = items5;
    tmp27Result = closure_22(tmp22(tmp3[14]).View, obj);
    const tmp27 = closure_22;
    const tmp31 = sharedValue1;
  }
  return tmp27Result;
}
function YouBarAvatar(transitionState) {
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  let sharedValue;
  let obj = transitionState(sharedValue[11]);
  const items = [filterPlayingActivities];
  let OFFLINE = obj.useStateFromStores(items, () => status.getStatus());
  let obj1 = transitionState(sharedValue[11]);
  const items1 = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let obj2 = transitionState(sharedValue[15]);
  const avatarDecoration = obj2.useAvatarDecoration(stateFromStores);
  let num = 0;
  if (transitionState === transitionState(sharedValue[13]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = transitionState(sharedValue[14]).useSharedValue(num);
  const obj4 = transitionState(sharedValue[14]);
  let fn = function o() {
    let obj = { opacity: null };
    const value = sharedValue.get();
    const fn = function s(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_0 === outer1_0(outer1_2[13]).TransitionStates.YEETED;
      }
      if (tmp) {
        outer1_0(outer1_2[14]).runOnJS(closure_1)();
        const obj = outer1_0(outer1_2[14]);
      }
    };
    obj = { transitionState, TransitionStates: transitionState(sharedValue[13]).TransitionStates, runOnJS: transitionState(sharedValue[14]).runOnJS, cleanup };
    fn.__closure = obj;
    fn.__workletHash = 1724804022422;
    fn.__initData = outer1_28;
    obj[0] = transitionState(sharedValue[17]).withSpring(value, outer1_17, "respect-motion-settings", fn);
    return obj;
  };
  obj = { withSpring: tmp(tmp2[17]).withSpring, opacity: sharedValue, YOU_BAR_SPRING_CONFIG: closure_17, transitionState, TransitionStates: tmp(tmp2[13]).TransitionStates, runOnJS: tmp(tmp2[14]).runOnJS, cleanup };
  fn.__closure = obj;
  fn.__workletHash = 8237916771781;
  fn.__initData = closure_27;
  const items2 = [sharedValue, transitionState];
  const animatedStyle = transitionState(sharedValue[14]).useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    let num = 1;
    if (transitionState === transitionState(sharedValue[13]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    let result = (tmp(tmp2[12]).AVATAR_SIZE_MAP[closure_12] - tmp(tmp2[12]).AVATAR_SIZE_MAP[closure_11]) / 2;
    obj = { style: null, children: null };
    obj1 = { position: "absolute", top: null, left: null };
    obj1[1] = -result;
    obj1[2] = -result;
    const items3 = [obj1, animatedStyle];
    obj[0] = items3;
    obj2 = { user: null, guildId: "Array", size: false, animate: true, needsOffscreenAlphaCompositing: null, avatarDecoration: null, status: true, autoStatusCutout: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZl" };
    obj2[0] = stateFromStores;
    obj2[2] = closure_12;
    obj2[5] = avatarDecoration;
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj2[6] = OFFLINE;
    obj[1] = closure_21(tmp(tmp2[12]).Avatar, obj2);
    return closure_21(cleanup(tmp2[14]).View, obj);
  }
  const tmpResult = transitionState(sharedValue[14]);
}
let c5 = importAllResult;
({ View: closure_6, Pressable: error } = get_ActivityIndicator);
({ YOU_BAR_AVATAR_LARGE_SIZE: c10, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: unpackModuleId, YOU_BAR_AVATAR_SIZE: closure_12, YOU_BAR_STATUS_INSET: map1, YOU_BAR_HEIGHT: closure_14, YOU_BAR_LARGE_STATUS_SIZE: closure_15, YOU_BAR_PADDING: closure_16, YOU_BAR_SPRING_CONFIG: closure_17, YOU_BAR_STATUS_OFFSET: closure_18, YOU_BAR_AVATAR_LARGE_PX: closure_19 } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let obj = { avatarShadow: null };
obj = {};
let merged = Object.assign(require("Themes").shadows.SHADOW_MEDIUM);
obj[0] = obj;
let closure_23 = createCacheKey.createStyles(obj);
let closure_24 = { code: "function YouBarAvatarTsx1(){const{withSpring,scale,YOU_BAR_SPRING_CONFIG,left,top,opacity,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{transform:[{scale:withSpring(scale.get(),YOU_BAR_SPRING_CONFIG)}],left:withSpring(left.get(),YOU_BAR_SPRING_CONFIG),top:withSpring(top.get(),YOU_BAR_SPRING_CONFIG),opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
let closure_25 = { code: "function YouBarAvatarTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
let closure_27 = { code: "function YouBarAvatarTsx3(){const{withSpring,opacity,YOU_BAR_SPRING_CONFIG,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}" };
let closure_28 = { code: "function YouBarAvatarTsx4(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}" };
let closure_30 = { code: "function YouBarAvatarTsx5(){const{withSpring,isAvatarPressed,YOU_BAR_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isAvatarPressed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}" };
let closure_31 = { code: "function YouBarAvatarTsx6(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(false);}" };
let closure_32 = { code: "function YouBarAvatarTsx7(){const{runOnJS,handleAvatarLongPress}=this.__closure;runOnJS(handleAvatarLongPress)();}" };
let closure_33 = { code: "function YouBarAvatarTsx8(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(true);}" };
const memoResult = importAllResult.memo(function YouBarAvatarAnimated(isLargeAvatar) {
  isLargeAvatar = isLargeAvatar.isLargeAvatar;
  const onPress = isLargeAvatar.onPress;
  let first;
  let callback;
  let callback1;
  let obj = isLargeAvatar(first[11]);
  let items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp4 = callback1(importAllResult.useState(false), 2);
  first = tmp4[0];
  callback = tmp4[1];
  let obj1 = isLargeAvatar(first[14]);
  let fn = function _() {
    let obj = isLargeAvatar(first[17]);
    let num = 1;
    if (first) {
      num = 0.98;
    }
    obj = { transform: null };
    obj = { scale: obj.withSpring(num, outer1_17) };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  obj = { withSpring: isLargeAvatar(first[17]).withSpring, isAvatarPressed: first, YOU_BAR_SPRING_CONFIG: closure_17 };
  fn.__closure = obj;
  fn.__workletHash = 10944764008850;
  fn.__initData = closure_30;
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
            let closure_0 = tmp4;
            let obj1 = outer1_0(paths[21]);
            const result = obj1.triggerHapticFeedback(outer1_0(paths[21]).HapticFeedbackTypes.SOFT);
            c1 = 1;
            paths = 1;
            obj1 = { value: null, done: false };
            obj1[0] = outer1_0(paths[23])(paths[22], paths.paths);
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
    const Gesture = isLargeAvatar(first[24]).Gesture;
    const result = Gesture.LongPress().shouldCancelWhenOutside(false);
    const fn = function s() {
      outer1_0(outer1_2[14]).runOnJS(mergeGuildAvatar)(true);
    };
    let obj = { runOnJS: isLargeAvatar(first[14]).runOnJS, setIsAvatarPressed: mergeGuildAvatar };
    fn.__closure = obj;
    fn.__workletHash = 11956186059259;
    fn.__initData = outer1_33;
    const LongPressResult = Gesture.LongPress();
    const fn2 = function n() {
      outer1_0(outer1_2[14]).runOnJS(_slicedToArray)();
    };
    obj = { runOnJS: isLargeAvatar(first[14]).runOnJS, handleAvatarLongPress: callback1 };
    fn2.__closure = obj;
    fn2.__workletHash = 446001392642;
    fn2.__initData = outer1_32;
    const onBeginResult = result.onBegin(fn);
    const fn3 = function t() {
      outer1_0(outer1_2[14]).runOnJS(mergeGuildAvatar)(false);
    };
    const onStartResult = result.onBegin(fn).onStart(fn2);
    fn3.__closure = { runOnJS: isLargeAvatar(first[14]).runOnJS, setIsAvatarPressed: mergeGuildAvatar };
    fn3.__workletHash = 1675248979678;
    fn3.__initData = outer1_31;
    return onStartResult.onFinalize(fn3);
  }, items2);
  [][0] = isLargeAvatar;
  const callback2 = importAllResult.useCallback((arg0, arg1, transitionState, cleanup) => callback2(arg1 ? closure_26 : closure_29, { transitionState, cleanup }, arg0), []);
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
    obj3[0] = tmp(tmp2[12]).AVATAR_SIZE_MAP[closure_11];
    obj3[1] = tmp(tmp2[12]).AVATAR_SIZE_MAP[closure_11];
    const items3 = [obj3, animatedStyle];
    obj2[0] = items3;
    const obj4 = { items: null, getItemKey: null, renderItem: null };
    obj4[0] = tmp11;
    obj4[1] = function getItemKey(arg0) {
      return arg0.toString();
    };
    obj4[2] = callback2;
    obj2[1] = callback2(tmp(tmp2[13]).TransitionGroup, obj4);
    obj1[4] = callback2(onPress(tmp2[14]).View, obj2);
    obj[1] = callback2(closure_7, obj1);
    tmp12 = callback2(tmp(tmp2[24]).GestureDetector, obj);
  }
  return tmp12;
});
let result = require("noop").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatar.tsx");

export default memoResult;