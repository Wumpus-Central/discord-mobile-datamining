// === Module 11626: conjureAppSlotsLeftLabel ===

// Module 11626 (conjureAppSlotsLeftLabel)
import util from "util" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export const conjureAppSlotsLeftLabel = function conjureAppSlotsLeftLabel(count) {
  if (0 === count) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3883.s28pGG);
  } else {
    const intl = util.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3883.Wy5aK4, obj);
  }
  return stringResult;
};