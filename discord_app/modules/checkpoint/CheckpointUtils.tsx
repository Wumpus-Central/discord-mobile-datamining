// === Module 8272: CheckpointUtils ===

// Module 8272 (CheckpointUtils)
import util from "util" /* 1115 */;
import TimeUtils from "TimeUtils" /* 4667 */;
import notification_center_getTimestampString from "notification_center/getTimestampString" /* 7750 */;
import _modDef8273 from "module_8273" /* 8273 */;
import _modDef8274 from "module_8274" /* 8274 */;
import _modDef8275 from "module_8275" /* 8275 */;
import _modDef8276 from "module_8276" /* 8276 */;
import _modDef8277 from "module_8277" /* 8277 */;
import _modDef8278 from "module_8278" /* 8278 */;
import _modDef8279 from "module_8279" /* 8279 */;
import _modDef8280 from "module_8280" /* 8280 */;
import _modDef8281 from "module_8281" /* 8281 */;
import _modDef8282 from "module_8282" /* 8282 */;
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
    return _modDef8273;
  } else if (1 === cardId) {
    return _modDef8274;
  } else if (2 === cardId) {
    return _modDef8275;
  } else if (3 === cardId) {
    return _modDef8276;
  } else if (4 === cardId) {
    return _modDef8277;
  } else if (5 === cardId) {
    return _modDef8278;
  } else if (6 === cardId) {
    return _modDef8279;
  } else if (7 === cardId) {
    return _modDef8280;
  } else if (8 === cardId) {
    return _modDef8281;
  } else {
    return _modDef8282;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};