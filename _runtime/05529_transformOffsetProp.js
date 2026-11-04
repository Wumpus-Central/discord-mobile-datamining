// _runtime/05529_transformOffsetProp.js
import reanimatedWrapper from "05472_reanimatedWrapper.js";
import ComposedGestureName from "05490_ComposedGestureName.js";
import resolveInternalConfigProps from "05499_resolveInternalConfigProps.js";
import _mod5516 from "metro/05516__.js";
import _slicedToArray from "metro/00032__.js";

require = arg1;
function transformOffsetProp(iter, activeOffsetX) {
  iter = iter[activeOffsetX];
  if (undefined !== iter) {
    let combined1 = globalThis;
    const _Array = Array;
    if (Array.isArray(iter)) {
      const _HermesInternal2 = HermesInternal;
      let combined = "" + activeOffsetX + "Start";
      iter[combined] = iter[0];
      const _HermesInternal3 = HermesInternal;
      combined1 = "" + activeOffsetX + "End";
      iter = iter[1];
      iter[combined1] = iter;
      delete tmp2[tmp];
    } else {
      combined = require;
      const Reanimated = reanimatedWrapper.Reanimated;
      let isSharedValueResult;
      if (Reanimated != null) {
        isSharedValueResult = Reanimated.isSharedValue(iter);
      }
      if (!isSharedValueResult) {
        let str2 = "End";
        if (iter < 0) {
          str2 = "Start";
        }
        const _HermesInternal = HermesInternal;
        iter["" + activeOffsetX + str2] = iter;
      }
    }
    const combinedResult = combined(5499);
    [tmp8, tmp9] = combined(5499).splitSingleOffset(iter.value);
    iter["" + activeOffsetX + "Start"] = tmp8;
    iter["" + activeOffsetX + "End"] = tmp9;
    const tmp7 = _slicedToArray(combined(5499).splitSingleOffset(iter.value), 2);
  }
}
function transformPanProps(iter) {
  transformOffsetProp(iter, "activeOffsetY");
  transformOffsetProp(iter, "failOffsetX");
  transformOffsetProp(iter, "failOffsetY");
  transformOffsetProp(iter, "activeOffsetX");
  iter.changeEventCalculator = resolveInternalConfigProps.getChangeEventCalculator(diffCalculator);
  iter.fillInDefaultValues = fillInDefaultValues;
  return iter;
}
const items = [
  ["minDistance", "minDist"],
  ["averageTouches", "avgTouches"],
];
const map = new Map(items);
const items1 = [
  {
    code: "(function diffCalculator_Pnpm_usePanGestureTs1(current,previous){return{changeX:previous?current.translationX-previous.translationX:current.translationX,changeY:previous?current.translationY-previous.translationY:current.translationY};})",
  },
];
[tmp3] = items1;
function diffCalculator(translationX, translationX2) {
  translationX = translationX.translationX;
  if (translationX2) {
    let diff = translationX - translationX2.translationX;
  } else {
    diff = translationX;
  }
  const obj = { changeX: diff, changeY: null };
  const translationY = translationX.translationY;
  if (translationX2) {
    let diff1 = translationY - translationX2.translationY;
  } else {
    diff1 = translationY;
  }
  obj.changeY = diff1;
  return obj;
}
diffCalculator.__workletHash = 15159965948275;
diffCalculator.__initData = tmp3;
const items2 = [
  { code: "(function fillInDefaultValues_Pnpm_usePanGestureTs2(event){event.changeX=0;event.changeY=0;})" },
];
[tmp4] = items2;
function fillInDefaultValues(arg0) {
  arg0.changeX = 0;
  arg0.changeY = 0;
}
fillInDefaultValues.__workletHash = 1036941275160;
fillInDefaultValues.__initData = tmp4;
let closure_8 = {};

export function usePanGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_8;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp, map, transformPanProps);
  return _mod5516.useGesture(ComposedGestureName.SingleGestureName.Pan, clonedAndRemappedConfig);
}
