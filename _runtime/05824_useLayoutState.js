// _runtime/05824_useLayoutState.js
import closure_2 from "metro/05806__slicedToArray.js";
import noop from "00019_noop.js";

const require = arg1;
({ useState: c3, useCallback: c4 } = noop);

export const useLayoutState = function useLayoutState(arg0) {
  const tmp = callback(callback2(arg0), 2);
  const _require = tmp[1];
  recyclerViewContext = _require(recyclerViewContext[2]).useRecyclerViewContext();
  const items = [tmp[0], ];
  const items1 = [recyclerViewContext];
  items[1] = callback3((arg0, arg1) => {
    const callback = arg0;
    callback((arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        tmpResult = tmp(arg0);
      }
      return tmpResult;
    });
    if (!arg1) {
      if (recyclerViewContext != null) {
        obj.layout();
      }
      obj = recyclerViewContext;
    }
  }, items1);
  return items;
};