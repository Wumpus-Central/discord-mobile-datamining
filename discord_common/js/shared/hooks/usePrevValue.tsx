// discord_common/js/shared/hooks/usePrevValue.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import size from "../../../../_runtime/metro/00002__.js";

const useRef = _mod19.useRef;
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/usePrevValue.tsx");

export default function usePrevValue(current) {
  const tmp = useRef(null);
  const tmp2 = useRef(null);
  if (!Object.is(current, tmp2.current)) {
    tmp.current = tmp2.current;
    tmp2.current = current;
  }
  return tmp.current;
}
