// discord_app/hooks/useRefValue.tsx
import set from "../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("hooks/useRefValue.tsx");

export default function useRefValue(current) {
  return current.current;
}
