// discord_app/modules/activities/utils/trackApplicationOpen.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  ({
    type,
    source,
    userId,
    guildId,
    channelId,
    channelType,
    applicationId,
    messageId,
    locationObject,
    analyticsLocations,
    referrerId,
    inviterUserId,
    remoteJoinPlatform,
  } = partyId);
  const obj = {
    type,
    source,
    guild_id: guildId,
    channel_id: channelId,
    channel_type: channelType,
    application_id: applicationId,
    party_id: partyId,
    other_user_id: userId,
    message_id: messageId,
    location: locationObject,
    location_stack: analyticsLocations,
    referrer_id: referrerId,
    invite_inviter_id: inviterUserId,
    remote_join_platform: remoteJoinPlatform,
  };
  const track = AnalyticsUtilsDefault.track;
  const APPLICATION_OPENED = AnalyticEvents.APPLICATION_OPENED;
  AnalyticsUtilsDefault;
  track(APPLICATION_OPENED, obj);
}
