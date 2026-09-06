// discord_app/modules/stage_channels/StageChannelRichPresenceUtils.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import StageChannelRoleStore from "StageChannelRoleStore.tsx";

function unpackStageChannelParty(party) {
  if (null != party) {
    if (null != party.party) {
      try {
        if (null != str) {
          if (str.startsWith(c7)) {
            const tmp4 = _slicedToArray(str.split(":"), 5);
            const _parseInt = parseInt;
            const parsed = parseInt(tmp4[3], 16);
            const obj = {
              guildId: tmp4[1],
              channelId: tmp4[2],
              size: tmp2,
              userIsSpeaker: 1 & parsed,
              guildIsPartnered: 2 & parsed,
              guildIsVerified: 4 & parsed,
              stageInstanceId: tmp4[4],
            };
            return obj;
          }
        }
      } catch (err) {
        return tmp;
      }
    }
  }
}
const STAGE_APPLICATION_ID = fn(5414).STAGE_APPLICATION_ID;
const GuildFeatures = fn(1074).GuildFeatures;
let c7 = "stage:";
const size = fn(2);
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
    if (features2.has(tmp2.VERIFIED)) {
      tmp4 = tmp3 | 4;
    }
    str = tmp4;
    tmp2 = GuildFeatures;
  }
  return "" + c7 + channel.guild_id + ":" + channel.id + ":" + str.toString(16) + ":" + stageInstanceByChannel.id;
};
export { unpackStageChannelParty };
export const isStageActivity = function isStageActivity(application_id) {
  application_id = undefined;
  if (application_id != null) {
    application_id = application_id.application_id;
  }
  return application_id === STAGE_APPLICATION_ID;
};
export const shouldShowActivity = function shouldShowActivity(party) {
  const tmp = unpackStageChannelParty(party);
  if (null == tmp) {
    return false;
  } else {
    return null != ChannelStore.getChannel(tmp.channelId);
  }
};
