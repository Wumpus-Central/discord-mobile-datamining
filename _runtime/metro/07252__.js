// === Module 7252: ? ===

// Module 7252
import _mod19 from "module_19" /* 19 */;
import _mod7204 from "module_7204" /* 7204 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod7204.useRecyclerViewContext();
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