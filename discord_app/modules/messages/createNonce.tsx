// discord_app/modules/messages/createNonce.tsx
import SnowflakeUtils from "../../utils/SnowflakeUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const SnowflakeUtilsDefault = SnowflakeUtils;

let timestamp = 0;
const snowflakeSequence = new SnowflakeUtils.SnowflakeSequence();
const result = size.fileFinishedImporting("modules/messages/createNonce.tsx");

export const createNonce = function createNonce() {
  timestamp = Date.now();
  if (timestamp !== timestamp) {
    snowflakeSequence.reset();
  }
  return SnowflakeUtilsDefault.fromTimestampWithSequence(timestamp, snowflakeSequence);
};
