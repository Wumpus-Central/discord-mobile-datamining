// === Module 10747: optIntoAllChannelsForExistingMember ===

// Module 10747 (optIntoAllChannelsForExistingMember)
import create from "create" /* 1306 */;
import hasFlag from "hasFlag" /* 1403 */;
import useOptInEnabledForGuild from "useOptInEnabledForGuild" /* 5282 */;
import _persistOptInChannelUpdates2 from "_persistOptInChannelUpdates2" /* 6794 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import comparator from "comparator" /* 1980 */;
import comparator2 from "comparator" /* 1980 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4009 */;

require = fn;
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
  channels = channels.getChannels(id);
  const items = [...channels[closure_5]];
  const found = items.filter((item, index) => {
    const channel = item.channel;
    const isThreadResult = channel.isThread();
    let tmp2 = !isThreadResult;
    if (!isThreadResult) {
      tmp2 = !exclude.has(channel.id);
    }
    return tmp2;
  });
  const mapped = found.map((item, index) => item.channel.id);
  const item = include.forEach((item, index) => mapped.push(item));
  const obj2 = mapped(6791);
  const result = obj2.onboardExistingMember(id, new Set(mapped));
}
({ GUILD_SELECTABLE_CHANNELS_KEY: c4, GUILD_VOCAL_CHANNELS_KEY: c5 } = comparator);
let result = require("obj132").fileFinishedImporting("modules/opt_in_channels/OptInOnboardingUtils.tsx");

export const hasNotSetUpChannelOptIn = function hasNotSetUpChannelOptIn(closure_0) {
  const result = useOptInEnabledForGuild.isOptInEnabledForGuild(closure_0);
  const selfMember = store.getSelfMember(closure_0);
  let num;
  if (selfMember != null) {
    num = selfMember.flags;
  }
  if (num == null) {
    num = 0;
  }
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
  let tmpResult = hasFlag;
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
    tmpResult = useOptInEnabledForGuild;
    const result1 = tmpResult.isOptInEnabledForGuild(id);
    _persistOptInChannelUpdates2.setGuildOptIn(id, !result1);
    const tmpResult1 = _persistOptInChannelUpdates2;
  }
  tmp6 = store2.getOptedInChannels(id).size > 0;
};
export { optIntoAllChannelsForExistingMember };
export const hasClearedGuildOnboardingNotice = function hasClearedGuildOnboardingNotice(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
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
  }
  return hasFlagResult;
};