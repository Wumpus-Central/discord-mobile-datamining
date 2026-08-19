// discord_app/modules/guild_onboarding/DefaultChannelThresholdUtils.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import handleUpdate from "GuildOnboardingPromptsStore.tsx";
import { NUM_DEFAULT_CHATTABLE_CHANNELS_MIN as closure_7 } from "GuildOnboardingPromptsConstants.tsx";
import ME from "../../Constants.tsx";

const require = fn;
function _isDefaultChannelThresholdMetAfterDelete() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, arg1) {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let tmp5 = null == closure_0;
              if (!tmp5) {
                c3 = 1;
                c2 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_11(tmp6, tmp7, { removingView: true, removingChat: true });
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else {
            tmp5 = arg1;
            if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          }
          c2 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = tmp5;
          return obj2;
        } catch (tmp10) {
          c2 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function isChattableChannelThresholdMetAfterChannelChange() {
  const self = this;
  const apply = _isChattableChannelThresholdMetAfterChannelChange.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _isChattableChannelThresholdMetAfterChannelChange() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    let onboardingPromptsForOnboarding = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (store === 2) {
        store = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          store = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              store = 3;
              throw arg1;
            } else if (arg0 === 2) {
              store = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let defaultChannelIds = tmp2;
              closure_3 = tmp3;
              closure_3 = undefined;
              defaultChannelIds = undefined;
              c5 = undefined;
              const guild = onboardingPromptsForOnboarding.getGuild(callback);
              if (null == guild) {
                store = 3;
                return { value: true, done: true };
              } else {
                if (null != guild) {
                  const features = guild.features;
                  let hasItem;
                  if (features != null) {
                    hasItem = features.has(closure_1_8.GUILD_ONBOARDING);
                  }
                  if (hasItem) {
                    if (store.shouldFetchPrompts(callback)) {
                      c5 = 1;
                      store = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = callback(closure_1_3[5]).fetchOnboardingPrompts(callback);
                      return obj1;
                    }
                  }
                }
                store = 3;
                return { value: true, done: true };
              }
            }
          } else if (arg0 === 1) {
            store = 3;
            throw arg1;
          } else if (arg0 === 2) {
            store = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          closure_3 = (function getAllOnboardingChannelIds(closure_0) {
            const defaultChannelIds = store.getDefaultChannelIds(closure_0);
            if (store.isAdvancedMode(closure_0)) {
              onboardingPromptsForOnboarding = store.getOnboardingPromptsForOnboarding(closure_0);
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
          })(callback);
          if (closure_3.includes(closure_1)) {
            if (!closure_2.removingChat) {
              if (!closure_2.removingView) {
                store = 3;
                return { value: true, done: true };
              }
            }
            defaultChannelIds = store.getDefaultChannelIds(callback);
            if (store.isAdvancedMode(callback)) {
              onboardingPromptsForOnboarding = store.getOnboardingPromptsForOnboarding(callback);
            } else {
              onboardingPromptsForOnboarding = [];
            }
            obj1 = callback(closure_3[6]);
            obj1.getMinimumSetOfDefaultChannelIds(callback, closure_1_4, onboardingPromptsForOnboarding, (arg0) => {
              let isChattableChannelIdResult = arg0 !== closure_1;
              if (isChattableChannelIdResult) {
                isChattableChannelIdResult = callback(table[6]).isChattableChannelId(arg0);
                const obj = callback(table[6]);
              }
              return isChattableChannelIdResult;
            }).length < closure_7;
            store = 3;
          } else {
            store = 3;
            return { value: true, done: true };
          }
        } catch (tmp40) {
          store = tmp;
          throw tmp40;
        }
      }
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _checkChattableChannelThresholdMetAfterChannelPermissionDeny() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (advancedMode === 2) {
        advancedMode = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          advancedMode = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              advancedMode = 3;
              throw arg1;
            } else if (arg0 === 2) {
              advancedMode = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp2;
              dependencyMap = tmp3;
              let guildId;
              guildId = guildId.getGuildId();
              if (null == guildId) {
                advancedMode = 3;
                return { value: true, done: true };
              } else {
                let found = callback;
                if (null != callback2) {
                  let obj5 = callback2(closure_1_3[7]);
                  found = callback2(closure_1_3[7]).filter(callback, obj5.invert(callback2));
                  const arr = callback2(closure_1_3[7]);
                }
                if (null != obj16.permissionOverwrites[guildId]) {
                  const arr2 = callback2(closure_1_3[7]);
                  let found1 = arr2.filter(tmp26.deny, callback2(closure_1_3[7]).invert(tmp26.allow));
                  let tmp27 = callback2;
                  const obj7 = callback2(closure_1_3[7]);
                } else {
                  tmp27 = callback2;
                  const deserializer = callback2(closure_1_3[7]);
                  found1 = deserializer.deserialize(0);
                }
                let tmp27Result = tmp27(closure_1_3[7]);
                const hasItem = tmp27Result.has(found, closure_1_9.VIEW_CHANNEL);
                let tmp37 = hasItem;
                if (hasItem) {
                  tmp27Result = tmp27(closure_1_3[7]);
                  tmp37 = !tmp27Result.has(found1, closure_1_9.VIEW_CHANNEL);
                }
                obj1 = { removingView: null, removingChat: false };
                obj1[0] = tmp37;
                const isForumLikeChannelResult = obj16.isForumLikeChannel();
                const has = tmp27(closure_1_3[7]).has;
                if (isForumLikeChannelResult) {
                  let hasItem1 = has(found, closure_1_9.SEND_MESSAGES_IN_THREADS);
                  if (hasItem1) {
                    hasItem1 = !tmp27(closure_1_3[7]).has(found1, closure_1_9.SEND_MESSAGES_IN_THREADS);
                    const tmp27Result2 = tmp27(closure_1_3[7]);
                  }
                  obj1.removingChat = hasItem1;
                } else {
                  let hasItem2 = has(found, closure_1_9.SEND_MESSAGES);
                  if (hasItem2) {
                    hasItem2 = !tmp27(closure_1_3[7]).has(found1, closure_1_9.SEND_MESSAGES);
                    const tmp27Result3 = tmp27(closure_1_3[7]);
                  }
                  obj1.removingChat = hasItem2;
                }
                if (!obj1.removingChat) {
                  if (!obj1.removingView) {
                    advancedMode = 3;
                    return { value: true, done: true };
                  }
                }
                guildId = advancedMode.isAdvancedMode(guildId);
                c5 = 1;
                advancedMode = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = closure_1_11(guildId, obj16.id, obj1);
                return obj2;
              }
            }
          } else if (arg0 === 1) {
            advancedMode = 3;
            throw arg1;
          } else if (arg0 === 2) {
            advancedMode = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else if (arg1) {
            advancedMode = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = tmp54;
            return obj4;
          } else {
            obj = callback(4827);
            obj5 = { title: null, body: null };
            const intl = guildId(1236).intl;
            obj5[0] = intl.string(guildId(1236).t.ut7sq0);
            const intl2 = guildId(1236).intl;
            const format = intl2.format;
            let t = guildId(1236).t;
            if (guildId) {
              t = {};
              let formatResult = format(t.w9Oz5K, t);
            } else {
              formatResult = format(t["5sm9rH"], {});
            }
            obj5[1] = formatResult;
            obj5 = obj.show(obj5);
          }
        } catch (tmp48) {
          advancedMode = tmp;
          throw tmp48;
        }
      }
    })();
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ GuildFeatures: closure_8, GuildSettingsSections, Permissions: c9 } = ME);
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding/DefaultChannelThresholdUtils.tsx");

export const isDefaultChannelThresholdMetAfterDelete = function isDefaultChannelThresholdMetAfterDelete(guildId, id) {
  const self = this;
  const apply = _isDefaultChannelThresholdMetAfterDelete.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const checkChattableChannelThresholdMetAfterChannelPermissionDeny = function checkChattableChannelThresholdMetAfterChannelPermissionDeny(c5, VIEW_CHANNEL, allow) {
  const self = this;
  const apply = _checkChattableChannelThresholdMetAfterChannelPermissionDeny.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};