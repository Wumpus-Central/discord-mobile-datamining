// === Module 6603: ? ===

// Module 6603
import _mod19 from "module_19" /* 19 */;
import _mod6555 from "module_6555" /* 6555 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6555.useRecyclerViewContext();
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