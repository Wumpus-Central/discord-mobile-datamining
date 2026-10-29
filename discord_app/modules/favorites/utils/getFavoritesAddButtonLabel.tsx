// === Module 14323: getFavoritesAddButtonLabel ===

// Module 14323 (getFavoritesAddButtonLabel)
import util from "util" /* 1125 */;
import _modDef3446 from "module_3446" /* 3446 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3446.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3446.xKXcSu);
  }
  return formatToPlainStringResult;
}