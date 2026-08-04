import noop from "noop";

let c3;
let obj1;
({ useEffect: obj1, useRef: c3 } = noop);

export const useReactiveSharedValue = (current) => {
  const tmp = callback2(null);
  const tmp2 = callback2(null);
  const require = tmp2;
  let tmp3 = current;
  if (current) {
    tmp3 = typeof current === "ay";
  }
  if (tmp3) {
    tmp3 = "value" in current;
  }
  if (!tmp3) {
    if (null === tmp2.current) {
      tmp.current = current;
      if (typeof current === "ay") {
        let obj = require(1606) /* cancelAnimation */;
        obj = {};
        const merged = Object.assign(current);
        let mutable = obj.makeMutable(obj);
      } else {
        mutable = require(1606) /* cancelAnimation */.makeMutable(current);
        const obj3 = require(1606) /* cancelAnimation */;
      }
      tmp2.current = mutable;
    } else if (tmp.current !== current) {
      tmp2.current.value = current;
    }
  }
  callback(() => () => {
    if (ref.current) {
      outer1_0(outer1_1[1]).cancelAnimation(tmp.current);
      const obj = outer1_0(outer1_1[1]);
    }
  }, []);
  current = tmp2.current;
  return current;
};