// === Module 6323: CheckpointUtils ===

// Module 6323 (CheckpointUtils)
import util from "util" /* 1113 */;
import TimeUtils from "TimeUtils" /* 6016 */;
import getTimestampString from "getTimestampString" /* 6324 */;
import _modDef6325 from "module_6325" /* 6325 */;
import _modDef6326 from "module_6326" /* 6326 */;
import _modDef6327 from "module_6327" /* 6327 */;
import _modDef6328 from "module_6328" /* 6328 */;
import _modDef6329 from "module_6329" /* 6329 */;
import _modDef6330 from "module_6330" /* 6330 */;
import _modDef6331 from "module_6331" /* 6331 */;
import _modDef6332 from "module_6332" /* 6332 */;
import _modDef6333 from "module_6333" /* 6333 */;
import _modDef6334 from "module_6334" /* 6334 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/2025/CheckpointUtils.tsx");

export function getVoiceDurationString(totalVoiceMinutes) {
  const timeAndUnit = TimeUtils.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const time2 = getTimestampString.getAbbreviatedFormatter();
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
    return _modDef6325;
  } else if (1 === cardId) {
    return _modDef6326;
  } else if (2 === cardId) {
    return _modDef6327;
  } else if (3 === cardId) {
    return _modDef6328;
  } else if (4 === cardId) {
    return _modDef6329;
  } else if (5 === cardId) {
    return _modDef6330;
  } else if (6 === cardId) {
    return _modDef6331;
  } else if (7 === cardId) {
    return _modDef6332;
  } else if (8 === cardId) {
    return _modDef6333;
  } else {
    return _modDef6334;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}