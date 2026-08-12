// discord_app/modules/launchpad/native/useLaunchPadGesture.tsx
import noop from "noop";
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG";

let c10;
let c4;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE: c4, LAUNCH_PAD_END_TRANSLATION_THRESHOLD: c5, LAUNCH_PAD_END_VELOCITY_THRESHOLD: closure_6, LAUNCH_PAD_PULL_TAB_HEIGHT: error, LAUNCH_PAD_PULL_TAB_HIT_SLOP: metroImportAll, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: c9, LAUNCH_PAD_PULL_TAB_WIDTH: c10, LaunchPadTypes: unpackModuleId } = LAUNCH_PAD_SPRING_CONFIG);
let closure_12 = { code: "function useLaunchPadGestureTsx1(){const{updateSharedValueIfChanged,gestureState,updaters}=this.__closure;updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});updaters.setLaunchPadPullTabScale(1.0);}" };
let closure_13 = { code: "function useLaunchPadGestureTsx2(){const{gestureState,updaters,updateSharedValueIfChanged}=this.__closure;const{initialLaunchPadPosition:initialLaunchPadPosition,active:active}=gestureState.get();if(active){if(initialLaunchPadPosition===1){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});}" };
let closure_14 = { code: "function useLaunchPadGestureTsx3({velocityX:velocityX,velocityY:velocityY,translationX:translationX,translationY:translationY}){const{gestureState,launchPadType,LaunchPadTypes,LAUNCH_PAD_END_TRANSLATION_THRESHOLD,LAUNCH_PAD_END_VELOCITY_THRESHOLD,updaters,launchPadSharedState}=this.__closure;const{requiresPop:requiresPop,startShown:startShown}=gestureState.get();if(requiresPop){if(!startShown){const isPullTabTapComplete=launchPadType===LaunchPadTypes.PULL_TAB&&Math.abs(translationX)<=LAUNCH_PAD_END_TRANSLATION_THRESHOLD&&Math.abs(translationY)<=LAUNCH_PAD_END_TRANSLATION_THRESHOLD&&Math.abs(velocityX)<=LAUNCH_PAD_END_VELOCITY_THRESHOLD&&Math.abs(velocityY)<=LAUNCH_PAD_END_VELOCITY_THRESHOLD;if(isPullTabTapComplete){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else{updaters.setLaunchPadPosition(1);}}else if(Math.abs(velocityX)<LAUNCH_PAD_END_VELOCITY_THRESHOLD){if(launchPadSharedState.get()>=0.5){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else if(velocityX>0){updaters.setLaunchPadPosition(0);}else{updaters.setLaunchPadPosition(1);}}" };
let closure_15 = { code: "function useLaunchPadGestureTsx4({translationX:translationX,translationY:translationY,absoluteX:absoluteX}){const{gestureState,getWindowDimensionsWorklet,POP_RESISTANCE,launchPadType,LaunchPadTypes,PIP_POP_DISTANCE,updaters,updateSharedValueIfChanged,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active)return;const{initialTouchX:initialTouchX,requiresPop:requiresPop}=gestureState.get();const{width:windowWidth}=getWindowDimensionsWorklet();const newXOffset=absoluteX-initialTouchX;const distance=Math.max(newXOffset*-1,0);const resistance=distance*POP_RESISTANCE;const positionOffsetX=absoluteX-gestureState.get().initialTouchX;const launchPadPosition=1-(gestureState.get().initialTouchX+translationX-(launchPadType!==LaunchPadTypes.PULL_TAB?40:0))/windowWidth;if(requiresPop&&distance<=PIP_POP_DISTANCE){if(launchPadType!==LaunchPadTypes.PULL_TAB){const a=(distance-resistance)/windowWidth;updaters.setLaunchPadPosition(a);}else{updaters.setLaunchPadPullTabTranslation(translationY);}updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}else{if(requiresPop){updateSharedValueIfChanged(gestureState,{requiresPop:false,positionOffsetX:positionOffsetX});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}updaters.setLaunchPadPosition(launchPadPosition);}}" };
let closure_16 = { code: "function useLaunchPadGestureTsx5(event,manager){const{gestureState,State,getWindowDimensionsWorklet,launchPadType,LaunchPadTypes,LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE,LAUNCH_PAD_PULL_TAB_WIDTH,LAUNCH_PAD_PULL_TAB_HIT_SLOP,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_HEIGHT,updaters,LAUNCH_PAD_PULL_TAB_SCALE_FACTOR,launchPadSharedState,MANUAL_ACTIVATION_THRESHOLD}=this.__closure;const{active:active,initialLaunchPadPosition:initialLaunchPadPosition,initialTouchX:initialTouchX,initialTouchY:initialTouchY}=gestureState.get();if(event.state!==State.BEGAN||active)return;const currentTouch=event.changedTouches[0];if(currentTouch==null){manager.fail();return;}const{x:x,y:y}=currentTouch;const{width:windowWidth}=getWindowDimensionsWorklet();switch(launchPadType){case LaunchPadTypes.DISABLED:manager.fail();return;case LaunchPadTypes.GESTURE_EDGE:if(initialLaunchPadPosition===0&&initialTouchX<windowWidth-LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE){manager.fail();return;}break;case LaunchPadTypes.PULL_TAB:{if(initialLaunchPadPosition>0)break;const inPullTabX=x>windowWidth-LAUNCH_PAD_PULL_TAB_WIDTH-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&x<windowWidth;const inPullTabY=y>launchPadPullTabState.get().position-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&y<launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_HIT_SLOP;if(!inPullTabX||!inPullTabY){manager.fail();return;}gestureState.set({...gestureState.get(),initialPullTabPosition:launchPadPullTabState.get().position,active:true});updaters.setLaunchPadPullTabScale(LAUNCH_PAD_PULL_TAB_SCALE_FACTOR);updaters.setLaunchPadShown(true);manager.activate();return;}case LaunchPadTypes.GESTURE_FULL:break;default:launchPadType;manager.fail();return;}const horizontalDistance=x-initialTouchX;const verticalDistance=Math.abs(y-initialTouchY);const hasMovedCorrectDirection=launchPadSharedState.get()>0&&horizontalDistance>0||launchPadSharedState.get()<=0&&horizontalDistance<0;if(hasMovedCorrectDirection&&Math.abs(horizontalDistance)>verticalDistance){if(Math.abs(horizontalDistance)<MANUAL_ACTIVATION_THRESHOLD){return;}gestureState.set({...gestureState.get(),active:true});updaters.setLaunchPadShown(true);manager.activate();return;}manager.fail();}" };
let closure_17 = { code: "function useLaunchPadGestureTsx6(event){const{gestureState,launchPadSharedState}=this.__closure;const{x:x,y:y}=event.changedTouches[0];gestureState.set({active:false,initialLaunchPadPosition:launchPadSharedState.get(),initialPullTabPosition:0,initialTouchX:x,initialTouchY:y,positionOffsetX:0,positionOffsetY:0,startTime:Date.now(),requiresPop:launchPadSharedState.get()===0,startShown:!(launchPadSharedState.get()===0)});}" };
let result = require("coerceMainRoute").fileFinishedImporting("modules/launchpad/native/useLaunchPadGesture.tsx");

