// discord_app/modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx
import util from "../../../intl/index.native.tsx";
import QuestConstants from "../QuestConstants.tsx";
import QuestTaskUtils from "QuestTaskUtils.tsx";
import VQRemainingTimeTruncationExperimentDefault from "../experiments/VQRemainingTimeTruncationExperiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function formatWatchRemainingDurationShort(questTaskDetails, truncate) {
  let obj = QuestTaskUtils;
  const time = obj.getRemainingTaskTime(questTaskDetails);
  let num = 60;
  truncate = 60 * time.minutes + time.seconds;
  truncate = undefined;
  if (truncate != null) {
    truncate = truncate.truncate;
  }
  if (null != truncate && truncate > truncate.truncate) {
    truncate = truncate.truncate;
  }
  if (truncate >= num) {
    const intl2 = util.intl;
    let t = { count: null };
    const _Math = Math;
    num = truncate / num;
    t.count = Math.round(num);
    intl2.formatToPlainString(tmp4 ? t.XTdnRd : t.PHhTXX, t);
    const tmp5 = tmp4 ? t.XTdnRd : t.PHhTXX;
  } else {
    const intl = util.intl;
    t = util.t;
    obj = { count: truncate };
    return intl.formatToPlainString(tmp4 ? t["spl/XS"] : t.rUfeQx, obj);
  }
}
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const result = size.fileFinishedImporting("modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx");

export { formatWatchRemainingDurationShort };
export const getVideoQuestWatchCtaText = function getVideoQuestWatchCtaText(questTaskDetails) {
  if (questTaskDetails.percentComplete > 0) {
    const intl = util.intl;
    let obj = { durationShort: formatWatchRemainingDurationShort(questTaskDetails) };
    return intl.formatToPlainString(util.t["pF/deA"], obj);
  } else {
    obj = { location: QuestsExperimentLocations.QUESTS_CARD };
    const intl2 = util.intl;
    obj = { durationShort: null };
    const obj1 = { truncate: null };
    obj1.truncate = obj1.getConfig(obj).truncateMoreThanSeconds;
    obj.durationShort = formatWatchRemainingDurationShort(questTaskDetails, obj1);
    return intl2.formatToPlainString(util.t.CHrvqg, obj);
  }
};
export const getVideoQuestWatchCtaAccessibilityLabel = function getVideoQuestWatchCtaAccessibilityLabel(
  questTaskDetails,
) {
  let obj = QuestTaskUtils;
  const remainingTaskTime = obj.getRemainingTaskTime(questTaskDetails);
  ({ minutes, seconds } = remainingTaskTime);
  if (minutes > 0) {
    if (seconds > 0) {
      const intl3 = util.intl;
      const time = { minutes, seconds };
      let formatToPlainStringResult = intl3.formatToPlainString(util.t["lW/66D"], time);
    }
    const intl4 = util.intl;
    const formatToPlainString = intl4.formatToPlainString;
    const t = util.t;
    if (tmp) {
      obj = { remainTime: formatToPlainStringResult };
      let formatToPlainStringResult1 = formatToPlainString(t["ch+yrN"], obj);
    } else {
      obj = { remainTime: formatToPlainStringResult };
      formatToPlainStringResult1 = formatToPlainString(t.Bwc5Dg, obj);
    }
    return formatToPlainStringResult1;
  }
  if (minutes > 0) {
    const intl2 = util.intl;
    const obj1 = { count: minutes };
    formatToPlainStringResult = intl2.formatToPlainString(util.t["SxnF/O"], obj1);
  } else {
    const intl = util.intl;
    const obj2 = { count: seconds };
    formatToPlainStringResult = intl.formatToPlainString(util.t["0BZpdi"], obj2);
  }
  tmp = questTaskDetails.percentComplete > 0;
};
