// === Module 4942: hasPendingMemberAction ===

// Module 4942 (hasPendingMemberAction)
import FlagUtilsAll from "FlagUtils" /* 1385 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 4945 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import GuildStore from "GuildStore" /* 2063 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 4943 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 4944 */;

const GuildFeatures = fn(1074).GuildFeatures;
const GuildMemberFlags = fn(4382).GuildMemberFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/hasPendingMemberAction.tsx");

export const hasPendingMemberAction = function hasPendingMemberAction(guild_id, selectedChannelId) {
  const guild = GuildStore.getGuild(guild_id);
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