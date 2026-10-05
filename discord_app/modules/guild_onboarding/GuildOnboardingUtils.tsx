// discord_app/modules/guild_onboarding/GuildOnboardingUtils.tsx
import shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import FlagUtilsAll from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import StringUtils from "../../utils/StringUtils.tsx";
import GuildMemberConstants from "../guild_member/GuildMemberConstants.tsx";
import GuildChannelStore2 from "../../stores/GuildChannelStore.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import isRoleRequiredDefault from "../channel/isRoleRequired.tsx";
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants.tsx";
import DefaultChannelUtils from "DefaultChannelUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import ConnectedAccountsStore from "../../stores/ConnectedAccountsStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, application_id, authStore, navigation, provider_id, set;

let closure_12;
let unpackModuleId;
const f92533 = (isCategory) => {
  const isCategoryResult = isCategory.isCategory();
  const tmp2 = !isCategoryResult && !isCategory.isThread() && !isRoleRequiredDefault(isCategory);
  return tmp2;
};
function isChattableChannel(channel) {
  let tmp = null != channel;
  if (tmp) {
    const obj = DefaultChannelUtils;
    let canChannelBeDefaultResult = obj.canChannelBeDefault(channel.guild_id, channel.id);
    if (canChannelBeDefaultResult) {
      let canEveryoneRoleResult;
      const isForumChannelResult = channel.isForumChannel();
      const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
      PermissionUtilsAll;
      if (isForumChannelResult) {
        canEveryoneRoleResult = canEveryoneRole(constants2.SEND_MESSAGES_IN_THREADS, channel);
      } else {
        canEveryoneRoleResult = canEveryoneRole(constants2.SEND_MESSAGES, channel);
      }
      canChannelBeDefaultResult = canEveryoneRoleResult;
    }
    tmp = canChannelBeDefaultResult;
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
    tmp = shallowEqualDefault(arg0[0], arg1[0]) && shallowEqualDefault(arg0[1], arg1[1]);
    shallowEqualDefault(arg0[0], arg1[0]) && shallowEqualDefault(arg0[1], arg1[1]);
  }
  return tmp;
}
let closure_7 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const OnboardingConnectionType = GuildOnboardingPromptsConstants.OnboardingConnectionType;
({ GuildFeatures: unpackModuleId, Permissions: closure_12 } = Constants);
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let date = new Date(1682488800000);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          const guild = GuildStore.getGuild(closure_0);
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(unpackModuleId.COMMUNITY);
          }
          let tmp4 = hasItem;
          const canResult = PermissionStore.can(constants.MANAGE_GUILD, guild);
          const canResult1 = PermissionStore.can(constants.MANAGE_ROLES, guild);
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
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [GuildStore, PermissionStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(unpackModuleId.COMMUNITY);
        }
        let tmp4 = hasItem;
        const canResult = PermissionStore.can(constants.MANAGE_GUILD, guild);
        const canResult1 = PermissionStore.can(constants.MANAGE_ROLES, guild);
        if (tmp4) {
          tmp4 = canResult;
        }
        if (tmp4) {
          tmp4 = canResult1;
        }
        return tmp4;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arr, arr2) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp8;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(8);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function h() {
          return GuildChannelStore.getChannels(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      arr2 = tmpResult.useStateFromStores(first, tmp6)[closure_7];
      if (cResult[3] === arr2) {
        if (cResult[4] === arr) {
          let tmp7;
          if (cResult[5] === arr2) {
            tmp7 = cResult[6];
          }
          return tmp7;
        }
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function f(channel) {
          return channel.channel;
        };
        cResult[7] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[7];
      }
      const mapped = arr2.map(tmp8);
      new Set();
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
      const found = mapped.filter(f92533);
      const items1 = [
        found.filter((id) => {
          let hasItem = set.has(id.id);
          if (!hasItem) {
            hasItem = null != id.parent_id && set.has(id.parent_id);
            null != id.parent_id && set.has(id.parent_id);
          }
          return hasItem;
        }),
        found.filter((id) => {
          let hasItem = set.has(id.id);
          if (!hasItem) {
            hasItem = null != id.parent_id && set.has(id.parent_id);
            null != id.parent_id && set.has(id.parent_id);
          }
          return !hasItem;
        }),
      ];
      cResult[3] = arr2;
      cResult[4] = arr;
      cResult[5] = arr2;
      cResult[6] = items1;
      tmp7 = items1;
    }
  : (arg0, arr, arr2) => {
      let closure_0;
      _require = arg0;
      const items = [GuildChannelStore];
      const obj = require("get initialized");
      arr2 = obj.useStateFromStores(items, () => GuildChannelStore.getChannels(closure_0))[closure_7];
      const mapped = arr2.map((channel) => channel.channel);
      new Set();
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
      const found = mapped.filter(f92533);
      const items1 = [
        found.filter((id) => {
          let hasItem = set.has(id.id);
          if (!hasItem) {
            hasItem = null != id.parent_id && set.has(id.parent_id);
            null != id.parent_id && set.has(id.parent_id);
          }
          return hasItem;
        }),
        found.filter((id) => {
          let hasItem = set.has(id.id);
          if (!hasItem) {
            hasItem = null != id.parent_id && set.has(id.parent_id);
            null != id.parent_id && set.has(id.parent_id);
          }
          return !hasItem;
        }),
      ];
      return items1;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          const channel = ChannelStore.getChannel(closure_0);
          const obj2 = GlobalUtils;
          let isNotNullishResult = obj2.isNotNullish(channel);
          if (isNotNullishResult) {
            let tmp5 = null != channel;
            if (tmp5) {
              const tmpResult = DefaultChannelUtils;
              let canChannelBeDefaultResult = tmpResult.canChannelBeDefault(channel.guild_id, channel.id);
              if (canChannelBeDefaultResult) {
                let canEveryoneRoleResult;
                const isForumChannelResult = channel.isForumChannel();
                const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
                PermissionUtilsAll;
                if (isForumChannelResult) {
                  canEveryoneRoleResult = canEveryoneRole(constants.SEND_MESSAGES_IN_THREADS, channel);
                } else {
                  canEveryoneRoleResult = canEveryoneRole(constants.SEND_MESSAGES, channel);
                }
                canChannelBeDefaultResult = canEveryoneRoleResult;
              }
              tmp5 = canChannelBeDefaultResult;
            }
            isNotNullishResult = tmp5;
          }
          return isNotNullishResult;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [ChannelStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        const channel = ChannelStore.getChannel(closure_0);
        const obj2 = GlobalUtils;
        let isNotNullishResult = obj2.isNotNullish(channel);
        if (isNotNullishResult) {
          let tmp5 = null != channel;
          if (tmp5) {
            const tmpResult = DefaultChannelUtils;
            let canChannelBeDefaultResult = tmpResult.canChannelBeDefault(channel.guild_id, channel.id);
            if (canChannelBeDefaultResult) {
              let canEveryoneRoleResult;
              const isForumChannelResult = channel.isForumChannel();
              const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
              PermissionUtilsAll;
              if (isForumChannelResult) {
                canEveryoneRoleResult = canEveryoneRole(constants.SEND_MESSAGES_IN_THREADS, channel);
              } else {
                canEveryoneRoleResult = canEveryoneRole(constants.SEND_MESSAGES, channel);
              }
              canChannelBeDefaultResult = canEveryoneRoleResult;
            }
            tmp5 = canChannelBeDefaultResult;
          }
          isNotNullishResult = tmp5;
        }
        return isNotNullishResult;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let first;
      _require = arg0;
      set = arg1;
      let obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        let tmp6;
        let tmp7;
        if (cResult[2] === arg0) {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        const tmpResult = tmp(504);
        let tmp9 = tmpResult;
        let tmp12 = tmp7;
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
              if (hasItem1) {
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
            ({})[tmp2.channel.id] = tmp2;
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
    }
  : (arg0, arg1) => {
      let closure_0;
      _require = arg0;
      set = arg1;
      let obj = require("get initialized");
      let items = [GuildChannelStore];
      let items1 = [arg0, arg1];
      return obj.useStateFromStores(
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
              let hasItem = set.has(tmp2.channel.id);
              if (hasItem) {
                let channel = tmp2.channel;
                hasItem = !channel.isCategory();
              }
              if (!hasItem) {
                let channel2 = tmp2.channel;
                let isThreadResult = channel2.isThread();
                let hasItem1 = !isThreadResult;
                if (hasItem1) {
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
              ({})[tmp2.channel.id] = tmp2;
              let arr = items.push(tmp2.channel);
              if (isChattableChannel(tmp2.channel)) {
                let arr2 = items1.push(tmp2.channel.id);
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
const result = size.fileFinishedImporting("modules/guild_onboarding/GuildOnboardingUtils.tsx");

export const ONBOARDING_EPOCH = date;
export const useGuildOnboardingSettingsAvailable = tmp4;
export const isGuildOnboardingSettingsAvailable = function isGuildOnboardingSettingsAvailable(id) {
  const guild = GuildStore.getGuild(id);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(unpackModuleId.COMMUNITY);
  }
  let tmp4 = hasItem;
  const canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
  const canResult1 = PermissionStore.can(constants2.MANAGE_ROLES, guild);
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
    if (features.has(unpackModuleId.GUILD_ONBOARDING)) {
      if (null != selfMember) {
        if (null != selfMember.joinedAt) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          date = new Date(selfMember.joinedAt);
          if (date < date) {
            return false;
          } else {
            let num = selfMember.flags;
            if (num == null) {
              num = 0;
            }
            const obj = FlagUtilsAll;
            let hasFlagResult = obj.hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
            if (hasFlagResult) {
              const tmp2Result = FlagUtilsAll;
              hasFlagResult = !tmp2Result.hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
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
    hasItem = features.has(unpackModuleId.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  if (hasItem) {
    const features2 = stateFromStores2.features;
    hasItem = features2.has(unpackModuleId.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  return !hasItem && null != stateFromStores;
};
export const getChannelCoverageForOnboarding = function getChannelCoverageForOnboarding(
  guildId,
  arr,
  defaultChannelIds,
) {
  arr = GuildChannelStore.getChannels(guildId)[closure_7];
  const mapped = arr.map((channel) => channel.channel);
  set = new Set();
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
  const found = mapped.filter(f92533);
  const items = [
    found.filter((id) => {
      let hasItem = set.has(id.id);
      if (!hasItem) {
        hasItem = null != id.parent_id && set.has(id.parent_id);
        null != id.parent_id && set.has(id.parent_id);
      }
      return hasItem;
    }),
    found.filter((id) => {
      let hasItem = set.has(id.id);
      if (!hasItem) {
        hasItem = null != id.parent_id && set.has(id.parent_id);
        null != id.parent_id && set.has(id.parent_id);
      }
      return !hasItem;
    }),
  ];
  return items;
};
export const useChannelCoverageForOnboarding = tmp5;
export const isChattableChannelId = function isChattableChannelId(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  let tmp = null != channel;
  if (tmp) {
    const obj2 = DefaultChannelUtils;
    let canChannelBeDefaultResult = obj2.canChannelBeDefault(channel.guild_id, channel.id);
    if (canChannelBeDefaultResult) {
      let canEveryoneRoleResult;
      const isForumChannelResult = channel.isForumChannel();
      const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
      PermissionUtilsAll;
      if (isForumChannelResult) {
        canEveryoneRoleResult = canEveryoneRole(constants2.SEND_MESSAGES_IN_THREADS, channel);
      } else {
        canEveryoneRoleResult = canEveryoneRole(constants2.SEND_MESSAGES, channel);
      }
      canChannelBeDefaultResult = canEveryoneRoleResult;
    }
    tmp = canChannelBeDefaultResult;
  }
  return tmp;
};
export { isChattableChannel };
export const useIsChattableChannel = tmp6;
export const getMinimumSetOfDefaultChannelIds = function getMinimumSetOfDefaultChannelIds(
  arg0,
  arr,
  onboardingPromptsForOnboarding,
  arg3,
) {
  let closure_0 = arg0;
  let fn = arg3;
  if (arg3 === undefined) {
    fn = function o() {
      return true;
    };
  }
  let tmp = getFlattenedDefaultChannels(arg0, arr, (id) => id.id, fn);
  navigation = tmp;
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
      HermesBuiltin.arraySpread(
        items,
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
                  const tmp = closure_1_1(arg0) && !closure_1_2.includes(arg0);
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
      HermesBuiltin.apply(push, items, navigation);
    }
  });
  return tmp;
};
export const getChattableDefaultChannels = function getChattableDefaultChannels(arg0, arr) {
  function filterChattableChannels(arr, arg1) {
    let closure_0 = arg1;
    return arr.filter((item) => {
      let channel;
      if (closure_0[item] != null) {
        channel = tmp.channel;
      }
      let tmp3 = null != channel;
      if (tmp3) {
        const obj = require("DefaultChannelUtils");
        let canChannelBeDefaultResult = obj.canChannelBeDefault(channel.guild_id, channel.id);
        if (canChannelBeDefaultResult) {
          let canEveryoneRoleResult;
          const isForumChannelResult = channel.isForumChannel();
          const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
          PermissionUtilsAll;
          if (isForumChannelResult) {
            canEveryoneRoleResult = canEveryoneRole(constants2.SEND_MESSAGES_IN_THREADS, channel);
          } else {
            canEveryoneRoleResult = canEveryoneRole(constants2.SEND_MESSAGES, channel);
          }
          canChannelBeDefaultResult = canEveryoneRoleResult;
        }
        tmp3 = canChannelBeDefaultResult;
      }
      return tmp3;
    });
  }
  arr = getFlattenedDefaultChannels(arg0, arr);
  const tmp = GuildChannelStore.getChannels(arg0)[closure_7];
  let obj = {};
  for (const item10015 of tmp) {
    obj[item10015.channel.id] = item10015;
    continue;
  }
  const items = [
    filterChattableChannels(
      arr.map((id) => id.id),
      obj,
    ),
    arr,
  ];
  return items;
};
export const useChattableDefaultChannels = tmp7;
export const getSelectedRoleIds = function getSelectedRoleIds(found) {
  const mapped = found.map((roleIds) => roleIds.roleIds);
  const flatResult = mapped.flat();
  set = new Set(flatResult.filter(GlobalUtils.isNotNullish));
  return set;
};
export const getSelectedChannelIds = function getSelectedChannelIds(found) {
  const mapped = found.map((channelIds) => channelIds.channelIds);
  const flatResult = mapped.flat();
  set = new Set(flatResult.filter(GlobalUtils.isNotNullish));
  return set;
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
    const obj = StringUtils;
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
  let FetchState;
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
  authStore = connected(FetchState[18]).default;
  FetchState = connected(FetchState[18]).FetchState;
  const item = found.forEach((application_id) => {
    application_id = application_id.application_id;
    const obj = StringUtils;
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
