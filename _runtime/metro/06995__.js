// === Module 6995: ? ===

// Module 6995
import _mod19 from "module_19" /* 19 */;
import _mod6947 from "module_6947" /* 6947 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  let obj = _mod6947;
  const recyclerViewContext = obj.useRecyclerViewContext();
  obj = { getMappingKey: null };
  const items = [recyclerViewContext];
  obj.getMappingKey = useCallback((arg0, arg1) => {
    let tmp = arg0;
    if (recyclerViewContext) {
      tmp = arg1;
    }
    return tmp;
  }, items);
  return obj;
};