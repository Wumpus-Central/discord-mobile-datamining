// discord_app/modules/quests/lib/FractionalPremiumUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import obj132Default from "../../../utils/Durations.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import getPremiumPlanItem from "../../../utils/PremiumUtils.tsx";
import resetCache from "../../../utils/DateUtils.tsx";

const result = obj132.fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export const getDurationStringOfFractionalPremium = function getDurationStringOfFractionalPremium(arr) {
  let obj = getPremiumPlanItem;
  const fractionalPremiumUnitsHoursFromSkuIds = obj.getFractionalPremiumUnitsHoursFromSkuIds(arr.map((item, index) => item.skuId));
  if (fractionalPremiumUnitsHoursFromSkuIds % 24 === 0) {
    const intl2 = getSystemLocale.intl;
    obj = { days: null };
    obj[0] = fractionalPremiumUnitsHoursFromSkuIds / 24;
    let formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t.Cz1G97, obj);
  } else {
    const intl = getSystemLocale.intl;
    obj = { hours: null };
    obj[0] = fractionalPremiumUnitsHoursFromSkuIds;
    formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.J9Lu4h, obj);
  }
  return formatToPlainStringResult;
};
export const getFractionalPremiumQuestRewards = function getFractionalPremiumQuestRewards(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  return rewards.filter((item, index) => item.type === callback(table[2]).QuestRewardTypes.FRACTIONAL_PREMIUM);
};
export const getFractionalPremiumQuestRewardName = function getFractionalPremiumQuestRewardName(rewardsConfig) {
  const rewards = rewardsConfig.rewardsConfig.rewards;
  const found = rewards.filter((item, index) => item.type === callback(table[2]).QuestRewardTypes.FRACTIONAL_PREMIUM);
  const flatMapResult = found.flatMap((item, index) => Array(item.quantity).fill(item.skuId));
  let obj = { days: null, hours: null, minutes: null };
  const fractionalPremiumUnitsHoursFromSkuIds = getPremiumPlanItem.getFractionalPremiumUnitsHoursFromSkuIds(flatMapResult);
  obj[0] = getSystemLocale.t.fYmirx;
  obj[1] = getSystemLocale.t["C3RO+g"];
  obj[2] = getSystemLocale.t.r77oHc;
  const intl = getSystemLocale.intl;
  obj = { time: null };
  const diffAsUnitsResult = resetCache.diffAsUnits(0, fractionalPremiumUnitsHoursFromSkuIds * obj132Default.Millis.HOUR);
  obj[0] = resetCache.unitsAsStrings(diffAsUnitsResult, obj);
  return intl.formatToPlainString(getSystemLocale.t["4SqnVD"], obj);
};