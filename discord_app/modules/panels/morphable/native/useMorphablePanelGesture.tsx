// === Module 16337: MorphablePanelModes ===

// Module 16337 (MorphablePanelModes)
import closure_3 from "noop" /* 19 */;
import MIN_PAN_GESTURE_MOVE from "MIN_PAN_GESTURE_MOVE" /* 11490 */;

const require = arg1;
({ IS_IOS: c4, MIN_PAN_GESTURE_MOVE: c5, MorphablePanelModes } = MIN_PAN_GESTURE_MOVE);
({ PANEL_TAP_GESTURE_MAX_DISTANCE: error, PIP_POP_HEIGHT: closure_8, POP_RESISTANCE: c9 } = MIN_PAN_GESTURE_MOVE);
let closure_10 = { code: "function useMorphablePanelGestureTsx1(){const{onTapGestureStart}=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();}" };
let closure_11 = { code: "function useMorphablePanelGestureTsx2(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});}" };
let closure_12 = { code: "function useMorphablePanelGestureTsx3(event){const{initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd}=this.__closure;if(initialGestureOffset.get().cancel){return;}const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode===MorphablePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});}" };
let closure_13 = { code: "function useMorphablePanelGestureTsx4(_e){const{updateSharedValueIfChanged,initialGestureOffset,wrapperOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}" };
let closure_14 = { code: "function useMorphablePanelGestureTsx5(event){const{mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(mode!==MorphablePanelModes.PIP){const minYOffset=safeArea.top;let newYOffset=(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1});}}" };
let closure_15 = { code: "function useMorphablePanelGestureTsx6(event,manager){const{IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}const{absoluteX:absoluteX,absoluteY:absoluteY,absoluteMovement:absoluteMovement,isNotPullDownGesture:isNotPullDownGesture,yDiff:yDiff}=calculateXYDiff(event,initialGestureOffset);let startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else if(isNotPullDownGesture){manager.fail();}}else if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}}" };
let closure_16 = { code: "function useMorphablePanelGestureTsx7(event){const{updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});}" };
let result = require("set").fileFinishedImporting("modules/panels/morphable/native/useMorphablePanelGesture.tsx");

