// discord_app/modules/safety_hub/hooks/useIsNewClassification.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useIsNewClassification.tsx");

export const useIsNewClassification = function useIsNewClassification(classification) {
  const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(classification.id);
  return Math.abs(extractTimestampResult - new Date().getTime()) < 86400000;
};
