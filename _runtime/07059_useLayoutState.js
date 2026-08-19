// _runtime/07059_useLayoutState.js
import _slicedToArray from "metro/07041__slicedToArray.js";
import noop from "00019_noop.js";

const require = fn;
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
        recyclerViewContext.layout();
      }
    }
  }, items1);
  return items;
};