// === Module 5379: getParticipantUserKey ===

// Module 5379 (getParticipantUserKey)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/calls/getParticipantUserKey.tsx");

export default function getParticipantUserKey(str, id) {
  const formatted = str.toLowerCase();
  return "" + formatted.padEnd(32, "!") + id.id;
};