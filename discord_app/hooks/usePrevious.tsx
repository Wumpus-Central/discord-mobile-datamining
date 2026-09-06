// === Module 8272: usePrevious ===

// Module 8272 (usePrevious)
import noop from "module_19" /* 19 */;
import size from "module_2" /* 2 */;

({ useRef: closure_0, useEffect: closure_1 } = noop);
const result = size.fileFinishedImporting("hooks/usePrevious.tsx");

export default function usePrevious(current) {
  const tmp = React(null);
  closure_1 = tmp;
  const items = [current];
  framebus(() => {
    closure_1.current = current;
  }, items);
  return tmp.current;
};
export const usePreviousWhen = function usePreviousWhen(value) {
  value = value.value;
  const shouldUpdate = value.shouldUpdate;
  const tmp = React(null);
  closure_2 = tmp;
  const items = [value, shouldUpdate];
  framebus(() => {
    if (shouldUpdate) {
      closure_2.current = value;
    }
  }, items);
  return tmp.current;
};
export const useCurrentWhen = function useCurrentWhen(value) {
  let current = value.value;
  const shouldUpdate = value.shouldUpdate;
  const tmp = React(null);
  closure_2 = tmp;
  const items = [current, shouldUpdate];
  framebus(() => {
    if (shouldUpdate) {
      closure_2.current = current;
    }
  }, items);
  if (!shouldUpdate) {
    current = tmp.current;
  }
  return current;
};