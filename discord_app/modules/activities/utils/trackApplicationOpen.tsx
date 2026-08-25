// === Module 10701: trackApplicationOpen ===

// Module 10701 (trackApplicationOpen)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/activities/utils/trackApplicationOpen.tsx");

export default function trackApplicationOpen(partyId) {
  partyId = partyId.partyId;
  ({ type, source, userId, guildId, channelId, channelType, applicationId, messageId, locationObject, analyticsLocations, referrerId, inviterUserId, remoteJoinPlatform } = partyId);
  let obj = expandEventPropertiesDefault;
  obj = { type, source, guild_id: guildId, channel_id: channelId, channel_type: channelType, application_id: applicationId, party_id: partyId, other_user_id: userId, message_id: messageId, location: locationObject, location_stack: analyticsLocations, referrer_id: referrerId, invite_inviter_id: inviterUserId, remote_join_platform: remoteJoinPlatform };
  obj.track(AnalyticEvents.APPLICATION_OPENED, obj);
};