// === Module 5848: GuildJoinRequestAnalyticUtils ===

// Module 5848 (GuildJoinRequestAnalyticUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2107 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestAnalyticUtils.tsx");

export const trackMemberApplicationViewed = function trackMemberApplicationViewed(arg0) {
  ({ guildId, applicationUserId, applicationStatus } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.GUILD_MEMBER_APPLICATION_VIEWED, { guild_id: guildId, viewing_user_id: AuthenticationStore.getId(), application_user_id: applicationUserId, application_status: applicationStatus });
};
export const trackMemberApplicationAction = function trackMemberApplicationAction(arg0) {
  ({ guildId, actionType, applicationUserId } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.GUILD_MEMBER_APPLICATION_ACTION, { guild_id: guildId, action_type: actionType, application_user_id: applicationUserId, viewing_user_id: AuthenticationStore.getId() });
};
export const trackMemberApplicationInterviewMessage = function trackMemberApplicationInterviewMessage(guildId) {
  guildId = guildId.guildId;
  ({ messageId, channelId, joinRequestStatus, joinRequestUserId } = guildId);
  const id = AuthenticationStore.getId();
  const member = GuildMemberStore.getMember(guildId, id);
  let joinedAt;
  if (member != null) {
    joinedAt = member.joinedAt;
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_MEMBER_APPLICATION_INTERVIEW_MESSAGE, { guild_id: guildId, channel_id: channelId, message_id: messageId, message_user_id: id, is_member: null != joinedAt, join_request_status: joinRequestStatus, join_request_user_id: joinRequestUserId });
};
export const trackMemberVerificationApplicationViewed = function trackMemberVerificationApplicationViewed(guild_id) {
  AnalyticsUtilsDefault.track(AnalyticEvents.MEMBER_VERIFICATION_APPLICATION_VIEWED, { guild_id });
};