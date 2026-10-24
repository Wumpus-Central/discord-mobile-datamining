// _runtime/metro/05566__.js
import _mod19 from "00019__.js";
import _mod5518 from "05518__.js";

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod5518.useRecyclerViewContext();
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
