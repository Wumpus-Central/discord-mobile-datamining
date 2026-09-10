// === Module 6974: ? ===

// Module 6974
import _mod19 from "module_19" /* 19 */;
import _mod6926 from "module_6926" /* 6926 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  let obj = _mod6926;
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