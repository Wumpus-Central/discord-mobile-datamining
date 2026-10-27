// === Module 5567: ? ===

// Module 5567
import _mod19 from "module_19" /* 19 */;
import _mod5519 from "module_5519" /* 5519 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod5519.useRecyclerViewContext();
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