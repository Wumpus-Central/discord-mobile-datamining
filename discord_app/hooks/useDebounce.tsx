// discord_app/hooks/useDebounce.tsx
import _slicedToArray from "../../_runtime/metro/00032__.js";
import noop from "../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("hooks/useDebounce.tsx");

export default function useDebounce(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const tmp = _slicedToArray(noop.useState(arg0), 2);
  closure_2 = tmp[1];
  const items = [arg0, arg1];
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_2(closure_0);
    }, closure_1);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  return tmp[0];
}
