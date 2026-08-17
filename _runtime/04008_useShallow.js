// _runtime/04008_useShallow.js
import closure_2 from "00019_noop.js";


export const useShallow = function useShallow(arg0) {
  closure_0 = arg0;
  closure_1 = React.useRef(undefined);
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