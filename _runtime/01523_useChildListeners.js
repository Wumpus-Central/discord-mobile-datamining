// _runtime/01523_useChildListeners.js
import noop from "noop";


export const useChildListeners = function useChildListeners() {
  current = current.useRef({ action: [], focus: [] }).current;
  const items = [current];
  return {
    listeners: current,
    addListener: current.useCallback((arg0, arg1) => {
      const table = arg0;
      let closure_1 = arg1;
      let arr = table[arg0];
      arr = arr.push(arg1);
      let c2 = false;
      return () => {
        const index = table[table].indexOf(closure_1);
        let tmp4 = !c2;
        if (!c2) {
          tmp4 = index > -1;
        }
        if (tmp4) {
          c2 = true;
          table[tmp2].splice(index, 1);
          const arr2 = table[tmp2];
        }
      };
    }, items)
  };
};