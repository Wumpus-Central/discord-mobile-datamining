// _runtime/06746_transformRotationProps.js
import ComposedGestureName from "06714_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "06723_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6738 from "metro/06738__.js";

require = arg1;
const dependencyMap = arg6;
function transformRotationProps(arg0) {
  arg0.changeEventCalculator = DEFAULT_PROPS_TRANSFORMER.getChangeEventCalculator(diffCalculator);
  arg0.fillInDefaultValues = fillInDefaultValues;
  return arg0;
}
function diffCalculator(rotation, rotation2) {
  rotation = rotation.rotation;
  if (rotation2) {
    let rotationChange = rotation - rotation2.rotation;
  } else {
    rotationChange = rotation;
  }
  return { rotationChange };
}
diffCalculator.__closure = {};
diffCalculator.__workletHash = 14071129947311;
diffCalculator.__initData = {
  code: "function diffCalculator_Pnpm_useRotationGestureTs1(current,previous){return{rotationChange:previous?current.rotation-previous.rotation:current.rotation};}",
};
function fillInDefaultValues(arg0) {
  arg0.rotationChange = 0;
}
fillInDefaultValues.__closure = {};
fillInDefaultValues.__workletHash = 2470118803733;
fillInDefaultValues.__initData = {
  code: "function fillInDefaultValues_Pnpm_useRotationGestureTs2(event){event.rotationChange=0;}",
};
const map = new Map();
let closure_6 = {};

export const useRotationGesture = function useRotationGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_6;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(
    tmp,
    map,
    transformRotationProps,
  );
  return _mod6738.useGesture(ComposedGestureName.SingleGestureName.Rotation, clonedAndRemappedConfig);
};
