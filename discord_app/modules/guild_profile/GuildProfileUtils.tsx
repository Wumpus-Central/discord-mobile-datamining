// === Module 7151: GuildProfileUtils ===

// Module 7151 (GuildProfileUtils)
import Constants from "Constants" /* 1074 */;
import ChannelRecord from "ChannelRecord" /* 2048 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2058 */;
import size from "module_2" /* 2 */;

let closure_2 = ChannelRecord.createChannelRecordFromInvite;
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/guild_profile/GuildProfileUtils.tsx");

export const getEstablishedDate = function getEstablishedDate(tmpResult4, locale) {
  if (null != tmpResult4) {
    if ("" !== tmpResult4) {
      const _Date = Date;
      const date = new Date(tmpResult4);
      const _Date2 = Date;
      let toLocaleDateStringResult = null;
      if (date instanceof Date) {
        const _isNaN = isNaN;
        toLocaleDateStringResult = null;
        if (!isNaN(date.getTime())) {
          toLocaleDateStringResult = date.toLocaleDateString(locale, { year: "numeric", month: "short" });
        }
      }
      return toLocaleDateStringResult;
    }
  }
  return null;
};
export const guildInviteCanEmbedProfile = function guildInviteCanEmbedProfile(guild) {
  if (null == guild.guild) {
    return false;
  } else {
    const features = GuildRecordUtils.fromInviteGuild(guild.guild).features;
    if (features.has(GuildFeatures.HUB)) {
      return false;
    } else {
      let channel;
      if (guild != null) {
        channel = guild.channel;
      }
      let tmp2 = null;
      if (null != channel) {
        tmp2 = closure_2(guild.channel);
      }
      let isGuildVoiceOrThreadResult;
      if (tmp2 != null) {
        isGuildVoiceOrThreadResult = tmp2.isGuildVoiceOrThread();
      }
      return !isGuildVoiceOrThreadResult;
    }
  }
};