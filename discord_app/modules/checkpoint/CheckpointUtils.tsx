// === Module 8263: CheckpointUtils ===

// Module 8263 (CheckpointUtils)
import util from "util" /* 1115 */;
import TimeUtils from "TimeUtils" /* 4668 */;
import notification_center_getTimestampString from "notification_center/getTimestampString" /* 7747 */;
import _modDef8264 from "module_8264" /* 8264 */;
import _modDef8265 from "module_8265" /* 8265 */;
import _modDef8266 from "module_8266" /* 8266 */;
import _modDef8267 from "module_8267" /* 8267 */;
import _modDef8268 from "module_8268" /* 8268 */;
import _modDef8269 from "module_8269" /* 8269 */;
import _modDef8270 from "module_8270" /* 8270 */;
import _modDef8271 from "module_8271" /* 8271 */;
import _modDef8272 from "module_8272" /* 8272 */;
import _modDef8273 from "module_8273" /* 8273 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  const timeAndUnit = TimeUtils.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const time2 = notification_center_getTimestampString.getAbbreviatedFormatter();
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
    return _modDef8264;
  } else if (1 === cardId) {
    return _modDef8265;
  } else if (2 === cardId) {
    return _modDef8266;
  } else if (3 === cardId) {
    return _modDef8267;
  } else if (4 === cardId) {
    return _modDef8268;
  } else if (5 === cardId) {
    return _modDef8269;
  } else if (6 === cardId) {
    return _modDef8270;
  } else if (7 === cardId) {
    return _modDef8271;
  } else if (8 === cardId) {
    return _modDef8272;
  } else {
    return _modDef8273;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};