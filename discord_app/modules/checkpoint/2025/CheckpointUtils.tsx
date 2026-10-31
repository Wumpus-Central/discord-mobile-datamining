// discord_app/modules/checkpoint/2025/CheckpointUtils.tsx
import util from "../../../intl/index.native.tsx";
import TimeUtils from "../../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import getTimestampString from "../../notification_center/getTimestampString.tsx";
import _modDef6077 from "../../../../discord_assets/assets/checkpoint/card-plant.png.js";
import _modDef6078 from "../../../../discord_assets/assets/checkpoint/card-donut.png.js";
import _modDef6079 from "../../../../discord_assets/assets/checkpoint/card-capybara.png.js";
import _modDef6080 from "../../../../discord_assets/assets/checkpoint/card-disco.png.js";
import _modDef6081 from "../../../../discord_assets/assets/checkpoint/card-origami.png.js";
import _modDef6082 from "../../../../discord_assets/assets/checkpoint/card-snail.png.js";
import _modDef6083 from "../../../../discord_assets/assets/checkpoint/card-duck.png.js";
import _modDef6084 from "../../../../discord_assets/assets/checkpoint/card-banana.png.js";
import _modDef6085 from "../../../../discord_assets/assets/checkpoint/card-cat.png.js";
import _modDef6086 from "../../../../discord_assets/assets/checkpoint/card-cassette.png.js";
import size from "../../../../_runtime/metro/00002__.js";

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/2025/CheckpointUtils.tsx");

export function getVoiceDurationString(totalVoiceMinutes) {
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
}
export function getAccessibleVoiceDurationString(rounded) {
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
}
export function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef6077;
  } else if (1 === cardId) {
    return _modDef6078;
  } else if (2 === cardId) {
    return _modDef6079;
  } else if (3 === cardId) {
    return _modDef6080;
  } else if (4 === cardId) {
    return _modDef6081;
  } else if (5 === cardId) {
    return _modDef6082;
  } else if (6 === cardId) {
    return _modDef6083;
  } else if (7 === cardId) {
    return _modDef6084;
  } else if (8 === cardId) {
    return _modDef6085;
  } else {
    return _modDef6086;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}
