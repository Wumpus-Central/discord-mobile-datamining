// === Module 4659: hasPendingMemberAction ===

// Module 4659 (hasPendingMemberAction)
import hasFlagAll from "hasFlag" /* 1403 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 4662 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "trackCommunicationDisabled" /* 1992 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "handleSettingsLoadSuccess" /* 4660 */;
import closure_7 from "set" /* 4661 */;
import { GuildFeatures } from "ME" /* 676 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4077 */;

const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/hasPendingMemberAction.tsx");

export const hasPendingMemberAction = function hasPendingMemberAction(guild_id, selectedChannelId) {
  guild = guild.getGuild(guild_id);
  channel = channel.getChannel(selectedChannelId);
  let hasItem = null != guild && null != channel;
  if (hasItem) {
    hasItem = guildHasOnboardingHomeDefault(guild);
  }
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.GUILD_SERVER_GUIDE);
  }
  if (hasItem) {
    selfMember = selfMember.getSelfMember(guild.id);
    let num;
    if (selfMember != null) {
      num = selfMember.flags;
    }
    if (num == null) {
      num = 0;
    }
    hasItem = !hasFlagAll.hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
    const obj = hasFlagAll;
  }
  if (hasItem) {
    hasItem = closure_6.hasMemberAction(guild.id, channel.id);
  }
  if (hasItem) {
    hasItem = !closure_7.hasCompletedActionForChannel(guild.id, channel.id);
  }
  return hasItem;
};