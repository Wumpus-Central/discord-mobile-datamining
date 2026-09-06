// discord_app/modules/threads/convertServerThreadMember.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/threads/convertServerThreadMember.tsx");

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
