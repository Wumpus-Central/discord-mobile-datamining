// === Module 13635: getFavoritesAddButtonLabel ===

// Module 13635 (getFavoritesAddButtonLabel)
import util from "util" /* 1128 */;
import _modDef3465 from "module_3465" /* 3465 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3465.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3465.xKXcSu);
  }
  return formatToPlainStringResult;
};