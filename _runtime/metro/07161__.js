// === Module 7161: ? ===

// Module 7161
import _mod19 from "module_19" /* 19 */;
import _mod7113 from "module_7113" /* 7113 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod7113.useRecyclerViewContext();
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