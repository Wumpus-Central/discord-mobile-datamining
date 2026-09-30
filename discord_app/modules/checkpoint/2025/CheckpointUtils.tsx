// === Module 5099: CheckpointUtils ===

// Module 5099 (CheckpointUtils)
import util from "util" /* 1115 */;
import TimeUtils from "TimeUtils" /* 4895 */;
import getTimestampString from "getTimestampString" /* 5100 */;
import _modDef5101 from "module_5101" /* 5101 */;
import _modDef5102 from "module_5102" /* 5102 */;
import _modDef5103 from "module_5103" /* 5103 */;
import _modDef5104 from "module_5104" /* 5104 */;
import _modDef5105 from "module_5105" /* 5105 */;
import _modDef5106 from "module_5106" /* 5106 */;
import _modDef5107 from "module_5107" /* 5107 */;
import _modDef5108 from "module_5108" /* 5108 */;
import _modDef5109 from "module_5109" /* 5109 */;
import _modDef5110 from "module_5110" /* 5110 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/2025/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
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
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef5101;
  } else if (1 === cardId) {
    return _modDef5102;
  } else if (2 === cardId) {
    return _modDef5103;
  } else if (3 === cardId) {
    return _modDef5104;
  } else if (4 === cardId) {
    return _modDef5105;
  } else if (5 === cardId) {
    return _modDef5106;
  } else if (6 === cardId) {
    return _modDef5107;
  } else if (7 === cardId) {
    return _modDef5108;
  } else if (8 === cardId) {
    return _modDef5109;
  } else {
    return _modDef5110;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
};