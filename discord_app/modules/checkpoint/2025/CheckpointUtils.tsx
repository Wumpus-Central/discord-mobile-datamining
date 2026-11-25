// === Module 6376: CheckpointUtils ===

// Module 6376 (CheckpointUtils)
import util from "util" /* 1112 */;
import TimeUtils from "TimeUtils" /* 5796 */;
import getTimestampString from "getTimestampString" /* 6377 */;
import _modDef6378 from "module_6378" /* 6378 */;
import _modDef6379 from "module_6379" /* 6379 */;
import _modDef6380 from "module_6380" /* 6380 */;
import _modDef6381 from "module_6381" /* 6381 */;
import _modDef6382 from "module_6382" /* 6382 */;
import _modDef6383 from "module_6383" /* 6383 */;
import _modDef6384 from "module_6384" /* 6384 */;
import _modDef6385 from "module_6385" /* 6385 */;
import _modDef6386 from "module_6386" /* 6386 */;
import _modDef6387 from "module_6387" /* 6387 */;
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
    return _modDef6378;
  } else if (1 === cardId) {
    return _modDef6379;
  } else if (2 === cardId) {
    return _modDef6380;
  } else if (3 === cardId) {
    return _modDef6381;
  } else if (4 === cardId) {
    return _modDef6382;
  } else if (5 === cardId) {
    return _modDef6383;
  } else if (6 === cardId) {
    return _modDef6384;
  } else if (7 === cardId) {
    return _modDef6385;
  } else if (8 === cardId) {
    return _modDef6386;
  } else {
    return _modDef6387;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}