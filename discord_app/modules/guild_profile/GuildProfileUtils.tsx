// === Module 7341: getEstablishedDate ===

// Module 7341 (getEstablishedDate)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import fromGuildPropertiesWithAdditionalFields from "fromGuildPropertiesWithAdditionalFields" /* 1430 */;

let closure_2 = createChannelRecord.createChannelRecordFromInvite;
const GuildFeatures = ME.GuildFeatures;
const result = set.fileFinishedImporting("modules/guild_profile/GuildProfileUtils.tsx");

export const getEstablishedDate = function getEstablishedDate(tmpResult1, locale) {
  if (null != tmpResult1) {
    if ("" !== tmpResult1) {
      const _Date = Date;
      const date = new Date(tmpResult1);
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
    const features = fromGuildPropertiesWithAdditionalFields.fromInviteGuild(guild.guild).features;
    if (features.has(GuildFeatures.HUB)) {
      return false;
    } else {
      let channel;
      if (guild != null) {
        channel = guild.channel;
      }
      let tmp2 = null;
      if (null != channel) {
        tmp2 = callback(guild.channel);
      }
      let isGuildVoiceOrThreadResult;
      if (tmp2 != null) {
        isGuildVoiceOrThreadResult = tmp2.isGuildVoiceOrThread();
      }
      return !isGuildVoiceOrThreadResult;
    }
    const obj = fromGuildPropertiesWithAdditionalFields;
  }
};