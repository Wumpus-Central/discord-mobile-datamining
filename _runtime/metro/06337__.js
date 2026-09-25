// === Module 6337: ? ===

// Module 6337
import _mod19 from "module_19" /* 19 */;
import _mod6289 from "module_6289" /* 6289 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6289.useRecyclerViewContext();
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