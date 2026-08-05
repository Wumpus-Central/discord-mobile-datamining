// discord_app/modules/favorites/utils/getFavoritesAddButtonLabel.tsx
const result = require("set").fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const obj = { count: null };
    obj[0] = length;
    let formatToPlainStringResult = intl2.formatToPlainString(require("../intl/FavoritesGuild.messages.js").LbCa8x, obj);
  } else {
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(require("../intl/FavoritesGuild.messages.js").xKXcSu);
  }
  return formatToPlainStringResult;
};