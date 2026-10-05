// _runtime/metro/06232__.js
import ComposedGestureName from "../06199_ComposedGestureName.js";
import maybeExtractNativeEvent from "../06208_maybeExtractNativeEvent.js";
import _mod6223 from "06223__.js";

function transformHoverProps(arg0) {
  const obj = maybeExtractNativeEvent;
  arg0.changeEventCalculator = obj.getChangeEventCalculator(diffCalculator);
  arg0.fillInDefaultValues = fillInDefaultValues;
  return arg0;
}
function diffCalculator(arg0, arg1) {
  let num2;
  let num = 0;
  if (arg1) {
    num = arg0.x - arg1.x;
  }
  const obj = { changeX: num, changeY: num2 };
  num2 = 0;
  if (arg1) {
    num2 = arg0.y - arg1.y;
  }
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

export const useHoverGesture = function useHoverGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_6;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformHoverProps);
  const obj2 = _mod6223;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Hover, clonedAndRemappedConfig);
};