export default function useLaunchPadGesture(launchPadType) {
  launchPadType = launchPadType.launchPadType;
  const launchPadSharedState = launchPadType.launchPadSharedState;
  const launchPadPullTabState = launchPadType.launchPadPullTabState;
  const gestureState = launchPadType.gestureState;
  const updaters = launchPadType.updaters;
  let isModalOpen;
  let c6;
  let ref;
  let obj = launchPadType(launchPadPullTabState[2]);
  isModalOpen = obj.useIsModalOpen();
  const tmp2 = launchPadSharedState(launchPadPullTabState[3])();
  c6 = tmp2;
  ref = gestureState.useRef(undefined);
  obj = {
    gesture: gestureState.useMemo(() => {
      let num = 0;
      if (launchPadType === outer1_11.GESTURE_FULL) {
        num = -1 * updaters;
      }
      const Gesture = launchPadType(launchPadPullTabState[4]).Gesture;
      let tmp6 = !isModalOpen;
      if (!isModalOpen) {
        tmp6 = tmp !== tmp2.DISABLED;
      }
      const PanResult = Gesture.Pan();
      const enabledResult = Gesture.Pan().enabled(tmp6);
      const withRefResult = Gesture.Pan().enabled(tmp6).withRef(ref);
      const minDistanceResult = Gesture.Pan().enabled(tmp6).withRef(ref).minDistance(0);
      const maxPointersResult = Gesture.Pan().enabled(tmp6).withRef(ref).minDistance(0).maxPointers(1);
      const tmp4Result = launchPadType(launchPadPullTabState[5]);
      let obj = { top: -1 * _undefined.top, left: 0, bottom: -1 * _undefined.bottom, right: num };
      const manualActivationResult = maxPointersResult.manualActivation(launchPadType(launchPadPullTabState[5]).isAndroid());
      const fn = function w(arg0) {
        let x;
        let y;
        ({ x, y } = arg0.changedTouches[0]);
        const result = store2.set({ active: false, initialLaunchPadPosition: store.get(), initialPullTabPosition: 0, initialTouchX: x, initialTouchY: y, positionOffsetX: 0, positionOffsetY: 0, startTime: Date.now(), requiresPop: 0 === store.get(), startShown: 0 !== store.get() });
      };
      obj = { gestureState, launchPadSharedState };
      fn.__closure = obj;
      fn.__workletHash = 14359599806316;
      fn.__initData = outer1_17;
      const hitSlopResult = maxPointersResult.manualActivation(launchPadType(launchPadPullTabState[5]).isAndroid()).hitSlop(obj);
      class X {
        constructor(arg0, arg1) {
          obj = noop;
          value = noop.get();
          ({ initialLaunchPadPosition, initialTouchX } = value);
          ({ active, initialTouchY } = value);
          tmp2 = outer1_0;
          tmp3 = outer1_2;
          if (arg0.state === outer1_0(outer1_2[4]).State.BEGAN) {
            if (!active) {
              tmp4 = arg1;
              first = arg0.changedTouches[0];
              tmp6 = null;
              if (null != first) {
                ({ x, y } = first);
                tmp2Result = tmp2(tmp3[6]);
                width = tmp2Result.getWindowDimensionsWorklet().width;
                tmp8 = closure_0;
                tmp9 = outer1_11;
                if (outer1_11.DISABLED === closure_0) {
                  failResult = arg1.fail();
                  return;
                } else {
                  if (tmp9.GESTURE_EDGE === tmp8) {
                    num2 = 0;
                    if (0 === initialLaunchPadPosition) {
                      tmp23 = outer1_4;
                      if (initialTouchX < width - outer1_4) {
                        failResult1 = arg1.fail();
                        return;
                      }
                    }
                  } else if (tmp9.PULL_TAB === tmp8) {
                    num = 0;
                    if (initialLaunchPadPosition <= 0) {
                      obj6 = closure_2;
                      tmp37 = outer1_8;
                      tmp11 = y > closure_2.get().position - outer1_8;
                      if (tmp11) {
                        tmp10 = outer1_7;
                        tmp11 = y < obj6.get().position + outer1_7 + tmp37;
                      }
                      tmp12 = outer1_10;
                      if (x > width - outer1_10 - tmp37) {
                        if (x < width) {
                          if (tmp11) {
                            obj = {};
                            tmp15 = obj;
                            merged = Object.assign(obj.get());
                            obj.initialPullTabPosition = obj6.get().position;
                            flag = true;
                            obj.active = true;
                            result = obj.set(obj);
                            tmp18 = closure_4;
                            tmp19 = outer1_9;
                            result1 = closure_4.setLaunchPadPullTabScale(outer1_9);
                            setLaunchPadShownResult = closure_4.setLaunchPadShown(true);
                            activateResult = arg1.activate();
                          }
                          return tmp14;
                        }
                      }
                      failResult2 = arg1.fail();
                    }
                  } else if (tmp9.GESTURE_FULL !== tmp8) {
                    failResult3 = arg1.fail();
                    return;
                  }
                  diff = x - initialTouchX;
                  tmp25 = globalThis;
                  _Math = Math;
                  obj4 = closure_1;
                  absolute = Math.abs(y - initialTouchY);
                  num3 = 0;
                  if (closure_1.get() <= 0) {
                    if (obj4.get() <= 0) {
                    }
                    failResult4 = arg1.fail();
                  }
                  _Math2 = Math;
                  if (Math.abs(diff) > absolute) {
                    _Math3 = Math;
                    num4 = 3;
                    if (Math.abs(diff) < 3) {
                      return;
                    } else {
                      obj1 = {};
                      tmp28 = obj1;
                      merged1 = Object.assign(obj.get());
                      flag2 = true;
                      obj1.active = true;
                      result2 = obj.set(obj1);
                      tmp31 = closure_4;
                      setLaunchPadShownResult1 = closure_4.setLaunchPadShown(true);
                      activateResult1 = arg1.activate();
                      return;
                    }
                  }
                }
              } else {
                failResult5 = arg1.fail();
              }
            }
          }
          return;
        }
      }
      const onTouchesDownResult = maxPointersResult.manualActivation(launchPadType(launchPadPullTabState[5]).isAndroid()).hitSlop(obj).onTouchesDown(fn);
      X.__closure = { gestureState, State: launchPadType(launchPadPullTabState[4]).State, getWindowDimensionsWorklet: launchPadType(launchPadPullTabState[6]).getWindowDimensionsWorklet, launchPadType, LaunchPadTypes: outer1_11, LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE: updaters, LAUNCH_PAD_PULL_TAB_WIDTH: outer1_10, LAUNCH_PAD_PULL_TAB_HIT_SLOP: outer1_8, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_HEIGHT: ref, updaters, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: outer1_9, launchPadSharedState, MANUAL_ACTIVATION_THRESHOLD: 3 };
      X.__workletHash = 17469318427529;
      X.__initData = outer1_16;
      let obj1 = { gestureState, State: launchPadType(launchPadPullTabState[4]).State, getWindowDimensionsWorklet: launchPadType(launchPadPullTabState[6]).getWindowDimensionsWorklet, launchPadType, LaunchPadTypes: outer1_11, LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE: updaters, LAUNCH_PAD_PULL_TAB_WIDTH: outer1_10, LAUNCH_PAD_PULL_TAB_HIT_SLOP: outer1_8, launchPadPullTabState, LAUNCH_PAD_PULL_TAB_HEIGHT: ref, updaters, LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: outer1_9, launchPadSharedState, MANUAL_ACTIVATION_THRESHOLD: 3 };
      class I {
        constructor(arg0) {
          absoluteX = arg0.absoluteX;
          obj = noop;
          ({ translationX, translationY } = arg0);
          if (noop.get().active) {
            value = obj.get();
            requiresPop = value.requiresPop;
            tmp2 = outer1_0;
            tmp3 = outer1_2;
            obj2 = outer1_0(outer1_2[6]);
            width = obj2.getWindowDimensionsWorklet().width;
            tmp4 = globalThis;
            _Math = Math;
            num = -1;
            num2 = 0;
            bound = Math.max(-1 * (absoluteX - value.initialTouchX), 0);
            diff = absoluteX - obj.get().initialTouchX;
            sum = obj.get().initialTouchX + translationX;
            tmp8 = closure_0;
            tmp9 = outer1_11;
            if (closure_0 !== outer1_11.PULL_TAB) {
              num2 = 40;
            }
            result = (sum - num2) / width;
            if (requiresPop) {
              num3 = 70;
              if (bound <= 70) {
                if (tmp8 !== tmp9.PULL_TAB) {
                  tmp21 = closure_4;
                  num5 = 0.5;
                  setLaunchPadPositionResult = closure_4.setLaunchPadPosition((bound - 0.5 * bound) / width);
                } else {
                  tmp19 = closure_4;
                  result1 = closure_4.setLaunchPadPullTabTranslation(translationY);
                }
                tmp23 = outer1_1;
                obj = { positionOffsetX: null };
                obj[0] = diff;
                tmp3 = outer1_1(tmp3[7])(obj, obj);
              }
            }
            tmp11 = outer1_1;
            tmp12 = outer1_1(tmp3[7]);
            if (requiresPop) {
              obj1 = { requiresPop: false, positionOffsetX: null };
              obj1[1] = diff;
              tmp12Result = tmp12(obj, obj1);
              tmp2Result = tmp2(tmp3[8]);
              runOnJSResult = tmp2Result.runOnJS(tmp2(tmp3[9]).triggerHapticFeedback);
              tmp15Result = runOnJSResult(tmp2(tmp3[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
            } else {
              obj2 = { positionOffsetX: null };
              obj2[0] = diff;
              tmp12Result1 = tmp12(obj, obj2);
            }
            num4 = 1;
            tmp17 = closure_4;
            setLaunchPadPositionResult1 = closure_4.setLaunchPadPosition(1 - result);
          }
          return;
        }
      }
      const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(X);
      I.__closure = { gestureState, getWindowDimensionsWorklet: launchPadType(launchPadPullTabState[6]).getWindowDimensionsWorklet, POP_RESISTANCE: 0.5, launchPadType, LaunchPadTypes: outer1_11, PIP_POP_DISTANCE: 70, updaters, updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]), runOnJS: launchPadType(launchPadPullTabState[8]).runOnJS, triggerHapticFeedback: launchPadType(launchPadPullTabState[9]).triggerHapticFeedback, HapticFeedbackTypes: launchPadType(launchPadPullTabState[9]).HapticFeedbackTypes };
      I.__workletHash = 8073380735713;
      I.__initData = outer1_15;
      const obj2 = { gestureState, getWindowDimensionsWorklet: launchPadType(launchPadPullTabState[6]).getWindowDimensionsWorklet, POP_RESISTANCE: 0.5, launchPadType, LaunchPadTypes: outer1_11, PIP_POP_DISTANCE: 70, updaters, updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]), runOnJS: launchPadType(launchPadPullTabState[8]).runOnJS, triggerHapticFeedback: launchPadType(launchPadPullTabState[9]).triggerHapticFeedback, HapticFeedbackTypes: launchPadType(launchPadPullTabState[9]).HapticFeedbackTypes };
      const fn2 = function v(velocityX) {
        let translationX;
        let translationY;
        let velocityY;
        velocityX = velocityX.velocityX;
        ({ velocityY, translationX, translationY } = velocityX);
        const value = store2.get();
        if (value.requiresPop) {
          if (value.startShown) {
            uiStore.setLaunchPadPosition(1);
          } else {
            if (closure_0 === outer1_11.PULL_TAB) {
              const _Math2 = Math;
              if (Math.abs(translationX) <= outer1_5) {
                const _Math3 = Math;
                if (Math.abs(translationY) <= tmp16) {
                  const _Math4 = Math;
                  if (Math.abs(velocityX) <= outer1_6) {
                    const _Math5 = Math;
                  }
                }
              }
            }
            uiStore.setLaunchPadPosition(0);
          }
        } else {
          const _Math = Math;
          if (Math.abs(velocityX) < outer1_6) {
            if (store.get() >= 0.5) {
              uiStore.setLaunchPadPosition(1);
            } else {
              uiStore.setLaunchPadPosition(0);
            }
          } else if (velocityX > 0) {
            uiStore.setLaunchPadPosition(0);
          } else {
            uiStore.setLaunchPadPosition(1);
          }
        }
      };
      fn2.__closure = { gestureState, launchPadType, LaunchPadTypes: outer1_11, LAUNCH_PAD_END_TRANSLATION_THRESHOLD: isModalOpen, LAUNCH_PAD_END_VELOCITY_THRESHOLD: _undefined, updaters, launchPadSharedState };
      fn2.__workletHash = 13108163303108;
      fn2.__initData = outer1_14;
      const obj3 = { gestureState, launchPadType, LaunchPadTypes: outer1_11, LAUNCH_PAD_END_TRANSLATION_THRESHOLD: isModalOpen, LAUNCH_PAD_END_VELOCITY_THRESHOLD: _undefined, updaters, launchPadSharedState };
      const onChangeResult = onTouchesMoveResult.onChange(I);
      const fn3 = function b() {
        const value = store2.get();
        if (value.active) {
          if (1 === tmp3) {
            uiStore.setLaunchPadPosition(1);
          } else {
            uiStore.setLaunchPadPosition(0);
          }
        }
        outer1_1(outer1_2[7])(store2, { active: false, initialLaunchPadPosition: 0, initialPullTabPosition: 0, initialTouchX: 0, initialTouchY: 0, positionOffsetX: 0, positionOffsetY: 0, startTime: -1 });
      };
      const onEndResult = onTouchesMoveResult.onChange(I).onEnd(fn2);
      fn3.__closure = { gestureState, updaters, updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]) };
      fn3.__workletHash = 11677880944102;
      fn3.__initData = outer1_13;
      let obj4 = { gestureState, updaters, updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]) };
      const fn4 = function t() {
        outer1_1(outer1_2[7])(noop, { active: false, initialLaunchPadPosition: 0, initialPullTabPosition: 0, initialTouchX: 0, initialTouchY: 0, positionOffsetX: 0, positionOffsetY: 0, startTime: -1 });
        const result = uiStore.setLaunchPadPullTabScale(1);
      };
      const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn3);
      fn4.__closure = { updateSharedValueIfChanged: launchPadSharedState(launchPadPullTabState[7]), gestureState, updaters };
      fn4.__workletHash = 14463491499289;
      fn4.__initData = outer1_12;
      return onTouchesCancelledResult.onFinalize(fn4);
    }, items),
    gestureRef: ref
  };
  items = [gestureState, tmp2, isModalOpen, launchPadPullTabState, launchPadSharedState, launchPadType, updaters];
  return obj;
};