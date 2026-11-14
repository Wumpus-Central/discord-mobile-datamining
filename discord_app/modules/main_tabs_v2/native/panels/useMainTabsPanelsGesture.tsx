// discord_app/modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx
import PlatformUtils2 from "../../../../utils/PlatformUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _mod1708 from "../../../../../_runtime/metro/01708__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import LegacyBaseButton from "../../../../../_runtime/05598_LegacyBaseButton.js";
import useLaunchPadTypeDefault from "../../../launchpad/native/useLaunchPadType.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const LaunchPadGestureRefContextDefault = tmp(18720);
require = fn;
const LaunchPadTypes = fn(12402).LaunchPadTypes;
let PlatformUtils = fn(1380);
PlatformUtils = PlatformUtils.isAndroid();
const PanelsConfig = fn(18719);
let closure_6 = PlatformUtils
  ? PanelsConfig.ANDROID_PANELS_ANIMATION_CONFIG
  : PanelsConfig.DEFAULT_PANELS_ANIMATION_CONFIG;
let closure_7 = {
  code: "(function useMainTabsPanelsGestureTsx1(width){let[isDragging,translateX,IS_ANDROID,withTiming,timingInstant,isFoldChange,timingStandard]=this.__closure;if(isDragging.get())return;if(translateX.get()===0)return;if(IS_ANDROID){translateX.set(withTiming(width,timingInstant,'animate-always'));}else{translateX.set(isFoldChange?withTiming(width,timingStandard,'respect-motion-settings'):width);}})",
};
let closure_8 = {
  code: "(function handleAnimationFinish_useMainTabsPanelsGestureTsx2(finished){let[onVisibilityChange,scheduleOnRN,show]=this.__closure;if(!finished)return;if(onVisibilityChange!=null){scheduleOnRN(onVisibilityChange,show);}})",
};
let closure_9 = {
  code: "(function useMainTabsPanelsGestureTsx3(show,isFling,velocity,force){let[translateX,width,onVisibilityChange,scheduleOnRN,onPreMovement,panelsConfig,_worklet_7013338449266_init_data,isTimingConfig,withTiming,withSpring]=this.__closure;if(!force&&translateX.get()!==0&&translateX.get()!==width){return false;}const targetTranslationX=show?0:width;if(translateX.get()===targetTranslationX){if(onVisibilityChange!=null){scheduleOnRN(onVisibilityChange,show);}return false;}if(onPreMovement!=null){scheduleOnRN(onPreMovement,show);}const animationConfig=show?isFling?panelsConfig.swipeSidePanelOpen:panelsConfig.nonSwipeSidePanelOpen:isFling?panelsConfig.swipeSidePanelClose:panelsConfig.nonSwipeSidePanelClose;const handleAnimationFinish=function handleAnimationFinish_useMainTabsPanelsGestureTsx2Factory([_worklet_7013338449266_init_data,onVisibilityChange,scheduleOnRN,show]){const handleAnimationFinish=function(finished){if(!finished)return;if(onVisibilityChange!=null){scheduleOnRN(onVisibilityChange,show);}};handleAnimationFinish.__closure=[onVisibilityChange,scheduleOnRN,show];handleAnimationFinish.__workletHash=7013338449266;handleAnimationFinish.__initData=_worklet_7013338449266_init_data;return handleAnimationFinish;}([_worklet_7013338449266_init_data,onVisibilityChange,scheduleOnRN,show]);translateX.set(isTimingConfig(animationConfig)?withTiming(targetTranslationX,animationConfig,'respect-motion-settings',handleAnimationFinish):withSpring(targetTranslationX,{...animationConfig,velocity:velocity},'respect-motion-settings',handleAnimationFinish));return true;})",
};
let closure_10 = {
  code: "(function useMainTabsPanelsGestureTsx4(){let[disallowGesture]=this.__closure;return disallowGesture.get();})",
};
let closure_11 = {
  code: "(function useMainTabsPanelsGestureTsx5(currentDisallow,previousDisallow){let[didJustAllowGesture]=this.__closure;if(currentDisallow===previousDisallow)return;if(currentDisallow)return;didJustAllowGesture.set(true);})",
};
let closure_12 = {
  code: "(function useMainTabsPanelsGestureTsx6(event,manager){let[edgeSwipeOnly,translateX,insets,EDGE_SWIPE_WIDTH,startPosition]=this.__closure;const touch=event.allTouches[0];if(touch==null)return;if(edgeSwipeOnly.get()&&translateX.get()===0&&touch.x>insets.left+EDGE_SWIPE_WIDTH){manager.fail();return;}startPosition.set({x:touch.x,y:touch.y});})",
};
let closure_13 = {
  code: "(function useMainTabsPanelsGestureTsx7(event,manager){let[State,startPosition,GESTURE_MIN_DISTANCE,disallowGesture,translateX,cancelOnSwipeRightFromStart,width,launchPadType,LaunchPadTypes,windowWidth,LAUNCHPAD_GESTURE_INSET]=this.__closure;if(event.state!==State.BEGAN)return;const touch=event.allTouches[0];if(touch==null)return;const xDiff=touch.x-startPosition.get().x;const xDiffAbs=Math.abs(xDiff);if(xDiffAbs<=GESTURE_MIN_DISTANCE)return;if(disallowGesture.get()){return;}const yDiffAbs=Math.abs(touch.y-startPosition.get().y);if(xDiffAbs<=yDiffAbs||xDiffAbs*xDiffAbs+yDiffAbs*yDiffAbs<GESTURE_MIN_DISTANCE*GESTURE_MIN_DISTANCE){return;}if(xDiff<=0){if(translateX.get()===0){manager.fail();return;}}else{if(cancelOnSwipeRightFromStart===true&&translateX.get()>=width){manager.fail();return;}}const isGestureBasedLaunchPad=launchPadType===LaunchPadTypes.GESTURE_EDGE||launchPadType===LaunchPadTypes.GESTURE_FULL;if(isGestureBasedLaunchPad&&xDiff<0){const launchpadGestureEdge=windowWidth-LAUNCHPAD_GESTURE_INSET;if(launchPadType===LaunchPadTypes.GESTURE_FULL&&startPosition.get().x<launchpadGestureEdge||launchPadType===LaunchPadTypes.GESTURE_EDGE&&startPosition.get().x>=launchpadGestureEdge){manager.fail();return;}}manager.activate();})",
};
let closure_14 = {
  code: "(function useMainTabsPanelsGestureTsx8(){let[isDragging,scheduleOnRN,setIsDraggingRef,onDragStart]=this.__closure;isDragging.set(true);scheduleOnRN(setIsDraggingRef,true);if(onDragStart!=null){scheduleOnRN(onDragStart);}})",
};
let closure_15 = {
  code: "(function useMainTabsPanelsGestureTsx9(e){let[disallowGesture,translateX,width,didJustAllowGesture]=this.__closure;if(disallowGesture.get()){const currentTranslateX=translateX.get();if(currentTranslateX===0||currentTranslateX===width){return;}translateX.set(0);return;}translateX.set(Math.max(0,Math.min(width,translateX.get()+e.changeX)));didJustAllowGesture.set(false);})",
};
let closure_16 = {
  code: "(function useMainTabsPanelsGestureTsx10(e){let[isDragging,disallowGesture,didJustAllowGesture,scheduleOnRN,setIsDraggingRef,panelsConfig,movePanel,translateX,width]=this.__closure;try{if(!isDragging.get()||disallowGesture.get()||didJustAllowGesture.get()){return;}}finally{isDragging.set(false);didJustAllowGesture.set(false);scheduleOnRN(setIsDraggingRef,false);}if(Math.abs(e.velocityX)>panelsConfig.minFlingVelocityX){movePanel(e.velocityX<0,true,e.velocityX,true);}else{movePanel(translateX.get()<width/2,false,e.velocityX,true);}})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx");

