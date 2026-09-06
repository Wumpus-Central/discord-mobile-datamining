// discord_app/modules/guild_onboarding/GuildOnboardingUtils.tsx
import discord_common_shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import FlagUtilsAll from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import isRoleRequiredDefault from "../channel/isRoleRequired.tsx";
import DefaultChannelUtils from "DefaultChannelUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import ConnectedAccountsStore from "../../stores/ConnectedAccountsStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

require = fn;
function isChattableChannel(channel) {
  let tmp = null != channel;
  if (tmp) {
    const canChannelBeDefaultResult = DefaultChannelUtils.canChannelBeDefault(channel.guild_id, channel.id);
    if (!canChannelBeDefaultResult) {
      tmp = canChannelBeDefaultResult;
    } else {
      const isForumChannelResult = channel.isForumChannel();
      const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
      let SEND_MESSAGES_IN_THREADS = constants2;
      if (isForumChannelResult) {
        SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
        let canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS, channel);
      } else {
        canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS.SEND_MESSAGES, channel);
      }
    }
  }
  return tmp;
}
function getFlattenedDefaultChannels(arg0, arr, arg2, fn) {
  fn = arg2;
  if (arg2 === undefined) {
    fn = function u(arg0) {
      return arg0;
    };
  }
  let fn2 = fn;
  if (fn === undefined) {
    fn2 = function s() {
      return true;
    };
  }
  const items = [];
  const iter = GuildChannelStore.getChannels(arg0)[closure_7][Symbol.iterator]();
  while (iter !== undefined) {
    let channel = iter.next().channel;
    let obj = channel;
    let obj2 = DefaultChannelUtils;
    if (obj2.canChannelBeDefault(channel.guild_id, channel.id)) {
      if (!arr.includes(obj.id)) {
        if (!obj.isThread()) {
        }
      }
      let fnResult = fn(obj);
      let tmp10 = fnResult;
      if (fn2(fnResult)) {
        arr = items.push(tmp10);
      }
    }
    continue;
  }
  return items;
}
function areStatesEqual(arg0, arg1) {
  let tmp = arg0[0].length === arg1[0].length && arg0[1].length === arg1[1].length;
  if (tmp) {
    tmp = discord_common_shallowEqualDefault(arg0[0], arg1[0]) && discord_common_shallowEqualDefault(arg0[1], arg1[1]);
    const tmp4 =
      discord_common_shallowEqualDefault(arg0[0], arg1[0]) && discord_common_shallowEqualDefault(arg0[1], arg1[1]);
  }
  return tmp;
}
let closure_7 = fn(2012).GUILD_SELECTABLE_CHANNELS_KEY;
const OnboardingConnectionType = fn(7101).OnboardingConnectionType;
const Constants = fn(1074);
({ GuildFeatures: closure_11, Permissions: closure_12 } = Constants);
const GuildMemberFlags = fn(4187).GuildMemberFlags;
let date = new Date(1682488800000);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/GuildOnboardingUtils.tsx");

