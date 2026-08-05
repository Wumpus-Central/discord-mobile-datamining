// _runtime/05459_useReactiveSharedValue.js
import noop from "noop";

let c3;
let obj1;
({ useEffect: obj1, useRef: c3 } = noop);

export const useReactiveSharedValue = (obj) => {
  const tmp = callback2(null);
  const tmp2 = callback2(null);
  const require = tmp2;
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
        obj = require(1606) /* cancelAnimation */;
        obj = {};
        const merged = Object.assign(obj);
        let mutable = obj.makeMutable(obj);
      } else {
        mutable = require(1606) /* cancelAnimation */.makeMutable(obj);
        const obj3 = require(1606) /* cancelAnimation */;
      }
      tmp2.current = mutable;
    } else if (tmp.current !== obj) {
      tmp2.current.value = obj;
    }
  }
  callback(() => () => {
    if (ref.current) {
      outer1_0(outer1_1[1]).cancelAnimation(tmp.current);
      const obj = outer1_0(outer1_1[1]);
    }
  }, []);
  let current = tmp2.current;
  if (current == null) {
    current = obj;
  }
  return current;
};