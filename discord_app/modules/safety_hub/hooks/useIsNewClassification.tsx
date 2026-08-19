// discord_app/modules/safety_hub/hooks/useIsNewClassification.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import DISCORD_EPOCHDefault from "../../../utils/SnowflakeUtils.tsx";

const result = obj132.fileFinishedImporting("modules/safety_hub/hooks/useIsNewClassification.tsx");

export const useIsNewClassification = function useIsNewClassification(classification) {
  const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(classification.id);
  return Math.abs(extractTimestampResult - new Date().getTime()) < 86400000;
};