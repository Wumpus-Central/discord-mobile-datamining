// === Module 18716: conjureAppSlotsLeftLabel ===

// Module 18716 (conjureAppSlotsLeftLabel)
import util from "util" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  if (0 === count) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef4121.s28pGG);
  } else {
    const intl = util.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef4121.Wy5aK4, obj);
  }
  return stringResult;
}