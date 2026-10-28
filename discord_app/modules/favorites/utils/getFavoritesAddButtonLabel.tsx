// === Module 14090: getFavoritesAddButtonLabel ===

// Module 14090 (getFavoritesAddButtonLabel)
import util from "util" /* 1125 */;
import _modDef3445 from "module_3445" /* 3445 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3445.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3445.xKXcSu);
  }
  return formatToPlainStringResult;
};