// === Module 6416: ? ===

// Module 6416
import _mod19 from "module_19" /* 19 */;
import _mod6368 from "module_6368" /* 6368 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  const recyclerViewContext = _mod6368.useRecyclerViewContext();
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