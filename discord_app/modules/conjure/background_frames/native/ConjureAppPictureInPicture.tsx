// === Module 18738: ConjureAppPictureInPicture ===

// Module 18738 (ConjureAppPictureInPicture)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5085 */;
import timing from "timing" /* 5242 */;
import spring from "spring" /* 5283 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5333 */;
import GuildIconDefault from "GuildIcon" /* 6919 */;
import VoiceNormalIcon2 from "VoiceNormalIcon" /* 8609 */;
import getGuildIdForEmbeddedSurfaceDefault from "getGuildIdForEmbeddedSurface" /* 9300 */;
import VoiceXIcon from "VoiceXIcon" /* 11664 */;
import conjureBackgroundFrames from "conjureBackgroundFrames" /* 18327 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 18736 */;
import conjureFrameSound from "conjureFrameSound" /* 18739 */;
import conjureAppPictureInPictureActions2 from "conjureAppPictureInPictureActions" /* 18740 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6810 */;
import GuildStore from "GuildStore" /* 4878 */;

require = fn;
const View = fn(17).View;
const ThemeTypes = fn(1084).ThemeTypes;
const FramesConstants = fn(6811);
({ asLaunched: closure_8, FrameLayoutModes } = FramesConstants);
const MIN_PAN_GESTURE_MOVE = fn(10940).MIN_PAN_GESTURE_MOVE;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let DeviceUtils = fn(4961);
DeviceUtils = DeviceUtils.getRamSize();
if (DeviceUtils == null) {
  DeviceUtils = Infinity;
}
let closure_12 = DeviceUtils < 4;
let c13 = 180;
let c14 = 1.05;
let c15 = 0.4;
let closure_16 = { mass: 0.25, damping: 40, stiffness: 300, overshootClamping: true };
let closure_17 = { mass: 0.4, damping: 22, stiffness: 220 };
let presentation = { layoutMode: FrameLayoutModes.PIP, portraitSafeAreasConfig: fn(18650).DEFAULT_PORTRAIT_LETTERBOX_CONFIG };
const createStyles = fn(5004);
let obj = { window: null, mask: null, card: null, soundBadge: null };
const rect = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj.window = rect;
obj.mask = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.lg };
const rect1 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.card = rect1;
const rect2 = { position: "absolute", top: nativeDefault.space.PX_6, right: nativeDefault.space.PX_6, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj.soundBadge = rect2;
let closure_19 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function StaticCard(arg0) {
  const cResult = require("c").c(14);
  ({ frame, appName } = arg0);
  const tmp4 = closure_19();
  if (cResult[0] !== frame.surface) {
    const tmp7 = getGuildIdForEmbeddedSurfaceDefault(frame.surface);
    cResult[0] = frame.surface;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  _require = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[2] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    class T {
      constructor() {
        return closure_6.getGuild(closure_0);
      }
    }
    const items1 = [tmp5];
    cResult[3] = tmp5;
    cResult[4] = T;
    cResult[5] = items1;
    let tmp11 = items1;
  } else {
    class T {
      constructor() {
        return closure_6.getGuild(closure_0);
      }
    }
    tmp11 = cResult[5];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp8, T, tmp11);
  if (cResult[6] !== stateFromStores) {
    class T {
      constructor() {
        return closure_6.getGuild(closure_0);
      }
    }
    if (null != stateFromStores) {
      class T {
        constructor() {
          return closure_6.getGuild(closure_0);
        }
      }
      const obj2 = { guild: stateFromStores, size: tmp(6919).GuildIconSizes.NORMAL };
      const tmp14 = closure_10(GuildIconDefault, obj2);
    }
    cResult[6] = stateFromStores;
    cResult[7] = tmp14;
  } else {
    class T {
      constructor() {
        return closure_6.getGuild(closure_0);
      }
    }
  }
  if (cResult[8] !== appName) {
    class T {
      constructor() {
        return closure_6.getGuild(closure_0);
      }
    }
    const obj3 = { variant: "text-xs/semibold", color: "text-strong", lineClamp: 2, children: appName };
    const tmp18 = closure_10(tmp(5270).Text, obj3);
    cResult[8] = appName;
    cResult[9] = tmp18;
  } else {
    class T {
      constructor() {
        return closure_6.getGuild(closure_0);
      }
    }
  }
  if (cResult[10] === tmp4.card) {
    class T {
      constructor() {
        return closure_6.getGuild(closure_0);
      }
    }
  }
  const obj4 = { style: tmp4.card, children: null };
  const items2 = [tmp13, tmp17];
  obj4.children = items2;
  const tmpResult = require("initialize");
  cResult[10] = tmp4.card;
  cResult[11] = tmp13;
  cResult[12] = tmp17;
  cResult[13] = closure_11(View, obj4);
  const tmp19 = closure_11(View, obj4);
}) : (function StaticCard(arg0) {
  ({ frame, appName } = arg0);
  const tmp4 = getGuildIdForEmbeddedSurfaceDefault(frame.surface);
  _require = tmp4;
  const tmp = closure_19();
  const items = [GuildStore];
  const items1 = [tmp4];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  const obj2 = { style: tmp.card, children: null };
  let tmp9 = null;
  if (null != stateFromStores) {
    const obj3 = { guild: stateFromStores, size: tmp5(6919).GuildIconSizes.NORMAL };
    tmp9 = closure_10(GuildIconDefault, obj3);
    const tmp2Result = GuildIconDefault;
  }
  const items2 = [tmp9, closure_10(require("Text/Text").Text, { variant: "text-xs/semibold", color: "text-strong", lineClamp: 2, children: appName })];
  obj2.children = items2;
  return closure_11(View, obj2);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function SoundBadge(frame) {
  const cResult = c.c(5);
  frame = frame.frame;
  const tmp4 = closure_19();
  if (obj2.showsFrameSoundToggle(frame)) {
    if (frame.data.userMuted) {
      let VoiceNormalIcon = VoiceXIcon.VoiceXIcon;
    } else {
      VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
    }
    if (cResult[0] !== VoiceNormalIcon) {
      const obj3 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
      const tmp9 = v65535(VoiceNormalIcon, obj3);
      cResult[0] = VoiceNormalIcon;
      cResult[1] = tmp9;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[1];
    }
    if (cResult[2] === tmp4.soundBadge) {
      if (cResult[3] === tmp6) {
        let tmp10 = cResult[4];
      }
      return tmp10;
    }
    const obj4 = { style: tmp4.soundBadge, pointerEvents: "none", children: tmp6 };
    const tmp13 = v65535(View, obj4);
    cResult[2] = tmp4.soundBadge;
    cResult[3] = tmp6;
    cResult[4] = tmp13;
    tmp10 = tmp13;
  } else {
    return null;
  }
  obj2 = conjureFrameSound;
}) : (function SoundBadge(frame) {
  frame = frame.frame;
  const tmp = closure_19();
  if (obj.showsFrameSoundToggle(frame)) {
    if (frame.data.userMuted) {
      let VoiceNormalIcon = VoiceXIcon.VoiceXIcon;
    } else {
      VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
    }
    const obj2 = { style: tmp.soundBadge, pointerEvents: "none", children: null };
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
    obj2.children = v65535(VoiceNormalIcon, obj3);
    return v65535(View, obj2);
  } else {
    return null;
  }
  obj = conjureFrameSound;
});
const __initData = { code: "function ConjureAppPictureInPictureTsx1(specs){const{getPictureInPictureBounds,windowWidth,windowHeight,safeArea,size}=this.__closure;return getPictureInPictureBounds({windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,size:size,topAvoidance:specs.top,bottomAvoidance:specs.bottom});}" };
let closure_23 = { code: "function ConjureAppPictureInPictureTsx2(){const{dragging,overCloseTarget,closeTargetShown,closeTargetHovered}=this.__closure;dragging.set(false);overCloseTarget.set(false);closeTargetShown.set(false);closeTargetHovered.set(false);}" };
let closure_24 = { code: "function ConjureAppPictureInPictureTsx3(event_0){const{overCloseTarget,closing,runOnJS,closeAfterShrink,position,getSnappedPosition,getBounds,avoidance}=this.__closure;if(overCloseTarget.get()){closing.set(true);runOnJS(closeAfterShrink)();return;}position.set(getSnappedPosition(position.get(),{x:event_0.velocityX,y:event_0.velocityY},getBounds(avoidance.get())));}" };
let closure_25 = { code: "function ConjureAppPictureInPictureTsx4(event){const{dragStart,position,isOverCloseTarget,closeTargetCenter,overCloseTarget,closeTargetHovered,runOnJS,hapticOverCloseTarget}=this.__closure;var start=dragStart.get();position.set({x:start.x+event.translationX,y:start.y+event.translationY});var over=isOverCloseTarget({x:event.absoluteX,y:event.absoluteY},closeTargetCenter);if(over!==overCloseTarget.get()){overCloseTarget.set(over);closeTargetHovered.set(over);if(over){runOnJS(hapticOverCloseTarget)();}}}" };
const __initData2 = { code: "function ConjureAppPictureInPictureTsx5(){const{moved,dragStart,clampToBounds,position,getBounds,avoidance,dragging,closeTargetShown}=this.__closure;moved.set(true);dragStart.set(clampToBounds(position.get(),getBounds(avoidance.get())));dragging.set(true);closeTargetShown.set(true);}" };
const __initData3 = { code: "function ConjureAppPictureInPictureTsx6(){const{showConjureAppPictureInPictureActions,frameId,appName}=this.__closure;return showConjureAppPictureInPictureActions(frameId,appName);}" };
let closure_28 = { code: "function ConjureAppPictureInPictureTsx7(_event,success){const{open}=this.__closure;if(success){open();}}" };
const __initData4 = { code: "function ConjureAppPictureInPictureTsx8(){const{dragging,overCloseTarget,closing,position,clampToBounds,getBounds,avoidance,DRAGGING_SCALE,closeTargetCenter,size,OVER_CLOSE_TARGET_SCALE,FOLLOW_SPRING,SETTLE_SPRING,withTiming,CLOSE_ANIMATION_MS,withSpring}=this.__closure;const isDragging=dragging.get();const onCloseTarget=overCloseTarget.get()||closing.get();let{x:x,y:y}=isDragging?position.get():clampToBounds(position.get(),getBounds(avoidance.get()));let scale=isDragging?DRAGGING_SCALE:1;if(onCloseTarget){x=closeTargetCenter.x-size.width/2;y=closeTargetCenter.y-size.height/2;scale=closing.get()?0:OVER_CLOSE_TARGET_SCALE;}const spring=isDragging&&!onCloseTarget?FOLLOW_SPRING:SETTLE_SPRING;return{width:size.width,height:size.height,opacity:closing.get()?withTiming(0,{duration:CLOSE_ANIMATION_MS}):1,transform:[{translateX:withSpring(x,spring)},{translateY:withSpring(y,spring)},{scale:withSpring(scale,spring)}]};}" };
const __initData5 = { code: "function ConjureAppPictureInPictureTsx9(specs){const{getPictureInPictureBounds,windowWidth,windowHeight,safeArea,size}=this.__closure;return getPictureInPictureBounds({windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,size:size,topAvoidance:specs.top,bottomAvoidance:specs.bottom});}" };
let closure_31 = { code: "function ConjureAppPictureInPictureTsx10(){const{dragging,overCloseTarget,closeTargetShown,closeTargetHovered}=this.__closure;dragging.set(false);overCloseTarget.set(false);closeTargetShown.set(false);closeTargetHovered.set(false);}" };
let closure_32 = { code: "function ConjureAppPictureInPictureTsx11(event_0){const{overCloseTarget,closing,runOnJS,closeAfterShrink,position,getSnappedPosition,getBounds,avoidance}=this.__closure;if(overCloseTarget.get()){closing.set(true);runOnJS(closeAfterShrink)();return;}position.set(getSnappedPosition(position.get(),{x:event_0.velocityX,y:event_0.velocityY},getBounds(avoidance.get())));}" };
let closure_33 = { code: "function ConjureAppPictureInPictureTsx12(event){const{dragStart,position,isOverCloseTarget,closeTargetCenter,overCloseTarget,closeTargetHovered,runOnJS,hapticOverCloseTarget}=this.__closure;const start=dragStart.get();position.set({x:start.x+event.translationX,y:start.y+event.translationY});const over=isOverCloseTarget({x:event.absoluteX,y:event.absoluteY},closeTargetCenter);if(over!==overCloseTarget.get()){overCloseTarget.set(over);closeTargetHovered.set(over);if(over)runOnJS(hapticOverCloseTarget)();}}" };
let closure_34 = { code: "function ConjureAppPictureInPictureTsx13(){const{moved,dragStart,clampToBounds,position,getBounds,avoidance,dragging,closeTargetShown}=this.__closure;moved.set(true);dragStart.set(clampToBounds(position.get(),getBounds(avoidance.get())));dragging.set(true);closeTargetShown.set(true);}" };
let closure_35 = { code: "function ConjureAppPictureInPictureTsx14(_event,success){const{open}=this.__closure;if(success)open();}" };
const __initData6 = { code: "function ConjureAppPictureInPictureTsx15(){const{dragging,overCloseTarget,closing,position,clampToBounds,getBounds,avoidance,DRAGGING_SCALE,closeTargetCenter,size,OVER_CLOSE_TARGET_SCALE,FOLLOW_SPRING,SETTLE_SPRING,withTiming,CLOSE_ANIMATION_MS,withSpring}=this.__closure;const isDragging=dragging.get();const onCloseTarget=overCloseTarget.get()||closing.get();let{x:x,y:y}=isDragging?position.get():clampToBounds(position.get(),getBounds(avoidance.get()));let scale=isDragging?DRAGGING_SCALE:1;if(onCloseTarget){x=closeTargetCenter.x-size.width/2;y=closeTargetCenter.y-size.height/2;scale=closing.get()?0:OVER_CLOSE_TARGET_SCALE;}const spring=isDragging&&!onCloseTarget?FOLLOW_SPRING:SETTLE_SPRING;return{width:size.width,height:size.height,opacity:closing.get()?withTiming(0,{duration:CLOSE_ANIMATION_MS}):1,transform:[{translateX:withSpring(x,spring)},{translateY:withSpring(y,spring)},{scale:withSpring(scale,spring)}]};}" };
ReactCompilerGating = fn(558);
let obj4 = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.lg };
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPicture.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppPictureInPicture(frameId) {
  const cResult = frameId(size[13]).c(103);
  frameId = frameId.frameId;
  const index = frameId.index;
  size = frameId.size;
  const windowWidth = frameId.windowWidth;
  const windowHeight = frameId.windowHeight;
  const safeArea = frameId.safeArea;
  const avoidance = frameId.avoidance;
  const closeTargetCenter = frameId.closeTargetCenter;
  const closeTargetShown = frameId.closeTargetShown;
  const closeTargetHovered = frameId.closeTargetHovered;
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [safeArea];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== frameId) {
    const fn = function l() {
      return closure_2_8(FramesStore.getFrame(frameId));
    };
    const items1 = [frameId];
    cResult[1] = frameId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = frameId(size[13]);
  const stateFromStores = frameId(size[15]).useStateFromStores(first, tmp7, tmp8);
  const tmpResult = frameId(size[15]);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = frameId(size[21]).useGetOrFetchApplication(applicationId);
  let str;
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  frameId(size[22]);
  if (cResult[4] === safeArea) {
    if (cResult[5] === size) {
      if (cResult[6] === windowHeight) {
        if (cResult[7] === windowWidth) {
          let tmp14 = cResult[8];
        }
        closure_11 = tmp14;
        const tmpResult13 = tmp(tmp2[25]);
        const sharedValue = tmpResult13.useSharedValue(tmp(tmp2[24]).getStackedPosition(index, size, tmp14(avoidance.get())));
        const tmpResult14 = tmp(tmp2[24]);
        const sharedValue1 = tmp(tmp2[25]).useSharedValue(sharedValue.get());
        const tmpResult15 = tmp(tmp2[25]);
        const sharedValue2 = tmp(tmp2[25]).useSharedValue(false);
        if (cResult[9] === avoidance) {
          if (cResult[10] === tmp14) {
            if (cResult[11] === index) {
              if (cResult[12] === sharedValue2) {
                if (cResult[13] === sharedValue) {
                  if (cResult[14] === size) {
                    let tmp18 = cResult[15];
                    let tmp19 = cResult[16];
                  }
                  const effect = windowWidth.useEffect(tmp18, tmp19);
                  const sharedValue3 = tmp(tmp2[25]).useSharedValue(false);
                  const tmpResult17 = tmp(tmp2[25]);
                  const sharedValue4 = tmp(tmp2[25]).useSharedValue(false);
                  const tmpResult18 = tmp(tmp2[25]);
                  const sharedValue5 = tmp(tmp2[25]).useSharedValue(false);
                  if (cResult[17] !== frameId) {
                    function se() {
                      const tmp = closure_2_8(FramesStore.getFrame(frameId));
                      if (null != tmp) {
                        const result = conjureBackgroundFrames.returnToConjureFrameSurface(tmp);
                      }
                    }
                    cResult[17] = frameId;
                    cResult[18] = se;
                    let tmp25 = se;
                  } else {
                    tmp25 = cResult[18];
                  }
                  presentation = tmp25;
                  if (cResult[19] === str) {
                    if (cResult[20] === frameId) {
                      let tmp26 = cResult[21];
                    }
                    if (cResult[22] !== frameId) {
                      function de() {
                        const timerId = setTimeout(() => index(size[27])(frameId), c13);
                      }
                      cResult[22] = frameId;
                      cResult[23] = de;
                      let tmp28 = de;
                    } else {
                      tmp28 = cResult[23];
                    }
                    closure_19 = tmp28;
                    const _Symbol = Symbol;
                    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                      function _e() {
                        return frameId(size[28]).triggerHapticFeedback(frameId(size[28]).HapticFeedbackTypes.IMPACT_MEDIUM);
                      }
                      cResult[24] = _e;
                      let tmp29 = _e;
                    } else {
                      tmp29 = cResult[24];
                    }
                    closure_20 = tmp29;
                    if (cResult[25] === avoidance) {
                      if (cResult[26] === tmp28) {
                        if (cResult[27] === closeTargetCenter) {
                          if (cResult[28] === closeTargetHovered) {
                            if (cResult[29] === closeTargetShown) {
                              if (cResult[30] === sharedValue5) {
                                if (cResult[31] === sharedValue1) {
                                  if (cResult[32] === sharedValue3) {
                                    if (cResult[33] === tmp14) {
                                      if (cResult[34] === sharedValue2) {
                                        if (cResult[35] === tmp25) {
                                          if (cResult[36] === sharedValue4) {
                                            if (cResult[37] === sharedValue) {
                                              if (cResult[38] === tmp26) {
                                                class Oe {
                                                  constructor() {
                                                    value = closure_15.get();
                                                    value1 = closure_16.get();
                                                    if (!value1) {
                                                      tmp3 = closure_17;
                                                      value1 = closure_17.get();
                                                    }
                                                    if (value) {
                                                      tmp11 = closure_12;
                                                      value2 = closure_12.get();
                                                    } else {
                                                      tmp4 = closure_0;
                                                      tmp5 = closure_2;
                                                      obj = closure_0(closure_2[24]);
                                                      tmp6 = closure_12;
                                                      tmp8 = closure_11;
                                                      tmp9 = avoidance;
                                                      value3 = closure_12.get();
                                                      value2 = obj.clampToBounds(value3, closure_11(avoidance.get()));
                                                    }
                                                    ({ x, y } = value2);
                                                    num = 1;
                                                    num2 = 1;
                                                    if (value) {
                                                      num2 = c14;
                                                    }
                                                    if (value1) {
                                                      tmp12 = closeTargetCenter;
                                                      tmp13 = size;
                                                      num3 = 2;
                                                      tmp16 = closure_17;
                                                      diff = closeTargetCenter.x - size.width / 2;
                                                      diff1 = closeTargetCenter.y - size.height / 2;
                                                      num4 = 0;
                                                      if (!closure_17.get()) {
                                                        num4 = c15;
                                                      }
                                                      num2 = num4;
                                                      y = diff1;
                                                      x = diff;
                                                    }
                                                    if (value) {
                                                      if (!value1) {
                                                        tmp17 = closure_16;
                                                      }
                                                      size = { width: null, height: null, opacity: null, transform: null };
                                                      tmp18 = size;
                                                      ({ width: obj2.width, height: obj2.height } = size);
                                                      tmp19 = closure_17;
                                                      if (closure_17.get()) {
                                                        tmp20 = closure_0;
                                                        tmp21 = closure_2;
                                                        obj3 = closure_0(closure_2[30]);
                                                        obj1 = { duration: null };
                                                        tmp22 = c13;
                                                        obj1.duration = c13;
                                                        num5 = 0;
                                                        num = obj3.withTiming(0, obj1);
                                                      }
                                                      size.opacity = num;
                                                      obj11 = { translateX: null };
                                                      tmp23 = closure_0;
                                                      tmp24 = closure_2;
                                                      obj6 = closure_0(closure_2[31]);
                                                      obj11.translateX = obj6.withSpring(x, tmp17);
                                                      items = [, , ];
                                                      items[0] = obj11;
                                                      obj12 = { translateY: null };
                                                      tmp25 = closure_0;
                                                      tmp26 = closure_2;
                                                      obj8 = closure_0(closure_2[31]);
                                                      obj12.translateY = obj8.withSpring(y, tmp17);
                                                      items[1] = obj12;
                                                      obj13 = { scale: null };
                                                      tmp27 = closure_0;
                                                      tmp28 = closure_2;
                                                      obj10 = closure_0(closure_2[31]);
                                                      obj13.scale = obj10.withSpring(num2, tmp17);
                                                      items[2] = obj13;
                                                      size.transform = items;
                                                      return size;
                                                    }
                                                    tmp17 = closure_17;
                                                    return;
                                                  }
                                                }
                                                let obj2 = { dragging: sharedValue3, overCloseTarget: sharedValue4, closing: sharedValue5, position: null, clampToBounds: null, getBounds: null, avoidance: null, DRAGGING_SCALE: null, closeTargetCenter: null, size: null, OVER_CLOSE_TARGET_SCALE: null, FOLLOW_SPRING: null, SETTLE_SPRING: null, withTiming: null, CLOSE_ANIMATION_MS: null, withSpring: null };
                                                class ConjureAppPictureInPictureTsx5 {
                                                  constructor() {
                                                    result = closure_14.set(true);
                                                    obj = closure_0(closure_2[24]);
                                                    value = closure_12.get();
                                                    result1 = closure_13.set(obj.clampToBounds(value, closure_11(avoidance.get())));
                                                    result2 = closure_15.set(true);
                                                    result3 = closeTargetShown.set(true);
                                                    return;
                                                  }
                                                }
                                                obj2.clampToBounds = tmp(tmp2[24]).clampToBounds;
                                                obj2.getBounds = tmp14;
                                                obj2.avoidance = avoidance;
                                                class ConjureAppPictureInPictureTsx6 {
                                                  constructor() {
                                                    obj = closure_0(closure_2[23]);
                                                    return obj.showConjureAppPictureInPictureActions(frameId, c10);
                                                  }
                                                }
                                                obj2.closeTargetCenter = closeTargetCenter;
                                                obj2.size = size;
                                                obj2.OVER_CLOSE_TARGET_SCALE = sharedValue3;
                                                obj2.FOLLOW_SPRING = sharedValue4;
                                                obj2.SETTLE_SPRING = sharedValue5;
                                                obj2.withTiming = tmp(tmp2[30]).withTiming;
                                                obj2.CLOSE_ANIMATION_MS = sharedValue1;
                                                obj2.withSpring = tmp(tmp2[31]).withSpring;
                                                Oe.__closure = obj2;
                                                Oe.__workletHash = 15874231221551;
                                                Oe.__initData = __initData4;
                                                const animatedStyle = tmp(tmp2[25]).useAnimatedStyle(Oe);
                                                if (cResult[68] === str) {
                                                  if (cResult[69] === tmp33) {
                                                    if (cResult[70] === stateFromStores) {
                                                      if (cResult[72] !== cResult[71]) {
                                                        function ye(arg0) {
                                                          const nativeEvent = arg0;
                                                          const found = arr4.find((name) => name.name === nativeEvent.nativeEvent.actionName);
                                                          if (found != null) {
                                                            found.onPress();
                                                          }
                                                        }
                                                        cResult[72] = arr4;
                                                        class Oe {
                                                          constructor() {
                                                            value = closure_15.get();
                                                            value1 = closure_16.get();
                                                            if (!value1) {
                                                              tmp3 = closure_17;
                                                              value1 = closure_17.get();
                                                            }
                                                            if (value) {
                                                              tmp11 = closure_12;
                                                              value2 = closure_12.get();
                                                            } else {
                                                              tmp4 = closure_0;
                                                              tmp5 = closure_2;
                                                              obj = closure_0(closure_2[24]);
                                                              tmp6 = closure_12;
                                                              tmp8 = closure_11;
                                                              tmp9 = avoidance;
                                                              value3 = closure_12.get();
                                                              value2 = obj.clampToBounds(value3, closure_11(avoidance.get()));
                                                            }
                                                            ({ x, y } = value2);
                                                            num = 1;
                                                            num2 = 1;
                                                            if (value) {
                                                              num2 = c14;
                                                            }
                                                            if (value1) {
                                                              tmp12 = closeTargetCenter;
                                                              tmp13 = size;
                                                              num3 = 2;
                                                              tmp16 = closure_17;
                                                              diff = closeTargetCenter.x - size.width / 2;
                                                              diff1 = closeTargetCenter.y - size.height / 2;
                                                              num4 = 0;
                                                              if (!closure_17.get()) {
                                                                num4 = c15;
                                                              }
                                                              num2 = num4;
                                                              y = diff1;
                                                              x = diff;
                                                            }
                                                            if (value) {
                                                              if (!value1) {
                                                                tmp17 = closure_16;
                                                              }
                                                              size = { width: null, height: null, opacity: null, transform: null };
                                                              tmp18 = size;
                                                              ({ width: obj2.width, height: obj2.height } = size);
                                                              tmp19 = closure_17;
                                                              if (closure_17.get()) {
                                                                tmp20 = closure_0;
                                                                tmp21 = closure_2;
                                                                obj3 = closure_0(closure_2[30]);
                                                                obj1 = { duration: null };
                                                                tmp22 = c13;
                                                                obj1.duration = c13;
                                                                num5 = 0;
                                                                num = obj3.withTiming(0, obj1);
                                                              }
                                                              size.opacity = num;
                                                              obj11 = { translateX: null };
                                                              tmp23 = closure_0;
                                                              tmp24 = closure_2;
                                                              obj6 = closure_0(closure_2[31]);
                                                              obj11.translateX = obj6.withSpring(x, tmp17);
                                                              items = [, , ];
                                                              items[0] = obj11;
                                                              obj12 = { translateY: null };
                                                              tmp25 = closure_0;
                                                              tmp26 = closure_2;
                                                              obj8 = closure_0(closure_2[31]);
                                                              obj12.translateY = obj8.withSpring(y, tmp17);
                                                              items[1] = obj12;
                                                              obj13 = { scale: null };
                                                              tmp27 = closure_0;
                                                              tmp28 = closure_2;
                                                              obj10 = closure_0(closure_2[31]);
                                                              obj13.scale = obj10.withSpring(num2, tmp17);
                                                              items[2] = obj13;
                                                              size.transform = items;
                                                              return size;
                                                            }
                                                            tmp17 = closure_17;
                                                            return;
                                                          }
                                                        }
                                                      }
                                                      if (null == stateFromStores) {
                                                        return null;
                                                      } else {
                                                        if (cResult[74] === animatedStyle) {
                                                          if (cResult[77] !== str) {
                                                            const intl = tmp(tmp2[32]).intl;
                                                            class Oe {
                                                              constructor() {
                                                                value = closure_15.get();
                                                                value1 = closure_16.get();
                                                                if (!value1) {
                                                                  tmp3 = closure_17;
                                                                  value1 = closure_17.get();
                                                                }
                                                                if (value) {
                                                                  tmp11 = closure_12;
                                                                  value2 = closure_12.get();
                                                                } else {
                                                                  tmp4 = closure_0;
                                                                  tmp5 = closure_2;
                                                                  obj = closure_0(closure_2[24]);
                                                                  tmp6 = closure_12;
                                                                  tmp8 = closure_11;
                                                                  tmp9 = avoidance;
                                                                  value3 = closure_12.get();
                                                                  value2 = obj.clampToBounds(value3, closure_11(avoidance.get()));
                                                                }
                                                                ({ x, y } = value2);
                                                                num = 1;
                                                                num2 = 1;
                                                                if (value) {
                                                                  num2 = c14;
                                                                }
                                                                if (value1) {
                                                                  tmp12 = closeTargetCenter;
                                                                  tmp13 = size;
                                                                  num3 = 2;
                                                                  tmp16 = closure_17;
                                                                  diff = closeTargetCenter.x - size.width / 2;
                                                                  diff1 = closeTargetCenter.y - size.height / 2;
                                                                  num4 = 0;
                                                                  if (!closure_17.get()) {
                                                                    num4 = c15;
                                                                  }
                                                                  num2 = num4;
                                                                  y = diff1;
                                                                  x = diff;
                                                                }
                                                                if (value) {
                                                                  if (!value1) {
                                                                    tmp17 = closure_16;
                                                                  }
                                                                  size = { width: null, height: null, opacity: null, transform: null };
                                                                  tmp18 = size;
                                                                  ({ width: obj2.width, height: obj2.height } = size);
                                                                  tmp19 = closure_17;
                                                                  if (closure_17.get()) {
                                                                    tmp20 = closure_0;
                                                                    tmp21 = closure_2;
                                                                    obj3 = closure_0(closure_2[30]);
                                                                    obj1 = { duration: null };
                                                                    tmp22 = c13;
                                                                    obj1.duration = c13;
                                                                    num5 = 0;
                                                                    num = obj3.withTiming(0, obj1);
                                                                  }
                                                                  size.opacity = num;
                                                                  obj11 = { translateX: null };
                                                                  tmp23 = closure_0;
                                                                  tmp24 = closure_2;
                                                                  obj6 = closure_0(closure_2[31]);
                                                                  obj11.translateX = obj6.withSpring(x, tmp17);
                                                                  items = [, , ];
                                                                  items[0] = obj11;
                                                                  obj12 = { translateY: null };
                                                                  tmp25 = closure_0;
                                                                  tmp26 = closure_2;
                                                                  obj8 = closure_0(closure_2[31]);
                                                                  obj12.translateY = obj8.withSpring(y, tmp17);
                                                                  items[1] = obj12;
                                                                  obj13 = { scale: null };
                                                                  tmp27 = closure_0;
                                                                  tmp28 = closure_2;
                                                                  obj10 = closure_0(closure_2[31]);
                                                                  obj13.scale = obj10.withSpring(num2, tmp17);
                                                                  items[2] = obj13;
                                                                  size.transform = items;
                                                                  return size;
                                                                }
                                                                tmp17 = closure_17;
                                                                return;
                                                              }
                                                            }
                                                            cResult[77] = str;
                                                            class ConjureAppPictureInPictureTsx5 {
                                                              constructor() {
                                                                result = closure_14.set(true);
                                                                obj = closure_0(closure_2[24]);
                                                                value = closure_12.get();
                                                                result1 = closure_13.set(obj.clampToBounds(value, closure_11(avoidance.get())));
                                                                result2 = closure_15.set(true);
                                                                result3 = closeTargetShown.set(true);
                                                                return;
                                                              }
                                                            }
                                                            const formatToPlainStringResult = intl.formatToPlainString(index(tmp2[33]).dPf03z, { appName: null });
                                                            let obj3 = { appName: null };
                                                          }
                                                          if (cResult[79] !== arr4) {
                                                            const _Symbol2 = Symbol;
                                                            if (cResult[81] === Symbol.for("react.memo_cache_sentinel")) {
                                                              class Le {
                                                                constructor(arg0) {
                                                                  obj = { name: frameId.name, label: frameId.label };
                                                                  return obj;
                                                                }
                                                              }
                                                              cResult[81] = Le;
                                                            } else {
                                                              class Le {
                                                                constructor(arg0) {
                                                                  obj = { name: frameId.name, label: frameId.label };
                                                                  return obj;
                                                                }
                                                              }
                                                            }
                                                            const mapped = arr4.map(Le);
                                                            class Oe {
                                                              constructor() {
                                                                value = closure_15.get();
                                                                value1 = closure_16.get();
                                                                if (!value1) {
                                                                  tmp3 = closure_17;
                                                                  value1 = closure_17.get();
                                                                }
                                                                if (value) {
                                                                  tmp11 = closure_12;
                                                                  value2 = closure_12.get();
                                                                } else {
                                                                  tmp4 = closure_0;
                                                                  tmp5 = closure_2;
                                                                  obj = closure_0(closure_2[24]);
                                                                  tmp6 = closure_12;
                                                                  tmp8 = closure_11;
                                                                  tmp9 = avoidance;
                                                                  value3 = closure_12.get();
                                                                  value2 = obj.clampToBounds(value3, closure_11(avoidance.get()));
                                                                }
                                                                ({ x, y } = value2);
                                                                num = 1;
                                                                num2 = 1;
                                                                if (value) {
                                                                  num2 = c14;
                                                                }
                                                                if (value1) {
                                                                  tmp12 = closeTargetCenter;
                                                                  tmp13 = size;
                                                                  num3 = 2;
                                                                  tmp16 = closure_17;
                                                                  diff = closeTargetCenter.x - size.width / 2;
                                                                  diff1 = closeTargetCenter.y - size.height / 2;
                                                                  num4 = 0;
                                                                  if (!closure_17.get()) {
                                                                    num4 = c15;
                                                                  }
                                                                  num2 = num4;
                                                                  y = diff1;
                                                                  x = diff;
                                                                }
                                                                if (value) {
                                                                  if (!value1) {
                                                                    tmp17 = closure_16;
                                                                  }
                                                                  size = { width: null, height: null, opacity: null, transform: null };
                                                                  tmp18 = size;
                                                                  ({ width: obj2.width, height: obj2.height } = size);
                                                                  tmp19 = closure_17;
                                                                  if (closure_17.get()) {
                                                                    tmp20 = closure_0;
                                                                    tmp21 = closure_2;
                                                                    obj3 = closure_0(closure_2[30]);
                                                                    obj1 = { duration: null };
                                                                    tmp22 = c13;
                                                                    obj1.duration = c13;
                                                                    num5 = 0;
                                                                    num = obj3.withTiming(0, obj1);
                                                                  }
                                                                  size.opacity = num;
                                                                  obj11 = { translateX: null };
                                                                  tmp23 = closure_0;
                                                                  tmp24 = closure_2;
                                                                  obj6 = closure_0(closure_2[31]);
                                                                  obj11.translateX = obj6.withSpring(x, tmp17);
                                                                  items = [, , ];
                                                                  items[0] = obj11;
                                                                  obj12 = { translateY: null };
                                                                  tmp25 = closure_0;
                                                                  tmp26 = closure_2;
                                                                  obj8 = closure_0(closure_2[31]);
                                                                  obj12.translateY = obj8.withSpring(y, tmp17);
                                                                  items[1] = obj12;
                                                                  obj13 = { scale: null };
                                                                  tmp27 = closure_0;
                                                                  tmp28 = closure_2;
                                                                  obj10 = closure_0(closure_2[31]);
                                                                  obj13.scale = obj10.withSpring(num2, tmp17);
                                                                  items[2] = obj13;
                                                                  size.transform = items;
                                                                  return size;
                                                                }
                                                                tmp17 = closure_17;
                                                                return;
                                                              }
                                                            }
                                                            cResult[79] = arr4;
                                                            cResult[80] = mapped;
                                                          } else {
                                                            class Le {
                                                              constructor(arg0) {
                                                                obj = { name: frameId.name, label: frameId.label };
                                                                return obj;
                                                              }
                                                            }
                                                            if (cResult[82] !== frameId) {
                                                              class Le {
                                                                constructor(arg0) {
                                                                  obj = { name: frameId.name, label: frameId.label };
                                                                  return obj;
                                                                }
                                                              }
                                                              let obj4 = { frameId, level: null, presentation: null };
                                                              class Oe {
                                                                constructor() {
                                                                  value = closure_15.get();
                                                                  value1 = closure_16.get();
                                                                  if (!value1) {
                                                                    tmp3 = closure_17;
                                                                    value1 = closure_17.get();
                                                                  }
                                                                  if (value) {
                                                                    tmp11 = closure_12;
                                                                    value2 = closure_12.get();
                                                                  } else {
                                                                    tmp4 = closure_0;
                                                                    tmp5 = closure_2;
                                                                    obj = closure_0(closure_2[24]);
                                                                    tmp6 = closure_12;
                                                                    tmp8 = closure_11;
                                                                    tmp9 = avoidance;
                                                                    value3 = closure_12.get();
                                                                    value2 = obj.clampToBounds(value3, closure_11(avoidance.get()));
                                                                  }
                                                                  ({ x, y } = value2);
                                                                  num = 1;
                                                                  num2 = 1;
                                                                  if (value) {
                                                                    num2 = c14;
                                                                  }
                                                                  if (value1) {
                                                                    tmp12 = closeTargetCenter;
                                                                    tmp13 = size;
                                                                    num3 = 2;
                                                                    tmp16 = closure_17;
                                                                    diff = closeTargetCenter.x - size.width / 2;
                                                                    diff1 = closeTargetCenter.y - size.height / 2;
                                                                    num4 = 0;
                                                                    if (!closure_17.get()) {
                                                                      num4 = c15;
                                                                    }
                                                                    num2 = num4;
                                                                    y = diff1;
                                                                    x = diff;
                                                                  }
                                                                  if (value) {
                                                                    if (!value1) {
                                                                      tmp17 = closure_16;
                                                                    }
                                                                    size = { width: null, height: null, opacity: null, transform: null };
                                                                    tmp18 = size;
                                                                    ({ width: obj2.width, height: obj2.height } = size);
                                                                    tmp19 = closure_17;
                                                                    if (closure_17.get()) {
                                                                      tmp20 = closure_0;
                                                                      tmp21 = closure_2;
                                                                      obj3 = closure_0(closure_2[30]);
                                                                      obj1 = { duration: null };
                                                                      tmp22 = c13;
                                                                      obj1.duration = c13;
                                                                      num5 = 0;
                                                                      num = obj3.withTiming(0, obj1);
                                                                    }
                                                                    size.opacity = num;
                                                                    obj11 = { translateX: null };
                                                                    tmp23 = closure_0;
                                                                    tmp24 = closure_2;
                                                                    obj6 = closure_0(closure_2[31]);
                                                                    obj11.translateX = obj6.withSpring(x, tmp17);
                                                                    items = [, , ];
                                                                    items[0] = obj11;
                                                                    obj12 = { translateY: null };
                                                                    tmp25 = closure_0;
                                                                    tmp26 = closure_2;
                                                                    obj8 = closure_0(closure_2[31]);
                                                                    obj12.translateY = obj8.withSpring(y, tmp17);
                                                                    items[1] = obj12;
                                                                    obj13 = { scale: null };
                                                                    tmp27 = closure_0;
                                                                    tmp28 = closure_2;
                                                                    obj10 = closure_0(closure_2[31]);
                                                                    obj13.scale = obj10.withSpring(num2, tmp17);
                                                                    items[2] = obj13;
                                                                    size.transform = items;
                                                                    return size;
                                                                  }
                                                                  tmp17 = closure_17;
                                                                  return;
                                                                }
                                                              }
                                                              obj4.level = tmp(tmp2[35]).FrameStackLevel.AboveAppContent;
                                                              obj4.presentation = presentation;
                                                              const tmp55 = str(tmp53, obj4);
                                                              class ConjureAppPictureInPictureTsx5 {
                                                                constructor() {
                                                                  result = closure_14.set(true);
                                                                  obj = closure_0(closure_2[24]);
                                                                  value = closure_12.get();
                                                                  result1 = closure_13.set(obj.clampToBounds(value, closure_11(avoidance.get())));
                                                                  result2 = closure_15.set(true);
                                                                  result3 = closeTargetShown.set(true);
                                                                  return;
                                                                }
                                                              }
                                                              cResult[82] = frameId;
                                                              cResult[83] = tmp55;
                                                            } else {
                                                              class Le {
                                                                constructor(arg0) {
                                                                  obj = { name: frameId.name, label: frameId.label };
                                                                  return obj;
                                                                }
                                                              }
                                                            }
                                                            if (cResult[84] === str) {
                                                              class Le {
                                                                constructor(arg0) {
                                                                  obj = { name: frameId.name, label: frameId.label };
                                                                  return obj;
                                                                }
                                                              }
                                                              if (cResult[87] === tmp4.mask) {
                                                                class Le {
                                                                  constructor(arg0) {
                                                                    obj = { name: frameId.name, label: frameId.label };
                                                                    return obj;
                                                                  }
                                                                }
                                                              }
                                                              class Oe {
                                                                constructor() {
                                                                  value = closure_15.get();
                                                                  value1 = closure_16.get();
                                                                  if (!value1) {
                                                                    tmp3 = closure_17;
                                                                    value1 = closure_17.get();
                                                                  }
                                                                  if (value) {
                                                                    tmp11 = closure_12;
                                                                    value2 = closure_12.get();
                                                                  } else {
                                                                    tmp4 = closure_0;
                                                                    tmp5 = closure_2;
                                                                    obj = closure_0(closure_2[24]);
                                                                    tmp6 = closure_12;
                                                                    tmp8 = closure_11;
                                                                    tmp9 = avoidance;
                                                                    value3 = closure_12.get();
                                                                    value2 = obj.clampToBounds(value3, closure_11(avoidance.get()));
                                                                  }
                                                                  ({ x, y } = value2);
                                                                  num = 1;
                                                                  num2 = 1;
                                                                  if (value) {
                                                                    num2 = c14;
                                                                  }
                                                                  if (value1) {
                                                                    tmp12 = closeTargetCenter;
                                                                    tmp13 = size;
                                                                    num3 = 2;
                                                                    tmp16 = closure_17;
                                                                    diff = closeTargetCenter.x - size.width / 2;
                                                                    diff1 = closeTargetCenter.y - size.height / 2;
                                                                    num4 = 0;
                                                                    if (!closure_17.get()) {
                                                                      num4 = c15;
                                                                    }
                                                                    num2 = num4;
                                                                    y = diff1;
                                                                    x = diff;
                                                                  }
                                                                  if (value) {
                                                                    if (!value1) {
                                                                      tmp17 = closure_16;
                                                                    }
                                                                    size = { width: null, height: null, opacity: null, transform: null };
                                                                    tmp18 = size;
                                                                    ({ width: obj2.width, height: obj2.height } = size);
                                                                    tmp19 = closure_17;
                                                                    if (closure_17.get()) {
                                                                      tmp20 = closure_0;
                                                                      tmp21 = closure_2;
                                                                      obj3 = closure_0(closure_2[30]);
                                                                      obj1 = { duration: null };
                                                                      tmp22 = c13;
                                                                      obj1.duration = c13;
                                                                      num5 = 0;
                                                                      num = obj3.withTiming(0, obj1);
                                                                    }
                                                                    size.opacity = num;
                                                                    obj11 = { translateX: null };
                                                                    tmp23 = closure_0;
                                                                    tmp24 = closure_2;
                                                                    obj6 = closure_0(closure_2[31]);
                                                                    obj11.translateX = obj6.withSpring(x, tmp17);
                                                                    items = [, , ];
                                                                    items[0] = obj11;
                                                                    obj12 = { translateY: null };
                                                                    tmp25 = closure_0;
                                                                    tmp26 = closure_2;
                                                                    obj8 = closure_0(closure_2[31]);
                                                                    obj12.translateY = obj8.withSpring(y, tmp17);
                                                                    items[1] = obj12;
                                                                    obj13 = { scale: null };
                                                                    tmp27 = closure_0;
                                                                    tmp28 = closure_2;
                                                                    obj10 = closure_0(closure_2[31]);
                                                                    obj13.scale = obj10.withSpring(num2, tmp17);
                                                                    items[2] = obj13;
                                                                    size.transform = items;
                                                                    return size;
                                                                  }
                                                                  tmp17 = closure_17;
                                                                  return;
                                                                }
                                                              }
                                                              tmp63[0] = tmp4.mask;
                                                              const items2 = [tmp51, tmp56];
                                                              class ConjureAppPictureInPictureTsx5 {
                                                                constructor() {
                                                                  result = closure_14.set(true);
                                                                  obj = closure_0(closure_2[24]);
                                                                  value = closure_12.get();
                                                                  result1 = closure_13.set(obj.clampToBounds(value, closure_11(avoidance.get())));
                                                                  result2 = closure_15.set(true);
                                                                  result3 = closeTargetShown.set(true);
                                                                  return;
                                                                }
                                                              }
                                                              const tmp64 = closure_11(windowHeight, tmp63);
                                                              cResult[87] = tmp4.mask;
                                                              cResult[88] = tmp51;
                                                              class ConjureAppPictureInPictureTsx6 {
                                                                constructor() {
                                                                  obj = closure_0(closure_2[23]);
                                                                  return obj.showConjureAppPictureInPictureActions(frameId, c10);
                                                                }
                                                              }
                                                              cResult[89] = tmp56;
                                                              cResult[90] = tmp64;
                                                            }
                                                            class Oe {
                                                              constructor() {
                                                                value = closure_15.get();
                                                                value1 = closure_16.get();
                                                                if (!value1) {
                                                                  tmp3 = closure_17;
                                                                  value1 = closure_17.get();
                                                                }
                                                                if (value) {
                                                                  tmp11 = closure_12;
                                                                  value2 = closure_12.get();
                                                                } else {
                                                                  tmp4 = closure_0;
                                                                  tmp5 = closure_2;
                                                                  obj = closure_0(closure_2[24]);
                                                                  tmp6 = closure_12;
                                                                  tmp8 = closure_11;
                                                                  tmp9 = avoidance;
                                                                  value3 = closure_12.get();
                                                                  value2 = obj.clampToBounds(value3, closure_11(avoidance.get()));
                                                                }
                                                                ({ x, y } = value2);
                                                                num = 1;
                                                                num2 = 1;
                                                                if (value) {
                                                                  num2 = c14;
                                                                }
                                                                if (value1) {
                                                                  tmp12 = closeTargetCenter;
                                                                  tmp13 = size;
                                                                  num3 = 2;
                                                                  tmp16 = closure_17;
                                                                  diff = closeTargetCenter.x - size.width / 2;
                                                                  diff1 = closeTargetCenter.y - size.height / 2;
                                                                  num4 = 0;
                                                                  if (!closure_17.get()) {
                                                                    num4 = c15;
                                                                  }
                                                                  num2 = num4;
                                                                  y = diff1;
                                                                  x = diff;
                                                                }
                                                                if (value) {
                                                                  if (!value1) {
                                                                    tmp17 = closure_16;
                                                                  }
                                                                  size = { width: null, height: null, opacity: null, transform: null };
                                                                  tmp18 = size;
                                                                  ({ width: obj2.width, height: obj2.height } = size);
                                                                  tmp19 = closure_17;
                                                                  if (closure_17.get()) {
                                                                    tmp20 = closure_0;
                                                                    tmp21 = closure_2;
                                                                    obj3 = closure_0(closure_2[30]);
                                                                    obj1 = { duration: null };
                                                                    tmp22 = c13;
                                                                    obj1.duration = c13;
                                                                    num5 = 0;
                                                                    num = obj3.withTiming(0, obj1);
                                                                  }
                                                                  size.opacity = num;
                                                                  obj11 = { translateX: null };
                                                                  tmp23 = closure_0;
                                                                  tmp24 = closure_2;
                                                                  obj6 = closure_0(closure_2[31]);
                                                                  obj11.translateX = obj6.withSpring(x, tmp17);
                                                                  items = [, , ];
                                                                  items[0] = obj11;
                                                                  obj12 = { translateY: null };
                                                                  tmp25 = closure_0;
                                                                  tmp26 = closure_2;
                                                                  obj8 = closure_0(closure_2[31]);
                                                                  obj12.translateY = obj8.withSpring(y, tmp17);
                                                                  items[1] = obj12;
                                                                  obj13 = { scale: null };
                                                                  tmp27 = closure_0;
                                                                  tmp28 = closure_2;
                                                                  obj10 = closure_0(closure_2[31]);
                                                                  obj13.scale = obj10.withSpring(num2, tmp17);
                                                                  items[2] = obj13;
                                                                  size.transform = items;
                                                                  return size;
                                                                }
                                                                tmp17 = closure_17;
                                                                return;
                                                              }
                                                            }
                                                            if (sharedValue) {
                                                              class Le {
                                                                constructor(arg0) {
                                                                  obj = { name: frameId.name, label: frameId.label };
                                                                  return obj;
                                                                }
                                                              }
                                                              let obj5 = { frame: stateFromStores, appName: null };
                                                              class Oe {
                                                                constructor() {
                                                                  value = closure_15.get();
                                                                  value1 = closure_16.get();
                                                                  if (!value1) {
                                                                    tmp3 = closure_17;
                                                                    value1 = closure_17.get();
                                                                  }
                                                                  if (value) {
                                                                    tmp11 = closure_12;
                                                                    value2 = closure_12.get();
                                                                  } else {
                                                                    tmp4 = closure_0;
                                                                    tmp5 = closure_2;
                                                                    obj = closure_0(closure_2[24]);
                                                                    tmp6 = closure_12;
                                                                    tmp8 = closure_11;
                                                                    tmp9 = avoidance;
                                                                    value3 = closure_12.get();
                                                                    value2 = obj.clampToBounds(value3, closure_11(avoidance.get()));
                                                                  }
                                                                  ({ x, y } = value2);
                                                                  num = 1;
                                                                  num2 = 1;
                                                                  if (value) {
                                                                    num2 = c14;
                                                                  }
                                                                  if (value1) {
                                                                    tmp12 = closeTargetCenter;
                                                                    tmp13 = size;
                                                                    num3 = 2;
                                                                    tmp16 = closure_17;
                                                                    diff = closeTargetCenter.x - size.width / 2;
                                                                    diff1 = closeTargetCenter.y - size.height / 2;
                                                                    num4 = 0;
                                                                    if (!closure_17.get()) {
                                                                      num4 = c15;
                                                                    }
                                                                    num2 = num4;
                                                                    y = diff1;
                                                                    x = diff;
                                                                  }
                                                                  if (value) {
                                                                    if (!value1) {
                                                                      tmp17 = closure_16;
                                                                    }
                                                                    size = { width: null, height: null, opacity: null, transform: null };
                                                                    tmp18 = size;
                                                                    ({ width: obj2.width, height: obj2.height } = size);
                                                                    tmp19 = closure_17;
                                                                    if (closure_17.get()) {
                                                                      tmp20 = closure_0;
                                                                      tmp21 = closure_2;
                                                                      obj3 = closure_0(closure_2[30]);
                                                                      obj1 = { duration: null };
                                                                      tmp22 = c13;
                                                                      obj1.duration = c13;
                                                                      num5 = 0;
                                                                      num = obj3.withTiming(0, obj1);
                                                                    }
                                                                    size.opacity = num;
                                                                    obj11 = { translateX: null };
                                                                    tmp23 = closure_0;
                                                                    tmp24 = closure_2;
                                                                    obj6 = closure_0(closure_2[31]);
                                                                    obj11.translateX = obj6.withSpring(x, tmp17);
                                                                    items = [, , ];
                                                                    items[0] = obj11;
                                                                    obj12 = { translateY: null };
                                                                    tmp25 = closure_0;
                                                                    tmp26 = closure_2;
                                                                    obj8 = closure_0(closure_2[31]);
                                                                    obj12.translateY = obj8.withSpring(y, tmp17);
                                                                    items[1] = obj12;
                                                                    obj13 = { scale: null };
                                                                    tmp27 = closure_0;
                                                                    tmp28 = closure_2;
                                                                    obj10 = closure_0(closure_2[31]);
                                                                    obj13.scale = obj10.withSpring(num2, tmp17);
                                                                    items[2] = obj13;
                                                                    size.transform = items;
                                                                    return size;
                                                                  }
                                                                  tmp17 = closure_17;
                                                                  return;
                                                                }
                                                              }
                                                              const tmp58 = str(closure_20, obj5);
                                                            }
                                                            cResult[84] = str;
                                                            class ConjureAppPictureInPictureTsx5 {
                                                              constructor() {
                                                                result = closure_14.set(true);
                                                                obj = closure_0(closure_2[24]);
                                                                value = closure_12.get();
                                                                result1 = closure_13.set(obj.clampToBounds(value, closure_11(avoidance.get())));
                                                                result2 = closure_15.set(true);
                                                                result3 = closeTargetShown.set(true);
                                                                return;
                                                              }
                                                            }
                                                            cResult[86] = tmp58;
                                                          }
                                                        }
                                                        const items3 = [tmp4.window, animatedStyle];
                                                        class Oe {
                                                          constructor() {
                                                            value = closure_15.get();
                                                            value1 = closure_16.get();
                                                            if (!value1) {
                                                              tmp3 = closure_17;
                                                              value1 = closure_17.get();
                                                            }
                                                            if (value) {
                                                              tmp11 = closure_12;
                                                              value2 = closure_12.get();
                                                            } else {
                                                              tmp4 = closure_0;
                                                              tmp5 = closure_2;
                                                              obj = closure_0(closure_2[24]);
                                                              tmp6 = closure_12;
                                                              tmp8 = closure_11;
                                                              tmp9 = avoidance;
                                                              value3 = closure_12.get();
                                                              value2 = obj.clampToBounds(value3, closure_11(avoidance.get()));
                                                            }
                                                            ({ x, y } = value2);
                                                            num = 1;
                                                            num2 = 1;
                                                            if (value) {
                                                              num2 = c14;
                                                            }
                                                            if (value1) {
                                                              tmp12 = closeTargetCenter;
                                                              tmp13 = size;
                                                              num3 = 2;
                                                              tmp16 = closure_17;
                                                              diff = closeTargetCenter.x - size.width / 2;
                                                              diff1 = closeTargetCenter.y - size.height / 2;
                                                              num4 = 0;
                                                              if (!closure_17.get()) {
                                                                num4 = c15;
                                                              }
                                                              num2 = num4;
                                                              y = diff1;
                                                              x = diff;
                                                            }
                                                            if (value) {
                                                              if (!value1) {
                                                                tmp17 = closure_16;
                                                              }
                                                              size = { width: null, height: null, opacity: null, transform: null };
                                                              tmp18 = size;
                                                              ({ width: obj2.width, height: obj2.height } = size);
                                                              tmp19 = closure_17;
                                                              if (closure_17.get()) {
                                                                tmp20 = closure_0;
                                                                tmp21 = closure_2;
                                                                obj3 = closure_0(closure_2[30]);
                                                                obj1 = { duration: null };
                                                                tmp22 = c13;
                                                                obj1.duration = c13;
                                                                num5 = 0;
                                                                num = obj3.withTiming(0, obj1);
                                                              }
                                                              size.opacity = num;
                                                              obj11 = { translateX: null };
                                                              tmp23 = closure_0;
                                                              tmp24 = closure_2;
                                                              obj6 = closure_0(closure_2[31]);
                                                              obj11.translateX = obj6.withSpring(x, tmp17);
                                                              items = [, , ];
                                                              items[0] = obj11;
                                                              obj12 = { translateY: null };
                                                              tmp25 = closure_0;
                                                              tmp26 = closure_2;
                                                              obj8 = closure_0(closure_2[31]);
                                                              obj12.translateY = obj8.withSpring(y, tmp17);
                                                              items[1] = obj12;
                                                              obj13 = { scale: null };
                                                              tmp27 = closure_0;
                                                              tmp28 = closure_2;
                                                              obj10 = closure_0(closure_2[31]);
                                                              obj13.scale = obj10.withSpring(num2, tmp17);
                                                              items[2] = obj13;
                                                              size.transform = items;
                                                              return size;
                                                            }
                                                            tmp17 = closure_17;
                                                            return;
                                                          }
                                                        }
                                                        cResult[74] = animatedStyle;
                                                        cResult[75] = tmp4.window;
                                                        class ConjureAppPictureInPictureTsx5 {
                                                          constructor() {
                                                            result = closure_14.set(true);
                                                            obj = closure_0(closure_2[24]);
                                                            value = closure_12.get();
                                                            result1 = closure_13.set(obj.clampToBounds(value, closure_11(avoidance.get())));
                                                            result2 = closure_15.set(true);
                                                            result3 = closeTargetShown.set(true);
                                                            return;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                if (null != stateFromStores) {
                                                  class Le {
                                                    constructor(arg0) {
                                                      obj = { name: frameId.name, label: frameId.label };
                                                      return obj;
                                                    }
                                                  }
                                                  const conjureAppPictureInPictureActions = obj17.getConjureAppPictureInPictureActions(stateFromStores, str, tmp33);
                                                  const mapped1 = conjureAppPictureInPictureActions.map((label, index) => {
                                                    str = "activate";
                                                    if (0 !== index) {
                                                      const _HermesInternal = HermesInternal;
                                                      str = "action-" + index;
                                                    }
                                                    return { name: str, label: label.label, onPress: label.onPress };
                                                  });
                                                } else {
                                                  class Le {
                                                    constructor(arg0) {
                                                      obj = { name: frameId.name, label: frameId.label };
                                                      return obj;
                                                    }
                                                  }
                                                }
                                                cResult[68] = str;
                                                cResult[69] = 2 === tmp13;
                                                cResult[70] = stateFromStores;
                                                cResult[71] = mapped1;
                                                const tmpResult20 = tmp(tmp2[25]);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    if (cResult[40] === avoidance) {
                      class Le {
                        constructor(arg0) {
                          obj = { name: frameId.name, label: frameId.label };
                          return obj;
                        }
                      }
                    }
                    class ConjureAppPictureInPictureTsx5 {
                      constructor() {
                        result = closure_14.set(true);
                        obj = closure_0(closure_2[24]);
                        value = closure_12.get();
                        result1 = closure_13.set(obj.clampToBounds(value, closure_11(avoidance.get())));
                        result2 = closure_15.set(true);
                        result3 = closeTargetShown.set(true);
                        return;
                      }
                    }
                    let obj6 = { moved: sharedValue2, dragStart: sharedValue1, clampToBounds: tmp(tmp2[24]).clampToBounds, position: sharedValue, getBounds: null, avoidance: null, dragging: null, closeTargetShown: null };
                    class ConjureAppPictureInPictureTsx6 {
                      constructor() {
                        obj = closure_0(closure_2[23]);
                        return obj.showConjureAppPictureInPictureActions(frameId, c10);
                      }
                    }
                    obj6.avoidance = avoidance;
                    obj6.dragging = sharedValue3;
                    obj6.closeTargetShown = closeTargetShown;
                    ConjureAppPictureInPictureTsx5.__closure = obj6;
                    ConjureAppPictureInPictureTsx5.__workletHash = 13934479222574;
                    ConjureAppPictureInPictureTsx5.__initData = __initData2;
                    cResult[40] = avoidance;
                    cResult[41] = closeTargetShown;
                    cResult[42] = sharedValue1;
                    cResult[43] = sharedValue3;
                    cResult[44] = tmp14;
                    cResult[45] = sharedValue2;
                    cResult[46] = sharedValue;
                    cResult[47] = ConjureAppPictureInPictureTsx5;
                  }
                  class ConjureAppPictureInPictureTsx6 {
                    constructor() {
                      obj = closure_0(closure_2[23]);
                      return obj.showConjureAppPictureInPictureActions(frameId, c10);
                    }
                  }
                  let obj7 = { showConjureAppPictureInPictureActions: tmp(tmp2[23]).showConjureAppPictureInPictureActions, frameId, appName: str };
                  ConjureAppPictureInPictureTsx6.__closure = obj7;
                  ConjureAppPictureInPictureTsx6.__workletHash = 12742354947175;
                  ConjureAppPictureInPictureTsx6.__initData = __initData3;
                  cResult[19] = str;
                  cResult[20] = frameId;
                  cResult[21] = ConjureAppPictureInPictureTsx6;
                  tmp26 = ConjureAppPictureInPictureTsx6;
                  const tmpResult19 = tmp(tmp2[25]);
                }
              }
            }
          }
        }
        function ee() {
          if (!sharedValue2.get()) {
            const result = sharedValue.set(conjureAppPictureInPictureLayout.getStackedPosition(index, size, closure_11(avoidance.get())));
          }
        }
        const items4 = [avoidance, tmp14, index, sharedValue2, sharedValue, size];
        cResult[9] = avoidance;
        cResult[10] = tmp14;
        cResult[11] = index;
        cResult[12] = sharedValue2;
        cResult[13] = sharedValue;
        cResult[14] = size;
        cResult[15] = ee;
        cResult[16] = items4;
        tmp19 = items4;
        tmp18 = ee;
        const tmpResult16 = tmp(tmp2[25]);
      }
    }
  }
  const fn2 = function $(top) {
    return conjureAppPictureInPictureLayout.getPictureInPictureBounds({ windowWidth, windowHeight, safeArea, size, topAvoidance: top.top, bottomAvoidance: top.bottom });
  };
  const tmpResult11 = frameId(size[21]);
  fn2.__closure = { getPictureInPictureBounds: frameId(size[24]).getPictureInPictureBounds, windowWidth, windowHeight, safeArea, size };
  fn2.__workletHash = 15664785095562;
  fn2.__initData = __initData;
  cResult[4] = safeArea;
  cResult[5] = size;
  cResult[6] = windowHeight;
  cResult[7] = windowWidth;
  cResult[8] = fn2;
  tmp14 = fn2;
  let obj8 = { getPictureInPictureBounds: frameId(size[24]).getPictureInPictureBounds, windowWidth, windowHeight, safeArea, size };
}) : (function ConjureAppPictureInPicture(frameId) {
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
  let callback;
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
  let tmp = sharedValue5();
  let items = [safeArea];
  const items1 = [frameId];
  const stateFromStores = frameId(size[15]).useStateFromStores(items, () => closure_2_8(FramesStore.getFrame(frameId)), items1);
  let obj = frameId(size[15]);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = frameId(size[21]).useGetOrFetchApplication(applicationId);
  str = undefined;
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  let obj2 = frameId(size[21]);
  const tmp7 = 2 === frameId(size[22]).useEmbeddedAppShimVersion(frameId(size[23]).CONJURE_APP_PICTURE_IN_PICTURE_LOCATION);
  closure_12 = tmp7;
  class L {
    constructor(arg0) {
      obj = closure_0(closure_2[24]);
      obj1 = { windowWidth, windowHeight, safeArea, size, topAvoidance: frameId.top, bottomAvoidance: frameId.bottom };
      return obj.getPictureInPictureBounds(obj1);
    }
  }
  let tmp2Result = frameId(size[22]);
  L.__closure = { getPictureInPictureBounds: frameId(size[24]).getPictureInPictureBounds, windowWidth, windowHeight, safeArea, size };
  L.__workletHash = 2986408403330;
  L.__initData = __initData5;
  const items2 = [windowWidth, windowHeight, safeArea, size];
  callback = windowWidth.useCallback(L, items2);
  let obj3 = { getPictureInPictureBounds: frameId(size[24]).getPictureInPictureBounds, windowWidth, windowHeight, safeArea, size };
  const tmp2Result9 = frameId(size[25]);
  sharedValue = tmp2Result9.useSharedValue(frameId(size[24]).getStackedPosition(index, size, callback(avoidance.get())));
  const tmp2Result10 = frameId(size[24]);
  sharedValue1 = frameId(size[25]).useSharedValue(sharedValue.get());
  const tmp2Result11 = frameId(size[25]);
  sharedValue2 = frameId(size[25]).useSharedValue(false);
  const items3 = [avoidance, callback, index, sharedValue2, sharedValue, size];
  const effect = windowWidth.useEffect(() => {
    if (!sharedValue2.get()) {
      const result = sharedValue.set(conjureAppPictureInPictureLayout.getStackedPosition(index, size, callback(avoidance.get())));
    }
  }, items3);
  const tmp2Result12 = frameId(size[25]);
  sharedValue3 = frameId(size[25]).useSharedValue(false);
  const tmp2Result13 = frameId(size[25]);
  sharedValue4 = frameId(size[25]).useSharedValue(false);
  const tmp2Result14 = frameId(size[25]);
  sharedValue5 = frameId(size[25]).useSharedValue(false);
  const items4 = [frameId];
  callback1 = windowWidth.useCallback(() => {
    const tmp = closure_2_8(FramesStore.getFrame(frameId));
    if (null != tmp) {
      const result = conjureBackgroundFrames.returnToConjureFrameSurface(tmp);
    }
  }, items4);
  const items5 = [frameId, str];
  callback2 = windowWidth.useCallback(() => conjureAppPictureInPictureActions2.showConjureAppPictureInPictureActions(frameId, str), items5);
  const items6 = [frameId];
  callback3 = windowWidth.useCallback(() => {
    const timerId = setTimeout(() => index(size[27])(frameId), c13);
  }, items6);
  callback4 = windowWidth.useCallback(() => frameId(size[28]).triggerHapticFeedback(frameId(size[28]).HapticFeedbackTypes.IMPACT_MEDIUM), []);
  const items7 = [avoidance, callback3, sharedValue5, sharedValue1, sharedValue3, callback, callback4, sharedValue2, callback1, sharedValue4, sharedValue, callback2, closeTargetCenter, closeTargetHovered, closeTargetShown];
  const memo = windowWidth.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const maxPointersResult = Gesture.Pan().maxPointers(1);
    const fn = function s() {
      const result = sharedValue2.set(true);
      value = sharedValue.get();
      const result1 = sharedValue1.set(frameId(size[24]).clampToBounds(value, duration(avoidance.get())));
      const result2 = sharedValue3.set(true);
      const result3 = closeTargetShown.set(true);
    };
    const minDistanceResult = Gesture.Pan().maxPointers(1).minDistance(MIN_PAN_GESTURE_MOVE);
    fn.__closure = { moved: sharedValue2, dragStart: sharedValue1, clampToBounds: conjureAppPictureInPictureLayout.clampToBounds, position: sharedValue, getBounds: callback, avoidance, dragging: sharedValue3, closeTargetShown };
    fn.__workletHash = 10818118775353;
    fn.__initData = __initData4;
    let obj = { moved: sharedValue2, dragStart: sharedValue1, clampToBounds: conjureAppPictureInPictureLayout.clampToBounds, position: sharedValue, getBounds: callback, avoidance, dragging: sharedValue3, closeTargetShown };
    const fn2 = function n(translationX) {
      const point = sharedValue1.get();
      const point1 = { x: point.x + translationX.translationX, y: point.y + translationX.translationY };
      const result = sharedValue.set(point1);
      const point2 = { x: translationX.absoluteX, y: translationX.absoluteY };
      const isOverCloseTargetResult = frameId(size[24]).isOverCloseTarget(point2, closeTargetCenter);
      if (isOverCloseTargetResult !== sharedValue4.get()) {
        const result1 = sharedValue4.set(isOverCloseTargetResult);
        const result2 = closeTargetHovered.set(isOverCloseTargetResult);
        if (isOverCloseTargetResult) {
          frameId(size[25]).runOnJS(callback4)();
          const tmp2Result = frameId(size[25]);
        }
      }
      const obj2 = frameId(size[24]);
    };
    const onStartResult = minDistanceResult.onStart(fn);
    fn2.__closure = { dragStart: sharedValue1, position: sharedValue, isOverCloseTarget: conjureAppPictureInPictureLayout.isOverCloseTarget, closeTargetCenter, overCloseTarget: sharedValue4, closeTargetHovered, runOnJS: ReanimatedRexport.runOnJS, hapticOverCloseTarget: callback4 };
    fn2.__workletHash = 9718748527055;
    fn2.__initData = __initData3;
    let obj2 = { dragStart: sharedValue1, position: sharedValue, isOverCloseTarget: conjureAppPictureInPictureLayout.isOverCloseTarget, closeTargetCenter, overCloseTarget: sharedValue4, closeTargetHovered, runOnJS: ReanimatedRexport.runOnJS, hapticOverCloseTarget: callback4 };
    const fn3 = function o(arg0) {
      if (sharedValue4.get()) {
        const result = sharedValue5.set(true);
        frameId(size[25]).runOnJS(callback3)();
        const obj3 = frameId(size[25]);
      } else {
        const point = { x: null, y: null };
        ({ velocityX: obj2.x, velocityY: obj2.y } = arg0);
        value = sharedValue.get();
        const result1 = sharedValue.set(frameId(size[24]).getSnappedPosition(value, point, duration(avoidance.get())));
        const obj = frameId(size[24]);
      }
    };
    const onUpdateResult = onStartResult.onUpdate(fn2);
    fn3.__closure = { overCloseTarget: sharedValue4, closing: sharedValue5, runOnJS: ReanimatedRexport.runOnJS, closeAfterShrink: callback3, position: sharedValue, getSnappedPosition: conjureAppPictureInPictureLayout.getSnappedPosition, getBounds: callback, avoidance };
    fn3.__workletHash = 4339367475964;
    fn3.__initData = __initData2;
    let obj3 = { overCloseTarget: sharedValue4, closing: sharedValue5, runOnJS: ReanimatedRexport.runOnJS, closeAfterShrink: callback3, position: sharedValue, getSnappedPosition: conjureAppPictureInPictureLayout.getSnappedPosition, getBounds: callback, avoidance };
    const fn4 = function t() {
      const result = sharedValue3.set(false);
      const result1 = sharedValue4.set(false);
      const result2 = closeTargetShown.set(false);
      const result3 = closeTargetHovered.set(false);
    };
    fn4.__closure = { dragging: sharedValue3, overCloseTarget: sharedValue4, closeTargetShown, closeTargetHovered };
    fn4.__workletHash = 9456167623648;
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
        callback1();
      }
    };
    fn5.__closure = { open: callback1 };
    fn5.__workletHash = 9906742879619;
    fn5.__initData = __initData5;
    const obj4 = { open: callback1 };
    const runOnJSResult1 = Gesture3.Tap().runOnJS(true);
    const Gesture4 = LegacyBaseButton.Gesture;
    return Gesture4.Race(onFinalizeResult, onStartResult1, Gesture3.Tap().runOnJS(true).onEnd(fn5));
  }, items7);
  const tmp2Result15 = frameId(size[25]);
  let fn = function q() {
    value = sharedValue3.get();
    value4 = sharedValue4.get();
    if (!value4) {
      value4 = sharedValue5.get();
    }
    if (value) {
      let value5 = sharedValue.get();
    } else {
      const value6 = sharedValue.get();
      value5 = conjureAppPictureInPictureLayout.clampToBounds(value6, callback(avoidance.get()));
    }
    ({ x, y } = value5);
    let num = 1;
    let num2 = 1;
    if (value) {
      num2 = c14;
    }
    if (value4) {
      const diff = closeTargetCenter.x - size.width / 2;
      const diff1 = closeTargetCenter.y - size.height / 2;
      let num4 = 0;
      if (!sharedValue5.get()) {
        num4 = c15;
      }
      num2 = num4;
      y = diff1;
      x = diff;
    }
    if (value) {
      if (!value4) {
        let tmp17 = closure_16;
      }
      size = { width: null, height: null, opacity: null, transform: null };
      ({ width: obj2.width, height: obj2.height } = size);
      if (sharedValue5.get()) {
        const obj4 = { duration };
        num = timing.withTiming(0, obj4);
      }
      size.opacity = num;
      const obj5 = { translateX: spring.withSpring(x, tmp17) };
      const items = [obj5, , ];
      const obj7 = { translateY: null };
      obj7.translateY = spring.withSpring(y, tmp17);
      items[1] = obj7;
      const obj9 = { scale: null };
      obj9.scale = spring.withSpring(num2, tmp17);
      items[2] = obj9;
      size.transform = items;
      return size;
    }
    tmp17 = closure_17;
  };
  const tmp2Result16 = frameId(size[25]);
  fn.__closure = { dragging: sharedValue3, overCloseTarget: sharedValue4, closing: sharedValue5, position: sharedValue, clampToBounds: frameId(size[24]).clampToBounds, getBounds: callback, avoidance, DRAGGING_SCALE: sharedValue, closeTargetCenter, size, OVER_CLOSE_TARGET_SCALE: sharedValue1, FOLLOW_SPRING: sharedValue2, SETTLE_SPRING: sharedValue3, withTiming: frameId(size[30]).withTiming, CLOSE_ANIMATION_MS: callback, withSpring: frameId(size[31]).withSpring };
  fn.__workletHash = 16777681197747;
  fn.__initData = __initData6;
  const items8 = [stateFromStores, str, tmp7];
  const animatedStyle = tmp2Result16.useAnimatedStyle(fn);
  memo1 = windowWidth.useMemo(() => {
    if (null != stateFromStores) {
      const conjureAppPictureInPictureActions = conjureAppPictureInPictureActions2.getConjureAppPictureInPictureActions(tmp, str, closure_12);
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
    let obj7 = { style: null, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, children: null };
    const items9 = [tmp.window, animatedStyle];
    obj7.style = items9;
    const intl = tmp2(tmp3[32]).intl;
    let obj8 = { appName: str };
    obj7.accessibilityLabel = intl.formatToPlainString(index(tmp3[33]).dPf03z, obj8);
    obj7.accessibilityActions = memo1.map((name) => ({ name: name.name, label: name.label }));
    obj7.onAccessibilityAction = tmp21;
    let obj9 = { style: tmp.mask, pointerEvents: "none", children: null };
    const obj10 = { frameId, level: tmp2(tmp3[35]).FrameStackLevel.AboveAppContent, presentation: sharedValue4 };
    const items10 = [stateFromStores(index(tmp3[34]), obj10), ];
    let tmp23Result = null;
    if (closure_12) {
      const obj11 = { frame: stateFromStores, appName: str };
      tmp23Result = tmp23(callback1, obj11);
    }
    items10[1] = tmp23Result;
    obj9.children = items10;
    const items11 = [str(windowHeight, obj9), ];
    const obj12 = { frame: stateFromStores };
    items11[1] = stateFromStores(callback2, obj12);
    obj7.children = items11;
    obj6.children = str(index(tmp3[25]).View, obj7);
    obj5.children = stateFromStores(tmp2(tmp3[29]).GestureDetector, obj6);
    tmp23Result2 = tmp23(tmp2(tmp3[36]).ThemeContextProvider, obj5);
    const tmp28 = index(tmp3[34]);
  }
  return tmp23Result2;
}));