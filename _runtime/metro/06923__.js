// _runtime/metro/06923__.js
import _mod6875 from "06875__.js";
import _slicedToArray from "06857__.js";

require = fn;
const noop = fn(19);
({ useCallback: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);

export const useRecyclingState = function useRecyclingState(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg2;
  let tmp = hasOwnProperty(undefined);
  [r10015, tmp3] = _slicedToArray(_mod6875.useLayoutState(0), 2);
  React4(() => {
    let tmpResult = closure_0;
    if (typeof closure_0 === "function") {
      tmpResult = tmp();
    }
    closure_2.current = tmpResult;
    if (closure_1 != null) {
      tmp3();
    }
  }, arg1);
  const items = [tmp3];
  const items1 = [
    tmp.current,
    React3((fn, arg1) => {
      let tmp = fn;
      if (typeof fn === "function") {
        tmp = fn(ref.current);
      }
      if (tmp !== ref.current) {
        tmp2.current = tmp;
        arg1((arg0) => arg0 + 1, arg1);
      }
    }, items),
  ];
  return items1;
};
