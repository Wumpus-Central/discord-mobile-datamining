// discord_app/modules/opt_in_channels/OptInOnboardingUtils.tsx
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import GuildOnboardingActionCreatorsDefault from "../guild_onboarding/GuildOnboardingActionCreators.tsx";
import isOptInEnabled from "isOptInEnabled.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";

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
  const channels = GuildChannelStore.getChannels(id);
  const items = [...channels[closure_1_5]];
  const found = items.filter((channel) => {
    channel = channel.channel;
    const isThreadResult = channel.isThread();
    let tmp2 = !isThreadResult;
    if (!isThreadResult) {
      tmp2 = !exclude.has(channel.id);
    }
    return tmp2;
  });
  const mapped = found.map((channel) => channel.channel.id);
  const item = include.forEach((item) => mapped.push(item));
  const obj2 = GuildOnboardingActionCreatorsDefault;
  const result = obj2.onboardExistingMember(id, new Set(mapped));
}
let GuildChannelStore = fn(2012);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_4, GUILD_VOCAL_CHANNELS_KEY: hasOwnProperty } = GuildChannelStore);
const GuildMemberFlags = fn(4187).GuildMemberFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/OptInOnboardingUtils.tsx");

export const hasNotSetUpChannelOptIn = function hasNotSetUpChannelOptIn(guildId) {
  const result = isOptInEnabled.isOptInEnabledForGuild(guildId);
  const selfMember = GuildMemberStore.getSelfMember(guildId);
  let num;
  if (selfMember != null) {
    num = selfMember.flags;
  }
  if (num == null) {
    num = 0;
  }
  const tmpResult = FlagUtils;
  let tmp7 = !result;
  const hasFlagResult = FlagUtils.hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
  if (!result) {
    tmp7 = !hasFlagResult;
  }
  if (tmp7) {
    tmp7 = !tmp6;
  }
  return tmp7;
};
export const toggleShowAllChannels = function toggleShowAllChannels(id) {
  const result = isOptInEnabled.isOptInEnabledForGuild(id);
  const selfMember = GuildMemberStore.getSelfMember(id);
  let num;
  if (selfMember != null) {
    num = selfMember.flags;
  }
  if (num == null) {
    num = 0;
  }
  let tmpResult = tmp(1384);
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
    tmpResult = tmp(7535);
    const result1 = tmpResult.isOptInEnabledForGuild(id);
    tmp(7113).setGuildOptIn(id, !result1);
    const tmpResult1 = tmp(7113);
  }
};
export { optIntoAllChannelsForExistingMember };
export const hasClearedGuildOnboardingNotice = function hasClearedGuildOnboardingNotice(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = UserSettingsProtoStore;
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
    hasFlagResult = FlagUtils.hasFlag(num, preloaded_user_settings.GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
  }
  return hasFlagResult;
};
