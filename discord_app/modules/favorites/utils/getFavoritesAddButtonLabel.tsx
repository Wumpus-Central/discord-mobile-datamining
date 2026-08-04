// discord_app/modules/favorites/utils/getFavoritesAddButtonLabel.tsx
const result = require("set").fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const obj = { count: null };
    obj[0] = length;
    let formatToPlainStringResult = intl2.formatToPlainString(importDefault(2971).LbCa8x, obj);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(importDefault(2971).xKXcSu);
  }
  return formatToPlainStringResult;
};