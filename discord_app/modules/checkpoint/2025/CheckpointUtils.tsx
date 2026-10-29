// === Module 6063: CheckpointUtils ===

// Module 6063 (CheckpointUtils)
import util from "util" /* 1125 */;
import TimeUtils from "TimeUtils" /* 5760 */;
import getTimestampString from "getTimestampString" /* 6064 */;
import _modDef6065 from "module_6065" /* 6065 */;
import _modDef6066 from "module_6066" /* 6066 */;
import _modDef6067 from "module_6067" /* 6067 */;
import _modDef6068 from "module_6068" /* 6068 */;
import _modDef6069 from "module_6069" /* 6069 */;
import _modDef6070 from "module_6070" /* 6070 */;
import _modDef6071 from "module_6071" /* 6071 */;
import _modDef6072 from "module_6072" /* 6072 */;
import _modDef6073 from "module_6073" /* 6073 */;
import _modDef6074 from "module_6074" /* 6074 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/2025/CheckpointUtils.tsx");

export function getVoiceDurationString(rounded) {
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
}
export function getAccessibleVoiceDurationString(rounded) {
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
}
export function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef6065;
  } else if (1 === cardId) {
    return _modDef6066;
  } else if (2 === cardId) {
    return _modDef6067;
  } else if (3 === cardId) {
    return _modDef6068;
  } else if (4 === cardId) {
    return _modDef6069;
  } else if (5 === cardId) {
    return _modDef6070;
  } else if (6 === cardId) {
    return _modDef6071;
  } else if (7 === cardId) {
    return _modDef6072;
  } else if (8 === cardId) {
    return _modDef6073;
  } else {
    return _modDef6074;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}