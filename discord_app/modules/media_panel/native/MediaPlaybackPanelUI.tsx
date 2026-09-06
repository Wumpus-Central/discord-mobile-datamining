// discord_app/modules/media_panel/native/MediaPlaybackPanelUI.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import cheapWorkletShallowEqual from "../../reanimated/native/cheapWorkletShallowEqual.tsx";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import MorphablePanelUtils from "../../panels/morphable/native/MorphablePanelUtils.tsx";
import MediaPlaybackPanelStateContextDefault from "MediaPlaybackPanelStateContext.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SafeAreaDisabledStore from "../../panels/morphable/native/SafeAreaDisabledStore.tsx";

require = fn;
const useContext = fn(19).useContext;
const MediaPlaybackPanelConstants = fn(14537);
({ MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: closure_7, MediaPlaybackPanelModes: closure_8 } = MediaPlaybackPanelConstants);
const IS_IOS = fn(12274).IS_IOS;
const BORDER_RADIUS_PHYSICS = fn(12273).BORDER_RADIUS_PHYSICS;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = {
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
createStyles.mask = rect;
createStyles = {};
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW_HOVER);
createStyles.maskElevation = createStyles;
createStyles.maskEmptyElevation = {
  xOffset: 0,
  yOffset: 0,
  shadowColorIos: "#000000",
  shadowOpacity: 0,
  shadowRadius: 0,
  elevation: 0,
  shadowColorAndroid: "#000000",
};
createStyles.content = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_12 = createStyles.createStyles(createStyles);
const disableHorizontalSafeAreas = {
  code: "function MediaPlaybackPanelUITsx1(){const{mode,windowDimensions,canShowPIP}=this.__closure;return{mode:mode.get(),windowDimensions:windowDimensions,canShowPIP:canShowPIP.get()};}",
};
const __initData = {
  code: "function MediaPlaybackPanelUITsx2(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:modeToSet,windowDimensions:windowDimensions,canShowPIP:canShowPIP}=props;switch(modeToSet){case MediaPlaybackPanelModes.PIP:{const{width:width,height:height}=canShowPIP?{width:120,height:120}:{width:0,height:0};updateSharedValueIfChanged(wrapperDimensions,{width:width,height:height});break;}case MediaPlaybackPanelModes.DISMISSED:updateSharedValueIfChanged(wrapperOffset,{y:windowDimensions.height});break;default:modeToSet;}}",
};
const __initData2 = {
  code: "function MediaPlaybackPanelUITsx3(){const{mode,wrapperDimensions,pipAvoidanceSpecs,wrapperOffset,windowDimensions,safeArea,pipState}=this.__closure;return{mode:mode.get(),wrapperDimensions:wrapperDimensions.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),wrapperOffset:wrapperOffset.get(),windowDimensions:windowDimensions,safeArea:safeArea,pipState:pipState.get()};}",
};
const __initData3 = {
  code: "function MediaPlaybackPanelUITsx4(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,getClampedPIPPosition,safeArea,disableHorizontalSafeAreas,wrapperOpacity,animateWrapperTranslation,wrapperTranslationX,wrapperTranslationY}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,wrapperDimensions:wrapperDimensions,pipAvoidanceSpecs:pipAvoidanceSpecs,wrapperOffset:wrapperOffset,windowDimensions:windowDimensions,pipState:pipState}=props;let x=0;let y=0;const{gestureActive:gestureActive}=wrapperOffset;const{x:pipX,y:pipY}=pipState;switch(mode){case MediaPlaybackPanelModes.PIP:{const clampedPosition=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:120,height:120,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.bottom,topAvoidanceRegion:pipAvoidanceSpecs.top,positionOffset:gestureActive?wrapperOffset:undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});x=clampedPosition.x;y=clampedPosition.y;wrapperOpacity.set(1);break;}case MediaPlaybackPanelModes.DISMISSED:{y=wrapperDimensions.height;wrapperOpacity.set(0);break;}}const previousPIPState=previous===null||previous===void 0?void 0:previous.pipState;const pipPositionChanged=pipX!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.x)||pipY!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.y);const shouldAnimateForPIP=mode===MediaPlaybackPanelModes.PIP&&pipPositionChanged&&!wrapperOffset.gestureActive;animateWrapperTranslation.set(shouldAnimateForPIP||mode!==MediaPlaybackPanelModes.PIP);wrapperTranslationX.set(x);wrapperTranslationY.set(y);}",
};
const __initData4 = {
  code: "function MediaPlaybackPanelUITsx5(){const{withTiming,wrapperOpacity,timingFast,animateWrapperTranslation,withSpring,wrapperTranslationX,MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,wrapperTranslationY,wrapperDimensions,wrapperElevationStyles}=this.__closure;const opacity=withTiming(wrapperOpacity.get(),timingFast,'respect-motion-settings');return{transform:[{translateX:animateWrapperTranslation.get()?withSpring(wrapperTranslationX.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,'animate-always'):wrapperTranslationX.get()},{translateY:animateWrapperTranslation.get()?withSpring(wrapperTranslationY.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,animateWrapperTranslation.get()?'respect-motion-settings':'animate-never'):wrapperTranslationY.get()}],opacity:opacity,width:wrapperDimensions.get().width,height:wrapperDimensions.get().height,...wrapperElevationStyles};}",
};
const __initData5 = {
  code: "function MediaPlaybackPanelUITsx6(){const{withSpring,borderRadius,BORDER_RADIUS_PHYSICS,maskElevationStyles}=this.__closure;return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS,'animate-always'),...maskElevationStyles};}",
};
const __initData6 = {
  code: "function MediaPlaybackPanelUITsx7(){const{windowDimensions}=this.__closure;const{height:height,width:width}=windowDimensions;return{position:'absolute',top:0,left:0,width:width,height:height,overflow:'hidden'};}",
};
const __initData7 = {
  code: "function MediaPlaybackPanelUITsx8(){const{styles}=this.__closure;const topBorderRadius=0;const top=0;return{flexDirection:'column',backgroundColor:styles.content.backgroundColor,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius,top:top,overflow:'hidden'};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelUI.tsx");

