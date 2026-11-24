// === Module 8031: hasPendingMemberAction ===

// Module 8031 (hasPendingMemberAction)
import FlagUtilsAll from "FlagUtils" /* 1404 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7458 */;
import ChannelStore from "ChannelStore" /* 4766 */;
import GuildMemberStore from "GuildMemberStore" /* 4829 */;
import GuildStore from "GuildStore" /* 4788 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7455 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8032 */;

const GuildFeatures = fn(1071).GuildFeatures;
const GuildMemberFlags = fn(4835).GuildMemberFlags;
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