// === Module 8998: trackApplicationOpen ===

// Module 8998 (trackApplicationOpen)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/activities/utils/trackApplicationOpen.tsx");

export default function trackApplicationOpen(partyId) {
  let analyticsLocations;
  let applicationId;
  let channelId;
  let channelType;
  let guildId;
  let inviterUserId;
  let locationObject;
  let messageId;
  let referrerId;
  let remoteJoinPlatform;
  let source;
  let type;
  let userId;
  partyId = partyId.partyId;
  ({ type, source, userId, guildId, channelId, channelType, applicationId, messageId, locationObject, analyticsLocations, referrerId, inviterUserId, remoteJoinPlatform } = partyId);
  const obj = { type, source, guild_id: guildId, channel_id: channelId, channel_type: channelType, application_id: applicationId, party_id: partyId, other_user_id: userId, message_id: messageId, location: locationObject, location_stack: analyticsLocations, referrer_id: referrerId, invite_inviter_id: inviterUserId, remote_join_platform: remoteJoinPlatform };
  const track = AnalyticsUtilsDefault.track;
  const APPLICATION_OPENED = AnalyticEvents.APPLICATION_OPENED;
  AnalyticsUtilsDefault;
  track(APPLICATION_OPENED, obj);
};