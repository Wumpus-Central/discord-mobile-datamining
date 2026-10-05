// discord_app/modules/checkpoint/2025/CheckpointUtils.tsx
import intl4 from "../../../intl/index.native.tsx";
import TimeUtils from "../../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import getTimestampString from "../../notification_center/getTimestampString.tsx";
import _modDef5126 from "../../../../discord_assets/assets/checkpoint/card-plant.png.js";
import _modDef5127 from "../../../../discord_assets/assets/checkpoint/card-donut.png.js";
import _modDef5128 from "../../../../discord_assets/assets/checkpoint/card-capybara.png.js";
import _modDef5129 from "../../../../discord_assets/assets/checkpoint/card-disco.png.js";
import _modDef5130 from "../../../../discord_assets/assets/checkpoint/card-origami.png.js";
import _modDef5131 from "../../../../discord_assets/assets/checkpoint/card-snail.png.js";
import _modDef5132 from "../../../../discord_assets/assets/checkpoint/card-duck.png.js";
import _modDef5133 from "../../../../discord_assets/assets/checkpoint/card-banana.png.js";
import _modDef5134 from "../../../../discord_assets/assets/checkpoint/card-cat.png.js";
import _modDef5135 from "../../../../discord_assets/assets/checkpoint/card-cassette.png.js";
import size from "../../../../_runtime/metro/00002__.js";

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/2025/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(rounded) {
  let time;
  let unit;
  const obj = TimeUtils;
  const timeAndUnit = obj.getTimeAndUnit(rounded, items);
  ({ time, unit } = timeAndUnit);
  const obj2 = getTimestampString;
  const time2 = obj2.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = intl4.intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    let formatToPlainStringResult;
    const _Math = Math;
    rounded = Math.round(time);
    if (unit === TimeUtils.TimeUnits.HOURS) {
      const intl2 = intl4.intl;
      const obj3 = { hours: rounded };
      formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj3);
    } else {
      const intl = intl4.intl;
      const obj4 = { minutes: rounded };
      formatToPlainStringResult = intl.formatToPlainString(time2.minutes, obj4);
    }
    return formatToPlainStringResult;
  }
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef5126;
  } else if (1 === cardId) {
    return _modDef5127;
  } else if (2 === cardId) {
    return _modDef5128;
  } else if (3 === cardId) {
    return _modDef5129;
  } else if (4 === cardId) {
    return _modDef5130;
  } else if (5 === cardId) {
    return _modDef5131;
  } else if (6 === cardId) {
    return _modDef5132;
  } else if (7 === cardId) {
    return _modDef5133;
  } else if (8 === cardId) {
    return _modDef5134;
  } else {
    return _modDef5135;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(powerLevelPercentile) {
  return Math.min(Math.max(Math.round(powerLevelPercentile / 10), 1), 9);
};
