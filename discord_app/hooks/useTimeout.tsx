// discord_app/hooks/useTimeout.tsx
import noop from "../../_runtime/metro/00019__.js";
import size from "../../_runtime/metro/00002__.js";

({ useEffect: closure_0, useRef: closure_1 } = noop);
const result = size.fileFinishedImporting("hooks/useTimeout.tsx");

export default function useTimeout(current, result) {
  closure_1 = result;
  const tmp = duration(current);
  closure_2 = tmp;
  items = [current];
  React(() => {
    closure_2.current = current;
  }, items);
  const items1 = [result, tmp];
  React(() => {
    if (null !== closure_1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => ref.current(), tmp);
      return () => clearTimeout(closure_0);
    }
  }, items1);
}
