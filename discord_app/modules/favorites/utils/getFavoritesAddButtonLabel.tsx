// === Module 12340: getFavoritesAddButtonLabel ===

// Module 12340 (getFavoritesAddButtonLabel)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 3083 */;

const result = set.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = getSystemLocale.intl;
    const obj = { count: null };
    obj[0] = length;
    let formatToPlainStringResult = intl2.formatToPlainString(messagesProxyDefault.LbCa8x, obj);
  } else {
    const intl = getSystemLocale.intl;
    formatToPlainStringResult = intl.string(messagesProxyDefault.xKXcSu);
  }
  return formatToPlainStringResult;
};