// === Module 12166: conjureProjectNameError ===

// Module 12166 (conjureProjectNameError)
import util from "util" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6775 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureProjectNameError.tsx");

export const conjureProjectNameError = function conjureProjectNameError(trimmed) {
  if ("" === trimmed) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3831.l669D8);
  } else {
    stringResult = null;
    if (trimmed.length < ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH) {
      const intl = util.intl;
      const range = { min: ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH, max: ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH };
      stringResult = intl.formatToPlainString(util.t.ONSqYd, range);
    }
  }
  return stringResult;
};