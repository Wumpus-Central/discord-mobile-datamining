// === Module 7630: trackMemberApplicationViewed ===

// Module 7630 (trackMemberApplicationViewed)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "trackCommunicationDisabled" /* 1992 */;
import { AnalyticEvents } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestAnalyticUtils.tsx");

export const trackMemberApplicationViewed = function trackMemberApplicationViewed(arg0) {
  ({ guildId, applicationUserId, applicationStatus } = arg0);
  let obj = expandEventPropertiesDefault;
  obj = { guild_id: guildId, viewing_user_id: store.getId(), application_user_id: applicationUserId, application_status: applicationStatus };
  obj.track(AnalyticEvents.GUILD_MEMBER_APPLICATION_VIEWED, obj);
};
export const trackMemberApplicationAction = function trackMemberApplicationAction(arg0) {
  ({ guildId, actionType, applicationUserId } = arg0);
  let obj = expandEventPropertiesDefault;
  obj = { guild_id: guildId, action_type: actionType, application_user_id: applicationUserId, viewing_user_id: store.getId() };
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
  let obj = expandEventPropertiesDefault;
  obj = { guild_id };
  obj.track(AnalyticEvents.MEMBER_VERIFICATION_APPLICATION_VIEWED, obj);
};