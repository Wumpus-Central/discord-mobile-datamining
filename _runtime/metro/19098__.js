// _runtime/metro/19098__.js
import noop from "00019__.js";

function useMemoOne(fn, items) {
  closure_0 = fn;
  let inputs = items;
  const ref1 = noop.useRef(noop.useState(() => ({ inputs, result: closure_0() }))[0]);
  if (!ref.current) {
    inputs = items;
    if (items) {
      inputs = ref1.current.inputs;
    }
    if (inputs) {
      const inputs1 = ref1.current.inputs;
      let flag = false;
      if (items.length === inputs1.length) {
        let num = 0;
        flag = true;
        if (0 < items.length) {
          flag = false;
          while (items[num] === inputs1[num]) {
            let sum = num + 1;
            num = sum;
            flag = true;
            if (sum >= items.length) {
              break;
            }
          }
        }
      }
      inputs = flag;
    }
    if (!Boolean(inputs)) {
      let obj2 = { inputs: items, result: fn() };
    }
    items = [obj2];
    const effect = noop.useEffect(() => {
      ref.current = false;
      ref1.current = obj2;
    }, items);
    return obj2.result;
  }
  obj2 = ref1.current;
  ref = noop.useRef(true);
}
function useCallbackOne(arg0, items) {
  closure_0 = arg0;
  return useMemoOne(() => closure_0, items);
}

export const useCallback = useCallbackOne;
export { useCallbackOne };
export const useMemo = useMemoOne;
export { useMemoOne };
