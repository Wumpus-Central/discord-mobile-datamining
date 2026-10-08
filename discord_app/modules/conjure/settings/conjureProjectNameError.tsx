// === Module 16875: conjureProjectNameError ===

// Module 16875 (conjureProjectNameError)
import util from "util" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ConjureTypes from "ConjureTypes" /* 6933 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureProjectNameError.tsx");

export const conjureProjectNameError = function conjureProjectNameError(trimmed) {
  if ("" === trimmed) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3827.l669D8);
  } else {
    stringResult = null;
    if (trimmed.length < ConjureTypes.MIN_PROJECT_NAME_LENGTH) {
      const intl = util.intl;
      const range = { min: ConjureTypes.MIN_PROJECT_NAME_LENGTH, max: ConjureTypes.MAX_PROJECT_NAME_LENGTH };
      stringResult = intl.formatToPlainString(util.t.ONSqYd, range);
    }
  }
  return stringResult;
};