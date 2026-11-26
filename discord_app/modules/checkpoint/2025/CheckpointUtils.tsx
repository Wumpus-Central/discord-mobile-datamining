// === Module 6407: CheckpointUtils ===

// Module 6407 (CheckpointUtils)
import util from "util" /* 1112 */;
import TimeUtils from "TimeUtils" /* 5827 */;
import getTimestampString from "getTimestampString" /* 6408 */;
import _modDef6409 from "module_6409" /* 6409 */;
import _modDef6410 from "module_6410" /* 6410 */;
import _modDef6411 from "module_6411" /* 6411 */;
import _modDef6412 from "module_6412" /* 6412 */;
import _modDef6413 from "module_6413" /* 6413 */;
import _modDef6414 from "module_6414" /* 6414 */;
import _modDef6415 from "module_6415" /* 6415 */;
import _modDef6416 from "module_6416" /* 6416 */;
import _modDef6417 from "module_6417" /* 6417 */;
import _modDef6418 from "module_6418" /* 6418 */;
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
    return _modDef6409;
  } else if (1 === cardId) {
    return _modDef6410;
  } else if (2 === cardId) {
    return _modDef6411;
  } else if (3 === cardId) {
    return _modDef6412;
  } else if (4 === cardId) {
    return _modDef6413;
  } else if (5 === cardId) {
    return _modDef6414;
  } else if (6 === cardId) {
    return _modDef6415;
  } else if (7 === cardId) {
    return _modDef6416;
  } else if (8 === cardId) {
    return _modDef6417;
  } else {
    return _modDef6418;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}