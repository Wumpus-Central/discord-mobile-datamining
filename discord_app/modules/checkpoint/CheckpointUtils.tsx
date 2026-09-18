// === Module 8373: CheckpointUtils ===

// Module 8373 (CheckpointUtils)
import util from "util" /* 1115 */;
import TimeUtils from "TimeUtils" /* 4751 */;
import notification_center_getTimestampString from "notification_center/getTimestampString" /* 7838 */;
import _modDef8374 from "module_8374" /* 8374 */;
import _modDef8375 from "module_8375" /* 8375 */;
import _modDef8376 from "module_8376" /* 8376 */;
import _modDef8377 from "module_8377" /* 8377 */;
import _modDef8378 from "module_8378" /* 8378 */;
import _modDef8379 from "module_8379" /* 8379 */;
import _modDef8380 from "module_8380" /* 8380 */;
import _modDef8381 from "module_8381" /* 8381 */;
import _modDef8382 from "module_8382" /* 8382 */;
import _modDef8383 from "module_8383" /* 8383 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  const timeAndUnit = TimeUtils.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const time2 = notification_center_getTimestampString.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = util.intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === TimeUtils.TimeUnits.HOURS) {
      const intl2 = util.intl;
      const obj3 = { hours: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj3);
    } else {
      const intl = util.intl;
      const obj4 = { minutes: rounded };
      formatToPlainStringResult = intl.formatToPlainString(time2.minutes, obj4);
    }
    return formatToPlainStringResult;
  }
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef8374;
  } else if (1 === cardId) {
    return _modDef8375;
  } else if (2 === cardId) {
    return _modDef8376;
  } else if (3 === cardId) {
    return _modDef8377;
  } else if (4 === cardId) {
    return _modDef8378;
  } else if (5 === cardId) {
    return _modDef8379;
  } else if (6 === cardId) {
    return _modDef8380;
  } else if (7 === cardId) {
    return _modDef8381;
  } else if (8 === cardId) {
    return _modDef8382;
  } else {
    return _modDef8383;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};