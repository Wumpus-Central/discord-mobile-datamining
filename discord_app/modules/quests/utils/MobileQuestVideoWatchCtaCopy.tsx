// discord_app/modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx
import util from "../../../intl/index.native.tsx";
import QuestConstants from "../QuestConstants.tsx";
import QuestTaskUtils from "QuestTaskUtils.tsx";
import VQRemainingTimeTruncationExperimentDefault from "../experiments/VQRemainingTimeTruncationExperiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function formatWatchRemainingDurationShort(percentComplete, truncate) {
  const time = QuestTaskUtils.getRemainingTaskTime(percentComplete);
  let num = 60;
  truncate = 60 * time.minutes + time.seconds;
  let truncate1;
  if (truncate != null) {
    truncate1 = truncate.truncate;
  }
  if (null != truncate1 && truncate > truncate.truncate) {
    truncate = truncate.truncate;
  }
  if (truncate >= num) {
    const intl2 = util.intl;
    const t1 = { count: null };
    const _Math = Math;
    num = truncate / num;
    t1.count = Math.round(num);
    intl2.formatToPlainString(tmp4 ? t1.XTdnRd : t1.PHhTXX, t1);
    const tmp5 = tmp4 ? t1.XTdnRd : t1.PHhTXX;
  } else {
    const intl = util.intl;
    const t = util.t;
    const obj2 = { count: truncate };
    return intl.formatToPlainString(tmp4 ? t["spl/XS"] : t.rUfeQx, obj2);
  }
}
function getWatchCtaText(percentComplete, hideDuration) {
  let flag = hideDuration.hideDuration;
  if (flag === undefined) {
    flag = false;
  }
  const intl = util.intl;
  if (flag) {
    const string = intl.string;
    let pk9XKF = util.t;
    if (tmp) {
      pk9XKF = pk9XKF.pk9XKF;
      let stringResult = string(pk9XKF);
    } else {
      stringResult = string(pk9XKF.kfks9Y);
    }
  } else {
    const formatToPlainString = intl.formatToPlainString;
    const t = util.t;
    if (tmp) {
      const obj2 = { durationShort: formatWatchRemainingDurationShort(percentComplete) };
      let formatToPlainStringResult = formatToPlainString(t["pF/deA"], obj2);
    } else {
      const obj = { durationShort: null };
      const obj3 = { truncate: hideDuration.truncateMoreThanSeconds };
      obj.durationShort = formatWatchRemainingDurationShort(percentComplete, obj3);
      formatToPlainStringResult = formatToPlainString(t.CHrvqg, obj);
    }
    return formatToPlainStringResult;
  }
}
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const result = size.fileFinishedImporting("modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx");

export { formatWatchRemainingDurationShort };
export function getVideoQuestWatchCtaText(questTaskDetails) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = {
    truncateMoreThanSeconds: VQRemainingTimeTruncationExperimentDefault.getConfig({
      location: QuestsExperimentLocations.QUESTS_CARD,
    }).truncateMoreThanSeconds,
    hideDuration: flag,
  };
  return getWatchCtaText(questTaskDetails, obj);
}
export function getBountyWatchCtaText(watchVideoTaskDetailsFromProgress) {
  return getWatchCtaText(watchVideoTaskDetailsFromProgress, { truncateMoreThanSeconds: null });
}
export function getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails) {
  const remainingTaskTime = QuestTaskUtils.getRemainingTaskTime(questTaskDetails);
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
      const obj2 = { remainTime: formatToPlainStringResult };
      let formatToPlainStringResult1 = formatToPlainString(t["ch+yrN"], obj2);
    } else {
      const obj3 = { remainTime: formatToPlainStringResult };
      formatToPlainStringResult1 = formatToPlainString(t.Bwc5Dg, obj3);
    }
    return formatToPlainStringResult1;
  }
  if (minutes > 0) {
    const intl2 = util.intl;
    const obj4 = { count: minutes };
    formatToPlainStringResult = intl2.formatToPlainString(util.t["SxnF/O"], obj4);
  } else {
    const intl = util.intl;
    const obj5 = { count: seconds };
    formatToPlainStringResult = intl.formatToPlainString(util.t["0BZpdi"], obj5);
  }
  tmp = questTaskDetails.percentComplete > 0;
}
