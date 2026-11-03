// === Module 10232: ReanimatedSwipeable ===

// Module 10232 (ReanimatedSwipeable)
import _mod1652 from "module_1652" /* 1652 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop_mod from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
let closure_3 = ["ref", "leftThreshold", "rightThreshold", "enabled", "containerStyle", "childrenContainerStyle", "animationOptions", "overshootLeft", "overshootRight", "testID", "children", "enableTrackpadTwoFingerGesture", "dragOffsetFromLeft", "dragOffsetFromRight", "friction", "overshootFriction", "onSwipeableOpenStartDrag", "onSwipeableCloseStartDrag", "onSwipeableWillOpen", "onSwipeableWillClose", "onSwipeableOpen", "onSwipeableClose", "renderLeftActions", "renderRightActions", "simultaneousWith", "requireToFail", "block", "hitSlop"];
let noop = fn(19);
({ useCallback: hasOwnProperty, useEffect, useImperativeHandle: metroRequire, useMemo: closure_7 } = noop);
let noop = noop_mod;
get_ActivityIndicator = fn(17);
({ I18nManager, StyleSheet, View: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = { code: "(function pnpm_ReanimatedSwipeableTsx4(){let[overshootLeft,leftWidth,overshootRight,rightWidth,rowState,userDrag,friction,appliedTranslation,interpolate,overshootFriction,showLeftProgress,showRightProgress]=this.__closure;var _overshootLeft,_overshootRight;const shouldOvershootLeft=(_overshootLeft=overshootLeft)!==null&&_overshootLeft!==void 0?_overshootLeft:leftWidth.value>0;const shouldOvershootRight=(_overshootRight=overshootRight)!==null&&_overshootRight!==void 0?_overshootRight:rightWidth.value>0;const startOffset=rowState.value===1?leftWidth.value:rowState.value===-1?-rightWidth.value:0;const offsetDrag=userDrag.value/friction+startOffset;appliedTranslation.value=interpolate(offsetDrag,[-rightWidth.value-1,-rightWidth.value,leftWidth.value,leftWidth.value+1],[-rightWidth.value-(shouldOvershootRight?1/overshootFriction:0),-rightWidth.value,leftWidth.value,leftWidth.value+(shouldOvershootLeft?1/overshootFriction:0)]);showLeftProgress.value=leftWidth.value>0?interpolate(appliedTranslation.value,[-1,0,leftWidth.value],[0,0,1]):0;showRightProgress.value=rightWidth.value>0?interpolate(appliedTranslation.value,[-rightWidth.value,0,1],[1,0,0]):0;})" };
let closure_12 = { code: "(function pnpm_ReanimatedSwipeableTsx5(fromValue,toValue){let[onSwipeableWillOpen,runOnJS,SwipeDirection,onSwipeableWillClose]=this.__closure;if(onSwipeableWillOpen&&toValue!==0){runOnJS(onSwipeableWillOpen)(toValue>0?SwipeDirection.RIGHT:SwipeDirection.LEFT);}if(onSwipeableWillClose&&toValue===0){runOnJS(onSwipeableWillClose)(fromValue>0?SwipeDirection.LEFT:SwipeDirection.RIGHT);}})" };
let closure_13 = { code: "(function pnpm_ReanimatedSwipeableTsx6(fromValue,toValue){let[onSwipeableOpen,runOnJS,SwipeDirection,onSwipeableClose]=this.__closure;if(onSwipeableOpen&&toValue!==0){runOnJS(onSwipeableOpen)(toValue>0?SwipeDirection.RIGHT:SwipeDirection.LEFT);}if(onSwipeableClose&&toValue===0){runOnJS(onSwipeableClose)(fromValue>0?SwipeDirection.LEFT:SwipeDirection.RIGHT);}})" };
let closure_14 = { code: "(function pnpm_ReanimatedSwipeableTsx7(isFinished){let[dispatchEndEvents,frozenRowState,toValue]=this.__closure;if(isFinished){dispatchEndEvents(frozenRowState,toValue);}})" };
let closure_15 = { code: "(function pnpm_ReanimatedSwipeableTsx8(toValue,velocityX=0){let[ReduceMotion,animationOptions,rowState,rightWidth,leftWidth,interpolate,appliedTranslation,withSpring,_worklet_10283843840439_init_data,dispatchEndEvents,showLeftProgress,showRightProgress,dispatchImmediateEvents,shouldEnableTap]=this.__closure;const translationSpringConfig={mass:2,damping:1000,stiffness:700,velocity:velocityX,overshootClamping:true,reduceMotion:ReduceMotion.System,...animationOptions};const isClosing=toValue===0;const moveToRight=isClosing?rowState.value<0:toValue>0;const usedWidth=isClosing?moveToRight?rightWidth.value:leftWidth.value:moveToRight?leftWidth.value:rightWidth.value;const progressSpringConfig={...translationSpringConfig,restDisplacementThreshold:0.01,restSpeedThreshold:0.01,velocity:velocityX&&interpolate(velocityX,[-usedWidth,usedWidth],[-1,1])};const frozenRowState=rowState.value;appliedTranslation.value=withSpring(toValue,translationSpringConfig,function pnpm_ReanimatedSwipeableTsx7Factory([_worklet_10283843840439_init_data,dispatchEndEvents,frozenRowState,toValue]){const pnpm_ReanimatedSwipeableTsx7=function(isFinished){if(isFinished){dispatchEndEvents(frozenRowState,toValue);}};pnpm_ReanimatedSwipeableTsx7.__closure=[dispatchEndEvents,frozenRowState,toValue];pnpm_ReanimatedSwipeableTsx7.__workletHash=10283843840439;pnpm_ReanimatedSwipeableTsx7.__initData=_worklet_10283843840439_init_data;return pnpm_ReanimatedSwipeableTsx7;}([_worklet_10283843840439_init_data,dispatchEndEvents,frozenRowState,toValue]));const progressTarget=toValue===0?0:1*Math.sign(toValue);showLeftProgress.value=withSpring(Math.max(progressTarget,0),progressSpringConfig);showRightProgress.value=withSpring(Math.max(-progressTarget,0),progressSpringConfig);dispatchImmediateEvents(frozenRowState,toValue);rowState.value=Math.sign(toValue);shouldEnableTap.value=rowState.value!==0;})" };
let closure_16 = { code: "(function pnpm_ReanimatedSwipeableTsx9(){let[measure,leftLayoutRef,leftWrapperLayoutRef,rightLayoutRef,leftWidth,rightWidth,rowWidth]=this.__closure;var _leftLayout$pageX,_leftWrapperLayout$pa,_rightLayout$pageX,_leftWrapperLayout$pa2;const leftLayout=measure(leftLayoutRef);const leftWrapperLayout=measure(leftWrapperLayoutRef);const rightLayout=measure(rightLayoutRef);leftWidth.value=((_leftLayout$pageX=leftLayout===null||leftLayout===void 0?void 0:leftLayout.pageX)!==null&&_leftLayout$pageX!==void 0?_leftLayout$pageX:0)-((_leftWrapperLayout$pa=leftWrapperLayout===null||leftWrapperLayout===void 0?void 0:leftWrapperLayout.pageX)!==null&&_leftWrapperLayout$pa!==void 0?_leftWrapperLayout$pa:0);rightWidth.value=rowWidth.value-((_rightLayout$pageX=rightLayout===null||rightLayout===void 0?void 0:rightLayout.pageX)!==null&&_rightLayout$pageX!==void 0?_rightLayout$pageX:rowWidth.value)+((_leftWrapperLayout$pa2=leftWrapperLayout===null||leftWrapperLayout===void 0?void 0:leftWrapperLayout.pageX)!==null&&_leftWrapperLayout$pa2!==void 0?_leftWrapperLayout$pa2:0);})" };
let closure_17 = { code: "(function pnpm_ReanimatedSwipeableTsx10(){let[animateRow]=this.__closure;animateRow(0);})" };
let closure_18 = { code: "(function close_Pnpm_ReanimatedSwipeableTsx11(){let[animateRow,runOnUI,_worklet_5083608474645_init_data]=this.__closure;if(_WORKLET){animateRow(0);return;}runOnUI(function close_Pnpm_ReanimatedSwipeableTsx11([_worklet_5083608474645_init_data,animateRow]){const pnpm_ReanimatedSwipeableTsx10=function(){animateRow(0);};pnpm_ReanimatedSwipeableTsx10.__closure=[animateRow];pnpm_ReanimatedSwipeableTsx10.__workletHash=5083608474645;pnpm_ReanimatedSwipeableTsx10.__initData=_worklet_5083608474645_init_data;return pnpm_ReanimatedSwipeableTsx10;}([_worklet_5083608474645_init_data,animateRow]))();})" };
let closure_19 = { code: "(function pnpm_ReanimatedSwipeableTsx12(){let[updateElementWidths,animateRow,leftWidth]=this.__closure;updateElementWidths();animateRow(leftWidth.value);})" };
let closure_20 = { code: "(function openLeft_Pnpm_ReanimatedSwipeableTsx13(){let[updateElementWidths,animateRow,leftWidth,runOnUI,_worklet_16079186854680_init_data]=this.__closure;if(_WORKLET){updateElementWidths();animateRow(leftWidth.value);return;}runOnUI(function openLeft_Pnpm_ReanimatedSwipeableTsx13([_worklet_16079186854680_init_data,updateElementWidths,animateRow,leftWidth]){const pnpm_ReanimatedSwipeableTsx12=function(){updateElementWidths();animateRow(leftWidth.value);};pnpm_ReanimatedSwipeableTsx12.__closure=[updateElementWidths,animateRow,leftWidth];pnpm_ReanimatedSwipeableTsx12.__workletHash=16079186854680;pnpm_ReanimatedSwipeableTsx12.__initData=_worklet_16079186854680_init_data;return pnpm_ReanimatedSwipeableTsx12;}([_worklet_16079186854680_init_data,updateElementWidths,animateRow,leftWidth]))();})" };
let closure_21 = { code: "(function pnpm_ReanimatedSwipeableTsx14(){let[updateElementWidths,animateRow,rightWidth]=this.__closure;updateElementWidths();animateRow(-rightWidth.value);})" };
let closure_22 = { code: "(function openRight_Pnpm_ReanimatedSwipeableTsx15(){let[updateElementWidths,animateRow,rightWidth,runOnUI,_worklet_7359076028115_init_data]=this.__closure;if(_WORKLET){updateElementWidths();animateRow(-rightWidth.value);return;}runOnUI(function openRight_Pnpm_ReanimatedSwipeableTsx15([_worklet_7359076028115_init_data,updateElementWidths,animateRow,rightWidth]){const pnpm_ReanimatedSwipeableTsx14=function(){updateElementWidths();animateRow(-rightWidth.value);};pnpm_ReanimatedSwipeableTsx14.__closure=[updateElementWidths,animateRow,rightWidth];pnpm_ReanimatedSwipeableTsx14.__workletHash=7359076028115;pnpm_ReanimatedSwipeableTsx14.__initData=_worklet_7359076028115_init_data;return pnpm_ReanimatedSwipeableTsx14;}([_worklet_7359076028115_init_data,updateElementWidths,animateRow,rightWidth]))();})" };
let closure_23 = { code: "(function reset_Pnpm_ReanimatedSwipeableTsx16(){let[userDrag,showLeftProgress,appliedTranslation,rowState]=this.__closure;userDrag.value=0;showLeftProgress.value=0;appliedTranslation.value=0;rowState.value=0;})" };
let closure_24 = { code: "(function pnpm_ReanimatedSwipeableTsx17(){let[showLeftProgress]=this.__closure;return{pointerEvents:showLeftProgress.value===0?'none':'auto'};})" };
let closure_25 = { code: "(function pnpm_ReanimatedSwipeableTsx18(){let[showRightProgress]=this.__closure;return{pointerEvents:showRightProgress.value===0?'none':'auto'};})" };
let closure_26 = { code: "(function pnpm_ReanimatedSwipeableTsx19(event){let[userDrag,leftThreshold,leftWidth,rightThreshold,rightWidth,DRAG_TOSS,friction,rowState,animateRow]=this.__closure;var _leftThreshold,_rightThreshold;const{velocityX:velocityX}=event;userDrag.value=event.translationX;const leftThresholdProp=(_leftThreshold=leftThreshold)!==null&&_leftThreshold!==void 0?_leftThreshold:leftWidth.value/2;const rightThresholdProp=(_rightThreshold=rightThreshold)!==null&&_rightThreshold!==void 0?_rightThreshold:rightWidth.value/2;const translationX=(userDrag.value+DRAG_TOSS*velocityX)/friction;let toValue=0;if(rowState.value===0){if(translationX>leftThresholdProp){toValue=leftWidth.value;}else if(translationX<-rightThresholdProp){toValue=-rightWidth.value;}}else if(rowState.value===1){if(translationX>-leftThresholdProp){toValue=leftWidth.value;}}else{if(translationX<rightThresholdProp){toValue=-rightWidth.value;}}animateRow(toValue,velocityX/friction);})" };
let closure_27 = { code: "(function pnpm_ReanimatedSwipeableTsx20(){let[animateRow]=this.__closure;animateRow(0);})" };
let closure_28 = { code: "(function pnpm_ReanimatedSwipeableTsx21(){let[rowState,close]=this.__closure;if(rowState.value!==0){close();}})" };
let closure_29 = { code: "(function pnpm_ReanimatedSwipeableTsx22(event){let[userDrag,rowState,SwipeDirection,dragStarted,onSwipeableOpenStartDrag,runOnJS,onSwipeableCloseStartDrag,updateAnimatedEvent]=this.__closure;userDrag.value=event.translationX;const direction=rowState.value===-1?SwipeDirection.RIGHT:rowState.value===1?SwipeDirection.LEFT:event.translationX>0?SwipeDirection.RIGHT:SwipeDirection.LEFT;if(!dragStarted.value){dragStarted.value=true;if(rowState.value===0&&onSwipeableOpenStartDrag){runOnJS(onSwipeableOpenStartDrag)(direction);}else if(onSwipeableCloseStartDrag){runOnJS(onSwipeableCloseStartDrag)(direction);}}updateAnimatedEvent();})" };
let closure_30 = { code: "(function pnpm_ReanimatedSwipeableTsx23(event){let[handleRelease]=this.__closure;handleRelease(event);})" };
let closure_31 = { code: "(function pnpm_ReanimatedSwipeableTsx24(){let[dragStarted]=this.__closure;dragStarted.value=false;})" };
let closure_32 = { code: "(function pnpm_ReanimatedSwipeableTsx25(){let[appliedTranslation,rowState]=this.__closure;return{transform:[{translateX:appliedTranslation.value}],pointerEvents:rowState.value===0?'auto':'box-only'};})" };
let obj = { container: { overflow: "hidden" }, leftActions: null, rightActions: null };
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFill);
let str = "row";
if (I18nManager.isRTL) {
  str = "row-reverse";
}
obj2.flexDirection = str;
obj2.overflow = "hidden";
obj.leftActions = obj2;
let obj3 = {};
let merged1 = Object.assign(StyleSheet.absoluteFill);
let str2 = "row-reverse";
if (I18nManager.isRTL) {
  str2 = "row";
}
obj3.flexDirection = str2;
obj3.overflow = "hidden";
obj.rightActions = obj3;
function _default(dragOffsetFromLeft) {
  ({ leftThreshold, rightThreshold, enabled, animationOptions, overshootLeft, overshootRight, testID, enableTrackpadTwoFingerGesture } = dragOffsetFromLeft);
  let tmp = undefined !== enableTrackpadTwoFingerGesture;
  ({ ref, containerStyle, childrenContainerStyle, children } = dragOffsetFromLeft);
  if (tmp) {
    tmp = enableTrackpadTwoFingerGesture;
  }
  dragOffsetFromLeft = dragOffsetFromLeft.dragOffsetFromLeft;
  let num = 10;
  if (undefined !== dragOffsetFromLeft) {
    num = dragOffsetFromLeft;
  }
  const dragOffsetFromRight = dragOffsetFromLeft.dragOffsetFromRight;
  let num2 = -10;
  if (undefined !== dragOffsetFromRight) {
    num2 = dragOffsetFromRight;
  }
  const friction = dragOffsetFromLeft.friction;
  let num3 = 1;
  let num4 = 1;
  if (undefined !== friction) {
    num4 = friction;
  }
  const overshootFriction = dragOffsetFromLeft.overshootFriction;
  if (undefined !== overshootFriction) {
    num3 = overshootFriction;
  }
  ({ onSwipeableWillOpen, onSwipeableWillClose, onSwipeableOpen, onSwipeableClose, renderLeftActions } = dragOffsetFromLeft);
  _require = renderLeftActions;
  const renderRightActions = dragOffsetFromLeft.renderRightActions;
  ({ simultaneousWith, requireToFail, block } = dragOffsetFromLeft);
  ({ onSwipeableOpenStartDrag, onSwipeableCloseStartDrag, hitSlop } = dragOffsetFromLeft);
  let tmp2 = _objectWithoutProperties(dragOffsetFromLeft, c3);
  const sharedValue = require("module_1652").useSharedValue(false);
  let obj = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(0);
  let obj2 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(0);
  const obj3 = require("module_1652");
  const sharedValue3 = require("module_1652").useSharedValue(0);
  const obj4 = require("module_1652");
  const sharedValue4 = require("module_1652").useSharedValue(0);
  const obj5 = require("module_1652");
  const sharedValue5 = require("module_1652").useSharedValue(0);
  const obj6 = require("module_1652");
  const sharedValue6 = require("module_1652").useSharedValue(0);
  const obj7 = require("module_1652");
  const sharedValue7 = require("module_1652").useSharedValue(0);
  const obj8 = require("module_1652");
  const sharedValue8 = require("module_1652").useSharedValue(0);
  items = [animatedRef, overshootLeft, sharedValue5, overshootRight, sharedValue6, sharedValue1, sharedValue2, num4, sharedValue3, require("module_1652").interpolate, num3, sharedValue7, sharedValue8];
  _require = undefined;
  c5 = undefined;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items;
  function pnpm_ReanimatedSwipeableTsx4() {
    let tmp = c0;
    if (c0 == null) {
      tmp = _undefined2.value > 0;
    }
    let tmp3 = c2;
    if (c2 == null) {
      tmp3 = _undefined4.value > 0;
    }
    if (1 === _undefined5.value) {
      let num4 = _undefined2.value;
    } else {
      num4 = 0;
      if (-1 === iter.value) {
        num4 = -_undefined4.value;
      }
    }
    items = [-_undefined4.value - 1, -_undefined4.value, _undefined2.value, _undefined2.value + 1];
    let num5 = 0;
    const sum = _undefined6.value / c6 + num4;
    if (tmp3) {
      num5 = 1 / c9;
    }
    const items1 = [-_undefined4.value - num5, -_undefined4.value, _undefined2.value, ];
    let num6 = 0;
    if (tmp) {
      num6 = 1 / c9;
    }
    items1[3] = _undefined2.value + num6;
    _undefined8.value = _undefined9(sum, items, items1);
    let num7 = 0;
    if (_undefined2.value > 0) {
      const items2 = [-1, 0, _undefined2.value];
      num7 = _undefined9(_undefined8.value, items2, [0, 0, 1]);
    }
    closure_10.value = num7;
    let num8 = 0;
    if (_undefined4.value > 0) {
      const items3 = [-_undefined4.value, 0, 1];
      num8 = _undefined9(_undefined8.value, items3, [1, 0, 0]);
    }
    animatedRef.value = num8;
    const tmp9 = -_undefined4.value;
  }
  let items1 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
  pnpm_ReanimatedSwipeableTsx4.__closure = items1;
  pnpm_ReanimatedSwipeableTsx4.__workletHash = 14965618424066;
  pnpm_ReanimatedSwipeableTsx4.__initData = tmp15;
  let items2 = [sharedValue3, num4, sharedValue5, num3, sharedValue6, sharedValue1, sharedValue7, sharedValue8, sharedValue2, overshootLeft, overshootRight];
  let items3 = [animatedRef1, onSwipeableWillOpen, , , ];
  const obj9 = require("module_1652");
  items3[2] = require("module_1652").runOnJS;
  items3[3] = require("module_10233").SwipeDirection;
  items3[4] = onSwipeableWillClose;
  _require = undefined;
  [tmp29, tmp30, tmp31, tmp32, tmp33] = items3;
  function pnpm_ReanimatedSwipeableTsx5(arg0, arg1) {
    let tmp2 = c0;
    if (c0) {
      tmp2 = 0 !== arg1;
    }
    if (!tmp2) {
      let tmp9 = c3;
      if (c3) {
        tmp9 = 0 === arg1;
      }
      if (tmp9) {
        if (arg0 > 0) {
          let RIGHT = _undefined3.LEFT;
        } else {
          RIGHT = _undefined3.RIGHT;
        }
        _undefined2(c3)(RIGHT);
        const tmp12 = _undefined2(c3);
      }
    } else {
      if (arg1 > 0) {
        let LEFT = _undefined3.RIGHT;
      } else {
        LEFT = _undefined3.LEFT;
      }
      _undefined2(c0)(LEFT);
      const tmp4 = _undefined2(c0);
    }
  }
  let items4 = [tmp30, tmp31, tmp32, tmp33];
  pnpm_ReanimatedSwipeableTsx5.__closure = items4;
  pnpm_ReanimatedSwipeableTsx5.__workletHash = 15142479862745;
  pnpm_ReanimatedSwipeableTsx5.__initData = tmp29;
  let items5 = [onSwipeableWillClose, onSwipeableWillOpen];
  const tmp14Result10 = c5(pnpm_ReanimatedSwipeableTsx5, items5);
  let items6 = [animatedRef2, onSwipeableOpen, require("module_1652").runOnJS, require("module_10233").SwipeDirection, onSwipeableClose];
  _require = undefined;
  [tmp35, tmp36, tmp37, tmp38, tmp39] = items6;
  function pnpm_ReanimatedSwipeableTsx6(arg0, arg1) {
    let tmp2 = c0;
    if (c0) {
      tmp2 = 0 !== arg1;
    }
    if (!tmp2) {
      let tmp9 = c3;
      if (c3) {
        tmp9 = 0 === arg1;
      }
      if (tmp9) {
        if (arg0 > 0) {
          let RIGHT = _undefined3.LEFT;
        } else {
          RIGHT = _undefined3.RIGHT;
        }
        _undefined2(c3)(RIGHT);
        const tmp12 = _undefined2(c3);
      }
    } else {
      if (arg1 > 0) {
        let LEFT = _undefined3.RIGHT;
      } else {
        LEFT = _undefined3.LEFT;
      }
      _undefined2(c0)(LEFT);
      const tmp4 = _undefined2(c0);
    }
  }
  let items7 = [tmp36, tmp37, tmp38, tmp39];
  pnpm_ReanimatedSwipeableTsx6.__closure = items7;
  pnpm_ReanimatedSwipeableTsx6.__workletHash = 8374839480698;
  pnpm_ReanimatedSwipeableTsx6.__initData = tmp35;
  const items8 = [onSwipeableClose, onSwipeableOpen];
  const tmp14Result11 = c5(pnpm_ReanimatedSwipeableTsx6, items8);
  const items9 = [closure_15, require("module_1652").ReduceMotion, animationOptions, sharedValue1, sharedValue6, sharedValue5, require("module_1652").interpolate, sharedValue3, require("module_1652").withSpring, closure_14, tmp14Result11, sharedValue7, sharedValue8, tmp14Result10, sharedValue];
  _require = undefined;
  c5 = undefined;
  c7 = undefined;
  c9 = undefined;
  [tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55] = items9;
  function pnpm_ReanimatedSwipeableTsx8(arg0) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 0;
    }
    const obj = { mass: 2, damping: 1000, stiffness: 700, velocity: num, overshootClamping: true, reduceMotion: _undefined.System };
    const merged = Object.assign(c1);
    if (0 === arg0) {
      let tmp3 = _undefined3.value < 0;
    } else {
      tmp3 = arg0 > 0;
    }
    if (0 === arg0) {
      if (tmp3) {
        value2 = _undefined4.value;
      } else {
        value2 = _undefined5.value;
      }
    } else {
      if (tmp3) {
        value = _undefined5.value;
      } else {
        value = _undefined4.value;
      }
      const obj2 = {};
      const merged1 = Object.assign(obj);
      obj2.restDisplacementThreshold = 0.01;
      obj2.restSpeedThreshold = 0.01;
      let tmp13 = num;
      if (num) {
        items = [-value, value];
        tmp13 = _undefined6(num, items, [-1, 1]);
      }
      obj2.velocity = tmp13;
      const value3 = _undefined3.value;
      const items1 = [c8, c9, value3, arg0];
      _undefined = undefined;
      c1 = undefined;
      _undefined3 = undefined;
      [tmp20, tmp21, tmp22, tmp23] = items1;
      function pnpm_ReanimatedSwipeableTsx7(arg0) {
        if (arg0) {
          _undefined(c1, c2);
        }
      }
      const items2 = [tmp21, tmp22, tmp23];
      pnpm_ReanimatedSwipeableTsx7.__closure = items2;
      pnpm_ReanimatedSwipeableTsx7.__workletHash = 10283843840439;
      pnpm_ReanimatedSwipeableTsx7.__initData = tmp20;
      c6.value = _undefined8(arg0, obj, pnpm_ReanimatedSwipeableTsx7);
      let num4 = 0;
      if (!tmp2) {
        const _Math = Math;
        num4 = Math.sign(arg0);
      }
      const _Math2 = Math;
      closure_10.value = _undefined8(Math.max(num4, 0), obj2);
      const _Math3 = Math;
      animatedRef.value = _undefined8(Math.max(-num4, 0), obj2);
      animatedRef1(value3, arg0);
      const _Math4 = Math;
      _undefined3.value = Math.sign(arg0);
      animatedRef2.value = 0 !== _undefined3.value;
    }
  }
  const items10 = [tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55];
  pnpm_ReanimatedSwipeableTsx8.__closure = items10;
  pnpm_ReanimatedSwipeableTsx8.__workletHash = 17107200230771;
  pnpm_ReanimatedSwipeableTsx8.__initData = tmp41;
  const items11 = [sharedValue1, animationOptions, sharedValue3, sharedValue7, sharedValue5, sharedValue8, sharedValue6, tmp14Result10, tmp14Result11];
  const tmp14Result12 = c5(pnpm_ReanimatedSwipeableTsx8, items11);
  closure_10 = tmp14Result12;
  const tmp14Result = c5(pnpm_ReanimatedSwipeableTsx4, items2);
  animatedRef = require("module_1652").useAnimatedRef();
  const tmp3Result = require("module_1652");
  animatedRef1 = require("module_1652").useAnimatedRef();
  const tmp3Result9 = require("module_1652");
  animatedRef2 = require("module_1652").useAnimatedRef();
  const items12 = [animatedStyle, require("module_1652").measure, animatedRef, animatedRef1, animatedRef2, sharedValue5, sharedValue6, sharedValue4];
  _require = undefined;
  c5 = undefined;
  [tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67] = items12;
  function pnpm_ReanimatedSwipeableTsx9() {
    const tmp = _undefined(c1);
    const tmp2 = _undefined(c2);
    const tmp3 = _undefined(c3);
    let num;
    if (tmp != null) {
      num = tmp.pageX;
    }
    if (num == null) {
      num = 0;
    }
    let num2;
    if (tmp2 != null) {
      num2 = tmp2.pageX;
    }
    if (num2 == null) {
      num2 = 0;
    }
    c4.value = num - num2;
    let pageX;
    if (tmp3 != null) {
      pageX = tmp3.pageX;
    }
    if (pageX == null) {
      pageX = _undefined7.value;
    }
    let num3;
    const diff = _undefined7.value - pageX;
    if (tmp2 != null) {
      num3 = tmp2.pageX;
    }
    if (num3 == null) {
      num3 = 0;
    }
    c5.value = diff + num3;
  }
  const items13 = [tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67];
  pnpm_ReanimatedSwipeableTsx9.__closure = items13;
  pnpm_ReanimatedSwipeableTsx9.__workletHash = 14256505017394;
  pnpm_ReanimatedSwipeableTsx9.__initData = tmp60;
  const items14 = [animatedRef, animatedRef1, animatedRef2, sharedValue5, sharedValue6, sharedValue4];
  const tmp14Result13 = c5(pnpm_ReanimatedSwipeableTsx9, items14);
  closure_14 = tmp14Result13;
  const items15 = [tmp14Result12, tmp14Result13, sharedValue5, sharedValue6, sharedValue2, sharedValue7, sharedValue3, sharedValue1];
  const tmp69 = c7(() => {
    items = [closure_18, closure_10, _mod1652.runOnUI, closure_17];
    [tmp4, tmp5, tmp6, tmp7] = items;
    const obj = { close: null, openLeft: null, openRight: null, reset: null };
    function close() {
      if (globalThis._WORKLET) {
        _undefined(0);
      } else {
        items = [c2, _undefined];
        [tmp4, tmp5] = items;
        function pnpm_ReanimatedSwipeableTsx10() {
          _undefined(0);
        }
        const items1 = [tmp5];
        pnpm_ReanimatedSwipeableTsx10.__closure = items1;
        pnpm_ReanimatedSwipeableTsx10.__workletHash = 5083608474645;
        pnpm_ReanimatedSwipeableTsx10.__initData = tmp4;
        _undefined2(pnpm_ReanimatedSwipeableTsx10)();
      }
    }
    let items1 = [tmp5, tmp6, tmp7];
    close.__closure = items1;
    close.__workletHash = 17274934676262;
    close.__initData = tmp4;
    obj.close = close;
    const items2 = [closure_20, closure_14, closure_10, c6, _mod1652.runOnUI, closure_19];
    [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
    function openLeft() {
      if (globalThis._WORKLET) {
        _undefined();
        _undefined2(_undefined3.value);
      } else {
        items = [c4, _undefined, _undefined2, _undefined3];
        [tmp6, tmp7, tmp8, tmp9] = items;
        function pnpm_ReanimatedSwipeableTsx12() {
          _undefined();
          _undefined2(value.value);
        }
        const items1 = [tmp7, tmp8, tmp9];
        pnpm_ReanimatedSwipeableTsx12.__closure = items1;
        pnpm_ReanimatedSwipeableTsx12.__workletHash = 16079186854680;
        pnpm_ReanimatedSwipeableTsx12.__initData = tmp6;
        _undefined4(pnpm_ReanimatedSwipeableTsx12)();
      }
    }
    const items3 = [tmp10, tmp11, tmp12, tmp13, tmp14];
    openLeft.__closure = items3;
    openLeft.__workletHash = 17205842916597;
    openLeft.__initData = tmp9;
    obj.openLeft = openLeft;
    const items4 = [closure_22, closure_14, closure_10, c7, _mod1652.runOnUI, closure_21];
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items4;
    function openRight() {
      if (globalThis._WORKLET) {
        _undefined();
        _undefined2(-_undefined3.value);
      } else {
        items = [c4, _undefined, _undefined2, _undefined3];
        [tmp6, tmp7, tmp8, tmp9] = items;
        function pnpm_ReanimatedSwipeableTsx14() {
          _undefined();
          _undefined2(-value.value);
        }
        const items1 = [tmp7, tmp8, tmp9];
        pnpm_ReanimatedSwipeableTsx14.__closure = items1;
        pnpm_ReanimatedSwipeableTsx14.__workletHash = 7359076028115;
        pnpm_ReanimatedSwipeableTsx14.__initData = tmp6;
        _undefined4(pnpm_ReanimatedSwipeableTsx14)();
      }
    }
    const items5 = [tmp16, tmp17, tmp18, tmp19, tmp20];
    openRight.__closure = items5;
    openRight.__workletHash = 11398238637092;
    openRight.__initData = tmp15;
    obj.openRight = openRight;
    const items6 = [closure_23, c3, c8, c4, c2];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp21, tmp22, tmp23, tmp24, tmp25] = items6;
    function reset() {
      c0.value = 0;
      c1.value = 0;
      c2.value = 0;
      c3.value = 0;
    }
    const items7 = [tmp22, tmp23, tmp24, tmp25];
    reset.__closure = items7;
    reset.__workletHash = 7243544495167;
    reset.__initData = tmp21;
    obj.reset = reset;
    return obj;
  }, items15);
  closure_15 = tmp69;
  const items16 = [sharedValue4];
  const tmp3Result10 = require("module_1652");
  const tmp14Result14 = c5((nativeEvent) => {
    c5.value = nativeEvent.nativeEvent.layout.width;
  }, items16);
  const items17 = [closure_24, sharedValue7];
  _require = undefined;
  [tmp71, tmp72] = items17;
  function pnpm_ReanimatedSwipeableTsx17() {
    let pointerEvents = "auto";
    if (0 === _undefined.value) {
      pointerEvents = "none";
    }
    return { pointerEvents };
  }
  const items18 = [tmp72];
  pnpm_ReanimatedSwipeableTsx17.__closure = items18;
  pnpm_ReanimatedSwipeableTsx17.__workletHash = 5194842054553;
  pnpm_ReanimatedSwipeableTsx17.__initData = tmp71;
  animatedStyle = require("module_1652").useAnimatedStyle(pnpm_ReanimatedSwipeableTsx17);
  const items19 = [sharedValue3, animatedStyle, animatedRef, animatedRef1, renderLeftActions, sharedValue7, tmp69];
  const tmp3Result11 = require("module_1652");
  const tmp14Result15 = c5(() => {
    const obj = { ref: animatedRef1, style: null, children: null };
    items = [closure_33.leftActions, animatedStyle];
    obj.style = items;
    let tmp4Result;
    if (c0 != null) {
      tmp4Result = tmp4(c8, c4, closure_15);
    }
    const items1 = [tmp4Result, React7(_modDef1652.View, { ref: animatedRef })];
    obj.children = items1;
    return closure_2_10(_modDef1652.View, obj);
  }, items19);
  const items20 = [closure_25, sharedValue8];
  _require = undefined;
  [tmp75, tmp76] = items20;
  function pnpm_ReanimatedSwipeableTsx18() {
    let pointerEvents = "auto";
    if (0 === _undefined.value) {
      pointerEvents = "none";
    }
    return { pointerEvents };
  }
  const items21 = [tmp76];
  pnpm_ReanimatedSwipeableTsx18.__closure = items21;
  pnpm_ReanimatedSwipeableTsx18.__workletHash = 585347980470;
  pnpm_ReanimatedSwipeableTsx18.__initData = tmp75;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(pnpm_ReanimatedSwipeableTsx18);
  const items22 = [sharedValue3, renderRightActions, animatedStyle1, animatedRef2, sharedValue8, tmp69];
  const items23 = [closure_26, sharedValue2, leftThreshold, sharedValue5, rightThreshold, sharedValue6, 0.05, num4, sharedValue1, tmp14Result12];
  _require = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  _objectWithoutProperties = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88] = items23;
  function pnpm_ReanimatedSwipeableTsx19(arg0) {
    ({ velocityX, translationX: c0.value } = arg0);
    let result = c1;
    if (c1 == null) {
      result = _undefined3.value / 2;
    }
    let result1 = c3;
    if (c3 == null) {
      result1 = _undefined5.value / 2;
    }
    const result2 = (value.value + c5 * velocityX) / c6;
    if (0 === _undefined8.value) {
      if (result2 > result) {
        let num4 = _undefined3.value;
      } else {
        num4 = 0;
        if (result2 < -result1) {
          num4 = -_undefined5.value;
        }
      }
    } else if (1 === iter2.value) {
      num4 = 0;
      if (result2 > -result) {
        num4 = _undefined3.value;
      }
    } else {
      num4 = 0;
      if (result2 < result1) {
        num4 = -_undefined5.value;
      }
    }
    _undefined9(num4, velocityX / c6);
  }
  const items24 = [tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88];
  pnpm_ReanimatedSwipeableTsx19.__closure = items24;
  pnpm_ReanimatedSwipeableTsx19.__workletHash = 4590926143740;
  pnpm_ReanimatedSwipeableTsx19.__initData = tmp79;
  const items25 = [tmp14Result12, num4, leftThreshold, sharedValue5, rightThreshold, sharedValue6, sharedValue1, sharedValue2];
  const tmp3Result12 = require("module_1652");
  const items26 = [closure_27, tmp14Result12];
  _require = undefined;
  [tmp90, tmp91] = items26;
  function pnpm_ReanimatedSwipeableTsx20() {
    _undefined(0);
  }
  const items27 = [tmp91];
  pnpm_ReanimatedSwipeableTsx20.__closure = items27;
  pnpm_ReanimatedSwipeableTsx20.__workletHash = 5179606853494;
  pnpm_ReanimatedSwipeableTsx20.__initData = tmp90;
  const items28 = [tmp14Result12];
  const tmp14Result16 = c5(() => {
    const obj = { style: null, children: null };
    items = [closure_33.rightActions, animatedStyle1];
    obj.style = items;
    let tmp4Result;
    if (c1 != null) {
      tmp4Result = tmp4(c9, c4, closure_15);
    }
    const items1 = [tmp4Result, React7(_modDef1652.View, { ref: animatedRef2 })];
    obj.children = items1;
    return closure_2_10(_modDef1652.View, obj);
  }, items22);
  const tmp14Result17 = c5(pnpm_ReanimatedSwipeableTsx19, items25);
  const tmp14Result18 = c5(pnpm_ReanimatedSwipeableTsx20, items28);
  const sharedValue9 = require("module_1652").useSharedValue(false);
  const tmp3Result13 = require("module_1652");
  const obj10 = { shouldCancelWhenOutside: true, enabled: sharedValue, simultaneousWith, requireToFail, block, onActivate: null };
  const items29 = [closure_28, sharedValue1, tmp14Result18];
  _require = undefined;
  importDefault = undefined;
  [tmp94, tmp95, tmp96] = items29;
  function pnpm_ReanimatedSwipeableTsx21() {
    if (0 !== _undefined.value) {
      _undefined2();
    }
  }
  const items30 = [tmp95, tmp96];
  pnpm_ReanimatedSwipeableTsx21.__closure = items30;
  pnpm_ReanimatedSwipeableTsx21.__workletHash = 10419840903447;
  pnpm_ReanimatedSwipeableTsx21.__initData = tmp94;
  obj10.onActivate = pnpm_ReanimatedSwipeableTsx21;
  const tapGesture = require("transformLongPressProps").useTapGesture(obj10);
  const tmp3Result14 = require("transformLongPressProps");
  if (enabled == null) {
    enabled = true;
  }
  const obj11 = { enabled, enableTrackpadTwoFingerGesture: tmp, activeOffsetX: null, simultaneousWith, requireToFail, block, hitSlop, onActivate: tmp14Result13, onUpdate: null, onDeactivate: null, onFinalize: null };
  const items31 = [num2, num];
  obj11.activeOffsetX = items31;
  const items32 = [closure_29, sharedValue2, sharedValue1, require("module_10233").SwipeDirection, sharedValue9, onSwipeableOpenStartDrag, require("module_1652").runOnJS, onSwipeableCloseStartDrag, tmp14Result];
  dependencyMap = undefined;
  c3 = undefined;
  _objectWithoutProperties = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106] = items32;
  function pnpm_ReanimatedSwipeableTsx22(translationX) {
    c0.value = translationX.translationX;
    if (-1 === _undefined2.value) {
      let LEFT = _undefined3.RIGHT;
    } else if (1 === _undefined2.value) {
      LEFT = _undefined3.LEFT;
    } else if (translationX.translationX > 0) {
      LEFT = _undefined3.RIGHT;
    } else {
      LEFT = _undefined3.LEFT;
    }
    if (!_undefined4.value) {
      tmp5.value = true;
      if (0 === _undefined2.value) {
        if (c4) {
          _undefined6(tmp6)(LEFT);
        }
      }
      if (c6) {
        _undefined6(tmp7)(LEFT);
      }
    }
    _undefined8();
  }
  const items33 = [tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106];
  pnpm_ReanimatedSwipeableTsx22.__closure = items33;
  pnpm_ReanimatedSwipeableTsx22.__workletHash = 12933085716246;
  pnpm_ReanimatedSwipeableTsx22.__initData = tmp98;
  obj11.onUpdate = pnpm_ReanimatedSwipeableTsx22;
  const items34 = [closure_30, tmp14Result17];
  [tmp107, tmp108] = items34;
  function pnpm_ReanimatedSwipeableTsx23(arg0) {
    _undefined(arg0);
  }
  const items35 = [tmp108];
  pnpm_ReanimatedSwipeableTsx23.__closure = items35;
  pnpm_ReanimatedSwipeableTsx23.__workletHash = 9093245775429;
  pnpm_ReanimatedSwipeableTsx23.__initData = tmp107;
  obj11.onDeactivate = pnpm_ReanimatedSwipeableTsx23;
  const items36 = [closure_31, sharedValue9];
  _require = undefined;
  [tmp109, tmp110] = items36;
  function pnpm_ReanimatedSwipeableTsx24() {
    c0.value = false;
  }
  const items37 = [tmp110];
  pnpm_ReanimatedSwipeableTsx24.__closure = items37;
  pnpm_ReanimatedSwipeableTsx24.__workletHash = 14320171497190;
  pnpm_ReanimatedSwipeableTsx24.__initData = tmp109;
  obj11.onFinalize = pnpm_ReanimatedSwipeableTsx24;
  const items38 = [tmp69];
  const panGesture = require("transformLongPressProps").usePanGesture(obj11);
  c6(ref, () => closure_15, items38);
  const tmp3Result15 = require("transformLongPressProps");
  const items39 = [closure_32, sharedValue3, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp113, tmp114, tmp115] = items39;
  function pnpm_ReanimatedSwipeableTsx25() {
    const obj = { transform: null, pointerEvents: null };
    items = [{ translateX: _undefined.value }];
    obj.transform = items;
    let str = "box-only";
    if (0 === _undefined2.value) {
      str = "auto";
    }
    obj.pointerEvents = str;
    return obj;
  }
  const items40 = [tmp114, tmp115];
  pnpm_ReanimatedSwipeableTsx25.__closure = items40;
  pnpm_ReanimatedSwipeableTsx25.__workletHash = 14565448947017;
  pnpm_ReanimatedSwipeableTsx25.__initData = tmp113;
  const items41 = [sharedValue3, sharedValue1];
  const animatedStyle2 = require("module_1652").useAnimatedStyle(pnpm_ReanimatedSwipeableTsx25, items41);
  const obj12 = { gesture: panGesture, touchAction: "pan-y", children: null };
  const obj13 = {};
  let merged = Object.assign(tmp2);
  obj13.onLayout = tmp14Result14;
  const items42 = [container.container, containerStyle];
  obj13.style = items42;
  const items43 = [tmp14Result15(), tmp14Result16(), ];
  const obj14 = { gesture: tapGesture, touchAction: "pan-y", children: null };
  const obj15 = { style: null, children };
  const items44 = [animatedStyle2, childrenContainerStyle];
  obj15.style = items44;
  obj14.children = c9(_modDef1652.View, obj15);
  items43[2] = c9(require("GestureDetectorType").GestureDetector, obj14);
  obj13.children = items43;
  obj12.children = closure_10(_modDef1652.View, obj13);
  const tmp119 = c9(require("GestureDetectorType").GestureDetector, obj12);
  let tmp117Result = tmp119;
  if (testID) {
    const obj16 = { testID, children: tmp119 };
    tmp117Result = c9(c8, obj16);
  }
  return tmp117Result;
}
const container = StyleSheet.create(obj);

export default _default;