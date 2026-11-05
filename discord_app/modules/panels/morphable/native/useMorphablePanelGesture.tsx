// discord_app/modules/panels/morphable/native/useMorphablePanelGesture.tsx
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05430_LegacyBaseButton.js";
import updateSharedValueIfChangedDefault from "../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import MorphablePanelUtils from "MorphablePanelUtils.tsx";
import triggerIOSHapticDefault from "triggerIOSHaptic.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const MorphablePanelConstants = fn(11420);
({ IS_IOS: closure_4, MIN_PAN_GESTURE_MOVE: hasOwnProperty, MorphablePanelModes } = MorphablePanelConstants);
({
  PANEL_TAP_GESTURE_MAX_DISTANCE: metroImportDefault,
  PIP_POP_HEIGHT: closure_8,
  POP_RESISTANCE: closure_9,
} = MorphablePanelConstants);
let closure_10 = {
  code: "(function useMorphablePanelGestureTsx1(){let[onTapGestureStart]=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();})",
};
let closure_11 = {
  code: "(function useMorphablePanelGestureTsx2(event){let[updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop]=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});})",
};
let closure_12 = {
  code: "(function useMorphablePanelGestureTsx3(event,manager){let[IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,scheduleOnRN,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset]=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}const{absoluteX:absoluteX,absoluteY:absoluteY,absoluteMovement:absoluteMovement,isNotPullDownGesture:isNotPullDownGesture,yDiff:yDiff}=calculateXYDiff(event,initialGestureOffset);let startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else if(isNotPullDownGesture){manager.fail();}}else if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;scheduleOnRN(triggerIOSHaptic);}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}})",
};
let closure_13 = {
  code: "(function useMorphablePanelGestureTsx4(event){let[mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset]=this.__closure;if(mode!==MorphablePanelModes.PIP){const minYOffset=safeArea.top;let newYOffset=(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1});}})",
};
let closure_14 = {
  code: "(function useMorphablePanelGestureTsx5(_e){let[updateSharedValueIfChanged,initialGestureOffset,wrapperOffset]=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});})",
};
let closure_15 = {
  code: "(function useMorphablePanelGestureTsx6(event){let[initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd]=this.__closure;if(initialGestureOffset.get().cancel){return;}const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode===MorphablePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});})",
};
let closure_16 = {
  code: "(function useMorphablePanelGestureTsx7(){let[updateSharedValueIfChanged,initialGestureOffset]=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/panels/morphable/native/useMorphablePanelGesture.tsx");

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
  const tmp = onPanMinimizeGestureEnd(onTapGestureStart[2])();
  closure_8 = tmp;
  const tmp2 = onPanMinimizeGestureEnd(onTapGestureStart[3])();
  closure_9 = tmp2;
  const sharedValue = mode(onTapGestureStart[4]).useSharedValue({
    absoluteXStart: 0,
    absoluteYStart: 0,
    active: false,
    gestureInBottomSafeArea: false,
    cancel: false,
    requiresPop: false,
  });
  items = [
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
    const Gesture2 = LegacyBaseButton.Gesture;
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(null != onTapGestureStart);
    items = [_undefined9, onTapGestureStart];
    [tmp3, tmp4] = items;
    function useMorphablePanelGestureTsx1() {
      if (c0 != null) {
        tmp();
      }
    }
    const items1 = [tmp4];
    useMorphablePanelGestureTsx1.__closure = items1;
    useMorphablePanelGestureTsx1.__workletHash = 2366314421886;
    useMorphablePanelGestureTsx1.__initData = tmp3;
    const maxDistanceResult = Gesture2.Tap()
      .enabled(null != onTapGestureStart)
      .maxDistance(metroImportDefault);
    const Gesture3 = LegacyBaseButton.Gesture;
    const onStartResult = Gesture2.Tap()
      .enabled(null != onTapGestureStart)
      .maxDistance(metroImportDefault)
      .onStart(useMorphablePanelGestureTsx1);
    const PanResult = Gesture3.Pan();
    const enabledResult1 = Gesture3.Pan().enabled(flag);
    const manualActivationResult = Gesture3.Pan().enabled(flag).manualActivation(true);
    let result = Gesture3.Pan().enabled(flag).manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
    const items2 = [
      closure_11,
      updateSharedValueIfChangedDefault,
      wrapperOffset,
      sharedValue,
      _undefined7,
      _undefined8,
      flag2,
    ];
    [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
    function useMorphablePanelGestureTsx2(absoluteX) {
      _undefined(c1, { x: 0, y: 0 });
      const result = _undefined3.set({
        absoluteXStart: absoluteX.absoluteX,
        absoluteYStart: absoluteX.absoluteY,
        active: false,
        cancel: absoluteX.absoluteY > _undefined4.height - 2 * windowDimensions.bottom,
        gestureInBottomSafeArea: absoluteX.absoluteY > _undefined4.height - windowDimensions.bottom,
        requiresPop: _undefined5,
      });
    }
    const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
    useMorphablePanelGestureTsx2.__closure = items3;
    useMorphablePanelGestureTsx2.__workletHash = 17191883845;
    useMorphablePanelGestureTsx2.__initData = tmp11;
    const maxPointersResult = Gesture3.Pan().enabled(flag).manualActivation(true).maxPointers(1);
    const items4 = [
      closure_12,
      React4,
      sharedValue,
      LegacyBaseButton.State,
      MorphablePanelUtils.calculateXYDiff,
      mode,
      MorphablePanelModes,
      hasOwnProperty,
      _mod1705.scheduleOnRN,
      triggerIOSHapticDefault,
      updateSharedValueIfChangedDefault,
      wrapperOffset,
    ];
    [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items4;
    function useMorphablePanelGestureTsx3(state, activate) {
      if (c0) {
        if (_undefined2.get().gestureInBottomSafeArea) {
          activate.activate();
        }
      }
      if (_undefined2.get().cancel) {
        activate.fail();
      } else if (state.state === _undefined3.BEGAN) {
        if (!_undefined2.get().active) {
          ({ absoluteX, absoluteY } = _undefined4(state, _undefined2));
          if (c4 === _undefined5.PANEL) {
            flag = true;
            if (tmp8 >= 0) {
              flag = false;
              if (tmp7) {
                activate.fail();
                flag = false;
              }
            }
          } else {
            let tmp11 = tmp9 === tmp10.PIP;
            if (tmp11) {
              tmp11 = tmp6 > c6;
            }
            flag = false;
            if (tmp11) {
              _undefined6(c8);
              flag = true;
            }
          }
          if (flag) {
            _undefined8(c10, { x: 0, y: 0, gestureActive: true });
            const obj2 = {
              absoluteXStart: absoluteX,
              absoluteYStart: absoluteY,
              active: true,
              cancel: false,
              gestureInBottomSafeArea: false,
              requiresPop: _undefined2.get().requiresPop,
            };
            const result = _undefined2.set(obj2);
            activate.activate();
          }
          const tmp5 = _undefined4(state, _undefined2);
        }
      }
    }
    const items5 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31];
    useMorphablePanelGestureTsx3.__closure = items5;
    useMorphablePanelGestureTsx3.__workletHash = 362604412627;
    useMorphablePanelGestureTsx3.__initData = tmp20;
    const onBeginResult = result.onBegin(useMorphablePanelGestureTsx2);
    const items6 = [
      closure_13,
      mode,
      MorphablePanelModes,
      _undefined8,
      sharedValue,
      React6,
      React5,
      _mod1705.scheduleOnRN,
      HapticUtils.triggerHapticFeedback,
      HapticUtils.HapticFeedbackTypes,
      updateSharedValueIfChangedDefault,
      wrapperOffset,
    ];
    [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43] = items6;
    function useMorphablePanelGestureTsx4(absoluteY) {
      if (c0 !== _undefined2.PIP) {
        const result = -1 * (_undefined4.get().absoluteYStart - absoluteY.absoluteY);
        const requiresPop = _undefined4.get().requiresPop;
        let tmp7 = !requiresPop;
        if (!requiresPop) {
          tmp7 = result <= _undefined3.top;
        }
        if (tmp7) {
          const obj = {};
          const merged = Object.assign(_undefined4.get());
          obj.requiresPop = true;
          const result1 = _undefined4.set(obj);
        }
        let diff = result;
        if (!_undefined4.get().requiresPop) {
          let bound = _undefined8;
          const point = { y: diff, x: 0 };
          _undefined8(c10, point);
        } else {
          const _Math = Math;
          bound = Math.max(result, 0);
          if (bound > c5) {
            const obj3 = {};
            const merged1 = Object.assign(_undefined4.get());
            obj3.requiresPop = false;
            const result2 = _undefined4.set(obj3);
            disableHorizontalSafeAreas(c7, _undefined7.IMPACT_MEDIUM);
            diff = result;
          }
        }
        diff = bound - bound * c4;
      } else {
        const point1 = {
          x: -1 * (_undefined4.get().absoluteXStart - absoluteY.absoluteX),
          y: -1 * (_undefined4.get().absoluteYStart - absoluteY.absoluteY),
        };
        _undefined8(c10, point1);
      }
    }
    const items7 = [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43];
    useMorphablePanelGestureTsx4.__closure = items7;
    useMorphablePanelGestureTsx4.__workletHash = 6798218307000;
    useMorphablePanelGestureTsx4.__initData = tmp32;
    const onTouchesMoveResult = result
      .onBegin(useMorphablePanelGestureTsx2)
      .onTouchesMove(useMorphablePanelGestureTsx3);
    const items8 = [closure_14, updateSharedValueIfChangedDefault, sharedValue, wrapperOffset];
    [tmp44, tmp45, tmp46, tmp47] = items8;
    function useMorphablePanelGestureTsx5() {
      _undefined(c1, { active: false });
      _undefined(c2, { gestureActive: false });
    }
    const items9 = [tmp45, tmp46, tmp47];
    useMorphablePanelGestureTsx5.__closure = items9;
    useMorphablePanelGestureTsx5.__workletHash = 1347432191838;
    useMorphablePanelGestureTsx5.__initData = tmp44;
    const onChangeResult = result
      .onBegin(useMorphablePanelGestureTsx2)
      .onTouchesMove(useMorphablePanelGestureTsx3)
      .onChange(useMorphablePanelGestureTsx4);
    const items10 = [
      closure_15,
      sharedValue,
      mode,
      MorphablePanelModes,
      MorphablePanelUtils.calculatePIPPositionFromVelocity,
      _undefined7,
      _undefined8,
      flag3,
      updateSharedValueIfChangedDefault,
      wrapperOffset,
      pipState,
      onPanMinimizeGestureEnd,
    ];
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    [tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59] = items10;
    function useMorphablePanelGestureTsx6(velocityY) {
      if (!_undefined.get().cancel) {
        velocityY = velocityY.velocityY;
        if (c1 === _undefined3.PIP) {
          const obj2 = {
            velocityX: tmp2,
            velocityY,
            absoluteX: tmp3,
            absoluteY: tmp4,
            windowDimensions,
            safeArea: _undefined5,
            disableHorizontalSafeAreas,
          };
          ({ pipX, pipY } = _undefined4(obj2));
          _undefined6(c8, { gestureActive: false });
          const point = { x: pipX, y: pipY };
          _undefined6(c9, point);
          const tmp17 = _undefined4(obj2);
        } else if (tmp5 === tmp6.PANEL) {
          if (velocityY > 0) {
            if (!_undefined.get().requiresPop) {
              const point1 = { x: 0, y: windowDimensions.height };
              _undefined6(c8, point1);
              if (_undefined9 != null) {
                _undefined9();
              }
            }
          }
        }
        _undefined6(c8, { x: 0, y: 0, gestureActive: false });
      }
    }
    const items11 = [tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59];
    useMorphablePanelGestureTsx6.__closure = items11;
    useMorphablePanelGestureTsx6.__workletHash = 3887269879503;
    useMorphablePanelGestureTsx6.__initData = tmp48;
    const onTouchesCancelledResult = result
      .onBegin(useMorphablePanelGestureTsx2)
      .onTouchesMove(useMorphablePanelGestureTsx3)
      .onChange(useMorphablePanelGestureTsx4)
      .onTouchesCancelled(useMorphablePanelGestureTsx5);
    const items12 = [closure_16, updateSharedValueIfChangedDefault, sharedValue];
    c0 = undefined;
    c1 = undefined;
    [tmp60, tmp61, tmp62] = items12;
    function useMorphablePanelGestureTsx7() {
      _undefined(c1, { active: false, cancel: false });
    }
    const items13 = [tmp61, tmp62];
    useMorphablePanelGestureTsx7.__closure = items13;
    useMorphablePanelGestureTsx7.__workletHash = 4993346673509;
    useMorphablePanelGestureTsx7.__initData = tmp60;
    return Gesture.Race(
      onStartResult,
      result
        .onBegin(useMorphablePanelGestureTsx2)
        .onTouchesMove(useMorphablePanelGestureTsx3)
        .onChange(useMorphablePanelGestureTsx4)
        .onTouchesCancelled(useMorphablePanelGestureTsx5)
        .onEnd(useMorphablePanelGestureTsx6)
        .onFinalize(useMorphablePanelGestureTsx7),
    );
  }, items);
}
export { MorphablePanelModes };
