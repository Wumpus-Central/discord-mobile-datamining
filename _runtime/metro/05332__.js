// === Module 5332: ? ===

// Module 5332
import _mod19 from "module_19" /* 19 */;
import _mod5284 from "module_5284" /* 5284 */;

_mod19.useCallback;

export () => {
  const recyclerViewContext = _mod5284.useRecyclerViewContext();
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