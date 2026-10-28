// === Module 5602: ? ===

// Module 5602
import _mod19 from "module_19" /* 19 */;
import _mod5554 from "module_5554" /* 5554 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod5554.useRecyclerViewContext();
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