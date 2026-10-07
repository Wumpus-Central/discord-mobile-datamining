// discord_common/js/shared/hooks/useInitRef.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import size from "../../../../_runtime/metro/00002__.js";

const useRef = _mod19.useRef;
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useInitRef.tsx");

export default function useInitRef(fn) {
  const tmp = useRef(false);
  const tmp2 = useRef(null);
  if (!tmp.current) {
    tmp.current = true;
    tmp2.current = fn();
  }
  return tmp2;
}
