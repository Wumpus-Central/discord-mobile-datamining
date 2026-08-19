// _runtime/01806_useSharedValue.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";

const require = fn;
({ useEffect: c3, useState: c4 } = noop);

export const useSharedValue = function useSharedValue(UNDETERMINED) {
  closure_0 = UNDETERMINED;
  const first = callback(callback3(() => UNDETERMINED(first[2]).makeMutable(UNDETERMINED)), 1)[0];
  const items = [first];
  callback2(() => () => {
    UNDETERMINED(first[3]).cancelAnimation(closure_1);
  }, items);
  return first;
};