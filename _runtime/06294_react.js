// _runtime/06294_react.js
import react from "00019_react.js";

let current;

let _window;
let c2;
let c3;
let map;
({ useCallback: _window, useEffect: map, useLayoutEffect: c2, useRef: c3 } = react);

export const useStableCallback = function useStableCallback(arg0) {
  const _window = arg0;
  map = _false(undefined);
  React2(() => {
    ref.current = current;
  });
  map(
    () => () => {
      ref.current = undefined;
    },
    [],
  );
  return React(() => {
    const items = [...arguments];
    current = ref.current;
    let applyResult;
    if (current != null) {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, items, 0);
      applyResult = HermesBuiltin.apply(current, items1, ref);
    }
    return applyResult;
  }, []);
};
