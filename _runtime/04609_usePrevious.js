import noop from "noop";

let c0;
let closure_1;
({ useEffect: c0, useRef: closure_1 } = noop);

export const usePrevious = function usePrevious(arg0) {
  const callback = arg0;
  const tmp = callback2(undefined);
  callback2 = tmp;
  callback(() => {
    closure_1.current = closure_0;
  });
  return tmp.current;
};