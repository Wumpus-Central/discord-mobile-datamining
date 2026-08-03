// === Module 16129: MediaPlaybackPanelUI ===

// Module 16129 (MediaPlaybackPanelUI)
import _slicedToArray from "_slicedToArray";
import MorphablePanelModes from "MorphablePanelModes";
import { useContext } from "MorphablePanelModes";
import module_10798 from "module_10798";
import MediaPlaybackPanelModes from "MediaPlaybackPanelModes";
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";
import { BORDER_RADIUS_PHYSICS } from "VoicePanelModes";
import { jsx } from "Directions";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: error, MediaPlaybackPanelModes: metroImportAll } = MediaPlaybackPanelModes);
createCacheKey = { wrapperAnimationPresets: { opacity: 0 }, wrapper: { position: "absolute", top: 0, left: 0, zIndex: 1 }, mask: null, maskElevation: null, maskEmptyElevation: null, content: null };
createCacheKey = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", borderWidth: 1, borderRadius: require("Themes").radii.xl, borderColor: require("Themes").colors.CHAT_BORDER };
createCacheKey[2] = createCacheKey;
let merged = Object.assign(require("Themes").shadows.SHADOW_LOW_HOVER);
createCacheKey[3] = {};
createCacheKey[4] = { xOffset: 0, yOffset: 0, shadowColorIos: "#000000", shadowOpacity: 0, shadowRadius: 0, elevation: 0, shadowColorAndroid: "#000000" };
createCacheKey[5] = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_13 = { code: "function MediaPlaybackPanelUITsx1(){const{mode,windowDimensions,canShowPIP}=this.__closure;return{mode:mode.get(),windowDimensions:windowDimensions,canShowPIP:canShowPIP.get()};}" };
let closure_14 = { code: "function MediaPlaybackPanelUITsx2(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:modeToSet,windowDimensions:windowDimensions,canShowPIP:canShowPIP}=props;switch(modeToSet){case MediaPlaybackPanelModes.PIP:{const{width:width,height:height}=canShowPIP?{width:120,height:120}:{width:0,height:0};updateSharedValueIfChanged(wrapperDimensions,{width:width,height:height});break;}case MediaPlaybackPanelModes.DISMISSED:updateSharedValueIfChanged(wrapperOffset,{y:windowDimensions.height});break;default:modeToSet;}}" };
let closure_15 = { code: "function MediaPlaybackPanelUITsx3(){const{mode,wrapperDimensions,pipAvoidanceSpecs,wrapperOffset,windowDimensions,safeArea,pipState}=this.__closure;return{mode:mode.get(),wrapperDimensions:wrapperDimensions.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),wrapperOffset:wrapperOffset.get(),windowDimensions:windowDimensions,safeArea:safeArea,pipState:pipState.get()};}" };
let closure_16 = { code: "function MediaPlaybackPanelUITsx4(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,getClampedPIPPosition,safeArea,disableHorizontalSafeAreas,wrapperOpacity,animateWrapperTranslation,wrapperTranslationX,wrapperTranslationY}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,wrapperDimensions:wrapperDimensions,pipAvoidanceSpecs:pipAvoidanceSpecs,wrapperOffset:wrapperOffset,windowDimensions:windowDimensions,pipState:pipState}=props;let x=0;let y=0;const{gestureActive:gestureActive}=wrapperOffset;const{x:pipX,y:pipY}=pipState;switch(mode){case MediaPlaybackPanelModes.PIP:{const clampedPosition=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:120,height:120,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.bottom,topAvoidanceRegion:pipAvoidanceSpecs.top,positionOffset:gestureActive?wrapperOffset:undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});x=clampedPosition.x;y=clampedPosition.y;wrapperOpacity.set(1);break;}case MediaPlaybackPanelModes.DISMISSED:{y=wrapperDimensions.height;wrapperOpacity.set(0);break;}}const previousPIPState=previous===null||previous===void 0?void 0:previous.pipState;const pipPositionChanged=pipX!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.x)||pipY!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.y);const shouldAnimateForPIP=mode===MediaPlaybackPanelModes.PIP&&pipPositionChanged&&!wrapperOffset.gestureActive;animateWrapperTranslation.set(shouldAnimateForPIP||mode!==MediaPlaybackPanelModes.PIP);wrapperTranslationX.set(x);wrapperTranslationY.set(y);}" };
let closure_17 = { code: "function MediaPlaybackPanelUITsx5(){const{withTiming,wrapperOpacity,timingFast,animateWrapperTranslation,withSpring,wrapperTranslationX,MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,wrapperTranslationY,wrapperDimensions,wrapperElevationStyles}=this.__closure;const opacity=withTiming(wrapperOpacity.get(),timingFast,'respect-motion-settings');return{transform:[{translateX:animateWrapperTranslation.get()?withSpring(wrapperTranslationX.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,'animate-always'):wrapperTranslationX.get()},{translateY:animateWrapperTranslation.get()?withSpring(wrapperTranslationY.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,animateWrapperTranslation.get()?'respect-motion-settings':'animate-never'):wrapperTranslationY.get()}],opacity:opacity,width:wrapperDimensions.get().width,height:wrapperDimensions.get().height,...wrapperElevationStyles};}" };
let closure_18 = { code: "function MediaPlaybackPanelUITsx6(){const{withSpring,borderRadius,BORDER_RADIUS_PHYSICS,maskElevationStyles}=this.__closure;return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS,'animate-always'),...maskElevationStyles};}" };
let closure_19 = { code: "function MediaPlaybackPanelUITsx7(){const{windowDimensions}=this.__closure;const{height:height,width:width}=windowDimensions;return{position:'absolute',top:0,left:0,width:width,height:height,overflow:'hidden'};}" };
let closure_20 = { code: "function MediaPlaybackPanelUITsx8(){const{styles}=this.__closure;const topBorderRadius=0;const top=0;return{flexDirection:'column',backgroundColor:styles.content.backgroundColor,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius,top:top,overflow:'hidden'};}" };
let obj1 = {};
let obj2 = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
let result = require("module_10798").fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelUI.tsx");

