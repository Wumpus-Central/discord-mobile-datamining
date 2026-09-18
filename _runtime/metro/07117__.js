// === Module 7117: ? ===

// Module 7117
import _mod19 from "module_19" /* 19 */;
import _mod7069 from "module_7069" /* 7069 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod7069.useRecyclerViewContext();
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