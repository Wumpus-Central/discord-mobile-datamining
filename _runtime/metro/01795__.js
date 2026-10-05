// _runtime/metro/01795__.js
import startMapper from "../01687_startMapper.js";
import _slicedToArray from "00032__slicedToArray.js";
import react from "../00019_react.js";

let c3;
let closure_4;
({ useEffect: c3, useState: closure_4 } = react);

export const useSharedValue = function useSharedValue(point) {
  let closure_0 = point;
  const first = _slicedToArray(
    closure_4(() => {
      const obj = startMapper;
      return obj.makeMutable(point);
    }),
    1,
  )[0];
  const items = [first];
  closure_3(
    () => () => {
      const obj = point(first[3]);
      obj.cancelAnimation(closure_1_1);
    },
    items,
  );
  return first;
};
