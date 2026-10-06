// === Module 10740: getFavoritesAddButtonLabel ===

// Module 10740 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1126 */;
import _modDef3395 from "module_3395" /* 3395 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3395.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3395.xKXcSu);
  }
  return formatToPlainStringResult;
};