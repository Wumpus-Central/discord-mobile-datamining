// === Module 9000: hasPendingMemberAction ===

// Module 9000 (hasPendingMemberAction)
import FlagUtilsAll from "FlagUtils" /* 1406 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7083 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildMemberStore from "GuildMemberStore" /* 5218 */;
import GuildStore from "GuildStore" /* 5177 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7080 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 9001 */;

const GuildFeatures = fn(1072).GuildFeatures;
const GuildMemberFlags = fn(5224).GuildMemberFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/hasPendingMemberAction.tsx");

export function hasPendingMemberAction(guild_id, selectedChannelId) {
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
}