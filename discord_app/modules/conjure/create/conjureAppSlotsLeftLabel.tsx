// === Module 18702: conjureAppSlotsLeftLabel ===

// Module 18702 (conjureAppSlotsLeftLabel)
import util from "util" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  if (0 === count) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef4192.s28pGG);
  } else {
    const intl = util.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef4192.Wy5aK4, obj);
  }
  return stringResult;
}