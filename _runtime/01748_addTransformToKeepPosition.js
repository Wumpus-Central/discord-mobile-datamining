// _runtime/01748_addTransformToKeepPosition.js
import _slicedToArray from "_slicedToArray";
import { TransitionType } from "01710_TransitionType.js";

const require = arg1;
function addTransformToKeepPosition(style, style2, props, arg3) {
  let tmp6;
  let tmp7;
  const entries = Object.entries(style2);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let tmp8 = tmp7;
    if (undefined !== tmp7.transform) {
      let tmp10 = tmp7;
      let transform = tmp8.transform;
      let arr = transform.unshift(props);
    } else {
      let tmp9 = tmp7;
      let items = [props];
      tmp8.transform = items;
    }
    let _parseInt = parseInt;
    let tmp12 = tmp6;
    let result = parseInt(tmp6) / 2;
    if (arg3) {
      let _Math = Math;
      let tmp16 = result;
      let bound = Math.min(result, 49);
    } else {
      let tmp14 = result;
      bound = result + 50;
    }
    let _HermesInternal = HermesInternal;
    let tmp17 = tmp7;
    style["" + bound] = tmp8;
    continue;
  }
}

export const EntryExitTransition = function EntryExitTransition(name, translateX) {
  let obj = { translateX: null, translateY: null, scale: null };
  const structuredCloneResult = structuredClone(TransitionType.AnimationsData[translateX.exiting]);
  obj[0] = "" + translateX.translateX + "px";
  obj[1] = "" + translateX.translateY + "px";
  obj[2] = "" + translateX.scaleX + "," + translateX.scaleY;
  obj = { name, style: {}, duration: 300 };
  addTransformToKeepPosition(obj.style, structuredCloneResult.style, obj, true);
  addTransformToKeepPosition(obj.style, structuredClone(TransitionType.AnimationsData[translateX.entering]).style, { translateX: "0px", translateY: "0px", scale: "1,1" }, false);
  (function hideComponentBetweenAnimations(style) {
    const map = new Map();
    if (undefined === style[0].opacity) {
      const result = map.set(48, 1);
      const result1 = map.set(49, 0);
    }
    if (undefined === style[50].opacity) {
      const result2 = map.set(50, 0);
      const result3 = map.set(51, 1);
    }
    while (tmp6 !== undefined) {
      let tmp8 = callback;
      let tmp9 = callback(tmp7, 2);
      let first = tmp9[0];
      let obj = {};
      let tmp11 = obj;
      let merged = Object.assign(style[first]);
      obj.opacity = tmp9[1];
      style[first] = obj;
      continue;
    }
  })(obj.style);
  return obj;
};