// === Module 5564: ? ===

// Module 5564
import _mod19 from "module_19" /* 19 */;
import _mod5516 from "module_5516" /* 5516 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod5516.useRecyclerViewContext();
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