// _runtime/05735_useMappingHelper.js
require("noop").useCallback;

export const useMappingHelper = () => {
  let obj = recyclerViewContext(5687);
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