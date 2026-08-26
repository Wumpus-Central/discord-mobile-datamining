// _runtime/05694_transformPanProps.js
import ComposedGestureName from "05658_ComposedGestureName.js";
import isGestureEnabled from "05667_isGestureEnabled.js";
import useGesture from "05682_useGesture.js";

require = arg1;
const dependencyMap = arg6;
function transformPanProps(activeOffsetY) {
  let str = activeOffsetY.activeOffsetY;
  if (undefined === str) {
    let str12 = activeOffsetY.failOffsetX;
    if (undefined === str12) {
      let str23 = activeOffsetY.failOffsetY;
      if (undefined === str23) {
        let str34 = activeOffsetY.activeOffsetX;
        if (undefined === str34) {
          activeOffsetY.changeEventCalculator = isGestureEnabled.getChangeEventCalculator(diffCalculator);
          activeOffsetY.fillInDefaultValues = fillInDefaultValues;
          return activeOffsetY;
        } else {
          let combined = globalThis;
          const _Array4 = Array;
          if (Array.isArray(str34)) {
            const _HermesInternal11 = HermesInternal;
            activeOffsetY["" + "activeOffsetX" + "Start"] = str34[0];
            const _HermesInternal12 = HermesInternal;
            combined = "" + "activeOffsetX" + "End";
            activeOffsetY[combined] = str34[1];
            str34 = "activeOffsetX";
            delete tmp[tmp2];
          } else {
            if (obj4.maybeUnpackValue(`activeOffsetX`) >= 0) {
              const _HermesInternal10 = HermesInternal;
              activeOffsetY["" + "activeOffsetX" + "End"] = str34;
            }
            obj4 = isGestureEnabled;
          }
          activeOffsetY["" + "activeOffsetX" + "Start"] = str34;
        }
      } else {
        let combined1 = globalThis;
        const _Array3 = Array;
        if (Array.isArray(str23)) {
          const _HermesInternal8 = HermesInternal;
          activeOffsetY["" + "failOffsetY" + "Start"] = str23[0];
          const _HermesInternal9 = HermesInternal;
          combined1 = "" + "failOffsetY" + "End";
          activeOffsetY[combined1] = str23[1];
          str23 = "failOffsetY";
          delete tmp[tmp2];
        } else {
          if (obj3.maybeUnpackValue(`failOffsetY`) >= 0) {
            const _HermesInternal7 = HermesInternal;
            activeOffsetY["" + "failOffsetY" + "End"] = str23;
          }
          obj3 = isGestureEnabled;
        }
        activeOffsetY["" + "failOffsetY" + "Start"] = str23;
      }
    } else {
      let combined2 = globalThis;
      const _Array2 = Array;
      if (Array.isArray(str12)) {
        const _HermesInternal5 = HermesInternal;
        activeOffsetY["" + "failOffsetX" + "Start"] = str12[0];
        const _HermesInternal6 = HermesInternal;
        combined2 = "" + "failOffsetX" + "End";
        activeOffsetY[combined2] = str12[1];
        str12 = "failOffsetX";
        delete tmp[tmp2];
      } else {
        if (obj2.maybeUnpackValue(`failOffsetX`) >= 0) {
          const _HermesInternal4 = HermesInternal;
          activeOffsetY["" + "failOffsetX" + "End"] = str12;
        }
        obj2 = isGestureEnabled;
      }
      activeOffsetY["" + "failOffsetX" + "Start"] = str12;
    }
  } else {
    let combined3 = globalThis;
    const _Array = Array;
    if (Array.isArray(str)) {
      const _HermesInternal2 = HermesInternal;
      activeOffsetY["" + "activeOffsetY" + "Start"] = str[0];
      const _HermesInternal3 = HermesInternal;
      combined3 = "" + "activeOffsetY" + "End";
      activeOffsetY[combined3] = str[1];
      str = "activeOffsetY";
      delete tmp[tmp2];
    } else {
      if (obj.maybeUnpackValue(`activeOffsetY`) >= 0) {
        const _HermesInternal = HermesInternal;
        activeOffsetY["" + "activeOffsetY" + "End"] = str;
      }
      obj = isGestureEnabled;
    }
    activeOffsetY["" + "activeOffsetY" + "Start"] = str;
  }
}
const items = [["minDistance", "minDist"], ["averageTouches", "avgTouches"]];
const map = new Map(items);
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
  obj[1] = diff1;
  return obj;
}
diffCalculator.__closure = {};
diffCalculator.__workletHash = 4211053881938;
diffCalculator.__initData = { code: "function diffCalculator_Pnpm_usePanGestureTs1(current,previous){return{changeX:previous?current.translationX-previous.translationX:current.translationX,changeY:previous?current.translationY-previous.translationY:current.translationY};}" };
function fillInDefaultValues(arg0) {
  arg0.changeX = 0;
  arg0.changeY = 0;
}
fillInDefaultValues.__closure = {};
fillInDefaultValues.__workletHash = 12221662243929;
fillInDefaultValues.__initData = { code: "function fillInDefaultValues_Pnpm_usePanGestureTs2(event){event.changeX=0;event.changeY=0;}" };
let closure_6 = {};
arg5.usePanGesture = function usePanGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_6;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp, map, transformPanProps);
  const obj = isGestureEnabled;
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.Pan, clonedAndRemappedConfig);
};