// === Module 4778: getParticipantUserKey ===

// Module 4778 (getParticipantUserKey)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/calls/getParticipantUserKey.tsx");

export default function getParticipantUserKey(str, id) {
  const formatted = str.toLowerCase();
  return "" + formatted.padEnd(32, "!") + id.id;
};