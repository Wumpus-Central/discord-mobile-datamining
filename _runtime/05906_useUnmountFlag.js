// === Module 5906: useUnmountFlag ===

// Module 5906 (useUnmountFlag)
import noop from "noop" /* 19 */;

({ useRef: c0, useLayoutEffect: closure_1 } = noop);

export const useUnmountFlag = () => {
  const tmp = callback(false);
  callback = tmp;
  callback2(() => {
    closure_0.current = false;
    return () => {
      closure_0.current = true;
    };
  }, []);
  return tmp;
};