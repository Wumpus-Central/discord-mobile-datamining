// === Module 5872: ? ===

// Module 5872
import _mod19 from "module_19" /* 19 */;
import _mod5824 from "module_5824" /* 5824 */;

_mod19.useCallback;

export () => {
  const recyclerViewContext = _mod5824.useRecyclerViewContext();
  const obj2 = { getMappingKey: null };
  items = [recyclerViewContext];
  obj2.getMappingKey = useCallback((arg0, arg1) => {
    let tmp = arg0;
    if (recyclerViewContext) {
      tmp = arg1;
    }
    return tmp;
  }, items);
  return obj2;
}