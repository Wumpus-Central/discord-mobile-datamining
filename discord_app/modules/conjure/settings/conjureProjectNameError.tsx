// === Module 14429: conjureProjectNameError ===

// Module 14429 (conjureProjectNameError)
import util from "util" /* 1113 */;
import _modDef4133 from "module_4133" /* 4133 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7026 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureProjectNameError.tsx");

export function conjureProjectNameError(trimmed) {
  if ("" === trimmed) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef4133.l669D8);
  } else {
    stringResult = null;
    if (trimmed.length < ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH) {
      const intl = util.intl;
      const range = { min: ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH, max: ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH };
      stringResult = intl.formatToPlainString(util.t.ONSqYd, range);
    }
  }
  return stringResult;
}