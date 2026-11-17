// === Module 6384: CheckpointUtils ===

// Module 6384 (CheckpointUtils)
import util from "util" /* 1113 */;
import TimeUtils from "TimeUtils" /* 6076 */;
import getTimestampString from "getTimestampString" /* 6385 */;
import _modDef6386 from "module_6386" /* 6386 */;
import _modDef6387 from "module_6387" /* 6387 */;
import _modDef6388 from "module_6388" /* 6388 */;
import _modDef6389 from "module_6389" /* 6389 */;
import _modDef6390 from "module_6390" /* 6390 */;
import _modDef6391 from "module_6391" /* 6391 */;
import _modDef6392 from "module_6392" /* 6392 */;
import _modDef6393 from "module_6393" /* 6393 */;
import _modDef6394 from "module_6394" /* 6394 */;
import _modDef6395 from "module_6395" /* 6395 */;
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
    return _modDef6386;
  } else if (1 === cardId) {
    return _modDef6387;
  } else if (2 === cardId) {
    return _modDef6388;
  } else if (3 === cardId) {
    return _modDef6389;
  } else if (4 === cardId) {
    return _modDef6390;
  } else if (5 === cardId) {
    return _modDef6391;
  } else if (6 === cardId) {
    return _modDef6392;
  } else if (7 === cardId) {
    return _modDef6393;
  } else if (8 === cardId) {
    return _modDef6394;
  } else {
    return _modDef6395;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}