// === Module 5572: ? ===

// Module 5572
import _mod19 from "module_19" /* 19 */;
import _mod5524 from "module_5524" /* 5524 */;

_mod19.useCallback;

export () => {
  const recyclerViewContext = _mod5524.useRecyclerViewContext();
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
}