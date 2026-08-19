// === Module 5285: isChattableChannel ===

// Module 5285 (isChattableChannel)
import shallowEqualDefault from "shallowEqual" /* 643 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import hasFlagAll from "hasFlag" /* 1403 */;
import applyOverwritesAll from "applyOverwrites" /* 4026 */;
import useCanChannelBeDefault from "useCanChannelBeDefault" /* 5288 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "set" /* 5221 */;
import closure_6 from "comparator" /* 1980 */;
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_7 } from "comparator" /* 1980 */;
import closure_8 from "createGuildRecordFromRust" /* 1910 */;
import closure_9 from "getUncachedChannelPermissions" /* 4021 */;
import { OnboardingConnectionType } from "serverPromptToClientPrompt" /* 5286 */;
import ME from "ME" /* 676 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4009 */;

require = arg1;
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
      const tmp7 = applyOverwritesAll;
    }
    const obj = useCanChannelBeDefault;
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
    let tmp = require;
    let tmp2 = dependencyMap;
    let obj2 = useCanChannelBeDefault;
    if (obj2.canChannelBeDefault(channel.guild_id, channel.id)) {
      let tmp3 = channel;
      if (!arr.includes(obj.id)) {
        let tmp5 = channel;
        if (!obj.isThread()) {
          let tmp6 = channel;
          if (null != obj.parent_id) {
            let tmp7 = channel;
          }
        }
      } else {
        let tmp4 = channel;
      }
      let tmp8 = channel;
      let fnResult = fn(obj);
      let tmp10 = fnResult;
      if (fn2(fnResult)) {
        let tmp11 = fnResult;
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
    const tmp2 = importDefault;
    const tmp4 = shallowEqualDefault(arg0[0], arg1[0]) && shallowEqualDefault(arg0[1], arg1[1]);
  }
  return tmp;
}
({ GuildFeatures: unpackModuleId, Permissions: closure_12 } = ME);
let date = new Date(1682488800000);
const result = require("set").fileFinishedImporting("modules/guild_onboarding/GuildOnboardingUtils.tsx");

