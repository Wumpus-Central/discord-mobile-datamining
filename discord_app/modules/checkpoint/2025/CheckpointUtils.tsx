// === Module 6233: CheckpointUtils ===

// Module 6233 (CheckpointUtils)
import util from "util" /* 1113 */;
import TimeUtils from "TimeUtils" /* 5928 */;
import getTimestampString from "getTimestampString" /* 6234 */;
import _modDef6235 from "module_6235" /* 6235 */;
import _modDef6236 from "module_6236" /* 6236 */;
import _modDef6237 from "module_6237" /* 6237 */;
import _modDef6238 from "module_6238" /* 6238 */;
import _modDef6239 from "module_6239" /* 6239 */;
import _modDef6240 from "module_6240" /* 6240 */;
import _modDef6241 from "module_6241" /* 6241 */;
import _modDef6242 from "module_6242" /* 6242 */;
import _modDef6243 from "module_6243" /* 6243 */;
import _modDef6244 from "module_6244" /* 6244 */;
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
    return _modDef6235;
  } else if (1 === cardId) {
    return _modDef6236;
  } else if (2 === cardId) {
    return _modDef6237;
  } else if (3 === cardId) {
    return _modDef6238;
  } else if (4 === cardId) {
    return _modDef6239;
  } else if (5 === cardId) {
    return _modDef6240;
  } else if (6 === cardId) {
    return _modDef6241;
  } else if (7 === cardId) {
    return _modDef6242;
  } else if (8 === cardId) {
    return _modDef6243;
  } else {
    return _modDef6244;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}