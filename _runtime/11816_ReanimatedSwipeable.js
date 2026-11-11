// _runtime/11816_ReanimatedSwipeable.js
import _modDef1652 from "metro/01652__.js";
import _mod1705 from "metro/01705__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop_mod from "metro/00019__.js";

require = fn;
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
let noop = fn(19);
({
  useCallback: hasOwnProperty,
  useEffect,
  useImperativeHandle: closure_6,
  useMemo: metroImportDefault,
  useRef: closure_8,
} = noop);
let noop = noop_mod;
get_ActivityIndicator = fn(17);
({ I18nManager, Platform, StyleSheet, View: closure_9 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = {
  code: "(function pnpm_ReanimatedSwipeableTsx4(){let[overshootLeft,leftWidth,overshootRight,rightWidth,rowState,userDrag,friction,appliedTranslation,interpolate,overshootFriction,showLeftProgress,showRightProgress]=this.__closure;var _overshootLeft,_overshootRight;const shouldOvershootLeft=(_overshootLeft=overshootLeft)!==null&&_overshootLeft!==void 0?_overshootLeft:leftWidth.value>0;const shouldOvershootRight=(_overshootRight=overshootRight)!==null&&_overshootRight!==void 0?_overshootRight:rightWidth.value>0;const startOffset=rowState.value===1?leftWidth.value:rowState.value===-1?-rightWidth.value:0;const offsetDrag=userDrag.value/friction+startOffset;appliedTranslation.value=interpolate(offsetDrag,[-rightWidth.value-1,-rightWidth.value,leftWidth.value,leftWidth.value+1],[-rightWidth.value-(shouldOvershootRight?1/overshootFriction:0),-rightWidth.value,leftWidth.value,leftWidth.value+(shouldOvershootLeft?1/overshootFriction:0)]);showLeftProgress.value=leftWidth.value>0?interpolate(appliedTranslation.value,[-1,0,leftWidth.value],[0,0,1]):0;showRightProgress.value=rightWidth.value>0?interpolate(appliedTranslation.value,[-rightWidth.value,0,1],[1,0,0]):0;})",
};
let closure_13 = {
  code: "(function pnpm_ReanimatedSwipeableTsx5(fromValue,toValue){let[onSwipeableWillOpen,scheduleOnRN,SwipeDirection,onSwipeableWillClose]=this.__closure;if(onSwipeableWillOpen&&toValue!==0){scheduleOnRN(onSwipeableWillOpen,toValue>0?SwipeDirection.RIGHT:SwipeDirection.LEFT);}if(onSwipeableWillClose&&toValue===0){scheduleOnRN(onSwipeableWillClose,fromValue>0?SwipeDirection.LEFT:SwipeDirection.RIGHT);}})",
};
let closure_14 = {
  code: "(function pnpm_ReanimatedSwipeableTsx6(fromValue,toValue){let[onSwipeableOpen,scheduleOnRN,SwipeDirection,onSwipeableClose]=this.__closure;if(onSwipeableOpen&&toValue!==0){scheduleOnRN(onSwipeableOpen,toValue>0?SwipeDirection.RIGHT:SwipeDirection.LEFT);}if(onSwipeableClose&&toValue===0){scheduleOnRN(onSwipeableClose,fromValue>0?SwipeDirection.LEFT:SwipeDirection.RIGHT);}})",
};
let closure_15 = {
  code: "(function pnpm_ReanimatedSwipeableTsx7(isFinished){let[dispatchEndEvents,frozenRowState,toValue]=this.__closure;if(isFinished){dispatchEndEvents(frozenRowState,toValue);}})",
};
let closure_16 = {
  code: "(function pnpm_ReanimatedSwipeableTsx8(toValue,velocityX=0){let[ReduceMotion,animationOptions,rowState,rightWidth,leftWidth,interpolate,appliedTranslation,withSpring,_worklet_10283843840439_init_data,dispatchEndEvents,showLeftProgress,showRightProgress,dispatchImmediateEvents,shouldEnableTap]=this.__closure;const translationSpringConfig={mass:2,damping:1000,stiffness:700,velocity:velocityX,overshootClamping:true,reduceMotion:ReduceMotion.System,...animationOptions};const isClosing=toValue===0;const moveToRight=isClosing?rowState.value<0:toValue>0;const usedWidth=isClosing?moveToRight?rightWidth.value:leftWidth.value:moveToRight?leftWidth.value:rightWidth.value;const progressSpringConfig={...translationSpringConfig,restDisplacementThreshold:0.01,restSpeedThreshold:0.01,velocity:velocityX&&interpolate(velocityX,[-usedWidth,usedWidth],[-1,1])};const frozenRowState=rowState.value;appliedTranslation.value=withSpring(toValue,translationSpringConfig,function pnpm_ReanimatedSwipeableTsx7Factory([_worklet_10283843840439_init_data,dispatchEndEvents,frozenRowState,toValue]){const pnpm_ReanimatedSwipeableTsx7=function(isFinished){if(isFinished){dispatchEndEvents(frozenRowState,toValue);}};pnpm_ReanimatedSwipeableTsx7.__closure=[dispatchEndEvents,frozenRowState,toValue];pnpm_ReanimatedSwipeableTsx7.__workletHash=10283843840439;pnpm_ReanimatedSwipeableTsx7.__initData=_worklet_10283843840439_init_data;return pnpm_ReanimatedSwipeableTsx7;}([_worklet_10283843840439_init_data,dispatchEndEvents,frozenRowState,toValue]));const progressTarget=toValue===0?0:1*Math.sign(toValue);showLeftProgress.value=withSpring(Math.max(progressTarget,0),progressSpringConfig);showRightProgress.value=withSpring(Math.max(-progressTarget,0),progressSpringConfig);dispatchImmediateEvents(frozenRowState,toValue);rowState.value=Math.sign(toValue);shouldEnableTap.value=rowState.value!==0;})",
};
let closure_17 = {
  code: "(function pnpm_ReanimatedSwipeableTsx9(){let[measure,leftLayoutRef,leftWrapperLayoutRef,rightLayoutRef,leftWidth,rightWidth,rowWidth]=this.__closure;var _leftLayout$pageX,_leftWrapperLayout$pa,_rightLayout$pageX,_leftWrapperLayout$pa2;const leftLayout=measure(leftLayoutRef);const leftWrapperLayout=measure(leftWrapperLayoutRef);const rightLayout=measure(rightLayoutRef);leftWidth.value=((_leftLayout$pageX=leftLayout===null||leftLayout===void 0?void 0:leftLayout.pageX)!==null&&_leftLayout$pageX!==void 0?_leftLayout$pageX:0)-((_leftWrapperLayout$pa=leftWrapperLayout===null||leftWrapperLayout===void 0?void 0:leftWrapperLayout.pageX)!==null&&_leftWrapperLayout$pa!==void 0?_leftWrapperLayout$pa:0);rightWidth.value=rowWidth.value-((_rightLayout$pageX=rightLayout===null||rightLayout===void 0?void 0:rightLayout.pageX)!==null&&_rightLayout$pageX!==void 0?_rightLayout$pageX:rowWidth.value)+((_leftWrapperLayout$pa2=leftWrapperLayout===null||leftWrapperLayout===void 0?void 0:leftWrapperLayout.pageX)!==null&&_leftWrapperLayout$pa2!==void 0?_leftWrapperLayout$pa2:0);})",
};
let closure_18 = { code: "(function pnpm_ReanimatedSwipeableTsx10(){let[animateRow]=this.__closure;animateRow(0);})" };
let closure_19 = {
  code: "(function close_Pnpm_ReanimatedSwipeableTsx11(){let[isWorkletRuntime,animateRow,scheduleOnUI,_worklet_5083608474645_init_data]=this.__closure;if(isWorkletRuntime()){animateRow(0);return;}scheduleOnUI(function close_Pnpm_ReanimatedSwipeableTsx11([_worklet_5083608474645_init_data,animateRow]){const pnpm_ReanimatedSwipeableTsx10=function(){animateRow(0);};pnpm_ReanimatedSwipeableTsx10.__closure=[animateRow];pnpm_ReanimatedSwipeableTsx10.__workletHash=5083608474645;pnpm_ReanimatedSwipeableTsx10.__initData=_worklet_5083608474645_init_data;return pnpm_ReanimatedSwipeableTsx10;}([_worklet_5083608474645_init_data,animateRow]));})",
};
let closure_20 = {
  code: "(function pnpm_ReanimatedSwipeableTsx12(){let[updateElementWidths,animateRow,leftWidth]=this.__closure;updateElementWidths();animateRow(leftWidth.value);})",
};
let closure_21 = {
  code: "(function openLeft_Pnpm_ReanimatedSwipeableTsx13(){let[isWorkletRuntime,updateElementWidths,animateRow,leftWidth,scheduleOnUI,_worklet_16079186854680_init_data]=this.__closure;if(isWorkletRuntime()){updateElementWidths();animateRow(leftWidth.value);return;}scheduleOnUI(function openLeft_Pnpm_ReanimatedSwipeableTsx13([_worklet_16079186854680_init_data,updateElementWidths,animateRow,leftWidth]){const pnpm_ReanimatedSwipeableTsx12=function(){updateElementWidths();animateRow(leftWidth.value);};pnpm_ReanimatedSwipeableTsx12.__closure=[updateElementWidths,animateRow,leftWidth];pnpm_ReanimatedSwipeableTsx12.__workletHash=16079186854680;pnpm_ReanimatedSwipeableTsx12.__initData=_worklet_16079186854680_init_data;return pnpm_ReanimatedSwipeableTsx12;}([_worklet_16079186854680_init_data,updateElementWidths,animateRow,leftWidth]));})",
};
let closure_22 = {
  code: "(function pnpm_ReanimatedSwipeableTsx14(){let[updateElementWidths,animateRow,rightWidth]=this.__closure;updateElementWidths();animateRow(-rightWidth.value);})",
};
let closure_23 = {
  code: "(function openRight_Pnpm_ReanimatedSwipeableTsx15(){let[isWorkletRuntime,updateElementWidths,animateRow,rightWidth,scheduleOnUI,_worklet_7359076028115_init_data]=this.__closure;if(isWorkletRuntime()){updateElementWidths();animateRow(-rightWidth.value);return;}scheduleOnUI(function openRight_Pnpm_ReanimatedSwipeableTsx15([_worklet_7359076028115_init_data,updateElementWidths,animateRow,rightWidth]){const pnpm_ReanimatedSwipeableTsx14=function(){updateElementWidths();animateRow(-rightWidth.value);};pnpm_ReanimatedSwipeableTsx14.__closure=[updateElementWidths,animateRow,rightWidth];pnpm_ReanimatedSwipeableTsx14.__workletHash=7359076028115;pnpm_ReanimatedSwipeableTsx14.__initData=_worklet_7359076028115_init_data;return pnpm_ReanimatedSwipeableTsx14;}([_worklet_7359076028115_init_data,updateElementWidths,animateRow,rightWidth]));})",
};
let closure_24 = {
  code: "(function reset_Pnpm_ReanimatedSwipeableTsx16(){let[userDrag,showLeftProgress,appliedTranslation,rowState]=this.__closure;userDrag.value=0;showLeftProgress.value=0;appliedTranslation.value=0;rowState.value=0;})",
};
let closure_25 = {
  code: "(function pnpm_ReanimatedSwipeableTsx17(){let[showLeftProgress]=this.__closure;return{pointerEvents:showLeftProgress.value===0?'none':'auto'};})",
};
let closure_26 = {
  code: "(function pnpm_ReanimatedSwipeableTsx18(){let[showRightProgress]=this.__closure;return{pointerEvents:showRightProgress.value===0?'none':'auto'};})",
};
let closure_27 = {
  code: "(function pnpm_ReanimatedSwipeableTsx19(event){let[userDrag,leftThreshold,leftWidth,rightThreshold,rightWidth,DRAG_TOSS,friction,rowState,animateRow]=this.__closure;var _leftThreshold,_rightThreshold;const{velocityX:velocityX}=event;userDrag.value=event.translationX;const leftThresholdProp=(_leftThreshold=leftThreshold)!==null&&_leftThreshold!==void 0?_leftThreshold:leftWidth.value/2;const rightThresholdProp=(_rightThreshold=rightThreshold)!==null&&_rightThreshold!==void 0?_rightThreshold:rightWidth.value/2;const translationX=(userDrag.value+DRAG_TOSS*velocityX)/friction;let toValue=0;if(rowState.value===0){if(translationX>leftThresholdProp){toValue=leftWidth.value;}else if(translationX<-rightThresholdProp){toValue=-rightWidth.value;}}else if(rowState.value===1){if(translationX>-leftThresholdProp){toValue=leftWidth.value;}}else{if(translationX<rightThresholdProp){toValue=-rightWidth.value;}}animateRow(toValue,velocityX/friction);})",
};
let closure_28 = { code: "(function pnpm_ReanimatedSwipeableTsx20(){let[animateRow]=this.__closure;animateRow(0);})" };
let closure_29 = {
  code: "(function pnpm_ReanimatedSwipeableTsx21(){let[dragStarted]=this.__closure;dragStarted.value=false;})",
};
let closure_30 = {
  code: "(function pnpm_ReanimatedSwipeableTsx22(event){let[userDrag,rowState,SwipeDirection,dragStarted,onSwipeableOpenStartDrag,scheduleOnRN,onSwipeableCloseStartDrag,updateAnimatedEvent]=this.__closure;userDrag.value=event.translationX;const direction=rowState.value===-1?SwipeDirection.RIGHT:rowState.value===1?SwipeDirection.LEFT:event.translationX>0?SwipeDirection.RIGHT:SwipeDirection.LEFT;if(!dragStarted.value){dragStarted.value=true;if(rowState.value===0&&onSwipeableOpenStartDrag){scheduleOnRN(onSwipeableOpenStartDrag,direction);}else if(onSwipeableCloseStartDrag){scheduleOnRN(onSwipeableCloseStartDrag,direction);}}updateAnimatedEvent();})",
};
let closure_31 = {
  code: "(function pnpm_ReanimatedSwipeableTsx23(){let[rowState,close]=this.__closure;if(rowState.value!==0){close();}})",
};
let closure_32 = {
  code: "(function pnpm_ReanimatedSwipeableTsx24(){let[appliedTranslation,rowState]=this.__closure;return{transform:[{translateX:appliedTranslation.value}],pointerEvents:rowState.value===0?'auto':'box-only'};})",
};
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
  ({ leftThreshold, rightThreshold, enabled } = dragOffsetFromLeft);
  _require = enabled;
  ({ animationOptions, overshootLeft, overshootRight, testID, enableTrackpadTwoFingerGesture } = dragOffsetFromLeft);
  let tmp = undefined !== enableTrackpadTwoFingerGesture;
  ({ ref, containerStyle, childrenContainerStyle, children } = dragOffsetFromLeft);
  if (tmp) {
    tmp = enableTrackpadTwoFingerGesture;
  }
  importDefault = tmp;
  dragOffsetFromLeft = dragOffsetFromLeft.dragOffsetFromLeft;
  let num = 10;
  if (undefined !== dragOffsetFromLeft) {
    num = dragOffsetFromLeft;
  }
  dependencyMap = num;
  const dragOffsetFromRight = dragOffsetFromLeft.dragOffsetFromRight;
  let num2 = -10;
  if (undefined !== dragOffsetFromRight) {
    num2 = dragOffsetFromRight;
  }
  c3 = num2;
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
  ({
    onSwipeableOpenStartDrag,
    onSwipeableCloseStartDrag,
    onSwipeableWillOpen,
    onSwipeableWillClose,
    onSwipeableOpen,
    onSwipeableClose,
    renderLeftActions,
  } = dragOffsetFromLeft);
  _objectWithoutProperties = renderLeftActions;
  const renderRightActions = dragOffsetFromLeft.renderRightActions;
  c5 = renderRightActions;
  const simultaneousWith = dragOffsetFromLeft.simultaneousWith;
  c6 = simultaneousWith;
  const requireToFail = dragOffsetFromLeft.requireToFail;
  c7 = requireToFail;
  const block = dragOffsetFromLeft.block;
  c8 = block;
  const hitSlop = dragOffsetFromLeft.hitSlop;
  c9 = hitSlop;
  const tmp4 = c8(onSwipeableOpenStartDrag);
  _require = tmp4;
  tmp4.current = onSwipeableOpenStartDrag;
  let tmp6;
  if (onSwipeableOpenStartDrag) {
    tmp6 = c5(() => {
      items = [...arguments];
      const current = _undefined.current;
      if (current != null) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, _undefined);
      }
    }, []);
  }
  const tmp3Result = c8(onSwipeableCloseStartDrag);
  _require = tmp3Result;
  tmp3Result.current = onSwipeableCloseStartDrag;
  let tmp5Result;
  if (onSwipeableCloseStartDrag) {
    tmp5Result = tmp5(() => {
      items = [...arguments];
      const current = _undefined.current;
      if (current != null) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, _undefined);
      }
    }, []);
  }
  const tmp3Result5 = c8(onSwipeableWillOpen);
  _require = tmp3Result5;
  tmp3Result5.current = onSwipeableWillOpen;
  let tmp5Result17;
  if (onSwipeableWillOpen) {
    tmp5Result17 = tmp5(() => {
      items = [...arguments];
      const current = _undefined.current;
      if (current != null) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, _undefined);
      }
    }, []);
  }
  const tmp3Result6 = c8(onSwipeableWillClose);
  _require = tmp3Result6;
  tmp3Result6.current = onSwipeableWillClose;
  let tmp5Result18;
  if (onSwipeableWillClose) {
    tmp5Result18 = tmp5(() => {
      items = [...arguments];
      const current = _undefined.current;
      if (current != null) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, _undefined);
      }
    }, []);
  }
  const tmp3Result7 = c8(onSwipeableOpen);
  _require = tmp3Result7;
  tmp3Result7.current = onSwipeableOpen;
  let tmp5Result19;
  if (onSwipeableOpen) {
    tmp5Result19 = tmp5(() => {
      items = [...arguments];
      const current = _undefined.current;
      if (current != null) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, _undefined);
      }
    }, []);
  }
  const tmp3Result8 = c8(onSwipeableClose);
  _require = tmp3Result8;
  tmp3Result8.current = onSwipeableClose;
  let tmp5Result20;
  if (onSwipeableClose) {
    tmp5Result20 = tmp5(() => {
      items = [...arguments];
      const current = _undefined.current;
      if (current != null) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, _undefined);
      }
    }, []);
  }
  let tmp2 = _objectWithoutProperties(dragOffsetFromLeft, c3);
  const sharedValue = require("metro/01652__.js").useSharedValue(false);
  let obj = require("metro/01652__.js");
  const sharedValue1 = require("metro/01652__.js").useSharedValue(0);
  let obj2 = require("metro/01652__.js");
  const sharedValue2 = require("metro/01652__.js").useSharedValue(0);
  c12 = sharedValue2;
  const obj3 = require("metro/01652__.js");
  const sharedValue3 = require("metro/01652__.js").useSharedValue(0);
  c13 = sharedValue3;
  const obj4 = require("metro/01652__.js");
  const sharedValue4 = require("metro/01652__.js").useSharedValue(0);
  const obj5 = require("metro/01652__.js");
  const sharedValue5 = require("metro/01652__.js").useSharedValue(0);
  const obj6 = require("metro/01652__.js");
  const sharedValue6 = require("metro/01652__.js").useSharedValue(0);
  const obj7 = require("metro/01652__.js");
  const sharedValue7 = require("metro/01652__.js").useSharedValue(0);
  const obj8 = require("metro/01652__.js");
  const sharedValue8 = require("metro/01652__.js").useSharedValue(0);
  items = [
    c12,
    overshootLeft,
    sharedValue5,
    overshootRight,
    sharedValue6,
    sharedValue1,
    sharedValue2,
    num4,
    sharedValue3,
    require("metro/01652__.js").interpolate,
    num3,
    sharedValue7,
    sharedValue8,
  ];
  _require = undefined;
  c5 = undefined;
  [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40] = items;
  function pnpm_ReanimatedSwipeableTsx4() {
    let tmp = c0;
    if (c0 == null) {
      tmp = enableTrackpadTwoFingerGesture.value > 0;
    }
    let tmp3 = c2;
    if (c2 == null) {
      tmp3 = _undefined3.value > 0;
    }
    if (1 === _undefined4.value) {
      let num4 = enableTrackpadTwoFingerGesture.value;
    } else {
      num4 = 0;
      if (-1 === iter.value) {
        num4 = -_undefined3.value;
      }
    }
    items = [
      -_undefined3.value - 1,
      -_undefined3.value,
      enableTrackpadTwoFingerGesture.value,
      enableTrackpadTwoFingerGesture.value + 1,
    ];
    let num5 = 0;
    const sum = _undefined5.value / c6 + num4;
    if (tmp3) {
      num5 = 1 / c9;
    }
    const items1 = [-_undefined3.value - num5, -_undefined3.value, enableTrackpadTwoFingerGesture.value];
    let num6 = 0;
    if (tmp) {
      num6 = 1 / c9;
    }
    items1[3] = enableTrackpadTwoFingerGesture.value + num6;
    c7.value = block(sum, items, items1);
    let num7 = 0;
    if (enableTrackpadTwoFingerGesture.value > 0) {
      const items2 = [-1, 0, enableTrackpadTwoFingerGesture.value];
      num7 = block(c7.value, items2, [0, 0, 1]);
    }
    c10.value = num7;
    let num8 = 0;
    if (_undefined3.value > 0) {
      const items3 = [-_undefined3.value, 0, 1];
      num8 = block(c7.value, items3, [1, 0, 0]);
    }
    c11.value = num8;
    const tmp9 = -_undefined3.value;
  }
  let items1 = [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40];
  pnpm_ReanimatedSwipeableTsx4.__closure = items1;
  pnpm_ReanimatedSwipeableTsx4.__workletHash = 14965618424066;
  pnpm_ReanimatedSwipeableTsx4.__initData = tmp28;
  let items2 = [
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
  const tmp5Result21 = c5(pnpm_ReanimatedSwipeableTsx4, items2);
  let items3 = [
    c13,
    tmp5Result17,
    require("metro/01705__.js").scheduleOnRN,
    require("metro/11817__.js").SwipeDirection,
    tmp5Result18,
  ];
  _require = undefined;
  [tmp42, tmp43, tmp44, tmp45, tmp46] = items3;
  function pnpm_ReanimatedSwipeableTsx5(arg0, arg1) {
    let tmp2 = c0;
    if (c0) {
      tmp2 = 0 !== arg1;
    }
    if (!tmp2) {
      let tmp8 = c3;
      if (c3) {
        tmp8 = 0 === arg1;
      }
      if (tmp8) {
        if (arg0 > 0) {
          let RIGHT = _undefined2.LEFT;
        } else {
          RIGHT = _undefined2.RIGHT;
        }
        enableTrackpadTwoFingerGesture(c3, RIGHT);
      }
    } else {
      if (arg1 > 0) {
        let LEFT = _undefined2.RIGHT;
      } else {
        LEFT = _undefined2.LEFT;
      }
      enableTrackpadTwoFingerGesture(c0, LEFT);
    }
  }
  let items4 = [tmp43, tmp44, tmp45, tmp46];
  pnpm_ReanimatedSwipeableTsx5.__closure = items4;
  pnpm_ReanimatedSwipeableTsx5.__workletHash = 2282054426384;
  pnpm_ReanimatedSwipeableTsx5.__initData = tmp42;
  let items5 = [tmp5Result18, tmp5Result17];
  const tmp5Result22 = c5(pnpm_ReanimatedSwipeableTsx5, items5);
  let items6 = [
    sharedValue4,
    tmp5Result19,
    require("metro/01705__.js").scheduleOnRN,
    require("metro/11817__.js").SwipeDirection,
    tmp5Result20,
  ];
  _require = undefined;
  [tmp48, tmp49, tmp50, tmp51, tmp52] = items6;
  function pnpm_ReanimatedSwipeableTsx6(arg0, arg1) {
    let tmp2 = c0;
    if (c0) {
      tmp2 = 0 !== arg1;
    }
    if (!tmp2) {
      let tmp8 = c3;
      if (c3) {
        tmp8 = 0 === arg1;
      }
      if (tmp8) {
        if (arg0 > 0) {
          let RIGHT = _undefined2.LEFT;
        } else {
          RIGHT = _undefined2.RIGHT;
        }
        enableTrackpadTwoFingerGesture(c3, RIGHT);
      }
    } else {
      if (arg1 > 0) {
        let LEFT = _undefined2.RIGHT;
      } else {
        LEFT = _undefined2.LEFT;
      }
      enableTrackpadTwoFingerGesture(c0, LEFT);
    }
  }
  let items7 = [tmp49, tmp50, tmp51, tmp52];
  pnpm_ReanimatedSwipeableTsx6.__closure = items7;
  pnpm_ReanimatedSwipeableTsx6.__workletHash = 737299026611;
  pnpm_ReanimatedSwipeableTsx6.__initData = tmp48;
  const items8 = [tmp5Result20, tmp5Result19];
  const tmp5Result23 = c5(pnpm_ReanimatedSwipeableTsx6, items8);
  const items9 = [
    sharedValue6,
    require("metro/01652__.js").ReduceMotion,
    animationOptions,
    sharedValue1,
    sharedValue6,
    sharedValue5,
    require("metro/01652__.js").interpolate,
    sharedValue3,
    require("metro/01652__.js").withSpring,
    sharedValue5,
    tmp5Result23,
    sharedValue7,
    sharedValue8,
    tmp5Result22,
    sharedValue,
  ];
  _require = undefined;
  c5 = undefined;
  c7 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  [tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68] = items9;
  function pnpm_ReanimatedSwipeableTsx8(arg0) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 0;
    }
    const obj = {
      mass: 2,
      damping: 1000,
      stiffness: 700,
      velocity: num,
      overshootClamping: true,
      reduceMotion: _undefined.System,
    };
    const merged = Object.assign(c1);
    if (0 === arg0) {
      let tmp3 = _undefined2.value < 0;
    } else {
      tmp3 = arg0 > 0;
    }
    if (0 === arg0) {
      if (tmp3) {
        let value2 = _undefined3.value;
      } else {
        value2 = _undefined4.value;
      }
    } else {
      if (tmp3) {
        value = _undefined4.value;
      } else {
        value = _undefined3.value;
      }
      const obj2 = {};
      const merged1 = Object.assign(obj);
      obj2.restDisplacementThreshold = 0.01;
      obj2.restSpeedThreshold = 0.01;
      let tmp13 = num;
      if (num) {
        items = [-value, value];
        tmp13 = _undefined5(num, items, [-1, 1]);
      }
      obj2.velocity = tmp13;
      const value3 = _undefined2.value;
      const items1 = [c8, c9, value3, arg0];
      _undefined = undefined;
      c1 = undefined;
      _undefined2 = undefined;
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
      c6.value = c7(arg0, obj, pnpm_ReanimatedSwipeableTsx7);
      let num4 = 0;
      if (!tmp2) {
        const _Math = Math;
        num4 = Math.sign(arg0);
      }
      const _Math2 = Math;
      c10.value = c7(Math.max(num4, 0), obj2);
      const _Math3 = Math;
      c11.value = c7(Math.max(-num4, 0), obj2);
      _undefined6(value3, arg0);
      const _Math4 = Math;
      _undefined2.value = Math.sign(arg0);
      c13.value = 0 !== _undefined2.value;
    }
  }
  const items10 = [tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68];
  pnpm_ReanimatedSwipeableTsx8.__closure = items10;
  pnpm_ReanimatedSwipeableTsx8.__workletHash = 17107200230771;
  pnpm_ReanimatedSwipeableTsx8.__initData = tmp54;
  const items11 = [
    sharedValue1,
    animationOptions,
    sharedValue3,
    sharedValue7,
    sharedValue5,
    sharedValue8,
    sharedValue6,
    tmp5Result22,
    tmp5Result23,
  ];
  const tmp5Result24 = c5(pnpm_ReanimatedSwipeableTsx8, items11);
  closure_19 = tmp5Result24;
  const obj9 = require("metro/01652__.js");
  const animatedRef = require("metro/01652__.js").useAnimatedRef();
  const tmp17Result = require("metro/01652__.js");
  const animatedRef1 = require("metro/01652__.js").useAnimatedRef();
  const tmp17Result9 = require("metro/01652__.js");
  const animatedRef2 = require("metro/01652__.js").useAnimatedRef();
  const items12 = [
    sharedValue7,
    require("metro/01652__.js").measure,
    animatedRef,
    animatedRef1,
    animatedRef2,
    sharedValue5,
    sharedValue6,
    sharedValue4,
  ];
  _require = undefined;
  c5 = undefined;
  [tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80] = items12;
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
      pageX = simultaneousWith.value;
    }
    let num3;
    const diff = simultaneousWith.value - pageX;
    if (tmp2 != null) {
      num3 = tmp2.pageX;
    }
    if (num3 == null) {
      num3 = 0;
    }
    c5.value = diff + num3;
  }
  const items13 = [tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80];
  pnpm_ReanimatedSwipeableTsx9.__closure = items13;
  pnpm_ReanimatedSwipeableTsx9.__workletHash = 14256505017394;
  pnpm_ReanimatedSwipeableTsx9.__initData = tmp73;
  const items14 = [animatedRef, animatedRef1, animatedRef2, sharedValue5, sharedValue6, sharedValue4];
  const tmp5Result25 = c5(pnpm_ReanimatedSwipeableTsx9, items14);
  const onActivate = tmp5Result25;
  const items15 = [
    tmp5Result24,
    tmp5Result25,
    sharedValue5,
    sharedValue6,
    sharedValue2,
    sharedValue7,
    sharedValue3,
    sharedValue1,
  ];
  const tmp83 = c7(() => {
    items = [closure_19, _mod1705.isWorkletRuntime, closure_19, _mod1705.scheduleOnUI, closure_18];
    [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
    const obj = { close: null, openLeft: null, openRight: null, reset: null };
    function close() {
      if (_undefined()) {
        _undefined2(0);
      } else {
        items = [c3, _undefined2];
        [tmp4, tmp5] = items;
        function pnpm_ReanimatedSwipeableTsx10() {
          _undefined(0);
        }
        const items1 = [tmp5];
        pnpm_ReanimatedSwipeableTsx10.__closure = items1;
        pnpm_ReanimatedSwipeableTsx10.__workletHash = 5083608474645;
        pnpm_ReanimatedSwipeableTsx10.__initData = tmp4;
        _undefined3(pnpm_ReanimatedSwipeableTsx10);
      }
    }
    let items1 = [tmp5, tmp6, tmp7, tmp8];
    close.__closure = items1;
    close.__workletHash = 13198666060105;
    close.__initData = tmp4;
    obj.close = close;
    const items2 = [
      closure_21,
      _mod1705.isWorkletRuntime,
      closure_23,
      closure_19,
      sharedValue5,
      _mod1705.scheduleOnUI,
      closure_20,
    ];
    [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
    function openLeft() {
      if (_undefined()) {
        _undefined2();
        _undefined3(_undefined4.value);
      } else {
        items = [c5, _undefined2, _undefined3, _undefined4];
        [tmp6, tmp7, tmp8, tmp9] = items;
        function pnpm_ReanimatedSwipeableTsx12() {
          _undefined();
          _undefined2(value.value);
        }
        const items1 = [tmp7, tmp8, tmp9];
        pnpm_ReanimatedSwipeableTsx12.__closure = items1;
        pnpm_ReanimatedSwipeableTsx12.__workletHash = 16079186854680;
        pnpm_ReanimatedSwipeableTsx12.__initData = tmp6;
        _undefined5(pnpm_ReanimatedSwipeableTsx12);
      }
    }
    const items3 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
    openLeft.__closure = items3;
    openLeft.__workletHash = 10330927957530;
    openLeft.__initData = tmp10;
    obj.openLeft = openLeft;
    const items4 = [
      closure_23,
      _mod1705.isWorkletRuntime,
      closure_23,
      closure_19,
      sharedValue6,
      _mod1705.scheduleOnUI,
      closure_22,
    ];
    c4 = undefined;
    c5 = undefined;
    [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items4;
    function openRight() {
      if (_undefined()) {
        _undefined2();
        _undefined3(-_undefined4.value);
      } else {
        items = [c5, _undefined2, _undefined3, _undefined4];
        [tmp6, tmp7, tmp8, tmp9] = items;
        function pnpm_ReanimatedSwipeableTsx14() {
          _undefined();
          _undefined2(-value.value);
        }
        const items1 = [tmp7, tmp8, tmp9];
        pnpm_ReanimatedSwipeableTsx14.__closure = items1;
        pnpm_ReanimatedSwipeableTsx14.__workletHash = 7359076028115;
        pnpm_ReanimatedSwipeableTsx14.__initData = tmp6;
        _undefined5(pnpm_ReanimatedSwipeableTsx14);
      }
    }
    const items5 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
    openRight.__closure = items5;
    openRight.__workletHash = 11969484706379;
    openRight.__initData = tmp17;
    obj.openRight = openRight;
    const items6 = [closure_24, c12, sharedValue7, c13, c11];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp24, tmp25, tmp26, tmp27, tmp28] = items6;
    function reset() {
      c0.value = 0;
      c1.value = 0;
      c2.value = 0;
      c3.value = 0;
    }
    const items7 = [tmp25, tmp26, tmp27, tmp28];
    reset.__closure = items7;
    reset.__workletHash = 7243544495167;
    reset.__initData = tmp24;
    obj.reset = reset;
    return obj;
  }, items15);
  closure_24 = tmp83;
  const items16 = [sharedValue4];
  const tmp17Result10 = require("metro/01652__.js");
  const tmp5Result26 = c5((nativeEvent) => {
    sharedValue4.value = nativeEvent.nativeEvent.layout.width;
  }, items16);
  const items17 = [animatedStyle, sharedValue7];
  _require = undefined;
  [tmp85, tmp86] = items17;
  function pnpm_ReanimatedSwipeableTsx17() {
    let pointerEvents = "auto";
    if (0 === _undefined.value) {
      pointerEvents = "none";
    }
    return { pointerEvents };
  }
  const items18 = [tmp86];
  pnpm_ReanimatedSwipeableTsx17.__closure = items18;
  pnpm_ReanimatedSwipeableTsx17.__workletHash = 5194842054553;
  pnpm_ReanimatedSwipeableTsx17.__initData = tmp85;
  animatedStyle = require("metro/01652__.js").useAnimatedStyle(pnpm_ReanimatedSwipeableTsx17);
  const items19 = [sharedValue3, animatedStyle, animatedRef, animatedRef1, renderLeftActions, sharedValue7, tmp83];
  const tmp17Result11 = require("metro/01652__.js");
  const tmp5Result27 = c5(() => {
    const obj = { ref: animatedRef1, style: null, children: null };
    items = [closure_33.leftActions, animatedStyle];
    obj.style = items;
    let tmp4Result;
    if (c4 != null) {
      tmp4Result = tmp4(sharedValue7, c13, closure_24);
    }
    const items1 = [tmp4Result, closure_2_10(_modDef1652.View, { ref: animatedRef })];
    obj.children = items1;
    return closure_2_11(_modDef1652.View, obj);
  }, items19);
  const items20 = [animatedStyle1, sharedValue8];
  _require = undefined;
  [tmp89, tmp90] = items20;
  function pnpm_ReanimatedSwipeableTsx18() {
    let pointerEvents = "auto";
    if (0 === _undefined.value) {
      pointerEvents = "none";
    }
    return { pointerEvents };
  }
  const items21 = [tmp90];
  pnpm_ReanimatedSwipeableTsx18.__closure = items21;
  pnpm_ReanimatedSwipeableTsx18.__workletHash = 585347980470;
  pnpm_ReanimatedSwipeableTsx18.__initData = tmp89;
  animatedStyle1 = require("metro/01652__.js").useAnimatedStyle(pnpm_ReanimatedSwipeableTsx18);
  const items22 = [sharedValue3, renderRightActions, animatedStyle1, animatedRef2, sharedValue8, tmp83];
  const items23 = [
    onDeactivate,
    sharedValue2,
    leftThreshold,
    sharedValue5,
    rightThreshold,
    sharedValue6,
    0.05,
    num4,
    sharedValue1,
    tmp5Result24,
  ];
  _require = undefined;
  c5 = undefined;
  c8 = undefined;
  [tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102] = items23;
  function pnpm_ReanimatedSwipeableTsx19(arg0) {
    ({ velocityX, translationX: c0.value } = arg0);
    let result = c1;
    if (c1 == null) {
      result = _undefined2.value / 2;
    }
    let result1 = c3;
    if (c3 == null) {
      result1 = _undefined4.value / 2;
    }
    const result2 = (value.value + c5 * velocityX) / c6;
    if (0 === requireToFail.value) {
      if (result2 > result) {
        let num4 = _undefined2.value;
      } else {
        num4 = 0;
        if (result2 < -result1) {
          num4 = -_undefined4.value;
        }
      }
    } else if (1 === iter2.value) {
      num4 = 0;
      if (result2 > -result) {
        num4 = _undefined2.value;
      }
    } else {
      num4 = 0;
      if (result2 < result1) {
        num4 = -_undefined4.value;
      }
    }
    block(num4, velocityX / c6);
  }
  const items24 = [tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102];
  pnpm_ReanimatedSwipeableTsx19.__closure = items24;
  pnpm_ReanimatedSwipeableTsx19.__workletHash = 4590926143740;
  pnpm_ReanimatedSwipeableTsx19.__initData = tmp93;
  const items25 = [
    tmp5Result24,
    num4,
    leftThreshold,
    sharedValue5,
    rightThreshold,
    sharedValue6,
    sharedValue1,
    sharedValue2,
  ];
  const tmp17Result12 = require("metro/01652__.js");
  const tmp5Result29 = c5(pnpm_ReanimatedSwipeableTsx19, items25);
  onDeactivate = tmp5Result29;
  const items26 = [closure_28, tmp5Result24];
  _require = undefined;
  [tmp104, tmp105] = items26;
  function pnpm_ReanimatedSwipeableTsx20() {
    _undefined(0);
  }
  const items27 = [tmp105];
  pnpm_ReanimatedSwipeableTsx20.__closure = items27;
  pnpm_ReanimatedSwipeableTsx20.__workletHash = 5179606853494;
  pnpm_ReanimatedSwipeableTsx20.__initData = tmp104;
  const items28 = [tmp5Result24];
  const tmp5Result30 = c5(pnpm_ReanimatedSwipeableTsx20, items28);
  closure_28 = tmp5Result30;
  const tmp5Result28 = c5(() => {
    const obj = { style: null, children: null };
    items = [closure_33.rightActions, animatedStyle1];
    obj.style = items;
    let tmp4Result;
    if (c5 != null) {
      tmp4Result = tmp4(sharedValue8, c13, closure_24);
    }
    const items1 = [tmp4Result, closure_2_10(_modDef1652.View, { ref: animatedRef2 })];
    obj.children = items1;
    return closure_2_11(_modDef1652.View, obj);
  }, items22);
  const sharedValue9 = require("metro/01652__.js").useSharedValue(false);
  const items29 = [onFinalize, sharedValue9];
  _require = undefined;
  [tmp108, tmp109] = items29;
  function pnpm_ReanimatedSwipeableTsx21() {
    c0.value = false;
  }
  const items30 = [tmp109];
  pnpm_ReanimatedSwipeableTsx21.__closure = items30;
  pnpm_ReanimatedSwipeableTsx21.__workletHash = 10493802017059;
  pnpm_ReanimatedSwipeableTsx21.__initData = tmp108;
  const items31 = [sharedValue9];
  const tmp5Result31 = c5(pnpm_ReanimatedSwipeableTsx21, items31);
  onFinalize = tmp5Result31;
  const items32 = [
    onUpdate,
    sharedValue2,
    sharedValue1,
    require("metro/11817__.js").SwipeDirection,
    sharedValue9,
    tmp6,
    require("metro/01705__.js").scheduleOnRN,
    tmp5Result,
    tmp5Result21,
  ];
  _require = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  _objectWithoutProperties = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119] = items32;
  function pnpm_ReanimatedSwipeableTsx22(translationX) {
    c0.value = translationX.translationX;
    if (-1 === enableTrackpadTwoFingerGesture.value) {
      let LEFT = _undefined2.RIGHT;
    } else if (1 === enableTrackpadTwoFingerGesture.value) {
      LEFT = _undefined2.LEFT;
    } else if (translationX.translationX > 0) {
      LEFT = _undefined2.RIGHT;
    } else {
      LEFT = _undefined2.LEFT;
    }
    if (!_undefined3.value) {
      tmp5.value = true;
      if (0 === enableTrackpadTwoFingerGesture.value) {
        if (c4) {
          _undefined5(tmp6, LEFT);
        }
      }
      if (c6) {
        _undefined5(tmp7, LEFT);
      }
    }
    requireToFail();
  }
  const items33 = [tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119];
  pnpm_ReanimatedSwipeableTsx22.__closure = items33;
  pnpm_ReanimatedSwipeableTsx22.__workletHash = 14916009606751;
  pnpm_ReanimatedSwipeableTsx22.__initData = tmp111;
  const items34 = [sharedValue9, tmp5Result, tmp6, sharedValue1, tmp5Result21, sharedValue2];
  const tmp5Result32 = c5(pnpm_ReanimatedSwipeableTsx22, items34);
  onUpdate = tmp5Result32;
  const items35 = [block, tmp5Result30, requireToFail, sharedValue1, sharedValue, simultaneousWith];
  const tmp17Result13 = require("metro/01652__.js");
  const tmp82Result = c7(() => {
    const obj = { shouldCancelWhenOutside: true, enabled, simultaneousWith, requireToFail, block, onActivate: null };
    items = [closure_31, c11, closure_28];
    [tmp, tmp2, tmp3] = items;
    function pnpm_ReanimatedSwipeableTsx23() {
      if (0 !== value.value) {
        enableTrackpadTwoFingerGesture();
      }
    }
    const items1 = [tmp2, tmp3];
    pnpm_ReanimatedSwipeableTsx23.__closure = items1;
    pnpm_ReanimatedSwipeableTsx23.__workletHash = 15434170266773;
    pnpm_ReanimatedSwipeableTsx23.__initData = tmp;
    obj.onActivate = pnpm_ReanimatedSwipeableTsx23;
    return obj;
  }, items35);
  const items36 = [
    block,
    num,
    num2,
    tmp,
    enabled,
    tmp5Result31,
    tmp5Result29,
    tmp5Result32,
    hitSlop,
    requireToFail,
    simultaneousWith,
    tmp5Result25,
  ];
  const tapGesture = require("transformTapProps").useTapGesture(tmp82Result);
  const tmp17Result14 = require("transformTapProps");
  const tmp82Result2 = c7(() => {
    let flag = c0;
    if (c0 == null) {
      flag = true;
    }
    const obj = {
      enabled: flag,
      enableTrackpadTwoFingerGesture,
      activeOffsetX: null,
      simultaneousWith,
      requireToFail,
      block,
      hitSlop,
      onActivate,
      onUpdate,
      onDeactivate,
      onFinalize,
    };
    items = [c3, c2];
    obj.activeOffsetX = items;
    return obj;
  }, items36);
  const items37 = [tmp83];
  const panGesture = require("transformTapProps").usePanGesture(tmp82Result2);
  c6(ref, () => closure_24, items37);
  const tmp17Result15 = require("transformTapProps");
  const items38 = [closure_32, sharedValue3, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp126, tmp127, tmp128] = items38;
  function pnpm_ReanimatedSwipeableTsx24() {
    const obj = { transform: null, pointerEvents: null };
    items = [{ translateX: _undefined.value }];
    obj.transform = items;
    let str = "box-only";
    if (0 === enableTrackpadTwoFingerGesture.value) {
      str = "auto";
    }
    obj.pointerEvents = str;
    return obj;
  }
  const items39 = [tmp127, tmp128];
  pnpm_ReanimatedSwipeableTsx24.__closure = items39;
  pnpm_ReanimatedSwipeableTsx24.__workletHash = 9021468125704;
  pnpm_ReanimatedSwipeableTsx24.__initData = tmp126;
  const animatedStyle2 = require("metro/01652__.js").useAnimatedStyle(pnpm_ReanimatedSwipeableTsx24, undefined);
  const obj10 = { gesture: panGesture, touchAction: "pan-y", children: null };
  const obj11 = {};
  let merged = Object.assign(tmp2);
  obj11.onLayout = tmp5Result26;
  const items40 = [container.container, containerStyle];
  obj11.style = items40;
  const items41 = [tmp5Result27(), tmp5Result28()];
  const obj12 = { gesture: tapGesture, touchAction: "pan-y", children: null };
  const obj13 = { style: null, children };
  const items42 = [animatedStyle2, childrenContainerStyle];
  obj13.style = items42;
  obj12.children = c10(_modDef1652.View, obj13);
  items41[2] = c10(require("GestureDetectorType").GestureDetector, obj12);
  obj11.children = items41;
  obj10.children = c11(_modDef1652.View, obj11);
  const tmp132 = c10(require("GestureDetectorType").GestureDetector, obj10);
  let tmp130Result = tmp132;
  if (testID) {
    const obj14 = { testID, children: tmp132 };
    tmp130Result = c10(c9, obj14);
  }
  return tmp130Result;
}
const container = StyleSheet.create(obj);

export default _default;
