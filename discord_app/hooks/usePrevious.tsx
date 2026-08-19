// === Module 6701: usePrevious ===

// Module 6701 (usePrevious)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;

({ useRef: c0, useEffect: closure_1 } = noop);
const result = set.fileFinishedImporting("hooks/usePrevious.tsx");

export default function usePrevious(arg0) {
  const callback = arg0;
  const tmp = callback(null);
  const callback2 = tmp;
  const items = [arg0];
  callback2(() => {
    closure_1.current = closure_0;
  }, items);
  return tmp.current;
};
export const usePreviousWhen = function usePreviousWhen(value) {
  value = value.value;
  const callback = value;
  const shouldUpdate = value.shouldUpdate;
  closure_2 = undefined;
  const tmp = callback(null);
  closure_2 = tmp;
  const items = [value, shouldUpdate];
  shouldUpdate(() => {
    if (shouldUpdate) {
      closure_2.current = closure_0;
    }
  }, items);
  return tmp.current;
};
export const useCurrentWhen = function useCurrentWhen(value) {
  let current = value.value;
  const shouldUpdate = value.shouldUpdate;
  closure_2 = undefined;
  const tmp = current(null);
  closure_2 = tmp;
  const items = [current, shouldUpdate];
  shouldUpdate(() => {
    if (shouldUpdate) {
      closure_2.current = current;
    }
  }, items);
  if (!shouldUpdate) {
    current = tmp.current;
  }
  return current;
};