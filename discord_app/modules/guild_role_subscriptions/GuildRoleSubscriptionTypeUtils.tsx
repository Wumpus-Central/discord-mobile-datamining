// === Module 14760: getBenefitKey ===

// Module 14760 (getBenefitKey)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import GuildFeatures from "GuildFeatures" /* 1925 */;
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS" /* 14734 */;

let closure_2 = MAX_SUBSCRIPTION_TIERS.GuildRoleSubscriptionBenefitTypes;
const SubscriptionIntervalTypes = GuildFeatures.SubscriptionIntervalTypes;
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionTypeUtils.tsx");

export const getBenefitKey = function getBenefitKey(id) {
  if ("roles" in id) {
    const _HermesInternal2 = HermesInternal;
    let combined = "emoji-" + id.id;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + id.ref_type + "-" + id.emoji_id + "-" + id.name + "-" + id.ref_id;
  }
  return combined;
};
export const formatPlanInterval = function formatPlanInterval(first2) {
  const interval = first2.interval;
  const intl = getSystemLocale.intl;
  if (SubscriptionIntervalTypes.DAY === interval) {
    let cuSp8Q = tmp(1236).t["3rUmPQ"];
  } else if (tmp3.MONTH === interval) {
    cuSp8Q = tmp(1236).t.zuN545;
  } else if (tmp3.YEAR === interval) {
    cuSp8Q = tmp(1236).t.cuSp8Q;
  }
  return intl.format(cuSp8Q, { count: first2.interval_count });
};
export const formatPlanIntervalDuration = function formatPlanIntervalDuration(interval) {
  ({ interval, interval_count } = interval);
  if (SubscriptionIntervalTypes.DAY === interval) {
    if (interval_count > 0) {
      if (interval_count % 7 === 0) {
        const intl4 = getSystemLocale.intl;
        let obj = { weeks: null };
        obj[0] = interval_count / 7;
        let formatToPlainStringResult = intl4.formatToPlainString(getSystemLocale.t.iVZYyl, obj);
      }
      return formatToPlainStringResult;
    }
    const intl3 = getSystemLocale.intl;
    obj = { days: null };
    obj[0] = interval_count;
    formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t.jzH70Z, obj);
  } else if (tmp.MONTH === interval) {
    const intl2 = getSystemLocale.intl;
    obj1 = { months: null };
    obj1[0] = interval_count;
    return intl2.formatToPlainString(getSystemLocale.t.erUSmA, obj1);
  } else if (tmp.YEAR === interval) {
    const intl = getSystemLocale.intl;
    obj = { years: null };
    obj[0] = interval_count;
    return intl.formatToPlainString(getSystemLocale.t.IfYQVC, obj);
  }
};
export const isChannelBenefit = function isChannelBenefit(ref_type) {
  return ref_type.ref_type === constants.CHANNEL;
};
export const isIntangibleBenefit = function isIntangibleBenefit(ref_type) {
  return ref_type.ref_type === constants.INTANGIBLE;
};