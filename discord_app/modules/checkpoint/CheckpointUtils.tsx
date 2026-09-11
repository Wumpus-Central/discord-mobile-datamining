// discord_app/modules/checkpoint/CheckpointUtils.tsx
import util from "../../intl/index.native.tsx";
import TimeUtils from "../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import notification_center_getTimestampString from "../notification_center/getTimestampString.tsx";
import _modDef8229 from "../../../discord_assets/assets/checkpoint/card-plant.png.js";
import _modDef8230 from "../../../discord_assets/assets/checkpoint/card-donut.png.js";
import _modDef8231 from "../../../discord_assets/assets/checkpoint/card-capybara.png.js";
import _modDef8232 from "../../../discord_assets/assets/checkpoint/card-disco.png.js";
import _modDef8233 from "../../../discord_assets/assets/checkpoint/card-origami.png.js";
import _modDef8234 from "../../../discord_assets/assets/checkpoint/card-snail.png.js";
import _modDef8235 from "../../../discord_assets/assets/checkpoint/card-duck.png.js";
import _modDef8236 from "../../../discord_assets/assets/checkpoint/card-banana.png.js";
import _modDef8237 from "../../../discord_assets/assets/checkpoint/card-cat.png.js";
import _modDef8238 from "../../../discord_assets/assets/checkpoint/card-cassette.png.js";
import size from "../../../_runtime/metro/00002__.js";

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let obj = TimeUtils;
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
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
      obj = { hours: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj);
    } else {
      const intl = util.intl;
      obj = { minutes: rounded };
      formatToPlainStringResult = intl.formatToPlainString(time2.minutes, obj);
    }
    return formatToPlainStringResult;
  }
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef8229;
  } else if (1 === cardId) {
    return _modDef8230;
  } else if (2 === cardId) {
    return _modDef8231;
  } else if (3 === cardId) {
    return _modDef8232;
  } else if (4 === cardId) {
    return _modDef8233;
  } else if (5 === cardId) {
    return _modDef8234;
  } else if (6 === cardId) {
    return _modDef8235;
  } else if (7 === cardId) {
    return _modDef8236;
  } else if (8 === cardId) {
    return _modDef8237;
  } else {
    return _modDef8238;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
