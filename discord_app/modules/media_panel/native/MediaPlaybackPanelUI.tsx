// discord_app/modules/media_panel/native/MediaPlaybackPanelUI.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import LegacyBaseButton from "../../../../_runtime/05450_LegacyBaseButton.js";
import LayerScope from "../../../design/components/Layers/native/LayerScope.native.tsx";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import cheapWorkletShallowEqual from "../../reanimated/native/cheapWorkletShallowEqual.tsx";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import MorphablePanelUtils from "../../panels/morphable/native/MorphablePanelUtils.tsx";
import useMorphablePanelGesture from "../../panels/morphable/native/useMorphablePanelGesture.tsx";
import MediaPlaybackPanelStateContextDefault from "MediaPlaybackPanelStateContext.tsx";
import MediaPlaybackPipDefault from "MediaPlaybackPip.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SafeAreaDisabledStore from "../../panels/morphable/native/SafeAreaDisabledStore.tsx";

const _modDef1652 = _mod1652;
const useMorphablePanelGestureDefault = useMorphablePanelGesture;

require = fn;
const useContext = fn(19).useContext;
const MediaPlaybackPanelConstants = fn(16655);
({ MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS: metroImportDefault, MediaPlaybackPanelModes: closure_8 } =
  MediaPlaybackPanelConstants);
