// _runtime/00335_useRefEffect.js
import react from "00019_react.js";

let _window;
let map;
({ useCallback: _window, useRef: map } = react);

export default function useRefEffect(arg0) {
  const _window = arg0;
  const items = [arg0];
  map = map(undefined);
  return React((arg0) => {
    if (ref.current) {
      ref.current();
      ref.current = undefined;
    }
    if (null != arg0) {
      ref.current = closure_0(arg0);
    }
  }, items);
}
