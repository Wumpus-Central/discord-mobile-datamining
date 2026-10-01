// === Module 5078: CheckpointUtils ===

// Module 5078 (CheckpointUtils)
import util from "util" /* 1115 */;
import TimeUtils from "TimeUtils" /* 4874 */;
import getTimestampString from "getTimestampString" /* 5079 */;
import _modDef5080 from "module_5080" /* 5080 */;
import _modDef5081 from "module_5081" /* 5081 */;
import _modDef5082 from "module_5082" /* 5082 */;
import _modDef5083 from "module_5083" /* 5083 */;
import _modDef5084 from "module_5084" /* 5084 */;
import _modDef5085 from "module_5085" /* 5085 */;
import _modDef5086 from "module_5086" /* 5086 */;
import _modDef5087 from "module_5087" /* 5087 */;
import _modDef5088 from "module_5088" /* 5088 */;
import _modDef5089 from "module_5089" /* 5089 */;
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
    return _modDef5080;
  } else if (1 === cardId) {
    return _modDef5081;
  } else if (2 === cardId) {
    return _modDef5082;
  } else if (3 === cardId) {
    return _modDef5083;
  } else if (4 === cardId) {
    return _modDef5084;
  } else if (5 === cardId) {
    return _modDef5085;
  } else if (6 === cardId) {
    return _modDef5086;
  } else if (7 === cardId) {
    return _modDef5087;
  } else if (8 === cardId) {
    return _modDef5088;
  } else {
    return _modDef5089;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(powerLevelPercentile) {
  return Math.min(Math.max(Math.round(powerLevelPercentile / 10), 1), 9);
};