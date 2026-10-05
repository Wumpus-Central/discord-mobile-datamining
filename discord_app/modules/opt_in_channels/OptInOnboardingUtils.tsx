// discord_app/modules/opt_in_channels/OptInOnboardingUtils.tsx
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import GuildMemberConstants from "../guild_member/GuildMemberConstants.tsx";
import GuildOnboardingActionCreatorsDefault from "../guild_onboarding/GuildOnboardingActionCreators.tsx";
import OptInChannelsActionCreators from "OptInChannelsActionCreators.tsx";
import isOptInEnabled from "isOptInEnabled.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import GuildChannelStore_mod from "../../stores/GuildChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let channel, set;

let closure_4;
let hasOwnProperty;
function optIntoAllChannelsForExistingMember(id, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let include = obj.include;
  if (include === undefined) {
    const _Set = Set;
    const self = this;
    let self2 = this;
    include = new Set();
  }
  let exclude = obj.exclude;
  if (exclude === undefined) {
    let tmp2 = globalThis;
    const _Set2 = Set;
    const self3 = this;
    self2 = this;
    exclude = new Set();
  }
  const channels = GuildChannelStore.getChannels(id);
  const items = [...channels[closure_1_5]];
  const found = items.filter((channel) => {
    channel = channel.channel;
    let tmp2 = !channel.isThread();
    channel.isThread();
    if (tmp2) {
      tmp2 = !exclude.has(channel.id);
    }
    return tmp2;
  });
  const mapped = found.map((channel) => channel.channel.id);
  const item = include.forEach((item) => mapped.push(item));
  const onboardExistingMember = GuildOnboardingActionCreatorsDefault.onboardExistingMember;
  GuildOnboardingActionCreatorsDefault;
  set = new Set(mapped);
  const result = onboardExistingMember(id, set);
}
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_4, GUILD_VOCAL_CHANNELS_KEY: hasOwnProperty } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let result = size.fileFinishedImporting("modules/opt_in_channels/OptInOnboardingUtils.tsx");

export const hasNotSetUpChannelOptIn = function hasNotSetUpChannelOptIn(guildId) {
  const obj = isOptInEnabled;
  const result = obj.isOptInEnabledForGuild(guildId);
  const selfMember = GuildMemberStore.getSelfMember(guildId);
  let num;
  if (selfMember != null) {
    num = selfMember.flags;
  }
  if (num == null) {
    num = 0;
  }
  let tmp7 = !result;
  const tmpResult = FlagUtils;
  const hasFlagResult = tmpResult.hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
  const tmp6 = UserGuildSettingsStore.getOptedInChannels(guildId).size > 0;
  if (!result) {
    tmp7 = !hasFlagResult;
  }
  if (tmp7) {
    tmp7 = !tmp6;
  }
  return tmp7;
};
export const toggleShowAllChannels = function toggleShowAllChannels(id) {
  const obj = isOptInEnabled;
  const result = obj.isOptInEnabledForGuild(id);
  const selfMember = GuildMemberStore.getSelfMember(id);
  let num;
  if (selfMember != null) {
    num = selfMember.flags;
  }
  if (num == null) {
    num = 0;
  }
  let tmp7 = !result;
  const tmpResult = FlagUtils;
  const hasFlagResult = tmpResult.hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
  const tmp6 = UserGuildSettingsStore.getOptedInChannels(id).size > 0;
  if (!result) {
    tmp7 = !hasFlagResult;
  }
  if (tmp7) {
    tmp7 = !tmp6;
  }
  if (tmp7) {
    optIntoAllChannelsForExistingMember(id);
  } else {
    const tmpResult3 = isOptInEnabled;
    const result1 = tmpResult3.isOptInEnabledForGuild(id);
    const tmpResult4 = OptInChannelsActionCreators;
    tmpResult4.setGuildOptIn(id, !result1);
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
    const hasFlag = FlagUtils.hasFlag;
    FlagUtils;
    if (guilds != null) {
      if (guilds.guilds[arg0] != null) {
        num = tmp6.guildOnboardingProgress;
      }
    }
    if (num == null) {
      num = 0;
    }
    hasFlagResult = hasFlag(num, preloaded_user_settings.GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
  }
  return hasFlagResult;
};
