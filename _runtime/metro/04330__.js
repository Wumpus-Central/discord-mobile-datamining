// === Module 4330: ? ===

// Module 4330
import noop from "module_19" /* 19 */;

({ useRef: closure_0, useEffect: closure_1 } = noop);
let deps = Symbol("UNINITIALIZED");

export const useDisposableMemo = function useDisposableMemo(fn2, _temp, items, current2) {
  let obj = { value: "r", deps, pendingDisposal: null };
  const tmp2 = React(obj);
  closure_0 = tmp2;
  const obj2 = React(_temp);
  obj2.current = _temp;
  const tmp3 = React(current2);
  deps = tmp3;
  tmp3.current = current2;
  if (tmp2.current.deps === deps) {
    if (tmp2.current.deps !== deps) {
      if (tmp3.current) {
        tmp3.current.current = undefined;
      }
      try {
        obj2.current(tmp2.current.value);
      } catch (err) {
      }
    }
    obj = { value: fn2(), deps: items, pendingDisposal: null };
    tmp2.current = obj;
    if (tmp3.current) {
      tmp3.current.current = tmp2.current.value;
    }
  }
  framebus(() => () => {
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