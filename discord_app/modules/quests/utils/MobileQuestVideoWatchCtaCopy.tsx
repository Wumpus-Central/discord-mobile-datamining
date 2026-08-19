// discord_app/modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import QuestsExperimentLocations2 from "../QuestConstants.tsx";
import getApplicationIdsByTaskTypes from "QuestTaskUtils.tsx";
import apexExperimentDefault from "../experiments/VQRemainingTimeTruncationExperiment.tsx";

function formatWatchRemainingDurationShort(questTaskDetails, truncate) {
  let obj = getApplicationIdsByTaskTypes;
  const time = obj.getRemainingTaskTime(questTaskDetails);
  let num = 60;
  truncate = undefined;
  if (truncate != null) {
    truncate = truncate.truncate;
  }
  if (null != truncate && truncate > truncate.truncate) {
    truncate = truncate.truncate;
  }
  if (truncate >= num) {
    const intl2 = getSystemLocale.intl;
    let t = { count: null };
    const _Math = Math;
    num = truncate / num;
    t[0] = Math.round(num);
    intl2.formatToPlainString(tmp4 ? t.XTdnRd : t.PHhTXX, t);
  } else {
    const intl = getSystemLocale.intl;
    t = getSystemLocale.t;
    obj = { count: null };
    obj[0] = truncate;
    return intl.formatToPlainString(tmp4 ? t["spl/XS"] : t.rUfeQx, obj);
  }
}
const QuestsExperimentLocations = QuestsExperimentLocations2.QuestsExperimentLocations;
const result = obj132.fileFinishedImporting("modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx");

export { formatWatchRemainingDurationShort };
export const getVideoQuestWatchCtaText = function getVideoQuestWatchCtaText(questTaskDetails) {
  if (questTaskDetails.percentComplete > 0) {
    const intl = getSystemLocale.intl;
    let obj = { durationShort: null };
    obj[0] = formatWatchRemainingDurationShort(questTaskDetails);
    return intl.formatToPlainString(getSystemLocale.t["pF/deA"], obj);
  } else {
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
      const intl3 = getSystemLocale.intl;
      obj = { minutes: null, seconds: null };
      obj[0] = minutes;
      obj[1] = seconds;
      let formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t["lW/66D"], obj);
    }
    const intl4 = getSystemLocale.intl;
    const formatToPlainString = intl4.formatToPlainString;
    const t = getSystemLocale.t;
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
    const intl2 = getSystemLocale.intl;
    const obj2 = { count: null };
    obj2[0] = minutes;
    formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t["SxnF/O"], obj2);
  } else {
    const intl = getSystemLocale.intl;
    const obj3 = { count: null };
    obj3[0] = seconds;
    formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t["0BZpdi"], obj3);
  }
  tmp = questTaskDetails.percentComplete > 0;
};