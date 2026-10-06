// discord_app/modules/launchpad/native/useLaunchPadGesture.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../_runtime/06147_LegacyBaseButton.js";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import useWindowDimensionsSharedValue from "../../screen/useWindowDimensionsSharedValue.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import LaunchPadConstants from "LaunchPadConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let set, set2;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({
  LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE: closure_4,
  LAUNCH_PAD_END_TRANSLATION_THRESHOLD: hasOwnProperty,
  LAUNCH_PAD_END_VELOCITY_THRESHOLD: metroRequire,
  LAUNCH_PAD_PULL_TAB_HEIGHT: metroImportDefault,
  LAUNCH_PAD_PULL_TAB_HIT_SLOP: metroImportAll,
  LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: c9,
  LAUNCH_PAD_PULL_TAB_WIDTH: c10,
  LaunchPadTypes: unpackModuleId,
} = LaunchPadConstants);
let closure_12 = {
  code: "function useLaunchPadGestureTsx1(){const{updateSharedValueIfChanged,gestureState,updaters}=this.__closure;updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});updaters.setLaunchPadPullTabScale(1.0);}",
};
let closure_13 = {
  code: "function useLaunchPadGestureTsx2(){const{gestureState,updaters,updateSharedValueIfChanged}=this.__closure;const{initialLaunchPadPosition:initialLaunchPadPosition_0,active:active_0}=gestureState.get();if(active_0){if(initialLaunchPadPosition_0===1){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});}",
};
let closure_14 = {
  code: "function useLaunchPadGestureTsx3({velocityX:velocityX,velocityY:velocityY,translationX:translationX_0,translationY:translationY_0}){const{gestureState,launchPadType,LaunchPadTypes,LAUNCH_PAD_END_TRANSLATION_THRESHOLD,LAUNCH_PAD_END_VELOCITY_THRESHOLD,updaters,launchPadSharedState}=this.__closure;const{requiresPop:requiresPop_0,startShown:startShown}=gestureState.get();if(requiresPop_0){if(!startShown){const isPullTabTapComplete=launchPadType===LaunchPadTypes.PULL_TAB&&Math.abs(translationX_0)<=LAUNCH_PAD_END_TRANSLATION_THRESHOLD&&Math.abs(translationY_0)<=LAUNCH_PAD_END_TRANSLATION_THRESHOLD&&Math.abs(velocityX)<=LAUNCH_PAD_END_VELOCITY_THRESHOLD&&Math.abs(velocityY)<=LAUNCH_PAD_END_VELOCITY_THRESHOLD;if(isPullTabTapComplete){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else{updaters.setLaunchPadPosition(1);}}else if(Math.abs(velocityX)<LAUNCH_PAD_END_VELOCITY_THRESHOLD){if(launchPadSharedState.get()>=0.5){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else if(velocityX>0){updaters.setLaunchPadPosition(0);}else{updaters.setLaunchPadPosition(1);}}",
};
let closure_15 = {
  code: "function useLaunchPadGestureTsx4({translationX:translationX,translationY:translationY,absoluteX:absoluteX}){const{gestureState,getWindowDimensionsWorklet,POP_RESISTANCE,launchPadType,LaunchPadTypes,PIP_POP_DISTANCE,updaters,updateSharedValueIfChanged,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active)return;const{initialTouchX:initialTouchX_0,requiresPop:requiresPop}=gestureState.get();const{width:windowWidth_0}=getWindowDimensionsWorklet();const newXOffset=absoluteX-initialTouchX_0;const distance=Math.max(newXOffset*-1,0);const resistance=distance*POP_RESISTANCE;const positionOffsetX=absoluteX-gestureState.get().initialTouchX;const launchPadPosition=1-(gestureState.get().initialTouchX+translationX-(launchPadType!==LaunchPadTypes.PULL_TAB?40:0))/windowWidth_0;if(requiresPop&&distance<=PIP_POP_DISTANCE){if(launchPadType!==LaunchPadTypes.PULL_TAB){const a=(distance-resistance)/windowWidth_0;updaters.setLaunchPadPosition(a);}else{updaters.setLaunchPadPullTabTranslation(translationY);}updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}else{if(requiresPop){updateSharedValueIfChanged(gestureState,{requiresPop:false,positionOffsetX:positionOffsetX});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}updaters.setLaunchPadPosition(launchPadPosition);}}",
};
let closure_16 = {
  code: "function useLaunchPadGestureTsx5(event_0,manager){const{gestureState,State,getWindowDimensionsWorklet,launchPadType,LaunchPadTypes,LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE,LAUNCH_PAD_PULL_TAB_WIDTH,LAUNCH_PAD_PULL_TAB_HIT_SLOP,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_HEIGHT,updaters,LAUNCH_PAD_PULL_TAB_SCALE_FACTOR,launchPadSharedState,MANUAL_ACTIVATION_THRESHOLD}=this.__closure;const{active:active,initialLaunchPadPosition:initialLaunchPadPosition,initialTouchX:initialTouchX,initialTouchY:initialTouchY}=gestureState.get();if(event_0.state!==State.BEGAN||active)return;const currentTouch=event_0.changedTouches[0];if(currentTouch==null){manager.fail();return;}const{x:x_0,y:y_0}=currentTouch;const{width:windowWidth}=getWindowDimensionsWorklet();switch(launchPadType){case LaunchPadTypes.DISABLED:manager.fail();return;case LaunchPadTypes.GESTURE_EDGE:if(initialLaunchPadPosition===0&&initialTouchX<windowWidth-LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE){manager.fail();return;}break;case LaunchPadTypes.PULL_TAB:{if(initialLaunchPadPosition>0)break;const inPullTabX=x_0>windowWidth-LAUNCH_PAD_PULL_TAB_WIDTH-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&x_0<windowWidth;const inPullTabY=y_0>launchPadPullTabState.get().position-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&y_0<launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_HIT_SLOP;if(!inPullTabX||!inPullTabY){manager.fail();return;}gestureState.set({...gestureState.get(),initialPullTabPosition:launchPadPullTabState.get().position,active:true});updaters.setLaunchPadPullTabScale(LAUNCH_PAD_PULL_TAB_SCALE_FACTOR);updaters.setLaunchPadShown(true);manager.activate();return;}case LaunchPadTypes.GESTURE_FULL:break;default:launchPadType;manager.fail();return;}const horizontalDistance=x_0-initialTouchX;const verticalDistance=Math.abs(y_0-initialTouchY);const hasMovedCorrectDirection=launchPadSharedState.get()>0&&horizontalDistance>0||launchPadSharedState.get()<=0&&horizontalDistance<0;if(hasMovedCorrectDirection&&Math.abs(horizontalDistance)>verticalDistance){if(Math.abs(horizontalDistance)<MANUAL_ACTIVATION_THRESHOLD){return;}gestureState.set({...gestureState.get(),active:true});updaters.setLaunchPadShown(true);manager.activate();return;}manager.fail();}",
};
let closure_17 = {
  code: "function useLaunchPadGestureTsx6(event){const{gestureState,launchPadSharedState}=this.__closure;const{x:x,y:y}=event.changedTouches[0];gestureState.set({active:false,initialLaunchPadPosition:launchPadSharedState.get(),initialPullTabPosition:0,initialTouchX:x,initialTouchY:y,positionOffsetX:0,positionOffsetY:0,startTime:Date.now(),requiresPop:launchPadSharedState.get()===0,startShown:!(launchPadSharedState.get()===0)});}",
};
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadGesture.tsx");

