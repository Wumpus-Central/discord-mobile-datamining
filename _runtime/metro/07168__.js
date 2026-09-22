// === Module 7168: ? ===

// Module 7168
import _mod19 from "module_19" /* 19 */;
import _mod7120 from "module_7120" /* 7120 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod7120.useRecyclerViewContext();
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