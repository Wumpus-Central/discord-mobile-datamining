// discord_app/hooks/usePrevious.tsx
import react from "../../_runtime/00019_react.js";
import size from "../../_runtime/metro/00002__.js";

let _window;
let map;
({ useRef: _window, useEffect: map } = react);
const result = size.fileFinishedImporting("hooks/usePrevious.tsx");

export default function usePrevious(arg0) {
  const _window = arg0;
  const tmp = React(null);
  const items = [arg0];
  tmp(() => {
    closure_1.current = current;
  }, items);
  return tmp.current;
}
export const usePreviousWhen = function usePreviousWhen(value) {
  value = value.value;
  const shouldUpdate = value.shouldUpdate;
  const tmp = React(null);
  let closure_2 = tmp;
  const items = [value, shouldUpdate];
  map(() => {
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
  let closure_2 = tmp;
  const items = [current, shouldUpdate];
  map(() => {
    if (shouldUpdate) {
      closure_2.current = current;
    }
  }, items);
  if (!shouldUpdate) {
    current = tmp.current;
  }
  return current;
};
