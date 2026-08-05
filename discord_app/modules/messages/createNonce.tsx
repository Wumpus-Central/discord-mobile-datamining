import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";
// discord_app/modules/messages/createNonce.tsx
let c2 = 0;
const snowflakeSequence = new require("DISCORD_EPOCH").SnowflakeSequence();
const result = require("set").fileFinishedImporting("modules/messages/createNonce.tsx");

export const createNonce = function createNonce() {
  const timestamp = Date.now();
  if (timestamp !== timestamp) {
    snowflakeSequence.reset();
  }
  return DISCORD_EPOCH.fromTimestampWithSequence(timestamp, snowflakeSequence);
};