// === Module 15050: getFavoritesAddButtonLabel ===

// Module 15050 (getFavoritesAddButtonLabel)
import util from "util" /* 1113 */;
import _modDef3629 from "module_3629" /* 3629 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3629.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3629.xKXcSu);
  }
  return formatToPlainStringResult;
}