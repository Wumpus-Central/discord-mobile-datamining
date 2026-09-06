// === Module 9570: trackApplicationOpen ===

// Module 9570 (trackApplicationOpen)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/activities/utils/trackApplicationOpen.tsx");

export default function trackApplicationOpen(partyId) {
  partyId = partyId.partyId;
  ({ type, source, userId, guildId, channelId, channelType, applicationId, messageId, locationObject, analyticsLocations, referrerId, inviterUserId, remoteJoinPlatform } = partyId);
  const obj = { type, source, guild_id: guildId, channel_id: channelId, channel_type: channelType, application_id: applicationId, party_id: partyId, other_user_id: userId, message_id: messageId, location: locationObject, location_stack: analyticsLocations, referrer_id: referrerId, invite_inviter_id: inviterUserId, remote_join_platform: remoteJoinPlatform };
  obj.track(AnalyticEvents.APPLICATION_OPENED, obj);
};