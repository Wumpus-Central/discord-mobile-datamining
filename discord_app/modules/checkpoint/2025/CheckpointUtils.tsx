// === Module 5124: CheckpointUtils ===

// Module 5124 (CheckpointUtils)
import util from "util" /* 1126 */;
import TimeUtils from "TimeUtils" /* 4919 */;
import getTimestampString from "getTimestampString" /* 5125 */;
import _modDef5126 from "module_5126" /* 5126 */;
import _modDef5127 from "module_5127" /* 5127 */;
import _modDef5128 from "module_5128" /* 5128 */;
import _modDef5129 from "module_5129" /* 5129 */;
import _modDef5130 from "module_5130" /* 5130 */;
import _modDef5131 from "module_5131" /* 5131 */;
import _modDef5132 from "module_5132" /* 5132 */;
import _modDef5133 from "module_5133" /* 5133 */;
import _modDef5134 from "module_5134" /* 5134 */;
import _modDef5135 from "module_5135" /* 5135 */;
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
    return _modDef5126;
  } else if (1 === cardId) {
    return _modDef5127;
  } else if (2 === cardId) {
    return _modDef5128;
  } else if (3 === cardId) {
    return _modDef5129;
  } else if (4 === cardId) {
    return _modDef5130;
  } else if (5 === cardId) {
    return _modDef5131;
  } else if (6 === cardId) {
    return _modDef5132;
  } else if (7 === cardId) {
    return _modDef5133;
  } else if (8 === cardId) {
    return _modDef5134;
  } else {
    return _modDef5135;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(powerLevelPercentile) {
  return Math.min(Math.max(Math.round(powerLevelPercentile / 10), 1), 9);
};