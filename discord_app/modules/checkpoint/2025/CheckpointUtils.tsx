// === Module 6208: CheckpointUtils ===

// Module 6208 (CheckpointUtils)
import util from "util" /* 1113 */;
import TimeUtils from "TimeUtils" /* 5901 */;
import getTimestampString from "getTimestampString" /* 6209 */;
import _modDef6210 from "module_6210" /* 6210 */;
import _modDef6211 from "module_6211" /* 6211 */;
import _modDef6212 from "module_6212" /* 6212 */;
import _modDef6213 from "module_6213" /* 6213 */;
import _modDef6214 from "module_6214" /* 6214 */;
import _modDef6215 from "module_6215" /* 6215 */;
import _modDef6216 from "module_6216" /* 6216 */;
import _modDef6217 from "module_6217" /* 6217 */;
import _modDef6218 from "module_6218" /* 6218 */;
import _modDef6219 from "module_6219" /* 6219 */;
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
    return _modDef6210;
  } else if (1 === cardId) {
    return _modDef6211;
  } else if (2 === cardId) {
    return _modDef6212;
  } else if (3 === cardId) {
    return _modDef6213;
  } else if (4 === cardId) {
    return _modDef6214;
  } else if (5 === cardId) {
    return _modDef6215;
  } else if (6 === cardId) {
    return _modDef6216;
  } else if (7 === cardId) {
    return _modDef6217;
  } else if (8 === cardId) {
    return _modDef6218;
  } else {
    return _modDef6219;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}