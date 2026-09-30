// === Module 6538: ? ===

// Module 6538
import _mod19 from "module_19" /* 19 */;
import _mod6490 from "module_6490" /* 6490 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6490.useRecyclerViewContext();
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