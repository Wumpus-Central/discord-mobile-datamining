// _runtime/metro/09983__.js
import _mod1643 from "01643__.js";
import _mod9984 from "09984__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import react_mod from "../00019_react.js";
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";

const _modDef1643 = _mod1643;
let value2;

let I18nManager;
let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let str;
let str2;
let useEffect;
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
let react = react_mod;
({ useCallback: hasOwnProperty, useEffect, useImperativeHandle: metroRequire, useMemo: metroImportDefault } = react);
react = react_mod;
({ I18nManager, StyleSheet, View: metroImportAll } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
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
let value = {
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
let __initData = {
  code: "function pnpm_ReanimatedSwipeableTsx17(){const{showLeftProgress}=this.__closure;return{pointerEvents:showLeftProgress.value===0?'none':'auto'};}",
};
let __initData2 = {
  code: "function pnpm_ReanimatedSwipeableTsx18(){const{showRightProgress}=this.__closure;return{pointerEvents:showRightProgress.value===0?'none':'auto'};}",
};
let __initData3 = {
  code: "function pnpm_ReanimatedSwipeableTsx19(event){const{userDrag,leftThreshold,leftWidth,rightThreshold,rightWidth,DRAG_TOSS,friction,rowState,animateRow}=this.__closure;var _leftThreshold,_rightThreshold;const{velocityX:velocityX}=event;userDrag.value=event.translationX;const leftThresholdProp=(_leftThreshold=leftThreshold)!==null&&_leftThreshold!==void 0?_leftThreshold:leftWidth.value/2;const rightThresholdProp=(_rightThreshold=rightThreshold)!==null&&_rightThreshold!==void 0?_rightThreshold:rightWidth.value/2;const translationX=(userDrag.value+DRAG_TOSS*velocityX)/friction;let toValue=0;if(rowState.value===0){if(translationX>leftThresholdProp){toValue=leftWidth.value;}else if(translationX<-rightThresholdProp){toValue=-rightWidth.value;}}else if(rowState.value===1){if(translationX>-leftThresholdProp){toValue=leftWidth.value;}}else{if(translationX<rightThresholdProp){toValue=-rightWidth.value;}}animateRow(toValue,velocityX/friction);}",
};
let __initData4 = { code: "function pnpm_ReanimatedSwipeableTsx20(){const{animateRow}=this.__closure;animateRow(0);}" };
let closure_28 = {
  code: "function pnpm_ReanimatedSwipeableTsx21(){const{rowState,close}=this.__closure;if(rowState.value!==0){close();}}",
};
let closure_29 = {
  code: "function pnpm_ReanimatedSwipeableTsx22(event){const{userDrag,rowState,SwipeDirection,dragStarted,onSwipeableOpenStartDrag,runOnJS,onSwipeableCloseStartDrag,updateAnimatedEvent}=this.__closure;userDrag.value=event.translationX;const direction=rowState.value===-1?SwipeDirection.RIGHT:rowState.value===1?SwipeDirection.LEFT:event.translationX>0?SwipeDirection.RIGHT:SwipeDirection.LEFT;if(!dragStarted.value){dragStarted.value=true;if(rowState.value===0&&onSwipeableOpenStartDrag){runOnJS(onSwipeableOpenStartDrag)(direction);}else if(onSwipeableCloseStartDrag){runOnJS(onSwipeableCloseStartDrag)(direction);}}updateAnimatedEvent();}",
};
let closure_30 = {
  code: "function pnpm_ReanimatedSwipeableTsx23(event){const{handleRelease}=this.__closure;handleRelease(event);}",
};
let __initData5 = {
  code: "function pnpm_ReanimatedSwipeableTsx24(){const{dragStarted}=this.__closure;dragStarted.value=false;}",
};
let __initData6 = {
  code: "function pnpm_ReanimatedSwipeableTsx25(){const{appliedTranslation,rowState}=this.__closure;return{transform:[{translateX:appliedTranslation.value}],pointerEvents:rowState.value===0?'auto':'box-only'};}",
};
let obj = { container: { overflow: "hidden" }, leftActions: obj2, rightActions: obj3 };
obj2 = { flexDirection: str, overflow: "hidden" };
const create = StyleSheet.create;
let merged = Object.assign(StyleSheet.absoluteFill);
str = "row";
if (I18nManager.isRTL) {
  str = "row-reverse";
}
obj3 = { flexDirection: str2, overflow: "hidden" };
let merged1 = Object.assign(StyleSheet.absoluteFill);
str2 = "row-reverse";
if (I18nManager.isRTL) {
  str2 = "row";
}
function _default(leftThreshold) {
  let View;
  let animateRow;
  let animationOptions;
  let block;
  let children;
  let childrenContainerStyle;
  let closure_24;
  let closure_25;
  let closure_32;
  let containerStyle;
  let dispatchEndEvents;
  let enableTrackpadTwoFingerGesture;
  let enabled;
  let fn8;
  let items11;
  let items14;
  let items15;
  let items16;
  let obj26;
  let obj28;
  let ref;
  let requireToFail;
  let simultaneousWith;
  let testID;
  let updateElementWidths;
  leftThreshold = leftThreshold.leftThreshold;
  const rightThreshold = leftThreshold.rightThreshold;
  ({ enabled, animationOptions } = leftThreshold);
  const overshootLeft = leftThreshold.overshootLeft;
  const overshootRight = leftThreshold.overshootRight;
  ({ testID, enableTrackpadTwoFingerGesture } = leftThreshold);
  let tmp = undefined !== enableTrackpadTwoFingerGesture;
  ({ ref, containerStyle, childrenContainerStyle, children } = leftThreshold);
  if (tmp) {
    tmp = enableTrackpadTwoFingerGesture;
  }
  const dragOffsetFromLeft = leftThreshold.dragOffsetFromLeft;
  let num = 10;
  if (undefined !== dragOffsetFromLeft) {
    num = dragOffsetFromLeft;
  }
  const dragOffsetFromRight = leftThreshold.dragOffsetFromRight;
  let num2 = -10;
  if (undefined !== dragOffsetFromRight) {
    num2 = dragOffsetFromRight;
  }
  const friction = leftThreshold.friction;
  let num3 = 1;
  let num4 = 1;
  if (undefined !== friction) {
    num4 = friction;
  }
  const overshootFriction = leftThreshold.overshootFriction;
  if (undefined !== overshootFriction) {
    num3 = overshootFriction;
  }
  const onSwipeableOpenStartDrag = leftThreshold.onSwipeableOpenStartDrag;
  const onSwipeableCloseStartDrag = leftThreshold.onSwipeableCloseStartDrag;
  const onSwipeableWillOpen = leftThreshold.onSwipeableWillOpen;
  const onSwipeableWillClose = leftThreshold.onSwipeableWillClose;
  const onSwipeableOpen = leftThreshold.onSwipeableOpen;
  const onSwipeableClose = leftThreshold.onSwipeableClose;
  const renderLeftActions = leftThreshold.renderLeftActions;
  const renderRightActions = leftThreshold.renderRightActions;
  ({ simultaneousWith, requireToFail, block } = leftThreshold);
  const hitSlop = leftThreshold.hitSlop;
  let tmp2 = overshootRight(leftThreshold, overshootLeft);
  let tmp3 = leftThreshold;
  const tmp4 = animationOptions;
  let obj = leftThreshold(animationOptions[4]);
  const sharedValue = obj.useSharedValue(false);
  let obj2 = leftThreshold(animationOptions[4]);
  const sharedValue1 = obj2.useSharedValue(0);
  let obj3 = leftThreshold(animationOptions[4]);
  const sharedValue2 = obj3.useSharedValue(0);
  const obj4 = leftThreshold(animationOptions[4]);
  const sharedValue3 = obj4.useSharedValue(0);
  let obj5 = leftThreshold(animationOptions[4]);
  const sharedValue4 = obj5.useSharedValue(0);
  const obj6 = leftThreshold(animationOptions[4]);
  const sharedValue5 = obj6.useSharedValue(0);
  const obj7 = leftThreshold(animationOptions[4]);
  const sharedValue6 = obj7.useSharedValue(0);
  const obj8 = leftThreshold(animationOptions[4]);
  const sharedValue7 = obj8.useSharedValue(0);
  const obj9 = leftThreshold(animationOptions[4]);
  const sharedValue8 = obj9.useSharedValue(0);
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
    const interpolate = _mod1643.interpolate;
    _mod1643;
    const tmp11 = -sharedValue6.value;
    if (tmp3) {
      num5 = 1 / num3;
    }
    const items1 = [tmp11 - num5, -sharedValue6.value, sharedValue5.value];
    let num6 = 0;
    value = sharedValue5.value;
    if (tmp) {
      num6 = 1 / num3;
    }
    items1[3] = value + num6;
    sharedValue3.value = interpolate(sum, items, items1);
    let num7 = 0;
    if (sharedValue5.value > 0) {
      const items2 = [-1, 0, sharedValue5.value];
      const tmp8Result = _mod1643;
      num7 = tmp8Result.interpolate(sharedValue3.value, items2, [0, 0, 1]);
    }
    sharedValue7.value = num7;
    let num8 = 0;
    if (sharedValue6.value > 0) {
      const items3 = [-sharedValue6.value, 0, 1];
      const tmp8Result2 = _mod1643;
      num8 = tmp8Result2.interpolate(sharedValue3.value, items3, [1, 0, 0]);
    }
    sharedValue8.value = num8;
  };
  fn.__closure = {
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
  ({
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
  });
  const tmp14 = num4(fn, items);
  __initData = tmp14;
  let fn2 = function p(arg0, arg1) {
    const tmp2 = onSwipeableWillOpen && 0 !== arg1;
    if (tmp2) {
      let LEFT;
      const obj = _mod1643;
      const runOnJSResult = obj.runOnJS(onSwipeableWillOpen);
      if (arg1 > 0) {
        LEFT = _mod9984.SwipeDirection.RIGHT;
      } else {
        LEFT = _mod9984.SwipeDirection.LEFT;
      }
      runOnJSResult(LEFT);
    }
    const tmp12 = onSwipeableWillClose && 0 === arg1;
    if (tmp12) {
      let RIGHT;
      const obj2 = _mod1643;
      const runOnJSResult1 = obj2.runOnJS(onSwipeableWillClose);
      if (arg0 > 0) {
        RIGHT = _mod9984.SwipeDirection.LEFT;
      } else {
        RIGHT = _mod9984.SwipeDirection.RIGHT;
      }
      runOnJSResult1(RIGHT);
    }
  };
  fn2.__closure = {
    onSwipeableWillOpen,
    runOnJS: leftThreshold(animationOptions[4]).runOnJS,
    SwipeDirection: leftThreshold(animationOptions[5]).SwipeDirection,
    onSwipeableWillClose,
  };
  fn2.__workletHash = 8272607728800;
  fn2.__initData = onSwipeableClose;
  let items1 = [onSwipeableWillClose, onSwipeableWillOpen];
  ({
    onSwipeableWillOpen,
    runOnJS: leftThreshold(animationOptions[4]).runOnJS,
    SwipeDirection: leftThreshold(animationOptions[5]).SwipeDirection,
    onSwipeableWillClose,
  });
  const tmp15 = num4(fn2, items1);
  __initData2 = tmp15;
  let fn3 = function c(arg0, arg1) {
    const tmp2 = onSwipeableOpen && 0 !== arg1;
    if (tmp2) {
      let LEFT;
      const obj = _mod1643;
      const runOnJSResult = obj.runOnJS(onSwipeableOpen);
      if (arg1 > 0) {
        LEFT = _mod9984.SwipeDirection.RIGHT;
      } else {
        LEFT = _mod9984.SwipeDirection.LEFT;
      }
      runOnJSResult(LEFT);
    }
    const tmp12 = onSwipeableClose && 0 === arg1;
    if (tmp12) {
      let RIGHT;
      const obj2 = _mod1643;
      const runOnJSResult1 = obj2.runOnJS(onSwipeableClose);
      if (arg0 > 0) {
        RIGHT = _mod9984.SwipeDirection.LEFT;
      } else {
        RIGHT = _mod9984.SwipeDirection.RIGHT;
      }
      runOnJSResult1(RIGHT);
    }
  };
  fn3.__closure = {
    onSwipeableOpen,
    runOnJS: leftThreshold(animationOptions[4]).runOnJS,
    SwipeDirection: leftThreshold(animationOptions[5]).SwipeDirection,
    onSwipeableClose,
  };
  fn3.__workletHash = 13119377905507;
  fn3.__initData = renderLeftActions;
  let items2 = [onSwipeableClose, onSwipeableOpen];
  ({
    onSwipeableOpen,
    runOnJS: leftThreshold(animationOptions[4]).runOnJS,
    SwipeDirection: leftThreshold(animationOptions[5]).SwipeDirection,
    onSwipeableClose,
  });
  const tmp16 = num4(fn3, items2);
  __initData3 = tmp16;
  const fn4 = function f(toValue) {
    let interpolateResult;
    let tmp5;
    let closure_0 = toValue;
    let num = arg1;
    if (arg1 === undefined) {
      num = 0;
    }
    let value3;
    const obj = {
      mass: 2,
      damping: 1000,
      stiffness: 700,
      velocity: num,
      overshootClamping: true,
      reduceMotion: leftThreshold(animationOptions[4]).ReduceMotion.System,
    };
    const merged = Object.assign(animationOptions);
    if (0 === toValue) {
      tmp5 = sharedValue1.value < 0;
    } else {
      tmp5 = toValue > 0;
    }
    if (0 === toValue) {
      if (tmp5) {
        value2 = sharedValue6.value;
      } else {
        value2 = sharedValue5.value;
      }
      value = value2;
    } else if (tmp5) {
      value = sharedValue5.value;
    } else {
      value = sharedValue6.value;
    }
    const obj2 = { restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01, velocity: interpolateResult };
    const merged1 = Object.assign(obj);
    interpolateResult = num;
    if (interpolateResult) {
      const items = [-value, value];
      const tmpResult = leftThreshold(animationOptions[4]);
      interpolateResult = tmpResult.interpolate(num, items, [-1, 1]);
    }
    value3 = sharedValue1.value;
    const fn = function n(arg0) {
      const tmp = arg0;
      if (tmp) {
        dispatchEndEvents(value3, toValue);
      }
    };
    const obj3 = { dispatchEndEvents, frozenRowState: value3, toValue };
    fn.__closure = obj3;
    fn.__workletHash = 14326616622785;
    fn.__initData = sharedValue;
    const tmpResult4 = leftThreshold(animationOptions[4]);
    sharedValue3.value = tmpResult4.withSpring(toValue, obj, fn);
    let num2 = 0;
    if (0 !== toValue) {
      const _Math = Math;
      num2 = Math.sign(toValue);
    }
    const tmpResult5 = leftThreshold(animationOptions[4]);
    sharedValue7.value = tmpResult5.withSpring(Math.max(num2, 0), obj2);
    const tmpResult6 = leftThreshold(animationOptions[4]);
    sharedValue8.value = tmpResult6.withSpring(Math.max(-num2, 0), obj2);
    closure_25(value3, toValue);
    sharedValue1.value = Math.sign(toValue);
    sharedValue.value = 0 !== sharedValue1.value;
  };
  fn4.__closure = {
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
  ({
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
  });
  const tmp17 = num4(fn4, items3);
  __initData4 = tmp17;
  const obj14 = leftThreshold(animationOptions[4]);
  const animatedRef = obj14.useAnimatedRef();
  const obj15 = leftThreshold(animationOptions[4]);
  const animatedRef1 = obj15.useAnimatedRef();
  const obj16 = leftThreshold(animationOptions[4]);
  const animatedRef2 = obj16.useAnimatedRef();
  class U {
    constructor() {
      const obj = _mod1643;
      const measureResult = obj.measure(animatedRef);
      const obj2 = _mod1643;
      const measureResult1 = obj2.measure(animatedRef1);
      const obj3 = _mod1643;
      const measureResult2 = obj3.measure(animatedRef2);
      let num;
      if (measureResult != null) {
        num = measureResult.pageX;
      }
      if (num == null) {
        num = 0;
      }
      let num2;
      if (measureResult1 != null) {
        num2 = measureResult1.pageX;
      }
      if (num2 == null) {
        num2 = 0;
      }
      sharedValue5.value = num - num2;
      let pageX;
      value = sharedValue4.value;
      if (measureResult2 != null) {
        pageX = measureResult2.pageX;
      }
      if (pageX == null) {
        pageX = sharedValue4.value;
      }
      num3 = undefined;
      const diff = value - pageX;
      if (measureResult1 != null) {
        num3 = measureResult1.pageX;
      }
      if (num3 == null) {
        num3 = 0;
      }
      sharedValue6.value = diff + num3;
    }
  }
  U.__closure = {
    measure: leftThreshold(animationOptions[4]).measure,
    leftLayoutRef: animatedRef,
    leftWrapperLayoutRef: animatedRef1,
    rightLayoutRef: animatedRef2,
    leftWidth: sharedValue5,
    rightWidth: sharedValue6,
    rowWidth: sharedValue4,
  };
  U.__workletHash = 15604496621835;
  U.__initData = sharedValue1;
  const items4 = [animatedRef, animatedRef1, animatedRef2, sharedValue5, sharedValue6, sharedValue4];
  ({
    measure: leftThreshold(animationOptions[4]).measure,
    leftLayoutRef: animatedRef,
    leftWrapperLayoutRef: animatedRef1,
    rightLayoutRef: animatedRef2,
    leftWidth: sharedValue5,
    rightWidth: sharedValue6,
    rowWidth: sharedValue4,
  });
  const tmp21 = num4(U, items4);
  __initData5 = tmp21;
  const items5 = [tmp17, tmp21, sharedValue5, sharedValue6, sharedValue2, sharedValue7, sharedValue3, sharedValue1];
  const tmp22 = onSwipeableOpenStartDrag(() => {
    let close;
    let fn;
    let fn2;
    let fn3;
    let leftWidth;
    let rightWidth;
    let obj = { close, openLeft: fn, openRight: fn2, reset: fn3 };
    close = function close() {
      if (globalThis._WORKLET) {
        animateRow(0);
      } else {
        const fn = function t() {
          animateRow(0);
        };
        const obj2 = { animateRow };
        fn.__closure = obj2;
        fn.__workletHash = 7817847521965;
        fn.__initData = sharedValue3;
        const obj = leftThreshold(animationOptions[4]);
        obj.runOnUI(fn)();
      }
    };
    let obj2 = { animateRow, runOnUI: _mod1643.runOnUI };
    close.__closure = obj2;
    close.__workletHash = 13750166537974;
    close.__initData = __initData;
    fn = function n() {
      if (globalThis._WORKLET) {
        updateElementWidths();
        animateRow(leftWidth.value);
      } else {
        const fn = function t() {
          updateElementWidths();
          animateRow(value.value);
        };
        const obj2 = { updateElementWidths, animateRow, leftWidth };
        fn.__closure = obj2;
        fn.__workletHash = 13169175708736;
        fn.__initData = sharedValue5;
        const obj = leftThreshold(animationOptions[4]);
        obj.runOnUI(fn)();
      }
    };
    fn.__closure = { updateElementWidths, animateRow, leftWidth: sharedValue5, runOnUI: _mod1643.runOnUI };
    fn.__workletHash = 4475786018826;
    fn.__initData = __initData2;
    fn2 = function o() {
      if (globalThis._WORKLET) {
        updateElementWidths();
        animateRow(-rightWidth.value);
      } else {
        const fn = function t() {
          updateElementWidths();
          animateRow(-value.value);
        };
        const obj2 = { updateElementWidths, animateRow, rightWidth };
        fn.__closure = obj2;
        fn.__workletHash = 3813246920715;
        fn.__initData = sharedValue7;
        const obj = leftThreshold(animationOptions[4]);
        obj.runOnUI(fn)();
      }
    };
    ({ updateElementWidths, animateRow, leftWidth: sharedValue5, runOnUI: _mod1643.runOnUI });
    fn2.__closure = { updateElementWidths, animateRow, rightWidth: sharedValue6, runOnUI: _mod1643.runOnUI };
    fn2.__workletHash = 15952033587532;
    fn2.__initData = __initData3;
    fn3 = function t() {
      __initData.value = 0;
      sharedValue7.value = 0;
      sharedValue3.value = 0;
      sharedValue1.value = 0;
    };
    const obj5 = {
      userDrag: sharedValue2,
      showLeftProgress: sharedValue7,
      appliedTranslation: sharedValue3,
      rowState: sharedValue1,
    };
    fn3.__closure = obj5;
    fn3.__workletHash = 11850540018310;
    fn3.__initData = __initData4;
    ({ updateElementWidths, animateRow, rightWidth: sharedValue6, runOnUI: _mod1643.runOnUI });
    return obj;
  }, items5);
  __initData6 = tmp22;
  const items6 = [sharedValue4];
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
  const tmp23 = num4((nativeEvent) => {
    sharedValue4.value = nativeEvent.nativeEvent.layout.width;
  }, items6);
  const obj18 = leftThreshold(animationOptions[4]);
  const animatedStyle = obj18.useAnimatedStyle(fn5);
  const items7 = [sharedValue3, animatedStyle, animatedRef, animatedRef1, renderLeftActions, sharedValue7, tmp22];
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
  const tmp25 = num4(() => {
    let items;
    let items1;
    const obj = { ref: animatedRef1, style: items, children: items1 };
    items = [animatedStyle.leftActions, animatedStyle];
    let tmp4Result;
    const View = _modDef1643.View;
    if (renderLeftActions != null) {
      tmp4Result = tmp4(sharedValue7, sharedValue3, closure_32);
    }
    items1 = [tmp4Result];
    const obj2 = { ref: animatedRef };
    items1[1] = React4(_modDef1643.View, obj2);
    return authStore(View, obj);
  }, items7);
  const obj19 = leftThreshold(animationOptions[4]);
  const animatedStyle1 = obj19.useAnimatedStyle(fn6);
  const items8 = [sharedValue3, renderRightActions, animatedStyle1, animatedRef2, sharedValue8, tmp22];
  class K {
    constructor(arg0) {
      let velocityX;
      ({ velocityX, translationX: sharedValue2.value } = arg0);
      let result = leftThreshold;
      if (leftThreshold == null) {
        result = sharedValue5.value / 2;
      }
      let result1 = rightThreshold;
      if (rightThreshold == null) {
        result1 = sharedValue6.value / 2;
      }
      const result2 = (sharedValue2.value + 0.05 * velocityX) / num4;
      const tmp5 = num4;
      if (0 === sharedValue1.value) {
        if (result2 > result) {
          num4 = sharedValue5.value;
        } else {
          num4 = 0;
          if (result2 < -result1) {
            num4 = -sharedValue6.value;
          }
        }
      } else if (1 === iter2.value) {
        num4 = 0;
        if (result2 > -result) {
          num4 = sharedValue5.value;
        }
      } else {
        num4 = 0;
        if (result2 < result1) {
          num4 = -sharedValue6.value;
        }
      }
      animateRow(num4, velocityX / tmp5);
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
  K.__initData = __initData3;
  const items9 = [tmp17, num4, leftThreshold, sharedValue5, rightThreshold, sharedValue6, sharedValue1, sharedValue2];
  const tmp27 = num4(() => {
    let items;
    let items1;
    const obj = { style: items, children: items1 };
    items = [animatedStyle.rightActions, animatedStyle1];
    let tmp4Result;
    const View = _modDef1643.View;
    if (renderRightActions != null) {
      tmp4Result = tmp4(sharedValue8, sharedValue3, closure_32);
    }
    items1 = [tmp4Result];
    const obj2 = { ref: animatedRef2 };
    items1[1] = React4(_modDef1643.View, obj2);
    return authStore(View, obj);
  }, items8);
  const tmp28 = num4(K, items9);
  let closure_35 = tmp28;
  const fn7 = function q() {
    animateRow(0);
  };
  fn7.__closure = { animateRow: tmp17 };
  fn7.__workletHash = 9283018543055;
  fn7.__initData = __initData4;
  const items10 = [tmp17];
  const tmp29 = num4(fn7, items10);
  let closure_36 = tmp29;
  const obj20 = leftThreshold(animationOptions[4]);
  const sharedValue9 = obj20.useSharedValue(false);
  const obj22 = {
    shouldCancelWhenOutside: true,
    enabled: sharedValue,
    simultaneousWith,
    requireToFail,
    block,
    onActivate: fn8,
  };
  fn8 = function j() {
    if (0 !== sharedValue1.value) {
      closure_36();
    }
  };
  fn8.__closure = { rowState: sharedValue1, close: tmp29 };
  fn8.__workletHash = 16709006208782;
  fn8.__initData = animatedRef;
  const obj21 = leftThreshold(animationOptions[6]);
  const tapGesture = obj21.useTapGesture(obj22);
  const usePanGesture = leftThreshold(animationOptions[6]).usePanGesture;
  leftThreshold(animationOptions[6]);
  if (enabled == null) {
    enabled = true;
  }
  const obj23 = {
    enabled,
    enableTrackpadTwoFingerGesture: tmp,
    activeOffsetX: items11,
    simultaneousWith,
    requireToFail,
    block,
    hitSlop,
    onActivate: tmp21,
    onUpdate: Q,
    onDeactivate: N,
    onFinalize: B,
  };
  items11 = [num2, num];
  class Q {
    constructor(translationX) {
      let LEFT;
      sharedValue2.value = translationX.translationX;
      if (-1 === sharedValue1.value) {
        LEFT = _mod9984.SwipeDirection.RIGHT;
      } else if (1 === sharedValue1.value) {
        LEFT = _mod9984.SwipeDirection.LEFT;
      } else if (translationX.translationX > 0) {
        LEFT = _mod9984.SwipeDirection.RIGHT;
      } else {
        LEFT = _mod9984.SwipeDirection.LEFT;
      }
      if (!sharedValue9.value) {
        tmp9.value = true;
        if (0 === sharedValue1.value) {
          if (onSwipeableOpenStartDrag) {
            const obj2 = _mod1643;
            obj2.runOnJS(tmp10)(LEFT);
          }
        }
        if (onSwipeableCloseStartDrag) {
          const obj = _mod1643;
          obj.runOnJS(tmp11)(LEFT);
        }
      }
      closure_24();
    }
  }
  Q.__closure = {
    userDrag: sharedValue2,
    rowState: sharedValue1,
    SwipeDirection: tmp3(tmp4[5]).SwipeDirection,
    dragStarted: sharedValue9,
    onSwipeableOpenStartDrag,
    runOnJS: tmp3(tmp4[4]).runOnJS,
    onSwipeableCloseStartDrag,
    updateAnimatedEvent: tmp14,
  };
  Q.__workletHash = 15505996161327;
  Q.__initData = animatedRef1;
  ({
    userDrag: sharedValue2,
    rowState: sharedValue1,
    SwipeDirection: tmp3(tmp4[5]).SwipeDirection,
    dragStarted: sharedValue9,
    onSwipeableOpenStartDrag,
    runOnJS: tmp3(tmp4[4]).runOnJS,
    onSwipeableCloseStartDrag,
    updateAnimatedEvent: tmp14,
  });
  class N {
    constructor(arg0) {
      closure_35(arg0);
    }
  }
  N.__closure = { handleRelease: tmp28 };
  N.__workletHash = 4289194441916;
  N.__initData = animatedRef2;
  class B {
    constructor() {
      sharedValue9.value = false;
    }
  }
  B.__closure = { dragStarted: sharedValue9 };
  B.__workletHash = 16139303956991;
  B.__initData = __initData5;
  const items12 = [tmp22];
  const panGesture = usePanGesture(obj23);
  num3(ref, () => closure_32, items12);
  function rt() {
    let items;
    let str;
    const obj = { transform: items, pointerEvents: str };
    items = [];
    const obj2 = { translateX: sharedValue3.value };
    items[0] = obj2;
    str = "box-only";
    if (0 === sharedValue1.value) {
      str = "auto";
    }
    return obj;
  }
  rt.__closure = { appliedTranslation: sharedValue3, rowState: sharedValue1 };
  rt.__workletHash = 3332495344976;
  rt.__initData = __initData6;
  const items13 = [sharedValue3, sharedValue1];
  const tmp3Result = tmp3(tmp4[4]);
  const animatedStyle2 = tmp3Result.useAnimatedStyle(rt, items13);
  const obj25 = { gesture: panGesture, touchAction: "pan-y", children: onSwipeableWillClose(View, obj26) };
  const GestureDetector = tmp3(tmp4[7]).GestureDetector;
  obj26 = { onLayout: tmp23, style: items14, children: items15 };
  View = rightThreshold(tmp4[4]).View;
  let merged = Object.assign(tmp2);
  items14 = [animatedStyle.container, containerStyle];
  items15 = [tmp25(), tmp27()];
  const obj27 = {
    gesture: tapGesture,
    touchAction: "pan-y",
    children: onSwipeableWillOpen(rightThreshold(tmp4[4]).View, obj28),
  };
  const GestureDetector2 = tmp3(tmp4[7]).GestureDetector;
  obj28 = { style: items16, children };
  items16 = [animatedStyle2, childrenContainerStyle];
  items15[2] = onSwipeableWillOpen(GestureDetector2, obj27);
  const tmp38 = onSwipeableWillOpen(GestureDetector, obj25);
  let tmp36Result = tmp38;
  const tmp36 = onSwipeableWillOpen;
  if (testID) {
    const obj29 = { testID, children: tmp38 };
    tmp36Result = tmp36(onSwipeableCloseStartDrag, obj29);
  }
  return tmp36Result;
}
let closure_33 = create(obj);

export default _default;
