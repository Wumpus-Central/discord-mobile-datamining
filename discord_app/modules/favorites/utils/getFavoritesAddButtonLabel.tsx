// === Module 13884: getFavoritesAddButtonLabel ===

// Module 13884 (getFavoritesAddButtonLabel)
import util from "util" /* 1112 */;
import _modDef3802 from "module_3802" /* 3802 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3802.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3802.xKXcSu);
  }
  return formatToPlainStringResult;
}