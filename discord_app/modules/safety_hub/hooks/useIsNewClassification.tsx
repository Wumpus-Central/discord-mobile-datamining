// discord_app/modules/safety_hub/hooks/useIsNewClassification.tsx
import set from "../../../../_runtime/00002_set.js";
import DISCORD_EPOCHDefault from "../../../utils/SnowflakeUtils.tsx";

const result = set.fileFinishedImporting("modules/safety_hub/hooks/useIsNewClassification.tsx");

export const useIsNewClassification = function useIsNewClassification(classification) {
  const obj = DISCORD_EPOCHDefault;
  const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(classification.id);
  return Math.abs(extractTimestampResult - new Date().getTime()) < 86400000;
};