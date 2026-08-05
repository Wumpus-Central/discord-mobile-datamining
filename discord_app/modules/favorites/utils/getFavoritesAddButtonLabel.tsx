import { getSystemLocale } from "../../../intl/index.native.tsx";
import { messagesProxy } from "../intl/FavoritesGuild.messages.js";
// discord_app/modules/favorites/utils/getFavoritesAddButtonLabel.tsx
const result = require("set").fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    const obj = { count: null };
    obj[0] = length;
    let formatToPlainStringResult = intl2.formatToPlainString(messagesProxy.LbCa8x, obj);
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(messagesProxy.xKXcSu);
  }
  return formatToPlainStringResult;
};