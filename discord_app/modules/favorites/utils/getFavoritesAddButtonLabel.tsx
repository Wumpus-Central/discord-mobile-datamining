// === Module 14631: getFavoritesAddButtonLabel ===

// Module 14631 (getFavoritesAddButtonLabel)
import util from "util" /* 1113 */;
import _modDef3577 from "module_3577" /* 3577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3577.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3577.xKXcSu);
  }
  return formatToPlainStringResult;
}