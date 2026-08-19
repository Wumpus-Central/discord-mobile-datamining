// discord_app/modules/messages/createNonce.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import DISCORD_EPOCH from "../../utils/SnowflakeUtils.tsx";
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";

let c2 = 0;
const snowflakeSequence = new DISCORD_EPOCH.SnowflakeSequence();
const result = obj132.fileFinishedImporting("modules/messages/createNonce.tsx");

export const createNonce = function createNonce() {
  const timestamp = Date.now();
  if (timestamp !== timestamp) {
    snowflakeSequence.reset();
  }
  return DISCORD_EPOCHDefault.fromTimestampWithSequence(timestamp, snowflakeSequence);
};