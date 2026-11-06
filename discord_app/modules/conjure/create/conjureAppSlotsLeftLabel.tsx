// === Module 13194: conjureAppSlotsLeftLabel ===

// Module 13194 (conjureAppSlotsLeftLabel)
import util from "util" /* 1113 */;
import _modDef4024 from "module_4024" /* 4024 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  if (0 === count) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef4024.s28pGG);
  } else {
    const intl = util.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef4024.Wy5aK4, obj);
  }
  return stringResult;
}