export default function MediaPlaybackPanelUI() {
  let pipState2;
  let tmp30;
  let tmp31;
  let wrapperDimensions;
  let wrapperOffset;
  let wrapperOffset2;
  const tmp = sharedValue3();
  wrapperDimensions = tmp;
  const tmp4 = wrapperOffset(1474)();
  wrapperOffset = tmp4;
  ({ wrapperDimensions, wrapperOffset } = mode(wrapperOffset(16128)));
  let obj = wrapperDimensions(4116);
  const fn = function p() {
    return { position: "absolute", top: 0, left: 0, width: wrapperOffset.width, height: wrapperOffset.height, overflow: "hidden" };
  };
  fn.__closure = { windowDimensions: tmp4 };
  fn.__workletHash = 5768037716653;
  fn.__initData = closure_19;
  let dependencyMap;
  let callback;
  let React;
  mode = undefined;
  let pipState;
  let pipAvoidanceSpecs;
  let canShowPIP;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  sharedValue3 = undefined;
  let c13;
  let maskEmptyElevation;
  let maskElevation;
  let animatedStyle1;
  let xl;
  let animatedStyle2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let tmp8 = sharedValue3();
  dependencyMap = tmp8;
  let tmp9 = wrapperOffset(1581)();
  callback = tmp9;
  let tmp10 = wrapperOffset(1474)();
  React = tmp10;
  let obj1 = React;
  const context = React.useContext(wrapperOffset(16128));
  mode = context.mode;
  pipState = context.pipState;
  pipAvoidanceSpecs = context.pipAvoidanceSpecs;
  canShowPIP = context.canShowPIP;
  let obj2 = wrapperDimensions(4116);
  const fn2 = function u() {
    return { mode: mode.get(), windowDimensions: c4, canShowPIP: canShowPIP.get() };
  };
  fn2.__closure = { mode, windowDimensions: tmp10, canShowPIP };
  fn2.__workletHash = 4412661953046;
  fn2.__initData = c13;
  const fn3 = function p(mode, current) {
    let height;
    let width;
    let tmp2 = _undefined;
    let obj = wrapperDimensions(_undefined[13]);
    if (!obj.cheapWorkletShallowEqual(mode, current)) {
      mode = mode.mode;
      if (canShowPIP.PIP === mode) {
        ({ width, height } = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 });
        tmp2 = wrapperDimensions;
        obj = { width: null, height: null };
        obj[0] = width;
        obj[1] = height;
        wrapperOffset(tmp2[14])(wrapperDimensions, obj);
        const tmp10 = wrapperOffset(tmp2[14]);
        const tmp8 = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 };
      } else if (tmp4.DISMISSED === mode) {
        obj = { y: null };
        obj[0] = tmp3.height;
        wrapperOffset(tmp2[14])(wrapperOffset, obj);
      }
    }
  };
  obj = { cheapWorkletShallowEqual: wrapperDimensions(9605).cheapWorkletShallowEqual, MediaPlaybackPanelModes: canShowPIP, updateSharedValueIfChanged: wrapperOffset(10197), wrapperDimensions, wrapperOffset };
  fn3.__closure = obj;
  fn3.__workletHash = 5458787116551;
  fn3.__initData = maskEmptyElevation;
  const animatedReaction = obj2.useAnimatedReaction(fn2, fn3);
  let obj4 = wrapperDimensions(4116);
  sharedValue = obj4.useSharedValue(0);
  let obj5 = wrapperDimensions(4116);
  sharedValue1 = obj5.useSharedValue(0);
  let obj6 = wrapperDimensions(4116);
  sharedValue2 = obj6.useSharedValue(0);
  let obj7 = wrapperDimensions(4116);
  sharedValue3 = obj7.useSharedValue(false);
  let tmp18 = pipState((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
  c13 = tmp18;
  let obj8 = wrapperDimensions(4116);
  class R {
    constructor() {
      obj = { mode: mode.get(), wrapperDimensions: wrapperDimensions.get(), pipAvoidanceSpecs: pipAvoidanceSpecs.get(), wrapperOffset: wrapperOffset.get(), windowDimensions: c4, safeArea: c3, pipState: pipState.get() };
      return obj;
    }
  }
  R.__closure = { mode, wrapperDimensions, pipAvoidanceSpecs, wrapperOffset, windowDimensions: tmp10, safeArea: tmp9, pipState };
  R.__workletHash = 4950432193502;
  R.__initData = maskElevation;
  class C {
    constructor(arg0, arg1) {
      tmp = wrapperDimensions;
      tmp2 = c2;
      obj = wrapperDimensions(c2[13]);
      tmp3 = arg1;
      if (!obj.cheapWorkletShallowEqual(arg0, tmp3)) {
        ({ mode, pipAvoidanceSpecs, wrapperOffset, pipState } = arg0);
        ({ x, y } = pipState);
        tmp7 = canShowPIP;
        if (canShowPIP.PIP === mode) {
          tmpResult = tmp(tmp2[15]);
          obj = { pipX: null, pipY: null, width: 120, height: 120, windowDimensions: null, safeArea: null, bottomAvoidanceRegion: null, topAvoidanceRegion: null, positionOffset: null, disableHorizontalSafeAreas: null };
          obj[0] = x;
          obj[1] = y;
          obj[4] = tmp5;
          tmp8 = c3;
          obj[5] = c3;
          ({ bottom: obj3[6], top: obj3[7] } = pipAvoidanceSpecs);
          tmp9 = undefined;
          if (tmp6) {
            tmp9 = wrapperOffset;
          }
          obj[8] = tmp9;
          tmp10 = c13;
          obj[9] = c13;
          clampedPIPPosition = tmpResult.getClampedPIPPosition(obj);
          ({ x: x2, y: y2 } = clampedPIPPosition);
          tmp12 = c11;
          num2 = 1;
          result = c11.set(1);
        } else {
          num = 0;
          y2 = 0;
          x2 = 0;
          if (tmp7.DISMISSED === mode) {
            y2 = tmp4.height;
            tmp25 = c11;
            result1 = c11.set(0);
            x2 = 0;
          }
        }
        pipState = undefined;
        if (arg1 != null) {
          pipState = arg1.pipState;
        }
        x = undefined;
        if (pipState != null) {
          x = pipState.x;
        }
        tmp16 = x !== x;
        if (!tmp16) {
          y = undefined;
          if (pipState != null) {
            y = pipState.y;
          }
          tmp16 = y !== y;
        }
        tmp18 = mode === tmp7.PIP && tmp16 && !wrapperOffset.gestureActive;
        tmp19 = c12;
        if (!tmp18) {
          tmp18 = mode !== tmp7.PIP;
        }
        result2 = c12.set(tmp18);
        tmp21 = c9;
        result3 = c9.set(x2);
        tmp23 = c10;
        result4 = c10.set(y2);
      }
      return;
    }
  }
  obj = { cheapWorkletShallowEqual: wrapperDimensions(9605).cheapWorkletShallowEqual, MediaPlaybackPanelModes: canShowPIP, getClampedPIPPosition: wrapperDimensions(15931).getClampedPIPPosition, safeArea: tmp9, disableHorizontalSafeAreas: tmp18, wrapperOpacity: sharedValue2, animateWrapperTranslation: sharedValue3, wrapperTranslationX: sharedValue, wrapperTranslationY: sharedValue1 };
  C.__closure = obj;
  C.__workletHash = 10793489581273;
  C.__initData = animatedStyle1;
  const animatedReaction1 = obj8.useAnimatedReaction(R, C);
  if (mode.get() === canShowPIP.PIP) {
    if (sharedValue) {
      maskEmptyElevation = tmp8.maskElevation;
    }
    if (mode.get() === canShowPIP.PIP) {
      if (!sharedValue) {
        maskElevation = tmp8.maskElevation;
      }
      let tmp6Result = tmp6(4116);
      class L {
        constructor() {
          tmp = wrapperDimensions;
          tmp2 = c2;
          obj = wrapperDimensions(c2[16]);
          value = c11.get();
          obj2 = c12;
          withTimingResult = obj.withTiming(value, wrapperDimensions(c2[17]).timingFast, "respect-motion-settings");
          if (c12.get()) {
            tmpResult = tmp(tmp2[18]);
            tmp7 = c9;
            tmp8 = pipAvoidanceSpecs;
            str = "animate-always";
            withSpringResult = tmpResult.withSpring(c9.get(), pipAvoidanceSpecs, "animate-always");
          } else {
            tmp5 = c9;
            withSpringResult = c9.get();
          }
          items = [, ];
          items[0] = { translateX: withSpringResult };
          if (obj2.get()) {
            tmpResult1 = tmp(tmp2[18]);
            tmp11 = c10;
            value1 = c10.get();
            tmp13 = pipAvoidanceSpecs;
            str2 = "animate-never";
            if (obj2.get()) {
              str2 = "respect-motion-settings";
            }
            withSpringResult1 = tmpResult1.withSpring(value1, tmp13, str2);
          } else {
            tmp9 = c10;
            withSpringResult1 = c10.get();
          }
          obj = { transform: items, opacity: withTimingResult, width: wrapperDimensions.get().width, height: wrapperDimensions.get().height };
          items[1] = { translateY: withSpringResult1 };
          merged = Object.assign(maskElevation);
          return obj;
        }
      }
      obj1 = { withTiming: null, wrapperOpacity: null, timingFast: null, animateWrapperTranslation: null, withSpring: null, wrapperTranslationX: null, MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: null, wrapperTranslationY: null, wrapperDimensions: null, wrapperElevationStyles: null };
      obj1[0] = tmp6(4256).withTiming;
      obj1[1] = sharedValue2;
      obj1[2] = tmp6(4259).timingFast;
      obj1[3] = sharedValue3;
      obj1[4] = tmp6(4665).withSpring;
      obj1[5] = sharedValue;
      obj1[6] = pipAvoidanceSpecs;
      obj1[7] = sharedValue1;
      obj1[8] = wrapperDimensions;
      obj1[9] = maskEmptyElevation;
      L.__closure = obj1;
      L.__workletHash = 11049335639852;
      L.__initData = xl;
      animatedStyle1 = tmp6Result.useAnimatedStyle(L);
      xl = tmp2(712).radii.xl;
      tmp6Result = tmp6(4116);
      class B {
        constructor() {
          obj = { borderRadius: null };
          obj2 = wrapperDimensions(c2[18]);
          obj[0] = obj2.withSpring(xl, c10, "animate-always");
          merged = Object.assign(maskElevation);
          return obj;
        }
      }
      obj2 = { withSpring: null, borderRadius: null, BORDER_RADIUS_PHYSICS: null, maskElevationStyles: null };
      obj2[0] = tmp6(4665).withSpring;
      obj2[1] = xl;
      obj2[2] = sharedValue1;
      obj2[3] = maskElevation;
      B.__closure = obj2;
      B.__workletHash = 7035830192327;
      B.__initData = animatedStyle2;
      animatedStyle2 = tmp6Result.useAnimatedStyle(B);
      let items = [animatedStyle1, , ];
      ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = tmp8);
      const items1 = [
        obj1.useMemo(() => {
              const items = [animatedStyle1, , ];
              ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = c2);
              return items;
            }, items),

      ];
      const items2 = [animatedStyle2, tmp8.mask];
      items1[1] = obj1.useMemo(() => {
        const items = [animatedStyle2, _undefined.mask];
        return items;
      }, items2);
      [tmp30, tmp31] = callback(items1, 2);
      const tmp29 = callback(items1, 2);
      const fn4 = function b() {
        return { flexDirection: "column", backgroundColor: wrapperDimensions.content.backgroundColor, borderTopStartRadius: 0, borderTopEndRadius: 0, top: 0, overflow: "hidden" };
      };
      const obj3 = { styles: null };
      obj3[0] = tmp;
      fn4.__closure = obj3;
      fn4.__workletHash = 8557652955267;
      fn4.__initData = closure_20;
      const animatedStyle3 = tmp6(4116).useAnimatedStyle(fn4);
      const context1 = obj1.useContext(tmp2(16128));
      ({ wrapperOffset: wrapperOffset2, pipState: pipState2 } = context1);
      obj4 = { panGestureEnabled: true, mode: null, pipState: null, wrapperOffset: null };
      const tmp6Result1 = tmp6(4116);
      obj4[1] = tmp6(15933).MorphablePanelModes.PIP;
      obj4[2] = pipState2;
      obj4[3] = wrapperOffset2;
      const tmp2Result = tmp2(15933);
      obj5 = { children: null };
      obj6 = { style: null, pointerEvents: "box-none", children: null };
      obj6[0] = animatedStyle;
      obj7 = { style: null, children: null };
      obj7[0] = tmp30;
      const View = tmp2(4116).View;
      obj8 = { style: null, children: null };
      obj8[0] = tmp31;
      const obj9 = { gesture: null, children: null };
      obj9[0] = tmp2(15933)(obj4);
      const obj10 = { style: null, children: null };
      const items3 = [tmp.content, animatedStyle3];
      obj10[0] = items3;
      obj10[1] = sharedValue2(tmp2(16130), {});
      obj9[1] = sharedValue2(tmp2(4116).View, obj10);
      obj8[1] = sharedValue2(tmp6(5339).GestureDetector, obj9);
      obj7[1] = sharedValue2(tmp2(4116).View, obj8);
      class R {
        constructor() {
          obj = { mode: mode.get(), wrapperDimensions: wrapperDimensions.get(), pipAvoidanceSpecs: pipAvoidanceSpecs.get(), wrapperOffset: wrapperOffset.get(), windowDimensions: c4, safeArea: c3, pipState: pipState.get() };
          return obj;
        }
      }
      obj5[0] = sharedValue2(tmp2(4116).View, obj6);
      return sharedValue2(tmp6(5568).LayerScope, obj5);
    }
  }
  maskEmptyElevation = tmp8.maskEmptyElevation;
};