export default function useMorphablePanelGesture(mode) {
  mode = mode.mode;
  const onPanMinimizeGestureEnd = mode.onPanMinimizeGestureEnd;
  const onTapGestureStart = mode.onTapGestureStart;
  let flag = mode.panGestureEnabled;
  if (flag === undefined) {
    flag = false;
  }
  const pipState = mode.pipState;
  let flag2 = mode.swipeRequiresPop;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const wrapperOffset = mode.wrapperOffset;
  let flag3 = mode.disableHorizontalSafeAreas;
  if (flag3 === undefined) {
    flag3 = false;
  }
  closure_8 = undefined;
  closure_9 = undefined;
  let sharedValue;
  const tmp = onPanMinimizeGestureEnd(onTapGestureStart[2])();
  closure_8 = tmp;
  const tmp2 = onPanMinimizeGestureEnd(onTapGestureStart[3])();
  closure_9 = tmp2;
  sharedValue = mode(onTapGestureStart[4]).useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, active: false, gestureInBottomSafeArea: false, cancel: false, requiresPop: false });
  const items = [sharedValue, mode, flag2, onPanMinimizeGestureEnd, onTapGestureStart, flag, tmp2, tmp, pipState, wrapperOffset, flag3];
  return flag.useMemo(() => {
    const Gesture = mode(onTapGestureStart[5]).Gesture;
    const Gesture2 = mode(onTapGestureStart[5]).Gesture;
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(null != onTapGestureStart);
    const fn = function x() {
      if (closure_2 != null) {
        tmp();
      }
    };
    fn.__closure = { onTapGestureStart };
    fn.__workletHash = 9880530558215;
    fn.__initData = sharedValue;
    const maxDistanceResult = Gesture2.Tap().enabled(null != onTapGestureStart).maxDistance(flag3);
    const Gesture3 = mode(onTapGestureStart[5]).Gesture;
    const onStartResult = Gesture2.Tap().enabled(null != onTapGestureStart).maxDistance(flag3).onStart(fn);
    const PanResult = Gesture3.Pan();
    const enabledResult1 = Gesture3.Pan().enabled(flag);
    const manualActivationResult = Gesture3.Pan().enabled(flag).manualActivation(true);
    let result = Gesture3.Pan().enabled(flag).manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
    class V {
      constructor(arg0) {
        tmp = closure_1_1(closure_1_2[6])(closure_6, { x: 0, y: 0 });
        obj = { absoluteXStart: arg0.absoluteX, absoluteYStart: arg0.absoluteY, active: false, cancel: arg0.absoluteY > closure_8.height - 2 * closure_9.bottom, gestureInBottomSafeArea: arg0.absoluteY > closure_8.height - closure_9.bottom, requiresPop: closure_5 };
        result = closure_10.set(obj);
        return;
      }
    }
    let obj = { updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset, initialGestureOffset: sharedValue, windowDimensions: closure_8, safeArea: closure_9, swipeRequiresPop: flag2 };
    V.__closure = obj;
    V.__workletHash = 14796057583737;
    V.__initData = closure_1_16;
    const maxPointersResult = Gesture3.Pan().enabled(flag).manualActivation(true).maxPointers(1);
    class C {
      constructor(arg0, arg1) {
        if (closure_1_4) {
          tmp = closure_10;
          if (closure_10.get().gestureInBottomSafeArea) {
            activateResult = arg1.activate();
          }
          return;
        }
        obj = closure_10;
        if (closure_10.get().cancel) {
          failResult = arg1.fail();
        } else {
          tmp2 = arg0;
          tmp3 = closure_1_0;
          tmp4 = closure_1_2;
          if (arg0.state === closure_1_0(closure_1_2[5]).State.BEGAN) {
            if (!obj.get().active) {
              tmp3Result = tmp3(tmp4[7]);
              calculateXYDiffResult = tmp3Result.calculateXYDiff(arg0, obj);
              ({ absoluteX, absoluteY } = calculateXYDiffResult);
              if (closure_0 === closure_1_6.PANEL) {
                num = 0;
                flag = true;
                if (tmp8 >= 0) {
                  flag = false;
                  if (tmp7) {
                    failResult1 = arg1.fail();
                    flag = false;
                  }
                }
              } else {
                tmp11 = tmp9 === tmp10.PIP;
                if (tmp11) {
                  tmp12 = closure_1_5;
                  tmp11 = tmp6 > closure_1_5;
                }
                flag = false;
                if (tmp11) {
                  tmp3Result1 = tmp3(tmp4[4]);
                  tmp13 = closure_1_1;
                  tmp14 = tmp3Result1.runOnJS(closure_1_1(tmp4[8]))();
                  flag = true;
                }
              }
              if (flag) {
                tmp16 = closure_1_1;
                tmp17 = closure_6;
                tmp18 = closure_1_1(tmp4[6])(closure_6, { x: 0, y: 0, gestureActive: true });
                obj = { absoluteXStart: null, absoluteYStart: null, active: true, cancel: false, gestureInBottomSafeArea: false, requiresPop: null };
                obj[0] = absoluteX;
                obj[1] = absoluteY;
                obj[5] = obj.get().requiresPop;
                result = obj.set(obj);
                activateResult1 = arg1.activate();
              }
            }
          }
        }
        return;
      }
    }
    obj = { IS_IOS: pipState, initialGestureOffset: sharedValue, State: mode(onTapGestureStart[5]).State, calculateXYDiff: mode(onTapGestureStart[7]).calculateXYDiff, mode, MorphablePanelModes: wrapperOffset, MIN_PAN_GESTURE_MOVE: flag2, runOnJS: mode(onTapGestureStart[4]).runOnJS, triggerIOSHaptic: onPanMinimizeGestureEnd(onTapGestureStart[8]), updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset };
    C.__closure = obj;
    C.__workletHash = 12545486163726;
    C.__initData = closure_1_15;
    const onBeginResult = result.onBegin(V);
    class H {
      constructor(arg0) {
        if (closure_0 !== closure_1_6.PIP) {
          tmp7 = closure_9;
          obj2 = closure_10;
          absoluteYStart = closure_10.get().absoluteYStart;
          num2 = -1;
          result = -1 * (absoluteYStart - arg0.absoluteY);
          requiresPop = closure_10.get().requiresPop;
          tmp9 = !requiresPop;
          if (!requiresPop) {
            tmp9 = result <= closure_9.top;
          }
          if (tmp9) {
            obj = {};
            tmp10 = obj;
            absoluteYStart = Object.assign(obj2.get());
            flag = true;
            obj.requiresPop = true;
            result1 = obj2.set(obj);
          }
          diff = result;
          if (!obj2.get().requiresPop) {
            tmp23 = closure_1_1;
            tmp24 = closure_1_2;
            tmp25 = closure_6;
            obj1 = { y: null, x: 0 };
            obj1[0] = diff;
            tmp26 = closure_1_1(closure_1_2[6])(closure_6, obj1);
          } else {
            tmp13 = globalThis;
            _Math = Math;
            num3 = 0;
            absoluteYStart = Math.max(result, 0);
            tmp14 = closure_1_8;
            if (absoluteYStart > closure_1_8) {
              obj2 = {};
              tmp15 = obj2;
              merged = Object.assign(obj2.get());
              flag2 = false;
              obj2.requiresPop = false;
              result2 = obj2.set(obj2);
              tmp18 = closure_1_0;
              tmp19 = closure_1_2;
              obj5 = closure_1_0(closure_1_2[4]);
              runOnJSResult = obj5.runOnJS(closure_1_0(closure_1_2[9]).triggerHapticFeedback);
              tmp20Result = runOnJSResult(closure_1_0(closure_1_2[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
              diff = result;
            }
          }
          tmp22 = closure_1_9;
          diff = absoluteYStart - absoluteYStart * closure_1_9;
        } else {
          tmp = closure_1_1;
          tmp2 = closure_1_2;
          tmp4 = closure_6;
          obj = { x: null, y: null };
          tmp5 = closure_10;
          tmp3 = closure_1_1(closure_1_2[6]);
          num = -1;
          obj[0] = -1 * (closure_10.get().absoluteXStart - arg0.absoluteX);
          obj[1] = -1 * (closure_10.get().absoluteYStart - arg0.absoluteY);
          tmp3Result = tmp3(closure_6, obj);
          return;
        }
        return;
      }
    }
    const onTouchesMoveResult = result.onBegin(V).onTouchesMove(C);
    H.__closure = { mode, MorphablePanelModes: wrapperOffset, safeArea: closure_9, initialGestureOffset: sharedValue, POP_RESISTANCE: closure_9, PIP_POP_HEIGHT: closure_8, runOnJS: mode(onTapGestureStart[4]).runOnJS, triggerHapticFeedback: mode(onTapGestureStart[9]).triggerHapticFeedback, HapticFeedbackTypes: mode(onTapGestureStart[9]).HapticFeedbackTypes, updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset };
    H.__workletHash = 6076208535373;
    H.__initData = closure_1_14;
    obj1 = { mode, MorphablePanelModes: wrapperOffset, safeArea: closure_9, initialGestureOffset: sharedValue, POP_RESISTANCE: closure_9, PIP_POP_HEIGHT: closure_8, runOnJS: mode(onTapGestureStart[4]).runOnJS, triggerHapticFeedback: mode(onTapGestureStart[9]).triggerHapticFeedback, HapticFeedbackTypes: mode(onTapGestureStart[9]).HapticFeedbackTypes, updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset };
    class D {
      constructor() {
        tmp = closure_1_1(closure_1_2[6])(closure_10, { active: false });
        tmp2 = closure_1_1(closure_1_2[6])(closure_6, { gestureActive: false });
        return;
      }
    }
    const onChangeResult = onTouchesMoveResult.onChange(H);
    D.__closure = { updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), initialGestureOffset: sharedValue, wrapperOffset };
    D.__workletHash = 14566382353702;
    D.__initData = closure_1_13;
    const obj2 = { updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), initialGestureOffset: sharedValue, wrapperOffset };
    class X {
      constructor(arg0) {
        obj = closure_10;
        if (!closure_10.get().cancel) {
          tmp = arg0;
          velocityY = arg0.velocityY;
          if (closure_0 === closure_1_6.PIP) {
            tmp14 = closure_1_0;
            tmp15 = closure_1_2;
            obj3 = closure_1_0(closure_1_2[7]);
            obj = { velocityX: null, velocityY: null, absoluteX: null, absoluteY: null, windowDimensions: null, safeArea: null, disableHorizontalSafeAreas: null };
            obj[0] = tmp2;
            obj[1] = velocityY;
            obj[2] = tmp3;
            obj[3] = tmp4;
            tmp16 = closure_8;
            obj[4] = closure_8;
            tmp17 = closure_9;
            obj[5] = closure_9;
            tmp18 = closure_7;
            obj[6] = closure_7;
            result = obj3.calculatePIPPositionFromVelocity(obj);
            tmp20 = closure_1_1;
            ({ pipX, pipY } = result);
            tmp21 = closure_6;
            tmp22 = closure_1_1(closure_1_2[6])(closure_6, { gestureActive: false });
            tmp23 = closure_4;
            obj1 = { x: null, y: null };
            obj1[0] = pipX;
            obj1[1] = pipY;
            tmp24 = closure_1_1(closure_1_2[6])(closure_4, obj1);
          } else if (tmp5 === tmp6.PANEL) {
            num = 0;
            if (velocityY > 0) {
              if (!obj.get().requiresPop) {
                tmp7 = closure_1_1;
                tmp8 = closure_1_2;
                tmp9 = closure_6;
                obj2 = { x: 0, y: null };
                tmp10 = closure_8;
                obj2[1] = closure_8.height;
                tmp11 = closure_1_1(closure_1_2[6])(closure_6, obj2);
                tmp12 = null;
                if (closure_1 != null) {
                  tmp13 = closure_1();
                }
                return;
              }
            }
          }
          tmp25 = closure_1_1;
          tmp26 = closure_1_2;
          tmp27 = closure_6;
          tmp28 = closure_1_1(closure_1_2[6])(closure_6, { x: 0, y: 0, gestureActive: false });
        }
        return;
      }
    }
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(D);
    X.__closure = { initialGestureOffset: sharedValue, mode, MorphablePanelModes: wrapperOffset, calculatePIPPositionFromVelocity: mode(onTapGestureStart[7]).calculatePIPPositionFromVelocity, windowDimensions: closure_8, safeArea: closure_9, disableHorizontalSafeAreas: flag3, updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset, pipState, onPanMinimizeGestureEnd };
    X.__workletHash = 2406462688275;
    X.__initData = closure_1_12;
    let obj3 = { initialGestureOffset: sharedValue, mode, MorphablePanelModes: wrapperOffset, calculatePIPPositionFromVelocity: mode(onTapGestureStart[7]).calculatePIPPositionFromVelocity, windowDimensions: closure_8, safeArea: closure_9, disableHorizontalSafeAreas: flag3, updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), wrapperOffset, pipState, onPanMinimizeGestureEnd };
    const fn2 = function t() {
      closure_1_1(closure_1_2[6])(closure_10, { active: false, cancel: false });
    };
    const onEndResult = onTouchesCancelledResult.onEnd(X);
    fn2.__closure = { updateSharedValueIfChanged: onPanMinimizeGestureEnd(onTapGestureStart[6]), initialGestureOffset: sharedValue };
    fn2.__workletHash = 11153815903321;
    fn2.__initData = closure_1_11;
    return Gesture.Race(onStartResult, onEndResult.onFinalize(fn2));
  }, items);
};
export { MorphablePanelModes };