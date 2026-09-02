// _runtime/11123_str2.js
import noopDefault from "00019_noop.js";
import closure_4 from "metro/00109__objectWithoutProperties.js";
import noop from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import jsxProd from "react/00021_jsxProd.js";

const require = arg1;
let closure_3 = [
  "ref",
  "leftThreshold",
  "rightThreshold",
  "enabled",
  "containerStyle",
  "childrenContainerStyle",
  "animationOptions",
  "overshootLeft",
  "overshootRight",
  "testID",
  "children",
  "enableTrackpadTwoFingerGesture",
  "dragOffsetFromLeft",
  "dragOffsetFromRight",
  "friction",
  "overshootFriction",
  "onSwipeableOpenStartDrag",
  "onSwipeableCloseStartDrag",
  "onSwipeableWillOpen",
  "onSwipeableWillClose",
  "onSwipeableOpen",
  "onSwipeableClose",
  "renderLeftActions",
  "renderRightActions",
  "simultaneousWith",
  "requireToFail",
  "block",
  "hitSlop",
];
({ useCallback: c5, useEffect, useImperativeHandle: closure_6, useMemo: error } = noop);
noopDefault;
({ I18nManager, StyleSheet, View: closure_8 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = {
  code: "function pnpm_ReanimatedSwipeableTsx4(){const{overshootLeft,leftWidth,overshootRight,rightWidth,rowState,userDrag,friction,appliedTranslation,interpolate,overshootFriction,showLeftProgress,showRightProgress}=this.__closure;var _overshootLeft,_overshootRight;const shouldOvershootLeft=(_overshootLeft=overshootLeft)!==null&&_overshootLeft!==void 0?_overshootLeft:leftWidth.value>0;const shouldOvershootRight=(_overshootRight=overshootRight)!==null&&_overshootRight!==void 0?_overshootRight:rightWidth.value>0;const startOffset=rowState.value===1?leftWidth.value:rowState.value===-1?-rightWidth.value:0;const offsetDrag=userDrag.value/friction+startOffset;appliedTranslation.value=interpolate(offsetDrag,[-rightWidth.value-1,-rightWidth.value,leftWidth.value,leftWidth.value+1],[-rightWidth.value-(shouldOvershootRight?1/overshootFriction:0),-rightWidth.value,leftWidth.value,leftWidth.value+(shouldOvershootLeft?1/overshootFriction:0)]);showLeftProgress.value=leftWidth.value>0?interpolate(appliedTranslation.value,[-1,0,leftWidth.value],[0,0,1]):0;showRightProgress.value=rightWidth.value>0?interpolate(appliedTranslation.value,[-rightWidth.value,0,1],[1,0,0]):0;}",
};
let closure_12 = {
  code: "function pnpm_ReanimatedSwipeableTsx5(fromValue,toValue){const{onSwipeableWillOpen,runOnJS,SwipeDirection,onSwipeableWillClose}=this.__closure;if(onSwipeableWillOpen&&toValue!==0){runOnJS(onSwipeableWillOpen)(toValue>0?SwipeDirection.RIGHT:SwipeDirection.LEFT);}if(onSwipeableWillClose&&toValue===0){runOnJS(onSwipeableWillClose)(fromValue>0?SwipeDirection.LEFT:SwipeDirection.RIGHT);}}",
};
let closure_13 = {
  code: "function pnpm_ReanimatedSwipeableTsx6(fromValue,toValue){const{onSwipeableOpen,runOnJS,SwipeDirection,onSwipeableClose}=this.__closure;if(onSwipeableOpen&&toValue!==0){runOnJS(onSwipeableOpen)(toValue>0?SwipeDirection.RIGHT:SwipeDirection.LEFT);}if(onSwipeableClose&&toValue===0){runOnJS(onSwipeableClose)(fromValue>0?SwipeDirection.LEFT:SwipeDirection.RIGHT);}}",
};
let closure_14 = {
  code: "function pnpm_ReanimatedSwipeableTsx7(toValue,velocityX=0){const{ReduceMotion,animationOptions,rowState,rightWidth,leftWidth,interpolate,appliedTranslation,withSpring,dispatchEndEvents,showLeftProgress,showRightProgress,dispatchImmediateEvents,shouldEnableTap}=this.__closure;const translationSpringConfig={mass:2,damping:1000,stiffness:700,velocity:velocityX,overshootClamping:true,reduceMotion:ReduceMotion.System,...animationOptions};const isClosing=toValue===0;const moveToRight=isClosing?rowState.value<0:toValue>0;const usedWidth=isClosing?moveToRight?rightWidth.value:leftWidth.value:moveToRight?leftWidth.value:rightWidth.value;const progressSpringConfig={...translationSpringConfig,restDisplacementThreshold:0.01,restSpeedThreshold:0.01,velocity:velocityX&&interpolate(velocityX,[-usedWidth,usedWidth],[-1,1])};const frozenRowState=rowState.value;appliedTranslation.value=withSpring(toValue,translationSpringConfig,function(isFinished){if(isFinished){dispatchEndEvents(frozenRowState,toValue);}});const progressTarget=toValue===0?0:1*Math.sign(toValue);showLeftProgress.value=withSpring(Math.max(progressTarget,0),progressSpringConfig);showRightProgress.value=withSpring(Math.max(-progressTarget,0),progressSpringConfig);dispatchImmediateEvents(frozenRowState,toValue);rowState.value=Math.sign(toValue);shouldEnableTap.value=rowState.value!==0;}",
};
let closure_15 = {
  code: "function pnpm_ReanimatedSwipeableTsx8(isFinished){const{dispatchEndEvents,frozenRowState,toValue}=this.__closure;if(isFinished){dispatchEndEvents(frozenRowState,toValue);}}",
};
let closure_16 = {
  code: "function pnpm_ReanimatedSwipeableTsx9(){const{measure,leftLayoutRef,leftWrapperLayoutRef,rightLayoutRef,leftWidth,rightWidth,rowWidth}=this.__closure;var _leftLayout$pageX,_leftWrapperLayout$pa,_rightLayout$pageX,_leftWrapperLayout$pa2;const leftLayout=measure(leftLayoutRef);const leftWrapperLayout=measure(leftWrapperLayoutRef);const rightLayout=measure(rightLayoutRef);leftWidth.value=((_leftLayout$pageX=leftLayout===null||leftLayout===void 0?void 0:leftLayout.pageX)!==null&&_leftLayout$pageX!==void 0?_leftLayout$pageX:0)-((_leftWrapperLayout$pa=leftWrapperLayout===null||leftWrapperLayout===void 0?void 0:leftWrapperLayout.pageX)!==null&&_leftWrapperLayout$pa!==void 0?_leftWrapperLayout$pa:0);rightWidth.value=rowWidth.value-((_rightLayout$pageX=rightLayout===null||rightLayout===void 0?void 0:rightLayout.pageX)!==null&&_rightLayout$pageX!==void 0?_rightLayout$pageX:rowWidth.value)+((_leftWrapperLayout$pa2=leftWrapperLayout===null||leftWrapperLayout===void 0?void 0:leftWrapperLayout.pageX)!==null&&_leftWrapperLayout$pa2!==void 0?_leftWrapperLayout$pa2:0);}",
};
let closure_17 = {
  code: "function close_Pnpm_ReanimatedSwipeableTsx10(){const{animateRow,runOnUI}=this.__closure;if(_WORKLET){animateRow(0);return;}runOnUI(function(){animateRow(0);})();}",
};
let closure_18 = { code: "function pnpm_ReanimatedSwipeableTsx11(){const{animateRow}=this.__closure;animateRow(0);}" };
let closure_19 = {
  code: "function openLeft_Pnpm_ReanimatedSwipeableTsx12(){const{updateElementWidths,animateRow,leftWidth,runOnUI}=this.__closure;if(_WORKLET){updateElementWidths();animateRow(leftWidth.value);return;}runOnUI(function(){updateElementWidths();animateRow(leftWidth.value);})();}",
};
let closure_20 = {
  code: "function pnpm_ReanimatedSwipeableTsx13(){const{updateElementWidths,animateRow,leftWidth}=this.__closure;updateElementWidths();animateRow(leftWidth.value);}",
};
let closure_21 = {
  code: "function openRight_Pnpm_ReanimatedSwipeableTsx14(){const{updateElementWidths,animateRow,rightWidth,runOnUI}=this.__closure;if(_WORKLET){updateElementWidths();animateRow(-rightWidth.value);return;}runOnUI(function(){updateElementWidths();animateRow(-rightWidth.value);})();}",
};
let closure_22 = {
  code: "function pnpm_ReanimatedSwipeableTsx15(){const{updateElementWidths,animateRow,rightWidth}=this.__closure;updateElementWidths();animateRow(-rightWidth.value);}",
};
let closure_23 = {
  code: "function reset_Pnpm_ReanimatedSwipeableTsx16(){const{userDrag,showLeftProgress,appliedTranslation,rowState}=this.__closure;userDrag.value=0;showLeftProgress.value=0;appliedTranslation.value=0;rowState.value=0;}",
};
let closure_24 = {
  code: "function pnpm_ReanimatedSwipeableTsx17(){const{showLeftProgress}=this.__closure;return{pointerEvents:showLeftProgress.value===0?'none':'auto'};}",
};
let closure_25 = {
  code: "function pnpm_ReanimatedSwipeableTsx18(){const{showRightProgress}=this.__closure;return{pointerEvents:showRightProgress.value===0?'none':'auto'};}",
};
let closure_26 = {
  code: "function pnpm_ReanimatedSwipeableTsx19(event){const{userDrag,leftThreshold,leftWidth,rightThreshold,rightWidth,DRAG_TOSS,friction,rowState,animateRow}=this.__closure;var _leftThreshold,_rightThreshold;const{velocityX:velocityX}=event;userDrag.value=event.translationX;const leftThresholdProp=(_leftThreshold=leftThreshold)!==null&&_leftThreshold!==void 0?_leftThreshold:leftWidth.value/2;const rightThresholdProp=(_rightThreshold=rightThreshold)!==null&&_rightThreshold!==void 0?_rightThreshold:rightWidth.value/2;const translationX=(userDrag.value+DRAG_TOSS*velocityX)/friction;let toValue=0;if(rowState.value===0){if(translationX>leftThresholdProp){toValue=leftWidth.value;}else if(translationX<-rightThresholdProp){toValue=-rightWidth.value;}}else if(rowState.value===1){if(translationX>-leftThresholdProp){toValue=leftWidth.value;}}else{if(translationX<rightThresholdProp){toValue=-rightWidth.value;}}animateRow(toValue,velocityX/friction);}",
};
let closure_27 = { code: "function pnpm_ReanimatedSwipeableTsx20(){const{animateRow}=this.__closure;animateRow(0);}" };
let closure_28 = {
  code: "function pnpm_ReanimatedSwipeableTsx21(){const{rowState,close}=this.__closure;if(rowState.value!==0){close();}}",
};
let closure_29 = {
  code: "function pnpm_ReanimatedSwipeableTsx22(event){const{userDrag,rowState,SwipeDirection,dragStarted,onSwipeableOpenStartDrag,runOnJS,onSwipeableCloseStartDrag,updateAnimatedEvent}=this.__closure;userDrag.value=event.translationX;const direction=rowState.value===-1?SwipeDirection.RIGHT:rowState.value===1?SwipeDirection.LEFT:event.translationX>0?SwipeDirection.RIGHT:SwipeDirection.LEFT;if(!dragStarted.value){dragStarted.value=true;if(rowState.value===0&&onSwipeableOpenStartDrag){runOnJS(onSwipeableOpenStartDrag)(direction);}else if(onSwipeableCloseStartDrag){runOnJS(onSwipeableCloseStartDrag)(direction);}}updateAnimatedEvent();}",
};
let closure_30 = {
  code: "function pnpm_ReanimatedSwipeableTsx23(event){const{handleRelease}=this.__closure;handleRelease(event);}",
};
let closure_31 = {
  code: "function pnpm_ReanimatedSwipeableTsx24(){const{dragStarted}=this.__closure;dragStarted.value=false;}",
};
let closure_32 = {
  code: "function pnpm_ReanimatedSwipeableTsx25(){const{appliedTranslation,rowState}=this.__closure;return{transform:[{translateX:appliedTranslation.value}],pointerEvents:rowState.value===0?'auto':'box-only'};}",
};
let obj = { container: { overflow: "hidden" }, leftActions: null, rightActions: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFill);
let str = "row";
if (I18nManager.isRTL) {
  str = "row-reverse";
}
obj.flexDirection = str;
obj.overflow = "hidden";
obj[1] = obj;
obj = {};
let merged1 = Object.assign(StyleSheet.absoluteFill);
let str2 = "row-reverse";
if (I18nManager.isRTL) {
  str2 = "row";
}
obj.flexDirection = str2;
obj.overflow = "hidden";
obj[2] = obj;
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
  obj1 = leftThreshold(animationOptions[4]);
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
    const items1 = [-sharedValue6.value - num5, -sharedValue6.value, sharedValue5.value];
    let num6 = 0;
    if (tmp) {
      num6 = 1 / num3;
    }
    items1[3] = sharedValue5.value + num6;
    sharedValue3.value = leftThreshold(animationOptions[4]).interpolate(sum, items, items1);
    let num7 = 0;
    if (sharedValue5.value > 0) {
      let tmp8Result = tmp8(tmp9[4]);
      const items2 = [-1, 0, iter4.value];
      num7 = tmp8Result.interpolate(iter2.value, items2, [0, 0, 1]);
    }
    sharedValue7.value = num7;
    let num8 = 0;
    if (sharedValue6.value > 0) {
      tmp8Result = tmp8(tmp9[4]);
      const items3 = [-iter3.value, 0, 1];
      num8 = tmp8Result.interpolate(iter2.value, items3, [1, 0, 0]);
    }
    sharedValue8.value = num8;
  };
  obj = {
    overshootLeft,
    leftWidth: sharedValue5,
    overshootRight,
    rightWidth: sharedValue6,
    rowState: sharedValue1,
    userDrag: sharedValue2,
    friction: num4,
    appliedTranslation: sharedValue3,
    interpolate: leftThreshold(animationOptions[4]).interpolate,
    overshootFriction: num3,
    showLeftProgress: sharedValue7,
    showRightProgress: sharedValue8,
  };
  fn.__closure = obj;
  fn.__workletHash = 12719949762843;
  fn.__initData = onSwipeableOpen;
  let items = [
    sharedValue3,
    num4,
    sharedValue5,
    num3,
    sharedValue6,
    sharedValue1,
    sharedValue7,
    sharedValue8,
    sharedValue2,
    overshootLeft,
    overshootRight,
  ];
  const tmp14 = num4(fn, items);
  closure_24 = tmp14;
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
        const obj2 = leftThreshold(animationOptions[4]);
        if (arg0 > 0) {
          let RIGHT = leftThreshold(animationOptions[5]).SwipeDirection.LEFT;
        } else {
          RIGHT = leftThreshold(animationOptions[5]).SwipeDirection.RIGHT;
        }
        leftThreshold(animationOptions[4]).runOnJS(tmp11)(RIGHT);
        const runOnJSResult = leftThreshold(animationOptions[4]).runOnJS(tmp11);
      }
      tmp11 = onSwipeableWillClose;
    } else {
      const obj = leftThreshold(animationOptions[4]);
      if (arg1 > 0) {
        let LEFT = leftThreshold(animationOptions[5]).SwipeDirection.RIGHT;
      } else {
        LEFT = leftThreshold(animationOptions[5]).SwipeDirection.LEFT;
      }
      leftThreshold(animationOptions[4]).runOnJS(onSwipeableWillOpen)(LEFT);
      const runOnJSResult1 = leftThreshold(animationOptions[4]).runOnJS(onSwipeableWillOpen);
    }
  };
  obj = {
    onSwipeableWillOpen,
    runOnJS: leftThreshold(animationOptions[4]).runOnJS,
    SwipeDirection: leftThreshold(animationOptions[5]).SwipeDirection,
    onSwipeableWillClose,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 8272607728800;
  fn2.__initData = onSwipeableClose;
  let items1 = [onSwipeableWillClose, onSwipeableWillOpen];
  const tmp15 = num4(fn2, items1);
  closure_25 = tmp15;
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
        const obj2 = leftThreshold(animationOptions[4]);
        if (arg0 > 0) {
          let RIGHT = leftThreshold(animationOptions[5]).SwipeDirection.LEFT;
        } else {
          RIGHT = leftThreshold(animationOptions[5]).SwipeDirection.RIGHT;
        }
        leftThreshold(animationOptions[4]).runOnJS(tmp11)(RIGHT);
        const runOnJSResult = leftThreshold(animationOptions[4]).runOnJS(tmp11);
      }
      tmp11 = onSwipeableClose;
    } else {
      const obj = leftThreshold(animationOptions[4]);
      if (arg1 > 0) {
        let LEFT = leftThreshold(animationOptions[5]).SwipeDirection.RIGHT;
      } else {
        LEFT = leftThreshold(animationOptions[5]).SwipeDirection.LEFT;
      }
      leftThreshold(animationOptions[4]).runOnJS(onSwipeableOpen)(LEFT);
      const runOnJSResult1 = leftThreshold(animationOptions[4]).runOnJS(onSwipeableOpen);
    }
  };
  obj1 = {
    onSwipeableOpen,
    runOnJS: leftThreshold(animationOptions[4]).runOnJS,
    SwipeDirection: leftThreshold(animationOptions[5]).SwipeDirection,
    onSwipeableClose,
  };
  fn3.__closure = obj1;
  fn3.__workletHash = 13119377905507;
  fn3.__initData = renderLeftActions;
  let items2 = [onSwipeableClose, onSwipeableOpen];
  const tmp16 = num4(fn3, items2);
  closure_26 = tmp16;
  const fn4 = function f(value) {
    closure_0 = value;
    let num = arg1;
    if (arg1 === undefined) {
      num = 0;
    }
    c1 = undefined;
    let obj = {
      mass: 2,
      damping: 1000,
      stiffness: 700,
      velocity: num,
      overshootClamping: true,
      reduceMotion: leftThreshold(animationOptions[4]).ReduceMotion.System,
    };
    const merged = Object.assign(animationOptions);
    if (0 === value) {
      let tmp5 = sharedValue1.value < 0;
    } else {
      tmp5 = value > 0;
    }
    if (0 === value) {
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
        let tmpResult = tmp(tmp2[4]);
        const items = [-value, value];
        interpolateResult = tmpResult.interpolate(num, items, [-1, 1]);
      }
      obj.velocity = interpolateResult;
      value = sharedValue1.value;
      c1 = value;
      tmpResult = tmp(tmp2[4]);
      const fn = function n(arg0) {
        if (arg0) {
          closure_1_26(c1, closure_0);
        }
      };
      obj = { dispatchEndEvents: null, frozenRowState: null, toValue: null };
      obj[0] = closure_26;
      obj[1] = value;
      obj[2] = value;
      fn.__closure = obj;
      fn.__workletHash = 14326616622785;
      fn.__initData = sharedValue;
      sharedValue3.value = tmpResult.withSpring(value, obj, fn);
      num4 = 0;
      if (!tmp4) {
        const _Math = Math;
        num4 = Math.sign(value);
      }
      const _Math2 = Math;
      sharedValue7.value = tmp(tmp2[4]).withSpring(Math.max(num4, 0), obj);
      const tmpResult1 = tmp(tmp2[4]);
      const _Math3 = Math;
      sharedValue8.value = tmp(tmp2[4]).withSpring(Math.max(-num4, 0), obj);
      callback2(value, value);
      const _Math4 = Math;
      sharedValue1.value = Math.sign(value);
      sharedValue.value = 0 !== sharedValue1.value;
    }
  };
  obj2 = {
    ReduceMotion: leftThreshold(animationOptions[4]).ReduceMotion,
    animationOptions,
    rowState: sharedValue1,
    rightWidth: sharedValue6,
    leftWidth: sharedValue5,
    interpolate: leftThreshold(animationOptions[4]).interpolate,
    appliedTranslation: sharedValue3,
    withSpring: leftThreshold(animationOptions[4]).withSpring,
    dispatchEndEvents: tmp16,
    showLeftProgress: sharedValue7,
    showRightProgress: sharedValue8,
    dispatchImmediateEvents: tmp15,
    shouldEnableTap: sharedValue,
  };
  fn4.__closure = obj2;
  fn4.__workletHash = 3585652559154;
  fn4.__initData = renderRightActions;
  let items3 = [
    sharedValue1,
    animationOptions,
    sharedValue3,
    sharedValue7,
    sharedValue5,
    sharedValue8,
    sharedValue6,
    tmp15,
    tmp16,
  ];
  const tmp17 = num4(fn4, items3);
  closure_27 = tmp17;
  let tmp2 = overshootRight(hitSlop, overshootLeft);
  const animatedRef = leftThreshold(animationOptions[4]).useAnimatedRef();
  const obj14 = leftThreshold(animationOptions[4]);
  const animatedRef1 = leftThreshold(animationOptions[4]).useAnimatedRef();
  const obj15 = leftThreshold(animationOptions[4]);
  const animatedRef2 = leftThreshold(animationOptions[4]).useAnimatedRef();
  class U {
    constructor() {
      obj = leftThreshold(animationOptions[4]);
      measureResult = obj.measure(closure_28);
      obj2 = leftThreshold(animationOptions[4]);
      measureResult1 = obj2.measure(closure_29);
      obj3 = leftThreshold(animationOptions[4]);
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
  obj3 = {
    measure: leftThreshold(animationOptions[4]).measure,
    leftLayoutRef: animatedRef,
    leftWrapperLayoutRef: animatedRef1,
    rightLayoutRef: animatedRef2,
    leftWidth: sharedValue5,
    rightWidth: sharedValue6,
    rowWidth: sharedValue4,
  };
  U.__closure = obj3;
  U.__workletHash = 15604496621835;
  U.__initData = sharedValue1;
  const items4 = [animatedRef, animatedRef1, animatedRef2, sharedValue5, sharedValue6, sharedValue4];
  const tmp21 = num4(U, items4);
  closure_31 = tmp21;
  const items5 = [tmp17, tmp21, sharedValue5, sharedValue6, sharedValue2, sharedValue7, sharedValue3, sharedValue1];
  const tmp22 = onSwipeableOpenStartDrag(() => {
    let obj = { close: null, openLeft: null, openRight: null, reset: null };
    function close() {
      if (globalThis._WORKLET) {
        callback(0);
      } else {
        let obj = closure_1_0(closure_1_2[4]);
        const fn = function t() {
          callback(0);
        };
        obj = { animateRow: null };
        obj[0] = callback;
        fn.__closure = obj;
        fn.__workletHash = 7817847521965;
        fn.__initData = closure_1_18;
        obj.runOnUI(fn)();
      }
    }
    obj = { animateRow: closure_27, runOnUI: leftThreshold(animationOptions[4]).runOnUI };
    close.__closure = obj;
    close.__workletHash = 13750166537974;
    close.__initData = sharedValue2;
    obj[0] = close;
    let fn = function n() {
      if (globalThis._WORKLET) {
        callback2();
        callback(value.value);
      } else {
        let obj = closure_1_0(closure_1_2[4]);
        const fn = function t() {
          callback2();
          callback(value.value);
        };
        obj = { updateElementWidths: null, animateRow: null, leftWidth: null };
        obj[0] = callback2;
        obj[1] = callback;
        obj[2] = value;
        fn.__closure = obj;
        fn.__workletHash = 13169175708736;
        fn.__initData = closure_1_20;
        obj.runOnUI(fn)();
      }
    };
    obj = {
      updateElementWidths: closure_31,
      animateRow: closure_27,
      leftWidth: sharedValue5,
      runOnUI: leftThreshold(animationOptions[4]).runOnUI,
    };
    fn.__closure = obj;
    fn.__workletHash = 4475786018826;
    fn.__initData = sharedValue4;
    obj[1] = fn;
    const fn2 = function o() {
      if (globalThis._WORKLET) {
        callback2();
        callback(-value2.value);
      } else {
        let obj = closure_1_0(closure_1_2[4]);
        const fn = function t() {
          callback2();
          callback(-value.value);
        };
        obj = { updateElementWidths: null, animateRow: null, rightWidth: null };
        obj[0] = callback2;
        obj[1] = callback;
        obj[2] = value2;
        fn.__closure = obj;
        fn.__workletHash = 3813246920715;
        fn.__initData = closure_1_22;
        obj.runOnUI(fn)();
      }
    };
    fn2.__closure = {
      updateElementWidths: closure_31,
      animateRow: closure_27,
      rightWidth: sharedValue6,
      runOnUI: leftThreshold(animationOptions[4]).runOnUI,
    };
    fn2.__workletHash = 15952033587532;
    fn2.__initData = sharedValue6;
    obj[2] = fn2;
    const fn3 = function t() {
      closure_17.value = 0;
      closure_22.value = 0;
      closure_18.value = 0;
      closure_16.value = 0;
    };
    fn3.__closure = {
      userDrag: sharedValue2,
      showLeftProgress: sharedValue7,
      appliedTranslation: sharedValue3,
      rowState: sharedValue1,
    };
    fn3.__workletHash = 11850540018310;
    fn3.__initData = sharedValue8;
    obj[3] = fn3;
    return obj;
  }, items5);
  closure_32 = tmp22;
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
  fn5.__initData = closure_24;
  const animatedStyle = leftThreshold(animationOptions[4]).useAnimatedStyle(fn5);
  const items7 = [sharedValue3, animatedStyle, animatedRef, animatedRef1, renderLeftActions, sharedValue7, tmp22];
  const obj18 = leftThreshold(animationOptions[4]);
  const tmp25 = num4(() => {
    let obj = { ref: animatedRef1, style: items, children: null };
    items = [animatedStyle.leftActions, animatedStyle];
    let tmp4Result;
    if (renderLeftActions != null) {
      tmp4Result = tmp4(sharedValue7, sharedValue3, closure_32);
    }
    const items1 = [tmp4Result];
    obj = { ref: animatedRef };
    items1[1] = onSwipeableWillOpen(rightThreshold(animationOptions[4]).View, obj);
    obj[2] = items1;
    return onSwipeableWillClose(rightThreshold(animationOptions[4]).View, obj);
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
  fn6.__initData = closure_25;
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
  K.__closure = {
    userDrag: sharedValue2,
    leftThreshold,
    leftWidth: sharedValue5,
    rightThreshold,
    rightWidth: sharedValue6,
    DRAG_TOSS: 0.05,
    friction: num4,
    rowState: sharedValue1,
    animateRow: tmp17,
  };
  K.__workletHash = 10596743942533;
  K.__initData = closure_26;
  const items9 = [tmp17, num4, leftThreshold, sharedValue5, rightThreshold, sharedValue6, sharedValue1, sharedValue2];
  const obj19 = leftThreshold(animationOptions[4]);
  const tmp28 = num4(K, items9);
  closure_35 = tmp28;
  const fn7 = function q() {
    callback3(0);
  };
  fn7.__closure = { animateRow: tmp17 };
  fn7.__workletHash = 9283018543055;
  fn7.__initData = closure_27;
  const items10 = [tmp17];
  const tmp29 = num4(fn7, items10);
  closure_36 = tmp29;
  const tmp27 = num4(() => {
    let obj = { style: items, children: null };
    items = [animatedStyle.rightActions, animatedStyle1];
    let tmp4Result;
    if (renderRightActions != null) {
      tmp4Result = tmp4(sharedValue8, sharedValue3, closure_32);
    }
    const items1 = [tmp4Result];
    obj = { ref: animatedRef2 };
    items1[1] = onSwipeableWillOpen(rightThreshold(animationOptions[4]).View, obj);
    obj[1] = items1;
    return onSwipeableWillClose(rightThreshold(animationOptions[4]).View, obj);
  }, items8);
  const sharedValue9 = leftThreshold(animationOptions[4]).useSharedValue(false);
  const obj20 = leftThreshold(animationOptions[4]);
  const fn8 = function j() {
    if (0 !== sharedValue1.value) {
      callback5();
    }
  };
  fn8.__closure = { rowState: sharedValue1, close: tmp29 };
  fn8.__workletHash = 16709006208782;
  fn8.__initData = animatedRef;
  const tapGesture = leftThreshold(animationOptions[6]).useTapGesture({
    shouldCancelWhenOutside: true,
    enabled: sharedValue,
    simultaneousWith,
    requireToFail,
    block,
    onActivate: fn8,
  });
  const obj21 = leftThreshold(animationOptions[6]);
  if (enabled == null) {
    enabled = true;
  }
  obj4 = {
    enabled,
    enableTrackpadTwoFingerGesture: tmp,
    activeOffsetX: items11,
    simultaneousWith,
    requireToFail,
    block,
    hitSlop: hitSlop.hitSlop,
    onActivate: tmp21,
    onUpdate: null,
    onDeactivate: null,
    onFinalize: null,
  };
  items11 = [num2, num];
  class Q {
    constructor(arg0) {
      closure_17.value = hitSlop.translationX;
      iter = closure_16;
      if (-1 === closure_16.value) {
        tmp7 = leftThreshold;
        tmp8 = animationOptions;
        LEFT = leftThreshold(animationOptions[5]).SwipeDirection.RIGHT;
      } else {
        num3 = 1;
        if (1 === iter.value) {
          tmp5 = leftThreshold;
          tmp6 = animationOptions;
          LEFT = leftThreshold(animationOptions[5]).SwipeDirection.LEFT;
        } else {
          num = 0;
          if (hitSlop.translationX > 0) {
            tmp3 = leftThreshold;
            tmp4 = animationOptions;
            LEFT = leftThreshold(animationOptions[5]).SwipeDirection.RIGHT;
          } else {
            tmp = leftThreshold;
            tmp2 = animationOptions;
            LEFT = leftThreshold(animationOptions[5]).SwipeDirection.LEFT;
          }
        }
      }
      if (!closure_37.value) {
        flag = true;
        tmp9.value = true;
        num2 = 0;
        if (0 === iter.value) {
          if (onSwipeableOpenStartDrag) {
            tmp15 = leftThreshold;
            tmp16 = animationOptions;
            obj2 = leftThreshold(animationOptions[4]);
            tmp17 = obj2.runOnJS(tmp10)(LEFT);
          }
        }
        if (onSwipeableCloseStartDrag) {
          tmp12 = leftThreshold;
          tmp13 = animationOptions;
          obj = leftThreshold(animationOptions[4]);
          tmp14 = obj.runOnJS(tmp11)(LEFT);
        }
      }
      tmp18 = closure_24();
      return;
    }
  }
  obj5 = {
    userDrag: sharedValue2,
    rowState: sharedValue1,
    SwipeDirection: tmp3(tmp4[5]).SwipeDirection,
    dragStarted: sharedValue9,
    onSwipeableOpenStartDrag,
    runOnJS: tmp3(tmp4[4]).runOnJS,
    onSwipeableCloseStartDrag,
    updateAnimatedEvent: tmp14,
  };
  Q.__closure = obj5;
  Q.__workletHash = 15505996161327;
  Q.__initData = animatedRef1;
  obj4[8] = Q;
  class N {
    constructor(arg0) {
      tmp = closure_35(hitSlop);
      return;
    }
  }
  N.__closure = { handleRelease: tmp28 };
  N.__workletHash = 4289194441916;
  N.__initData = animatedRef2;
  obj4[9] = N;
  class B {
    constructor() {
      closure_37.value = false;
      return;
    }
  }
  B.__closure = { dragStarted: sharedValue9 };
  B.__workletHash = 16139303956991;
  B.__initData = closure_31;
  obj4[10] = B;
  const items12 = [tmp22];
  const panGesture = leftThreshold(animationOptions[6]).usePanGesture(obj4);
  num3(ref, () => closure_32, items12);
  const obj22 = leftThreshold(animationOptions[6]);
  function rt() {
    let obj = { transform: items, pointerEvents: null };
    obj = { translateX: sharedValue3.value };
    items = [obj];
    let str = "box-only";
    if (0 === sharedValue1.value) {
      str = "auto";
    }
    obj[1] = str;
    return obj;
  }
  rt.__closure = { appliedTranslation: sharedValue3, rowState: sharedValue1 };
  rt.__workletHash = 3332495344976;
  rt.__initData = closure_32;
  const items13 = [sharedValue3, sharedValue1];
  const animatedStyle2 = leftThreshold(animationOptions[4]).useAnimatedStyle(rt, items13);
  obj6 = { gesture: panGesture, touchAction: "pan-y", children: null };
  obj7 = {};
  let merged = Object.assign(tmp2);
  obj7.onLayout = tmp23;
  const items14 = [animatedStyle.container, containerStyle];
  obj7.style = items14;
  const items15 = [tmp25(), tmp27()];
  obj8 = {
    gesture: tapGesture,
    touchAction: "pan-y",
    children: onSwipeableWillOpen(rightThreshold(tmp4[4]).View, { style: items16, children }),
  };
  items16 = [animatedStyle2, childrenContainerStyle];
  items15[2] = onSwipeableWillOpen(leftThreshold(animationOptions[7]).GestureDetector, obj8);
  obj7.children = items15;
  obj6[2] = onSwipeableWillClose(rightThreshold(animationOptions[4]).View, obj7);
  const tmp37 = onSwipeableWillOpen(leftThreshold(animationOptions[7]).GestureDetector, obj6);
  let tmp35Result = tmp37;
  if (testID) {
    const obj9 = { testID: null, children: null };
    obj9[0] = testID;
    obj9[1] = tmp37;
    tmp35Result = onSwipeableWillOpen(onSwipeableCloseStartDrag, obj9);
  }
  return tmp35Result;
}
const styles = StyleSheet.create(obj);

export default _default;
