// discord_app/hooks/useLeadingEdgeDebounce.tsx
import _slicedToArray from "../../_runtime/metro/00032__.js";
import noop from "../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("hooks/useLeadingEdgeDebounce.tsx");

export const useLeadingEdgeDebounce = (arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  noop.useRef(true);
  const tmp = _slicedToArray(noop.useState(arg0), 2);
  closure_3 = tmp[1];
  const items = [arg0, arg1];
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_3(closure_0);
      ref.current = true;
    }, closure_1);
    if (ref.current) {
      closure_3(timeout);
    }
    ref.current = false;
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  return tmp[0];
};