const IS_IOS = fn(11382).IS_IOS;
const BORDER_RADIUS_PHYSICS = fn(11381).BORDER_RADIUS_PHYSICS;
const jsx = fn(21).jsx;
const createStyles = fn(5170);
const obj2 = {
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
let closure_12 = createStyles.createStyles(obj2);
let closure_13 = {
  code: "(function MediaPlaybackPanelUITsx1(){let[mode,windowDimensions,canShowPIP]=this.__closure;return{mode:mode.get(),windowDimensions:windowDimensions,canShowPIP:canShowPIP.get()};})",
};
let closure_14 = {
  code: "(function MediaPlaybackPanelUITsx2(props,previous){let[cheapWorkletShallowEqual,MediaPlaybackPanelModes,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:modeToSet,windowDimensions:windowDimensions,canShowPIP:canShowPIP}=props;switch(modeToSet){case MediaPlaybackPanelModes.PIP:{const{width:width,height:height}=canShowPIP?{width:120,height:120}:{width:0,height:0};updateSharedValueIfChanged(wrapperDimensions,{width:width,height:height});break;}case MediaPlaybackPanelModes.DISMISSED:updateSharedValueIfChanged(wrapperOffset,{y:windowDimensions.height});break;default:modeToSet;}})",
};
let closure_15 = {
  code: "(function MediaPlaybackPanelUITsx3(){let[mode,wrapperDimensions,pipAvoidanceSpecs,wrapperOffset,windowDimensions,safeArea,pipState]=this.__closure;return{mode:mode.get(),wrapperDimensions:wrapperDimensions.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),wrapperOffset:wrapperOffset.get(),windowDimensions:windowDimensions,safeArea:safeArea,pipState:pipState.get()};})",
};
let closure_16 = {
  code: "(function MediaPlaybackPanelUITsx4(props,previous){let[cheapWorkletShallowEqual,MediaPlaybackPanelModes,getClampedPIPPosition,safeArea,disableHorizontalSafeAreas,wrapperOpacity,animateWrapperTranslation,wrapperTranslationX,wrapperTranslationY]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,wrapperDimensions:wrapperDimensions,pipAvoidanceSpecs:pipAvoidanceSpecs,wrapperOffset:wrapperOffset,windowDimensions:windowDimensions,pipState:pipState}=props;let x=0;let y=0;const{gestureActive:gestureActive}=wrapperOffset;const{x:pipX,y:pipY}=pipState;switch(mode){case MediaPlaybackPanelModes.PIP:{const clampedPosition=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:120,height:120,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.bottom,topAvoidanceRegion:pipAvoidanceSpecs.top,positionOffset:gestureActive?wrapperOffset:undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});x=clampedPosition.x;y=clampedPosition.y;wrapperOpacity.set(1);break;}case MediaPlaybackPanelModes.DISMISSED:{y=wrapperDimensions.height;wrapperOpacity.set(0);break;}}const previousPIPState=previous===null||previous===void 0?void 0:previous.pipState;const pipPositionChanged=pipX!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.x)||pipY!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.y);const shouldAnimateForPIP=mode===MediaPlaybackPanelModes.PIP&&pipPositionChanged&&!wrapperOffset.gestureActive;animateWrapperTranslation.set(shouldAnimateForPIP||mode!==MediaPlaybackPanelModes.PIP);wrapperTranslationX.set(x);wrapperTranslationY.set(y);})",
};
let closure_17 = {
  code: "(function MediaPlaybackPanelUITsx5(){let[withTiming,wrapperOpacity,timingFast,animateWrapperTranslation,withSpring,wrapperTranslationX,MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,wrapperTranslationY,wrapperDimensions,wrapperElevationStyles]=this.__closure;const opacity=withTiming(wrapperOpacity.get(),timingFast,'respect-motion-settings');return{transform:[{translateX:animateWrapperTranslation.get()?withSpring(wrapperTranslationX.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,'animate-always'):wrapperTranslationX.get()},{translateY:animateWrapperTranslation.get()?withSpring(wrapperTranslationY.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,animateWrapperTranslation.get()?'respect-motion-settings':'animate-never'):wrapperTranslationY.get()}],opacity:opacity,width:wrapperDimensions.get().width,height:wrapperDimensions.get().height,...wrapperElevationStyles};})",
};
let closure_18 = {
  code: "(function MediaPlaybackPanelUITsx6(){let[withSpring,borderRadius,BORDER_RADIUS_PHYSICS,maskElevationStyles]=this.__closure;return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS,'animate-always'),...maskElevationStyles};})",
};
let closure_19 = {
  code: "(function MediaPlaybackPanelUITsx7(){let[windowDimensions]=this.__closure;const{height:height,width:width}=windowDimensions;return{position:'absolute',top:0,left:0,width:width,height:height,overflow:'hidden'};})",
};
let closure_20 = {
  code: "(function MediaPlaybackPanelUITsx8(){let[styles]=this.__closure;const topBorderRadius=0;const top=0;return{flexDirection:'column',backgroundColor:styles.content.backgroundColor,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius,top:top,overflow:'hidden'};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelUI.tsx");

export default function MediaPlaybackPanelUI() {
  let tmp2 = closure_12();
  const tmp5 = useWindowDimensionsDefault();
  ({ wrapperDimensions, wrapperOffset } = useContext(MediaPlaybackPanelStateContextDefault));
  const tmp6 = useContext(MediaPlaybackPanelStateContextDefault);
  items = [closure_19, tmp5];
  c0 = undefined;
  [tmp8, tmp9] = items;
  class MediaPlaybackPanelUITsx7 {
    constructor() {
      size = {
        position: "absolute",
        top: 0,
        left: 0,
        width: closure_0.width,
        height: closure_0.height,
        overflow: "hidden",
      };
      return size;
    }
  }
  const items1 = [tmp9];
  MediaPlaybackPanelUITsx7.__closure = items1;
  MediaPlaybackPanelUITsx7.__workletHash = 14613297430420;
  MediaPlaybackPanelUITsx7.__initData = tmp8;
  const animatedStyle = _mod1652.useAnimatedStyle(MediaPlaybackPanelUITsx7);
  const tmpResult = closure_12();
  const tmp12 = useSafeAreaInsetsDefault();
  const tmp13 = useWindowDimensionsDefault();
  const context = noop.useContext(MediaPlaybackPanelStateContextDefault);
  ({ mode, pipState, pipAvoidanceSpecs, canShowPIP } = context);
  const items2 = [closure_13, mode, tmp13, canShowPIP];
  c0 = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  [tmp15, tmp16, tmp17, tmp18] = items2;
  class MediaPlaybackPanelUITsx1 {
    constructor() {
      obj = { mode: closure_0.get(), windowDimensions: closure_1, canShowPIP: closure_2.get() };
      return obj;
    }
  }
  const items3 = [tmp16, tmp17, tmp18];
  MediaPlaybackPanelUITsx1.__closure = items3;
  MediaPlaybackPanelUITsx1.__workletHash = 15013094532527;
  MediaPlaybackPanelUITsx1.__initData = tmp15;
  const items4 = [
    closure_14,
    cheapWorkletShallowEqual.cheapWorkletShallowEqual,
    React5,
    updateSharedValueIfChangedDefault,
    wrapperDimensions,
    wrapperOffset,
  ];
  c0 = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items4;
  class MediaPlaybackPanelUITsx2 {
    constructor(arg0, arg1) {
      tmp = arg1;
      tmp2 = closure_0;
      if (!tmp2(arg0, tmp)) {
        mode = arg0.mode;
        if (closure_1.PIP === mode) {
          tmp8 = arg0.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 };
          tmp9 = closure_2;
          tmp10 = closure_3;
          size = { width: null, height: null };
          ({ width: obj2.width, height: obj2.height } = tmp8);
          tmp11 = closure_2(closure_3, size);
        } else if (tmp4.DISMISSED === mode) {
          tmp5 = closure_2;
          tmp6 = closure_4;
          obj = { y: null };
          obj.y = tmp3.height;
          tmp7 = closure_2(closure_4, obj);
        }
      }
      return;
    }
  }
  const items5 = [tmp21, tmp22, tmp23, tmp24, tmp25];
  MediaPlaybackPanelUITsx2.__closure = items5;
  MediaPlaybackPanelUITsx2.__workletHash = 13340145341918;
  MediaPlaybackPanelUITsx2.__initData = tmp20;
  const animatedReaction = _mod1652.useAnimatedReaction(MediaPlaybackPanelUITsx1, MediaPlaybackPanelUITsx2);
  let tmp7Result = _mod1652;
  const sharedValue = _mod1652.useSharedValue(0);
  const tmp7Result9 = _mod1652;
  const sharedValue1 = _mod1652.useSharedValue(0);
  const tmp7Result10 = _mod1652;
  const sharedValue2 = _mod1652.useSharedValue(0);
  const tmp7Result11 = _mod1652;
  const sharedValue3 = _mod1652.useSharedValue(false);
  const tmp7Result12 = _mod1652;
  const tmp31 = SafeAreaDisabledStore((shouldDisableSafeAreas) => shouldDisableSafeAreas.shouldDisableSafeAreas());
  const items6 = [closure_15, mode, wrapperDimensions, pipAvoidanceSpecs, wrapperOffset, tmp13, tmp12, pipState];
  c0 = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39] = items6;
  class MediaPlaybackPanelUITsx3 {
    constructor() {
      obj = {
        mode: closure_0.get(),
        wrapperDimensions: closure_1.get(),
        pipAvoidanceSpecs: closure_2.get(),
        wrapperOffset: closure_3.get(),
        windowDimensions: closure_4,
        safeArea: closure_5,
        pipState: closure_6.get(),
      };
      return obj;
    }
  }
  const items7 = [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39];
  MediaPlaybackPanelUITsx3.__closure = items7;
  MediaPlaybackPanelUITsx3.__workletHash = 7830339562823;
  MediaPlaybackPanelUITsx3.__initData = tmp32;
  const items8 = [
    closure_16,
    cheapWorkletShallowEqual.cheapWorkletShallowEqual,
    React5,
    MorphablePanelUtils.getClampedPIPPosition,
    tmp12,
    tmp31,
    sharedValue2,
    sharedValue3,
    sharedValue,
    sharedValue1,
  ];
  c0 = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49] = items8;
  class MediaPlaybackPanelUITsx4 {
    constructor(arg0, arg1) {
      tmp2 = arg1;
      tmp = closure_0;
      if (!tmp(arg0, tmp2)) {
        ({ mode, pipAvoidanceSpecs, wrapperOffset, pipState } = arg0);
        ({ x, y } = pipState);
        tmp6 = closure_1;
        if (closure_1.PIP === mode) {
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
          size.windowDimensions = tmp4;
          tmp8 = closure_3;
          size.safeArea = closure_3;
          ({ bottom: obj.bottomAvoidanceRegion, top: obj.topAvoidanceRegion } = pipAvoidanceSpecs);
          tmp9 = undefined;
          tmp7 = closure_2;
          if (tmp5) {
            tmp9 = wrapperOffset;
          }
          size.positionOffset = tmp9;
          tmp10 = closure_4;
          size.disableHorizontalSafeAreas = closure_4;
          tmp7Result = tmp7(size);
          ({ x: x2, y: y2 } = tmp7Result);
          tmp12 = closure_5;
          num2 = 1;
          result = closure_5.set(1);
        } else {
          num = 0;
          y2 = 0;
          x2 = 0;
          if (tmp6.DISMISSED === mode) {
            y2 = tmp3.height;
            tmp25 = closure_5;
            result1 = closure_5.set(0);
            x2 = 0;
          }
        }
        pipState1 = undefined;
        if (arg1 != null) {
          pipState1 = arg1.pipState;
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
        tmp18 = mode === tmp6.PIP && tmp16 && !wrapperOffset.gestureActive;
        tmp19 = closure_6;
        if (!tmp18) {
          tmp18 = mode !== tmp6.PIP;
        }
        result2 = closure_6.set(tmp18);
        tmp21 = closure_7;
        result3 = closure_7.set(x2);
        tmp23 = closure_8;
        result4 = closure_8.set(y2);
      }
      return;
    }
  }
  const items9 = [tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49];
  MediaPlaybackPanelUITsx4.__closure = items9;
  MediaPlaybackPanelUITsx4.__workletHash = 13851512553920;
  MediaPlaybackPanelUITsx4.__initData = tmp40;
  const animatedReaction1 = _mod1652.useAnimatedReaction(MediaPlaybackPanelUITsx3, MediaPlaybackPanelUITsx4);
  if (mode.get() === React5.PIP) {
    if (IS_IOS) {
      let maskEmptyElevation = tmpResult.maskElevation;
    }
    if (mode.get() === React5.PIP) {
      if (!IS_IOS) {
        let maskEmptyElevation2 = tmpResult.maskElevation;
      }
      const items10 = [
        closure_17,
        timing_timing.withTiming,
        sharedValue2,
        timingPresets.timingFast,
        sharedValue3,
        spring_spring.withSpring,
        sharedValue,
        metroImportDefault,
        sharedValue1,
        wrapperDimensions,
        maskEmptyElevation,
      ];
      c0 = undefined;
      class MediaPlaybackPanelUITsx7 {
        constructor() {
          size = {
            position: "absolute",
            top: 0,
            left: 0,
            width: closure_0.width,
            height: closure_0.height,
            overflow: "hidden",
          };
          return size;
        }
      }
      dependencyMap = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66] = items10;
      class MediaPlaybackPanelUITsx5 {
        constructor() {
          obj = closure_3;
          tmp = closure_0(closure_1.get(), closure_2, "respect-motion-settings");
          if (closure_3.get()) {
            tmp4 = closure_4;
            tmp5 = closure_5;
            tmp6 = closure_6;
            str = "animate-always";
            value = closure_4(closure_5.get(), closure_6, "animate-always");
          } else {
            tmp2 = closure_5;
            value = closure_5.get();
          }
          items = [,];
          items[0] = { translateX: value };
          if (obj.get()) {
            tmp10 = closure_7;
            tmp9 = closure_4;
            value1 = closure_7.get();
            tmp12 = closure_6;
            str2 = "animate-never";
            if (obj.get()) {
              str2 = "respect-motion-settings";
            }
            tmp9Result = tmp9(value1, tmp12, str2);
          } else {
            tmp7 = closure_7;
            tmp9Result = closure_7.get();
          }
          size = { transform: items, opacity: tmp, width: closure_8.get().width, height: closure_8.get().height };
          items[1] = { translateY: tmp9Result };
          merged = Object.assign(closure_9);
          return size;
        }
      }
      const items11 = [tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66];
      MediaPlaybackPanelUITsx5.__closure = items11;
      MediaPlaybackPanelUITsx5.__workletHash = 9950483941301;
      MediaPlaybackPanelUITsx5.__initData = tmp56;
      const animatedStyle1 = _mod1652.useAnimatedStyle(MediaPlaybackPanelUITsx5);
      c1 = animatedStyle1;
      _mod1652;
      const items12 = [closure_18, , , ,];
      class MediaPlaybackPanelUITsx1 {
        constructor() {
          obj = { mode: closure_0.get(), windowDimensions: closure_1, canShowPIP: closure_2.get() };
          return obj;
        }
      }
      items12[1] = spring_spring.withSpring;
      items12[2] = nativeDefault.radii.xl;
      items12[3] = BORDER_RADIUS_PHYSICS;
      items12[4] = maskEmptyElevation2;
      c0 = undefined;
      c1 = undefined;
      dependencyMap = undefined;
      c3 = undefined;
      [tmp73, tmp74, tmp75, tmp76, tmp77] = items12;
      class MediaPlaybackPanelUITsx6 {
        constructor() {
          obj = { borderRadius: closure_0(closure_1, closure_2, "animate-always") };
          merged = Object.assign(closure_3);
          return obj;
        }
      }
      const items13 = [tmp74, tmp75, tmp76, tmp77];
      MediaPlaybackPanelUITsx6.__closure = items13;
      MediaPlaybackPanelUITsx6.__workletHash = 12576524992190;
      MediaPlaybackPanelUITsx6.__initData = tmp73;
      const tmp69Result = tmp69(MediaPlaybackPanelUITsx6);
      dependencyMap = tmp69Result;
      const items14 = [animatedStyle1, ,];
      class MediaPlaybackPanelUITsx2 {
        constructor(arg0, arg1) {
          tmp = arg1;
          tmp2 = closure_0;
          if (!tmp2(arg0, tmp)) {
            mode = arg0.mode;
            if (closure_1.PIP === mode) {
              tmp8 = arg0.canShowPIP ? { width: 120, height: 120 } : { width: 0, height: 0 };
              tmp9 = closure_2;
              tmp10 = closure_3;
              size = { width: null, height: null };
              ({ width: obj2.width, height: obj2.height } = tmp8);
              tmp11 = closure_2(closure_3, size);
            } else if (tmp4.DISMISSED === mode) {
              tmp5 = closure_2;
              tmp6 = closure_4;
              obj = { y: null };
              obj.y = tmp3.height;
              tmp7 = closure_2(closure_4, obj);
            }
          }
          return;
        }
      }
      items14[2] = tmpResult.wrapperAnimationPresets;
      const items15 = [
        noop.useMemo(() => {
          items = [c1, ,];
          ({ wrapper: arr[1], wrapperAnimationPresets: arr[2] } = c0);
          return items;
        }, items14),
      ];
      const items16 = [tmp69Result, tmpResult.mask];
      items15[1] = noop.useMemo(() => {
        items = [closure_2, _undefined.mask];
        return items;
      }, items16);
      const tmp7Result14 = _mod1652;
      [tmp81, tmp82] = items15;
      const tmp80 = _slicedToArray(items15, 2);
      const items17 = [closure_20, tmp2];
      c0 = undefined;
      [tmp85, tmp86] = items17;
      class MediaPlaybackPanelUITsx8 {
        constructor() {
          obj = {
            flexDirection: "column",
            backgroundColor: closure_0.content.backgroundColor,
            borderTopStartRadius: 0,
            borderTopEndRadius: 0,
            top: 0,
            overflow: "hidden",
          };
          return obj;
        }
      }
      const items18 = [tmp86];
      MediaPlaybackPanelUITsx8.__closure = items18;
      MediaPlaybackPanelUITsx8.__workletHash = 3864933015194;
      MediaPlaybackPanelUITsx8.__initData = tmp85;
      const animatedStyle2 = _mod1652.useAnimatedStyle(MediaPlaybackPanelUITsx8);
      const context1 = noop.useContext(MediaPlaybackPanelStateContextDefault);
      ({ wrapperOffset: wrapperOffset2, pipState: pipState2 } = context1);
      const obj3 = { panGestureEnabled: true, mode: null, pipState: null, wrapperOffset: null };
      const tmp7Result16 = _mod1652;
      obj3.mode = useMorphablePanelGesture.MorphablePanelModes.PIP;
      obj3.pipState = pipState2;
      obj3.wrapperOffset = wrapperOffset2;
      const tmp3Result = useMorphablePanelGestureDefault;
      const obj4 = { children: null };
      const obj5 = { style: animatedStyle, pointerEvents: "box-none", children: null };
      class MediaPlaybackPanelUITsx3 {
        constructor() {
          obj = {
            mode: closure_0.get(),
            wrapperDimensions: closure_1.get(),
            pipAvoidanceSpecs: closure_2.get(),
            wrapperOffset: closure_3.get(),
            windowDimensions: closure_4,
            safeArea: closure_5,
            pipState: closure_6.get(),
          };
          return obj;
        }
      }
      const obj6 = { style: tmp81, children: null };
      const obj7 = { style: tmp82, children: null };
      const obj8 = { gesture: useMorphablePanelGestureDefault(obj3), children: null };
      const obj9 = { style: null, children: null };
      const items19 = [tmp2.content, animatedStyle2];
      obj9.style = items19;
      obj9.children = jsx(MediaPlaybackPipDefault, {});
      obj8.children = jsx(_modDef1652.View, { style: null, children: null });
      obj7.children = jsx(LegacyBaseButton.GestureDetector, {
        gesture: useMorphablePanelGestureDefault(obj3),
        children: null,
      });
      obj6.children = jsx(_modDef1652.View, { style: tmp82, children: null });
      obj5.children = jsx(_modDef1652.View, { style: tmp81, children: null });
      obj4.children = (
        <tmp92 style={animatedStyle} pointerEvents="box-none">
          {null}
        </tmp92>
      );
      return jsx(LayerScope.LayerScope, { children: null });
    }
    maskEmptyElevation2 = tmpResult.maskEmptyElevation;
  }
  maskEmptyElevation = tmpResult.maskEmptyElevation;
  const tmp7Result13 = _mod1652;
}
