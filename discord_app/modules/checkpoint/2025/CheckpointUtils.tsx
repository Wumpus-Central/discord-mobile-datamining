// === Module 5452: CheckpointUtils ===

// Module 5452 (CheckpointUtils)
import util from "util" /* 1126 */;
import TimeUtils from "TimeUtils" /* 5125 */;
import getTimestampString from "getTimestampString" /* 5453 */;
import _modDef5454 from "module_5454" /* 5454 */;
import _modDef5455 from "module_5455" /* 5455 */;
import _modDef5456 from "module_5456" /* 5456 */;
import _modDef5457 from "module_5457" /* 5457 */;
import _modDef5458 from "module_5458" /* 5458 */;
import _modDef5459 from "module_5459" /* 5459 */;
import _modDef5460 from "module_5460" /* 5460 */;
import _modDef5461 from "module_5461" /* 5461 */;
import _modDef5462 from "module_5462" /* 5462 */;
import _modDef5463 from "module_5463" /* 5463 */;
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
    return _modDef5454;
  } else if (1 === cardId) {
    return _modDef5455;
  } else if (2 === cardId) {
    return _modDef5456;
  } else if (3 === cardId) {
    return _modDef5457;
  } else if (4 === cardId) {
    return _modDef5458;
  } else if (5 === cardId) {
    return _modDef5459;
  } else if (6 === cardId) {
    return _modDef5460;
  } else if (7 === cardId) {
    return _modDef5461;
  } else if (8 === cardId) {
    return _modDef5462;
  } else {
    return _modDef5463;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(powerLevelPercentile) {
  return Math.min(Math.max(Math.round(powerLevelPercentile / 10), 1), 9);
};