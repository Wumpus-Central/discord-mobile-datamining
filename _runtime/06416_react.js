// _runtime/06416_react.js
import react from "00019_react.js";
import react2 from "06368_react.js";

const useCallback = react.useCallback;

export const useMappingHelper = () => {
  let items;
  const obj = react2;
  const recyclerViewContext = obj.useRecyclerViewContext();
  const obj2 = {
    getMappingKey: useCallback((arg0, arg1) => {
      let tmp = arg0;
      if (recyclerViewContext) {
        tmp = arg1;
      }
      return tmp;
    }, items),
  };
  items = [recyclerViewContext];
  return obj2;
};
