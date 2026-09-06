// _runtime/metro/06805__.js
import noop from "00019__.js";

({ useEffect: c2, useRef: c3 } = noop);

export const useReactiveSharedValue = (INITIAL_CONTAINER_HEIGHT) => {
  const tmp = closure_3(null);
  const tmp2 = closure_3(null);
  _require = tmp2;
  let tmp3 = INITIAL_CONTAINER_HEIGHT;
  if (INITIAL_CONTAINER_HEIGHT) {
    tmp3 = typeof INITIAL_CONTAINER_HEIGHT === "object";
  }
  if (tmp3) {
    tmp3 = "value" in INITIAL_CONTAINER_HEIGHT;
  }
  if (!tmp3) {
    if (null === tmp2.current) {
      tmp.current = INITIAL_CONTAINER_HEIGHT;
      if (typeof INITIAL_CONTAINER_HEIGHT === "object") {
        require("cancelAnimation");
        let obj = {};
        const merged = Object.assign(INITIAL_CONTAINER_HEIGHT);
        let mutable = obj.makeMutable(obj);
      } else {
        mutable = require("cancelAnimation").makeMutable(INITIAL_CONTAINER_HEIGHT);
        const obj3 = require("cancelAnimation");
      }
      tmp2.current = mutable;
    } else if (tmp.current !== INITIAL_CONTAINER_HEIGHT) {
      tmp2.current.value = INITIAL_CONTAINER_HEIGHT;
    }
  }
  closure_2(
    () => () => {
      if (ref.current) {
        ref(dependencyMap[1]).cancelAnimation(tmp.current);
        const obj = ref(dependencyMap[1]);
      }
    },
    [],
  );
  let current = tmp2.current;
  if (current == null) {
    current = INITIAL_CONTAINER_HEIGHT;
  }
  return current;
};
