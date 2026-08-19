// === Module 8353: items ===

// Module 8353 (items)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import sleep from "sleep" /* 4548 */;
import getDurationString from "getDurationString" /* 4968 */;
import metadataDefault from "metadata" /* 8354 */;
import metadataDefault2 from "metadata" /* 8355 */;
import metadataDefault3 from "metadata" /* 8356 */;
import metadataDefault4 from "metadata" /* 8357 */;
import metadataDefault5 from "metadata" /* 8358 */;
import metadataDefault6 from "metadata" /* 8359 */;
import metadataDefault7 from "metadata" /* 8360 */;
import metadataDefault8 from "metadata" /* 8361 */;
import metadataDefault9 from "metadata" /* 8362 */;
import metadataDefault10 from "metadata" /* 8363 */;

const items = [sleep.TimeUnits.HOURS, sleep.TimeUnits.MINUTES];
const result = obj132.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let obj = sleep;
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const time2 = getDurationString.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = getSystemLocale.intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === sleep.TimeUnits.HOURS) {
      const intl2 = getSystemLocale.intl;
      obj = { hours: null };
      obj[0] = rounded;
      let formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj);
    } else {
      const intl = getSystemLocale.intl;
      obj = { minutes: null };
      obj[0] = rounded;
      formatToPlainStringResult = intl.formatToPlainString(time2.minutes, obj);
    }
    return formatToPlainStringResult;
  }
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return metadataDefault;
  } else if (1 === cardId) {
    return metadataDefault2;
  } else if (2 === cardId) {
    return metadataDefault3;
  } else if (3 === cardId) {
    return metadataDefault4;
  } else if (4 === cardId) {
    return metadataDefault5;
  } else if (5 === cardId) {
    return metadataDefault6;
  } else if (6 === cardId) {
    return metadataDefault7;
  } else if (7 === cardId) {
    return metadataDefault8;
  } else if (8 === cardId) {
    return metadataDefault9;
  } else {
    return metadataDefault10;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};