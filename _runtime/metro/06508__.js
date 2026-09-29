// _runtime/metro/06508__.js
import _mod19 from "00019__.js";
import _mod6460 from "06460__.js";

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6460.useRecyclerViewContext();
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
