// === Module 5131: CheckpointUtils ===

// Module 5131 (CheckpointUtils)
import util from "util" /* 1126 */;
import TimeUtils from "TimeUtils" /* 4925 */;
import getTimestampString from "getTimestampString" /* 5132 */;
import _modDef5133 from "module_5133" /* 5133 */;
import _modDef5134 from "module_5134" /* 5134 */;
import _modDef5135 from "module_5135" /* 5135 */;
import _modDef5136 from "module_5136" /* 5136 */;
import _modDef5137 from "module_5137" /* 5137 */;
import _modDef5138 from "module_5138" /* 5138 */;
import _modDef5139 from "module_5139" /* 5139 */;
import _modDef5140 from "module_5140" /* 5140 */;
import _modDef5141 from "module_5141" /* 5141 */;
import _modDef5142 from "module_5142" /* 5142 */;
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
    return _modDef5133;
  } else if (1 === cardId) {
    return _modDef5134;
  } else if (2 === cardId) {
    return _modDef5135;
  } else if (3 === cardId) {
    return _modDef5136;
  } else if (4 === cardId) {
    return _modDef5137;
  } else if (5 === cardId) {
    return _modDef5138;
  } else if (6 === cardId) {
    return _modDef5139;
  } else if (7 === cardId) {
    return _modDef5140;
  } else if (8 === cardId) {
    return _modDef5141;
  } else {
    return _modDef5142;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(powerLevelPercentile) {
  return Math.min(Math.max(Math.round(powerLevelPercentile / 10), 1), 9);
};