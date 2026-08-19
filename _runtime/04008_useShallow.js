// _runtime/04008_useShallow.js
import noop from "00019_noop.js";


export const useShallow = function useShallow(arg0) {
  closure_0 = arg0;
  closure_1 = noop.useRef(undefined);
  return (arg0) => {
    let current = callback(arg0);
    if (obj.shallow(ref.current, current)) {
      current = ref.current;
    } else {
      ref.current = current;
    }
    return current;
  };
};