// discord_app/modules/checkpoint/CheckpointUtils.tsx
import { metadata } from "../../../discord_assets/assets/checkpoint/card-banana.png.js";
import { metadata } from "../../../discord_assets/assets/checkpoint/card-capybara.png.js";
import { metadata } from "../../../discord_assets/assets/checkpoint/card-cassette.png.js";
import { metadata } from "../../../discord_assets/assets/checkpoint/card-cat.png.js";
import { metadata } from "../../../discord_assets/assets/checkpoint/card-disco.png.js";
import { metadata } from "../../../discord_assets/assets/checkpoint/card-donut.png.js";
import { metadata } from "../../../discord_assets/assets/checkpoint/card-duck.png.js";
import { metadata } from "../../../discord_assets/assets/checkpoint/card-origami.png.js";
import { metadata } from "../../../discord_assets/assets/checkpoint/card-plant.png.js";
import { metadata } from "../../../discord_assets/assets/checkpoint/card-snail.png.js";
import { sleep } from "../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import { getDurationString } from "../notification_center/getTimestampString.tsx";
const items = [require("sleep").TimeUnits.HOURS, require("sleep").TimeUnits.MINUTES];
const result = require("getSystemLocale").fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let time;
  let unit;
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
    if (unit === tmp(4330).TimeUnits.HOURS) {
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
    return metadata;
  } else if (1 === cardId) {
    return metadata;
  } else if (2 === cardId) {
    return metadata;
  } else if (3 === cardId) {
    return metadata;
  } else if (4 === cardId) {
    return metadata;
  } else if (5 === cardId) {
    return metadata;
  } else if (6 === cardId) {
    return metadata;
  } else if (7 === cardId) {
    return metadata;
  } else if (8 === cardId) {
    return metadata;
  } else {
    return metadata;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};