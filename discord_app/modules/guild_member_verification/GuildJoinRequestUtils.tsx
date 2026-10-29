// discord_app/modules/guild_member_verification/GuildJoinRequestUtils.tsx
import MemberVerificationTypes from "MemberVerificationTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestUtils.tsx");

export function isActionedApplicationStatus(applicationStatus) {
  return (
    applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED ||
    applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED
  );
}
export function isSubmittedApplicationStatus(applicationStatus) {
  return applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED;
}
export function isApprovedAndAcked(applicationStatus) {
  let tmp =
    applicationStatus.applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED;
  if (tmp) {
    tmp = null != applicationStatus.lastSeen;
  }
  return tmp;
}
export function isActionedAndNotAcked(request) {
  const applicationStatus = request.applicationStatus;
  let tmp3 =
    applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED ||
    applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED;
  if (tmp3) {
    tmp3 = null == request.lastSeen;
  }
  return tmp3;
}
