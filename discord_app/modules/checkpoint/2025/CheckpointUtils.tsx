// === Module 6213: CheckpointUtils ===

// Module 6213 (CheckpointUtils)
import util from "util" /* 1113 */;
import TimeUtils from "TimeUtils" /* 5909 */;
import getTimestampString from "getTimestampString" /* 6214 */;
import _modDef6215 from "module_6215" /* 6215 */;
import _modDef6216 from "module_6216" /* 6216 */;
import _modDef6217 from "module_6217" /* 6217 */;
import _modDef6218 from "module_6218" /* 6218 */;
import _modDef6219 from "module_6219" /* 6219 */;
import _modDef6220 from "module_6220" /* 6220 */;
import _modDef6221 from "module_6221" /* 6221 */;
import _modDef6222 from "module_6222" /* 6222 */;
import _modDef6223 from "module_6223" /* 6223 */;
import _modDef6224 from "module_6224" /* 6224 */;
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
    return _modDef6215;
  } else if (1 === cardId) {
    return _modDef6216;
  } else if (2 === cardId) {
    return _modDef6217;
  } else if (3 === cardId) {
    return _modDef6218;
  } else if (4 === cardId) {
    return _modDef6219;
  } else if (5 === cardId) {
    return _modDef6220;
  } else if (6 === cardId) {
    return _modDef6221;
  } else if (7 === cardId) {
    return _modDef6222;
  } else if (8 === cardId) {
    return _modDef6223;
  } else {
    return _modDef6224;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}