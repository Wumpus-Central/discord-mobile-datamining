// === Module 9252: DefaultChannelThresholdUtils ===

// Module 9252 (DefaultChannelThresholdUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import GuildOnboardingPromptsActionCreators from "GuildOnboardingPromptsActionCreators" /* 6601 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 6603 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6602 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c2, c3, guild, set;

let GuildSettingsSections;
let c9;
let metroImportAll;
let obj = function _isDefaultChannelThresholdMetAfterDelete() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_1;
    let closure_0 = arg0;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp4;
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp4 = null == closure_0;
            if (!tmp4) {
              c3 = 1;
              c2 = 1;
              const obj4 = { value: isChattableChannelThresholdMetAfterChannelChange(tmp5, tmp6, { removingView: true, removingChat: true }), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else {
          tmp4 = value;
          if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
        c2 = 3;
        const obj5 = { value: tmp4, done: true };
        return obj5;
      } catch (tmp9) {
        c2 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
function isChattableChannelThresholdMetAfterChannelChange() {
  return obj(...arguments);
}
obj = function _isChattableChannelThresholdMetAfterChannelChange() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_3;
    let closure_4;
    let obj4;
    function getAllOnboardingChannelIds(guildId) {
      const defaultChannelIds = closure_1_6.getDefaultChannelIds(guildId);
      if (closure_1_6.isAdvancedMode(guildId)) {
        const onboardingPromptsForOnboarding = closure_1_6.getOnboardingPromptsForOnboarding(guildId);
        const items = [];
        const iter = onboardingPromptsForOnboarding[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if (nextResult.required) {
            let options = tmp9.options;
            for (const item10025 of options) {
              if (null != item10025.channelIds) {
                let push = items.push;
                let items1 = [];
                let arraySpreadResult = HermesBuiltin.arraySpread(items1, tmp13.channelIds, 0);
                let applyResult = HermesBuiltin.apply(push, items1, items);
              }
              continue;
            }
          }
          continue;
        }
        const _Set = Set;
        const items2 = [];
        HermesBuiltin.arraySpread(items2, items, HermesBuiltin.arraySpread(items2, defaultChannelIds, 0));
        const self = this;
        const self2 = this;
        const items3 = [];
        set = new Set(items2);
        HermesBuiltin.arraySpread(items3, set, 0);
        return items3;
      } else {
        return defaultChannelIds;
      }
    }
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp2;
        let defaultChannelIds;
        let onboardingPromptsForOnboarding;
        let num = 2;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            tmp2 = undefined;
            defaultChannelIds = undefined;
            onboardingPromptsForOnboarding = undefined;
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
                  if (GuildOnboardingPromptsStore.shouldFetchPrompts(closure_0)) {
                    c5 = 1;
                    c6 = 1;
                    const obj6 = { value: obj4.fetchOnboardingPrompts(closure_0), done: false };
                    obj4 = GuildOnboardingPromptsActionCreators;
                    return obj6;
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
        const tmp9 = tmp2;
        tmp2 = getAllOnboardingChannelIds(closure_0);
        let tmp11 = tmp2;
        if (tmp2.includes(closure_1)) {
          const tmp13 = tmp2;
          if (!closure_2.removingChat) {
            let tmp15 = tmp2;
            if (!closure_2.removingView) {
              c6 = 3;
              return { value: true, done: true };
            }
          }
          let tmp17 = tmp2;
          let tmp18 = defaultChannelIds;
          defaultChannelIds = closure_132_6.getDefaultChannelIds(closure_0);
          if (closure_132_6.isAdvancedMode(closure_0)) {
            onboardingPromptsForOnboarding = closure_132_6.getOnboardingPromptsForOnboarding(closure_0);
          } else {
            onboardingPromptsForOnboarding = [];
          }
          const obj2 = closure_132_0(closure_132_3[6]);
          c6 = 3;
          const obj7 = {
            value: obj2.getMinimumSetOfDefaultChannelIds(closure_0, defaultChannelIds, onboardingPromptsForOnboarding, (arg0) => {
                    let isChattableChannelIdResult = arg0 !== closure_1_1;
                    if (isChattableChannelIdResult) {
                      obj = closure_0(closure_3[6]);
                      isChattableChannelIdResult = obj.isChattableChannelId(arg0);
                    }
                    return isChattableChannelIdResult;
                  }).length >= closure_132_7,
            done: true
          };
          return obj7;
        } else {
          c6 = 3;
          return { value: true, done: true };
        }
      } catch (tmp38) {
        c6 = 3;
        throw tmp38;
      }
    }
  });
  return obj(...arguments);
};
obj = function _checkChattableChannelThresholdMetAfterChannelPermissionDeny() {
  let advancedMode;
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_3;
    let closure_4;
    let guildId = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let filter2Result;
      let formatResult;
      let intl;
      let tmp28;
      guildId = guildId.getGuildId();
      if (null == guildId) {
        return true;
      }
      let found = closure_1;
      if (null != closure_2) {
        const filter = BigFlagUtilsAll.filter;
        BigFlagUtilsAll;
        const obj4 = BigFlagUtilsAll;
        found = filter(closure_1, obj4.invert(closure_2));
      }
      if (null != guildId.permissionOverwrites[guildId]) {
        const filter2 = BigFlagUtilsAll.filter;
        const deny = tmp27.deny;
        BigFlagUtilsAll;
        const obj5 = BigFlagUtilsAll;
        filter2Result = filter2(deny, obj5.invert(tmp27.allow));
        tmp28 = importAll;
      } else {
        tmp28 = importAll;
        const deserializer = BigFlagUtilsAll;
        filter2Result = deserializer.deserialize(0);
      }
      const tmp28Result = tmp28(dependencyMap[7]);
      const hasItem = tmp28Result.has(found, constants.VIEW_CHANNEL);
      let tmp38 = hasItem;
      if (tmp38) {
        const tmp28Result5 = tmp28(dependencyMap[7]);
        tmp38 = !tmp28Result5.has(filter2Result, constants.VIEW_CHANNEL);
      }
      const obj6 = { removingView: tmp38, removingChat: false };
      const isForumLikeChannelResult = guildId.isForumLikeChannel();
      const has = tmp28(dependencyMap[7]).has;
      tmp28(dependencyMap[7]);
      if (isForumLikeChannelResult) {
        let hasItem1 = has(found, constants.SEND_MESSAGES_IN_THREADS);
        if (hasItem1) {
          const tmp28Result7 = tmp28(dependencyMap[7]);
          hasItem1 = !tmp28Result7.has(filter2Result, constants.SEND_MESSAGES_IN_THREADS);
        }
        obj6.removingChat = hasItem1;
      } else {
        let hasItem2 = has(found, constants.SEND_MESSAGES);
        if (hasItem2) {
          const tmp28Result8 = tmp28(dependencyMap[7]);
          hasItem2 = !tmp28Result8.has(filter2Result, constants.SEND_MESSAGES);
        }
        obj6.removingChat = hasItem2;
      }
      if (!obj6.removingChat) {
        if (!obj6.removingView) {
          c6 = 3;
          return { value: true, done: true };
        }
      }
      guildId = advancedMode.isAdvancedMode(guildId);
      await isChattableChannelThresholdMetAfterChannelChange(guildId, guildId.id, obj6);
      let flag = value;
      if (!flag) {
        obj = { title: intl.string(closure_132_0(closure_132_3[9]).t.ut7sq0), body: formatResult };
        const show = closure_132_1(closure_132_3[8]).show;
        closure_132_1(closure_132_3[8]);
        intl = closure_132_0(closure_132_3[9]).intl;
        const intl2 = closure_132_0(closure_132_3[9]).intl;
        const format = intl2.format;
        const t = closure_132_0(closure_132_3[9]).t;
        if (guildId) {
          formatResult = format(t.w9Oz5K, {});
        } else {
          formatResult = format(t["5sm9rH"], {});
        }
        show(obj);
        flag = false;
      }
      return flag;
    })();
  });
  return obj(...arguments);
};
let closure_7 = GuildOnboardingPromptsConstants.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
({ GuildFeatures: metroImportAll, GuildSettingsSections, Permissions: c9 } = Constants);
const result = size.fileFinishedImporting("modules/guild_onboarding/DefaultChannelThresholdUtils.tsx");

export const isDefaultChannelThresholdMetAfterDelete = function isDefaultChannelThresholdMetAfterDelete() {
  return obj(...arguments);
};
export const checkChattableChannelThresholdMetAfterChannelPermissionDeny = function checkChattableChannelThresholdMetAfterChannelPermissionDeny() {
  return obj(...arguments);
};