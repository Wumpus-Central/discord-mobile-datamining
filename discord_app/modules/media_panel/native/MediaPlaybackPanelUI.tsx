// discord_app/modules/media_panel/native/MediaPlaybackPanelUI.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../_runtime/06140_LegacyBaseButton.js";
import LayerScope from "../../../design/components/Layers/native/LayerScope.native.tsx";
import cheapWorkletShallowEqual from "../../reanimated/native/cheapWorkletShallowEqual.tsx";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import MorphablePanelUtils from "../../panels/morphable/native/MorphablePanelUtils.tsx";
import useMorphablePanelGesture from "../../panels/morphable/native/useMorphablePanelGesture.tsx";
import MediaPlaybackPanelStateContextDefault from "MediaPlaybackPanelStateContext.tsx";
import MediaPlaybackPipDefault from "MediaPlaybackPip.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SafeAreaDisabledStore from "../../panels/morphable/native/SafeAreaDisabledStore.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;
const useMorphablePanelGestureDefault = useMorphablePanelGesture;

require = fn;
const useContext = fn(19).useContext;
const MediaPlaybackPanelConstants = fn(14375);
({ MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: closure_7, MediaPlaybackPanelModes: closure_8 } = MediaPlaybackPanelConstants);
const IS_IOS = fn(11903).IS_IOS;
const BORDER_RADIUS_PHYSICS = fn(11902).BORDER_RADIUS_PHYSICS;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = {
  wrapperAnimationPresets: { opacity: 0 },
  wrapper: { position: "absolute", top: 0, left: 0, zIndex: 1 },
  mask: null,
  maskElevation: null,
  maskEmptyElevation: null,
  content: null,
};
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: "hidden",
  borderWidth: 1,
  borderRadius: nativeDefault.radii.xl,
  borderColor: nativeDefault.colors.CHAT_BORDER,
};
obj2.mask = rect;
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW_HOVER);
obj2.maskElevation = {};
obj2.maskEmptyElevation = {
  xOffset: 0,
  yOffset: 0,
  shadowColorIos: "#000000",
  shadowOpacity: 0,
  shadowRadius: 0,
  elevation: 0,
  shadowColorAndroid: "#000000",
};
obj2.content = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let disableHorizontalSafeAreas = createStyles.createStyles(obj2);
let disableHorizontalSafeAreas2 = {
  code: "function MediaPlaybackPanelUITsx1(){const{mode,windowDimensions,canShowPIP}=this.__closure;return{mode:mode.get(),windowDimensions:windowDimensions,canShowPIP:canShowPIP.get()};}",
};
let closure_14 = {
  code: "function MediaPlaybackPanelUITsx2(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const{mode:modeToSet,windowDimensions:windowDimensions_0,canShowPIP:canShowPIP_0}=props;bb11:switch(modeToSet){case MediaPlaybackPanelModes.PIP:{const{width:width,height:height}=canShowPIP_0?{width:120,height:120}:{width:0,height:0};updateSharedValueIfChanged(wrapperDimensions,{width:width,height:height});break bb11;}case MediaPlaybackPanelModes.DISMISSED:{updateSharedValueIfChanged(wrapperOffset,{y:windowDimensions_0.height});break bb11;}default:}}",
};
let closure_15 = {
  code: "function MediaPlaybackPanelUITsx3(){const{mode,wrapperDimensions,pipAvoidanceSpecs,wrapperOffset,windowDimensions,safeArea,pipState}=this.__closure;return{mode:mode.get(),wrapperDimensions:wrapperDimensions.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),wrapperOffset:wrapperOffset.get(),windowDimensions:windowDimensions,safeArea:safeArea,pipState:pipState.get()};}",
};
const __initData = {
  code: "function MediaPlaybackPanelUITsx4(props_0,previous_0){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,getClampedPIPPosition,safeArea,disableHorizontalSafeAreas,wrapperOpacity,animateWrapperTranslation,wrapperTranslationX,wrapperTranslationY}=this.__closure;if(cheapWorkletShallowEqual(props_0,previous_0!==null&&previous_0!==void 0?previous_0:undefined)){return;}const{mode:mode_0,wrapperDimensions:wrapperDimensions_0,pipAvoidanceSpecs:pipAvoidanceSpecs_0,wrapperOffset:wrapperOffset_0,windowDimensions:windowDimensions_1,pipState:pipState_0}=props_0;let x=0;let y=0;const{gestureActive:gestureActive}=wrapperOffset_0;const{x:pipX,y:pipY}=pipState_0;bb33:switch(mode_0){case MediaPlaybackPanelModes.PIP:{const clampedPosition=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:120,height:120,windowDimensions:windowDimensions_1,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs_0.bottom,topAvoidanceRegion:pipAvoidanceSpecs_0.top,positionOffset:gestureActive?wrapperOffset_0:undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});x=clampedPosition.x;y=clampedPosition.y;wrapperOpacity.set(1);break bb33;}case MediaPlaybackPanelModes.DISMISSED:{y=wrapperDimensions_0.height;wrapperOpacity.set(0);}}const previousPIPState=previous_0===null||previous_0===void 0?void 0:previous_0.pipState;const pipPositionChanged=pipX!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.x)||pipY!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.y);const shouldAnimateForPIP=mode_0===MediaPlaybackPanelModes.PIP&&pipPositionChanged&&!wrapperOffset_0.gestureActive;animateWrapperTranslation.set(shouldAnimateForPIP||mode_0!==MediaPlaybackPanelModes.PIP);wrapperTranslationX.set(x);wrapperTranslationY.set(y);}",
};
const __initData2 = {
  code: 'function MediaPlaybackPanelUITsx5(){const{withTiming,wrapperOpacity,timingFast,animateWrapperTranslation,withSpring,wrapperTranslationX,MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,wrapperTranslationY,wrapperDimensions,wrapperElevationStyles}=this.__closure;const opacity=withTiming(wrapperOpacity.get(),timingFast,"respect-motion-settings");return{transform:[{translateX:animateWrapperTranslation.get()?withSpring(wrapperTranslationX.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,"animate-always"):wrapperTranslationX.get()},{translateY:animateWrapperTranslation.get()?withSpring(wrapperTranslationY.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,animateWrapperTranslation.get()?"respect-motion-settings":"animate-never"):wrapperTranslationY.get()}],opacity:opacity,width:wrapperDimensions.get().width,height:wrapperDimensions.get().height,...wrapperElevationStyles};}',
};
const __initData3 = {
  code: 'function MediaPlaybackPanelUITsx6(){const{withSpring,borderRadius,BORDER_RADIUS_PHYSICS,maskElevationStyles}=this.__closure;return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS,"animate-always"),...maskElevationStyles};}',
};
const __initData4 = {
  code: "function MediaPlaybackPanelUITsx7(){const{mode,windowDimensions,canShowPIP}=this.__closure;return{mode:mode.get(),windowDimensions:windowDimensions,canShowPIP:canShowPIP.get()};}",
};
const __initData5 = {
  code: "function MediaPlaybackPanelUITsx8(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:modeToSet,windowDimensions:windowDimensions_0,canShowPIP:canShowPIP_0}=props;switch(modeToSet){case MediaPlaybackPanelModes.PIP:{const{width:width,height:height}=canShowPIP_0?{width:120,height:120}:{width:0,height:0};updateSharedValueIfChanged(wrapperDimensions,{width:width,height:height});break;}case MediaPlaybackPanelModes.DISMISSED:updateSharedValueIfChanged(wrapperOffset,{y:windowDimensions_0.height});break;default:modeToSet;}}",
};
const __initData6 = {
  code: "function MediaPlaybackPanelUITsx9(){const{mode,wrapperDimensions,pipAvoidanceSpecs,wrapperOffset,windowDimensions,safeArea,pipState}=this.__closure;return{mode:mode.get(),wrapperDimensions:wrapperDimensions.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),wrapperOffset:wrapperOffset.get(),windowDimensions:windowDimensions,safeArea:safeArea,pipState:pipState.get()};}",
};
const __initData7 = {
  code: "function MediaPlaybackPanelUITsx10(props_0,previous_0){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,getClampedPIPPosition,safeArea,disableHorizontalSafeAreas,wrapperOpacity,animateWrapperTranslation,wrapperTranslationX,wrapperTranslationY}=this.__closure;if(cheapWorkletShallowEqual(props_0,previous_0!==null&&previous_0!==void 0?previous_0:undefined))return;const{mode:mode_0,wrapperDimensions:wrapperDimensions_0,pipAvoidanceSpecs:pipAvoidanceSpecs_0,wrapperOffset:wrapperOffset_0,windowDimensions:windowDimensions_1,pipState:pipState_0}=props_0;let x=0;let y=0;const{gestureActive:gestureActive}=wrapperOffset_0;const{x:pipX,y:pipY}=pipState_0;switch(mode_0){case MediaPlaybackPanelModes.PIP:{const clampedPosition=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:120,height:120,windowDimensions:windowDimensions_1,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs_0.bottom,topAvoidanceRegion:pipAvoidanceSpecs_0.top,positionOffset:gestureActive?wrapperOffset_0:undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});x=clampedPosition.x;y=clampedPosition.y;wrapperOpacity.set(1);break;}case MediaPlaybackPanelModes.DISMISSED:{y=wrapperDimensions_0.height;wrapperOpacity.set(0);break;}}const previousPIPState=previous_0===null||previous_0===void 0?void 0:previous_0.pipState;const pipPositionChanged=pipX!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.x)||pipY!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.y);const shouldAnimateForPIP=mode_0===MediaPlaybackPanelModes.PIP&&pipPositionChanged&&!wrapperOffset_0.gestureActive;animateWrapperTranslation.set(shouldAnimateForPIP||mode_0!==MediaPlaybackPanelModes.PIP);wrapperTranslationX.set(x);wrapperTranslationY.set(y);}",
};
const __initData8 = {
  code: "function MediaPlaybackPanelUITsx11(){const{withTiming,wrapperOpacity,timingFast,animateWrapperTranslation,withSpring,wrapperTranslationX,MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,wrapperTranslationY,wrapperDimensions,wrapperElevationStyles}=this.__closure;const opacity=withTiming(wrapperOpacity.get(),timingFast,'respect-motion-settings');return{transform:[{translateX:animateWrapperTranslation.get()?withSpring(wrapperTranslationX.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,'animate-always'):wrapperTranslationX.get()},{translateY:animateWrapperTranslation.get()?withSpring(wrapperTranslationY.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,animateWrapperTranslation.get()?'respect-motion-settings':'animate-never'):wrapperTranslationY.get()}],opacity:opacity,width:wrapperDimensions.get().width,height:wrapperDimensions.get().height,...wrapperElevationStyles};}",
};
const __initData9 = {
  code: "function MediaPlaybackPanelUITsx12(){const{withSpring,borderRadius,BORDER_RADIUS_PHYSICS,maskElevationStyles}=this.__closure;return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS,'animate-always'),...maskElevationStyles};}",
};
let ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (wrapperDimensions, wrapperOffset) => {
      _require = wrapperDimensions;
      importDefault = wrapperOffset;
      const cResult = require("c").c(10);
      const tmp4 = disableHorizontalSafeAreas();
      const tmp6 = useSafeAreaInsetsDefault();
      dependencyMap = tmp6;
      const tmp7 = useWindowDimensionsDefault();
      windowDimensions = tmp7;
      const context = mode.useContext(MediaPlaybackPanelStateContextDefault);
      mode = context.mode;
      const pipState = context.pipState;
      const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
      const canShowPIP = context.canShowPIP;
      let obj = require("c");
      const fn = function u() {
        return { mode: mode.get(), windowDimensions, canShowPIP: canShowPIP.get() };
      };
      fn.__closure = { mode, windowDimensions: tmp7, canShowPIP };
      fn.__workletHash = 4412661953046;
      fn.__initData = maskEmptyElevation;
      const fn2 = function p(mode, safeAreaState2) {
        if (!obj.cheapWorkletShallowEqual(mode, tmp)) {
          mode = mode.mode;
          if (closure_2_8.PIP === mode) {
            ({ width, height } = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 });
            const size = { width, height };
            updateSharedValueIfChangedDefault(closure_0, size);
            const tmp8 = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 };
          } else if (tmp4.DISMISSED === mode) {
            const obj2 = { y: tmp3.height };
            updateSharedValueIfChangedDefault(closure_1, obj2);
          }
        }
        obj = cheapWorkletShallowEqual;
        tmp = safeAreaState2;
      };
      let obj2 = require("ReanimatedRexport");
      fn2.__closure = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        MediaPlaybackPanelModes: sharedValue,
        updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
        wrapperDimensions,
        wrapperOffset,
      };
      fn2.__workletHash = 13032601462076;
      fn2.__initData = maskElevation;
      const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
      const obj3 = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        MediaPlaybackPanelModes: sharedValue,
        updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
        wrapperDimensions,
        wrapperOffset,
      };
      let tmp9 = sharedValue;
      sharedValue = require("ReanimatedRexport").useSharedValue(0);
      const obj4 = require("ReanimatedRexport");
      const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
      const obj5 = require("ReanimatedRexport");
      const sharedValue2 = require("ReanimatedRexport").useSharedValue(0);
      const obj6 = require("ReanimatedRexport");
      const sharedValue3 = require("ReanimatedRexport").useSharedValue(false);
      const tmp15 = pipAvoidanceSpecs((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
      disableHorizontalSafeAreas = tmp15;
      const obj7 = require("ReanimatedRexport");
      const fn3 = function x() {
        return {
          mode: mode.get(),
          wrapperDimensions: wrapperDimensions.get(),
          pipAvoidanceSpecs: pipAvoidanceSpecs.get(),
          wrapperOffset: wrapperOffset.get(),
          windowDimensions,
          safeArea,
          pipState: pipState.get(),
        };
      };
      fn3.__closure = {
        mode,
        wrapperDimensions,
        pipAvoidanceSpecs,
        wrapperOffset,
        windowDimensions: tmp7,
        safeArea: tmp6,
        pipState,
      };
      fn3.__workletHash = 4950432193502;
      fn3.__initData = xl;
      class R {
        constructor(arg0, arg1) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[15]);
          tmp3 = wrapperOffset;
          if (!obj.cheapWorkletShallowEqual(wrapperDimensions, tmp3)) {
            ({ mode, pipAvoidanceSpecs, wrapperOffset, pipState } = wrapperDimensions);
            ({ x, y } = pipState);
            tmp7 = MediaPlaybackPanelModes;
            if (MediaPlaybackPanelModes.PIP === mode) {
              tmpResult = tmp(tmp2[17]);
              size = {
                pipX: null,
                pipY: null,
                width: 120,
                height: 120,
                windowDimensions: null,
                safeArea: null,
                bottomAvoidanceRegion: null,
                topAvoidanceRegion: null,
                positionOffset: null,
                disableHorizontalSafeAreas: null,
              };
              size.pipX = x;
              size.pipY = y;
              size.windowDimensions = tmp5;
              tmp8 = closure_2;
              size.safeArea = closure_2;
              ({ bottom: obj3.bottomAvoidanceRegion, top: obj3.topAvoidanceRegion } = pipAvoidanceSpecs);
              tmp9 = undefined;
              if (tmp6) {
                tmp9 = wrapperOffset;
              }
              size.positionOffset = tmp9;
              tmp10 = closure_12;
              size.disableHorizontalSafeAreas = closure_12;
              clampedPIPPosition = tmpResult.getClampedPIPPosition(size);
              ({ x: x2, y: y2 } = clampedPIPPosition);
              tmp12 = closure_10;
              num2 = 1;
              result = closure_10.set(1);
            } else {
              num = 0;
              y2 = 0;
              x2 = 0;
              if (tmp7.DISMISSED === mode) {
                y2 = tmp4.height;
                tmp25 = closure_10;
                result1 = closure_10.set(0);
                x2 = 0;
              }
            }
            pipState1 = undefined;
            if (wrapperOffset != null) {
              pipState1 = wrapperOffset.pipState;
            }
            x1 = undefined;
            if (pipState1 != null) {
              x1 = pipState1.x;
            }
            tmp16 = x !== x1;
            if (!tmp16) {
              y1 = undefined;
              if (pipState1 != null) {
                y1 = pipState1.y;
              }
              tmp16 = y !== y1;
            }
            tmp18 = mode === tmp7.PIP && tmp16 && !wrapperOffset.gestureActive;
            tmp19 = closure_11;
            if (!tmp18) {
              tmp18 = mode !== tmp7.PIP;
            }
            result2 = closure_11.set(tmp18);
            tmp21 = closure_8;
            result3 = closure_8.set(x2);
            tmp23 = closure_9;
            result4 = closure_9.set(y2);
          }
          return;
        }
      }
      const obj8 = require("ReanimatedRexport");
      R.__closure = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        MediaPlaybackPanelModes: sharedValue,
        getClampedPIPPosition: require("MorphablePanelUtils").getClampedPIPPosition,
        safeArea: tmp6,
        disableHorizontalSafeAreas: tmp15,
        wrapperOpacity: sharedValue2,
        animateWrapperTranslation: sharedValue3,
        wrapperTranslationX: sharedValue,
        wrapperTranslationY: sharedValue1,
      };
      R.__workletHash = 12830481109326;
      R.__initData = __initData;
      const animatedReaction1 = obj8.useAnimatedReaction(fn3, R);
      if (mode.get() === sharedValue.PIP) {
        if (sharedValue1) {
          maskEmptyElevation = tmp4.maskElevation;
        }
        if (mode.get() === tmp9.PIP) {
          if (!sharedValue1) {
            maskElevation = tmp4.maskElevation;
          }
          class X {
            constructor() {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[18]);
              value = closure_10.get();
              obj2 = closure_11;
              withTimingResult = obj.withTiming(value, closure_0(closure_2[19]).timingFast, "respect-motion-settings");
              if (closure_11.get()) {
                tmpResult = tmp(tmp2[20]);
                tmp7 = closure_8;
                tmp8 = closure_7;
                str = "animate-always";
                withSpringResult = tmpResult.withSpring(closure_8.get(), closure_7, "animate-always");
              } else {
                tmp5 = closure_8;
                withSpringResult = closure_8.get();
              }
              items = [,];
              items[0] = { translateX: withSpringResult };
              if (obj2.get()) {
                tmpResult1 = tmp(tmp2[20]);
                tmp11 = closure_9;
                value1 = closure_9.get();
                tmp13 = closure_7;
                str2 = "animate-never";
                if (obj2.get()) {
                  str2 = "respect-motion-settings";
                }
                withSpringResult1 = tmpResult1.withSpring(value1, tmp13, str2);
              } else {
                tmp9 = closure_9;
                withSpringResult1 = closure_9.get();
              }
              size = {
                transform: items,
                opacity: withTimingResult,
                width: closure_0.get().width,
                height: closure_0.get().height,
              };
              items[1] = { translateY: withSpringResult1 };
              merged = Object.assign(maskElevation);
              return size;
            }
          }
          const obj10 = {
            withTiming: tmp(4891).withTiming,
            wrapperOpacity: sharedValue2,
            timingFast: tmp(4894).timingFast,
            animateWrapperTranslation: sharedValue3,
            withSpring: tmp(5597).withSpring,
            wrapperTranslationX: sharedValue,
            MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: canShowPIP,
            wrapperTranslationY: sharedValue1,
            wrapperDimensions,
            wrapperElevationStyles: maskEmptyElevation,
          };
          X.__closure = obj10;
          X.__workletHash = 12784426477772;
          X.__initData = __initData2;
          const animatedStyle = tmp(4612).useAnimatedStyle(X);
          xl = nativeDefault.radii.xl;
          let tmpResult = tmp(4612);
          class V {
            constructor() {
              obj = { borderRadius: null };
              obj2 = closure_0(closure_2[20]);
              obj.borderRadius = obj2.withSpring(xl, BORDER_RADIUS_PHYSICS, "animate-always");
              merged = Object.assign(maskElevation);
              return obj;
            }
          }
          const obj11 = {
            withSpring: tmp(5597).withSpring,
            borderRadius: xl,
            BORDER_RADIUS_PHYSICS: sharedValue2,
            maskElevationStyles: maskElevation,
          };
          V.__closure = obj11;
          V.__workletHash = 16028964429799;
          V.__initData = __initData3;
          const animatedStyle1 = tmp(4612).useAnimatedStyle(V);
          if (cResult[0] === tmp4.wrapper) {
            if (cResult[1] === tmp4.wrapperAnimationPresets) {
              if (cResult[2] === animatedStyle) {
                let tmp25 = cResult[3];
              }
              if (cResult[4] === animatedStyle1) {
                if (cResult[5] === tmp4.mask) {
                  let tmp26 = cResult[6];
                }
                if (cResult[7] === tmp25) {
                  if (cResult[8] === tmp26) {
                    let tmp27 = cResult[9];
                  }
                  return tmp27;
                }
                let items = [tmp25];
                class X {
                  constructor() {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[18]);
                    value = closure_10.get();
                    obj2 = closure_11;
                    withTimingResult = obj.withTiming(
                      value,
                      closure_0(closure_2[19]).timingFast,
                      "respect-motion-settings",
                    );
                    if (closure_11.get()) {
                      tmpResult = tmp(tmp2[20]);
                      tmp7 = closure_8;
                      tmp8 = closure_7;
                      str = "animate-always";
                      withSpringResult = tmpResult.withSpring(closure_8.get(), closure_7, "animate-always");
                    } else {
                      tmp5 = closure_8;
                      withSpringResult = closure_8.get();
                    }
                    items = [,];
                    items[0] = { translateX: withSpringResult };
                    if (obj2.get()) {
                      tmpResult1 = tmp(tmp2[20]);
                      tmp11 = closure_9;
                      value1 = closure_9.get();
                      tmp13 = closure_7;
                      str2 = "animate-never";
                      if (obj2.get()) {
                        str2 = "respect-motion-settings";
                      }
                      withSpringResult1 = tmpResult1.withSpring(value1, tmp13, str2);
                    } else {
                      tmp9 = closure_9;
                      withSpringResult1 = closure_9.get();
                    }
                    size = {
                      transform: items,
                      opacity: withTimingResult,
                      width: closure_0.get().width,
                      height: closure_0.get().height,
                    };
                    items[1] = { translateY: withSpringResult1 };
                    merged = Object.assign(maskElevation);
                    return size;
                  }
                }
                cResult[7] = tmp25;
                cResult[8] = tmp26;
                cResult[9] = items;
                tmp27 = items;
              }
              const items1 = [animatedStyle1];
              class X {
                constructor() {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[18]);
                  value = closure_10.get();
                  obj2 = closure_11;
                  withTimingResult = obj.withTiming(
                    value,
                    closure_0(closure_2[19]).timingFast,
                    "respect-motion-settings",
                  );
                  if (closure_11.get()) {
                    tmpResult = tmp(tmp2[20]);
                    tmp7 = closure_8;
                    tmp8 = closure_7;
                    str = "animate-always";
                    withSpringResult = tmpResult.withSpring(closure_8.get(), closure_7, "animate-always");
                  } else {
                    tmp5 = closure_8;
                    withSpringResult = closure_8.get();
                  }
                  items = [,];
                  items[0] = { translateX: withSpringResult };
                  if (obj2.get()) {
                    tmpResult1 = tmp(tmp2[20]);
                    tmp11 = closure_9;
                    value1 = closure_9.get();
                    tmp13 = closure_7;
                    str2 = "animate-never";
                    if (obj2.get()) {
                      str2 = "respect-motion-settings";
                    }
                    withSpringResult1 = tmpResult1.withSpring(value1, tmp13, str2);
                  } else {
                    tmp9 = closure_9;
                    withSpringResult1 = closure_9.get();
                  }
                  size = {
                    transform: items,
                    opacity: withTimingResult,
                    width: closure_0.get().width,
                    height: closure_0.get().height,
                  };
                  items[1] = { translateY: withSpringResult1 };
                  merged = Object.assign(maskElevation);
                  return size;
                }
              }
              cResult[4] = animatedStyle1;
              cResult[5] = tmp4.mask;
              cResult[6] = items1;
              tmp26 = items1;
            }
          }
          const items2 = [animatedStyle, ,];
          ({ wrapper: arr[1], wrapperAnimationPresets: arr[2], wrapper: tmp3[0] } = tmp4);
          cResult[1] = tmp4.wrapperAnimationPresets;
          cResult[2] = animatedStyle;
          cResult[3] = items2;
          tmp25 = items2;
          let tmpResult2 = tmp(4612);
        }
      }
      maskEmptyElevation = tmp4.maskEmptyElevation;
      const obj9 = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        MediaPlaybackPanelModes: sharedValue,
        getClampedPIPPosition: require("MorphablePanelUtils").getClampedPIPPosition,
        safeArea: tmp6,
        disableHorizontalSafeAreas: tmp15,
        wrapperOpacity: sharedValue2,
        animateWrapperTranslation: sharedValue3,
        wrapperTranslationX: sharedValue,
        wrapperTranslationY: sharedValue1,
      };
    }
  : (wrapperDimensions, wrapperOffset) => {
      _require = wrapperDimensions;
      importDefault = wrapperOffset;
      let tmp = sharedValue3();
      dependencyMap = tmp;
      const tmp4 = useSafeAreaInsetsDefault();
      safeArea = tmp4;
      const tmp5 = useWindowDimensionsDefault();
      windowDimensions = tmp5;
      const context = windowDimensions.useContext(MediaPlaybackPanelStateContextDefault);
      let mode = context.mode;
      const pipState = context.pipState;
      const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
      const canShowPIP = context.canShowPIP;
      const fn = function u() {
        return { mode: mode.get(), windowDimensions, canShowPIP: canShowPIP.get() };
      };
      fn.__closure = { mode, windowDimensions: tmp5, canShowPIP };
      fn.__workletHash = 15023914226064;
      fn.__initData = __initData4;
      const fn2 = function p(mode, safeAreaState2) {
        if (!obj.cheapWorkletShallowEqual(mode, tmp)) {
          mode = mode.mode;
          if (closure_2_8.PIP === mode) {
            ({ width, height } = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 });
            const size = { width, height };
            updateSharedValueIfChangedDefault(closure_0, size);
            const tmp8 = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 };
          } else if (tmp4.DISMISSED === mode) {
            const obj2 = { y: tmp3.height };
            updateSharedValueIfChangedDefault(closure_1, obj2);
          }
        }
        obj = cheapWorkletShallowEqual;
        tmp = safeAreaState2;
      };
      let obj2 = require("ReanimatedRexport");
      fn2.__closure = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        MediaPlaybackPanelModes: canShowPIP,
        updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
        wrapperDimensions,
        wrapperOffset,
      };
      fn2.__workletHash = 2945704330221;
      fn2.__initData = __initData5;
      const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
      const obj3 = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        MediaPlaybackPanelModes: canShowPIP,
        updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
        wrapperDimensions,
        wrapperOffset,
      };
      let tmp8 = canShowPIP;
      const sharedValue = require("ReanimatedRexport").useSharedValue(0);
      const obj4 = require("ReanimatedRexport");
      const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
      const obj5 = require("ReanimatedRexport");
      const sharedValue2 = require("ReanimatedRexport").useSharedValue(0);
      const obj6 = require("ReanimatedRexport");
      sharedValue3 = require("ReanimatedRexport").useSharedValue(false);
      const tmp14 = pipState((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
      disableHorizontalSafeAreas2 = tmp14;
      const obj7 = require("ReanimatedRexport");
      class R {
        constructor() {
          obj = {
            mode: mode.get(),
            wrapperDimensions: closure_0.get(),
            pipAvoidanceSpecs: pipAvoidanceSpecs.get(),
            wrapperOffset: closure_1.get(),
            windowDimensions: closure_4,
            safeArea: closure_3,
            pipState: pipState.get(),
          };
          return obj;
        }
      }
      R.__closure = {
        mode,
        wrapperDimensions,
        pipAvoidanceSpecs,
        wrapperOffset,
        windowDimensions: tmp5,
        safeArea: tmp4,
        pipState,
      };
      R.__workletHash = 2086901333844;
      R.__initData = __initData6;
      class C {
        constructor(arg0, arg1) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[15]);
          tmp3 = wrapperOffset;
          if (!obj.cheapWorkletShallowEqual(wrapperDimensions, tmp3)) {
            ({ mode, pipAvoidanceSpecs, wrapperOffset, pipState } = wrapperDimensions);
            ({ x, y } = pipState);
            tmp7 = MediaPlaybackPanelModes;
            if (MediaPlaybackPanelModes.PIP === mode) {
              tmpResult = tmp(tmp2[17]);
              size = {
                pipX: null,
                pipY: null,
                width: 120,
                height: 120,
                windowDimensions: null,
                safeArea: null,
                bottomAvoidanceRegion: null,
                topAvoidanceRegion: null,
                positionOffset: null,
                disableHorizontalSafeAreas: null,
              };
              size.pipX = x;
              size.pipY = y;
              size.windowDimensions = tmp5;
              tmp8 = closure_3;
              size.safeArea = closure_3;
              ({ bottom: obj3.bottomAvoidanceRegion, top: obj3.topAvoidanceRegion } = pipAvoidanceSpecs);
              tmp9 = undefined;
              if (tmp6) {
                tmp9 = wrapperOffset;
              }
              size.positionOffset = tmp9;
              tmp10 = closure_13;
              size.disableHorizontalSafeAreas = closure_13;
              clampedPIPPosition = tmpResult.getClampedPIPPosition(size);
              ({ x: x2, y: y2 } = clampedPIPPosition);
              tmp12 = closure_11;
              num2 = 1;
              result = closure_11.set(1);
            } else {
              num = 0;
              y2 = 0;
              x2 = 0;
              if (tmp7.DISMISSED === mode) {
                y2 = tmp4.height;
                tmp25 = closure_11;
                result1 = closure_11.set(0);
                x2 = 0;
              }
            }
            pipState1 = undefined;
            if (wrapperOffset != null) {
              pipState1 = wrapperOffset.pipState;
            }
            x1 = undefined;
            if (pipState1 != null) {
              x1 = pipState1.x;
            }
            tmp16 = x !== x1;
            if (!tmp16) {
              y1 = undefined;
              if (pipState1 != null) {
                y1 = pipState1.y;
              }
              tmp16 = y !== y1;
            }
            tmp18 = mode === tmp7.PIP && tmp16 && !wrapperOffset.gestureActive;
            tmp19 = closure_12;
            if (!tmp18) {
              tmp18 = mode !== tmp7.PIP;
            }
            result2 = closure_12.set(tmp18);
            tmp21 = closure_9;
            result3 = closure_9.set(x2);
            tmp23 = closure_10;
            result4 = closure_10.set(y2);
          }
          return;
        }
      }
      const obj8 = require("ReanimatedRexport");
      C.__closure = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        MediaPlaybackPanelModes: canShowPIP,
        getClampedPIPPosition: require("MorphablePanelUtils").getClampedPIPPosition,
        safeArea: tmp4,
        disableHorizontalSafeAreas: tmp14,
        wrapperOpacity: sharedValue2,
        animateWrapperTranslation: sharedValue3,
        wrapperTranslationX: sharedValue,
        wrapperTranslationY: sharedValue1,
      };
      C.__workletHash = 13484275575555;
      C.__initData = __initData7;
      const animatedReaction1 = obj8.useAnimatedReaction(R, C);
      if (mode.get() === canShowPIP.PIP) {
        if (sharedValue) {
          let maskEmptyElevation = tmp.maskElevation;
        }
        if (mode.get() === tmp8.PIP) {
          if (!sharedValue) {
            const maskElevation = tmp.maskElevation;
          }
          class L {
            constructor() {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[18]);
              value = closure_11.get();
              obj2 = closure_12;
              withTimingResult = obj.withTiming(value, closure_0(closure_2[19]).timingFast, "respect-motion-settings");
              if (closure_12.get()) {
                tmpResult = tmp(tmp2[20]);
                tmp7 = closure_9;
                tmp8 = closure_7;
                str = "animate-always";
                withSpringResult = tmpResult.withSpring(closure_9.get(), closure_7, "animate-always");
              } else {
                tmp5 = closure_9;
                withSpringResult = closure_9.get();
              }
              items = [,];
              items[0] = { translateX: withSpringResult };
              if (obj2.get()) {
                tmpResult1 = tmp(tmp2[20]);
                tmp11 = closure_10;
                value1 = closure_10.get();
                tmp13 = closure_7;
                str2 = "animate-never";
                if (obj2.get()) {
                  str2 = "respect-motion-settings";
                }
                withSpringResult1 = tmpResult1.withSpring(value1, tmp13, str2);
              } else {
                tmp9 = closure_10;
                withSpringResult1 = closure_10.get();
              }
              size = {
                transform: items,
                opacity: withTimingResult,
                width: closure_0.get().width,
                height: closure_0.get().height,
              };
              items[1] = { translateY: withSpringResult1 };
              merged = Object.assign(maskElevation);
              return size;
            }
          }
          const obj10 = {
            withTiming: tmp7(4891).withTiming,
            wrapperOpacity: sharedValue2,
            timingFast: tmp7(4894).timingFast,
            animateWrapperTranslation: sharedValue3,
            withSpring: tmp7(5597).withSpring,
            wrapperTranslationX: sharedValue,
            MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: pipAvoidanceSpecs,
            wrapperTranslationY: sharedValue1,
            wrapperDimensions,
            wrapperElevationStyles: maskEmptyElevation,
          };
          L.__closure = obj10;
          L.__workletHash = 15678797521625;
          L.__initData = __initData8;
          const animatedStyle = tmp7(4612).useAnimatedStyle(L);
          const xl = nativeDefault.radii.xl;
          const tmp7Result = tmp7(4612);
          class X {
            constructor() {
              obj = { borderRadius: null };
              obj2 = closure_0(closure_2[20]);
              obj.borderRadius = obj2.withSpring(xl, BORDER_RADIUS_PHYSICS, "animate-always");
              merged = Object.assign(maskElevation);
              return obj;
            }
          }
          const obj11 = {
            withSpring: tmp7(5597).withSpring,
            borderRadius: xl,
            BORDER_RADIUS_PHYSICS: sharedValue1,
            maskElevationStyles: maskElevation,
          };
          X.__closure = obj11;
          X.__workletHash = 17303815726802;
          X.__initData = __initData9;
          const animatedStyle1 = tmp7(4612).useAnimatedStyle(X);
          let items = [animatedStyle, ,];
          ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = tmp);
          const items1 = [
            obj.useMemo(() => {
              const items = [animatedStyle, ,];
              ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = closure_2);
              return items;
            }, items),
          ];
          const items2 = [animatedStyle1, tmp.mask];
          items1[1] = obj.useMemo(() => {
            const items = [animatedStyle1, mask.mask];
            return items;
          }, items2);
          return items1;
        }
      }
      maskEmptyElevation = tmp.maskEmptyElevation;
      const obj9 = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        MediaPlaybackPanelModes: canShowPIP,
        getClampedPIPPosition: require("MorphablePanelUtils").getClampedPIPPosition,
        safeArea: tmp4,
        disableHorizontalSafeAreas: tmp14,
        wrapperOpacity: sharedValue2,
        animateWrapperTranslation: sharedValue3,
        wrapperTranslationX: sharedValue,
        wrapperTranslationY: sharedValue1,
      };
    };
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      const context = noop.useContext(MediaPlaybackPanelStateContextDefault);
      ({ wrapperOffset, pipState } = context);
      if (cResult[0] === pipState) {
        if (cResult[1] === wrapperOffset) {
          let tmp6 = cResult[2];
        }
        return useMorphablePanelGestureDefault(tmp6);
      }
      const obj2 = {
        panGestureEnabled: true,
        mode: useMorphablePanelGesture.MorphablePanelModes.PIP,
        pipState,
        wrapperOffset,
      };
      cResult[0] = pipState;
      cResult[1] = wrapperOffset;
      cResult[2] = obj2;
      tmp6 = obj2;
    }
  : () => {
      const context = noop.useContext(MediaPlaybackPanelStateContextDefault);
      ({ wrapperOffset, pipState } = context);
      const obj = {
        panGestureEnabled: true,
        mode: useMorphablePanelGesture.MorphablePanelModes.PIP,
        pipState,
        wrapperOffset,
      };
      return useMorphablePanelGestureDefault(obj);
    };
