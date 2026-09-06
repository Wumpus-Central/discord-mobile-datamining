// discord_app/modules/main_tabs_v2/native/you_bar/YouBarAvatar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import native2 from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../../_runtime/06655_LegacyBaseButton.js";
import ClipView from "../../../../design/components/Icon/native/ClipView.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import SelfPresenceStore from "../../../../stores/SelfPresenceStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function YouBarAvatarLarge(transitionState) {
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  let OFFLINE;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let obj = transitionState(OFFLINE[12]);
  let items = [SelfPresenceStore];
  OFFLINE = obj.useStateFromStores(items, () => status.getStatus());
  let obj1 = transitionState(OFFLINE[12]);
  const items1 = [UserStore];
  const stateFromStores = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let result = transitionState(OFFLINE[13]).AVATAR_SIZE_MAP[closure_13] / height;
  c3 = result;
  let result1 = (height - transitionState(OFFLINE[13]).AVATAR_SIZE_MAP[closure_13]) / 2;
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
  let tmp = closure_24();
  if (tmp8) {
    let diff = -closure_17 - (height - closure_15) / 2;
  } else {
    diff = -result1;
  }
  sharedValue3 = transitionState(OFFLINE[15]).useSharedValue(diff);
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
      tmp8 = -closure_2_17;
    }
    const result2 = sharedValue2.set(tmp8);
    if (tmp) {
      let diff = -result1;
    } else {
      diff = -closure_2_17 - (closure_2_20 - __initData) / 2;
    }
    const result3 = sharedValue3.set(diff);
  }, items2);
  const tmp2Result1 = transitionState(OFFLINE[15]);
  const avatarDecoration = transitionState(OFFLINE[16]).useAvatarDecoration(stateFromStores);
  const tmp2Result2 = transitionState(OFFLINE[16]);
  const items3 = [sharedValue3];
  const items4 = [OFFLINE];
  const stateFromStores1 = transitionState(OFFLINE[12]).useStateFromStores(
    items3,
    () => sharedValue3.animateYouBarAvatarDeco,
  );
  const memo = sharedValue.useMemo(() => {
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    if (null != OFFLINE) {
      const result = statusSizeOverride / 2;
      const sum = result + native.STATUS_PADDING;
      const diff = closure_2_20 - sum - (statusSizeOverride / 4) * 2;
      const obj = { nativeCutouts: null };
      const point = {
        shape: ClipView.CutoutShape.Circle,
        x: diff + closure_2_19,
        y: diff + closure_2_19,
        size: 2 * sum,
      };
      const items = [point];
      obj.nativeCutouts = items;
      return obj;
    }
  }, items4);
  const tmp2Result3 = transitionState(OFFLINE[12]);
  class V {
    constructor() {
      rect = { transform: null, left: null, top: null, opacity: null };
      obj = { scale: null };
      obj3 = closure_0(closure_2[18]);
      obj.scale = obj3.withSpring(closure_6.get(), YOU_BAR_SPRING_CONFIG);
      items = [];
      items[0] = obj;
      rect.transform = items;
      obj4 = closure_0(closure_2[18]);
      rect.left = obj4.withSpring(closure_7.get(), YOU_BAR_SPRING_CONFIG);
      obj5 = closure_0(closure_2[18]);
      rect.top = obj5.withSpring(closure_8.get(), YOU_BAR_SPRING_CONFIG);
      obj6 = closure_0(closure_2[18]);
      value = closure_5.get();
      fn = function s(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = closure_1_0 === transitionState(OFFLINE[14]).TransitionStates.YEETED;
        }
        if (tmp) {
          transitionState(OFFLINE[15]).runOnJS(cleanup)();
          const obj = transitionState(OFFLINE[15]);
        }
      };
      obj1 = {
        transitionState,
        TransitionStates: closure_0(closure_2[14]).TransitionStates,
        runOnJS: closure_0(closure_2[15]).runOnJS,
        cleanup,
      };
      fn.__closure = obj1;
      fn.__workletHash = 9945521131664;
      fn.__initData = closure_26;
      rect.opacity = obj6.withSpring(value, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn);
      return rect;
    }
  }
  let rect = {
    withSpring: tmp2(tmp3[18]).withSpring,
    scale: sharedValue1,
    YOU_BAR_SPRING_CONFIG,
    left: sharedValue2,
    top: sharedValue3,
    opacity: sharedValue,
    transitionState,
    TransitionStates: tmp2(tmp3[14]).TransitionStates,
    runOnJS: tmp2(tmp3[15]).runOnJS,
    cleanup,
  };
  V.__closure = rect;
  V.__workletHash = 4621027458354;
  V.__initData = __initData;
  const animatedStyle = transitionState(OFFLINE[15]).useAnimatedStyle(V);
  const tmp2Result4 = transitionState(OFFLINE[15]);
  const token = transitionState(OFFLINE[19]).useToken(cleanup(tmp3[11]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  transitionState(OFFLINE[19]);
  let tmp28Result = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    const items5 = [tmp.avatarShadow, ,];
    size = { position: "absolute", width: height, height };
    items5[1] = size;
    items5[2] = animatedStyle;
    obj.style = items5;
    let nativeCutouts;
    let tmp23Result = tmp23(tmp3[17]);
    if (memo != null) {
      nativeCutouts = memo.nativeCutouts;
    }
    obj = { cutouts: nativeCutouts, style: null, children: null };
    const size1 = { position: "absolute", width: height, height };
    obj.style = size1;
    obj1 = { style: null };
    size2 = { width: height, height, borderRadius: height / 2, backgroundColor: token };
    obj1.style = size2;
    obj.children = closure_22(sharedValue1, obj1);
    const items6 = [closure_22(tmp23Result, obj), , ,];
    obj2 = {
      user: stateFromStores,
      guildId: "Array",
      size,
      animate: true,
      needsOffscreenAlphaCompositing: null,
      status: null,
      statusSizeOverride: null,
      cutout: null,
      statusStyle: 0,
    };
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj2.status = OFFLINE;
    obj2.statusSizeOverride = statusSizeOverride;
    obj2.cutout = memo;
    const rect1 = { right: closure_14 - closure_19, bottom: closure_14 - closure_19 };
    obj2.statusStyle = rect1;
    items6[1] = closure_22(tmp2(tmp3[13]).Avatar, obj2);
    let mapped;
    tmp23Result = tmp23(tmp3[17]);
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
    let obj3 = { cutouts: mapped, style: null, pointerEvents: "none", children: null };
    const size3 = { position: "absolute", top: -1, left: -1, width: height + 2, height: height + 2 };
    obj3.style = size3;
    let obj4 = { style: null };
    const size4 = {
      width: height + 2,
      height: height + 2,
      borderRadius: (height + 2) / 2,
      borderWidth: 1,
      borderColor: tmp26,
    };
    obj4.style = size4;
    obj3.children = closure_22(sharedValue1, obj4);
    items6[2] = closure_22(tmp23Result, obj3);
    let tmp29Result = null != avatarDecoration;
    if (tmp29Result) {
      let obj5 = { size: null, avatarDecoration: null, decorationStyle: null, animate: null, cutout: null };
      const tmp23Result1 = tmp23(tmp3[20]);
      obj5.size = tmp2(tmp3[21]).getDecorationSizeForAvatarSize(tmp33);
      obj5.avatarDecoration = avatarDecoration;
      const rect2 = { position: "absolute", top: null, left: null };
      const tmp2Result7 = tmp2(tmp3[21]);
      rect2.top = -tmp2(tmp3[21]).getDecorationSizeForAvatarSize(tmp33) - height / 2;
      const tmp2Result8 = tmp2(tmp3[21]);
      rect2.left = -tmp2(tmp3[21]).getDecorationSizeForAvatarSize(tmp33) - height / 2;
      obj5.decorationStyle = rect2;
      obj5.animate = stateFromStores1 && "always";
      const tmp2Result9 = tmp2(tmp3[21]);
      const tmp2Result10 = tmp2(tmp3[21]);
      obj5.cutout = tmp2Result10.getDecorationCutoutForAvatarCutout(
        memo,
        (tmp2(tmp3[21]).getDecorationSizeForAvatarSize(tmp33) - height) / 2,
      );
      tmp29Result = closure_22(tmp23Result1, obj5, avatarDecoration.asset);
      const tmp2Result11 = tmp2(tmp3[21]);
    }
    items6[3] = tmp29Result;
    obj.children = items6;
    tmp28Result = closure_23(tmp23(tmp3[15]).View, obj);
  }
  return tmp28Result;
}
function YouBarAvatar(transitionState) {
  transitionState = transitionState.transitionState;
  const cleanup = transitionState.cleanup;
  let sharedValue;
  let obj = transitionState(sharedValue[12]);
  const items = [SelfPresenceStore];
  let OFFLINE = obj.useStateFromStores(items, () => status.getStatus());
  let obj1 = transitionState(sharedValue[12]);
  const items1 = [UserStore];
  const stateFromStores = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const avatarDecoration = transitionState(sharedValue[16]).useAvatarDecoration(stateFromStores);
  const obj3 = transitionState(sharedValue[16]);
  let num = 0;
  if (transitionState === transitionState(sharedValue[14]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = transitionState(sharedValue[15]).useSharedValue(num);
  const obj4 = transitionState(sharedValue[15]);
  let fn = function o() {
    let obj = { opacity: null };
    value = sharedValue.get();
    const fn = function s(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1_0 === transitionState(sharedValue[14]).TransitionStates.YEETED;
      }
      if (tmp) {
        transitionState(sharedValue[15]).runOnJS(cleanup)();
        const obj = transitionState(sharedValue[15]);
      }
    };
    obj = { transitionState, TransitionStates: native2.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanup };
    fn.__closure = obj;
    fn.__workletHash = 1724804022422;
    fn.__initData = __initData;
    obj.opacity = spring.withSpring(value, YOU_BAR_SPRING_CONFIG, "respect-motion-settings", fn);
    return obj;
  };
  obj = {
    withSpring: tmp(tmp2[18]).withSpring,
    opacity: sharedValue,
    YOU_BAR_SPRING_CONFIG,
    transitionState,
    TransitionStates: tmp(tmp2[14]).TransitionStates,
    runOnJS: tmp(tmp2[15]).runOnJS,
    cleanup,
  };
  fn.__closure = obj;
  fn.__workletHash = 8237916771781;
  fn.__initData = __initData3;
  const items2 = [sharedValue, transitionState];
  const animatedStyle = transitionState(sharedValue[15]).useAnimatedStyle(fn);
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
    let result = (tmp(tmp2[13]).AVATAR_SIZE_MAP[size2] - tmp(tmp2[13]).AVATAR_SIZE_MAP[closure_12]) / 2;
    obj = { style: null, children: null };
    const rect = { position: "absolute", top: -result, left: -result };
    const items3 = [rect, animatedStyle];
    obj.style = items3;
    obj1 = {
      user: stateFromStores,
      guildId: "Array",
      size: size2,
      animate: true,
      needsOffscreenAlphaCompositing: null,
      avatarDecoration,
      status: true,
      autoStatusCutout: "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi",
    };
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj1.status = OFFLINE;
    obj.children = closure_22(tmp(tmp2[13]).Avatar, obj1);
    return closure_22(cleanup(tmp2[15]).View, obj);
  }
  const tmpResult = transitionState(sharedValue[15]);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const YouBarConstants = fn(15098);
({
  YOU_BAR_AVATAR_LARGE_SIZE: closure_11,
  YOU_BAR_AVATAR_PLACEHOLDER_SIZE: closure_12,
  YOU_BAR_AVATAR_SIZE: map1,
  YOU_BAR_STATUS_INSET: closure_14,
  YOU_BAR_HEIGHT: closure_15,
  YOU_BAR_LARGE_STATUS_SIZE: closure_16,
  YOU_BAR_PADDING: closure_17,
  YOU_BAR_SPRING_CONFIG: closure_18,
  YOU_BAR_STATUS_OFFSET: closure_19,
  YOU_BAR_AVATAR_LARGE_PX: closure_20,
} = YouBarConstants);
const StatusTypes = fn(1074).StatusTypes;
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23 } = jsxProd);
const createStyles = fn(4560);
let obj = { avatarShadow: null };
obj = {};
let merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
obj.avatarShadow = obj;
let closure_24 = createStyles.createStyles(obj);
const __initData = {
  code: "function YouBarAvatarTsx1(){const{withSpring,scale,YOU_BAR_SPRING_CONFIG,left,top,opacity,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{transform:[{scale:withSpring(scale.get(),YOU_BAR_SPRING_CONFIG)}],left:withSpring(left.get(),YOU_BAR_SPRING_CONFIG),top:withSpring(top.get(),YOU_BAR_SPRING_CONFIG),opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}",
};
const __initData2 = {
  code: "function YouBarAvatarTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}",
};
const __initData3 = {
  code: "function YouBarAvatarTsx3(){const{withSpring,opacity,YOU_BAR_SPRING_CONFIG,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}",
};
let closure_29 = {
  code: "function YouBarAvatarTsx4(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}",
};
const __initData4 = {
  code: "function YouBarAvatarTsx5(){const{withSpring,isAvatarPressed,YOU_BAR_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isAvatarPressed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}",
};
let closure_32 = {
  code: "function YouBarAvatarTsx6(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(false);}",
};
let closure_33 = {
  code: "function YouBarAvatarTsx7(){const{runOnJS,handleAvatarLongPress}=this.__closure;runOnJS(handleAvatarLongPress)();}",
};
let closure_34 = {
  code: "function YouBarAvatarTsx8(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(true);}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatar.tsx");

