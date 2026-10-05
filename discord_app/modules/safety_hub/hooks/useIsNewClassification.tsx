// discord_app/modules/safety_hub/hooks/useIsNewClassification.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useIsNewClassification.tsx");

export const useIsNewClassification = function useIsNewClassification(classification) {
  const obj = SnowflakeUtilsDefault;
  const extractTimestampResult = obj.extractTimestamp(classification.id);
  const date = new Date();
  return abs(extractTimestampResult - date.getTime()) < 86400000;
};
