// === Module 11263: getFavoritesAddButtonLabel ===

// Module 11263 (getFavoritesAddButtonLabel)
import util from "util" /* 1115 */;
import _modDef3324 from "module_3324" /* 3324 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3324.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3324.xKXcSu);
  }
  return formatToPlainStringResult;
};