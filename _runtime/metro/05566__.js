// === Module 5566: ? ===

// Module 5566
import _mod19 from "module_19" /* 19 */;
import _mod5518 from "module_5518" /* 5518 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod5518.useRecyclerViewContext();
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