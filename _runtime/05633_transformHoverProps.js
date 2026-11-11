// === Module 5633: transformHoverProps ===

// Module 5633 (transformHoverProps)
import ComposedGestureName from "ComposedGestureName" /* 5597 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5606 */;
import _mod5623 from "module_5623" /* 5623 */;

require = arg1;
const dependencyMap = arg6;
function transformHoverProps(arg0) {
  arg0.changeEventCalculator = resolveInternalConfigProps.getChangeEventCalculator(diffCalculator);
  arg0.fillInDefaultValues = fillInDefaultValues;
  return arg0;
}
const items = [{ code: "(function diffCalculator_Pnpm_useHoverGestureTs1(current,previous){return{changeX:previous?current.x-previous.x:0,changeY:previous?current.y-previous.y:0};})" }];
[tmp2] = items;
function diffCalculator(arg0, arg1) {
  let num = 0;
  if (arg1) {
    num = arg0.x - arg1.x;
  }
  const obj = { changeX: num, changeY: null };
  let num2 = 0;
  if (arg1) {
    num2 = arg0.y - arg1.y;
  }
  obj.changeY = num2;
  return obj;
}
diffCalculator.__workletHash = 12913184752331;
diffCalculator.__initData = tmp2;
const items1 = [{ code: "(function fillInDefaultValues_Pnpm_useHoverGestureTs2(event){event.changeX=0;event.changeY=0;})" }];
[tmp3] = items1;
function fillInDefaultValues(arg0) {
  arg0.changeX = 0;
  arg0.changeY = 0;
}
fillInDefaultValues.__workletHash = 8758316487265;
fillInDefaultValues.__initData = tmp3;
const items2 = [["effect", "hoverEffect"]];
const map = new Map(items2);
let closure_6 = {};

export function useHoverGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_6;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp, map, transformHoverProps);
  return _mod5623.useGesture(ComposedGestureName.SingleGestureName.Hover, clonedAndRemappedConfig);
}