export const ONBOARDING_EPOCH = date;
export const useGuildOnboardingSettingsAvailable = function useGuildOnboardingSettingsAvailable(arg0) {
  const _require = arg0;
  const items = [closure_8, closure_9];
  return _require(589).useStateFromStores(items, () => {
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
export const isGuildOnboardingSettingsAvailable = function isGuildOnboardingSettingsAvailable(id) {
  guild = guild.getGuild(id);
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
  const mapped = store.getChannels(guildId)[closure_7].map((channel) => channel.channel);
  let set;
  set = new Set();
  const item = arr.forEach((options) => {
    options = options.options;
    let item = options.forEach((channelIds) => {
      if (channelIds != null) {
        channelIds = channelIds.channelIds;
        if (channelIds != null) {
          const item = channelIds.forEach((arg0) => {
            set.add(arg0);
          });
        }
      }
    });
  });
  const item1 = defaultChannelIds.forEach((arg0) => set.add(arg0));
  const found = mapped.filter((isCategory) => {
    const isCategoryResult = isCategory.isCategory();
    let tmp2 = !isCategoryResult;
    if (!isCategoryResult) {
      tmp2 = !isCategory.isThread();
    }
    if (tmp2) {
      tmp2 = !callback(table[10])(isCategory);
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
    })
  ];
  return items;
};
export const useChannelCoverageForOnboarding = function useChannelCoverageForOnboarding(arg0, arr, arr2) {
  let set = arg0;
  const items = [closure_6];
  const obj = set(589);
  const mapped = set(589).useStateFromStores(items, () => closure_1_6.getChannels(set))[closure_7].map((channel) => channel.channel);
  set = undefined;
  set = new Set();
  let item = arr.forEach((options) => {
    options = options.options;
    let item = options.forEach((channelIds) => {
      if (channelIds != null) {
        channelIds = channelIds.channelIds;
        if (channelIds != null) {
          const item = channelIds.forEach((arg0) => {
            set.add(arg0);
          });
        }
      }
    });
  });
  const item1 = arr2.forEach((arg0) => set.add(arg0));
  const found = mapped.filter((isCategory) => {
    const isCategoryResult = isCategory.isCategory();
    let tmp2 = !isCategoryResult;
    if (!isCategoryResult) {
      tmp2 = !isCategory.isThread();
    }
    if (tmp2) {
      tmp2 = !callback(table[10])(isCategory);
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
      const tmp7 = applyOverwritesAll;
    }
    const obj2 = useCanChannelBeDefault;
  }
  return tmp;
};
export { isChattableChannel };
export const useIsChattableChannel = function useIsChattableChannel(arg0) {
  const _require = arg0;
  const items = [closure_4];
  return _require(589).useStateFromStores(items, () => {
    const channel = closure_1_4.getChannel(callback);
    let isNotNullishResult = callback(closure_1_3[13]).isNotNullish(channel);
    if (isNotNullishResult) {
      let tmp5 = null != channel;
      if (tmp5) {
        const canChannelBeDefaultResult = callback(tmp2[11]).canChannelBeDefault(channel.guild_id, channel.id);
        if (!canChannelBeDefaultResult) {
          tmp5 = canChannelBeDefaultResult;
        } else {
          const isForumChannelResult = channel.isForumChannel();
          const canEveryoneRole = closure_1_2(tmp2[12]).canEveryoneRole;
          let SEND_MESSAGES_IN_THREADS = closure_1_12;
          if (isForumChannelResult) {
            SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
            let canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS, channel);
          } else {
            canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS.SEND_MESSAGES, channel);
          }
          const tmp9 = closure_1_2(tmp2[12]);
        }
        const tmpResult = callback(tmp2[11]);
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
  closure_2 = undefined;
  let tmp = getFlattenedDefaultChannels(closure_0, closure_1_4, (id) => id.id, fn);
  closure_2 = tmp;
  const item = onboardingPromptsForOnboarding.forEach((required) => {
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
      HermesBuiltin.arraySpread(options.reduce((arg0, channelIds) => {
        if (null == channelIds.channelIds) {
          return [];
        } else {
          let tmp = arg0;
          const arr = closure_1_16(closure_0, channelIds.channelIds, (id) => id.id, (arg0) => {
            let tmp = callback(arg0);
            if (tmp) {
              tmp = !closure_2.includes(arg0);
            }
            return tmp;
          });
          if (arr.length < arg0.length) {
            tmp = arr;
          }
          return tmp;
        }
      }, closure_1_16(closure_0, channelIds, (id) => id.id)), 0);
      HermesBuiltin.apply(items, navigation);
      let tmp = closure_1_16;
      const tmp2 = closure_0;
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
      return arr.filter((arg0) => {
        let channel;
        if (dependencyMap[arg0] != null) {
          channel = tmp.channel;
        }
        let tmp3 = null != channel;
        if (tmp3) {
          const canChannelBeDefaultResult = dependencyMap(closure_1_3[11]).canChannelBeDefault(channel.guild_id, channel.id);
          if (!canChannelBeDefaultResult) {
            tmp3 = canChannelBeDefaultResult;
          } else {
            const isForumChannelResult = channel.isForumChannel();
            const canEveryoneRole = closure_1_2(tmp5[12]).canEveryoneRole;
            let SEND_MESSAGES_IN_THREADS = closure_1_12;
            if (isForumChannelResult) {
              SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
              let canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS, channel);
            } else {
              canEveryoneRoleResult = canEveryoneRole(SEND_MESSAGES_IN_THREADS.SEND_MESSAGES, channel);
            }
            const tmp9 = closure_1_2(tmp5[12]);
          }
          const obj = dependencyMap(closure_1_3[11]);
          tmp5 = closure_1_3;
        }
        return tmp3;
      });
    })(arr.map((id) => id.id), obj),
    arr
  ];
  return items;
};
export const useChattableDefaultChannels = function useChattableDefaultChannels(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let items = [closure_6];
  let items1 = [arg0, arg1];
  return _require(589).useStateFromStores(items, () => {
    const items = [];
    const items1 = [];
    const iter = closure_1_6.getChannels(callback)[closure_1_7][Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = callback;
      let tmp4 = closure_1_3;
      let obj = callback(closure_1_3[11]);
      let canChannelBeDefaultResult = obj.canChannelBeDefault(nextResult.channel.guild_id, nextResult.channel.id);
      if (canChannelBeDefaultResult) {
        let obj2 = set;
        let tmp6 = nextResult;
        let hasItem = set.has(tmp2.channel.id);
        if (hasItem) {
          let tmp8 = nextResult;
          let channel = tmp2.channel;
          hasItem = !channel.isCategory();
        }
        if (!hasItem) {
          let tmp9 = nextResult;
          let channel2 = tmp2.channel;
          let isThreadResult = channel2.isThread();
          let hasItem1 = !isThreadResult;
          if (!isThreadResult) {
            let tmp12 = nextResult;
            hasItem1 = null != tmp2.channel.parent_id;
          }
          if (hasItem1) {
            let tmp13 = nextResult;
            hasItem1 = obj2.has(tmp2.channel.parent_id);
          }
          hasItem = hasItem1;
        }
        canChannelBeDefaultResult = hasItem;
      }
      if (canChannelBeDefaultResult) {
        let tmp14 = nextResult;
        {}[tmp2.channel.id] = tmp2;
        let arr = items.push(tmp2.channel);
        let tmp16 = closure_1_15;
        if (closure_1_15(tmp2.channel)) {
          let tmp17 = nextResult;
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
  const mapped = selectedOptions.map((roleIds) => roleIds.roleIds);
  const flatResult = mapped.flat();
  return new Set(mapped.flat().filter(isDiscordFrontendDevelopment.isNotNullish));
};
export const getSelectedChannelIds = function getSelectedChannelIds(selectedOptions) {
  const mapped = selectedOptions.map((channelIds) => channelIds.channelIds);
  const flatResult = mapped.flat();
  return new Set(mapped.flat().filter(isDiscordFrontendDevelopment.isNotNullish));
};
export const getProviderConnectionState = function getProviderConnectionState(connections) {
  const found = connections.filter((connection_type) => {
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
      const account = closure_1_5.getAccount(null, provider_id);
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
export const getApplicationConnectionState = function getApplicationConnectionState(connections) {
  const found = connections.filter((connection_type) => {
    let BooleanResult = connection_type.connection_type === constants.APPLICATION;
    if (BooleanResult) {
      const _Boolean = Boolean;
      BooleanResult = Boolean(connection_type.application_id);
    }
    return BooleanResult;
  });
  const connected = [];
  const notConnected = [];
  closure_2 = connected(FetchState[16]).default;
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