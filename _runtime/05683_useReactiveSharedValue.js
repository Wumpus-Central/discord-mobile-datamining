// === Module 5683: useReactiveSharedValue ===

// Module 5683 (useReactiveSharedValue)
import noop from "noop" /* 19 */;

({ useEffect: obj1, useRef: c3 } = noop);

export const useReactiveSharedValue = (obj) => {
  const tmp = callback2(null);
  const tmp2 = callback2(null);
  const _require = tmp2;
  let tmp3 = obj;
  if (obj) {
    tmp3 = typeof obj === "object";
  }
  if (tmp3) {
    tmp3 = "value" in obj;
  }
  if (!tmp3) {
    if (null === tmp2.current) {
      tmp.current = obj;
      if (typeof obj === "object") {
        obj = _require(1654);
        obj = {};
        const merged = Object.assign(obj);
        let mutable = obj.makeMutable(obj);
      } else {
        mutable = _require(1654).makeMutable(obj);
        const obj3 = _require(1654);
      }
      tmp2.current = mutable;
    } else if (tmp.current !== obj) {
      tmp2.current.value = obj;
    }
  }
  callback(() => () => {
    if (ref.current) {
      closure_1_0(closure_1_1[1]).cancelAnimation(tmp.current);
      const obj = closure_1_0(closure_1_1[1]);
    }
  }, []);
  let current = tmp2.current;
  if (current == null) {
    current = obj;
  }
  return current;
};