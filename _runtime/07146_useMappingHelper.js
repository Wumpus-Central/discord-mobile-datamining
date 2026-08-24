// === Module 7146: useMappingHelper ===

// Module 7146 (useMappingHelper)
import noop from "noop" /* 19 */;

noop.useCallback;

export const useMappingHelper = () => {
  let obj = recyclerViewContext(7098);
  recyclerViewContext = obj.useRecyclerViewContext();
  obj = {
    getMappingKey: useCallback((arg0, arg1) => {
      let tmp = arg0;
      if (recyclerViewContext) {
        tmp = arg1;
      }
      return tmp;
    }, items)
  };
  items = [recyclerViewContext];
  return obj;
};