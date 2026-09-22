// === Module 8416: CheckpointUtils ===

// Module 8416 (CheckpointUtils)
import util from "util" /* 1115 */;
import TimeUtils from "TimeUtils" /* 4786 */;
import notification_center_getTimestampString from "notification_center/getTimestampString" /* 7881 */;
import _modDef8417 from "module_8417" /* 8417 */;
import _modDef8418 from "module_8418" /* 8418 */;
import _modDef8419 from "module_8419" /* 8419 */;
import _modDef8420 from "module_8420" /* 8420 */;
import _modDef8421 from "module_8421" /* 8421 */;
import _modDef8422 from "module_8422" /* 8422 */;
import _modDef8423 from "module_8423" /* 8423 */;
import _modDef8424 from "module_8424" /* 8424 */;
import _modDef8425 from "module_8425" /* 8425 */;
import _modDef8426 from "module_8426" /* 8426 */;
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
    return _modDef8417;
  } else if (1 === cardId) {
    return _modDef8418;
  } else if (2 === cardId) {
    return _modDef8419;
  } else if (3 === cardId) {
    return _modDef8420;
  } else if (4 === cardId) {
    return _modDef8421;
  } else if (5 === cardId) {
    return _modDef8422;
  } else if (6 === cardId) {
    return _modDef8423;
  } else if (7 === cardId) {
    return _modDef8424;
  } else if (8 === cardId) {
    return _modDef8425;
  } else {
    return _modDef8426;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};