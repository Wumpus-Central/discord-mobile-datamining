// _runtime/06747_transformHoverProps.js
import ComposedGestureName from "06714_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "06723_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6738 from "metro/06738__.js";

require = arg1;
const dependencyMap = arg6;
function transformHoverProps(arg0) {
  arg0.changeEventCalculator = DEFAULT_PROPS_TRANSFORMER.getChangeEventCalculator(diffCalculator);
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
  obj.changeY = num2;
  return obj;
}
diffCalculator.__closure = {};
diffCalculator.__workletHash = 622993324586;
diffCalculator.__initData = {
  code: "function diffCalculator_Pnpm_useHoverGestureTs1(current,previous){return{changeX:previous?current.x-previous.x:0,changeY:previous?current.y-previous.y:0};}",
};
function fillInDefaultValues(arg0) {
  arg0.changeX = 0;
  arg0.changeY = 0;
}
fillInDefaultValues.__closure = {};
fillInDefaultValues.__workletHash = 11545520927040;
fillInDefaultValues.__initData = {
  code: "function fillInDefaultValues_Pnpm_useHoverGestureTs2(event){event.changeX=0;event.changeY=0;}",
};
const items = [["effect", "hoverEffect"]];
const map = new Map(items);
let closure_6 = {};

export const useHoverGesture = function useHoverGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_6;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map, transformHoverProps);
  return _mod6738.useGesture(ComposedGestureName.SingleGestureName.Hover, clonedAndRemappedConfig);
};