const __initData10 = {
  code: 'function MediaPlaybackPanelUITsx13(){const{windowDimensions}=this.__closure;const{height:height,width:width}=windowDimensions;return{position:"absolute",top:0,left:0,width:width,height:height,overflow:"hidden"};}',
};
const __initData11 = {
  code: 'function MediaPlaybackPanelUITsx14(){const{styles}=this.__closure;return{flexDirection:"column",backgroundColor:styles.content.backgroundColor,borderTopStartRadius:0,borderTopEndRadius:0,top:0,overflow:"hidden"};}',
};
const __initData12 = {
  code: "function MediaPlaybackPanelUITsx15(){const{windowDimensions}=this.__closure;const{height:height,width:width}=windowDimensions;return{position:'absolute',top:0,left:0,width:width,height:height,overflow:'hidden'};}",
};
const __initData13 = {
  code: "function MediaPlaybackPanelUITsx16(){const{styles}=this.__closure;const topBorderRadius=0;const top=0;return{flexDirection:'column',backgroundColor:styles.content.backgroundColor,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius,top:top,overflow:'hidden'};}",
};
ReactCompilerGating = fn(558);
let obj3 = {};
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelUI.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(18);
      const tmp4 = disableHorizontalSafeAreas();
      const content = tmp4;
      const tmp6 = useWindowDimensionsDefault();
      const styles = tmp6;
      ({ wrapperDimensions, wrapperOffset } = useContext(MediaPlaybackPanelStateContextDefault));
      const tmp7 = useContext(MediaPlaybackPanelStateContextDefault);
      const fn = function o() {
        const size = {
          position: "absolute",
          top: 0,
          left: 0,
          width: styles.width,
          height: styles.height,
          overflow: "hidden",
        };
        return size;
      };
      fn.__closure = { windowDimensions: tmp6 };
      fn.__workletHash = 8765676409080;
      fn.__initData = __initData10;
      const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
      [tmp10, tmp11] = closure_25(wrapperDimensions, wrapperOffset);
      const tmp9 = _slicedToArray(closure_25(wrapperDimensions, wrapperOffset), 2);
      const fn2 = function s() {
        return {
          flexDirection: "column",
          backgroundColor: content.content.backgroundColor,
          borderTopStartRadius: 0,
          borderTopEndRadius: 0,
          top: 0,
          overflow: "hidden",
        };
      };
      fn2.__closure = { styles: tmp4 };
      fn2.__workletHash = 5806791255153;
      fn2.__initData = __initData11;
      const animatedStyle1 = ReanimatedRexport.useAnimatedStyle(fn2);
      const tmp13 = closure_26();
      if (cResult[0] === animatedStyle1) {
        if (cResult[1] === tmp4.content) {
          let tmp14 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp18 = jsx(MediaPlaybackPipDefault, {});
          cResult[3] = tmp18;
          let tmp16 = tmp18;
        } else {
          tmp16 = cResult[3];
        }
        if (cResult[4] !== tmp14) {
          const obj4 = { style: tmp14, children: tmp16 };
          const tmp21 = jsx(ReanimatedRexportDefault.View, { style: tmp14, children: tmp16 });
          cResult[4] = tmp14;
          cResult[5] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[5];
        }
        if (cResult[6] === tmp13) {
          if (cResult[7] === tmp19) {
            let tmp22 = cResult[8];
          }
          if (cResult[9] === tmp11) {
            if (cResult[10] === tmp22) {
              let tmp25 = cResult[11];
            }
            if (cResult[12] === tmp25) {
              if (cResult[13] === tmp10) {
                let tmp28 = cResult[14];
              }
              if (cResult[15] === animatedStyle) {
                if (cResult[16] === tmp28) {
                  let tmp31 = cResult[17];
                }
                return tmp31;
              }
              const obj5 = { children: null };
              const obj6 = { style: animatedStyle, pointerEvents: "box-none", children: tmp28 };
              obj5.children = jsx(ReanimatedRexportDefault.View, {
                style: animatedStyle,
                pointerEvents: "box-none",
                children: tmp28,
              });
              const tmp33 = jsx(LayerScope.LayerScope, { children: null });
              cResult[15] = animatedStyle;
              cResult[16] = tmp28;
              cResult[17] = tmp33;
              tmp31 = tmp33;
            }
            const obj7 = { style: tmp10, children: tmp25 };
            const tmp30 = jsx(ReanimatedRexportDefault.View, { style: tmp10, children: tmp25 });
            cResult[12] = tmp25;
            cResult[13] = tmp10;
            cResult[14] = tmp30;
            tmp28 = tmp30;
          }
          const obj8 = { style: tmp11, children: tmp22 };
          const tmp27 = jsx(ReanimatedRexportDefault.View, { style: tmp11, children: tmp22 });
          cResult[9] = tmp11;
          cResult[10] = tmp22;
          cResult[11] = tmp27;
          tmp25 = tmp27;
        }
        const obj9 = { gesture: tmp13, children: tmp19 };
        const tmp24 = jsx(LegacyBaseButton.GestureDetector, { gesture: tmp13, children: tmp19 });
        cResult[6] = tmp13;
        cResult[7] = tmp19;
        cResult[8] = tmp24;
        tmp22 = tmp24;
      }
      const items = [tmp4.content, animatedStyle1];
      cResult[0] = animatedStyle1;
      cResult[1] = tmp4.content;
      cResult[2] = items;
      tmp14 = items;
    }
  : () => {
      const tmp = disableHorizontalSafeAreas();
      const content = tmp;
      const tmp2 = useWindowDimensionsDefault();
      const styles = tmp2;
      ({ wrapperDimensions, wrapperOffset } = useContext(MediaPlaybackPanelStateContextDefault));
      const tmp3 = useContext(MediaPlaybackPanelStateContextDefault);
      const fn = function o() {
        const size = {
          position: "absolute",
          top: 0,
          left: 0,
          width: styles.width,
          height: styles.height,
          overflow: "hidden",
        };
        return size;
      };
      fn.__closure = { windowDimensions: tmp2 };
      fn.__workletHash = 14820689222782;
      fn.__initData = __initData12;
      const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
      [tmp6, tmp7] = closure_25(wrapperDimensions, wrapperOffset);
      const tmp5 = _slicedToArray(closure_25(wrapperDimensions, wrapperOffset), 2);
      const fn2 = function s() {
        return {
          flexDirection: "column",
          backgroundColor: content.content.backgroundColor,
          borderTopStartRadius: 0,
          borderTopEndRadius: 0,
          top: 0,
          overflow: "hidden",
        };
      };
      fn2.__closure = { styles: tmp };
      fn2.__workletHash = 13220577068508;
      fn2.__initData = __initData13;
      const animatedStyle1 = ReanimatedRexport.useAnimatedStyle(fn2);
      const obj3 = { children: null };
      const obj4 = { style: animatedStyle, pointerEvents: "box-none", children: null };
      const obj5 = { style: tmp6, children: null };
      const obj6 = { style: tmp7, children: null };
      const obj7 = { gesture: closure_26(), children: null };
      const obj8 = { style: null, children: jsx(MediaPlaybackPipDefault, {}) };
      const items = [tmp.content, animatedStyle1];
      obj8.style = items;
      obj7.children = jsx(ReanimatedRexportDefault.View, { style: null, children: jsx(MediaPlaybackPipDefault, {}) });
      obj6.children = jsx(LegacyBaseButton.GestureDetector, { gesture: closure_26(), children: null });
      obj5.children = jsx(ReanimatedRexportDefault.View, { style: tmp7, children: null });
      obj4.children = jsx(ReanimatedRexportDefault.View, { style: tmp6, children: null });
      obj3.children = jsx(ReanimatedRexportDefault.View, {
        style: animatedStyle,
        pointerEvents: "box-none",
        children: null,
      });
      return jsx(LayerScope.LayerScope, { children: null });
    };
