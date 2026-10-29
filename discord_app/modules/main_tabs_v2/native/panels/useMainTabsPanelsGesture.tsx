// === Module 17941: useMainTabsPanelsGesture ===

// Module 17941 (useMainTabsPanelsGesture)
import PlatformUtils2 from "PlatformUtils" /* 1381 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5086 */;
import timing from "timing" /* 5243 */;
import timingPresets from "timingPresets" /* 5246 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5334 */;
import noop from "module_19" /* 19 */;

require = fn;
const LaunchPadTypes = fn(11298).LaunchPadTypes;
let PlatformUtils = fn(1381);
PlatformUtils = PlatformUtils.isAndroid();
const PanelsConfig = fn(17942);
let panelsConfig = PlatformUtils ? PanelsConfig.ANDROID_PANELS_ANIMATION_CONFIG : PanelsConfig.DEFAULT_PANELS_ANIMATION_CONFIG;
let closure_7 = { code: "function useMainTabsPanelsGestureTsx1(width_0){const{isDragging,translateX,IS_ANDROID,withTiming,timingInstant,isFoldChange,timingStandard}=this.__closure;if(isDragging.get())return;if(translateX.get()===0)return;if(IS_ANDROID){translateX.set(withTiming(width_0,timingInstant,'animate-always'));}else{translateX.set(isFoldChange?withTiming(width_0,timingStandard,'respect-motion-settings'):width_0);}}" };
let closure_8 = { code: "function useMainTabsPanelsGestureTsx2(show,isFling,velocity,force){const{translateX,width,onVisibilityChange,runOnJS,onPreMovement,panelsConfig,isTimingConfig,withTiming,withSpring}=this.__closure;if(!force&&translateX.get()!==0&&translateX.get()!==width){return false;}const targetTranslationX=show?0:width;if(translateX.get()===targetTranslationX){if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}return false;}if(onPreMovement!=null){runOnJS(onPreMovement)(show);}const animationConfig=show?isFling?panelsConfig.swipeSidePanelOpen:panelsConfig.nonSwipeSidePanelOpen:isFling?panelsConfig.swipeSidePanelClose:panelsConfig.nonSwipeSidePanelClose;function handleAnimationFinish(finished){'worklet';if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}translateX.set(isTimingConfig(animationConfig)?withTiming(targetTranslationX,animationConfig,'respect-motion-settings',handleAnimationFinish):withSpring(targetTranslationX,{...animationConfig,velocity:velocity},'respect-motion-settings',handleAnimationFinish));return true;}" };
let closure_9 = { code: "function handleAnimationFinish_useMainTabsPanelsGestureTsx3(finished){const{onVisibilityChange,runOnJS,show}=this.__closure;if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}" };
let closure_10 = { code: "function useMainTabsPanelsGestureTsx4(){const{disallowGesture}=this.__closure;return disallowGesture.get();}" };
let closure_11 = { code: "function useMainTabsPanelsGestureTsx5(currentDisallow,previousDisallow){const{didJustAllowGesture}=this.__closure;if(currentDisallow===previousDisallow)return;if(currentDisallow)return;didJustAllowGesture.set(true);}" };
let closure_12 = { code: "function useMainTabsPanelsGestureTsx6(e_0){const{isDragging,disallowGesture,didJustAllowGesture,runOnJS,setIsDraggingRef,panelsConfig,movePanel,translateX,width}=this.__closure;try{if(!isDragging.get()||disallowGesture.get()||didJustAllowGesture.get()){return;}}finally{isDragging.set(false);didJustAllowGesture.set(false);runOnJS(setIsDraggingRef)(false);}if(Math.abs(e_0.velocityX)>panelsConfig.minFlingVelocityX){movePanel(e_0.velocityX<0,true,e_0.velocityX,true);}else{movePanel(translateX.get()<width/2,false,e_0.velocityX,true);}}" };
let closure_13 = { code: "function useMainTabsPanelsGestureTsx7(e){const{disallowGesture,translateX,width,didJustAllowGesture}=this.__closure;if(disallowGesture.get()){const currentTranslateX=translateX.get();if(currentTranslateX===0||currentTranslateX===width){return;}translateX.set(0);return;}translateX.set(Math.max(0,Math.min(width,translateX.get()+e.changeX)));didJustAllowGesture.set(false);}" };
let closure_14 = { code: "function useMainTabsPanelsGestureTsx8(){const{isDragging,runOnJS,setIsDraggingRef,onDragStart}=this.__closure;isDragging.set(true);runOnJS(setIsDraggingRef)(true);if(onDragStart!=null){runOnJS(onDragStart)();}}" };
let closure_15 = { code: "function useMainTabsPanelsGestureTsx9(event_0,manager_0){const{State,startPosition,GESTURE_MIN_DISTANCE,disallowGesture,translateX,cancelOnSwipeRightFromStart,width,launchPadType,LaunchPadTypes,windowWidth,LAUNCHPAD_GESTURE_INSET}=this.__closure;if(event_0.state!==State.BEGAN)return;const touch_0=event_0.allTouches[0];if(touch_0==null)return;const xDiff=touch_0.x-startPosition.get().x;const xDiffAbs=Math.abs(xDiff);if(xDiffAbs<=GESTURE_MIN_DISTANCE)return;if(disallowGesture.get()){return;}const yDiffAbs=Math.abs(touch_0.y-startPosition.get().y);if(xDiffAbs<=yDiffAbs||xDiffAbs*xDiffAbs+yDiffAbs*yDiffAbs<GESTURE_MIN_DISTANCE*GESTURE_MIN_DISTANCE){return;}if(xDiff<=0){if(translateX.get()===0){manager_0.fail();return;}}else{if(cancelOnSwipeRightFromStart===true&&translateX.get()>=width){manager_0.fail();return;}}const isGestureBasedLaunchPad=launchPadType===LaunchPadTypes.GESTURE_EDGE||launchPadType===LaunchPadTypes.GESTURE_FULL;if(isGestureBasedLaunchPad&&xDiff<0){const launchpadGestureEdge=windowWidth-LAUNCHPAD_GESTURE_INSET;if(launchPadType===LaunchPadTypes.GESTURE_FULL&&startPosition.get().x<launchpadGestureEdge||launchPadType===LaunchPadTypes.GESTURE_EDGE&&startPosition.get().x>=launchpadGestureEdge){manager_0.fail();return;}}manager_0.activate();}" };
let closure_16 = { code: "function useMainTabsPanelsGestureTsx10(event,manager){const{edgeSwipeOnly,translateX,insets,EDGE_SWIPE_WIDTH,startPosition}=this.__closure;const touch=event.allTouches[0];if(touch==null)return;if(edgeSwipeOnly.get()&&translateX.get()===0&&touch.x>insets.left+EDGE_SWIPE_WIDTH){manager.fail();return;}startPosition.set({x:touch.x,y:touch.y});}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx");

