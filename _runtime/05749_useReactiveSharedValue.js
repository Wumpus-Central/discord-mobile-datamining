// _runtime/05749_useReactiveSharedValue.js
import noop from "00019_noop.js";
import { cancelAnimation } from "01654_cancelAnimation.js";

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
        obj = cancelAnimation;
        obj = {};
        const merged = Object.assign(obj);
        let mutable = obj.makeMutable(obj);
      } else {
        mutable = require("01654_cancelAnimation.js").makeMutable(obj);
        const obj3 = cancelAnimation;
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