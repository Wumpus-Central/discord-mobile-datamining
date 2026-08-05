// discord_app/modules/safety_hub/hooks/useIsNewClassification.tsx
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useIsNewClassification.tsx");

export const useIsNewClassification = function useIsNewClassification(classification) {
  const obj = require("../../../utils/SnowflakeUtils.tsx");
  const extractTimestampResult = require("../../../utils/SnowflakeUtils.tsx").extractTimestamp(classification.id);
  return Math.abs(extractTimestampResult - new Date().getTime()) < 86400000;
};