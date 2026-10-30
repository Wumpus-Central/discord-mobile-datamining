// === Module 12565: ConjureTurnStart ===

// Module 12565 (ConjureTurnStart)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureTurnStart.tsx");

export function conjureTurnStartedAt(findOpenTurnResult) {
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
}