export default function useLaunchPadGesture(launchPadType) {
  let __initData6;
  let items;
  launchPadType = launchPadType.launchPadType;
  const launchPadSharedState = launchPadType.launchPadSharedState;
  const launchPadPullTabState = launchPadType.launchPadPullTabState;
  const gestureState = launchPadType.gestureState;
  const updaters = launchPadType.updaters;
  let obj = launchPadType(launchPadPullTabState[2]);
  const isModalOpen = obj.useIsModalOpen();
  const tmp2 = launchPadSharedState(launchPadPullTabState[3])();
  let closure_6 = tmp2;
  const ref = gestureState.useRef(undefined);
  let obj2 = {
    gesture: gestureState.useMemo(() => {
      let uiStore;
      let num = 0;
      if (launchPadType === unpackModuleId.GESTURE_FULL) {
        let num2 = -1;
        num = -1 * LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE;
      }
      const Gesture = LegacyBaseButton.Gesture;
      let tmp7 = !isModalOpen;
      const enabled = Gesture.Pan().enabled;
      Gesture.Pan();
      if (!isModalOpen) {
        tmp7 = launchPadType !== unpackModuleId.DISABLED;
      }
      const enabledResult = enabled(tmp7);
      const withRefResult = enabledResult.withRef(ref);
      const minDistanceResult = withRefResult.minDistance(0);
      const manualActivation = minDistanceResult.maxPointers(1).manualActivation;
      minDistanceResult.maxPointers(1);
      const rect = { top: -1 * closure_6.top, left: 0, bottom: -1 * closure_6.bottom, right: num };
      const tmp4Result = PlatformUtils;
      const fn = function w(arg0) {
        let x;
        let y;
        const first = arg0.changedTouches[0];
        const obj = {
          active: false,
          initialLaunchPadPosition: launchPadSharedState.get(),
          initialPullTabPosition: 0,
          initialTouchX: x,
          initialTouchY: y,
          positionOffsetX: 0,
          positionOffsetY: 0,
          startTime: Date.now(),
          requiresPop: 0 === launchPadSharedState.get(),
          startShown: 0 !== launchPadSharedState.get(),
        };
        ({ x, y } = first);
        const result = gestureState.set(obj);
      };
      let obj = { gestureState, launchPadSharedState };
      fn.__closure = obj;
      fn.__workletHash = 14359599806316;
      fn.__initData = __initData6;
      const manualActivationResult = manualActivation(tmp4Result.isAndroid());
      const hitSlopResult = manualActivationResult.hitSlop(rect);
      const onTouchesDownResult = hitSlopResult.onTouchesDown(fn);
      class X {
        constructor(state, fail) {
          let active;
          let initialLaunchPadPosition;
          let initialTouchX;
          let initialTouchY;
          let x;
          let y;
          const value = gestureState.get();
          ({ initialLaunchPadPosition, initialTouchX } = value);
          ({ active, initialTouchY } = value);
          if (state.state === launchPadType(launchPadPullTabState[4]).State.BEGAN) {
            if (!active) {
              const first = state.changedTouches[0];
              if (null != first) {
                ({ x, y } = first);
                const tmp2Result = launchPadType(launchPadPullTabState[6]);
                const width = tmp2Result.getWindowDimensionsWorklet().width;
                if (constants.DISABLED === closure_1_0) {
                  fail.fail();
                } else {
                  if (constants.GESTURE_EDGE === closure_1_0) {
                    if (0 === initialLaunchPadPosition) {
                      if (initialTouchX < width - updaters) {
                        fail.fail();
                      }
                    }
                  } else if (constants.PULL_TAB === closure_1_0) {
                    if (initialLaunchPadPosition <= 0) {
                      const tmp11 =
                        y > closure_1_2.get().position - LAUNCH_PAD_PULL_TAB_HIT_SLOP &&
                        y < closure_1_2.get().position + ref + LAUNCH_PAD_PULL_TAB_HIT_SLOP;
                      if (x > width - LAUNCH_PAD_PULL_TAB_WIDTH - LAUNCH_PAD_PULL_TAB_HIT_SLOP) {
                        if (x < width) {
                          if (tmp11) {
                            const obj2 = { initialPullTabPosition: closure_1_2.get().position, active: true };
                            set = gestureState.set;
                            const merged = Object.assign(gestureState.get());
                            const result = set(obj2);
                            const result1 = uiStore.setLaunchPadPullTabScale(LAUNCH_PAD_PULL_TAB_SCALE_FACTOR);
                            uiStore.setLaunchPadShown(true);
                            fail.activate();
                          }
                          return tmp14;
                        }
                      }
                      fail.fail();
                    }
                  } else if (constants.GESTURE_FULL !== closure_1_0) {
                    fail.fail();
                  }
                  const diff = x - initialTouchX;
                  const _Math = Math;
                  const absolute = Math.abs(y - initialTouchY);
                  if (launchPadSharedState.get() <= 0) {
                    fail.fail();
                  }
                  const _Math2 = Math;
                  if (Math.abs(diff) > absolute) {
                    const _Math3 = Math;
                    if (Math.abs(diff) >= 3) {
                      const obj3 = { active: true };
                      set2 = gestureState.set;
                      const merged1 = Object.assign(gestureState.get());
                      set2(obj3);
                      uiStore.setLaunchPadShown(true);
                      fail.activate();
                    }
                  }
                }
              } else {
                fail.fail();
              }
            }
          }
        }
      }
      let obj2 = {
        gestureState,
        State: LegacyBaseButton.State,
        getWindowDimensionsWorklet: useWindowDimensionsSharedValue.getWindowDimensionsWorklet,
        launchPadType,
        LaunchPadTypes: unpackModuleId,
        LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE,
        LAUNCH_PAD_PULL_TAB_WIDTH,
        LAUNCH_PAD_PULL_TAB_HIT_SLOP: metroImportAll,
        launchPadPullTabState,
        LAUNCH_PAD_PULL_TAB_HEIGHT: metroImportDefault,
        updaters,
        LAUNCH_PAD_PULL_TAB_SCALE_FACTOR,
        launchPadSharedState,
        MANUAL_ACTIVATION_THRESHOLD: 3,
      };
      X.__closure = obj2;
      X.__workletHash = 6468417986054;
      X.__initData = __initData5;
      const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(X);
      class I {
        constructor(absoluteX) {
          let translationX;
          let translationY;
          absoluteX = absoluteX.absoluteX;
          ({ translationX, translationY } = absoluteX);
          if (gestureState.get().active) {
            const value = gestureState.get();
            const requiresPop = value.requiresPop;
            const initialTouchX = value.initialTouchX;
            const obj2 = launchPadType(launchPadPullTabState[6]);
            const width = obj2.getWindowDimensionsWorklet().width;
            const _Math = Math;
            let num2 = 0;
            const bound = Math.max(-1 * (absoluteX - initialTouchX), 0);
            const diff = absoluteX - gestureState.get().initialTouchX;
            const sum = gestureState.get().initialTouchX + translationX;
            if (closure_1_0 !== constants.PULL_TAB) {
              num2 = 40;
            }
            const result = (sum - num2) / width;
            if (requiresPop) {
              if (bound <= 70) {
                if (closure_1_0 !== constants.PULL_TAB) {
                  uiStore.setLaunchPadPosition((bound - 0.5 * bound) / width);
                } else {
                  const result1 = uiStore.setLaunchPadPullTabTranslation(translationY);
                }
                const obj3 = { positionOffsetX: diff };
                launchPadSharedState(launchPadPullTabState[7])(gestureState, obj3);
              }
            }
            const tmp12 = launchPadSharedState(launchPadPullTabState[7]);
            if (requiresPop) {
              const obj4 = { requiresPop: false, positionOffsetX: diff };
              tmp12(gestureState, obj4);
              const tmp2Result = launchPadType(launchPadPullTabState[8]);
              const runOnJSResult = tmp2Result.runOnJS(launchPadType(launchPadPullTabState[9]).triggerHapticFeedback);
              runOnJSResult(launchPadType(launchPadPullTabState[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
            } else {
              const obj5 = { positionOffsetX: diff };
              tmp12(gestureState, obj5);
            }
            uiStore.setLaunchPadPosition(1 - result);
          }
        }
      }
      let obj3 = {
        gestureState,
        getWindowDimensionsWorklet: useWindowDimensionsSharedValue.getWindowDimensionsWorklet,
        POP_RESISTANCE: 0.5,
        launchPadType,
        LaunchPadTypes: unpackModuleId,
        PIP_POP_DISTANCE: 70,
        updaters,
        updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
        runOnJS: ReanimatedRexport.runOnJS,
        triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
        HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes,
      };
      I.__closure = obj3;
      I.__workletHash = 3899618169934;
      I.__initData = __initData4;
      const fn2 = function v(velocityX) {
        let translationX;
        let translationY;
        let velocityY;
        velocityX = velocityX.velocityX;
        ({ velocityY, translationX, translationY } = velocityX);
        const value = gestureState.get();
        if (value.requiresPop) {
          if (value.startShown) {
            uiStore.setLaunchPadPosition(1);
          } else {
            if (launchPadType === constants.PULL_TAB) {
              const _Math2 = Math;
              if (Math.abs(translationX) <= isModalOpen) {
                const _Math3 = Math;
                if (Math.abs(translationY) <= tmp16) {
                  const _Math4 = Math;
                  if (Math.abs(velocityX) <= closure_6) {
                    const _Math5 = Math;
                  }
                }
              }
            }
            uiStore.setLaunchPadPosition(0);
          }
        } else {
          const _Math = Math;
          if (Math.abs(velocityX) < closure_6) {
            if (launchPadSharedState.get() >= 0.5) {
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
      let obj4 = {
        gestureState,
        launchPadType,
        LaunchPadTypes: unpackModuleId,
        LAUNCH_PAD_END_TRANSLATION_THRESHOLD: hasOwnProperty,
        LAUNCH_PAD_END_VELOCITY_THRESHOLD: metroRequire,
        updaters,
        launchPadSharedState,
      };
      fn2.__closure = obj4;
      fn2.__workletHash = 8858716244708;
      fn2.__initData = __initData3;
      const fn3 = function b() {
        const value = gestureState.get();
        if (value.active) {
          if (1 === tmp3) {
            uiStore.setLaunchPadPosition(1);
          } else {
            uiStore.setLaunchPadPosition(0);
          }
        }
        launchPadSharedState(launchPadPullTabState[7])(gestureState, {
          active: false,
          initialLaunchPadPosition: 0,
          initialPullTabPosition: 0,
          initialTouchX: 0,
          initialTouchY: 0,
          positionOffsetX: 0,
          positionOffsetY: 0,
          startTime: -1,
        });
      };
      const onChangeResult = onTouchesMoveResult.onChange(I);
      const onEndResult = onChangeResult.onEnd(fn2);
      let obj5 = { gestureState, updaters, updateSharedValueIfChanged: updateSharedValueIfChangedDefault };
      fn3.__closure = obj5;
      fn3.__workletHash = 3182042496134;
      fn3.__initData = __initData2;
      const fn4 = function t() {
        launchPadSharedState(launchPadPullTabState[7])(gestureState, {
          active: false,
          initialLaunchPadPosition: 0,
          initialPullTabPosition: 0,
          initialTouchX: 0,
          initialTouchY: 0,
          positionOffsetX: 0,
          positionOffsetY: 0,
          startTime: -1,
        });
        const result = uiStore.setLaunchPadPullTabScale(1);
      };
      const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn3);
      fn4.__closure = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState, updaters };
      fn4.__workletHash = 14463491499289;
      fn4.__initData = __initData;
      ({ updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState, updaters });
      return onTouchesCancelledResult.onFinalize(fn4);
    }, items),
    gestureRef: ref,
  };
  items = [gestureState, tmp2, isModalOpen, launchPadPullTabState, launchPadSharedState, launchPadType, updaters];
  return obj2;
}
