// === Module 8182: hasPendingMemberAction ===

// Module 8182 (hasPendingMemberAction)
import FlagUtilsAll from "FlagUtils" /* 1405 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7204 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import GuildMemberStore from "GuildMemberStore" /* 2128 */;
import GuildStore from "GuildStore" /* 2090 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7202 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8183 */;

const GuildFeatures = fn(1087).GuildFeatures;
const GuildMemberFlags = fn(4831).GuildMemberFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/hasPendingMemberAction.tsx");

export const hasPendingMemberAction = function hasPendingMemberAction(guild_id, selectedChannelId) {
  guild = GuildStore.getGuild(guild_id);
  const channel = ChannelStore.getChannel(selectedChannelId);
  let hasItem = null != guild && null != channel;
  if (hasItem) {
    hasItem = guildHasOnboardingHomeDefault(guild);
  }
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.GUILD_SERVER_GUIDE);
  }
  if (hasItem) {
    const selfMember = GuildMemberStore.getSelfMember(guild.id);
    let num;
    if (selfMember != null) {
      num = selfMember.flags;
    }
    if (num == null) {
      num = 0;
    }
    hasItem = !FlagUtilsAll.hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
  }
  if (hasItem) {
    hasItem = GuildOnboardingHomeSettingsStore.hasMemberAction(guild.id, channel.id);
  }
  if (hasItem) {
    hasItem = !GuildOnboardingMemberActionStore.hasCompletedActionForChannel(guild.id, channel.id);
  }
  return hasItem;
};