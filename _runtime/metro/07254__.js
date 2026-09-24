// === Module 7254: ? ===

// Module 7254
import _mod19 from "module_19" /* 19 */;
import _mod7206 from "module_7206" /* 7206 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod7206.useRecyclerViewContext();
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