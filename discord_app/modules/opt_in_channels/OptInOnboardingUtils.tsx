// discord_app/modules/opt_in_channels/OptInOnboardingUtils.tsx
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import comparator from "comparator";
import closure_6 from "comparator";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { GuildMemberFlags } from "GuildMemberFlags";
import { create } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { hasFlag } from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import { useOptInEnabledForGuild } from "isOptInEnabled.tsx";

let c4;
let c5;
const require = arg1;
function optIntoAllChannelsForExistingMember(id, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let include = obj.include;
  if (include === undefined) {
    const _Set = Set;
    include = new Set();
  }
  let exclude = obj.exclude;
  if (exclude === undefined) {
    const _Set2 = Set;
    exclude = new Set();
  }
  let mapped;
  channels = channels.getChannels(id);
  const items = [...channels[closure_5]];
  const found = items.filter((channel) => {
    channel = channel.channel;
    const isThreadResult = channel.isThread();
    let tmp2 = !isThreadResult;
    if (!isThreadResult) {
      tmp2 = !exclude.has(channel.id);
    }
    return tmp2;
  });
  mapped = found.map((channel) => channel.channel.id);
  const item = include.forEach((arg0) => mapped.push(arg0));
  const obj2 = mapped(6791);
  const result = obj2.onboardExistingMember(id, new Set(mapped));
}
({ GUILD_SELECTABLE_CHANNELS_KEY: c4, GUILD_VOCAL_CHANNELS_KEY: c5 } = comparator);
let result = require("trackCommunicationDisabled").fileFinishedImporting("modules/opt_in_channels/OptInOnboardingUtils.tsx");

export const hasNotSetUpChannelOptIn = function hasNotSetUpChannelOptIn(guildId) {
  const result = useOptInEnabledForGuild.isOptInEnabledForGuild(guildId);
  const selfMember = store.getSelfMember(guildId);
  let num;
  if (selfMember != null) {
    num = selfMember.flags;
  }
  if (num == null) {
    num = 0;
  }
  const obj = useOptInEnabledForGuild;
  const tmp = require;
  const tmpResult = hasFlag;
  let tmp7 = !result;
  const hasFlagResult = hasFlag.hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
  if (!result) {
    tmp7 = !hasFlagResult;
  }
  if (tmp7) {
    tmp7 = !tmp6;
  }
  return tmp7;
};
export const toggleShowAllChannels = function toggleShowAllChannels(id) {
  const result = useOptInEnabledForGuild.isOptInEnabledForGuild(id);
  const selfMember = store.getSelfMember(id);
  let num;
  if (selfMember != null) {
    num = selfMember.flags;
  }
  if (num == null) {
    num = 0;
  }
  let tmpResult = tmp(1403);
  const obj = useOptInEnabledForGuild;
  let tmp7 = !result;
  const hasFlagResult = tmpResult.hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
  if (!result) {
    tmp7 = !hasFlagResult;
  }
  if (tmp7) {
    tmp7 = !tmp6;
  }
  if (tmp7) {
    optIntoAllChannelsForExistingMember(id);
  } else {
    tmpResult = tmp(5282);
    const result1 = tmpResult.isOptInEnabledForGuild(id);
    tmp(6794).setGuildOptIn(id, !result1);
    const tmpResult1 = tmp(6794);
  }
};
export { optIntoAllChannelsForExistingMember };
export const hasClearedGuildOnboardingNotice = function hasClearedGuildOnboardingNotice(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = handleConnectionClosedOrResumed;
  }
  let hasFlagResult = null != arg0;
  if (hasFlagResult) {
    const guilds = tmp.settings.guilds;
    let num;
    if (guilds != null) {
      if (guilds.guilds[arg0] != null) {
        num = tmp5.guildOnboardingProgress;
      }
    }
    if (num == null) {
      num = 0;
    }
    hasFlagResult = hasFlag.hasFlag(num, create.GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
    const obj = hasFlag;
    const tmp3 = require;
  }
  return hasFlagResult;
};