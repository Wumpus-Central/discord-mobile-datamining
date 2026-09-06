// === Module 6745: transformPinchProps ===

// Module 6745 (transformPinchProps)
import ComposedGestureName from "ComposedGestureName" /* 6714 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6723 */;
import _mod6738 from "module_6738" /* 6738 */;

require = arg1;
const dependencyMap = arg6;
function transformPinchProps(arg0) {
  arg0.changeEventCalculator = DEFAULT_PROPS_TRANSFORMER.getChangeEventCalculator(diffCalculator);
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

export const usePinchGesture = function usePinchGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_6;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map, transformPinchProps);
  return _mod6738.useGesture(ComposedGestureName.SingleGestureName.Pinch, clonedAndRemappedConfig);
};