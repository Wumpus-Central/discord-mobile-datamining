// === Module 6604: ? ===

// Module 6604
import _mod19 from "module_19" /* 19 */;
import _mod6556 from "module_6556" /* 6556 */;

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