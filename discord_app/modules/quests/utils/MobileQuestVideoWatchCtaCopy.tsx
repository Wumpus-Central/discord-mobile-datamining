// discord_app/modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx
import { getApplicationIdsByTaskTypes } from "QuestTaskUtils.tsx";
const result = require("set").fileFinishedImporting("modules/quests/utils/MobileQuestVideoWatchCtaCopy.tsx");

export const formatWatchRemainingDurationShort = function formatWatchRemainingDurationShort(targetSeconds) {
  let obj = getApplicationIdsByTaskTypes /* getApplicationIdsByTaskTypes */;
  const remainingTaskTime = obj.getRemainingTaskTime(targetSeconds);
  const sum = 60 * remainingTaskTime.minutes + remainingTaskTime.seconds;
  if (sum >= 60) {
    const intl2 = tmp(1236).intl;
    obj = { count: null };
    const _Math = Math;
    obj[0] = Math.round(sum / 60);
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(1236).t.PHhTXX, obj);
  } else {
    const intl = tmp(1236).intl;
    obj = { count: null };
    obj[0] = sum;
    formatToPlainStringResult = intl.formatToPlainString(tmp(1236).t.rUfeQx, obj);
  }
  return formatToPlainStringResult;
};
export const getVideoQuestWatchCtaText = function getVideoQuestWatchCtaText(questTaskDetails) {
  let obj = getApplicationIdsByTaskTypes /* getApplicationIdsByTaskTypes */;
  const remainingTaskTime = obj.getRemainingTaskTime(questTaskDetails);
  const sum = 60 * remainingTaskTime.minutes + remainingTaskTime.seconds;
  if (sum >= 60) {
    const intl2 = tmp2(1236).intl;
    obj = { count: null };
    const _Math = Math;
    obj[0] = Math.round(sum / 60);
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1236).t.PHhTXX, obj);
  } else {
    const intl = tmp2(1236).intl;
    obj = { count: null };
    obj[0] = sum;
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1236).t.rUfeQx, obj);
  }
  const intl3 = tmp2(1236).intl;
  const formatToPlainString = intl3.formatToPlainString;
  const t = tmp2(1236).t;
  if (tmp) {
    const obj1 = { durationShort: null };
    obj1[0] = formatToPlainStringResult;
    let formatToPlainStringResult1 = formatToPlainString(t["pF/deA"], obj1);
  } else {
    const obj2 = { durationShort: null };
    obj2[0] = formatToPlainStringResult;
    formatToPlainStringResult1 = formatToPlainString(t.CHrvqg, obj2);
  }
  return formatToPlainStringResult1;
};
export const getVideoQuestWatchCtaAccessibilityLabel = function getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails) {
  let minutes;
  let seconds;
  let obj = getApplicationIdsByTaskTypes /* getApplicationIdsByTaskTypes */;
  const remainingTaskTime = obj.getRemainingTaskTime(questTaskDetails);
  ({ minutes, seconds } = remainingTaskTime);
  if (minutes > 0) {
    if (seconds > 0) {
      const intl3 = tmp2(1236).intl;
      obj = { minutes: null, seconds: null };
      obj[0] = minutes;
      obj[1] = seconds;
      let formatToPlainStringResult = intl3.formatToPlainString(tmp2(1236).t["lW/66D"], obj);
    }
    const intl4 = tmp2(1236).intl;
    const formatToPlainString = intl4.formatToPlainString;
    const t = tmp2(1236).t;
    if (tmp) {
      obj = { remainTime: null };
      obj[0] = formatToPlainStringResult;
      let formatToPlainStringResult1 = formatToPlainString(t["ch+yrN"], obj);
    } else {
      const obj1 = { remainTime: null };
      obj1[0] = formatToPlainStringResult;
      formatToPlainStringResult1 = formatToPlainString(t.Bwc5Dg, obj1);
    }
    return formatToPlainStringResult1;
  }
  if (minutes > 0) {
    const intl2 = tmp2(1236).intl;
    const obj2 = { count: null };
    obj2[0] = minutes;
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1236).t["SxnF/O"], obj2);
  } else {
    const intl = tmp2(1236).intl;
    const obj3 = { count: null };
    obj3[0] = seconds;
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1236).t["0BZpdi"], obj3);
  }
};