// discord_app/modules/calls/getParticipantUserKey.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/calls/getParticipantUserKey.tsx");

export default function getParticipantUserKey(str, id) {
  const formatted = str.toLowerCase();
  return "" + formatted.padEnd(32, "!") + id.id;
}
