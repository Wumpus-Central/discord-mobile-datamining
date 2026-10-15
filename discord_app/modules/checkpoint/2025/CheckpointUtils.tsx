// === Module 5507: CheckpointUtils ===

// Module 5507 (CheckpointUtils)
import util from "util" /* 1126 */;
import TimeUtils from "TimeUtils" /* 5180 */;
import getTimestampString from "getTimestampString" /* 5508 */;
import _modDef5509 from "module_5509" /* 5509 */;
import _modDef5510 from "module_5510" /* 5510 */;
import _modDef5511 from "module_5511" /* 5511 */;
import _modDef5512 from "module_5512" /* 5512 */;
import _modDef5513 from "module_5513" /* 5513 */;
import _modDef5514 from "module_5514" /* 5514 */;
import _modDef5515 from "module_5515" /* 5515 */;
import _modDef5516 from "module_5516" /* 5516 */;
import _modDef5517 from "module_5517" /* 5517 */;
import _modDef5518 from "module_5518" /* 5518 */;
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
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef5509;
  } else if (1 === cardId) {
    return _modDef5510;
  } else if (2 === cardId) {
    return _modDef5511;
  } else if (3 === cardId) {
    return _modDef5512;
  } else if (4 === cardId) {
    return _modDef5513;
  } else if (5 === cardId) {
    return _modDef5514;
  } else if (6 === cardId) {
    return _modDef5515;
  } else if (7 === cardId) {
    return _modDef5516;
  } else if (8 === cardId) {
    return _modDef5517;
  } else {
    return _modDef5518;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
};