// discord_app/modules/threads/convertServerThreadMember.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/threads/convertServerThreadMember.tsx");

export default function convertServerThreadMember(id) {
  return {
    id: id.id,
    userId: id.user_id,
    flags: id.flags,
    muted: id.muted,
    muteConfig: id.mute_config,
    joinTimestamp: id.join_timestamp,
  };
}
