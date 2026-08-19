// === Module 7529: convertServerThreadMember ===

// Module 7529 (convertServerThreadMember)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/threads/convertServerThreadMember.tsx");

export default function convertServerThreadMember(id) {
  return { id: id.id, userId: id.user_id, flags: id.flags, muted: id.muted, muteConfig: id.mute_config, joinTimestamp: id.join_timestamp };
};