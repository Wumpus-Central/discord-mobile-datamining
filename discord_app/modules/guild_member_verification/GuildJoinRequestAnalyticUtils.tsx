// discord_app/modules/guild_member_verification/GuildJoinRequestAnalyticUtils.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";

const result = require("obj132").fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestAnalyticUtils.tsx");

export const trackMemberApplicationViewed = function trackMemberApplicationViewed(arg0) {
  ({ guildId, applicationUserId, applicationStatus } = arg0);
  const obj = { guild_id: guildId, viewing_user_id: store.getId(), application_user_id: applicationUserId, application_status: applicationStatus };
  obj.track(AnalyticEvents.GUILD_MEMBER_APPLICATION_VIEWED, obj);
};
export const trackMemberApplicationAction = function trackMemberApplicationAction(arg0) {
  ({ guildId, actionType, applicationUserId } = arg0);
  const obj = { guild_id: guildId, action_type: actionType, application_user_id: applicationUserId, viewing_user_id: store.getId() };
  obj.track(AnalyticEvents.GUILD_MEMBER_APPLICATION_ACTION, obj);
};
export const trackMemberApplicationInterviewMessage = function trackMemberApplicationInterviewMessage(guildId) {
  guildId = guildId.guildId;
  ({ messageId, channelId, joinRequestStatus, joinRequestUserId } = guildId);
  const id = store.getId();
  member = member.getMember(guildId, id);
  let joinedAt;
  if (member != null) {
    joinedAt = member.joinedAt;
  }
  expandEventPropertiesDefault.track(AnalyticEvents.GUILD_MEMBER_APPLICATION_INTERVIEW_MESSAGE, { guild_id: guildId, channel_id: channelId, message_id: messageId, message_user_id: id, is_member: null != joinedAt, join_request_status: joinRequestStatus, join_request_user_id: joinRequestUserId });
};
export const trackMemberVerificationApplicationViewed = function trackMemberVerificationApplicationViewed(guild_id) {
  const obj = { guild_id };
  obj.track(AnalyticEvents.MEMBER_VERIFICATION_APPLICATION_VIEWED, obj);
};