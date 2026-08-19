// === Module 14113: useIsNewClassification ===

// Module 14113 (useIsNewClassification)
import obj132 from "obj132" /* 2 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;

const result = obj132.fileFinishedImporting("modules/safety_hub/hooks/useIsNewClassification.tsx");

export const useIsNewClassification = function useIsNewClassification(classification) {
  const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(classification.id);
  return Math.abs(extractTimestampResult - new Date().getTime()) < 86400000;
};