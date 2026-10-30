// discord_app/modules/conjure/background_frames/native/ConjureAppPictureInPicture.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import LegacyBaseButton from "../../../../../_runtime/05298_LegacyBaseButton.js";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import VoiceNormalIcon2 from "../../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import getGuildIdForEmbeddedSurfaceDefault from "../../../embedded_apps/utils/getGuildIdForEmbeddedSurface.tsx";
import VoiceXIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceXIcon.tsx";
import conjureFrameSound from "../conjureFrameSound.tsx";
import conjureBackgroundFrames from "../conjureBackgroundFrames.tsx";
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout.tsx";
import conjureAppPictureInPictureActions2 from "conjureAppPictureInPictureActions.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import FramesStore from "../../../frames/FramesStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
function StaticCard(arg0) {
  ({ frame, appName } = arg0);
  const tmp4 = getGuildIdForEmbeddedSurfaceDefault(frame.surface);
  _require = tmp4;
  const tmp = closure_16();
  const items = [GuildStore];
  const items1 = [tmp4];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  const obj2 = { style: tmp.card, children: null };
  let tmp9 = null;
  if (null != stateFromStores) {
    const obj3 = { guild: stateFromStores, size: tmp5(6951).GuildIconSizes.NORMAL };
    tmp9 = closure_10(GuildIconDefault, obj3);
    const tmp2Result = GuildIconDefault;
  }
  const items2 = [
    tmp9,
    closure_10(require("Text/Text").Text, {
      variant: "text-xs/semibold",
      color: "text-strong",
      lineClamp: 2,
      children: appName,
    }),
  ];
  obj2.children = items2;
  return closure_11(View, obj2);
}
function SoundBadge(frame) {
  frame = frame.frame;
  const tmp = closure_16();
  if (obj.showsFrameSoundToggle(frame)) {
    if (frame.data.userMuted) {
      let VoiceNormalIcon = VoiceXIcon.VoiceXIcon;
    } else {
      VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
    }
    const obj2 = { style: tmp.soundBadge, pointerEvents: "none", children: null };
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
    obj2.children = closure_1_10(VoiceNormalIcon, obj3);
    return closure_1_10(View, obj2);
  } else {
    return null;
  }
  obj = conjureFrameSound;
}
const View = fn(17).View;
const ThemeTypes = fn(1072).ThemeTypes;
const FramesConstants = fn(6841);
({ asLaunched: closure_8, FrameLayoutModes } = FramesConstants);
const MIN_PAN_GESTURE_MOVE = fn(11205).MIN_PAN_GESTURE_MOVE;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let DeviceUtils = fn(4966);
DeviceUtils = DeviceUtils.getRamSize();
if (DeviceUtils == null) {
  DeviceUtils = Infinity;
}
let closure_12 = DeviceUtils < 4;
let closure_13 = { mass: 0.25, damping: 40, stiffness: 300, overshootClamping: true };
let closure_14 = { mass: 0.4, damping: 22, stiffness: 220 };
let closure_15 = {
  layoutMode: FrameLayoutModes.PIP,
  portraitSafeAreasConfig: fn(18944).DEFAULT_PORTRAIT_LETTERBOX_CONFIG,
};
const createStyles = fn(5009);
let obj = { window: null, mask: null, card: null, soundBadge: null };
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj.window = rect;
obj.mask = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.lg };
const rect1 = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_8,
  padding: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj.card = rect1;
