// _runtime/03808_useShallow.js
import noop from "noop";


export const useShallow = function useShallow(arg0) {
  let closure_0 = arg0;
  let closure_1 = noop.useRef(undefined);
  return (arg0) => {
    let current = callback(arg0);
    if (obj.shallow(ref.current, current)) {
      current = tmp.current;
    } else {
      tmp.current = current;
    }
    return current;
  };
};