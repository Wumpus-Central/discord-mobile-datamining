// === Module 7501: snowflakeSequence ===

// Module 7501 (snowflakeSequence)
import obj132 from "obj132" /* 2 */;
import DISCORD_EPOCH from "DISCORD_EPOCH" /* 11 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;

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