export default noop.memo(function YouBarAvatarAnimated(isLargeAvatar) {
  isLargeAvatar = isLargeAvatar.isLargeAvatar;
  const onPress = isLargeAvatar.onPress;
  let isAvatarPressed;
  let callback1;
  let obj = isLargeAvatar(isAvatarPressed[12]);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp4 = callback1(noop.useState(false), 2);
  isAvatarPressed = tmp4[0];
  asyncGeneratorStep = tmp4[1];
  let obj1 = isLargeAvatar(isAvatarPressed[15]);
  let fn = function _() {
    let obj = spring;
    let num = 1;
    if (first) {
      num = 0.98;
    }
    obj = { transform: null };
    obj = { scale: obj.withSpring(num, YOU_BAR_SPRING_CONFIG) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withSpring: isLargeAvatar(isAvatarPressed[18]).withSpring, isAvatarPressed, YOU_BAR_SPRING_CONFIG };
  fn.__closure = obj;
  fn.__workletHash = 10944764008850;
  fn.__initData = __initData4;
  const items1 = [onPress];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const callback = noop.useCallback(() => {
    if (onPress != null) {
      tmp();
    }
    setIsAvatarPressed(false);
  }, items1);
  callback1 = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (paths === 2) {
        paths = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              paths = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let obj1 = tmp4(paths[22]);
              const result = obj1.triggerHapticFeedback(tmp4(paths[22]).HapticFeedbackTypes.SOFT);
              c1 = 1;
              paths = 1;
              obj1 = { value: tmp4(paths[24])(paths[23], paths.paths), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            paths = 3;
            throw value;
          } else if (arg0 === 2) {
            paths = 3;
            obj = { value, done: true };
            return obj;
          } else {
            value.openUserSettings();
            closure_128_3(false);
            paths = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp12) {
          paths = tmp;
          throw tmp12;
        }
      }
    }),
    [],
  );
  const items2 = [callback1];
  const memo = noop.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const result = Gesture.LongPress().shouldCancelWhenOutside(false);
    const fn = function s() {
      isLargeAvatar(first[15]).runOnJS(setIsAvatarPressed)(true);
    };
    let obj = { runOnJS: ReanimatedRexport.runOnJS, setIsAvatarPressed };
    fn.__closure = obj;
    fn.__workletHash = 11956186059259;
    fn.__initData = __initData3;
    const LongPressResult = Gesture.LongPress();
    const fn2 = function n() {
      isLargeAvatar(first[15]).runOnJS(callback1)();
    };
    obj = { runOnJS: ReanimatedRexport.runOnJS, handleAvatarLongPress: callback1 };
    fn2.__closure = obj;
    fn2.__workletHash = 446001392642;
    fn2.__initData = __initData2;
    const onBeginResult = result.onBegin(fn);
    const fn3 = function t() {
      isLargeAvatar(first[15]).runOnJS(setIsAvatarPressed)(false);
    };
    const onStartResult = result.onBegin(fn).onStart(fn2);
    fn3.__closure = { runOnJS: ReanimatedRexport.runOnJS, setIsAvatarPressed };
    fn3.__workletHash = 1675248979678;
    fn3.__initData = __initData;
    return onStartResult.onFinalize(fn3);
  }, items2);
  [][0] = isLargeAvatar;
  const callback2 = noop.useCallback(
    (arg0, arg1, transitionState, cleanup) =>
      closure_1_22(arg1 ? YouBarAvatarLarge : YouBarAvatar, { transitionState, cleanup }, arg0),
    [],
  );
  let tmp12 = null;
  if (null != stateFromStores) {
    obj = { gesture: memo, children: null };
    obj1 = {
      onPress: callback,
      onPressIn() {
        return setIsAvatarPressed(true);
      },
      onPressOut() {
        return setIsAvatarPressed(false);
      },
      android_ripple: { color: "transparent" },
      children: null,
    };
    const obj2 = { style: null, children: null };
    size = {
      height: tmp(tmp2[13]).AVATAR_SIZE_MAP[closure_12],
      width: tmp(tmp2[13]).AVATAR_SIZE_MAP[closure_12],
      position: "relative",
    };
    const items3 = [size, animatedStyle];
    obj2.style = items3;
    const obj3 = {
      items: tmp11,
      getItemKey(arg0) {
        return arg0.toString();
      },
      renderItem: callback2,
    };
    obj2.children = closure_22(tmp(tmp2[14]).TransitionGroup, obj3);
    obj1.children = closure_22(onPress(tmp2[15]).View, obj2);
    obj.children = closure_22(closure_7, obj1);
    tmp12 = closure_22(tmp(tmp2[25]).GestureDetector, obj);
  }
  return tmp12;
});
