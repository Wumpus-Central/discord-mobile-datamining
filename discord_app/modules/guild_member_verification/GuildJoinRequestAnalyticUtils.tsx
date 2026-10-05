// discord_app/modules/guild_member_verification/GuildJoinRequestAnalyticUtils.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestAnalyticUtils.tsx");

export const trackMemberApplicationViewed = function trackMemberApplicationViewed(arg0) {
  let applicationStatus;
  let applicationUserId;
  let guildId;
  ({ guildId, applicationUserId, applicationStatus } = arg0);
  const obj = AnalyticsUtilsDefault;
  const obj2 = {
    guild_id: guildId,
    viewing_user_id: AuthenticationStore.getId(),
    application_user_id: applicationUserId,
    application_status: applicationStatus,
  };
  obj.track(AnalyticEvents.GUILD_MEMBER_APPLICATION_VIEWED, obj2);
};
export const trackMemberApplicationAction = function trackMemberApplicationAction(arg0) {
  let actionType;
  let applicationUserId;
  let guildId;
  ({ guildId, actionType, applicationUserId } = arg0);
  const obj = AnalyticsUtilsDefault;
  const obj2 = {
    guild_id: guildId,
    action_type: actionType,
    application_user_id: applicationUserId,
    viewing_user_id: AuthenticationStore.getId(),
  };
  obj.track(AnalyticEvents.GUILD_MEMBER_APPLICATION_ACTION, obj2);
};
export const trackMemberApplicationInterviewMessage = function trackMemberApplicationInterviewMessage(guildId) {
  let channelId;
  let joinRequestStatus;
  let joinRequestUserId;
  let messageId;
  guildId = guildId.guildId;
  ({ messageId, channelId, joinRequestStatus, joinRequestUserId } = guildId);
  const id = AuthenticationStore.getId();
  const member = GuildMemberStore.getMember(guildId, id);
  let joinedAt;
  if (member != null) {
    joinedAt = member.joinedAt;
  }
  const tmp4 = null != joinedAt;
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.GUILD_MEMBER_APPLICATION_INTERVIEW_MESSAGE, {
    guild_id: guildId,
    channel_id: channelId,
    message_id: messageId,
    message_user_id: id,
    is_member: tmp4,
    join_request_status: joinRequestStatus,
    join_request_user_id: joinRequestUserId,
  });
};
export const trackMemberVerificationApplicationViewed = function trackMemberVerificationApplicationViewed(guild_id) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id };
  obj.track(AnalyticEvents.MEMBER_VERIFICATION_APPLICATION_VIEWED, obj2);
};
