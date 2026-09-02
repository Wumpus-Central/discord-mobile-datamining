// === Module 9270: unpackStageChannelParty ===

// Module 9270 (unpackStageChannelParty)
import closure_0 from "_slicedToArray" /* 32 */;
import closure_1 from "fetchFingerprint" /* 1215 */;
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;
import closure_4 from "buildStageChannelUserRoles" /* 5373 */;
import { STAGE_APPLICATION_ID } from "MAX_STAGE_TOPIC_LENGTH" /* 5366 */;
import { GuildFeatures } from "ME" /* 673 */;

function unpackStageChannelParty(c17) {
  if (null != c17) {
    if (null != c17.party) {
      try {
        if (null != str) {
          if (str.startsWith(c7)) {
            const tmp4 = callback(str.split(":"), 5);
            const _parseInt = parseInt;
            const parsed = parseInt(tmp4[3], 16);
            const obj = { guildId: null, channelId: null, size: null, userIsSpeaker: null, guildIsPartnered: null, guildIsVerified: null, stageInstanceId: null };
            obj[0] = tmp4[1];
            obj[1] = tmp4[2];
            obj[2] = tmp2;
            obj[3] = 1 & parsed;
            obj[4] = 2 & parsed;
            obj[5] = 4 & parsed;
            obj[6] = tmp4[4];
            return obj;
          }
        }
      } catch (err) {
        return tmp;
      }
    }
  }
}
let c7 = "stage:";
const result = require("set").fileFinishedImporting("modules/stage_channels/StageChannelRichPresenceUtils.tsx");

export const packStageChannelPartyId = function packStageChannelPartyId(channel, stageInstanceByChannel) {
  let num = 0;
  if (speaker.isSpeaker(id.getId(), channel.id)) {
    num = 1;
  }
  guild = guild.getGuild(channel.getGuildId());
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
export const shouldShowActivity = function shouldShowActivity(c17) {
  const tmp = unpackStageChannelParty(c17);
  if (null == tmp) {
    return false;
  } else {
    return null != channel.getChannel(tmp.channelId);
  }
};