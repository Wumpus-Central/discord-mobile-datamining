// === Module 12321: ConjureTurnStart ===

// Module 12321 (ConjureTurnStart)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureTurnStart.tsx");

export const conjureTurnStartedAt = function conjureTurnStartedAt(memo) {
  let turn_id = memo.turn_id;
  if (turn_id == null) {
    const steps = memo.steps;
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
  created_at = memo.created_at;
};