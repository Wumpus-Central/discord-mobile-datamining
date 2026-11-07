// discord_app/modules/launchpad/native/useLaunchPadGesture.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import _mod1705 from "../../../../_runtime/metro/01705__.js";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../_runtime/05420_LegacyBaseButton.js";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import useWindowDimensionsSharedValue from "../../screen/useWindowDimensionsSharedValue.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const LaunchPadConstants = fn(11681);
({
  LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE: closure_4,
  LAUNCH_PAD_END_TRANSLATION_THRESHOLD: hasOwnProperty,
  LAUNCH_PAD_END_VELOCITY_THRESHOLD: closure_6,
  LAUNCH_PAD_PULL_TAB_HEIGHT: metroImportDefault,
  LAUNCH_PAD_PULL_TAB_HIT_SLOP: closure_8,
  LAUNCH_PAD_PULL_TAB_SCALE_FACTOR: closure_9,
  LAUNCH_PAD_PULL_TAB_WIDTH: closure_10,
  LaunchPadTypes: closure_11,
} = LaunchPadConstants);
let closure_12 = {
  code: "(function useLaunchPadGestureTsx1(event){let[gestureState,launchPadSharedState]=this.__closure;const{x:x,y:y}=event.changedTouches[0];gestureState.set({active:false,initialLaunchPadPosition:launchPadSharedState.get(),initialPullTabPosition:0,initialTouchX:x,initialTouchY:y,positionOffsetX:0,positionOffsetY:0,startTime:Date.now(),requiresPop:launchPadSharedState.get()===0,startShown:!(launchPadSharedState.get()===0)});})",
};
let closure_13 = {
  code: "(function useLaunchPadGestureTsx2(event,manager){let[gestureState,State,getWindowDimensionsWorklet,launchPadType,LaunchPadTypes,LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE,LAUNCH_PAD_PULL_TAB_WIDTH,LAUNCH_PAD_PULL_TAB_HIT_SLOP,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_HEIGHT,updaters,LAUNCH_PAD_PULL_TAB_SCALE_FACTOR,launchPadSharedState,MANUAL_ACTIVATION_THRESHOLD]=this.__closure;const{active:active,initialLaunchPadPosition:initialLaunchPadPosition,initialTouchX:initialTouchX,initialTouchY:initialTouchY}=gestureState.get();if(event.state!==State.BEGAN||active)return;const currentTouch=event.changedTouches[0];if(currentTouch==null){manager.fail();return;}const{x:x,y:y}=currentTouch;const{width:windowWidth}=getWindowDimensionsWorklet();switch(launchPadType){case LaunchPadTypes.DISABLED:manager.fail();return;case LaunchPadTypes.GESTURE_EDGE:if(initialLaunchPadPosition===0&&initialTouchX<windowWidth-LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE){manager.fail();return;}break;case LaunchPadTypes.PULL_TAB:{if(initialLaunchPadPosition>0)break;const inPullTabX=x>windowWidth-LAUNCH_PAD_PULL_TAB_WIDTH-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&x<windowWidth;const inPullTabY=y>launchPadPullTabState.get().position-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&y<launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_HIT_SLOP;if(!inPullTabX||!inPullTabY){manager.fail();return;}gestureState.set({...gestureState.get(),initialPullTabPosition:launchPadPullTabState.get().position,active:true});updaters.setLaunchPadPullTabScale(LAUNCH_PAD_PULL_TAB_SCALE_FACTOR);updaters.setLaunchPadShown(true);manager.activate();return;}case LaunchPadTypes.GESTURE_FULL:break;default:launchPadType;manager.fail();return;}const horizontalDistance=x-initialTouchX;const verticalDistance=Math.abs(y-initialTouchY);const hasMovedCorrectDirection=launchPadSharedState.get()>0&&horizontalDistance>0||launchPadSharedState.get()<=0&&horizontalDistance<0;if(hasMovedCorrectDirection&&Math.abs(horizontalDistance)>verticalDistance){if(Math.abs(horizontalDistance)<MANUAL_ACTIVATION_THRESHOLD){return;}gestureState.set({...gestureState.get(),active:true});updaters.setLaunchPadShown(true);manager.activate();return;}manager.fail();})",
};
let closure_14 = {
  code: "(function useLaunchPadGestureTsx3({translationX:translationX,translationY:translationY,absoluteX:absoluteX}){let[gestureState,getWindowDimensionsWorklet,POP_RESISTANCE,launchPadType,LaunchPadTypes,PIP_POP_DISTANCE,updaters,updateSharedValueIfChanged,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;if(!gestureState.get().active)return;const{initialTouchX:initialTouchX,requiresPop:requiresPop}=gestureState.get();const{width:windowWidth}=getWindowDimensionsWorklet();const newXOffset=absoluteX-initialTouchX;const distance=Math.max(newXOffset*-1,0);const resistance=distance*POP_RESISTANCE;const positionOffsetX=absoluteX-gestureState.get().initialTouchX;const launchPadPosition=1-(gestureState.get().initialTouchX+translationX-(launchPadType!==LaunchPadTypes.PULL_TAB?40:0))/windowWidth;if(requiresPop&&distance<=PIP_POP_DISTANCE){if(launchPadType!==LaunchPadTypes.PULL_TAB){const a=(distance-resistance)/windowWidth;updaters.setLaunchPadPosition(a);}else{updaters.setLaunchPadPullTabTranslation(translationY);}updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}else{if(requiresPop){updateSharedValueIfChanged(gestureState,{requiresPop:false,positionOffsetX:positionOffsetX});scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}else{updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}updaters.setLaunchPadPosition(launchPadPosition);}})",
};
let closure_15 = {
  code: "(function useLaunchPadGestureTsx4({velocityX:velocityX,velocityY:velocityY,translationX:translationX,translationY:translationY}){let[gestureState,launchPadType,LaunchPadTypes,LAUNCH_PAD_END_TRANSLATION_THRESHOLD,LAUNCH_PAD_END_VELOCITY_THRESHOLD,updaters,launchPadSharedState]=this.__closure;const{requiresPop:requiresPop,startShown:startShown}=gestureState.get();if(requiresPop){if(!startShown){const isPullTabTapComplete=launchPadType===LaunchPadTypes.PULL_TAB&&Math.abs(translationX)<=LAUNCH_PAD_END_TRANSLATION_THRESHOLD&&Math.abs(translationY)<=LAUNCH_PAD_END_TRANSLATION_THRESHOLD&&Math.abs(velocityX)<=LAUNCH_PAD_END_VELOCITY_THRESHOLD&&Math.abs(velocityY)<=LAUNCH_PAD_END_VELOCITY_THRESHOLD;if(isPullTabTapComplete){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else{updaters.setLaunchPadPosition(1);}}else if(Math.abs(velocityX)<LAUNCH_PAD_END_VELOCITY_THRESHOLD){if(launchPadSharedState.get()>=0.5){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else if(velocityX>0){updaters.setLaunchPadPosition(0);}else{updaters.setLaunchPadPosition(1);}})",
};
let closure_16 = {
  code: "(function useLaunchPadGestureTsx5(){let[gestureState,updaters,updateSharedValueIfChanged]=this.__closure;const{initialLaunchPadPosition:initialLaunchPadPosition,active:active}=gestureState.get();if(active){if(initialLaunchPadPosition===1){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});})",
};
let closure_17 = {
  code: "(function useLaunchPadGestureTsx6(){let[updateSharedValueIfChanged,gestureState,updaters]=this.__closure;updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});updaters.setLaunchPadPullTabScale(1.0);})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadGesture.tsx");

