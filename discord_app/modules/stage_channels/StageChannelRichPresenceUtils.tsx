// === Module 10639: StageChannelRichPresenceUtils ===

// Module 10639 (StageChannelRichPresenceUtils)
import Constants from "Constants" /* 1085 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5578 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5585 */;
import size from "module_2" /* 2 */;

function unpackStageChannelParty(activity) {
  if (null != activity) {
    if (null != activity.party) {
      try {
        if (null != activity.party.id) {
          if (activity.party.id.startsWith(c7)) {
            const tmp3 = _slicedToArray(activity.party.id.split(":"), 5);
            const _parseInt = parseInt;
            const tmp4 = tmp3[1];
            const tmp5 = tmp3[2];
            const tmp6 = tmp3[4];
            const parsed = parseInt(tmp3[3], 16);
            return { guildId: tmp4, channelId: tmp5, size: tmp, userIsSpeaker: 1 & parsed, guildIsPartnered: 2 & parsed, guildIsVerified: 4 & parsed, stageInstanceId: tmp6 };
          }
        }
      } catch (err) {
        return null;
      }
    }
  }
}
const STAGE_APPLICATION_ID = StageChannelsConstants.STAGE_APPLICATION_ID;
const GuildFeatures = Constants.GuildFeatures;
let c7 = "stage:";
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelRichPresenceUtils.tsx");

export const packStageChannelPartyId = function packStageChannelPartyId(channel, stageInstanceByChannel) {
  let num = 0;
  if (StageChannelRoleStore.isSpeaker(AuthenticationStore.getId(), channel.id)) {
    num = 1;
  }
  const guild = GuildStore.getGuild(channel.getGuildId());
  let str = num;
  if (null != guild) {
    const features = guild.features;
    let tmp3 = num;
    if (features.has(GuildFeatures.PARTNERED)) {
      tmp3 = num | 2;
    }
    const features2 = guild.features;
    let tmp4 = tmp3;
    if (features2.has(GuildFeatures.VERIFIED)) {
      tmp4 = tmp3 | 4;
    }
    str = tmp4;
  }
  return "" + c7 + channel.guild_id + ":" + channel.id + ":" + str.toString(16) + ":" + stageInstanceByChannel.id;
};
export { unpackStageChannelParty };
export const isStageActivity = function isStageActivity(activity) {
  let application_id;
  if (activity != null) {
    application_id = activity.application_id;
  }
  return application_id === STAGE_APPLICATION_ID;
};
export const shouldShowActivity = function shouldShowActivity(activity) {
  const tmp = unpackStageChannelParty(activity);
  if (null == tmp) {
    return false;
  } else {
    return null != ChannelStore.getChannel(tmp.channelId);
  }
};