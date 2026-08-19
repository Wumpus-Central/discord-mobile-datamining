// discord_common/js/shared/hooks/useConstRef.tsx
import noop from "../../../../_runtime/00019_noop.js";

const result = require("obj132").fileFinishedImporting("../discord_common/js/shared/hooks/useConstRef.tsx");

export default function useConstRef(current) {
  const ref = React.useRef(current);
  ref.current = current;
  return ref;
};