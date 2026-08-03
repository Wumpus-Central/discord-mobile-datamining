// === Module 13873: useIsNewClassification ===

// Module 13873 (useIsNewClassification)
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useIsNewClassification.tsx");

export const useIsNewClassification = function useIsNewClassification(classification) {
  const obj = importDefault(11);
  const extractTimestampResult = importDefault(11).extractTimestamp(classification.id);
  return Math.abs(extractTimestampResult - new Date().getTime()) < 86400000;
};