// === Module 11455: conjureCopyDefaultName ===

// Module 11455 (conjureCopyDefaultName)
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6935 */;
import size from "module_2" /* 2 */;

const re3 = /[\uD800-\uDBFF]$/;
const result = size.fileFinishedImporting("modules/conjure/remix/conjureCopyDefaultName.tsx");

export default function conjureCopyDefaultName(projectName) {
  const intl = util.intl;
  const bound = Math.max(0, ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH - intl.formatToPlainString(_modDef4245.F6fHag, { projectName: "" }).length);
  if (projectName.length <= bound) {
    const intl3 = util.intl;
    const obj = { projectName };
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef4245.F6fHag, obj);
  } else {
    const replaced = projectName.slice(0, bound).replace(re3, "");
    const str = projectName.slice(0, bound);
    const intl2 = util.intl;
    const obj2 = { projectName: replaced.trimEnd() };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef4245.F6fHag, obj2);
    const trimEndResult = replaced.trimEnd();
  }
  return formatToPlainStringResult;
};