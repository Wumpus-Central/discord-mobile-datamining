// discord_app/modules/guild_onboarding_home/hasPendingMemberAction.tsx
import hasFlagAll from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import handleSettingsLoadSuccess from "GuildOnboardingHomeSettingsStore.tsx";
import set from "GuildOnboardingMemberActionStore.tsx";
import { GuildFeatures } from "../../Constants.tsx";
import { GuildMemberFlags } from "../guild_member/GuildMemberConstants.tsx";

const result = require("obj132").fileFinishedImporting("modules/guild_onboarding_home/hasPendingMemberAction.tsx");

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
  }
  if (hasItem) {
    hasItem = closure_6.hasMemberAction(guild.id, channel.id);
  }
  if (hasItem) {
    hasItem = !closure_7.hasCompletedActionForChannel(guild.id, channel.id);
  }
  return hasItem;
};