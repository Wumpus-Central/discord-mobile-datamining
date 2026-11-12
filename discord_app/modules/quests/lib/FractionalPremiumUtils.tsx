// === Module 10086: FractionalPremiumUtils ===

// Module 10086 (FractionalPremiumUtils)
import DurationsDefault from "Durations" /* 1089 */;
import util from "util" /* 1113 */;
import PremiumUtils from "PremiumUtils" /* 2171 */;
import DateUtils from "DateUtils" /* 5065 */;
import QuestRewardTypes from "QuestRewardTypes" /* 8746 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export function getFractionalPremiumQuestRewards(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.filter((type) => type.type === QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM);
}
export function getFractionalPremiumQuestRewardName(rewardsConfig) {
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
}