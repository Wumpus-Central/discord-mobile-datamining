// _runtime/06924_useMappingHelper.js
import noop from "00019_noop.js";

noop.useCallback;

export const useMappingHelper = () => {
  let obj = recyclerViewContext(6876);
  recyclerViewContext = obj.useRecyclerViewContext();
  obj = {
    getMappingKey: useCallback((arg0, arg1) => {
      let tmp = arg0;
      if (recyclerViewContext) {
        tmp = arg1;
      }
      return tmp;
    }, items),
  };
  items = [recyclerViewContext];
  return obj;
};
