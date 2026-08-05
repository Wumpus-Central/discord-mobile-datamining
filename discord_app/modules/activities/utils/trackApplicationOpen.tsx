// discord_app/modules/activities/utils/trackApplicationOpen.tsx
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/trackApplicationOpen.tsx");

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
  let obj = require("../../../utils/AnalyticsUtils.tsx");
  obj = { type, source, guild_id: guildId, channel_id: channelId, channel_type: channelType, application_id: applicationId, party_id: null, other_user_id: null, message_id: null, location: null, location_stack: null, referrer_id: null, invite_inviter_id: null, remote_join_platform: null };
  obj[6] = partyId;
  obj[7] = userId;
  obj[8] = messageId;
  obj[9] = locationObject;
  obj[10] = analyticsLocations;
  obj[11] = referrerId;
  obj[12] = inviterUserId;
  obj[13] = remoteJoinPlatform;
  obj.track(AnalyticEvents.APPLICATION_OPENED, obj);
};