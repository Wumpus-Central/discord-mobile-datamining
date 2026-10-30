// === Module 14353: getFavoritesAddButtonLabel ===

// Module 14353 (getFavoritesAddButtonLabel)
import util from "util" /* 1114 */;
import _modDef3447 from "module_3447" /* 3447 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3447.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3447.xKXcSu);
  }
  return formatToPlainStringResult;
}