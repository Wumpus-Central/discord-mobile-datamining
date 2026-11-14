// _runtime/metro/01894__.js
import _mod1830 from "01830__.js";
import _slicedToArray from "00032__.js";

require = fn;
const noop = fn(19);
({ useEffect: c3, useState: closure_4 } = noop);

export function useSharedValue(UNDETERMINED) {
  closure_0 = UNDETERMINED;
  const first = _slicedToArray(
    closure_4(() => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        tmpResult = tmp();
      }
      return _mod1830.makeMutable(tmpResult);
    }),
    1,
  )[0];
  items = [first];
  closure_3(
    () => () => {
      closure_0(first[3]).cancelAnimation(closure_1_1);
    },
    items,
  );
  return first;
}
