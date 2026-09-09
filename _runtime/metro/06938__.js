// === Module 6938: ? ===

// Module 6938
import _mod19 from "module_19" /* 19 */;
import _mod6890 from "module_6890" /* 6890 */;

_mod19.useCallback;

export const useMappingHelper = () => {
  let obj = _mod6890;
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