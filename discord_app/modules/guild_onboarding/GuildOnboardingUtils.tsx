// discord_app/modules/guild_onboarding/GuildOnboardingUtils.tsx
import shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import hasFlagAll from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import applyOverwritesAll from "../../utils/PermissionUtils.tsx";
import useCanChannelBeDefault from "DefaultChannelUtils.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import set from "../../stores/ConnectedAccountsStore.tsx";
import comparator from "../../stores/GuildChannelStore.tsx";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_7 } from "../../stores/GuildChannelStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import { OnboardingConnectionType } from "GuildOnboardingPromptsConstants.tsx";
import ME from "../../Constants.tsx";
import { GuildMemberFlags } from "../guild_member/GuildMemberConstants.tsx";

require = fn;
function isChattableChannel(guild_id) {
  let tmp = null != guild_id;
  if (tmp) {
    const canChannelBeDefaultResult = useCanChannelBeDefault.canChannelBeDefault(guild_id.guild_id, guild_id.id);
    if (!canChannelBeDefaultResult) {
      tmp = canChannelBeDefaultResult;
    } else {
      const isForumChannelResult = guild_id.isForumChannel();
      const canEveryoneRole = applyOverwritesAll.canEveryoneRole;
      let SEND_MESSAGES_IN_THREADS = closure_12;
      if (isForumChannelResult) {
        SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
        let canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS, guild_id);
      } else {
        canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS.SEND_MESSAGES, guild_id);
      }
    }
  }
  return tmp;
}
function getFlattenedDefaultChannels(closure_0, arr, arg2, fn) {
  fn = arg2;
  if (arg2 === undefined) {
    fn = function u(arg0) {
      return arg0;
    };
  }
  let fn2 = fn;
  if (fn === undefined) {
    fn2 = function s(fnResult) {
      return true;
    };
  }
  const items = [];
  const iter = store.getChannels(closure_0)[closure_7][Symbol.iterator]();
  while (iter !== undefined) {
    let channel = iter.next().channel;
    let obj = channel;
    let obj2 = useCanChannelBeDefault;
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
    tmp = shallowEqualDefault(arg0[0], arg1[0]) && shallowEqualDefault(arg0[1], arg1[1]);
    const tmp4 = shallowEqualDefault(arg0[0], arg1[0]) && shallowEqualDefault(arg0[1], arg1[1]);
  }
  return tmp;
}
({ GuildFeatures: unpackModuleId, Permissions: closure_12 } = ME);
let date = new Date(1682488800000);
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding/GuildOnboardingUtils.tsx");

