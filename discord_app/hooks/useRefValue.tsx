const result = require("set").fileFinishedImporting("hooks/useRefValue.tsx");

export default function useRefValue(current) {
  return current.current;
};