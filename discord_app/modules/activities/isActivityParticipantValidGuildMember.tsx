// === Module 1953: isActivityParticipantValidGuildMember ===

// Module 1953 (isActivityParticipantValidGuildMember)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/isActivityParticipantValidGuildMember.tsx");

export default function isActivityParticipantValidGuildMember(member) {
  let tmp = null != member.member && null != member.member.joined_at;
  if (tmp) {
    tmp = "" !== member.member.user.username;
  }
  return tmp;
};