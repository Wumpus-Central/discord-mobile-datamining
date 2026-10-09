// === Module 6602: ? ===

// Module 6602
import _mod19 from "module_19" /* 19 */;
import _mod6554 from "module_6554" /* 6554 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6554.useRecyclerViewContext();
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