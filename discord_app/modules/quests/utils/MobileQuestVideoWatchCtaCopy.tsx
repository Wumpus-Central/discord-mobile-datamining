// === Module 11333: formatWatchRemainingDurationShort ===

// Module 11333 (formatWatchRemainingDurationShort)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import QuestsExperimentLocations2 from "QuestsExperimentLocations" /* 5395 */;
import getApplicationIdsByTaskTypes from "getApplicationIdsByTaskTypes" /* 7479 */;
import apexExperimentDefault from "apexExperiment" /* 11334 */;

function formatWatchRemainingDurationShort(questTaskDetails, truncate) {
  let obj = getApplicationIdsByTaskTypes;
  const remainingTaskTime = obj.getRemainingTaskTime(questTaskDetails);
  let num = 60;
  truncate = 60 * remainingTaskTime.minutes + remainingTaskTime.seconds;
  truncate = undefined;
  if (truncate != null) {
    truncate = truncate.truncate;
  }
  if (null != truncate && truncate > truncate.truncate) {
    truncate = truncate.truncate;
  }
  if (truncate >= num) {
    const intl2 = tmp(1233).intl;
    let t = tmp(1233).t;
    t = { count: null };
    const _Math = Math;
    num = truncate / num;
    t[0] = Math.round(num);
    intl2.formatToPlainString(tmp5 ? t.XTdnRd : t.PHhTXX, t);
    const tmp6 = tmp5 ? t.XTdnRd : t.PHhTXX;
  } else {
    const intl = tmp(1233).intl;
    t = tmp(1233).t;
    obj = { count: null };
    obj[0] = truncate;
    return intl.formatToPlainString(tmp5 ? t["spl/XS"] : t.rUfeQx, obj);
  }
}
const QuestsExperimentLocations = QuestsExperimentLocations2.QuestsExperimentLocations;
const result = set.fileFinishedImporting("modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx");

export { formatWatchRemainingDurationShort };
export const getVideoQuestWatchCtaText = function getVideoQuestWatchCtaText(questTaskDetails) {
  if (questTaskDetails.percentComplete > 0) {
    const intl = getSystemLocale.intl;
    let obj = { durationShort: null };
    obj[0] = formatWatchRemainingDurationShort(questTaskDetails);
    return intl.formatToPlainString(getSystemLocale.t["pF/deA"], obj);
  } else {
    obj1 = apexExperimentDefault;
    obj = { location: null };
    obj[0] = QuestsExperimentLocations.QUESTS_CARD;
    const intl2 = getSystemLocale.intl;
    obj = { durationShort: null };
    obj1 = { truncate: null };
    obj1[0] = obj1.getConfig(obj).truncateMoreThanSeconds;
    obj[0] = formatWatchRemainingDurationShort(questTaskDetails, obj1);
    return intl2.formatToPlainString(getSystemLocale.t.CHrvqg, obj);
  }
};
export const getVideoQuestWatchCtaAccessibilityLabel = function getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails) {
  let obj = getApplicationIdsByTaskTypes;
  const remainingTaskTime = obj.getRemainingTaskTime(questTaskDetails);
  ({ minutes, seconds } = remainingTaskTime);
  if (minutes > 0) {
    if (seconds > 0) {
      const intl3 = tmp2(1233).intl;
      obj = { minutes: null, seconds: null };
      obj[0] = minutes;
      obj[1] = seconds;
      let formatToPlainStringResult = intl3.formatToPlainString(tmp2(1233).t["lW/66D"], obj);
    }
    const intl4 = tmp2(1233).intl;
    const formatToPlainString = intl4.formatToPlainString;
    const t = tmp2(1233).t;
    if (tmp) {
      obj = { remainTime: null };
      obj[0] = formatToPlainStringResult;
      let formatToPlainStringResult1 = formatToPlainString(t["ch+yrN"], obj);
    } else {
      obj1 = { remainTime: null };
      obj1[0] = formatToPlainStringResult;
      formatToPlainStringResult1 = formatToPlainString(t.Bwc5Dg, obj1);
    }
    return formatToPlainStringResult1;
  }
  if (minutes > 0) {
    const intl2 = tmp2(1233).intl;
    const obj2 = { count: null };
    obj2[0] = minutes;
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1233).t["SxnF/O"], obj2);
  } else {
    const intl = tmp2(1233).intl;
    const obj3 = { count: null };
    obj3[0] = seconds;
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1233).t["0BZpdi"], obj3);
  }
};