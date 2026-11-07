// === Module 5700: ? ===

// Module 5700
import _mod19 from "module_19" /* 19 */;
import _mod5652 from "module_5652" /* 5652 */;

_mod19.useCallback;

export () => {
  const recyclerViewContext = _mod5652.useRecyclerViewContext();
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