// discord_app/modules/guild_member_verification/GuildJoinRequestUtils.tsx
import set from "set" /* 2 */;
import MAX_RESULTS_PER_PAGE from "MAX_RESULTS_PER_PAGE" /* 4200 */;

const result = set.fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestUtils.tsx");

export const isActionedApplicationStatus = function isActionedApplicationStatus(applicationStatus) {
  return applicationStatus === MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.APPROVED || applicationStatus === MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.REJECTED;
};
export const isSubmittedApplicationStatus = function isSubmittedApplicationStatus(applicationStatus) {
  return applicationStatus === MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.SUBMITTED;
};
export const isApprovedAndAcked = function isApprovedAndAcked(applicationStatus) {
  let tmp = applicationStatus.applicationStatus === MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.APPROVED;
  if (tmp) {
    tmp = null != applicationStatus.lastSeen;
  }
  return tmp;
};
export const isActionedAndNotAcked = function isActionedAndNotAcked(request) {
  const applicationStatus = request.applicationStatus;
  let tmp3 = applicationStatus === MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.APPROVED || applicationStatus === MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.REJECTED;
  if (tmp3) {
    tmp3 = null == request.lastSeen;
  }
  return tmp3;
};