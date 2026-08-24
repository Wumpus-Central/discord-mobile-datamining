// discord_common/js/shared/hooks/useConstRef.tsx
import closure_0 from "../../../../_runtime/00019_noop.js";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
};