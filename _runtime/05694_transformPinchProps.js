// _runtime/05694_transformPinchProps.js
import ComposedGestureName from "05663_ComposedGestureName.js";
import isGestureEnabled from "05672_isGestureEnabled.js";
import useGesture from "05687_useGesture.js";

require = arg1;
const dependencyMap = arg6;
function transformPinchProps(arg0) {
  arg0.changeEventCalculator = isGestureEnabled.getChangeEventCalculator(diffCalculator);
  arg0.fillInDefaultValues = fillInDefaultValues;
  return arg0;
}
function diffCalculator(scale, scale2) {
  scale = scale.scale;
  if (scale2) {
    let scaleChange = scale / scale2.scale;
  } else {
    scaleChange = scale;
  }
  return { scaleChange };
}
diffCalculator.__closure = {};
diffCalculator.__workletHash = 7517335332069;
diffCalculator.__initData = { code: "function diffCalculator_Pnpm_usePinchGestureTs1(current,previous){return{scaleChange:previous?current.scale/previous.scale:current.scale};}" };
function fillInDefaultValues(arg0) {
  arg0.scaleChange = 1;
}
fillInDefaultValues.__closure = {};
fillInDefaultValues.__workletHash = 10393435493424;
fillInDefaultValues.__initData = { code: "function fillInDefaultValues_Pnpm_usePinchGestureTs2(event){event.scaleChange=1;}" };
const map = new Map();
let closure_6 = {};
arg5.usePinchGesture = function usePinchGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_6;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp, map, transformPinchProps);
  const obj = isGestureEnabled;
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.Pinch, clonedAndRemappedConfig);
};