// === Module 9499: getDurationStringOfFractionalPremium ===

// Module 9499 (getDurationStringOfFractionalPremium)
const result = require("QuestRewardTypes").fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export const getDurationStringOfFractionalPremium = function getDurationStringOfFractionalPremium(arr) {
  let obj = require(3839) /* getPremiumPlanItem */;
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
  const fractionalPremiumUnitsHoursFromSkuIds = require(3839) /* getPremiumPlanItem */.getFractionalPremiumUnitsHoursFromSkuIds(flatMapResult);
  obj[0] = require(1236) /* getSystemLocale */.t.fYmirx;
  obj[1] = require(1236) /* getSystemLocale */.t["C3RO+g"];
  obj[2] = require(1236) /* getSystemLocale */.t.r77oHc;
  const obj2 = require(3839) /* getPremiumPlanItem */;
  const obj4 = require(3863) /* resetCache */;
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { time: null };
  const diffAsUnitsResult = require(3863) /* resetCache */.diffAsUnits(0, fractionalPremiumUnitsHoursFromSkuIds * importDefault(687).Millis.HOUR);
  obj[0] = require(3863) /* resetCache */.unitsAsStrings(diffAsUnitsResult, obj);
  return intl.formatToPlainString(require(1236) /* getSystemLocale */.t["4SqnVD"], obj);
};