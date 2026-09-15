// === Module 1731: ? ===

// Module 1731
import TransitionType from "TransitionType" /* 1693 */;
import _slicedToArray from "module_32" /* 32 */;

require = arg1;
function addTransformToKeepPosition(style, style2, _default, arg3) {
  const entries = Object.entries(style2);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    if (undefined !== tmp7.transform) {
      let transform = tmp7.transform;
      let arr = transform.unshift(_default);
    } else {
      let items = [_default];
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
  obj.translateX = "" + translateX.translateX + "px";
  obj.translateY = "" + translateX.translateY + "px";
  obj.scale = "" + translateX.scaleX + "," + translateX.scaleY;
  const obj2 = { name, style: {}, duration: 300 };
  addTransformToKeepPosition(obj2.style, structuredCloneResult.style, obj, true);
  addTransformToKeepPosition(obj2.style, structuredClone(TransitionType.AnimationsData[translateX.entering]).style, { translateX: "0px", translateY: "0px", scale: "1,1" }, false);
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
      [first, obj.opacity] = tmp7;
      let obj = {};
      let merged = Object.assign(style[first]);
      style[first] = obj;
      continue;
    }
    tmp6 = map[Symbol.iterator]();
  })(obj2.style);
  return obj2;
};