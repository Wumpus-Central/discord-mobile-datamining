// === Module 5857: CheckpointUtils ===

// Module 5857 (CheckpointUtils)
import util from "util" /* 1113 */;
import TimeUtils from "TimeUtils" /* 5541 */;
import getTimestampString from "getTimestampString" /* 5858 */;
import _modDef5859 from "module_5859" /* 5859 */;
import _modDef5860 from "module_5860" /* 5860 */;
import _modDef5861 from "module_5861" /* 5861 */;
import _modDef5862 from "module_5862" /* 5862 */;
import _modDef5863 from "module_5863" /* 5863 */;
import _modDef5864 from "module_5864" /* 5864 */;
import _modDef5865 from "module_5865" /* 5865 */;
import _modDef5866 from "module_5866" /* 5866 */;
import _modDef5867 from "module_5867" /* 5867 */;
import _modDef5868 from "module_5868" /* 5868 */;
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
    return _modDef5859;
  } else if (1 === cardId) {
    return _modDef5860;
  } else if (2 === cardId) {
    return _modDef5861;
  } else if (3 === cardId) {
    return _modDef5862;
  } else if (4 === cardId) {
    return _modDef5863;
  } else if (5 === cardId) {
    return _modDef5864;
  } else if (6 === cardId) {
    return _modDef5865;
  } else if (7 === cardId) {
    return _modDef5866;
  } else if (8 === cardId) {
    return _modDef5867;
  } else {
    return _modDef5868;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}