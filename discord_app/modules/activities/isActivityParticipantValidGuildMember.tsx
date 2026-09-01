// discord_app/modules/activities/isActivityParticipantValidGuildMember.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/activities/isActivityParticipantValidGuildMember.tsx");

export default function isActivityParticipantValidGuildMember(member) {
  let tmp = null != member.member && null != member.member.joined_at;
  if (tmp) {
    tmp = "" !== member.member.user.username;
  }
  return tmp;
}
