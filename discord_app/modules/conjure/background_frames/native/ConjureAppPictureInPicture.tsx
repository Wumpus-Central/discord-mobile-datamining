// discord_app/modules/conjure/background_frames/native/ConjureAppPictureInPicture.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import LegacyBaseButton from "../../../../../_runtime/05303_LegacyBaseButton.js";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import VoiceNormalIcon2 from "../../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import getGuildIdForEmbeddedSurfaceDefault from "../../../embedded_apps/utils/getGuildIdForEmbeddedSurface.tsx";
import VoiceXIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceXIcon.tsx";
import conjureFrameSound from "../conjureFrameSound.tsx";
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
    const obj3 = { guild: stateFromStores, size: tmp5(6957).GuildIconSizes.NORMAL };
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
const FramesConstants = fn(6847);
({ asLaunched: closure_8, FrameLayoutModes } = FramesConstants);
const MIN_PAN_GESTURE_MOVE = fn(11224).MIN_PAN_GESTURE_MOVE;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let DeviceUtils = fn(4971);
DeviceUtils = DeviceUtils.getRamSize();
if (DeviceUtils == null) {
  DeviceUtils = Infinity;
}
let closure_12 = tmp4;
let FOLLOW_SPRING = { mass: 0.25, damping: 40, stiffness: 300, overshootClamping: true };
const styles = { mass: 0.4, damping: 22, stiffness: 220 };
let closure_15 = {
  layoutMode: FrameLayoutModes.PIP,
  portraitSafeAreasConfig: fn(19000).DEFAULT_PORTRAIT_LETTERBOX_CONFIG,
};
const createStyles = fn(5014);
let obj = {
  window: null,
  content: null,
  mask: null,
  interactiveMask: null,
  handle: null,
  grip: null,
  card: null,
  soundBadge: null,
};
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj.window = rect;
obj.content = { flex: 1 };
obj.mask = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.lg };
let obj4 = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.lg };
obj.interactiveMask = { borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none };
let obj5 = { borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none };
obj.handle = {
  height: fn(19120).INTERACTIVE_HANDLE_HEIGHT,
  alignItems: "center",
  justifyContent: "center",
  borderTopLeftRadius: nativeDefault.radii.lg,
  borderTopRightRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let size = {
  width: nativeDefault.space.PX_32,
  height: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.ICON_MUTED,
};
obj.grip = size;
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
  code: "function ConjureAppPictureInPictureTsx1(specs){const{getPictureInPictureBounds,windowWidth,windowHeight,safeArea,windowSize}=this.__closure;return getPictureInPictureBounds({windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,size:windowSize,topAvoidance:specs.top,bottomAvoidance:specs.bottom});}",
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
let closure_25 = {
  code: "function ConjureAppPictureInPictureTsx7(){const{dragging,overCloseTarget,closing,position,clampToBounds,getBounds,avoidance,DRAGGING_SCALE,closeTargetCenter,windowSize,OVER_CLOSE_TARGET_SCALE,FOLLOW_SPRING,SETTLE_SPRING,withTiming,CLOSE_ANIMATION_MS,withSpring}=this.__closure;const isDragging=dragging.get();const onCloseTarget=overCloseTarget.get()||closing.get();let{x:x,y:y}=isDragging?position.get():clampToBounds(position.get(),getBounds(avoidance.get()));let scale=isDragging?DRAGGING_SCALE:1;if(onCloseTarget){x=closeTargetCenter.x-windowSize.width/2;y=closeTargetCenter.y-windowSize.height/2;scale=closing.get()?0:OVER_CLOSE_TARGET_SCALE;}const spring=isDragging&&!onCloseTarget?FOLLOW_SPRING:SETTLE_SPRING;return{width:windowSize.width,height:windowSize.height,opacity:closing.get()?withTiming(0,{duration:CLOSE_ANIMATION_MS}):1,transform:[{translateX:withSpring(x,spring)},{translateY:withSpring(y,spring)},{scale:withSpring(scale,spring)}]};}",
};
let obj6 = {
  height: fn(19120).INTERACTIVE_HANDLE_HEIGHT,
  alignItems: "center",
  justifyContent: "center",
  borderTopLeftRadius: nativeDefault.radii.lg,
  borderTopRightRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPicture.tsx");

export default noop.memo(function ConjureAppPictureInPicture(frameId) {
  frameId = frameId.frameId;
  const stackOffset = frameId.stackOffset;
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
  FOLLOW_SPRING = undefined;
  let memo;
  let presentation;
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
  let memo2;
  let tmp = sharedValue();
  let items = [safeArea];
  const items1 = [frameId];
  const stateFromStores = frameId(size[14]).useStateFromStores(
    items,
    () => React6(FramesStore.getFrame(frameId)),
    items1,
  );
  let obj = frameId(size[14]);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = frameId(size[20]).useGetOrFetchApplication(applicationId);
  str = undefined;
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  let obj2 = frameId(size[20]);
  const tmp7 =
    2 === frameId(size[21]).useEmbeddedAppShimVersion(frameId(size[22]).CONJURE_APP_PICTURE_IN_PICTURE_LOCATION);
  closure_12 = tmp7;
  let tmp2Result = frameId(size[21]);
  let result = frameId(size[23]).isConjureAppPictureInPictureInteractive(stateFromStores, closure_12);
  FOLLOW_SPRING = result;
  const items2 = [result, size];
  memo = windowWidth.useMemo(() => conjureAppPictureInPictureLayout.getPictureInPictureWindowSize(size, c13), items2);
  let fn = function k(top) {
    return conjureAppPictureInPictureLayout.getPictureInPictureBounds({
      windowWidth,
      windowHeight,
      safeArea,
      size: memo,
      topAvoidance: top.top,
      bottomAvoidance: top.bottom,
    });
  };
  const tmp2Result10 = frameId(size[23]);
  const tmp8 = closure_12;
  fn.__closure = {
    getPictureInPictureBounds: frameId(size[12]).getPictureInPictureBounds,
    windowWidth,
    windowHeight,
    safeArea,
    windowSize: memo,
  };
  fn.__workletHash = 8790137180106;
  fn.__initData = sharedValue3;
  const items3 = [windowWidth, windowHeight, safeArea, memo];
  presentation = windowWidth.useCallback(fn, items3);
  let obj3 = {
    getPictureInPictureBounds: frameId(size[12]).getPictureInPictureBounds,
    windowWidth,
    windowHeight,
    safeArea,
    windowSize: memo,
  };
  const tmp2Result11 = frameId(size[24]);
  sharedValue = tmp2Result11.useSharedValue(
    frameId(size[12]).getStackedPosition(stackOffset, presentation(avoidance.get())),
  );
  const tmp2Result12 = frameId(size[12]);
  sharedValue1 = frameId(size[24]).useSharedValue(sharedValue.get());
  const tmp2Result13 = frameId(size[24]);
  sharedValue2 = frameId(size[24]).useSharedValue(false);
  const items4 = [avoidance, presentation, stackOffset, sharedValue2, sharedValue];
  const effect = windowWidth.useEffect(() => {
    if (!sharedValue2.get()) {
      const result = sharedValue.set(
        conjureAppPictureInPictureLayout.getStackedPosition(stackOffset, callback(avoidance.get())),
      );
    }
  }, items4);
  const tmp2Result14 = frameId(size[24]);
  sharedValue3 = frameId(size[24]).useSharedValue(false);
  const tmp2Result15 = frameId(size[24]);
  sharedValue4 = frameId(size[24]).useSharedValue(false);
  const tmp2Result16 = frameId(size[24]);
  sharedValue5 = frameId(size[24]).useSharedValue(false);
  const items5 = [frameId];
  callback1 = windowWidth.useCallback(() => {
    const tmp = React6(FramesStore.getFrame(frameId));
    if (null != tmp) {
      const result = conjureAppPictureInPictureActions2.openConjureAppPictureInPictureFrame(tmp);
    }
  }, items5);
  const items6 = [frameId, str];
  callback2 = windowWidth.useCallback(
    () => conjureAppPictureInPictureActions2.showConjureAppPictureInPictureActions(frameId, str),
    items6,
  );
  const items7 = [frameId];
  callback3 = windowWidth.useCallback(() => {
    const timerId = setTimeout(() => stackOffset(size[25])(frameId), 180);
  }, items7);
  callback4 = windowWidth.useCallback(
    () => frameId(size[26]).triggerHapticFeedback(frameId(size[26]).HapticFeedbackTypes.IMPACT_MEDIUM),
    [],
  );
  const items8 = [
    avoidance,
    callback3,
    sharedValue5,
    sharedValue1,
    sharedValue3,
    presentation,
    callback4,
    result,
    sharedValue2,
    callback1,
    sharedValue4,
    sharedValue,
    callback2,
    closeTargetCenter,
    closeTargetHovered,
    closeTargetShown,
  ];
  const memo1 = windowWidth.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const maxPointersResult = Gesture.Pan().maxPointers(1);
    const fn = function s() {
      const result = sharedValue2.set(true);
      value = sharedValue.get();
      const result1 = sharedValue1.set(frameId(size[12]).clampToBounds(value, callback(avoidance.get())));
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
      const isOverCloseTargetResult = frameId(size[12]).isOverCloseTarget(point2, closeTargetCenter);
      if (isOverCloseTargetResult !== __initData.get()) {
        const result1 = __initData.set(isOverCloseTargetResult);
        const result2 = closeTargetHovered.set(isOverCloseTargetResult);
        if (isOverCloseTargetResult) {
          frameId(size[24]).runOnJS(callback4)();
          const tmp2Result = frameId(size[24]);
        }
      }
      const obj2 = frameId(size[12]);
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
      if (__initData.get()) {
        const result = __initData2.set(true);
        frameId(size[24]).runOnJS(__initData5)();
        const obj3 = frameId(size[24]);
      } else {
        const point = { x: null, y: null };
        ({ velocityX: obj2.x, velocityY: obj2.y } = arg0);
        value = sharedValue.get();
        const result1 = sharedValue.set(frameId(size[12]).getSnappedPosition(value, point, callback(avoidance.get())));
        const obj = frameId(size[12]);
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
      const result1 = __initData.set(false);
      const result2 = closeTargetShown.set(false);
      const result3 = closeTargetHovered.set(false);
    };
    fn4.__closure = { dragging: sharedValue3, overCloseTarget: sharedValue4, closeTargetShown, closeTargetHovered };
    fn4.__workletHash = 15707415120147;
    fn4.__initData = __initData;
    const onFinalizeResult = onUpdateResult.onEnd(fn3).onFinalize(fn4);
    const Gesture2 = LegacyBaseButton.Gesture;
    const onEndResult = onUpdateResult.onEnd(fn3);
    const LongPressResult = Gesture2.LongPress();
    const runOnJSResult = Gesture2.LongPress().runOnJS(true);
    const onStartResult1 = Gesture2.LongPress().runOnJS(true).minDuration(400).onStart(callback2);
    const Gesture3 = LegacyBaseButton.Gesture;
    const minDurationResult = Gesture2.LongPress().runOnJS(true).minDuration(400);
    const TapResult = Gesture3.Tap();
    const fn5 = function c(arg0, arg1) {
      if (arg1) {
        __initData3();
      }
    };
    fn5.__closure = { open: callback1 };
    fn5.__workletHash = 6960600238096;
    fn5.__initData = __initData5;
    const onEndResult1 = Gesture3.Tap().runOnJS(true).onEnd(fn5);
    const obj5 = { windowGesture: null, handleGesture: null };
    const Gesture4 = LegacyBaseButton.Gesture;
    if (c13) {
      obj5.windowGesture = Gesture4.Tap().enabled(false);
      const Gesture5 = LegacyBaseButton.Gesture;
      obj5.handleGesture = Gesture5.Race(onFinalizeResult, onStartResult1, onEndResult1);
      let tmp6 = obj5;
      const TapResult1 = Gesture4.Tap();
    } else {
      obj5.windowGesture = Gesture4.Race(onFinalizeResult, onStartResult1, onEndResult1);
      tmp6 = obj5;
    }
    return tmp6;
  }, items8);
  ({ handleGesture, windowGesture } = memo1);
  const tmp2Result17 = frameId(size[24]);
  class Y {
    constructor() {
      value = closure_19.get();
      value1 = closure_20.get();
      if (!value1) {
        tmp3 = closure_21;
        value1 = closure_21.get();
      }
      if (value) {
        tmp11 = closure_16;
        value2 = closure_16.get();
      } else {
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp6 = closure_16;
        tmp8 = closure_15;
        tmp9 = avoidance;
        value3 = closure_16.get();
        value2 = obj.clampToBounds(value3, closure_15(avoidance.get()));
      }
      ({ x, y } = value2);
      num = 1;
      num2 = 1;
      if (value) {
        num2 = 1.05;
      }
      if (value1) {
        tmp12 = closeTargetCenter;
        tmp13 = closure_14;
        num3 = 2;
        tmp16 = closure_21;
        diff = closeTargetCenter.x - closure_14.width / 2;
        diff1 = closeTargetCenter.y - closure_14.height / 2;
        num4 = 0.4;
        if (closure_21.get()) {
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
        tmp18 = closure_14;
        ({ width: obj2.width, height: obj2.height } = closure_14);
        tmp19 = closure_21;
        if (closure_21.get()) {
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
  const tmp2Result18 = frameId(size[24]);
  Y.__closure = {
    dragging: sharedValue3,
    overCloseTarget: sharedValue4,
    closing: sharedValue5,
    position: sharedValue,
    clampToBounds: frameId(size[12]).clampToBounds,
    getBounds: presentation,
    avoidance,
    DRAGGING_SCALE: 1.05,
    closeTargetCenter,
    windowSize: memo,
    OVER_CLOSE_TARGET_SCALE: 0.4,
    FOLLOW_SPRING,
    SETTLE_SPRING: memo,
    withTiming: frameId(size[28]).withTiming,
    CLOSE_ANIMATION_MS: 180,
    withSpring: frameId(size[29]).withSpring,
  };
  Y.__workletHash = 11168598629644;
  Y.__initData = callback4;
  const items9 = [stateFromStores, str, tmp7];
  const animatedStyle = tmp2Result18.useAnimatedStyle(Y);
  memo2 = windowWidth.useMemo(() => {
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
  }, items9);
  [][0] = memo2;
  if (null == stateFromStores) {
    return null;
  } else {
    let obj5 = {
      accessibilityRole: "button",
      accessibilityLabel: null,
      accessibilityActions: null,
      onAccessibilityAction: null,
    };
    const intl = tmp2(tmp3[30]).intl;
    let obj6 = { appName: str };
    obj5.accessibilityLabel = intl.formatToPlainString(stackOffset(tmp3[31]).dPf03z, obj6);
    obj5.accessibilityActions = memo2.map((name) => ({ name: name.name, label: name.label }));
    obj5.onAccessibilityAction = tmp24;
    let obj7 = { theme: closeTargetCenter.DARK, children: null };
    let obj8 = { gesture: windowGesture, children: null };
    const obj9 = { style: null, accessible: null };
    const items10 = [tmp.window, animatedStyle];
    obj9.style = items10;
    obj9.accessible = !result;
    let obj10 = obj5;
    if (result) {
      obj10 = {};
    }
    const merged = Object.assign(obj10);
    let tmp40Result = null;
    if (null != handleGesture) {
      const obj11 = { gesture: handleGesture, children: null };
      const obj12 = { style: tmp.handle, accessible: true };
      const merged1 = Object.assign(obj5);
      const obj13 = { style: tmp.grip };
      obj12.children = tmp40(windowHeight, obj13);
      obj11.children = tmp40(windowHeight, obj12);
      tmp40Result = tmp40(tmp2(tmp3[27]).GestureDetector, obj11);
    }
    const items11 = [tmp40Result];
    const obj14 = { style: tmp.content, children: null };
    const items12 = [tmp.mask];
    let interactiveMask = result;
    if (result) {
      interactiveMask = tmp.interactiveMask;
    }
    const obj15 = { style: null, pointerEvents: null, children: null };
    items12[1] = interactiveMask;
    obj15.style = items12;
    let str2 = "none";
    if (result) {
      str2 = "auto";
    }
    obj15.pointerEvents = str2;
    const obj16 = { frameId, level: tmp2(tmp3[34]).FrameStackLevel.AboveAppContent, presentation };
    const items13 = [stateFromStores(stackOffset(tmp3[33]), obj16)];
    let tmp40Result2 = null;
    if (tmp8) {
      const obj17 = { frame: stateFromStores, appName: str };
      tmp40Result2 = tmp40(sharedValue1, obj17);
    }
    items13[1] = tmp40Result2;
    obj15.children = items13;
    const items14 = [str(windowHeight, obj15)];
    const obj18 = { frame: stateFromStores };
    items14[1] = stateFromStores(sharedValue2, obj18);
    obj14.children = items14;
    items11[1] = str(windowHeight, obj14);
    obj9.children = items11;
    obj8.children = str(stackOffset(tmp3[24]).View, obj9);
    obj7.children = stateFromStores(tmp2(tmp3[27]).GestureDetector, obj8);
    return stateFromStores(tmp2(tmp3[32]).ThemeContextProvider, obj7);
  }
  let obj4 = {
    dragging: sharedValue3,
    overCloseTarget: sharedValue4,
    closing: sharedValue5,
    position: sharedValue,
    clampToBounds: frameId(size[12]).clampToBounds,
    getBounds: presentation,
    avoidance,
    DRAGGING_SCALE: 1.05,
    closeTargetCenter,
    windowSize: memo,
    OVER_CLOSE_TARGET_SCALE: 0.4,
    FOLLOW_SPRING,
    SETTLE_SPRING: memo,
    withTiming: frameId(size[28]).withTiming,
    CLOSE_ANIMATION_MS: 180,
    withSpring: frameId(size[29]).withSpring,
  };
});
export const SHOWS_STATIC_CARD = DeviceUtils < 4;
