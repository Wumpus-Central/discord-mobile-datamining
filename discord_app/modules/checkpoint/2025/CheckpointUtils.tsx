// === Module 6024: CheckpointUtils ===

// Module 6024 (CheckpointUtils)
import util from "util" /* 1128 */;
import TimeUtils from "TimeUtils" /* 5722 */;
import getTimestampString from "getTimestampString" /* 6025 */;
import _modDef6026 from "module_6026" /* 6026 */;
import _modDef6027 from "module_6027" /* 6027 */;
import _modDef6028 from "module_6028" /* 6028 */;
import _modDef6029 from "module_6029" /* 6029 */;
import _modDef6030 from "module_6030" /* 6030 */;
import _modDef6031 from "module_6031" /* 6031 */;
import _modDef6032 from "module_6032" /* 6032 */;
import _modDef6033 from "module_6033" /* 6033 */;
import _modDef6034 from "module_6034" /* 6034 */;
import _modDef6035 from "module_6035" /* 6035 */;
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
export const getAccessibleVoiceDurationString = function getAccessibleVoiceDurationString(rounded) {
  const timeAndUnit = TimeUtils.getTimeAndUnit(rounded, items);
  let num = timeAndUnit.time;
  if (num == null) {
    num = 0;
  }
  rounded = Math.round(num);
  if (timeAndUnit.unit === TimeUtils.TimeUnits.HOURS) {
    const intl2 = util.intl;
    const obj2 = { hours: rounded };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t.xCjYxK, obj2);
  } else {
    const intl = util.intl;
    const obj3 = { minutes: rounded };
    formatToPlainStringResult = intl.formatToPlainString(util.t.iXLF9W, obj3);
  }
  return formatToPlainStringResult;
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef6026;
  } else if (1 === cardId) {
    return _modDef6027;
  } else if (2 === cardId) {
    return _modDef6028;
  } else if (3 === cardId) {
    return _modDef6029;
  } else if (4 === cardId) {
    return _modDef6030;
  } else if (5 === cardId) {
    return _modDef6031;
  } else if (6 === cardId) {
    return _modDef6032;
  } else if (7 === cardId) {
    return _modDef6033;
  } else if (8 === cardId) {
    return _modDef6034;
  } else {
    return _modDef6035;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
};