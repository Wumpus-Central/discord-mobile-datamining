// discord_app/modules/media_panel/native/MediaPlaybackPanelUI.tsx
import react2 from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react3 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../_runtime/06147_LegacyBaseButton.js";
import LayerScope2 from "../../../design/components/Layers/native/LayerScope.native.tsx";
import cheapWorkletShallowEqual2 from "../../reanimated/native/cheapWorkletShallowEqual.tsx";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import VoicePanelConstants from "../../voice_panel/VoicePanelConstants.tsx";
import MorphablePanelConstants from "../../panels/morphable/native/MorphablePanelConstants.tsx";
import MorphablePanelUtils from "../../panels/morphable/native/MorphablePanelUtils.tsx";
import useMorphablePanelGesture from "../../panels/morphable/native/useMorphablePanelGesture.tsx";
import MediaPlaybackPanelStateContextDefault from "MediaPlaybackPanelStateContext.tsx";
import MediaPlaybackPipDefault from "MediaPlaybackPip.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import SafeAreaDisabledStore from "../../panels/morphable/native/SafeAreaDisabledStore.tsx";
import MediaPlaybackPanelConstants from "MediaPlaybackPanelConstants.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;
const useMorphablePanelGestureDefault = useMorphablePanelGesture;
const react = react2;
let _require, dependencyMap, importDefault, set;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let rect;
const useContext = react2.useContext;
({ MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: metroImportDefault, MediaPlaybackPanelModes: metroImportAll } =
  MediaPlaybackPanelConstants);
