// === Module 5408: ? ===

// Module 5408
import _mod5409 from "module_5409" /* 5409 */;
import _slicedToArray from "module_5390" /* 5390 */;

require = fn;
const noop = fn(19);
({ useState: c3, useCallback: closure_4 } = noop);

export function useLayoutState(arg0) {
  const tmp = _slicedToArray(React3(arg0), 2);
  closure_0 = tmp[1];
  const recyclerViewContext = _mod5409.useRecyclerViewContext();
  items = [tmp[0], ];
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
}