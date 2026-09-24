// === Module 5062: CheckpointUtils ===

// Module 5062 (CheckpointUtils)
import util from "util" /* 1115 */;
import TimeUtils from "TimeUtils" /* 4858 */;
import getTimestampString from "getTimestampString" /* 5063 */;
import _modDef5064 from "module_5064" /* 5064 */;
import _modDef5065 from "module_5065" /* 5065 */;
import _modDef5066 from "module_5066" /* 5066 */;
import _modDef5067 from "module_5067" /* 5067 */;
import _modDef5068 from "module_5068" /* 5068 */;
import _modDef5069 from "module_5069" /* 5069 */;
import _modDef5070 from "module_5070" /* 5070 */;
import _modDef5071 from "module_5071" /* 5071 */;
import _modDef5072 from "module_5072" /* 5072 */;
import _modDef5073 from "module_5073" /* 5073 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

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
    return _modDef5064;
  } else if (1 === cardId) {
    return _modDef5065;
  } else if (2 === cardId) {
    return _modDef5066;
  } else if (3 === cardId) {
    return _modDef5067;
  } else if (4 === cardId) {
    return _modDef5068;
  } else if (5 === cardId) {
    return _modDef5069;
  } else if (6 === cardId) {
    return _modDef5070;
  } else if (7 === cardId) {
    return _modDef5071;
  } else if (8 === cardId) {
    return _modDef5072;
  } else {
    return _modDef5073;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
};