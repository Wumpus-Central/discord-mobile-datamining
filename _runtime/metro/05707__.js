// === Module 5707: ? ===

// Module 5707
import noop from "module_19" /* 19 */;

({ useRef: closure_0, useLayoutEffect: closure_1 } = noop);

export () => {
  const tmp = React(false);
  closure_0 = tmp;
  duration(() => {
    closure_0.current = false;
    return () => {
      closure_1_0.current = true;
    };
  }, []);
  return tmp;
}