export const ONBOARDING_EPOCH = date;
export const useGuildOnboardingSettingsAvailable = function useGuildOnboardingSettingsAvailable(arg0) {
  const _require = arg0;
  const items = [closure_8, closure_9];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const guild = closure_1_8.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(closure_1_11.COMMUNITY);
    }
    let tmp4 = hasItem;
    const canResult = closure_1_9.can(closure_1_12.MANAGE_GUILD, guild);
    if (tmp4) {
      tmp4 = canResult;
    }
    if (tmp4) {
      tmp4 = canResult1;
    }
    return tmp4;
  });
};
export const isGuildOnboardingSettingsAvailable = function isGuildOnboardingSettingsAvailable(closure_0) {
  guild = guild.getGuild(closure_0);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants.COMMUNITY);
  }
  let tmp4 = hasItem;
  const canResult = closure_9.can(constants2.MANAGE_GUILD, guild);
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
            let hasFlagResult = hasFlagAll.hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
            if (hasFlagResult) {
              hasFlagResult = !hasFlagAll.hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
              const tmp2Result = hasFlagAll;
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
export const getChannelCoverageForOnboarding = function getChannelCoverageForOnboarding(guildId, arr, defaultChannelIds) {
  arr = store.getChannels(guildId)[closure_7];
  const mapped = arr.map((item, index) => item.channel);
  const set = new Set();
  const item = arr.forEach((item, index) => {
    const options = item.options;
    item = options.forEach((item, index) => {
      if (item != null) {
        const channelIds = item.channelIds;
        if (channelIds != null) {
          item = channelIds.forEach((item, index) => {
            set.add(item);
          });
        }
      }
    });
  });
  const item1 = defaultChannelIds.forEach((item, index) => set.add(item));
  const found = mapped.filter((item, index) => {
    const isCategoryResult = item.isCategory();
    let tmp2 = !isCategoryResult;
    if (!isCategoryResult) {
      tmp2 = !item.isThread();
    }
    if (tmp2) {
      tmp2 = !callback(table[10])(item);
    }
    return tmp2;
  });
  const items = [
    found.filter((item, index) => {
      let hasItem = set.has(item.id);
      if (!hasItem) {
        hasItem = null != item.parent_id && set.has(item.parent_id);
        const tmp3 = null != item.parent_id && set.has(item.parent_id);
      }
      return hasItem;
    }),
    found.filter((item, index) => {
      let hasItem = set.has(item.id);
      if (!hasItem) {
        hasItem = null != item.parent_id && set.has(item.parent_id);
        const tmp3 = null != item.parent_id && set.has(item.parent_id);
      }
      return !hasItem;
    })
  ];
  return items;
};
export const useChannelCoverageForOnboarding = function useChannelCoverageForOnboarding(arg0, arr, arr2) {
  let set = arg0;
  const items = [closure_6];
  arr2 = set(589).useStateFromStores(items, () => closure_1_6.getChannels(set))[closure_7];
  const mapped = arr2.map((item, index) => item.channel);
  set = new Set();
  let item = arr.forEach((item, index) => {
    const options = item.options;
    item = options.forEach((item, index) => {
      if (item != null) {
        const channelIds = item.channelIds;
        if (channelIds != null) {
          item = channelIds.forEach((item, index) => {
            set.add(item);
          });
        }
      }
    });
  });
  const item1 = arr2.forEach((item, index) => set.add(item));
  const found = mapped.filter((item, index) => {
    const isCategoryResult = item.isCategory();
    let tmp2 = !isCategoryResult;
    if (!isCategoryResult) {
      tmp2 = !item.isThread();
    }
    if (tmp2) {
      tmp2 = !callback(table[10])(item);
    }
    return tmp2;
  });
  const items1 = [
    found.filter((item, index) => {
      let hasItem = set.has(item.id);
      if (!hasItem) {
        hasItem = null != item.parent_id && set.has(item.parent_id);
        const tmp3 = null != item.parent_id && set.has(item.parent_id);
      }
      return hasItem;
    }),
    found.filter((item, index) => {
      let hasItem = set.has(item.id);
      if (!hasItem) {
        hasItem = null != item.parent_id && set.has(item.parent_id);
        const tmp3 = null != item.parent_id && set.has(item.parent_id);
      }
      return !hasItem;
    })
  ];
  return items1;
};
export const isChattableChannelId = function isChattableChannelId(arg0) {
  channel = channel.getChannel(arg0);
  let tmp = null != channel;
  if (tmp) {
    const canChannelBeDefaultResult = useCanChannelBeDefault.canChannelBeDefault(channel.guild_id, channel.id);
    if (!canChannelBeDefaultResult) {
      tmp = canChannelBeDefaultResult;
    } else {
      const isForumChannelResult = channel.isForumChannel();
      const canEveryoneRole = applyOverwritesAll.canEveryoneRole;
      let SEND_MESSAGES_IN_THREADS = closure_12;
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
  const _require = arg0;
  const items = [closure_4];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const channel = closure_1_4.getChannel(callback);
    let isNotNullishResult = callback(dependencyMap[13]).isNotNullish(channel);
    if (isNotNullishResult) {
      let tmp5 = null != channel;
      if (tmp5) {
        const canChannelBeDefaultResult = callback(dependencyMap[11]).canChannelBeDefault(channel.guild_id, channel.id);
        if (!canChannelBeDefaultResult) {
          tmp5 = canChannelBeDefaultResult;
        } else {
          const isForumChannelResult = channel.isForumChannel();
          const canEveryoneRole = applyOverwritesAll.canEveryoneRole;
          let SEND_MESSAGES_IN_THREADS = closure_1_12;
          if (isForumChannelResult) {
            SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
            let canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS, channel);
          } else {
            canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS.SEND_MESSAGES, channel);
          }
        }
        const tmpResult = callback(dependencyMap[11]);
      }
      isNotNullishResult = tmp5;
    }
    return isNotNullishResult;
  });
};
export const getMinimumSetOfDefaultChannelIds = function getMinimumSetOfDefaultChannelIds(closure_0, closure_1_4, onboardingPromptsForOnboarding, arg3) {
  let fn = arg3;
  if (arg3 === undefined) {
    fn = function o() {
      return true;
    };
  }
  let tmp = getFlattenedDefaultChannels(closure_0, closure_1_4, (id) => id.id, fn);
  closure_2 = tmp;
  const item = onboardingPromptsForOnboarding.forEach((item, index) => {
    if (item.required) {
      const first = item.options[0];
      let channelIds;
      if (first != null) {
        channelIds = first.channelIds;
      }
      if (channelIds == null) {
        channelIds = [];
      }
      const options = item.options;
      const push = navigation.push;
      const items = [];
      HermesBuiltin.arraySpread(options.reduce((acc, item, index) => {
        if (null == item.channelIds) {
          return [];
        } else {
          let tmp = acc;
          const arr = closure_1_16(closure_0, item.channelIds, (id) => id.id, (arg0) => {
            let tmp = callback(arg0);
            if (tmp) {
              tmp = !closure_2.includes(arg0);
            }
            return tmp;
          });
          if (arr.length < acc.length) {
            tmp = arr;
          }
          return tmp;
        }
      }, getFlattenedDefaultChannels(closure_0, channelIds, (id) => id.id)), 0);
      HermesBuiltin.apply(items, navigation);
    }
  });
  return tmp;
};
export const getChattableDefaultChannels = function getChattableDefaultChannels(closure_0, arr) {
  arr = getFlattenedDefaultChannels(closure_0, arr);
  let obj = {};
  for (const item10015 of tmp) {
    obj[item10015.channel.id] = item10015;
    continue;
  }
  const items = [
    (function filterChattableChannels(arr, arg1) {
      closure_0 = arg1;
      return arr.filter((item, index) => {
        let channel;
        if (dependencyMap[item] != null) {
          channel = tmp.channel;
        }
        let tmp3 = null != channel;
        if (tmp3) {
          const canChannelBeDefaultResult = dependencyMap(closure_1_3[11]).canChannelBeDefault(channel.guild_id, channel.id);
          if (!canChannelBeDefaultResult) {
            tmp3 = canChannelBeDefaultResult;
          } else {
            const isForumChannelResult = channel.isForumChannel();
            const canEveryoneRole = closure_1_2(closure_1_3[12]).canEveryoneRole;
            let SEND_MESSAGES_IN_THREADS = closure_1_12;
            if (isForumChannelResult) {
              SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
              let canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS, channel);
            } else {
              canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS.SEND_MESSAGES, channel);
            }
            const tmp9 = closure_1_2(closure_1_3[12]);
          }
          const obj = dependencyMap(closure_1_3[11]);
        }
        return tmp3;
      });
    })(arr.map((item, index) => item.id), obj),
    arr
  ];
  return items;
};
export const useChattableDefaultChannels = function useChattableDefaultChannels(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let items = [closure_6];
  let items1 = [arg0, arg1];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const items = [];
    const items1 = [];
    const iter = closure_1_6.getChannels(callback)[closure_1_7][Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let obj = callback(dependencyMap[11]);
      let canChannelBeDefaultResult = obj.canChannelBeDefault(nextResult.channel.guild_id, nextResult.channel.id);
      if (canChannelBeDefaultResult) {
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
            hasItem1 = set.has(tmp2.channel.parent_id);
          }
          hasItem = hasItem1;
        }
        canChannelBeDefaultResult = hasItem;
      }
      if (canChannelBeDefaultResult) {
        {}[tmp2.channel.id] = tmp2;
        let arr = items.push(tmp2.channel);
        if (isChattableChannel(tmp2.channel)) {
          arr = items1.push(tmp2.channel.id);
        }
      }
      continue;
    }
    const items2 = [items1, items];
    return items2;
  }, items1, areStatesEqual);
};
export const getSelectedRoleIds = function getSelectedRoleIds(selectedOptions) {
  const mapped = selectedOptions.map((item, index) => item.roleIds);
  const flatResult = mapped.flat();
  return new Set(mapped.flat().filter(isDiscordFrontendDevelopment.isNotNullish));
};
export const getSelectedChannelIds = function getSelectedChannelIds(selectedOptions) {
  const mapped = selectedOptions.map((item, index) => item.channelIds);
  const flatResult = mapped.flat();
  return new Set(mapped.flat().filter(isDiscordFrontendDevelopment.isNotNullish));
};
export const getProviderConnectionState = function getProviderConnectionState(stateFromStores) {
  const found = stateFromStores.filter((item, index) => {
    let BooleanResult = item.connection_type === constants.PROVIDER_CONNECTED_ACCOUNT;
    if (BooleanResult) {
      const _Boolean = Boolean;
      BooleanResult = Boolean(item.provider_id);
    }
    return BooleanResult;
  });
  const connected = [];
  const notConnected = [];
  const item = found.forEach((item, index) => {
    const provider_id = item.provider_id;
    if (!obj.isNullOrEmpty(provider_id)) {
      const account = closure_1_5.getAccount(null, provider_id);
      if (null != account) {
        if (!account.revoked) {
          connected.push(provider_id);
        }
      }
      notConnected.push(provider_id);
    }
    obj = connected(dependencyMap[15]);
  });
  return { connected, notConnected };
};
export const getApplicationConnectionState = function getApplicationConnectionState(stateFromStores) {
  const found = stateFromStores.filter((item, index) => {
    let BooleanResult = item.connection_type === constants.APPLICATION;
    if (BooleanResult) {
      const _Boolean = Boolean;
      BooleanResult = Boolean(item.application_id);
    }
    return BooleanResult;
  });
  const connected = [];
  const notConnected = [];
  closure_2 = connected(FetchState[16]).default;
  FetchState = connected(FetchState[16]).FetchState;
  const item = found.forEach((item, index) => {
    const application_id = item.application_id;
    if (!obj.isNullOrEmpty(application_id)) {
      const newestTokenForApplication = authStore.getNewestTokenForApplication(application_id);
      if (authStore.getFetchStateForApplication(application_id) === FetchState.FETCHED) {
        if (null != newestTokenForApplication) {
          connected.push(application_id);
        }
      }
      notConnected.push(application_id);
    }
    obj = connected(FetchState[15]);
  });
  return { connected, notConnected };
};