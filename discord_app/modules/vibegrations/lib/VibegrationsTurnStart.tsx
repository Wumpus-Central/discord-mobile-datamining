// discord_app/modules/vibegrations/lib/VibegrationsTurnStart.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTurnStart.tsx");

export const vibegrationsTurnStartedAt = function vibegrationsTurnStartedAt(stateFromStores1) {
  let turn_id = stateFromStores1.turn_id;
  if (turn_id == null) {
    const steps = stateFromStores1.steps;
    let turn_id1;
    const found = steps.find((turn_id) => null != turn_id.turn_id);
    if (found != null) {
      turn_id1 = found.turn_id;
    }
    turn_id = turn_id1;
  }
  if (null != turn_id) {
    if (obj.test(turn_id)) {
      const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(turn_id);
      const _Number = Number;
      if (Number.isFinite(extractTimestampResult)) {
        if (extractTimestampResult > 0) {
          return extractTimestampResult;
        }
      }
    }
    obj = /^\d+$/;
  }
  return stateFromStores1.created_at;
};
