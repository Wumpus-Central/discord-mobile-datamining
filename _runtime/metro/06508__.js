// === Module 6508: ? ===

// Module 6508
import _mod19 from "module_19" /* 19 */;
import _mod6460 from "module_6460" /* 6460 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6460.useRecyclerViewContext();
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