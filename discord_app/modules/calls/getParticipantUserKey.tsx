// discord_app/modules/calls/getParticipantUserKey.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/calls/getParticipantUserKey.tsx");

export default function getParticipantUserKey(str, id) {
  const formatted = str.toLowerCase();
  return "" + formatted.padEnd(32, "!") + id.id;
};