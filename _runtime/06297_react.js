// === Module 6297: react ===

// Module 6297 (react)
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);

export const useReactiveSharedValue = (INITIAL_CONTAINER_HEIGHT) => {
  let closure_0;
  const tmp = closure_3(null);
  const tmp2 = closure_3(null);
  _require = tmp2;
  const tmp3 = INITIAL_CONTAINER_HEIGHT && typeof INITIAL_CONTAINER_HEIGHT === "object" && "value" in INITIAL_CONTAINER_HEIGHT;
  if (!tmp3) {
    if (null === tmp2.current) {
      let mutable;
      tmp.current = INITIAL_CONTAINER_HEIGHT;
      if (typeof INITIAL_CONTAINER_HEIGHT === "object") {
        let obj = {};
        const makeMutable = require("module_1643").makeMutable;
        require("module_1643");
        const merged = Object.assign(INITIAL_CONTAINER_HEIGHT);
        mutable = makeMutable(obj);
      } else {
        const obj2 = require("module_1643");
        mutable = obj2.makeMutable(INITIAL_CONTAINER_HEIGHT);
      }
      tmp2.current = mutable;
    } else if (tmp.current !== INITIAL_CONTAINER_HEIGHT) {
      tmp2.current.value = INITIAL_CONTAINER_HEIGHT;
    }
  }
  closure_2(() => {
    let ref;
    return () => {
      if (ref.current) {
        const obj = ref(dependencyMap[1]);
        obj.cancelAnimation(tmp.current);
      }
    };
  }, []);
  let current = tmp2.current;
  if (current == null) {
    current = INITIAL_CONTAINER_HEIGHT;
  }
  return current;
};