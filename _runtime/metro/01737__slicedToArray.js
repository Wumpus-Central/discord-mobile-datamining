// _runtime/metro/01737__slicedToArray.js
import TransitionType from "../01699_TransitionType.js";
import _slicedToArray from "00032__slicedToArray.js";

let map;

function addTransformToKeepPosition(style, style2, _default, arg3) {
  let tmp6;
  let tmp7;
  const entries = Object.entries(style2);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let bound;
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
      bound = Math.min(result, 49);
    } else {
      bound = result + 50;
    }
    let _HermesInternal = HermesInternal;
    style["" + bound] = tmp7;
    continue;
  }
}

export const EntryExitTransition = function EntryExitTransition(name, translateX) {
  function hideComponentBetweenAnimations(style) {
    let tmp11;
    map = new Map();
    const tmp = map;
    if (undefined === style[0].opacity) {
      const result = map.set(48, 1);
      const result1 = map.set(49, 0);
    }
    if (undefined === style[50].opacity) {
      const result2 = map.set(50, 0);
      const result3 = map.set(51, 1);
    }
    const tmp6 = tmp[Symbol.iterator]();
    while (tmp6 !== undefined) {
      let tmp9 = _slicedToArray(tmp7, 2);
      let first = tmp9[0];
      let obj = { opacity: tmp11 };
      tmp11 = tmp9[1];
      let merged = Object.assign(style[first]);
      style[first] = obj;
      continue;
    }
  }
  let obj = {
    translateX: "" + translateX.translateX + "px",
    translateY: "" + translateX.translateY + "px",
    scale: "" + translateX.scaleX + "," + translateX.scaleY,
  };
  const structuredCloneResult = structuredClone(TransitionType.AnimationsData[translateX.exiting]);
  const obj2 = { name, style: {}, duration: 300 };
  const structuredCloneResult1 = structuredClone(TransitionType.AnimationsData[translateX.entering]);
  addTransformToKeepPosition(obj2.style, structuredCloneResult.style, obj, true);
  addTransformToKeepPosition(
    obj2.style,
    structuredCloneResult1.style,
    { translateX: "0px", translateY: "0px", scale: "1,1" },
    false,
  );
  hideComponentBetweenAnimations(obj2.style);
  return obj2;
};
