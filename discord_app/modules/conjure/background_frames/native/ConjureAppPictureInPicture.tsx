// === Module 19420: ConjureAppPictureInPicture ===

// Module 19420 (ConjureAppPictureInPicture)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import _modDef4024 from "module_4024" /* 4024 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5450 */;
import GuildIconDefault from "GuildIcon" /* 7045 */;
import VoiceNormalIcon2 from "VoiceNormalIcon" /* 8765 */;
import getGuildIdForEmbeddedSurfaceDefault from "getGuildIdForEmbeddedSurface" /* 9436 */;
import VoiceXIcon from "VoiceXIcon" /* 12125 */;
import FrameRenderTargetDefault from "FrameRenderTarget" /* 12424 */;
import conjureFrameSound from "conjureFrameSound" /* 14755 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 19419 */;
import conjureAppPictureInPictureActions2 from "conjureAppPictureInPictureActions" /* 19421 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6926 */;
import GuildStore from "GuildStore" /* 5041 */;

const require = globalThis.__r;

require = fn;
function StaticCard(arg0) {
  ({ frame, appName } = arg0);
  const tmp4 = getGuildIdForEmbeddedSurfaceDefault(frame.surface);
  _require = tmp4;
  const tmp = closure_16();
  items = [GuildStore];
  const items1 = [tmp4];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  const obj2 = { style: tmp.card, children: null };
  let tmp9 = null;
  if (null != stateFromStores) {
    const obj3 = { guild: stateFromStores, size: tmp5(7045).GuildIconSizes.NORMAL };
    tmp9 = closure_10(GuildIconDefault, obj3);
    const tmp2Result = GuildIconDefault;
  }
  const items2 = [tmp9, closure_10(require("Text/Text").Text, { variant: "body-xs/semibold", color: "text-strong", lineClamp: 2, children: appName })];
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
let ThemeTypes = fn(1072).ThemeTypes;
const FramesConstants = fn(6927);
({ asLaunched: closure_8, FrameLayoutModes } = FramesConstants);
const MIN_PAN_GESTURE_MOVE = fn(11382).MIN_PAN_GESTURE_MOVE;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let DeviceUtils = fn(5127);
DeviceUtils = DeviceUtils.getRamSize();
if (DeviceUtils == null) {
  DeviceUtils = Infinity;
}
let closure_12 = tmp4;
let closure_13 = { mass: 0.25, damping: 40, stiffness: 300, overshootClamping: true };
const duration = { mass: 0.4, damping: 22, stiffness: 220 };
let presentation = { layoutMode: FrameLayoutModes.PIP, portraitSafeAreasConfig: fn(19298).DEFAULT_PORTRAIT_LETTERBOX_CONFIG };
const createStyles = fn(5170);
let obj = { window: null, content: null, mask: null, interactiveMask: null, handle: null, grip: null, card: null, soundBadge: null };
const rect = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj.window = rect;
obj.content = { flex: 1 };
obj.mask = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.lg };
let obj4 = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.lg };
obj.interactiveMask = { borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none };
let obj5 = { borderTopLeftRadius: nativeDefault.radii.none, borderTopRightRadius: nativeDefault.radii.none };
obj.handle = { height: fn(19419).INTERACTIVE_HANDLE_HEIGHT, alignItems: "center", justifyContent: "center", borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.ICON_MUTED };
obj.grip = size;
const rect1 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.card = rect1;
const rect2 = { position: "absolute", top: nativeDefault.space.PX_6, right: nativeDefault.space.PX_6, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj.soundBadge = rect2;
let closure_16 = createStyles.createStyles(obj);
let closure_19 = { code: "(function ConjureAppPictureInPictureTsx1(specs){let[getPictureInPictureBounds,windowWidth,windowHeight,safeArea,windowSize]=this.__closure;return getPictureInPictureBounds({windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,size:windowSize,topAvoidance:specs.top,bottomAvoidance:specs.bottom});})" };
let closure_20 = { code: "(function ConjureAppPictureInPictureTsx2(){let[moved,dragStart,clampToBounds,position,getBounds,avoidance,dragging,closeTargetShown]=this.__closure;moved.set(true);dragStart.set(clampToBounds(position.get(),getBounds(avoidance.get())));dragging.set(true);closeTargetShown.set(true);})" };
let closure_21 = { code: "(function ConjureAppPictureInPictureTsx3(event){let[dragStart,position,isOverCloseTarget,closeTargetCenter,overCloseTarget,closeTargetHovered,scheduleOnRN,hapticOverCloseTarget]=this.__closure;const start=dragStart.get();position.set({x:start.x+event.translationX,y:start.y+event.translationY});const over=isOverCloseTarget({x:event.absoluteX,y:event.absoluteY},closeTargetCenter);if(over!==overCloseTarget.get()){overCloseTarget.set(over);closeTargetHovered.set(over);if(over)scheduleOnRN(hapticOverCloseTarget);}})" };
let closure_22 = { code: "(function ConjureAppPictureInPictureTsx4(event){let[overCloseTarget,closing,scheduleOnRN,closeAfterShrink,position,getSnappedPosition,getBounds,avoidance]=this.__closure;if(overCloseTarget.get()){closing.set(true);scheduleOnRN(closeAfterShrink);return;}position.set(getSnappedPosition(position.get(),{x:event.velocityX,y:event.velocityY},getBounds(avoidance.get())));})" };
let closure_23 = { code: "(function ConjureAppPictureInPictureTsx5(){let[dragging,overCloseTarget,closeTargetShown,closeTargetHovered]=this.__closure;dragging.set(false);overCloseTarget.set(false);closeTargetShown.set(false);closeTargetHovered.set(false);})" };
let closure_24 = { code: "(function ConjureAppPictureInPictureTsx6(_event,success){let[open]=this.__closure;if(success)open();})" };
let closure_25 = { code: "(function ConjureAppPictureInPictureTsx7(){let[dragging,overCloseTarget,closing,position,clampToBounds,getBounds,avoidance,DRAGGING_SCALE,closeTargetCenter,windowSize,OVER_CLOSE_TARGET_SCALE,FOLLOW_SPRING,SETTLE_SPRING,withTiming,CLOSE_ANIMATION_MS,withSpring]=this.__closure;const isDragging=dragging.get();const onCloseTarget=overCloseTarget.get()||closing.get();let{x:x,y:y}=isDragging?position.get():clampToBounds(position.get(),getBounds(avoidance.get()));let scale=isDragging?DRAGGING_SCALE:1;if(onCloseTarget){x=closeTargetCenter.x-windowSize.width/2;y=closeTargetCenter.y-windowSize.height/2;scale=closing.get()?0:OVER_CLOSE_TARGET_SCALE;}const spring=isDragging&&!onCloseTarget?FOLLOW_SPRING:SETTLE_SPRING;return{width:windowSize.width,height:windowSize.height,opacity:closing.get()?withTiming(0,{duration:CLOSE_ANIMATION_MS}):1,transform:[{translateX:withSpring(x,spring)},{translateY:withSpring(y,spring)},{scale:withSpring(scale,spring)}]};})" };
let obj6 = { height: fn(19419).INTERACTIVE_HANDLE_HEIGHT, alignItems: "center", justifyContent: "center", borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPicture.tsx");

export default noop.memo(function ConjureAppPictureInPicture(frameId) {
  frameId = frameId.frameId;
  _require = frameId;
  const stackOffset = frameId.stackOffset;
  importDefault = stackOffset;
  size = frameId.size;
  dependencyMap = size;
  ({ windowWidth, windowHeight, safeArea, avoidance } = frameId);
  safeArea = avoidance;
  const closeTargetCenter = frameId.closeTargetCenter;
  c4 = closeTargetCenter;
  const closeTargetShown = frameId.closeTargetShown;
  c5 = closeTargetShown;
  const closeTargetHovered = frameId.closeTargetHovered;
  c6 = closeTargetHovered;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  presentation = undefined;
  let sharedValue4;
  let sharedValue5;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let memo2;
  let tmp = sharedValue4();
  items = [c5];
  let items1 = [frameId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => React5(FramesStore.getFrame(c0)), items1);
  ThemeTypes = stateFromStores;
  let obj = require("initialize");
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = require("useGetOrFetchApplications").useGetOrFetchApplication(applicationId);
  let str;
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  c8 = str;
  let obj2 = require("useGetOrFetchApplications");
  const tmp7 = 2 === require("EmbeddedAppShimExperiment").useEmbeddedAppShimVersion(require("conjureAppPictureInPictureActions").CONJURE_APP_PICTURE_IN_PICTURE_LOCATION);
  c9 = tmp7;
  const tmp2Result = require("EmbeddedAppShimExperiment");
  let result = require("conjureAppPictureInPictureFrames").isConjureAppPictureInPictureInteractive(stateFromStores, c12);
  c10 = result;
  let items2 = [result, size];
  const memo = safeArea.useMemo(() => conjureAppPictureInPictureLayout.getPictureInPictureWindowSize(c2, c10), items2);
  let items3 = [callback2, require("conjureAppPictureInPictureLayout").getPictureInPictureBounds, windowWidth, windowHeight, safeArea, memo];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  safeArea = undefined;
  c4 = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items3;
  class ConjureAppPictureInPictureTsx1 {
    constructor(arg0) {
      obj = { windowWidth: closure_1, windowHeight: closure_2, safeArea: closure_3, size: closure_4, topAvoidance: frameId.top, bottomAvoidance: frameId.bottom };
      return closure_0(obj);
    }
  }
  let items4 = [tmp12, tmp13, tmp14, tmp15, tmp16];
  ConjureAppPictureInPictureTsx1.__closure = items4;
  ConjureAppPictureInPictureTsx1.__workletHash = 4230495550163;
  ConjureAppPictureInPictureTsx1.__initData = tmp11;
  let items5 = [windowWidth, windowHeight, safeArea, memo];
  const callback = safeArea.useCallback(ConjureAppPictureInPictureTsx1, items5);
  const tmp2Result10 = require("conjureAppPictureInPictureFrames");
  let tmp8 = c12;
  const tmp2Result11 = require("module_1652");
  const sharedValue = tmp2Result11.useSharedValue(require("conjureAppPictureInPictureLayout").getStackedPosition(stackOffset, callback(avoidance.get())));
  const tmp2Result12 = require("conjureAppPictureInPictureLayout");
  const sharedValue1 = require("module_1652").useSharedValue(sharedValue.get());
  c13 = sharedValue1;
  const tmp2Result13 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(false);
  c14 = sharedValue2;
  let items6 = [avoidance, callback, stackOffset, sharedValue2, sharedValue];
  const effect = obj5.useEffect(() => {
    if (!duration.get()) {
      const result = _undefined8.set(conjureAppPictureInPictureLayout.getStackedPosition(c1, _undefined7(safeArea.get())));
    }
  }, items6);
  const tmp2Result14 = require("module_1652");
  const sharedValue3 = require("module_1652").useSharedValue(false);
  const tmp2Result15 = require("module_1652");
  sharedValue4 = require("module_1652").useSharedValue(false);
  const tmp2Result16 = require("module_1652");
  sharedValue5 = require("module_1652").useSharedValue(false);
  let items7 = [frameId];
  callback1 = obj5.useCallback(() => {
    const tmp = React5(FramesStore.getFrame(c0));
    if (null != tmp) {
      const result = conjureAppPictureInPictureActions2.openConjureAppPictureInPictureFrame(tmp);
    }
  }, items7);
  let items8 = [frameId, str];
  callback2 = obj5.useCallback(() => conjureAppPictureInPictureActions2.showConjureAppPictureInPictureActions(c0, c8), items8);
  let items9 = [frameId];
  callback3 = obj5.useCallback(() => {
    const timerId = setTimeout(() => c1(c2[25])(_undefined), 180);
  }, items9);
  callback4 = obj5.useCallback(() => _undefined(windowHeight[26]).triggerHapticFeedback(_undefined(windowHeight[26]).HapticFeedbackTypes.IMPACT_MEDIUM), []);
  const items10 = [avoidance, callback3, sharedValue5, sharedValue1, sharedValue3, callback, callback4, result, sharedValue2, callback1, sharedValue4, sharedValue, callback2, closeTargetCenter, closeTargetHovered, closeTargetShown];
  const memo1 = obj5.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const maxPointersResult = Gesture.Pan().maxPointers(1);
    items = [closure_20, c14, c13, conjureAppPictureInPictureLayout.clampToBounds, c12, c11, c3, c15, c5];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
    class ConjureAppPictureInPictureTsx2 {
      constructor() {
        result = closure_0.set(true);
        value = closure_3.get();
        result1 = closure_1.set(closure_2(value, closure_4(closure_5.get())));
        result2 = closure_6.set(true);
        result3 = closure_7.set(true);
        return;
      }
    }
    const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
    ConjureAppPictureInPictureTsx2.__closure = items1;
    ConjureAppPictureInPictureTsx2.__workletHash = 13378419383472;
    ConjureAppPictureInPictureTsx2.__initData = tmp9;
    const minDistanceResult = Gesture.Pan().maxPointers(1).minDistance(MIN_PAN_GESTURE_MOVE);
    const tmp6 = c3;
    const tmp8 = c5;
    const items2 = [closure_21, c13, c12, conjureAppPictureInPictureLayout.isOverCloseTarget, c4, sharedValue4, c6, _mod1705.scheduleOnRN, callback4];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items2;
    class ConjureAppPictureInPictureTsx3 {
      constructor(arg0) {
        point = closure_0.get();
        point1 = { x: point.x + arg0.translationX, y: point.y + arg0.translationY };
        result = closure_1.set(point1);
        point2 = { x: arg0.absoluteX, y: arg0.absoluteY };
        tmp2 = closure_2(point2, closure_3);
        obj3 = closure_4;
        if (tmp2 !== closure_4.get()) {
          result1 = obj3.set(tmp2);
          tmp4 = closure_5;
          result2 = closure_5.set(tmp2);
          if (tmp2) {
            tmp6 = closure_6;
            tmp7 = closure_7;
            tmp8 = closure_6(closure_7);
          }
        }
        return;
      }
    }
    const items3 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
    ConjureAppPictureInPictureTsx3.__closure = items3;
    ConjureAppPictureInPictureTsx3.__workletHash = 14311359642471;
    ConjureAppPictureInPictureTsx3.__initData = tmp20;
    const onStartResult = Gesture.Pan().maxPointers(1).minDistance(MIN_PAN_GESTURE_MOVE).onStart(ConjureAppPictureInPictureTsx2);
    const tmp19 = c6;
    const items4 = [closure_22, sharedValue4, sharedValue5, _mod1705.scheduleOnRN, callback3, c12, conjureAppPictureInPictureLayout.getSnappedPosition, c11, tmp6];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37] = items4;
    class ConjureAppPictureInPictureTsx4 {
      constructor(arg0) {
        if (closure_0.get()) {
          tmp8 = closure_1;
          flag = true;
          result = closure_1.set(true);
          tmp10 = closure_2;
          tmp11 = closure_3;
          tmp12 = closure_2(closure_3);
          return;
        } else {
          tmp = arg0;
          tmp2 = closure_4;
          tmp3 = closure_5;
          point = { x: null, y: null };
          ({ velocityX: obj.x, velocityY: obj.y } = arg0);
          tmp5 = closure_6;
          tmp6 = closure_7;
          value = closure_4.get();
          result1 = closure_4.set(closure_5(value, point, closure_6(closure_7.get())));
          return;
        }
      }
    }
    const items5 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37];
    ConjureAppPictureInPictureTsx4.__closure = items5;
    ConjureAppPictureInPictureTsx4.__workletHash = 10614314581791;
    ConjureAppPictureInPictureTsx4.__initData = tmp29;
    const onUpdateResult = Gesture.Pan().maxPointers(1).minDistance(MIN_PAN_GESTURE_MOVE).onStart(ConjureAppPictureInPictureTsx2).onUpdate(ConjureAppPictureInPictureTsx3);
    const items6 = [closure_23, c15, sharedValue4, tmp8, tmp19];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp38, tmp39, tmp40, tmp41, tmp42] = items6;
    class ConjureAppPictureInPictureTsx5 {
      constructor() {
        result = closure_0.set(false);
        result1 = closure_1.set(false);
        result2 = closure_2.set(false);
        result3 = closure_3.set(false);
        return;
      }
    }
    const items7 = [tmp39, tmp40, tmp41, tmp42];
    ConjureAppPictureInPictureTsx5.__closure = items7;
    ConjureAppPictureInPictureTsx5.__workletHash = 4490068955341;
    ConjureAppPictureInPictureTsx5.__initData = tmp38;
    const onFinalizeResult = Gesture.Pan().maxPointers(1).minDistance(MIN_PAN_GESTURE_MOVE).onStart(ConjureAppPictureInPictureTsx2).onUpdate(ConjureAppPictureInPictureTsx3).onEnd(ConjureAppPictureInPictureTsx4).onFinalize(ConjureAppPictureInPictureTsx5);
    const Gesture2 = LegacyBaseButton.Gesture;
    const onEndResult = Gesture.Pan().maxPointers(1).minDistance(MIN_PAN_GESTURE_MOVE).onStart(ConjureAppPictureInPictureTsx2).onUpdate(ConjureAppPictureInPictureTsx3).onEnd(ConjureAppPictureInPictureTsx4);
    const LongPressResult = Gesture2.LongPress();
    const runOnJSResult = Gesture2.LongPress().runOnJS(true);
    const onStartResult1 = Gesture2.LongPress().runOnJS(true).minDuration(400).onStart(callback2);
    const Gesture3 = LegacyBaseButton.Gesture;
    const minDurationResult = Gesture2.LongPress().runOnJS(true).minDuration(400);
    const TapResult = Gesture3.Tap();
    const items8 = [closure_24, callback1];
    c0 = undefined;
    [tmp45, tmp46] = items8;
    class ConjureAppPictureInPictureTsx6 {
      constructor(arg0, arg1) {
        if (arg1) {
          tmp = closure_0;
          tmp2 = closure_0();
        }
        return;
      }
    }
    const items9 = [tmp46];
    ConjureAppPictureInPictureTsx6.__closure = items9;
    ConjureAppPictureInPictureTsx6.__workletHash = 13214857055913;
    ConjureAppPictureInPictureTsx6.__initData = tmp45;
    const onEndResult1 = Gesture3.Tap().runOnJS(true).onEnd(ConjureAppPictureInPictureTsx6);
    const obj = { windowGesture: null, handleGesture: null };
    const Gesture4 = LegacyBaseButton.Gesture;
    if (c10) {
      obj.windowGesture = Gesture4.Tap().enabled(false);
      const Gesture5 = LegacyBaseButton.Gesture;
      obj.handleGesture = Gesture5.Race(onFinalizeResult, onStartResult1, onEndResult1);
      let tmp48 = obj;
      const TapResult1 = Gesture4.Tap();
    } else {
      obj.windowGesture = Gesture4.Race(onFinalizeResult, onStartResult1, onEndResult1);
      tmp48 = obj;
    }
    return tmp48;
  }, items10);
  ({ handleGesture, windowGesture } = memo1);
  const tmp2Result17 = require("module_1652");
  const items11 = [closure_25, sharedValue3, sharedValue4, sharedValue5, sharedValue, require("conjureAppPictureInPictureLayout").clampToBounds, callback, avoidance, 1.05, closeTargetCenter, memo, 0.4, c13, c14, require("timing/timing").withTiming, 180, require("spring/spring").withSpring];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  safeArea = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  ThemeTypes = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  presentation = undefined;
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45] = items11;
  class ConjureAppPictureInPictureTsx7 {
    constructor() {
      value = closure_0.get();
      value1 = closure_1.get();
      if (!value1) {
        tmp3 = closure_2;
        value1 = closure_2.get();
      }
      if (value) {
        tmp10 = closure_3;
        value2 = closure_3.get();
      } else {
        tmp4 = closure_4;
        tmp5 = closure_3;
        tmp7 = closure_5;
        tmp8 = closure_6;
        value3 = closure_3.get();
        value2 = closure_4(value3, closure_5(closure_6.get()));
      }
      ({ x, y } = value2);
      num = 1;
      num2 = 1;
      if (value) {
        num2 = closure_7;
      }
      if (value1) {
        tmp11 = closure_8;
        tmp12 = closure_9;
        num3 = 2;
        tmp15 = closure_2;
        diff = closure_8.x - closure_9.width / 2;
        diff1 = closure_8.y - closure_9.height / 2;
        num4 = 0;
        if (!closure_2.get()) {
          num4 = closure_10;
        }
        num2 = num4;
        y = diff1;
        x = diff;
      }
      if (value) {
        if (!value1) {
          tmp16 = closure_11;
        }
        size = { width: null, height: null, opacity: null, transform: null };
        tmp17 = closure_9;
        ({ width: obj.width, height: obj.height } = closure_9);
        tmp18 = closure_2;
        if (closure_2.get()) {
          tmp19 = closure_13;
          obj1 = { duration: null };
          tmp20 = closure_14;
          obj1.duration = closure_14;
          num5 = 0;
          num = closure_13(0, obj1);
        }
        size.opacity = num;
        obj6 = { translateX: null };
        tmp21 = closure_15;
        obj6.translateX = closure_15(x, tmp16);
        items = [, , ];
        items[0] = obj6;
        obj7 = { translateY: null };
        obj7.translateY = closure_15(y, tmp16);
        items[1] = obj7;
        obj8 = { scale: null };
        obj8.scale = closure_15(num2, tmp16);
        items[2] = obj8;
        size.transform = items;
        return size;
      }
      tmp16 = closure_12;
      return;
    }
  }
  const items12 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45];
  ConjureAppPictureInPictureTsx7.__closure = items12;
  ConjureAppPictureInPictureTsx7.__workletHash = 3452490618677;
  ConjureAppPictureInPictureTsx7.__initData = tmp29;
  const items13 = [stateFromStores, str, tmp7];
  const animatedStyle = require("module_1652").useAnimatedStyle(ConjureAppPictureInPictureTsx7);
  memo2 = obj5.useMemo(() => {
    if (null != c7) {
      const conjureAppPictureInPictureActions = conjureAppPictureInPictureActions2.getConjureAppPictureInPictureActions(tmp, c8, c9);
      let mapped = conjureAppPictureInPictureActions.map((label, index) => {
        let str = "activate";
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
  }, items13);
  [][0] = memo2;
  if (null == stateFromStores) {
    return null;
  } else {
    let obj3 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
    const intl = tmp2(1113).intl;
    let obj4 = { appName: str };
    obj3.accessibilityLabel = intl.formatToPlainString(_modDef4024.dPf03z, obj4);
    obj3.accessibilityActions = memo2.map((name) => ({ name: name.name, label: name.label }));
    obj3.onAccessibilityAction = tmp47;
    const obj6 = { theme: ThemeTypes.DARK, children: null };
    const obj7 = { gesture: windowGesture, children: null };
    const obj8 = { style: null, accessible: null };
    const items14 = [tmp.window, animatedStyle];
    obj8.style = items14;
    obj8.accessible = !result;
    let obj9 = obj3;
    if (result) {
      obj9 = {};
    }
    const merged = Object.assign(obj9);
    let tmp63Result = null;
    if (null != handleGesture) {
      const obj10 = { gesture: handleGesture, children: null };
      const obj11 = { style: tmp.handle, accessible: true };
      const merged1 = Object.assign(obj3);
      const obj12 = { style: tmp.grip };
      obj11.children = tmp63(c4, obj12);
      obj10.children = tmp63(c4, obj11);
      tmp63Result = tmp63(tmp2(5450).GestureDetector, obj10);
    }
    const items15 = [tmp63Result, ];
    const obj13 = { style: tmp.content, children: null };
    const items16 = [tmp.mask, ];
    let interactiveMask = result;
    if (result) {
      interactiveMask = tmp.interactiveMask;
    }
    const obj14 = { style: null, pointerEvents: null, children: null };
    items16[1] = interactiveMask;
    obj14.style = items16;
    let str2 = "none";
    if (result) {
      str2 = "auto";
    }
    obj14.pointerEvents = str2;
    const obj15 = { frameId, level: tmp2(12428).FrameStackLevel.AboveAppContent, presentation };
    const items17 = [c10(FrameRenderTargetDefault, obj15), ];
    let tmp63Result2 = null;
    if (tmp8) {
      const obj16 = { frame: stateFromStores, appName: str };
      tmp63Result2 = tmp63(sharedValue5, obj16);
    }
    items17[1] = tmp63Result2;
    obj14.children = items17;
    const items18 = [c11(c4, obj14), ];
    const obj17 = { frame: stateFromStores };
    items18[1] = c10(callback1, obj17);
    obj13.children = items18;
    items15[1] = c11(c4, obj13);
    obj8.children = items15;
    obj7.children = c11(_modDef1652.View, obj8);
    obj6.children = c10(tmp2(5450).GestureDetector, obj7);
    return c10(tmp2(5229).ThemeContextProvider, obj6);
  }
  const tmp2Result18 = require("module_1652");
});
export const SHOWS_STATIC_CARD = DeviceUtils < 4;