// _runtime/00335_useRefEffect.js
import noop from "noop" /* 19 */;

({ useCallback: c0, useRef: closure_1 } = noop);

export default function useRefEffect(arg0) {
  const callback = arg0;
  callback2 = callback2(undefined);
  const items = [arg0];
  return callback((arg0) => {
    if (ref.current) {
      obj.current();
      obj.current = undefined;
    }
    if (null != arg0) {
      obj.current = callback(arg0);
    }
  }, items);
};