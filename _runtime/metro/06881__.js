// === Module 6881: ? ===

// Module 6881
import _mod19 from "module_19" /* 19 */;
import _mod6833 from "module_6833" /* 6833 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6833.useRecyclerViewContext();
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