// === Module 15017: conjureAppSlotsLeftLabel ===

// Module 15017 (conjureAppSlotsLeftLabel)
import util from "util" /* 1113 */;
import _modDef4133 from "module_4133" /* 4133 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  if (0 === count) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef4133.s28pGG);
  } else {
    const intl = util.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef4133.Wy5aK4, obj);
  }
  return stringResult;
}