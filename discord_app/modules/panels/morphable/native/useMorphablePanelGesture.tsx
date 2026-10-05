// === Module 17174: useMorphablePanelGesture ===

// Module 17174 (useMorphablePanelGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6140 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 9774 */;
import MorphablePanelUtils from "MorphablePanelUtils" /* 17172 */;
import triggerIOSHapticDefault from "triggerIOSHaptic" /* 17175 */;
import noop from "module_19" /* 19 */;

require = fn;
const MorphablePanelConstants = fn(11903);
({ IS_IOS: closure_4, MIN_PAN_GESTURE_MOVE: hasOwnProperty, MorphablePanelModes } = MorphablePanelConstants);
({ PANEL_TAP_GESTURE_MAX_DISTANCE: closure_7, PIP_POP_HEIGHT: closure_8, POP_RESISTANCE: closure_9 } = MorphablePanelConstants);
const __initData = { code: "function useMorphablePanelGestureTsx1(){const{onTapGestureStart}=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();}" };
const __initData2 = { code: "function useMorphablePanelGestureTsx2(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});}" };
const __initData3 = { code: "function useMorphablePanelGestureTsx3(event_2){const{initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd}=this.__closure;if(initialGestureOffset.get().cancel){return;}var velocityX=event_2.velocityX,velocityY=event_2.velocityY,absoluteX_0=event_2.absoluteX,absoluteY_0=event_2.absoluteY;if(mode===MorphablePanelModes.PIP){var _calculatePIPPosition=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}),pipX=_calculatePIPPosition.pipX,pipY=_calculatePIPPosition.pipY;updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else{if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});}" };
const __initData4 = { code: "function useMorphablePanelGestureTsx4(_e){const{updateSharedValueIfChanged,initialGestureOffset,wrapperOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}" };
const __initData5 = { code: "function useMorphablePanelGestureTsx5(event_1){const{mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(mode!==MorphablePanelModes.PIP){var minYOffset=safeArea.top;var newYOffset=(initialGestureOffset.get().absoluteYStart-event_1.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){var distance=Math.max(newYOffset,0);var resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event_1.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event_1.absoluteY)*-1});}}" };
const __initData6 = { code: "function useMorphablePanelGestureTsx6(event_0,manager){const{IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event_0.state!==State.BEGAN||initialGestureOffset.get().active){return;}var _calculateXYDiff=calculateXYDiff(event_0,initialGestureOffset),absoluteX=_calculateXYDiff.absoluteX,absoluteY=_calculateXYDiff.absoluteY,absoluteMovement=_calculateXYDiff.absoluteMovement,isNotPullDownGesture=_calculateXYDiff.isNotPullDownGesture,yDiff=_calculateXYDiff.yDiff;var startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else{if(isNotPullDownGesture){manager.fail();}}}else{if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}}" };
const __initData7 = { code: "function useMorphablePanelGestureTsx7(event){const{updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});}" };
let closure_17 = { code: "function useMorphablePanelGestureTsx8(){const{onTapGestureStart}=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();}" };
let closure_18 = { code: "function useMorphablePanelGestureTsx9(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});}" };
let closure_19 = { code: "function useMorphablePanelGestureTsx10(event_2){const{initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd}=this.__closure;if(initialGestureOffset.get().cancel){return;}const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0}=event_2;if(mode===MorphablePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});}" };
let closure_20 = { code: "function useMorphablePanelGestureTsx11(_e){const{updateSharedValueIfChanged,initialGestureOffset,wrapperOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}" };
let closure_21 = { code: "function useMorphablePanelGestureTsx12(event_1){const{mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(mode!==MorphablePanelModes.PIP){const minYOffset=safeArea.top;let newYOffset=(initialGestureOffset.get().absoluteYStart-event_1.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event_1.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event_1.absoluteY)*-1});}}" };
let closure_22 = { code: "function useMorphablePanelGestureTsx13(event_0,manager){const{IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event_0.state!==State.BEGAN||initialGestureOffset.get().active){return;}const{absoluteX:absoluteX,absoluteY:absoluteY,absoluteMovement:absoluteMovement,isNotPullDownGesture:isNotPullDownGesture,yDiff:yDiff}=calculateXYDiff(event_0,initialGestureOffset);let startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else if(isNotPullDownGesture){manager.fail();}}else if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}}" };
let closure_23 = { code: "function useMorphablePanelGestureTsx14(event){const{updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/panels/morphable/native/useMorphablePanelGesture.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((mode) => {
  let onEndResult = mode;
  let RaceResult = onTapGestureStart;
  let flag;
  const cResult = mode(onTapGestureStart[3]).c(43);
  mode = mode.mode;
  const onPanMinimizeGestureEnd = mode.onPanMinimizeGestureEnd;
  onTapGestureStart = mode.onTapGestureStart;
  ({ panGestureEnabled, pipState } = mode);
  ({ swipeRequiresPop, wrapperOffset } = mode);
  const disableHorizontalSafeAreas = mode.disableHorizontalSafeAreas;
  MIN_PAN_GESTURE_MOVE = tmp4;
  MorphablePanelModes = tmp5;
  let enabledResult = onPanMinimizeGestureEnd;
  const tmp6 = onPanMinimizeGestureEnd(RaceResult[4])();
  const windowDimensions = tmp6;
  const tmp7 = onPanMinimizeGestureEnd(RaceResult[5])();
  PIP_POP_HEIGHT = tmp7;
  let obj2 = mode(onTapGestureStart[3]);
  const sharedValue = onEndResult(RaceResult[6]).useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, active: false, gestureInBottomSafeArea: false, cancel: false, requiresPop: false });
  if (cResult[0] === (flag !== disableHorizontalSafeAreas && disableHorizontalSafeAreas)) {
    if (cResult[1] === sharedValue) {
      if (cResult[2] === mode) {
        if (cResult[3] === onPanMinimizeGestureEnd) {
          if (cResult[4] === onTapGestureStart) {
            if (cResult[5] === tmp3) {
              if (cResult[6] === pipState) {
                if (cResult[7] === tmp7) {
                  if (cResult[8] === tmp4) {
                    if (cResult[9] === tmp6) {
                      if (cResult[10] === wrapperOffset) {
                        return cResult[11];
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (cResult[12] !== onTapGestureStart) {
    /* worklet (recovered source) */ function useMorphablePanelGestureTsx1(){const{onTapGestureStart}=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();}
    let obj = { onTapGestureStart };
    useMorphablePanelGestureTsx1.__closure = obj;
    useMorphablePanelGestureTsx1.__workletHash = 9880530558215;
    useMorphablePanelGestureTsx1.__initData = __initData;
    cResult[12] = onTapGestureStart;
    cResult[13] = useMorphablePanelGestureTsx1;
    let tmp9 = useMorphablePanelGestureTsx1;
  } else {
    tmp9 = cResult[13];
  }
  if (cResult[14] === sharedValue) {
    if (cResult[15] === tmp7) {
      if (cResult[16] === tmp4) {
        if (cResult[17] === tmp6) {
          if (cResult[18] === wrapperOffset) {
            let tmp11 = cResult[19];
          }
          if (cResult[20] === sharedValue) {
            if (cResult[21] === mode) {
              if (cResult[22] === wrapperOffset) {
                let tmp12 = cResult[23];
              }
              if (cResult[24] === sharedValue) {
                if (cResult[25] === mode) {
                  if (cResult[26] === tmp7) {
                    if (cResult[27] === wrapperOffset) {
                      let tmp17 = cResult[28];
                    }
                    if (cResult[29] === sharedValue) {
                      if (cResult[30] === wrapperOffset) {
                        let tmp22 = cResult[31];
                      }
                      if (cResult[32] === tmp5) {
                        if (cResult[33] === sharedValue) {
                          if (cResult[34] === mode) {
                            if (cResult[35] === onPanMinimizeGestureEnd) {
                              if (cResult[36] === pipState) {
                                if (cResult[37] === tmp7) {
                                  if (cResult[38] === tmp6) {
                                    if (cResult[39] === wrapperOffset) {
                                      let tmp24 = cResult[40];
                                    }
                                    if (cResult[41] !== sharedValue) {
                                      /* worklet (recovered source) */ function useMorphablePanelGestureTsx2(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});}
                                      let obj3 = { updateSharedValueIfChanged: enabledResult(RaceResult[7]), initialGestureOffset: sharedValue };
                                      useMorphablePanelGestureTsx2.__closure = obj3;
                                      useMorphablePanelGestureTsx2.__workletHash = 11153815903321;
                                      useMorphablePanelGestureTsx2.__initData = __initData2;
                                      cResult[41] = sharedValue;
                                      cResult[42] = useMorphablePanelGestureTsx2;
                                      let tmp27 = useMorphablePanelGestureTsx2;
                                    } else {
                                      tmp27 = cResult[42];
                                    }
                                    const Gesture = onEndResult(RaceResult[8]).Gesture;
                                    const Gesture2 = onEndResult(RaceResult[8]).Gesture;
                                    enabledResult = Gesture2.Tap().enabled(null != onTapGestureStart);
                                    const TapResult = Gesture2.Tap();
                                    const maxDistanceResult = enabledResult.maxDistance(windowDimensions);
                                    const Gesture3 = onEndResult(RaceResult[8]).Gesture;
                                    const onStartResult = enabledResult.maxDistance(windowDimensions).onStart(tmp9);
                                    const PanResult = Gesture3.Pan();
                                    const enabledResult1 = Gesture3.Pan().enabled(tmp3);
                                    const manualActivationResult = Gesture3.Pan().enabled(tmp3).manualActivation(true);
                                    flag = false;
                                    let result = Gesture3.Pan().enabled(tmp3).manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
                                    const maxPointersResult = Gesture3.Pan().enabled(tmp3).manualActivation(true).maxPointers(1);
                                    const onBeginResult = result.onBegin(tmp11);
                                    const onTouchesMoveResult = result.onBegin(tmp11).onTouchesMove(tmp12);
                                    const onChangeResult = result.onBegin(tmp11).onTouchesMove(tmp12).onChange(tmp17);
                                    onEndResult = result.onBegin(tmp11).onTouchesMove(tmp12).onChange(tmp17).onTouchesCancelled(tmp22).onEnd(tmp24);
                                    RaceResult = Gesture.Race(onStartResult, onEndResult.onFinalize(tmp27));
                                    cResult[0] = tmp5;
                                    cResult[1] = sharedValue;
                                    cResult[2] = mode;
                                    cResult[3] = onPanMinimizeGestureEnd;
                                    cResult[4] = onTapGestureStart;
                                    cResult[5] = tmp3;
                                    cResult[6] = pipState;
                                    cResult[7] = tmp7;
                                    cResult[8] = tmp4;
                                    cResult[9] = tmp6;
                                    cResult[10] = wrapperOffset;
                                    cResult[11] = RaceResult;
                                    const onTouchesCancelledResult = result.onBegin(tmp11).onTouchesMove(tmp12).onChange(tmp17).onTouchesCancelled(tmp22);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      /* worklet (recovered source) */ function useMorphablePanelGestureTsx3(event_2){const{initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd}=this.__closure;if(initialGestureOffset.get().cancel){return;}var velocityX=event_2.velocityX,velocityY=event_2.velocityY,absoluteX_0=event_2.absoluteX,absoluteY_0=event_2.absoluteY;if(mode===MorphablePanelModes.PIP){var _calculatePIPPosition=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}),pipX=_calculatePIPPosition.pipX,pipY=_calculatePIPPosition.pipY;updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else{if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});}
                      const obj4 = { initialGestureOffset: sharedValue, mode, MorphablePanelModes, calculatePIPPositionFromVelocity: onEndResult(RaceResult[9]).calculatePIPPositionFromVelocity, windowDimensions: tmp6, safeArea: tmp7, disableHorizontalSafeAreas: tmp5, updateSharedValueIfChanged: enabledResult(RaceResult[7]), wrapperOffset, pipState, onPanMinimizeGestureEnd };
                      useMorphablePanelGestureTsx3.__closure = obj4;
                      useMorphablePanelGestureTsx3.__workletHash = 2344164754094;
                      useMorphablePanelGestureTsx3.__initData = __initData3;
                      cResult[32] = tmp5;
                      cResult[33] = sharedValue;
                      cResult[34] = mode;
                      cResult[35] = onPanMinimizeGestureEnd;
                      cResult[36] = pipState;
                      cResult[37] = tmp7;
                      cResult[38] = tmp6;
                      cResult[39] = wrapperOffset;
                      cResult[40] = useMorphablePanelGestureTsx3;
                      tmp24 = useMorphablePanelGestureTsx3;
                    }
                    /* worklet (recovered source) */ function useMorphablePanelGestureTsx4(_e){const{updateSharedValueIfChanged,initialGestureOffset,wrapperOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}
                    let obj5 = { updateSharedValueIfChanged: enabledResult(RaceResult[7]), initialGestureOffset: sharedValue, wrapperOffset };
                    useMorphablePanelGestureTsx4.__closure = obj5;
                    useMorphablePanelGestureTsx4.__workletHash = 14566382353702;
                    useMorphablePanelGestureTsx4.__initData = __initData4;
                    cResult[29] = sharedValue;
                    cResult[30] = wrapperOffset;
                    cResult[31] = useMorphablePanelGestureTsx4;
                    tmp22 = useMorphablePanelGestureTsx4;
                  }
                }
              }
              /* worklet (recovered source) */ function useMorphablePanelGestureTsx5(event_1){const{mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(mode!==MorphablePanelModes.PIP){var minYOffset=safeArea.top;var newYOffset=(initialGestureOffset.get().absoluteYStart-event_1.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){var distance=Math.max(newYOffset,0);var resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event_1.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event_1.absoluteY)*-1});}}
              const obj6 = { mode, MorphablePanelModes, safeArea: tmp7, initialGestureOffset: sharedValue, POP_RESISTANCE: sharedValue, PIP_POP_HEIGHT, runOnJS: onEndResult(RaceResult[6]).runOnJS, triggerHapticFeedback: onEndResult(RaceResult[11]).triggerHapticFeedback, HapticFeedbackTypes: onEndResult(RaceResult[11]).HapticFeedbackTypes, updateSharedValueIfChanged: enabledResult(RaceResult[7]), wrapperOffset };
              useMorphablePanelGestureTsx5.__closure = obj6;
              useMorphablePanelGestureTsx5.__workletHash = 11109654346037;
              useMorphablePanelGestureTsx5.__initData = __initData5;
              cResult[24] = sharedValue;
              cResult[25] = mode;
              cResult[26] = tmp7;
              cResult[27] = wrapperOffset;
              cResult[28] = useMorphablePanelGestureTsx5;
              tmp17 = useMorphablePanelGestureTsx5;
            }
          }
          /* worklet (recovered source) */ function useMorphablePanelGestureTsx6(event_0,manager){const{IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event_0.state!==State.BEGAN||initialGestureOffset.get().active){return;}var _calculateXYDiff=calculateXYDiff(event_0,initialGestureOffset),absoluteX=_calculateXYDiff.absoluteX,absoluteY=_calculateXYDiff.absoluteY,absoluteMovement=_calculateXYDiff.absoluteMovement,isNotPullDownGesture=_calculateXYDiff.isNotPullDownGesture,yDiff=_calculateXYDiff.yDiff;var startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else{if(isNotPullDownGesture){manager.fail();}}}else{if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}}
          const obj7 = { IS_IOS: wrapperOffset, initialGestureOffset: sharedValue, State: onEndResult(RaceResult[8]).State, calculateXYDiff: onEndResult(RaceResult[9]).calculateXYDiff, mode, MorphablePanelModes, MIN_PAN_GESTURE_MOVE, runOnJS: onEndResult(RaceResult[6]).runOnJS, triggerIOSHaptic: enabledResult(RaceResult[10]), updateSharedValueIfChanged: enabledResult(RaceResult[7]), wrapperOffset };
          useMorphablePanelGestureTsx6.__closure = obj7;
          useMorphablePanelGestureTsx6.__workletHash = 6211199234682;
          useMorphablePanelGestureTsx6.__initData = __initData6;
          cResult[20] = sharedValue;
          cResult[21] = mode;
          cResult[22] = wrapperOffset;
          cResult[23] = useMorphablePanelGestureTsx6;
          tmp12 = useMorphablePanelGestureTsx6;
        }
      }
    }
  }
  /* worklet (recovered source) */ function useMorphablePanelGestureTsx7(event){const{updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});}
  const onEndResultResult = onEndResult(RaceResult[6]);
  useMorphablePanelGestureTsx7.__closure = { updateSharedValueIfChanged: enabledResult(RaceResult[7]), wrapperOffset, initialGestureOffset: sharedValue, windowDimensions: tmp6, safeArea: tmp7, swipeRequiresPop: flag !== swipeRequiresPop && swipeRequiresPop };
  useMorphablePanelGestureTsx7.__workletHash = 14796057583737;
  useMorphablePanelGestureTsx7.__initData = __initData7;
  cResult[14] = sharedValue;
  cResult[15] = tmp7;
  cResult[16] = flag !== swipeRequiresPop && swipeRequiresPop;
  cResult[17] = tmp6;
  cResult[18] = wrapperOffset;
  cResult[19] = useMorphablePanelGestureTsx7;
  tmp11 = useMorphablePanelGestureTsx7;
  const obj8 = { updateSharedValueIfChanged: enabledResult(RaceResult[7]), wrapperOffset, initialGestureOffset: sharedValue, windowDimensions: tmp6, safeArea: tmp7, swipeRequiresPop: flag !== swipeRequiresPop && swipeRequiresPop };
}) : ((mode) => {
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
  const tmp = onPanMinimizeGestureEnd(onTapGestureStart[4])();
  const windowDimensions = tmp;
  const tmp2 = onPanMinimizeGestureEnd(onTapGestureStart[5])();
  const safeArea = tmp2;
  const sharedValue = mode(onTapGestureStart[6]).useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, active: false, gestureInBottomSafeArea: false, cancel: false, requiresPop: false });
  const items = [sharedValue, mode, flag2, onPanMinimizeGestureEnd, onTapGestureStart, flag, tmp2, tmp, pipState, wrapperOffset, flag3];
  return flag.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(null != onTapGestureStart);
    const fn = function x() {
      if (onTapGestureStart != null) {
        tmp();
      }
    };
    fn.__closure = { onTapGestureStart };
    fn.__workletHash = 290705415438;
    fn.__initData = __initData;
    const maxDistanceResult = Gesture2.Tap().enabled(null != onTapGestureStart).maxDistance(React5);
    const Gesture3 = LegacyBaseButton.Gesture;
    const onStartResult = Gesture2.Tap().enabled(null != onTapGestureStart).maxDistance(React5).onStart(fn);
    const PanResult = Gesture3.Pan();
    const enabledResult1 = Gesture3.Pan().enabled(flag);
    const manualActivationResult = Gesture3.Pan().enabled(flag).manualActivation(true);
    let result = Gesture3.Pan().enabled(flag).manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
    class V {
      constructor(arg0) {
        tmp = onPanMinimizeGestureEnd(onTapGestureStart[7])(closure_1_6, { x: 0, y: 0 });
        obj = { absoluteXStart: arg0.absoluteX, absoluteYStart: arg0.absoluteY, active: false, cancel: arg0.absoluteY > closure_1_8.height - 2 * closure_1_9.bottom, gestureInBottomSafeArea: arg0.absoluteY > closure_1_8.height - closure_1_9.bottom, requiresPop: closure_1_5 };
        result = closure_1_10.set(obj);
        return;
      }
    }
    const maxPointersResult = Gesture3.Pan().enabled(flag).manualActivation(true).maxPointers(1);
    V.__closure = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, initialGestureOffset: sharedValue, windowDimensions, safeArea, swipeRequiresPop: flag2 };
    V.__workletHash = 13503852844523;
    V.__initData = __initData7;
    let obj = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, initialGestureOffset: sharedValue, windowDimensions, safeArea, swipeRequiresPop: flag2 };
    class C {
      constructor(arg0, arg1) {
        if (pipState) {
          tmp = closure_1_10;
          if (closure_1_10.get().gestureInBottomSafeArea) {
            activateResult = arg1.activate();
          }
          return;
        }
        obj = closure_1_10;
        if (closure_1_10.get().cancel) {
          failResult = arg1.fail();
        } else {
          tmp2 = arg0;
          tmp3 = mode;
          tmp4 = onTapGestureStart;
          if (arg0.state === mode(onTapGestureStart[8]).State.BEGAN) {
            if (!obj.get().active) {
              tmp3Result = tmp3(tmp4[9]);
              calculateXYDiffResult = tmp3Result.calculateXYDiff(arg0, obj);
              ({ absoluteX, absoluteY } = calculateXYDiffResult);
              if (closure_1_0 === wrapperOffset.PANEL) {
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
                  tmp12 = c5;
                  tmp11 = tmp6 > c5;
                }
                flag = false;
                if (tmp11) {
                  tmp3Result1 = tmp3(tmp4[6]);
                  tmp13 = onPanMinimizeGestureEnd;
                  tmp14 = tmp3Result1.runOnJS(onPanMinimizeGestureEnd(tmp4[10]))();
                  flag = true;
                }
              }
              if (flag) {
                tmp16 = onPanMinimizeGestureEnd;
                tmp17 = closure_1_6;
                tmp18 = onPanMinimizeGestureEnd(tmp4[7])(closure_1_6, { x: 0, y: 0, gestureActive: true });
                obj1 = { absoluteXStart: null, absoluteYStart: null, active: true, cancel: false, gestureInBottomSafeArea: false, requiresPop: null };
                obj1.absoluteXStart = absoluteX;
                obj1.absoluteYStart = absoluteY;
                obj1.requiresPop = obj.get().requiresPop;
                result = obj.set(obj1);
                activateResult1 = arg1.activate();
              }
            }
          }
        }
        return;
      }
    }
    const onBeginResult = result.onBegin(V);
    C.__closure = { IS_IOS, initialGestureOffset: sharedValue, State: LegacyBaseButton.State, calculateXYDiff: MorphablePanelUtils.calculateXYDiff, mode, MorphablePanelModes, MIN_PAN_GESTURE_MOVE, runOnJS: ReanimatedRexport.runOnJS, triggerIOSHaptic: triggerIOSHapticDefault, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset };
    C.__workletHash = 14846378895861;
    C.__initData = __initData6;
    let obj2 = { IS_IOS, initialGestureOffset: sharedValue, State: LegacyBaseButton.State, calculateXYDiff: MorphablePanelUtils.calculateXYDiff, mode, MorphablePanelModes, MIN_PAN_GESTURE_MOVE, runOnJS: ReanimatedRexport.runOnJS, triggerIOSHaptic: triggerIOSHapticDefault, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset };
    class H {
      constructor(arg0) {
        if (closure_1_0 !== wrapperOffset.PIP) {
          tmp7 = closure_1_9;
          obj2 = closure_1_10;
          absoluteYStart = closure_1_10.get().absoluteYStart;
          num2 = -1;
          result = -1 * (absoluteYStart - arg0.absoluteY);
          requiresPop = closure_1_10.get().requiresPop;
          tmp9 = !requiresPop;
          if (!requiresPop) {
            tmp9 = result <= closure_1_9.top;
          }
          if (tmp9) {
            obj1 = {};
            tmp10 = obj1;
            absoluteYStart = Object.assign(obj2.get());
            flag = true;
            obj1.requiresPop = true;
            result1 = obj2.set(obj1);
          }
          diff = result;
          if (!obj2.get().requiresPop) {
            tmp23 = onPanMinimizeGestureEnd;
            tmp24 = onTapGestureStart;
            tmp25 = closure_1_6;
            point = { y: null, x: 0 };
            point.y = diff;
            tmp26 = onPanMinimizeGestureEnd(onTapGestureStart[7])(closure_1_6, point);
          } else {
            tmp13 = globalThis;
            _Math = Math;
            num3 = 0;
            absoluteYStart = Math.max(result, 0);
            tmp14 = closure_8;
            if (absoluteYStart > closure_8) {
              obj7 = {};
              tmp15 = obj7;
              merged = Object.assign(obj2.get());
              flag2 = false;
              obj7.requiresPop = false;
              result2 = obj2.set(obj7);
              tmp18 = mode;
              tmp19 = onTapGestureStart;
              obj5 = mode(onTapGestureStart[6]);
              runOnJSResult = obj5.runOnJS(mode(onTapGestureStart[11]).triggerHapticFeedback);
              tmp20Result = runOnJSResult(mode(onTapGestureStart[11]).HapticFeedbackTypes.IMPACT_MEDIUM);
              diff = result;
            }
          }
          tmp22 = closure_9;
          diff = absoluteYStart - absoluteYStart * closure_9;
        } else {
          tmp = onPanMinimizeGestureEnd;
          tmp2 = onTapGestureStart;
          tmp4 = closure_1_6;
          point1 = { x: null, y: null };
          tmp5 = closure_1_10;
          tmp3 = onPanMinimizeGestureEnd(onTapGestureStart[7]);
          num = -1;
          point1.x = -1 * (closure_1_10.get().absoluteXStart - arg0.absoluteX);
          point1.y = -1 * (closure_1_10.get().absoluteYStart - arg0.absoluteY);
          tmp3Result = tmp3(closure_1_6, point1);
          return;
        }
        return;
      }
    }
    const onTouchesMoveResult = onBeginResult.onTouchesMove(C);
    H.__closure = { mode, MorphablePanelModes, safeArea, initialGestureOffset: sharedValue, POP_RESISTANCE, PIP_POP_HEIGHT, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset };
    H.__workletHash = 12106934995355;
    H.__initData = __initData5;
    let obj3 = { mode, MorphablePanelModes, safeArea, initialGestureOffset: sharedValue, POP_RESISTANCE, PIP_POP_HEIGHT, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset };
    class D {
      constructor() {
        tmp = onPanMinimizeGestureEnd(onTapGestureStart[7])(closure_1_10, { active: false });
        tmp2 = onPanMinimizeGestureEnd(onTapGestureStart[7])(closure_1_6, { gestureActive: false });
        return;
      }
    }
    const onChangeResult = onTouchesMoveResult.onChange(H);
    D.__closure = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset: sharedValue, wrapperOffset };
    D.__workletHash = 15773700221650;
    D.__initData = __initData4;
    const obj4 = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset: sharedValue, wrapperOffset };
    class T {
      constructor(arg0) {
        obj = closure_1_10;
        if (!closure_1_10.get().cancel) {
          tmp = arg0;
          velocityY = arg0.velocityY;
          if (closure_1_0 === wrapperOffset.PIP) {
            tmp14 = mode;
            tmp15 = onTapGestureStart;
            obj3 = mode(onTapGestureStart[9]);
            obj1 = { velocityX: null, velocityY: null, absoluteX: null, absoluteY: null, windowDimensions: null, safeArea: null, disableHorizontalSafeAreas: null };
            obj1.velocityX = tmp2;
            obj1.velocityY = velocityY;
            obj1.absoluteX = tmp3;
            obj1.absoluteY = tmp4;
            tmp16 = closure_1_8;
            obj1.windowDimensions = closure_1_8;
            tmp17 = closure_1_9;
            obj1.safeArea = closure_1_9;
            tmp18 = closure_1_7;
            obj1.disableHorizontalSafeAreas = closure_1_7;
            result = obj3.calculatePIPPositionFromVelocity(obj1);
            tmp20 = onPanMinimizeGestureEnd;
            ({ pipX, pipY } = result);
            tmp21 = closure_1_6;
            tmp22 = onPanMinimizeGestureEnd(onTapGestureStart[7])(closure_1_6, { gestureActive: false });
            tmp23 = closure_1_4;
            point = { x: null, y: null };
            point.x = pipX;
            point.y = pipY;
            tmp24 = onPanMinimizeGestureEnd(onTapGestureStart[7])(closure_1_4, point);
          } else if (tmp5 === tmp6.PANEL) {
            num = 0;
            if (velocityY > 0) {
              if (!obj.get().requiresPop) {
                tmp7 = onPanMinimizeGestureEnd;
                tmp8 = onTapGestureStart;
                tmp9 = closure_1_6;
                point1 = { x: 0, y: null };
                tmp10 = closure_1_8;
                point1.y = closure_1_8.height;
                tmp11 = onPanMinimizeGestureEnd(onTapGestureStart[7])(closure_1_6, point1);
                tmp12 = null;
                if (closure_1_1 != null) {
                  tmp13 = closure_1_1();
                }
                return;
              }
            }
          }
          tmp25 = onPanMinimizeGestureEnd;
          tmp26 = onTapGestureStart;
          tmp27 = closure_1_6;
          tmp28 = onPanMinimizeGestureEnd(onTapGestureStart[7])(closure_1_6, { x: 0, y: 0, gestureActive: false });
        }
        return;
      }
    }
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(D);
    T.__closure = { initialGestureOffset: sharedValue, mode, MorphablePanelModes, calculatePIPPositionFromVelocity: MorphablePanelUtils.calculatePIPPositionFromVelocity, windowDimensions, safeArea, disableHorizontalSafeAreas: flag3, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, pipState, onPanMinimizeGestureEnd };
    T.__workletHash = 8024923770433;
    T.__initData = __initData3;
    let obj5 = { initialGestureOffset: sharedValue, mode, MorphablePanelModes, calculatePIPPositionFromVelocity: MorphablePanelUtils.calculatePIPPositionFromVelocity, windowDimensions, safeArea, disableHorizontalSafeAreas: flag3, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, pipState, onPanMinimizeGestureEnd };
    const fn2 = function t() {
      onPanMinimizeGestureEnd(onTapGestureStart[7])(sharedValue, { active: false, cancel: false });
    };
    const onEndResult = onTouchesCancelledResult.onEnd(T);
    fn2.__closure = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset: sharedValue };
    fn2.__workletHash = 976825876434;
    fn2.__initData = __initData2;
    return Gesture.Race(onStartResult, onEndResult.onFinalize(fn2));
  }, items);
});
export { MorphablePanelModes };