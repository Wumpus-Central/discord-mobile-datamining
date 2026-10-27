// === Module 12545: conjureAppSlotsLeftLabel ===

// Module 12545 (conjureAppSlotsLeftLabel)
import util from "util" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export const conjureAppSlotsLeftLabel = function conjureAppSlotsLeftLabel(count) {
  if (0 === count) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3831.s28pGG);
  } else {
    const intl = util.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3831.Wy5aK4, obj);
  }
  return stringResult;
};