// === Module 9740: DefaultChannelThresholdUtils ===

// Module 9740 (DefaultChannelThresholdUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import GuildOnboardingPromptsActionCreators from "GuildOnboardingPromptsActionCreators" /* 7099 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7100 */;

require = fn;
let closure_10 = async function _isDefaultChannelThresholdMetAfterDelete(arg0, value) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c2 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let tmp5 = null == closure_0;
          if (!tmp5) {
            c3 = 1;
            c2 = 1;
            const obj1 = { value: isChattableChannelThresholdMetAfterChannelChange(tmp6, tmp7, { removingView: true, removingChat: true }), done: false };
            return obj1;
          }
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else {
        tmp5 = value;
        if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        }
      }
      c2 = 3;
      const obj2 = { value: tmp5, done: true };
      return obj2;
    } catch (tmp10) {
      c2 = tmp;
      throw tmp10;
    }
  }
};
function isChattableChannelThresholdMetAfterChannelChange() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _isChattableChannelThresholdMetAfterChannelChange(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp2;
          closure_3 = tmp3;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = closure_2;
          closure_131_3 = undefined;
          let defaultChannelIds;
          closure_131_5 = undefined;
          guild = guild.getGuild(closure_0);
          if (null == guild) {
            c6 = 3;
            return { value: true, done: true };
          } else {
            if (null != guild) {
              const features = guild.features;
              let hasItem;
              if (features != null) {
                hasItem = features.has(constants.GUILD_ONBOARDING);
              }
              if (hasItem) {
                if (GuildOnboardingPromptsStore.shouldFetchPrompts(tmp45)) {
                  c5 = 1;
                  c6 = 1;
                  let obj1 = { value: GuildOnboardingPromptsActionCreators.fetchOnboardingPrompts(tmp45), done: false };
                  return obj1;
                }
              }
            }
            c6 = 3;
            return { value: true, done: true };
          }
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        obj = { value, done: true };
        return obj;
      }
      closure_131_3 = (function getAllOnboardingChannelIds(guildId) {
        const defaultChannelIds = closure_1_6.getDefaultChannelIds(guildId);
        if (closure_1_6.isAdvancedMode(guildId)) {
          const onboardingPromptsForOnboarding = obj.getOnboardingPromptsForOnboarding(guildId);
          const items = [];
          const iter = onboardingPromptsForOnboarding[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            if (nextResult.required) {
              let options = tmp8.options;
              for (const item10025 of options) {
                if (null != item10025.channelIds) {
                  let push = items.push;
                  let items1 = [];
                  let arraySpreadResult = HermesBuiltin.arraySpread(tmp12.channelIds, 0);
                  let applyResult = HermesBuiltin.apply(items1, items);
                }
                continue;
              }
            }
            continue;
          }
          const _Set = Set;
          const items2 = [];
          HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(defaultChannelIds, 0));
          const set = new Set(items2);
          const items3 = [];
          HermesBuiltin.arraySpread(set, 0);
          return items3;
        } else {
          return defaultChannelIds;
        }
        obj = closure_1_6;
      })(closure_131_0);
      if (closure_131_3.includes(closure_131_1)) {
        if (!closure_131_2.removingChat) {
          if (!closure_131_2.removingView) {
            c6 = 3;
            return { value: true, done: true };
          }
        }
        defaultChannelIds = closure_132_6.getDefaultChannelIds(closure_131_0);
        if (closure_132_6.isAdvancedMode(closure_131_0)) {
          let onboardingPromptsForOnboarding = closure_132_6.getOnboardingPromptsForOnboarding(closure_131_0);
        } else {
          onboardingPromptsForOnboarding = [];
        }
        closure_131_5 = onboardingPromptsForOnboarding;
        obj1 = closure_132_0(closure_132_3[6]);
        obj1.getMinimumSetOfDefaultChannelIds(closure_131_0, defaultChannelIds, closure_131_5, (arg0) => {
          let isChattableChannelIdResult = arg0 !== closure_1_1;
          if (isChattableChannelIdResult) {
            isChattableChannelIdResult = closure_0(dependencyMap[6]).isChattableChannelId(arg0);
            const obj = closure_0(dependencyMap[6]);
          }
          return isChattableChannelIdResult;
        }).length < closure_132_7;
        c6 = 3;
      } else {
        c6 = 3;
        return { value: true, done: true };
      }
    } catch (tmp40) {
      c6 = tmp;
      throw tmp40;
    }
  }
};
let closure_13 = async function _checkChattableChannelThresholdMetAfterChannelPermissionDeny(arg0, arg1, arg2) {
  let guildId = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp2;
            closure_3 = tmp3;
            closure_131_0 = undefined;
            guildId = guildId.getGuildId();
            if (null == guildId) {
              c6 = 3;
              return { value: true, done: true };
            } else {
              let found = tmp54;
              if (null != tmp55) {
                let obj5 = BigFlagUtilsAll;
                found = BigFlagUtilsAll.filter(tmp54, obj5.invert(tmp55));
              }
              if (null != obj16.permissionOverwrites[guildId]) {
                const arr2 = BigFlagUtilsAll;
                let found1 = arr2.filter(tmp26.deny, BigFlagUtilsAll.invert(tmp26.allow));
                let tmp27 = importAll;
              } else {
                tmp27 = importAll;
                const deserializer = BigFlagUtilsAll;
                found1 = deserializer.deserialize(0);
              }
              let tmp27Result = tmp27(1086);
              const hasItem = tmp27Result.has(found, constants.VIEW_CHANNEL);
              let tmp37 = hasItem;
              if (hasItem) {
                tmp27Result = tmp27(1086);
                tmp37 = !tmp27Result.has(found1, tmp34.VIEW_CHANNEL);
              }
              const obj1 = { removingView: tmp37, removingChat: false };
              const isForumLikeChannelResult = obj16.isForumLikeChannel();
              const has = tmp27(1086).has;
              if (isForumLikeChannelResult) {
                let hasItem1 = has(found, tmp34.SEND_MESSAGES_IN_THREADS);
                if (hasItem1) {
                  hasItem1 = !tmp27(1086).has(found1, tmp34.SEND_MESSAGES_IN_THREADS);
                  const tmp27Result2 = tmp27(1086);
                }
                obj1.removingChat = hasItem1;
              } else {
                let hasItem2 = has(found, tmp34.SEND_MESSAGES);
                if (hasItem2) {
                  hasItem2 = !tmp27(1086).has(found1, tmp34.SEND_MESSAGES);
                  const tmp27Result3 = tmp27(1086);
                }
                obj1.removingChat = hasItem2;
              }
              if (!obj1.removingChat) {
                if (!obj1.removingView) {
                  c6 = 3;
                  return { value: true, done: true };
                }
              }
              closure_131_0 = advancedMode.isAdvancedMode(guildId);
              c5 = 1;
              c6 = 1;
              const obj2 = { value: isChattableChannelThresholdMetAfterChannelChange(guildId, obj16.id, obj1), done: false };
              return obj2;
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else if (value) {
          c6 = 3;
          const obj4 = { value: tmp53, done: true };
          return obj4;
        } else {
          obj = closure_132_1(closure_132_3[8]);
          obj5 = { title: null, body: null };
          const intl = closure_132_0(closure_132_3[9]).intl;
          obj5.title = intl.string(closure_132_0(closure_132_3[9]).t.ut7sq0);
          const intl2 = closure_132_0(closure_132_3[9]).intl;
          const format = intl2.format;
          let t = closure_132_0(closure_132_3[9]).t;
          if (closure_131_0) {
            t = {};
            let formatResult = format(t.w9Oz5K, t);
          } else {
            formatResult = format(t["5sm9rH"], {});
          }
          obj5.body = formatResult;
          obj5 = obj.show(obj5);
        }
      } catch (tmp48) {
        c6 = tmp;
        throw tmp48;
      }
    }
  })();
};
let closure_7 = fn(7101).NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
const Constants = fn(1074);
({ GuildFeatures: closure_8, GuildSettingsSections, Permissions: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/DefaultChannelThresholdUtils.tsx");

export const isDefaultChannelThresholdMetAfterDelete = function isDefaultChannelThresholdMetAfterDelete() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const checkChattableChannelThresholdMetAfterChannelPermissionDeny = function checkChattableChannelThresholdMetAfterChannelPermissionDeny() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};