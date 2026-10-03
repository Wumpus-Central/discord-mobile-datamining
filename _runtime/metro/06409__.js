// === Module 6409: ? ===

// Module 6409
import _mod19 from "module_19" /* 19 */;
import _mod6361 from "module_6361" /* 6361 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6361.useRecyclerViewContext();
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