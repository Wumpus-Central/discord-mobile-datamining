// discord_app/modules/conjure/chat/ConjureTurnStart.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
    const obj = /^\d+$/;
    if (obj.test(turn_id)) {
      const obj2 = SnowflakeUtilsDefault;
      const extractTimestampResult = obj2.extractTimestamp(turn_id);
      const _Number = Number;
      if (Number.isFinite(extractTimestampResult)) {
        if (extractTimestampResult > 0) {
          return extractTimestampResult;
        }
      }
    }
  }
  return memo.created_at;
};
