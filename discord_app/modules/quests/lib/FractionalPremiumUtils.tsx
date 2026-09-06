// discord_app/modules/quests/lib/FractionalPremiumUtils.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import util from "../../../intl/index.native.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import DateUtils from "../../../utils/DateUtils.tsx";
import QuestRewardTypes from "../../../../discord_common/js/shared/shared-constants/QuestRewardTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/quests/lib/FractionalPremiumUtils.tsx");

export const getDurationStringOfFractionalPremium = function getDurationStringOfFractionalPremium(arr) {
  let obj = PremiumUtils;
  const fractionalPremiumUnitsHoursFromSkuIds = obj.getFractionalPremiumUnitsHoursFromSkuIds(
    arr.map((skuId) => skuId.skuId),
  );
  if (fractionalPremiumUnitsHoursFromSkuIds % 24 === 0) {
    const intl2 = util.intl;
    obj = { days: fractionalPremiumUnitsHoursFromSkuIds / 24 };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t.Cz1G97, obj);
  } else {
    const intl = util.intl;
    obj = { hours: fractionalPremiumUnitsHoursFromSkuIds };
    formatToPlainStringResult = intl.formatToPlainString(util.t.J9Lu4h, obj);
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
  const diffAsUnitsResult = DateUtils.diffAsUnits(
    0,
    fractionalPremiumUnitsHoursFromSkuIds * DurationsDefault.Millis.HOUR,
  );
  obj.time = DateUtils.unitsAsStrings(diffAsUnitsResult, time);
  return intl.formatToPlainString(util.t["4SqnVD"], obj);
};
