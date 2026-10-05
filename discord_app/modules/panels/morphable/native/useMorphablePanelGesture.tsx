// discord_app/modules/panels/morphable/native/useMorphablePanelGesture.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/06140_LegacyBaseButton.js";
import updateSharedValueIfChangedDefault from "../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import MorphablePanelUtils from "MorphablePanelUtils.tsx";
import triggerIOSHapticDefault from "triggerIOSHaptic.tsx";
import react from "../../../../../_runtime/00019_react.js";
import MorphablePanelConstants from "MorphablePanelConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let set, set2;

let MorphablePanelModes;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
({ IS_IOS: closure_4, MIN_PAN_GESTURE_MOVE: hasOwnProperty, MorphablePanelModes } = MorphablePanelConstants);
({
  PANEL_TAP_GESTURE_MAX_DISTANCE: metroImportDefault,
  PIP_POP_HEIGHT: metroImportAll,
  POP_RESISTANCE: c9,
} = MorphablePanelConstants);
const __initData = {
  code: "function useMorphablePanelGestureTsx1(){const{onTapGestureStart}=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();}",
};
const __initData2 = {
  code: "function useMorphablePanelGestureTsx2(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});}",
};
const __initData3 = {
  code: "function useMorphablePanelGestureTsx3(event_2){const{initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd}=this.__closure;if(initialGestureOffset.get().cancel){return;}var velocityX=event_2.velocityX,velocityY=event_2.velocityY,absoluteX_0=event_2.absoluteX,absoluteY_0=event_2.absoluteY;if(mode===MorphablePanelModes.PIP){var _calculatePIPPosition=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}),pipX=_calculatePIPPosition.pipX,pipY=_calculatePIPPosition.pipY;updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else{if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});}",
};
const __initData4 = {
  code: "function useMorphablePanelGestureTsx4(_e){const{updateSharedValueIfChanged,initialGestureOffset,wrapperOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}",
};
const __initData5 = {
  code: "function useMorphablePanelGestureTsx5(event_1){const{mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(mode!==MorphablePanelModes.PIP){var minYOffset=safeArea.top;var newYOffset=(initialGestureOffset.get().absoluteYStart-event_1.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){var distance=Math.max(newYOffset,0);var resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event_1.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event_1.absoluteY)*-1});}}",
};
const __initData6 = {
  code: "function useMorphablePanelGestureTsx6(event_0,manager){const{IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event_0.state!==State.BEGAN||initialGestureOffset.get().active){return;}var _calculateXYDiff=calculateXYDiff(event_0,initialGestureOffset),absoluteX=_calculateXYDiff.absoluteX,absoluteY=_calculateXYDiff.absoluteY,absoluteMovement=_calculateXYDiff.absoluteMovement,isNotPullDownGesture=_calculateXYDiff.isNotPullDownGesture,yDiff=_calculateXYDiff.yDiff;var startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else{if(isNotPullDownGesture){manager.fail();}}}else{if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}}",
};
const __initData7 = {
  code: "function useMorphablePanelGestureTsx7(event){const{updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});}",
};
let closure_17 = {
  code: "function useMorphablePanelGestureTsx8(){const{onTapGestureStart}=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();}",
};
let closure_18 = {
  code: "function useMorphablePanelGestureTsx9(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});}",
};
let closure_19 = {
  code: "function useMorphablePanelGestureTsx10(event_2){const{initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd}=this.__closure;if(initialGestureOffset.get().cancel){return;}const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0}=event_2;if(mode===MorphablePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});}",
};
let closure_20 = {
  code: "function useMorphablePanelGestureTsx11(_e){const{updateSharedValueIfChanged,initialGestureOffset,wrapperOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}",
};
let closure_21 = {
  code: "function useMorphablePanelGestureTsx12(event_1){const{mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(mode!==MorphablePanelModes.PIP){const minYOffset=safeArea.top;let newYOffset=(initialGestureOffset.get().absoluteYStart-event_1.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event_1.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event_1.absoluteY)*-1});}}",
};
let closure_22 = {
  code: "function useMorphablePanelGestureTsx13(event_0,manager){const{IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event_0.state!==State.BEGAN||initialGestureOffset.get().active){return;}const{absoluteX:absoluteX,absoluteY:absoluteY,absoluteMovement:absoluteMovement,isNotPullDownGesture:isNotPullDownGesture,yDiff:yDiff}=calculateXYDiff(event_0,initialGestureOffset);let startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else if(isNotPullDownGesture){manager.fail();}}else if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}}",
};
let closure_23 = {
  code: "function useMorphablePanelGestureTsx14(event){const{updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});}",
};
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (mode) => {
      let onTapGestureStart;
      let panGestureEnabled;
      let pipState;
      let requiresPop;
      let safeArea;
      let swipeRequiresPop;
      let tmp11;
      let tmp12;
      let wrapperOffset;
      const tmp = mode;
      const tmp2 = onTapGestureStart;
      let obj = mode(onTapGestureStart[3]);
      const cResult = obj.c(43);
      mode = mode.mode;
      const onPanMinimizeGestureEnd = mode.onPanMinimizeGestureEnd;
      onTapGestureStart = mode.onTapGestureStart;
      ({ panGestureEnabled, pipState } = mode);
      ({ swipeRequiresPop, wrapperOffset } = mode);
      const disableHorizontalSafeAreas = mode.disableHorizontalSafeAreas;
      const tmp4 = undefined !== panGestureEnabled && panGestureEnabled;
      const tmp5 = undefined !== swipeRequiresPop && swipeRequiresPop;
      MIN_PAN_GESTURE_MOVE = tmp5;
      const tmp6 = undefined !== disableHorizontalSafeAreas && disableHorizontalSafeAreas;
      MorphablePanelModes = tmp6;
      const tmp7 = onPanMinimizeGestureEnd;
      const tmp8 = onPanMinimizeGestureEnd(tmp2[4])();
      const windowDimensions = tmp8;
      let tmp9 = onPanMinimizeGestureEnd(tmp2[5])();
      PIP_POP_HEIGHT = tmp9;
      const tmpResult = tmp(tmp2[6]);
      const sharedValue = tmpResult.useSharedValue({
        absoluteXStart: 0,
        absoluteYStart: 0,
        active: false,
        gestureInBottomSafeArea: false,
        cancel: false,
        requiresPop: false,
      });
      if (cResult[0] === tmp6) {
        if (cResult[1] === sharedValue) {
          if (cResult[2] === mode) {
            if (cResult[3] === onPanMinimizeGestureEnd) {
              if (cResult[4] === onTapGestureStart) {
                if (cResult[5] === tmp4) {
                  if (cResult[6] === pipState) {
                    if (cResult[7] === tmp9) {
                      if (cResult[8] === tmp5) {
                        if (cResult[9] === tmp8) {
                          if (cResult[10] === wrapperOffset) {
                            tmp11 = cResult[11];
                          }
                          return tmp11;
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
        const useMorphablePanelGestureTsx1 = /* worklet (recovered source) */ function useMorphablePanelGestureTsx1() {
          const { onTapGestureStart } = this.__closure;
          var _onTapGestureStart;
          (_onTapGestureStart = onTapGestureStart) === null || _onTapGestureStart === void 0 || _onTapGestureStart();
        };
        let obj2 = { onTapGestureStart };
        useMorphablePanelGestureTsx1.__closure = obj2;
        useMorphablePanelGestureTsx1.__workletHash = 9880530558215;
        useMorphablePanelGestureTsx1.__initData = __initData;
        cResult[12] = onTapGestureStart;
        cResult[13] = useMorphablePanelGestureTsx1;
        tmp12 = useMorphablePanelGestureTsx1;
      } else {
        tmp12 = cResult[13];
      }
      if (cResult[14] === sharedValue) {
        if (cResult[15] === tmp9) {
          if (cResult[16] === tmp5) {
            if (cResult[17] === tmp8) {
              let tmp14;
              if (cResult[18] === wrapperOffset) {
                tmp14 = cResult[19];
              }
              if (cResult[20] === sharedValue) {
                if (cResult[21] === mode) {
                  let tmp15;
                  if (cResult[22] === wrapperOffset) {
                    tmp15 = cResult[23];
                  }
                  if (cResult[24] === sharedValue) {
                    if (cResult[25] === mode) {
                      if (cResult[26] === tmp9) {
                        let tmp20;
                        if (cResult[27] === wrapperOffset) {
                          tmp20 = cResult[28];
                        }
                        if (cResult[29] === sharedValue) {
                          let tmp25;
                          if (cResult[30] === wrapperOffset) {
                            tmp25 = cResult[31];
                          }
                          if (cResult[32] === tmp6) {
                            if (cResult[33] === sharedValue) {
                              if (cResult[34] === mode) {
                                if (cResult[35] === onPanMinimizeGestureEnd) {
                                  if (cResult[36] === pipState) {
                                    if (cResult[37] === tmp9) {
                                      if (cResult[38] === tmp8) {
                                        let tmp27;
                                        let tmp30;
                                        if (cResult[39] === wrapperOffset) {
                                          tmp27 = cResult[40];
                                        }
                                        if (cResult[41] !== sharedValue) {
                                          const useMorphablePanelGestureTsx2 =
                                            /* worklet (recovered source) */ function useMorphablePanelGestureTsx2() {
                                              const { updateSharedValueIfChanged, initialGestureOffset } =
                                                this.__closure;
                                              updateSharedValueIfChanged(initialGestureOffset, {
                                                active: false,
                                                cancel: false,
                                              });
                                            };
                                          let obj3 = {
                                            updateSharedValueIfChanged: tmp7(tmp2[7]),
                                            initialGestureOffset: sharedValue,
                                          };
                                          useMorphablePanelGestureTsx2.__closure = obj3;
                                          useMorphablePanelGestureTsx2.__workletHash = 11153815903321;
                                          useMorphablePanelGestureTsx2.__initData = __initData2;
                                          cResult[41] = sharedValue;
                                          cResult[42] = useMorphablePanelGestureTsx2;
                                          tmp30 = useMorphablePanelGestureTsx2;
                                        } else {
                                          tmp30 = cResult[42];
                                        }
                                        const Gesture = tmp(tmp2[8]).Gesture;
                                        const Race = Gesture.Race;
                                        const Gesture2 = tmp(tmp2[8]).Gesture;
                                        const TapResult = Gesture2.Tap();
                                        const enabledResult = TapResult.enabled(null != onTapGestureStart);
                                        const maxDistanceResult = enabledResult.maxDistance(windowDimensions);
                                        const onStartResult = maxDistanceResult.onStart(tmp12);
                                        const Gesture3 = tmp(tmp2[8]).Gesture;
                                        let flag = true;
                                        const PanResult = Gesture3.Pan();
                                        const enabledResult1 = PanResult.enabled(tmp4);
                                        const manualActivationResult = enabledResult1.manualActivation(true);
                                        const maxPointersResult = manualActivationResult.maxPointers(1);
                                        let result = maxPointersResult.shouldCancelWhenOutside(false);
                                        const onBeginResult = result.onBegin(tmp14);
                                        const onTouchesMoveResult = onBeginResult.onTouchesMove(tmp15);
                                        const onChangeResult = onTouchesMoveResult.onChange(tmp20);
                                        const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(tmp25);
                                        const onEndResult = onTouchesCancelledResult.onEnd(tmp27);
                                        const RaceResult = Race(onStartResult, onEndResult.onFinalize(tmp30));
                                        cResult[0] = tmp6;
                                        cResult[1] = sharedValue;
                                        cResult[2] = mode;
                                        cResult[3] = onPanMinimizeGestureEnd;
                                        cResult[4] = onTapGestureStart;
                                        cResult[5] = tmp4;
                                        cResult[6] = pipState;
                                        cResult[7] = tmp9;
                                        cResult[8] = tmp5;
                                        cResult[9] = tmp8;
                                        cResult[10] = wrapperOffset;
                                        cResult[11] = RaceResult;
                                        tmp11 = RaceResult;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          const useMorphablePanelGestureTsx3 =
                            /* worklet (recovered source) */ function useMorphablePanelGestureTsx3(event_2) {
                              const {
                                initialGestureOffset,
                                mode,
                                MorphablePanelModes,
                                calculatePIPPositionFromVelocity,
                                windowDimensions,
                                safeArea,
                                disableHorizontalSafeAreas,
                                updateSharedValueIfChanged,
                                wrapperOffset,
                                pipState,
                                onPanMinimizeGestureEnd,
                              } = this.__closure;
                              if (initialGestureOffset.get().cancel) {
                                return;
                              }
                              var velocityX = event_2.velocityX,
                                velocityY = event_2.velocityY,
                                absoluteX_0 = event_2.absoluteX,
                                absoluteY_0 = event_2.absoluteY;
                              if (mode === MorphablePanelModes.PIP) {
                                var _calculatePIPPosition = calculatePIPPositionFromVelocity({
                                    velocityX: velocityX,
                                    velocityY: velocityY,
                                    absoluteX: absoluteX_0,
                                    absoluteY: absoluteY_0,
                                    windowDimensions: windowDimensions,
                                    safeArea: safeArea,
                                    disableHorizontalSafeAreas: disableHorizontalSafeAreas,
                                  }),
                                  pipX = _calculatePIPPosition.pipX,
                                  pipY = _calculatePIPPosition.pipY;
                                updateSharedValueIfChanged(wrapperOffset, { gestureActive: false });
                                updateSharedValueIfChanged(pipState, { x: pipX, y: pipY });
                              } else {
                                if (mode === MorphablePanelModes.PANEL) {
                                  if (velocityY > 0) {
                                    if (!initialGestureOffset.get().requiresPop) {
                                      var _onPanMinimizeGesture;
                                      updateSharedValueIfChanged(wrapperOffset, { x: 0, y: windowDimensions.height });
                                      (_onPanMinimizeGesture = onPanMinimizeGestureEnd) === null ||
                                        _onPanMinimizeGesture === void 0 ||
                                        _onPanMinimizeGesture();
                                      return;
                                    }
                                  }
                                }
                              }
                              updateSharedValueIfChanged(wrapperOffset, { x: 0, y: 0, gestureActive: false });
                            };
                          useMorphablePanelGestureTsx3.__closure = {
                            initialGestureOffset: sharedValue,
                            mode,
                            MorphablePanelModes,
                            calculatePIPPositionFromVelocity: tmp(tmp2[9]).calculatePIPPositionFromVelocity,
                            windowDimensions: tmp8,
                            safeArea: tmp9,
                            disableHorizontalSafeAreas: tmp6,
                            updateSharedValueIfChanged: tmp7(tmp2[7]),
                            wrapperOffset,
                            pipState,
                            onPanMinimizeGestureEnd,
                          };
                          useMorphablePanelGestureTsx3.__workletHash = 2344164754094;
                          useMorphablePanelGestureTsx3.__initData = __initData3;
                          cResult[32] = tmp6;
                          cResult[33] = sharedValue;
                          cResult[34] = mode;
                          cResult[35] = onPanMinimizeGestureEnd;
                          cResult[36] = pipState;
                          cResult[37] = tmp9;
                          cResult[38] = tmp8;
                          cResult[39] = wrapperOffset;
                          cResult[40] = useMorphablePanelGestureTsx3;
                          tmp27 = useMorphablePanelGestureTsx3;
                          const obj4 = {
                            initialGestureOffset: sharedValue,
                            mode,
                            MorphablePanelModes,
                            calculatePIPPositionFromVelocity: tmp(tmp2[9]).calculatePIPPositionFromVelocity,
                            windowDimensions: tmp8,
                            safeArea: tmp9,
                            disableHorizontalSafeAreas: tmp6,
                            updateSharedValueIfChanged: tmp7(tmp2[7]),
                            wrapperOffset,
                            pipState,
                            onPanMinimizeGestureEnd,
                          };
                        }
                        const useMorphablePanelGestureTsx4 =
                          /* worklet (recovered source) */ function useMorphablePanelGestureTsx4(_e) {
                            const { updateSharedValueIfChanged, initialGestureOffset, wrapperOffset } = this.__closure;
                            updateSharedValueIfChanged(initialGestureOffset, { active: false });
                            updateSharedValueIfChanged(wrapperOffset, { gestureActive: false });
                          };
                        let obj5 = {
                          updateSharedValueIfChanged: tmp7(tmp2[7]),
                          initialGestureOffset: sharedValue,
                          wrapperOffset,
                        };
                        useMorphablePanelGestureTsx4.__closure = obj5;
                        useMorphablePanelGestureTsx4.__workletHash = 14566382353702;
                        useMorphablePanelGestureTsx4.__initData = __initData4;
                        cResult[29] = sharedValue;
                        cResult[30] = wrapperOffset;
                        cResult[31] = useMorphablePanelGestureTsx4;
                        tmp25 = useMorphablePanelGestureTsx4;
                      }
                    }
                  }
                  const useMorphablePanelGestureTsx5 =
                    /* worklet (recovered source) */ function useMorphablePanelGestureTsx5(event_1) {
                      const {
                        mode,
                        MorphablePanelModes,
                        safeArea,
                        initialGestureOffset,
                        POP_RESISTANCE,
                        PIP_POP_HEIGHT,
                        runOnJS,
                        triggerHapticFeedback,
                        HapticFeedbackTypes,
                        updateSharedValueIfChanged,
                        wrapperOffset,
                      } = this.__closure;
                      if (mode !== MorphablePanelModes.PIP) {
                        var minYOffset = safeArea.top;
                        var newYOffset = (initialGestureOffset.get().absoluteYStart - event_1.absoluteY) * -1;
                        if (!initialGestureOffset.get().requiresPop && newYOffset <= minYOffset) {
                          initialGestureOffset.set({ ...initialGestureOffset.get(), requiresPop: true });
                        }
                        if (initialGestureOffset.get().requiresPop) {
                          var distance = Math.max(newYOffset, 0);
                          var resistance = distance * POP_RESISTANCE;
                          if (distance <= PIP_POP_HEIGHT) {
                            newYOffset = distance - resistance;
                          } else {
                            initialGestureOffset.set({ ...initialGestureOffset.get(), requiresPop: false });
                            runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);
                          }
                        }
                        updateSharedValueIfChanged(wrapperOffset, { y: newYOffset, x: 0 });
                      } else {
                        updateSharedValueIfChanged(wrapperOffset, {
                          x: (initialGestureOffset.get().absoluteXStart - event_1.absoluteX) * -1,
                          y: (initialGestureOffset.get().absoluteYStart - event_1.absoluteY) * -1,
                        });
                      }
                    };
                  useMorphablePanelGestureTsx5.__closure = {
                    mode,
                    MorphablePanelModes,
                    safeArea: tmp9,
                    initialGestureOffset: sharedValue,
                    POP_RESISTANCE: sharedValue,
                    PIP_POP_HEIGHT,
                    runOnJS: tmp(tmp2[6]).runOnJS,
                    triggerHapticFeedback: tmp(tmp2[11]).triggerHapticFeedback,
                    HapticFeedbackTypes: tmp(tmp2[11]).HapticFeedbackTypes,
                    updateSharedValueIfChanged: tmp7(tmp2[7]),
                    wrapperOffset,
                  };
                  useMorphablePanelGestureTsx5.__workletHash = 11109654346037;
                  useMorphablePanelGestureTsx5.__initData = __initData5;
                  cResult[24] = sharedValue;
                  cResult[25] = mode;
                  cResult[26] = tmp9;
                  cResult[27] = wrapperOffset;
                  cResult[28] = useMorphablePanelGestureTsx5;
                  tmp20 = useMorphablePanelGestureTsx5;
                  const obj6 = {
                    mode,
                    MorphablePanelModes,
                    safeArea: tmp9,
                    initialGestureOffset: sharedValue,
                    POP_RESISTANCE: sharedValue,
                    PIP_POP_HEIGHT,
                    runOnJS: tmp(tmp2[6]).runOnJS,
                    triggerHapticFeedback: tmp(tmp2[11]).triggerHapticFeedback,
                    HapticFeedbackTypes: tmp(tmp2[11]).HapticFeedbackTypes,
                    updateSharedValueIfChanged: tmp7(tmp2[7]),
                    wrapperOffset,
                  };
                }
              }
              const useMorphablePanelGestureTsx6 =
                /* worklet (recovered source) */ function useMorphablePanelGestureTsx6(event_0, manager) {
                  const {
                    IS_IOS,
                    initialGestureOffset,
                    State,
                    calculateXYDiff,
                    mode,
                    MorphablePanelModes,
                    MIN_PAN_GESTURE_MOVE,
                    runOnJS,
                    triggerIOSHaptic,
                    updateSharedValueIfChanged,
                    wrapperOffset,
                  } = this.__closure;
                  if (IS_IOS && initialGestureOffset.get().gestureInBottomSafeArea) {
                    manager.activate();
                    return;
                  }
                  if (initialGestureOffset.get().cancel) {
                    manager.fail();
                    return;
                  }
                  if (event_0.state !== State.BEGAN || initialGestureOffset.get().active) {
                    return;
                  }
                  var _calculateXYDiff = calculateXYDiff(event_0, initialGestureOffset),
                    absoluteX = _calculateXYDiff.absoluteX,
                    absoluteY = _calculateXYDiff.absoluteY,
                    absoluteMovement = _calculateXYDiff.absoluteMovement,
                    isNotPullDownGesture = _calculateXYDiff.isNotPullDownGesture,
                    yDiff = _calculateXYDiff.yDiff;
                  var startGesture = false;
                  if (mode === MorphablePanelModes.PANEL) {
                    if (yDiff < 0) {
                      startGesture = true;
                    } else {
                      if (isNotPullDownGesture) {
                        manager.fail();
                      }
                    }
                  } else {
                    if (mode === MorphablePanelModes.PIP && absoluteMovement > MIN_PAN_GESTURE_MOVE) {
                      startGesture = true;
                      runOnJS(triggerIOSHaptic)();
                    }
                  }
                  if (startGesture) {
                    updateSharedValueIfChanged(wrapperOffset, { x: 0, y: 0, gestureActive: true });
                    initialGestureOffset.set({
                      absoluteXStart: absoluteX,
                      absoluteYStart: absoluteY,
                      active: true,
                      cancel: false,
                      gestureInBottomSafeArea: false,
                      requiresPop: initialGestureOffset.get().requiresPop,
                    });
                    manager.activate();
                  }
                };
              useMorphablePanelGestureTsx6.__closure = {
                IS_IOS: wrapperOffset,
                initialGestureOffset: sharedValue,
                State: tmp(tmp2[8]).State,
                calculateXYDiff: tmp(tmp2[9]).calculateXYDiff,
                mode,
                MorphablePanelModes,
                MIN_PAN_GESTURE_MOVE,
                runOnJS: tmp(tmp2[6]).runOnJS,
                triggerIOSHaptic: tmp7(tmp2[10]),
                updateSharedValueIfChanged: tmp7(tmp2[7]),
                wrapperOffset,
              };
              useMorphablePanelGestureTsx6.__workletHash = 6211199234682;
              useMorphablePanelGestureTsx6.__initData = __initData6;
              cResult[20] = sharedValue;
              cResult[21] = mode;
              cResult[22] = wrapperOffset;
              cResult[23] = useMorphablePanelGestureTsx6;
              tmp15 = useMorphablePanelGestureTsx6;
              const obj7 = {
                IS_IOS: wrapperOffset,
                initialGestureOffset: sharedValue,
                State: tmp(tmp2[8]).State,
                calculateXYDiff: tmp(tmp2[9]).calculateXYDiff,
                mode,
                MorphablePanelModes,
                MIN_PAN_GESTURE_MOVE,
                runOnJS: tmp(tmp2[6]).runOnJS,
                triggerIOSHaptic: tmp7(tmp2[10]),
                updateSharedValueIfChanged: tmp7(tmp2[7]),
                wrapperOffset,
              };
            }
          }
        }
      }
      const useMorphablePanelGestureTsx7 = /* worklet (recovered source) */ function useMorphablePanelGestureTsx7(
        event,
      ) {
        const {
          updateSharedValueIfChanged,
          wrapperOffset,
          initialGestureOffset,
          windowDimensions,
          safeArea,
          swipeRequiresPop,
        } = this.__closure;
        updateSharedValueIfChanged(wrapperOffset, { x: 0, y: 0 });
        initialGestureOffset.set({
          absoluteXStart: event.absoluteX,
          absoluteYStart: event.absoluteY,
          active: false,
          cancel: event.absoluteY > windowDimensions.height - safeArea.bottom * 2,
          gestureInBottomSafeArea: event.absoluteY > windowDimensions.height - safeArea.bottom,
          requiresPop: swipeRequiresPop,
        });
      };
      useMorphablePanelGestureTsx7.__closure = {
        updateSharedValueIfChanged: tmp7(tmp2[7]),
        wrapperOffset,
        initialGestureOffset: sharedValue,
        windowDimensions: tmp8,
        safeArea: tmp9,
        swipeRequiresPop: tmp5,
      };
      useMorphablePanelGestureTsx7.__workletHash = 14796057583737;
      useMorphablePanelGestureTsx7.__initData = __initData7;
      cResult[14] = sharedValue;
      cResult[15] = tmp9;
      cResult[16] = tmp5;
      cResult[17] = tmp8;
      cResult[18] = wrapperOffset;
      cResult[19] = useMorphablePanelGestureTsx7;
      tmp14 = useMorphablePanelGestureTsx7;
      ({
        updateSharedValueIfChanged: tmp7(tmp2[7]),
        wrapperOffset,
        initialGestureOffset: sharedValue,
        windowDimensions: tmp8,
        safeArea: tmp9,
        swipeRequiresPop: tmp5,
      });
    }
  : (mode) => {
      let disableHorizontalSafeAreas;
      let requiresPop;
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
      let obj = mode(onTapGestureStart[6]);
      const sharedValue = obj.useSharedValue({
        absoluteXStart: 0,
        absoluteYStart: 0,
        active: false,
        gestureInBottomSafeArea: false,
        cancel: false,
        requiresPop: false,
      });
      const items = [
        sharedValue,
        mode,
        flag2,
        onPanMinimizeGestureEnd,
        onTapGestureStart,
        flag,
        tmp2,
        tmp,
        pipState,
        wrapperOffset,
        flag3,
      ];
      return flag.useMemo(() => {
        const Gesture = LegacyBaseButton.Gesture;
        const Race = Gesture.Race;
        const Gesture2 = LegacyBaseButton.Gesture;
        const TapResult = Gesture2.Tap();
        const fn = function x() {
          if (onTapGestureStart != null) {
            tmp();
          }
        };
        fn.__closure = { onTapGestureStart };
        fn.__workletHash = 290705415438;
        fn.__initData = __initData;
        const enabledResult = TapResult.enabled(null != onTapGestureStart);
        const maxDistanceResult = enabledResult.maxDistance(metroImportDefault);
        const onStartResult = maxDistanceResult.onStart(fn);
        const Gesture3 = LegacyBaseButton.Gesture;
        const PanResult = Gesture3.Pan();
        const enabledResult1 = PanResult.enabled(flag);
        const manualActivationResult = enabledResult1.manualActivation(true);
        const maxPointersResult = manualActivationResult.maxPointers(1);
        let result = maxPointersResult.shouldCancelWhenOutside(false);
        class V {
          constructor(absoluteX) {
            onPanMinimizeGestureEnd(onTapGestureStart[7])(wrapperOffset, { x: 0, y: 0 });
            const obj = {
              absoluteXStart: absoluteX.absoluteX,
              absoluteYStart: absoluteX.absoluteY,
              active: false,
              cancel: absoluteX.absoluteY > windowDimensions.height - 2 * safeArea.bottom,
              gestureInBottomSafeArea: absoluteX.absoluteY > windowDimensions.height - safeArea.bottom,
              requiresPop,
            };
            const result = sharedValue.set(obj);
          }
        }
        let obj = {
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperOffset,
          initialGestureOffset: sharedValue,
          windowDimensions,
          safeArea,
          swipeRequiresPop: flag2,
        };
        V.__closure = obj;
        V.__workletHash = 13503852844523;
        V.__initData = __initData7;
        const onBeginResult = result.onBegin(V);
        class C {
          constructor(state, activate) {
            let absoluteX;
            let absoluteY;
            if (pipState) {
              if (sharedValue.get().gestureInBottomSafeArea) {
                activate.activate();
              }
            }
            if (sharedValue.get().cancel) {
              activate.fail();
            } else if (state.state === mode(onTapGestureStart[8]).State.BEGAN) {
              if (!sharedValue.get().active) {
                const tmp4Result = mode(onTapGestureStart[9]);
                ({ absoluteX, absoluteY } = tmp4Result.calculateXYDiff(state, sharedValue));
                tmp4Result.calculateXYDiff(state, sharedValue);
                if (closure_1_0 === wrapperOffset.PANEL) {
                  flag = true;
                  if (tmp9 >= 0) {
                    flag = false;
                    if (tmp8) {
                      activate.fail();
                      flag = false;
                    }
                  }
                } else {
                  flag = false;
                  const tmp12 = tmp10 === tmp11.PIP && tmp7 > flag2;
                  if (tmp12) {
                    const tmp4Result2 = mode(onTapGestureStart[6]);
                    tmp4Result2.runOnJS(onPanMinimizeGestureEnd(onTapGestureStart[10]))();
                    flag = true;
                  }
                }
                if (flag) {
                  onPanMinimizeGestureEnd(onTapGestureStart[7])(closure_1_6, { x: 0, y: 0, gestureActive: true });
                  const obj2 = {
                    absoluteXStart: absoluteX,
                    absoluteYStart: absoluteY,
                    active: true,
                    cancel: false,
                    gestureInBottomSafeArea: false,
                    requiresPop: sharedValue.get().requiresPop,
                  };
                  set = sharedValue.set;
                  const result = set(obj2);
                  activate.activate();
                }
              }
            }
          }
        }
        let obj2 = {
          IS_IOS,
          initialGestureOffset: sharedValue,
          State: LegacyBaseButton.State,
          calculateXYDiff: MorphablePanelUtils.calculateXYDiff,
          mode,
          MorphablePanelModes,
          MIN_PAN_GESTURE_MOVE: hasOwnProperty,
          runOnJS: ReanimatedRexport.runOnJS,
          triggerIOSHaptic: triggerIOSHapticDefault,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperOffset,
        };
        C.__closure = obj2;
        C.__workletHash = 14846378895861;
        C.__initData = __initData6;
        const onTouchesMoveResult = onBeginResult.onTouchesMove(C);
        class H {
          constructor(absoluteY) {
            if (closure_1_0 !== wrapperOffset.PIP) {
              const top = safeArea.top;
              const result = -1 * (sharedValue.get().absoluteYStart - absoluteY.absoluteY);
              const tmp9 = !sharedValue.get().requiresPop && result <= top;
              if (tmp9) {
                const obj = { requiresPop: true };
                set = sharedValue.set;
                const merged = Object.assign(sharedValue.get());
                const result1 = set(obj);
              }
              let diff = result;
              if (sharedValue.get().requiresPop) {
                const _Math = Math;
                const bound = Math.max(result, 0);
                if (bound <= windowDimensions) {
                  diff = bound - bound * closure_9;
                } else {
                  const obj3 = { requiresPop: false };
                  set2 = sharedValue.set;
                  const merged1 = Object.assign(sharedValue.get());
                  set2(obj3);
                  const obj5 = mode(onTapGestureStart[6]);
                  const runOnJSResult = obj5.runOnJS(mode(onTapGestureStart[11]).triggerHapticFeedback);
                  runOnJSResult(mode(onTapGestureStart[11]).HapticFeedbackTypes.IMPACT_MEDIUM);
                  diff = result;
                }
              }
              const point = { y: diff, x: 0 };
              onPanMinimizeGestureEnd(onTapGestureStart[7])(closure_1_6, point);
            } else {
              const point1 = {
                x: -1 * (sharedValue.get().absoluteXStart - absoluteY.absoluteX),
                y: -1 * (sharedValue.get().absoluteYStart - absoluteY.absoluteY),
              };
              const tmp3 = onPanMinimizeGestureEnd(onTapGestureStart[7]);
              tmp3(closure_1_6, point1);
            }
          }
        }
        let obj3 = {
          mode,
          MorphablePanelModes,
          safeArea,
          initialGestureOffset: sharedValue,
          POP_RESISTANCE: safeArea,
          PIP_POP_HEIGHT: metroImportAll,
          runOnJS: ReanimatedRexport.runOnJS,
          triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
          HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperOffset,
        };
        H.__closure = obj3;
        H.__workletHash = 12106934995355;
        H.__initData = __initData5;
        const onChangeResult = onTouchesMoveResult.onChange(H);
        class D {
          constructor() {
            onPanMinimizeGestureEnd(onTapGestureStart[7])(sharedValue, { active: false });
            onPanMinimizeGestureEnd(onTapGestureStart[7])(wrapperOffset, { gestureActive: false });
          }
        }
        D.__closure = {
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          initialGestureOffset: sharedValue,
          wrapperOffset,
        };
        D.__workletHash = 15773700221650;
        D.__initData = __initData4;
        ({
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          initialGestureOffset: sharedValue,
          wrapperOffset,
        });
        const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(D);
        class T {
          constructor(velocityY) {
            let pipX;
            let pipY;
            if (!sharedValue.get().cancel) {
              velocityY = velocityY.velocityY;
              if (closure_1_0 === wrapperOffset.PIP) {
                const obj2 = {
                  velocityX: tmp2,
                  velocityY,
                  absoluteX: tmp3,
                  absoluteY: tmp4,
                  windowDimensions,
                  safeArea,
                  disableHorizontalSafeAreas,
                };
                const obj3 = mode(onTapGestureStart[9]);
                const result = obj3.calculatePIPPositionFromVelocity(obj2);
                ({ pipX, pipY } = result);
                onPanMinimizeGestureEnd(onTapGestureStart[7])(closure_1_6, { gestureActive: false });
                const point = { x: pipX, y: pipY };
                onPanMinimizeGestureEnd(onTapGestureStart[7])(pipState, point);
              } else if (tmp5 === tmp6.PANEL) {
                if (velocityY > 0) {
                  if (!sharedValue.get().requiresPop) {
                    const point1 = { x: 0, y: windowDimensions.height };
                    onPanMinimizeGestureEnd(onTapGestureStart[7])(closure_1_6, point1);
                    if (closure_1_1 != null) {
                      closure_1_1();
                    }
                  }
                }
              }
              onPanMinimizeGestureEnd(onTapGestureStart[7])(closure_1_6, { x: 0, y: 0, gestureActive: false });
            }
          }
        }
        let obj5 = {
          initialGestureOffset: sharedValue,
          mode,
          MorphablePanelModes,
          calculatePIPPositionFromVelocity: MorphablePanelUtils.calculatePIPPositionFromVelocity,
          windowDimensions,
          safeArea,
          disableHorizontalSafeAreas: flag3,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperOffset,
          pipState,
          onPanMinimizeGestureEnd,
        };
        T.__closure = obj5;
        T.__workletHash = 8024923770433;
        T.__initData = __initData3;
        const fn2 = function t() {
          onPanMinimizeGestureEnd(onTapGestureStart[7])(sharedValue, { active: false, cancel: false });
        };
        const onEndResult = onTouchesCancelledResult.onEnd(T);
        fn2.__closure = {
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          initialGestureOffset: sharedValue,
        };
        fn2.__workletHash = 976825876434;
        fn2.__initData = __initData2;
        ({ updateSharedValueIfChanged: updateSharedValueIfChangedDefault, initialGestureOffset: sharedValue });
        return Race(onStartResult, onEndResult.onFinalize(fn2));
      }, items);
    };
let result = size.fileFinishedImporting("modules/panels/morphable/native/useMorphablePanelGesture.tsx");

export default tmp3;
export { MorphablePanelModes };
