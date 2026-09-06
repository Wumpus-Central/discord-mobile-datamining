// === Module 11294: FractionalPremiumUtils ===

// Module 11294 (FractionalPremiumUtils)
import DurationsDefault from "Durations" /* 1090 */;
import util from "util" /* 1114 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import DateUtils from "DateUtils" /* 4242 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7708 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export const getDurationStringOfFractionalPremium = function getDurationStringOfFractionalPremium(arr) {
  let obj = PremiumUtils;
  const fractionalPremiumUnitsHoursFromSkuIds = obj.getFractionalPremiumUnitsHoursFromSkuIds(arr.map((skuId) => skuId.skuId));
  if (fractionalPremiumUnitsHoursFromSkuIds % 24 === 0) {
    const intl2 = tmp(1114).intl;
    obj = { days: fractionalPremiumUnitsHoursFromSkuIds / 24 };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(1114).t.Cz1G97, obj);
  } else {
    const intl = tmp(1114).intl;
    obj = { hours: fractionalPremiumUnitsHoursFromSkuIds };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t.J9Lu4h, obj);
  }
  return formatToPlainStringResult;
};
export const getFractionalPremiumQuestRewards = function getFractionalPremiumQuestRewards(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.filter((type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM);
};
export const getFractionalPremiumQuestRewardName = function getFractionalPremiumQuestRewardName(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.filter((type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM);
  const flatMapResult = found.flatMap((quantity) => Array(quantity.quantity).fill(quantity.skuId));
  const time = { days: null, hours: null, minutes: null };
  const fractionalPremiumUnitsHoursFromSkuIds = PremiumUtils.getFractionalPremiumUnitsHoursFromSkuIds(flatMapResult);
  time.days = util.t.fYmirx;
  time.hours = util.t["C3RO+g"];
  time.minutes = util.t.r77oHc;
  const intl = util.intl;
  const obj = { time: null };
  const diffAsUnitsResult = DateUtils.diffAsUnits(0, fractionalPremiumUnitsHoursFromSkuIds * DurationsDefault.Millis.HOUR);
  obj.time = DateUtils.unitsAsStrings(diffAsUnitsResult, time);
  return intl.formatToPlainString(util.t["4SqnVD"], obj);
};