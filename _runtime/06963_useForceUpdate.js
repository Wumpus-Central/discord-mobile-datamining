// _runtime/06963_useForceUpdate.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import react from "00019_react.js";

let c2;
let map;
({ useCallback: map, useState: c2 } = react);

export default function useForceUpdate() {
  let closure_0 = _slicedToArray(React2({}), 2)[1];
  return map(() => closure_0({}), []);
}
