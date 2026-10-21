// === Module 6004: CheckpointUtils ===

// Module 6004 (CheckpointUtils)
import util from "util" /* 1128 */;
import TimeUtils from "TimeUtils" /* 5704 */;
import getTimestampString from "getTimestampString" /* 6005 */;
import _modDef6006 from "module_6006" /* 6006 */;
import _modDef6007 from "module_6007" /* 6007 */;
import _modDef6008 from "module_6008" /* 6008 */;
import _modDef6009 from "module_6009" /* 6009 */;
import _modDef6010 from "module_6010" /* 6010 */;
import _modDef6011 from "module_6011" /* 6011 */;
import _modDef6012 from "module_6012" /* 6012 */;
import _modDef6013 from "module_6013" /* 6013 */;
import _modDef6014 from "module_6014" /* 6014 */;
import _modDef6015 from "module_6015" /* 6015 */;
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
    return _modDef6006;
  } else if (1 === cardId) {
    return _modDef6007;
  } else if (2 === cardId) {
    return _modDef6008;
  } else if (3 === cardId) {
    return _modDef6009;
  } else if (4 === cardId) {
    return _modDef6010;
  } else if (5 === cardId) {
    return _modDef6011;
  } else if (6 === cardId) {
    return _modDef6012;
  } else if (7 === cardId) {
    return _modDef6013;
  } else if (8 === cardId) {
    return _modDef6014;
  } else {
    return _modDef6015;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
};