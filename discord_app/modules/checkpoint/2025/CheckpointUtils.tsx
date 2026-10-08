// === Module 5443: CheckpointUtils ===

// Module 5443 (CheckpointUtils)
import util from "util" /* 1126 */;
import TimeUtils from "TimeUtils" /* 5119 */;
import getTimestampString from "getTimestampString" /* 5444 */;
import _modDef5445 from "module_5445" /* 5445 */;
import _modDef5446 from "module_5446" /* 5446 */;
import _modDef5447 from "module_5447" /* 5447 */;
import _modDef5448 from "module_5448" /* 5448 */;
import _modDef5449 from "module_5449" /* 5449 */;
import _modDef5450 from "module_5450" /* 5450 */;
import _modDef5451 from "module_5451" /* 5451 */;
import _modDef5452 from "module_5452" /* 5452 */;
import _modDef5453 from "module_5453" /* 5453 */;
import _modDef5454 from "module_5454" /* 5454 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/2025/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(rounded) {
  const timeAndUnit = TimeUtils.getTimeAndUnit(rounded, items);
  ({ time, unit } = timeAndUnit);
  const time2 = getTimestampString.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = util.intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    rounded = Math.round(time);
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
    return _modDef5445;
  } else if (1 === cardId) {
    return _modDef5446;
  } else if (2 === cardId) {
    return _modDef5447;
  } else if (3 === cardId) {
    return _modDef5448;
  } else if (4 === cardId) {
    return _modDef5449;
  } else if (5 === cardId) {
    return _modDef5450;
  } else if (6 === cardId) {
    return _modDef5451;
  } else if (7 === cardId) {
    return _modDef5452;
  } else if (8 === cardId) {
    return _modDef5453;
  } else {
    return _modDef5454;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(powerLevelPercentile) {
  return Math.min(Math.max(Math.round(powerLevelPercentile / 10), 1), 9);
};