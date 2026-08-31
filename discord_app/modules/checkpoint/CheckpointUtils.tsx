// discord_app/modules/checkpoint/CheckpointUtils.tsx
import set from "../../../_runtime/00002_set.js";
import sleep from "../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import getDurationString from "../notification_center/getTimestampString.tsx";
import metadataDefault from "../../../discord_assets/assets/checkpoint/card-plant.png.js";
import metadataDefault2 from "../../../discord_assets/assets/checkpoint/card-donut.png.js";
import metadataDefault3 from "../../../discord_assets/assets/checkpoint/card-capybara.png.js";
import metadataDefault4 from "../../../discord_assets/assets/checkpoint/card-disco.png.js";
import metadataDefault5 from "../../../discord_assets/assets/checkpoint/card-origami.png.js";
import metadataDefault6 from "../../../discord_assets/assets/checkpoint/card-snail.png.js";
import metadataDefault7 from "../../../discord_assets/assets/checkpoint/card-duck.png.js";
import metadataDefault8 from "../../../discord_assets/assets/checkpoint/card-banana.png.js";
import metadataDefault9 from "../../../discord_assets/assets/checkpoint/card-cat.png.js";
import metadataDefault10 from "../../../discord_assets/assets/checkpoint/card-cassette.png.js";

const items = [sleep.TimeUnits.HOURS, sleep.TimeUnits.MINUTES];
const result = set.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let obj = sleep;
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const abbreviatedFormatter = getDurationString.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1236).intl;
    return intl3.formatToPlainString(abbreviatedFormatter.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === tmp(4526).TimeUnits.HOURS) {
      const intl2 = tmp(1236).intl;
      obj = { hours: null };
      obj[0] = rounded;
      let formatToPlainStringResult = intl2.formatToPlainString(abbreviatedFormatter.hours, obj);
    } else {
      const intl = tmp(1236).intl;
      obj = { minutes: null };
      obj[0] = rounded;
      formatToPlainStringResult = intl.formatToPlainString(abbreviatedFormatter.minutes, obj);
    }
    return formatToPlainStringResult;
  }
  const obj2 = getDurationString;
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return metadataDefault;
  } else if (1 === cardId) {
    return metadataDefault2;
  } else if (2 === cardId) {
    return metadataDefault3;
  } else if (3 === cardId) {
    return metadataDefault4;
  } else if (4 === cardId) {
    return metadataDefault5;
  } else if (5 === cardId) {
    return metadataDefault6;
  } else if (6 === cardId) {
    return metadataDefault7;
  } else if (7 === cardId) {
    return metadataDefault8;
  } else if (8 === cardId) {
    return metadataDefault9;
  } else {
    return metadataDefault10;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};