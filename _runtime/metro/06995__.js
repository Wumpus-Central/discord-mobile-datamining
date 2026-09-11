// _runtime/metro/06995__.js
import _mod19 from "00019__.js";
import _mod6947 from "06947__.js";

_mod19.useCallback;

export const useMappingHelper = () => {
  let obj = _mod6947;
  const recyclerViewContext = obj.useRecyclerViewContext();
  obj = { getMappingKey: null };
  const items = [recyclerViewContext];
  obj.getMappingKey = useCallback((arg0, arg1) => {
    let tmp = arg0;
    if (recyclerViewContext) {
      tmp = arg1;
    }
    return tmp;
  }, items);
  return obj;
};
