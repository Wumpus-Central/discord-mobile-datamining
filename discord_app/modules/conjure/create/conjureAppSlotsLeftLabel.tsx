// === Module 13217: conjureAppSlotsLeftLabel ===

// Module 13217 (conjureAppSlotsLeftLabel)
import util from "util" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  if (0 === count) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef4026.s28pGG);
  } else {
    const intl = util.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef4026.Wy5aK4, obj);
  }
  return stringResult;
}