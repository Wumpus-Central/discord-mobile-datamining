// === Module 10931: getDurationStringOfFractionalPremium ===

// Module 10931 (getDurationStringOfFractionalPremium)
import set from "set" /* 2 */;
import setDefault from "set" /* 687 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4139 */;
import resetCache from "resetCache" /* 4163 */;

const result = set.fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export const getDurationStringOfFractionalPremium = function getDurationStringOfFractionalPremium(arr) {
  let obj = getPremiumPlanItem;
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
  const fractionalPremiumUnitsHoursFromSkuIds = getPremiumPlanItem.getFractionalPremiumUnitsHoursFromSkuIds(flatMapResult);
  obj[0] = getSystemLocale.t.fYmirx;
  obj[1] = getSystemLocale.t["C3RO+g"];
  obj[2] = getSystemLocale.t.r77oHc;
  const obj2 = getPremiumPlanItem;
  const obj4 = resetCache;
  const intl = getSystemLocale.intl;
  obj = { time: null };
  const diffAsUnitsResult = resetCache.diffAsUnits(0, fractionalPremiumUnitsHoursFromSkuIds * setDefault.Millis.HOUR);
  obj[0] = resetCache.unitsAsStrings(diffAsUnitsResult, obj);
  return intl.formatToPlainString(getSystemLocale.t["4SqnVD"], obj);
};