// === Module 13691: getFavoritesAddButtonLabel ===

// Module 13691 (getFavoritesAddButtonLabel)
import util from "util" /* 1128 */;
import _modDef3402 from "module_3402" /* 3402 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3402.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3402.xKXcSu);
  }
  return formatToPlainStringResult;
};