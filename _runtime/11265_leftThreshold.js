// === Module 11265: leftThreshold ===

// Module 11265 (leftThreshold)
import cancelAnimation from "cancelAnimation" /* 1636 */;
import _mod11266 from "module_11266" /* 11266 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const cancelAnimationDefault = cancelAnimation;

require = fn;
let closure_3 = ["ref", "leftThreshold", "rightThreshold", "enabled", "containerStyle", "childrenContainerStyle", "animationOptions", "overshootLeft", "overshootRight", "testID", "children", "enableTrackpadTwoFingerGesture", "dragOffsetFromLeft", "dragOffsetFromRight", "friction", "overshootFriction", "onSwipeableOpenStartDrag", "onSwipeableCloseStartDrag", "onSwipeableWillOpen", "onSwipeableWillClose", "onSwipeableOpen", "onSwipeableClose", "renderLeftActions", "renderRightActions", "simultaneousWith", "requireToFail", "block", "hitSlop"];
let noop = fn(19);
({ useCallback: hasOwnProperty, useEffect, useImperativeHandle: metroRequire, useMemo: closure_7 } = noop);
get_ActivityIndicator = fn(17);
({ I18nManager, StyleSheet, View: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = { code: "function pnpm_ReanimatedSwipeableTsx4(){const{overshootLeft,leftWidth,overshootRight,rightWidth,rowState,userDrag,friction,appliedTranslation,interpolate,overshootFriction,showLeftProgress,showRightProgress}=this.__closure;var _overshootLeft,_overshootRight;const shouldOvershootLeft=(_overshootLeft=overshootLeft)!==null&&_overshootLeft!==void 0?_overshootLeft:leftWidth.value>0;const shouldOvershootRight=(_overshootRight=overshootRight)!==null&&_overshootRight!==void 0?_overshootRight:rightWidth.value>0;const startOffset=rowState.value===1?leftWidth.value:rowState.value===-1?-rightWidth.value:0;const offsetDrag=userDrag.value/friction+startOffset;appliedTranslation.value=interpolate(offsetDrag,[-rightWidth.value-1,-rightWidth.value,leftWidth.value,leftWidth.value+1],[-rightWidth.value-(shouldOvershootRight?1/overshootFriction:0),-rightWidth.value,leftWidth.value,leftWidth.value+(shouldOvershootLeft?1/overshootFriction:0)]);showLeftProgress.value=leftWidth.value>0?interpolate(appliedTranslation.value,[-1,0,leftWidth.value],[0,0,1]):0;showRightProgress.value=rightWidth.value>0?interpolate(appliedTranslation.value,[-rightWidth.value,0,1],[1,0,0]):0;}" };
let closure_12 = { code: "function pnpm_ReanimatedSwipeableTsx5(fromValue,toValue){const{onSwipeableWillOpen,runOnJS,SwipeDirection,onSwipeableWillClose}=this.__closure;if(onSwipeableWillOpen&&toValue!==0){runOnJS(onSwipeableWillOpen)(toValue>0?SwipeDirection.RIGHT:SwipeDirection.LEFT);}if(onSwipeableWillClose&&toValue===0){runOnJS(onSwipeableWillClose)(fromValue>0?SwipeDirection.LEFT:SwipeDirection.RIGHT);}}" };
let closure_13 = { code: "function pnpm_ReanimatedSwipeableTsx6(fromValue,toValue){const{onSwipeableOpen,runOnJS,SwipeDirection,onSwipeableClose}=this.__closure;if(onSwipeableOpen&&toValue!==0){runOnJS(onSwipeableOpen)(toValue>0?SwipeDirection.RIGHT:SwipeDirection.LEFT);}if(onSwipeableClose&&toValue===0){runOnJS(onSwipeableClose)(fromValue>0?SwipeDirection.LEFT:SwipeDirection.RIGHT);}}" };
let closure_14 = { code: "function pnpm_ReanimatedSwipeableTsx7(toValue,velocityX=0){const{ReduceMotion,animationOptions,rowState,rightWidth,leftWidth,interpolate,appliedTranslation,withSpring,dispatchEndEvents,showLeftProgress,showRightProgress,dispatchImmediateEvents,shouldEnableTap}=this.__closure;const translationSpringConfig={mass:2,damping:1000,stiffness:700,velocity:velocityX,overshootClamping:true,reduceMotion:ReduceMotion.System,...animationOptions};const isClosing=toValue===0;const moveToRight=isClosing?rowState.value<0:toValue>0;const usedWidth=isClosing?moveToRight?rightWidth.value:leftWidth.value:moveToRight?leftWidth.value:rightWidth.value;const progressSpringConfig={...translationSpringConfig,restDisplacementThreshold:0.01,restSpeedThreshold:0.01,velocity:velocityX&&interpolate(velocityX,[-usedWidth,usedWidth],[-1,1])};const frozenRowState=rowState.value;appliedTranslation.value=withSpring(toValue,translationSpringConfig,function(isFinished){if(isFinished){dispatchEndEvents(frozenRowState,toValue);}});const progressTarget=toValue===0?0:1*Math.sign(toValue);showLeftProgress.value=withSpring(Math.max(progressTarget,0),progressSpringConfig);showRightProgress.value=withSpring(Math.max(-progressTarget,0),progressSpringConfig);dispatchImmediateEvents(frozenRowState,toValue);rowState.value=Math.sign(toValue);shouldEnableTap.value=rowState.value!==0;}" };
let closure_15 = { code: "function pnpm_ReanimatedSwipeableTsx8(isFinished){const{dispatchEndEvents,frozenRowState,toValue}=this.__closure;if(isFinished){dispatchEndEvents(frozenRowState,toValue);}}" };
let closure_16 = { code: "function pnpm_ReanimatedSwipeableTsx9(){const{measure,leftLayoutRef,leftWrapperLayoutRef,rightLayoutRef,leftWidth,rightWidth,rowWidth}=this.__closure;var _leftLayout$pageX,_leftWrapperLayout$pa,_rightLayout$pageX,_leftWrapperLayout$pa2;const leftLayout=measure(leftLayoutRef);const leftWrapperLayout=measure(leftWrapperLayoutRef);const rightLayout=measure(rightLayoutRef);leftWidth.value=((_leftLayout$pageX=leftLayout===null||leftLayout===void 0?void 0:leftLayout.pageX)!==null&&_leftLayout$pageX!==void 0?_leftLayout$pageX:0)-((_leftWrapperLayout$pa=leftWrapperLayout===null||leftWrapperLayout===void 0?void 0:leftWrapperLayout.pageX)!==null&&_leftWrapperLayout$pa!==void 0?_leftWrapperLayout$pa:0);rightWidth.value=rowWidth.value-((_rightLayout$pageX=rightLayout===null||rightLayout===void 0?void 0:rightLayout.pageX)!==null&&_rightLayout$pageX!==void 0?_rightLayout$pageX:rowWidth.value)+((_leftWrapperLayout$pa2=leftWrapperLayout===null||leftWrapperLayout===void 0?void 0:leftWrapperLayout.pageX)!==null&&_leftWrapperLayout$pa2!==void 0?_leftWrapperLayout$pa2:0);}" };
let closure_17 = { code: "function close_Pnpm_ReanimatedSwipeableTsx10(){const{animateRow,runOnUI}=this.__closure;if(_WORKLET){animateRow(0);return;}runOnUI(function(){animateRow(0);})();}" };
let closure_18 = { code: "function pnpm_ReanimatedSwipeableTsx11(){const{animateRow}=this.__closure;animateRow(0);}" };
let value = { code: "function openLeft_Pnpm_ReanimatedSwipeableTsx12(){const{updateElementWidths,animateRow,leftWidth,runOnUI}=this.__closure;if(_WORKLET){updateElementWidths();animateRow(leftWidth.value);return;}runOnUI(function(){updateElementWidths();animateRow(leftWidth.value);})();}" };
let closure_20 = { code: "function pnpm_ReanimatedSwipeableTsx13(){const{updateElementWidths,animateRow,leftWidth}=this.__closure;updateElementWidths();animateRow(leftWidth.value);}" };
let closure_21 = { code: "function openRight_Pnpm_ReanimatedSwipeableTsx14(){const{updateElementWidths,animateRow,rightWidth,runOnUI}=this.__closure;if(_WORKLET){updateElementWidths();animateRow(-rightWidth.value);return;}runOnUI(function(){updateElementWidths();animateRow(-rightWidth.value);})();}" };
let closure_22 = { code: "function pnpm_ReanimatedSwipeableTsx15(){const{updateElementWidths,animateRow,rightWidth}=this.__closure;updateElementWidths();animateRow(-rightWidth.value);}" };
let closure_23 = { code: "function reset_Pnpm_ReanimatedSwipeableTsx16(){const{userDrag,showLeftProgress,appliedTranslation,rowState}=this.__closure;userDrag.value=0;showLeftProgress.value=0;appliedTranslation.value=0;rowState.value=0;}" };
let __initData = { code: "function pnpm_ReanimatedSwipeableTsx17(){const{showLeftProgress}=this.__closure;return{pointerEvents:showLeftProgress.value===0?'none':'auto'};}" };
let __initData2 = { code: "function pnpm_ReanimatedSwipeableTsx18(){const{showRightProgress}=this.__closure;return{pointerEvents:showRightProgress.value===0?'none':'auto'};}" };
let __initData3 = { code: "function pnpm_ReanimatedSwipeableTsx19(event){const{userDrag,leftThreshold,leftWidth,rightThreshold,rightWidth,DRAG_TOSS,friction,rowState,animateRow}=this.__closure;var _leftThreshold,_rightThreshold;const{velocityX:velocityX}=event;userDrag.value=event.translationX;const leftThresholdProp=(_leftThreshold=leftThreshold)!==null&&_leftThreshold!==void 0?_leftThreshold:leftWidth.value/2;const rightThresholdProp=(_rightThreshold=rightThreshold)!==null&&_rightThreshold!==void 0?_rightThreshold:rightWidth.value/2;const translationX=(userDrag.value+DRAG_TOSS*velocityX)/friction;let toValue=0;if(rowState.value===0){if(translationX>leftThresholdProp){toValue=leftWidth.value;}else if(translationX<-rightThresholdProp){toValue=-rightWidth.value;}}else if(rowState.value===1){if(translationX>-leftThresholdProp){toValue=leftWidth.value;}}else{if(translationX<rightThresholdProp){toValue=-rightWidth.value;}}animateRow(toValue,velocityX/friction);}" };
let __initData4 = { code: "function pnpm_ReanimatedSwipeableTsx20(){const{animateRow}=this.__closure;animateRow(0);}" };
let closure_28 = { code: "function pnpm_ReanimatedSwipeableTsx21(){const{rowState,close}=this.__closure;if(rowState.value!==0){close();}}" };
let closure_29 = { code: "function pnpm_ReanimatedSwipeableTsx22(event){const{userDrag,rowState,SwipeDirection,dragStarted,onSwipeableOpenStartDrag,runOnJS,onSwipeableCloseStartDrag,updateAnimatedEvent}=this.__closure;userDrag.value=event.translationX;const direction=rowState.value===-1?SwipeDirection.RIGHT:rowState.value===1?SwipeDirection.LEFT:event.translationX>0?SwipeDirection.RIGHT:SwipeDirection.LEFT;if(!dragStarted.value){dragStarted.value=true;if(rowState.value===0&&onSwipeableOpenStartDrag){runOnJS(onSwipeableOpenStartDrag)(direction);}else if(onSwipeableCloseStartDrag){runOnJS(onSwipeableCloseStartDrag)(direction);}}updateAnimatedEvent();}" };
let closure_30 = { code: "function pnpm_ReanimatedSwipeableTsx23(event){const{handleRelease}=this.__closure;handleRelease(event);}" };
let __initData5 = { code: "function pnpm_ReanimatedSwipeableTsx24(){const{dragStarted}=this.__closure;dragStarted.value=false;}" };
let __initData6 = { code: "function pnpm_ReanimatedSwipeableTsx25(){const{appliedTranslation,rowState}=this.__closure;return{transform:[{translateX:appliedTranslation.value}],pointerEvents:rowState.value===0?'auto':'box-only'};}" };
let obj = { container: { overflow: "hidden" }, leftActions: null, rightActions: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFill);
let str = "row";
if (I18nManager.isRTL) {
  str = "row-reverse";
}
obj.flexDirection = str;
obj.overflow = "hidden";
obj.leftActions = obj;
obj = {};
let merged1 = Object.assign(StyleSheet.absoluteFill);
let str2 = "row-reverse";
if (I18nManager.isRTL) {
  str2 = "row";
}
obj.flexDirection = str2;
obj.overflow = "hidden";
obj.rightActions = obj;
function _default(hitSlop) {
  const leftThreshold = hitSlop.leftThreshold;
  const rightThreshold = hitSlop.rightThreshold;
  ({ enabled, animationOptions } = hitSlop);
  const overshootLeft = hitSlop.overshootLeft;
  const overshootRight = hitSlop.overshootRight;
  ({ testID, enableTrackpadTwoFingerGesture } = hitSlop);
  let tmp = undefined !== enableTrackpadTwoFingerGesture;
  ({ ref, containerStyle, childrenContainerStyle, children } = hitSlop);
  if (tmp) {
    tmp = enableTrackpadTwoFingerGesture;
  }
  const dragOffsetFromLeft = hitSlop.dragOffsetFromLeft;
  let num = 10;
  if (undefined !== dragOffsetFromLeft) {
    num = dragOffsetFromLeft;
  }
  const dragOffsetFromRight = hitSlop.dragOffsetFromRight;
  let num2 = -10;
  if (undefined !== dragOffsetFromRight) {
    num2 = dragOffsetFromRight;
  }
  const friction = hitSlop.friction;
  let num3 = 1;
  let num4 = 1;
  if (undefined !== friction) {
    num4 = friction;
  }
  const overshootFriction = hitSlop.overshootFriction;
  if (undefined !== overshootFriction) {
    num3 = overshootFriction;
  }
  const onSwipeableOpenStartDrag = hitSlop.onSwipeableOpenStartDrag;
  const onSwipeableCloseStartDrag = hitSlop.onSwipeableCloseStartDrag;
  const onSwipeableWillOpen = hitSlop.onSwipeableWillOpen;
  const onSwipeableWillClose = hitSlop.onSwipeableWillClose;
  const onSwipeableOpen = hitSlop.onSwipeableOpen;
  const onSwipeableClose = hitSlop.onSwipeableClose;
  const renderLeftActions = hitSlop.renderLeftActions;
  const renderRightActions = hitSlop.renderRightActions;
  ({ simultaneousWith, requireToFail, block } = hitSlop);
  let obj = leftThreshold(animationOptions[4]);
  const sharedValue = obj.useSharedValue(false);
  let obj1 = leftThreshold(animationOptions[4]);
  const sharedValue1 = obj1.useSharedValue(0);
  let obj2 = leftThreshold(animationOptions[4]);
  const sharedValue2 = obj2.useSharedValue(0);
  let obj3 = leftThreshold(animationOptions[4]);
  const sharedValue3 = obj3.useSharedValue(0);
  let obj4 = leftThreshold(animationOptions[4]);
  const sharedValue4 = obj4.useSharedValue(0);
  let obj5 = leftThreshold(animationOptions[4]);
  const sharedValue5 = obj5.useSharedValue(0);
  let obj6 = leftThreshold(animationOptions[4]);
  const sharedValue6 = obj6.useSharedValue(0);
  let obj7 = leftThreshold(animationOptions[4]);
  const sharedValue7 = obj7.useSharedValue(0);
  let obj8 = leftThreshold(animationOptions[4]);
  const sharedValue8 = obj8.useSharedValue(0);
  let fn = function h() {
    let tmp = overshootLeft;
    if (overshootLeft == null) {
      tmp = sharedValue5.value > 0;
    }
    let tmp3 = overshootRight;
    if (overshootRight == null) {
      tmp3 = sharedValue6.value > 0;
    }
    if (1 === sharedValue1.value) {
      num4 = sharedValue5.value;
    } else {
      num4 = 0;
      if (-1 === iter.value) {
        num4 = -sharedValue6.value;
      }
    }
    const sum = sharedValue2.value / num4 + num4;
    const items = [-sharedValue6.value - 1, -sharedValue6.value, sharedValue5.value, sharedValue5.value + 1];
    let num5 = 0;
    if (tmp3) {
      num5 = 1 / num3;
    }
    const items1 = [-sharedValue6.value - num5, -sharedValue6.value, sharedValue5.value, ];
    let num6 = 0;
    if (tmp) {
      num6 = 1 / num3;
    }
    items1[3] = sharedValue5.value + num6;
    sharedValue3.value = cancelAnimation.interpolate(sum, items, items1);
    let num7 = 0;
    if (sharedValue5.value > 0) {
      let tmp8Result = cancelAnimation;
      const items2 = [-1, 0, sharedValue5.value];
      num7 = tmp8Result.interpolate(sharedValue3.value, items2, [0, 0, 1]);
    }
    sharedValue7.value = num7;
    let num8 = 0;
    if (sharedValue6.value > 0) {
      tmp8Result = cancelAnimation;
      const items3 = [-sharedValue6.value, 0, 1];
      num8 = tmp8Result.interpolate(sharedValue3.value, items3, [1, 0, 0]);
    }
    sharedValue8.value = num8;
    const tmp10 = -sharedValue6.value;
  };
  obj = { overshootLeft, leftWidth: sharedValue5, overshootRight, rightWidth: sharedValue6, rowState: sharedValue1, userDrag: sharedValue2, friction: num4, appliedTranslation: sharedValue3, interpolate: leftThreshold(animationOptions[4]).interpolate, overshootFriction: num3, showLeftProgress: sharedValue7, showRightProgress: sharedValue8 };
  fn.__closure = obj;
  fn.__workletHash = 12719949762843;
  fn.__initData = onSwipeableOpen;
  let items = [sharedValue3, num4, sharedValue5, num3, sharedValue6, sharedValue1, sharedValue7, sharedValue8, sharedValue2, overshootLeft, overshootRight];
  const tmp14 = num4(fn, items);
  __initData = tmp14;
  let fn2 = function p(arg0, arg1) {
    let tmp2 = onSwipeableWillOpen;
    if (onSwipeableWillOpen) {
      tmp2 = 0 !== arg1;
    }
    if (!tmp2) {
      let tmp12 = onSwipeableWillClose;
      if (onSwipeableWillClose) {
        tmp12 = 0 === arg1;
      }
      if (tmp12) {
        if (arg0 > 0) {
          let RIGHT = _mod11266.SwipeDirection.LEFT;
        } else {
          RIGHT = _mod11266.SwipeDirection.RIGHT;
        }
        cancelAnimation.runOnJS(onSwipeableWillClose)(RIGHT);
        const runOnJSResult = cancelAnimation.runOnJS(onSwipeableWillClose);
      }
    } else {
      if (arg1 > 0) {
        let LEFT = _mod11266.SwipeDirection.RIGHT;
      } else {
        LEFT = _mod11266.SwipeDirection.LEFT;
      }
      cancelAnimation.runOnJS(onSwipeableWillOpen)(LEFT);
      const runOnJSResult1 = cancelAnimation.runOnJS(onSwipeableWillOpen);
    }
  };
  obj = { onSwipeableWillOpen, runOnJS: leftThreshold(animationOptions[4]).runOnJS, SwipeDirection: leftThreshold(animationOptions[5]).SwipeDirection, onSwipeableWillClose };
  fn2.__closure = obj;
  fn2.__workletHash = 8272607728800;
  fn2.__initData = onSwipeableClose;
  let items1 = [onSwipeableWillClose, onSwipeableWillOpen];
  const tmp15 = num4(fn2, items1);
  __initData2 = tmp15;
  let fn3 = function c(arg0, arg1) {
    let tmp2 = onSwipeableOpen;
    if (onSwipeableOpen) {
      tmp2 = 0 !== arg1;
    }
    if (!tmp2) {
      let tmp12 = onSwipeableClose;
      if (onSwipeableClose) {
        tmp12 = 0 === arg1;
      }
      if (tmp12) {
        if (arg0 > 0) {
          let RIGHT = _mod11266.SwipeDirection.LEFT;
        } else {
          RIGHT = _mod11266.SwipeDirection.RIGHT;
        }
        cancelAnimation.runOnJS(onSwipeableClose)(RIGHT);
        const runOnJSResult = cancelAnimation.runOnJS(onSwipeableClose);
      }
    } else {
      if (arg1 > 0) {
        let LEFT = _mod11266.SwipeDirection.RIGHT;
      } else {
        LEFT = _mod11266.SwipeDirection.LEFT;
      }
      cancelAnimation.runOnJS(onSwipeableOpen)(LEFT);
      const runOnJSResult1 = cancelAnimation.runOnJS(onSwipeableOpen);
    }
  };
  obj1 = { onSwipeableOpen, runOnJS: leftThreshold(animationOptions[4]).runOnJS, SwipeDirection: leftThreshold(animationOptions[5]).SwipeDirection, onSwipeableClose };
  fn3.__closure = obj1;
  fn3.__workletHash = 13119377905507;
  fn3.__initData = renderLeftActions;
  let items2 = [onSwipeableClose, onSwipeableOpen];
  const tmp16 = num4(fn3, items2);
  __initData3 = tmp16;
  const fn4 = function f(toValue) {
    closure_0 = toValue;
    let num = arg1;
    if (arg1 === undefined) {
      num = 0;
    }
    c1 = undefined;
    let obj = { mass: 2, damping: 1000, stiffness: 700, velocity: num, overshootClamping: true, reduceMotion: leftThreshold(animationOptions[4]).ReduceMotion.System };
    const merged = Object.assign(animationOptions);
    if (0 === toValue) {
      let tmp5 = sharedValue1.value < 0;
    } else {
      tmp5 = toValue > 0;
    }
    if (0 === toValue) {
      if (tmp5) {
        value = sharedValue6.value;
      } else {
        value = sharedValue5.value;
      }
    } else {
      if (tmp5) {
        value = sharedValue5.value;
      } else {
        value = sharedValue6.value;
      }
      obj = {};
      const merged1 = Object.assign(obj);
      obj.restDisplacementThreshold = 0.01;
      obj.restSpeedThreshold = 0.01;
      let interpolateResult = num;
      if (num) {
        let tmpResult = leftThreshold(animationOptions[4]);
        const items = [-value, value];
        interpolateResult = tmpResult.interpolate(num, items, [-1, 1]);
      }
      obj.velocity = interpolateResult;
      value = sharedValue1.value;
      c1 = value;
      tmpResult = leftThreshold(animationOptions[4]);
      const fn = function n(arg0) {
        if (arg0) {
          closure_26(c1, closure_0);
        }
      };
      obj = { dispatchEndEvents, frozenRowState: value, toValue };
      fn.__closure = obj;
      fn.__workletHash = 14326616622785;
      fn.__initData = sharedValue;
      sharedValue3.value = tmpResult.withSpring(toValue, obj, fn);
      num4 = 0;
      if (!tmp4) {
        const _Math = Math;
        num4 = Math.sign(toValue);
      }
      const _Math2 = Math;
      sharedValue7.value = leftThreshold(animationOptions[4]).withSpring(Math.max(num4, 0), obj);
      const tmpResult1 = leftThreshold(animationOptions[4]);
      const _Math3 = Math;
      sharedValue8.value = leftThreshold(animationOptions[4]).withSpring(Math.max(-num4, 0), obj);
      closure_25(value, toValue);
      const _Math4 = Math;
      sharedValue1.value = Math.sign(toValue);
      sharedValue.value = 0 !== sharedValue1.value;
      const tmpResult2 = leftThreshold(animationOptions[4]);
    }
  };
  obj2 = { ReduceMotion: leftThreshold(animationOptions[4]).ReduceMotion, animationOptions, rowState: sharedValue1, rightWidth: sharedValue6, leftWidth: sharedValue5, interpolate: leftThreshold(animationOptions[4]).interpolate, appliedTranslation: sharedValue3, withSpring: leftThreshold(animationOptions[4]).withSpring, dispatchEndEvents: tmp16, showLeftProgress: sharedValue7, showRightProgress: sharedValue8, dispatchImmediateEvents: tmp15, shouldEnableTap: sharedValue };
  fn4.__closure = obj2;
  fn4.__workletHash = 3585652559154;
  fn4.__initData = renderRightActions;
  let items3 = [sharedValue1, animationOptions, sharedValue3, sharedValue7, sharedValue5, sharedValue8, sharedValue6, tmp15, tmp16];
  const tmp17 = num4(fn4, items3);
  __initData4 = tmp17;
  let tmp2 = overshootRight(hitSlop, overshootLeft);
  const animatedRef = leftThreshold(animationOptions[4]).useAnimatedRef();
  const obj14 = leftThreshold(animationOptions[4]);
  const animatedRef1 = leftThreshold(animationOptions[4]).useAnimatedRef();
  const obj15 = leftThreshold(animationOptions[4]);
  const animatedRef2 = leftThreshold(animationOptions[4]).useAnimatedRef();
  class U {
    constructor() {
      obj = closure_0(closure_2[4]);
      measureResult = obj.measure(closure_28);
      obj2 = closure_0(closure_2[4]);
      measureResult1 = obj2.measure(closure_29);
      obj3 = closure_0(closure_2[4]);
      measureResult2 = obj3.measure(closure_30);
      num = undefined;
      tmp4 = closure_20;
      if (measureResult != null) {
        num = measureResult.pageX;
      }
      if (num == null) {
        num = 0;
      }
      num2 = undefined;
      if (measureResult1 != null) {
        num2 = measureResult1.pageX;
      }
      if (num2 == null) {
        num2 = 0;
      }
      tmp4.value = num - num2;
      pageX = undefined;
      tmp5 = closure_21;
      iter = closure_19;
      if (measureResult2 != null) {
        pageX = measureResult2.pageX;
      }
      if (pageX == null) {
        pageX = iter.value;
      }
      num3 = undefined;
      diff = closure_19.value - pageX;
      if (measureResult1 != null) {
        num3 = measureResult1.pageX;
      }
      if (num3 == null) {
        num3 = 0;
      }
      tmp5.value = diff + num3;
      return;
    }
  }
  obj3 = { measure: leftThreshold(animationOptions[4]).measure, leftLayoutRef: animatedRef, leftWrapperLayoutRef: animatedRef1, rightLayoutRef: animatedRef2, leftWidth: sharedValue5, rightWidth: sharedValue6, rowWidth: sharedValue4 };
  U.__closure = obj3;
  U.__workletHash = 15604496621835;
  U.__initData = sharedValue1;
  const items4 = [animatedRef, animatedRef1, animatedRef2, sharedValue5, sharedValue6, sharedValue4];
  const tmp21 = num4(U, items4);
  __initData5 = tmp21;
  const items5 = [tmp17, tmp21, sharedValue5, sharedValue6, sharedValue2, sharedValue7, sharedValue3, sharedValue1];
  const tmp22 = onSwipeableOpenStartDrag(() => {
    let obj = { close: null, openLeft: null, openRight: null, reset: null };
    function close() {
      if (globalThis._WORKLET) {
        animateRow(0);
      } else {
        leftThreshold(animationOptions[4]);
        const fn = function t() {
          animateRow(0);
        };
        const obj = { animateRow };
        fn.__closure = obj;
        fn.__workletHash = 7817847521965;
        fn.__initData = sharedValue3;
        obj.runOnUI(fn)();
      }
    }
    obj = { animateRow, runOnUI: cancelAnimation.runOnUI };
    close.__closure = obj;
    close.__workletHash = 13750166537974;
    close.__initData = __initData;
    obj.close = close;
    let fn = function n() {
      if (globalThis._WORKLET) {
        updateElementWidths();
        animateRow(leftWidth.value);
      } else {
        leftThreshold(animationOptions[4]);
        const fn = function t() {
          updateElementWidths();
          animateRow(value.value);
        };
        const obj = { updateElementWidths, animateRow, leftWidth };
        fn.__closure = obj;
        fn.__workletHash = 13169175708736;
        fn.__initData = sharedValue5;
        obj.runOnUI(fn)();
      }
    };
    obj = { updateElementWidths, animateRow, leftWidth: sharedValue5, runOnUI: cancelAnimation.runOnUI };
    fn.__closure = obj;
    fn.__workletHash = 4475786018826;
    fn.__initData = __initData2;
    obj.openLeft = fn;
    const fn2 = function o() {
      if (globalThis._WORKLET) {
        updateElementWidths();
        animateRow(-rightWidth.value);
      } else {
        leftThreshold(animationOptions[4]);
        const fn = function t() {
          updateElementWidths();
          animateRow(-value.value);
        };
        const obj = { updateElementWidths, animateRow, rightWidth };
        fn.__closure = obj;
        fn.__workletHash = 3813246920715;
        fn.__initData = sharedValue7;
        obj.runOnUI(fn)();
      }
    };
    fn2.__closure = { updateElementWidths, animateRow, rightWidth: sharedValue6, runOnUI: cancelAnimation.runOnUI };
    fn2.__workletHash = 15952033587532;
    fn2.__initData = __initData3;
    obj.openRight = fn2;
    const fn3 = function t() {
      __initData.value = 0;
      sharedValue7.value = 0;
      sharedValue3.value = 0;
      sharedValue1.value = 0;
    };
    fn3.__closure = { userDrag: sharedValue2, showLeftProgress: sharedValue7, appliedTranslation: sharedValue3, rowState: sharedValue1 };
    fn3.__workletHash = 11850540018310;
    fn3.__initData = __initData4;
    obj.reset = fn3;
    return obj;
  }, items5);
  __initData6 = tmp22;
  const items6 = [sharedValue4];
  const obj16 = leftThreshold(animationOptions[4]);
  const tmp23 = num4((nativeEvent) => {
    sharedValue4.value = nativeEvent.nativeEvent.layout.width;
  }, items6);
  const fn5 = function $() {
    let pointerEvents = "auto";
    if (0 === sharedValue7.value) {
      pointerEvents = "none";
    }
    return { pointerEvents };
  };
  fn5.__closure = { showLeftProgress: sharedValue7 };
  fn5.__workletHash = 16526128829536;
  fn5.__initData = __initData;
  const animatedStyle = leftThreshold(animationOptions[4]).useAnimatedStyle(fn5);
  const items7 = [sharedValue3, animatedStyle, animatedRef, animatedRef1, renderLeftActions, sharedValue7, tmp22];
  const obj18 = leftThreshold(animationOptions[4]);
  const tmp25 = num4(() => {
    let obj = { ref: animatedRef1, style: null, children: null };
    const items = [animatedStyle.leftActions, animatedStyle];
    obj.style = items;
    let tmp4Result;
    if (renderLeftActions != null) {
      tmp4Result = tmp4(sharedValue7, sharedValue3, closure_32);
    }
    const items1 = [tmp4Result, ];
    obj = { ref: animatedRef };
    items1[1] = React7(cancelAnimationDefault.View, obj);
    obj.children = items1;
    return closure_2_10(cancelAnimationDefault.View, obj);
  }, items7);
  const fn6 = function z() {
    let pointerEvents = "auto";
    if (0 === sharedValue8.value) {
      pointerEvents = "none";
    }
    return { pointerEvents };
  };
  fn6.__closure = { showRightProgress: sharedValue8 };
  fn6.__workletHash = 10943974023855;
  fn6.__initData = __initData2;
  const animatedStyle1 = leftThreshold(animationOptions[4]).useAnimatedStyle(fn6);
  const items8 = [sharedValue3, renderRightActions, animatedStyle1, animatedRef2, sharedValue8, tmp22];
  class K {
    constructor(arg0) {
      ({ velocityX, translationX: closure_17.value } = hitSlop);
      result = leftThreshold;
      iter = closure_17;
      if (leftThreshold == null) {
        tmp2 = closure_20;
        num = 2;
        result = closure_20.value / 2;
      }
      result1 = rightThreshold;
      if (rightThreshold == null) {
        tmp4 = closure_21;
        num2 = 2;
        result1 = closure_21.value / 2;
      }
      result2 = (iter.value + 0.05 * velocityX) / friction;
      tmp5 = friction;
      if (0 === closure_16.value) {
        if (result2 > result) {
          tmp10 = closure_20;
          num4 = closure_20.value;
        } else {
          num4 = 0;
          if (result2 < -result1) {
            tmp9 = closure_21;
            num4 = -closure_21.value;
          }
        }
      } else {
        num3 = 1;
        if (1 === iter2.value) {
          num4 = 0;
          if (result2 > -result) {
            tmp8 = closure_20;
            num4 = closure_20.value;
          }
        } else {
          num4 = 0;
          if (result2 < result1) {
            tmp7 = closure_21;
            num4 = -closure_21.value;
          }
        }
      }
      tmp11 = closure_27(num4, velocityX / tmp5);
      return;
    }
  }
  K.__closure = { userDrag: sharedValue2, leftThreshold, leftWidth: sharedValue5, rightThreshold, rightWidth: sharedValue6, DRAG_TOSS: 0.05, friction: num4, rowState: sharedValue1, animateRow: tmp17 };
  K.__workletHash = 10596743942533;
  K.__initData = __initData3;
  const items9 = [tmp17, num4, leftThreshold, sharedValue5, rightThreshold, sharedValue6, sharedValue1, sharedValue2];
  const obj19 = leftThreshold(animationOptions[4]);
  const tmp28 = num4(K, items9);
  closure_35 = tmp28;
  const fn7 = function q() {
    animateRow(0);
  };
  fn7.__closure = { animateRow: tmp17 };
  fn7.__workletHash = 9283018543055;
  fn7.__initData = __initData4;
  const items10 = [tmp17];
  const tmp29 = num4(fn7, items10);
  closure_36 = tmp29;
  const tmp27 = num4(() => {
    let obj = { style: null, children: null };
    const items = [animatedStyle.rightActions, animatedStyle1];
    obj.style = items;
    let tmp4Result;
    if (renderRightActions != null) {
      tmp4Result = tmp4(sharedValue8, sharedValue3, closure_32);
    }
    const items1 = [tmp4Result, ];
    obj = { ref: animatedRef2 };
    items1[1] = React7(cancelAnimationDefault.View, obj);
    obj.children = items1;
    return closure_2_10(cancelAnimationDefault.View, obj);
  }, items8);
  const sharedValue9 = leftThreshold(animationOptions[4]).useSharedValue(false);
  const obj20 = leftThreshold(animationOptions[4]);
  obj4 = { shouldCancelWhenOutside: true, enabled: sharedValue, simultaneousWith, requireToFail, block, onActivate: null };
  const fn8 = function j() {
    if (0 !== sharedValue1.value) {
      closure_36();
    }
  };
  fn8.__closure = { rowState: sharedValue1, close: tmp29 };
  fn8.__workletHash = 16709006208782;
  fn8.__initData = animatedRef;
  obj4.onActivate = fn8;
  const tapGesture = leftThreshold(animationOptions[6]).useTapGesture(obj4);
  const obj21 = leftThreshold(animationOptions[6]);
  if (enabled == null) {
    enabled = true;
  }
  obj5 = { enabled, enableTrackpadTwoFingerGesture: tmp, activeOffsetX: null, simultaneousWith, requireToFail, block, hitSlop: hitSlop.hitSlop, onActivate: tmp21, onUpdate: null, onDeactivate: null, onFinalize: null };
  const items11 = [num2, num];
  obj5.activeOffsetX = items11;
  class Q {
    constructor(arg0) {
      closure_17.value = hitSlop.translationX;
      iter = closure_16;
      if (-1 === closure_16.value) {
        tmp7 = closure_0;
        tmp8 = closure_2;
        LEFT = closure_0(closure_2[5]).SwipeDirection.RIGHT;
      } else {
        num3 = 1;
        if (1 === iter.value) {
          tmp5 = closure_0;
          tmp6 = closure_2;
          LEFT = closure_0(closure_2[5]).SwipeDirection.LEFT;
        } else {
          num = 0;
          if (hitSlop.translationX > 0) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            LEFT = closure_0(closure_2[5]).SwipeDirection.RIGHT;
          } else {
            tmp = closure_0;
            tmp2 = closure_2;
            LEFT = closure_0(closure_2[5]).SwipeDirection.LEFT;
          }
        }
      }
      if (!closure_37.value) {
        flag = true;
        tmp9.value = true;
        num2 = 0;
        if (0 === iter.value) {
          if (onSwipeableOpenStartDrag) {
            tmp15 = closure_0;
            tmp16 = closure_2;
            obj2 = closure_0(closure_2[4]);
            tmp17 = obj2.runOnJS(tmp10)(LEFT);
          }
        }
        if (onSwipeableCloseStartDrag) {
          tmp12 = closure_0;
          tmp13 = closure_2;
          obj = closure_0(closure_2[4]);
          tmp14 = obj.runOnJS(tmp11)(LEFT);
        }
      }
      tmp18 = closure_24();
      return;
    }
  }
  obj6 = { userDrag: sharedValue2, rowState: sharedValue1, SwipeDirection: tmp3(tmp4[5]).SwipeDirection, dragStarted: sharedValue9, onSwipeableOpenStartDrag, runOnJS: tmp3(tmp4[4]).runOnJS, onSwipeableCloseStartDrag, updateAnimatedEvent: tmp14 };
  Q.__closure = obj6;
  Q.__workletHash = 15505996161327;
  Q.__initData = animatedRef1;
  obj5.onUpdate = Q;
  class N {
    constructor(arg0) {
      tmp = closure_35(hitSlop);
      return;
    }
  }
  N.__closure = { handleRelease: tmp28 };
  N.__workletHash = 4289194441916;
  N.__initData = animatedRef2;
  obj5.onDeactivate = N;
  class B {
    constructor() {
      closure_37.value = false;
      return;
    }
  }
  B.__closure = { dragStarted: sharedValue9 };
  B.__workletHash = 16139303956991;
  B.__initData = __initData5;
  obj5.onFinalize = B;
  const items12 = [tmp22];
  const panGesture = leftThreshold(animationOptions[6]).usePanGesture(obj5);
  num3(ref, () => closure_32, items12);
  const obj23 = leftThreshold(animationOptions[6]);
  function rt() {
    let obj = { transform: null, pointerEvents: null };
    obj = { translateX: sharedValue3.value };
    const items = [obj];
    obj.transform = items;
    let str = "box-only";
    if (0 === sharedValue1.value) {
      str = "auto";
    }
    obj.pointerEvents = str;
    return obj;
  }
  rt.__closure = { appliedTranslation: sharedValue3, rowState: sharedValue1 };
  rt.__workletHash = 3332495344976;
  rt.__initData = __initData6;
  const items13 = [sharedValue3, sharedValue1];
  const animatedStyle2 = leftThreshold(animationOptions[4]).useAnimatedStyle(rt, items13);
  obj7 = { gesture: panGesture, touchAction: "pan-y", children: null };
  obj8 = {};
  let merged = Object.assign(tmp2);
  obj8.onLayout = tmp23;
  const items14 = [animatedStyle.container, containerStyle];
  obj8.style = items14;
  const items15 = [tmp25(), tmp27(), ];
  const obj9 = { gesture: tapGesture, touchAction: "pan-y", children: null };
  const obj10 = { style: null, children };
  const items16 = [animatedStyle2, childrenContainerStyle];
  obj10.style = items16;
  obj9.children = onSwipeableWillOpen(rightThreshold(animationOptions[4]).View, obj10);
  items15[2] = onSwipeableWillOpen(leftThreshold(animationOptions[7]).GestureDetector, obj9);
  obj8.children = items15;
  obj7.children = onSwipeableWillClose(rightThreshold(animationOptions[4]).View, obj8);
  const tmp37 = onSwipeableWillOpen(leftThreshold(animationOptions[7]).GestureDetector, obj7);
  let tmp35Result = tmp37;
  if (testID) {
    const obj11 = { testID, children: tmp37 };
    tmp35Result = onSwipeableWillOpen(onSwipeableCloseStartDrag, obj11);
  }
  return tmp35Result;
}
const styles = StyleSheet.create(obj);

export default _default;