// discord_app/modules/guild_member_verification/GuildJoinRequestUtils.tsx
import MemberVerificationTypes from "MemberVerificationTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestUtils.tsx");

export const isActionedApplicationStatus = function isActionedApplicationStatus(applicationStatus) {
  const tmp3 =
    applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED ||
    applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED;
  return tmp3;
};
export const isSubmittedApplicationStatus = function isSubmittedApplicationStatus(applicationStatus) {
  return applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED;
};
export const isApprovedAndAcked = function isApprovedAndAcked(applicationStatus) {
  const tmp =
    applicationStatus.applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED &&
    null != applicationStatus.lastSeen;
  return tmp;
};
export const isActionedAndNotAcked = function isActionedAndNotAcked(request) {
  const applicationStatus = request.applicationStatus;
  const tmp3 =
    (applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED ||
      applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED) &&
    null == request.lastSeen;
  return tmp3;
};
