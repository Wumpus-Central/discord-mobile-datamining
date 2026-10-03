// === Module 16560: vibegrationsAppSlotsLeftLabel ===

// Module 16560 (vibegrationsAppSlotsLeftLabel)
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsAppSlotsLeftLabel.tsx");

export const vibegrationsAppSlotsLeftLabel = function vibegrationsAppSlotsLeftLabel(count) {
  if (0 === count) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3723.JQU61N);
  } else {
    const intl = util.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3723["336dtK"], obj);
  }
  return stringResult;
};