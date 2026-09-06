// === Module 6805: ? ===

// Module 6805
import noop from "module_19" /* 19 */;

({ useEffect: c2, useRef: c3 } = noop);

export const useReactiveSharedValue = (current) => {
  const tmp = closure_3(null);
  const tmp2 = closure_3(null);
  _require = tmp2;
  let tmp3 = current;
  if (current) {
    tmp3 = typeof current === "object";
  }
  if (tmp3) {
    tmp3 = "value" in current;
  }
  if (!tmp3) {
    if (null === tmp2.current) {
      tmp.current = current;
      if (typeof current === "object") {
        require("cancelAnimation");
        let obj = {};
        const merged = Object.assign(current);
        let mutable = obj.makeMutable(obj);
      } else {
        mutable = require("cancelAnimation").makeMutable(current);
        const obj3 = require("cancelAnimation");
      }
      tmp2.current = mutable;
    } else if (tmp.current !== current) {
      tmp2.current.value = current;
    }
  }
  closure_2(() => () => {
    if (ref.current) {
      ref(dependencyMap[1]).cancelAnimation(tmp.current);
      const obj = ref(dependencyMap[1]);
    }
  }, []);
  current = tmp2.current;
  return current;
};