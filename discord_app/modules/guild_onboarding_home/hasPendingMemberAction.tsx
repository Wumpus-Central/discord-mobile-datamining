// === Module 7914: hasPendingMemberAction ===

// Module 7914 (hasPendingMemberAction)
import FlagUtilsAll from "FlagUtils" /* 1403 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 6927 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildStore from "GuildStore" /* 2087 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 6925 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 7915 */;

const GuildFeatures = fn(1085).GuildFeatures;
const GuildMemberFlags = fn(4736).GuildMemberFlags;
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