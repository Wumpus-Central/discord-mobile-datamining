// === Module 15049: GuildRoleSubscriptionTypeUtils ===

// Module 15049 (GuildRoleSubscriptionTypeUtils)
import intl5 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15023 */;
import size from "module_2" /* 2 */;

const constants = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionBenefitTypes;
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionTypeUtils.tsx");

export const getBenefitKey = function getBenefitKey(id) {
  let combined;
  if ("roles" in id) {
    const _HermesInternal2 = HermesInternal;
    combined = "emoji-" + id.id;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + id.ref_type + "-" + id.emoji_id + "-" + id.name + "-" + id.ref_id;
  }
  return combined;
};
export const formatPlanInterval = function formatPlanInterval(merged) {
  let cuSp8Q;
  const interval = merged.interval;
  const count = merged.interval_count;
  const intl = intl5.intl;
  const format = intl.format;
  if (SubscriptionIntervalTypes.DAY === interval) {
    cuSp8Q = intl5.t["3rUmPQ"];
  } else if (SubscriptionIntervalTypes.MONTH === interval) {
    cuSp8Q = intl5.t.zuN545;
  } else if (SubscriptionIntervalTypes.YEAR === interval) {
    cuSp8Q = intl5.t.cuSp8Q;
  }
  return format(cuSp8Q, { count });
};
export const formatPlanIntervalDuration = function formatPlanIntervalDuration(interval) {
  let interval_count;
  ({ interval, interval_count } = interval);
  if (SubscriptionIntervalTypes.DAY === interval) {
    if (interval_count > 0) {
      let formatToPlainStringResult;
      if (interval_count % 7 === 0) {
        const intl4 = intl5.intl;
        const obj2 = { weeks: interval_count / 7 };
        formatToPlainStringResult = intl4.formatToPlainString(intl5.t.iVZYyl, obj2);
      }
      return formatToPlainStringResult;
    }
    const intl3 = intl5.intl;
    const obj3 = { days: interval_count };
    formatToPlainStringResult = intl3.formatToPlainString(intl5.t.jzH70Z, obj3);
  } else if (SubscriptionIntervalTypes.MONTH === interval) {
    const intl2 = intl5.intl;
    const obj4 = { months: interval_count };
    return intl2.formatToPlainString(intl5.t.erUSmA, obj4);
  } else if (SubscriptionIntervalTypes.YEAR === interval) {
    const intl = intl5.intl;
    const obj = { years: interval_count };
    return intl.formatToPlainString(intl5.t.IfYQVC, obj);
  }
};
export const isChannelBenefit = function isChannelBenefit(ref_type) {
  return ref_type.ref_type === constants.CHANNEL;
};
export const isIntangibleBenefit = function isIntangibleBenefit(ref_type) {
  return ref_type.ref_type === constants.INTANGIBLE;
};