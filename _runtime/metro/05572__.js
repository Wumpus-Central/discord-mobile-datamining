// _runtime/metro/05572__.js
import _mod19 from "00019__.js";
import _mod5524 from "05524__.js";

_mod19.useCallback;

export () => {
  const recyclerViewContext = _mod5524.useRecyclerViewContext();
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
}