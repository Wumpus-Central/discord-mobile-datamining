// _runtime/07107_useRecyclingState.js
import closure_2 from "_slicedToArray" /* 7041 */;
import noop from "noop" /* 19 */;
import { useLayoutState } from "07059_useLayoutState.js";

const require = arg1;
({ useCallback: c3, useMemo: c4, useRef: c5 } = noop);

export const useRecyclingState = function useRecyclingState(arg0, arg1, arg2) {
  const _require = arg0;
  dependencyMap = arg2;
  let tmp = callback4(undefined);
  const callback = tmp;
  const obj = _useLayoutState;
  [r10015, tmp3] = callback(_useLayoutState.useLayoutState(0), 2);
  const callback2 = tmp3;
  callback3(() => {
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
    callback2((fn) => {
      let tmp = fn;
      if (typeof fn === "function") {
        tmp = fn(ref.current);
      }
      if (tmp !== ref.current) {
        tmp2.current = tmp;
        arg1((arg0) => arg0 + 1, arg1);
      }
    }, items)
  ];
  return items1;
};