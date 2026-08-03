// === Module 14937: useMainTabsPanelsGesture ===

// Module 14937 (useMainTabsPanelsGesture)
import noop from "noop";
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG";
import set from "set";
import isTimingConfig from "isTimingConfig";
import set from "set";

const require = arg1;
set = set.isAndroid();
let closure_6 = set ? isTimingConfig.ANDROID_PANELS_ANIMATION_CONFIG : isTimingConfig.DEFAULT_PANELS_ANIMATION_CONFIG;
let closure_7 = { code: "function useMainTabsPanelsGestureTsx1(width){const{isDragging,translateX,IS_ANDROID,withTiming,timingInstant}=this.__closure;if(isDragging.get())return;if(translateX.get()===0)return;translateX.set(IS_ANDROID?withTiming(width,timingInstant,'animate-always'):width);}" };
let closure_8 = { code: "function useMainTabsPanelsGestureTsx2(show,isFling,velocity,force){const{translateX,width,onVisibilityChange,runOnJS,onPreMovement,panelsConfig,isTimingConfig,withTiming,withSpring}=this.__closure;if(!force&&translateX.get()!==0&&translateX.get()!==width){return false;}const targetTranslationX=show?0:width;if(translateX.get()===targetTranslationX){if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}return false;}if(onPreMovement!=null){runOnJS(onPreMovement)(show);}const animationConfig=show?isFling?panelsConfig.swipeSidePanelOpen:panelsConfig.nonSwipeSidePanelOpen:isFling?panelsConfig.swipeSidePanelClose:panelsConfig.nonSwipeSidePanelClose;function handleAnimationFinish(finished){'worklet';if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}translateX.set(isTimingConfig(animationConfig)?withTiming(targetTranslationX,animationConfig,'respect-motion-settings',handleAnimationFinish):withSpring(targetTranslationX,{...animationConfig,velocity:velocity},'respect-motion-settings',handleAnimationFinish));return true;}" };
let closure_9 = { code: "function handleAnimationFinish_useMainTabsPanelsGestureTsx3(finished){const{onVisibilityChange,runOnJS,show}=this.__closure;if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}" };
let closure_10 = { code: "function useMainTabsPanelsGestureTsx4(){const{disallowGesture}=this.__closure;return disallowGesture.get();}" };
let closure_11 = { code: "function useMainTabsPanelsGestureTsx5(currentDisallow,previousDisallow){const{didJustAllowGesture}=this.__closure;if(currentDisallow===previousDisallow)return;if(currentDisallow)return;didJustAllowGesture.set(true);}" };
let closure_12 = { code: "function useMainTabsPanelsGestureTsx6(e){const{isDragging,disallowGesture,didJustAllowGesture,runOnJS,setIsDraggingRef,panelsConfig,movePanel,translateX,width}=this.__closure;try{if(!isDragging.get()||disallowGesture.get()||didJustAllowGesture.get()){return;}}finally{isDragging.set(false);didJustAllowGesture.set(false);runOnJS(setIsDraggingRef)(false);}if(Math.abs(e.velocityX)>panelsConfig.minFlingVelocityX){movePanel(e.velocityX<0,true,e.velocityX,true);}else{movePanel(translateX.get()<width/2,false,e.velocityX,true);}}" };
let closure_13 = { code: "function useMainTabsPanelsGestureTsx7(e){const{disallowGesture,translateX,width,didJustAllowGesture}=this.__closure;if(disallowGesture.get()){const currentTranslateX=translateX.get();if(currentTranslateX===0||currentTranslateX===width){return;}translateX.set(0);return;}translateX.set(Math.max(0,Math.min(width,translateX.get()+e.changeX)));didJustAllowGesture.set(false);}" };
let closure_14 = { code: "function useMainTabsPanelsGestureTsx8(){const{isDragging,runOnJS,setIsDraggingRef,onDragStart}=this.__closure;isDragging.set(true);runOnJS(setIsDraggingRef)(true);if(onDragStart!=null){runOnJS(onDragStart)();}}" };
let closure_15 = { code: "function useMainTabsPanelsGestureTsx9(event,manager){const{State,startPosition,GESTURE_MIN_DISTANCE,disallowGesture,translateX,cancelOnSwipeRightFromStart,width,launchPadType,LaunchPadTypes,windowWidth,LAUNCHPAD_GESTURE_INSET}=this.__closure;if(event.state!==State.BEGAN)return;const touch=event.allTouches[0];if(touch==null)return;const xDiff=touch.x-startPosition.get().x;const xDiffAbs=Math.abs(xDiff);if(xDiffAbs<=GESTURE_MIN_DISTANCE)return;if(disallowGesture.get()){return;}const yDiffAbs=Math.abs(touch.y-startPosition.get().y);if(xDiffAbs<=yDiffAbs||xDiffAbs*xDiffAbs+yDiffAbs*yDiffAbs<GESTURE_MIN_DISTANCE*GESTURE_MIN_DISTANCE){return;}if(xDiff<=0){if(translateX.get()===0){manager.fail();return;}}else{if(cancelOnSwipeRightFromStart===true&&translateX.get()>=width){manager.fail();return;}}const isGestureBasedLaunchPad=launchPadType===LaunchPadTypes.GESTURE_EDGE||launchPadType===LaunchPadTypes.GESTURE_FULL;if(isGestureBasedLaunchPad&&xDiff<0){const launchpadGestureEdge=windowWidth-LAUNCHPAD_GESTURE_INSET;if(launchPadType===LaunchPadTypes.GESTURE_FULL&&startPosition.get().x<launchpadGestureEdge||launchPadType===LaunchPadTypes.GESTURE_EDGE&&startPosition.get().x>=launchpadGestureEdge){manager.fail();return;}}manager.activate();}" };
let closure_16 = { code: "function useMainTabsPanelsGestureTsx10(event,manager){const{startPosition}=this.__closure;const touch=event.allTouches[0];if(touch==null)return;startPosition.set({x:touch.x,y:touch.y});manager.begin();}" };
let result = set.fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx");

