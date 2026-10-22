// === Module 5552: ? ===

// Module 5552
import _mod19 from "module_19" /* 19 */;
import _mod5504 from "module_5504" /* 5504 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod5504.useRecyclerViewContext();
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