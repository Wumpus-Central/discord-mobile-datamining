// discord_app/modules/quests/lib/FractionalPremiumUtils.tsx
const result = require("QuestRewardTypes").fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export const getDurationStringOfFractionalPremium = function getDurationStringOfFractionalPremium(arr) {
  let obj = require("../../../utils/PremiumUtils.tsx") /* getPremiumPlanItem */;
  const fractionalPremiumUnitsHoursFromSkuIds = obj.getFractionalPremiumUnitsHoursFromSkuIds(arr.map((skuId) => skuId.skuId));
  if (fractionalPremiumUnitsHoursFromSkuIds % 24 === 0) {
    const intl2 = tmp(1236).intl;
    obj = { days: null };
    obj[0] = fractionalPremiumUnitsHoursFromSkuIds / 24;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(1236).t.Cz1G97, obj);
  } else {
    const intl = tmp(1236).intl;
    obj = { hours: null };
    obj[0] = fractionalPremiumUnitsHoursFromSkuIds;
    formatToPlainStringResult = intl.formatToPlainString(tmp(1236).t.J9Lu4h, obj);
  }
  return formatToPlainStringResult;
};
export const getFractionalPremiumQuestRewards = function getFractionalPremiumQuestRewards(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.filter((type) => type.type === callback(table[2]).QuestRewardTypes.FRACTIONAL_PREMIUM);
};
export const getFractionalPremiumQuestRewardName = function getFractionalPremiumQuestRewardName(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.filter((type) => type.type === callback(table[2]).QuestRewardTypes.FRACTIONAL_PREMIUM);
  const flatMapResult = found.flatMap((quantity) => Array(quantity.quantity).fill(quantity.skuId));
  let obj = { days: null, hours: null, minutes: null };
  const fractionalPremiumUnitsHoursFromSkuIds = require("../../../utils/PremiumUtils.tsx") /* getPremiumPlanItem */.getFractionalPremiumUnitsHoursFromSkuIds(flatMapResult);
  obj[0] = require("../../../intl/index.native.tsx") /* getSystemLocale */.t.fYmirx;
  obj[1] = require("../../../intl/index.native.tsx") /* getSystemLocale */.t["C3RO+g"];
  obj[2] = require("../../../intl/index.native.tsx") /* getSystemLocale */.t.r77oHc;
  const obj2 = require("../../../utils/PremiumUtils.tsx") /* getPremiumPlanItem */;
  const obj4 = require("../../../utils/DateUtils.tsx") /* resetCache */;
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj = { time: null };
  const diffAsUnitsResult = require("../../../utils/DateUtils.tsx") /* resetCache */.diffAsUnits(0, fractionalPremiumUnitsHoursFromSkuIds * require("../../../utils/Durations.tsx").Millis.HOUR);
  obj[0] = require("../../../utils/DateUtils.tsx") /* resetCache */.unitsAsStrings(diffAsUnitsResult, obj);
  return intl.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["4SqnVD"], obj);
};