export default function useMainTabsPanelsGesture(canDrag) {
  let cancelOnSwipeRightFromStart;
  let openWidth;
  canDrag = canDrag.canDrag;
  const onVisibilityChange = canDrag.onVisibilityChange;
  const onDragStart = canDrag.onDragStart;
  const onPreMovement = canDrag.onPreMovement;
  ({ openWidth, cancelOnSwipeRightFromStart } = canDrag);
  let c5;
  let c6;
  let width;
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
  let tmp3 = onVisibilityChange(onDragStart[4])();
  c5 = tmp3;
  const tmp4 = onVisibilityChange(onDragStart[5])();
  c6 = tmp4;
  width = onVisibilityChange(onDragStart[6])().width;
  if (openWidth == null) {
    openWidth = width;
  }
  let obj = canDrag(tmp2[7]);
  let num = 0;
  if (!canDrag.startShown) {
    num = openWidth;
  }
  sharedValue = obj.useSharedValue(num);
  let tmp5Result = tmp5(tmp2[7]);
  sharedValue1 = tmp5Result.useSharedValue(false);
  ref = onPreMovement.useRef(false);
  const items = [ref];
  callback = onPreMovement.useCallback((current) => {
    ref.current = current;
  }, items);
  tmp5Result = tmp5(tmp2[7]);
  sharedValue2 = tmp5Result.useSharedValue(false);
  const items1 = [sharedValue1, sharedValue, openWidth];
  const effect = onPreMovement.useEffect(() => {
    let obj = canDrag(onDragStart[7]);
    const fn = function e(value) {
      if (!closure_10.get()) {
        if (0 !== closure_9.get()) {
          let withTimingResult = value;
          if (outer1_5) {
            withTimingResult = outer1_0(outer1_2[8]).withTiming(value, outer1_0(outer1_2[9]).timingInstant, "animate-always");
            const obj2 = outer1_0(outer1_2[8]);
          }
          const result = obj.set(withTimingResult);
        }
        obj = closure_9;
      }
    };
    obj = { isDragging: sharedValue1, translateX: sharedValue, IS_ANDROID: c5, withTiming: canDrag(onDragStart[8]).withTiming, timingInstant: canDrag(onDragStart[9]).timingInstant };
    fn.__closure = obj;
    fn.__workletHash = 16976202846494;
    fn.__initData = width;
    obj.runOnUI(fn)(openWidth);
  }, items1);
  class R {
    constructor(arg0, arg1, arg2, arg3) {
      closure_0 = canDrag;
      if (!arg3) {
        obj = c9;
        num = 0;
        if (0 !== c9.get()) {
          tmp = openWidth;
          if (obj.get() !== openWidth) {
            flag = false;
            return false;
          }
        }
      }
      num2 = 0;
      if (!canDrag) {
        num2 = openWidth;
      }
      obj2 = c9;
      if (c9.get() === num2) {
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
        tmp6 = c6;
        if (canDrag) {
          tmp8 = arg1 ? tmp6.swipeSidePanelOpen : tmp6.nonSwipeSidePanelOpen;
        } else {
          tmp7 = arg1 ? tmp6.swipeSidePanelClose : tmp6.nonSwipeSidePanelClose;
          handleAnimationFinish = function handleAnimationFinish(arg0) {
            let tmp = arg0;
            if (arg0) {
              tmp = null != outer1_1;
            }
            if (tmp) {
              canDrag(onDragStart[7]).runOnJS(outer1_1)(closure_0);
              const obj = canDrag(onDragStart[7]);
            }
          };
          obj = { onVisibilityChange: null, runOnJS: null, show: null };
          tmp9 = onVisibilityChange;
          obj[0] = onVisibilityChange;
          tmp10 = canDrag;
          tmp11 = onDragStart;
          obj[1] = canDrag(onDragStart[7]).runOnJS;
          obj[2] = canDrag;
          handleAnimationFinish.__closure = obj;
          num3 = 1018878139815;
          handleAnimationFinish.__workletHash = 1018878139815;
          tmp12 = c9;
          handleAnimationFinish.__initData = c9;
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
            obj1 = {};
            tmp19 = obj1;
            tmp20 = tmp7;
            merged = Object.assign(tmp17);
            obj1.velocity = arg2;
            str = "respect-motion-settings";
            tmp22 = tmp15Result1;
            tmp23 = num2;
            tmp24 = obj1;
            tmp25 = handleAnimationFinish;
            withTimingResult = tmp15Result1.withSpring(num2, obj1, "respect-motion-settings", handleAnimationFinish);
          }
          result = obj2.set(withTimingResult);
          flag2 = true;
          return true;
        }
      }
      return;
    }
  }
  obj = { translateX: sharedValue, width: openWidth, onVisibilityChange, runOnJS: tmp5(tmp2[7]).runOnJS, onPreMovement, panelsConfig: c6, isTimingConfig: tmp5(tmp2[3]).isTimingConfig, withTiming: tmp5(tmp2[8]).withTiming, withSpring: tmp5(tmp2[10]).withSpring };
  R.__closure = obj;
  R.__workletHash = 4205680413964;
  R.__initData = openWidth;
  const items2 = [onVisibilityChange, onPreMovement, sharedValue, openWidth];
  callback1 = onPreMovement.useCallback(R, items2);
  sharedValue3 = canDrag(onDragStart[7]).useSharedValue(false);
  let tmp = onVisibilityChange;
  const tmp5Result1 = canDrag(onDragStart[7]);
  class U {
    constructor() {
      return c13.get();
    }
  }
  U.__closure = { disallowGesture: sharedValue2 };
  U.__workletHash = 15338765161171;
  U.__initData = sharedValue1;
  class N {
    constructor(arg0, arg1) {
      if (canDrag !== arg1) {
        if (!canDrag) {
          tmp = useSharedValue;
          flag = true;
          result = useSharedValue.set(true);
        }
      }
      return;
    }
  }
  N.__closure = { didJustAllowGesture: sharedValue3 };
  N.__workletHash = 17048450187141;
  N.__initData = ref;
  const animatedReaction = canDrag(onDragStart[7]).useAnimatedReaction(U, N);
  const tmp5Result2 = canDrag(onDragStart[7]);
  sharedValue4 = canDrag(onDragStart[7]).useSharedValue({ x: 0, y: 0 });
  context = onPreMovement.useContext(tmp(tmp2[11]));
  const items3 = [tmp4, sharedValue, openWidth, width, sharedValue1, callback1, onDragStart, canDrag, sharedValue4, tmp3, cancelOnSwipeRightFromStart, sharedValue2, callback, context, sharedValue3];
  memo = onPreMovement.useMemo(() => {
    const Gesture = canDrag(onDragStart[12]).Gesture;
    const PanResult = Gesture.Pan();
    let result = Gesture.Pan().enabled(canDrag).requireExternalGestureToFail(context);
    let obj3 = canDrag(onDragStart[2]);
    const enabledResult = Gesture.Pan().enabled(canDrag);
    let obj = { top: -_undefined.top, left: -_undefined.left, bottom: -_undefined.bottom, right: -_undefined.right };
    const manualActivationResult = result.manualActivation(obj3.isAndroid());
    const fn = function u(arg0, begin) {
      const first = arg0.allTouches[0];
      if (null != first) {
        const obj = { x: null, y: null };
        ({ x: obj[0], y: obj[1] } = first);
        const result = store5.set(obj);
        begin.begin();
      }
    };
    obj = { startPosition: sharedValue4 };
    fn.__closure = obj;
    fn.__workletHash = 718728838752;
    fn.__initData = sharedValue4;
    const hitSlopResult = result.manualActivation(obj3.isAndroid()).hitSlop(obj);
    const fn2 = function l(state, fail) {
      if (state.state === outer1_0(outer1_2[12]).State.BEGAN) {
        const point = state.allTouches[0];
        if (null != point) {
          const diff = point.x - store5.get().x;
          const _Math2 = Math;
          const absolute = Math.abs(diff);
          if (absolute > 12) {
            if (!store3.get()) {
              const _Math = Math;
              const absolute1 = Math.abs(point.y - obj.get().y);
              if (absolute > absolute1) {
                if (absolute * absolute + absolute1 * absolute1 >= 144) {
                  if (diff <= 0) {
                    if (0 === store.get()) {
                      fail.fail();
                    }
                  } else if (true === closure_4) {
                    if (store.get() >= closure_8) {
                      fail.fail();
                    }
                  }
                  if (closure_5 === outer1_4.GESTURE_EDGE) {
                    if (diff < 0) {
                      const diff1 = closure_7 - 48;
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
    const onTouchesDownResult = result.manualActivation(obj3.isAndroid()).hitSlop(obj).onTouchesDown(fn);
    fn2.__closure = { State: canDrag(onDragStart[12]).State, startPosition: sharedValue4, GESTURE_MIN_DISTANCE: 12, disallowGesture: sharedValue2, translateX: sharedValue, cancelOnSwipeRightFromStart, width: openWidth, launchPadType: c5, LaunchPadTypes: cancelOnSwipeRightFromStart, windowWidth: width, LAUNCHPAD_GESTURE_INSET: 48 };
    fn2.__workletHash = 13108412336922;
    fn2.__initData = sharedValue3;
    const obj1 = { State: canDrag(onDragStart[12]).State, startPosition: sharedValue4, GESTURE_MIN_DISTANCE: 12, disallowGesture: sharedValue2, translateX: sharedValue, cancelOnSwipeRightFromStart, width: openWidth, launchPadType: c5, LaunchPadTypes: cancelOnSwipeRightFromStart, windowWidth: width, LAUNCHPAD_GESTURE_INSET: 48 };
    const fn3 = function o() {
      const result = store2.set(true);
      outer1_0(outer1_2[7]).runOnJS(closure_12)(true);
      if (null != closure_2) {
        outer1_0(outer1_2[7]).runOnJS(tmp5)();
        const tmp2Result = outer1_0(outer1_2[7]);
      }
    };
    const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(fn2);
    fn3.__closure = { isDragging: sharedValue1, runOnJS: canDrag(onDragStart[7]).runOnJS, setIsDraggingRef: callback, onDragStart };
    fn3.__workletHash = 8659650895938;
    fn3.__initData = callback1;
    let obj2 = { isDragging: sharedValue1, runOnJS: canDrag(onDragStart[7]).runOnJS, setIsDraggingRef: callback, onDragStart };
    const fn4 = function n(changeX) {
      if (store3.get()) {
        const value = obj.get();
        if (0 !== value) {
          if (value !== closure_8) {
            const result = obj.set(0);
          }
        }
      } else {
        const _Math = Math;
        const _Math2 = Math;
        const result1 = obj.set(Math.max(0, Math.min(closure_8, obj.get() + changeX.changeX)));
        const result2 = store4.set(false);
      }
    };
    obj3 = { disallowGesture: sharedValue2, translateX: sharedValue, width: openWidth, didJustAllowGesture: sharedValue3 };
    fn4.__closure = obj3;
    fn4.__workletHash = 13355779907583;
    fn4.__initData = sharedValue2;
    const onStartResult = onTouchesMoveResult.onStart(fn3);
    const fn5 = function e(velocityX) {
      try {
        if (store2.get()) {
          if (!store3.get()) {
            if (!store4.get()) {
              const result = obj.set(false);
              const result1 = obj2.set(false);
              outer1_0(outer1_2[7]).runOnJS(closure_12)(false);
              const _Math = Math;
              if (Math.abs(velocityX.velocityX) > outer1_6.minFlingVelocityX) {
                callback(velocityX.velocityX < 0, true, velocityX.velocityX, true);
              } else {
                callback(store.get() < closure_8 / 2, false, velocityX.velocityX, true);
              }
            }
            obj2 = store4;
            const tmp3 = store4;
          }
        }
        const result2 = obj.set(false);
        const result3 = store4.set(false);
        outer1_0(outer1_2[7]).runOnJS(closure_12)(false);
      } catch (tmp30) {
        const result4 = store2.set(false);
        const result5 = store4.set(false);
        outer1_0(outer1_2[7]).runOnJS(closure_12)(false);
        throw tmp30;
      }
    };
    const onChangeResult = onTouchesMoveResult.onStart(fn3).onChange(fn4);
    fn5.__closure = { isDragging: sharedValue1, disallowGesture: sharedValue2, didJustAllowGesture: sharedValue3, runOnJS: canDrag(onDragStart[7]).runOnJS, setIsDraggingRef: callback, panelsConfig: _undefined, movePanel: callback1, translateX: sharedValue, width: openWidth };
    fn5.__workletHash = 2071301756262;
    fn5.__initData = callback;
    return onChangeResult.onFinalize(fn5);
  }, items3);
  const items4 = [memo, sharedValue2, sharedValue];
  obj = { gesture: memo, panelGestureContext: onPreMovement.useMemo(() => ({ gesture: memo, disallowGesture: sharedValue2, translateX: sharedValue }), items4), isDragging: sharedValue1, translateX: sharedValue, movePanel: callback1, maxWidth: openWidth, isDraggingRef: ref };
  return obj;
};