export const ONBOARDING_EPOCH = date;
export const useGuildOnboardingSettingsAvailable = function useGuildOnboardingSettingsAvailable(arg0) {
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants.COMMUNITY);
    }
    let tmp4 = hasItem;
    const canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
    if (tmp4) {
      tmp4 = canResult;
    }
    if (tmp4) {
      tmp4 = canResult1;
    }
    return tmp4;
  });
};
export const isGuildOnboardingSettingsAvailable = function isGuildOnboardingSettingsAvailable(id) {
  const guild = GuildStore.getGuild(id);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants.COMMUNITY);
  }
  let tmp4 = hasItem;
  const canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
  if (tmp4) {
    tmp4 = canResult;
  }
  if (tmp4) {
    tmp4 = canResult1;
  }
  return tmp4;
};
export const isBlockedByOnboarding = function isBlockedByOnboarding(guild, selfMember) {
  if (null != guild) {
    const features = guild.features;
    if (features.has(constants.GUILD_ONBOARDING)) {
      if (null != selfMember) {
        if (null != selfMember.joinedAt) {
          const _Date = Date;
          date = new Date(selfMember.joinedAt);
          if (date < date) {
            return false;
          } else {
            let num = selfMember.flags;
            if (num == null) {
              num = 0;
            }
            let hasFlagResult = FlagUtilsAll.hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
            if (hasFlagResult) {
              hasFlagResult = !FlagUtilsAll.hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
              const tmp2Result = FlagUtilsAll;
            }
            return hasFlagResult;
          }
        }
      }
      return false;
    }
  }
  return false;
};
export const showRulesInOnboarding = function showRulesInOnboarding(stateFromStores2, stateFromStores) {
  let hasItem = null != stateFromStores2;
  if (hasItem) {
    const features = stateFromStores2.features;
    hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  if (hasItem) {
    const features2 = stateFromStores2.features;
    hasItem = features2.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  let tmp4 = !hasItem;
  if (!hasItem) {
    tmp4 = null != stateFromStores;
  }
  return tmp4;
};
export const getChannelCoverageForOnboarding = function getChannelCoverageForOnboarding(
  guildId,
  arr,
  defaultChannelIds,
) {
  const mapped = GuildChannelStore.getChannels(guildId)[closure_7].map((channel) => channel.channel);
  const set = new Set();
  const item = arr.forEach((options) => {
    options = options.options;
    let item = options.forEach((channelIds) => {
      if (channelIds != null) {
        channelIds = channelIds.channelIds;
        if (channelIds != null) {
          const item = channelIds.forEach((item) => {
            set.add(item);
          });
        }
      }
    });
  });
  const item1 = defaultChannelIds.forEach((item) => set.add(item));
  const found = mapped.filter((isCategory) => {
    const isCategoryResult = isCategory.isCategory();
    let tmp2 = !isCategoryResult;
    if (!isCategoryResult) {
      tmp2 = !isCategory.isThread();
    }
    if (tmp2) {
      tmp2 = !isRoleRequiredDefault(isCategory);
    }
    return tmp2;
  });
  const items = [
    found.filter((id) => {
      let hasItem = set.has(id.id);
      if (!hasItem) {
        hasItem = null != id.parent_id && set.has(id.parent_id);
        const tmp3 = null != id.parent_id && set.has(id.parent_id);
      }
      return hasItem;
    }),
    found.filter((id) => {
      let hasItem = set.has(id.id);
      if (!hasItem) {
        hasItem = null != id.parent_id && set.has(id.parent_id);
        const tmp3 = null != id.parent_id && set.has(id.parent_id);
      }
      return !hasItem;
    }),
  ];
  return items;
};
export const useChannelCoverageForOnboarding = function useChannelCoverageForOnboarding(arg0, arr, arr2) {
  _require = arg0;
  const items = [GuildChannelStore];
  const obj = require("initialize");
  const mapped = require("initialize")
    .useStateFromStores(items, () => GuildChannelStore.getChannels(closure_0))
    [closure_7].map((channel) => channel.channel);
  arr2 = require("initialize").useStateFromStores(items, () => GuildChannelStore.getChannels(closure_0))[closure_7];
  closure_129_0 = new Set();
  let item = arr.forEach((options) => {
    options = options.options;
    let item = options.forEach((channelIds) => {
      if (channelIds != null) {
        channelIds = channelIds.channelIds;
        if (channelIds != null) {
          const item = channelIds.forEach((item) => {
            set.add(item);
          });
        }
      }
    });
  });
  const item1 = arr2.forEach((item) => set.add(item));
  const found = mapped.filter((isCategory) => {
    const isCategoryResult = isCategory.isCategory();
    let tmp2 = !isCategoryResult;
    if (!isCategoryResult) {
      tmp2 = !isCategory.isThread();
    }
    if (tmp2) {
      tmp2 = !isRoleRequiredDefault(isCategory);
    }
    return tmp2;
  });
  const items1 = [
    found.filter((id) => {
      let hasItem = set.has(id.id);
      if (!hasItem) {
        hasItem = null != id.parent_id && set.has(id.parent_id);
        const tmp3 = null != id.parent_id && set.has(id.parent_id);
      }
      return hasItem;
    }),
    found.filter((id) => {
      let hasItem = set.has(id.id);
      if (!hasItem) {
        hasItem = null != id.parent_id && set.has(id.parent_id);
        const tmp3 = null != id.parent_id && set.has(id.parent_id);
      }
      return !hasItem;
    }),
  ];
  return items1;
};
export const isChattableChannelId = function isChattableChannelId(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  let tmp = null != channel;
  if (tmp) {
    const canChannelBeDefaultResult = DefaultChannelUtils.canChannelBeDefault(channel.guild_id, channel.id);
    if (!canChannelBeDefaultResult) {
      tmp = canChannelBeDefaultResult;
    } else {
      const isForumChannelResult = channel.isForumChannel();
      const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
      let SEND_MESSAGES_IN_THREADS = constants2;
      if (isForumChannelResult) {
        SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
        let canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS, channel);
      } else {
        canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS.SEND_MESSAGES, channel);
      }
    }
  }
  return tmp;
};
export { isChattableChannel };
export const useIsChattableChannel = function useIsChattableChannel(arg0) {
  _require = arg0;
  const items = [ChannelStore];
  return require("initialize").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let isNotNullishResult = GlobalUtils.isNotNullish(channel);
    if (isNotNullishResult) {
      let tmp5 = null != channel;
      if (tmp5) {
        const canChannelBeDefaultResult = DefaultChannelUtils.canChannelBeDefault(channel.guild_id, channel.id);
        if (!canChannelBeDefaultResult) {
          tmp5 = canChannelBeDefaultResult;
        } else {
          const isForumChannelResult = channel.isForumChannel();
          const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
          let SEND_MESSAGES_IN_THREADS = constants2;
          if (isForumChannelResult) {
            SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
            let canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS, channel);
          } else {
            canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS.SEND_MESSAGES, channel);
          }
        }
        const tmpResult = DefaultChannelUtils;
      }
      isNotNullishResult = tmp5;
    }
    return isNotNullishResult;
  });
};
export const getMinimumSetOfDefaultChannelIds = function getMinimumSetOfDefaultChannelIds(arg0, arr, arr, arg3) {
  closure_0 = arg0;
  let fn = arg3;
  if (arg3 === undefined) {
    fn = function o() {
      return true;
    };
  }
  let tmp = getFlattenedDefaultChannels(arg0, arr, (id) => id.id, fn);
  const navigation = tmp;
  const item = arr.forEach((required) => {
    if (required.required) {
      const first = required.options[0];
      let channelIds;
      if (first != null) {
        channelIds = first.channelIds;
      }
      if (channelIds == null) {
        channelIds = [];
      }
      const options = required.options;
      const push = navigation.push;
      const items = [];
      HermesBuiltin.arraySpread(
        options.reduce(
          (acc, channelIds) => {
            if (null == channelIds.channelIds) {
              return [];
            } else {
              let tmp = acc;
              const arr = getFlattenedDefaultChannels(
                closure_1_0,
                channelIds.channelIds,
                (id) => id.id,
                (arg0) => {
                  let tmp = closure_1_1(arg0);
                  if (tmp) {
                    tmp = !closure_1_2.includes(arg0);
                  }
                  return tmp;
                },
              );
              if (arr.length < acc.length) {
                tmp = arr;
              }
              return tmp;
            }
          },
          getFlattenedDefaultChannels(closure_0, channelIds, (id) => id.id),
        ),
        0,
      );
      HermesBuiltin.apply(items, navigation);
    }
  });
  return tmp;
};
export const getChattableDefaultChannels = function getChattableDefaultChannels(arg0, arr) {
  arr = getFlattenedDefaultChannels(arg0, arr);
  let obj = {};
  for (const item10015 of tmp) {
    obj[item10015.channel.id] = item10015;
    continue;
  }
  const items = [
    (function filterChattableChannels(arr, arg1) {
      closure_0 = arg1;
      return arr.filter((item) => {
        let channel;
        if (closure_0[item] != null) {
          channel = tmp.channel;
        }
        let tmp3 = null != channel;
        if (tmp3) {
          const canChannelBeDefaultResult = require("DefaultChannelUtils").canChannelBeDefault(
            channel.guild_id,
            channel.id,
          );
          if (!canChannelBeDefaultResult) {
            tmp3 = canChannelBeDefaultResult;
          } else {
            const isForumChannelResult = channel.isForumChannel();
            const canEveryoneRole = require("PermissionUtils").canEveryoneRole;
            let SEND_MESSAGES_IN_THREADS = constants2;
            if (isForumChannelResult) {
              SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
              let canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS, channel);
            } else {
              canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS.SEND_MESSAGES, channel);
            }
            const tmp9 = require("PermissionUtils");
          }
          const obj = require("DefaultChannelUtils");
          tmp5 = dependencyMap;
        }
        return tmp3;
      });
    })(
      arr.map((id) => id.id),
      obj,
    ),
    arr,
  ];
  return items;
};
export const useChattableDefaultChannels = function useChattableDefaultChannels(arg0, arg1) {
  _require = arg0;
  let items = [GuildChannelStore];
  let items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const items = [];
      const items1 = [];
      const iter = GuildChannelStore.getChannels(closure_0)[closure_7][Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        let obj = DefaultChannelUtils;
        let canChannelBeDefaultResult = obj.canChannelBeDefault(nextResult.channel.guild_id, nextResult.channel.id);
        if (canChannelBeDefaultResult) {
          let obj2 = set;
          let hasItem = set.has(tmp2.channel.id);
          if (hasItem) {
            let channel = tmp2.channel;
            hasItem = !channel.isCategory();
          }
          if (!hasItem) {
            let channel2 = tmp2.channel;
            let isThreadResult = channel2.isThread();
            let hasItem1 = !isThreadResult;
            if (!isThreadResult) {
              hasItem1 = null != tmp2.channel.parent_id;
            }
            if (hasItem1) {
              hasItem1 = obj2.has(tmp2.channel.parent_id);
            }
            hasItem = hasItem1;
          }
          canChannelBeDefaultResult = hasItem;
        }
        if (canChannelBeDefaultResult) {
          {
          }
          [tmp2.channel.id] = tmp2;
          let arr = items.push(tmp2.channel);
          if (isChattableChannel(tmp2.channel)) {
            arr = items1.push(tmp2.channel.id);
          }
        }
        continue;
      }
      const items2 = [items1, items];
      return items2;
    },
    items1,
    areStatesEqual,
  );
};
export const getSelectedRoleIds = function getSelectedRoleIds(selectedOptions) {
  const mapped = selectedOptions.map((roleIds) => roleIds.roleIds);
  const flatResult = mapped.flat();
  return new Set(mapped.flat().filter(GlobalUtils.isNotNullish));
};
export const getSelectedChannelIds = function getSelectedChannelIds(selectedOptions) {
  const mapped = selectedOptions.map((channelIds) => channelIds.channelIds);
  const flatResult = mapped.flat();
  return new Set(mapped.flat().filter(GlobalUtils.isNotNullish));
};
export const getProviderConnectionState = function getProviderConnectionState(stateFromStores) {
  const found = stateFromStores.filter((connection_type) => {
    let BooleanResult = connection_type.connection_type === constants.PROVIDER_CONNECTED_ACCOUNT;
    if (BooleanResult) {
      const _Boolean = Boolean;
      BooleanResult = Boolean(connection_type.provider_id);
    }
    return BooleanResult;
  });
  const connected = [];
  const notConnected = [];
  const item = found.forEach((provider_id) => {
    provider_id = provider_id.provider_id;
    if (!obj.isNullOrEmpty(provider_id)) {
      const account = ConnectedAccountsStore.getAccount(null, provider_id);
      if (null != account) {
        if (!account.revoked) {
          connected.push(provider_id);
        }
      }
      notConnected.push(provider_id);
    }
  });
  return { connected, notConnected };
};
export const getApplicationConnectionState = function getApplicationConnectionState(stateFromStores) {
  const found = stateFromStores.filter((connection_type) => {
    let BooleanResult = connection_type.connection_type === constants.APPLICATION;
    if (BooleanResult) {
      const _Boolean = Boolean;
      BooleanResult = Boolean(connection_type.application_id);
    }
    return BooleanResult;
  });
  const connected = [];
  const notConnected = [];
  const authStore = connected(FetchState[16]).default;
  FetchState = connected(FetchState[16]).FetchState;
  const item = found.forEach((application_id) => {
    application_id = application_id.application_id;
    if (!obj.isNullOrEmpty(application_id)) {
      const newestTokenForApplication = authStore.getNewestTokenForApplication(application_id);
      if (authStore.getFetchStateForApplication(application_id) === FetchState.FETCHED) {
        if (null != newestTokenForApplication) {
          connected.push(application_id);
        }
      }
      notConnected.push(application_id);
    }
  });
  return { connected, notConnected };
};
