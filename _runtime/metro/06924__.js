// === Module 6924: ? ===

// Module 6924
import _mod19 from "module_19" /* 19 */;
import _mod6876 from "module_6876" /* 6876 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  let obj = _mod6876;
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