const IS_IOS = MorphablePanelConstants.IS_IOS;
const BORDER_RADIUS_PHYSICS = VoicePanelConstants.BORDER_RADIUS_PHYSICS;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = {
  wrapperAnimationPresets: { opacity: 0 },
  wrapper: { position: "absolute", top: 0, left: 0, zIndex: 1 },
  mask: rect,
  maskElevation: obj2,
  maskEmptyElevation: {
    xOffset: 0,
    yOffset: 0,
    shadowColorIos: "#000000",
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    shadowColorAndroid: "#000000",
  },
  content: obj3,
};
rect = {
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
createStyles = createStyles.createStyles;
obj2 = {};
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW_HOVER);
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let disableHorizontalSafeAreas = createStyles(obj);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (wrapperDimensions, wrapperOffset) => {
      let maskElevation;
      let maskEmptyElevation;
      let mode;
      let sharedValue;
      let xl;
      _require = wrapperDimensions;
      importDefault = wrapperOffset;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(10);
      let tmp4 = disableHorizontalSafeAreas();
      const tmp5 = importDefault;
      const tmp6 = useSafeAreaInsetsDefault();
      dependencyMap = tmp6;
      const tmp7 = useWindowDimensionsDefault();
      windowDimensions = tmp7;
      const context = mode.useContext(MediaPlaybackPanelStateContextDefault);
      mode = context.mode;
      const pipState = context.pipState;
      const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
      const canShowPIP = context.canShowPIP;
      let obj2 = require("ReanimatedRexport");
      const fn = function u() {
        const obj = { mode: mode.get(), windowDimensions, canShowPIP: canShowPIP.get() };
        return obj;
      };
      fn.__closure = { mode, windowDimensions: tmp7, canShowPIP };
      fn.__workletHash = 4412661953046;
      fn.__initData = maskEmptyElevation;
      const fn2 = function p(mode, safeAreaState2) {
        let height;
        let width;
        const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
        cheapWorkletShallowEqual2;
        const tmp = safeAreaState2;
        if (!cheapWorkletShallowEqual(mode, tmp)) {
          mode = mode.mode;
          if (metroImportAll.PIP === mode) {
            const tmp9 = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 };
            ({ width, height } = tmp9);
            size = { width, height };
            updateSharedValueIfChangedDefault(wrapperDimensions, size);
          } else if (tmp5.DISMISSED === mode) {
            const obj = { y: tmp4.height };
            updateSharedValueIfChangedDefault(wrapperOffset, obj);
          }
        }
      };
      let tmp9 = sharedValue;
      fn2.__closure = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        MediaPlaybackPanelModes: sharedValue,
        updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
        wrapperDimensions,
        wrapperOffset,
      };
      fn2.__workletHash = 13032601462076;
      fn2.__initData = maskElevation;
      ({
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        MediaPlaybackPanelModes: sharedValue,
        updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
        wrapperDimensions,
        wrapperOffset,
      });
      const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
      const obj4 = require("ReanimatedRexport");
      sharedValue = obj4.useSharedValue(0);
      const obj5 = require("ReanimatedRexport");
      const sharedValue1 = obj5.useSharedValue(0);
      const obj6 = require("ReanimatedRexport");
      const sharedValue2 = obj6.useSharedValue(0);
      const obj7 = require("ReanimatedRexport");
      const sharedValue3 = obj7.useSharedValue(false);
      const tmp15 = pipAvoidanceSpecs((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
      disableHorizontalSafeAreas = tmp15;
      const fn3 = function x() {
        const obj = {
          mode: mode.get(),
          wrapperDimensions: wrapperDimensions.get(),
          pipAvoidanceSpecs: pipAvoidanceSpecs.get(),
          wrapperOffset: wrapperOffset.get(),
          windowDimensions,
          safeArea,
          pipState: pipState.get(),
        };
        return obj;
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
      const obj8 = require("ReanimatedRexport");
      class R {
        constructor(safeAreaState, pipState) {
          let tmp11;
          let x;
          let x2;
          let y;
          let y2;
          const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
          cheapWorkletShallowEqual2;
          const tmp4 = pipState;
          if (!cheapWorkletShallowEqual(safeAreaState, tmp4)) {
            ({ mode, pipAvoidanceSpecs, wrapperOffset, pipState } = safeAreaState);
            ({ x, y } = pipState);
            if (metroImportAll.PIP === mode) {
              size = {
                pipX: x,
                pipY: y,
                width: 120,
                height: 120,
                windowDimensions: tmp6,
                safeArea,
                bottomAvoidanceRegion: null,
                topAvoidanceRegion: null,
                positionOffset: tmp11,
                disableHorizontalSafeAreas,
              };
              ({ bottom: obj.bottomAvoidanceRegion, top: obj.topAvoidanceRegion } = pipAvoidanceSpecs);
              tmp11 = undefined;
              const getClampedPIPPosition = MorphablePanelUtils.getClampedPIPPosition;
              MorphablePanelUtils;
              if (tmp7) {
                tmp11 = wrapperOffset;
              }
              const clampedPIPPosition = getClampedPIPPosition(size);
              ({ x: x2, y: y2 } = clampedPIPPosition);
              const result = sharedValue2.set(1);
            } else {
              y2 = 0;
              x2 = 0;
              if (metroImportAll.DISMISSED === mode) {
                y2 = tmp5.height;
                const result1 = sharedValue2.set(0);
                x2 = 0;
              }
            }
            let pipState1;
            if (pipState != null) {
              pipState1 = pipState.pipState;
            }
            let x1;
            if (pipState1 != null) {
              x1 = pipState1.x;
            }
            let tmp18 = x !== x1;
            if (!tmp18) {
              let y1;
              if (pipState1 != null) {
                y1 = pipState1.y;
              }
              tmp18 = y !== y1;
            }
            let tmp20 = mode === metroImportAll.PIP && tmp18 && !wrapperOffset.gestureActive;
            set = sharedValue3.set;
            if (!tmp20) {
              tmp20 = mode !== metroImportAll.PIP;
            }
            const result2 = set(tmp20);
            const result3 = sharedValue.set(x2);
            const result4 = sharedValue1.set(y2);
          }
        }
      }
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
      ({
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        MediaPlaybackPanelModes: sharedValue,
        getClampedPIPPosition: require("MorphablePanelUtils").getClampedPIPPosition,
        safeArea: tmp6,
        disableHorizontalSafeAreas: tmp15,
        wrapperOpacity: sharedValue2,
        animateWrapperTranslation: sharedValue3,
        wrapperTranslationX: sharedValue,
        wrapperTranslationY: sharedValue1,
      });
      const animatedReaction1 = obj8.useAnimatedReaction(fn3, R);
      if (mode.get() === sharedValue.PIP) {
        const tmp17 = sharedValue1;
        if (tmp17) {
          maskEmptyElevation = tmp4.maskElevation;
        }
        if (mode.get() === tmp9.PIP) {
          let tmp18 = sharedValue1;
          if (!tmp18) {
            maskElevation = tmp4.maskElevation;
          }
          let tmpResult = tmp(4618);
          class X {
            constructor() {
              let withSpringResult;
              let withSpringResult1;
              const withTiming = timing.withTiming;
              timing;
              const value = sharedValue2.get();
              const withTimingResult = withTiming(value, timingPresets.timingFast, "respect-motion-settings");
              if (sharedValue3.get()) {
                const tmpResult = spring;
                withSpringResult = tmpResult.withSpring(sharedValue.get(), metroImportDefault, "animate-always");
              } else {
                withSpringResult = sharedValue.get();
              }
              const items = [{ translateX: withSpringResult }];
              if (sharedValue3.get()) {
                const withSpring = spring.withSpring;
                spring;
                const value2 = sharedValue1.get();
                let str2 = "animate-never";
                if (sharedValue3.get()) {
                  str2 = "respect-motion-settings";
                }
                withSpringResult1 = withSpring(value2, metroImportDefault, str2);
              } else {
                withSpringResult1 = sharedValue1.get();
              }
              size = {
                transform: items,
                opacity: withTimingResult,
                width: wrapperDimensions.get().width,
                height: wrapperDimensions.get().height,
              };
              items[1] = { translateY: withSpringResult1 };
              const merged = Object.assign(maskEmptyElevation);
              return size;
            }
          }
          const useAnimatedStyle = tmpResult.useAnimatedStyle;
          let tmp20 = canShowPIP;
          X.__closure = {
            withTiming: tmp(4897).withTiming,
            wrapperOpacity: sharedValue2,
            timingFast: tmp(4900).timingFast,
            animateWrapperTranslation: sharedValue3,
            withSpring: tmp(5604).withSpring,
            wrapperTranslationX: sharedValue,
            MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: canShowPIP,
            wrapperTranslationY: sharedValue1,
            wrapperDimensions,
            wrapperElevationStyles: maskEmptyElevation,
          };
          X.__workletHash = 12784426477772;
          X.__initData = __initData2;
          const obj10 = {
            withTiming: tmp(4897).withTiming,
            wrapperOpacity: sharedValue2,
            timingFast: tmp(4900).timingFast,
            animateWrapperTranslation: sharedValue3,
            withSpring: tmp(5604).withSpring,
            wrapperTranslationX: sharedValue,
            MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: canShowPIP,
            wrapperTranslationY: sharedValue1,
            wrapperDimensions,
            wrapperElevationStyles: maskEmptyElevation,
          };
          const animatedStyle = useAnimatedStyle(X);
          xl = nativeDefault.radii.xl;
          const tmpResult2 = tmp(4618);
          class V {
            constructor() {
              let obj2;
              const obj = { borderRadius: obj2.withSpring(xl, BORDER_RADIUS_PHYSICS, "animate-always") };
              obj2 = spring;
              const merged = Object.assign(maskElevation);
              return obj;
            }
          }
          const useAnimatedStyle2 = tmpResult2.useAnimatedStyle;
          V.__closure = {
            withSpring: tmp(5604).withSpring,
            borderRadius: xl,
            BORDER_RADIUS_PHYSICS: sharedValue2,
            maskElevationStyles: maskElevation,
          };
          V.__workletHash = 16028964429799;
          V.__initData = __initData3;
          const obj11 = {
            withSpring: tmp(5604).withSpring,
            borderRadius: xl,
            BORDER_RADIUS_PHYSICS: sharedValue2,
            maskElevationStyles: maskElevation,
          };
          const animatedStyle2 = useAnimatedStyle2(V);
          if (cResult[0] === tmp4.wrapper) {
            if (cResult[1] === tmp4.wrapperAnimationPresets) {
              let tmp27;
              if (cResult[2] === animatedStyle) {
                tmp27 = cResult[3];
              }
              if (cResult[4] === animatedStyle2) {
                let tmp28;
                if (cResult[5] === tmp4.mask) {
                  tmp28 = cResult[6];
                }
                if (cResult[7] === tmp27) {
                  let tmp29;
                  if (cResult[8] === tmp28) {
                    tmp29 = cResult[9];
                  }
                  return tmp29;
                }
                let items = [tmp27];
                class X {
                  constructor() {
                    let withSpringResult;
                    let withSpringResult1;
                    const withTiming = timing.withTiming;
                    timing;
                    const value = sharedValue2.get();
                    const withTimingResult = withTiming(value, timingPresets.timingFast, "respect-motion-settings");
                    if (sharedValue3.get()) {
                      const tmpResult = spring;
                      withSpringResult = tmpResult.withSpring(sharedValue.get(), metroImportDefault, "animate-always");
                    } else {
                      withSpringResult = sharedValue.get();
                    }
                    const items = [{ translateX: withSpringResult }];
                    if (sharedValue3.get()) {
                      const withSpring = spring.withSpring;
                      spring;
                      const value2 = sharedValue1.get();
                      let str2 = "animate-never";
                      if (sharedValue3.get()) {
                        str2 = "respect-motion-settings";
                      }
                      withSpringResult1 = withSpring(value2, metroImportDefault, str2);
                    } else {
                      withSpringResult1 = sharedValue1.get();
                    }
                    size = {
                      transform: items,
                      opacity: withTimingResult,
                      width: wrapperDimensions.get().width,
                      height: wrapperDimensions.get().height,
                    };
                    items[1] = { translateY: withSpringResult1 };
                    const merged = Object.assign(maskEmptyElevation);
                    return size;
                  }
                }
                cResult[7] = tmp27;
                cResult[8] = tmp28;
                cResult[9] = items;
                tmp29 = items;
              }
              const items1 = [animatedStyle2];
              class X {
                constructor() {
                  let withSpringResult;
                  let withSpringResult1;
                  const withTiming = timing.withTiming;
                  timing;
                  const value = sharedValue2.get();
                  const withTimingResult = withTiming(value, timingPresets.timingFast, "respect-motion-settings");
                  if (sharedValue3.get()) {
                    const tmpResult = spring;
                    withSpringResult = tmpResult.withSpring(sharedValue.get(), metroImportDefault, "animate-always");
                  } else {
                    withSpringResult = sharedValue.get();
                  }
                  const items = [{ translateX: withSpringResult }];
                  if (sharedValue3.get()) {
                    const withSpring = spring.withSpring;
                    spring;
                    const value2 = sharedValue1.get();
                    let str2 = "animate-never";
                    if (sharedValue3.get()) {
                      str2 = "respect-motion-settings";
                    }
                    withSpringResult1 = withSpring(value2, metroImportDefault, str2);
                  } else {
                    withSpringResult1 = sharedValue1.get();
                  }
                  size = {
                    transform: items,
                    opacity: withTimingResult,
                    width: wrapperDimensions.get().width,
                    height: wrapperDimensions.get().height,
                  };
                  items[1] = { translateY: withSpringResult1 };
                  const merged = Object.assign(maskEmptyElevation);
                  return size;
                }
              }
              cResult[4] = animatedStyle2;
              cResult[5] = tmp4.mask;
              cResult[6] = items1;
              tmp28 = items1;
            }
          }
          const items2 = [animatedStyle, ,];
          ({ wrapper: arr[1], wrapperAnimationPresets: arr[2], wrapper: tmp3[0] } = tmp4);
          cResult[1] = tmp4.wrapperAnimationPresets;
          cResult[2] = animatedStyle;
          cResult[3] = items2;
          tmp27 = items2;
        }
      }
      maskEmptyElevation = tmp4.maskEmptyElevation;
    }
  : (wrapperDimensions, wrapperOffset) => {
      let mask;
      let sharedValue3;
      _require = wrapperDimensions;
      importDefault = wrapperOffset;
      let tmp = sharedValue3();
      dependencyMap = tmp;
      let tmp4 = useSafeAreaInsetsDefault();
      safeArea = tmp4;
      const tmp5 = useWindowDimensionsDefault();
      windowDimensions = tmp5;
      let obj = windowDimensions;
      const context = windowDimensions.useContext(MediaPlaybackPanelStateContextDefault);
      let mode = context.mode;
      const pipState = context.pipState;
      const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
      const canShowPIP = context.canShowPIP;
      const tmp7 = _require;
      let obj2 = require("ReanimatedRexport");
      const fn = function u() {
        const obj = { mode: mode.get(), windowDimensions, canShowPIP: canShowPIP.get() };
        return obj;
      };
      fn.__closure = { mode, windowDimensions: tmp5, canShowPIP };
      fn.__workletHash = 15023914226064;
      fn.__initData = __initData4;
      const fn2 = function p(mode, safeAreaState2) {
        let height;
        let width;
        const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
        cheapWorkletShallowEqual2;
        const tmp = safeAreaState2;
        if (!cheapWorkletShallowEqual(mode, tmp)) {
          mode = mode.mode;
          if (metroImportAll.PIP === mode) {
            const tmp9 = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 };
            ({ width, height } = tmp9);
            size = { width, height };
            updateSharedValueIfChangedDefault(wrapperDimensions, size);
          } else if (tmp5.DISMISSED === mode) {
            const obj = { y: tmp4.height };
            updateSharedValueIfChangedDefault(wrapperOffset, obj);
          }
        }
      };
      fn2.__closure = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        MediaPlaybackPanelModes: canShowPIP,
        updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
        wrapperDimensions,
        wrapperOffset,
      };
      fn2.__workletHash = 2945704330221;
      fn2.__initData = __initData5;
      ({
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        MediaPlaybackPanelModes: canShowPIP,
        updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
        wrapperDimensions,
        wrapperOffset,
      });
      const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
      const obj4 = require("ReanimatedRexport");
      const sharedValue = obj4.useSharedValue(0);
      const obj5 = require("ReanimatedRexport");
      const sharedValue1 = obj5.useSharedValue(0);
      const obj6 = require("ReanimatedRexport");
      const sharedValue2 = obj6.useSharedValue(0);
      const obj7 = require("ReanimatedRexport");
      sharedValue3 = obj7.useSharedValue(false);
      const tmp14 = pipState((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
      disableHorizontalSafeAreas2 = tmp14;
      const obj8 = require("ReanimatedRexport");
      const tmp8 = canShowPIP;
      class R {
        constructor() {
          const obj = {
            mode: mode.get(),
            wrapperDimensions: wrapperDimensions.get(),
            pipAvoidanceSpecs: pipAvoidanceSpecs.get(),
            wrapperOffset: wrapperOffset.get(),
            windowDimensions,
            safeArea,
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
        constructor(safeAreaState, pipState) {
          let tmp11;
          let x;
          let x2;
          let y;
          let y2;
          const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
          cheapWorkletShallowEqual2;
          const tmp4 = pipState;
          if (!cheapWorkletShallowEqual(safeAreaState, tmp4)) {
            ({ mode, pipAvoidanceSpecs, wrapperOffset, pipState } = safeAreaState);
            ({ x, y } = pipState);
            if (metroImportAll.PIP === mode) {
              size = {
                pipX: x,
                pipY: y,
                width: 120,
                height: 120,
                windowDimensions: tmp6,
                safeArea,
                bottomAvoidanceRegion: null,
                topAvoidanceRegion: null,
                positionOffset: tmp11,
                disableHorizontalSafeAreas,
              };
              ({ bottom: obj.bottomAvoidanceRegion, top: obj.topAvoidanceRegion } = pipAvoidanceSpecs);
              tmp11 = undefined;
              const getClampedPIPPosition = MorphablePanelUtils.getClampedPIPPosition;
              MorphablePanelUtils;
              if (tmp7) {
                tmp11 = wrapperOffset;
              }
              const clampedPIPPosition = getClampedPIPPosition(size);
              ({ x: x2, y: y2 } = clampedPIPPosition);
              const result = sharedValue2.set(1);
            } else {
              y2 = 0;
              x2 = 0;
              if (metroImportAll.DISMISSED === mode) {
                y2 = tmp5.height;
                const result1 = sharedValue2.set(0);
                x2 = 0;
              }
            }
            let pipState1;
            if (pipState != null) {
              pipState1 = pipState.pipState;
            }
            let x1;
            if (pipState1 != null) {
              x1 = pipState1.x;
            }
            let tmp18 = x !== x1;
            if (!tmp18) {
              let y1;
              if (pipState1 != null) {
                y1 = pipState1.y;
              }
              tmp18 = y !== y1;
            }
            let tmp20 = mode === metroImportAll.PIP && tmp18 && !wrapperOffset.gestureActive;
            set = sharedValue3.set;
            if (!tmp20) {
              tmp20 = mode !== metroImportAll.PIP;
            }
            const result2 = set(tmp20);
            const result3 = sharedValue.set(x2);
            const result4 = sharedValue1.set(y2);
          }
        }
      }
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
      ({
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        MediaPlaybackPanelModes: canShowPIP,
        getClampedPIPPosition: require("MorphablePanelUtils").getClampedPIPPosition,
        safeArea: tmp4,
        disableHorizontalSafeAreas: tmp14,
        wrapperOpacity: sharedValue2,
        animateWrapperTranslation: sharedValue3,
        wrapperTranslationX: sharedValue,
        wrapperTranslationY: sharedValue1,
      });
      const animatedReaction1 = obj8.useAnimatedReaction(R, C);
      if (mode.get() === canShowPIP.PIP) {
        let maskEmptyElevation;
        const tmp16 = sharedValue;
        if (tmp16) {
          maskEmptyElevation = tmp.maskElevation;
        }
        if (mode.get() === tmp8.PIP) {
          let maskElevation;
          const tmp17 = sharedValue;
          if (!tmp17) {
            maskElevation = tmp.maskElevation;
          }
          const tmp7Result = tmp7(4618);
          class L {
            constructor() {
              let withSpringResult;
              let withSpringResult1;
              const withTiming = timing.withTiming;
              timing;
              const value = sharedValue2.get();
              const withTimingResult = withTiming(value, timingPresets.timingFast, "respect-motion-settings");
              if (sharedValue3.get()) {
                const tmpResult = spring;
                withSpringResult = tmpResult.withSpring(sharedValue.get(), metroImportDefault, "animate-always");
              } else {
                withSpringResult = sharedValue.get();
              }
              const items = [{ translateX: withSpringResult }];
              if (sharedValue3.get()) {
                const withSpring = spring.withSpring;
                spring;
                const value2 = sharedValue1.get();
                let str2 = "animate-never";
                if (sharedValue3.get()) {
                  str2 = "respect-motion-settings";
                }
                withSpringResult1 = withSpring(value2, metroImportDefault, str2);
              } else {
                withSpringResult1 = sharedValue1.get();
              }
              size = {
                transform: items,
                opacity: withTimingResult,
                width: wrapperDimensions.get().width,
                height: wrapperDimensions.get().height,
              };
              items[1] = { translateY: withSpringResult1 };
              const merged = Object.assign(maskEmptyElevation);
              return size;
            }
          }
          const useAnimatedStyle = tmp7Result.useAnimatedStyle;
          L.__closure = {
            withTiming: tmp7(4897).withTiming,
            wrapperOpacity: sharedValue2,
            timingFast: tmp7(4900).timingFast,
            animateWrapperTranslation: sharedValue3,
            withSpring: tmp7(5604).withSpring,
            wrapperTranslationX: sharedValue,
            MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: pipAvoidanceSpecs,
            wrapperTranslationY: sharedValue1,
            wrapperDimensions,
            wrapperElevationStyles: maskEmptyElevation,
          };
          L.__workletHash = 15678797521625;
          L.__initData = __initData8;
          const obj10 = {
            withTiming: tmp7(4897).withTiming,
            wrapperOpacity: sharedValue2,
            timingFast: tmp7(4900).timingFast,
            animateWrapperTranslation: sharedValue3,
            withSpring: tmp7(5604).withSpring,
            wrapperTranslationX: sharedValue,
            MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: pipAvoidanceSpecs,
            wrapperTranslationY: sharedValue1,
            wrapperDimensions,
            wrapperElevationStyles: maskEmptyElevation,
          };
          const animatedStyle = useAnimatedStyle(L);
          const xl = nativeDefault.radii.xl;
          const tmp7Result2 = tmp7(4618);
          class X {
            constructor() {
              let obj2;
              const obj = { borderRadius: obj2.withSpring(xl, BORDER_RADIUS_PHYSICS, "animate-always") };
              obj2 = spring;
              const merged = Object.assign(maskElevation);
              return obj;
            }
          }
          const useAnimatedStyle2 = tmp7Result2.useAnimatedStyle;
          X.__closure = {
            withSpring: tmp7(5604).withSpring,
            borderRadius: xl,
            BORDER_RADIUS_PHYSICS: sharedValue1,
            maskElevationStyles: maskElevation,
          };
          X.__workletHash = 17303815726802;
          X.__initData = __initData9;
          const obj11 = {
            withSpring: tmp7(5604).withSpring,
            borderRadius: xl,
            BORDER_RADIUS_PHYSICS: sharedValue1,
            maskElevationStyles: maskElevation,
          };
          const animatedStyle2 = useAnimatedStyle2(X);
          let items = [animatedStyle, ,];
          ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = tmp);
          const items1 = [
            obj.useMemo(() => {
              const items = [animatedStyle, ,];
              ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = mask);
              return items;
            }, items),
          ];
          const items2 = [animatedStyle2, tmp.mask];
          items1[1] = obj.useMemo(() => {
            const items = [animatedStyle2, mask.mask];
            return items;
          }, items2);
          return items1;
        }
      }
      maskEmptyElevation = tmp.maskEmptyElevation;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let pipState;
      let wrapperOffset;
      const obj = react3;
      const cResult = obj.c(3);
      const context = react.useContext(MediaPlaybackPanelStateContextDefault);
      ({ wrapperOffset, pipState } = context);
      if (cResult[0] === pipState) {
        let tmp6;
        if (cResult[1] === wrapperOffset) {
          tmp6 = cResult[2];
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
      let pipState;
      let wrapperOffset;
      const context = react.useContext(MediaPlaybackPanelStateContextDefault);
      ({ wrapperOffset, pipState } = context);
      const obj = {
        panGestureEnabled: true,
        mode: useMorphablePanelGesture.MorphablePanelModes.PIP,
        pipState,
        wrapperOffset,
      };
      const tmp2 = useMorphablePanelGestureDefault;
      return tmp2(obj);
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp10;
      let tmp11;
      let wrapperDimensions;
      let wrapperOffset;
      const obj = react3;
      const cResult = obj.c(18);
      const tmp4 = disableHorizontalSafeAreas();
      let closure_0 = tmp4;
      const tmp6 = useWindowDimensionsDefault();
      let closure_1 = tmp6;
      ({ wrapperDimensions, wrapperOffset } = useContext(MediaPlaybackPanelStateContextDefault));
      useContext(MediaPlaybackPanelStateContextDefault);
      const fn = function o() {
        size = {
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
      const obj2 = ReanimatedRexport;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      [tmp10, tmp11] = closure_25(wrapperDimensions, wrapperOffset);
      _slicedToArray(closure_25(wrapperDimensions, wrapperOffset), 2);
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
      const obj3 = ReanimatedRexport;
      const animatedStyle1 = obj3.useAnimatedStyle(fn2);
      const tmp13 = closure_26();
      if (cResult[0] === animatedStyle1) {
        let tmp14;
        let tmp16;
        let tmp19;
        if (cResult[1] === tmp4.content) {
          tmp14 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp18 = jsx(MediaPlaybackPipDefault, {});
          cResult[3] = tmp18;
          tmp16 = tmp18;
        } else {
          tmp16 = cResult[3];
        }
        if (cResult[4] !== tmp14) {
          const tmp21 = jsx(ReanimatedRexportDefault.View, { style: tmp14, children: tmp16 });
          cResult[4] = tmp14;
          cResult[5] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[5];
        }
        if (cResult[6] === tmp13) {
          let tmp22;
          if (cResult[7] === tmp19) {
            tmp22 = cResult[8];
          }
          if (cResult[9] === tmp11) {
            let tmp25;
            if (cResult[10] === tmp22) {
              tmp25 = cResult[11];
            }
            if (cResult[12] === tmp25) {
              let tmp28;
              if (cResult[13] === tmp10) {
                tmp28 = cResult[14];
              }
              if (cResult[15] === animatedStyle) {
                let tmp31;
                if (cResult[16] === tmp28) {
                  tmp31 = cResult[17];
                }
                return tmp31;
              }
              const LayerScope = LayerScope2.LayerScope;
              const tmp33 = <LayerScope>{null}</LayerScope>;
              cResult[15] = animatedStyle;
              cResult[16] = tmp28;
              cResult[17] = tmp33;
              tmp31 = tmp33;
            }
            const tmp30 = jsx(ReanimatedRexportDefault.View, { style: tmp10, children: tmp25 });
            cResult[12] = tmp25;
            cResult[13] = tmp10;
            cResult[14] = tmp30;
            tmp28 = tmp30;
          }
          const tmp27 = jsx(ReanimatedRexportDefault.View, { style: tmp11, children: tmp22 });
          cResult[9] = tmp11;
          cResult[10] = tmp22;
          cResult[11] = tmp27;
          tmp25 = tmp27;
        }
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
      let tmp6;
      let tmp7;
      let wrapperDimensions;
      let wrapperOffset;
      const tmp = disableHorizontalSafeAreas();
      let closure_0 = tmp;
      const tmp2 = useWindowDimensionsDefault();
      let closure_1 = tmp2;
      ({ wrapperDimensions, wrapperOffset } = useContext(MediaPlaybackPanelStateContextDefault));
      useContext(MediaPlaybackPanelStateContextDefault);
      const fn = function o() {
        size = {
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
      const obj = ReanimatedRexport;
      const animatedStyle = obj.useAnimatedStyle(fn);
      [tmp6, tmp7] = closure_25(wrapperDimensions, wrapperOffset);
      _slicedToArray(closure_25(wrapperDimensions, wrapperOffset), 2);
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
      const obj2 = ReanimatedRexport;
      const animatedStyle1 = obj2.useAnimatedStyle(fn2);
      const tmp9 = closure_26();
      const LayerScope = LayerScope2.LayerScope;
      const View = ReanimatedRexportDefault.View;
      const View2 = ReanimatedRexportDefault.View;
      const View3 = ReanimatedRexportDefault.View;
      const GestureDetector = LegacyBaseButton.GestureDetector;
      const items = [tmp.content, animatedStyle1];
      const View4 = ReanimatedRexportDefault.View;
      return <LayerScope>{null}</LayerScope>;
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelUI.tsx");

export default tmp5;