export default function useLaunchPadGesture(launchPadType) {
  launchPadType = launchPadType.launchPadType;
  const launchPadSharedState = launchPadType.launchPadSharedState;
  const launchPadPullTabState = launchPadType.launchPadPullTabState;
  const gestureState = launchPadType.gestureState;
  const updaters = launchPadType.updaters;
  const isModalOpen = launchPadType(launchPadPullTabState[2]).useIsModalOpen();
  const tmp2 = launchPadSharedState(launchPadPullTabState[3])();
  closure_6 = tmp2;
  const ref = gestureState.useRef(undefined);
  items = [gestureState, tmp2, isModalOpen, launchPadPullTabState, launchPadSharedState, launchPadType, updaters];
  const obj = launchPadType(launchPadPullTabState[2]);
  return {
    gesture: gestureState.useMemo(() => {
      let num = 0;
      if (launchPadType === constants.GESTURE_FULL) {
        num = -1 * React4;
      }
      const Gesture = LegacyBaseButton.Gesture;
      let tmp6 = !isModalOpen;
      if (!isModalOpen) {
        tmp6 = launchPadType !== constants.DISABLED;
      }
      const PanResult = Gesture.Pan();
      const enabledResult = Gesture.Pan().enabled(tmp6);
      const withRefResult = Gesture.Pan().enabled(tmp6).withRef(ref);
      const minDistanceResult = Gesture.Pan().enabled(tmp6).withRef(ref).minDistance(0);
      const maxPointersResult = Gesture.Pan().enabled(tmp6).withRef(ref).minDistance(0).maxPointers(1);
      const tmp4Result = PlatformUtils;
      const rect = { top: -1 * _undefined6.top, left: 0, bottom: -1 * _undefined6.bottom, right: num };
      const manualActivationResult = maxPointersResult.manualActivation(PlatformUtils.isAndroid());
      items = [_undefined10, gestureState, launchPadSharedState];
      [tmp9, tmp10, tmp11] = items;
      function useLaunchPadGestureTsx1(arg0) {
        ({ x, y } = arg0.changedTouches[0]);
        const result = _undefined.set({
          active: false,
          initialLaunchPadPosition: _undefined2.get(),
          initialPullTabPosition: 0,
          initialTouchX: x,
          initialTouchY: y,
          positionOffsetX: 0,
          positionOffsetY: 0,
          startTime: Date.now(),
          requiresPop: 0 === _undefined2.get(),
          startShown: 0 !== _undefined2.get(),
        });
      }
      const items1 = [tmp10, tmp11];
      useLaunchPadGestureTsx1.__closure = items1;
      useLaunchPadGestureTsx1.__workletHash = 2207673071474;
      useLaunchPadGestureTsx1.__initData = tmp9;
      const hitSlopResult = maxPointersResult.manualActivation(PlatformUtils.isAndroid()).hitSlop(rect);
      const items2 = [
        closure_13,
        gestureState,
        LegacyBaseButton.State,
        useWindowDimensionsSharedValue.getWindowDimensionsWorklet,
        launchPadType,
        constants,
        React4,
        closure_2_10,
        React5,
        launchPadPullTabState,
        metroImportDefault,
        updaters,
        React6,
        launchPadSharedState,
        3,
      ];
      c11 = undefined;
      c12 = undefined;
      c13 = undefined;
      [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] =
        items2;
      function useLaunchPadGestureTsx2(state, fail) {
        value = _undefined.get();
        ({ initialLaunchPadPosition, initialTouchX } = value);
        if (state.state === _undefined2.BEGAN) {
          if (!value.active) {
            const first = state.changedTouches[0];
            if (null != first) {
              ({ x, y } = first);
              const width = _undefined3().width;
              if (_undefined4.DISABLED === c3) {
                fail.fail();
              } else {
                if (_undefined4.GESTURE_EDGE === c3) {
                  if (0 === initialLaunchPadPosition) {
                    if (initialTouchX < width - c5) {
                      fail.fail();
                    }
                  }
                } else if (_undefined4.PULL_TAB === c3) {
                  if (initialLaunchPadPosition <= 0) {
                    let tmp11 = y > _undefined8.get().position - c7;
                    if (tmp11) {
                      tmp11 = y < _undefined8.get().position + c9 + c7;
                    }
                    if (x > width - c6 - c7) {
                      if (x < width) {
                        if (tmp11) {
                          const obj2 = {};
                          const merged = Object.assign(_undefined.get());
                          obj2.initialPullTabPosition = _undefined8.get().position;
                          obj2.active = true;
                          const result = _undefined.set(obj2);
                          const result1 = _undefined9.setLaunchPadPullTabScale(c11);
                          _undefined9.setLaunchPadShown(true);
                          fail.activate();
                        }
                        return tmp14;
                      }
                    }
                    fail.fail();
                  }
                } else if (_undefined4.GESTURE_FULL !== c3) {
                  fail.fail();
                }
                const diff = x - initialTouchX;
                const _Math = Math;
                const absolute = Math.abs(y - tmp2);
                if (_undefined10.get() <= 0) {
                  fail.fail();
                }
                const _Math2 = Math;
                if (Math.abs(diff) > absolute) {
                  const _Math3 = Math;
                  if (Math.abs(diff) >= c13) {
                    const obj4 = {};
                    const merged1 = Object.assign(_undefined.get());
                    obj4.active = true;
                    const result2 = _undefined.set(obj4);
                    _undefined9.setLaunchPadShown(true);
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
      const items3 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
      useLaunchPadGestureTsx2.__closure = items3;
      useLaunchPadGestureTsx2.__workletHash = 8151770639255;
      useLaunchPadGestureTsx2.__initData = tmp13;
      const onTouchesDownResult = maxPointersResult
        .manualActivation(PlatformUtils.isAndroid())
        .hitSlop(rect)
        .onTouchesDown(useLaunchPadGestureTsx1);
      const items4 = [
        closure_14,
        gestureState,
        useWindowDimensionsSharedValue.getWindowDimensionsWorklet,
        0.5,
        launchPadType,
        constants,
        70,
        updaters,
        updateSharedValueIfChangedDefault,
        _mod1705.scheduleOnRN,
        HapticUtils.triggerHapticFeedback,
        HapticUtils.HapticFeedbackTypes,
      ];
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      c10 = undefined;
      [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40] = items4;
      function useLaunchPadGestureTsx3(absoluteX) {
        absoluteX = absoluteX.absoluteX;
        ({ translationX, translationY } = absoluteX);
        if (_undefined.get().active) {
          value = _undefined.get();
          const requiresPop = value.requiresPop;
          const width = _undefined2().width;
          const _Math = Math;
          let num2 = 0;
          const bound = Math.max(-1 * (absoluteX - value.initialTouchX), 0);
          const diff = absoluteX - _undefined.get().initialTouchX;
          const sum = _undefined.get().initialTouchX + translationX;
          if (c3 !== _undefined4.PULL_TAB) {
            num2 = 40;
          }
          const result = (sum - num2) / width;
          if (requiresPop) {
            if (bound <= c5) {
              if (c3 !== _undefined4.PULL_TAB) {
                _undefined6.setLaunchPadPosition((bound - bound * c2) / width);
              } else {
                const result1 = _undefined6.setLaunchPadPullTabTranslation(translationY);
              }
              const obj2 = { positionOffsetX: diff };
              _undefined7(_undefined, obj2);
            }
          }
          if (requiresPop) {
            const obj3 = { requiresPop: false, positionOffsetX: diff };
            _undefined7(_undefined, obj3);
            _undefined8(c9, _undefined9.IMPACT_MEDIUM);
          } else {
            const obj4 = { positionOffsetX: diff };
            _undefined7(_undefined, obj4);
          }
          _undefined6.setLaunchPadPosition(1 - result);
        }
      }
      const items5 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40];
      useLaunchPadGestureTsx3.__closure = items5;
      useLaunchPadGestureTsx3.__workletHash = 925122443250;
      useLaunchPadGestureTsx3.__initData = tmp29;
      const onTouchesMoveResult = maxPointersResult
        .manualActivation(PlatformUtils.isAndroid())
        .hitSlop(rect)
        .onTouchesDown(useLaunchPadGestureTsx1)
        .onTouchesMove(useLaunchPadGestureTsx2);
      const items6 = [
        closure_15,
        gestureState,
        launchPadType,
        constants,
        hasOwnProperty,
        timestampProducer,
        updaters,
        launchPadSharedState,
      ];
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48] = items6;
      function useLaunchPadGestureTsx4(velocityX) {
        velocityX = velocityX.velocityX;
        ({ velocityY, translationX, translationY } = velocityX);
        value = _undefined.get();
        if (value.requiresPop) {
          if (value.startShown) {
            _undefined5.setLaunchPadPosition(1);
          } else {
            if (c1 === _undefined3.PULL_TAB) {
              const _Math2 = Math;
              if (Math.abs(translationX) <= c3) {
                const _Math3 = Math;
                if (Math.abs(translationY) <= tmp16) {
                  const _Math4 = Math;
                  if (Math.abs(velocityX) <= c4) {
                    const _Math5 = Math;
                  }
                }
              }
            }
            _undefined5.setLaunchPadPosition(0);
          }
        } else {
          const _Math = Math;
          if (Math.abs(velocityX) < c4) {
            if (_undefined6.get() >= 0.5) {
              _undefined5.setLaunchPadPosition(1);
            } else {
              _undefined5.setLaunchPadPosition(0);
            }
          } else if (velocityX > 0) {
            _undefined5.setLaunchPadPosition(0);
          } else {
            _undefined5.setLaunchPadPosition(1);
          }
        }
      }
      const items7 = [tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48];
      useLaunchPadGestureTsx4.__closure = items7;
      useLaunchPadGestureTsx4.__workletHash = 2846313959194;
      useLaunchPadGestureTsx4.__initData = tmp41;
      const onChangeResult = maxPointersResult
        .manualActivation(PlatformUtils.isAndroid())
        .hitSlop(rect)
        .onTouchesDown(useLaunchPadGestureTsx1)
        .onTouchesMove(useLaunchPadGestureTsx2)
        .onChange(useLaunchPadGestureTsx3);
      const items8 = [closure_16, gestureState, updaters, updateSharedValueIfChangedDefault];
      [tmp49, tmp50, tmp51, tmp52] = items8;
      function useLaunchPadGestureTsx5() {
        value = _undefined.get();
        if (value.active) {
          if (1 === tmp3) {
            _undefined2.setLaunchPadPosition(1);
          } else {
            _undefined2.setLaunchPadPosition(0);
          }
        }
        _undefined3(_undefined, {
          active: false,
          initialLaunchPadPosition: 0,
          initialPullTabPosition: 0,
          initialTouchX: 0,
          initialTouchY: 0,
          positionOffsetX: 0,
          positionOffsetY: 0,
          startTime: -1,
        });
      }
      const items9 = [tmp50, tmp51, tmp52];
      useLaunchPadGestureTsx5.__closure = items9;
      useLaunchPadGestureTsx5.__workletHash = 7907495432472;
      useLaunchPadGestureTsx5.__initData = tmp49;
      const onEndResult = maxPointersResult
        .manualActivation(PlatformUtils.isAndroid())
        .hitSlop(rect)
        .onTouchesDown(useLaunchPadGestureTsx1)
        .onTouchesMove(useLaunchPadGestureTsx2)
        .onChange(useLaunchPadGestureTsx3)
        .onEnd(useLaunchPadGestureTsx4);
      const items10 = [closure_17, updateSharedValueIfChangedDefault, gestureState, updaters];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      [tmp53, tmp54, tmp55, tmp56] = items10;
      function useLaunchPadGestureTsx6() {
        _undefined(c1, {
          active: false,
          initialLaunchPadPosition: 0,
          initialPullTabPosition: 0,
          initialTouchX: 0,
          initialTouchY: 0,
          positionOffsetX: 0,
          positionOffsetY: 0,
          startTime: -1,
        });
        const result = _undefined3.setLaunchPadPullTabScale(1);
      }
      const items11 = [tmp54, tmp55, tmp56];
      useLaunchPadGestureTsx6.__closure = items11;
      useLaunchPadGestureTsx6.__workletHash = 6246931034279;
      useLaunchPadGestureTsx6.__initData = tmp53;
      return maxPointersResult
        .manualActivation(PlatformUtils.isAndroid())
        .hitSlop(rect)
        .onTouchesDown(useLaunchPadGestureTsx1)
        .onTouchesMove(useLaunchPadGestureTsx2)
        .onChange(useLaunchPadGestureTsx3)
        .onEnd(useLaunchPadGestureTsx4)
        .onTouchesCancelled(useLaunchPadGestureTsx5)
        .onFinalize(useLaunchPadGestureTsx6);
    }, items),
    gestureRef: ref,
  };
}
