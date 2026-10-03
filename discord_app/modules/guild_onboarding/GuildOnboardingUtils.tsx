// === Module 6601: GuildOnboardingUtils ===

// Module 6601 (GuildOnboardingUtils)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 568 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import FlagUtilsAll from "FlagUtils" /* 1390 */;
import StringUtils from "StringUtils" /* 2018 */;
import PermissionUtilsAll from "PermissionUtils" /* 4514 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5846 */;
import DefaultChannelUtils from "DefaultChannelUtils" /* 6597 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;

const require = globalThis.__r;

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
function getFlattenedDefaultChannels(arg0, arr, arg2) {
  let fn = arg2;
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
    const tmp4 = discord_common_shallowEqualDefault(arg0[0], arg1[0]) && discord_common_shallowEqualDefault(arg0[1], arg1[1]);
  }
  return tmp;
}
let closure_7 = fn(4507).GUILD_SELECTABLE_CHANNELS_KEY;
const OnboardingConnectionType = fn(6596).OnboardingConnectionType;
const Constants = fn(1085);
({ GuildFeatures: closure_11, Permissions: closure_12 } = Constants);
const GuildMemberFlags = fn(4495).GuildMemberFlags;
let date = new Date(1682488800000);
fn(558);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      guild = GuildStore.getGuild(closure_0);
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
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
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
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arr, arr2) => {
  _require = arg0;
  const cResult = require("c").c(8);
  let filter = globalThis;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function h() {
      return GuildChannelStore.getChannels(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  arr2 = require("initialize").useStateFromStores(first, tmp6)[closure_7];
  if (cResult[3] === arr2) {
    if (cResult[4] === arr) {
      if (cResult[5] === arr2) {
        return cResult[6];
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function f(channel) {
      return channel.channel;
    };
    cResult[7] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[7];
  }
  const mapped = arr2.map(tmp7);
  const tmpResult = require("initialize");
  closure_129_0 = new filter.Set();
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

  ];
  filter = found.filter;
  items1[1] = filter((id) => {
    let hasItem = set.has(id.id);
    if (!hasItem) {
      hasItem = null != id.parent_id && set.has(id.parent_id);
      const tmp3 = null != id.parent_id && set.has(id.parent_id);
    }
    return !hasItem;
  });
  cResult[3] = arr2;
  cResult[4] = arr;
  cResult[5] = arr2;
  cResult[6] = items1;
  const set = new filter.Set();
}) : ((arg0, arr, arr2) => {
  _require = arg0;
  const items = [GuildChannelStore];
  arr2 = require("initialize").useStateFromStores(items, () => GuildChannelStore.getChannels(closure_0))[closure_7];
  const mapped = arr2.map((channel) => channel.channel);
  const obj = require("initialize");
  closure_129_0 = new Set();
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
    })
  ];
  return items1;
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
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
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/GuildOnboardingUtils.tsx");

export const ONBOARDING_EPOCH = date;
export const useGuildOnboardingSettingsAvailable = tmp4;
export const isGuildOnboardingSettingsAvailable = function isGuildOnboardingSettingsAvailable(id) {
  guild = GuildStore.getGuild(id);
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
export const getChannelCoverageForOnboarding = function getChannelCoverageForOnboarding(guildId, arr, defaultChannelIds) {
  arr = GuildChannelStore.getChannels(guildId)[closure_7];
  const mapped = arr.map((channel) => channel.channel);
  const set = new Set();
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
    })
  ];
  return items;
};
export const useChannelCoverageForOnboarding = tmp5;
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
export const useIsChattableChannel = tmp6;
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
      options = required.options;
      const push = navigation.push;
      const items = [];
      HermesBuiltin.arraySpread(options.reduce((acc, channelIds) => {
        if (null == channelIds.channelIds) {
          return [];
        } else {
          let tmp = acc;
          const arr = getFlattenedDefaultChannels(closure_1_0, channelIds.channelIds, (id) => id.id, (arg0) => {
            let tmp = closure_1_1(arg0);
            if (tmp) {
              tmp = !closure_1_2.includes(arg0);
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
          const canChannelBeDefaultResult = require("DefaultChannelUtils").canChannelBeDefault(channel.guild_id, channel.id);
          if (!canChannelBeDefaultResult) {
            tmp3 = canChannelBeDefaultResult;
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
          const obj = require("DefaultChannelUtils");
        }
        return tmp3;
      });
    })(arr.map((id) => id.id), obj),
    arr
  ];
  return items;
};
export const useChattableDefaultChannels = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6, tmp7, areStatesEqual);
  }
  const fn = function s() {
    const items = [];
    const items1 = [];
    const iter = GuildChannelStore.getChannels(closure_0)[closure_7][Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let obj = DefaultChannelUtils;
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
          let arr2 = items1.push(tmp2.channel.id);
        }
      }
      continue;
    }
    const items2 = [items1, items];
    return items2;
  };
  let items1 = [arg0, arg1];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  let obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  let items = [GuildChannelStore];
  let items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    const items = [];
    const items1 = [];
    const iter = GuildChannelStore.getChannels(closure_0)[closure_7][Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let obj = DefaultChannelUtils;
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
          let arr2 = items1.push(tmp2.channel.id);
        }
      }
      continue;
    }
    const items2 = [items1, items];
    return items2;
  }, items1, areStatesEqual);
});
export const getSelectedRoleIds = function getSelectedRoleIds(found) {
  const mapped = found.map((roleIds) => roleIds.roleIds);
  const flatResult = mapped.flat();
  return new Set(mapped.flat().filter(GlobalUtils.isNotNullish));
};
export const getSelectedChannelIds = function getSelectedChannelIds(found) {
  const mapped = found.map((channelIds) => channelIds.channelIds);
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
    obj = StringUtils;
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
  const authStore = connected(FetchState[18]).default;
  FetchState = connected(FetchState[18]).FetchState;
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
    obj = StringUtils;
  });
  return { connected, notConnected };
};