const rect2 = {
  position: "absolute",
  top: nativeDefault.space.PX_6,
  right: nativeDefault.space.PX_6,
  padding: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
};
obj.soundBadge = rect2;
let closure_16 = createStyles.createStyles(obj);
let closure_19 = {
  code: "function ConjureAppPictureInPictureTsx1(specs){const{getPictureInPictureBounds,windowWidth,windowHeight,safeArea,size}=this.__closure;return getPictureInPictureBounds({windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,size:size,topAvoidance:specs.top,bottomAvoidance:specs.bottom});}",
};
let closure_20 = {
  code: "function ConjureAppPictureInPictureTsx2(){const{dragging,overCloseTarget,closeTargetShown,closeTargetHovered}=this.__closure;dragging.set(false);overCloseTarget.set(false);closeTargetShown.set(false);closeTargetHovered.set(false);}",
};
let closure_21 = {
  code: "function ConjureAppPictureInPictureTsx3(event){const{overCloseTarget,closing,runOnJS,closeAfterShrink,position,getSnappedPosition,getBounds,avoidance}=this.__closure;if(overCloseTarget.get()){closing.set(true);runOnJS(closeAfterShrink)();return;}position.set(getSnappedPosition(position.get(),{x:event.velocityX,y:event.velocityY},getBounds(avoidance.get())));}",
};
let closure_22 = {
  code: "function ConjureAppPictureInPictureTsx4(event){const{dragStart,position,isOverCloseTarget,closeTargetCenter,overCloseTarget,closeTargetHovered,runOnJS,hapticOverCloseTarget}=this.__closure;const start=dragStart.get();position.set({x:start.x+event.translationX,y:start.y+event.translationY});const over=isOverCloseTarget({x:event.absoluteX,y:event.absoluteY},closeTargetCenter);if(over!==overCloseTarget.get()){overCloseTarget.set(over);closeTargetHovered.set(over);if(over)runOnJS(hapticOverCloseTarget)();}}",
};
let closure_23 = {
  code: "function ConjureAppPictureInPictureTsx5(){const{moved,dragStart,clampToBounds,position,getBounds,avoidance,dragging,closeTargetShown}=this.__closure;moved.set(true);dragStart.set(clampToBounds(position.get(),getBounds(avoidance.get())));dragging.set(true);closeTargetShown.set(true);}",
};
let closure_24 = {
  code: "function ConjureAppPictureInPictureTsx6(_event,success){const{open}=this.__closure;if(success)open();}",
};
const __initData = {
  code: "function ConjureAppPictureInPictureTsx7(){const{dragging,overCloseTarget,closing,position,clampToBounds,getBounds,avoidance,DRAGGING_SCALE,closeTargetCenter,size,OVER_CLOSE_TARGET_SCALE,FOLLOW_SPRING,SETTLE_SPRING,withTiming,CLOSE_ANIMATION_MS,withSpring}=this.__closure;const isDragging=dragging.get();const onCloseTarget=overCloseTarget.get()||closing.get();let{x:x,y:y}=isDragging?position.get():clampToBounds(position.get(),getBounds(avoidance.get()));let scale=isDragging?DRAGGING_SCALE:1;if(onCloseTarget){x=closeTargetCenter.x-size.width/2;y=closeTargetCenter.y-size.height/2;scale=closing.get()?0:OVER_CLOSE_TARGET_SCALE;}const spring=isDragging&&!onCloseTarget?FOLLOW_SPRING:SETTLE_SPRING;return{width:size.width,height:size.height,opacity:closing.get()?withTiming(0,{duration:CLOSE_ANIMATION_MS}):1,transform:[{translateX:withSpring(x,spring)},{translateY:withSpring(y,spring)},{scale:withSpring(scale,spring)}]};}",
};
let obj4 = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.lg };
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPicture.tsx");

