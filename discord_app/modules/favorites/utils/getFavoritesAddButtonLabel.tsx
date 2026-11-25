// === Module 11492: getFavoritesAddButtonLabel ===

// Module 11492 (getFavoritesAddButtonLabel)
import util from "util" /* 1112 */;
import _modDef3856 from "module_3856" /* 3856 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3856.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3856.xKXcSu);
  }
  return formatToPlainStringResult;
}