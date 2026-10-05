// === Module 10941: MobileQuestVideoWatchCtaCopy ===

// Module 10941 (MobileQuestVideoWatchCtaCopy)
import intl5 from "intl" /* 1126 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7208 */;
import VQRemainingTimeTruncationExperimentDefault from "VQRemainingTimeTruncationExperiment" /* 10942 */;
import size from "module_2" /* 2 */;

function formatWatchRemainingDurationShort(watchVideoTaskDetailsFromProgress, truncate) {
  let formatToPlainString2Result;
  const obj = QuestTaskUtils;
  const time = obj.getRemainingTaskTime(watchVideoTaskDetailsFromProgress);
  truncate = 60 * time.minutes + time.seconds;
  let truncate1;
  if (truncate != null) {
    truncate1 = truncate.truncate;
  }
  if (null != truncate1 && truncate > truncate.truncate) {
    truncate = truncate.truncate;
  }
  if (truncate >= 60) {
    const intl2 = intl5.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = intl5.t;
    const _Math = Math;
    const obj2 = { count: Math.round(truncate / 60) };
    const tmp6 = null != truncate1 && truncate > truncate.truncate ? t2.XTdnRd : t2.PHhTXX;
    formatToPlainString2Result = formatToPlainString2(tmp6, obj2);
  } else {
    const intl = intl5.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = intl5.t;
    const obj3 = { count: truncate };
    formatToPlainString2Result = formatToPlainString(tmp4 ? t["spl/XS"] : t.rUfeQx, obj3);
  }
  return formatToPlainString2Result;
}
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const result = size.fileFinishedImporting("modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx");

export { formatWatchRemainingDurationShort };
export const getVideoQuestWatchCtaText = function getVideoQuestWatchCtaText(questTaskDetails) {
  let formatToPlainString2Result;
  let obj3;
  VQRemainingTimeTruncationExperimentDefault;
  if (questTaskDetails.percentComplete > 0) {
    const intl2 = intl5.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const obj2 = { durationShort: formatWatchRemainingDurationShort(questTaskDetails) };
    const prop = intl5.t["pF/deA"];
    formatToPlainString2Result = formatToPlainString2(prop, obj2);
  } else {
    const intl = intl5.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { durationShort: formatWatchRemainingDurationShort(questTaskDetails, obj3) };
    obj3 = { truncate: tmp3 };
    const CHrvqg = intl5.t.CHrvqg;
    formatToPlainString2Result = formatToPlainString(CHrvqg, obj);
  }
  return formatToPlainString2Result;
};
export const getBountyWatchCtaText = function getBountyWatchCtaText(watchVideoTaskDetailsFromProgress) {
  let formatToPlainString2Result;
  let obj3;
  if (watchVideoTaskDetailsFromProgress.percentComplete > 0) {
    const intl2 = intl5.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const obj2 = { durationShort: formatWatchRemainingDurationShort(watchVideoTaskDetailsFromProgress) };
    const prop = intl5.t["pF/deA"];
    formatToPlainString2Result = formatToPlainString2(prop, obj2);
  } else {
    const intl = intl5.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { durationShort: formatWatchRemainingDurationShort(watchVideoTaskDetailsFromProgress, obj3) };
    obj3 = { truncate: null };
    const CHrvqg = intl5.t.CHrvqg;
    formatToPlainString2Result = formatToPlainString(CHrvqg, obj);
  }
  return formatToPlainString2Result;
};
export const getVideoQuestWatchCtaAccessibilityLabel = function getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails) {
  let formatToPlainStringResult;
  let minutes;
  let seconds;
  const tmp = questTaskDetails.percentComplete > 0;
  const obj = QuestTaskUtils;
  const remainingTaskTime = obj.getRemainingTaskTime(questTaskDetails);
  ({ minutes, seconds } = remainingTaskTime);
  if (minutes > 0) {
    let formatToPlainStringResult1;
    if (seconds > 0) {
      const intl3 = intl5.intl;
      const time = { minutes, seconds };
      formatToPlainStringResult = intl3.formatToPlainString(intl5.t["lW/66D"], time);
    }
    const intl4 = intl5.intl;
    const formatToPlainString = intl4.formatToPlainString;
    const t = intl5.t;
    if (tmp) {
      const obj2 = { remainTime: formatToPlainStringResult };
      formatToPlainStringResult1 = formatToPlainString(t["ch+yrN"], obj2);
    } else {
      const obj3 = { remainTime: formatToPlainStringResult };
      formatToPlainStringResult1 = formatToPlainString(t.Bwc5Dg, obj3);
    }
    return formatToPlainStringResult1;
  }
  if (minutes > 0) {
    const intl2 = intl5.intl;
    const obj4 = { count: minutes };
    formatToPlainStringResult = intl2.formatToPlainString(intl5.t["SxnF/O"], obj4);
  } else {
    const intl = intl5.intl;
    const obj5 = { count: seconds };
    formatToPlainStringResult = intl.formatToPlainString(intl5.t["0BZpdi"], obj5);
  }
};