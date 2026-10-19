// === Module 5979: CheckpointUtils ===

// Module 5979 (CheckpointUtils)
import util from "util" /* 1128 */;
import TimeUtils from "TimeUtils" /* 5684 */;
import getTimestampString from "getTimestampString" /* 5980 */;
import _modDef5981 from "module_5981" /* 5981 */;
import _modDef5982 from "module_5982" /* 5982 */;
import _modDef5983 from "module_5983" /* 5983 */;
import _modDef5984 from "module_5984" /* 5984 */;
import _modDef5985 from "module_5985" /* 5985 */;
import _modDef5986 from "module_5986" /* 5986 */;
import _modDef5987 from "module_5987" /* 5987 */;
import _modDef5988 from "module_5988" /* 5988 */;
import _modDef5989 from "module_5989" /* 5989 */;
import _modDef5990 from "module_5990" /* 5990 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/2025/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(rounded) {
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
};
export const getAccessibleVoiceDurationString = function getAccessibleVoiceDurationString(rounded) {
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
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef5981;
  } else if (1 === cardId) {
    return _modDef5982;
  } else if (2 === cardId) {
    return _modDef5983;
  } else if (3 === cardId) {
    return _modDef5984;
  } else if (4 === cardId) {
    return _modDef5985;
  } else if (5 === cardId) {
    return _modDef5986;
  } else if (6 === cardId) {
    return _modDef5987;
  } else if (7 === cardId) {
    return _modDef5988;
  } else if (8 === cardId) {
    return _modDef5989;
  } else {
    return _modDef5990;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
};