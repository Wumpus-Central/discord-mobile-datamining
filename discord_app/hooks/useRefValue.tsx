// discord_app/hooks/useRefValue.tsx
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("hooks/useRefValue.tsx");

export default function useRefValue(current) {
  return current.current;
};