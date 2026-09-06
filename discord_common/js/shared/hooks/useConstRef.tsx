// discord_common/js/shared/hooks/useConstRef.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = noop.useRef(current);
  ref.current = current;
  return ref;
}
