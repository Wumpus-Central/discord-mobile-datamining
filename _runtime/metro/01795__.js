// === Module 1795: ? ===

// Module 1795
import startMapper from "startMapper" /* 1687 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

let c3;
let closure_4;
({ useEffect: c3, useState: closure_4 } = react);

export const useSharedValue = function useSharedValue(point) {
  let closure_0 = point;
  const first = _slicedToArray(closure_4(() => {
    const obj = startMapper;
    return obj.makeMutable(point);
  }), 1)[0];
  const items = [first];
  closure_3(() => () => {
    const obj = point(first[3]);
    obj.cancelAnimation(closure_1_1);
  }, items);
  return first;
};