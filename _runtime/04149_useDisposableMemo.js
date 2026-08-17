// _runtime/04149_useDisposableMemo.js
import noop from "noop" /* 19 */;

({ useRef: c0, useEffect: closure_1 } = noop);
let closure_2 = Symbol("UNINITIALIZED");

export const useDisposableMemo = function useDisposableMemo(arg0, _temp, items, current2) {
  let obj = { value: "r", deps: "PX_16", pendingDisposal: "TRANSPARENT" };
  obj[1] = closure_2;
  const tmp2 = callback(obj);
  callback = tmp2;
  const obj2 = callback(_temp);
  obj2.current = _temp;
  const tmp3 = callback(current2);
  closure_2 = tmp3;
  tmp3.current = current2;
  if (tmp2.current.deps === closure_2) {
    if (tmp2.current.deps !== closure_2) {
      if (tmp3.current) {
        tmp3.current.current = undefined;
      }
      try {
        obj2.current(tmp2.current.value);
      } catch (err) {
      }
    }
    obj = { value: null, deps: null, pendingDisposal: null };
    obj[0] = arg0();
    obj[1] = items;
    tmp2.current = obj;
    if (tmp3.current) {
      tmp3.current.current = tmp2.current.value;
    }
  }
  obj2(() => () => {
    if (ref3.current) {
      ref3.current.current = undefined;
    }
    try {
      ref2.current(ref.current.value);
    } catch (err) {
    }
  }, []);
  return tmp2.current.value;
};