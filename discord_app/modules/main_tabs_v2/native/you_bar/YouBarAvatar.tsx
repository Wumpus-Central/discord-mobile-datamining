// === Module 19032: YouBarAvatar ===

// Module 19032 (YouBarAvatar)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import native2 from "native" /* 5314 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5535 */;
import ClipView from "ClipView" /* 9437 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import SelfPresenceStore from "SelfPresenceStore" /* 7252 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;

require = fn;
function YouBarAvatarLarge(transitionState) {
  transitionState = transitionState.transitionState;
  _require = transitionState;
  c4 = undefined;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  let tmp = closure_24();
  items = [c9];
  let OFFLINE = require("initialize").useStateFromStores(items, () => _undefined10.getStatus());
  importDefault = OFFLINE;
  let obj = require("initialize");
  let items1 = [c10];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => _undefined11.getCurrentUser());
  let result = require("native").AVATAR_SIZE_MAP[closure_13] / height;
  dependencyMap = result;
  let result1 = (height - require("native").AVATAR_SIZE_MAP[closure_13]) / 2;
  c3 = result1;
  let tmp8 = transitionState === require("native").TransitionStates.MOUNTED;
  const obj2 = require("initialize");
  let num = 0;
  if (tmp8) {
    num = 1;
  }
  const sharedValue = require("module_1652").useSharedValue(num);
  c4 = sharedValue;
  const obj3 = require("module_1652");
  let num2 = 1;
  if (!tmp8) {
    num2 = result;
  }
  const sharedValue1 = require("module_1652").useSharedValue(num2);
  noop = sharedValue1;
  const tmp2Result = require("module_1652");
  if (tmp8) {
    let tmp11 = -closure_17;
  } else {
    tmp11 = -result1;
  }
  const sharedValue2 = require("module_1652").useSharedValue(tmp11);
  c6 = sharedValue2;
  const tmp2Result13 = require("module_1652");
  if (tmp8) {
    let diff = -closure_17 - (height - closure_15) / 2;
  } else {
    diff = -result1;
  }
  const sharedValue3 = require("module_1652").useSharedValue(diff);
  let items2 = [transitionState, sharedValue, sharedValue1, sharedValue2, sharedValue3, result, result1];
  const effect = noop.useEffect(() => {
    const tmp = c0 === native2.TransitionStates.YEETED;
    let num = 1;
    let num2 = 1;
    if (tmp) {
      num2 = 0;
    }
    const result = _undefined5.set(num2);
    if (tmp) {
      num = c2;
    }
    const result1 = _undefined6.set(num);
    if (tmp) {
      let tmp8 = -c3;
    } else {
      tmp8 = -closure_2_17;
    }
    const result2 = _undefined7.set(tmp8);
    if (tmp) {
      let diff = -c3;
    } else {
      diff = -closure_2_17 - (dependencyMap - colors) / 2;
    }
    const result3 = _undefined8.set(diff);
  }, items2);
  const tmp2Result14 = require("module_1652");
  const avatarDecoration = require("useAvatarDecoration").useAvatarDecoration(stateFromStores);
  const tmp2Result15 = require("useAvatarDecoration");
  const items3 = [c8];
  const items4 = [OFFLINE];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => _undefined9.animateYouBarAvatarDeco);
  const memo = noop.useMemo(() => {
    let OFFLINE = c1;
    if (c1 === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    if (null != OFFLINE) {
      const result = statusSizeOverride / 2;
      const sum = result + native.STATUS_PADDING;
      const diff = dependencyMap - sum - statusSizeOverride / 4 * 2;
      const obj = { nativeCutouts: null };
      const point = { shape: ClipView.CutoutShape.Circle, x: diff + expandedHeight, y: diff + expandedHeight, size: 2 * sum };
      items = [point];
      obj.nativeCutouts = items;
      return obj;
    }
  }, items4);
  const tmp2Result16 = require("initialize");
  const items5 = [closure_26, require("spring/spring").withSpring, sharedValue1, closure_18, sharedValue2, sharedValue3, sharedValue, closure_25, transitionState, require("native").TransitionStates, require("module_1705").scheduleOnRN, transitionState.cleanup];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items5;
  class YouBarAvatarTsx2 {
    constructor() {
      rect = { transform: null, left: null, top: null, opacity: null };
      obj1 = { scale: closure_0(closure_1.get(), closure_2) };
      tmp = closure_0;
      tmp2 = closure_2;
      items = [];
      items[0] = obj1;
      rect.transform = items;
      rect.left = closure_0(closure_3.get(), closure_2);
      rect.top = closure_0(closure_4.get(), closure_2);
      value = closure_5.get();
      items1 = [, , , , ];
      items1[0] = closure_6;
      items1[1] = closure_7;
      items1[2] = closure_8;
      items1[3] = closure_9;
      items1[4] = closure_10;
      closure_0 = undefined;
      closure_1 = undefined;
      closure_2 = undefined;
      closure_3 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8] = items1;
      class YouBarAvatarTsx1 {
        constructor(arg0) {
          tmp = transitionState;
          if (transitionState) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0 === closure_1.YEETED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
          }
          return;
        }
      }
      items2 = [, , , ];
      items2[0] = tmp5;
      items2[1] = tmp6;
      items2[2] = tmp7;
      items2[3] = tmp8;
      YouBarAvatarTsx1.__closure = items2;
      YouBarAvatarTsx1.__workletHash = 12612160073355;
      YouBarAvatarTsx1.__initData = tmp4;
      rect.opacity = tmp(value, tmp2, "respect-motion-settings", YouBarAvatarTsx1);
      return rect;
    }
  }
  const items6 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33];
  YouBarAvatarTsx2.__closure = items6;
  YouBarAvatarTsx2.__workletHash = 7492548934333;
  YouBarAvatarTsx2.__initData = tmp22;
  const animatedStyle = require("module_1652").useAnimatedStyle(YouBarAvatarTsx2);
  const tmp2Result17 = require("module_1652");
  const token = require("useToken").useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  require("useToken");
  let tmp40Result = null;
  if (null != stateFromStores) {
    const obj4 = { style: null, children: null };
    const items7 = [tmp.avatarShadow, , ];
    size = { position: "absolute", width: height, height };
    items7[1] = size;
    items7[2] = animatedStyle;
    obj4.style = items7;
    let nativeCutouts;
    if (memo != null) {
      nativeCutouts = memo.nativeCutouts;
    }
    const obj5 = { cutouts: nativeCutouts, style: null, children: null };
    const size1 = { position: "absolute", width: height, height };
    obj5.style = size1;
    const obj6 = { style: null };
    size2 = { width: height, height, borderRadius: height / 2, backgroundColor: token };
    obj6.style = size2;
    obj5.children = closure_22(c6, obj6);
    const items8 = [closure_22(tmp35(9437), obj5), , , ];
    const obj7 = { user: stateFromStores, guildId: "Array", size, animate: true, needsOffscreenAlphaCompositing: null, status: null, statusSizeOverride: null, cutout: null, statusStyle: "listenerCount" };
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj7.status = OFFLINE;
    obj7.statusSizeOverride = statusSizeOverride;
    obj7.cutout = memo;
    let rect = { right: closure_14 - closure_19, bottom: closure_14 - closure_19 };
    obj7.statusStyle = rect;
    items8[1] = closure_22(tmp2(1187).Avatar, obj7);
    let mapped;
    const tmp35Result = tmp35(9437);
    const tmp44 = c6;
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
    const size4 = { width: height + 2, height: height + 2, borderRadius: (height + 2) / 2, borderWidth: 1, borderColor: tmp38 };
    obj9.style = size4;
    obj8.children = closure_22(tmp44, obj9);
    items8[2] = closure_22(tmp35(9437), obj8);
    let tmp41Result = null != avatarDecoration;
    if (tmp41Result) {
      const obj10 = { size: null, avatarDecoration: null, decorationStyle: null, animate: null, cutout: null };
      const tmp35Result4 = tmp35(9436);
      obj10.size = tmp2(9328).getDecorationSizeForAvatarSize(tmp45);
      obj10.avatarDecoration = avatarDecoration;
      const rect1 = { position: "absolute", top: null, left: null };
      const tmp2Result20 = tmp2(9328);
      rect1.top = -tmp2(9328).getDecorationSizeForAvatarSize(tmp45) - height / 2;
      const tmp2Result21 = tmp2(9328);
      rect1.left = -tmp2(9328).getDecorationSizeForAvatarSize(tmp45) - height / 2;
      obj10.decorationStyle = rect1;
      obj10.animate = stateFromStores1 && "always";
      const tmp2Result22 = tmp2(9328);
      const tmp2Result23 = tmp2(9328);
      obj10.cutout = tmp2Result23.getDecorationCutoutForAvatarCutout(memo, (tmp2(9328).getDecorationSizeForAvatarSize(tmp45) - height) / 2);
      tmp41Result = closure_22(tmp35Result4, obj10, avatarDecoration.asset);
      const tmp2Result24 = tmp2(9328);
    }
    items8[3] = tmp41Result;
    obj4.children = items8;
    tmp40Result = closure_23(tmp35(1652).View, obj4);
    const tmp35Result3 = tmp35(9437);
  }
  return tmp40Result;
}
function YouBarAvatar(transitionState) {
  transitionState = transitionState.transitionState;
  _require = transitionState;
  importDefault = undefined;
  items = [SelfPresenceStore];
  let OFFLINE = require("initialize").useStateFromStores(items, () => status.getStatus());
  let obj = require("initialize");
  let items1 = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj2 = require("initialize");
  const avatarDecoration = require("useAvatarDecoration").useAvatarDecoration(stateFromStores);
  const obj3 = require("useAvatarDecoration");
  let num = 0;
  if (transitionState === require("native").TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = require("module_1652").useSharedValue(num);
  const obj4 = require("module_1652");
  const items2 = [closure_29, require("spring/spring").withSpring, sharedValue, closure_18, closure_28, transitionState, require("native").TransitionStates, require("module_1705").scheduleOnRN, transitionState.cleanup];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  class YouBarAvatarTsx4 {
    constructor() {
      tmp = closure_0;
      value = closure_1.get();
      tmp3 = closure_2;
      items = [, , , , ];
      items[0] = closure_3;
      items[1] = closure_4;
      items[2] = closure_5;
      items[3] = closure_6;
      items[4] = closure_7;
      closure_0 = undefined;
      closure_1 = undefined;
      closure_2 = undefined;
      closure_3 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
      obj = { opacity: null };
      class YouBarAvatarTsx3 {
        constructor(arg0) {
          tmp = transitionState;
          if (transitionState) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0 === closure_1.YEETED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
          }
          return;
        }
      }
      items1 = [, , , ];
      items1[0] = tmp5;
      items1[1] = tmp6;
      items1[2] = tmp7;
      items1[3] = tmp8;
      YouBarAvatarTsx3.__closure = items1;
      YouBarAvatarTsx3.__workletHash = 3956764835913;
      YouBarAvatarTsx3.__initData = tmp4;
      obj.opacity = tmp(value, tmp3, "respect-motion-settings", YouBarAvatarTsx3);
      return obj;
    }
  }
  const items3 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  YouBarAvatarTsx4.__closure = items3;
  YouBarAvatarTsx4.__workletHash = 11641235222673;
  YouBarAvatarTsx4.__initData = tmp6;
  const items4 = [sharedValue, transitionState];
  const animatedStyle = require("module_1652").useAnimatedStyle(YouBarAvatarTsx4);
  const effect = noop.useEffect(() => {
    let num = 1;
    if (c0 === native2.TransitionStates.YEETED) {
      num = 0;
    }
    const result = _undefined.set(num);
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else {
    let result = (tmp(1187).AVATAR_SIZE_MAP[size2] - tmp(1187).AVATAR_SIZE_MAP[closure_12]) / 2;
    const obj5 = { style: null, children: null };
    const rect = { position: "absolute", top: -result, left: -result };
    const items5 = [rect, animatedStyle];
    obj5.style = items5;
    const obj6 = { user: stateFromStores, guildId: "Array", size: size2, animate: true, needsOffscreenAlphaCompositing: null, avatarDecoration, status: true, autoStatusCutout: "/assets/.cache/intl/bW9kdWxlcy9jaGVja291dC9tZXNzYWdlcw==" };
    if (OFFLINE === StatusTypes.UNKNOWN) {
      OFFLINE = StatusTypes.OFFLINE;
    }
    obj6.status = OFFLINE;
    obj5.children = closure_22(tmp(1187).Avatar, obj6);
    return closure_22(_modDef1652.View, obj5);
  }
  const tmpResult = require("module_1652");
}
get_ActivityIndicator = fn(17);
({ View: closure_6, Pressable: metroImportDefault } = get_ActivityIndicator);
const YouBarConstants = fn(17588);
({ YOU_BAR_AVATAR_LARGE_SIZE: closure_11, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: closure_12, YOU_BAR_AVATAR_SIZE: map1, YOU_BAR_STATUS_INSET: closure_14, YOU_BAR_HEIGHT: closure_15, YOU_BAR_LARGE_STATUS_SIZE: closure_16, YOU_BAR_PADDING: closure_17, YOU_BAR_SPRING_CONFIG: closure_18, YOU_BAR_STATUS_OFFSET: closure_19, YOU_BAR_AVATAR_LARGE_PX: closure_20 } = YouBarConstants);
const StatusTypes = fn(1072).StatusTypes;
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23 } = jsxProd);
const createStyles = fn(5243);
let obj = { avatarShadow: null };
let merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
obj.avatarShadow = {};
let closure_24 = createStyles.createStyles(obj);
let closure_25 = { code: "(function YouBarAvatarTsx1(finished){let[transitionState,TransitionStates,scheduleOnRN,cleanup]=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanup);}})" };
let closure_26 = { code: "(function YouBarAvatarTsx2(){let[withSpring,scale,YOU_BAR_SPRING_CONFIG,left,top,opacity,_worklet_12612160073355_init_data,transitionState,TransitionStates,scheduleOnRN,cleanup]=this.__closure;return{transform:[{scale:withSpring(scale.get(),YOU_BAR_SPRING_CONFIG)}],left:withSpring(left.get(),YOU_BAR_SPRING_CONFIG),top:withSpring(top.get(),YOU_BAR_SPRING_CONFIG),opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function YouBarAvatarTsx1Factory([_worklet_12612160073355_init_data,transitionState,TransitionStates,scheduleOnRN,cleanup]){const YouBarAvatarTsx1=function(finished){if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanup);}};YouBarAvatarTsx1.__closure=[transitionState,TransitionStates,scheduleOnRN,cleanup];YouBarAvatarTsx1.__workletHash=12612160073355;YouBarAvatarTsx1.__initData=_worklet_12612160073355_init_data;return YouBarAvatarTsx1;}([_worklet_12612160073355_init_data,transitionState,TransitionStates,scheduleOnRN,cleanup]))};})" };
let closure_28 = { code: "(function YouBarAvatarTsx3(finished){let[transitionState,TransitionStates,scheduleOnRN,cleanup]=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanup);}})" };
let closure_29 = { code: "(function YouBarAvatarTsx4(){let[withSpring,opacity,YOU_BAR_SPRING_CONFIG,_worklet_3956764835913_init_data,transitionState,TransitionStates,scheduleOnRN,cleanup]=this.__closure;return{opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function YouBarAvatarTsx3Factory([_worklet_3956764835913_init_data,transitionState,TransitionStates,scheduleOnRN,cleanup]){const YouBarAvatarTsx3=function(finished){if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanup);}};YouBarAvatarTsx3.__closure=[transitionState,TransitionStates,scheduleOnRN,cleanup];YouBarAvatarTsx3.__workletHash=3956764835913;YouBarAvatarTsx3.__initData=_worklet_3956764835913_init_data;return YouBarAvatarTsx3;}([_worklet_3956764835913_init_data,transitionState,TransitionStates,scheduleOnRN,cleanup]))};})" };
let closure_31 = { code: "(function YouBarAvatarTsx5(){let[withSpring,isAvatarPressed,YOU_BAR_SPRING_CONFIG]=this.__closure;return{transform:[{scale:withSpring(isAvatarPressed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};})" };
let closure_32 = { code: "(function YouBarAvatarTsx6(){let[scheduleOnRN,setIsAvatarPressed]=this.__closure;scheduleOnRN(setIsAvatarPressed,true);})" };
let closure_33 = { code: "(function YouBarAvatarTsx7(){let[scheduleOnRN,handleAvatarLongPress]=this.__closure;scheduleOnRN(handleAvatarLongPress);})" };
let closure_34 = { code: "(function YouBarAvatarTsx8(){let[scheduleOnRN,setIsAvatarPressed]=this.__closure;scheduleOnRN(setIsAvatarPressed,false);})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatar.tsx");

export default noop.memo(function YouBarAvatarAnimated(isLargeAvatar) {
  isLargeAvatar = isLargeAvatar.isLargeAvatar;
  _require = isLargeAvatar;
  const onPress = isLargeAvatar.onPress;
  let callback1;
  items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = require("initialize");
  [tmp5, c2] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  let items1 = [closure_31, require("spring/spring").withSpring, tmp5, closure_18];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  class YouBarAvatarTsx5 {
    constructor() {
      num = 1;
      tmp = closure_0;
      if (closure_1) {
        num = 0.98;
      }
      obj = { transform: null };
      obj1 = { scale: tmp(num, closure_2) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  let items2 = [tmp7, tmp8, tmp9];
  YouBarAvatarTsx5.__closure = items2;
  YouBarAvatarTsx5.__workletHash = 4651565273867;
  YouBarAvatarTsx5.__initData = tmp6;
  let items3 = [onPress];
  const animatedStyle = require("module_1652").useAnimatedStyle(YouBarAvatarTsx5);
  const callback = noop.useCallback(() => {
    if (c1 != null) {
      tmp();
    }
    _undefined2(false);
  }, items3);
  callback1 = noop.useCallback(callback1(function*() {
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const result = tmp4(paths[23]).triggerHapticFeedback(tmp4(paths[23]).HapticFeedbackTypes.SOFT);
            c1 = 1;
            paths = 1;
            const obj5 = { value: tmp4(paths[25])(paths[24], paths.paths), done: false };
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
          closure_128_2(false);
          paths = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        paths = tmp;
        throw tmp12;
      }
    }
  }), []);
  let items4 = [callback1];
  const memo = noop.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const result = Gesture.LongPress().shouldCancelWhenOutside(false);
    items = [closure_32, _mod1705.scheduleOnRN, c2];
    c0 = undefined;
    c1 = undefined;
    [tmp4, tmp5, tmp6] = items;
    class YouBarAvatarTsx6 {
      constructor() {
        tmp = closure_0(closure_1, true);
        return;
      }
    }
    const items1 = [tmp5, tmp6];
    YouBarAvatarTsx6.__closure = items1;
    YouBarAvatarTsx6.__workletHash = 9336474323041;
    YouBarAvatarTsx6.__initData = tmp4;
    const LongPressResult = Gesture.LongPress();
    const items2 = [closure_33, _mod1705.scheduleOnRN, callback1];
    c0 = undefined;
    c1 = undefined;
    [tmp7, tmp8, tmp9] = items2;
    class YouBarAvatarTsx7 {
      constructor() {
        tmp = closure_0(closure_1);
        return;
      }
    }
    const items3 = [tmp8, tmp9];
    YouBarAvatarTsx7.__closure = items3;
    YouBarAvatarTsx7.__workletHash = 11759750447418;
    YouBarAvatarTsx7.__initData = tmp7;
    const onBeginResult = result.onBegin(YouBarAvatarTsx6);
    const items4 = [closure_34, _mod1705.scheduleOnRN, c2];
    c0 = undefined;
    c1 = undefined;
    [tmp10, tmp11, tmp12] = items4;
    class YouBarAvatarTsx8 {
      constructor() {
        tmp = closure_0(closure_1, false);
        return;
      }
    }
    const items5 = [tmp11, tmp12];
    YouBarAvatarTsx8.__closure = items5;
    YouBarAvatarTsx8.__workletHash = 8238011315684;
    YouBarAvatarTsx8.__initData = tmp10;
    return result.onBegin(YouBarAvatarTsx6).onStart(YouBarAvatarTsx7).onFinalize(YouBarAvatarTsx8);
  }, items4);
  [][0] = isLargeAvatar;
  const callback2 = noop.useCallback((arg0, arg1, transitionState, cleanup) => closure_1_22(arg1 ? YouBarAvatarLarge : YouBarAvatar, { transitionState, cleanup }, arg0), []);
  let tmp16 = null;
  if (null != stateFromStores) {
    let obj4 = { gesture: memo, children: null };
    let obj5 = {
      onPress: callback,
      onPressIn() {
          return _undefined2(true);
        },
      onPressOut() {
          return _undefined2(false);
        },
      android_ripple: { color: "transparent" },
      children: null
    };
    const obj6 = { style: null, children: null };
    size = { height: tmp(1187).AVATAR_SIZE_MAP[closure_12], width: tmp(1187).AVATAR_SIZE_MAP[closure_12], position: "relative" };
    let items5 = [size, animatedStyle];
    obj6.style = items5;
    const obj7 = {
      items: tmp15,
      getItemKey(arg0) {
          return arg0.toString();
        },
      renderItem: callback2
    };
    obj6.children = closure_22(tmp(5314).TransitionGroup, obj7);
    obj5.children = closure_22(_modDef1652.View, obj6);
    obj4.children = closure_22(closure_7, obj5);
    tmp16 = closure_22(tmp(5535).GestureDetector, obj4);
  }
  return tmp16;
});