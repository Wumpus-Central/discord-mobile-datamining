import { DISCORD_EPOCH } from "../../../utils/SnowflakeUtils.tsx";
// discord_app/modules/safety_hub/hooks/useIsNewClassification.tsx
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useIsNewClassification.tsx");

export const useIsNewClassification = function useIsNewClassification(classification) {
  const obj = DISCORD_EPOCH;
  const extractTimestampResult = DISCORD_EPOCH.extractTimestamp(classification.id);
  return Math.abs(extractTimestampResult - new Date().getTime()) < 86400000;
};