export default noop.memo(function ConjureAppPictureInPicture(frameId) {
  frameId = frameId.frameId;
  const index = frameId.index;
  let size = frameId.size;
  const windowWidth = frameId.windowWidth;
  const windowHeight = frameId.windowHeight;
  const safeArea = frameId.safeArea;
  const avoidance = frameId.avoidance;
  const closeTargetCenter = frameId.closeTargetCenter;
  const closeTargetShown = frameId.closeTargetShown;
  const closeTargetHovered = frameId.closeTargetHovered;
  let str;
  closure_12 = undefined;
  let FOLLOW_SPRING;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let memo1;
  let tmp = sharedValue2();
  let items = [safeArea];
  const items1 = [frameId];
  const stateFromStores = frameId(size[13]).useStateFromStores(
    items,
    () => React6(FramesStore.getFrame(frameId)),
    items1,
  );
  let obj = frameId(size[13]);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = frameId(size[19]).useGetOrFetchApplication(applicationId);
  str = undefined;
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  let obj2 = frameId(size[19]);
  const tmp7 =
    2 === frameId(size[20]).useEmbeddedAppShimVersion(frameId(size[21]).CONJURE_APP_PICTURE_IN_PICTURE_LOCATION);
  closure_12 = tmp7;
  let fn = function k(top) {
    return conjureAppPictureInPictureLayout.getPictureInPictureBounds({
      windowWidth,
      windowHeight,
      safeArea,
      size,
      topAvoidance: top.top,
      bottomAvoidance: top.bottom,
    });
  };
  let tmp2Result = frameId(size[20]);
  fn.__closure = {
    getPictureInPictureBounds: frameId(size[22]).getPictureInPictureBounds,
    windowWidth,
    windowHeight,
    safeArea,
    size,
  };
  fn.__workletHash = 15664785095562;
  fn.__initData = sharedValue5;
  const items2 = [windowWidth, windowHeight, safeArea, size];
  FOLLOW_SPRING = windowWidth.useCallback(fn, items2);
  let obj3 = {
    getPictureInPictureBounds: frameId(size[22]).getPictureInPictureBounds,
    windowWidth,
    windowHeight,
    safeArea,
    size,
  };
  const tmp2Result9 = frameId(size[23]);
  sharedValue = tmp2Result9.useSharedValue(
    frameId(size[22]).getStackedPosition(index, size, FOLLOW_SPRING(avoidance.get())),
  );
  const tmp2Result10 = frameId(size[22]);
  sharedValue1 = frameId(size[23]).useSharedValue(sharedValue.get());
  const tmp2Result11 = frameId(size[23]);
  sharedValue2 = frameId(size[23]).useSharedValue(false);
  const items3 = [avoidance, FOLLOW_SPRING, index, sharedValue2, sharedValue, size];
  const effect = windowWidth.useEffect(() => {
    if (!sharedValue2.get()) {
      const result = sharedValue.set(
        conjureAppPictureInPictureLayout.getStackedPosition(index, size, callback(avoidance.get())),
      );
    }
  }, items3);
  const tmp2Result12 = frameId(size[23]);
  sharedValue3 = frameId(size[23]).useSharedValue(false);
  const tmp2Result13 = frameId(size[23]);
  sharedValue4 = frameId(size[23]).useSharedValue(false);
  const tmp2Result14 = frameId(size[23]);
  sharedValue5 = frameId(size[23]).useSharedValue(false);
  const items4 = [frameId];
  callback1 = windowWidth.useCallback(() => {
    const tmp = React6(FramesStore.getFrame(frameId));
    if (null != tmp) {
      const result = conjureBackgroundFrames.returnToConjureFrameSurface(tmp);
    }
  }, items4);
  const items5 = [frameId, str];
  callback2 = windowWidth.useCallback(
    () => conjureAppPictureInPictureActions2.showConjureAppPictureInPictureActions(frameId, str),
    items5,
  );
  const items6 = [frameId];
  callback3 = windowWidth.useCallback(() => {
    const timerId = setTimeout(() => index(size[25])(frameId), 180);
  }, items6);
  callback4 = windowWidth.useCallback(
    () => frameId(size[26]).triggerHapticFeedback(frameId(size[26]).HapticFeedbackTypes.IMPACT_MEDIUM),
    [],
  );
  const items7 = [
    avoidance,
    callback3,
    sharedValue5,
    sharedValue1,
    sharedValue3,
    FOLLOW_SPRING,
    callback4,
    sharedValue2,
    callback1,
    sharedValue4,
    sharedValue,
    callback2,
    closeTargetCenter,
    closeTargetHovered,
    closeTargetShown,
  ];
  const memo = windowWidth.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const maxPointersResult = Gesture.Pan().maxPointers(1);
    const fn = function s() {
      const result = sharedValue2.set(true);
      value = sharedValue.get();
      const result1 = sharedValue1.set(frameId(size[22]).clampToBounds(value, callback(avoidance.get())));
      const result2 = sharedValue3.set(true);
      const result3 = closeTargetShown.set(true);
    };
    const minDistanceResult = Gesture.Pan().maxPointers(1).minDistance(MIN_PAN_GESTURE_MOVE);
    fn.__closure = {
      moved: sharedValue2,
      dragStart: sharedValue1,
      clampToBounds: conjureAppPictureInPictureLayout.clampToBounds,
      position: sharedValue,
      getBounds,
      avoidance,
      dragging: sharedValue3,
      closeTargetShown,
    };
    fn.__workletHash = 13934479222574;
    fn.__initData = __initData4;
    let obj = {
      moved: sharedValue2,
      dragStart: sharedValue1,
      clampToBounds: conjureAppPictureInPictureLayout.clampToBounds,
      position: sharedValue,
      getBounds,
      avoidance,
      dragging: sharedValue3,
      closeTargetShown,
    };
    const fn2 = function n(translationX) {
      const point = sharedValue1.get();
      const point1 = { x: point.x + translationX.translationX, y: point.y + translationX.translationY };
      const result = sharedValue.set(point1);
      const point2 = { x: translationX.absoluteX, y: translationX.absoluteY };
      const isOverCloseTargetResult = frameId(size[22]).isOverCloseTarget(point2, closeTargetCenter);
      if (isOverCloseTargetResult !== sharedValue4.get()) {
        const result1 = sharedValue4.set(isOverCloseTargetResult);
        const result2 = closeTargetHovered.set(isOverCloseTargetResult);
        if (isOverCloseTargetResult) {
          frameId(size[23]).runOnJS(__initData4)();
          const tmp2Result = frameId(size[23]);
        }
      }
      const obj2 = frameId(size[22]);
    };
    const onStartResult = minDistanceResult.onStart(fn);
    fn2.__closure = {
      dragStart: sharedValue1,
      position: sharedValue,
      isOverCloseTarget: conjureAppPictureInPictureLayout.isOverCloseTarget,
      closeTargetCenter,
      overCloseTarget: sharedValue4,
      closeTargetHovered,
      runOnJS: ReanimatedRexport.runOnJS,
      hapticOverCloseTarget: callback4,
    };
    fn2.__workletHash = 759889640152;
    fn2.__initData = __initData3;
    let obj2 = {
      dragStart: sharedValue1,
      position: sharedValue,
      isOverCloseTarget: conjureAppPictureInPictureLayout.isOverCloseTarget,
      closeTargetCenter,
      overCloseTarget: sharedValue4,
      closeTargetHovered,
      runOnJS: ReanimatedRexport.runOnJS,
      hapticOverCloseTarget: callback4,
    };
    const fn3 = function o(arg0) {
      if (sharedValue4.get()) {
        const result = sharedValue5.set(true);
        frameId(size[23]).runOnJS(__initData3)();
        const obj3 = frameId(size[23]);
      } else {
        const point = { x: null, y: null };
        ({ velocityX: obj2.x, velocityY: obj2.y } = arg0);
        value = sharedValue.get();
        const result1 = sharedValue.set(frameId(size[22]).getSnappedPosition(value, point, callback(avoidance.get())));
        const obj = frameId(size[22]);
      }
    };
    const onUpdateResult = onStartResult.onUpdate(fn2);
    fn3.__closure = {
      overCloseTarget: sharedValue4,
      closing: sharedValue5,
      runOnJS: ReanimatedRexport.runOnJS,
      closeAfterShrink: callback3,
      position: sharedValue,
      getSnappedPosition: conjureAppPictureInPictureLayout.getSnappedPosition,
      getBounds,
      avoidance,
    };
    fn3.__workletHash = 8615317749760;
    fn3.__initData = __initData2;
    let obj3 = {
      overCloseTarget: sharedValue4,
      closing: sharedValue5,
      runOnJS: ReanimatedRexport.runOnJS,
      closeAfterShrink: callback3,
      position: sharedValue,
      getSnappedPosition: conjureAppPictureInPictureLayout.getSnappedPosition,
      getBounds,
      avoidance,
    };
    const fn4 = function t() {
      const result = sharedValue3.set(false);
      const result1 = sharedValue4.set(false);
      const result2 = closeTargetShown.set(false);
      const result3 = closeTargetHovered.set(false);
    };
    fn4.__closure = { dragging: sharedValue3, overCloseTarget: sharedValue4, closeTargetShown, closeTargetHovered };
    fn4.__workletHash = 15707415120147;
    fn4.__initData = __initData;
    const onEndResult = onUpdateResult.onEnd(fn3);
    const Gesture2 = LegacyBaseButton.Gesture;
    const onFinalizeResult = onUpdateResult.onEnd(fn3).onFinalize(fn4);
    const LongPressResult = Gesture2.LongPress();
    const runOnJSResult = Gesture2.LongPress().runOnJS(true);
    const minDurationResult = Gesture2.LongPress().runOnJS(true).minDuration(400);
    const Gesture3 = LegacyBaseButton.Gesture;
    const onStartResult1 = Gesture2.LongPress().runOnJS(true).minDuration(400).onStart(callback2);
    const TapResult = Gesture3.Tap();
    const fn5 = function c(arg0, arg1) {
      if (arg1) {
        __initData();
      }
    };
    fn5.__closure = { open: callback1 };
    fn5.__workletHash = 6960600238096;
    fn5.__initData = __initData5;
    const obj4 = { open: callback1 };
    const runOnJSResult1 = Gesture3.Tap().runOnJS(true);
    const Gesture4 = LegacyBaseButton.Gesture;
    return Gesture4.Race(onFinalizeResult, onStartResult1, Gesture3.Tap().runOnJS(true).onEnd(fn5));
  }, items7);
  const tmp2Result15 = frameId(size[23]);
  class U {
    constructor() {
      value = closure_17.get();
      value1 = closure_18.get();
      if (!value1) {
        tmp3 = closure_19;
        value1 = closure_19.get();
      }
      if (value) {
        tmp11 = closure_14;
        value2 = closure_14.get();
      } else {
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[22]);
        tmp6 = closure_14;
        tmp8 = closure_13;
        tmp9 = avoidance;
        value3 = closure_14.get();
        value2 = obj.clampToBounds(value3, closure_13(avoidance.get()));
      }
      ({ x, y } = value2);
      num = 1;
      num2 = 1;
      if (value) {
        num2 = 1.05;
      }
      if (value1) {
        tmp12 = closeTargetCenter;
        tmp13 = size;
        num3 = 2;
        tmp16 = closure_19;
        diff = closeTargetCenter.x - size.width / 2;
        diff1 = closeTargetCenter.y - size.height / 2;
        num4 = 0.4;
        if (closure_19.get()) {
          num4 = 0;
        }
        num2 = num4;
        y = diff1;
        x = diff;
      }
      if (value) {
        if (!value1) {
          tmp17 = closure_13;
        }
        size = { width: null, height: null, opacity: null, transform: null };
        tmp18 = size;
        ({ width: obj2.width, height: obj2.height } = size);
        tmp19 = closure_19;
        if (closure_19.get()) {
          tmp20 = closure_0;
          tmp21 = closure_2;
          obj3 = closure_0(closure_2[28]);
          num5 = 0;
          num = obj3.withTiming(0, { duration: 180 });
        }
        size.opacity = num;
        obj1 = { translateX: null };
        tmp22 = closure_0;
        tmp23 = closure_2;
        obj5 = closure_0(closure_2[29]);
        obj1.translateX = obj5.withSpring(x, tmp17);
        items = [, ,];
        items[0] = obj1;
        obj10 = { translateY: null };
        tmp24 = closure_0;
        tmp25 = closure_2;
        obj7 = closure_0(closure_2[29]);
        obj10.translateY = obj7.withSpring(y, tmp17);
        items[1] = obj10;
        obj11 = { scale: null };
        tmp26 = closure_0;
        tmp27 = closure_2;
        obj9 = closure_0(closure_2[29]);
        obj11.scale = obj9.withSpring(num2, tmp17);
        items[2] = obj11;
        size.transform = items;
        return size;
      }
      tmp17 = closure_14;
      return;
    }
  }
  const tmp2Result16 = frameId(size[23]);
  U.__closure = {
    dragging: sharedValue3,
    overCloseTarget: sharedValue4,
    closing: sharedValue5,
    position: sharedValue,
    clampToBounds: frameId(size[22]).clampToBounds,
    getBounds: FOLLOW_SPRING,
    avoidance,
    DRAGGING_SCALE: 1.05,
    closeTargetCenter,
    size,
    OVER_CLOSE_TARGET_SCALE: 0.4,
    FOLLOW_SPRING,
    SETTLE_SPRING: sharedValue,
    withTiming: frameId(size[28]).withTiming,
    CLOSE_ANIMATION_MS: 180,
    withSpring: frameId(size[29]).withSpring,
  };
  U.__workletHash = 4130993795296;
  U.__initData = __initData;
  const items8 = [stateFromStores, str, tmp7];
  const animatedStyle = tmp2Result16.useAnimatedStyle(U);
  memo1 = windowWidth.useMemo(() => {
    if (null != stateFromStores) {
      const conjureAppPictureInPictureActions = conjureAppPictureInPictureActions2.getConjureAppPictureInPictureActions(
        tmp,
        str,
        closure_12,
      );
      let mapped = conjureAppPictureInPictureActions.map((label, index) => {
        str = "activate";
        if (0 !== index) {
          const _HermesInternal = HermesInternal;
          str = "action-" + index;
        }
        return { name: str, label: label.label, onPress: label.onPress };
      });
    } else {
      mapped = [];
    }
    return mapped;
  }, items8);
  [][0] = memo1;
  let tmp23Result2 = null;
  if (null != stateFromStores) {
    let obj5 = { theme: closeTargetCenter.DARK, children: null };
    let obj6 = { gesture: memo, children: null };
    let obj7 = {
      style: null,
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: null,
      accessibilityActions: null,
      onAccessibilityAction: null,
      children: null,
    };
    const items9 = [tmp.window, animatedStyle];
    obj7.style = items9;
    const intl = tmp2(tmp3[31]).intl;
    let obj8 = { appName: str };
    obj7.accessibilityLabel = intl.formatToPlainString(index(tmp3[32]).dPf03z, obj8);
    obj7.accessibilityActions = memo1.map((name) => ({ name: name.name, label: name.label }));
    obj7.onAccessibilityAction = tmp21;
    const obj9 = { style: tmp.mask, pointerEvents: "none", children: null };
    const obj10 = { frameId, level: tmp2(tmp3[34]).FrameStackLevel.AboveAppContent, presentation: sharedValue1 };
    const items10 = [stateFromStores(index(tmp3[33]), obj10)];
    let tmp23Result = null;
    if (closure_12) {
      const obj11 = { frame: stateFromStores, appName: str };
      tmp23Result = tmp23(sharedValue3, obj11);
    }
    items10[1] = tmp23Result;
    obj9.children = items10;
    const items11 = [str(windowHeight, obj9)];
    const obj12 = { frame: stateFromStores };
    items11[1] = stateFromStores(sharedValue4, obj12);
    obj7.children = items11;
    obj6.children = str(index(tmp3[23]).View, obj7);
    obj5.children = stateFromStores(tmp2(tmp3[27]).GestureDetector, obj6);
    tmp23Result2 = tmp23(tmp2(tmp3[30]).ThemeContextProvider, obj5);
    const tmp28 = index(tmp3[33]);
  }
  return tmp23Result2;
});
