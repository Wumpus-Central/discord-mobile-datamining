// === Module 5363: ? ===

// Module 5363
import _mod19 from "module_19" /* 19 */;
import _mod5315 from "module_5315" /* 5315 */;

_mod19.useCallback;

export () => {
  const recyclerViewContext = _mod5315.useRecyclerViewContext();
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