// _runtime/04650_react.js
import react from "00019_react.js";

let _window;
let map;
({ useRef: _window, useEffect: map } = react);
let deps = Symbol("UNINITIALIZED");

export const useDisposableMemo = function useDisposableMemo(fn2, _temp, items, current2) {
  const obj = { value: "r", deps, pendingDisposal: null };
  const tmp2 = React(obj);
  const _window = tmp2;
  const obj2 = React(_temp);
  obj2.current = _temp;
  const tmp3 = React(current2);
  const tmp = deps;
  deps = tmp3;
  tmp3.current = current2;
  if (tmp2.current.deps === deps) {
    if (tmp2.current.deps !== tmp) {
      if (tmp3.current) {
        tmp3.current.current = undefined;
      }
      try {
        obj2.current(tmp2.current.value);
      } catch (err) {}
    }
    tmp2.current = { value: fn2(), deps: items, pendingDisposal: null };
    const obj3 = { value: fn2(), deps: items, pendingDisposal: null };
    if (tmp3.current) {
      tmp3.current.current = tmp2.current.value;
    }
  } else {
    let num = 0;
  }
  map(() => {
    let ref;
    let ref2;
    let ref3;
    return () => {
      if (ref3.current) {
        ref3.current.current = undefined;
      }
      try {
        ref2.current(ref.current.value);
      } catch (err) {}
    };
  }, []);
  return tmp2.current.value;
};