export default function useMainTabsPanelsGesture(canDrag) {
  canDrag = canDrag.canDrag;
  const onVisibilityChange = canDrag.onVisibilityChange;
  const onDragStart = canDrag.onDragStart;
  const onPreMovement = canDrag.onPreMovement;
  ({ openWidth, foldSeam } = canDrag);
  if (foldSeam === undefined) {
    foldSeam = null;
  }
  const cancelOnSwipeRightFromStart = canDrag.cancelOnSwipeRightFromStart;
  openWidth = undefined;
  let sharedValue;
  let sharedValue1;
  let ref;
  let callback;
  let sharedValue2;
  let sharedValue3;
  __initData5 = undefined;
  let callback1;
  let sharedValue4;
  let sharedValue5;
  let context;
  let memo;
  const tmp3 = onVisibilityChange(onDragStart[4])();
  panelsConfig = tmp3;
  const tmp4 = onVisibilityChange(onDragStart[5])();
  __initData = tmp4;
  const width = onVisibilityChange(onDragStart[6])().width;
  if (openWidth == null) {
    openWidth = width;
  }
  let num = 0;
  if (!canDrag.startShown) {
    num = openWidth;
  }
  sharedValue = canDrag(onDragStart[7]).useSharedValue(num);
  let obj = canDrag(onDragStart[7]);
  let tmp = onVisibilityChange;
  sharedValue1 = canDrag(onDragStart[7]).useSharedValue(false);
  ref = onPreMovement.useRef(false);
  const items = [ref];
  callback = onPreMovement.useCallback((current) => {
    ref.current = current;
  }, items);
  const tmp5Result = canDrag(onDragStart[7]);
  sharedValue2 = canDrag(onDragStart[7]).useSharedValue(false);
  const tmp5Result6 = canDrag(onDragStart[7]);
  sharedValue3 = canDrag(onDragStart[7]).useSharedValue(false);
  __initData5 = onPreMovement.useRef(foldSeam);
  const items1 = [foldSeam, sharedValue1, sharedValue, openWidth];
  const effect = onPreMovement.useEffect(() => {
    closure_0 = tmp;
    __initData5.current = foldSeam;
    const fn = function e(value) {
      if (!sharedValue1.get()) {
        if (0 !== sharedValue.get()) {
          if (PlatformUtils) {
            const result = set(timing.withTiming(value, timingPresets.timingInstant, "animate-always"));
          } else {
            let withTimingResult = value;
            if (closure_0) {
              withTimingResult = timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings");
            }
            const result1 = set(withTimingResult);
          }
        }
      }
    };
    let obj = canDrag(onDragStart[7]);
    fn.__closure = { isDragging: sharedValue1, translateX: sharedValue, IS_ANDROID: cancelOnSwipeRightFromStart, withTiming: canDrag(onDragStart[8]).withTiming, timingInstant: canDrag(onDragStart[9]).timingInstant, isFoldChange: __initData5.current !== foldSeam, timingStandard: canDrag(onDragStart[9]).timingStandard };
    fn.__workletHash = 9684253698191;
    fn.__initData = __initData;
    obj.runOnUI(fn)(openWidth);
  }, items1);
  class U {
    constructor(arg0, arg1, arg2, arg3) {
      closure_0 = canDrag;
      if (!arg3) {
        obj = closure_10;
        num = 0;
        if (0 !== closure_10.get()) {
          tmp = width;
          if (obj.get() !== width) {
            flag = false;
            return false;
          }
        }
      }
      num2 = 0;
      if (!canDrag) {
        num2 = width;
      }
      obj2 = closure_10;
      if (closure_10.get() === num2) {
        tmp33 = null;
        if (null != onVisibilityChange) {
          tmp34 = canDrag;
          tmp35 = onDragStart;
          obj9 = canDrag(onDragStart[7]);
          tmp36 = obj9.runOnJS(tmp32)(canDrag);
        }
        flag3 = false;
        return false;
      } else {
        tmp38 = null;
        if (null != onPreMovement) {
          tmp2 = canDrag;
          tmp3 = onDragStart;
          obj3 = canDrag(onDragStart[7]);
          tmp4 = obj3.runOnJS(tmp37)(canDrag);
        }
        tmp5 = arg1;
        tmp6 = closure_6;
        if (canDrag) {
          tmp8 = arg1 ? tmp6.swipeSidePanelOpen : tmp6.nonSwipeSidePanelOpen;
        } else {
          tmp7 = arg1 ? tmp6.swipeSidePanelClose : tmp6.nonSwipeSidePanelClose;
          handleAnimationFinish = function handleAnimationFinish(arg0) {
            let tmp = arg0;
            if (arg0) {
              tmp = null != onVisibilityChange;
            }
            if (tmp) {
              ReanimatedRexport.runOnJS(onVisibilityChange)(closure_0);
            }
          };
          obj1 = { onVisibilityChange: null, runOnJS: null, show: null };
          tmp9 = onVisibilityChange;
          obj1.onVisibilityChange = onVisibilityChange;
          tmp10 = canDrag;
          tmp11 = onDragStart;
          obj1.runOnJS = canDrag(onDragStart[7]).runOnJS;
          obj1.show = canDrag;
          handleAnimationFinish.__closure = obj1;
          num3 = 1018878139815;
          handleAnimationFinish.__workletHash = 1018878139815;
          tmp12 = width;
          handleAnimationFinish.__initData = width;
          tmp13 = canDrag;
          tmp14 = onDragStart;
          obj5 = canDrag(onDragStart[3]);
          tmp15 = canDrag;
          tmp16 = onDragStart;
          tmp17 = tmp7;
          if (obj5.isTimingConfig(tmp7)) {
            tmp15Result = tmp15(tmp16[8]);
            str2 = "respect-motion-settings";
            tmp27 = tmp15Result;
            tmp28 = num2;
            tmp29 = tmp7;
            tmp30 = handleAnimationFinish;
            withTimingResult = tmp15Result.withTiming(num2, tmp17, "respect-motion-settings", handleAnimationFinish);
          } else {
            tmp18 = arg2;
            tmp15Result1 = tmp15(tmp16[10]);
            obj10 = {};
            tmp19 = obj10;
            tmp20 = tmp7;
            merged = Object.assign(tmp17);
            obj10.velocity = arg2;
            str = "respect-motion-settings";
            tmp22 = tmp15Result1;
            tmp23 = num2;
            tmp24 = obj10;
            tmp25 = handleAnimationFinish;
            withTimingResult = tmp15Result1.withSpring(num2, obj10, "respect-motion-settings", handleAnimationFinish);
          }
          result = obj2.set(withTimingResult);
          flag2 = true;
          return true;
        }
      }
      return;
    }
  }
  const tmp5Result7 = canDrag(onDragStart[7]);
  U.__closure = { translateX: sharedValue, width: openWidth, onVisibilityChange, runOnJS: canDrag(onDragStart[7]).runOnJS, onPreMovement, panelsConfig, isTimingConfig: canDrag(onDragStart[3]).isTimingConfig, withTiming: canDrag(onDragStart[8]).withTiming, withSpring: canDrag(onDragStart[10]).withSpring };
  U.__workletHash = 4205680413964;
  U.__initData = width;
  const items2 = [onVisibilityChange, onPreMovement, sharedValue, openWidth];
  callback1 = onPreMovement.useCallback(U, items2);
  let obj2 = { translateX: sharedValue, width: openWidth, onVisibilityChange, runOnJS: canDrag(onDragStart[7]).runOnJS, onPreMovement, panelsConfig, isTimingConfig: canDrag(onDragStart[3]).isTimingConfig, withTiming: canDrag(onDragStart[8]).withTiming, withSpring: canDrag(onDragStart[10]).withSpring };
  sharedValue4 = canDrag(onDragStart[7]).useSharedValue(false);
  const tmp5Result8 = canDrag(onDragStart[7]);
  class V {
    constructor() {
      return closure_14.get();
    }
  }
  V.__closure = { disallowGesture: sharedValue2 };
  V.__workletHash = 15338765161171;
  V.__initData = sharedValue;
  class L {
    constructor(arg0, arg1) {
      if (canDrag !== arg1) {
        if (!canDrag) {
          tmp = closure_18;
          flag = true;
          result = closure_18.set(true);
        }
      }
      return;
    }
  }
  L.__closure = { didJustAllowGesture: sharedValue4 };
  L.__workletHash = 17048450187141;
  L.__initData = sharedValue1;
  const animatedReaction = canDrag(onDragStart[7]).useAnimatedReaction(V, L);
  const tmp5Result9 = canDrag(onDragStart[7]);
  sharedValue5 = canDrag(onDragStart[7]).useSharedValue({ x: 0, y: 0 });
  context = onPreMovement.useContext(tmp(tmp2[11]));
  const items3 = [tmp4, sharedValue, openWidth, width, sharedValue1, callback1, onDragStart, canDrag, sharedValue5, tmp3, cancelOnSwipeRightFromStart, sharedValue2, sharedValue3, callback, context, sharedValue4];
  memo = onPreMovement.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    let result = Gesture.Pan().enabled(canDrag).requireExternalGestureToFail(context);
    const enabledResult = Gesture.Pan().enabled(canDrag);
    const rect = { top: -left.top, left: -left.left, bottom: -left.bottom, right: -left.right };
    const manualActivationResult = result.manualActivation(PlatformUtils2.isAndroid());
    const fn = function u(arg0, fail) {
      const first = arg0.allTouches[0];
      if (null != first) {
        if (__initData4.get()) {
          if (0 === sharedValue.get()) {
            if (first.x > left.left + 24) {
              fail.fail();
            }
          }
        }
        const point = { x: null, y: null };
        ({ x: obj.x, y: obj.y } = first);
        const result = sharedValue5.set(point);
      }
    };
    fn.__closure = { edgeSwipeOnly: sharedValue3, translateX: sharedValue, insets: left, EDGE_SWIPE_WIDTH: 24, startPosition: sharedValue5 };
    fn.__workletHash = 5475789226466;
    fn.__initData = __initData5;
    const hitSlopResult = result.manualActivation(PlatformUtils2.isAndroid()).hitSlop(rect);
    let obj = { edgeSwipeOnly: sharedValue3, translateX: sharedValue, insets: left, EDGE_SWIPE_WIDTH: 24, startPosition: sharedValue5 };
    const fn2 = function o(state, fail) {
      if (state.state === canDrag(onDragStart[12]).State.BEGAN) {
        const point = state.allTouches[0];
        if (null != point) {
          const diff = point.x - sharedValue5.get().x;
          const _Math2 = Math;
          const absolute = Math.abs(diff);
          if (absolute > 12) {
            if (!__initData3.get()) {
              const _Math = Math;
              const absolute1 = Math.abs(point.y - sharedValue5.get().y);
              if (absolute > absolute1) {
                if (absolute * absolute + absolute1 * absolute1 >= 144) {
                  if (diff <= 0) {
                    if (0 === sharedValue.get()) {
                      fail.fail();
                    }
                  } else if (true === cancelOnSwipeRightFromStart) {
                    if (sharedValue.get() >= openWidth) {
                      fail.fail();
                    }
                  }
                  if (minFlingVelocityX === foldSeam.GESTURE_EDGE) {
                    if (diff < 0) {
                      const diff1 = width - 48;
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
    const onTouchesDownResult = result.manualActivation(PlatformUtils2.isAndroid()).hitSlop(rect).onTouchesDown(fn);
    fn2.__closure = { State: LegacyBaseButton.State, startPosition: sharedValue5, GESTURE_MIN_DISTANCE: 12, disallowGesture: sharedValue2, translateX: sharedValue, cancelOnSwipeRightFromStart, width: openWidth, launchPadType: minFlingVelocityX, LaunchPadTypes, windowWidth: width, LAUNCHPAD_GESTURE_INSET: 48 };
    fn2.__workletHash = 7246608976890;
    fn2.__initData = __initData4;
    const obj2 = { State: LegacyBaseButton.State, startPosition: sharedValue5, GESTURE_MIN_DISTANCE: 12, disallowGesture: sharedValue2, translateX: sharedValue, cancelOnSwipeRightFromStart, width: openWidth, launchPadType: minFlingVelocityX, LaunchPadTypes, windowWidth: width, LAUNCHPAD_GESTURE_INSET: 48 };
    const fn3 = function l() {
      const result = sharedValue1.set(true);
      canDrag(onDragStart[7]).runOnJS(__initData2)(true);
      if (null != closure_1_2) {
        canDrag(onDragStart[7]).runOnJS(tmp5)();
        const tmp2Result = canDrag(onDragStart[7]);
      }
      const obj = canDrag(onDragStart[7]);
    };
    const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(fn2);
    fn3.__closure = { isDragging: sharedValue1, runOnJS: ReanimatedRexport.runOnJS, setIsDraggingRef: callback, onDragStart };
    fn3.__workletHash = 8659650895938;
    fn3.__initData = __initData3;
    let obj3 = { isDragging: sharedValue1, runOnJS: ReanimatedRexport.runOnJS, setIsDraggingRef: callback, onDragStart };
    const fn4 = function n(changeX) {
      if (__initData3.get()) {
        value = sharedValue.get();
        if (0 !== value) {
          if (value !== openWidth) {
            const result = sharedValue.set(0);
          }
        }
      } else {
        const _Math = Math;
        const _Math2 = Math;
        const result1 = sharedValue.set(Math.max(0, Math.min(openWidth, sharedValue.get() + changeX.changeX)));
        const result2 = sharedValue4.set(false);
      }
    };
    fn4.__closure = { disallowGesture: sharedValue2, translateX: sharedValue, width: openWidth, didJustAllowGesture: sharedValue4 };
    fn4.__workletHash = 13355779907583;
    fn4.__initData = __initData2;
    const obj5 = { disallowGesture: sharedValue2, translateX: sharedValue, width: openWidth, didJustAllowGesture: sharedValue4 };
    const onStartResult = onTouchesMoveResult.onStart(fn3);
    const fn5 = function e(velocityX) {
      try {
        if (sharedValue1.get()) {
          if (!__initData3.get()) {
            if (!sharedValue4.get()) {
              const result = sharedValue1.set(false);
              const result1 = sharedValue4.set(false);
              canDrag(onDragStart[7]).runOnJS(__initData2)(false);
              const _Math = Math;
              if (Math.abs(velocityX.velocityX) > minFlingVelocityX.minFlingVelocityX) {
                callback1(velocityX.velocityX < 0, true, velocityX.velocityX, true);
              } else {
                callback1(sharedValue.get() < openWidth / 2, false, velocityX.velocityX, true);
              }
              const obj3 = canDrag(onDragStart[7]);
            }
          }
        }
        const result2 = sharedValue1.set(false);
        const result3 = sharedValue4.set(false);
        canDrag(onDragStart[7]).runOnJS(__initData2)(false);
        const obj4 = canDrag(onDragStart[7]);
      } catch (tmp30) {
        const result4 = sharedValue1.set(false);
        const result5 = sharedValue4.set(false);
        canDrag(onDragStart[7]).runOnJS(__initData2)(false);
        throw tmp30;
      }
    };
    const onChangeResult = onTouchesMoveResult.onStart(fn3).onChange(fn4);
    fn5.__closure = { isDragging: sharedValue1, disallowGesture: sharedValue2, didJustAllowGesture: sharedValue4, runOnJS: ReanimatedRexport.runOnJS, setIsDraggingRef: callback, panelsConfig: minFlingVelocityX, movePanel: callback1, translateX: sharedValue, width: openWidth };
    fn5.__workletHash = 9466036897321;
    fn5.__initData = __initData;
    return onChangeResult.onFinalize(fn5);
  }, items3);
  const items4 = [memo, sharedValue2, sharedValue3, sharedValue];
  const tmp5Result10 = canDrag(onDragStart[7]);
  return { gesture: memo, panelGestureContext: onPreMovement.useMemo(() => ({ gesture: memo, disallowGesture: sharedValue2, edgeSwipeOnly: sharedValue3, translateX: sharedValue }), items4), isDragging: sharedValue1, translateX: sharedValue, movePanel: callback1, maxWidth: openWidth, isDraggingRef: ref };
};