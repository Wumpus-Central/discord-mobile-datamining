// _runtime/metro/07117__.js
import _mod19 from "00019__.js";
import _mod7069 from "07069__.js";

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod7069.useRecyclerViewContext();
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
