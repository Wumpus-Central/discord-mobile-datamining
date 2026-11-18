// === Module 5886: CheckpointUtils ===

// Module 5886 (CheckpointUtils)
import util from "util" /* 1113 */;
import TimeUtils from "TimeUtils" /* 5572 */;
import getTimestampString from "getTimestampString" /* 5887 */;
import _modDef5888 from "module_5888" /* 5888 */;
import _modDef5889 from "module_5889" /* 5889 */;
import _modDef5890 from "module_5890" /* 5890 */;
import _modDef5891 from "module_5891" /* 5891 */;
import _modDef5892 from "module_5892" /* 5892 */;
import _modDef5893 from "module_5893" /* 5893 */;
import _modDef5894 from "module_5894" /* 5894 */;
import _modDef5895 from "module_5895" /* 5895 */;
import _modDef5896 from "module_5896" /* 5896 */;
import _modDef5897 from "module_5897" /* 5897 */;
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
    return _modDef5888;
  } else if (1 === cardId) {
    return _modDef5889;
  } else if (2 === cardId) {
    return _modDef5890;
  } else if (3 === cardId) {
    return _modDef5891;
  } else if (4 === cardId) {
    return _modDef5892;
  } else if (5 === cardId) {
    return _modDef5893;
  } else if (6 === cardId) {
    return _modDef5894;
  } else if (7 === cardId) {
    return _modDef5895;
  } else if (8 === cardId) {
    return _modDef5896;
  } else {
    return _modDef5897;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}