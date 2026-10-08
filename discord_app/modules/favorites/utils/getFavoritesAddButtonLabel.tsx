// === Module 12702: getFavoritesAddButtonLabel ===

// Module 12702 (getFavoritesAddButtonLabel)
import util from "util" /* 1126 */;
import _modDef3439 from "module_3439" /* 3439 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3439.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3439.xKXcSu);
  }
  return formatToPlainStringResult;
};