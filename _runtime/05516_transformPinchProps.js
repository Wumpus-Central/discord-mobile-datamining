// _runtime/05516_transformPinchProps.js
import ComposedGestureName from "05482_ComposedGestureName.js";
import resolveInternalConfigProps from "05491_resolveInternalConfigProps.js";
import _mod5508 from "metro/05508__.js";

require = arg1;
const dependencyMap = arg6;
function transformPinchProps(arg0) {
  arg0.changeEventCalculator = resolveInternalConfigProps.getChangeEventCalculator(diffCalculator);
  arg0.fillInDefaultValues = fillInDefaultValues;
  return arg0;
}
const items = [
  {
    code: "(function diffCalculator_Pnpm_usePinchGestureTs1(current,previous){return{scaleChange:previous?current.scale/previous.scale:current.scale};})",
  },
];
[tmp2] = items;
function diffCalculator(scale, scale2) {
  scale = scale.scale;
  if (scale2) {
    let scaleChange = scale / scale2.scale;
  } else {
    scaleChange = scale;
  }
  return { scaleChange };
}
diffCalculator.__workletHash = 797719799396;
diffCalculator.__initData = tmp2;
const items1 = [{ code: "(function fillInDefaultValues_Pnpm_usePinchGestureTs2(event){event.scaleChange=1;})" }];
[tmp3] = items1;
function fillInDefaultValues(arg0) {
  arg0.scaleChange = 1;
}
fillInDefaultValues.__workletHash = 16688050895505;
fillInDefaultValues.__initData = tmp3;
const map = new Map();
let closure_6 = {};

export function usePinchGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_6;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp, map, transformPinchProps);
  return _mod5508.useGesture(ComposedGestureName.SingleGestureName.Pinch, clonedAndRemappedConfig);
}
