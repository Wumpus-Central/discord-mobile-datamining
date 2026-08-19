// === Module 6469: transformHoverProps ===

// Module 6469 (transformHoverProps)
import ComposedGestureName from "ComposedGestureName" /* 6436 */;
import isGestureEnabled from "isGestureEnabled" /* 6445 */;
import useGesture from "useGesture" /* 6460 */;

require = arg1;
const dependencyMap = arg6;
function transformHoverProps(arg0) {
  arg0.changeEventCalculator = isGestureEnabled.getChangeEventCalculator(diffCalculator);
  arg0.fillInDefaultValues = fillInDefaultValues;
  return arg0;
}
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
  obj[1] = num2;
  return obj;
}
diffCalculator.__closure = {};
diffCalculator.__workletHash = 622993324586;
diffCalculator.__initData = { code: "function diffCalculator_Pnpm_useHoverGestureTs1(current,previous){return{changeX:previous?current.x-previous.x:0,changeY:previous?current.y-previous.y:0};}" };
function fillInDefaultValues(arg0) {
  arg0.changeX = 0;
  arg0.changeY = 0;
}
fillInDefaultValues.__closure = {};
fillInDefaultValues.__workletHash = 11545520927040;
fillInDefaultValues.__initData = { code: "function fillInDefaultValues_Pnpm_useHoverGestureTs2(event){event.changeX=0;event.changeY=0;}" };
const items = [["effect", "hoverEffect"]];
const map = new Map(items);
let closure_6 = {};
arg5.useHoverGesture = function useHoverGesture(closure_6) {
  let tmp = closure_6;
  if (closure_6 === undefined) {
    tmp = closure_6;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp, map, transformHoverProps);
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.Hover, clonedAndRemappedConfig);
};