// _runtime/metro/06604__.js
import _mod19 from "00019__.js";
import _mod6556 from "06556__.js";

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6556.useRecyclerViewContext();
  const obj2 = { getMappingKey: null };
  const items = [recyclerViewContext];
  obj2.getMappingKey = useCallback((arg0, arg1) => {
    let tmp = arg0;
    if (recyclerViewContext) {
      tmp = arg1;
    }
    return tmp;
  }, items);
  return obj2;
};
