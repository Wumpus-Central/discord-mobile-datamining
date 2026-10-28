// discord_app/modules/conjure/chat/ConjureTurnStart.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureTurnStart.tsx");

export const conjureTurnStartedAt = function conjureTurnStartedAt(findOpenTurnResult) {
  let turn_id = findOpenTurnResult.turn_id;
  if (turn_id == null) {
    const steps = findOpenTurnResult.steps;
    let turn_id1;
    const found = steps.find((turn_id) => null != turn_id.turn_id);
    if (found != null) {
      turn_id1 = found.turn_id;
    }
    turn_id = turn_id1;
  }
  if (null != turn_id) {
    if (obj.isProbablyAValidSnowflake(turn_id)) {
      let created_at = SnowflakeUtilsDefault.extractTimestamp(turn_id);
      const tmp3Result = SnowflakeUtilsDefault;
    }
    return created_at;
  }
  created_at = findOpenTurnResult.created_at;
};
