// === Module 10997: getFavoritesAddButtonLabel ===

// Module 10997 (getFavoritesAddButtonLabel)
import util from "util" /* 1114 */;
import _modDef3225 from "module_3225" /* 3225 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3225.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3225.xKXcSu);
  }
  return formatToPlainStringResult;
};