export default function MediaPlaybackPanelUI() {
  const tmp = closure_12();
  _require = tmp;
  const tmp4 = useWindowDimensionsDefault();
  importDefault = tmp4;
  ({ wrapperDimensions, wrapperOffset } = useContext(MediaPlaybackPanelStateContextDefault));
  let obj = require("ReanimatedRexport");
  const fn = function p() {
    const size = {
      position: "absolute",
      top: 0,
      left: 0,
      width: closure_1.width,
      height: closure_1.height,
      overflow: "hidden",
    };
    return size;
  };
  fn.__closure = { windowDimensions: tmp4 };
  fn.__workletHash = 5768037716653;
  fn.__initData = __initData6;
  closure_129_0 = wrapperDimensions;
  closure_129_1 = wrapperOffset;
  closure_129_14 = undefined;
  closure_129_15 = undefined;
  closure_129_16 = undefined;
  closure_129_17 = undefined;
  closure_129_18 = undefined;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let tmp8 = closure_12();
  closure_129_2 = tmp8;
  let tmp9 = useSafeAreaInsetsDefault();
  closure_129_3 = tmp9;
  let tmp10 = useWindowDimensionsDefault();
  closure_129_4 = tmp10;
  let obj1 = noop;
  const context = noop.useContext(MediaPlaybackPanelStateContextDefault);
  let mode = context.mode;
  closure_129_5 = mode;
  const pipState = context.pipState;
  closure_129_6 = pipState;
  const pipAvoidanceSpecs = context.pipAvoidanceSpecs;
  closure_129_7 = pipAvoidanceSpecs;
  const canShowPIP = context.canShowPIP;
  closure_129_8 = canShowPIP;
  let obj2 = require("ReanimatedRexport");
  const fn2 = function u() {
    return { mode: useContext.get(), windowDimensions, canShowPIP: MediaPlaybackPanelModes.get() };
  };
  fn2.__closure = { mode, windowDimensions: tmp10, canShowPIP };
  fn2.__workletHash = 4412661953046;
  fn2.__initData = disableHorizontalSafeAreas;
  const fn3 = function p(mode, current) {
    let obj = cheapWorkletShallowEqual;
    if (!obj.cheapWorkletShallowEqual(mode, current)) {
      mode = mode.mode;
      if (MediaPlaybackPanelModes.PIP === mode) {
        ({ width, height } = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 });
        const size = { width, height };
        updateSharedValueIfChangedDefault(closure_0, size);
        const tmp8 = mode.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 };
      } else if (tmp4.DISMISSED === mode) {
        obj = { y: tmp3.height };
        updateSharedValueIfChangedDefault(closure_1, obj);
      }
    }
  };
  obj = {
    cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
    MediaPlaybackPanelModes,
    updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
    wrapperDimensions,
    wrapperOffset,
  };
  fn3.__closure = obj;
  fn3.__workletHash = 5458787116551;
  fn3.__initData = __initData;
  const animatedReaction = obj2.useAnimatedReaction(fn2, fn3);
  let obj4 = require("ReanimatedRexport");
  const sharedValue = obj4.useSharedValue(0);
  closure_129_9 = sharedValue;
  let obj5 = require("ReanimatedRexport");
  const sharedValue1 = obj5.useSharedValue(0);
  closure_129_10 = sharedValue1;
  let obj6 = require("ReanimatedRexport");
  const sharedValue2 = obj6.useSharedValue(0);
  closure_129_11 = sharedValue2;
  let obj7 = require("ReanimatedRexport");
  const sharedValue3 = obj7.useSharedValue(false);
  closure_129_12 = sharedValue3;
  let tmp18 = SafeAreaDisabledStore((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
  closure_129_13 = tmp18;
  let obj8 = require("ReanimatedRexport");
  class R {
    constructor() {
      obj = {
        mode: closure_1_5.get(),
        wrapperDimensions: closure_0.get(),
        pipAvoidanceSpecs: closure_1_7.get(),
        wrapperOffset: closure_1.get(),
        windowDimensions: closure_1_4,
        safeArea: closure_1_3,
        pipState: closure_1_6.get(),
      };
      return obj;
    }
  }
  R.__closure = {
    mode,
    wrapperDimensions,
    pipAvoidanceSpecs,
    wrapperOffset,
    windowDimensions: tmp10,
    safeArea: tmp9,
    pipState,
  };
  R.__workletHash = 4950432193502;
  R.__initData = __initData2;
  class C {
    constructor(arg0, arg1) {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[13]);
      tmp3 = arg1;
      if (!obj.cheapWorkletShallowEqual(arg0, tmp3)) {
        ({ mode, pipAvoidanceSpecs, wrapperOffset, pipState } = arg0);
        ({ x, y } = pipState);
        tmp7 = MediaPlaybackPanelModes;
        if (MediaPlaybackPanelModes.PIP === mode) {
          tmpResult = tmp(tmp2[15]);
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
          tmp8 = closure_1_3;
          size.safeArea = closure_1_3;
          ({ bottom: obj3.bottomAvoidanceRegion, top: obj3.topAvoidanceRegion } = pipAvoidanceSpecs);
          tmp9 = undefined;
          if (tmp6) {
            tmp9 = wrapperOffset;
          }
          size.positionOffset = tmp9;
          tmp10 = closure_1_13;
          size.disableHorizontalSafeAreas = closure_1_13;
          clampedPIPPosition = tmpResult.getClampedPIPPosition(size);
          ({ x: x2, y: y2 } = clampedPIPPosition);
          tmp12 = closure_1_11;
          num2 = 1;
          result = closure_1_11.set(1);
        } else {
          num = 0;
          y2 = 0;
          x2 = 0;
          if (tmp7.DISMISSED === mode) {
            y2 = tmp4.height;
            tmp25 = closure_1_11;
            result1 = closure_1_11.set(0);
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
        tmp19 = closure_1_12;
        if (!tmp18) {
          tmp18 = mode !== tmp7.PIP;
        }
        result2 = closure_1_12.set(tmp18);
        tmp21 = closure_1_9;
        result3 = closure_1_9.set(x2);
        tmp23 = closure_1_10;
        result4 = closure_1_10.set(y2);
      }
      return;
    }
  }
  obj = {
    cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
    MediaPlaybackPanelModes,
    getClampedPIPPosition: require("MorphablePanelUtils").getClampedPIPPosition,
    safeArea: tmp9,
    disableHorizontalSafeAreas: tmp18,
    wrapperOpacity: sharedValue2,
    animateWrapperTranslation: sharedValue3,
    wrapperTranslationX: sharedValue,
    wrapperTranslationY: sharedValue1,
  };
  C.__closure = obj;
  C.__workletHash = 10793489581273;
  C.__initData = __initData3;
  const animatedReaction1 = obj8.useAnimatedReaction(R, C);
  if (mode.get() === MediaPlaybackPanelModes.PIP) {
    if (IS_IOS) {
      let maskEmptyElevation = tmp8.maskElevation;
    }
    closure_129_14 = maskEmptyElevation;
    if (mode.get() === MediaPlaybackPanelModes.PIP) {
      if (!IS_IOS) {
        const maskElevation = tmp8.maskElevation;
      }
      closure_129_15 = maskElevation;
      let tmp6Result = tmp6(4296);
      class L {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[16]);
          value = closure_1_11.get();
          obj2 = closure_1_12;
          withTimingResult = obj.withTiming(value, closure_0(closure_2[17]).timingFast, "respect-motion-settings");
          if (closure_1_12.get()) {
            tmpResult = tmp(tmp2[18]);
            tmp7 = closure_1_9;
            tmp8 = closure_7;
            str = "animate-always";
            withSpringResult = tmpResult.withSpring(closure_1_9.get(), closure_7, "animate-always");
          } else {
            tmp5 = closure_1_9;
            withSpringResult = closure_1_9.get();
          }
          items = [,];
          items[0] = { translateX: withSpringResult };
          if (obj2.get()) {
            tmpResult1 = tmp(tmp2[18]);
            tmp11 = closure_1_10;
            value1 = closure_1_10.get();
            tmp13 = closure_7;
            str2 = "animate-never";
            if (obj2.get()) {
              str2 = "respect-motion-settings";
            }
            withSpringResult1 = tmpResult1.withSpring(value1, tmp13, str2);
          } else {
            tmp9 = closure_1_10;
            withSpringResult1 = closure_1_10.get();
          }
          size = {
            transform: items,
            opacity: withTimingResult,
            width: closure_0.get().width,
            height: closure_0.get().height,
          };
          items[1] = { translateY: withSpringResult1 };
          merged = Object.assign(closure_1_14);
          return size;
        }
      }
      obj1 = {
        withTiming: tmp6(4561).withTiming,
        wrapperOpacity: sharedValue2,
        timingFast: tmp6(4564).timingFast,
        animateWrapperTranslation: sharedValue3,
        withSpring: tmp6(4974).withSpring,
        wrapperTranslationX: sharedValue,
        MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,
        wrapperTranslationY: sharedValue1,
        wrapperDimensions,
        wrapperElevationStyles: maskEmptyElevation,
      };
      L.__closure = obj1;
      L.__workletHash = 11049335639852;
      L.__initData = __initData4;
      const animatedStyle1 = tmp6Result.useAnimatedStyle(L);
      closure_129_16 = animatedStyle1;
      const xl = tmp2(576).radii.xl;
      closure_129_17 = xl;
      tmp6Result = tmp6(4296);
      class B {
        constructor() {
          obj = { borderRadius: null };
          obj2 = closure_0(closure_2[18]);
          obj.borderRadius = obj2.withSpring(closure_1_17, BORDER_RADIUS_PHYSICS, "animate-always");
          merged = Object.assign(closure_1_15);
          return obj;
        }
      }
      obj2 = {
        withSpring: tmp6(4974).withSpring,
        borderRadius: xl,
        BORDER_RADIUS_PHYSICS,
        maskElevationStyles: maskElevation,
      };
      B.__closure = obj2;
      B.__workletHash = 7035830192327;
      B.__initData = __initData5;
      const animatedStyle2 = tmp6Result.useAnimatedStyle(B);
      closure_129_18 = animatedStyle2;
      let items = [animatedStyle1, ,];
      ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = tmp8);
      const items1 = [
        obj1.useMemo(() => {
          const items = [__initData3, ,];
          ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = mask);
          return items;
        }, items),
      ];
      const items2 = [animatedStyle2, tmp8.mask];
      items1[1] = obj1.useMemo(() => {
        const items = [__initData5, mask.mask];
        return items;
      }, items2);
      [tmp30, tmp31] = _slicedToArray(items1, 2);
      const tmp29 = _slicedToArray(items1, 2);
      const fn4 = function b() {
        return {
          flexDirection: "column",
          backgroundColor: closure_0.content.backgroundColor,
          borderTopStartRadius: 0,
          borderTopEndRadius: 0,
          top: 0,
          overflow: "hidden",
        };
      };
      const obj3 = { styles: tmp };
      fn4.__closure = obj3;
      fn4.__workletHash = 8557652955267;
      fn4.__initData = __initData7;
      const animatedStyle3 = tmp6(4296).useAnimatedStyle(fn4);
      const context1 = obj1.useContext(tmp2(17223));
      ({ wrapperOffset: wrapperOffset2, pipState: pipState2 } = context1);
      obj4 = { panGestureEnabled: true, mode: null, pipState: null, wrapperOffset: null };
      const tmp6Result1 = tmp6(4296);
      obj4.mode = tmp6(17021).MorphablePanelModes.PIP;
      obj4.pipState = pipState2;
      obj4.wrapperOffset = wrapperOffset2;
      const tmp2Result = tmp2(17021);
      obj5 = { children: null };
      obj6 = { style: animatedStyle, pointerEvents: "box-none", children: null };
      obj7 = { style: tmp30, children: null };
      const View = tmp2(4296).View;
      obj8 = { style: tmp31, children: null };
      const obj9 = { gesture: tmp2(17021)(obj4), children: null };
      const obj10 = { style: null, children: null };
      const items3 = [tmp.content, animatedStyle3];
      obj10.style = items3;
      obj10.children = jsx(tmp2(17225), {});
      obj9.children = jsx(tmp2(4296).View, { style: null, children: null });
      obj8.children = jsx(tmp6(6655).GestureDetector, { gesture: tmp2(17021)(obj4), children: null });
      obj7.children = jsx(tmp2(4296).View, { style: tmp31, children: null });
      class R {
        constructor() {
          obj = {
            mode: closure_1_5.get(),
            wrapperDimensions: closure_0.get(),
            pipAvoidanceSpecs: closure_1_7.get(),
            wrapperOffset: closure_1.get(),
            windowDimensions: closure_1_4,
            safeArea: closure_1_3,
            pipState: closure_1_6.get(),
          };
          return obj;
        }
      }
      obj5.children = jsx(tmp2(4296).View, { style: animatedStyle, pointerEvents: "box-none", children: null });
      return jsx(tmp6(7156).LayerScope, { children: null });
    }
  }
  maskEmptyElevation = tmp8.maskEmptyElevation;
}
