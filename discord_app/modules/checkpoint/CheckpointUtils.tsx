// discord_app/modules/checkpoint/CheckpointUtils.tsx
const items = [require("sleep").TimeUnits.HOURS, require("sleep").TimeUnits.MINUTES];
const result = require("getSystemLocale").fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let time;
  let unit;
  let obj = require("../../../discord_common/js/packages/time-utils/TimeUtils.tsx") /* sleep */;
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const abbreviatedFormatter = require("../notification_center/getTimestampString.tsx") /* getDurationString */.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1236).intl;
    return intl3.formatToPlainString(abbreviatedFormatter.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === tmp(4360).TimeUnits.HOURS) {
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
  const obj2 = require("../notification_center/getTimestampString.tsx") /* getDurationString */;
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return require("../../../discord_assets/assets/checkpoint/card-plant.png.js");
  } else if (1 === cardId) {
    return require("../../../discord_assets/assets/checkpoint/card-donut.png.js");
  } else if (2 === cardId) {
    return require("../../../discord_assets/assets/checkpoint/card-capybara.png.js");
  } else if (3 === cardId) {
    return require("../../../discord_assets/assets/checkpoint/card-disco.png.js");
  } else if (4 === cardId) {
    return require("../../../discord_assets/assets/checkpoint/card-origami.png.js");
  } else if (5 === cardId) {
    return require("../../../discord_assets/assets/checkpoint/card-snail.png.js");
  } else if (6 === cardId) {
    return require("../../../discord_assets/assets/checkpoint/card-duck.png.js");
  } else if (7 === cardId) {
    return require("../../../discord_assets/assets/checkpoint/card-banana.png.js");
  } else if (8 === cardId) {
    return require("../../../discord_assets/assets/checkpoint/card-cat.png.js");
  } else {
    return require("../../../discord_assets/assets/checkpoint/card-cassette.png.js");
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};