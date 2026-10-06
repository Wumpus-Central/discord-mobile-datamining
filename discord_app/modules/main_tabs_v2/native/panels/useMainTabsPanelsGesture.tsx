// === Module 15967: useMainTabsPanelsGesture ===

// Module 15967 (useMainTabsPanelsGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6147 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11138 */;
import react from "react" /* 19 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import PanelsConfig from "PanelsConfig" /* 15968 */;
import size from "module_2" /* 2 */;

let set;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
let panelsConfig = PlatformUtils ? PanelsConfig.ANDROID_PANELS_ANIMATION_CONFIG : PanelsConfig.DEFAULT_PANELS_ANIMATION_CONFIG;
let closure_7 = { code: "function useMainTabsPanelsGestureTsx1(width_0){const{isDragging,translateX,IS_ANDROID,withTiming,timingInstant}=this.__closure;if(isDragging.get())return;if(translateX.get()===0)return;translateX.set(IS_ANDROID?withTiming(width_0,timingInstant,'animate-always'):width_0);}" };
let closure_8 = { code: "function useMainTabsPanelsGestureTsx2(show,isFling,velocity,force){const{translateX,width,onVisibilityChange,runOnJS,onPreMovement,panelsConfig,isTimingConfig,withTiming,withSpring}=this.__closure;if(!force&&translateX.get()!==0&&translateX.get()!==width){return false;}const targetTranslationX=show?0:width;if(translateX.get()===targetTranslationX){if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}return false;}if(onPreMovement!=null){runOnJS(onPreMovement)(show);}const animationConfig=show?isFling?panelsConfig.swipeSidePanelOpen:panelsConfig.nonSwipeSidePanelOpen:isFling?panelsConfig.swipeSidePanelClose:panelsConfig.nonSwipeSidePanelClose;function handleAnimationFinish(finished){'worklet';if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}translateX.set(isTimingConfig(animationConfig)?withTiming(targetTranslationX,animationConfig,'respect-motion-settings',handleAnimationFinish):withSpring(targetTranslationX,{...animationConfig,velocity:velocity},'respect-motion-settings',handleAnimationFinish));return true;}" };
const __initData = { code: "function handleAnimationFinish_useMainTabsPanelsGestureTsx3(finished){const{onVisibilityChange,runOnJS,show}=this.__closure;if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}" };
let closure_10 = { code: "function useMainTabsPanelsGestureTsx4(){const{disallowGesture}=this.__closure;return disallowGesture.get();}" };
let closure_11 = { code: "function useMainTabsPanelsGestureTsx5(currentDisallow,previousDisallow){const{didJustAllowGesture}=this.__closure;if(currentDisallow===previousDisallow)return;if(currentDisallow)return;didJustAllowGesture.set(true);}" };
let closure_12 = { code: "function useMainTabsPanelsGestureTsx6(e_0){const{isDragging,disallowGesture,didJustAllowGesture,runOnJS,setIsDraggingRef,panelsConfig,movePanel,translateX,width}=this.__closure;try{if(!isDragging.get()||disallowGesture.get()||didJustAllowGesture.get()){return;}}finally{isDragging.set(false);didJustAllowGesture.set(false);runOnJS(setIsDraggingRef)(false);}if(Math.abs(e_0.velocityX)>panelsConfig.minFlingVelocityX){movePanel(e_0.velocityX<0,true,e_0.velocityX,true);}else{movePanel(translateX.get()<width/2,false,e_0.velocityX,true);}}" };
let closure_13 = { code: "function useMainTabsPanelsGestureTsx7(e){const{disallowGesture,translateX,width,didJustAllowGesture}=this.__closure;if(disallowGesture.get()){const currentTranslateX=translateX.get();if(currentTranslateX===0||currentTranslateX===width){return;}translateX.set(0);return;}translateX.set(Math.max(0,Math.min(width,translateX.get()+e.changeX)));didJustAllowGesture.set(false);}" };
let closure_14 = { code: "function useMainTabsPanelsGestureTsx8(){const{isDragging,runOnJS,setIsDraggingRef,onDragStart}=this.__closure;isDragging.set(true);runOnJS(setIsDraggingRef)(true);if(onDragStart!=null){runOnJS(onDragStart)();}}" };
let closure_15 = { code: "function useMainTabsPanelsGestureTsx9(event_0,manager){const{State,startPosition,GESTURE_MIN_DISTANCE,disallowGesture,translateX,cancelOnSwipeRightFromStart,width,launchPadType,LaunchPadTypes,windowWidth,LAUNCHPAD_GESTURE_INSET}=this.__closure;if(event_0.state!==State.BEGAN)return;const touch_0=event_0.allTouches[0];if(touch_0==null)return;const xDiff=touch_0.x-startPosition.get().x;const xDiffAbs=Math.abs(xDiff);if(xDiffAbs<=GESTURE_MIN_DISTANCE)return;if(disallowGesture.get()){return;}const yDiffAbs=Math.abs(touch_0.y-startPosition.get().y);if(xDiffAbs<=yDiffAbs||xDiffAbs*xDiffAbs+yDiffAbs*yDiffAbs<GESTURE_MIN_DISTANCE*GESTURE_MIN_DISTANCE){return;}if(xDiff<=0){if(translateX.get()===0){manager.fail();return;}}else{if(cancelOnSwipeRightFromStart===true&&translateX.get()>=width){manager.fail();return;}}const isGestureBasedLaunchPad=launchPadType===LaunchPadTypes.GESTURE_EDGE||launchPadType===LaunchPadTypes.GESTURE_FULL;if(isGestureBasedLaunchPad&&xDiff<0){const launchpadGestureEdge=windowWidth-LAUNCHPAD_GESTURE_INSET;if(launchPadType===LaunchPadTypes.GESTURE_FULL&&startPosition.get().x<launchpadGestureEdge||launchPadType===LaunchPadTypes.GESTURE_EDGE&&startPosition.get().x>=launchpadGestureEdge){manager.fail();return;}}manager.activate();}" };
let closure_16 = { code: "function useMainTabsPanelsGestureTsx10(event){const{startPosition}=this.__closure;const touch=event.allTouches[0];if(touch==null)return;startPosition.set({x:touch.x,y:touch.y});}" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx");

export default function useMainTabsPanelsGesture(canDrag) {
  let __initData6;
  let cancelOnSwipeRightFromStart;
  let openWidth;
  canDrag = canDrag.canDrag;
  const onVisibilityChange = canDrag.onVisibilityChange;
  const onDragStart = canDrag.onDragStart;
  const onPreMovement = canDrag.onPreMovement;
  ({ openWidth, cancelOnSwipeRightFromStart } = canDrag);
  openWidth = undefined;
  let sharedValue;
  let sharedValue1;
  let ref;
  let callback;
  let sharedValue2;
  let callback1;
  let sharedValue3;
  let sharedValue4;
  let context;
  let memo;
  const startShown = canDrag.startShown;
  let tmp = onVisibilityChange;
  const tmp3 = onVisibilityChange(onDragStart[4])();
  const launchPadType = tmp3;
  const tmp4 = onVisibilityChange(onDragStart[5])();
  panelsConfig = tmp4;
  const width = onVisibilityChange(onDragStart[6])().width;
  if (openWidth == null) {
    openWidth = width;
  }
  const tmp5 = canDrag;
  let num = 0;
  const useSharedValue = canDrag(onDragStart[7]).useSharedValue;
  const tmp6 = canDrag(onDragStart[7]);
  if (!startShown) {
    num = openWidth;
  }
  sharedValue = useSharedValue(num);
  const tmp5Result = tmp5(onDragStart[7]);
  sharedValue1 = tmp5Result.useSharedValue(false);
  ref = onPreMovement.useRef(false);
  const items = [ref];
  callback = onPreMovement.useCallback((current) => {
    ref.current = current;
  }, items);
  const tmp5Result5 = tmp5(onDragStart[7]);
  sharedValue2 = tmp5Result5.useSharedValue(false);
  const items1 = [sharedValue1, sharedValue, openWidth];
  const effect = onPreMovement.useEffect(() => {
    let obj = ReanimatedRexport;
    const fn = function e(arg0) {
      if (!sharedValue1.get()) {
        if (0 !== sharedValue.get()) {
          let withTimingResult = arg0;
          set = sharedValue.set;
          if (launchPadType) {
            const obj = canDrag(onDragStart[8]);
            withTimingResult = obj.withTiming(arg0, canDrag(onDragStart[9]).timingInstant, "animate-always");
          }
          const result = set(withTimingResult);
        }
      }
    };
    fn.__closure = { isDragging: sharedValue1, translateX: sharedValue, IS_ANDROID: PlatformUtils, withTiming: timing.withTiming, timingInstant: timingPresets.timingInstant };
    fn.__workletHash = 16005852081233;
    fn.__initData = __initData;
    ({ isDragging: sharedValue1, translateX: sharedValue, IS_ANDROID: PlatformUtils, withTiming: timing.withTiming, timingInstant: timingPresets.timingInstant });
    obj.runOnUI(fn)(openWidth);
  }, items1);
  class R {
    constructor(show, arg1, velocity, arg3) {
      let closure_0 = show;
      let tmp = arg3;
      if (!tmp) {
        if (0 !== sharedValue.get()) {
          if (sharedValue.get() !== openWidth) {
            return false;
          }
        }
      }
      let num2 = 0;
      if (!show) {
        num2 = openWidth;
      }
      if (sharedValue.get() === num2) {
        if (null != onVisibilityChange) {
          const obj7 = canDrag(onDragStart[7]);
          obj7.runOnJS(tmp34)(show);
        }
        return false;
      } else {
        let tmp9;
        let withTimingResult;
        if (null != onPreMovement) {
          const obj2 = canDrag(onDragStart[7]);
          obj2.runOnJS(tmp39)(show);
        }
        if (show) {
          tmp9 = arg1 ? panelsConfig.swipeSidePanelOpen : panelsConfig.nonSwipeSidePanelOpen;
        } else {
          tmp9 = arg1 ? panelsConfig.swipeSidePanelClose : panelsConfig.nonSwipeSidePanelClose;
        }
        function handleAnimationFinish(arg0) {
          const tmp = arg0 && null != onVisibilityChange;
          if (tmp) {
            const obj = ReanimatedRexport;
            obj.runOnJS(onVisibilityChange)(show);
          }
        }
        handleAnimationFinish.__closure = { onVisibilityChange, runOnJS: canDrag(onDragStart[7]).runOnJS, show };
        handleAnimationFinish.__workletHash = 1018878139815;
        handleAnimationFinish.__initData = sharedValue;
        const obj3 = { onVisibilityChange, runOnJS: canDrag(onDragStart[7]).runOnJS, show };
        set = sharedValue.set;
        const obj4 = canDrag(onDragStart[3]);
        if (obj4.isTimingConfig(tmp9)) {
          const tmp16Result = canDrag(onDragStart[8]);
          withTimingResult = tmp16Result.withTiming(num2, tmp18, "respect-motion-settings", handleAnimationFinish);
        } else {
          const withSpring = canDrag(onDragStart[10]).withSpring;
          const obj5 = { velocity };
          const tmp16Result2 = canDrag(onDragStart[10]);
          const merged = Object.assign(tmp18);
          withTimingResult = withSpring(num2, obj5, "respect-motion-settings", handleAnimationFinish);
        }
        const result = set(withTimingResult);
        return true;
      }
    }
  }
  let obj = { translateX: sharedValue, width: openWidth, onVisibilityChange, runOnJS: tmp5(tmp2[7]).runOnJS, onPreMovement, panelsConfig, isTimingConfig: tmp5(tmp2[3]).isTimingConfig, withTiming: tmp5(tmp2[8]).withTiming, withSpring: tmp5(tmp2[10]).withSpring };
  R.__closure = obj;
  R.__workletHash = 4205680413964;
  R.__initData = openWidth;
  const items2 = [onVisibilityChange, onPreMovement, sharedValue, openWidth];
  callback1 = onPreMovement.useCallback(R, items2);
  const tmp5Result6 = tmp5(onDragStart[7]);
  sharedValue3 = tmp5Result6.useSharedValue(false);
  const tmp5Result7 = tmp5(onDragStart[7]);
  class U {
    constructor() {
      return sharedValue2.get();
    }
  }
  U.__closure = { disallowGesture: sharedValue2 };
  U.__workletHash = 15338765161171;
  U.__initData = sharedValue1;
  class N {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        if (!arg0) {
          const result = sharedValue3.set(true);
        }
      }
    }
  }
  N.__closure = { didJustAllowGesture: sharedValue3 };
  N.__workletHash = 17048450187141;
  N.__initData = ref;
  const animatedReaction = tmp5Result7.useAnimatedReaction(U, N);
  const tmp5Result8 = tmp5(onDragStart[7]);
  sharedValue4 = tmp5Result8.useSharedValue({ x: 0, y: 0 });
  context = onPreMovement.useContext(tmp(tmp2[11]));
  const items3 = [tmp4, sharedValue, openWidth, width, sharedValue1, callback1, onDragStart, canDrag, sharedValue4, tmp3, cancelOnSwipeRightFromStart, sharedValue2, callback, context, sharedValue3];
  memo = onPreMovement.useMemo(() => {
    let minFlingVelocityX;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(canDrag);
    let result = enabledResult.requireExternalGestureToFail(context);
    const manualActivation = result.manualActivation;
    let obj3 = PlatformUtils;
    const rect = { top: -panelsConfig.top, left: -panelsConfig.left, bottom: -panelsConfig.bottom, right: -panelsConfig.right };
    const fn = function u(arg0) {
      const first = arg0.allTouches[0];
      if (null != first) {
        const point = { x: null, y: null };
        ({ x: obj.x, y: obj.y } = first);
        const result = __initData6.set(point);
      }
    };
    let obj = { startPosition: sharedValue4 };
    fn.__closure = obj;
    fn.__workletHash = 2276787702143;
    fn.__initData = __initData6;
    const manualActivationResult = manualActivation(obj3.isAndroid());
    const fn2 = function l(state, fail) {
      if (state.state === canDrag(onDragStart[12]).State.BEGAN) {
        const point = state.allTouches[0];
        if (null != point) {
          const diff = point.x - __initData6.get().x;
          const _Math2 = Math;
          const absolute = Math.abs(diff);
          if (absolute > 12) {
            if (!__initData3.get()) {
              const _Math = Math;
              const absolute1 = Math.abs(point.y - __initData6.get().y);
              if (absolute > absolute1) {
                if (absolute * absolute + absolute1 * absolute1 >= 144) {
                  if (diff <= 0) {
                    if (0 === sharedValue.get()) {
                      fail.fail();
                    }
                  } else if (true === closure_1_4) {
                    if (sharedValue.get() >= openWidth) {
                      fail.fail();
                    }
                  }
                  if (launchPadType === cancelOnSwipeRightFromStart.GESTURE_EDGE) {
                    if (diff < 0) {
                      const diff1 = __initData - 48;
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
    };
    const hitSlopResult = manualActivationResult.hitSlop(rect);
    const onTouchesDownResult = hitSlopResult.onTouchesDown(fn);
    fn2.__closure = { State: LegacyBaseButton.State, startPosition: sharedValue4, GESTURE_MIN_DISTANCE: 12, disallowGesture: sharedValue2, translateX: sharedValue, cancelOnSwipeRightFromStart, width: openWidth, launchPadType, LaunchPadTypes, windowWidth: width, LAUNCHPAD_GESTURE_INSET: 48 };
    fn2.__workletHash = 3232425850069;
    fn2.__initData = __initData5;
    ({ State: LegacyBaseButton.State, startPosition: sharedValue4, GESTURE_MIN_DISTANCE: 12, disallowGesture: sharedValue2, translateX: sharedValue, cancelOnSwipeRightFromStart, width: openWidth, launchPadType, LaunchPadTypes, windowWidth: width, LAUNCHPAD_GESTURE_INSET: 48 });
    const fn3 = function o() {
      const result = sharedValue1.set(true);
      const obj = canDrag(onDragStart[7]);
      obj.runOnJS(__initData2)(true);
      if (null != closure_1_2) {
        const tmp2Result = canDrag(onDragStart[7]);
        tmp2Result.runOnJS(tmp5)();
      }
    };
    const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(fn2);
    let obj4 = { isDragging: sharedValue1, runOnJS: ReanimatedRexport.runOnJS, setIsDraggingRef: callback, onDragStart };
    fn3.__closure = obj4;
    fn3.__workletHash = 8659650895938;
    fn3.__initData = __initData4;
    const fn4 = function n(changeX) {
      if (__initData3.get()) {
        const value = sharedValue.get();
        if (0 !== value) {
          if (value !== openWidth) {
            const result = sharedValue.set(0);
          }
        }
      } else {
        const _Math = Math;
        const _Math2 = Math;
        const result1 = sharedValue.set(Math.max(0, Math.min(openWidth, sharedValue.get() + changeX.changeX)));
        const result2 = __initData5.set(false);
      }
    };
    let obj5 = { disallowGesture: sharedValue2, translateX: sharedValue, width: openWidth, didJustAllowGesture: sharedValue3 };
    fn4.__closure = obj5;
    fn4.__workletHash = 13355779907583;
    fn4.__initData = __initData3;
    const fn5 = function e(velocityX) {
      try {
        if (sharedValue1.get()) {
          if (!__initData3.get()) {
            if (!__initData5.get()) {
              const result = sharedValue1.set(false);
              const result1 = __initData5.set(false);
              const obj3 = canDrag(onDragStart[7]);
              obj3.runOnJS(__initData2)(false);
              const _Math = Math;
              if (Math.abs(velocityX.velocityX) > minFlingVelocityX.minFlingVelocityX) {
                __initData4(velocityX.velocityX < 0, true, velocityX.velocityX, true);
              } else {
                __initData4(sharedValue.get() < openWidth / 2, false, velocityX.velocityX, true);
              }
            }
          }
        }
        const result2 = sharedValue1.set(false);
        const result3 = __initData5.set(false);
        const obj4 = canDrag(onDragStart[7]);
        obj4.runOnJS(__initData2)(false);
      } catch (tmp30) {
        const result4 = sharedValue1.set(false);
        const result5 = __initData5.set(false);
        const obj5 = canDrag(onDragStart[7]);
        obj5.runOnJS(__initData2)(false);
        throw tmp30;
      }
    };
    const onStartResult = onTouchesMoveResult.onStart(fn3);
    const onChangeResult = onStartResult.onChange(fn4);
    fn5.__closure = { isDragging: sharedValue1, disallowGesture: sharedValue2, didJustAllowGesture: sharedValue3, runOnJS: ReanimatedRexport.runOnJS, setIsDraggingRef: callback, panelsConfig, movePanel: callback1, translateX: sharedValue, width: openWidth };
    fn5.__workletHash = 9466036897321;
    fn5.__initData = __initData2;
    ({ isDragging: sharedValue1, disallowGesture: sharedValue2, didJustAllowGesture: sharedValue3, runOnJS: ReanimatedRexport.runOnJS, setIsDraggingRef: callback, panelsConfig, movePanel: callback1, translateX: sharedValue, width: openWidth });
    return onChangeResult.onFinalize(fn5);
  }, items3);
  const items4 = [memo, sharedValue2, sharedValue];
  let obj2 = { gesture: memo, panelGestureContext: onPreMovement.useMemo(() => ({ gesture: memo, disallowGesture: sharedValue2, translateX: sharedValue }), items4), isDragging: sharedValue1, translateX: sharedValue, movePanel: callback1, maxWidth: openWidth, isDraggingRef: ref };
  return obj2;
};