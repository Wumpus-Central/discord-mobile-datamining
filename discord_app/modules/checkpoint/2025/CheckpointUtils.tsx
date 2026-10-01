// discord_app/modules/checkpoint/2025/CheckpointUtils.tsx
import util from "../../../intl/index.native.tsx";
import TimeUtils from "../../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import getTimestampString from "../../notification_center/getTimestampString.tsx";
import _modDef5080 from "../../../../discord_assets/assets/checkpoint/card-plant.png.js";
import _modDef5081 from "../../../../discord_assets/assets/checkpoint/card-donut.png.js";
import _modDef5082 from "../../../../discord_assets/assets/checkpoint/card-capybara.png.js";
import _modDef5083 from "../../../../discord_assets/assets/checkpoint/card-disco.png.js";
import _modDef5084 from "../../../../discord_assets/assets/checkpoint/card-origami.png.js";
import _modDef5085 from "../../../../discord_assets/assets/checkpoint/card-snail.png.js";
import _modDef5086 from "../../../../discord_assets/assets/checkpoint/card-duck.png.js";
import _modDef5087 from "../../../../discord_assets/assets/checkpoint/card-banana.png.js";
import _modDef5088 from "../../../../discord_assets/assets/checkpoint/card-cat.png.js";
import _modDef5089 from "../../../../discord_assets/assets/checkpoint/card-cassette.png.js";
import size from "../../../../_runtime/metro/00002__.js";

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
    return _modDef5080;
  } else if (1 === cardId) {
    return _modDef5081;
  } else if (2 === cardId) {
    return _modDef5082;
  } else if (3 === cardId) {
    return _modDef5083;
  } else if (4 === cardId) {
    return _modDef5084;
  } else if (5 === cardId) {
    return _modDef5085;
  } else if (6 === cardId) {
    return _modDef5086;
  } else if (7 === cardId) {
    return _modDef5087;
  } else if (8 === cardId) {
    return _modDef5088;
  } else {
    return _modDef5089;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(powerLevelPercentile) {
  return Math.min(Math.max(Math.round(powerLevelPercentile / 10), 1), 9);
};
