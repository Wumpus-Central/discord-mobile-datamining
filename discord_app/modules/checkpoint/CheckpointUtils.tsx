// === Module 8021: items ===

// Module 8021 (items)
import set from "set" /* 2 */;
import sleep from "sleep" /* 4526 */;
import getDurationString from "getDurationString" /* 7355 */;
import metadataDefault from "metadata" /* 8022 */;
import metadataDefault2 from "metadata" /* 8023 */;
import metadataDefault3 from "metadata" /* 8024 */;
import metadataDefault4 from "metadata" /* 8025 */;
import metadataDefault5 from "metadata" /* 8026 */;
import metadataDefault6 from "metadata" /* 8027 */;
import metadataDefault7 from "metadata" /* 8028 */;
import metadataDefault8 from "metadata" /* 8029 */;
import metadataDefault9 from "metadata" /* 8030 */;
import metadataDefault10 from "metadata" /* 8031 */;

const items = [sleep.TimeUnits.HOURS, sleep.TimeUnits.MINUTES];
const result = set.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let obj = sleep;
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const abbreviatedFormatter = getDurationString.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1236).intl;
    return intl3.formatToPlainString(abbreviatedFormatter.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === tmp(4526).TimeUnits.HOURS) {
      const intl2 = tmp(1236).intl;
      obj = { hours: null };
      obj[0] = rounded;
      let formatToPlainStringResult = intl2.formatToPlainString(abbreviatedFormatter.hours, obj);
    } else {
      const intl = tmp(1236).intl;
      obj = { minutes: null };
      obj[0] = rounded;
      formatToPlainStringResult = intl.formatToPlainString(abbreviatedFormatter.minutes, obj);
    }
    return formatToPlainStringResult;
  }
  const obj2 = getDurationString;
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