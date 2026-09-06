// _runtime/metro/01788__.js
import runOnRuntime from "../01680_runOnRuntime.js";
import _slicedToArray from "00032__.js";

require = fn;
const noop = fn(19);
({ useEffect: c3, useState: closure_4 } = noop);

export const useSharedValue = function useSharedValue(UNDETERMINED) {
  closure_0 = UNDETERMINED;
  const first = _slicedToArray(
    closure_4(() => runOnRuntime.makeMutable(closure_0)),
    1,
  )[0];
  const items = [first];
  closure_3(
    () => () => {
      closure_0(first[3]).cancelAnimation(closure_1_1);
    },
    items,
  );
  return first;
};
