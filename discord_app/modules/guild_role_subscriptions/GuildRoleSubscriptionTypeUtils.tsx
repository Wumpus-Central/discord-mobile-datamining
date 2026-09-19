// === Module 15495: GuildRoleSubscriptionTypeUtils ===

// Module 15495 (GuildRoleSubscriptionTypeUtils)
import util from "util" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15469 */;
import size from "module_2" /* 2 */;

const constants = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionBenefitTypes;
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionTypeUtils.tsx");

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
  const intl = util.intl;
  if (SubscriptionIntervalTypes.DAY === interval) {
    let cuSp8Q = util.t["3rUmPQ"];
  } else if (SubscriptionIntervalTypes.MONTH === interval) {
    cuSp8Q = util.t.zuN545;
  } else if (SubscriptionIntervalTypes.YEAR === interval) {
    cuSp8Q = util.t.cuSp8Q;
  }
  return intl.format(cuSp8Q, { count: first2.interval_count });
};
export const formatPlanIntervalDuration = function formatPlanIntervalDuration(interval) {
  ({ interval, interval_count } = interval);
  if (SubscriptionIntervalTypes.DAY === interval) {
    if (interval_count > 0) {
      if (interval_count % 7 === 0) {
        const intl4 = util.intl;
        const obj2 = { weeks: interval_count / 7 };
        let formatToPlainStringResult = intl4.formatToPlainString(util.t.iVZYyl, obj2);
      }
      return formatToPlainStringResult;
    }
    const intl3 = util.intl;
    const obj3 = { days: interval_count };
    formatToPlainStringResult = intl3.formatToPlainString(util.t.jzH70Z, obj3);
  } else if (SubscriptionIntervalTypes.MONTH === interval) {
    const intl2 = util.intl;
    const obj4 = { months: interval_count };
    return intl2.formatToPlainString(util.t.erUSmA, obj4);
  } else if (SubscriptionIntervalTypes.YEAR === interval) {
    const intl = util.intl;
    const obj = { years: interval_count };
    return intl.formatToPlainString(util.t.IfYQVC, obj);
  }
};
export const isChannelBenefit = function isChannelBenefit(ref_type) {
  return ref_type.ref_type === constants.CHANNEL;
};
export const isIntangibleBenefit = function isIntangibleBenefit(ref_type) {
  return ref_type.ref_type === constants.INTANGIBLE;
};