export default function useMainTabsPanelsGesture(canDrag) {
  canDrag = canDrag.canDrag;
  _require = canDrag;
  ({ onVisibilityChange, onDragStart } = canDrag);
  importDefault = onDragStart;
  ({ onPreMovement, openWidth, foldSeam } = canDrag);
  if (foldSeam === undefined) {
    foldSeam = null;
  }
  dependencyMap = foldSeam;
  const cancelOnSwipeRightFromStart = canDrag.cancelOnSwipeRightFromStart;
  noop = cancelOnSwipeRightFromStart;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let callback;
  let sharedValue2;
  let sharedValue3;
  let ref;
  let callback1;
  let sharedValue4;
  let sharedValue5;
  let context;
  let memo;
  const tmp3 = useLaunchPadTypeDefault();
  c4 = tmp3;
  const tmp4 = useSafeAreaInsetsDefault();
  c5 = tmp4;
  const width = useWindowDimensionsDefault().width;
  c6 = width;
  if (openWidth == null) {
    openWidth = width;
  }
  c7 = openWidth;
  let num = 0;
  if (!canDrag.startShown) {
    num = openWidth;
  }
  const sharedValue = require("../../../../../_runtime/metro/01655__.js").useSharedValue(num);
  c8 = sharedValue;
  const obj = require("../../../../../_runtime/metro/01655__.js");
  const sharedValue1 = require("../../../../../_runtime/metro/01655__.js").useSharedValue(false);
  c9 = sharedValue1;
  ref = noop.useRef(false);
  items = [ref];
  callback = noop.useCallback((current) => {
    ref.current = current;
  }, items);
  const tmp5Result = require("../../../../../_runtime/metro/01655__.js");
  sharedValue2 = require("../../../../../_runtime/metro/01655__.js").useSharedValue(false);
  const tmp5Result6 = require("../../../../../_runtime/metro/01655__.js");
  sharedValue3 = require("../../../../../_runtime/metro/01655__.js").useSharedValue(false);
  ref = noop.useRef(foldSeam);
  let items1 = [foldSeam, sharedValue1, sharedValue, openWidth];
  const effect = noop.useEffect(() => {
    ref.current = current;
    items = [
      closure_7,
      c9,
      c8,
      PlatformUtils,
      timing_timing.withTiming,
      timingPresets.timingInstant,
      ref.current !== current,
      timingPresets.timingStandard,
    ];
    c0 = undefined;
    c1 = undefined;
    current = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
    function useMainTabsPanelsGestureTsx1(arg0) {
      if (!_undefined.get()) {
        if (0 !== _undefined2.get()) {
          if (c2) {
            const result = set(_undefined3(arg0, c4, "animate-always"));
          } else {
            let tmp5 = arg0;
            if (c5) {
              tmp5 = _undefined3(arg0, c6, "respect-motion-settings");
            }
            const result1 = set(tmp5);
          }
        }
      }
    }
    const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8];
    useMainTabsPanelsGestureTsx1.__closure = items1;
    useMainTabsPanelsGestureTsx1.__workletHash = 6120850630646;
    useMainTabsPanelsGestureTsx1.__initData = tmp;
    _mod1708.scheduleOnUI(useMainTabsPanelsGestureTsx1, c7);
  }, items1);
  let items2 = [
    c9,
    sharedValue,
    openWidth,
    onVisibilityChange,
    require("../../../../../_runtime/metro/01708__.js").scheduleOnRN,
    onPreMovement,
    c6,
    c8,
    require("PanelsConfig").isTimingConfig,
    require("timing/timing").withTiming,
    require("spring/spring").withSpring,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items2;
  function useMainTabsPanelsGestureTsx3(arg0, arg1, velocity, arg3) {
    if (!arg3) {
      if (0 !== _undefined.get()) {
        if (_undefined.get() !== c1) {
          return false;
        }
      }
    }
    let num2 = 0;
    if (!arg0) {
      num2 = c1;
    }
    if (_undefined.get() === num2) {
      if (null != c2) {
        _undefined2(tmp31, arg0);
      }
      return false;
    } else {
      if (null != c4) {
        _undefined2(tmp35, arg0);
      }
      if (!arg0) {
        const tmp6 = arg1 ? _undefined3.swipeSidePanelClose : _undefined3.nonSwipeSidePanelClose;
        items = [c6, c2, _undefined2, arg0];
        [tmp12, tmp13, tmp14, tmp15] = items;
        function handleAnimationFinish(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = null != _undefined;
          }
          if (tmp) {
            closure_1_1(_undefined, current);
          }
        }
        const items1 = [tmp13, tmp14, tmp15];
        handleAnimationFinish.__closure = items1;
        handleAnimationFinish.__workletHash = 7013338449266;
        handleAnimationFinish.__initData = tmp12;
        if (_undefined4(tmp6)) {
          let tmp25 = translateX(num2, tmp6, "respect-motion-settings", handleAnimationFinish);
        } else {
          const obj3 = {};
          const merged = Object.assign(tmp6);
          obj3.velocity = velocity;
          tmp25 = _undefined5(num2, obj3, "respect-motion-settings", handleAnimationFinish);
        }
        const result = _undefined.set(tmp25);
        return true;
      }
    }
  }
  let items3 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
  useMainTabsPanelsGestureTsx3.__closure = items3;
  useMainTabsPanelsGestureTsx3.__workletHash = 9203875723416;
  useMainTabsPanelsGestureTsx3.__initData = tmp13;
  let items4 = [onVisibilityChange, onPreMovement, sharedValue, openWidth];
  callback1 = noop.useCallback(useMainTabsPanelsGestureTsx3, items4);
  const tmp5Result7 = require("../../../../../_runtime/metro/01655__.js");
  sharedValue4 = require("../../../../../_runtime/metro/01655__.js").useSharedValue(false);
  const tmp5Result8 = require("../../../../../_runtime/metro/01655__.js");
  let items5 = [ref, sharedValue2];
  [tmp26, tmp27] = items5;
  function useMainTabsPanelsGestureTsx4() {
    return _undefined.get();
  }
  let items6 = [tmp27];
  useMainTabsPanelsGestureTsx4.__closure = items6;
  useMainTabsPanelsGestureTsx4.__workletHash = 12109375653834;
  useMainTabsPanelsGestureTsx4.__initData = tmp26;
  let items7 = [callback, sharedValue4];
  _require = undefined;
  [tmp28, tmp29] = items7;
  function useMainTabsPanelsGestureTsx5(arg0, arg1) {
    if (arg0 !== arg1) {
      if (!arg0) {
        const result = _undefined.set(true);
      }
    }
  }
  let items8 = [tmp29];
  useMainTabsPanelsGestureTsx5.__closure = items8;
  useMainTabsPanelsGestureTsx5.__workletHash = 10653285139228;
  useMainTabsPanelsGestureTsx5.__initData = tmp28;
  const animatedReaction = require("../../../../../_runtime/metro/01655__.js").useAnimatedReaction(
    useMainTabsPanelsGestureTsx4,
    useMainTabsPanelsGestureTsx5,
  );
  const tmp5Result9 = require("../../../../../_runtime/metro/01655__.js");
  sharedValue5 = require("../../../../../_runtime/metro/01655__.js").useSharedValue({ x: 0, y: 0 });
  context = obj3.useContext(LaunchPadGestureRefContextDefault);
  let items9 = [
    tmp4,
    sharedValue,
    openWidth,
    width,
    sharedValue1,
    callback1,
    onDragStart,
    canDrag,
    sharedValue5,
    tmp3,
    cancelOnSwipeRightFromStart,
    sharedValue2,
    sharedValue3,
    callback,
    context,
    sharedValue4,
  ];
  memo = obj3.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    let result = Gesture.Pan().enabled(c0).requireExternalGestureToFail(context);
    const enabledResult = Gesture.Pan().enabled(c0);
    const rect = {
      top: -_undefined3.top,
      left: -_undefined3.left,
      bottom: -_undefined3.bottom,
      right: -_undefined3.right,
    };
    const manualActivationResult = result.manualActivation(PlatformUtils2.isAndroid());
    items = [closure_12, sharedValue3, c8, _undefined3, 24, sharedValue5];
    c3 = undefined;
    c4 = undefined;
    [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
    function useMainTabsPanelsGestureTsx6(arg0, fail) {
      const first = arg0.allTouches[0];
      if (null != first) {
        if (_undefined.get()) {
          if (0 === _undefined2.get()) {
            if (first.x > _undefined3.left + c3) {
              fail.fail();
            }
          }
        }
        const point = { x: null, y: null };
        ({ x: obj.x, y: obj.y } = first);
        const result = _undefined5.set(point);
      }
    }
    const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
    useMainTabsPanelsGestureTsx6.__closure = items1;
    useMainTabsPanelsGestureTsx6.__workletHash = 4480021236652;
    useMainTabsPanelsGestureTsx6.__initData = tmp5;
    const hitSlopResult = result.manualActivation(PlatformUtils2.isAndroid()).hitSlop(rect);
    const items2 = [
      closure_13,
      LegacyBaseButton.State,
      sharedValue5,
      12,
      sharedValue2,
      c8,
      c3,
      c7,
      c4,
      LaunchPadTypes,
      c6,
      48,
    ];
    c1 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items2;
    function useMainTabsPanelsGestureTsx7(state, fail) {
      if (state.state === _undefined.BEGAN) {
        const point = state.allTouches[0];
        if (null != point) {
          const diff = point.x - _undefined2.get().x;
          const _Math2 = Math;
          const absolute = Math.abs(diff);
          if (absolute > c2) {
            if (!_undefined4.get()) {
              const _Math = Math;
              const absolute1 = Math.abs(point.y - _undefined2.get().y);
              if (absolute > absolute1) {
                if (absolute * absolute + absolute1 * absolute1 >= c2 * c2) {
                  if (diff <= 0) {
                    if (0 === _undefined5.get()) {
                      fail.fail();
                    }
                  } else if (true === c5) {
                    if (_undefined5.get() >= c6) {
                      fail.fail();
                    }
                  }
                  if (c7 === _undefined9.GESTURE_EDGE) {
                    if (diff < 0) {
                      const diff1 = c9 - c10;
                      fail.fail();
                    }
                  }
                  fail.activate();
                }
              }
            }
          }
        }
      }
    }
    const items3 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24];
    useMainTabsPanelsGestureTsx7.__closure = items3;
    useMainTabsPanelsGestureTsx7.__workletHash = 6803230960781;
    useMainTabsPanelsGestureTsx7.__initData = tmp13;
    const onTouchesDownResult = result
      .manualActivation(PlatformUtils2.isAndroid())
      .hitSlop(rect)
      .onTouchesDown(useMainTabsPanelsGestureTsx6);
    const items4 = [closure_14, c9, _mod1708.scheduleOnRN, callback, c1];
    [tmp27, tmp28, tmp29, tmp30, tmp31] = items4;
    function useMainTabsPanelsGestureTsx8() {
      const result = _undefined.set(true);
      _undefined2(c2, true);
      if (null != c3) {
        _undefined2(c3);
      }
    }
    const items5 = [tmp28, tmp29, tmp30, tmp31];
    useMainTabsPanelsGestureTsx8.__closure = items5;
    useMainTabsPanelsGestureTsx8.__workletHash = 15588107934398;
    useMainTabsPanelsGestureTsx8.__initData = tmp27;
    const onTouchesMoveResult = result
      .manualActivation(PlatformUtils2.isAndroid())
      .hitSlop(rect)
      .onTouchesDown(useMainTabsPanelsGestureTsx6)
      .onTouchesMove(useMainTabsPanelsGestureTsx7);
    const tmp25 = c9;
    const items6 = [closure_15, sharedValue2, c8, c7, sharedValue4];
    [tmp33, tmp34, tmp35, tmp36, tmp37] = items6;
    function useMainTabsPanelsGestureTsx9(changeX) {
      if (_undefined.get()) {
        value = c1.get();
        if (0 !== value) {
          if (value !== c2) {
            const result = c1.set(0);
          }
        }
      } else {
        const _Math = Math;
        const _Math2 = Math;
        const result1 = c1.set(Math.max(0, Math.min(c2, c1.get() + changeX.changeX)));
        const result2 = _undefined4.set(false);
      }
    }
    const items7 = [tmp34, tmp35, tmp36, tmp37];
    useMainTabsPanelsGestureTsx9.__closure = items7;
    useMainTabsPanelsGestureTsx9.__workletHash = 13482277131208;
    useMainTabsPanelsGestureTsx9.__initData = tmp33;
    const onStartResult = result
      .manualActivation(PlatformUtils2.isAndroid())
      .hitSlop(rect)
      .onTouchesDown(useMainTabsPanelsGestureTsx6)
      .onTouchesMove(useMainTabsPanelsGestureTsx7)
      .onStart(useMainTabsPanelsGestureTsx8);
    const items8 = [
      closure_16,
      tmp25,
      sharedValue2,
      sharedValue4,
      _mod1708.scheduleOnRN,
      callback,
      _undefined7,
      callback1,
      c8,
      c7,
    ];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    _undefined3 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47] = items8;
    function useMainTabsPanelsGestureTsx10(velocityX) {
      try {
        if (_undefined.get()) {
          if (!_undefined2.get()) {
            if (!_undefined3.get()) {
              const result = _undefined.set(false);
              const result1 = _undefined3.set(false);
              _undefined4(c4, false);
              const _Math = Math;
              if (Math.abs(velocityX.velocityX) > _undefined6.minFlingVelocityX) {
                _undefined7(velocityX.velocityX < 0, true, velocityX.velocityX, true);
              } else {
                _undefined7(_undefined8.get() < c8 / 2, false, velocityX.velocityX, true);
              }
            }
          }
        }
        const result2 = _undefined.set(false);
        const result3 = _undefined3.set(false);
        _undefined4(c4, false);
      } catch (tmp28) {
        const result4 = _undefined.set(false);
        const result5 = _undefined3.set(false);
        _undefined4(c4, false);
        throw tmp28;
      }
    }
    const items9 = [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47];
    useMainTabsPanelsGestureTsx10.__closure = items9;
    useMainTabsPanelsGestureTsx10.__workletHash = 7511309601893;
    useMainTabsPanelsGestureTsx10.__initData = tmp38;
    return result
      .manualActivation(PlatformUtils2.isAndroid())
      .hitSlop(rect)
      .onTouchesDown(useMainTabsPanelsGestureTsx6)
      .onTouchesMove(useMainTabsPanelsGestureTsx7)
      .onStart(useMainTabsPanelsGestureTsx8)
      .onChange(useMainTabsPanelsGestureTsx9)
      .onFinalize(useMainTabsPanelsGestureTsx10);
  }, items9);
  const items10 = [memo, sharedValue2, sharedValue3, sharedValue];
  const tmp5Result10 = require("../../../../../_runtime/metro/01655__.js");
  return {
    gesture: memo,
    panelGestureContext: noop.useMemo(
      () => ({
        gesture: memo,
        disallowGesture: sharedValue2,
        edgeSwipeOnly: sharedValue3,
        translateX,
        isInMainTabs: true,
      }),
      items10,
    ),
    isDragging: sharedValue1,
    translateX: sharedValue,
    movePanel: callback1,
    maxWidth: openWidth,
    isDraggingRef: ref,
  };
}
