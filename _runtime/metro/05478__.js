// === Module 5478: ? ===

// Module 5478
import _mod5479 from "module_5479" /* 5479 */;
import _slicedToArray from "module_5460" /* 5460 */;

require = fn;
const noop = fn(19);
({ useState: c3, useCallback: closure_4 } = noop);

export const useLayoutState = function useLayoutState(arg0) {
  const tmp = _slicedToArray(React3(arg0), 2);
  closure_0 = tmp[1];
  const recyclerViewContext = _mod5479.useRecyclerViewContext();
  const items = [tmp[0], ];
  const items1 = [recyclerViewContext];
  items[1] = React4((arg0, arg1) => {
    closure_0 = arg0;
    closure_0((arg0) => {
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