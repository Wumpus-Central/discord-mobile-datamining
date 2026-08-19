// === Module 6989: useReactiveSharedValue ===

// Module 6989 (useReactiveSharedValue)
import noop from "noop" /* 19 */;

({ useEffect: obj1, useRef: c3 } = noop);

export const useReactiveSharedValue = (INITIAL_CONTAINER_HEIGHT) => {
  const tmp = callback2(null);
  const tmp2 = callback2(null);
  const _require = tmp2;
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
        _require(1654);
        let obj = {};
        const merged = Object.assign(INITIAL_CONTAINER_HEIGHT);
        let mutable = obj.makeMutable(obj);
      } else {
        mutable = _require(1654).makeMutable(INITIAL_CONTAINER_HEIGHT);
        const obj3 = _require(1654);
      }
      tmp2.current = mutable;
    } else if (tmp.current !== INITIAL_CONTAINER_HEIGHT) {
      tmp2.current.value = INITIAL_CONTAINER_HEIGHT;
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
    current = INITIAL_CONTAINER_HEIGHT;
  }
  return current;
};