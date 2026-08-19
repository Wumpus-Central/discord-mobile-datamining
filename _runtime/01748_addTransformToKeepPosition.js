// === Module 1748: addTransformToKeepPosition ===

// Module 1748 (addTransformToKeepPosition)
import TransitionType from "TransitionType" /* 1710 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

require = arg1;
function addTransformToKeepPosition(style, style2, headerResult, arg3) {
  const entries = Object.entries(style2);
  while (tmp2 !== undefined) {
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    if (undefined !== tmp7.transform) {
      let transform = tmp7.transform;
      let arr = transform.unshift(headerResult);
    } else {
      let items = [headerResult];
      tmp7.transform = items;
    }
    let _parseInt = parseInt;
    let result = parseInt(tmp6) / 2;
    if (arg3) {
      let _Math = Math;
      let bound = Math.min(result, 49);
    } else {
      bound = result + 50;
    }
    let _HermesInternal = HermesInternal;
    style["" + bound] = tmp7;
    continue;
  }
  tmp2 = entries[Symbol.iterator]();
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
      let tmp9 = callback(tmp7, 2);
      let first = tmp9[0];
      let obj = {};
      let merged = Object.assign(style[first]);
      obj.opacity = tmp9[1];
      style[first] = obj;
      continue;
    }
    tmp6 = map[Symbol.iterator]();
  })(obj.style);
  return obj;
};