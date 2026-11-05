// === Module 5527: transformRotationProps ===

// Module 5527 (transformRotationProps)
import ComposedGestureName from "ComposedGestureName" /* 5492 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5501 */;
import _mod5518 from "module_5518" /* 5518 */;

require = arg1;
const dependencyMap = arg6;
function transformRotationProps(arg0) {
  arg0.changeEventCalculator = resolveInternalConfigProps.getChangeEventCalculator(diffCalculator);
  arg0.fillInDefaultValues = fillInDefaultValues;
  return arg0;
}
const items = [{ code: "(function diffCalculator_Pnpm_useRotationGestureTs1(current,previous){return{rotationChange:previous?current.rotation-previous.rotation:current.rotation};})" }];
[tmp2] = items;
function diffCalculator(rotation, rotation2) {
  rotation = rotation.rotation;
  if (rotation2) {
    let rotationChange = rotation - rotation2.rotation;
  } else {
    rotationChange = rotation;
  }
  return { rotationChange };
}
diffCalculator.__workletHash = 4592561053326;
diffCalculator.__initData = tmp2;
const items1 = [{ code: "(function fillInDefaultValues_Pnpm_useRotationGestureTs2(event){event.rotationChange=0;})" }];
[tmp3] = items1;
function fillInDefaultValues(arg0) {
  arg0.rotationChange = 0;
}
fillInDefaultValues.__workletHash = 4459233048852;
fillInDefaultValues.__initData = tmp3;
const map = new Map();
let closure_6 = {};

export function useRotationGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_6;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp, map, transformRotationProps);
  return _mod5518.useGesture(ComposedGestureName.SingleGestureName.Rotation, clonedAndRemappedConfig);
}