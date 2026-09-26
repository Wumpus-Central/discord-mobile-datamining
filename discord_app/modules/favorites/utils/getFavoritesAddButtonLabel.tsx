// === Module 10460: getFavoritesAddButtonLabel ===

// Module 10460 (getFavoritesAddButtonLabel)
import util from "util" /* 1115 */;
import _modDef3361 from "module_3361" /* 3361 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3361.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3361.xKXcSu);
  }
  return formatToPlainStringResult;
};